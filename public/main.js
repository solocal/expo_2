require.config({
    paths : {
        "jquery": "vendor/jquery-1.9.1.min",
        "jqm": "vendor/jqm/jquery.mobile-1.3.1.min",
        "jqmr": "vendor/jquery.mobile.router",
        "handlebars": "vendor/handlebars",
        "cms": "vendor/cms",
        "socket.io": "vendor/socket.io/socket.io",
        "modernizr": "vendor/modernizr",
        "swipe": "vendor/swipe",
        "app": "js/app"
    },
    "shim": {
        "handlebars": {
            "deps": [],
            "exports": "Handlebars"
        },
        "modernizr": {
            "deps": ["jquery"],
            "exports": "Modernizr"
        }
    }
});

require(["jquery", "modernizr"], function($, Modernizr)
{
    // make sure that the page doesn't auto-init
    // we handle this manually in app
    $(document).bind("mobileinit", function(){
        $.mobile.autoInitializePage = false;
        $.mobile.jqmRouter = {
            ajaxApp: true
        };
    });

    /*
    if (!Modernizr.svg) {
        $('img[src$=".svg"]').each(function()
        {
            $(this).attr('src', $(this).attr('src').replace('.svg', '.png'));
        });
    }
    */

    require(["jqmr", "swipe"], function(jqmr) {
        require(["jqm"], function(jqm) {
            require(["app"], function(app) {
                app.init({
                    "name": "MIT"
                });
            });
        });
    });

});
