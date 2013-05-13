define([
    "socket.io",
    "cms/auth",
    "cms/geolocation"
],
    function(io, Auth, Geolocation)
{
    WEB_SOCKET_SWF_LOCATION = "/vendor/socket.io";

    var socket = io.connect();

    var socketMethodToken = function()
    {
        var counter = 0;

        return function() {
            counter++;

            return counter;
        };
    }();

    /**
     * Fires a method on the server.  If callback is provided, a response will be handed to the callback.
     *
     * @param method
     * @param data
     * @param callback
     */
    var _request = function(method, data, callback)
    {
        var responseMethodName = method + "Response-" + socketMethodToken();

        if (!data) {
            data = {};
        }
        data.responseMethodName = responseMethodName;

        socket.emit(method + "Request", data);

        if (callback)
        {
            var f = function(response)
            {
                socket.removeListener(responseMethodName, f);
                callback(response);
            };

            socket.on(responseMethodName, f);
        }
    };

    var request = function(method, data, callback)
    {
        if (typeof(data) === "function") {
            callback = data;
            data = null;
        }

        Geolocation.fetch(function(geo) {

            if (geo) {

                if (!data) {
                    data = {};
                }

                for (var k in geo) {
                    data[k] = geo[k];
                }
            }

            var authState = Auth.authenticatedState();
            if (authState && authState.ticket)
            {
                data.ticket = authState.ticket;
            }

            _request(method, data, function(response) {

                var err = null;
                if (response.err) {
                    err = response.err;
                }

                callback(err, response);
            });
        });
    };




    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // PUBLIC METHODS
    //
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var r = {};

    /**
     * Fires a request to a socket method on the server.
     *
     * @param method
     * @param data
     * @param callback
     */
    r.request = function(method, data, callback)
    {
        request(method, data, callback);
    };

    /**
     * Listens for a socket method and fires callback if/when received.
     *
     * @param methodName
     * @param callback
     */
    r.addListener = function(methodName, callback)
    {
        socket.on(methodName, function(data) {
            callback(null, data);
        });
    };

    /**
     * Unregisters a socket method listener.
     *
     * @param methodName
     * @param fn
     */
    r.removeListener = function(methodName, fn)
    {
        socket.removeListener(methodName, fn);
    };

    /**
     * Removes all listeners for a method.
     *
     * @param methodName
     */
    r.removeAllListeners = function(methodName)
    {
        socket.removeAllListeners(methodName);
    };



    return r;
});