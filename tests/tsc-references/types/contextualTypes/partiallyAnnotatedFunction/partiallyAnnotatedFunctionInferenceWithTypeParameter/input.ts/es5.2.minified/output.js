function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _getPrototypeOf(o) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    }, _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
    return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        return o.__proto__ = p, o;
    }, _setPrototypeOf(o, p);
}
var C = function() {
    "use strict";
    _classCallCheck(this, C);
}, D = function(C) {
    "use strict";
    function D() {
        var self, call, obj;
        return _classCallCheck(this, D), self = this, call = _getPrototypeOf(D).apply(this, arguments), call && ("object" == ((obj = call) && "undefined" != typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj) || "function" == typeof call) ? call : (function(self) {
            if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return self;
        })(self);
    }
    return !function(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: !0,
                configurable: !0
            }
        }), superClass && _setPrototypeOf(subClass, superClass);
    }(D, C), D;
}(C);
test(function(t1, t2) {
    t2.test2;
}), test(function(t1, t2) {
    t2.test2;
}), test(function() {
}), test(function(t1) {
}), test(function() {
    for(var _len = arguments.length, ts = new Array(_len), _key = 0; _key < _len; _key++)ts[_key] = arguments[_key];
}), testRest(function(t1) {
}), testRest(function(t1, t2, t3) {
}), testRest(function(t1, t2, t3) {
}), testRest(function(t1, t2, t3) {
}), testRest(function(t2) {
    for(var _len = arguments.length, t3 = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)t3[_key - 1] = arguments[_key];
}), testRest(function(t2) {
    for(var _len = arguments.length, t3 = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)t3[_key - 1] = arguments[_key];
});
