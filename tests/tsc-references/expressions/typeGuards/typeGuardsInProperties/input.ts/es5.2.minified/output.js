function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
    }
}
var strOrNum, c1, obj1, C1 = function() {
    "use strict";
    var Constructor, protoProps, staticProps;
    function C1() {
        !function(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }(this, C1);
    }
    return Constructor = C1, protoProps = [
        {
            key: "pp3",
            get: function() {
                return strOrNum;
            }
        },
        {
            key: "method",
            value: function() {
                strOrNum = "string" == typeof this.pp1 && this.pp1, strOrNum = "string" == typeof this.pp2 && this.pp2, strOrNum = "string" == typeof this.pp3 && this.pp3;
            }
        }
    ], _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), C1;
}();
strOrNum = "string" == typeof c1.pp2 && c1.pp2, strOrNum = "string" == typeof c1.pp3 && c1.pp3, strOrNum = "string" == typeof obj1.x && obj1.x;
