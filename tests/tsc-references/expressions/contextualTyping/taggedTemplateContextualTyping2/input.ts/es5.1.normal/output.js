function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _templateObject1() {
    var data = _taggedTemplateLiteral([
        "",
        "",
        ""
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "",
        "",
        "",
        ""
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _taggedTemplateLiteral([
        "",
        "",
        "",
        ""
    ]);
    _templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function tempTag2() {
    for(var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++){
        rest[_key] = arguments[_key];
    }
    return undefined;
}
// If contextual typing takes place, these functions should work.
// Otherwise, the arrow functions' parameters will be typed as 'any',
// and it is an error to invoke an any-typed value with type arguments,
// so this test will error.
tempTag2(_templateObject1(), function(x) {
    x(undefined);
    return x;
}, 0);
tempTag2(_templateObject(), function(x) {
    x(undefined);
    return x;
}, function(y) {
    y(null);
    return y;
}, "hello");
tempTag2(_templateObject2(), function(x) {
    x(undefined);
    return x;
}, undefined, "hello");
