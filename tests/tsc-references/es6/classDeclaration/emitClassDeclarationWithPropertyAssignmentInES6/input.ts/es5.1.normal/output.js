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
var C = function C() {
    "use strict";
    _classCallCheck(this, C);
    // @target:es6
    this.x = "Hello world";
};
var D = function D() {
    "use strict";
    _classCallCheck(this, D);
    this.x = "Hello world";
    this.y = 10;
};
var E = /*#__PURE__*/ function(D) {
    "use strict";
    _inherits(E, D);
    function E() {
        _classCallCheck(this, E);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(E).apply(this, arguments));
        _this.z = true;
        return _this;
    }
    return E;
}(D);
var F = /*#__PURE__*/ function(D) {
    "use strict";
    _inherits(F, D);
    function F() {
        _classCallCheck(this, F);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(F).call(this));
        _this.z = true;
        _this.j = "HI";
        return _this;
    }
    return F;
}(D);
