define([
    "js/handlers"
],
    function(Handlers)
{
    var r = {};

    r.init = function()
    {
        this.router = new $.mobile.Router({

            "/account.html": {
                "handler": Handlers.account.bind(this),
                "events": "bs"
            },

            "/newsitem.html": {
                "handler": Handlers.newsitem.bind(this),
                "events": "bs"
            },

            "/news.html": {
                "handler": Handlers.news.bind(this),
                "events": "bs"
            },

            "/directory.html": {
                "handler": Handlers.directory.bind(this),
                "events": "bs"
            },

            "/2013.html": {
                "handler": Handlers.twentythirteen.bind(this),
                "events": "bs"
            },

            "/profile.html": {
                "handler": Handlers.profile.bind(this),
                "events": "bs"
            },

            "/index.html": {
                "handler": Handlers.home.bind(this),
                "events": "bs"
            },

            "/": {
                "handler": Handlers.home.bind(this),
                "events": "bs"
            }

        },{

        },{
            firstMatchOnly: true
        });

        // in order to prevent foc
        $("body").show();

        // initialize page
        $.mobile.initializePage();
    };

    return r;
});
