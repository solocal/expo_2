var http = require("http");
var path = require("path");

var exports = module.exports;

// Function to convert degrees to radians
var convertToRadian = function(numericDegree)
{
    return numericDegree * Math.PI / 180;
};

var calculateDistanceInMiles = exports.calculateDistanceInMiles = function(latitude1, longitude1, latitude2, longitude2)
{
    // radius of the earth in miles
    var earthRadius = 3961.3;

    // distance in radians for lat and long
    var dLatitude = convertToRadian(latitude2 - latitude1);
    var dLongitude = convertToRadian(longitude2 - longitude1);

    var a = Math.sin(dLatitude / 2) * Math.sin(dLatitude / 2) + Math.cos(convertToRadian(latitude1)) * Math.cos(convertToRadian(latitude2)) * Math.sin(dLongitude / 2) * Math.sin(dLongitude / 2);
    var greatCircleDistance = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // distance converted to miles from radians
    return earthRadius * greatCircleDistance;
};

exports.locationWithinBounds = function(location, position)
{
    var locationLat = location.lat;
    var locationLong = location.long;
    var locationRadiusUnit = location.radius.unit;
    var locationRadiusValue = location.radius.value;

    var positionLat = position.coords.latitude;
    var positionLong = position.coords.longitude;

    // calculate distance between lat/long's in miles
    var distanceInMiles = calculateDistanceInMiles(locationLat, locationLong, positionLat, positionLong);

    // convert down to expected unit
    var distanceInUnits = -1;
    if (locationRadiusUnit == "mi" || locationRadiusUnit == "mile" || locationRadiusUnit == "miles")
    {
        // nothing to do
        distanceInUnits = distanceInMiles;
    }
    if (locationRadiusUnit == "m" || locationRadiusUnit == "meter" || locationRadiusUnit == "meters")
    {
        // convert miles to meters
        distanceInUnits = distanceInMiles * 1609.34;
    }
    if (locationRadiusUnit == "f" || locationRadiusUnit == "ft" || locationRadiusUnit == "feet")
    {
        // convert miles to feet
        distanceInUnits = distanceInMiles * 5280;
    }

    console.log("DISTANCE: " + distanceInUnits + " " + locationRadiusUnit);
    console.log("MAX ALLOWED: " + locationRadiusValue + " " + locationRadiusUnit);

    return (distanceInUnits <= locationRadiusValue);
};

var timestamp = exports.timestamp = function()
{
    return new Date().getTime();
};

exports.randomSelect = function(array)
{
    return array[Math.floor(Math.random() * array.length)];
};

exports.pick = function(map, key)
{
    // if the key is "start", then use the first key we find in the map
    if (key == "start")
    {
        for (var k in map) {
            key = k;
            break;
        }

    }

    return map[key];
};

exports.firstKey = function(map)
{
    var key = null;
    for (var k in map)
    {
        key = k;
        break;
    }

    return key;
};

exports.inHistory = function(history, location)
{
    var tip = history;

    // traverse
    var tokens = location.split("/");
    do
    {
        tip = tip[tokens.shift()];
    }
    while (tokens.length > 0 && tip);

    return (tip ? true : false);
};

exports.readHistory = function(history, location)
{
    var tip = history;

    // traverse
    var tokens = location.split("/");
    do
    {
        tip = tip[tokens.shift()];
    }
    while (tokens.length > 0 && tip);

    return tip;
};

exports.markHistory = function(history, location, data)
{
    var tip = history;

    // traverse
    var tokens = location.split("/");
    do
    {
        var token = tokens.shift();

        if (!tip[token]) {
            tip[token] = {};
        }

        tip = tip[token];
    }
    while (tokens.length > 0);

    if (data)
    {
        for (var k in data) {
            tip[k] = data[k];
        }
    }

    if (!tip.startTime) {
        tip.startTime = tip.lastTime = timestamp();
    } else {
        tip.lastTime = timestamp();
    }
};