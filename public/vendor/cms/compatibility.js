define([], function()
{
    // ensure backward compatibility with older versions of iPhone
    if (!Function.prototype.bind)
    {
        Function.prototype.bind = function (bind) {
            var self = this;
            return function () {
                var args = Array.prototype.slice.call(arguments);
                return self.apply(bind || null, args);
            };
        };
    }
});