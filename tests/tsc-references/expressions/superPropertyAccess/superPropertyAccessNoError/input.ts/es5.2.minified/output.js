function _assertThisInitialized(self) {
    if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
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
function _get(target, property, receiver) {
    return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (base) {
            var desc = Object.getOwnPropertyDescriptor(base, property);
            return desc.get ? desc.get.call(receiver) : desc.value;
        }
    }, _get(target, property, receiver || target);
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
function _superPropBase(object, property) {
    for(; !Object.prototype.hasOwnProperty.call(object, property) && null !== (object = _getPrototypeOf(object)););
    return object;
}
var SomeBaseClass = function() {
    "use strict";
    function SomeBaseClass() {
        _classCallCheck(this, SomeBaseClass);
    }
    return _createClass(SomeBaseClass, [
        {
            key: "func",
            value: function() {
                return "";
            }
        },
        {
            key: "returnThis",
            value: function() {
                return this;
            }
        }
    ], [
        {
            key: "func",
            value: function() {
                return 3;
            }
        }
    ]), SomeBaseClass;
}(), SomeDerivedClass = function(SomeBaseClass) {
    "use strict";
    function SomeDerivedClass() {
        _classCallCheck(this, SomeDerivedClass);
        var obj, self, call, _this = (self = this, (call = _getPrototypeOf(SomeDerivedClass).call(this)) && ("object" == ((obj = call) && "undefined" != typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj) || "function" == typeof call) ? call : _assertThisInitialized(self));
        return _get(_getPrototypeOf(SomeDerivedClass.prototype), "func", _assertThisInitialized(_this)).call(_this), _this;
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
    }(SomeDerivedClass, SomeBaseClass), _createClass(SomeDerivedClass, [
        {
            key: "fn",
            value: function() {
                _get(_getPrototypeOf(SomeDerivedClass.prototype), "func", this).call(this);
            }
        },
        {
            key: "a",
            get: function() {
                return _get(_getPrototypeOf(SomeDerivedClass.prototype), "func", this).call(this), null;
            },
            set: function(n) {
                _get(_getPrototypeOf(SomeDerivedClass.prototype), "func", this).call(this);
            }
        },
        {
            key: "returnThis",
            value: function() {
                return _get(_getPrototypeOf(SomeDerivedClass.prototype), "returnThis", this).call(this);
            }
        }
    ], [
        {
            key: "fn",
            value: function() {
                _get(_getPrototypeOf(SomeDerivedClass), "func", this).call(this);
            }
        },
        {
            key: "a",
            get: function() {
                return _get(_getPrototypeOf(SomeDerivedClass), "func", this).call(this), null;
            },
            set: function(n) {
                _get(_getPrototypeOf(SomeDerivedClass), "func", this).call(this);
            }
        }
    ]), SomeDerivedClass;
}(SomeBaseClass);
new SomeDerivedClass().returnThis().fn();
