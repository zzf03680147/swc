function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Constructor;
}
var A, Point = function() {
    "use strict";
    function Point(x, y) {
        _classCallCheck(this, Point), this.x = x, this.y = y;
    }
    return _createClass(Point, null, [
        {
            key: "Origin",
            value: function() {
                return {
                    x: 0,
                    y: 0
                };
            }
        }
    ]), Point;
}();
!function(A) {
    var Point1 = function() {
        "use strict";
        function Point1(x, y) {
            _classCallCheck(this, Point1), this.x = x, this.y = y;
        }
        return _createClass(Point1, null, [
            {
                key: "Origin",
                value: function() {
                    return {
                        x: 0,
                        y: 0
                    };
                }
            }
        ]), Point1;
    }();
    A.Point = Point1;
}(A || (A = {
}));
