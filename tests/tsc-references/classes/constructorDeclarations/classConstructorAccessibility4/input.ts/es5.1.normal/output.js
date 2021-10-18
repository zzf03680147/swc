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
var A = // @declaration: true
/*#__PURE__*/ function() {
    "use strict";
    function A() {
        _classCallCheck(this, A);
    }
    _createClass(A, [
        {
            key: "method",
            value: function method() {
                var B = /*#__PURE__*/ function() {
                    function B() {
                        _classCallCheck(this, B);
                    }
                    _createClass(B, [
                        {
                            key: "method",
                            value: function method() {
                                new A(); // OK
                            }
                        }
                    ]);
                    return B;
                }();
                var C = /*#__PURE__*/ function(A) {
                    _inherits(C, A);
                    function C() {
                        _classCallCheck(this, C);
                        return _possibleConstructorReturn(this, _getPrototypeOf(C).apply(this, arguments));
                    }
                    return C;
                }(A);
            }
        }
    ]);
    return A;
}();
var D = /*#__PURE__*/ function() {
    "use strict";
    function D() {
        _classCallCheck(this, D);
    }
    _createClass(D, [
        {
            key: "method",
            value: function method() {
                var E = /*#__PURE__*/ function() {
                    function E() {
                        _classCallCheck(this, E);
                    }
                    _createClass(E, [
                        {
                            key: "method",
                            value: function method() {
                                new D(); // OK
                            }
                        }
                    ]);
                    return E;
                }();
                var F = /*#__PURE__*/ function(D) {
                    _inherits(F, D);
                    function F() {
                        _classCallCheck(this, F);
                        return _possibleConstructorReturn(this, _getPrototypeOf(F).apply(this, arguments));
                    }
                    return F;
                }(D);
            }
        }
    ]);
    return D;
}();
