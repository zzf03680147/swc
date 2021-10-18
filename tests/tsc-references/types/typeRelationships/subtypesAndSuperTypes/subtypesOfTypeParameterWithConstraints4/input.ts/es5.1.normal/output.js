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
var Foo = function Foo() {
    "use strict";
    _classCallCheck(this, Foo);
};
function f(t, u, v) {
    // ok
    var r = true ? t : u;
    var r = true ? u : t;
    // ok
    var r2 = true ? t : v;
    var r2 = true ? v : t;
    // ok
    var r3 = true ? v : u;
    var r3 = true ? u : v;
    // ok
    var r4 = true ? t : new Foo();
    var r4 = true ? new Foo() : t;
    // ok
    var r5 = true ? u : new Foo();
    var r5 = true ? new Foo() : u;
    // ok
    var r6 = true ? v : new Foo();
    var r6 = true ? new Foo() : v;
}
var B1 = function B1() {
    "use strict";
    _classCallCheck(this, B1);
};
var D1 = /*#__PURE__*/ function(B1) {
    "use strict";
    _inherits(D1, B1);
    function D1() {
        _classCallCheck(this, D1);
        return _possibleConstructorReturn(this, _getPrototypeOf(D1).apply(this, arguments));
    }
    return D1;
}(B1);
var D2 = /*#__PURE__*/ function(B1) {
    "use strict";
    _inherits(D2, B1);
    function D2() {
        _classCallCheck(this, D2);
        return _possibleConstructorReturn(this, _getPrototypeOf(D2).apply(this, arguments));
    }
    return D2;
}(B1);
var D3 = /*#__PURE__*/ function(B1) {
    "use strict";
    _inherits(D3, B1);
    function D3() {
        _classCallCheck(this, D3);
        return _possibleConstructorReturn(this, _getPrototypeOf(D3).apply(this, arguments));
    }
    return D3;
}(B1);
var D4 = /*#__PURE__*/ function(B1) {
    "use strict";
    _inherits(D4, B1);
    function D4() {
        _classCallCheck(this, D4);
        return _possibleConstructorReturn(this, _getPrototypeOf(D4).apply(this, arguments));
    }
    return D4;
}(B1);
var D5 = /*#__PURE__*/ function(B1) {
    "use strict";
    _inherits(D5, B1);
    function D5() {
        _classCallCheck(this, D5);
        return _possibleConstructorReturn(this, _getPrototypeOf(D5).apply(this, arguments));
    }
    return D5;
}(B1);
var D6 = /*#__PURE__*/ function(B1) {
    "use strict";
    _inherits(D6, B1);
    function D6() {
        _classCallCheck(this, D6);
        return _possibleConstructorReturn(this, _getPrototypeOf(D6).apply(this, arguments));
    }
    return D6;
}(B1);
var D7 = /*#__PURE__*/ function(B1) {
    "use strict";
    _inherits(D7, B1);
    function D7() {
        _classCallCheck(this, D7);
        return _possibleConstructorReturn(this, _getPrototypeOf(D7).apply(this, arguments));
    }
    return D7;
}(B1);
var D8 = /*#__PURE__*/ function(B1) {
    "use strict";
    _inherits(D8, B1);
    function D8() {
        _classCallCheck(this, D8);
        return _possibleConstructorReturn(this, _getPrototypeOf(D8).apply(this, arguments));
    }
    return D8;
}(B1);
var D9 = /*#__PURE__*/ function(B1) {
    "use strict";
    _inherits(D9, B1);
    function D9() {
        _classCallCheck(this, D9);
        return _possibleConstructorReturn(this, _getPrototypeOf(D9).apply(this, arguments));
    }
    return D9;
}(B1);
