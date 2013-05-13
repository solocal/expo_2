define([], function()
{
    /**
     * Backwards
     * @type {Object}
     */
    var r = {};

    r.extractDotNotationKeys = function(json)
    {
        var recurse = function(a) {

            var list = [];

            (function(o, r) {

                r = r || '';

                if (typeof o != 'object') {
                    return true;
                }

                for (var c in o) {
                    if (arguments.callee(o[c], r + "." + c)) {
                        list.push(r.substring(1) + "." + c);
                    }
                }

                return false;

            })(a);

            // remove keys starting with "."
            for (var i = 0; i < list.length; i++) {
                if (list[i].substring(0,1) == ".") {
                    list[i] = list[i].substring(1);
                }
            }

            return list;
        };

        return recurse(json);
    };

    r.readUsingDotNotation = function(obj, key)
    {
        var value = obj;

        var tokens = key.split(".");
        while (tokens.length > 0)
        {
            var token = tokens.shift();
            value = value[token];
            if (typeof(value) === "undefined")
            {
                value = null;
                break;
            }
        }

        return value;
    };

    return r;
});