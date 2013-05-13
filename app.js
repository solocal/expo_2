var requirejs = require('requirejs');
var fs = require("fs");
var path = require("path");
var server = require("cloudcms-server/server");

process.env.PORT = process.env.PORT || 2998;

/**
 * Bind in custom routes.
 */
server.routes(function(app) {
    require("./server").routes(app);
});

/**
 * Bind in custom socket handlers.
 */
server.sockets(function(socket) {
    require("./server").sockets(socket);
});

/**
 *
 * Things we want to run before server start.
 */
server.before(function(app, callback) {

    // if we're in production mode, compile everything ahead of running
    if (process.env.NODE_ENV === "production")
    {
        var config = {
            baseUrl: "./public",
            dir: "./public_build",
            mainConfigFile: "./public/main.js",
            modules: [{
                "name": "main"
            }],
            removeCombined: true,
            findNestedDependencies: true,
			optimize: "none"
        };

        console.log("Starting RequireJS compilation...");

        requirejs.optimize(config, function(buildResponse) {

            process.env.CLOUDCMS_APPSERVER_PUBLIC_PATH = path.join(process.env.CLOUDCMS_APPSERVER_BASE_PATH, "public_build");

            console.log("RequireJS compilation succeeded!");
            callback();

        }, function(err) {

            console.log("RequireJS compilation failed -> ");
            console.log(err);

            callback(err);
        });
    }
    else
    {
        callback();
    }
});

/**
 * Things we want to run after server start.
 */
server.after(function(app, callback) {

    // provide some debug info
    console.log("");
    console.log("Server Mode: " + process.env.CLOUDCMS_APPSERVER_MODE);
    console.log("Server Base Path: " + process.env.CLOUDCMS_APPSERVER_BASE_PATH);
    console.log("Server Public Path: " + process.env.CLOUDCMS_APPSERVER_PUBLIC_PATH);
    console.log("Gitana Proxy Host: " + process.env.GITANA_PROXY_HOST);
    console.log("Gitana Proxy Port: " + process.env.GITANA_PROXY_PORT);
    console.log("Public Directory: " + process.env.CLOUDCMS_APPSERVER_PUBLIC_PATH);
    console.log("");

    callback();
});

// start the server
server.start({
    "socketTransports": ["xhr-polling"]
});

