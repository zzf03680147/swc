// @target: es5
var oct1 = 19230;
var oct2 = 19230;
var oct3 = Infinity;
var oct4 = 54624374234151770000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
var obj1 = {
    19230: "Hello",
    a: 19230,
    b: oct1,
    oct1: oct1,
    Infinity: true
};
var obj2 = {
    19230: "hi",
    a: 19230,
    b: oct2,
    oct2: oct2,
    54624374234151770000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000: false
};
obj1[19230]; // string
obj1["0o45436"]; // any
obj1["19230"]; // string
obj1[19230]; // string
obj1["a"]; // number
obj1["b"]; // number
obj1["oct1"]; // number
obj1["Infinity"]; // boolean
obj2[19230]; // string
obj2["0O45436"]; // any
obj2["19230"]; // string
obj2[19230]; // string
obj2["a"]; // number
obj2["b"]; // number
obj2["oct2"]; // number
obj2[54624374234151770000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000]; // boolean
obj2["5.462437423415177e+244"]; // boolean
obj2["Infinity"]; // any
