define([
    "js/engine",
    "cms/ui",
    "cms/auth",
    "cms/http",
    "compiled_templates"
],
    function(Engine, UI, Auth, HTTP)
{

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // PUBLIC METHODS
    //
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var getDegreeTitle = function(degree)
    {
        var degreeTitle = "";

        if (degree == "ba") {
            degreeTitle = "Bachelor of Arts";
        }
        if (degree == "bs") {
            degreeTitle = "Bachelor of Science";
        }
        if (degree == "ma") {
            degreeTitle = "Master of Arts";
        }
        if (degree == "ms") {
            degreeTitle = "Master of Science";
        }
        if (degree == "phd") {
            degreeTitle = "Doctor of Philosophy";
        }

        return degreeTitle;
    };

    var getSchoolTitle = function(school)
    {
        var schoolTitle = "";

        if (school == "architecture") {
            schoolTitle = "Architecture";
        }

        return schoolTitle;
    };

    var r = {};

    r.home = function(type, match, ui)
    {
        if (!match) {
            return;
        }

        var model = UI.buildPageModel("home");

        UI.executePage(model, function() {

            // if they click on a graduate filter, set into session ahead of following link
            $("[data-graduate-filter]").off().click(function(e) {

                var filter = $(this).attr("data-graduate-filter");

                // bacca => "bs", "ba"
                if (filter === "bacca") {
                    Engine.currentDegreeFilter(["bs", "ba"]);
                }
            });

        });
    };

    r.account = function(type, match, ui)
    {
        if (!match) {
            return;
        }

        var model = UI.buildPageModel("account");

        UI.executePage(model, function() {

        });
    };

    r.news = function(type, match, ui)
    {
        if (!match) {
            return;
        }

        // find the spotlight candidate
        var spotlightQuery = {
            "firstName": "Hisao"
        };
        Engine.queryCandidates(spotlightQuery, function(err, spotlights) {

            var model = UI.buildPageModel("news");

            model.spotlight = spotlights[0];
            model.spotlight.degreeTitle = getDegreeTitle(model.spotlight.degree);
            model.spotlight.schoolTitle = getSchoolTitle(model.spotlight.school);

            // find all news items
            Engine.queryNodes({
                "_type": "alum:newsitem"
            }, function(err, newsitems) {

                model.newsitems = [];

                // pick out the "class message"
                for (var i = 0; i < newsitems.length; i++)
                {
                    if (newsitems[i].category === "classchair")
                    {
                        model.classchair = newsitems[i];
                    }
                    else
                    {
                        model.newsitems.push(newsitems[i]);
                    }
                }

                UI.executePage(model, function(el) {

                    /*
                    $("img[class='ui-li-thumb']").each(function() {
                        //$(this).css('margin-top',((120-this.height)/2));
                        $(this).css('margin-left',((150-this.width)/2) + 5);
                    });
                    */

                    $("[data-link-uri]").mouseover(function() {
                        $(this).css("cursor", "pointer");
                    });
                    $("[data-link-uri]").click(function() {
                        var newsItemId = $(this).attr("data-node-id");
                        Engine.currentNewsItem(newsItemId);

                        var linkUri = $(this).attr("data-link-uri");
                        UI.redirectToPage(linkUri);
                    });

                });
            });
        });
    };

    r.newsitem = function(type, match, ui)
    {
        if (!match) {
            return;
        }

        var newsItemId = Engine.currentNewsItem();
        if (!newsItemId) {
            UI.redirectToPage("/index.html");
            return;
        }

        var query = {
            "_type": "alum:newsitem",
            "_doc": newsItemId
        };

        // find featured candidates
        Engine.queryNodes(query, function(err, nodes) {

            var newsitem = nodes[0];

            var model = UI.buildPageModel("newsitem");
            model.newsitem = newsitem;
            model.newsitem.body.long =

            UI.executePage(model, function(el) {

            });
        });
    };

    r.directory = function(type, match, ui)
    {
        if (!match) {
            return;
        }

        var model = UI.buildPageModel("directory");

        UI.executePage(model, function() {

            //window.trigger('resize');
        });
    };

    r.twentythirteen = function(type, match, ui)
    {
        if (!match) {
            return;
        }

        var model = UI.buildPageModel("2013");

        UI.executePage(model, function() {

        });
    };

    r.profile = function(type, match, ui)
    {
        if (!match) {
            return;
        }

        var model = UI.buildPageModel("profile");

        UI.executePage(model, function() {

        });
    };

    return r;
});