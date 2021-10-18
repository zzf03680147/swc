function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
// @target: ES5
var x;
var y;
var Base = /*#__PURE__*/ function() {
    "use strict";
    function Base(a) {
        _classCallCheck(this, Base);
    }
    _createClass(Base, [
        {
            key: "b",
            value: function b(a) {
            }
        },
        {
            key: "c",
            get: function get() {
                return x;
            },
            set: function set(v) {
            }
        }
    ], [
        {
            key: "s",
            value: function s(a) {
            }
        },
        {
            key: "t",
            get: function get() {
                return x;
            },
            set: function set(v) {
            }
        }
    ]);
    return Base;
}();
var Derived = /*#__PURE__*/ function(Base) {
    "use strict";
    _inherits(Derived, Base);
    function Derived(a) {
        _classCallCheck(this, Derived);
        return _possibleConstructorReturn(this, _getPrototypeOf(Derived).call(this, x));
    }
    _createClass(Derived, [
        {
            key: "b",
            value: function b(a) {
            }
        },
        {
            key: "c",
            get: function get() {
                return y;
            },
            set: function set(v) {
            }
        }
    ], [
        {
            key: "s",
            value: function s(a) {
            }
        },
        {
            key: "t",
            get: function get() {
                return y;
            },
            set: function set(a) {
            }
        }
    ]);
    return Derived;
}(Base);
