// @noEmit: true
// @allowJs: true
// @checkJs: true
// @Filename: a.js
var Outer = {
};
Outer.Inner = function() {
};
Outer.Inner.prototype = {
    x: 1,
    m: function() {
    }
};
/** @type {Outer.Inner} */ var inner;
inner.x;
inner.m();
var inno = new Outer.Inner();
inno.x;
inno.m();
