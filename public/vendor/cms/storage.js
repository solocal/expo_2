define([], function()
{
    // in-memory implementation of HTML5 storage interface
    var memoryStorage = function() {

        var memory = {};

        var m = {};
        m.removeItem = function(key)
        {
            delete memory[key];
        };

        m.getItem = function(key)
        {
            return memory[key];
        };

        m.setItem = function(key, value)
        {
            memory[key] = value;
        };

        return m;
    }();

    /**
     * Determines whether the current runtime environment supports HTML5 local storage
     *
     * @return {Boolean}
     */
    var supportsLocalStorage = function()
    {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            return false;
        }
    };

    /**
     * Determines whether the current runtime environment supports HTML5 session storage.
     *
     * @return {Boolean}
     */
    var supportsSessionStorage = function()
    {
        try {
            return 'sessionStorage' in window && window['sessionStorage'] !== null;
        } catch (e) {
            return false;
        }
    };

    var acquireStorage = function()
    {
        var storage = null;

        // store
        if (scope == "session" && supportsSessionStorage())
        {
            storage = sessionStorage;
        }
        else if (scope == "local" && supportsLocalStorage())
        {
            storage = localStorage;
        }
        else
        {
            // fall back to memory-based storage
            storage = memoryStorage;
        }

        return storage;
    };

    var baseKey = "app";
    var scope = null;

    // result object
    var r = {};

    /**
     * Configures the storage.
     *
     * @param _baseKey
     * @param _scope
     */
    r.init = function(_baseKey, _scope)
    {
        baseKey = _baseKey;
        scope = _scope;
    };

    /**
     * Clears state.
     */
    r.clear = function()
    {
        acquireStorage().removeItem(baseKey);
    };

    /**
     * Pokes and peeks the value of a key in the state.
     *
     * @param key
     * @param value
     * @return {*}
     */
    r.poke = function(key, value)
    {
        var state = {};

        var stateString = acquireStorage().getItem(baseKey);
        if (stateString) {
            state = JSON.parse(stateString);
        }

        var touch = false;
        if (value)
        {
            state[key] = value;
            touch = true;
        }
        else if (value === null)
        {
            delete state[key];
            touch = true;
        }

        if (touch) {
            acquireStorage().setItem(baseKey, JSON.stringify(state));
        }

        return state[key];
    };

    return r;

});
