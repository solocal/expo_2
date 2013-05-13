define([], function()
{
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // PUBLIC METHODS
    //
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var r = {};

    var storage = null;

    r.init = function(_storage)
    {
        storage = _storage;
    };

    r.authenticatedState = function(authenticatedState)
    {
        return storage.poke("authenticatedState", authenticatedState);
    };

    return r;
});