function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
var C = function C() {
    "use strict";
    _classCallCheck(this, C);
};
var c;
var r = c["   "];
var r2 = c["    "];
var r3 = c["a   b"];
// BUG 817263
var r4 = c["~!@#$%^&*()_+{}|:'<>?/.,`"];
var i;
var r = i["   "];
var r2 = i["    "];
var r3 = i["a   b"];
// BUG 817263
var r4 = i["~!@#$%^&*()_+{}|:'<>?/.,`"];
var a;
var r = a["   "];
var r2 = a["    "];
var r3 = a["a   b"];
// BUG 817263
var r4 = a["~!@#$%^&*()_+{}|:'<>?/.,`"];
var b = {
    "   ": 1,
    "a   b": "",
    "~!@#$%^&*()_+{}|:'<>?/.,`": 1
};
var r = b["   "];
var r2 = b["    "];
var r3 = b["a   b"];
// BUG 817263
var r4 = b["~!@#$%^&*()_+{}|:'<>?/.,`"];
