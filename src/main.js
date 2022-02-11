"use strict"
// ==UserScript==
// @name         Joysound视频音效增强
// @author       qianjiachun
// @icon         data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjIgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+am95c291bmQvc2VsZWN0ZWQ8L3RpdGxlPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0YwQ0I5NSIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRTlCRTgwIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9ImpveXNvdW5kL3NlbGVjdGVkIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i57yW57uEIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjc4NTc1MCwgMC43MTQyMjUpIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNMTYuNDI4NiwwIEwxNi40Mjg2LDkuNjQzIEMxNi40Mjg2LDE0LjEzNDU1MjcgMTIuODIzMzY2NywxNy43ODQyODggOC4zNDg5MzYxOCwxNy44NTYxNjk2IEw4LjE4NzE4MTUzLDE3Ljg1NzI1NjEgTDguMTg3MTgxNTMsMTcuODU3MjU2MSBMNy44NTcxLDE3Ljg1NzI1NjEgTDcuODU3MTM4OTYsMTcuODQ5NjQxIEMzLjQ5MjM4MDEzLDE3LjY2MjA3NDQgMCwxNC4wNTMxMzQxIDAsOS42NDMwNSBDMCw1LjExMzExNTA1IDMuNjg0NDAwMiwxLjQyODU1IDguMjE0MjUsMS40Mjg1NSBDOS43MDA3OTkxMywxLjQyODU1IDExLjA5NjI5ODUsMS44MjUzNTUwMiAxMi4zMDA0MTUxLDIuNTE4NjIzMzEgQzEyLjc0OTU2ODcsMS4wNjAxNjYwMSAxNC4xMDgyMjM2LDAgMTUuNzE0MzUsMCBMMTYuNDI4NiwwIFogTTguMjE0MjUsMi40Mjg1NSBDNC4yMzY2OTQ5NiwyLjQyODU1IDEsNS42NjUzODk3OCAxLDkuNjQzMDUgQzEsMTMuNTAwNzUwOCA0LjA0NDc3MzgsMTYuNjYxNzMzMyA3Ljg1NzA4ODk5LDE2Ljg0ODU2NjggTDcuODU3MDYyNTQsMTQuNTc1MDE3IEM2Ljc3Mjk4NjcxLDE0LjQ5NzMxMDMgNS43ODQ2MTcxOSwxNC4wNjg3NDc3IDUuMDA1MTgzMTEsMTMuNDAyNTU3OCBMNC45MjI0NzY5NywxMy4zMzAyNzYyIEw0LjgwNDkyNDY4LDEzLjIyMTc5NDEgQzMuODU5Mjk3NTksMTIuMzIwNjI4MyAzLjI2OTI1LDExLjA0OTU0OTYgMy4yNjkyNSw5LjY0MzAyNSBDMy4yNjkyNSw2LjkxNTg4MjYzIDUuNDg3MTA3NjMsNC42OTgwMjUgOC4yMTQyNSw0LjY5ODAyNSBDOS44MTQwMDc1Niw0LjY5ODAyNSAxMS4yMzg0NTI3LDUuNDYxMjEyMzMgMTIuMTQyNzY0NSw2LjY0MjcxMjE1IEwxMi4xNDI3NjQ1LDMuNTk0NjQ0OTEgQzExLjAxMTU4OTYsMi44NTczNjc2NSA5LjY2MTk5NDQ5LDIuNDI4NTUgOC4yMTQyNSwyLjQyODU1IFogTTguMjE0MjUsNS42OTgwMjUgQzYuMDM5MzkyMzcsNS42OTgwMjUgNC4yNjkyNSw3LjQ2ODE2NzM3IDQuMjY5MjUsOS42NDMwMjUgQzQuMjY5MjUsMTEuNjY5NTM3MyA1LjgwNjQ4MjY0LDEzLjM0NDc0OTggNy43NzU4ODgxNSwxMy41NjM1NjcyIEw3Ljg1NzEsMTMuNTcxNSBMOC4yMTQzNSwxMy41NzE1IEMxMC4zNDk2LDEzLjU3MTUgMTIuMDg2ODUsMTEuODY4IDEyLjE0MTYsOS43NDYgTDEyLjE0MjY0NjgsOS42NDMgTDEyLjE0MjY0NjgsOS4yODIzMzIzMyBDMTEuOTU5ODU4NSw3LjI3NTc1MDI2IDEwLjI2NzQ4MjMsNS42OTgwMjUgOC4yMTQyNSw1LjY5ODAyNSBaIE04LjIxNDI1LDcuNTAwMDI1IEM5LjM5NjE5Mjg0LDcuNTAwMDI1IDEwLjM1Nyw4LjQ2MDkzMzA5IDEwLjM1Nyw5LjY0MzAyNSBDMTAuMzU3LDEwLjgyNDkxNzQgOS4zOTYxNDIzNywxMS43ODU3NzUgOC4yMTQyNSwxMS43ODU3NzUgQzcuMDMyMTgyMTUsMTEuNzg1Nzc1IDYuMDcxNSwxMC44MjQ5OTE5IDYuMDcxNSw5LjY0MzAyNSBDNi4wNzE1LDguNDYwODU4NTUgNy4wMzIxMzE2OSw3LjUwMDAyNSA4LjIxNDI1LDcuNTAwMDI1IFogTTguMjE0MjUsOC41MDAwMjUgQzcuNTg0NDYzNDgsOC41MDAwMjUgNy4wNzE1LDkuMDEzMDk2MjcgNy4wNzE1LDkuNjQzMDI1IEM3LjA3MTUsMTAuMjcyNzMwNyA3LjU4NDQ5MDQyLDEwLjc4NTc3NSA4LjIxNDI1LDEwLjc4NTc3NSBDOC44NDM4NTc2MywxMC43ODU3NzUgOS4zNTcsMTAuMjcyNjMyNiA5LjM1Nyw5LjY0MzAyNSBDOS4zNTcsOS4wMTMxOTQzMyA4Ljg0Mzg4NDU3LDguNTAwMDI1IDguMjE0MjUsOC41MDAwMjUgWiIgaWQ9IuW9oueKtiI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+
// @namespace    https://github.com/qianjiachun/joysound-tampermonkey
// @version      2022.02.11.01
// @description  通用网页视频音效增强/优化。Enhance/Optimize video sound in web.
// @match        *://*/*
// @include      *://*/*
// @grant        unsafeWindow
// @grant        GM_registerMenuCommand
// @license MIT
// ==/UserScript==

let Joysound = null;
window.asyncPlayerPlugins = function (t) {
    var e = {};
    function n(i) {
        if (e[i])
            return e[i].exports;
        var r = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, n),
            r.l = !0,
            r.exports
    }
    return n.m = t,
        n.c = e,
        n.d = function (t, e, i) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: i
            })
        },
        n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
        },
        n.t = function (t, e) {
            if (1 & e && (t = n(t)),
                8 & e)
                return t;
            if (4 & e && "object" == typeof t && t && t.__esModule)
                return t;
            var i = Object.create(null);
            if (n.r(i),
                Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: t
                }),
                2 & e && "string" != typeof t)
                for (var r in t)
                    n.d(i, r, function (e) {
                            return t[e]
                        }
                        .bind(null, r));
            return i
        },
        n.n = function (t) {
            var e = t && t.__esModule ? function () {
                    return t.default
                } :
                function () {
                    return t
                };
            return n.d(e, "a", e),
                e
        },
        n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        },
        n.p = "/",
        n(n.s = 363)
}([function (t, e, n) {
    "use strict";
    var i = n(225),
        r = n(226),
        a = n(46);
    t.exports = {
        formats: a,
        parse: r,
        stringify: i
    }
}, function (t, e, n) {
    "use strict";
    t.exports = function (t) {
        var e = [];
        return e.toString = function () {
                return this.map((function (e) {
                    var n = function (t, e) {
                        var n = t[1] || "",
                            i = t[3];
                        if (!i)
                            return n;
                        if (e && "function" == typeof btoa) {
                            var r = (o = i,
                                    s = btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                                    l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),
                                    "/*# ".concat(l, " */")),
                                a = i.sources.map((function (t) {
                                    return "/*# sourceURL=".concat(i.sourceRoot).concat(t, " */")
                                }));
                            return [n].concat(a).concat([r]).join("\n")
                        }
                        var o, s, l;
                        return [n].join("\n")
                    }(e, t);
                    return e[2] ? "@media ".concat(e[2], "{").concat(n, "}") : n
                })).join("")
            },
            e.i = function (t, n) {
                "string" == typeof t && (t = [
                    [null, t, ""]
                ]);
                for (var i = {}, r = 0; r < this.length; r++) {
                    var a = this[r][0];
                    null != a && (i[a] = !0)
                }
                for (var o = 0; o < t.length; o++) {
                    var s = t[o];
                    null != s[0] && i[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(".concat(s[2], ") and (").concat(n, ")")),
                        e.push(s))
                }
            },
            e
    }
}, function (t, e, n) {
    "use strict";
    var i, r = {},
        a = function () {
            return void 0 === i && (i = Boolean(window && document && document.all && !window.atob)),
                i
        },
        o = function () {
            var t = {};
            return function (e) {
                if (void 0 === t[e]) {
                    var n = document.querySelector(e);
                    if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                        try {
                            n = n.contentDocument.head
                        } catch (t) {
                            n = null
                        }
                    t[e] = n
                }
                return t[e]
            }
        }();

    function s(t, e) {
        for (var n = [], i = {}, r = 0; r < t.length; r++) {
            var a = t[r],
                o = e.base ? a[0] + e.base : a[0],
                s = {
                    css: a[1],
                    media: a[2],
                    sourceMap: a[3]
                };
            i[o] ? i[o].parts.push(s) : n.push(i[o] = {
                id: o,
                parts: [s]
            })
        }
        return n
    }

    function l(t, e) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n],
                a = r[i.id],
                o = 0;
            if (a) {
                for (a.refs++; o < a.parts.length; o++)
                    a.parts[o](i.parts[o]);
                for (; o < i.parts.length; o++)
                    a.parts.push(A(i.parts[o], e))
            } else {
                for (var s = []; o < i.parts.length; o++)
                    s.push(A(i.parts[o], e));
                r[i.id] = {
                    id: i.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }

    function c(t) {
        var e = document.createElement("style");
        if (void 0 === t.attributes.nonce) {
            var i = n.nc;
            i && (t.attributes.nonce = i)
        }
        if (Object.keys(t.attributes).forEach((function (n) {
                e.setAttribute(n, t.attributes[n])
            })),
            "function" == typeof t.insert)
            t.insert(e);
        else {
            var r = o(t.insert || "head");
            if (!r)
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            r.appendChild(e)
        }
        return e
    }
    var u, p = (u = [],
        function (t, e) {
            return u[t] = e,
                u.filter(Boolean).join("\n")
        }
    );

    function h(t, e, n, i) {
        var r = n ? "" : i.css;
        if (t.styleSheet)
            t.styleSheet.cssText = p(e, r);
        else {
            var a = document.createTextNode(r),
                o = t.childNodes;
            o[e] && t.removeChild(o[e]),
                o.length ? t.insertBefore(a, o[e]) : t.appendChild(a)
        }
    }

    function d(t, e, n) {
        var i = n.css,
            r = n.media,
            a = n.sourceMap;
        if (r && t.setAttribute("media", r),
            a && btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")),
            t.styleSheet)
            t.styleSheet.cssText = i;
        else {
            for (; t.firstChild;)
                t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(i))
        }
    }
    var f = null,
        g = 0;

    function A(t, e) {
        var n, i, r;
        if (e.singleton) {
            var a = g++;
            n = f || (f = c(e)),
                i = h.bind(null, n, a, !1),
                r = h.bind(null, n, a, !0)
        } else
            n = c(e),
            i = d.bind(null, n, e),
            r = function () {
                ! function (t) {
                    if (null === t.parentNode)
                        return !1;
                    t.parentNode.removeChild(t)
                }(n)
            };
        return i(t),
            function (e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap)
                        return;
                    i(t = e)
                } else
                    r()
            }
    }
    t.exports = function (t, e) {
        (e = e || {}).attributes = "object" == typeof e.attributes ? e.attributes : {},
            e.singleton || "boolean" == typeof e.singleton || (e.singleton = a());
        var n = s(t, e);
        return l(n, e),
            function (t) {
                for (var i = [], a = 0; a < n.length; a++) {
                    var o = n[a],
                        c = r[o.id];
                    c && (c.refs--,
                        i.push(c))
                }
                t && l(s(t, e), e);
                for (var u = 0; u < i.length; u++) {
                    var p = i[u];
                    if (0 === p.refs) {
                        for (var h = 0; h < p.parts.length; h++)
                            p.parts[h]();
                        delete r[p.id]
                    }
                }
            }
    }
}, function (t, e, n) {
    "use strict";
    var i = n(27),
        r = Object.prototype.toString;

    function a(t) {
        return "[object Array]" === r.call(t)
    }

    function o(t) {
        return void 0 === t
    }

    function s(t) {
        return null !== t && "object" == typeof t
    }

    function l(t) {
        return "[object Function]" === r.call(t)
    }

    function c(t, e) {
        if (null != t)
            if ("object" != typeof t && (t = [t]),
                a(t))
                for (var n = 0, i = t.length; n < i; n++)
                    e.call(null, t[n], n, t);
            else
                for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && e.call(null, t[r], r, t)
    }
    t.exports = {
        isArray: a,
        isArrayBuffer: function (t) {
            return "[object ArrayBuffer]" === r.call(t)
        },
        isBuffer: function (t) {
            return null !== t && !o(t) && null !== t.constructor && !o(t.constructor) && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
        },
        isFormData: function (t) {
            return "undefined" != typeof FormData && t instanceof FormData
        },
        isArrayBufferView: function (t) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
        },
        isString: function (t) {
            return "string" == typeof t
        },
        isNumber: function (t) {
            return "number" == typeof t
        },
        isObject: s,
        isUndefined: o,
        isDate: function (t) {
            return "[object Date]" === r.call(t)
        },
        isFile: function (t) {
            return "[object File]" === r.call(t)
        },
        isBlob: function (t) {
            return "[object Blob]" === r.call(t)
        },
        isFunction: l,
        isStream: function (t) {
            return s(t) && l(t.pipe)
        },
        isURLSearchParams: function (t) {
            return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
        },
        isStandardBrowserEnv: function () {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        },
        forEach: c,
        merge: function t() {
            var e = {};

            function n(n, i) {
                "object" == typeof e[i] && "object" == typeof n ? e[i] = t(e[i], n) : e[i] = n
            }
            for (var i = 0, r = arguments.length; i < r; i++)
                c(arguments[i], n);
            return e
        },
        deepMerge: function t() {
            var e = {};

            function n(n, i) {
                "object" == typeof e[i] && "object" == typeof n ? e[i] = t(e[i], n) : e[i] = "object" == typeof n ? t({}, n) : n
            }
            for (var i = 0, r = arguments.length; i < r; i++)
                c(arguments[i], n);
            return e
        },
        extend: function (t, e, n) {
            return c(e, (function (e, r) {
                    t[r] = n && "function" == typeof e ? i(e, n) : e
                })),
                t
        },
        trim: function (t) {
            return t.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}, function (t, e, n) {
    "use strict";
    var i = n(37),
        r = Object.prototype.toString;

    function a(t) {
        return "[object Array]" === r.call(t)
    }

    function o(t) {
        return void 0 === t
    }

    function s(t) {
        return null !== t && "object" == typeof t
    }

    function l(t) {
        return "[object Function]" === r.call(t)
    }

    function c(t, e) {
        if (null != t)
            if ("object" != typeof t && (t = [t]),
                a(t))
                for (var n = 0, i = t.length; n < i; n++)
                    e.call(null, t[n], n, t);
            else
                for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && e.call(null, t[r], r, t)
    }
    t.exports = {
        isArray: a,
        isArrayBuffer: function (t) {
            return "[object ArrayBuffer]" === r.call(t)
        },
        isBuffer: function (t) {
            return null !== t && !o(t) && null !== t.constructor && !o(t.constructor) && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
        },
        isFormData: function (t) {
            return "undefined" != typeof FormData && t instanceof FormData
        },
        isArrayBufferView: function (t) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
        },
        isString: function (t) {
            return "string" == typeof t
        },
        isNumber: function (t) {
            return "number" == typeof t
        },
        isObject: s,
        isUndefined: o,
        isDate: function (t) {
            return "[object Date]" === r.call(t)
        },
        isFile: function (t) {
            return "[object File]" === r.call(t)
        },
        isBlob: function (t) {
            return "[object Blob]" === r.call(t)
        },
        isFunction: l,
        isStream: function (t) {
            return s(t) && l(t.pipe)
        },
        isURLSearchParams: function (t) {
            return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
        },
        isStandardBrowserEnv: function () {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        },
        forEach: c,
        merge: function t() {
            var e = {};

            function n(n, i) {
                "object" == typeof e[i] && "object" == typeof n ? e[i] = t(e[i], n) : e[i] = n
            }
            for (var i = 0, r = arguments.length; i < r; i++)
                c(arguments[i], n);
            return e
        },
        deepMerge: function t() {
            var e = {};

            function n(n, i) {
                "object" == typeof e[i] && "object" == typeof n ? e[i] = t(e[i], n) : e[i] = "object" == typeof n ? t({}, n) : n
            }
            for (var i = 0, r = arguments.length; i < r; i++)
                c(arguments[i], n);
            return e
        },
        extend: function (t, e, n) {
            return c(e, (function (e, r) {
                    t[r] = n && "function" == typeof e ? i(e, n) : e
                })),
                t
        },
        trim: function (t) {
            return t.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}, function (t, e, n) {
    "use strict";
    var i = n(47),
        r = Object.prototype.toString;

    function a(t) {
        return "[object Array]" === r.call(t)
    }

    function o(t) {
        return void 0 === t
    }

    function s(t) {
        return null !== t && "object" == typeof t
    }

    function l(t) {
        return "[object Function]" === r.call(t)
    }

    function c(t, e) {
        if (null != t)
            if ("object" != typeof t && (t = [t]),
                a(t))
                for (var n = 0, i = t.length; n < i; n++)
                    e.call(null, t[n], n, t);
            else
                for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && e.call(null, t[r], r, t)
    }
    t.exports = {
        isArray: a,
        isArrayBuffer: function (t) {
            return "[object ArrayBuffer]" === r.call(t)
        },
        isBuffer: function (t) {
            return null !== t && !o(t) && null !== t.constructor && !o(t.constructor) && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
        },
        isFormData: function (t) {
            return "undefined" != typeof FormData && t instanceof FormData
        },
        isArrayBufferView: function (t) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
        },
        isString: function (t) {
            return "string" == typeof t
        },
        isNumber: function (t) {
            return "number" == typeof t
        },
        isObject: s,
        isUndefined: o,
        isDate: function (t) {
            return "[object Date]" === r.call(t)
        },
        isFile: function (t) {
            return "[object File]" === r.call(t)
        },
        isBlob: function (t) {
            return "[object Blob]" === r.call(t)
        },
        isFunction: l,
        isStream: function (t) {
            return s(t) && l(t.pipe)
        },
        isURLSearchParams: function (t) {
            return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
        },
        isStandardBrowserEnv: function () {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        },
        forEach: c,
        merge: function t() {
            var e = {};

            function n(n, i) {
                "object" == typeof e[i] && "object" == typeof n ? e[i] = t(e[i], n) : e[i] = n
            }
            for (var i = 0, r = arguments.length; i < r; i++)
                c(arguments[i], n);
            return e
        },
        deepMerge: function t() {
            var e = {};

            function n(n, i) {
                "object" == typeof e[i] && "object" == typeof n ? e[i] = t(e[i], n) : e[i] = "object" == typeof n ? t({}, n) : n
            }
            for (var i = 0, r = arguments.length; i < r; i++)
                c(arguments[i], n);
            return e
        },
        extend: function (t, e, n) {
            return c(e, (function (e, r) {
                    t[r] = n && "function" == typeof e ? i(e, n) : e
                })),
                t
        },
        trim: function (t) {
            return t.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}, function (t, e, n) {
    "use strict";
    var i = n(55),
        r = Object.prototype.toString;

    function a(t) {
        return "[object Array]" === r.call(t)
    }

    function o(t) {
        return void 0 === t
    }

    function s(t) {
        return null !== t && "object" == typeof t
    }

    function l(t) {
        return "[object Function]" === r.call(t)
    }

    function c(t, e) {
        if (null != t)
            if ("object" != typeof t && (t = [t]),
                a(t))
                for (var n = 0, i = t.length; n < i; n++)
                    e.call(null, t[n], n, t);
            else
                for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && e.call(null, t[r], r, t)
    }
    t.exports = {
        isArray: a,
        isArrayBuffer: function (t) {
            return "[object ArrayBuffer]" === r.call(t)
        },
        isBuffer: function (t) {
            return null !== t && !o(t) && null !== t.constructor && !o(t.constructor) && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
        },
        isFormData: function (t) {
            return "undefined" != typeof FormData && t instanceof FormData
        },
        isArrayBufferView: function (t) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
        },
        isString: function (t) {
            return "string" == typeof t
        },
        isNumber: function (t) {
            return "number" == typeof t
        },
        isObject: s,
        isUndefined: o,
        isDate: function (t) {
            return "[object Date]" === r.call(t)
        },
        isFile: function (t) {
            return "[object File]" === r.call(t)
        },
        isBlob: function (t) {
            return "[object Blob]" === r.call(t)
        },
        isFunction: l,
        isStream: function (t) {
            return s(t) && l(t.pipe)
        },
        isURLSearchParams: function (t) {
            return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
        },
        isStandardBrowserEnv: function () {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        },
        forEach: c,
        merge: function t() {
            var e = {};

            function n(n, i) {
                "object" == typeof e[i] && "object" == typeof n ? e[i] = t(e[i], n) : e[i] = n
            }
            for (var i = 0, r = arguments.length; i < r; i++)
                c(arguments[i], n);
            return e
        },
        deepMerge: function t() {
            var e = {};

            function n(n, i) {
                "object" == typeof e[i] && "object" == typeof n ? e[i] = t(e[i], n) : e[i] = "object" == typeof n ? t({}, n) : n
            }
            for (var i = 0, r = arguments.length; i < r; i++)
                c(arguments[i], n);
            return e
        },
        extend: function (t, e, n) {
            return c(e, (function (e, r) {
                    t[r] = n && "function" == typeof e ? i(e, n) : e
                })),
                t
        },
        trim: function (t) {
            return t.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}, function (t, e, n) {
    "use strict";
    var i = n(63),
        r = Object.prototype.toString;

    function a(t) {
        return "[object Array]" === r.call(t)
    }

    function o(t) {
        return void 0 === t
    }

    function s(t) {
        return null !== t && "object" == typeof t
    }

    function l(t) {
        return "[object Function]" === r.call(t)
    }

    function c(t, e) {
        if (null != t)
            if ("object" != typeof t && (t = [t]),
                a(t))
                for (var n = 0, i = t.length; n < i; n++)
                    e.call(null, t[n], n, t);
            else
                for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && e.call(null, t[r], r, t)
    }
    t.exports = {
        isArray: a,
        isArrayBuffer: function (t) {
            return "[object ArrayBuffer]" === r.call(t)
        },
        isBuffer: function (t) {
            return null !== t && !o(t) && null !== t.constructor && !o(t.constructor) && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
        },
        isFormData: function (t) {
            return "undefined" != typeof FormData && t instanceof FormData
        },
        isArrayBufferView: function (t) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
        },
        isString: function (t) {
            return "string" == typeof t
        },
        isNumber: function (t) {
            return "number" == typeof t
        },
        isObject: s,
        isUndefined: o,
        isDate: function (t) {
            return "[object Date]" === r.call(t)
        },
        isFile: function (t) {
            return "[object File]" === r.call(t)
        },
        isBlob: function (t) {
            return "[object Blob]" === r.call(t)
        },
        isFunction: l,
        isStream: function (t) {
            return s(t) && l(t.pipe)
        },
        isURLSearchParams: function (t) {
            return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
        },
        isStandardBrowserEnv: function () {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        },
        forEach: c,
        merge: function t() {
            var e = {};

            function n(n, i) {
                "object" == typeof e[i] && "object" == typeof n ? e[i] = t(e[i], n) : e[i] = n
            }
            for (var i = 0, r = arguments.length; i < r; i++)
                c(arguments[i], n);
            return e
        },
        deepMerge: function t() {
            var e = {};

            function n(n, i) {
                "object" == typeof e[i] && "object" == typeof n ? e[i] = t(e[i], n) : e[i] = "object" == typeof n ? t({}, n) : n
            }
            for (var i = 0, r = arguments.length; i < r; i++)
                c(arguments[i], n);
            return e
        },
        extend: function (t, e, n) {
            return c(e, (function (e, r) {
                    t[r] = n && "function" == typeof e ? i(e, n) : e
                })),
                t
        },
        trim: function (t) {
            return t.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}, function (t, e, n) {
    "use strict";
    var i = n(71),
        r = Object.prototype.toString;

    function a(t) {
        return "[object Array]" === r.call(t)
    }

    function o(t) {
        return void 0 === t
    }

    function s(t) {
        return null !== t && "object" == typeof t
    }

    function l(t) {
        return "[object Function]" === r.call(t)
    }

    function c(t, e) {
        if (null != t)
            if ("object" != typeof t && (t = [t]),
                a(t))
                for (var n = 0, i = t.length; n < i; n++)
                    e.call(null, t[n], n, t);
            else
                for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && e.call(null, t[r], r, t)
    }
    t.exports = {
        isArray: a,
        isArrayBuffer: function (t) {
            return "[object ArrayBuffer]" === r.call(t)
        },
        isBuffer: function (t) {
            return null !== t && !o(t) && null !== t.constructor && !o(t.constructor) && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
        },
        isFormData: function (t) {
            return "undefined" != typeof FormData && t instanceof FormData
        },
        isArrayBufferView: function (t) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
        },
        isString: function (t) {
            return "string" == typeof t
        },
        isNumber: function (t) {
            return "number" == typeof t
        },
        isObject: s,
        isUndefined: o,
        isDate: function (t) {
            return "[object Date]" === r.call(t)
        },
        isFile: function (t) {
            return "[object File]" === r.call(t)
        },
        isBlob: function (t) {
            return "[object Blob]" === r.call(t)
        },
        isFunction: l,
        isStream: function (t) {
            return s(t) && l(t.pipe)
        },
        isURLSearchParams: function (t) {
            return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
        },
        isStandardBrowserEnv: function () {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        },
        forEach: c,
        merge: function t() {
            var e = {};

            function n(n, i) {
                "object" == typeof e[i] && "object" == typeof n ? e[i] = t(e[i], n) : e[i] = n
            }
            for (var i = 0, r = arguments.length; i < r; i++)
                c(arguments[i], n);
            return e
        },
        deepMerge: function t() {
            var e = {};

            function n(n, i) {
                "object" == typeof e[i] && "object" == typeof n ? e[i] = t(e[i], n) : e[i] = "object" == typeof n ? t({}, n) : n
            }
            for (var i = 0, r = arguments.length; i < r; i++)
                c(arguments[i], n);
            return e
        },
        extend: function (t, e, n) {
            return c(e, (function (e, r) {
                    t[r] = n && "function" == typeof e ? i(e, n) : e
                })),
                t
        },
        trim: function (t) {
            return t.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}, function (t, e, n) {
    "use strict";
    var i = n(84),
        r = Object.prototype.toString;

    function a(t) {
        return "[object Array]" === r.call(t)
    }

    function o(t) {
        return void 0 === t
    }

    function s(t) {
        return null !== t && "object" == typeof t
    }

    function l(t) {
        return "[object Function]" === r.call(t)
    }

    function c(t, e) {
        if (null != t)
            if ("object" != typeof t && (t = [t]),
                a(t))
                for (var n = 0, i = t.length; n < i; n++)
                    e.call(null, t[n], n, t);
            else
                for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && e.call(null, t[r], r, t)
    }
    t.exports = {
        isArray: a,
        isArrayBuffer: function (t) {
            return "[object ArrayBuffer]" === r.call(t)
        },
        isBuffer: function (t) {
            return null !== t && !o(t) && null !== t.constructor && !o(t.constructor) && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
        },
        isFormData: function (t) {
            return "undefined" != typeof FormData && t instanceof FormData
        },
        isArrayBufferView: function (t) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
        },
        isString: function (t) {
            return "string" == typeof t
        },
        isNumber: function (t) {
            return "number" == typeof t
        },
        isObject: s,
        isUndefined: o,
        isDate: function (t) {
            return "[object Date]" === r.call(t)
        },
        isFile: function (t) {
            return "[object File]" === r.call(t)
        },
        isBlob: function (t) {
            return "[object Blob]" === r.call(t)
        },
        isFunction: l,
        isStream: function (t) {
            return s(t) && l(t.pipe)
        },
        isURLSearchParams: function (t) {
            return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
        },
        isStandardBrowserEnv: function () {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        },
        forEach: c,
        merge: function t() {
            var e = {};

            function n(n, i) {
                "object" == typeof e[i] && "object" == typeof n ? e[i] = t(e[i], n) : e[i] = n
            }
            for (var i = 0, r = arguments.length; i < r; i++)
                c(arguments[i], n);
            return e
        },
        deepMerge: function t() {
            var e = {};

            function n(n, i) {
                "object" == typeof e[i] && "object" == typeof n ? e[i] = t(e[i], n) : e[i] = "object" == typeof n ? t({}, n) : n
            }
            for (var i = 0, r = arguments.length; i < r; i++)
                c(arguments[i], n);
            return e
        },
        extend: function (t, e, n) {
            return c(e, (function (e, r) {
                    t[r] = n && "function" == typeof e ? i(e, n) : e
                })),
                t
        },
        trim: function (t) {
            return t.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}, function (t, e, n) {
    (function (t, n) {
        ! function (e) {
            }(e)
    }).call(this, n(35), n(20)(t))
}, function (t, e, n) {
    t.exports = n(189)
}, function (t, e, n) {
    "use strict";
    e.decode = e.parse = n(205),
        e.encode = e.stringify = n(206)
}, function (t, e, n) {
    t.exports = n(248)
}, function (t, e, n) {
    "use strict";
    t.exports = function (t, e) {
        return "string" != typeof (t = t.__esModule ? t.default : t) ? t : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
            /["'() \t\n]/.test(t) || e ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : t)
    }
}, function (t, e) {
    var n, i, r = t.exports = {};

    function a() {
        throw new Error("setTimeout has not been defined")
    }

    function o() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(t) {
        if (n === setTimeout)
            return setTimeout(t, 0);
        if ((n === a || !n) && setTimeout)
            return n = setTimeout,
                setTimeout(t, 0);
        try {
            return n(t, 0)
        } catch (e) {
            try {
                return n.call(null, t, 0)
            } catch (e) {
                return n.call(this, t, 0)
            }
        }
    }! function () {
        try {
            n = "function" == typeof setTimeout ? setTimeout : a
        } catch (t) {
            n = a
        }
        try {
            i = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (t) {
            i = o
        }
    }();
    var l, c = [],
        u = !1,
        p = -1;

    function h() {
        u && l && (u = !1,
            l.length ? c = l.concat(c) : p = -1,
            c.length && d())
    }

    function d() {
        if (!u) {
            var t = s(h);
            u = !0;
            for (var e = c.length; e;) {
                for (l = c,
                    c = []; ++p < e;)
                    l && l[p].run();
                p = -1,
                    e = c.length
            }
            l = null,
                u = !1,
                function (t) {
                    if (i === clearTimeout)
                        return clearTimeout(t);
                    if ((i === o || !i) && clearTimeout)
                        return i = clearTimeout,
                            clearTimeout(t);
                    try {
                        i(t)
                    } catch (e) {
                        try {
                            return i.call(null, t)
                        } catch (e) {
                            return i.call(this, t)
                        }
                    }
                }(t)
        }
    }

    function f(t, e) {
        this.fun = t,
            this.array = e
    }

    function g() {}
    r.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
            c.push(new f(t, e)),
                1 !== c.length || u || s(d)
        },
        f.prototype.run = function () {
            this.fun.apply(null, this.array)
        },
        r.title = "browser",
        r.browser = !0,
        r.env = {},
        r.argv = [],
        r.version = "",
        r.versions = {},
        r.on = g,
        r.addListener = g,
        r.once = g,
        r.off = g,
        r.removeListener = g,
        r.removeAllListeners = g,
        r.emit = g,
        r.prependListener = g,
        r.prependOnceListener = g,
        r.listeners = function (t) {
            return []
        },
        r.binding = function (t) {
            throw new Error("process.binding is not supported")
        },
        r.cwd = function () {
            return "/"
        },
        r.chdir = function (t) {
            throw new Error("process.chdir is not supported")
        },
        r.umask = function () {
            return 0
        }
}, function (t, e, n) {
    t.exports = n(227)
}, function (t, e, n) {
    (function (e) {
        var n;
        "undefined" != typeof window && (n = function () {
                return function (t) {
                    var e = {};

                    function n(i) {
                        if (e[i])
                            return e[i].exports;
                        var r = e[i] = {
                            i: i,
                            l: !1,
                            exports: {}
                        };
                        return t[i].call(r.exports, r, r.exports, n),
                            r.l = !0,
                            r.exports
                    }
                    return n.m = t,
                        n.c = e,
                        n.d = function (t, e, i) {
                            n.o(t, e) || Object.defineProperty(t, e, {
                                enumerable: !0,
                                get: i
                            })
                        },
                        n.r = function (t) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                                    value: "Module"
                                }),
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                })
                        },
                        n.t = function (t, e) {
                            if (1 & e && (t = n(t)),
                                8 & e)
                                return t;
                            if (4 & e && "object" == typeof t && t && t.__esModule)
                                return t;
                            var i = Object.create(null);
                            if (n.r(i),
                                Object.defineProperty(i, "default", {
                                    enumerable: !0,
                                    value: t
                                }),
                                2 & e && "string" != typeof t)
                                for (var r in t)
                                    n.d(i, r, function (e) {
                                            return t[e]
                                        }
                                        .bind(null, r));
                            return i
                        },
                        n.n = function (t) {
                            var e = t && t.__esModule ? function () {
                                    return t.default
                                } :
                                function () {
                                    return t
                                };
                            return n.d(e, "a", e),
                                e
                        },
                        n.o = function (t, e) {
                            return Object.prototype.hasOwnProperty.call(t, e)
                        },
                        n.p = "",
                        n(n.s = "./src/index.ts")
                }({
                    "./node_modules/@babel/runtime/helpers/construct.js":
                        /*!**********************************************************!*\
                         !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
                         \**********************************************************/
                        /*! no static exports found */
                        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                        function (t, e, n) {
                            var i = n( /*! ./setPrototypeOf.js */
                                    "./node_modules/@babel/runtime/helpers/setPrototypeOf.js"),
                                r = n( /*! ./isNativeReflectConstruct.js */
                                    "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

                            function a(e, n, o) {
                                return r() ? (t.exports = a = Reflect.construct,
                                        t.exports.default = t.exports,
                                        t.exports.__esModule = !0) : (t.exports = a = function (t, e, n) {
                                            var r = [null];
                                            r.push.apply(r, e);
                                            var a = new(Function.bind.apply(t, r));
                                            return n && i(a, n.prototype),
                                                a
                                        },
                                        t.exports.default = t.exports,
                                        t.exports.__esModule = !0),
                                    a.apply(null, arguments)
                            }
                            t.exports = a,
                                t.exports.default = t.exports,
                                t.exports.__esModule = !0
                        },
                    "./node_modules/@babel/runtime/helpers/createClass.js":
                        /*!************************************************************!*\
                         !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
                         \************************************************************/
                        /*! no static exports found */
                        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                        function (t, e) {
                            function n(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var i = e[n];
                                    i.enumerable = i.enumerable || !1,
                                        i.configurable = !0,
                                        "value" in i && (i.writable = !0),
                                        Object.defineProperty(t, i.key, i)
                                }
                            }
                            t.exports = function (t, e, i) {
                                    return e && n(t.prototype, e),
                                        i && n(t, i),
                                        t
                                },
                                t.exports.default = t.exports,
                                t.exports.__esModule = !0
                        },
                    "./node_modules/@babel/runtime/helpers/extends.js":
                        /*!********************************************************!*\
                         !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
                         \********************************************************/
                        /*! no static exports found */
                        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                        function (t, e) {
                            function n() {
                                return t.exports = n = Object.assign || function (t) {
                                        for (var e = 1; e < arguments.length; e++) {
                                            var n = arguments[e];
                                            for (var i in n)
                                                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                                        }
                                        return t
                                    },
                                    t.exports.default = t.exports,
                                    t.exports.__esModule = !0,
                                    n.apply(this, arguments)
                            }
                            t.exports = n,
                                t.exports.default = t.exports,
                                t.exports.__esModule = !0
                        },
                    "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
                        /*!***************************************************************!*\
                         !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
                         \***************************************************************/
                        /*! no static exports found */
                        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                        function (t, e) {
                            function n(e) {
                                return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                                        return t.__proto__ || Object.getPrototypeOf(t)
                                    },
                                    t.exports.default = t.exports,
                                    t.exports.__esModule = !0,
                                    n(e)
                            }
                            t.exports = n,
                                t.exports.default = t.exports,
                                t.exports.__esModule = !0
                        },
                    "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
                        /*!**************************************************************!*\
                         !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
                         \**************************************************************/
                        /*! no static exports found */
                        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                        function (t, e, n) {
                            var i = n( /*! ./setPrototypeOf.js */
                                "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");
                            t.exports = function (t, e) {
                                    t.prototype = Object.create(e.prototype),
                                        t.prototype.constructor = t,
                                        i(t, e)
                                },
                                t.exports.default = t.exports,
                                t.exports.__esModule = !0
                        },
                    "./node_modules/@babel/runtime/helpers/isNativeFunction.js":
                        /*!*****************************************************************!*\
                         !*** ./node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
                         \*****************************************************************/
                        /*! no static exports found */
                        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                        function (t, e) {
                            t.exports = function (t) {
                                    return -1 !== Function.toString.call(t).indexOf("[native code]")
                                },
                                t.exports.default = t.exports,
                                t.exports.__esModule = !0
                        },
                    "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
                        /*!*************************************************************************!*\
                         !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
                         \*************************************************************************/
                        /*! no static exports found */
                        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                        function (t, e) {
                            t.exports = function () {
                                    if ("undefined" == typeof Reflect || !Reflect.construct)
                                        return !1;
                                    if (Reflect.construct.sham)
                                        return !1;
                                    if ("function" == typeof Proxy)
                                        return !0;
                                    try {
                                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))),
                                            !0
                                    } catch (t) {
                                        return !1
                                    }
                                },
                                t.exports.default = t.exports,
                                t.exports.__esModule = !0
                        },
                    "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
                        /*!***************************************************************!*\
                         !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
                         \***************************************************************/
                        /*! no static exports found */
                        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                        function (t, e) {
                            function n(e, i) {
                                return t.exports = n = Object.setPrototypeOf || function (t, e) {
                                        return t.__proto__ = e,
                                            t
                                    },
                                    t.exports.default = t.exports,
                                    t.exports.__esModule = !0,
                                    n(e, i)
                            }
                            t.exports = n,
                                t.exports.default = t.exports,
                                t.exports.__esModule = !0
                        },
                    "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js":
                        /*!****************************************************************!*\
                         !*** ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
                         \****************************************************************/
                        /*! no static exports found */
                        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                        function (t, e, n) {
                            var i = n( /*! ./getPrototypeOf.js */
                                    "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),
                                r = n( /*! ./setPrototypeOf.js */
                                    "./node_modules/@babel/runtime/helpers/setPrototypeOf.js"),
                                a = n( /*! ./isNativeFunction.js */
                                    "./node_modules/@babel/runtime/helpers/isNativeFunction.js"),
                                o = n( /*! ./construct.js */
                                    "./node_modules/@babel/runtime/helpers/construct.js");

                            function s(e) {
                                var n = "function" == typeof Map ? new Map : void 0;
                                return t.exports = s = function (t) {
                                        if (null === t || !a(t))
                                            return t;
                                        if ("function" != typeof t)
                                            throw new TypeError("Super expression must either be null or a function");
                                        if (void 0 !== n) {
                                            if (n.has(t))
                                                return n.get(t);
                                            n.set(t, e)
                                        }

                                        function e() {
                                            return o(t, arguments, i(this).constructor)
                                        }
                                        return e.prototype = Object.create(t.prototype, {
                                                constructor: {
                                                    value: e,
                                                    enumerable: !1,
                                                    writable: !0,
                                                    configurable: !0
                                                }
                                            }),
                                            r(e, t)
                                    },
                                    t.exports.default = t.exports,
                                    t.exports.__esModule = !0,
                                    s(e)
                            }
                            t.exports = s,
                                t.exports.default = t.exports,
                                t.exports.__esModule = !0
                        },
                    "./node_modules/events/events.js":
                        /*!***************************************!*\
                         !*** ./node_modules/events/events.js ***!
                         \***************************************/
                        /*! no static exports found */
                        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                        function (t, e, n) {
                            "use strict";
                            var i, r = "object" == typeof Reflect ? Reflect : null,
                                a = r && "function" == typeof r.apply ? r.apply : function (t, e, n) {
                                    return Function.prototype.apply.call(t, e, n)
                                };
                            i = r && "function" == typeof r.ownKeys ? r.ownKeys : Object.getOwnPropertySymbols ? function (t) {
                                    return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
                                } :
                                function (t) {
                                    return Object.getOwnPropertyNames(t)
                                };
                            var o = Number.isNaN || function (t) {
                                return t != t
                            };

                            function s() {
                                s.init.call(this)
                            }
                            t.exports = s,
                                t.exports.once = function (t, e) {
                                    return new Promise((function (n, i) {
                                        function r(n) {
                                            t.removeListener(e, a),
                                                i(n)
                                        }

                                        function a() {
                                            "function" == typeof t.removeListener && t.removeListener("error", r),
                                                n([].slice.call(arguments))
                                        }
                                        m(t, e, a, {
                                                once: !0
                                            }),
                                            "error" !== e && function (t, e, n) {
                                                "function" == typeof t.on && m(t, "error", e, n)
                                            }(t, r, {
                                                once: !0
                                            })
                                    }))
                                },
                                s.EventEmitter = s,
                                s.prototype._events = void 0,
                                s.prototype._eventsCount = 0,
                                s.prototype._maxListeners = void 0;
                            var l = 10;

                            function c(t) {
                                if ("function" != typeof t)
                                    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
                            }

                            function u(t) {
                                return void 0 === t._maxListeners ? s.defaultMaxListeners : t._maxListeners
                            }

                            function p(t, e, n, i) {
                                var r, a, o, s;
                                if (c(n),
                                    void 0 === (a = t._events) ? (a = t._events = Object.create(null),
                                        t._eventsCount = 0) : (void 0 !== a.newListener && (t.emit("newListener", e, n.listener ? n.listener : n),
                                            a = t._events),
                                        o = a[e]),
                                    void 0 === o)
                                    o = a[e] = n,
                                    ++t._eventsCount;
                                else if ("function" == typeof o ? o = a[e] = i ? [n, o] : [o, n] : i ? o.unshift(n) : o.push(n),
                                    (r = u(t)) > 0 && o.length > r && !o.warned) {
                                    o.warned = !0;
                                    var l = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                                    l.name = "MaxListenersExceededWarning",
                                        l.emitter = t,
                                        l.type = e,
                                        l.count = o.length,
                                        s = l,
                                        console && console.warn && console.warn(s)
                                }
                                return t
                            }

                            function h() {
                                if (!this.fired)
                                    return this.target.removeListener(this.type, this.wrapFn),
                                        this.fired = !0,
                                        0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
                            }

                            function d(t, e, n) {
                                var i = {
                                        fired: !1,
                                        wrapFn: void 0,
                                        target: t,
                                        type: e,
                                        listener: n
                                    },
                                    r = h.bind(i);
                                return r.listener = n,
                                    i.wrapFn = r,
                                    r
                            }

                            function f(t, e, n) {
                                var i = t._events;
                                if (void 0 === i)
                                    return [];
                                var r = i[e];
                                return void 0 === r ? [] : "function" == typeof r ? n ? [r.listener || r] : [r] : n ? function (t) {
                                    for (var e = new Array(t.length), n = 0; n < e.length; ++n)
                                        e[n] = t[n].listener || t[n];
                                    return e
                                }(r) : A(r, r.length)
                            }

                            function g(t) {
                                var e = this._events;
                                if (void 0 !== e) {
                                    var n = e[t];
                                    if ("function" == typeof n)
                                        return 1;
                                    if (void 0 !== n)
                                        return n.length
                                }
                                return 0
                            }

                            function A(t, e) {
                                for (var n = new Array(e), i = 0; i < e; ++i)
                                    n[i] = t[i];
                                return n
                            }

                            function m(t, e, n, i) {
                                if ("function" == typeof t.on)
                                    i.once ? t.once(e, n) : t.on(e, n);
                                else {
                                    if ("function" != typeof t.addEventListener)
                                        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
                                    t.addEventListener(e, (function r(a) {
                                        i.once && t.removeEventListener(e, r),
                                            n(a)
                                    }))
                                }
                            }
                            Object.defineProperty(s, "defaultMaxListeners", {
                                    enumerable: !0,
                                    get: function () {
                                        return l
                                    },
                                    set: function (t) {
                                        if ("number" != typeof t || t < 0 || o(t))
                                            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                                        l = t
                                    }
                                }),
                                s.init = function () {
                                    void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null),
                                            this._eventsCount = 0),
                                        this._maxListeners = this._maxListeners || void 0
                                },
                                s.prototype.setMaxListeners = function (t) {
                                    if ("number" != typeof t || t < 0 || o(t))
                                        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
                                    return this._maxListeners = t,
                                        this
                                },
                                s.prototype.getMaxListeners = function () {
                                    return u(this)
                                },
                                s.prototype.emit = function (t) {
                                    for (var e = [], n = 1; n < arguments.length; n++)
                                        e.push(arguments[n]);
                                    var i = "error" === t,
                                        r = this._events;
                                    if (void 0 !== r)
                                        i = i && void 0 === r.error;
                                    else if (!i)
                                        return !1;
                                    if (i) {
                                        var o;
                                        if (e.length > 0 && (o = e[0]),
                                            o instanceof Error)
                                            throw o;
                                        var s = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                                        throw s.context = o,
                                            s
                                    }
                                    var l = r[t];
                                    if (void 0 === l)
                                        return !1;
                                    if ("function" == typeof l)
                                        a(l, this, e);
                                    else {
                                        var c = l.length,
                                            u = A(l, c);
                                        for (n = 0; n < c; ++n)
                                            a(u[n], this, e)
                                    }
                                    return !0
                                },
                                s.prototype.addListener = function (t, e) {
                                    return p(this, t, e, !1)
                                },
                                s.prototype.on = s.prototype.addListener,
                                s.prototype.prependListener = function (t, e) {
                                    return p(this, t, e, !0)
                                },
                                s.prototype.once = function (t, e) {
                                    return c(e),
                                        this.on(t, d(this, t, e)),
                                        this
                                },
                                s.prototype.prependOnceListener = function (t, e) {
                                    return c(e),
                                        this.prependListener(t, d(this, t, e)),
                                        this
                                },
                                s.prototype.removeListener = function (t, e) {
                                    var n, i, r, a, o;
                                    if (c(e),
                                        void 0 === (i = this._events))
                                        return this;
                                    if (void 0 === (n = i[t]))
                                        return this;
                                    if (n === e || n.listener === e)
                                        0 == --this._eventsCount ? this._events = Object.create(null) : (delete i[t],
                                            i.removeListener && this.emit("removeListener", t, n.listener || e));
                                    else if ("function" != typeof n) {
                                        for (r = -1,
                                            a = n.length - 1; a >= 0; a--)
                                            if (n[a] === e || n[a].listener === e) {
                                                o = n[a].listener,
                                                    r = a;
                                                break
                                            }
                                        if (r < 0)
                                            return this;
                                        0 === r ? n.shift() : function (t, e) {
                                                for (; e + 1 < t.length; e++)
                                                    t[e] = t[e + 1];
                                                t.pop()
                                            }(n, r),
                                            1 === n.length && (i[t] = n[0]),
                                            void 0 !== i.removeListener && this.emit("removeListener", t, o || e)
                                    }
                                    return this
                                },
                                s.prototype.off = s.prototype.removeListener,
                                s.prototype.removeAllListeners = function (t) {
                                    var e, n, i;
                                    if (void 0 === (n = this._events))
                                        return this;
                                    if (void 0 === n.removeListener)
                                        return 0 === arguments.length ? (this._events = Object.create(null),
                                                this._eventsCount = 0) : void 0 !== n[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[t]),
                                            this;
                                    if (0 === arguments.length) {
                                        var r, a = Object.keys(n);
                                        for (i = 0; i < a.length; ++i)
                                            "removeListener" !== (r = a[i]) && this.removeAllListeners(r);
                                        return this.removeAllListeners("removeListener"),
                                            this._events = Object.create(null),
                                            this._eventsCount = 0,
                                            this
                                    }
                                    if ("function" == typeof (e = n[t]))
                                        this.removeListener(t, e);
                                    else if (void 0 !== e)
                                        for (i = e.length - 1; i >= 0; i--)
                                            this.removeListener(t, e[i]);
                                    return this
                                },
                                s.prototype.listeners = function (t) {
                                    return f(this, t, !0)
                                },
                                s.prototype.rawListeners = function (t) {
                                    return f(this, t, !1)
                                },
                                s.listenerCount = function (t, e) {
                                    return "function" == typeof t.listenerCount ? t.listenerCount(e) : g.call(t, e)
                                },
                                s.prototype.listenerCount = g,
                                s.prototype.eventNames = function () {
                                    return this._eventsCount > 0 ? i(this._events) : []
                                }
                        },
                    "./node_modules/js-base64/base64.js":
                        /*!******************************************!*\
                         !*** ./node_modules/js-base64/base64.js ***!
                         \******************************************/
                        /*! no static exports found */
                        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                        function (t, n, i) {
                            var r;
                            ! function (e, i) {
                                t.exports = function (e) {
                                    "use strict";
                                    var i, a = (e = e || {}).Base64,
                                        o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                                        s = function (t) {
                                            for (var e = {}, n = 0, i = t.length; n < i; n++)
                                                e[t.charAt(n)] = n;
                                            return e
                                        }(o),
                                        l = String.fromCharCode,
                                        c = function (t) {
                                            if (t.length < 2)
                                                return (e = t.charCodeAt(0)) < 128 ? t : e < 2048 ? l(192 | e >>> 6) + l(128 | 63 & e) : l(224 | e >>> 12 & 15) + l(128 | e >>> 6 & 63) + l(128 | 63 & e);
                                            var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
                                            return l(240 | e >>> 18 & 7) + l(128 | e >>> 12 & 63) + l(128 | e >>> 6 & 63) + l(128 | 63 & e)
                                        },
                                        u = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                                        p = function (t) {
                                            return t.replace(u, c)
                                        },
                                        h = function (t) {
                                            var e = [0, 2, 1][t.length % 3],
                                                n = t.charCodeAt(0) << 16 | (t.length > 1 ? t.charCodeAt(1) : 0) << 8 | (t.length > 2 ? t.charCodeAt(2) : 0);
                                            return [o.charAt(n >>> 18), o.charAt(n >>> 12 & 63), e >= 2 ? "=" : o.charAt(n >>> 6 & 63), e >= 1 ? "=" : o.charAt(63 & n)].join("")
                                        },
                                        d = e.btoa && "function" == typeof e.btoa ? function (t) {
                                            return e.btoa(t)
                                        } :
                                        function (t) {
                                            if (t.match(/[^\x00-\xFF]/))
                                                throw new RangeError("The string contains invalid characters.");
                                            return t.replace(/[\s\S]{1,3}/g, h)
                                        },
                                        f = function (t) {
                                            return d(p(String(t)))
                                        },
                                        g = function (t) {
                                            return t.replace(/[+\/]/g, (function (t) {
                                                return "+" == t ? "-" : "_"
                                            })).replace(/=/g, "")
                                        },
                                        A = function (t, e) {
                                            return e ? g(f(t)) : f(t)
                                        };
                                    e.Uint8Array && (i = function (t, e) {
                                        for (var n = "", i = 0, r = t.length; i < r; i += 3) {
                                            var a = t[i],
                                                s = t[i + 1],
                                                l = t[i + 2],
                                                c = a << 16 | s << 8 | l;
                                            n += o.charAt(c >>> 18) + o.charAt(c >>> 12 & 63) + (void 0 !== s ? o.charAt(c >>> 6 & 63) : "=") + (void 0 !== l ? o.charAt(63 & c) : "=")
                                        }
                                        return e ? g(n) : n
                                    });
                                    var m, y = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
                                        I = function (t) {
                                            switch (t.length) {
                                                case 4:
                                                    var e = ((7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3)) - 65536;
                                                    return l(55296 + (e >>> 10)) + l(56320 + (1023 & e));
                                                case 3:
                                                    return l((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));
                                                default:
                                                    return l((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1))
                                            }
                                        },
                                        v = function (t) {
                                            return t.replace(y, I)
                                        },
                                        b = function (t) {
                                            var e = t.length,
                                                n = e % 4,
                                                i = (e > 0 ? s[t.charAt(0)] << 18 : 0) | (e > 1 ? s[t.charAt(1)] << 12 : 0) | (e > 2 ? s[t.charAt(2)] << 6 : 0) | (e > 3 ? s[t.charAt(3)] : 0),
                                                r = [l(i >>> 16), l(i >>> 8 & 255), l(255 & i)];
                                            return r.length -= [0, 0, 2, 1][n],
                                                r.join("")
                                        },
                                        M = e.atob && "function" == typeof e.atob ? function (t) {
                                            return e.atob(t)
                                        } :
                                        function (t) {
                                            return t.replace(/\S{1,4}/g, b)
                                        },
                                        x = function (t) {
                                            return M(String(t).replace(/[^A-Za-z0-9\+\/]/g, ""))
                                        },
                                        C = function (t) {
                                            return String(t).replace(/[-_]/g, (function (t) {
                                                return "-" == t ? "+" : "/"
                                            })).replace(/[^A-Za-z0-9\+\/]/g, "")
                                        },
                                        w = function (t) {
                                            return function (t) {
                                                return v(M(t))
                                            }(C(t))
                                        };
                                    if (e.Uint8Array && (m = function (t) {
                                            return Uint8Array.from(x(C(t)), (function (t) {
                                                return t.charCodeAt(0)
                                            }))
                                        }),
                                        e.Base64 = {
                                            VERSION: "2.6.4",
                                            atob: x,
                                            btoa: d,
                                            fromBase64: w,
                                            toBase64: A,
                                            utob: p,
                                            encode: A,
                                            encodeURI: function (t) {
                                                return A(t, !0)
                                            },
                                            btou: v,
                                            decode: w,
                                            noConflict: function () {
                                                var t = e.Base64;
                                                return e.Base64 = a,
                                                    t
                                            },
                                            fromUint8Array: i,
                                            toUint8Array: m
                                        },
                                        "function" == typeof Object.defineProperty) {
                                        var D = function (t) {
                                            return {
                                                value: t,
                                                enumerable: !1,
                                                writable: !0,
                                                configurable: !0
                                            }
                                        };
                                        e.Base64.extendString = function () {
                                            Object.defineProperty(String.prototype, "fromBase64", D((function () {
                                                    return w(this)
                                                }))),
                                                Object.defineProperty(String.prototype, "toBase64", D((function (t) {
                                                    return A(this, t)
                                                }))),
                                                Object.defineProperty(String.prototype, "toBase64URI", D((function () {
                                                    return A(this, !0)
                                                })))
                                        }
                                    }
                                    return e.Meteor && (Base64 = e.Base64),
                                        t.exports ? t.exports.Base64 = e.Base64 : void 0 === (r = function () {
                                                return e.Base64
                                            }
                                            .apply(n, [])) || (t.exports = r), {
                                            Base64: e.Base64
                                        }
                                }(e)
                            }("undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : this)
                        },
                    "./src/events.ts":
                        /*!***********************!*\
                         !*** ./src/events.ts ***!
                         \***********************/
                        /*! exports provided: default */
                        function (t, e, n) {
                            "use strict";
                            var i;
                            n.r(e),
                                function (t) {
                                    t.ERROR = "error",
                                        t.STATU_CHANGE = "statuChange",
                                        t.JSWW_INIT_COMPLETE = "jswwInitComplete"
                                }(i || (i = {})),
                                e.default = i
                        },
                    "./src/index.ts":
                        /*!**********************************!*\
                         !*** ./src/index.ts + 8 modules ***!
                         \**********************************/
                        /*! exports provided: default */
                        /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/createClass.js (<- Module is not an ECMAScript module) */
                        /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/extends.js (<- Module is not an ECMAScript module) */
                        /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/inheritsLoose.js (<- Module is not an ECMAScript module) */
                        /*! ModuleConcatenation bailout: Cannot concat with ./src/events.ts because of ./src/node/jsww.worklet.js */
                        /*! ModuleConcatenation bailout: Cannot concat with ./src/lib/libjs-wrapper.ts because of ./src/node/jsww.worklet.js */
                        /*! ModuleConcatenation bailout: Cannot concat with ./src/node/worker-cmd.ts because of ./src/node/jsww.worklet.js */
                        /*! ModuleConcatenation bailout: Cannot concat with ./src/utils/log.ts because of ./src/node/jsww.worklet.js */
                        /*! ModuleConcatenation bailout: Cannot concat with ./src/utils/webworkify-webpack.js (<- Module is not an ECMAScript module) */
                        /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/events/events.js (<- Module is not an ECMAScript module) */
                        /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/js-base64/base64.js (<- Module is not an ECMAScript module) */
                        function (t, e, n) {
                            "use strict";
                            n.r(e);
                            var i, r, a = n("./node_modules/@babel/runtime/helpers/createClass.js"),
                                o = n.n(a),
                                s = n("./node_modules/@babel/runtime/helpers/inheritsLoose.js"),
                                l = n.n(s),
                                c = n("./node_modules/events/events.js"),
                                u = n("./node_modules/@babel/runtime/helpers/extends.js"),
                                p = n.n(u),
                                h = n("./src/utils/log.ts"),
                                d = {
                                    logLevel: h.LOG_LEVEL.LEVEL_ERROR
                                },
                                f = function () {
                                    function t() {}
                                    return t.processConfig = function (t) {
                                            var e = p()({}, d);
                                            return p()(e, t),
                                                e
                                        },
                                        t
                                }();
                            ! function (t) {
                                t[t.LIB_LOAD_ERROR = 10] = "LIB_LOAD_ERROR",
                                    t[t.INIT_ERROR = 100] = "INIT_ERROR",
                                    t[t.CREATE_SOURCE_ERROR = 101] = "CREATE_SOURCE_ERROR"
                            }(i || (i = {})),
                            function (t) {
                                t.NETWORK_ERROR = "networkError",
                                    t.MAIN_ERROR = "mainError"
                            }(r || (r = {}));
                            var g = n("./src/events.ts"),
                                A = n("./src/lib/libjs-wrapper.ts"),
                                m = n("./node_modules/js-base64/base64.js");

                            function y() {
                                return m.Base64.toUint8Array(I)
                            }
                            var I = "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dGoLECoaIAMgARBJIANBCGogAxBIBEADQCADKAIMGiADIAMoAgxBBGoiAjYCDCACIAMoAggiAigCAGtBgCBGBEAgAyACQQRqNgIIIAMgAigCBDYCDAsgA0EIaiADEEgNAAsLIAEQDUEANgIAIAEQFUECSwRAA0AgASgCBCgCABAHIAEQJCABEBVBAksNAAsLQYAEIQICQAJAAkAgARAVQQFrDgIBAAILQYAIIQILIAEgAjYCEAsgA0EQaiQAIAQoAgQiASAEKAIIIgJHBEADQCAEEA0aIAEoAgAQByABQQRqIgEgAkcNAAsLIAQiASICKAIEIgMgASgCCEcEQANAIAIQBhogAiACKAIIQQRrNgIIIAIoAgggA0cNAAsLIAQoAgAEQCABEAYaIAEoAgAhBCABECMaIAQQBwsgAAsQBwsL0gIBB38jAEEgayIDJAAgAyAAKAIcIgQ2AhAgACgCFCEFIAMgAjYCHCADIAE2AhggAyAFIARrIgE2AhQgASACaiEEQQIhByADQRBqIQECfwJAAkAgACgCPCADQRBqQQIgA0EMahAAEC9FBEADQCAEIAMoAgwiBUYNAiAFQX9MDQMgASAFIAEoAgQiCEsiBkEDdGoiCSAFIAhBACAGG2siCCAJKAIAajYCACABQQxBBCAGG2oiCSAJKAIAIAhrNgIAIAQgBWshBCAAKAI8IAFBCGogASAGGyIBIAcgBmsiByADQQxqEAAQL0UNAAsLIARBf0cNAQsgACAAKAIsIgE2AhwgACABNgIUIAAgASAAKAIwajYCECACDAELIABBADYCHCAAQgA3AxAgACAAKAIAQSByNgIAQQAgB0ECRg0AGiACIAEoAgRrCyEEIANBIGokACAEC7gEAQZ/QeAAEAghAiMAQRBrIgQkACACIAE2AgQgAiAANgIAIwBBEGsiASQAIwBBEGsiAyQAIAJBDGoiByIFIgZBADYCCCAGQgA3AgAgA0EANgIMIAZBDGogA0EMahBEIANBEGokACAFQQA2AhAgAUEANgIMIAVBFGogAUEMahBFIAFBEGokACACQgA3AlAgAkF/NgJMIAJBAToASiACQQA7AUggAiAAQTJtNgJEIAJBADYCQCACQQA7ATQgAkEANgIwIAIgAEHoB202AiwgAkIANwJYAkACQAJAAkACQCACKAIAIgBB//kBTARAIABBgP0ARiAAQcC7AUZyDQEMAgsgAEGA+gFGIABBgPcCRnINACAAQcTYAkcNAQsgAigCBEEBa0EBSw0BQQEhAANAIARBADYCDCAHIARBDGoQECAAQeoHRwRAIABBAWohAAwBCwsgAkGA2AQQCCIANgIIIABBgNgEEAogAkGA2AQQCCIANgI4IABBgNgEEAogAkGA2AQQCCIANgI8IABBgNgEEAogAkF/IAIoAiwiAUEDdCIAIAFBAXQiAUH+////A3EgAUcbIgEQCCIDNgIkIAMgABAKIAIgARAIIgE2AiggASAAEAoMAwsgAigCBEEBa0ECSQ0BC0HxCRAWIAIoAgAhAAsCQCAAQf/5AUwEQCAAQYD9AEYNAiAAQcC7AUcNAQwCCyAAQYD6AUYgAEHE2AJGciAAQYD3AkZyDQELQYcKEBYLIARBEGokACACCxoAIAAgASgCCCAFEA4EQCABIAIgAyAEEDILCzcAIAAgASgCCCAFEA4EQCABIAIgAyAEEDIPCyAAKAIIIgAgASACIAMgBCAFIAAoAgAoAhQRBwALkQEAIAAgASgCCCAEEA4EQCABIAIgAxAxDwsCQCAAIAEoAgAgBBAORQ0AAkAgAiABKAIQRwRAIAEoAhQgAkcNAQsgA0EBRw0BIAFBATYCIA8LIAEgAjYCFCABIAM2AiAgASABKAIoQQFqNgIoAkAgASgCJEEBRw0AIAEoAhhBAkcNACABQQE6ADYLIAFBBDYCLAsL8gEAIAAgASgCCCAEEA4EQCABIAIgAxAxDwsCQCAAIAEoAgAgBBAOBEACQCACIAEoAhBHBEAgASgCFCACRw0BCyADQQFHDQIgAUEBNgIgDwsgASADNgIgAkAgASgCLEEERg0AIAFBADsBNCAAKAIIIgAgASACIAJBASAEIAAoAgAoAhQRBwAgAS0ANQRAIAFBAzYCLCABLQA0RQ0BDAMLIAFBBDYCLAsgASACNgIUIAEgASgCKEEBajYCKCABKAIkQQFHDQEgASgCGEECRw0BIAFBAToANg8LIAAoAggiACABIAIgAyAEIAAoAgAoAhgRCgALCzEAIAAgASgCCEEAEA4EQCABIAIgAxAzDwsgACgCCCIAIAEgAiADIAAoAgAoAhwRBQALGAAgACABKAIIQQAQDgRAIAEgAiADEDMLC7IDAQV/IwBBQGoiBCQAAn9BASAAIAFBABAODQAaQQAgAUUNABojAEFAaiIDJAAgASgCACIFQQRrKAIAIQYgBUEIaygCACEHIANBADYCFCADQdwkNgIQIAMgATYCDCADQYwlNgIIQQAhBSADQRhqQScQCiABIAdqIQECQCAGQYwlQQAQDgRAIANBATYCOCAGIANBCGogASABQQFBACAGKAIAKAIUEQcAIAFBACADKAIgQQFGGyEFDAELIAYgA0EIaiABQQFBACAGKAIAKAIYEQoAAkACQCADKAIsDgIAAQILIAMoAhxBACADKAIoQQFGG0EAIAMoAiRBAUYbQQAgAygCMEEBRhshBQwBCyADKAIgQQFHBEAgAygCMA0BIAMoAiRBAUcNASADKAIoQQFHDQELIAMoAhghBQsgA0FAayQAQQAgBSIBRQ0AGiAEQQhqQQRyQTQQCiAEQQE2AjggBEF/NgIUIAQgADYCECAEIAE2AgggASAEQQhqIAIoAgBBASABKAIAKAIcEQUAIAQoAiAiAEEBRgRAIAIgBCgCGDYCAAsgAEEBRgshACAEQUBrJAAgAAsLACAAECUaIAAQBwsIACAAECUQBwsFAEGACAsIACAAEDwQBwsIACAAED4QBwsIACAAED8QBwsIACAAEEAQBwsHACAAKAIECwwAIAAgASoCADgCAAvMDAELfyMAQTBrIgYkACAAEA0hAQJAIAAoAhBBgAhPBEAgACAAKAIQQYAIazYCECAGIAAoAgQoAgA2AhggABAkIAAgBkEYahBDDAELAkAgABAVIAAQI0kEQCAAEAYoAgAgACgCCGtBAnVFDQEgBkGACBAiNgIYIAZBGGohAiMAQTBrIgMkAAJAIAAiASgCCCABEAYoAgBHDQAgAUEIaiEEIAFBBGohByABKAIEIgAgASgCACIFSwRAIAQgACAEKAIAIAAgACAFa0ECdUEBakF+bUECdCIEahAoNgIAIAcgBygCACAEajYCAAwBCyADIAEQBigCACABKAIAa0EBdTYCGCADQQE2AiwgA0EYaiADQRhqIANBLGoQGygCACIAIABBAnYgARAGEBohACADQRBqIAEoAgQQDyEFIANBCGogASgCCBAPIQggACAFKAIAIAgoAgAQHiABIAAQCSAHIABBBGoQCSAEIABBCGoQCSABEAYgABAGEAkgABAZCyABEAYgASgCCCACEBggASABKAIIQQRqNgIIIANBMGokAAwCCyAGIAAQI0EBdDYCCCAGQQE2AgAgBkEYaiAGQQhqIAYQGygCACAAEBUgABAGEBohA0GACBAiIQQgBiABQYAIECohByMAQRBrIgEkACABIAQ2AgwgBkEIaiIEIgIgAUEMahBFIAIgBykCADcCBCABQRBqJAAgBiAEKAIANgIAIAYhByMAQTBrIgIkAAJAIAMiASgCCCABEAYoAgBHDQAgAUEIaiEIIAFBBGohCSABKAIEIgUgASgCACIKSwRAIAggBSAIKAIAIAUgBSAKa0ECdUEBakF+bUECdCIIahAoNgIAIAkgCSgCACAIajYCAAwBCyACIAEQBigCACABKAIAa0EBdTYCGCACQQE2AiwgAkEYaiACQRhqIAJBLGoQGygCACIFIAVBAnYgASgCEBAaIQUgAkEQaiABKAIEEA8hCiACQQhqIAEoAggQDyELIAUgCigCACALKAIAEB4gASAFEAkgCSAFQQRqEAkgCCAFQQhqEAkgARAGIAUQBhAJIAUQGQsgASgCECABKAIIIAcQGCABIAEoAghBBGo2AgggAkEwaiQAIAQoAgAaIARBADYCACAAKAIIIgUgACgCBEcEQANAIAVBBGsiBSEIIwBBMGsiByQAAkAgAygCBCABKAIARw0AIAEoAgggARAGKAIASQRAIAEQBiEJIAEgASgCBCABKAIIIgIgAiAJKAIAIAJrQQJ1QQFqQQJtQQJ0IglqEEE2AgQgASABKAIIIAlqNgIIDAELIAcgARAGKAIAIAEoAgBrQQF1NgIYIAdBATYCLCAHQRhqIAdBGGogB0EsahAbKAIAIgIgAkEDakECdiABKAIQEBohAiAHQRBqIAEoAgQQDyEJIAdBCGogASgCCBAPIQogAiAJKAIAIAooAgAQHiABIAIQCSABQQRqIAJBBGoQCSABQQhqIAJBCGoQCSABEAYgAhAGEAkgAhAZCyABKAIQIAEoAgRBBGsgCBAYIAEgASgCBEEEazYCBCAHQTBqJAAgBSAAKAIERw0ACwsgACADEAkgAEEEaiADQQRqEAkgAEEIaiADQQhqEAkgABAGIAMQBhAJIAQiACgCACEBIABBADYCACABBEAgACgCBBogACgCCBogARAHCyADEBkMAQsgBkGACBAiNgIYIAZBGGohByMAQTBrIgMkAAJAIAAiASgC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",
                                v = {};
                            ! function () {
                                var t = self.navigator.userAgent.toLowerCase(),
                                    e = /(edge)\/([\w.]+)/.exec(t) || /(opr)[\/]([\w.]+)/.exec(t) || /(chrome)[ \/]([\w.]+)/.exec(t) || /(iemobile)[\/]([\w.]+)/.exec(t) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(firefox)[ \/]([\w.]+)/.exec(t) || [],
                                    n = /(ipad)/.exec(t) || /(ipod)/.exec(t) || /(windows phone)/.exec(t) || /(iphone)/.exec(t) || /(kindle)/.exec(t) || /(android)/.exec(t) || /(windows)/.exec(t) || /(mac)/.exec(t) || /(linux)/.exec(t) || /(cros)/.exec(t) || [],
                                    i = {
                                        browser: e[5] || e[3] || e[1] || "",
                                        version: e[2] || e[4] || "0",
                                        majorVersion: e[4] || e[2] || "0",
                                        platform: n[0] || ""
                                    },
                                    r = {};
                                if (i.browser) {
                                    r[i.browser] = !0;
                                    var a = i.majorVersion.split(".");
                                    r.version = {
                                            major: parseInt(i.majorVersion, 10),
                                            string: i.version
                                        },
                                        a.length > 1 && (r.version.minor = parseInt(a[1], 10)),
                                        a.length > 2 && (r.version.build = parseInt(a[2], 10))
                                }
                                for (var o in i.platform && (r[i.platform] = !0),
                                        (r.chrome || r.opr || r.safari) && (r.webkit = !0),
                                        (r.rv || r.iemobile) && (r.rv && delete r.rv,
                                            i.browser = "msie",
                                            r.msie = !0),
                                        r.edge && (delete r.edge,
                                            i.browser = "msedge",
                                            r.msedge = !0),
                                        r.opr && (i.browser = "opera",
                                            r.opera = !0),
                                        r.safari && r.android && (i.browser = "android",
                                            r.android = !0),
                                        r.name = i.browser,
                                        r.platform = i.platform,
                                        v)
                                    v.hasOwnProperty(o) && delete v[o];
                                v = r
                            }();
                            var b = v,
                                M = n("./src/utils/webworkify-webpack.js"),
                                x = n.n(M),
                                C = n("./src/node/worker-cmd.ts"),
                                w = "joysound-node",
                                D = function () {
                                    function t(t, e) {
                                        var n = this;
                                        this._eventEmitter = void 0,
                                            this._config = void 0,
                                            this._jsww = void 0,
                                            this._ctx = void 0,
                                            this._script = void 0,
                                            this._input = void 0,
                                            this._output = void 0,
                                            this._bufferSize = 1024,
                                            this._pendingData = void 0,
                                            this._workletBlob = "",
                                            this._worklet = void 0,
                                            this._scriptProcess = function (t) {
                                                for (var e = [], i = n._pendingData, r = function (n) {
                                                        var r = t.inputBuffer.getChannelData(n);
                                                        i && r.forEach((function (e, r) {
                                                                i[r * t.inputBuffer.numberOfChannels + n] = e
                                                            })),
                                                            e.push(t.outputBuffer.getChannelData(n))
                                                    }, a = 0; a < t.inputBuffer.numberOfChannels; a++)
                                                    r(a);
                                                n._pendingData && n._jsww && n._jsww.process(n._pendingData).forEach((function (t, n) {
                                                    e[n % 2][Math.floor(n / 2)] = t
                                                }))
                                            },
                                            this._onMessage = function (t) {
                                                switch (t.data.cmd) {
                                                    case C.WorkerCmd.JSWW_INIT_COMPLETE:
                                                        n._eventEmitter.emit(g.default.JSWW_INIT_COMPLETE);
                                                        break;
                                                    case C.WorkerCmd.STATU_CHANGE:
                                                        n._eventEmitter.emit(g.default.STATU_CHANGE, {
                                                            enabled: t.data.enabled
                                                        })
                                                }
                                            },
                                            this._eventEmitter = t,
                                            this._config = e,
                                            !window.AudioWorkletNode || b.chrome && b.version.major < 67 ? h.Log.i(w, "use script") : (this._workletBlob = URL.createObjectURL(x()( /*! ./jsww.worklet.js */
                                                    "./src/node/jsww.worklet.js", {
                                                        bare: !0,
                                                        worklet: !0
                                                    })),
                                                h.Log.i(w, "use worklet"))
                                    }
                                    var e = t.prototype;
                                    return e.init = function (t) {
                                            var e = this;
                                            return this._ctx = t,
                                                this._input = t.createGain(),
                                                this._input.channelCountMode = "explicit",
                                                this._input.channelCount = 2,
                                                this._output = t.createGain(),
                                                this._workletBlob ? t.audioWorklet.addModule(this._workletBlob).then((function () {
                                                    e._input && e._output && (e._worklet = new AudioWorkletNode(t, "jsww"),
                                                        e._worklet.port.start(),
                                                        e._worklet.port.postMessage({
                                                            cmd: C.WorkerCmd.INIT,
                                                            lib: y(),
                                                            logLevel: e._config.logLevel,
                                                            channelCount: e._input.channelCount,
                                                            sampleRate: t.sampleRate,
                                                            bufferSize: e._bufferSize
                                                        }),
                                                        e._worklet.port.onmessage = e._onMessage,
                                                        e._input.connect(e._worklet),
                                                        e._worklet.connect(e._output))
                                                })) : (this._jsww = new A.default(this._eventEmitter),
                                                    this._script = t.createScriptProcessor(this._bufferSize, this._input.channelCount, 2),
                                                    this._script.onaudioprocess = this._scriptProcess,
                                                    this._input.connect(this._script),
                                                    this._script.connect(this._output),
                                                    this._loadLib(),
                                                    Promise.resolve())
                                        },
                                        e.setEnabled = function (t) {
                                            this._jsww ? this._jsww.setEnabled(t) : this._worklet && this._worklet.port.postMessage({
                                                cmd: C.WorkerCmd.SET_ENABLED,
                                                value: t
                                            })
                                        },
                                        e.connect = function (t) {
                                            this._output && this._output.connect(t)
                                        },
                                        e.disconnect = function () {
                                            this._output && this._output.disconnect()
                                        },
                                        e.flush = function () {
                                            this._worklet && this._worklet.port.postMessage({
                                                cmd: C.WorkerCmd.FLUSH
                                            })
                                        },
                                        e.destroy = function () {
                                            this._jsww && this._jsww.destroy(),
                                                this._worklet && this._worklet.port.postMessage({
                                                    cmd: C.WorkerCmd.DESTROY
                                                })
                                        },
                                        e._loadLib = function () {
                                            var t = y();
                                            this._jsww && this._jsww.init(t),
                                                this._updateInfo()
                                        },
                                        e._updateInfo = function () {
                                            this._ctx && this._input && this._jsww && (this._pendingData = new Float32Array(this._bufferSize * this._input.channelCount),
                                                this._jsww.updateInfo(this._ctx.sampleRate, this._input.channelCount, this._bufferSize))
                                        },
                                        o()(t, [{
                                            key: "source",
                                            get: function () {
                                                return this._input
                                            }
                                        }, {
                                            key: "context",
                                            get: function () {
                                                return this._ctx
                                            }
                                        }]),
                                        t
                                }();

                            function E() {
                                return window.AudioContext || window.webkitAudioContext
                            }
                            var k = {
                                    400: "01",
                                    401: "02",
                                    403: "03",
                                    404: "04",
                                    other4xx: "05",
                                    serverError: "06",
                                    timeoutOpen: "07",
                                    timeoutIO: "08",
                                    200: "09",
                                    206: "09"
                                },
                                T = function () {
                                    function t() {
                                        this.timeout = 6048e5
                                    }
                                    var e = t.prototype;
                                    return e.write = function (e, n) {
                                            if (t.available)
                                                try {
                                                    localStorage.setItem(e, JSON.stringify({
                                                        value: n,
                                                        time: Date.now()
                                                    }))
                                                } catch (t) {}
                                        },
                                        e.read = function (e, n) {
                                            if (void 0 === n && (n = !0),
                                                t.available)
                                                try {
                                                    var i = localStorage.getItem(e);
                                                    if (i) {
                                                        var r = JSON.parse(i),
                                                            a = r.value,
                                                            o = r.time,
                                                            s = void 0 === o ? 0 : o;
                                                        if (!n)
                                                            return a;
                                                        if (Date.now() - s < this.timeout)
                                                            return a
                                                    }
                                                } catch (t) {}
                                        },
                                        o()(t, null, [{
                                            key: "available",
                                            get: function () {
                                                if (void 0 === t._available)
                                                    try {
                                                        localStorage.setItem("alg", "test"),
                                                            t._available = !0
                                                    } catch (e) {
                                                        t._available = !1
                                                    }
                                                return t._available
                                            }
                                        }]),
                                        t
                                }();
                            T._available = void 0;
                            var N = T,
                                S = "kwai-jsww",
                                j = function (t) {
                                    function e(n) {
                                        var i;
                                        (i = t.call(this) || this)._eventEmitter = void 0,
                                            i._ctx = void 0,
                                            i._mediaElement = void 0,
                                            i._source = void 0,
                                            i._destination = void 0,
                                            i._enabled = !1,
                                            i._config = void 0,
                                            i._jsNode = void 0,
                                            i._onError = function (t) {
                                                var e = t.details;
                                                return t.type === r.NETWORK_ERROR && function (t, e, n) {
                                                    if (void 0 === n && (n = 0),
                                                        t >= 100)
                                                        return t;
                                                    var i = "00";
                                                    "timeout" === e ? i = n ? k.timeoutIO || i : k.timeoutOpen || i : k.hasOwnProperty(n) ? i = k[n] || i : /^4\d{2}$/.test(n.toString()) ? i = k.other4xx || i : /^5\d{2}$/.test(n.toString()) && (i = k.serverError || i),
                                                        parseInt(t + i, 10)
                                                }(e, t.reason, t.statusCode || 0), {
                                                    code: e,
                                                    fatal: t.fatal,
                                                    type: t.type,
                                                    reason: t.reason
                                                }
                                            },
                                            i.off || (i.off = i.removeListener),
                                            i._config = f.processConfig(n);
                                        var a = (new N).read("kwai-joysound-log");
                                        return a && (h.Log.level(a),
                                                i._config.logLevel = a),
                                            i._eventEmitter = new c.EventEmitter,
                                            i._eventEmitter.on(g.default.ERROR, i._onError),
                                            i._eventEmitter.on(g.default.STATU_CHANGE, (function (t) {
                                                i.emit(g.default.STATU_CHANGE, t)
                                            })),
                                            i._jsNode = new D(i._eventEmitter, i._config),
                                            h.Log.i(S, e.version),
                                            i
                                    }
                                    l()(e, t),
                                        e.isSupport = function (t) {
                                            return void 0 === t && (t = !0),
                                                !(!E() || !window.OfflineAudioContext && !window.webkitOfflineAudioContext || t && b.safari)
                                        };
                                    Joysound = e;
                                    var n = e.prototype;
                                    return n.init = function (t) {
                                            var n = this;
                                            if (h.Log.i(S, "init", t),
                                                !e.isSupport())
                                                return this._onError({
                                                        type: r.MAIN_ERROR,
                                                        details: i.INIT_ERROR,
                                                        fatal: !0,
                                                        reason: "already bind source"
                                                    }),
                                                    !1;
                                            if (this._source)
                                                return this._onError({
                                                        type: r.MAIN_ERROR,
                                                        details: i.INIT_ERROR,
                                                        fatal: !0,
                                                        reason: "already bind source"
                                                    }),
                                                    !1;
                                            if (t instanceof HTMLMediaElement)
                                                this._mediaElement = t;
                                            else {
                                                if (!(t instanceof AudioNode))
                                                    return this._onError({
                                                            type: r.MAIN_ERROR,
                                                            details: i.INIT_ERROR,
                                                            fatal: !0,
                                                            reason: "unsupported source"
                                                        }),
                                                        !1;
                                                this._source = t
                                            }
                                            return this._ctx || this._initAudioContext().then((function () {
                                                    n._initSource(),
                                                        n.setEnabled(n._enabled)
                                                })),
                                                !0
                                        },
                                        n.destroy = function () {
                                            h.Log.i(S, "destroy"),
                                                this._disconnect(),
                                                this._jsNode.destroy(),
                                                this._ctx && (this._ctx.close(),
                                                    this._ctx = void 0),
                                                this._eventEmitter.removeAllListeners(),
                                                this._mediaElement = void 0,
                                                this._source = void 0,
                                                this._destination = void 0,
                                                this.removeAllListeners()
                                        },
                                        n.setEnabled = function (t) {
                                            h.Log.i(S, "setEnabled", t),
                                                this._enabled = t,
                                                this._ctx && this._jsNode.setEnabled(t)
                                        },
                                        n.setDestination = function (t) {
                                            this._destination = t
                                        },
                                        n.hasSource = function () {
                                            return !!this._mediaElement
                                        },
                                        n._initAudioContext = function () {
                                            if (!this._ctx) {
                                                if (this._source)
                                                    this._ctx = this._source.context,
                                                    this._ctx.resume();
                                                else {
                                                    var t = E();
                                                    this._ctx = new t
                                                }
                                                return this._destination = this._destination || this._ctx.destination,
                                                    this._jsNode.init(this._ctx)
                                            }
                                            return Promise.resolve()
                                        },
                                        n._initSource = function () {
                                            if (this._ctx && this._mediaElement) {
                                                if (!this._source)
                                                    try {
                                                        this._source = this._ctx.createMediaElementSource(this._mediaElement)
                                                    } catch (t) {
                                                        return void this._onError({
                                                            type: r.MAIN_ERROR,
                                                            details: i.INIT_ERROR,
                                                            fatal: !0,
                                                            reason: "already bind source"
                                                        })
                                                    }
                                                this._source.disconnect(),
                                                    this._connect()
                                            }
                                        },
                                        n._disconnect = function () {
                                            this._source && (this._jsNode.disconnect(),
                                                this._source.disconnect())
                                        },
                                        n._connect = function () {
                                            if (this._disconnect(),
                                                this._source && this._destination) {
                                                var t = this._source;
                                                this._jsNode.source ? (t.connect(this._jsNode.source),
                                                    this._jsNode.connect(this._destination)) : t.connect(this._destination)
                                            }
                                        },
                                        o()(e, null, [{
                                            key: "version",
                                            get: function () {
                                                return "1.0.1"
                                            }
                                        }]),
                                        e
                                }(c.EventEmitter);
                            e.default = j
                        },
                    "./src/lib/libjs-wrapper.ts":
                        /*!**********************************!*\
                         !*** ./src/lib/libjs-wrapper.ts ***!
                         \**********************************/
                        /*! exports provided: default */
                        function (t, e, n) {
                            "use strict";
                            n.r(e);
                            var i = n( /*! @babel/runtime/helpers/createClass */
                                    "./node_modules/@babel/runtime/helpers/createClass.js"),
                                r = n.n(i),
                                a = n( /*! ../events */
                                    "./src/events.ts"),
                                o = n( /*! ../utils/log */
                                    "./src/utils/log.ts"),
                                s = n( /*! ./libjsww */
                                    "./src/lib/libjsww.js"),
                                l = n.n(s),
                                c = "libjs-wrapper",
                                u = function () {
                                    function t(t) {
                                        this._eventEmitter = void 0,
                                            this._module = void 0,
                                            this._libjsww = void 0,
                                            this._ctx = void 0,
                                            this._inputPtr = void 0,
                                            this._outputPtr = void 0,
                                            this._sampleRate = 44100,
                                            this._channel = 2,
                                            this._frameLen = 1024,
                                            this._enabled = !1,
                                            this._eventEmitter = t
                                    }
                                    var e = t.prototype;
                                    return e.init = function (t) {
                                            var e = this;
                                            o.Log.i(c, "init libjsww");
                                            var n = {
                                                wasmBinary: t
                                            };
                                            l()(n).then((function (t) {
                                                e._module = t,
                                                    e._cwrapLibjswwFun(),
                                                    e._initIOBuffer(),
                                                    e._initCtx()
                                            }))
                                        },
                                        e.process = function (t) {
                                            return this._module ? (this._module.HEAPF32.set(t, this._inputPtr >> 2),
                                                this._libjsww.AudioJoySoundProcessor_process(this._ctx, this._outputPtr, this._inputPtr, this._frameLen),
                                                this._module.HEAPF32.subarray(this._outputPtr >> 2, (this._outputPtr >> 2) + this._frameLen * this._channel)) : t
                                        },
                                        e.setEnabled = function (t) {
                                            this._enabled = t,
                                                this._libjsww && this._ctx && (o.Log.i(c, "set enabled: " + t),
                                                    this._libjsww.AudioJoySoundProcessor_Set_Switch_Status(this._ctx, t),
                                                    this._eventEmitter.emit(a.default.STATU_CHANGE, {
                                                        enabled: t
                                                    }))
                                        },
                                        e.destroy = function () {
                                            o.Log.i(c, "destroy"),
                                                this._destroyIOBuffer(),
                                                this._destroyCtx()
                                        },
                                        e.updateInfo = function (t, e, n) {
                                            o.Log.i(c, "sampleRate: " + t + " channel: " + e + " frameLen: " + n);
                                            var i = !1;
                                            this._sampleRate === t && this._channel === e && this._frameLen === n || (this._sampleRate = t,
                                                    this._channel = e,
                                                    this._frameLen = n,
                                                    i = !0),
                                                i && this._ctx && (this._initCtx(),
                                                    this._initIOBuffer())
                                        },
                                        e._initIOBuffer = function () {
                                            this._module && (o.Log.i(c, "init io buffer"),
                                                this._destroyIOBuffer(),
                                                this._inputPtr = this._module._malloc(4 * this._frameLen * this._channel),
                                                this._outputPtr = this._module._malloc(4 * this._frameLen * this._channel))
                                        },
                                        e._destroyIOBuffer = function () {
                                            this._module && this._module._free && (void 0 !== this._inputPtr && this._module._free(this._inputPtr),
                                                void 0 !== this._outputPtr && this._module._free(this._outputPtr))
                                        },
                                        e._destroyCtx = function () {
                                            this._ctx && this._libjsww && (o.Log.i(c, "destroy ctx"),
                                                this._libjsww.AudioJoySoundProcessor_free(this._ctx),
                                                this._ctx = void 0)
                                        },
                                        e._initCtx = function () {
                                            o.Log.i(c, "init ctx"),
                                                this._ctx && this._destroyCtx(),
                                                this._ctx = this._libjsww.AudioJoySoundProcessor_init(this._sampleRate, this._channel),
                                                this.setEnabled(this._enabled),
                                                this._eventEmitter.emit(a.default.JSWW_INIT_COMPLETE)
                                        },
                                        e._cwrapLibjswwFun = function () {
                                            this._libjsww = {
                                                AudioJoySoundProcessor_init: this._module.cwrap("AudioJoySoundProcessor_init", "number", ["number", "number"]),
                                                AudioJoySoundProcessor_free: this._module.cwrap("AudioJoySoundProcessor_free", "number", ["number"]),
                                                AudioJoySoundProcessor_process: this._module.cwrap("AudioJoySoundProcessor_process", "number", ["number", "number", "number", "number"]),
                                                AudioJoySoundProcessor_setParamCtl: this._module.cwrap("AudioJoySoundProcessor_setParamCtl", "number", ["number", "number", "void"]),
                                                AudioJoySoundProcessor_Set_Switch_Status: this._module.cwrap("AudioJoySoundProcessor_Set_Switch_Status", "number", ["number", "boolean"]),
                                                AudioJoySoundProcessor_Get_Switch_Status: this._module.cwrap("AudioJoySoundProcessor_Get_Switch_Status", "number", ["numbner"]),
                                                JOYSOUND_EFFECT_SET_SWITCH: 0,
                                                JOYSOUND_EFFECT_GET_SWITCH: 1,
                                                JOYSOUND_EFFECT_SET_MODE: 2,
                                                JOYSOUND_EFFECT_SET_SCREEN_DIRECTION: 3,
                                                module: this._module
                                            }
                                        },
                                        r()(t, [{
                                            key: "libjsww",
                                            get: function () {
                                                return this._libjsww
                                            }
                                        }, {
                                            key: "sampleRate",
                                            get: function () {
                                                return this._sampleRate
                                            }
                                        }, {
                                            key: "channel",
                                            get: function () {
                                                return this._channel
                                            }
                                        }, {
                                            key: "frameLen",
                                            get: function () {
                                                return this._frameLen
                                            }
                                        }]),
                                        t
                                }();
                            e.default = u
                        },
                    "./src/lib/libjsww.js":
                        /*!****************************!*\
                         !*** ./src/lib/libjsww.js ***!
                         \****************************/
                        /*! no static exports found */
                        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                        function (t, e, n) {
                            var i, r = (i = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0,
                                function (t) {
                                    var e, n, r;
                                    t = t || {},
                                        e || (e = void 0 !== t ? t : {}),
                                        e.ready = new Promise((function (t, e) {
                                            n = t,
                                                r = e
                                        }));
                                    var a, o = {};
                                    for (a in e)
                                        e.hasOwnProperty(a) && (o[a] = e[a]);
                                    var s = "";
                                    "undefined" != typeof document && document.currentScript && (s = document.currentScript.src),
                                        i && (s = i),
                                        s = 0 !== s.indexOf("blob:") ? s.substr(0, s.lastIndexOf("/") + 1) : "";
                                    var l = e.print || console.log.bind(console),
                                        c = e.printErr || console.warn.bind(console);
                                    for (a in o)
                                        o.hasOwnProperty(a) && (e[a] = o[a]);
                                    o = null;
                                    var u, p, h = [];
                                    e.wasmBinary && (p = e.wasmBinary),
                                        e.noExitRuntime,
                                        "object" != typeof WebAssembly && Q("no native wasm support detected");
                                    var d, f = !1;

                                    function g(t) {
                                        var n = e["_" + t];
                                        return n || Q("Assertion failed: Cannot call unknown function " + t + ", make sure it is exported"),
                                            n
                                    }

                                    function A(t, e, n, i) {
                                        var r, a = {
                                                string: function (t) {
                                                    var e = 0;
                                                    if (null != t && 0 !== t) {
                                                        var n = 1 + (t.length << 2),
                                                            i = e = J(n),
                                                            r = I;
                                                        if (0 < n) {
                                                            n = i + n - 1;
                                                            for (var a = 0; a < t.length; ++a) {
                                                                var o = t.charCodeAt(a);
                                                                if (55296 <= o && 57343 >= o && (o = 65536 + ((1023 & o) << 10) | 1023 & t.charCodeAt(++a)),
                                                                    127 >= o) {
                                                                    if (i >= n)
                                                                        break;
                                                                    r[i++] = o
                                                                } else {
                                                                    if (2047 >= o) {
                                                                        if (i + 1 >= n)
                                                                            break;
                                                                        r[i++] = 192 | o >> 6
                                                                    } else {
                                                                        if (65535 >= o) {
                                                                            if (i + 2 >= n)
                                                                                break;
                                                                            r[i++] = 224 | o >> 12
                                                                        } else {
                                                                            if (i + 3 >= n)
                                                                                break;
                                                                            r[i++] = 240 | o >> 18,
                                                                                r[i++] = 128 | o >> 12 & 63
                                                                        }
                                                                        r[i++] = 128 | o >> 6 & 63
                                                                    }
                                                                    r[i++] = 128 | 63 & o
                                                                }
                                                            }
                                                            r[i] = 0
                                                        }
                                                    }
                                                    return e
                                                },
                                                array: function (t) {
                                                    var e = J(t.length);
                                                    return y.set(t, e),
                                                        e
                                                }
                                            },
                                            o = g(t),
                                            s = [];
                                        if (t = 0,
                                            i)
                                            for (var l = 0; l < i.length; l++) {
                                                var c = a[n[l]];
                                                c ? (0 === t && (t = Z()),
                                                    s[l] = c(i[l])) : s[l] = i[l]
                                            }
                                        return n = o.apply(null, s),
                                            r = n,
                                            n = "string" === e ? r ? w(I, r, void 0) : "" : "boolean" === e ? !!r : r,
                                            0 !== t && W(t),
                                            n
                                    }
                                    var m, y, I, v, b, M, x, C = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

                                    function w(t, e, n) {
                                        var i = e + n;
                                        for (n = e; t[n] && !(n >= i);)
                                            ++n;
                                        if (16 < n - e && t.subarray && C)
                                            return C.decode(t.subarray(e, n));
                                        for (i = ""; e < n;) {
                                            var r = t[e++];
                                            if (128 & r) {
                                                var a = 63 & t[e++];
                                                if (192 == (224 & r))
                                                    i += String.fromCharCode((31 & r) << 6 | a);
                                                else {
                                                    var o = 63 & t[e++];
                                                    65536 > (r = 224 == (240 & r) ? (15 & r) << 12 | a << 6 | o : (7 & r) << 18 | a << 12 | o << 6 | 63 & t[e++]) ? i += String.fromCharCode(r) : (r -= 65536,
                                                        i += String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r))
                                                }
                                            } else
                                                i += String.fromCharCode(r)
                                        }
                                        return i
                                    }

                                    function D() {
                                        var t = d.buffer;
                                        m = t,
                                            e.HEAP8 = y = new Int8Array(t),
                                            e.HEAP16 = v = new Int16Array(t),
                                            e.HEAP32 = b = new Int32Array(t),
                                            e.HEAPU8 = I = new Uint8Array(t),
                                            e.HEAPU16 = new Uint16Array(t),
                                            e.HEAPU32 = new Uint32Array(t),
                                            e.HEAPF32 = M = new Float32Array(t),
                                            e.HEAPF64 = x = new Float64Array(t)
                                    }
                                    var E, k = [],
                                        T = [],
                                        N = [];

                                    function S() {
                                        var t = e.preRun.shift();
                                        k.unshift(t)
                                    }
                                    var j, B, L, z = 0,
                                        P = null,
                                        O = null;

                                    function Q(t) {
                                        throw e.onAbort && e.onAbort(t),
                                            c(t),
                                            f = !0,
                                            t = new WebAssembly.RuntimeError("abort(" + t + "). Build with -s ASSERTIONS=1 for more info."),
                                            r(t),
                                            t
                                    }

                                    function R() {
                                        return j.startsWith("data:application/octet-stream;base64,")
                                    }
                                    if (e.preloadedImages = {},
                                        e.preloadedAudios = {},
                                        j = "libjsww.wasm",
                                        !R()) {
                                        var F = j;
                                        j = e.locateFile ? e.locateFile(F, s) : s + F
                                    }

                                    function G() {
                                        var t = j;
                                        try {
                                            if (t == j && p)
                                                return new Uint8Array(p);
                                            throw "both async and sync fetching of the wasm failed"
                                        } catch (t) {
                                            Q(t)
                                        }
                                    }

                                    function U(t) {
                                        for (; 0 < t.length;) {
                                            var n = t.shift();
                                            if ("function" == typeof n)
                                                n(e);
                                            else {
                                                var i = n.H;
                                                "number" == typeof i ? void 0 === n.v ? E.get(i)() : E.get(i)(n.v) : i(void 0 === n.v ? null : n.v)
                                            }
                                        }
                                    }

                                    function Y(t) {
                                        this.u = t - 16,
                                            this.G = function (t) {
                                                b[this.u + 8 >> 2] = t
                                            },
                                            this.C = function (t) {
                                                b[this.u + 0 >> 2] = t
                                            },
                                            this.D = function () {
                                                b[this.u + 4 >> 2] = 0
                                            },
                                            this.B = function () {
                                                y[this.u + 12 >> 0] = 0
                                            },
                                            this.F = function () {
                                                y[this.u + 13 >> 0] = 0
                                            },
                                            this.A = function (t, e) {
                                                this.G(t),
                                                    this.C(e),
                                                    this.D(),
                                                    this.B(),
                                                    this.F()
                                            }
                                    }
                                    var _ = [null, [],
                                            []
                                        ],
                                        H = {
                                            f: function (t) {
                                                return q(t + 16) + 16
                                            },
                                            e: function (t, e, n) {
                                                throw new Y(t).A(e, n),
                                                    t
                                            },
                                            d: function () {
                                                Q()
                                            },
                                            b: function (t, e, n) {
                                                I.copyWithin(t, e, e + n)
                                            },
                                            c: function (t) {
                                                var e = I.length;
                                                if (2147483648 < (t >>>= 0))
                                                    return !1;
                                                for (var n = 1; 4 >= n; n *= 2) {
                                                    var i = e * (1 + .2 / n);
                                                    i = Math.min(i, t + 100663296),
                                                        0 < (i = Math.max(t, i)) % 65536 && (i += 65536 - i % 65536);
                                                    t: {
                                                        try {
                                                            d.grow(Math.min(2147483648, i) - m.byteLength + 65535 >>> 16),
                                                                D();
                                                            var r = 1;
                                                            break t
                                                        } catch (t) {}
                                                        r = void 0
                                                    }
                                                    if (r)
                                                        return !0
                                                }
                                                return !1
                                            },
                                            a: function (t, e, n, i) {
                                                for (var r = 0, a = 0; a < n; a++) {
                                                    for (var o = b[e + 8 * a >> 2], s = b[e + (8 * a + 4) >> 2], u = 0; u < s; u++) {
                                                        var p = I[o + u],
                                                            h = _[t];
                                                        0 === p || 10 === p ? ((1 === t ? l : c)(w(h, 0)),
                                                            h.length = 0) : h.push(p)
                                                    }
                                                    r += s
                                                }
                                                return b[i >> 2] = r,
                                                    0
                                            }
                                        };
                                    ! function () {
                                        function t(t) {
                                            e.asm = t.exports,
                                                d = e.asm.g,
                                                D(),
                                                E = e.asm.o,
                                                T.unshift(e.asm.h),
                                                z--,
                                                e.monitorRunDependencies && e.monitorRunDependencies(z),
                                                0 == z && (null !== P && (clearInterval(P),
                                                        P = null),
                                                    O && (t = O,
                                                        O = null,
                                                        t()))
                                        }

                                        function n(e) {
                                            t(e.instance)
                                        }

                                        function i(t) {
                                            return (p || "function" != typeof fetch ? Promise.resolve().then((function () {
                                                return G()
                                            })) : fetch(j, {
                                                credentials: "same-origin"
                                            }).then((function (t) {
                                                if (!t.ok)
                                                    throw "failed to load wasm binary file at '" + j + "'";
                                                return t.arrayBuffer()
                                            })).catch((function () {
                                                return G()
                                            }))).then((function (t) {
                                                return WebAssembly.instantiate(t, a)
                                            })).then(t, (function (t) {
                                                c("failed to asynchronously prepare wasm: " + t),
                                                    Q(t)
                                            }))
                                        }
                                        var a = {
                                            a: H
                                        };
                                        if (z++,
                                            e.monitorRunDependencies && e.monitorRunDependencies(z),
                                            e.instantiateWasm)
                                            try {
                                                return e.instantiateWasm(a, t)
                                            } catch (t) {
                                                return c("Module.instantiateWasm callback failed with error: " + t),
                                                    !1
                                            }
                                            (p || "function" != typeof WebAssembly.instantiateStreaming || R() || "function" != typeof fetch ? i(n) : fetch(j, {
                                                credentials: "same-origin"
                                            }).then((function (t) {
                                                return WebAssembly.instantiateStreaming(t, a).then(n, (function (t) {
                                                    return c("wasm streaming compile failed: " + t),
                                                        c("falling back to ArrayBuffer instantiation"),
                                                        i(n)
                                                }))
                                            }))).catch(r)
                                    }(),
                                    e.___wasm_call_ctors = function () {
                                            return (e.___wasm_call_ctors = e.asm.h).apply(null, arguments)
                                        },
                                        e._AudioJoySoundProcessor_init = function () {
                                            return (e._AudioJoySoundProcessor_init = e.asm.i).apply(null, arguments)
                                        },
                                        e._AudioJoySoundProcessor_free = function () {
                                            return (e._AudioJoySoundProcessor_free = e.asm.j).apply(null, arguments)
                                        },
                                        e._AudioJoySoundProcessor_process = function () {
                                            return (e._AudioJoySoundProcessor_process = e.asm.k).apply(null, arguments)
                                        },
                                        e._AudioJoySoundProcessor_setParamCtl = function () {
                                            return (e._AudioJoySoundProcessor_setParamCtl = e.asm.l).apply(null, arguments)
                                        },
                                        e._AudioJoySoundProcessor_Set_Switch_Status = function () {
                                            return (e._AudioJoySoundProcessor_Set_Switch_Status = e.asm.m).apply(null, arguments)
                                        },
                                        e._AudioJoySoundProcessor_Get_Switch_Status = function () {
                                            return (e._AudioJoySoundProcessor_Get_Switch_Status = e.asm.n).apply(null, arguments)
                                        };
                                    var V, Z = e.stackSave = function () {
                                            return (Z = e.stackSave = e.asm.p).apply(null, arguments)
                                        },
                                        W = e.stackRestore = function () {
                                            return (W = e.stackRestore = e.asm.q).apply(null, arguments)
                                        },
                                        J = e.stackAlloc = function () {
                                            return (J = e.stackAlloc = e.asm.r).apply(null, arguments)
                                        },
                                        q = e._malloc = function () {
                                            return (q = e._malloc = e.asm.s).apply(null, arguments)
                                        };

                                    function K() {
                                        function t() {
                                            if (!V && (V = !0,
                                                    e.calledRun = !0,
                                                    !f)) {
                                                if (U(T),
                                                    n(e),
                                                    e.onRuntimeInitialized && e.onRuntimeInitialized(),
                                                    e.postRun)
                                                    for ("function" == typeof e.postRun && (e.postRun = [e.postRun]); e.postRun.length;) {
                                                        var t = e.postRun.shift();
                                                        N.unshift(t)
                                                    }
                                                U(N)
                                            }
                                        }
                                        if (!(0 < z)) {
                                            if (e.preRun)
                                                for ("function" == typeof e.preRun && (e.preRun = [e.preRun]); e.preRun.length;)
                                                    S();
                                            U(k),
                                                0 < z || (e.setStatus ? (e.setStatus("Running..."),
                                                    setTimeout((function () {
                                                        setTimeout((function () {
                                                                e.setStatus("")
                                                            }), 1),
                                                            t()
                                                    }), 1)) : t())
                                        }
                                    }
                                    if (e._free = function () {
                                            return (e._free = e.asm.t).apply(null, arguments)
                                        },
                                        e.cwrap = function (t, e, n, i) {
                                            var r = (n = n || []).every((function (t) {
                                                return "number" === t
                                            }));
                                            return "string" !== e && r && !i ? g(t) : function () {
                                                return A(t, e, n, arguments)
                                            }
                                        },
                                        e.setValue = function (t, e, n) {
                                            switch ("*" === (n = n || "i8").charAt(n.length - 1) && (n = "i32"),
                                                n) {
                                                case "i1":
                                                case "i8":
                                                    y[t >> 0] = e;
                                                    break;
                                                case "i16":
                                                    v[t >> 1] = e;
                                                    break;
                                                case "i32":
                                                    b[t >> 2] = e;
                                                    break;
                                                case "i64":
                                                    L = [e >>> 0, (B = e,
                                                            1 <= +Math.abs(B) ? 0 < B ? (0 | Math.min(+Math.floor(B / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((B - +(~~B >>> 0)) / 4294967296) >>> 0 : 0)],
                                                        b[t >> 2] = L[0],
                                                        b[t + 4 >> 2] = L[1];
                                                    break;
                                                case "float":
                                                    M[t >> 2] = e;
                                                    break;
                                                case "double":
                                                    x[t >> 3] = e;
                                                    break;
                                                default:
                                                    Q("invalid type for setValue: " + n)
                                            }
                                        },
                                        e.getValue = function (t, e) {
                                            switch ("*" === (e = e || "i8").charAt(e.length - 1) && (e = "i32"),
                                                e) {
                                                case "i1":
                                                case "i8":
                                                    return y[t >> 0];
                                                case "i16":
                                                    return v[t >> 1];
                                                case "i32":
                                                case "i64":
                                                    return b[t >> 2];
                                                case "float":
                                                    return M[t >> 2];
                                                case "double":
                                                    return x[t >> 3];
                                                default:
                                                    Q("invalid type for getValue: " + e)
                                            }
                                            return null
                                        },
                                        e.addFunction = function (t, e) {
                                            if (!u) {
                                                u = new WeakMap;
                                                for (var n = 0; n < E.length; n++) {
                                                    var i = E.get(n);
                                                    i && u.set(i, n)
                                                }
                                            }
                                            if (u.has(t))
                                                t = u.get(t);
                                            else {
                                                if (h.length)
                                                    n = h.pop();
                                                else {
                                                    try {
                                                        E.grow(1)
                                                    } catch (t) {
                                                        if (!(t instanceof RangeError))
                                                            throw t;
                                                        throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH."
                                                    }
                                                    n = E.length - 1
                                                }
                                                try {
                                                    E.set(n, t)
                                                } catch (s) {
                                                    if (!(s instanceof TypeError))
                                                        throw s;
                                                    if ("function" == typeof WebAssembly.Function) {
                                                        var r = {
                                                                i: "i32",
                                                                j: "i64",
                                                                f: "f32",
                                                                d: "f64"
                                                            },
                                                            a = {
                                                                parameters: [],
                                                                results: "v" == e[0] ? [] : [r[e[0]]]
                                                            };
                                                        for (i = 1; i < e.length; ++i)
                                                            a.parameters.push(r[e[i]]);
                                                        e = new WebAssembly.Function(a, t)
                                                    } else {
                                                        r = [1, 0, 1, 96],
                                                            a = e.slice(0, 1),
                                                            e = e.slice(1);
                                                        var o = {
                                                            i: 127,
                                                            j: 126,
                                                            f: 125,
                                                            d: 124
                                                        };
                                                        for (r.push(e.length),
                                                            i = 0; i < e.length; ++i)
                                                            r.push(o[e[i]]);
                                                        "v" == a ? r.push(0) : r = r.concat([1, o[a]]),
                                                            r[1] = r.length - 2,
                                                            e = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0].concat(r, [2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0])),
                                                            e = new WebAssembly.Module(e),
                                                            e = new WebAssembly.Instance(e, {
                                                                e: {
                                                                    f: t
                                                                }
                                                            }).exports.f
                                                    }
                                                    E.set(n, e)
                                                }
                                                u.set(t, n),
                                                    t = n
                                            }
                                            return t
                                        },
                                        O = function t() {
                                            V || K(),
                                                V || (O = t)
                                        },
                                        e.run = K,
                                        e.preInit)
                                        for ("function" == typeof e.preInit && (e.preInit = [e.preInit]); 0 < e.preInit.length;)
                                            e.preInit.pop()();
                                    return K(),
                                        t.ready
                                }
                            );
                            t.exports = r
                        },
                    "./src/node/jsww.worklet.js":
                        /*!**********************************!*\
                         !*** ./src/node/jsww.worklet.js ***!
                         \**********************************/
                        /*! no exports provided */
                        /*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/node/joysound-node.ts (referenced with require.resolve) */
                        function (t, e, n) {
                            "use strict";
                            n.r(e);
                            var i = n( /*! @babel/runtime/helpers/inheritsLoose */
                                    "./node_modules/@babel/runtime/helpers/inheritsLoose.js"),
                                r = n.n(i),
                                a = n( /*! @babel/runtime/helpers/wrapNativeSuper */
                                    "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js"),
                                o = n.n(a),
                                s = n( /*! ../lib/libjs-wrapper */
                                    "./src/lib/libjs-wrapper.ts"),
                                l = n( /*! events */
                                    "./node_modules/events/events.js"),
                                c = n( /*! ../events */
                                    "./src/events.ts"),
                                u = n( /*! ./worker-cmd */
                                    "./src/node/worker-cmd.ts"),
                                p = n( /*! ../utils/log */
                                    "./src/utils/log.ts"),
                                h = "worklet",
                                d = function (t) {
                                    function e(e) {
                                        var n;
                                        return (n = t.call(this, e) || this)._jsww = void 0,
                                            n._enabled = void 0,
                                            n.port.onmessage = function (t) {
                                                var e = t.data;
                                                if (e.cmd === u.WorkerCmd.INIT) {
                                                    p.Log.level(e.logLevel);
                                                    var i = e.lib;
                                                    n._eventEmitter = new l.EventEmitter,
                                                        n._jsww = new s.default(n._eventEmitter),
                                                        n._eventEmitter.on(c.default.JSWW_INIT_COMPLETE, (function () {
                                                            n.port.postMessage({
                                                                cmd: u.WorkerCmd.JSWW_INIT_COMPLETE
                                                            })
                                                        })),
                                                        n._eventEmitter.on(c.default.STATU_CHANGE, (function (t) {
                                                            n.port.postMessage({
                                                                cmd: u.WorkerCmd.STATU_CHANGE,
                                                                enabled: t.enabled
                                                            })
                                                        })),
                                                        n._jsww.init(i),
                                                        p.Log.i(h, "init sampleRate: " + e.sampleRate + " channelCount: " + e.channelCount + " bufferSize: " + e.bufferSize),
                                                        n._updateInfo(e.sampleRate, e.channelCount, e.bufferSize),
                                                        void 0 !== n._enabled && n._jsww.setEnabled(n._enabled)
                                                } else
                                                    e.cmd === u.WorkerCmd.SET_ENABLED ? n._jsww ? n._jsww.setEnabled(e.value) : n._enabled = e.value : e.cmd === u.WorkerCmd.FLUSH && (p.Log.i(h, "flush"),
                                                        n._inputBufIndex = 0,
                                                        n._outputBuf && (n._outputBufIndex = n._outputBuf.length))
                                            },
                                            n
                                    }
                                    r()(e, t);
                                    var n = e.prototype;
                                    return n.process = function (t, e, n) {
                                            var i = this,
                                                r = t[0],
                                                a = e[0];
                                            return this._inputBuf ? function () {
                                                    i._channelCount !== r.length && (p.Log.i(h, "channel count change. " + i._channelCount + " -> " + r.length),
                                                        i._updateInfo(i._sampleRate, r.length, i._bufferSize));
                                                    for (var t = r.length, e = function (e) {
                                                            r[e].forEach((function (n, r) {
                                                                i._inputBuf[i._inputBufIndex + r * t + e] = n
                                                            }))
                                                        }, n = 0; n < t; n++)
                                                        e(n);
                                                    if (i._inputBufIndex += 128 * t,
                                                        i._inputBufIndex >= i._inputBuf.length && (i._outputBuf = i._jsww.process(i._inputBuf),
                                                            i._inputBufIndex = 0,
                                                            i._outputBufIndex = 0),
                                                        i._outputBufIndex < i._outputBuf.length)
                                                        if (a.length === t)
                                                            for (var o = 0; o < 128 * a.length; o++)
                                                                a[i._outputBufIndex % t][Math.floor(o / t)] = i._outputBuf[i._outputBufIndex],
                                                                i._outputBufIndex++;
                                                        else
                                                            i._outputBufIndex += 128 * t;
                                                    else
                                                        a.forEach((function (t) {
                                                            for (var e = 0; e < 128; e++)
                                                                t[e] = 0
                                                        }))
                                                }() : r.forEach((function (t, e) {
                                                    t.forEach((function (t, n) {
                                                        a[e][n] = t
                                                    }))
                                                })),
                                                !0
                                        },
                                        n._initBuf = function (t) {
                                            p.Log.i(h, "init buffer " + t),
                                                this._inputBuf = new Float32Array(t),
                                                this._outputBuf = new Float32Array(t),
                                                this._inputBufIndex = 0,
                                                this._outputBufIndex = t
                                        },
                                        n._updateInfo = function (t, e, n) {
                                            this._bufferSize = 128 * Math.floor(n / 128),
                                                this._sampleRate = t,
                                                this._channelCount = e,
                                                this._initBuf(this._bufferSize * e),
                                                this._jsww.updateInfo(this._sampleRate, this._channelCount, this._bufferSize)
                                        },
                                        e
                                }(o()(AudioWorkletProcessor));
                            registerProcessor("jsww", d)
                        },
                    "./src/node/worker-cmd.ts":
                        /*!********************************!*\
                         !*** ./src/node/worker-cmd.ts ***!
                         \********************************/
                        /*! exports provided: WorkerCmd */
                        function (t, e, n) {
                            "use strict";
                            var i;
                            n.r(e),
                                n.d(e, "WorkerCmd", (function () {
                                    return i
                                })),
                                function (t) {
                                    t.INIT = "init",
                                        t.FLUSH = "flush",
                                        t.ERROR = "error",
                                        t.SET_ENABLED = "setEnabled",
                                        t.STATU_CHANGE = "statuChange",
                                        t.DESTROY = "destroy",
                                        t.JSWW_INIT_COMPLETE = "jswwInitComplete"
                                }(i || (i = {}))
                        },
                    "./src/utils/log.ts":
                        /*!**************************!*\
                         !*** ./src/utils/log.ts ***!
                         \**************************/
                        /*! exports provided: Log, LOG_LEVEL */
                        function (t, e, n) {
                            "use strict";
                            n.r(e),
                                n.d(e, "Log", (function () {
                                    return s
                                })),
                                n.d(e, "LOG_LEVEL", (function () {
                                    return i
                                }));
                            var i, r = "kwai-joysound",
                                a = !0;

                            function o(t, e) {
                                return e && 0 !== e.length || (e = [t],
                                        t = ""),
                                    t = a ? r + (t ? "::" + t : "") : t || r,
                                    e.unshift("[" + t + "] > "),
                                    e
                            }! function (t) {
                                t.LEVEL_ERROR = "e",
                                    t.LEVEL_WARN = "w",
                                    t.LEVEL_INFO = "i",
                                    t.LEVEL_DEBUG = "d",
                                    t.LEVEL_VERBOSE = "v"
                            }(i || (i = {}));
                            var s = function () {
                                function t() {}
                                return t.level = function (e) {
                                        switch (t.ENABLE_ERROR = t.ENABLE_WARN = t.ENABLE_INFO = t.ENABLE_DEBUG = t.ENABLE_VERBOSE = !1,
                                            e) {
                                            case i.LEVEL_ERROR:
                                                t.ENABLE_ERROR = !0;
                                                break;
                                            case i.LEVEL_WARN:
                                                t.ENABLE_ERROR = t.ENABLE_WARN = !0;
                                                break;
                                            case i.LEVEL_INFO:
                                                t.ENABLE_ERROR = t.ENABLE_WARN = t.ENABLE_INFO = !0;
                                                break;
                                            case i.LEVEL_DEBUG:
                                                t.ENABLE_ERROR = t.ENABLE_WARN = t.ENABLE_INFO = t.ENABLE_DEBUG = !0;
                                                break;
                                            case i.LEVEL_VERBOSE:
                                                t.ENABLE_ERROR = t.ENABLE_WARN = t.ENABLE_INFO = t.ENABLE_DEBUG = t.ENABLE_VERBOSE = !0
                                        }
                                    },
                                    t.e = function (e) {
                                        if (t.ENABLE_ERROR) {
                                            for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                                                i[r - 1] = arguments[r];
                                            var a = o(e, i);
                                            (console.error || console.warn || console.log).apply(console, a)
                                        }
                                    },
                                    t.w = function (e) {
                                        if (t.ENABLE_WARN) {
                                            for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                                                i[r - 1] = arguments[r];
                                            var a = o(e, i);
                                            (console.warn || console.log).apply(console, a)
                                        }
                                    },
                                    t.i = function (e) {
                                        if (t.ENABLE_INFO) {
                                            for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                                                i[r - 1] = arguments[r];
                                            var a = o(e, i);
                                            (console.info || console.log).apply(console, a)
                                        }
                                    },
                                    t.d = function (e) {
                                        if (t.ENABLE_DEBUG) {
                                            for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                                                i[r - 1] = arguments[r];
                                            var a = o(e, i);
                                            (console.debug || console.log).apply(console, a)
                                        }
                                    },
                                    t.v = function (e) {
                                        if (t.ENABLE_VERBOSE) {
                                            for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                                                i[r - 1] = arguments[r];
                                            var a = o(e, i);
                                            console.log.apply(console, a)
                                        }
                                    },
                                    t
                            }();
                            s.ENABLE_ERROR = !0,
                                s.ENABLE_WARN = !1,
                                s.ENABLE_INFO = !1,
                                s.ENABLE_DEBUG = !1,
                                s.ENABLE_VERBOSE = !1
                        },
                    "./src/utils/webworkify-webpack.js":
                        /*!*****************************************!*\
                         !*** ./src/utils/webworkify-webpack.js ***!
                         \*****************************************/
                        /*! no static exports found */
                        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
                        function (t, e, n) {
                            function i(t) {
                                var e = {};

                                function n(i) {
                                    if (e[i])
                                        return e[i].exports;
                                    var r = e[i] = {
                                        i: i,
                                        l: !1,
                                        exports: {}
                                    };
                                    return t[i].call(r.exports, r, r.exports, n),
                                        r.l = !0,
                                        r.exports
                                }
                                n.m = t,
                                    n.c = e,
                                    n.i = function (t) {
                                        return t
                                    },
                                    n.d = function (t, e, i) {
                                        n.o(t, e) || Object.defineProperty(t, e, {
                                            configurable: !1,
                                            enumerable: !0,
                                            get: i
                                        })
                                    },
                                    n.r = function (t) {
                                        Object.defineProperty(t, "__esModule", {
                                            value: !0
                                        })
                                    },
                                    n.n = function (t) {
                                        var e = t && t.__esModule ? function () {
                                                return t.default
                                            } :
                                            function () {
                                                return t
                                            };
                                        return n.d(e, "a", e),
                                            e
                                    },
                                    n.o = function (t, e) {
                                        return Object.prototype.hasOwnProperty.call(t, e)
                                    },
                                    n.p = "/",
                                    n.oe = function (t) {
                                        throw console.error(t),
                                            t
                                    };
                                var i = n(n.s = ENTRY_MODULE);
                                return i.default || i
                            }
                            var r = "[\\.|\\-|\\+|\\w|/|@]+",
                                a = "\\(\\s*(/\\*.*?\\*/)?\\s*.*?(" + r + ").*?\\)";

                            function o(t) {
                                return (t + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
                            }

                            function s(t, e, i) {
                                var s = {};
                                s[i] = [];
                                var l = e.toString(),
                                    c = l.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
                                if (!c)
                                    return s;
                                for (var u, p = c[1], h = new RegExp("(\\\\n|\\W)" + o(p) + a, "g"); u = h.exec(l);)
                                    "dll-reference" !== u[3] && s[i].push(u[3]);
                                for (h = new RegExp("\\(" + o(p) + '\\("(dll-reference\\s(' + r + '))"\\)\\)' + a, "g"); u = h.exec(l);)
                                    t[u[2]] || (s[i].push(u[1]),
                                        t[u[2]] = n(u[1]).m),
                                    s[u[2]] = s[u[2]] || [],
                                    s[u[2]].push(u[4]);
                                for (var d, f = Object.keys(s), g = 0; g < f.length; g++)
                                    for (var A = 0; A < s[f[g]].length; A++)
                                        d = s[f[g]][A],
                                        isNaN(1 * d) || (s[f[g]][A] = 1 * s[f[g]][A]);
                                return s
                            }

                            function l(t) {
                                return Object.keys(t).reduce((function (e, n) {
                                    return e || t[n].length > 0
                                }), !1)
                            }
                            t.exports = function (t, e) {
                                e = e || {};
                                var r = {
                                        main: n.m
                                    },
                                    a = e.all ? {
                                        main: Object.keys(r.main)
                                    } : function (t, e) {
                                        for (var n = {
                                                main: [e]
                                            }, i = {
                                                main: []
                                            }, r = {
                                                main: {}
                                            }; l(n);)
                                            for (var a = Object.keys(n), o = 0; o < a.length; o++) {
                                                var c = a[o],
                                                    u = n[c].pop();
                                                if (r[c] = r[c] || {},
                                                    !r[c][u] && t[c][u]) {
                                                    r[c][u] = !0,
                                                        i[c] = i[c] || [],
                                                        i[c].push(u);
                                                    for (var p = s(t, t[c][u], c), h = Object.keys(p), d = 0; d < h.length; d++)
                                                        n[h[d]] = n[h[d]] || [],
                                                        n[h[d]] = n[h[d]].concat(p[h[d]])
                                                }
                                            }
                                        return i
                                    }(r, t),
                                    o = "";
                                Object.keys(a).filter((function (t) {
                                        return "main" !== t
                                    })).forEach((function (t) {
                                        for (var e = 0; a[t][e];)
                                            e++;
                                        a[t].push(e),
                                            r[t][e] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",
                                            o = o + "var " + t + " = (" + i.toString().replace("ENTRY_MODULE", JSON.stringify(e)) + ")({" + a[t].map((function (e) {
                                                return JSON.stringify(e) + ": " + r[t][e].toString()
                                            })).join(",") + "});\n"
                                    })),
                                    o = e.worklet ? o + "((" + i.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + a.main.map((function (t) {
                                        return JSON.stringify(t) + ": " + r.main[t].toString()
                                    })).join(",") + "}));" : o + "new ((" + i.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + a.main.map((function (t) {
                                        return JSON.stringify(t) + ": " + r.main[t].toString()
                                    })).join(",") + "}))(self);";
                                var c = new window.Blob([o], {
                                    type: "text/javascript"
                                });
                                if (e.bare)
                                    return c;
                                var u = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(c),
                                    p = new window.Worker(u);
                                return p.objectURL = u,
                                    p
                            }
                        }
                }).default
            },
            t.exports = n())
    }).call(this, n(35))
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e, n) {
}, function (t, e) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e, n) {
}, function (module, exports, __webpack_require__) {
    }, function (t) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e, n) {
}, function (module, exports, __webpack_require__) {
}, function (t, e, n) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e, n) {
}, function (module, exports, __webpack_require__) {
}, function (t, e) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
    var i = n(208);
    "string" == typeof i && (i = [
        [t.i, i, ""]
    ]);
    var r = {
        attributes: {
            id: "player-async-style"
        },
        injectType: "singletonStyleTag",
        insert: "head",
        singleton: !0
    };
    n(2)(i, r);
    i.locals && (t.exports = i.locals)
}, function (t, e, n) {
    (t.exports = n(1)(!1)).push([t.i, "", ""])
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
    "use strict";
    t.exports = function (t) {
        return function (e) {
            return t.apply(null, e)
        }
    }
}, function (t, e) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
    "use strict";
    var i = n(330),
        r = n(331);
    t.exports = function (t, e) {
        return t && !i(e) ? r(t, e) : e
    }
}, function (t, e, n) {
    "use strict";
    t.exports = function (t) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
    }
}, function (t, e, n) {
    "use strict";
    t.exports = function (t, e) {
        return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
    }
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
    "use strict";
    var i = n(9);
    t.exports = function (t, e, n) {
        return i.forEach(n, (function (n) {
                t = n(t, e)
            })),
            t
    }
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
    "use strict";
    t.exports = function (t) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
    }
}, function (t, e, n) {
    "use strict";
    t.exports = function (t, e) {
        return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
    }
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
    e = t.exports = n(1)(!1);
    var i = n(14)(n(357));
}, function (t, e) {
}, function (t, e) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
    (t.exports = n(1)(!1)).push()
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var i = function () {
            function t() {
                this.key = "base",
                    this.extend = {
                        events: {},
                        properties: {},
                        methods: {},
                        history: {}
                    },
                    this._defaultHistory = {},
                    this._dom = null,
                    this._domStore = {},
                    this._store = {},
                    this._eventMap = {
                        player: {},
                        window: {}
                    }
            }
            return t.prototype.store = function (t, e) {
                    this._player && (this._setStore(t, e),
                        this._bindDom(t, this._store[t]))
                },
                t.prototype._setStore = function (t, e) {
                    this._store[t] = e
                },
                t.prototype.domStore = function (t, e) {
                    if (void 0 === e && (e = !1),
                        e)
                        return this._dom.querySelector(t);
                    var n = this._domStore[t];
                    return n || (n = this._domStore[t] = this._dom.querySelector(t)),
                        n
                },
                t.prototype.on = function (t, e) {
                    this._player && this._player.on(t, e)
                },
                t.prototype.addEventListener = function (t, e) {
                    window.addEventListener(t, e),
                        this._eventMap.window[t] = this._eventMap.window[t] ? this._eventMap.window[t] : [],
                        this._eventMap.window[t].push(e)
                },
                t.prototype.clear = function () {
                    var t = this;
                    Object.keys(this._eventMap).forEach((function (e) {
                        var n = t._eventMap[e];
                        "player" == e ? Object.keys(n).forEach((function (e) {
                            n[e].forEach((function (n) {
                                t._player && t._player.off(e, n)
                            }))
                        })) : "window" == e && Object.keys(n).forEach((function (t) {
                            n[t].forEach((function (e) {
                                window.removeEventListener(t, e)
                            }))
                        }))
                    }))
                },
                t.prototype._bindDom = function (t, e) {
                    var n = this._domStore[t];
                    n || (this._domStore[t] = n = (this._dom.parentElement || this._dom).querySelectorAll("[data-bind-key=" + t + "]")),
                        n && n.length && [].forEach.call(n, (function (t) {
                            var n = t.dataset,
                                i = n.bindAttr,
                                r = n.bindStyle;
                            void 0 !== i ? ("boolean" == typeof e && (e = e ? "true" : "false"),
                                t.setAttribute("data-bind-attr", e)) : void 0 !== r ? t.style[r] = e : t.innerText = e
                        }))
                },
                t.prototype.attach = function (t, e) {
                    void 0 === e && (e = {}),
                        this.detach(),
                        this._player = t,
                        t.eventsNameMap[this.key] = this.extend.events,
                        t.extend[this.key] = this.extend,
                        this._extendPlayer(),
                        this._initDom(),
                        this._initStateBeforeOnPlayer(),
                        this._onPlayer(),
                        this._initStateAfterOnPlayer(),
                        this._onPlugin()
                },
                t.prototype._extendPlayer = function () {},
                t.prototype._initDom = function () {},
                t.prototype._initStateBeforeOnPlayer = function () {},
                t.prototype._onPlayer = function () {},
                t.prototype._initStateAfterOnPlayer = function () {},
                t.prototype._onPlugin = function () {},
                t.prototype._detachExtra = function () {},
                t.prototype.detach = function () {
                    if (this._player) {
                        for (var t in this.clear(),
                                this._detachExtra(),
                                this.extend.methods)
                            delete this._player[this.extend.methods[t]];
                        this._player = null,
                            this._dom && (this._dom = null,
                                this._domStore = {})
                    }
                },
                t.prototype._getHistory = function () {
                    var t = this._player,
                        e = this._defaultHistory,
                        n = {};
                    for (var i in this.extend.history) {
                        var r = t.history.get(this.extend.history[i]);
                        n[i] = void 0 !== r ? r : e[i]
                    }
                    return n
                },
                t
        }(),
        r = n(92),
        a = n.n(r),
        o = n(93),
        s = n.n(o),
        l = n(21),
        c = n.n(l),
        u = n(22),
        p = n.n(u);
    n(132);
    var h, d = function (t, e) {
            void 0 === e && (e = "#");
            var n = (t *= 1).toString(16);
            return e + ("000000".substring(0, "000000".length - n.length) + n).toLocaleUpperCase()
        },
        f = function (t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n)
                return t;
            var i, r, a = n.call(t),
                o = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(i = a.next()).done;)
                    o.push(i.value)
            } catch (t) {
                r = {
                    error: t
                }
            } finally {
                try {
                    i && !i.done && (n = a.return) && n.call(a)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            return o
        };
    ! function (t) {
        t.UUID = "uuid",
            t.AC_USERNAME = "ac_username",
            t.AC_USERIMG = "ac_userimg",
            t.AUTH_KEY = "auth_key",
            t.AUTH_KEY_AC_SHA1 = "auth_key_ac_sha1",
            t.AUTH_KEY_AC_SHA1_ = "auth_key_ac_sha1_",
            t.IDENTIFIER = "identifier",
            t.USERSIG = "usersig",
            t.DID = "_did"
    }(h || (h = {}));
    var g = new(function () {
            function t() {
                var t = this;
                this.cookies = new Map,
                    this.cookie = document.cookie || "",
                    this.cookie.split("; ").map((function (e) {
                        var n = f(e.split("="), 2),
                            i = n[0],
                            r = n[1];
                        t.cookies.set(i, r)
                    }))
            }
            return t.prototype.get = function (t) {
                    return this.cookies.get(t)
                },
                Object.defineProperty(t.prototype, "uid", {
                    get: function () {
                        return this.get(h.AUTH_KEY) || ""
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "uid_ck", {
                    get: function () {
                        return this.get(h.AUTH_KEY_AC_SHA1) || ""
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.isLogin = function () {
                    return this.uid.length > 0
                },
                t
        }()),
        A = {
            addQueryStringArg: function (t, e, n) {
                function i(t, e, n) {
                    function i(t, e, n) {
                        return -1 === t.indexOf("?") ? t += "?" : t += "&",
                            t += encodeURIComponent(e) + "=" + encodeURIComponent(n)
                    }
                    if ("object" == typeof e)
                        for (var r in e)
                            t = i(t, r, e[r]);
                    else
                        "string" == typeof e && (t = i(t, e, n));
                    return t
                }
                if (-1 === t.indexOf("#"))
                    t = i(t, e, n);
                else {
                    var r = t.split("#")[1] || "";
                    t = i(t = t.split("#")[0], e, n),
                        this.addHash(t, r)
                }
                return t
            },
            addHash: function (t, e) {
                return -1 === t.indexOf("#") ? t += "#" + encodeURIComponent(e) : t += encodeURIComponent(e),
                    t
            },
            getUrlArg: function (t, e) {
                var n = new RegExp("[?&]" + t + "=([^&#]*)", "gim");
                return e = e || location.href,
                    n.test(e) ? decodeURIComponent(RegExp.$1) : ""
            }
        },
        m = function (t) {
            if (isNaN(t))
                return "00:00";
            var e, n, i;
            try {
                e = Math.floor(t / 3600),
                    n = Math.floor(t % 3600 / 60),
                    i = Math.floor(t % 3600 % 60)
            } catch (t) {
                e = 0,
                    n = 0,
                    i = 0
            }
            return "" + (0 == e ? "" : (e < 10 ? "0" + e.toString() : e.toString()) + ":") + (n < 10 ? "0" + n.toString() : n.toString()) + ":" + (i < 10 ? "0" + i.toString() : i.toString())
        };
    var y, I, v, b, M = function (t, e) {
            void 0 === e && (e = 300);
            var n, i = null,
                r = null;
            return function () {
                for (var a = [], o = 0; o < arguments.length; o++)
                    a[o] = arguments[o];
                n = a,
                    clearTimeout(r),
                    i ? r = setTimeout((function () {
                        t.apply(null, n),
                            i = null
                    }), e) : i = setTimeout((function () {
                        t.apply(null, n),
                            i = null
                    }), e)
            }
        },
        x = function (t, e) {
            void 0 === e && (e = 300);
            var n, i = null;
            return function () {
                for (var r = [], a = 0; a < arguments.length; a++)
                    r[a] = arguments[a];
                n = r,
                    clearTimeout(i),
                    i = setTimeout((function () {
                        t.apply(null, n),
                            i = null
                    }), e)
            }
        },
        C = function (t) {
            t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullScreen ? t.webkitRequestFullScreen() : t.msRequestFullscreen && t.msRequestFullscreen()
        },
        w = function (t) {
            var e = document;
            D() && (t.requestFullscreen ? e.exitFullscreen() : t.mozRequestFullScreen ? e.mozCancelFullScreen() : t.webkitRequestFullScreen ? e.webkitCancelFullScreen() : t.msRequestFullscreen && e.msExitFullscreen())
        },
        D = function () {
            var t = document;
            return t.fullscreen || t.mozFullScreen || t.webkitIsFullScreen || t.msFullscreenElement || !1
        },
        E = function (t) {
            document.addEventListener("visibilitychange", (function () {
                document.hidden ? t(!1) : t(!0)
            }), !1)
        };

    function k(t, e, n) {
        for (var i = t.length, r = (e[1] - e[0]) / (i - 1), a = 0, o = 0; o < t.length; o++)
            if (t[o] === n) {
                a = o;
                break
            }
        return r * a
    }! function (t) {
        t[t.QUARTER = .25] = "QUARTER",
            t[t.HALF = .5] = "HALF",
            t[t.THREE_QUARTER = .75] = "THREE_QUARTER",
            t[t.WHOLE = 1] = "WHOLE",
            t[t.UNLIMITED = -1] = "UNLIMITED"
    }(b || (b = {}));
    var T, N = [b.QUARTER, b.HALF, b.THREE_QUARTER, b.WHOLE, b.UNLIMITED],
        S = ((y = {})[b.QUARTER] = "1/4屏",
            y[b.HALF] = "1/2屏",
            y[b.THREE_QUARTER] = "3/4屏",
            y[b.WHOLE] = "不重叠",
            y[b.UNLIMITED] = "不限",
            y);
    ! function (t) {
        t[t.HALF = .5] = "HALF",
            t[t.THREE_QUARTER = .75] = "THREE_QUARTER",
            t[t.NORMAL = 1] = "NORMAL",
            t[t.ONE_AND_HALF = 1.5] = "ONE_AND_HALF",
            t[t.TWO = 2] = "TWO"
    }(T || (T = {}));
    var j, B = [T.HALF, T.THREE_QUARTER, T.NORMAL, T.ONE_AND_HALF, T.TWO],
        L = ((I = {})[T.HALF] = "0.5x",
            I[T.THREE_QUARTER] = "0.75x",
            I[T.NORMAL] = "适中",
            I[T.ONE_AND_HALF] = "1.5x",
            I[T.TWO] = "2.0x",
            I);
    ! function (t) {
        t[t.HALF = .5] = "HALF",
            t[t.THREE_QUARTER = .75] = "THREE_QUARTER",
            t[t.NORMAL = 1] = "NORMAL",
            t[t.ONE_AND_HALF = 1.5] = "ONE_AND_HALF",
            t[t.TWO = 2] = "TWO"
    }(j || (j = {}));
    var z, P, O = [j.HALF, j.THREE_QUARTER, j.NORMAL, j.ONE_AND_HALF, j.TWO],
        Q = ((v = {})[j.HALF] = "0.5x",
            v[j.THREE_QUARTER] = "0.75x",
            v[j.NORMAL] = "适中",
            v[j.ONE_AND_HALF] = "1.5x",
            v[j.TWO] = "2.0x",
            v),
        R = n(11),
        F = n.n(R),
        G = n(12),
        U = n.n(G),
        Y = function (t, e, n, i) {
            return new(n || (n = Promise))((function (r, a) {
                function o(t) {
                    try {
                        l(i.next(t))
                    } catch (t) {
                        a(t)
                    }
                }

                function s(t) {
                    try {
                        l(i.throw(t))
                    } catch (t) {
                        a(t)
                    }
                }

                function l(t) {
                    var e;
                    t.done ? r(t.value) : (e = t.value,
                        e instanceof n ? e : new n((function (t) {
                            t(e)
                        }))).then(o, s)
                }
                l((i = i.apply(t, e || [])).next())
            }))
        },
        _ = function (t, e) {
            var n, i, r, a, o = {
                label: 0,
                sent: function () {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                },
                "function" == typeof Symbol && (a[Symbol.iterator] = function () {
                    return this
                }),
                a;

            function s(a) {
                return function (s) {
                    return function (a) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; o;)
                            try {
                                if (n = 1,
                                    i && (r = 2 & a[0] ? i.return : a[0] ? i.throw || ((r = i.return) && r.call(i),
                                        0) : i.next) && !(r = r.call(i, a[1])).done)
                                    return r;
                                switch (i = 0,
                                    r && (a = [2 & a[0], r.value]),
                                    a[0]) {
                                    case 0:
                                    case 1:
                                        r = a;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++,
                                            i = a[1],
                                            a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop(),
                                            o.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = (r = o.trys).length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < r[1]) {
                                            o.label = r[1],
                                                r = a;
                                            break
                                        }
                                        if (r && o.label < r[2]) {
                                            o.label = r[2],
                                                o.ops.push(a);
                                            break
                                        }
                                        r[2] && o.ops.pop(),
                                            o.trys.pop();
                                        continue
                                }
                                a = e.call(t, o)
                            } catch (t) {
                                a = [6, t],
                                    i = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & a[0])
                            throw a[1];
                        return {
                            value: a[0] ? a[1] : void 0,
                            done: !0
                        }
                    }([a, s])
                }
            }
        },
        H = function (t, e) {
            return Y(void 0, void 0, void 0, (function () {
                return _(this, (function (n) {
                    return [2, F.a.get("/rest/pc-direct/new-danmaku/getDanmakuRoleNames?resourceId=" + t + "&type=" + e, {
                        withCredentials: !0
                    }).then((function (t) {
                        return t && t.data && 0 == t.data.result && t.data.data || []
                    })).catch((function (t) {
                        return console.log(t),
                            []
                    }))]
                }))
            }))
        },
        V = function (t, e, n, i) {
            var r = t.videoId,
                a = t.resourceId,
                o = t.resourceType;
            void 0 === n && (n = 0),
                void 0 === i && (i = 3);
            z = F.a.CancelToken,
                P = z.source(),
                F.a.post("/rest/pc-direct/play/playInfo/spriteVtt", U.a.stringify({
                    videoId: 1 * r,
                    resourceId: 1 * a,
                    resourceType: 1 * o
                }), {
                    withCredentials: !0,
                    cancelToken: P.token,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then((function (t) {
                    t && t.data && 0 == t.data.result ? e(function (t) {
                        if (!t)
                            return [];
                        var e = [];
                        try {
                            for (var n = t.split("\n").slice(1), i = 0; i <= n.length - 3; i += 3) {
                                var r = n[i + 1],
                                    a = n[i + 2],
                                    o = r.split(" --\x3e "),
                                    s = o[0].split(":"),
                                    l = o[1].split(":"),
                                    c = 60 * s[0] * 60 + 60 * s[1] + 1 * s[2],
                                    u = 60 * l[0] * 60 + 60 * l[1] + 1 * l[2],
                                    p = a.split("#"),
                                    h = p[0],
                                    d = p[1].split("=")[1].split(",");
                                e.push({
                                    startT: c,
                                    endT: u,
                                    url: h,
                                    x: d[0],
                                    y: d[1],
                                    w: d[2],
                                    h: d[3]
                                })
                            }
                        } catch (t) {
                            console.log("parseSpriteData error", t)
                        }
                        return e
                    }(t.data.spriteVtt)) : ++n < i ? V({
                        videoId: r,
                        resourceId: a,
                        resourceType: o
                    }, e, n++, i) : e([])
                })).catch((function (t) {
                    console.log(t),
                        ++n < i ? V({
                            videoId: r,
                            resourceId: a,
                            resourceType: o
                        }, e, n++, i) : e(null)
                }))
        },
        Z = function (t) {
            void 0 === t && (t = []);
            var e = 1,
                n = 2,
                i = t.filter((function (t) {
                    return "user" === t.type
                })) || [],
                r = t.filter((function (t) {
                    return "key" === t.type
                })) || [],
                a = [];
            return (null == i ? void 0 : i.length) > 0 && a.push(F()({
                    url: "/rest/pc-direct/new-danmaku/blockWords/batchAdd",
                    method: "POST",
                    data: U.a.stringify({
                        blockWordsType: n,
                        blockWordsList: i.map((function (t) {
                            return t.value
                        }))
                    }),
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    withCredentials: !0
                })),
                (null == r ? void 0 : r.length) > 0 && a.push(F()({
                    url: "/rest/pc-direct/new-danmaku/blockWords/batchAdd",
                    method: "POST",
                    data: U.a.stringify({
                        blockWordsType: e,
                        blockWordsList: r.map((function (t) {
                            return t.value
                        }))
                    }),
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    withCredentials: !0
                })),
                Promise.all(a)
        },
        W = function (t, e, n, i) {
            return new(n || (n = Promise))((function (r, a) {
                function o(t) {
                    try {
                        l(i.next(t))
                    } catch (t) {
                        a(t)
                    }
                }

                function s(t) {
                    try {
                        l(i.throw(t))
                    } catch (t) {
                        a(t)
                    }
                }

                function l(t) {
                    var e;
                    t.done ? r(t.value) : (e = t.value,
                        e instanceof n ? e : new n((function (t) {
                            t(e)
                        }))).then(o, s)
                }
                l((i = i.apply(t, e || [])).next())
            }))
        },
        J = function (t, e) {
            var n, i, r, a, o = {
                label: 0,
                sent: function () {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                },
                "function" == typeof Symbol && (a[Symbol.iterator] = function () {
                    return this
                }),
                a;

            function s(a) {
                return function (s) {
                    return function (a) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; o;)
                            try {
                                if (n = 1,
                                    i && (r = 2 & a[0] ? i.return : a[0] ? i.throw || ((r = i.return) && r.call(i),
                                        0) : i.next) && !(r = r.call(i, a[1])).done)
                                    return r;
                                switch (i = 0,
                                    r && (a = [2 & a[0], r.value]),
                                    a[0]) {
                                    case 0:
                                    case 1:
                                        r = a;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++,
                                            i = a[1],
                                            a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop(),
                                            o.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = (r = o.trys).length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < r[1]) {
                                            o.label = r[1],
                                                r = a;
                                            break
                                        }
                                        if (r && o.label < r[2]) {
                                            o.label = r[2],
                                                o.ops.push(a);
                                            break
                                        }
                                        r[2] && o.ops.pop(),
                                            o.trys.pop();
                                        continue
                                }
                                a = e.call(t, o)
                            } catch (t) {
                                a = [6, t],
                                    i = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & a[0])
                            throw a[1];
                        return {
                            value: a[0] ? a[1] : void 0,
                            done: !0
                        }
                    }([a, s])
                }
            }
        },
        q = null,
        K = null,
        X = null,
        $ = null,
        tt = function (t, e, n) {
            var i, r, a, o, s = t,
                l = s._player,
                c = s._store[e.key + "Focus"];
            switch (n.type) {
                case "mousemove":
                    c && (r = (i = s.domStore(e.selector + " .slider-content", !0).getBoundingClientRect()).left,
                        i.top,
                        a = i.width,
                        i.height,
                        o = n.clientX,
                        (o -= r) < 0 ? o = 0 : o > a && (o = a),
                        s.store(e.key + "Percent", o / a * 100 + "%"));
                    break;
                case "mousedown":
                    s.store(e.key + "Focus", !0);
                    break;
                case "mouseup":
                    c && function () {
                            var t, i = (t = s.domStore(e.selector + " .slider-content", !0).getBoundingClientRect()).left,
                                r = (t.top,
                                    t.width),
                                a = (t.height,
                                    n.clientX);
                            (a -= i) < 0 ? a = 0 : a > r && (a = r);
                            var o = function (t, e, n) {
                                if (!Array.isArray(e) || 0 == e.length)
                                    return null;
                                var i = (t[1] - t[0]) / (e.length - 1),
                                    r = 0;
                                if (n < .5 * i)
                                    r = 0;
                                else if (n >= t[1] - .5 * i)
                                    r = e.length - 1;
                                else {
                                    var a = n % i,
                                        o = Math.floor(n / i);
                                    a > .5 * i && o++,
                                        r = o
                                }
                                return r
                            }([0, r], e.step, a);
                            s.store(e.key + "Percent", 100 / (e.step.length - 1) * o + "%"),
                                "area" === e.key && (e.step[o] === b.UNLIMITED ? l.danmaku.allowOverlap = !0 : l.danmaku.allowOverlap = !1),
                                l.danmaku[e.key] = e.step[o]
                        }(),
                        s.store(e.key + "Focus", !1)
            }
        },
        et = null,
        nt = {},
        it = function (t) {
            var e, n, i = t,
                r = (i._player,
                    void 0 === (n = (e = i._store).sprites) ? [] : n),
                a = e.progressTipTimeSeconds,
                o = null;
            r.some((function (t) {
                var e = t.startT,
                    n = t.endT,
                    i = t.url,
                    r = t.x,
                    s = t.y,
                    l = t.w,
                    c = t.h;
                return e <= a && a <= n && (o = {
                        url: i,
                        x: r,
                        y: s,
                        w: l,
                        h: c
                    }),
                    !!o
            }));
            var s = i.domStore(".sprite");
            if (o) {
                if (et && o.url == et.url && o.x == et.x && o.y == et.y)
                    return;
                var l = o.url,
                    c = o.x,
                    u = o.y,
                    p = o.w,
                    h = o.h,
                    d = 1;
                if (d = p / h >= 16 / 9 ? 160 / p : 90 / h,
                    s.style.width = p + "px",
                    s.style.height = h + "px",
                    s.style.backgroundPosition = -c + "px " + -u + "px",
                    s.style.transform = "scale(" + d + ")",
                    !et || o.url != et.url)
                    if (nt[l])
                        s.style.backgroundImage = "url(" + l + ")",
                        i.domStore(".loading-sprite").style.display = "none";
                    else {
                        s.style.backgroundImage = "",
                            i.domStore(".loading-sprite").style.display = "block";
                        var f = document.createElement("img");
                        f.onload = function () {
                                nt[l] = !0,
                                    et.url == l && (s.style.backgroundImage = "url(" + l + ")",
                                        i.domStore(".loading-sprite").style.display = "none")
                            },
                            f.src = l
                    }
                et = o
            } else
                et = null,
                s.style.cssText = ""
        },
        rt = function (t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n)
                return t;
            var i, r, a = n.call(t),
                o = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(i = a.next()).done;)
                    o.push(i.value)
            } catch (t) {
                r = {
                    error: t
                }
            } finally {
                try {
                    i && !i.done && (n = a.return) && n.call(a)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            return o
        },
        at = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
                t = t.concat(rt(arguments[e]));
            return t
        },
        ot = function (t) {
            var e = t,
                n = e._player,
                i = e._getHistory(),
                r = i.playContinue,
                a = i.danmaku_enabled,
                o = i.subtitle_protected,
                s = i.danmaku_merged,
                l = i.danmaku_alpha,
                c = i.danmaku_blocked,
                u = i.danmaku_filtered,
                p = i.danmaku_area,
                h = i.danmaku_allowOverlap,
                d = i.danmaku_speedScale,
                f = i.danmaku_fontScale;
            Object.defineProperty(n, "isFulled", {
                configurable: !0,
                get: function () {
                    return D()
                },
                set: function (t) {
                    t ? C(e._player.$container) : w(e._player.$container)
                }
            });
            var A = n[e.extend.properties.danmaku],
                m = n[e.extend.properties._danmaku];
            if (n[e.extend.properties.playContinue] = r,
                A = n[e.extend.properties.danmaku] = A || {},
                (m = n[e.extend.properties._danmaku] = m || {}).enabled = a,
                m.subtitleProtected = o,
                m.merged = s,
                m.alpha = l,
                m.blocked = c,
                m.filtered = u,
                m.area = p,
                m.allowOverlap = h,
                m.speedScale = d,
                m.fontScale = f,
                ["enabled", "subtitleProtected", "merged", "alpha", "area", "blocked", "filtered", "allowOverlap", "speedScale", "fontScale"].forEach((function (t) {
                    Object.defineProperty(A, t, {
                        configurable: !0,
                        get: function () {
                            return m[t]
                        },
                        set: function (e) {
                            m[t] = e,
                                n.emit("danmaku" + t.substring(0, 1).toLocaleUpperCase() + t.substring(1) + "Changed", e)
                        }
                    })
                })),
                g.isLogin())
                try {
                    ! function (t) {
                        W(void 0, void 0, void 0, (function () {
                            var e, n, i, r, a, o, s;
                            return J(this, (function (l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, !!g.isLogin() && F()({
                                            url: "/rest/pc-direct/new-danmaku/blockWords/load",
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/x-www-form-urlencoded"
                                            },
                                            withCredentials: !0
                                        }).then((function (t) {
                                            var e = t.data;
                                            if (0 === (null == e ? void 0 : e.result)) {
                                                var n = [],
                                                    i = e.textType || [],
                                                    r = e.userIdType || [];
                                                return i.forEach((function (t) {
                                                        n.push({
                                                            type: "key",
                                                            value: t.blockWords,
                                                            enable: !0
                                                        })
                                                    })),
                                                    r.forEach((function (t) {
                                                        n.push({
                                                            type: "user",
                                                            value: t.blockWords,
                                                            enable: !0
                                                        })
                                                    })),
                                                    n
                                            }
                                            return !1
                                        }))];
                                    case 1:
                                        return (e = l.sent()) ? (n = (null == t ? void 0 : t.filtered) || {
                                                filters: [],
                                                enable: !0
                                            },
                                            i = n.filters,
                                            r = n.enable,
                                            a = localStorage.getItem("AcfunH5playerFilterSyncTime") || null,
                                            o = [],
                                            Array.isArray(e) ? 0 === e.length && a ? (i = e,
                                                [3, 5]) : [3, 2] : [3, 6]) : [2];
                                    case 2:
                                        return e.length > 0 ? (e.forEach((function (t) {
                                                var e = i.find((function (e) {
                                                    return e.type === t.type && e.value === t.value
                                                }));
                                                e && (t.enable = e.enable)
                                            })),
                                            i = e,
                                            [3, 5]) : [3, 3];
                                    case 3:
                                        return a ? [3, 5] : (c = e,
                                            u = function (t, e) {
                                                return t.type === e.type && t.value === e.value
                                            },
                                            (o = [].concat(i).reduce((function (t, e) {
                                                return c.find((function (t) {
                                                    return u(t, e)
                                                })) ? t : t.concat([e])
                                            }), [])).length > 0 ? [4, Z(o)] : [3, 5]);
                                    case 4:
                                        (s = l.sent()) && s.filter((function (t) {
                                                var e;
                                                return 0 == (null === (e = null == t ? void 0 : t.data) || void 0 === e ? void 0 : e.result)
                                            })).length === s.length && (a = (new Date).getTime() + "",
                                                localStorage.setItem("AcfunH5playerFilterSyncTime", a)),
                                            l.label = 5;
                                    case 5:
                                        t.filtered = {
                                                filters: i,
                                                enable: r
                                            },
                                            l.label = 6;
                                    case 6:
                                        return [2]
                                }
                                var c, u
                            }))
                        }))
                    }(A)
                } catch (t) {
                    console.error(t)
                }
        },
        st = n(17),
        lt = n.n(st),
        ct = function (t, e) {
            var n = t,
                i = n._player,
                r = {},
                a = function () {
                    try {
                        if (i.kernel._kernel) {
                            var r = i.kernel.isNewProtocol,
                                a = i.kernel._kernel.getBitrates(),
                                o = i.kernel._kernel.getLevels(),
                                s = "自动",
                                l = i.kernel._kernel.getCurrentBitrate(),
                                c = i.kernel._kernel.getCurrentLevel();
                            r && (l = c.qualityType,
                                    n.store("levels", o),
                                    i.emit(t.extend.events.levelsChanged, o)),
                                -1 == i.kernel._kernel._config.bitrateStart && (l = "-1"),
                                c.qualityLabel ? s = c.qualityLabel : e[l] && e[l].label && (s = e[l] && e[l].label),
                                n.store("currentBitrate", i.kernel._kernel.autoLevelEnabled ? "-1" : l),
                                n.store("currentBitrateName", i.kernel._kernel.autoLevelEnabled ? "自动" : s),
                                n.store("levels", o),
                                n.store("bitrates", a),
                                n.store("currentLevel", c),
                                n.store("loadedPercentage", "0%"),
                                n.store("playPercentage", "0%"),
                                n.store("currentTime", m(0)),
                                n.store("duration", i.duration ? m(i.duration) : ""),
                                i.$video.playbackRate = 1 * n._store.playbackRate
                        }
                    } catch (t) {
                        console.log(t)
                    }
                };
            a(),
                n.on("manifestParsed", (function (t) {
                    console.log("manifestParsed", t),
                        a()
                })),
                n.on("danmakuServerConnect", (function (t) {
                    var e = t.vid,
                        a = t.type,
                        o = void 0 === a ? "douga" : a,
                        s = t.id,
                        l = void 0 === s ? 0 : s,
                        c = (t.subChannelId,
                            t.subChannelName,
                            r[i.vid]);
                    c ? n.store("sprites", c) : (n.store("sprites", []),
                        function (t, e) {
                            var n = t.vid,
                                i = t.contentId,
                                r = void 0 === i ? 0 : i,
                                a = function (t) {
                                    var e;
                                    switch (t) {
                                        case "douga":
                                            e = 2;
                                            break;
                                        case "bangumi":
                                            e = 1;
                                            break;
                                        default:
                                            e = 0
                                    }
                                    return e
                                }(t.contentType);
                            P && P.cancel("cancel getSprite"),
                                V({
                                    videoId: n,
                                    resourceId: r,
                                    resourceType: a
                                }, e)
                        }({
                            vid: e,
                            contentId: l,
                            contentType: o
                        }, (function (t) {
                            t && (n.store("sprites", t),
                                r[i.vid] = t)
                        })))
                })),
                i.isLive || n.on("loadedmetadata", (function () {
                    "playing" !== i.status && "play" !== n._store.playStatus && n.store("playStatus", "pause")
                }));
            var o = function () {
                var t = new lt.a(!0);
                n.joysound = t,
                    n.joysound.init(i.$video),
                    n.joysound.setEnabled(!0),
                    n.store("hasInitJoysound", !0),
                    console.log("joysoundInited")
            };
            n.on("initJoySound", (function () {
                    !n.joysound && o()
                })),
                n.on("play", (function () {
                    n.store("playStatus", "play")
                })),
                n.on("pause", (function () {
                    n.store("playStatus", "pause")
                })),
                n.on("ended", (function () {
                    n.store("playStatus", "stopped")
                }));
            var s = window,
                l = !!s.ActiveXObject || "ActiveXObject" in s;
            n.on("ended", (function () {
                    i.loop || l && i.pause()
                })),
                n.on("volumechange", (function () {
                    n.store("showTopBar", !0)
                }));
            var c = function (t) {
                var e;
                n._store.focusProgress || (n.store("currentTime", m(t.target.currentTime)),
                    e = 100 * (t.target.currentTime / t.target.duration).toFixed(4) + "%",
                    n.store("playPercentage", e))
            };
            n.on("seeking", (function (t) {
                    c(t)
                })),
                n.on("timeupdate", (function (t) {
                    c(t),
                        n._store.hasInitJoysound || "playing" != i.status || i.muted || !i.joysoundSwitch || o()
                })),
                n.on("heatmapSeeking", (function (t) {
                    c(t)
                })),
                n.on("durationchange", (function (t) {
                    n.store("duration", m(t.target.duration))
                })),
                n.on("progress", M((function (t) {
                    var e = i.$video,
                        r = e.buffered.length ? e.buffered.end(e.buffered.length - 1) / e.duration : 0;
                    n.store("loadedPercentage", 100 * r.toFixed(4) + "%")
                }), 1e3));
            var u = i.$video.playbackRate || 1;
            n.on("ratechange", (function (t) {
                    console.log("切换倍速为", t.target.playbackRate),
                        n.store("playbackRate", t.target.playbackRate),
                        i.emit("customRateChanged", t.target.playbackRate, u),
                        u = t.target.playbackRate
                })),
                n.on("volumechange", (function (t) {
                    var e = 100 * t.target.volume;
                    n.store("volume", e)
                })),
                n.on("mutedChanged", (function (t) {
                    n.store("muted", t),
                        t || !i.joysoundSwitch || n._store.hasInitJoysound || o(),
                        i.emit("volumechange", {
                            target: i.$video
                        })
                })),
                n.on("loopChanged", (function (t) {
                    n.store("loop", t)
                })),
                n.on("autoPlayChanged", (function (t) {})),
                n.on(n.extend.events.fullScreenChange, (function (t) {
                    n.store("fullScreen", t)
                })),
                n.on(n.extend.events.filmModeChanged, (function (t) {
                    n.store("filmMode", t)
                })),
                n.on(n.extend.events.danmakuCountChanged, (function (t) {
                    n.store("danmakuCount", t)
                })),
                n.on(n.extend.events.onlineChange, (function (t) {
                    (t = Math.max(1, 1 * t)) != n._store.online && n.store("online", t)
                })),
                n.on(n.extend.events.danmakuEnabledChanged, (function (t) {
                    n.store("danmaku_enabled", t)
                })),
                n.on(n.extend.events.danmakuSubtitleProtectedChanged, (function (t) {
                    n.store("subtitle_protected", t)
                })),
                n.on(n.extend.events.danmakuMergedChanged, (function (t) {
                    n.store("danmaku_merged", t)
                })),
                n.on(n.extend.events.danmakuAlphaChanged, (function (t) {
                    n.store("danmaku_alpha", t)
                })),
                n.on(n.extend.events.danmakuAreaChanged, (function (t) {
                    n.store("danmaku_area", t)
                })),
                n.on(n.extend.events.danmakuSpeedScaleChanged, (function (t) {
                    n.store("danmaku_speedScale", t)
                })),
                n.on(n.extend.events.danmakuFontScaleChanged, (function (t) {
                    n.store("danmaku_fontScale", t)
                })),
                n.on(n.extend.events.danmakuAllowOverlapChanged, (function (t) {
                    n.store("danmaku_allowOverlap", t)
                })),
                n.on(n.extend.events.danmakuBlockedChanged, (function (t) {
                    t.top,
                        t.bottom,
                        t.move,
                        t.color,
                        t.role;
                    n.store("danmaku_blocked", t)
                })),
                n.on(n.extend.events.danmakuFilteredChanged, (function (t) {
                    n.store("danmaku_filtered", t)
                })),
                n.on(n.extend.events.danmakuSend, (function () {
                    n.store("coolDown", 3)
                })),
                n.on("danmakuServerConnect", (function (t) {
                    i.danmaku.roles = [];
                    var e = t.vid,
                        r = t.type,
                        a = void 0 === r ? "douga" : r,
                        o = (t.id,
                            t.subChannelId,
                            t.subChannelName,
                            t.ab),
                        s = t.ac;
                    i.isLive || function (t, e, n, i) {
                        return Y(void 0, void 0, void 0, (function () {
                            var r;
                            return _(this, (function (a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, H(t, "video")];
                                    case 1:
                                        if ((r = a.sent()) && r.length)
                                            return [3, 3];
                                        try {
                                            "bangumi" == e ? t = n || location.pathname.split("aa")[1] && location.pathname.split("aa")[1].split("_")[0] : "douga" == e && (t = i || location.pathname.split("ac")[1] && location.pathname.split("ac")[1].split("_")[0])
                                        } catch (t) {
                                            console.log(t)
                                        }
                                        return t ? [4, H(t, e)] : [3, 3];
                                    case 2:
                                        r = a.sent(),
                                            a.label = 3;
                                    case 3:
                                        return [2, r]
                                }
                            }))
                        }))
                    }(e, a, o, s).then((function (t) {
                        i.danmaku.roles = t,
                            n.store("roles", t)
                    }))
                })),
                n.on(n.extend.events.closeLightChange, (function (t) {
                    n.store("closeLight", t)
                })),
                n.on(n.extend.events.developModeChange, (function (t) {
                    n.store("developMode", t)
                })),
                n.on(n.extend.events.soundEffectsToggle, (function (t) {
                    n.store("soundEffects", t)
                })),
                n.on(n.extend.events.joysoundToggle, (function (t) {
                    n.store("joysoundSwitch", t)
                })),
                n.on(n.extend.events.videoFilterToggle, (function (t) {
                    n.store("videoFilter", t)
                })),
                n.on(n.extend.events.soundEffectsPitchChange, (function (t) {
                    n.store("soundEffectPercent", 100 * t + "%")
                })),
                n.on("resetSoundEffectPitch", (function (t) {
                    n.store("soundEffectPercent", "50%")
                })),
                n.on("nextInfoChange", (function (t) {
                    if (t) {
                        var e = t.img,
                            i = void 0 === e ? "" : e,
                            r = t.title,
                            a = void 0 === r ? "" : r,
                            o = t.subTitle,
                            s = void 0 === o ? "" : o;
                        n.store("nextInfoImg", i),
                            n.store("nextInfoTitle", a),
                            n.store("nextInfoSubtitle", s)
                    }
                    n.store("nextInfo", t)
                }))
        },
        ut = n(94),
        pt = n.n(ut);
}]).default;

// ==========================================

class CustomJoysound {
    constructor(node) {
        this.item = new Joysound();
        this.item.init(node);
    }
    enable() {
        this.item.setEnabled(1);
    }
    disable() {
        this.item.setEnabled(0);
    }
}

const LOCAL_NAME = "Ex_isJoysound";
let joysoundList = [];

function enableJoysound() {
    if (joysoundList.length > 0) {
        for (let i = 0; i < joysoundList.length; i++) {
            joysoundList[i].setEnabled(1);
        }
    } else {
        let videoNodes = document.querySelectorAll("video");
        if (videoNodes.length <= 0) {
            alert("【Joysound音效增强】未找到video元素，可能是在iframe或shadowRoot下");
        }
        for (let i = 0; i < videoNodes.length; i++) {
            let item = new Joysound();
            item.init(videoNodes[i]);
            item.setEnabled(1);
            joysoundList.push(item);
        }
    }
    localStorage.setItem(LOCAL_NAME, 1);
}

function disableJoysound() {
    for (let i = 0; i < joysoundList.length; i++) {
        joysoundList[i].setEnabled(0);
    }
    localStorage.setItem(LOCAL_NAME, 0);
}

unsafeWindow.hasInstalledJoysound = true;
unsafeWindow.enableJoysound = enableJoysound;
unsafeWindow.disableJoysound = disableJoysound;

unsafeWindow.getJoysoundByVideoNode = function (node) {
    return new CustomJoysound(node);
};

GM_registerMenuCommand("开启", enableJoysound);
GM_registerMenuCommand("关闭", disableJoysound);

(function () {
    let ret = localStorage.getItem(LOCAL_NAME);
    if (ret == 1) {
        let count = 0;
        let timer = setInterval(() => {
            let videoNodes = document.querySelectorAll("video");
            if (videoNodes.length > 0) {
                clearInterval(timer);
                enableJoysound();
            }
            if (count >= 120) {
                clearInterval(timer);
            }
            count++;
        }, 1000);
    }
})()