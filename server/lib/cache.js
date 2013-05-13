var path = require("path");

var exports = module.exports;

var map = {};

var _key = function(gitana)
{
    return gitana.getDriver().getAuthInfo().getPrincipalId();
};

exports.read = function(gitana, key)
{
    var cacheKey = _key(gitana);

    var obj = null;
    if (map[cacheKey] && map[cacheKey][key])
    {
        obj = map[cacheKey][key]
    }

    return obj;
};

exports.clearAll = function()
{
    map = {};
};

exports.clear = function(gitana)
{
    var cacheKey = _key(gitana);

    if (map[cacheKey]) {
        delete map[cacheKey];
    }
};

exports.write = function(gitana, key, value)
{
    var cacheKey = _key(gitana);

    if (!map[cacheKey])
    {
        map[cacheKey] = {};
    }

    map[cacheKey][key] = value;
};
