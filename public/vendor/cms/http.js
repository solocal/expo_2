define([
    "cms/geolocation",
    "cms/auth"
],
    function(Geolocation, Auth)
{
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // PUBLIC METHODS
    //
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var r = {};

    var get = r.get = function(url, callback)
    {
        var config = {
            "type": "GET",
            "url": url,
            "headers": {}
        };

        var authState = Auth.authenticatedState();
        if (authState && authState.ticket)
        {
            config.headers.ticket = encodeURIComponent(authState.ticket);
        }

        $.ajax(config).done(function(data) {
            callback(null, data);
        }).fail(function(xhr, status) {
            var responseObject = JSON.parse(xhr.responseText);
            callback(responseObject);
        });
    };

    var post = r.post = function(url, data, callback)
    {
        var config = {
            "type": "POST",
            "url": url,
            "headers": {}
        };
        Geolocation.fetch(function(geo) {

            if (geo) {

                if (!data) {
                    data = {};
                }

                for (var k in geo) {
                    data[k] = geo[k];
                }
            }

            if (data) {
                config.data = JSON.stringify(data);
            }

            var authState = Auth.authenticatedState();
            if (authState && authState.ticket)
            {
                config.headers.ticket = encodeURIComponent(authState.ticket);
            }

            $.ajax(config).done(function(data) {
                callback(null, data);
            }).fail(function(xhr, status) {
                var responseObject = JSON.parse(xhr.responseText);
                callback(responseObject);
            });

        });
    };

    return r;
});