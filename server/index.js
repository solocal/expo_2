var controllers = require("./controllers");
var sockets = require("./sockets");

var frameworkControllers = require("cloudcms-server/lib/framework/controllers");
var frameworkSockets = require("cloudcms-server/lib/framework/sockets");

var exports = module.exports;

/**
 * Binds any custom routes.
 *
 * @param app
 */
exports.routes = function(app)
{
    // init standard routes
    frameworkControllers.init(app);
};

/**
 * Binds any custom socket handlers.
 *
 * @param socket
 */
exports.sockets = function(socket)
{
    // init standard sockets
    frameworkSockets.init(socket);

    // custom sockets
    frameworkSockets.library(socket, sockets);
};










