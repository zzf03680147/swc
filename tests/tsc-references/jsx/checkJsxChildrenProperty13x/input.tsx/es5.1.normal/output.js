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
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
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
// @filename: file.tsx
// @jsx: preserve
// @noLib: true
// @skipLibCheck: true
// @libFiles: react.d.ts,lib.d.ts
// @strictNullChecks: true
var React = require('react');
var Button = /*#__PURE__*/ function(_Component) {
    "use strict";
    _inherits(Button, _Component);
    function Button() {
        _classCallCheck(this, Button);
        return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
    }
    _createClass(Button, [
        {
            key: "render",
            value: function render() {
                // Error children are specified twice
                return(/*#__PURE__*/ React.createElement(InnerButton, _extends({
                }, this.props, {
                    children: "hi"
                }), /*#__PURE__*/ React.createElement("div", null, "Hello World")));
            }
        }
    ]);
    return Button;
}(React.Component);
var InnerButton = /*#__PURE__*/ function(_Component) {
    "use strict";
    _inherits(InnerButton, _Component);
    function InnerButton() {
        _classCallCheck(this, InnerButton);
        return _possibleConstructorReturn(this, _getPrototypeOf(InnerButton).apply(this, arguments));
    }
    _createClass(InnerButton, [
        {
            key: "render",
            value: function render() {
                return(/*#__PURE__*/ React.createElement("button", null, "Hello"));
            }
        }
    ]);
    return InnerButton;
}(React.Component);
export { };
