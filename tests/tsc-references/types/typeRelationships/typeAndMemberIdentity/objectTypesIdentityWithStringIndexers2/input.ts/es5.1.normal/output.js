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
var Base = function Base() {
    "use strict";
    _classCallCheck(this, Base);
};
var Derived = /*#__PURE__*/ function(Base) {
    "use strict";
    _inherits(Derived, Base);
    function Derived() {
        _classCallCheck(this, Derived);
        return _possibleConstructorReturn(this, _getPrototypeOf(Derived).apply(this, arguments));
    }
    return Derived;
}(Base);
var A = function A() {
    "use strict";
    _classCallCheck(this, A);
};
var B = function B() {
    "use strict";
    _classCallCheck(this, B);
};
var C = function C() {
    "use strict";
    _classCallCheck(this, C);
};
var PA = /*#__PURE__*/ function(A) {
    "use strict";
    _inherits(PA, A);
    function PA() {
        _classCallCheck(this, PA);
        return _possibleConstructorReturn(this, _getPrototypeOf(PA).apply(this, arguments));
    }
    return PA;
}(A);
var PB = /*#__PURE__*/ function(B) {
    "use strict";
    _inherits(PB, B);
    function PB() {
        _classCallCheck(this, PB);
        return _possibleConstructorReturn(this, _getPrototypeOf(PB).apply(this, arguments));
    }
    return PB;
}(B);
var a;
var b = {
    foo: null
};
function foo1(x) {
}
function foo1b(x) {
}
function foo1c(x) {
}
function foo2(x) {
}
function foo3(x) {
}
function foo4(x) {
}
function foo5(x) {
}
function foo5b(x) {
}
function foo5c(x) {
}
function foo5d(x) {
}
function foo6(x) {
}
function foo7(x) {
}
function foo8(x) {
}
function foo9(x) {
}
function foo10(x) {
}
function foo11(x) {
}
function foo11b(x) {
}
function foo11c(x) {
}
function foo12(x) {
}
function foo13(x) {
}
function foo14(x) {
}
function foo15(x) {
}
function foo16(x) {
}
