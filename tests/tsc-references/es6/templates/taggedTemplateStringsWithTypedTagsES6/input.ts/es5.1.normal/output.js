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
        "abc"
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "abc",
        "def",
        "ghi"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _taggedTemplateLiteral([
        "abc"
    ]);
    _templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _taggedTemplateLiteral([
        "abc",
        "def",
        "ghi"
    ]);
    _templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _taggedTemplateLiteral([
        "abc"
    ]);
    _templateObject4 = function _templateObject4() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _taggedTemplateLiteral([
        "abc",
        "def",
        "ghi"
    ]);
    _templateObject5 = function _templateObject5() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _taggedTemplateLiteral([
        "abc"
    ]);
    _templateObject6 = function _templateObject6() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _taggedTemplateLiteral([
        "abc",
        "def",
        "ghi"
    ]);
    _templateObject7 = function _templateObject7() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _taggedTemplateLiteral([
        "abc",
        "def",
        "ghi"
    ]);
    _templateObject8 = function _templateObject8() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = _taggedTemplateLiteral([
        "abc",
        "def",
        "ghi"
    ]);
    _templateObject9 = function _templateObject9() {
        return data;
    };
    return data;
}
var f;
f(_templateObject1());
f(_templateObject(), 1, 2);
f(_templateObject2()).member;
f(_templateObject3(), 1, 2).member;
f(_templateObject4())["member"];
f(_templateObject5(), 1, 2)["member"];
f(_templateObject6())[0].member(_templateObject7(), 1, 2);
f(_templateObject8(), 1, 2)["member"].member(_templateObject9(), 1, 2);
f.thisIsNotATag("abc");
f.thisIsNotATag("abc".concat(1, "def", 2, "ghi"));
