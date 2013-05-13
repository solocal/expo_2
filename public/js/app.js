define([
    "cms/storage",
    "cms/auth",
    "cms/socket",
    "js/engine",
    "js/remote",
    "js/routes"
],
    function(Storage, Auth, Socket, Engine, Remote, Routes)
{
    // initialize HTML5 local storage
    Storage.init("app", "local");

    // authentication persists to storage
    Auth.init(Storage);

    // initialize routes
    Routes.init();

    // global timestamp invalidation
    Socket.addListener("timestamp", function(err, data) {

        var timestamp = data.timestamp;

        var currentTimestamp = Storage.poke("timestamp");
        if (!currentTimestamp || currentTimestamp != timestamp) {
            console.log("Global timestamp invalidated");
            Storage.clear();
            Storage.poke("timestamp", timestamp);
        }
    });


    var config = null;

    var r = {};

    r.init = function(_config)
    {
        config = _config;

        // TODO: set config onto engine?
    };

    return r;
});