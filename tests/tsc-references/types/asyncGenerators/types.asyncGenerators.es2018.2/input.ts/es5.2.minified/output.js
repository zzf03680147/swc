import regeneratorRuntime from "regenerator-runtime";
function AsyncGenerator(gen) {
    var front, back;
    function resume(key, arg) {
        try {
            var result = gen[key](arg), value = result.value, wrappedAwait = value instanceof _AwaitValue;
            Promise.resolve(wrappedAwait ? value.wrapped : value).then(function(arg) {
                if (wrappedAwait) {
                    resume("next", arg);
                    return;
                }
                settle(result.done ? "return" : "normal", arg);
            }, function(err) {
                resume("throw", err);
            });
        } catch (err) {
            settle("throw", err);
        }
    }
    function settle(type, value) {
        switch(type){
            case "return":
                front.resolve({
                    value: value,
                    done: !0
                });
                break;
            case "throw":
                front.reject(value);
                break;
            default:
                front.resolve({
                    value: value,
                    done: !1
                });
                break;
        }
        (front = front.next) ? resume(front.key, front.arg) : back = null;
    }
    this._invoke = function(key, arg) {
        return new Promise(function(resolve, reject) {
            var request = {
                key: key,
                arg: arg,
                resolve: resolve,
                reject: reject,
                next: null
            };
            back ? back = back.next = request : (front = back = request, resume(key, arg));
        });
    }, "function" != typeof gen.return && (this.return = void 0);
}
function _AwaitValue(value) {
    this.wrapped = value;
}
function _wrapAsyncGenerator(fn) {
    return function() {
        return new AsyncGenerator(fn.apply(this, arguments));
    };
}
function _inferReturnType1() {
    return (_inferReturnType1 = _wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function(_ctx) {
            for(;;)switch(_ctx.prev = _ctx.next){
                case 0:
                    return _ctx.delegateYield({
                    }, "t0", 1);
                case 1:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }))).apply(this, arguments);
}
function _inferReturnType2() {
    return (_inferReturnType2 = _wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function(_ctx) {
            for(;;)switch(_ctx.prev = _ctx.next){
                case 0:
                    return _ctx.delegateYield(inferReturnType2(), "t0", 1);
                case 1:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }))).apply(this, arguments);
}
function inferReturnType2() {
    return _inferReturnType2.apply(this, arguments);
}
function _inferReturnType3() {
    return (_inferReturnType3 = _wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function(_ctx) {
            for(;;)switch(_ctx.prev = _ctx.next){
                case 0:
                    return _ctx.delegateYield(Promise.resolve([
                        1,
                        2
                    ]), "t0", 1);
                case 1:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }))).apply(this, arguments);
}
function _explicitReturnType1() {
    return (_explicitReturnType1 = _wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function(_ctx) {
            for(;;)switch(_ctx.prev = _ctx.next){
                case 0:
                    return _ctx.next = 2, "a";
                case 2:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }))).apply(this, arguments);
}
function _explicitReturnType2() {
    return (_explicitReturnType2 = _wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function(_ctx) {
            for(;;)switch(_ctx.prev = _ctx.next){
                case 0:
                    return _ctx.delegateYield([
                        "a",
                        "b"
                    ], "t0", 1);
                case 1:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }))).apply(this, arguments);
}
function _explicitReturnType3() {
    return (_explicitReturnType3 = _wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function(_ctx) {
            for(;;)switch(_ctx.prev = _ctx.next){
                case 0:
                    return _ctx.delegateYield(_wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(function(_ctx) {
                            for(;;)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    return _ctx.next = 2, "a";
                                case 2:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))(), "t0", 1);
                case 1:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }))).apply(this, arguments);
}
function _explicitReturnType4() {
    return (_explicitReturnType4 = _wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function(_ctx) {
            for(;;)switch(_ctx.prev = _ctx.next){
                case 0:
                    return _ctx.next = 2, "a";
                case 2:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }))).apply(this, arguments);
}
function _explicitReturnType5() {
    return (_explicitReturnType5 = _wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function(_ctx) {
            for(;;)switch(_ctx.prev = _ctx.next){
                case 0:
                    return _ctx.delegateYield([
                        "a",
                        "b"
                    ], "t0", 1);
                case 1:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }))).apply(this, arguments);
}
function _explicitReturnType6() {
    return (_explicitReturnType6 = _wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function(_ctx) {
            for(;;)switch(_ctx.prev = _ctx.next){
                case 0:
                    return _ctx.delegateYield(_wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(function(_ctx) {
                            for(;;)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    return _ctx.next = 2, "a";
                                case 2:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))(), "t0", 1);
                case 1:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }))).apply(this, arguments);
}
function _explicitReturnType7() {
    return (_explicitReturnType7 = _wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function(_ctx) {
            for(;;)switch(_ctx.prev = _ctx.next){
                case 0:
                    return _ctx.next = 2, "a";
                case 2:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }))).apply(this, arguments);
}
function _explicitReturnType8() {
    return (_explicitReturnType8 = _wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function(_ctx) {
            for(;;)switch(_ctx.prev = _ctx.next){
                case 0:
                    return _ctx.delegateYield([
                        "a",
                        "b"
                    ], "t0", 1);
                case 1:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }))).apply(this, arguments);
}
function _explicitReturnType9() {
    return (_explicitReturnType9 = _wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function(_ctx) {
            for(;;)switch(_ctx.prev = _ctx.next){
                case 0:
                    return _ctx.delegateYield(_wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(function(_ctx) {
                            for(;;)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    return _ctx.next = 2, "a";
                                case 2:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))(), "t0", 1);
                case 1:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }))).apply(this, arguments);
}
function _explicitReturnType10() {
    return (_explicitReturnType10 = _wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function(_ctx) {
            for(;;)switch(_ctx.prev = _ctx.next){
                case 0:
                    return _ctx.next = 2, 1;
                case 2:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }))).apply(this, arguments);
}
function _explicitReturnType11() {
    return (_explicitReturnType11 = _wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function(_ctx) {
            for(;;)switch(_ctx.prev = _ctx.next){
                case 0:
                    return _ctx.next = 2, 1;
                case 2:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }))).apply(this, arguments);
}
function _explicitReturnType12() {
    return (_explicitReturnType12 = _wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function(_ctx) {
            for(;;)switch(_ctx.prev = _ctx.next){
                case 0:
                    return _ctx.next = 2, 1;
                case 2:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }))).apply(this, arguments);
}
function _yieldStar() {
    return (_yieldStar = _wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function(_ctx) {
            for(;;)switch(_ctx.prev = _ctx.next){
                case 0:
                    return _ctx.delegateYield({
                    }, "t0", 1);
                case 1:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }))).apply(this, arguments);
}
"function" == typeof Symbol && Symbol.asyncIterator && (AsyncGenerator.prototype[Symbol.asyncIterator] = function() {
    return this;
}), AsyncGenerator.prototype.next = function(arg) {
    return this._invoke("next", arg);
}, AsyncGenerator.prototype.throw = function(arg) {
    return this._invoke("throw", arg);
}, AsyncGenerator.prototype.return = function(arg) {
    return this._invoke("return", arg);
}, _wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function(_ctx) {
        for(;;)switch(_ctx.prev = _ctx.next){
            case 0:
                return _ctx.next = 2, "a";
            case 2:
            case "end":
                return _ctx.stop();
        }
    }, _callee);
})), _wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function(_ctx) {
        for(;;)switch(_ctx.prev = _ctx.next){
            case 0:
                return _ctx.delegateYield([
                    "a",
                    "b"
                ], "t0", 1);
            case 1:
            case "end":
                return _ctx.stop();
        }
    }, _callee);
})), _wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function(_ctx) {
        for(;;)switch(_ctx.prev = _ctx.next){
            case 0:
                return _ctx.delegateYield(_wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function(_ctx) {
                        for(;;)switch(_ctx.prev = _ctx.next){
                            case 0:
                                return _ctx.next = 2, "a";
                            case 2:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))(), "t0", 1);
            case 1:
            case "end":
                return _ctx.stop();
        }
    }, _callee);
})), _wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function(_ctx) {
        for(;;)switch(_ctx.prev = _ctx.next){
            case 0:
                return _ctx.next = 2, "a";
            case 2:
            case "end":
                return _ctx.stop();
        }
    }, _callee);
})), _wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function(_ctx) {
        for(;;)switch(_ctx.prev = _ctx.next){
            case 0:
                return _ctx.delegateYield([
                    "a",
                    "b"
                ], "t0", 1);
            case 1:
            case "end":
                return _ctx.stop();
        }
    }, _callee);
})), _wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function(_ctx) {
        for(;;)switch(_ctx.prev = _ctx.next){
            case 0:
                return _ctx.delegateYield(_wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function(_ctx) {
                        for(;;)switch(_ctx.prev = _ctx.next){
                            case 0:
                                return _ctx.next = 2, "a";
                            case 2:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))(), "t0", 1);
            case 1:
            case "end":
                return _ctx.stop();
        }
    }, _callee);
})), _wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function(_ctx) {
        for(;;)switch(_ctx.prev = _ctx.next){
            case 0:
                return _ctx.next = 2, "a";
            case 2:
            case "end":
                return _ctx.stop();
        }
    }, _callee);
})), _wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function(_ctx) {
        for(;;)switch(_ctx.prev = _ctx.next){
            case 0:
                return _ctx.delegateYield([
                    "a",
                    "b"
                ], "t0", 1);
            case 1:
            case "end":
                return _ctx.stop();
        }
    }, _callee);
})), _wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function(_ctx) {
        for(;;)switch(_ctx.prev = _ctx.next){
            case 0:
                return _ctx.delegateYield(_wrapAsyncGenerator(regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function(_ctx) {
                        for(;;)switch(_ctx.prev = _ctx.next){
                            case 0:
                                return _ctx.next = 2, "a";
                            case 2:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))(), "t0", 1);
            case 1:
            case "end":
                return _ctx.stop();
        }
    }, _callee);
}));
