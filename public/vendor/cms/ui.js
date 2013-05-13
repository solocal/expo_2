define([
    "handlebars",
    "cms/util",
    "cms/auth"
], function(Handlebars, Util, Auth)
{
    // helpers
    Handlebars.registerHelper("page", function(options) {

        // run the current template and store the HTML onto the model
        this.content = options.fn(this);

        // run the "page" partial
        var partial = Handlebars.partials["page"];
        return partial(this);
    });
    Handlebars.registerHelper("link", function(pageId) {
        return "#" + pageId;
    });
    Handlebars.registerHelper("debug", function() {

        var json = JSON.parse(JSON.stringify(this));
        delete json.content;

        var str = "\r<!-- DEBUG MODEL -->";
        str += "\r<!--";
        var list = Util.extractDotNotationKeys(json);
        for (var i = 0; i < list.length; i++)
        {
            var key = list[i];
            var value = Util.readUsingDotNotation(this, key);

            var text = key;
            if (typeof(value) === "string") {
                text = text + " = '" + encodeURIComponent(value) + "'";
            }
            else if (typeof(value) === "number") {
                text = text + " = " + value;
            }
            else if (typeof(value) === "boolean") {
                text = text + " = " + value;
            }
            str += "\r" + text;
        }
        str += "\r-->";
        str += "\r<!-- END DEBUG MODEL -->";

        return str;
    });

    var _executeTemplate = function(templateId, model)
    {
        var template = Handlebars.templates[templateId];

        return template(model);
    };

    var _renderPage = function(pageIdentifier, html, options, callback)
    {
        if (typeof(options) === "function") {
            callback = options;
            options = {};
        }
        if (!options) {
            options = {};
        }

        var page = null;
        if (pageIdentifier) {
            page = $(pageIdentifier);
        }
        else
        {
            page = $.mobile.activePage;
        }

        //var dataRole = $(page).attr("data-role");
        //var pageId = $(page).attr("id");

        //var content = page.children( ":jqmData(role=content)" );
        // enhance list view
        //content.find( ":jqmData(role=listview)" ).listview();
        // refresh any tables
        //content.find( ":jqmData(role=table)").table();

        $(page).html(html);

        $(page).trigger("pagecreate");

        //$.mobile.changePage(page, options);

        window.setTimeout(function() {
            if (callback) {
                callback();
            }
        }, 300);
    };

    var _renderPopup = function(html, callback)
    {
        $("#popup").html(html);
        $("#popup").trigger("create");
        $("#popup").popup();
        $("#popup").popup("open", {
            "corners": true,
            "positionTo": "window",
            "shadow": true,
            "theme": "c",
            "overlayTheme": "a",
            "transition": "pop"
        });

        // enhance buttons
        $("#popup").find("button").button();

        $("#popup").find(".button-cancel").off().click(function(e) {

            if (callback) {
                callback(false);
            }

            e.preventDefault();
        });

        $("#popup").find(".button-confirm").off().click(function(e) {

            if (callback) {
                callback(true);
            }

            e.preventDefault();
        });
    };


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // PUBLIC METHODS
    //
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var r = {};

    var redirectToPage = r.redirectToPage = function(pageId, options)
    {
        hidePopup(function() {
            $.mobile.changePage(pageId, options);
        });
    };

    var buildPageModel = r.buildPageModel = function(templateId, pageId, pageTitle, config)
    {
        // if no page id provided and we're not in ajaxApp mode for the router, then the page id
        // is assumed to be the same as the template id
        if (!pageId)
        {
            if (!$.mobile.jqmRouter.ajaxApp)
            {
                pageId = templateId;
            }
        }

        var model = {};
        for (var k in config) {
            model[k] = config[k];
        }
        model.app = {
            "name": ""
        };
        model.template = {
            "id": templateId
        };
        model.page = {};
        if (pageId) {
            model.page.id = pageId;
        }

        var authState = Auth.authenticatedState();
        if (authState)
        {
            model.user = authState.user;
        }

        if (pageTitle) {
            model.page.title = pageTitle;
        }

        return model;
    };

    var executePage = r.executePage = function(model, options, callback)
    {
        if (typeof(options) === "function") {
            callback = options;
            options = {};
        }
        if (!options) {
            options = {};
        }

        if (typeof(model.showFooter) === "undefined") {
            if (model.footerButtons) {
                var c = 0;
                for (var k in model.footerButtons) {
                    c++;
                }
                if (c > 0) {
                    model.showFooter = true;
                }
            }
        }

        if (typeof(model.showHeader) === "undefined") {
            if (model.headerButtons) {
                var c = 0;
                for (var k in model.headerButtons) {
                    c++;
                }
                if (c > 0) {
                    model.showHeader = true;
                }
            }
        }

        var templateId = model.template.id;
        var pageId = model.page.id;

        var pageIdentifier = null;
        if (pageId) {
            pageIdentifier = "#" + pageId;
        }

        // produce the html
        var html = _executeTemplate(templateId + ".html", model);

        _renderPage(pageIdentifier, html, options, function() {

            // special handling for any footer buttons
            for (var k in model.footerButtons)
            {
                $(".footer-button-" + k).off().click(function(e) {
                    var pageId = $(this).attr("data-href");
                    redirectToPage(pageId);
                    e.preventDefault();
                });

                if (model.footerButtons[k] === "hide")
                {
                    // disable the button

                    // 1) intercept the click
                    $(".footer-button-" + k).click(function(e) {
                        e.preventDefault();
                    });

                    // 2) set disabled ui state
                    $(".footer-button-" + k).addClass("ui-disabled");
                }
            }

            if (callback)
            {
                callback();
            }

        });
    };

    var showConfirmPopup = r.showConfirmPopup = function(title, message, config, callback)
    {
        if (typeof(config) === "function") {
            callback = config;
            config = {};
        }

        if (!config.title) {
            config.title = title;
        }
        if (!config.message) {
            config.message = message;
        }
        if (!config.buttons) {
            config.buttons = {};
        }
        if (!config.buttons.cancel) {
            config.buttons.cancel = {};
        }
        if (!config.buttons.cancel.title) {
            config.buttons.cancel.title = "Cancel";
        }
        if (!config.buttons.confirm) {
            config.buttons.confirm = {};
        }
        if (!config.buttons.confirm.title) {
            config.buttons.confirm.title = "OK";
        }

        var template = Handlebars.partials["popup"];
        var html = template(config);

        _renderPopup(html, function(confirm) {
            callback(confirm);
        });
    };

    var showWaitPopup = r.showWaitPopup = function(message)
    {
        var body = "<div style='text-align: center'><img src='./images/ajax-loader.gif'></div><br/><p align='center'>" + message + "</p>";
        showSimplePopup(body);
    };

    var showSimplePopup = r.showSimplePopup = function(body)
    {
        var template = Handlebars.partials["popup"];
        var html = template({
            "body": body
        });

        _renderPopup(html);
    };

    var showErrorPopup = r.showErrorPopup = function(err, title, callback)
    {
        if (typeof(title) === "function") {
            callback = title;
            title = null;
        }

        var body = err;
        if (err.message) {
            body = "<p align='center'>" + err.message + "</p>";
        }

        if (!title) {
            title = "There was a problem";
        }

        var template = Handlebars.partials["popup"];
        var html = template({
            "title": title,
            "body": body,
            "buttons": {
                "confirm": {
                    "title": "OK"
                }
            }
        });

        _renderPopup(html, callback);
    };

    var hidePopup = r.hidePopup = function(callback)
    {
        // if pop-up is active, then hide it
        var active = $("#popup-popup").hasClass("ui-popup-active");
        if (active)
        {
            // hide it and once hidden, fire callback
            $("#popup").popup("close");
            $("#popup").off().on("popupafterclose", function() {
                if (callback) {
                    callback();
                }
            });
        }
        else
        {
            // just call the callback
            callback();
        }
    };

    var handleError = r.handleError = function(err, callback)
    {
        showErrorPopup(err, function() {

            if (callback)
            {
                callback();
            }

            return;
        });
    };

    var showTemplatePopup = r.showTemplatePopup = function(templateId, model, callback)
    {
        // inject a page element to hold the popup
        $("#popup-" + templateId).remove();
        var popupContainer = $("<div id='popup-" + templateId + "'></div>");
        //$(document.body).append(div);

        var html = _executeTemplate(templateId + ".html", model);
        var popup = $(html);
        $(popup).off();

        $(popupContainer).html(html);

        $(popup).trigger("pagecreate");
        $(popup).popup();
        $(popup).popup("open", {
            //"corners": true,
            "positionTo": "window",
            //"shadow": true,
            //"theme": "c",
            //"overlayTheme": "a",
            "transition": "pop"
        });
        $(popup).on("popupafteropen", function() {
            if (callback) {
                callback(popup);
            }
        });

        // enhance button
        $(popup).find("button").button();
    };

    return r;
});