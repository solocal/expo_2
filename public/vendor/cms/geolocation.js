define([], function()
{
    var position = null;

    var onReceive = function(p)
    {
        position = p;

        if (console && console.log)
        {
            console.log("Acquired geolocation position [lat=" + position.coords.latitude + ", long=" + position.coords.longitude + "]");
        }
    };

    var onError = function(err)
    {
        if (console && console.log)
        {
            console.log("Error receiving geolocation update: " + err);
        }
    };

    // set up HTML5 to poll for current position and store into an accessor
    navigator.geolocation.watchPosition(onReceive, onError, {
        maximumAge: 3000, // 3 seconds
        timeout: 5000,
        enableHighAccuracy: true
    });

    var r = {};

    r.position = function()
    {
        return position;
    };

    r.fetch = function(callback)
    {
        var data = {};

        var position = this.position();
        if (position)
        {
            data.position = {
                "coords": {
                    "latitude": position.coords.latitude,
                    "longitude": position.coords.longitude
                },
                "timestamp": position.timestamp // ms
            };
            if (position.coords.altitude) {
                data.position.coords.altitude = position.coords.altitude;
            }
            if (position.coords.accuracy) {
                data.position.coords.accuracy = position.coords.accuracy;
            }
            if (position.coords.altitudeAccuracy) {
                data.position.coords.altitudeAccuracy = position.coords.altitudeAccuracy;
            }
            if (position.coords.heading) {
                data.position.coords.heading = position.coords.heading;
            }
            if (position.coords.speed) {
                data.position.coords.speed = position.coords.speed;
            }
        }

        callback(data);
    };

    return r;
});