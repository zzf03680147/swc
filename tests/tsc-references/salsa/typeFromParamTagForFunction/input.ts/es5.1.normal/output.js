function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
// @filename: a-ext.js
exports.A = function() {
    this.x = 1;
};
// @filename: a.js
var ref = require("./a-ext"), A = ref.A;
/** @param {A} p */ function a(p) {
    p.x;
}
// @filename: b-ext.js
exports.B = function _class() {
    "use strict";
    _classCallCheck(this, _class);
    this.x = 1;
};
// @filename: b.js
var ref1 = require("./b-ext"), B = ref1.B;
/** @param {B} p */ function b(p) {
    p.x;
}
// @filename: c-ext.js
export function C() {
    this.x = 1;
}
// @filename: c.js
var ref2 = require("./c-ext"), C = ref2.C;
/** @param {C} p */ function c(p) {
    p.x;
}
// @filename: d-ext.js
export var D = function D() {
    this.x = 1;
};
// @filename: d.js
var ref3 = require("./d-ext"), D = ref3.D;
/** @param {D} p */ function d(p) {
    p.x;
}
// @filename: e-ext.js
export var E = function E() {
    "use strict";
    _classCallCheck(this, E);
    this.x = 1;
};
// @filename: e.js
var ref4 = require("./e-ext"), E = ref4.E;
/** @param {E} p */ function e(p) {
    p.x;
}
// @filename: f.js
var F = function F() {
    this.x = 1;
};
/** @param {F} p */ function f(p) {
    p.x;
}
// @filename: g.js
function G() {
    this.x = 1;
}
/** @param {G} p */ function g(p) {
    p.x;
}
var H = function H() {
    "use strict";
    _classCallCheck(this, H);
    this.x = 1;
};
/** @param {H} p */ function h(p) {
    p.x;
}
