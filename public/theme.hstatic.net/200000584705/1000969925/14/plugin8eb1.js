/*! jQuery v3.6.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document)
                        throw new Error(
                            "jQuery requires a window with a document"
                        );
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat
            ? function (e) {
                  return t.flat.call(e);
              }
            : function (e) {
                  return t.concat.apply([], e);
              },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        y = n.hasOwnProperty,
        a = y.toString,
        l = a.call(Object),
        v = {},
        m = function (e) {
            return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
            );
        },
        x = function (e) {
            return null != e && e === e.window;
        },
        E = C.document,
        c = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function b(e, t, n) {
        var r,
            i,
            o = (n = n || E).createElement("script");
        if (((o.text = e), t))
            for (r in c)
                (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                    o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
    }
    function w(e) {
        return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
            ? n[o.call(e)] || "object"
            : typeof e;
    }
    var f = "3.6.1",
        S = function (e, t) {
            return new S.fn.init(e, t);
        };
    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return (
            !m(e) &&
            !x(e) &&
            ("array" === n ||
                0 === t ||
                ("number" == typeof t && 0 < t && t - 1 in e))
        );
    }
    (S.fn = S.prototype =
        {
            jquery: f,
            constructor: S,
            length: 0,
            toArray: function () {
                return s.call(this);
            },
            get: function (e) {
                return null == e
                    ? s.call(this)
                    : e < 0
                    ? this[e + this.length]
                    : this[e];
            },
            pushStack: function (e) {
                var t = S.merge(this.constructor(), e);
                return (t.prevObject = this), t;
            },
            each: function (e) {
                return S.each(this, e);
            },
            map: function (n) {
                return this.pushStack(
                    S.map(this, function (e, t) {
                        return n.call(e, t, e);
                    })
                );
            },
            slice: function () {
                return this.pushStack(s.apply(this, arguments));
            },
            first: function () {
                return this.eq(0);
            },
            last: function () {
                return this.eq(-1);
            },
            even: function () {
                return this.pushStack(
                    S.grep(this, function (e, t) {
                        return (t + 1) % 2;
                    })
                );
            },
            odd: function () {
                return this.pushStack(
                    S.grep(this, function (e, t) {
                        return t % 2;
                    })
                );
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= n && n < t ? [this[n]] : []);
            },
            end: function () {
                return this.prevObject || this.constructor();
            },
            push: u,
            sort: t.sort,
            splice: t.splice,
        }),
        (S.extend = S.fn.extend =
            function () {
                var e,
                    t,
                    n,
                    r,
                    i,
                    o,
                    a = arguments[0] || {},
                    s = 1,
                    u = arguments.length,
                    l = !1;
                for (
                    "boolean" == typeof a &&
                        ((l = a), (a = arguments[s] || {}), s++),
                        "object" == typeof a || m(a) || (a = {}),
                        s === u && ((a = this), s--);
                    s < u;
                    s++
                )
                    if (null != (e = arguments[s]))
                        for (t in e)
                            (r = e[t]),
                                "__proto__" !== t &&
                                    a !== r &&
                                    (l &&
                                    r &&
                                    (S.isPlainObject(r) ||
                                        (i = Array.isArray(r)))
                                        ? ((n = a[t]),
                                          (o =
                                              i && !Array.isArray(n)
                                                  ? []
                                                  : i || S.isPlainObject(n)
                                                  ? n
                                                  : {}),
                                          (i = !1),
                                          (a[t] = S.extend(l, o, r)))
                                        : void 0 !== r && (a[t] = r));
                return a;
            }),
        S.extend({
            expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return (
                    !(!e || "[object Object]" !== o.call(e)) &&
                    (!(t = r(e)) ||
                        ("function" ==
                            typeof (n =
                                y.call(t, "constructor") && t.constructor) &&
                            a.call(n) === l))
                );
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function (e, t, n) {
                b(e, { nonce: t && t.nonce }, n);
            },
            each: function (e, t) {
                var n,
                    r = 0;
                if (p(e)) {
                    for (n = e.length; r < n; r++)
                        if (!1 === t.call(e[r], r, e[r])) break;
                } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            makeArray: function (e, t) {
                var n = t || [];
                return (
                    null != e &&
                        (p(Object(e))
                            ? S.merge(n, "string" == typeof e ? [e] : e)
                            : u.call(n, e)),
                    n
                );
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : i.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                    e[i++] = t[r];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                    !t(e[i], i) !== a && r.push(e[i]);
                return r;
            },
            map: function (e, t, n) {
                var r,
                    i,
                    o = 0,
                    a = [];
                if (p(e))
                    for (r = e.length; o < r; o++)
                        null != (i = t(e[o], o, n)) && a.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return g(a);
            },
            guid: 1,
            support: v,
        }),
        "function" == typeof Symbol &&
            (S.fn[Symbol.iterator] = t[Symbol.iterator]),
        S.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
            ),
            function (e, t) {
                n["[object " + t + "]"] = t.toLowerCase();
            }
        );
    var d = (function (n) {
        var e,
            d,
            b,
            o,
            i,
            h,
            f,
            g,
            w,
            u,
            l,
            T,
            C,
            a,
            E,
            y,
            s,
            c,
            v,
            S = "sizzle" + 1 * new Date(),
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            j = function (e, t) {
                return e === t && (l = !0), 0;
            },
            D = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1;
            },
            R =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I =
                "(?:\\\\[\\da-fA-F]{1,6}" +
                M +
                "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W =
                "\\[" +
                M +
                "*(" +
                I +
                ")(?:" +
                M +
                "*([*^$|!~]?=)" +
                M +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                I +
                "))|)" +
                M +
                "*\\]",
            F =
                ":(" +
                I +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                W +
                ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp(
                "^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$",
                "g"
            ),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                        M +
                        "*(even|odd|(([+-]|)(\\d*)n|)" +
                        M +
                        "*(?:([+-]|)" +
                        M +
                        "*(\\d+)|))" +
                        M +
                        "*\\)|)",
                    "i"
                ),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp(
                    "^" +
                        M +
                        "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                        M +
                        "*((?:-\\d)?\\d*)" +
                        M +
                        "*\\)|)(?=[^-]|$)",
                    "i"
                ),
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp(
                "\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])",
                "g"
            ),
            ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                    t ||
                    (n < 0
                        ? String.fromCharCode(n + 65536)
                        : String.fromCharCode(
                              (n >> 10) | 55296,
                              (1023 & n) | 56320
                          ))
                );
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
                return t
                    ? "\0" === e
                        ? "\ufffd"
                        : e.slice(0, -1) +
                          "\\" +
                          e.charCodeAt(e.length - 1).toString(16) +
                          " "
                    : "\\" + e;
            },
            oe = function () {
                T();
            },
            ae = be(
                function (e) {
                    return (
                        !0 === e.disabled &&
                        "fieldset" === e.nodeName.toLowerCase()
                    );
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            H.apply((t = O.call(p.childNodes)), p.childNodes),
                t[p.childNodes.length].nodeType;
        } catch (e) {
            H = {
                apply: t.length
                    ? function (e, t) {
                          L.apply(e, O.call(t));
                      }
                    : function (e, t) {
                          var n = e.length,
                              r = 0;
                          while ((e[n++] = t[r++]));
                          e.length = n - 1;
                      },
            };
        }
        function se(t, e, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (
                ((n = n || []),
                "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
            )
                return n;
            if (!r && (T(e), (e = e || C), E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if ((i = u[1])) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n;
                        } else if (
                            f &&
                            (a = f.getElementById(i)) &&
                            v(e, a) &&
                            a.id === i
                        )
                            return n.push(a), n;
                    } else {
                        if (u[2])
                            return H.apply(n, e.getElementsByTagName(t)), n;
                        if (
                            (i = u[3]) &&
                            d.getElementsByClassName &&
                            e.getElementsByClassName
                        )
                            return H.apply(n, e.getElementsByClassName(i)), n;
                    }
                if (
                    d.qsa &&
                    !N[t + " "] &&
                    (!y || !y.test(t)) &&
                    (1 !== p || "object" !== e.nodeName.toLowerCase())
                ) {
                    if (
                        ((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))
                    ) {
                        ((f = (ee.test(t) && ve(e.parentNode)) || e) === e &&
                            d.scope) ||
                            ((s = e.getAttribute("id"))
                                ? (s = s.replace(re, ie))
                                : e.setAttribute("id", (s = S))),
                            (o = (l = h(t)).length);
                        while (o--)
                            l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",");
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n;
                    } catch (e) {
                        N(t, !0);
                    } finally {
                        s === S && e.removeAttribute("id");
                    }
                }
            }
            return g(t.replace(B, "$1"), e, n, r);
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return (
                    r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                    (e[t + " "] = n)
                );
            };
        }
        function le(e) {
            return (e[S] = !0), e;
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t;
        }
        function pe(e, t) {
            var n = t && e,
                r =
                    n &&
                    1 === e.nodeType &&
                    1 === t.nodeType &&
                    e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while ((n = n.nextSibling)) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function de(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function he(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n;
            };
        }
        function ge(t) {
            return function (e) {
                return "form" in e
                    ? e.parentNode && !1 === e.disabled
                        ? "label" in e
                            ? "label" in e.parentNode
                                ? e.parentNode.disabled === t
                                : e.disabled === t
                            : e.isDisabled === t ||
                              (e.isDisabled !== !t && ae(e) === t)
                        : e.disabled === t
                    : "label" in e && e.disabled === t;
            };
        }
        function ye(a) {
            return le(function (o) {
                return (
                    (o = +o),
                    le(function (e, t) {
                        var n,
                            r = a([], e.length, o),
                            i = r.length;
                        while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
                    })
                );
            });
        }
        function ve(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        for (e in ((d = se.support = {}),
        (i = se.isXML =
            function (e) {
                var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || (n && n.nodeName) || "HTML");
            }),
        (T = se.setDocument =
            function (e) {
                var t,
                    n,
                    r = e ? e.ownerDocument || e : p;
                return (
                    r != C &&
                        9 === r.nodeType &&
                        r.documentElement &&
                        ((a = (C = r).documentElement),
                        (E = !i(C)),
                        p != C &&
                            (n = C.defaultView) &&
                            n.top !== n &&
                            (n.addEventListener
                                ? n.addEventListener("unload", oe, !1)
                                : n.attachEvent &&
                                  n.attachEvent("onunload", oe)),
                        (d.scope = ce(function (e) {
                            return (
                                a
                                    .appendChild(e)
                                    .appendChild(C.createElement("div")),
                                "undefined" != typeof e.querySelectorAll &&
                                    !e.querySelectorAll(":scope fieldset div")
                                        .length
                            );
                        })),
                        (d.attributes = ce(function (e) {
                            return (
                                (e.className = "i"),
                                !e.getAttribute("className")
                            );
                        })),
                        (d.getElementsByTagName = ce(function (e) {
                            return (
                                e.appendChild(C.createComment("")),
                                !e.getElementsByTagName("*").length
                            );
                        })),
                        (d.getElementsByClassName = K.test(
                            C.getElementsByClassName
                        )),
                        (d.getById = ce(function (e) {
                            return (
                                (a.appendChild(e).id = S),
                                !C.getElementsByName ||
                                    !C.getElementsByName(S).length
                            );
                        })),
                        d.getById
                            ? ((b.filter.ID = function (e) {
                                  var t = e.replace(te, ne);
                                  return function (e) {
                                      return e.getAttribute("id") === t;
                                  };
                              }),
                              (b.find.ID = function (e, t) {
                                  if (
                                      "undefined" != typeof t.getElementById &&
                                      E
                                  ) {
                                      var n = t.getElementById(e);
                                      return n ? [n] : [];
                                  }
                              }))
                            : ((b.filter.ID = function (e) {
                                  var n = e.replace(te, ne);
                                  return function (e) {
                                      var t =
                                          "undefined" !=
                                              typeof e.getAttributeNode &&
                                          e.getAttributeNode("id");
                                      return t && t.value === n;
                                  };
                              }),
                              (b.find.ID = function (e, t) {
                                  if (
                                      "undefined" != typeof t.getElementById &&
                                      E
                                  ) {
                                      var n,
                                          r,
                                          i,
                                          o = t.getElementById(e);
                                      if (o) {
                                          if (
                                              (n = o.getAttributeNode("id")) &&
                                              n.value === e
                                          )
                                              return [o];
                                          (i = t.getElementsByName(e)), (r = 0);
                                          while ((o = i[r++]))
                                              if (
                                                  (n =
                                                      o.getAttributeNode(
                                                          "id"
                                                      )) &&
                                                  n.value === e
                                              )
                                                  return [o];
                                      }
                                      return [];
                                  }
                              })),
                        (b.find.TAG = d.getElementsByTagName
                            ? function (e, t) {
                                  return "undefined" !=
                                      typeof t.getElementsByTagName
                                      ? t.getElementsByTagName(e)
                                      : d.qsa
                                      ? t.querySelectorAll(e)
                                      : void 0;
                              }
                            : function (e, t) {
                                  var n,
                                      r = [],
                                      i = 0,
                                      o = t.getElementsByTagName(e);
                                  if ("*" === e) {
                                      while ((n = o[i++]))
                                          1 === n.nodeType && r.push(n);
                                      return r;
                                  }
                                  return o;
                              }),
                        (b.find.CLASS =
                            d.getElementsByClassName &&
                            function (e, t) {
                                if (
                                    "undefined" !=
                                        typeof t.getElementsByClassName &&
                                    E
                                )
                                    return t.getElementsByClassName(e);
                            }),
                        (s = []),
                        (y = []),
                        (d.qsa = K.test(C.querySelectorAll)) &&
                            (ce(function (e) {
                                var t;
                                (a.appendChild(e).innerHTML =
                                    "<a id='" +
                                    S +
                                    "'></a><select id='" +
                                    S +
                                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                    e.querySelectorAll("[msallowcapture^='']")
                                        .length &&
                                        y.push("[*^$]=" + M + "*(?:''|\"\")"),
                                    e.querySelectorAll("[selected]").length ||
                                        y.push(
                                            "\\[" + M + "*(?:value|" + R + ")"
                                        ),
                                    e.querySelectorAll("[id~=" + S + "-]")
                                        .length || y.push("~="),
                                    (t = C.createElement("input")).setAttribute(
                                        "name",
                                        ""
                                    ),
                                    e.appendChild(t),
                                    e.querySelectorAll("[name='']").length ||
                                        y.push(
                                            "\\[" +
                                                M +
                                                "*name" +
                                                M +
                                                "*=" +
                                                M +
                                                "*(?:''|\"\")"
                                        ),
                                    e.querySelectorAll(":checked").length ||
                                        y.push(":checked"),
                                    e.querySelectorAll("a#" + S + "+*")
                                        .length || y.push(".#.+[+~]"),
                                    e.querySelectorAll("\\\f"),
                                    y.push("[\\r\\n\\f]");
                            }),
                            ce(function (e) {
                                e.innerHTML =
                                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                var t = C.createElement("input");
                                t.setAttribute("type", "hidden"),
                                    e.appendChild(t).setAttribute("name", "D"),
                                    e.querySelectorAll("[name=d]").length &&
                                        y.push("name" + M + "*[*^$|!~]?="),
                                    2 !==
                                        e.querySelectorAll(":enabled").length &&
                                        y.push(":enabled", ":disabled"),
                                    (a.appendChild(e).disabled = !0),
                                    2 !==
                                        e.querySelectorAll(":disabled")
                                            .length &&
                                        y.push(":enabled", ":disabled"),
                                    e.querySelectorAll("*,:x"),
                                    y.push(",.*:");
                            })),
                        (d.matchesSelector = K.test(
                            (c =
                                a.matches ||
                                a.webkitMatchesSelector ||
                                a.mozMatchesSelector ||
                                a.oMatchesSelector ||
                                a.msMatchesSelector)
                        )) &&
                            ce(function (e) {
                                (d.disconnectedMatch = c.call(e, "*")),
                                    c.call(e, "[s!='']:x"),
                                    s.push("!=", F);
                            }),
                        (y = y.length && new RegExp(y.join("|"))),
                        (s = s.length && new RegExp(s.join("|"))),
                        (t = K.test(a.compareDocumentPosition)),
                        (v =
                            t || K.test(a.contains)
                                ? function (e, t) {
                                      var n =
                                              9 === e.nodeType
                                                  ? e.documentElement
                                                  : e,
                                          r = t && t.parentNode;
                                      return (
                                          e === r ||
                                          !(
                                              !r ||
                                              1 !== r.nodeType ||
                                              !(n.contains
                                                  ? n.contains(r)
                                                  : e.compareDocumentPosition &&
                                                    16 &
                                                        e.compareDocumentPosition(
                                                            r
                                                        ))
                                          )
                                      );
                                  }
                                : function (e, t) {
                                      if (t)
                                          while ((t = t.parentNode))
                                              if (t === e) return !0;
                                      return !1;
                                  }),
                        (j = t
                            ? function (e, t) {
                                  if (e === t) return (l = !0), 0;
                                  var n =
                                      !e.compareDocumentPosition -
                                      !t.compareDocumentPosition;
                                  return (
                                      n ||
                                      (1 &
                                          (n =
                                              (e.ownerDocument || e) ==
                                              (t.ownerDocument || t)
                                                  ? e.compareDocumentPosition(t)
                                                  : 1) ||
                                      (!d.sortDetached &&
                                          t.compareDocumentPosition(e) === n)
                                          ? e == C ||
                                            (e.ownerDocument == p && v(p, e))
                                              ? -1
                                              : t == C ||
                                                (t.ownerDocument == p &&
                                                    v(p, t))
                                              ? 1
                                              : u
                                              ? P(u, e) - P(u, t)
                                              : 0
                                          : 4 & n
                                          ? -1
                                          : 1)
                                  );
                              }
                            : function (e, t) {
                                  if (e === t) return (l = !0), 0;
                                  var n,
                                      r = 0,
                                      i = e.parentNode,
                                      o = t.parentNode,
                                      a = [e],
                                      s = [t];
                                  if (!i || !o)
                                      return e == C
                                          ? -1
                                          : t == C
                                          ? 1
                                          : i
                                          ? -1
                                          : o
                                          ? 1
                                          : u
                                          ? P(u, e) - P(u, t)
                                          : 0;
                                  if (i === o) return pe(e, t);
                                  n = e;
                                  while ((n = n.parentNode)) a.unshift(n);
                                  n = t;
                                  while ((n = n.parentNode)) s.unshift(n);
                                  while (a[r] === s[r]) r++;
                                  return r
                                      ? pe(a[r], s[r])
                                      : a[r] == p
                                      ? -1
                                      : s[r] == p
                                      ? 1
                                      : 0;
                              })),
                    C
                );
            }),
        (se.matches = function (e, t) {
            return se(e, null, null, t);
        }),
        (se.matchesSelector = function (e, t) {
            if (
                (T(e),
                d.matchesSelector &&
                    E &&
                    !N[t + " "] &&
                    (!s || !s.test(t)) &&
                    (!y || !y.test(t)))
            )
                try {
                    var n = c.call(e, t);
                    if (
                        n ||
                        d.disconnectedMatch ||
                        (e.document && 11 !== e.document.nodeType)
                    )
                        return n;
                } catch (e) {
                    N(t, !0);
                }
            return 0 < se(t, C, null, [e]).length;
        }),
        (se.contains = function (e, t) {
            return (e.ownerDocument || e) != C && T(e), v(e, t);
        }),
        (se.attr = function (e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()],
                r =
                    n && D.call(b.attrHandle, t.toLowerCase())
                        ? n(e, t, !E)
                        : void 0;
            return void 0 !== r
                ? r
                : d.attributes || !E
                ? e.getAttribute(t)
                : (r = e.getAttributeNode(t)) && r.specified
                ? r.value
                : null;
        }),
        (se.escape = function (e) {
            return (e + "").replace(re, ie);
        }),
        (se.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (se.uniqueSort = function (e) {
            var t,
                n = [],
                r = 0,
                i = 0;
            if (
                ((l = !d.detectDuplicates),
                (u = !d.sortStable && e.slice(0)),
                e.sort(j),
                l)
            ) {
                while ((t = e[i++])) t === e[i] && (r = n.push(i));
                while (r--) e.splice(n[r], 1);
            }
            return (u = null), e;
        }),
        (o = se.getText =
            function (e) {
                var t,
                    n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                    } else if (3 === i || 4 === i) return e.nodeValue;
                } else while ((t = e[r++])) n += o(t);
                return n;
            }),
        ((b = se.selectors =
            {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": { dir: "parentNode", first: !0 },
                    " ": { dir: "parentNode" },
                    "+": { dir: "previousSibling", first: !0 },
                    "~": { dir: "previousSibling" },
                },
                preFilter: {
                    ATTR: function (e) {
                        return (
                            (e[1] = e[1].replace(te, ne)),
                            (e[3] = (e[3] || e[4] || e[5] || "").replace(
                                te,
                                ne
                            )),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                        );
                    },
                    CHILD: function (e) {
                        return (
                            (e[1] = e[1].toLowerCase()),
                            "nth" === e[1].slice(0, 3)
                                ? (e[3] || se.error(e[0]),
                                  (e[4] = +(e[4]
                                      ? e[5] + (e[6] || 1)
                                      : 2 *
                                        ("even" === e[3] || "odd" === e[3]))),
                                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                                : e[3] && se.error(e[0]),
                            e
                        );
                    },
                    PSEUDO: function (e) {
                        var t,
                            n = !e[6] && e[2];
                        return G.CHILD.test(e[0])
                            ? null
                            : (e[3]
                                  ? (e[2] = e[4] || e[5] || "")
                                  : n &&
                                    X.test(n) &&
                                    (t = h(n, !0)) &&
                                    (t =
                                        n.indexOf(")", n.length - t) -
                                        n.length) &&
                                    ((e[0] = e[0].slice(0, t)),
                                    (e[2] = n.slice(0, t))),
                              e.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e
                            ? function () {
                                  return !0;
                              }
                            : function (e) {
                                  return (
                                      e.nodeName &&
                                      e.nodeName.toLowerCase() === t
                                  );
                              };
                    },
                    CLASS: function (e) {
                        var t = m[e + " "];
                        return (
                            t ||
                            ((t = new RegExp(
                                "(^|" + M + ")" + e + "(" + M + "|$)"
                            )) &&
                                m(e, function (e) {
                                    return t.test(
                                        ("string" == typeof e.className &&
                                            e.className) ||
                                            ("undefined" !=
                                                typeof e.getAttribute &&
                                                e.getAttribute("class")) ||
                                            ""
                                    );
                                }))
                        );
                    },
                    ATTR: function (n, r, i) {
                        return function (e) {
                            var t = se.attr(e, n);
                            return null == t
                                ? "!=" === r
                                : !r ||
                                      ((t += ""),
                                      "=" === r
                                          ? t === i
                                          : "!=" === r
                                          ? t !== i
                                          : "^=" === r
                                          ? i && 0 === t.indexOf(i)
                                          : "*=" === r
                                          ? i && -1 < t.indexOf(i)
                                          : "$=" === r
                                          ? i && t.slice(-i.length) === i
                                          : "~=" === r
                                          ? -1 <
                                            (
                                                " " +
                                                t.replace($, " ") +
                                                " "
                                            ).indexOf(i)
                                          : "|=" === r &&
                                            (t === i ||
                                                t.slice(0, i.length + 1) ===
                                                    i + "-"));
                        };
                    },
                    CHILD: function (h, e, t, g, y) {
                        var v = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === y
                            ? function (e) {
                                  return !!e.parentNode;
                              }
                            : function (e, t, n) {
                                  var r,
                                      i,
                                      o,
                                      a,
                                      s,
                                      u,
                                      l =
                                          v !== m
                                              ? "nextSibling"
                                              : "previousSibling",
                                      c = e.parentNode,
                                      f = x && e.nodeName.toLowerCase(),
                                      p = !n && !x,
                                      d = !1;
                                  if (c) {
                                      if (v) {
                                          while (l) {
                                              a = e;
                                              while ((a = a[l]))
                                                  if (
                                                      x
                                                          ? a.nodeName.toLowerCase() ===
                                                            f
                                                          : 1 === a.nodeType
                                                  )
                                                      return !1;
                                              u = l =
                                                  "only" === h &&
                                                  !u &&
                                                  "nextSibling";
                                          }
                                          return !0;
                                      }
                                      if (
                                          ((u = [
                                              m ? c.firstChild : c.lastChild,
                                          ]),
                                          m && p)
                                      ) {
                                          (d =
                                              (s =
                                                  (r =
                                                      (i =
                                                          (o =
                                                              (a = c)[S] ||
                                                              (a[S] = {}))[
                                                              a.uniqueID
                                                          ] ||
                                                          (o[a.uniqueID] = {}))[
                                                          h
                                                      ] || [])[0] === k &&
                                                  r[1]) && r[2]),
                                              (a = s && c.childNodes[s]);
                                          while (
                                              (a =
                                                  (++s && a && a[l]) ||
                                                  (d = s = 0) ||
                                                  u.pop())
                                          )
                                              if (
                                                  1 === a.nodeType &&
                                                  ++d &&
                                                  a === e
                                              ) {
                                                  i[h] = [k, s, d];
                                                  break;
                                              }
                                      } else if (
                                          (p &&
                                              (d = s =
                                                  (r =
                                                      (i =
                                                          (o =
                                                              (a = e)[S] ||
                                                              (a[S] = {}))[
                                                              a.uniqueID
                                                          ] ||
                                                          (o[a.uniqueID] = {}))[
                                                          h
                                                      ] || [])[0] === k &&
                                                  r[1]),
                                          !1 === d)
                                      )
                                          while (
                                              (a =
                                                  (++s && a && a[l]) ||
                                                  (d = s = 0) ||
                                                  u.pop())
                                          )
                                              if (
                                                  (x
                                                      ? a.nodeName.toLowerCase() ===
                                                        f
                                                      : 1 === a.nodeType) &&
                                                  ++d &&
                                                  (p &&
                                                      ((i =
                                                          (o =
                                                              a[S] ||
                                                              (a[S] = {}))[
                                                              a.uniqueID
                                                          ] ||
                                                          (o[a.uniqueID] = {}))[
                                                          h
                                                      ] = [k, d]),
                                                  a === e)
                                              )
                                                  break;
                                      return (
                                          (d -= y) === g ||
                                          (d % g == 0 && 0 <= d / g)
                                      );
                                  }
                              };
                    },
                    PSEUDO: function (e, o) {
                        var t,
                            a =
                                b.pseudos[e] ||
                                b.setFilters[e.toLowerCase()] ||
                                se.error("unsupported pseudo: " + e);
                        return a[S]
                            ? a(o)
                            : 1 < a.length
                            ? ((t = [e, e, "", o]),
                              b.setFilters.hasOwnProperty(e.toLowerCase())
                                  ? le(function (e, t) {
                                        var n,
                                            r = a(e, o),
                                            i = r.length;
                                        while (i--)
                                            e[(n = P(e, r[i]))] = !(t[n] =
                                                r[i]);
                                    })
                                  : function (e) {
                                        return a(e, 0, t);
                                    })
                            : a;
                    },
                },
                pseudos: {
                    not: le(function (e) {
                        var r = [],
                            i = [],
                            s = f(e.replace(B, "$1"));
                        return s[S]
                            ? le(function (e, t, n, r) {
                                  var i,
                                      o = s(e, null, r, []),
                                      a = e.length;
                                  while (a--)
                                      (i = o[a]) && (e[a] = !(t[a] = i));
                              })
                            : function (e, t, n) {
                                  return (
                                      (r[0] = e),
                                      s(r, null, n, i),
                                      (r[0] = null),
                                      !i.pop()
                                  );
                              };
                    }),
                    has: le(function (t) {
                        return function (e) {
                            return 0 < se(t, e).length;
                        };
                    }),
                    contains: le(function (t) {
                        return (
                            (t = t.replace(te, ne)),
                            function (e) {
                                return -1 < (e.textContent || o(e)).indexOf(t);
                            }
                        );
                    }),
                    lang: le(function (n) {
                        return (
                            V.test(n || "") ||
                                se.error("unsupported lang: " + n),
                            (n = n.replace(te, ne).toLowerCase()),
                            function (e) {
                                var t;
                                do {
                                    if (
                                        (t = E
                                            ? e.lang
                                            : e.getAttribute("xml:lang") ||
                                              e.getAttribute("lang"))
                                    )
                                        return (
                                            (t = t.toLowerCase()) === n ||
                                            0 === t.indexOf(n + "-")
                                        );
                                } while (
                                    (e = e.parentNode) &&
                                    1 === e.nodeType
                                );
                                return !1;
                            }
                        );
                    }),
                    target: function (e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id;
                    },
                    root: function (e) {
                        return e === a;
                    },
                    focus: function (e) {
                        return (
                            e === C.activeElement &&
                            (!C.hasFocus || C.hasFocus()) &&
                            !!(e.type || e.href || ~e.tabIndex)
                        );
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (
                            ("input" === t && !!e.checked) ||
                            ("option" === t && !!e.selected)
                        );
                    },
                    selected: function (e) {
                        return (
                            e.parentNode && e.parentNode.selectedIndex,
                            !0 === e.selected
                        );
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (e) {
                        return !b.pseudos.empty(e);
                    },
                    header: function (e) {
                        return J.test(e.nodeName);
                    },
                    input: function (e) {
                        return Q.test(e.nodeName);
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (
                            ("input" === t && "button" === e.type) ||
                            "button" === t
                        );
                    },
                    text: function (e) {
                        var t;
                        return (
                            "input" === e.nodeName.toLowerCase() &&
                            "text" === e.type &&
                            (null == (t = e.getAttribute("type")) ||
                                "text" === t.toLowerCase())
                        );
                    },
                    first: ye(function () {
                        return [0];
                    }),
                    last: ye(function (e, t) {
                        return [t - 1];
                    }),
                    eq: ye(function (e, t, n) {
                        return [n < 0 ? n + t : n];
                    }),
                    even: ye(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    odd: ye(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    lt: ye(function (e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                            e.push(r);
                        return e;
                    }),
                    gt: ye(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                        return e;
                    }),
                },
            }).pseudos.nth = b.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            b.pseudos[e] = de(e);
        for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first
                ? function (e, t, n) {
                      while ((e = e[u]))
                          if (1 === e.nodeType || f) return s(e, t, n);
                      return !1;
                  }
                : function (e, t, n) {
                      var r,
                          i,
                          o,
                          a = [k, p];
                      if (n) {
                          while ((e = e[u]))
                              if ((1 === e.nodeType || f) && s(e, t, n))
                                  return !0;
                      } else
                          while ((e = e[u]))
                              if (1 === e.nodeType || f)
                                  if (
                                      ((i =
                                          (o = e[S] || (e[S] = {}))[
                                              e.uniqueID
                                          ] || (o[e.uniqueID] = {})),
                                      l && l === e.nodeName.toLowerCase())
                                  )
                                      e = e[u] || e;
                                  else {
                                      if (
                                          (r = i[c]) &&
                                          r[0] === k &&
                                          r[1] === p
                                      )
                                          return (a[2] = r[2]);
                                      if (((i[c] = a)[2] = s(e, t, n)))
                                          return !0;
                                  }
                      return !1;
                  };
        }
        function we(i) {
            return 1 < i.length
                ? function (e, t, n) {
                      var r = i.length;
                      while (r--) if (!i[r](e, t, n)) return !1;
                      return !0;
                  }
                : i[0];
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) &&
                    ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
            return a;
        }
        function Ce(d, h, g, y, v, e) {
            return (
                y && !y[S] && (y = Ce(y)),
                v && !v[S] && (v = Ce(v, e)),
                le(function (e, t, n, r) {
                    var i,
                        o,
                        a,
                        s = [],
                        u = [],
                        l = t.length,
                        c =
                            e ||
                            (function (e, t, n) {
                                for (var r = 0, i = t.length; r < i; r++)
                                    se(e, t[r], n);
                                return n;
                            })(h || "*", n.nodeType ? [n] : n, []),
                        f = !d || (!e && h) ? c : Te(c, s, d, n, r),
                        p = g ? (v || (e ? d : l || y) ? [] : t) : f;
                    if ((g && g(f, p, n, r), y)) {
                        (i = Te(p, u)), y(i, [], n, r), (o = i.length);
                        while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                    }
                    if (e) {
                        if (v || d) {
                            if (v) {
                                (i = []), (o = p.length);
                                while (o--) (a = p[o]) && i.push((f[o] = a));
                                v(null, (p = []), i, r);
                            }
                            o = p.length;
                            while (o--)
                                (a = p[o]) &&
                                    -1 < (i = v ? P(e, a) : s[o]) &&
                                    (e[i] = !(t[i] = a));
                        }
                    } else (p = Te(p === t ? p.splice(l, p.length) : p)), v ? v(null, t, p, r) : H.apply(t, p);
                })
            );
        }
        function Ee(e) {
            for (
                var i,
                    t,
                    n,
                    r = e.length,
                    o = b.relative[e[0].type],
                    a = o || b.relative[" "],
                    s = o ? 1 : 0,
                    u = be(
                        function (e) {
                            return e === i;
                        },
                        a,
                        !0
                    ),
                    l = be(
                        function (e) {
                            return -1 < P(i, e);
                        },
                        a,
                        !0
                    ),
                    c = [
                        function (e, t, n) {
                            var r =
                                (!o && (n || t !== w)) ||
                                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                            return (i = null), r;
                        },
                    ];
                s < r;
                s++
            )
                if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
                else {
                    if (
                        (t = b.filter[e[s].type].apply(null, e[s].matches))[S]
                    ) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(
                            1 < s && we(c),
                            1 < s &&
                                xe(
                                    e
                                        .slice(0, s - 1)
                                        .concat({
                                            value:
                                                " " === e[s - 2].type
                                                    ? "*"
                                                    : "",
                                        })
                                ).replace(B, "$1"),
                            t,
                            s < n && Ee(e.slice(s, n)),
                            n < r && Ee((e = e.slice(n))),
                            n < r && xe(e)
                        );
                    }
                    c.push(t);
                }
            return we(c);
        }
        return (
            (me.prototype = b.filters = b.pseudos),
            (b.setFilters = new me()),
            (h = se.tokenize =
                function (e, t) {
                    var n,
                        r,
                        i,
                        o,
                        a,
                        s,
                        u,
                        l = x[e + " "];
                    if (l) return t ? 0 : l.slice(0);
                    (a = e), (s = []), (u = b.preFilter);
                    while (a) {
                        for (o in ((n && !(r = _.exec(a))) ||
                            (r && (a = a.slice(r[0].length) || a),
                            s.push((i = []))),
                        (n = !1),
                        (r = z.exec(a)) &&
                            ((n = r.shift()),
                            i.push({ value: n, type: r[0].replace(B, " ") }),
                            (a = a.slice(n.length))),
                        b.filter))
                            !(r = G[o].exec(a)) ||
                                (u[o] && !(r = u[o](r))) ||
                                ((n = r.shift()),
                                i.push({ value: n, type: o, matches: r }),
                                (a = a.slice(n.length)));
                        if (!n) break;
                    }
                    return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
                }),
            (f = se.compile =
                function (e, t) {
                    var n,
                        y,
                        v,
                        m,
                        x,
                        r,
                        i = [],
                        o = [],
                        a = A[e + " "];
                    if (!a) {
                        t || (t = h(e)), (n = t.length);
                        while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                        (a = A(
                            e,
                            ((y = o),
                            (m = 0 < (v = i).length),
                            (x = 0 < y.length),
                            (r = function (e, t, n, r, i) {
                                var o,
                                    a,
                                    s,
                                    u = 0,
                                    l = "0",
                                    c = e && [],
                                    f = [],
                                    p = w,
                                    d = e || (x && b.find.TAG("*", i)),
                                    h = (k +=
                                        null == p ? 1 : Math.random() || 0.1),
                                    g = d.length;
                                for (
                                    i && (w = t == C || t || i);
                                    l !== g && null != (o = d[l]);
                                    l++
                                ) {
                                    if (x && o) {
                                        (a = 0),
                                            t ||
                                                o.ownerDocument == C ||
                                                (T(o), (n = !E));
                                        while ((s = y[a++]))
                                            if (s(o, t || C, n)) {
                                                r.push(o);
                                                break;
                                            }
                                        i && (k = h);
                                    }
                                    m && ((o = !s && o) && u--, e && c.push(o));
                                }
                                if (((u += l), m && l !== u)) {
                                    a = 0;
                                    while ((s = v[a++])) s(c, f, t, n);
                                    if (e) {
                                        if (0 < u)
                                            while (l--)
                                                c[l] ||
                                                    f[l] ||
                                                    (f[l] = q.call(r));
                                        f = Te(f);
                                    }
                                    H.apply(r, f),
                                        i &&
                                            !e &&
                                            0 < f.length &&
                                            1 < u + v.length &&
                                            se.uniqueSort(r);
                                }
                                return i && ((k = h), (w = p)), c;
                            }),
                            m ? le(r) : r)
                        )).selector = e;
                    }
                    return a;
                }),
            (g = se.select =
                function (e, t, n, r) {
                    var i,
                        o,
                        a,
                        s,
                        u,
                        l = "function" == typeof e && e,
                        c = !r && h((e = l.selector || e));
                    if (((n = n || []), 1 === c.length)) {
                        if (
                            2 < (o = c[0] = c[0].slice(0)).length &&
                            "ID" === (a = o[0]).type &&
                            9 === t.nodeType &&
                            E &&
                            b.relative[o[1].type]
                        ) {
                            if (
                                !(t = (b.find.ID(
                                    a.matches[0].replace(te, ne),
                                    t
                                ) || [])[0])
                            )
                                return n;
                            l && (t = t.parentNode),
                                (e = e.slice(o.shift().value.length));
                        }
                        i = G.needsContext.test(e) ? 0 : o.length;
                        while (i--) {
                            if (((a = o[i]), b.relative[(s = a.type)])) break;
                            if (
                                (u = b.find[s]) &&
                                (r = u(
                                    a.matches[0].replace(te, ne),
                                    (ee.test(o[0].type) && ve(t.parentNode)) ||
                                        t
                                ))
                            ) {
                                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                                    return H.apply(n, r), n;
                                break;
                            }
                        }
                    }
                    return (
                        (l || f(e, c))(
                            r,
                            t,
                            !E,
                            n,
                            !t || (ee.test(e) && ve(t.parentNode)) || t
                        ),
                        n
                    );
                }),
            (d.sortStable = S.split("").sort(j).join("") === S),
            (d.detectDuplicates = !!l),
            T(),
            (d.sortDetached = ce(function (e) {
                return (
                    1 & e.compareDocumentPosition(C.createElement("fieldset"))
                );
            })),
            ce(function (e) {
                return (
                    (e.innerHTML = "<a href='#'></a>"),
                    "#" === e.firstChild.getAttribute("href")
                );
            }) ||
                fe("type|href|height|width", function (e, t, n) {
                    if (!n)
                        return e.getAttribute(
                            t,
                            "type" === t.toLowerCase() ? 1 : 2
                        );
                }),
            (d.attributes &&
                ce(function (e) {
                    return (
                        (e.innerHTML = "<input/>"),
                        e.firstChild.setAttribute("value", ""),
                        "" === e.firstChild.getAttribute("value")
                    );
                })) ||
                fe("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())
                        return e.defaultValue;
                }),
            ce(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
                fe(R, function (e, t, n) {
                    var r;
                    if (!n)
                        return !0 === e[t]
                            ? t.toLowerCase()
                            : (r = e.getAttributeNode(t)) && r.specified
                            ? r.value
                            : null;
                }),
            se
        );
    })(C);
    (S.find = d),
        (S.expr = d.selectors),
        (S.expr[":"] = S.expr.pseudos),
        (S.uniqueSort = S.unique = d.uniqueSort),
        (S.text = d.getText),
        (S.isXMLDoc = d.isXML),
        (S.contains = d.contains),
        (S.escapeSelector = d.escape);
    var h = function (e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    r.push(e);
                }
            return r;
        },
        T = function (e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        k = S.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, n, r) {
        return m(n)
            ? S.grep(e, function (e, t) {
                  return !!n.call(e, t, e) !== r;
              })
            : n.nodeType
            ? S.grep(e, function (e) {
                  return (e === n) !== r;
              })
            : "string" != typeof n
            ? S.grep(e, function (e) {
                  return -1 < i.call(n, e) !== r;
              })
            : S.filter(n, e, r);
    }
    (S.filter = function (e, t, n) {
        var r = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
                ? S.find.matchesSelector(r, e)
                    ? [r]
                    : []
                : S.find.matches(
                      e,
                      S.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        S.fn.extend({
            find: function (e) {
                var t,
                    n,
                    r = this.length,
                    i = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        S(e).filter(function () {
                            for (t = 0; t < r; t++)
                                if (S.contains(i[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < r; t++)
                    S.find(e, i[t], n);
                return 1 < r ? S.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(j(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(j(this, e || [], !0));
            },
            is: function (e) {
                return !!j(
                    this,
                    "string" == typeof e && k.test(e) ? S(e) : e || [],
                    !1
                ).length;
            },
        });
    var D,
        q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((S.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (((n = n || D), "string" == typeof e)) {
            if (
                !(r =
                    "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
                        ? [null, e, null]
                        : q.exec(e)) ||
                (!r[1] && t)
            )
                return !t || t.jquery
                    ? (t || n).find(e)
                    : this.constructor(t).find(e);
            if (r[1]) {
                if (
                    ((t = t instanceof S ? t[0] : t),
                    S.merge(
                        this,
                        S.parseHTML(
                            r[1],
                            t && t.nodeType ? t.ownerDocument || t : E,
                            !0
                        )
                    ),
                    N.test(r[1]) && S.isPlainObject(t))
                )
                    for (r in t)
                        m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
            }
            return (
                (i = E.getElementById(r[2])) &&
                    ((this[0] = i), (this.length = 1)),
                this
            );
        }
        return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : m(e)
            ? void 0 !== n.ready
                ? n.ready(e)
                : e(S)
            : S.makeArray(e, this);
    }).prototype = S.fn),
        (D = S(E));
    var L = /^(?:parents|prev(?:Until|All))/,
        H = { children: !0, contents: !0, next: !0, prev: !0 };
    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e;
    }
    S.fn.extend({
        has: function (e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (
                            n.nodeType < 11 &&
                            (a
                                ? -1 < a.index(n)
                                : 1 === n.nodeType &&
                                  S.find.matchesSelector(n, e))
                        ) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
        },
        index: function (e) {
            return e
                ? "string" == typeof e
                    ? i.call(S(e), this[0])
                    : i.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
        },
        add: function (e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
        },
        addBack: function (e) {
            return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
            );
        },
    }),
        S.each(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return h(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return h(e, "parentNode", n);
                },
                next: function (e) {
                    return O(e, "nextSibling");
                },
                prev: function (e) {
                    return O(e, "previousSibling");
                },
                nextAll: function (e) {
                    return h(e, "nextSibling");
                },
                prevAll: function (e) {
                    return h(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return h(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return h(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return T((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return T(e.firstChild);
                },
                contents: function (e) {
                    return null != e.contentDocument && r(e.contentDocument)
                        ? e.contentDocument
                        : (A(e, "template") && (e = e.content || e),
                          S.merge([], e.childNodes));
                },
            },
            function (r, i) {
                S.fn[r] = function (e, t) {
                    var n = S.map(this, i, e);
                    return (
                        "Until" !== r.slice(-5) && (t = e),
                        t && "string" == typeof t && (n = S.filter(t, n)),
                        1 < this.length &&
                            (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
                        this.pushStack(n)
                    );
                };
            }
        );
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e;
    }
    function M(e) {
        throw e;
    }
    function I(e, t, n, r) {
        var i;
        try {
            e && m((i = e.promise))
                ? i.call(e).done(t).fail(n)
                : e && m((i = e.then))
                ? i.call(e, t, n)
                : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    (S.Callbacks = function (r) {
        var e, n;
        r =
            "string" == typeof r
                ? ((e = r),
                  (n = {}),
                  S.each(e.match(P) || [], function (e, t) {
                      n[t] = !0;
                  }),
                  n)
                : S.extend({}, r);
        var i,
            t,
            o,
            a,
            s = [],
            u = [],
            l = -1,
            c = function () {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length)
                        !1 === s[l].apply(t[0], t[1]) &&
                            r.stopOnFalse &&
                            ((l = s.length), (t = !1));
                }
                r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
            },
            f = {
                add: function () {
                    return (
                        s &&
                            (t && !i && ((l = s.length - 1), u.push(t)),
                            (function n(e) {
                                S.each(e, function (e, t) {
                                    m(t)
                                        ? (r.unique && f.has(t)) || s.push(t)
                                        : t &&
                                          t.length &&
                                          "string" !== w(t) &&
                                          n(t);
                                });
                            })(arguments),
                            t && !i && c()),
                        this
                    );
                },
                remove: function () {
                    return (
                        S.each(arguments, function (e, t) {
                            var n;
                            while (-1 < (n = S.inArray(t, s, n)))
                                s.splice(n, 1), n <= l && l--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? -1 < S.inArray(e, s) : 0 < s.length;
                },
                empty: function () {
                    return s && (s = []), this;
                },
                disable: function () {
                    return (a = u = []), (s = t = ""), this;
                },
                disabled: function () {
                    return !s;
                },
                lock: function () {
                    return (a = u = []), t || i || (s = t = ""), this;
                },
                locked: function () {
                    return !!a;
                },
                fireWith: function (e, t) {
                    return (
                        a ||
                            ((t = [e, (t = t || []).slice ? t.slice() : t]),
                            u.push(t),
                            i || c()),
                        this
                    );
                },
                fire: function () {
                    return f.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!o;
                },
            };
        return f;
    }),
        S.extend({
            Deferred: function (e) {
                var o = [
                        [
                            "notify",
                            "progress",
                            S.Callbacks("memory"),
                            S.Callbacks("memory"),
                            2,
                        ],
                        [
                            "resolve",
                            "done",
                            S.Callbacks("once memory"),
                            S.Callbacks("once memory"),
                            0,
                            "resolved",
                        ],
                        [
                            "reject",
                            "fail",
                            S.Callbacks("once memory"),
                            S.Callbacks("once memory"),
                            1,
                            "rejected",
                        ],
                    ],
                    i = "pending",
                    a = {
                        state: function () {
                            return i;
                        },
                        always: function () {
                            return s.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return a.then(null, e);
                        },
                        pipe: function () {
                            var i = arguments;
                            return S.Deferred(function (r) {
                                S.each(o, function (e, t) {
                                    var n = m(i[t[4]]) && i[t[4]];
                                    s[t[1]](function () {
                                        var e = n && n.apply(this, arguments);
                                        e && m(e.promise)
                                            ? e
                                                  .promise()
                                                  .progress(r.notify)
                                                  .done(r.resolve)
                                                  .fail(r.reject)
                                            : r[t[0] + "With"](
                                                  this,
                                                  n ? [e] : arguments
                                              );
                                    });
                                }),
                                    (i = null);
                            }).promise();
                        },
                        then: function (t, n, r) {
                            var u = 0;
                            function l(i, o, a, s) {
                                return function () {
                                    var n = this,
                                        r = arguments,
                                        e = function () {
                                            var e, t;
                                            if (!(i < u)) {
                                                if (
                                                    (e = a.apply(n, r)) ===
                                                    o.promise()
                                                )
                                                    throw new TypeError(
                                                        "Thenable self-resolution"
                                                    );
                                                (t =
                                                    e &&
                                                    ("object" == typeof e ||
                                                        "function" ==
                                                            typeof e) &&
                                                    e.then),
                                                    m(t)
                                                        ? s
                                                            ? t.call(
                                                                  e,
                                                                  l(u, o, R, s),
                                                                  l(u, o, M, s)
                                                              )
                                                            : (u++,
                                                              t.call(
                                                                  e,
                                                                  l(u, o, R, s),
                                                                  l(u, o, M, s),
                                                                  l(
                                                                      u,
                                                                      o,
                                                                      R,
                                                                      o.notifyWith
                                                                  )
                                                              ))
                                                        : (a !== R &&
                                                              ((n = void 0),
                                                              (r = [e])),
                                                          (s || o.resolveWith)(
                                                              n,
                                                              r
                                                          ));
                                            }
                                        },
                                        t = s
                                            ? e
                                            : function () {
                                                  try {
                                                      e();
                                                  } catch (e) {
                                                      S.Deferred
                                                          .exceptionHook &&
                                                          S.Deferred.exceptionHook(
                                                              e,
                                                              t.stackTrace
                                                          ),
                                                          u <= i + 1 &&
                                                              (a !== M &&
                                                                  ((n = void 0),
                                                                  (r = [e])),
                                                              o.rejectWith(
                                                                  n,
                                                                  r
                                                              ));
                                                  }
                                              };
                                    i
                                        ? t()
                                        : (S.Deferred.getStackHook &&
                                              (t.stackTrace =
                                                  S.Deferred.getStackHook()),
                                          C.setTimeout(t));
                                };
                            }
                            return S.Deferred(function (e) {
                                o[0][3].add(
                                    l(0, e, m(r) ? r : R, e.notifyWith)
                                ),
                                    o[1][3].add(l(0, e, m(t) ? t : R)),
                                    o[2][3].add(l(0, e, m(n) ? n : M));
                            }).promise();
                        },
                        promise: function (e) {
                            return null != e ? S.extend(e, a) : a;
                        },
                    },
                    s = {};
                return (
                    S.each(o, function (e, t) {
                        var n = t[2],
                            r = t[5];
                        (a[t[1]] = n.add),
                            r &&
                                n.add(
                                    function () {
                                        i = r;
                                    },
                                    o[3 - e][2].disable,
                                    o[3 - e][3].disable,
                                    o[0][2].lock,
                                    o[0][3].lock
                                ),
                            n.add(t[3].fire),
                            (s[t[0]] = function () {
                                return (
                                    s[t[0] + "With"](
                                        this === s ? void 0 : this,
                                        arguments
                                    ),
                                    this
                                );
                            }),
                            (s[t[0] + "With"] = n.fireWith);
                    }),
                    a.promise(s),
                    e && e.call(s, s),
                    s
                );
            },
            when: function (e) {
                var n = arguments.length,
                    t = n,
                    r = Array(t),
                    i = s.call(arguments),
                    o = S.Deferred(),
                    a = function (t) {
                        return function (e) {
                            (r[t] = this),
                                (i[t] =
                                    1 < arguments.length
                                        ? s.call(arguments)
                                        : e),
                                --n || o.resolveWith(r, i);
                        };
                    };
                if (
                    n <= 1 &&
                    (I(e, o.done(a(t)).resolve, o.reject, !n),
                    "pending" === o.state() || m(i[t] && i[t].then))
                )
                    return o.then();
                while (t--) I(i[t], a(t), o.reject);
                return o.promise();
            },
        });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (S.Deferred.exceptionHook = function (e, t) {
        C.console &&
            C.console.warn &&
            e &&
            W.test(e.name) &&
            C.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
            );
    }),
        (S.readyException = function (e) {
            C.setTimeout(function () {
                throw e;
            });
        });
    var F = S.Deferred();
    function $() {
        E.removeEventListener("DOMContentLoaded", $),
            C.removeEventListener("load", $),
            S.ready();
    }
    (S.fn.ready = function (e) {
        return (
            F.then(e)["catch"](function (e) {
                S.readyException(e);
            }),
            this
        );
    }),
        S.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --S.readyWait : S.isReady) ||
                    ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
                    F.resolveWith(E, [S]);
            },
        }),
        (S.ready.then = F.then),
        "complete" === E.readyState ||
        ("loading" !== E.readyState && !E.documentElement.doScroll)
            ? C.setTimeout(S.ready)
            : (E.addEventListener("DOMContentLoaded", $),
              C.addEventListener("load", $));
    var B = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in ((i = !0), n)) B(e, t, s, n[s], !0, o, a);
            else if (
                void 0 !== r &&
                ((i = !0),
                m(r) || (a = !0),
                l &&
                    (a
                        ? (t.call(e, r), (t = null))
                        : ((l = t),
                          (t = function (e, t, n) {
                              return l.call(S(e), n);
                          }))),
                t)
            )
                for (; s < u; s++)
                    t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase();
    }
    function X(e) {
        return e.replace(_, "ms-").replace(z, U);
    }
    var V = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function G() {
        this.expando = S.expando + G.uid++;
    }
    (G.uid = 1),
        (G.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return (
                    t ||
                        ((t = {}),
                        V(e) &&
                            (e.nodeType
                                ? (e[this.expando] = t)
                                : Object.defineProperty(e, this.expando, {
                                      value: t,
                                      configurable: !0,
                                  }))),
                    t
                );
            },
            set: function (e, t, n) {
                var r,
                    i = this.cache(e);
                if ("string" == typeof t) i[X(t)] = n;
                else for (r in t) i[X(r)] = t[r];
                return i;
            },
            get: function (e, t) {
                return void 0 === t
                    ? this.cache(e)
                    : e[this.expando] && e[this.expando][X(t)];
            },
            access: function (e, t, n) {
                return void 0 === t ||
                    (t && "string" == typeof t && void 0 === n)
                    ? this.get(e, t)
                    : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t)
                            ? t.map(X)
                            : (t = X(t)) in r
                            ? [t]
                            : t.match(P) || []).length;
                        while (n--) delete r[t[n]];
                    }
                    (void 0 === t || S.isEmptyObject(r)) &&
                        (e.nodeType
                            ? (e[this.expando] = void 0)
                            : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !S.isEmptyObject(t);
            },
        });
    var Y = new G(),
        Q = new G(),
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;
    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (
                ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(r)))
            ) {
                try {
                    n =
                        "true" === (i = n) ||
                        ("false" !== i &&
                            ("null" === i
                                ? null
                                : i === +i + ""
                                ? +i
                                : J.test(i)
                                ? JSON.parse(i)
                                : i));
                } catch (e) {}
                Q.set(e, t, n);
            } else n = void 0;
        return n;
    }
    S.extend({
        hasData: function (e) {
            return Q.hasData(e) || Y.hasData(e);
        },
        data: function (e, t, n) {
            return Q.access(e, t, n);
        },
        removeData: function (e, t) {
            Q.remove(e, t);
        },
        _data: function (e, t, n) {
            return Y.access(e, t, n);
        },
        _removeData: function (e, t) {
            Y.remove(e, t);
        },
    }),
        S.fn.extend({
            data: function (n, e) {
                var t,
                    r,
                    i,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 === n) {
                    if (
                        this.length &&
                        ((i = Q.get(o)),
                        1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
                    ) {
                        t = a.length;
                        while (t--)
                            a[t] &&
                                0 === (r = a[t].name).indexOf("data-") &&
                                ((r = X(r.slice(5))), Z(o, r, i[r]));
                        Y.set(o, "hasDataAttrs", !0);
                    }
                    return i;
                }
                return "object" == typeof n
                    ? this.each(function () {
                          Q.set(this, n);
                      })
                    : B(
                          this,
                          function (e) {
                              var t;
                              if (o && void 0 === e)
                                  return void 0 !== (t = Q.get(o, n))
                                      ? t
                                      : void 0 !== (t = Z(o, n))
                                      ? t
                                      : void 0;
                              this.each(function () {
                                  Q.set(this, n, e);
                              });
                          },
                          null,
                          e,
                          1 < arguments.length,
                          null,
                          !0
                      );
            },
            removeData: function (e) {
                return this.each(function () {
                    Q.remove(this, e);
                });
            },
        }),
        S.extend({
            queue: function (e, t, n) {
                var r;
                if (e)
                    return (
                        (t = (t || "fx") + "queue"),
                        (r = Y.get(e, t)),
                        n &&
                            (!r || Array.isArray(n)
                                ? (r = Y.access(e, t, S.makeArray(n)))
                                : r.push(n)),
                        r || []
                    );
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = S.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = S._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), r--),
                    i &&
                        ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        i.call(
                            e,
                            function () {
                                S.dequeue(e, t);
                            },
                            o
                        )),
                    !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    Y.get(e, n) ||
                    Y.access(e, n, {
                        empty: S.Callbacks("once memory").add(function () {
                            Y.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        S.fn.extend({
            queue: function (t, n) {
                var e = 2;
                return (
                    "string" != typeof t && ((n = t), (t = "fx"), e--),
                    arguments.length < e
                        ? S.queue(this[0], t)
                        : void 0 === n
                        ? this
                        : this.each(function () {
                              var e = S.queue(this, t, n);
                              S._queueHooks(this, t),
                                  "fx" === t &&
                                      "inprogress" !== e[0] &&
                                      S.dequeue(this, t);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    S.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    r = 1,
                    i = S.Deferred(),
                    o = this,
                    a = this.length,
                    s = function () {
                        --r || i.resolveWith(o, [o]);
                    };
                "string" != typeof e && ((t = e), (e = void 0)),
                    (e = e || "fx");
                while (a--)
                    (n = Y.get(o[a], e + "queueHooks")) &&
                        n.empty &&
                        (r++, n.empty.add(s));
                return s(), i.promise(t);
            },
        });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function (e) {
            return S.contains(e.ownerDocument, e);
        },
        oe = { composed: !0 };
    re.getRootNode &&
        (ie = function (e) {
            return (
                S.contains(e.ownerDocument, e) ||
                e.getRootNode(oe) === e.ownerDocument
            );
        });
    var ae = function (e, t) {
        return (
            "none" === (e = t || e).style.display ||
            ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
        );
    };
    function se(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r
                ? function () {
                      return r.cur();
                  }
                : function () {
                      return S.css(e, t, "");
                  },
            u = s(),
            l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
            c =
                e.nodeType &&
                (S.cssNumber[t] || ("px" !== l && +u)) &&
                te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            (u /= 2), (l = l || c[3]), (c = +u || 1);
            while (a--)
                S.style(e, t, c + l),
                    (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
                    (c /= o);
            (c *= 2), S.style(e, t, c + l), (n = n || []);
        }
        return (
            n &&
                ((c = +c || +u || 0),
                (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = l), (r.start = c), (r.end = i))),
            i
        );
    }
    var ue = {};
    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style &&
                ((n = r.style.display),
                t
                    ? ("none" === n &&
                          ((l[c] = Y.get(r, "display") || null),
                          l[c] || (r.style.display = "")),
                      "" === r.style.display &&
                          ae(r) &&
                          (l[c] =
                              ((u = a = o = void 0),
                              (a = (i = r).ownerDocument),
                              (s = i.nodeName),
                              (u = ue[s]) ||
                                  ((o = a.body.appendChild(a.createElement(s))),
                                  (u = S.css(o, "display")),
                                  o.parentNode.removeChild(o),
                                  "none" === u && (u = "block"),
                                  (ue[s] = u)))))
                    : "none" !== n &&
                      ((l[c] = "none"), Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e;
    }
    S.fn.extend({
        show: function () {
            return le(this, !0);
        },
        hide: function () {
            return le(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      ae(this) ? S(this).show() : S(this).hide();
                  });
        },
    });
    var ce,
        fe,
        pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
        (fe = E.createElement("input")).setAttribute("type", "radio"),
        fe.setAttribute("checked", "checked"),
        fe.setAttribute("name", "t"),
        ce.appendChild(fe),
        (v.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (ce.innerHTML = "<textarea>x</textarea>"),
        (v.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
        (ce.innerHTML = "<option></option>"),
        (v.option = !!ce.lastChild);
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
    };
    function ye(e, t) {
        var n;
        return (
            (n =
                "undefined" != typeof e.getElementsByTagName
                    ? e.getElementsByTagName(t || "*")
                    : "undefined" != typeof e.querySelectorAll
                    ? e.querySelectorAll(t || "*")
                    : []),
            void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
        );
    }
    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
        (ge.th = ge.td),
        v.option ||
            (ge.optgroup = ge.option =
                [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (
            var o,
                a,
                s,
                u,
                l,
                c,
                f = t.createDocumentFragment(),
                p = [],
                d = 0,
                h = e.length;
            d < h;
            d++
        )
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    (a = a || f.appendChild(t.createElement("div"))),
                        (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
                        (u = ge[s] || ge._default),
                        (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
                        (c = u[0]);
                    while (c--) a = a.lastChild;
                    S.merge(p, a.childNodes),
                        ((a = f.firstChild).textContent = "");
                } else p.push(t.createTextNode(o));
        (f.textContent = ""), (d = 0);
        while ((o = p[d++]))
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (
                ((l = ie(o)),
                (a = ye(f.appendChild(o), "script")),
                l && ve(a),
                n)
            ) {
                c = 0;
                while ((o = a[c++])) he.test(o.type || "") && n.push(o);
            }
        return f;
    }
    var be = /^([^.]*)(?:\.(.+)|)/;
    function we() {
        return !0;
    }
    function Te() {
        return !1;
    }
    function Ce(e, t) {
        return (
            (e ===
                (function () {
                    try {
                        return E.activeElement;
                    } catch (e) {}
                })()) ==
            ("focus" === t)
        );
    }
    function Ee(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
                Ee(e, s, n, r, t[s], o);
            return e;
        }
        if (
            (null == r && null == i
                ? ((i = n), (r = n = void 0))
                : null == i &&
                  ("string" == typeof n
                      ? ((i = r), (r = void 0))
                      : ((i = r), (r = n), (n = void 0))),
            !1 === i)
        )
            i = Te;
        else if (!i) return e;
        return (
            1 === o &&
                ((a = i),
                ((i = function (e) {
                    return S().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = S.guid++))),
            e.each(function () {
                S.event.add(this, t, i, r, n);
            })
        );
    }
    function Se(e, i, o) {
        o
            ? (Y.set(e, i, !1),
              S.event.add(e, i, {
                  namespace: !1,
                  handler: function (e) {
                      var t,
                          n,
                          r = Y.get(this, i);
                      if (1 & e.isTrigger && this[i]) {
                          if (r.length)
                              (S.event.special[i] || {}).delegateType &&
                                  e.stopPropagation();
                          else if (
                              ((r = s.call(arguments)),
                              Y.set(this, i, r),
                              (t = o(this, i)),
                              this[i](),
                              r !== (n = Y.get(this, i)) || t
                                  ? Y.set(this, i, !1)
                                  : (n = {}),
                              r !== n)
                          )
                              return (
                                  e.stopImmediatePropagation(),
                                  e.preventDefault(),
                                  n && n.value
                              );
                      } else
                          r.length &&
                              (Y.set(this, i, {
                                  value: S.event.trigger(
                                      S.extend(r[0], S.Event.prototype),
                                      r.slice(1),
                                      this
                                  ),
                              }),
                              e.stopImmediatePropagation());
                  },
              }))
            : void 0 === Y.get(e, i) && S.event.add(e, i, we);
    }
    (S.event = {
        global: {},
        add: function (t, e, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                y = Y.get(t);
            if (V(t)) {
                n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && S.find.matchesSelector(re, i),
                    n.guid || (n.guid = S.guid++),
                    (u = y.events) || (u = y.events = Object.create(null)),
                    (a = y.handle) ||
                        (a = y.handle =
                            function (e) {
                                return "undefined" != typeof S &&
                                    S.event.triggered !== e.type
                                    ? S.event.dispatch.apply(t, arguments)
                                    : void 0;
                            }),
                    (l = (e = (e || "").match(P) || [""]).length);
                while (l--)
                    (d = g = (s = be.exec(e[l]) || [])[1]),
                        (h = (s[2] || "").split(".").sort()),
                        d &&
                            ((f = S.event.special[d] || {}),
                            (d = (i ? f.delegateType : f.bindType) || d),
                            (f = S.event.special[d] || {}),
                            (c = S.extend(
                                {
                                    type: d,
                                    origType: g,
                                    data: r,
                                    handler: n,
                                    guid: n.guid,
                                    selector: i,
                                    needsContext:
                                        i && S.expr.match.needsContext.test(i),
                                    namespace: h.join("."),
                                },
                                o
                            )),
                            (p = u[d]) ||
                                (((p = u[d] = []).delegateCount = 0),
                                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                                    (t.addEventListener &&
                                        t.addEventListener(d, a))),
                            f.add &&
                                (f.add.call(t, c),
                                c.handler.guid || (c.handler.guid = n.guid)),
                            i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                            (S.event.global[d] = !0));
            }
        },
        remove: function (e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                y = Y.hasData(e) && Y.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (
                        ((d = g = (s = be.exec(t[l]) || [])[1]),
                        (h = (s[2] || "").split(".").sort()),
                        d)
                    ) {
                        (f = S.event.special[d] || {}),
                            (p =
                                u[
                                    (d = (r ? f.delegateType : f.bindType) || d)
                                ] || []),
                            (s =
                                s[2] &&
                                new RegExp(
                                    "(^|\\.)" +
                                        h.join("\\.(?:.*\\.|)") +
                                        "(\\.|$)"
                                )),
                            (a = o = p.length);
                        while (o--)
                            (c = p[o]),
                                (!i && g !== c.origType) ||
                                    (n && n.guid !== c.guid) ||
                                    (s && !s.test(c.namespace)) ||
                                    (r &&
                                        r !== c.selector &&
                                        ("**" !== r || !c.selector)) ||
                                    (p.splice(o, 1),
                                    c.selector && p.delegateCount--,
                                    f.remove && f.remove.call(e, c));
                        a &&
                            !p.length &&
                            ((f.teardown &&
                                !1 !== f.teardown.call(e, h, y.handle)) ||
                                S.removeEvent(e, d, y.handle),
                            delete u[d]);
                    } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s = new Array(arguments.length),
                u = S.event.fix(e),
                l =
                    (Y.get(this, "events") || Object.create(null))[u.type] ||
                    [],
                c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (
                ((u.delegateTarget = this),
                !c.preDispatch || !1 !== c.preDispatch.call(this, u))
            ) {
                (a = S.event.handlers.call(this, u, l)), (t = 0);
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    (u.currentTarget = i.elem), (n = 0);
                    while (
                        (o = i.handlers[n++]) &&
                        !u.isImmediatePropagationStopped()
                    )
                        (u.rnamespace &&
                            !1 !== o.namespace &&
                            !u.rnamespace.test(o.namespace)) ||
                            ((u.handleObj = o),
                            (u.data = o.data),
                            void 0 !==
                                (r = (
                                    (S.event.special[o.origType] || {})
                                        .handle || o.handler
                                ).apply(i.elem, s)) &&
                                !1 === (u.result = r) &&
                                (u.preventDefault(), u.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result;
            }
        },
        handlers: function (e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (
                        1 === l.nodeType &&
                        ("click" !== e.type || !0 !== l.disabled)
                    ) {
                        for (o = [], a = {}, n = 0; n < u; n++)
                            void 0 === a[(i = (r = t[n]).selector + " ")] &&
                                (a[i] = r.needsContext
                                    ? -1 < S(i, this).index(l)
                                    : S.find(i, this, null, [l]).length),
                                a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o });
                    }
            return (
                (l = this),
                u < t.length && s.push({ elem: l, handlers: t.slice(u) }),
                s
            );
        },
        addProp: function (t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e)
                    ? function () {
                          if (this.originalEvent) return e(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[t];
                      },
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e,
                    });
                },
            });
        },
        fix: function (e) {
            return e[S.expando] ? e : new S.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return (
                        pe.test(t.type) &&
                            t.click &&
                            A(t, "input") &&
                            Se(t, "click", we),
                        !1
                    );
                },
                trigger: function (e) {
                    var t = this || e;
                    return (
                        pe.test(t.type) &&
                            t.click &&
                            A(t, "input") &&
                            Se(t, "click"),
                        !0
                    );
                },
                _default: function (e) {
                    var t = e.target;
                    return (
                        (pe.test(t.type) &&
                            t.click &&
                            A(t, "input") &&
                            Y.get(t, "click")) ||
                        A(t, "a")
                    );
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result &&
                        e.originalEvent &&
                        (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (S.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (S.Event = function (e, t) {
            if (!(this instanceof S.Event)) return new S.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                      e.defaultPrevented ||
                      (void 0 === e.defaultPrevented && !1 === e.returnValue)
                          ? we
                          : Te),
                  (this.target =
                      e.target && 3 === e.target.nodeType
                          ? e.target.parentNode
                          : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && S.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[S.expando] = !0);
        }),
        (S.Event.prototype = {
            constructor: S.Event,
            isDefaultPrevented: Te,
            isPropagationStopped: Te,
            isImmediatePropagationStopped: Te,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = we),
                    e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = we),
                    e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = we),
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation();
            },
        }),
        S.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
            },
            S.event.addProp
        ),
        S.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
            S.event.special[t] = {
                setup: function () {
                    return Se(this, t, Ce), !1;
                },
                trigger: function () {
                    return Se(this, t), !0;
                },
                _default: function (e) {
                    return Y.get(e.target, t);
                },
                delegateType: e,
            };
        }),
        S.each(
            {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
            },
            function (e, i) {
                S.event.special[e] = {
                    delegateType: i,
                    bindType: i,
                    handle: function (e) {
                        var t,
                            n = e.relatedTarget,
                            r = e.handleObj;
                        return (
                            (n && (n === this || S.contains(this, n))) ||
                                ((e.type = r.origType),
                                (t = r.handler.apply(this, arguments)),
                                (e.type = i)),
                            t
                        );
                    },
                };
            }
        ),
        S.fn.extend({
            on: function (e, t, n, r) {
                return Ee(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
                return Ee(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return (
                        (r = e.handleObj),
                        S(e.delegateTarget).off(
                            r.namespace
                                ? r.origType + "." + r.namespace
                                : r.origType,
                            r.selector,
                            r.handler
                        ),
                        this
                    );
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                }
                return (
                    (!1 !== t && "function" != typeof t) ||
                        ((n = t), (t = void 0)),
                    !1 === n && (n = Te),
                    this.each(function () {
                        S.event.remove(this, e, n, t);
                    })
                );
            },
        });
    var ke = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function je(e, t) {
        return (
            (A(e, "table") &&
                A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                S(e).children("tbody")[0]) ||
            e
        );
    }
    function De(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function qe(e) {
        return (
            "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
            e
        );
    }
    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in (Y.remove(t, "handle events"), s))
                    for (n = 0, r = s[i].length; n < r; n++)
                        S.event.add(t, i, s[i][n]);
            Q.hasData(e) &&
                ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
        }
    }
    function He(n, r, i, o) {
        r = g(r);
        var e,
            t,
            a,
            s,
            u,
            l,
            c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || (1 < f && "string" == typeof d && !v.checkClone && Ae.test(d)))
            return n.each(function (e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
            });
        if (
            f &&
            ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
            1 === e.childNodes.length && (e = t),
            t || o)
        ) {
            for (s = (a = S.map(ye(e, "script"), De)).length; c < f; c++)
                (u = e),
                    c !== p &&
                        ((u = S.clone(u, !0, !0)),
                        s && S.merge(a, ye(u, "script"))),
                    i.call(n[c], u, c);
            if (s)
                for (
                    l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0;
                    c < s;
                    c++
                )
                    (u = a[c]),
                        he.test(u.type || "") &&
                            !Y.access(u, "globalEval") &&
                            S.contains(l, u) &&
                            (u.src && "module" !== (u.type || "").toLowerCase()
                                ? S._evalUrl &&
                                  !u.noModule &&
                                  S._evalUrl(
                                      u.src,
                                      {
                                          nonce:
                                              u.nonce ||
                                              u.getAttribute("nonce"),
                                      },
                                      l
                                  )
                                : b(u.textContent.replace(Ne, ""), u, l));
        }
        return n;
    }
    function Oe(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || S.cleanData(ye(r)),
                r.parentNode &&
                    (n && ie(r) && ve(ye(r, "script")),
                    r.parentNode.removeChild(r));
        return e;
    }
    S.extend({
        htmlPrefilter: function (e) {
            return e;
        },
        clone: function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c = e.cloneNode(!0),
                f = ie(e);
            if (
                !(
                    v.noCloneChecked ||
                    (1 !== e.nodeType && 11 !== e.nodeType) ||
                    S.isXMLDoc(e)
                )
            )
                for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++)
                    (s = o[r]),
                        (u = a[r]),
                        void 0,
                        "input" === (l = u.nodeName.toLowerCase()) &&
                        pe.test(s.type)
                            ? (u.checked = s.checked)
                            : ("input" !== l && "textarea" !== l) ||
                              (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (
                        o = o || ye(e), a = a || ye(c), r = 0, i = o.length;
                        r < i;
                        r++
                    )
                        Le(o[r], a[r]);
                else Le(e, c);
            return (
                0 < (a = ye(c, "script")).length &&
                    ve(a, !f && ye(e, "script")),
                c
            );
        },
        cleanData: function (e) {
            for (
                var t, n, r, i = S.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
            )
                if (V(n)) {
                    if ((t = n[Y.expando])) {
                        if (t.events)
                            for (r in t.events)
                                i[r]
                                    ? S.event.remove(n, r)
                                    : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0;
                    }
                    n[Q.expando] && (n[Q.expando] = void 0);
                }
        },
    }),
        S.fn.extend({
            detach: function (e) {
                return Oe(this, e, !0);
            },
            remove: function (e) {
                return Oe(this, e);
            },
            text: function (e) {
                return B(
                    this,
                    function (e) {
                        return void 0 === e
                            ? S.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType &&
                                      11 !== this.nodeType &&
                                      9 !== this.nodeType) ||
                                      (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return He(this, arguments, function (e) {
                    (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        je(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return He(this, arguments, function (e) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var t = je(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return He(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return He(this, arguments, function (e) {
                    this.parentNode &&
                        this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType &&
                        (S.cleanData(ye(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return S.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return B(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType)
                            return t.innerHTML;
                        if (
                            "string" == typeof e &&
                            !ke.test(e) &&
                            !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
                        ) {
                            e = S.htmlPrefilter(e);
                            try {
                                for (; n < r; n++)
                                    1 === (t = this[n] || {}).nodeType &&
                                        (S.cleanData(ye(t, !1)),
                                        (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var n = [];
                return He(
                    this,
                    arguments,
                    function (e) {
                        var t = this.parentNode;
                        S.inArray(this, n) < 0 &&
                            (S.cleanData(ye(this)),
                            t && t.replaceChild(e, this));
                    },
                    n
                );
            },
        }),
        S.each(
            {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
            },
            function (e, a) {
                S.fn[e] = function (e) {
                    for (
                        var t, n = [], r = S(e), i = r.length - 1, o = 0;
                        o <= i;
                        o++
                    )
                        (t = o === i ? this : this.clone(!0)),
                            S(r[o])[a](t),
                            u.apply(n, t.get());
                    return this.pushStack(n);
                };
            }
        );
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Re = /^--/,
        Me = function (e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = C), t.getComputedStyle(e);
        },
        Ie = function (e, t, n) {
            var r,
                i,
                o = {};
            for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
            for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
            return r;
        },
        We = new RegExp(ne.join("|"), "i"),
        Fe = "[\\x20\\t\\r\\n\\f]",
        $e = new RegExp(
            "^" + Fe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Fe + "+$",
            "g"
        );
    function Be(e, t, n) {
        var r,
            i,
            o,
            a,
            s = Re.test(t),
            u = e.style;
        return (
            (n = n || Me(e)) &&
                ((a = n.getPropertyValue(t) || n[t]),
                s && (a = a.replace($e, "$1")),
                "" !== a || ie(e) || (a = S.style(e, t)),
                !v.pixelBoxStyles() &&
                    Pe.test(a) &&
                    We.test(t) &&
                    ((r = u.width),
                    (i = u.minWidth),
                    (o = u.maxWidth),
                    (u.minWidth = u.maxWidth = u.width = a),
                    (a = n.width),
                    (u.width = r),
                    (u.minWidth = i),
                    (u.maxWidth = o))),
            void 0 !== a ? a + "" : a
        );
    }
    function _e(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    !(function () {
        function e() {
            if (l) {
                (u.style.cssText =
                    "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (l.style.cssText =
                        "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                (n = "1%" !== e.top),
                    (s = 12 === t(e.marginLeft)),
                    (l.style.right = "60%"),
                    (o = 36 === t(e.right)),
                    (r = 36 === t(e.width)),
                    (l.style.position = "absolute"),
                    (i = 12 === t(l.offsetWidth / 3)),
                    re.removeChild(u),
                    (l = null);
            }
        }
        function t(e) {
            return Math.round(parseFloat(e));
        }
        var n,
            r,
            i,
            o,
            a,
            s,
            u = E.createElement("div"),
            l = E.createElement("div");
        l.style &&
            ((l.style.backgroundClip = "content-box"),
            (l.cloneNode(!0).style.backgroundClip = ""),
            (v.clearCloneStyle = "content-box" === l.style.backgroundClip),
            S.extend(v, {
                boxSizingReliable: function () {
                    return e(), r;
                },
                pixelBoxStyles: function () {
                    return e(), o;
                },
                pixelPosition: function () {
                    return e(), n;
                },
                reliableMarginLeft: function () {
                    return e(), s;
                },
                scrollboxSize: function () {
                    return e(), i;
                },
                reliableTrDimensions: function () {
                    var e, t, n, r;
                    return (
                        null == a &&
                            ((e = E.createElement("table")),
                            (t = E.createElement("tr")),
                            (n = E.createElement("div")),
                            (e.style.cssText =
                                "position:absolute;left:-11111px;border-collapse:separate"),
                            (t.style.cssText = "border:1px solid"),
                            (t.style.height = "1px"),
                            (n.style.height = "9px"),
                            (n.style.display = "block"),
                            re.appendChild(e).appendChild(t).appendChild(n),
                            (r = C.getComputedStyle(t)),
                            (a =
                                parseInt(r.height, 10) +
                                    parseInt(r.borderTopWidth, 10) +
                                    parseInt(r.borderBottomWidth, 10) ===
                                t.offsetHeight),
                            re.removeChild(e)),
                        a
                    );
                },
            }));
    })();
    var ze = ["Webkit", "Moz", "ms"],
        Ue = E.createElement("div").style,
        Xe = {};
    function Ve(e) {
        var t = S.cssProps[e] || Xe[e];
        return (
            t ||
            (e in Ue
                ? e
                : (Xe[e] =
                      (function (e) {
                          var t = e[0].toUpperCase() + e.slice(1),
                              n = ze.length;
                          while (n--) if ((e = ze[n] + t) in Ue) return e;
                      })(e) || e))
        );
    }
    var Ge = /^(none|table(?!-c[ea]).+)/,
        Ye = { position: "absolute", visibility: "hidden", display: "block" },
        Qe = { letterSpacing: "0", fontWeight: "400" };
    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
                r
                    ? ("content" === n &&
                          (u -= S.css(e, "padding" + ne[a], !0, i)),
                      "margin" !== n &&
                          (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
                    : ((u += S.css(e, "padding" + ne[a], !0, i)),
                      "padding" !== n
                          ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
                          : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
        return (
            !r &&
                0 <= o &&
                (u +=
                    Math.max(
                        0,
                        Math.ceil(
                            e["offset" + t[0].toUpperCase() + t.slice(1)] -
                                o -
                                u -
                                s -
                                0.5
                        )
                    ) || 0),
            u
        );
    }
    function Ze(e, t, n) {
        var r = Me(e),
            i =
                (!v.boxSizingReliable() || n) &&
                "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = Be(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n) return a;
            a = "auto";
        }
        return (
            ((!v.boxSizingReliable() && i) ||
                (!v.reliableTrDimensions() && A(e, "tr")) ||
                "auto" === a ||
                (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
                e.getClientRects().length &&
                ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
                (o = s in e) && (a = e[s])),
            (a = parseFloat(a) || 0) +
                Ke(e, t, n || (i ? "border" : "content"), o, r, a) +
                "px"
        );
    }
    function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i);
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = X(t),
                    u = Re.test(t),
                    l = e.style;
                if (
                    (u || (t = Ve(s)),
                    (a = S.cssHooks[t] || S.cssHooks[s]),
                    void 0 === n)
                )
                    return a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                        ? i
                        : l[t];
                "string" === (o = typeof n) &&
                    (i = te.exec(n)) &&
                    i[1] &&
                    ((n = se(e, t, i)), (o = "number")),
                    null != n &&
                        n == n &&
                        ("number" !== o ||
                            u ||
                            (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
                        v.clearCloneStyle ||
                            "" !== n ||
                            0 !== t.indexOf("background") ||
                            (l[t] = "inherit"),
                        (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                            (u ? l.setProperty(t, n) : (l[t] = n)));
            }
        },
        css: function (e, t, n, r) {
            var i,
                o,
                a,
                s = X(t);
            return (
                Re.test(t) || (t = Ve(s)),
                (a = S.cssHooks[t] || S.cssHooks[s]) &&
                    "get" in a &&
                    (i = a.get(e, !0, n)),
                void 0 === i && (i = Be(e, t, r)),
                "normal" === i && t in Qe && (i = Qe[t]),
                "" === n || n
                    ? ((o = parseFloat(i)),
                      !0 === n || isFinite(o) ? o || 0 : i)
                    : i
            );
        },
    }),
        S.each(["height", "width"], function (e, u) {
            S.cssHooks[u] = {
                get: function (e, t, n) {
                    if (t)
                        return !Ge.test(S.css(e, "display")) ||
                            (e.getClientRects().length &&
                                e.getBoundingClientRect().width)
                            ? Ze(e, u, n)
                            : Ie(e, Ye, function () {
                                  return Ze(e, u, n);
                              });
                },
                set: function (e, t, n) {
                    var r,
                        i = Me(e),
                        o = !v.scrollboxSize() && "absolute" === i.position,
                        a =
                            (o || n) &&
                            "border-box" === S.css(e, "boxSizing", !1, i),
                        s = n ? Ke(e, u, n, a, i) : 0;
                    return (
                        a &&
                            o &&
                            (s -= Math.ceil(
                                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                                    parseFloat(i[u]) -
                                    Ke(e, u, "border", !1, i) -
                                    0.5
                            )),
                        s &&
                            (r = te.exec(t)) &&
                            "px" !== (r[3] || "px") &&
                            ((e.style[u] = t), (t = S.css(e, u))),
                        Je(0, t, s)
                    );
                },
            };
        }),
        (S.cssHooks.marginLeft = _e(v.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(Be(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            Ie(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
            (S.cssHooks[i + o] = {
                expand: function (e) {
                    for (
                        var t = 0,
                            n = {},
                            r = "string" == typeof e ? e.split(" ") : [e];
                        t < 4;
                        t++
                    )
                        n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                    return n;
                },
            }),
                "margin" !== i && (S.cssHooks[i + o].set = Je);
        }),
        S.fn.extend({
            css: function (e, t) {
                return B(
                    this,
                    function (e, t, n) {
                        var r,
                            i,
                            o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = Me(e), i = t.length; a < i; a++)
                                o[t[a]] = S.css(e, t[a], !1, r);
                            return o;
                        }
                        return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
        }),
        (((S.Tween = et).prototype = {
            constructor: et,
            init: function (e, t, n, r, i, o) {
                (this.elem = e),
                    (this.prop = n),
                    (this.easing = i || S.easing._default),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = r),
                    (this.unit = o || (S.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = et.propHooks[this.prop];
                return e && e.get
                    ? e.get(this)
                    : et.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = et.propHooks[this.prop];
                return (
                    this.options.duration
                        ? (this.pos = t =
                              S.easing[this.easing](
                                  e,
                                  this.options.duration * e,
                                  0,
                                  1,
                                  this.options.duration
                              ))
                        : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step &&
                        this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : et.propHooks._default.set(this),
                    this
                );
            },
        }).init.prototype = et.prototype),
        ((et.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType ||
                        (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                        ? e.elem[e.prop]
                        : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
                        ? t
                        : 0;
                },
                set: function (e) {
                    S.fx.step[e.prop]
                        ? S.fx.step[e.prop](e)
                        : 1 !== e.elem.nodeType ||
                          (!S.cssHooks[e.prop] &&
                              null == e.elem.style[Ve(e.prop)])
                        ? (e.elem[e.prop] = e.now)
                        : S.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }).scrollTop = et.propHooks.scrollLeft =
            {
                set: function (e) {
                    e.elem.nodeType &&
                        e.elem.parentNode &&
                        (e.elem[e.prop] = e.now);
                },
            }),
        (S.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (S.fx = et.prototype.init),
        (S.fx.step = {});
    var tt,
        nt,
        rt,
        it,
        ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;
    function st() {
        nt &&
            (!1 === E.hidden && C.requestAnimationFrame
                ? C.requestAnimationFrame(st)
                : C.setTimeout(st, S.fx.interval),
            S.fx.tick());
    }
    function ut() {
        return (
            C.setTimeout(function () {
                tt = void 0;
            }),
            (tt = Date.now())
        );
    }
    function lt(e, t) {
        var n,
            r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function ct(e, t, n) {
        for (
            var r,
                i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
                o = 0,
                a = i.length;
            o < a;
            o++
        )
            if ((r = i[o].call(n, t, e))) return r;
    }
    function ft(o, e, t) {
        var n,
            a,
            r = 0,
            i = ft.prefilters.length,
            s = S.Deferred().always(function () {
                delete u.elem;
            }),
            u = function () {
                if (a) return !1;
                for (
                    var e = tt || ut(),
                        t = Math.max(0, l.startTime + l.duration - e),
                        n = 1 - (t / l.duration || 0),
                        r = 0,
                        i = l.tweens.length;
                    r < i;
                    r++
                )
                    l.tweens[r].run(n);
                return (
                    s.notifyWith(o, [l, n, t]),
                    n < 1 && i
                        ? t
                        : (i || s.notifyWith(o, [l, 1, 0]),
                          s.resolveWith(o, [l]),
                          !1)
                );
            },
            l = s.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(
                    !0,
                    { specialEasing: {}, easing: S.easing._default },
                    t
                ),
                originalProperties: e,
                originalOptions: t,
                startTime: tt || ut(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    var n = S.Tween(
                        o,
                        l.opts,
                        e,
                        t,
                        l.opts.specialEasing[e] || l.opts.easing
                    );
                    return l.tweens.push(n), n;
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return (
                        e
                            ? (s.notifyWith(o, [l, 1, 0]),
                              s.resolveWith(o, [l, e]))
                            : s.rejectWith(o, [l, e]),
                        this
                    );
                },
            }),
            c = l.props;
        for (
            !(function (e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (
                        ((i = t[(r = X(n))]),
                        (o = e[n]),
                        Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                        n !== r && ((e[r] = o), delete e[n]),
                        (a = S.cssHooks[r]) && ("expand" in a))
                    )
                        for (n in ((o = a.expand(o)), delete e[r], o))
                            (n in e) || ((e[n] = o[n]), (t[n] = i));
                    else t[r] = i;
            })(c, l.opts.specialEasing);
            r < i;
            r++
        )
            if ((n = ft.prefilters[r].call(l, o, c, l.opts)))
                return (
                    m(n.stop) &&
                        (S._queueHooks(l.elem, l.opts.queue).stop =
                            n.stop.bind(n)),
                    n
                );
        return (
            S.map(c, ct, l),
            m(l.opts.start) && l.opts.start.call(o, l),
            l
                .progress(l.opts.progress)
                .done(l.opts.done, l.opts.complete)
                .fail(l.opts.fail)
                .always(l.opts.always),
            S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
            l
        );
    }
    (S.Animation = S.extend(ft, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return se(n.elem, e, te.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
            for (var n, r = 0, i = e.length; r < i; r++)
                (n = e[r]),
                    (ft.tweeners[n] = ft.tweeners[n] || []),
                    ft.tweeners[n].unshift(t);
        },
        prefilters: [
            function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c,
                    f = "width" in t || "height" in t,
                    p = this,
                    d = {},
                    h = e.style,
                    g = e.nodeType && ae(e),
                    y = Y.get(e, "fxshow");
                for (r in (n.queue ||
                    (null == (a = S._queueHooks(e, "fx")).unqueued &&
                        ((a.unqueued = 0),
                        (s = a.empty.fire),
                        (a.empty.fire = function () {
                            a.unqueued || s();
                        })),
                    a.unqueued++,
                    p.always(function () {
                        p.always(function () {
                            a.unqueued--,
                                S.queue(e, "fx").length || a.empty.fire();
                        });
                    })),
                t))
                    if (((i = t[r]), ot.test(i))) {
                        if (
                            (delete t[r],
                            (o = o || "toggle" === i),
                            i === (g ? "hide" : "show"))
                        ) {
                            if ("show" !== i || !y || void 0 === y[r]) continue;
                            g = !0;
                        }
                        d[r] = (y && y[r]) || S.style(e, r);
                    }
                if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                    for (r in (f &&
                        1 === e.nodeType &&
                        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                        null == (l = y && y.display) &&
                            (l = Y.get(e, "display")),
                        "none" === (c = S.css(e, "display")) &&
                            (l
                                ? (c = l)
                                : (le([e], !0),
                                  (l = e.style.display || l),
                                  (c = S.css(e, "display")),
                                  le([e]))),
                        ("inline" === c ||
                            ("inline-block" === c && null != l)) &&
                            "none" === S.css(e, "float") &&
                            (u ||
                                (p.done(function () {
                                    h.display = l;
                                }),
                                null == l &&
                                    ((c = h.display),
                                    (l = "none" === c ? "" : c))),
                            (h.display = "inline-block"))),
                    n.overflow &&
                        ((h.overflow = "hidden"),
                        p.always(function () {
                            (h.overflow = n.overflow[0]),
                                (h.overflowX = n.overflow[1]),
                                (h.overflowY = n.overflow[2]);
                        })),
                    (u = !1),
                    d))
                        u ||
                            (y
                                ? "hidden" in y && (g = y.hidden)
                                : (y = Y.access(e, "fxshow", { display: l })),
                            o && (y.hidden = !g),
                            g && le([e], !0),
                            p.done(function () {
                                for (r in (g || le([e]),
                                Y.remove(e, "fxshow"),
                                d))
                                    S.style(e, r, d[r]);
                            })),
                            (u = ct(g ? y[r] : 0, r, p)),
                            r in y ||
                                ((y[r] = u.start),
                                g && ((u.end = u.start), (u.start = 0)));
            },
        ],
        prefilter: function (e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
        },
    })),
        (S.speed = function (e, t, n) {
            var r =
                e && "object" == typeof e
                    ? S.extend({}, e)
                    : {
                          complete: n || (!n && t) || (m(e) && e),
                          duration: e,
                          easing: (n && t) || (t && !m(t) && t),
                      };
            return (
                S.fx.off
                    ? (r.duration = 0)
                    : "number" != typeof r.duration &&
                      (r.duration in S.fx.speeds
                          ? (r.duration = S.fx.speeds[r.duration])
                          : (r.duration = S.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                    m(r.old) && r.old.call(this),
                        r.queue && S.dequeue(this, r.queue);
                }),
                r
            );
        }),
        S.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(ae)
                    .css("opacity", 0)
                    .show()
                    .end()
                    .animate({ opacity: t }, e, n, r);
            },
            animate: function (t, e, n, r) {
                var i = S.isEmptyObject(t),
                    o = S.speed(e, n, r),
                    a = function () {
                        var e = ft(this, S.extend({}, t), o);
                        (i || Y.get(this, "finish")) && e.stop(!0);
                    };
                return (
                    (a.finish = a),
                    i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                );
            },
            stop: function (i, e, o) {
                var a = function (e) {
                    var t = e.stop;
                    delete e.stop, t(o);
                };
                return (
                    "string" != typeof i && ((o = e), (e = i), (i = void 0)),
                    e && this.queue(i || "fx", []),
                    this.each(function () {
                        var e = !0,
                            t = null != i && i + "queueHooks",
                            n = S.timers,
                            r = Y.get(this);
                        if (t) r[t] && r[t].stop && a(r[t]);
                        else
                            for (t in r)
                                r[t] && r[t].stop && at.test(t) && a(r[t]);
                        for (t = n.length; t--; )
                            n[t].elem !== this ||
                                (null != i && n[t].queue !== i) ||
                                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
                        (!e && o) || S.dequeue(this, i);
                    })
                );
            },
            finish: function (a) {
                return (
                    !1 !== a && (a = a || "fx"),
                    this.each(function () {
                        var e,
                            t = Y.get(this),
                            n = t[a + "queue"],
                            r = t[a + "queueHooks"],
                            i = S.timers,
                            o = n ? n.length : 0;
                        for (
                            t.finish = !0,
                                S.queue(this, a, []),
                                r && r.stop && r.stop.call(this, !0),
                                e = i.length;
                            e--;

                        )
                            i[e].elem === this &&
                                i[e].queue === a &&
                                (i[e].anim.stop(!0), i.splice(e, 1));
                        for (e = 0; e < o; e++)
                            n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish;
                    })
                );
            },
        }),
        S.each(["toggle", "show", "hide"], function (e, r) {
            var i = S.fn[r];
            S.fn[r] = function (e, t, n) {
                return null == e || "boolean" == typeof e
                    ? i.apply(this, arguments)
                    : this.animate(lt(r, !0), e, t, n);
            };
        }),
        S.each(
            {
                slideDown: lt("show"),
                slideUp: lt("hide"),
                slideToggle: lt("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
            },
            function (e, r) {
                S.fn[e] = function (e, t, n) {
                    return this.animate(r, e, t, n);
                };
            }
        ),
        (S.timers = []),
        (S.fx.tick = function () {
            var e,
                t = 0,
                n = S.timers;
            for (tt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || S.fx.stop(), (tt = void 0);
        }),
        (S.fx.timer = function (e) {
            S.timers.push(e), S.fx.start();
        }),
        (S.fx.interval = 13),
        (S.fx.start = function () {
            nt || ((nt = !0), st());
        }),
        (S.fx.stop = function () {
            nt = null;
        }),
        (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (S.fn.delay = function (r, e) {
            return (
                (r = (S.fx && S.fx.speeds[r]) || r),
                (e = e || "fx"),
                this.queue(e, function (e, t) {
                    var n = C.setTimeout(e, r);
                    t.stop = function () {
                        C.clearTimeout(n);
                    };
                })
            );
        }),
        (rt = E.createElement("input")),
        (it = E.createElement("select").appendChild(E.createElement("option"))),
        (rt.type = "checkbox"),
        (v.checkOn = "" !== rt.value),
        (v.optSelected = it.selected),
        ((rt = E.createElement("input")).value = "t"),
        (rt.type = "radio"),
        (v.radioValue = "t" === rt.value);
    var pt,
        dt = S.expr.attrHandle;
    S.fn.extend({
        attr: function (e, t) {
            return B(this, S.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
            return this.each(function () {
                S.removeAttr(this, e);
            });
        },
    }),
        S.extend({
            attr: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof e.getAttribute
                        ? S.prop(e, t, n)
                        : ((1 === o && S.isXMLDoc(e)) ||
                              (i =
                                  S.attrHooks[t.toLowerCase()] ||
                                  (S.expr.match.bool.test(t) ? pt : void 0)),
                          void 0 !== n
                              ? null === n
                                  ? void S.removeAttr(e, t)
                                  : i &&
                                    "set" in i &&
                                    void 0 !== (r = i.set(e, n, t))
                                  ? r
                                  : (e.setAttribute(t, n + ""), n)
                              : i && "get" in i && null !== (r = i.get(e, t))
                              ? r
                              : null == (r = S.find.attr(e, t))
                              ? void 0
                              : r);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!v.radioValue && "radio" === t && A(e, "input")) {
                            var n = e.value;
                            return (
                                e.setAttribute("type", t), n && (e.value = n), t
                            );
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    r = 0,
                    i = t && t.match(P);
                if (i && 1 === e.nodeType)
                    while ((n = i[r++])) e.removeAttribute(n);
            },
        }),
        (pt = {
            set: function (e, t, n) {
                return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var a = dt[t] || S.find.attr;
            dt[t] = function (e, t, n) {
                var r,
                    i,
                    o = t.toLowerCase();
                return (
                    n ||
                        ((i = dt[o]),
                        (dt[o] = r),
                        (r = null != a(e, t, n) ? o : null),
                        (dt[o] = i)),
                    r
                );
            };
        });
    var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;
    function yt(e) {
        return (e.match(P) || []).join(" ");
    }
    function vt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function mt(e) {
        return Array.isArray(e)
            ? e
            : ("string" == typeof e && e.match(P)) || [];
    }
    S.fn.extend({
        prop: function (e, t) {
            return B(this, S.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[S.propFix[e] || e];
            });
        },
    }),
        S.extend({
            prop: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && S.isXMLDoc(e)) ||
                            ((t = S.propFix[t] || t), (i = S.propHooks[t])),
                        void 0 !== n
                            ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                ? r
                                : (e[t] = n)
                            : i && "get" in i && null !== (r = i.get(e, t))
                            ? r
                            : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = S.find.attr(e, "tabindex");
                        return t
                            ? parseInt(t, 10)
                            : ht.test(e.nodeName) ||
                              (gt.test(e.nodeName) && e.href)
                            ? 0
                            : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        v.optSelected ||
            (S.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return (
                        t && t.parentNode && t.parentNode.selectedIndex, null
                    );
                },
                set: function (e) {
                    var t = e.parentNode;
                    t &&
                        (t.selectedIndex,
                        t.parentNode && t.parentNode.selectedIndex);
                },
            }),
        S.each(
            [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
            ],
            function () {
                S.propFix[this.toLowerCase()] = this;
            }
        ),
        S.fn.extend({
            addClass: function (t) {
                var e, n, r, i, o, a;
                return m(t)
                    ? this.each(function (e) {
                          S(this).addClass(t.call(this, e, vt(this)));
                      })
                    : (e = mt(t)).length
                    ? this.each(function () {
                          if (
                              ((r = vt(this)),
                              (n = 1 === this.nodeType && " " + yt(r) + " "))
                          ) {
                              for (o = 0; o < e.length; o++)
                                  (i = e[o]),
                                      n.indexOf(" " + i + " ") < 0 &&
                                          (n += i + " ");
                              (a = yt(n)),
                                  r !== a && this.setAttribute("class", a);
                          }
                      })
                    : this;
            },
            removeClass: function (t) {
                var e, n, r, i, o, a;
                return m(t)
                    ? this.each(function (e) {
                          S(this).removeClass(t.call(this, e, vt(this)));
                      })
                    : arguments.length
                    ? (e = mt(t)).length
                        ? this.each(function () {
                              if (
                                  ((r = vt(this)),
                                  (n =
                                      1 === this.nodeType && " " + yt(r) + " "))
                              ) {
                                  for (o = 0; o < e.length; o++) {
                                      i = e[o];
                                      while (-1 < n.indexOf(" " + i + " "))
                                          n = n.replace(" " + i + " ", " ");
                                  }
                                  (a = yt(n)),
                                      r !== a && this.setAttribute("class", a);
                              }
                          })
                        : this
                    : this.attr("class", "");
            },
            toggleClass: function (t, n) {
                var e,
                    r,
                    i,
                    o,
                    a = typeof t,
                    s = "string" === a || Array.isArray(t);
                return m(t)
                    ? this.each(function (e) {
                          S(this).toggleClass(t.call(this, e, vt(this), n), n);
                      })
                    : "boolean" == typeof n && s
                    ? n
                        ? this.addClass(t)
                        : this.removeClass(t)
                    : ((e = mt(t)),
                      this.each(function () {
                          if (s)
                              for (o = S(this), i = 0; i < e.length; i++)
                                  (r = e[i]),
                                      o.hasClass(r)
                                          ? o.removeClass(r)
                                          : o.addClass(r);
                          else
                              (void 0 !== t && "boolean" !== a) ||
                                  ((r = vt(this)) &&
                                      Y.set(this, "__className__", r),
                                  this.setAttribute &&
                                      this.setAttribute(
                                          "class",
                                          r || !1 === t
                                              ? ""
                                              : Y.get(this, "__className__") ||
                                                    ""
                                      ));
                      }));
            },
            hasClass: function (e) {
                var t,
                    n,
                    r = 0;
                t = " " + e + " ";
                while ((n = this[r++]))
                    if (
                        1 === n.nodeType &&
                        -1 < (" " + yt(vt(n)) + " ").indexOf(t)
                    )
                        return !0;
                return !1;
            },
        });
    var xt = /\r/g;
    S.fn.extend({
        val: function (n) {
            var r,
                e,
                i,
                t = this[0];
            return arguments.length
                ? ((i = m(n)),
                  this.each(function (e) {
                      var t;
                      1 === this.nodeType &&
                          (null == (t = i ? n.call(this, e, S(this).val()) : n)
                              ? (t = "")
                              : "number" == typeof t
                              ? (t += "")
                              : Array.isArray(t) &&
                                (t = S.map(t, function (e) {
                                    return null == e ? "" : e + "";
                                })),
                          ((r =
                              S.valHooks[this.type] ||
                              S.valHooks[this.nodeName.toLowerCase()]) &&
                              "set" in r &&
                              void 0 !== r.set(this, t, "value")) ||
                              (this.value = t));
                  }))
                : t
                ? (r =
                      S.valHooks[t.type] ||
                      S.valHooks[t.nodeName.toLowerCase()]) &&
                  "get" in r &&
                  void 0 !== (e = r.get(t, "value"))
                    ? e
                    : "string" == typeof (e = t.value)
                    ? e.replace(xt, "")
                    : null == e
                    ? ""
                    : e
                : void 0;
        },
    }),
        S.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = S.find.attr(e, "value");
                        return null != t ? t : yt(S.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            r,
                            i = e.options,
                            o = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (
                                ((n = i[r]).selected || r === o) &&
                                !n.disabled &&
                                (!n.parentNode.disabled ||
                                    !A(n.parentNode, "optgroup"))
                            ) {
                                if (((t = S(n).val()), a)) return t;
                                s.push(t);
                            }
                        return s;
                    },
                    set: function (e, t) {
                        var n,
                            r,
                            i = e.options,
                            o = S.makeArray(t),
                            a = i.length;
                        while (a--)
                            ((r = i[a]).selected =
                                -1 < S.inArray(S.valHooks.option.get(r), o)) &&
                                (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        S.each(["radio", "checkbox"], function () {
            (S.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t))
                        return (e.checked = -1 < S.inArray(S(e).val(), t));
                },
            }),
                v.checkOn ||
                    (S.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value")
                            ? "on"
                            : e.value;
                    });
        }),
        (v.focusin = "onfocusin" in C);
    var bt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function (e) {
            e.stopPropagation();
        };
    S.extend(S.event, {
        trigger: function (e, t, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                p = [n || E],
                d = y.call(e, "type") ? e.type : e,
                h = y.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
                ((o = f = a = n = n || E),
                3 !== n.nodeType &&
                    8 !== n.nodeType &&
                    !bt.test(d + S.event.triggered) &&
                    (-1 < d.indexOf(".") &&
                        ((d = (h = d.split(".")).shift()), h.sort()),
                    (u = d.indexOf(":") < 0 && "on" + d),
                    ((e = e[S.expando]
                        ? e
                        : new S.Event(d, "object" == typeof e && e)).isTrigger =
                        r ? 2 : 3),
                    (e.namespace = h.join(".")),
                    (e.rnamespace = e.namespace
                        ? new RegExp(
                              "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          )
                        : null),
                    (e.result = void 0),
                    e.target || (e.target = n),
                    (t = null == t ? [e] : S.makeArray(t, [e])),
                    (c = S.event.special[d] || {}),
                    r || !c.trigger || !1 !== c.trigger.apply(n, t)))
            ) {
                if (!r && !c.noBubble && !x(n)) {
                    for (
                        s = c.delegateType || d,
                            bt.test(s + d) || (o = o.parentNode);
                        o;
                        o = o.parentNode
                    )
                        p.push(o), (a = o);
                    a === (n.ownerDocument || E) &&
                        p.push(a.defaultView || a.parentWindow || C);
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    (f = o),
                        (e.type = 1 < i ? s : c.bindType || d),
                        (l =
                            (Y.get(o, "events") || Object.create(null))[
                                e.type
                            ] && Y.get(o, "handle")) && l.apply(o, t),
                        (l = u && o[u]) &&
                            l.apply &&
                            V(o) &&
                            ((e.result = l.apply(o, t)),
                            !1 === e.result && e.preventDefault());
                return (
                    (e.type = d),
                    r ||
                        e.isDefaultPrevented() ||
                        (c._default && !1 !== c._default.apply(p.pop(), t)) ||
                        !V(n) ||
                        (u &&
                            m(n[d]) &&
                            !x(n) &&
                            ((a = n[u]) && (n[u] = null),
                            (S.event.triggered = d),
                            e.isPropagationStopped() &&
                                f.addEventListener(d, wt),
                            n[d](),
                            e.isPropagationStopped() &&
                                f.removeEventListener(d, wt),
                            (S.event.triggered = void 0),
                            a && (n[u] = a))),
                    e.result
                );
            }
        },
        simulate: function (e, t, n) {
            var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
            S.event.trigger(r, null, t);
        },
    }),
        S.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    S.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return S.event.trigger(e, t, n, !0);
            },
        }),
        v.focusin ||
            S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
                var i = function (e) {
                    S.event.simulate(r, e.target, S.event.fix(e));
                };
                S.event.special[r] = {
                    setup: function () {
                        var e = this.ownerDocument || this.document || this,
                            t = Y.access(e, r);
                        t || e.addEventListener(n, i, !0),
                            Y.access(e, r, (t || 0) + 1);
                    },
                    teardown: function () {
                        var e = this.ownerDocument || this.document || this,
                            t = Y.access(e, r) - 1;
                        t
                            ? Y.access(e, r, t)
                            : (e.removeEventListener(n, i, !0), Y.remove(e, r));
                    },
                };
            });
    var Tt = C.location,
        Ct = { guid: Date.now() },
        Et = /\?/;
    S.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = new C.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {}
        return (
            (n = t && t.getElementsByTagName("parsererror")[0]),
            (t && !n) ||
                S.error(
                    "Invalid XML: " +
                        (n
                            ? S.map(n.childNodes, function (e) {
                                  return e.textContent;
                              }).join("\n")
                            : e)
                ),
            t
        );
    };
    var St = /\[\]$/,
        kt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;
    function jt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            S.each(e, function (e, t) {
                r || St.test(n)
                    ? i(n, t)
                    : jt(
                          n +
                              "[" +
                              ("object" == typeof t && null != t ? e : "") +
                              "]",
                          t,
                          r,
                          i
                      );
            });
        else if (r || "object" !== w(e)) i(n, e);
        else for (t in e) jt(n + "[" + t + "]", e[t], r, i);
    }
    (S.param = function (e, t) {
        var n,
            r = [],
            i = function (e, t) {
                var n = m(t) ? t() : t;
                r[r.length] =
                    encodeURIComponent(e) +
                    "=" +
                    encodeURIComponent(null == n ? "" : n);
            };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
            S.each(e, function () {
                i(this.name, this.value);
            });
        else for (n in e) jt(n, e[n], t, i);
        return r.join("&");
    }),
        S.fn.extend({
            serialize: function () {
                return S.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = S.prop(this, "elements");
                    return e ? S.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return (
                            this.name &&
                            !S(this).is(":disabled") &&
                            Nt.test(this.nodeName) &&
                            !At.test(e) &&
                            (this.checked || !pe.test(e))
                        );
                    })
                    .map(function (e, t) {
                        var n = S(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? S.map(n, function (e) {
                                  return {
                                      name: t.name,
                                      value: e.replace(kt, "\r\n"),
                                  };
                              })
                            : { name: t.name, value: n.replace(kt, "\r\n") };
                    })
                    .get();
            },
        });
    var Dt = /%20/g,
        qt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Rt = {},
        Mt = {},
        It = "*/".concat("*"),
        Wt = E.createElement("a");
    function Ft(o) {
        return function (e, t) {
            "string" != typeof e && ((t = e), (e = "*"));
            var n,
                r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                while ((n = i[r++]))
                    "+" === n[0]
                        ? ((n = n.slice(1) || "*"),
                          (o[n] = o[n] || []).unshift(t))
                        : (o[n] = o[n] || []).push(t);
        };
    }
    function $t(t, i, o, a) {
        var s = {},
            u = t === Mt;
        function l(e) {
            var r;
            return (
                (s[e] = !0),
                S.each(t[e] || [], function (e, t) {
                    var n = t(i, o, a);
                    return "string" != typeof n || u || s[n]
                        ? u
                            ? !(r = n)
                            : void 0
                        : (i.dataTypes.unshift(n), l(n), !1);
                }),
                r
            );
        }
        return l(i.dataTypes[0]) || (!s["*"] && l("*"));
    }
    function Bt(e, t) {
        var n,
            r,
            i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e;
    }
    (Wt.href = Tt.href),
        S.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Tt.href,
                type: "GET",
                isLocal:
                    /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                        Tt.protocol
                    ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": It,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON",
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": S.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? Bt(Bt(e, S.ajaxSettings), t) : Bt(S.ajaxSettings, e);
            },
            ajaxPrefilter: Ft(Rt),
            ajaxTransport: Ft(Mt),
            ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var c,
                    f,
                    p,
                    n,
                    d,
                    r,
                    h,
                    g,
                    i,
                    o,
                    y = S.ajaxSetup({}, t),
                    v = y.context || y,
                    m = y.context && (v.nodeType || v.jquery) ? S(v) : S.event,
                    x = S.Deferred(),
                    b = S.Callbacks("once memory"),
                    w = y.statusCode || {},
                    a = {},
                    s = {},
                    u = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (h) {
                                if (!n) {
                                    n = {};
                                    while ((t = Ht.exec(p)))
                                        n[t[1].toLowerCase() + " "] = (
                                            n[t[1].toLowerCase() + " "] || []
                                        ).concat(t[2]);
                                }
                                t = n[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function () {
                            return h ? p : null;
                        },
                        setRequestHeader: function (e, t) {
                            return (
                                null == h &&
                                    ((e = s[e.toLowerCase()] =
                                        s[e.toLowerCase()] || e),
                                    (a[e] = t)),
                                this
                            );
                        },
                        overrideMimeType: function (e) {
                            return null == h && (y.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (h) T.always(e[T.status]);
                                else for (t in e) w[t] = [w[t], e[t]];
                            return this;
                        },
                        abort: function (e) {
                            var t = e || u;
                            return c && c.abort(t), l(0, t), this;
                        },
                    };
                if (
                    (x.promise(T),
                    (y.url = ((e || y.url || Tt.href) + "").replace(
                        Pt,
                        Tt.protocol + "//"
                    )),
                    (y.type = t.method || t.type || y.method || y.type),
                    (y.dataTypes = (y.dataType || "*")
                        .toLowerCase()
                        .match(P) || [""]),
                    null == y.crossDomain)
                ) {
                    r = E.createElement("a");
                    try {
                        (r.href = y.url),
                            (r.href = r.href),
                            (y.crossDomain =
                                Wt.protocol + "//" + Wt.host !=
                                r.protocol + "//" + r.host);
                    } catch (e) {
                        y.crossDomain = !0;
                    }
                }
                if (
                    (y.data &&
                        y.processData &&
                        "string" != typeof y.data &&
                        (y.data = S.param(y.data, y.traditional)),
                    $t(Rt, y, t, T),
                    h)
                )
                    return T;
                for (i in ((g = S.event && y.global) &&
                    0 == S.active++ &&
                    S.event.trigger("ajaxStart"),
                (y.type = y.type.toUpperCase()),
                (y.hasContent = !Ot.test(y.type)),
                (f = y.url.replace(qt, "")),
                y.hasContent
                    ? y.data &&
                      y.processData &&
                      0 ===
                          (y.contentType || "").indexOf(
                              "application/x-www-form-urlencoded"
                          ) &&
                      (y.data = y.data.replace(Dt, "+"))
                    : ((o = y.url.slice(f.length)),
                      y.data &&
                          (y.processData || "string" == typeof y.data) &&
                          ((f += (Et.test(f) ? "&" : "?") + y.data),
                          delete y.data),
                      !1 === y.cache &&
                          ((f = f.replace(Lt, "$1")),
                          (o =
                              (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o)),
                      (y.url = f + o)),
                y.ifModified &&
                    (S.lastModified[f] &&
                        T.setRequestHeader(
                            "If-Modified-Since",
                            S.lastModified[f]
                        ),
                    S.etag[f] &&
                        T.setRequestHeader("If-None-Match", S.etag[f])),
                ((y.data && y.hasContent && !1 !== y.contentType) ||
                    t.contentType) &&
                    T.setRequestHeader("Content-Type", y.contentType),
                T.setRequestHeader(
                    "Accept",
                    y.dataTypes[0] && y.accepts[y.dataTypes[0]]
                        ? y.accepts[y.dataTypes[0]] +
                              ("*" !== y.dataTypes[0]
                                  ? ", " + It + "; q=0.01"
                                  : "")
                        : y.accepts["*"]
                ),
                y.headers))
                    T.setRequestHeader(i, y.headers[i]);
                if (y.beforeSend && (!1 === y.beforeSend.call(v, T, y) || h))
                    return T.abort();
                if (
                    ((u = "abort"),
                    b.add(y.complete),
                    T.done(y.success),
                    T.fail(y.error),
                    (c = $t(Mt, y, t, T)))
                ) {
                    if (
                        ((T.readyState = 1),
                        g && m.trigger("ajaxSend", [T, y]),
                        h)
                    )
                        return T;
                    y.async &&
                        0 < y.timeout &&
                        (d = C.setTimeout(function () {
                            T.abort("timeout");
                        }, y.timeout));
                    try {
                        (h = !1), c.send(a, l);
                    } catch (e) {
                        if (h) throw e;
                        l(-1, e);
                    }
                } else l(-1, "No Transport");
                function l(e, t, n, r) {
                    var i,
                        o,
                        a,
                        s,
                        u,
                        l = t;
                    h ||
                        ((h = !0),
                        d && C.clearTimeout(d),
                        (c = void 0),
                        (p = r || ""),
                        (T.readyState = 0 < e ? 4 : 0),
                        (i = (200 <= e && e < 300) || 304 === e),
                        n &&
                            (s = (function (e, t, n) {
                                var r,
                                    i,
                                    o,
                                    a,
                                    s = e.contents,
                                    u = e.dataTypes;
                                while ("*" === u[0])
                                    u.shift(),
                                        void 0 === r &&
                                            (r =
                                                e.mimeType ||
                                                t.getResponseHeader(
                                                    "Content-Type"
                                                ));
                                if (r)
                                    for (i in s)
                                        if (s[i] && s[i].test(r)) {
                                            u.unshift(i);
                                            break;
                                        }
                                if (u[0] in n) o = u[0];
                                else {
                                    for (i in n) {
                                        if (
                                            !u[0] ||
                                            e.converters[i + " " + u[0]]
                                        ) {
                                            o = i;
                                            break;
                                        }
                                        a || (a = i);
                                    }
                                    o = o || a;
                                }
                                if (o) return o !== u[0] && u.unshift(o), n[o];
                            })(y, T, n)),
                        !i &&
                            -1 < S.inArray("script", y.dataTypes) &&
                            S.inArray("json", y.dataTypes) < 0 &&
                            (y.converters["text script"] = function () {}),
                        (s = (function (e, t, n, r) {
                            var i,
                                o,
                                a,
                                s,
                                u,
                                l = {},
                                c = e.dataTypes.slice();
                            if (c[1])
                                for (a in e.converters)
                                    l[a.toLowerCase()] = e.converters[a];
                            o = c.shift();
                            while (o)
                                if (
                                    (e.responseFields[o] &&
                                        (n[e.responseFields[o]] = t),
                                    !u &&
                                        r &&
                                        e.dataFilter &&
                                        (t = e.dataFilter(t, e.dataType)),
                                    (u = o),
                                    (o = c.shift()))
                                )
                                    if ("*" === o) o = u;
                                    else if ("*" !== u && u !== o) {
                                        if (
                                            !(a = l[u + " " + o] || l["* " + o])
                                        )
                                            for (i in l)
                                                if (
                                                    (s = i.split(" "))[1] ===
                                                        o &&
                                                    (a =
                                                        l[u + " " + s[0]] ||
                                                        l["* " + s[0]])
                                                ) {
                                                    !0 === a
                                                        ? (a = l[i])
                                                        : !0 !== l[i] &&
                                                          ((o = s[0]),
                                                          c.unshift(s[1]));
                                                    break;
                                                }
                                        if (!0 !== a)
                                            if (a && e["throws"]) t = a(t);
                                            else
                                                try {
                                                    t = a(t);
                                                } catch (e) {
                                                    return {
                                                        state: "parsererror",
                                                        error: a
                                                            ? e
                                                            : "No conversion from " +
                                                              u +
                                                              " to " +
                                                              o,
                                                    };
                                                }
                                    }
                            return { state: "success", data: t };
                        })(y, s, T, i)),
                        i
                            ? (y.ifModified &&
                                  ((u = T.getResponseHeader("Last-Modified")) &&
                                      (S.lastModified[f] = u),
                                  (u = T.getResponseHeader("etag")) &&
                                      (S.etag[f] = u)),
                              204 === e || "HEAD" === y.type
                                  ? (l = "nocontent")
                                  : 304 === e
                                  ? (l = "notmodified")
                                  : ((l = s.state),
                                    (o = s.data),
                                    (i = !(a = s.error))))
                            : ((a = l),
                              (!e && l) || ((l = "error"), e < 0 && (e = 0))),
                        (T.status = e),
                        (T.statusText = (t || l) + ""),
                        i
                            ? x.resolveWith(v, [o, l, T])
                            : x.rejectWith(v, [T, l, a]),
                        T.statusCode(w),
                        (w = void 0),
                        g &&
                            m.trigger(i ? "ajaxSuccess" : "ajaxError", [
                                T,
                                y,
                                i ? o : a,
                            ]),
                        b.fireWith(v, [T, l]),
                        g &&
                            (m.trigger("ajaxComplete", [T, y]),
                            --S.active || S.event.trigger("ajaxStop")));
                }
                return T;
            },
            getJSON: function (e, t, n) {
                return S.get(e, t, n, "json");
            },
            getScript: function (e, t) {
                return S.get(e, void 0, t, "script");
            },
        }),
        S.each(["get", "post"], function (e, i) {
            S[i] = function (e, t, n, r) {
                return (
                    m(t) && ((r = r || n), (n = t), (t = void 0)),
                    S.ajax(
                        S.extend(
                            {
                                url: e,
                                type: i,
                                dataType: r,
                                data: t,
                                success: n,
                            },
                            S.isPlainObject(e) && e
                        )
                    )
                );
            };
        }),
        S.ajaxPrefilter(function (e) {
            var t;
            for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                    (e.contentType = e.headers[t] || "");
        }),
        (S._evalUrl = function (e, t, n) {
            return S.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                    S.globalEval(e, t, n);
                },
            });
        }),
        S.fn.extend({
            wrapAll: function (e) {
                var t;
                return (
                    this[0] &&
                        (m(e) && (e = e.call(this[0])),
                        (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                var e = this;
                                while (e.firstElementChild)
                                    e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (n) {
                return m(n)
                    ? this.each(function (e) {
                          S(this).wrapInner(n.call(this, e));
                      })
                    : this.each(function () {
                          var e = S(this),
                              t = e.contents();
                          t.length ? t.wrapAll(n) : e.append(n);
                      });
            },
            wrap: function (t) {
                var n = m(t);
                return this.each(function (e) {
                    S(this).wrapAll(n ? t.call(this, e) : t);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            S(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (S.expr.pseudos.hidden = function (e) {
            return !S.expr.pseudos.visible(e);
        }),
        (S.expr.pseudos.visible = function (e) {
            return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
            );
        }),
        (S.ajaxSettings.xhr = function () {
            try {
                return new C.XMLHttpRequest();
            } catch (e) {}
        });
    var _t = { 0: 200, 1223: 204 },
        zt = S.ajaxSettings.xhr();
    (v.cors = !!zt && "withCredentials" in zt),
        (v.ajax = zt = !!zt),
        S.ajaxTransport(function (i) {
            var o, a;
            if (v.cors || (zt && !i.crossDomain))
                return {
                    send: function (e, t) {
                        var n,
                            r = i.xhr();
                        if (
                            (r.open(
                                i.type,
                                i.url,
                                i.async,
                                i.username,
                                i.password
                            ),
                            i.xhrFields)
                        )
                            for (n in i.xhrFields) r[n] = i.xhrFields[n];
                        for (n in (i.mimeType &&
                            r.overrideMimeType &&
                            r.overrideMimeType(i.mimeType),
                        i.crossDomain ||
                            e["X-Requested-With"] ||
                            (e["X-Requested-With"] = "XMLHttpRequest"),
                        e))
                            r.setRequestHeader(n, e[n]);
                        (o = function (e) {
                            return function () {
                                o &&
                                    ((o =
                                        a =
                                        r.onload =
                                        r.onerror =
                                        r.onabort =
                                        r.ontimeout =
                                        r.onreadystatechange =
                                            null),
                                    "abort" === e
                                        ? r.abort()
                                        : "error" === e
                                        ? "number" != typeof r.status
                                            ? t(0, "error")
                                            : t(r.status, r.statusText)
                                        : t(
                                              _t[r.status] || r.status,
                                              r.statusText,
                                              "text" !==
                                                  (r.responseType || "text") ||
                                                  "string" !=
                                                      typeof r.responseText
                                                  ? { binary: r.response }
                                                  : { text: r.responseText },
                                              r.getAllResponseHeaders()
                                          ));
                            };
                        }),
                            (r.onload = o()),
                            (a = r.onerror = r.ontimeout = o("error")),
                            void 0 !== r.onabort
                                ? (r.onabort = a)
                                : (r.onreadystatechange = function () {
                                      4 === r.readyState &&
                                          C.setTimeout(function () {
                                              o && a();
                                          });
                                  }),
                            (o = o("abort"));
                        try {
                            r.send((i.hasContent && i.data) || null);
                        } catch (e) {
                            if (o) throw e;
                        }
                    },
                    abort: function () {
                        o && o();
                    },
                };
        }),
        S.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        S.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return S.globalEval(e), e;
                },
            },
        }),
        S.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
        }),
        S.ajaxTransport("script", function (n) {
            var r, i;
            if (n.crossDomain || n.scriptAttrs)
                return {
                    send: function (e, t) {
                        (r = S("<script>")
                            .attr(n.scriptAttrs || {})
                            .prop({ charset: n.scriptCharset, src: n.url })
                            .on(
                                "load error",
                                (i = function (e) {
                                    r.remove(),
                                        (i = null),
                                        e &&
                                            t(
                                                "error" === e.type ? 404 : 200,
                                                e.type
                                            );
                                })
                            )),
                            E.head.appendChild(r[0]);
                    },
                    abort: function () {
                        i && i();
                    },
                };
        });
    var Ut,
        Xt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Xt.pop() || S.expando + "_" + Ct.guid++;
            return (this[e] = !0), e;
        },
    }),
        S.ajaxPrefilter("json jsonp", function (e, t, n) {
            var r,
                i,
                o,
                a =
                    !1 !== e.jsonp &&
                    (Vt.test(e.url)
                        ? "url"
                        : "string" == typeof e.data &&
                          0 ===
                              (e.contentType || "").indexOf(
                                  "application/x-www-form-urlencoded"
                              ) &&
                          Vt.test(e.data) &&
                          "data");
            if (a || "jsonp" === e.dataTypes[0])
                return (
                    (r = e.jsonpCallback =
                        m(e.jsonpCallback)
                            ? e.jsonpCallback()
                            : e.jsonpCallback),
                    a
                        ? (e[a] = e[a].replace(Vt, "$1" + r))
                        : !1 !== e.jsonp &&
                          (e.url +=
                              (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                    (e.converters["script json"] = function () {
                        return o || S.error(r + " was not called"), o[0];
                    }),
                    (e.dataTypes[0] = "json"),
                    (i = C[r]),
                    (C[r] = function () {
                        o = arguments;
                    }),
                    n.always(function () {
                        void 0 === i ? S(C).removeProp(r) : (C[r] = i),
                            e[r] &&
                                ((e.jsonpCallback = t.jsonpCallback),
                                Xt.push(r)),
                            o && m(i) && i(o[0]),
                            (o = i = void 0);
                    }),
                    "script"
                );
        }),
        (v.createHTMLDocument =
            (((Ut = E.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
            2 === Ut.childNodes.length)),
        (S.parseHTML = function (e, t, n) {
            return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                      (v.createHTMLDocument
                          ? (((r = (t =
                                E.implementation.createHTMLDocument(
                                    ""
                                )).createElement("base")).href =
                                E.location.href),
                            t.head.appendChild(r))
                          : (t = E)),
                  (o = !n && []),
                  (i = N.exec(e))
                      ? [t.createElement(i[1])]
                      : ((i = xe([e], t, o)),
                        o && o.length && S(o).remove(),
                        S.merge([], i.childNodes)));
            var r, i, o;
        }),
        (S.fn.load = function (e, t, n) {
            var r,
                i,
                o,
                a = this,
                s = e.indexOf(" ");
            return (
                -1 < s && ((r = yt(e.slice(s))), (e = e.slice(0, s))),
                m(t)
                    ? ((n = t), (t = void 0))
                    : t && "object" == typeof t && (i = "POST"),
                0 < a.length &&
                    S.ajax({
                        url: e,
                        type: i || "GET",
                        dataType: "html",
                        data: t,
                    })
                        .done(function (e) {
                            (o = arguments),
                                a.html(
                                    r
                                        ? S("<div>")
                                              .append(S.parseHTML(e))
                                              .find(r)
                                        : e
                                );
                        })
                        .always(
                            n &&
                                function (e, t) {
                                    a.each(function () {
                                        n.apply(
                                            this,
                                            o || [e.responseText, t, e]
                                        );
                                    });
                                }
                        ),
                this
            );
        }),
        (S.expr.pseudos.animated = function (t) {
            return S.grep(S.timers, function (e) {
                return t === e.elem;
            }).length;
        }),
        (S.offset = {
            setOffset: function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = S.css(e, "position"),
                    c = S(e),
                    f = {};
                "static" === l && (e.style.position = "relative"),
                    (s = c.offset()),
                    (o = S.css(e, "top")),
                    (u = S.css(e, "left")),
                    ("absolute" === l || "fixed" === l) &&
                    -1 < (o + u).indexOf("auto")
                        ? ((a = (r = c.position()).top), (i = r.left))
                        : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                    m(t) && (t = t.call(e, n, S.extend({}, s))),
                    null != t.top && (f.top = t.top - s.top + a),
                    null != t.left && (f.left = t.left - s.left + i),
                    "using" in t ? t.using.call(e, f) : c.css(f);
            },
        }),
        S.fn.extend({
            offset: function (t) {
                if (arguments.length)
                    return void 0 === t
                        ? this
                        : this.each(function (e) {
                              S.offset.setOffset(this, t, e);
                          });
                var e,
                    n,
                    r = this[0];
                return r
                    ? r.getClientRects().length
                        ? ((e = r.getBoundingClientRect()),
                          (n = r.ownerDocument.defaultView),
                          {
                              top: e.top + n.pageYOffset,
                              left: e.left + n.pageXOffset,
                          })
                        : { top: 0, left: 0 }
                    : void 0;
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        r = this[0],
                        i = { top: 0, left: 0 };
                    if ("fixed" === S.css(r, "position"))
                        t = r.getBoundingClientRect();
                    else {
                        (t = this.offset()),
                            (n = r.ownerDocument),
                            (e = r.offsetParent || n.documentElement);
                        while (
                            e &&
                            (e === n.body || e === n.documentElement) &&
                            "static" === S.css(e, "position")
                        )
                            e = e.parentNode;
                        e &&
                            e !== r &&
                            1 === e.nodeType &&
                            (((i = S(e).offset()).top += S.css(
                                e,
                                "borderTopWidth",
                                !0
                            )),
                            (i.left += S.css(e, "borderLeftWidth", !0)));
                    }
                    return {
                        top: t.top - i.top - S.css(r, "marginTop", !0),
                        left: t.left - i.left - S.css(r, "marginLeft", !0),
                    };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var e = this.offsetParent;
                    while (e && "static" === S.css(e, "position"))
                        e = e.offsetParent;
                    return e || re;
                });
            },
        }),
        S.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (t, i) {
                var o = "pageYOffset" === i;
                S.fn[t] = function (e) {
                    return B(
                        this,
                        function (e, t, n) {
                            var r;
                            if (
                                (x(e)
                                    ? (r = e)
                                    : 9 === e.nodeType && (r = e.defaultView),
                                void 0 === n)
                            )
                                return r ? r[i] : e[t];
                            r
                                ? r.scrollTo(
                                      o ? r.pageXOffset : n,
                                      o ? n : r.pageYOffset
                                  )
                                : (e[t] = n);
                        },
                        t,
                        e,
                        arguments.length
                    );
                };
            }
        ),
        S.each(["top", "left"], function (e, n) {
            S.cssHooks[n] = _e(v.pixelPosition, function (e, t) {
                if (t)
                    return (
                        (t = Be(e, n)),
                        Pe.test(t) ? S(e).position()[n] + "px" : t
                    );
            });
        }),
        S.each({ Height: "height", Width: "width" }, function (a, s) {
            S.each(
                { padding: "inner" + a, content: s, "": "outer" + a },
                function (r, o) {
                    S.fn[o] = function (e, t) {
                        var n =
                                arguments.length &&
                                (r || "boolean" != typeof e),
                            i =
                                r ||
                                (!0 === e || !0 === t ? "margin" : "border");
                        return B(
                            this,
                            function (e, t, n) {
                                var r;
                                return x(e)
                                    ? 0 === o.indexOf("outer")
                                        ? e["inner" + a]
                                        : e.document.documentElement[
                                              "client" + a
                                          ]
                                    : 9 === e.nodeType
                                    ? ((r = e.documentElement),
                                      Math.max(
                                          e.body["scroll" + a],
                                          r["scroll" + a],
                                          e.body["offset" + a],
                                          r["offset" + a],
                                          r["client" + a]
                                      ))
                                    : void 0 === n
                                    ? S.css(e, t, i)
                                    : S.style(e, t, n, i);
                            },
                            s,
                            n ? e : void 0,
                            n
                        );
                    };
                }
            );
        }),
        S.each(
            [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
            ],
            function (e, t) {
                S.fn[t] = function (e) {
                    return this.on(t, e);
                };
            }
        ),
        S.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length
                    ? this.off(e, "**")
                    : this.off(t, e || "**", n);
            },
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        S.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
            ),
            function (e, n) {
                S.fn[n] = function (e, t) {
                    return 0 < arguments.length
                        ? this.on(n, null, e, t)
                        : this.trigger(n);
                };
            }
        );
    var Gt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    (S.proxy = function (e, t) {
        var n, r, i;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
            return (
                (r = s.call(arguments, 2)),
                ((i = function () {
                    return e.apply(t || this, r.concat(s.call(arguments)));
                }).guid = e.guid =
                    e.guid || S.guid++),
                i
            );
    }),
        (S.holdReady = function (e) {
            e ? S.readyWait++ : S.ready(!0);
        }),
        (S.isArray = Array.isArray),
        (S.parseJSON = JSON.parse),
        (S.nodeName = A),
        (S.isFunction = m),
        (S.isWindow = x),
        (S.camelCase = X),
        (S.type = w),
        (S.now = Date.now),
        (S.isNumeric = function (e) {
            var t = S.type(e);
            return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            );
        }),
        (S.trim = function (e) {
            return null == e ? "" : (e + "").replace(Gt, "$1");
        }),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return S;
            });
    var Yt = C.jQuery,
        Qt = C.$;
    return (
        (S.noConflict = function (e) {
            return (
                C.$ === S && (C.$ = Qt),
                e && C.jQuery === S && (C.jQuery = Yt),
                S
            );
        }),
        "undefined" == typeof e && (C.jQuery = C.$ = S),
        S
    );
});
/*! lazysizes - v5.2.0 */
!(function (a, b) {
    var c = b(a, a.document, Date);
    (a.lazySizes = c),
        "object" == typeof module && module.exports && (module.exports = c);
})("undefined" != typeof window ? window : {}, function (a, b, c) {
    "use strict";
    var d, e;
    if (
        ((function () {
            var b,
                c = {
                    lazyClass: "lazyload",
                    loadedClass: "lazyloaded",
                    loadingClass: "lazyloading",
                    preloadClass: "lazypreload",
                    errorClass: "lazyerror",
                    autosizesClass: "lazyautosizes",
                    srcAttr: "data-src",
                    srcsetAttr: "data-srcset",
                    sizesAttr: "data-sizes",
                    minSize: 40,
                    customMedia: {},
                    init: !0,
                    expFactor: 1.5,
                    hFac: 0.8,
                    loadMode: 2,
                    loadHidden: !0,
                    ricTimeout: 0,
                    throttleDelay: 125,
                };
            e = a.lazySizesConfig || a.lazysizesConfig || {};
            for (b in c) b in e || (e[b] = c[b]);
        })(),
        !b || !b.getElementsByClassName)
    )
        return { init: function () {}, cfg: e, noSupport: !0 };
    var f = b.documentElement,
        g = a.HTMLPictureElement,
        h = "addEventListener",
        i = "getAttribute",
        j = a[h].bind(a),
        k = a.setTimeout,
        l = a.requestAnimationFrame || k,
        m = a.requestIdleCallback,
        n = /^picture$/i,
        o = ["load", "error", "lazyincluded", "_lazyloaded"],
        p = {},
        q = Array.prototype.forEach,
        r = function (a, b) {
            return (
                p[b] || (p[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")),
                p[b].test(a[i]("class") || "") && p[b]
            );
        },
        s = function (a, b) {
            r(a, b) ||
                a.setAttribute("class", (a[i]("class") || "").trim() + " " + b);
        },
        t = function (a, b) {
            var c;
            (c = r(a, b)) &&
                a.setAttribute("class", (a[i]("class") || "").replace(c, " "));
        },
        u = function (a, b, c) {
            var d = c ? h : "removeEventListener";
            c && u(a, b),
                o.forEach(function (c) {
                    a[d](c, b);
                });
        },
        v = function (a, c, e, f, g) {
            var h = b.createEvent("Event");
            return (
                e || (e = {}),
                (e.instance = d),
                h.initEvent(c, !f, !g),
                (h.detail = e),
                a.dispatchEvent(h),
                h
            );
        },
        w = function (b, c) {
            var d;
            !g && (d = a.picturefill || e.pf)
                ? (c &&
                      c.src &&
                      !b[i]("srcset") &&
                      b.setAttribute("srcset", c.src),
                  d({ reevaluate: !0, elements: [b] }))
                : c && c.src && (b.src = c.src);
        },
        x = function (a, b) {
            return (getComputedStyle(a, null) || {})[b];
        },
        y = function (a, b, c) {
            for (
                c = c || a.offsetWidth;
                c < e.minSize && b && !a._lazysizesWidth;

            )
                (c = b.offsetWidth), (b = b.parentNode);
            return c;
        },
        z = (function () {
            var a,
                c,
                d = [],
                e = [],
                f = d,
                g = function () {
                    var b = f;
                    for (f = d.length ? e : d, a = !0, c = !1; b.length; )
                        b.shift()();
                    a = !1;
                },
                h = function (d, e) {
                    a && !e
                        ? d.apply(this, arguments)
                        : (f.push(d), c || ((c = !0), (b.hidden ? k : l)(g)));
                };
            return (h._lsFlush = g), h;
        })(),
        A = function (a, b) {
            return b
                ? function () {
                      z(a);
                  }
                : function () {
                      var b = this,
                          c = arguments;
                      z(function () {
                          a.apply(b, c);
                      });
                  };
        },
        B = function (a) {
            var b,
                d = 0,
                f = e.throttleDelay,
                g = e.ricTimeout,
                h = function () {
                    (b = !1), (d = c.now()), a();
                },
                i =
                    m && g > 49
                        ? function () {
                              m(h, { timeout: g }),
                                  g !== e.ricTimeout && (g = e.ricTimeout);
                          }
                        : A(function () {
                              k(h);
                          }, !0);
            return function (a) {
                var e;
                (a = !0 === a) && (g = 33),
                    b ||
                        ((b = !0),
                        (e = f - (c.now() - d)),
                        e < 0 && (e = 0),
                        a || e < 9 ? i() : k(i, e));
            };
        },
        C = function (a) {
            var b,
                d,
                e = 99,
                f = function () {
                    (b = null), a();
                },
                g = function () {
                    var a = c.now() - d;
                    a < e ? k(g, e - a) : (m || f)(f);
                };
            return function () {
                (d = c.now()), b || (b = k(g, e));
            };
        },
        D = (function () {
            var g,
                m,
                o,
                p,
                y,
                D,
                F,
                G,
                H,
                I,
                J,
                K,
                L = /^img$/i,
                M = /^iframe$/i,
                N =
                    "onscroll" in a &&
                    !/(gle|ing)bot/.test(navigator.userAgent),
                O = 0,
                P = 0,
                Q = 0,
                R = -1,
                S = function (a) {
                    Q--, (!a || Q < 0 || !a.target) && (Q = 0);
                },
                T = function (a) {
                    return (
                        null == K && (K = "hidden" == x(b.body, "visibility")),
                        K ||
                            !(
                                "hidden" == x(a.parentNode, "visibility") &&
                                "hidden" == x(a, "visibility")
                            )
                    );
                },
                U = function (a, c) {
                    var d,
                        e = a,
                        g = T(a);
                    for (
                        G -= c, J += c, H -= c, I += c;
                        g && (e = e.offsetParent) && e != b.body && e != f;

                    )
                        (g = (x(e, "opacity") || 1) > 0) &&
                            "visible" != x(e, "overflow") &&
                            ((d = e.getBoundingClientRect()),
                            (g =
                                I > d.left &&
                                H < d.right &&
                                J > d.top - 1 &&
                                G < d.bottom + 1));
                    return g;
                },
                V = function () {
                    var a,
                        c,
                        h,
                        j,
                        k,
                        l,
                        n,
                        o,
                        q,
                        r,
                        s,
                        t,
                        u = d.elements;
                    if ((p = e.loadMode) && Q < 8 && (a = u.length)) {
                        for (c = 0, R++; c < a; c++)
                            if (u[c] && !u[c]._lazyRace)
                                if (
                                    !N ||
                                    (d.prematureUnveil &&
                                        d.prematureUnveil(u[c]))
                                )
                                    ba(u[c]);
                                else if (
                                    (((o = u[c][i]("data-expand")) &&
                                        (l = 1 * o)) ||
                                        (l = P),
                                    r ||
                                        ((r =
                                            !e.expand || e.expand < 1
                                                ? f.clientHeight > 500 &&
                                                  f.clientWidth > 500
                                                    ? 500
                                                    : 370
                                                : e.expand),
                                        (d._defEx = r),
                                        (s = r * e.expFactor),
                                        (t = e.hFac),
                                        (K = null),
                                        P < s &&
                                        Q < 1 &&
                                        R > 2 &&
                                        p > 2 &&
                                        !b.hidden
                                            ? ((P = s), (R = 0))
                                            : (P =
                                                  p > 1 && R > 1 && Q < 6
                                                      ? r
                                                      : O)),
                                    q !== l &&
                                        ((D = innerWidth + l * t),
                                        (F = innerHeight + l),
                                        (n = -1 * l),
                                        (q = l)),
                                    (h = u[c].getBoundingClientRect()),
                                    (J = h.bottom) >= n &&
                                        (G = h.top) <= F &&
                                        (I = h.right) >= n * t &&
                                        (H = h.left) <= D &&
                                        (J || I || H || G) &&
                                        (e.loadHidden || T(u[c])) &&
                                        ((m &&
                                            Q < 3 &&
                                            !o &&
                                            (p < 3 || R < 4)) ||
                                            U(u[c], l)))
                                ) {
                                    if ((ba(u[c]), (k = !0), Q > 9)) break;
                                } else
                                    !k &&
                                        m &&
                                        !j &&
                                        Q < 4 &&
                                        R < 4 &&
                                        p > 2 &&
                                        (g[0] || e.preloadAfterLoad) &&
                                        (g[0] ||
                                            (!o &&
                                                (J ||
                                                    I ||
                                                    H ||
                                                    G ||
                                                    "auto" !=
                                                        u[c][i](
                                                            e.sizesAttr
                                                        )))) &&
                                        (j = g[0] || u[c]);
                        j && !k && ba(j);
                    }
                },
                W = B(V),
                X = function (a) {
                    var b = a.target;
                    if (b._lazyCache) return void delete b._lazyCache;
                    S(a),
                        s(b, e.loadedClass),
                        t(b, e.loadingClass),
                        u(b, Z),
                        v(b, "lazyloaded");
                },
                Y = A(X),
                Z = function (a) {
                    Y({ target: a.target });
                },
                $ = function (a, b) {
                    try {
                        a.contentWindow.location.replace(b);
                    } catch (c) {
                        a.src = b;
                    }
                },
                _ = function (a) {
                    var b,
                        c = a[i](e.srcsetAttr);
                    (b = e.customMedia[a[i]("data-media") || a[i]("media")]) &&
                        a.setAttribute("media", b),
                        c && a.setAttribute("srcset", c);
                },
                aa = A(function (a, b, c, d, f) {
                    var g, h, j, l, m, p;
                    (m = v(a, "lazybeforeunveil", b)).defaultPrevented ||
                        (d &&
                            (c
                                ? s(a, e.autosizesClass)
                                : a.setAttribute("sizes", d)),
                        (h = a[i](e.srcsetAttr)),
                        (g = a[i](e.srcAttr)),
                        f &&
                            ((j = a.parentNode),
                            (l = j && n.test(j.nodeName || ""))),
                        (p = b.firesLoad || ("src" in a && (h || g || l))),
                        (m = { target: a }),
                        s(a, e.loadingClass),
                        p && (clearTimeout(o), (o = k(S, 2500)), u(a, Z, !0)),
                        l && q.call(j.getElementsByTagName("source"), _),
                        h
                            ? a.setAttribute("srcset", h)
                            : g &&
                              !l &&
                              (M.test(a.nodeName) ? $(a, g) : (a.src = g)),
                        f && (h || l) && w(a, { src: g })),
                        a._lazyRace && delete a._lazyRace,
                        t(a, e.lazyClass),
                        z(function () {
                            var b = a.complete && a.naturalWidth > 1;
                            (p && !b) ||
                                (b && s(a, "ls-is-cached"),
                                X(m),
                                (a._lazyCache = !0),
                                k(function () {
                                    "_lazyCache" in a && delete a._lazyCache;
                                }, 9)),
                                "lazy" == a.loading && Q--;
                        }, !0);
                }),
                ba = function (a) {
                    if (!a._lazyRace) {
                        var b,
                            c = L.test(a.nodeName),
                            d = c && (a[i](e.sizesAttr) || a[i]("sizes")),
                            f = "auto" == d;
                        ((!f && m) ||
                            !c ||
                            (!a[i]("src") && !a.srcset) ||
                            a.complete ||
                            r(a, e.errorClass) ||
                            !r(a, e.lazyClass)) &&
                            ((b = v(a, "lazyunveilread").detail),
                            f && E.updateElem(a, !0, a.offsetWidth),
                            (a._lazyRace = !0),
                            Q++,
                            aa(a, b, f, d, c));
                    }
                },
                ca = C(function () {
                    (e.loadMode = 3), W();
                }),
                da = function () {
                    3 == e.loadMode && (e.loadMode = 2), ca();
                },
                ea = function () {
                    if (!m) {
                        if (c.now() - y < 999) return void k(ea, 999);
                        (m = !0), (e.loadMode = 3), W(), j("scroll", da, !0);
                    }
                };
            return {
                _: function () {
                    (y = c.now()),
                        (d.elements = b.getElementsByClassName(e.lazyClass)),
                        (g = b.getElementsByClassName(
                            e.lazyClass + " " + e.preloadClass
                        )),
                        j("scroll", W, !0),
                        j("resize", W, !0),
                        j("pageshow", function (a) {
                            if (a.persisted) {
                                var c = b.querySelectorAll(
                                    "." + e.loadingClass
                                );
                                c.length &&
                                    c.forEach &&
                                    l(function () {
                                        c.forEach(function (a) {
                                            a.complete && ba(a);
                                        });
                                    });
                            }
                        }),
                        a.MutationObserver
                            ? new MutationObserver(W).observe(f, {
                                  childList: !0,
                                  subtree: !0,
                                  attributes: !0,
                              })
                            : (f[h]("DOMNodeInserted", W, !0),
                              f[h]("DOMAttrModified", W, !0),
                              setInterval(W, 999)),
                        j("hashchange", W, !0),
                        [
                            "focus",
                            "mouseover",
                            "click",
                            "load",
                            "transitionend",
                            "animationend",
                        ].forEach(function (a) {
                            b[h](a, W, !0);
                        }),
                        /d$|^c/.test(b.readyState)
                            ? ea()
                            : (j("load", ea),
                              b[h]("DOMContentLoaded", W),
                              k(ea, 2e4)),
                        d.elements.length ? (V(), z._lsFlush()) : W();
                },
                checkElems: W,
                unveil: ba,
                _aLSL: da,
            };
        })(),
        E = (function () {
            var a,
                c = A(function (a, b, c, d) {
                    var e, f, g;
                    if (
                        ((a._lazysizesWidth = d),
                        (d += "px"),
                        a.setAttribute("sizes", d),
                        n.test(b.nodeName || ""))
                    )
                        for (
                            e = b.getElementsByTagName("source"),
                                f = 0,
                                g = e.length;
                            f < g;
                            f++
                        )
                            e[f].setAttribute("sizes", d);
                    c.detail.dataAttr || w(a, c.detail);
                }),
                d = function (a, b, d) {
                    var e,
                        f = a.parentNode;
                    f &&
                        ((d = y(a, f, d)),
                        (e = v(a, "lazybeforesizes", {
                            width: d,
                            dataAttr: !!b,
                        })),
                        e.defaultPrevented ||
                            ((d = e.detail.width) &&
                                d !== a._lazysizesWidth &&
                                c(a, f, e, d)));
                },
                f = function () {
                    var b,
                        c = a.length;
                    if (c) for (b = 0; b < c; b++) d(a[b]);
                },
                g = C(f);
            return {
                _: function () {
                    (a = b.getElementsByClassName(e.autosizesClass)),
                        j("resize", g);
                },
                checkElems: g,
                updateElem: d,
            };
        })(),
        F = function () {
            !F.i && b.getElementsByClassName && ((F.i = !0), E._(), D._());
        };
    return (
        k(function () {
            e.init && F();
        }),
        (d = {
            cfg: e,
            autoSizer: E,
            loader: D,
            init: F,
            uP: w,
            aC: s,
            rC: t,
            hC: r,
            fire: v,
            gW: y,
            rAF: z,
        })
    );
});
/* Lazybackground */
!(function (e, t) {
    var a = function () {
        t(e.lazySizes), e.removeEventListener("lazyunveilread", a, !0);
    };
    (t = t.bind(null, e, e.document)),
        "object" == typeof module && module.exports
            ? t(require("lazysizes"))
            : "function" == typeof define && define.amd
            ? define(["lazysizes"], t)
            : e.lazySizes
            ? a()
            : e.addEventListener("lazyunveilread", a, !0);
})(window, function (e, t, a) {
    "use strict";
    var r,
        n,
        i = {};
    function l(e, a, r) {
        if (!i[e]) {
            var n = t.createElement(a ? "link" : "script"),
                l = t.getElementsByTagName("script")[0];
            a
                ? ((n.rel = "stylesheet"), (n.href = e))
                : ((n.onload = function () {
                      (n.onerror = null), (n.onload = null), r();
                  }),
                  (n.onerror = n.onload),
                  (n.src = e)),
                (i[e] = !0),
                (i[n.src || n.href] = !0),
                l.parentNode.insertBefore(n, l);
        }
    }
    t.addEventListener &&
        ((n = /\(|\)|\s|'/),
        (r = function (e, a) {
            var r = t.createElement("img");
            (r.onload = function () {
                (r.onload = null), (r.onerror = null), (r = null), a();
            }),
                (r.onerror = r.onload),
                (r.src = e),
                r && r.complete && r.onload && r.onload();
        }),
        addEventListener(
            "lazybeforeunveil",
            function (e) {
                if (e.detail.instance == a && !e.defaultPrevented) {
                    var t,
                        i,
                        o,
                        d,
                        u = e.target;
                    if (
                        ("none" == u.preload &&
                            (u.preload =
                                u.getAttribute("data-preload") || "auto"),
                        null != u.getAttribute("data-autoplay"))
                    ) {
                        if (u.getAttribute("data-expand") && !u.autoplay)
                            try {
                                u.play();
                            } catch (s) {}
                        else
                            requestAnimationFrame(function () {
                                u.setAttribute("data-expand", "-10"),
                                    a.aC(u, a.cfg.lazyClass);
                            });
                    }
                    (t = u.getAttribute("data-link")) && l(t, !0),
                        (t = u.getAttribute("data-script")) &&
                            ((e.detail.firesLoad = !0),
                            l(
                                t,
                                null,
                                (i = function () {
                                    (e.detail.firesLoad = !1),
                                        a.fire(u, "_lazyloaded", {}, !0, !0);
                                })
                            )),
                        (t = u.getAttribute("data-require")) &&
                            (a.cfg.requireJs ? a.cfg.requireJs([t]) : l(t)),
                        (o = u.getAttribute("data-bg")) &&
                            ((e.detail.firesLoad = !0),
                            (i = function () {
                                (u.style.backgroundImage =
                                    "url(" +
                                    (n.test(o) ? JSON.stringify(o) : o) +
                                    ")"),
                                    (e.detail.firesLoad = !1),
                                    a.fire(u, "_lazyloaded", {}, !0, !0);
                            }),
                            r(o, i)),
                        (d = u.getAttribute("data-poster")) &&
                            ((e.detail.firesLoad = !0),
                            (i = function () {
                                (u.poster = d),
                                    (e.detail.firesLoad = !1),
                                    a.fire(u, "_lazyloaded", {}, !0, !0);
                            }),
                            r(d, i));
                }
            },
            !1
        ));
});
/* Slick */
!(function (i) {
    "use strict";
    "function" == typeof define && define.amd
        ? define(["jquery"], i)
        : "undefined" != typeof exports
        ? (module.exports = i(require("jquery")))
        : i(jQuery);
})(function (i) {
    "use strict";
    var e = window.Slick || {};
    ((e = (function () {
        var e = 0;
        return function (t, o) {
            var s,
                n = this;
            (n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow:
                    '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow:
                    '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, t) {
                    return i('<button type="button" />').text(t + 1);
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: 0.35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3,
            }),
                (n.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1,
                }),
                i.extend(n, n.initials),
                (n.activeBreakpoint = null),
                (n.animType = null),
                (n.animProp = null),
                (n.breakpoints = []),
                (n.breakpointSettings = []),
                (n.cssTransitions = !1),
                (n.focussed = !1),
                (n.interrupted = !1),
                (n.hidden = "hidden"),
                (n.paused = !0),
                (n.positionProp = null),
                (n.respondTo = null),
                (n.rowCount = 1),
                (n.shouldClick = !0),
                (n.$slider = i(t)),
                (n.$slidesCache = null),
                (n.transformType = null),
                (n.transitionType = null),
                (n.visibilityChange = "visibilitychange"),
                (n.windowWidth = 0),
                (n.windowTimer = null),
                (s = i(t).data("slick") || {}),
                (n.options = i.extend({}, n.defaults, o, s)),
                (n.currentSlide = n.options.initialSlide),
                (n.originalSettings = n.options),
                void 0 !== document.mozHidden
                    ? ((n.hidden = "mozHidden"),
                      (n.visibilityChange = "mozvisibilitychange"))
                    : void 0 !== document.webkitHidden &&
                      ((n.hidden = "webkitHidden"),
                      (n.visibilityChange = "webkitvisibilitychange")),
                (n.autoPlay = i.proxy(n.autoPlay, n)),
                (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
                (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
                (n.changeSlide = i.proxy(n.changeSlide, n)),
                (n.clickHandler = i.proxy(n.clickHandler, n)),
                (n.selectHandler = i.proxy(n.selectHandler, n)),
                (n.setPosition = i.proxy(n.setPosition, n)),
                (n.swipeHandler = i.proxy(n.swipeHandler, n)),
                (n.dragHandler = i.proxy(n.dragHandler, n)),
                (n.keyHandler = i.proxy(n.keyHandler, n)),
                (n.instanceUid = e++),
                (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                n.registerBreakpoints(),
                n.init(!0);
        };
    })()).prototype.activateADA = function () {
        this.$slideTrack
            .find(".slick-active")
            .attr({ "aria-hidden": "false" })
            .find("a, input, button, select")
            .attr({ tabindex: "0" });
    }),
        (e.prototype.addSlide = e.prototype.slickAdd =
            function (e, t, o) {
                var s = this;
                if ("boolean" == typeof t) (o = t), (t = null);
                else if (t < 0 || t >= s.slideCount) return !1;
                s.unload(),
                    "number" == typeof t
                        ? 0 === t && 0 === s.$slides.length
                            ? i(e).appendTo(s.$slideTrack)
                            : o
                            ? i(e).insertBefore(s.$slides.eq(t))
                            : i(e).insertAfter(s.$slides.eq(t))
                        : !0 === o
                        ? i(e).prependTo(s.$slideTrack)
                        : i(e).appendTo(s.$slideTrack),
                    (s.$slides = s.$slideTrack.children(this.options.slide)),
                    s.$slideTrack.children(this.options.slide).detach(),
                    s.$slideTrack.append(s.$slides),
                    s.$slides.each(function (e, t) {
                        i(t).attr("data-slick-index", e);
                    }),
                    (s.$slidesCache = s.$slides),
                    s.reinit();
            }),
        (e.prototype.animateHeight = function () {
            var i = this;
            if (
                1 === i.options.slidesToShow &&
                !0 === i.options.adaptiveHeight &&
                !1 === i.options.vertical
            ) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.animate({ height: e }, i.options.speed);
            }
        }),
        (e.prototype.animateSlide = function (e, t) {
            var o = {},
                s = this;
            s.animateHeight(),
                !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
                !1 === s.transformsEnabled
                    ? !1 === s.options.vertical
                        ? s.$slideTrack.animate(
                              { left: e },
                              s.options.speed,
                              s.options.easing,
                              t
                          )
                        : s.$slideTrack.animate(
                              { top: e },
                              s.options.speed,
                              s.options.easing,
                              t
                          )
                    : !1 === s.cssTransitions
                    ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
                      i({ animStart: s.currentLeft }).animate(
                          { animStart: e },
                          {
                              duration: s.options.speed,
                              easing: s.options.easing,
                              step: function (i) {
                                  (i = Math.ceil(i)),
                                      !1 === s.options.vertical
                                          ? ((o[s.animType] =
                                                "translate(" + i + "px, 0px)"),
                                            s.$slideTrack.css(o))
                                          : ((o[s.animType] =
                                                "translate(0px," + i + "px)"),
                                            s.$slideTrack.css(o));
                              },
                              complete: function () {
                                  t && t.call();
                              },
                          }
                      ))
                    : (s.applyTransition(),
                      (e = Math.ceil(e)),
                      !1 === s.options.vertical
                          ? (o[s.animType] =
                                "translate3d(" + e + "px, 0px, 0px)")
                          : (o[s.animType] =
                                "translate3d(0px," + e + "px, 0px)"),
                      s.$slideTrack.css(o),
                      t &&
                          setTimeout(function () {
                              s.disableTransition(), t.call();
                          }, s.options.speed));
        }),
        (e.prototype.getNavTarget = function () {
            var e = this,
                t = e.options.asNavFor;
            return t && null !== t && (t = i(t).not(e.$slider)), t;
        }),
        (e.prototype.asNavFor = function (e) {
            var t = this.getNavTarget();
            null !== t &&
                "object" == typeof t &&
                t.each(function () {
                    var t = i(this).slick("getSlick");
                    t.unslicked || t.slideHandler(e, !0);
                });
        }),
        (e.prototype.applyTransition = function (i) {
            var e = this,
                t = {};
            !1 === e.options.fade
                ? (t[e.transitionType] =
                      e.transformType +
                      " " +
                      e.options.speed +
                      "ms " +
                      e.options.cssEase)
                : (t[e.transitionType] =
                      "opacity " + e.options.speed + "ms " + e.options.cssEase),
                !1 === e.options.fade
                    ? e.$slideTrack.css(t)
                    : e.$slides.eq(i).css(t);
        }),
        (e.prototype.autoPlay = function () {
            var i = this;
            i.autoPlayClear(),
                i.slideCount > i.options.slidesToShow &&
                    (i.autoPlayTimer = setInterval(
                        i.autoPlayIterator,
                        i.options.autoplaySpeed
                    ));
        }),
        (e.prototype.autoPlayClear = function () {
            var i = this;
            i.autoPlayTimer && clearInterval(i.autoPlayTimer);
        }),
        (e.prototype.autoPlayIterator = function () {
            var i = this,
                e = i.currentSlide + i.options.slidesToScroll;
            i.paused ||
                i.interrupted ||
                i.focussed ||
                (!1 === i.options.infinite &&
                    (1 === i.direction &&
                    i.currentSlide + 1 === i.slideCount - 1
                        ? (i.direction = 0)
                        : 0 === i.direction &&
                          ((e = i.currentSlide - i.options.slidesToScroll),
                          i.currentSlide - 1 == 0 && (i.direction = 1))),
                i.slideHandler(e));
        }),
        (e.prototype.buildArrows = function () {
            var e = this;
            !0 === e.options.arrows &&
                ((e.$prevArrow = i(e.options.prevArrow).addClass(
                    "slick-arrow"
                )),
                (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
                e.slideCount > e.options.slidesToShow
                    ? (e.$prevArrow
                          .removeClass("slick-hidden")
                          .removeAttr("aria-hidden tabindex"),
                      e.$nextArrow
                          .removeClass("slick-hidden")
                          .removeAttr("aria-hidden tabindex"),
                      e.htmlExpr.test(e.options.prevArrow) &&
                          e.$prevArrow.prependTo(e.options.appendArrows),
                      e.htmlExpr.test(e.options.nextArrow) &&
                          e.$nextArrow.appendTo(e.options.appendArrows),
                      !0 !== e.options.infinite &&
                          e.$prevArrow
                              .addClass("slick-disabled")
                              .attr("aria-disabled", "true"))
                    : e.$prevArrow
                          .add(e.$nextArrow)
                          .addClass("slick-hidden")
                          .attr({ "aria-disabled": "true", tabindex: "-1" }));
        }),
        (e.prototype.buildDots = function () {
            var e,
                t,
                o = this;
            if (!0 === o.options.dots) {
                for (
                    o.$slider.addClass("slick-dotted"),
                        t = i("<ul />").addClass(o.options.dotsClass),
                        e = 0;
                    e <= o.getDotCount();
                    e += 1
                )
                    t.append(
                        i("<li />").append(
                            o.options.customPaging.call(this, o, e)
                        )
                    );
                (o.$dots = t.appendTo(o.options.appendDots)),
                    o.$dots.find("li").first().addClass("slick-active");
            }
        }),
        (e.prototype.buildOut = function () {
            var e = this;
            (e.$slides = e.$slider
                .children(e.options.slide + ":not(.slick-cloned)")
                .addClass("slick-slide")),
                (e.slideCount = e.$slides.length),
                e.$slides.each(function (e, t) {
                    i(t)
                        .attr("data-slick-index", e)
                        .data("originalStyling", i(t).attr("style") || "");
                }),
                e.$slider.addClass("slick-slider"),
                (e.$slideTrack =
                    0 === e.slideCount
                        ? i('<div class="slick-track"/>').appendTo(e.$slider)
                        : e.$slides
                              .wrapAll('<div class="slick-track"/>')
                              .parent()),
                (e.$list = e.$slideTrack
                    .wrap('<div class="slick-list"/>')
                    .parent()),
                e.$slideTrack.css("opacity", 0),
                (!0 !== e.options.centerMode &&
                    !0 !== e.options.swipeToSlide) ||
                    (e.options.slidesToScroll = 1),
                i("img[data-lazy]", e.$slider)
                    .not("[src]")
                    .addClass("slick-loading"),
                e.setupInfinite(),
                e.buildArrows(),
                e.buildDots(),
                e.updateDots(),
                e.setSlideClasses(
                    "number" == typeof e.currentSlide ? e.currentSlide : 0
                ),
                !0 === e.options.draggable && e.$list.addClass("draggable");
        }),
        (e.prototype.buildRows = function () {
            var i,
                e,
                t,
                o,
                s,
                n,
                r,
                l = this;
            if (
                ((o = document.createDocumentFragment()),
                (n = l.$slider.children()),
                l.options.rows > 1)
            ) {
                for (
                    r = l.options.slidesPerRow * l.options.rows,
                        s = Math.ceil(n.length / r),
                        i = 0;
                    i < s;
                    i++
                ) {
                    var d = document.createElement("div");
                    for (e = 0; e < l.options.rows; e++) {
                        var a = document.createElement("div");
                        for (t = 0; t < l.options.slidesPerRow; t++) {
                            var c = i * r + (e * l.options.slidesPerRow + t);
                            n.get(c) && a.appendChild(n.get(c));
                        }
                        d.appendChild(a);
                    }
                    o.appendChild(d);
                }
                l.$slider.empty().append(o),
                    l.$slider
                        .children()
                        .children()
                        .children()
                        .css({
                            width: 100 / l.options.slidesPerRow + "%",
                            display: "inline-block",
                        });
            }
        }),
        (e.prototype.checkResponsive = function (e, t) {
            var o,
                s,
                n,
                r = this,
                l = !1,
                d = r.$slider.width(),
                a = window.innerWidth || i(window).width();
            if (
                ("window" === r.respondTo
                    ? (n = a)
                    : "slider" === r.respondTo
                    ? (n = d)
                    : "min" === r.respondTo && (n = Math.min(a, d)),
                r.options.responsive &&
                    r.options.responsive.length &&
                    null !== r.options.responsive)
            ) {
                s = null;
                for (o in r.breakpoints)
                    r.breakpoints.hasOwnProperty(o) &&
                        (!1 === r.originalSettings.mobileFirst
                            ? n < r.breakpoints[o] && (s = r.breakpoints[o])
                            : n > r.breakpoints[o] && (s = r.breakpoints[o]));
                null !== s
                    ? null !== r.activeBreakpoint
                        ? (s !== r.activeBreakpoint || t) &&
                          ((r.activeBreakpoint = s),
                          "unslick" === r.breakpointSettings[s]
                              ? r.unslick(s)
                              : ((r.options = i.extend(
                                    {},
                                    r.originalSettings,
                                    r.breakpointSettings[s]
                                )),
                                !0 === e &&
                                    (r.currentSlide = r.options.initialSlide),
                                r.refresh(e)),
                          (l = s))
                        : ((r.activeBreakpoint = s),
                          "unslick" === r.breakpointSettings[s]
                              ? r.unslick(s)
                              : ((r.options = i.extend(
                                    {},
                                    r.originalSettings,
                                    r.breakpointSettings[s]
                                )),
                                !0 === e &&
                                    (r.currentSlide = r.options.initialSlide),
                                r.refresh(e)),
                          (l = s))
                    : null !== r.activeBreakpoint &&
                      ((r.activeBreakpoint = null),
                      (r.options = r.originalSettings),
                      !0 === e && (r.currentSlide = r.options.initialSlide),
                      r.refresh(e),
                      (l = s)),
                    e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
            }
        }),
        (e.prototype.changeSlide = function (e, t) {
            var o,
                s,
                n,
                r = this,
                l = i(e.currentTarget);
            switch (
                (l.is("a") && e.preventDefault(),
                l.is("li") || (l = l.closest("li")),
                (n = r.slideCount % r.options.slidesToScroll != 0),
                (o = n
                    ? 0
                    : (r.slideCount - r.currentSlide) %
                      r.options.slidesToScroll),
                e.data.message)
            ) {
                case "previous":
                    (s =
                        0 === o
                            ? r.options.slidesToScroll
                            : r.options.slidesToShow - o),
                        r.slideCount > r.options.slidesToShow &&
                            r.slideHandler(r.currentSlide - s, !1, t);
                    break;
                case "next":
                    (s = 0 === o ? r.options.slidesToScroll : o),
                        r.slideCount > r.options.slidesToShow &&
                            r.slideHandler(r.currentSlide + s, !1, t);
                    break;
                case "index":
                    var d =
                        0 === e.data.index
                            ? 0
                            : e.data.index ||
                              l.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(d), !1, t),
                        l.children().trigger("focus");
                    break;
                default:
                    return;
            }
        }),
        (e.prototype.checkNavigable = function (i) {
            var e, t;
            if (
                ((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1])
            )
                i = e[e.length - 1];
            else
                for (var o in e) {
                    if (i < e[o]) {
                        i = t;
                        break;
                    }
                    t = e[o];
                }
            return i;
        }),
        (e.prototype.cleanUpEvents = function () {
            var e = this;
            e.options.dots &&
                null !== e.$dots &&
                (i("li", e.$dots)
                    .off("click.slick", e.changeSlide)
                    .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
                    .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
                !0 === e.options.accessibility &&
                    e.$dots.off("keydown.slick", e.keyHandler)),
                e.$slider.off("focus.slick blur.slick"),
                !0 === e.options.arrows &&
                    e.slideCount > e.options.slidesToShow &&
                    (e.$prevArrow &&
                        e.$prevArrow.off("click.slick", e.changeSlide),
                    e.$nextArrow &&
                        e.$nextArrow.off("click.slick", e.changeSlide),
                    !0 === e.options.accessibility &&
                        (e.$prevArrow &&
                            e.$prevArrow.off("keydown.slick", e.keyHandler),
                        e.$nextArrow &&
                            e.$nextArrow.off("keydown.slick", e.keyHandler))),
                e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
                e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
                e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
                e.$list.off(
                    "touchcancel.slick mouseleave.slick",
                    e.swipeHandler
                ),
                e.$list.off("click.slick", e.clickHandler),
                i(document).off(e.visibilityChange, e.visibility),
                e.cleanUpSlideEvents(),
                !0 === e.options.accessibility &&
                    e.$list.off("keydown.slick", e.keyHandler),
                !0 === e.options.focusOnSelect &&
                    i(e.$slideTrack)
                        .children()
                        .off("click.slick", e.selectHandler),
                i(window).off(
                    "orientationchange.slick.slick-" + e.instanceUid,
                    e.orientationChange
                ),
                i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
                i("[draggable!=true]", e.$slideTrack).off(
                    "dragstart",
                    e.preventDefault
                ),
                i(window).off(
                    "load.slick.slick-" + e.instanceUid,
                    e.setPosition
                );
        }),
        (e.prototype.cleanUpSlideEvents = function () {
            var e = this;
            e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
                e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
        }),
        (e.prototype.cleanUpRows = function () {
            var i,
                e = this;
            e.options.rows > 1 &&
                ((i = e.$slides.children().children()).removeAttr("style"),
                e.$slider.empty().append(i));
        }),
        (e.prototype.clickHandler = function (i) {
            !1 === this.shouldClick &&
                (i.stopImmediatePropagation(),
                i.stopPropagation(),
                i.preventDefault());
        }),
        (e.prototype.destroy = function (e) {
            var t = this;
            t.autoPlayClear(),
                (t.touchObject = {}),
                t.cleanUpEvents(),
                i(".slick-cloned", t.$slider).detach(),
                t.$dots && t.$dots.remove(),
                t.$prevArrow &&
                    t.$prevArrow.length &&
                    (t.$prevArrow
                        .removeClass("slick-disabled slick-arrow slick-hidden")
                        .removeAttr("aria-hidden aria-disabled tabindex")
                        .css("display", ""),
                    t.htmlExpr.test(t.options.prevArrow) &&
                        t.$prevArrow.remove()),
                t.$nextArrow &&
                    t.$nextArrow.length &&
                    (t.$nextArrow
                        .removeClass("slick-disabled slick-arrow slick-hidden")
                        .removeAttr("aria-hidden aria-disabled tabindex")
                        .css("display", ""),
                    t.htmlExpr.test(t.options.nextArrow) &&
                        t.$nextArrow.remove()),
                t.$slides &&
                    (t.$slides
                        .removeClass(
                            "slick-slide slick-active slick-center slick-visible slick-current"
                        )
                        .removeAttr("aria-hidden")
                        .removeAttr("data-slick-index")
                        .each(function () {
                            i(this).attr(
                                "style",
                                i(this).data("originalStyling")
                            );
                        }),
                    t.$slideTrack.children(this.options.slide).detach(),
                    t.$slideTrack.detach(),
                    t.$list.detach(),
                    t.$slider.append(t.$slides)),
                t.cleanUpRows(),
                t.$slider.removeClass("slick-slider"),
                t.$slider.removeClass("slick-initialized"),
                t.$slider.removeClass("slick-dotted"),
                (t.unslicked = !0),
                e || t.$slider.trigger("destroy", [t]);
        }),
        (e.prototype.disableTransition = function (i) {
            var e = this,
                t = {};
            (t[e.transitionType] = ""),
                !1 === e.options.fade
                    ? e.$slideTrack.css(t)
                    : e.$slides.eq(i).css(t);
        }),
        (e.prototype.fadeSlide = function (i, e) {
            var t = this;
            !1 === t.cssTransitions
                ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
                  t.$slides
                      .eq(i)
                      .animate(
                          { opacity: 1 },
                          t.options.speed,
                          t.options.easing,
                          e
                      ))
                : (t.applyTransition(i),
                  t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
                  e &&
                      setTimeout(function () {
                          t.disableTransition(i), e.call();
                      }, t.options.speed));
        }),
        (e.prototype.fadeSlideOut = function (i) {
            var e = this;
            !1 === e.cssTransitions
                ? e.$slides
                      .eq(i)
                      .animate(
                          { opacity: 0, zIndex: e.options.zIndex - 2 },
                          e.options.speed,
                          e.options.easing
                      )
                : (e.applyTransition(i),
                  e.$slides
                      .eq(i)
                      .css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
        }),
        (e.prototype.filterSlides = e.prototype.slickFilter =
            function (i) {
                var e = this;
                null !== i &&
                    ((e.$slidesCache = e.$slides),
                    e.unload(),
                    e.$slideTrack.children(this.options.slide).detach(),
                    e.$slidesCache.filter(i).appendTo(e.$slideTrack),
                    e.reinit());
            }),
        (e.prototype.focusHandler = function () {
            var e = this;
            e.$slider
                .off("focus.slick blur.slick")
                .on("focus.slick blur.slick", "*", function (t) {
                    t.stopImmediatePropagation();
                    var o = i(this);
                    setTimeout(function () {
                        e.options.pauseOnFocus &&
                            ((e.focussed = o.is(":focus")), e.autoPlay());
                    }, 0);
                });
        }),
        (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
            function () {
                return this.currentSlide;
            }),
        (e.prototype.getDotCount = function () {
            var i = this,
                e = 0,
                t = 0,
                o = 0;
            if (!0 === i.options.infinite)
                if (i.slideCount <= i.options.slidesToShow) ++o;
                else
                    for (; e < i.slideCount; )
                        ++o,
                            (e = t + i.options.slidesToScroll),
                            (t +=
                                i.options.slidesToScroll <=
                                i.options.slidesToShow
                                    ? i.options.slidesToScroll
                                    : i.options.slidesToShow);
            else if (!0 === i.options.centerMode) o = i.slideCount;
            else if (i.options.asNavFor)
                for (; e < i.slideCount; )
                    ++o,
                        (e = t + i.options.slidesToScroll),
                        (t +=
                            i.options.slidesToScroll <= i.options.slidesToShow
                                ? i.options.slidesToScroll
                                : i.options.slidesToShow);
            else
                o =
                    1 +
                    Math.ceil(
                        (i.slideCount - i.options.slidesToShow) /
                            i.options.slidesToScroll
                    );
            return o - 1;
        }),
        (e.prototype.getLeft = function (i) {
            var e,
                t,
                o,
                s,
                n = this,
                r = 0;
            return (
                (n.slideOffset = 0),
                (t = n.$slides.first().outerHeight(!0)),
                !0 === n.options.infinite
                    ? (n.slideCount > n.options.slidesToShow &&
                          ((n.slideOffset =
                              n.slideWidth * n.options.slidesToShow * -1),
                          (s = -1),
                          !0 === n.options.vertical &&
                              !0 === n.options.centerMode &&
                              (2 === n.options.slidesToShow
                                  ? (s = -1.5)
                                  : 1 === n.options.slidesToShow && (s = -2)),
                          (r = t * n.options.slidesToShow * s)),
                      n.slideCount % n.options.slidesToScroll != 0 &&
                          i + n.options.slidesToScroll > n.slideCount &&
                          n.slideCount > n.options.slidesToShow &&
                          (i > n.slideCount
                              ? ((n.slideOffset =
                                    (n.options.slidesToShow -
                                        (i - n.slideCount)) *
                                    n.slideWidth *
                                    -1),
                                (r =
                                    (n.options.slidesToShow -
                                        (i - n.slideCount)) *
                                    t *
                                    -1))
                              : ((n.slideOffset =
                                    (n.slideCount % n.options.slidesToScroll) *
                                    n.slideWidth *
                                    -1),
                                (r =
                                    (n.slideCount % n.options.slidesToScroll) *
                                    t *
                                    -1))))
                    : i + n.options.slidesToShow > n.slideCount &&
                      ((n.slideOffset =
                          (i + n.options.slidesToShow - n.slideCount) *
                          n.slideWidth),
                      (r = (i + n.options.slidesToShow - n.slideCount) * t)),
                n.slideCount <= n.options.slidesToShow &&
                    ((n.slideOffset = 0), (r = 0)),
                !0 === n.options.centerMode &&
                n.slideCount <= n.options.slidesToShow
                    ? (n.slideOffset =
                          (n.slideWidth * Math.floor(n.options.slidesToShow)) /
                              2 -
                          (n.slideWidth * n.slideCount) / 2)
                    : !0 === n.options.centerMode && !0 === n.options.infinite
                    ? (n.slideOffset +=
                          n.slideWidth *
                              Math.floor(n.options.slidesToShow / 2) -
                          n.slideWidth)
                    : !0 === n.options.centerMode &&
                      ((n.slideOffset = 0),
                      (n.slideOffset +=
                          n.slideWidth *
                          Math.floor(n.options.slidesToShow / 2))),
                (e =
                    !1 === n.options.vertical
                        ? i * n.slideWidth * -1 + n.slideOffset
                        : i * t * -1 + r),
                !0 === n.options.variableWidth &&
                    ((o =
                        n.slideCount <= n.options.slidesToShow ||
                        !1 === n.options.infinite
                            ? n.$slideTrack.children(".slick-slide").eq(i)
                            : n.$slideTrack
                                  .children(".slick-slide")
                                  .eq(i + n.options.slidesToShow)),
                    (e =
                        !0 === n.options.rtl
                            ? o[0]
                                ? -1 *
                                  (n.$slideTrack.width() -
                                      o[0].offsetLeft -
                                      o.width())
                                : 0
                            : o[0]
                            ? -1 * o[0].offsetLeft
                            : 0),
                    !0 === n.options.centerMode &&
                        ((o =
                            n.slideCount <= n.options.slidesToShow ||
                            !1 === n.options.infinite
                                ? n.$slideTrack.children(".slick-slide").eq(i)
                                : n.$slideTrack
                                      .children(".slick-slide")
                                      .eq(i + n.options.slidesToShow + 1)),
                        (e =
                            !0 === n.options.rtl
                                ? o[0]
                                    ? -1 *
                                      (n.$slideTrack.width() -
                                          o[0].offsetLeft -
                                          o.width())
                                    : 0
                                : o[0]
                                ? -1 * o[0].offsetLeft
                                : 0),
                        (e += (n.$list.width() - o.outerWidth()) / 2))),
                e
            );
        }),
        (e.prototype.getOption = e.prototype.slickGetOption =
            function (i) {
                return this.options[i];
            }),
        (e.prototype.getNavigableIndexes = function () {
            var i,
                e = this,
                t = 0,
                o = 0,
                s = [];
            for (
                !1 === e.options.infinite
                    ? (i = e.slideCount)
                    : ((t = -1 * e.options.slidesToScroll),
                      (o = -1 * e.options.slidesToScroll),
                      (i = 2 * e.slideCount));
                t < i;

            )
                s.push(t),
                    (t = o + e.options.slidesToScroll),
                    (o +=
                        e.options.slidesToScroll <= e.options.slidesToShow
                            ? e.options.slidesToScroll
                            : e.options.slidesToShow);
            return s;
        }),
        (e.prototype.getSlick = function () {
            return this;
        }),
        (e.prototype.getSlideCount = function () {
            var e,
                t,
                o = this;
            return (
                (t =
                    !0 === o.options.centerMode
                        ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
                        : 0),
                !0 === o.options.swipeToSlide
                    ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
                          if (
                              n.offsetLeft - t + i(n).outerWidth() / 2 >
                              -1 * o.swipeLeft
                          )
                              return (e = n), !1;
                      }),
                      Math.abs(
                          i(e).attr("data-slick-index") - o.currentSlide
                      ) || 1)
                    : o.options.slidesToScroll
            );
        }),
        (e.prototype.goTo = e.prototype.slickGoTo =
            function (i, e) {
                this.changeSlide(
                    { data: { message: "index", index: parseInt(i) } },
                    e
                );
            }),
        (e.prototype.init = function (e) {
            var t = this;
            i(t.$slider).hasClass("slick-initialized") ||
                (i(t.$slider).addClass("slick-initialized"),
                t.buildRows(),
                t.buildOut(),
                t.setProps(),
                t.startLoad(),
                t.loadSlider(),
                t.initializeEvents(),
                t.updateArrows(),
                t.updateDots(),
                t.checkResponsive(!0),
                t.focusHandler()),
                e && t.$slider.trigger("init", [t]),
                !0 === t.options.accessibility && t.initADA(),
                t.options.autoplay && ((t.paused = !1), t.autoPlay());
        }),
        (e.prototype.initADA = function () {
            var e = this,
                t = Math.ceil(e.slideCount / e.options.slidesToShow),
                o = e.getNavigableIndexes().filter(function (i) {
                    return i >= 0 && i < e.slideCount;
                });
            e.$slides
                .add(e.$slideTrack.find(".slick-cloned"))
                .attr({ "aria-hidden": "true", tabindex: "-1" })
                .find("a, input, button, select")
                .attr({ tabindex: "-1" }),
                null !== e.$dots &&
                    (e.$slides
                        .not(e.$slideTrack.find(".slick-cloned"))
                        .each(function (t) {
                            var s = o.indexOf(t);
                            i(this).attr({
                                role: "tabpanel",
                                id: "slick-slide" + e.instanceUid + t,
                                tabindex: -1,
                            }),
                                -1 !== s &&
                                    i(this).attr({
                                        "aria-describedby":
                                            "slick-slide-control" +
                                            e.instanceUid +
                                            s,
                                    });
                        }),
                    e.$dots
                        .attr("role", "tablist")
                        .find("li")
                        .each(function (s) {
                            var n = o[s];
                            i(this).attr({ role: "presentation" }),
                                i(this)
                                    .find("button")
                                    .first()
                                    .attr({
                                        role: "tab",
                                        id:
                                            "slick-slide-control" +
                                            e.instanceUid +
                                            s,
                                        "aria-controls":
                                            "slick-slide" + e.instanceUid + n,
                                        "aria-label": s + 1 + " of " + t,
                                        "aria-selected": null,
                                        tabindex: "-1",
                                    });
                        })
                        .eq(e.currentSlide)
                        .find("button")
                        .attr({ "aria-selected": "true", tabindex: "0" })
                        .end());
            for (
                var s = e.currentSlide, n = s + e.options.slidesToShow;
                s < n;
                s++
            )
                e.$slides.eq(s).attr("tabindex", 0);
            e.activateADA();
        }),
        (e.prototype.initArrowEvents = function () {
            var i = this;
            !0 === i.options.arrows &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow
                    .off("click.slick")
                    .on("click.slick", { message: "previous" }, i.changeSlide),
                i.$nextArrow
                    .off("click.slick")
                    .on("click.slick", { message: "next" }, i.changeSlide),
                !0 === i.options.accessibility &&
                    (i.$prevArrow.on("keydown.slick", i.keyHandler),
                    i.$nextArrow.on("keydown.slick", i.keyHandler)));
        }),
        (e.prototype.initDotEvents = function () {
            var e = this;
            !0 === e.options.dots &&
                (i("li", e.$dots).on(
                    "click.slick",
                    { message: "index" },
                    e.changeSlide
                ),
                !0 === e.options.accessibility &&
                    e.$dots.on("keydown.slick", e.keyHandler)),
                !0 === e.options.dots &&
                    !0 === e.options.pauseOnDotsHover &&
                    i("li", e.$dots)
                        .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
                        .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
        }),
        (e.prototype.initSlideEvents = function () {
            var e = this;
            e.options.pauseOnHover &&
                (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
                e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
        }),
        (e.prototype.initializeEvents = function () {
            var e = this;
            e.initArrowEvents(),
                e.initDotEvents(),
                e.initSlideEvents(),
                e.$list.on(
                    "touchstart.slick mousedown.slick",
                    { action: "start" },
                    e.swipeHandler
                ),
                e.$list.on(
                    "touchmove.slick mousemove.slick",
                    { action: "move" },
                    e.swipeHandler
                ),
                e.$list.on(
                    "touchend.slick mouseup.slick",
                    { action: "end" },
                    e.swipeHandler
                ),
                e.$list.on(
                    "touchcancel.slick mouseleave.slick",
                    { action: "end" },
                    e.swipeHandler
                ),
                e.$list.on("click.slick", e.clickHandler),
                i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
                !0 === e.options.accessibility &&
                    e.$list.on("keydown.slick", e.keyHandler),
                !0 === e.options.focusOnSelect &&
                    i(e.$slideTrack)
                        .children()
                        .on("click.slick", e.selectHandler),
                i(window).on(
                    "orientationchange.slick.slick-" + e.instanceUid,
                    i.proxy(e.orientationChange, e)
                ),
                i(window).on(
                    "resize.slick.slick-" + e.instanceUid,
                    i.proxy(e.resize, e)
                ),
                i("[draggable!=true]", e.$slideTrack).on(
                    "dragstart",
                    e.preventDefault
                ),
                i(window).on(
                    "load.slick.slick-" + e.instanceUid,
                    e.setPosition
                ),
                i(e.setPosition);
        }),
        (e.prototype.initUI = function () {
            var i = this;
            !0 === i.options.arrows &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow.show(), i.$nextArrow.show()),
                !0 === i.options.dots &&
                    i.slideCount > i.options.slidesToShow &&
                    i.$dots.show();
        }),
        (e.prototype.keyHandler = function (i) {
            var e = this;
            i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                (37 === i.keyCode && !0 === e.options.accessibility
                    ? e.changeSlide({
                          data: {
                              message:
                                  !0 === e.options.rtl ? "next" : "previous",
                          },
                      })
                    : 39 === i.keyCode &&
                      !0 === e.options.accessibility &&
                      e.changeSlide({
                          data: {
                              message:
                                  !0 === e.options.rtl ? "previous" : "next",
                          },
                      }));
        }),
        (e.prototype.lazyLoad = function () {
            function e(e) {
                i("img[data-lazy]", e).each(function () {
                    var e = i(this),
                        t = i(this).attr("data-lazy"),
                        o = i(this).attr("data-srcset"),
                        s =
                            i(this).attr("data-sizes") ||
                            n.$slider.attr("data-sizes"),
                        r = document.createElement("img");
                    (r.onload = function () {
                        e.animate({ opacity: 0 }, 100, function () {
                            o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                                e
                                    .attr("src", t)
                                    .animate({ opacity: 1 }, 200, function () {
                                        e.removeAttr(
                                            "data-lazy data-srcset data-sizes"
                                        ).removeClass("slick-loading");
                                    }),
                                n.$slider.trigger("lazyLoaded", [n, e, t]);
                        });
                    }),
                        (r.onerror = function () {
                            e
                                .removeAttr("data-lazy")
                                .removeClass("slick-loading")
                                .addClass("slick-lazyload-error"),
                                n.$slider.trigger("lazyLoadError", [n, e, t]);
                        }),
                        (r.src = t);
                });
            }
            var t,
                o,
                s,
                n = this;
            if (
                (!0 === n.options.centerMode
                    ? !0 === n.options.infinite
                        ? (s =
                              (o =
                                  n.currentSlide +
                                  (n.options.slidesToShow / 2 + 1)) +
                              n.options.slidesToShow +
                              2)
                        : ((o = Math.max(
                              0,
                              n.currentSlide - (n.options.slidesToShow / 2 + 1)
                          )),
                          (s =
                              n.options.slidesToShow / 2 +
                              1 +
                              2 +
                              n.currentSlide))
                    : ((o = n.options.infinite
                          ? n.options.slidesToShow + n.currentSlide
                          : n.currentSlide),
                      (s = Math.ceil(o + n.options.slidesToShow)),
                      !0 === n.options.fade &&
                          (o > 0 && o--, s <= n.slideCount && s++)),
                (t = n.$slider.find(".slick-slide").slice(o, s)),
                "anticipated" === n.options.lazyLoad)
            )
                for (
                    var r = o - 1,
                        l = s,
                        d = n.$slider.find(".slick-slide"),
                        a = 0;
                    a < n.options.slidesToScroll;
                    a++
                )
                    r < 0 && (r = n.slideCount - 1),
                        (t = (t = t.add(d.eq(r))).add(d.eq(l))),
                        r--,
                        l++;
            e(t),
                n.slideCount <= n.options.slidesToShow
                    ? e(n.$slider.find(".slick-slide"))
                    : n.currentSlide >= n.slideCount - n.options.slidesToShow
                    ? e(
                          n.$slider
                              .find(".slick-cloned")
                              .slice(0, n.options.slidesToShow)
                      )
                    : 0 === n.currentSlide &&
                      e(
                          n.$slider
                              .find(".slick-cloned")
                              .slice(-1 * n.options.slidesToShow)
                      );
        }),
        (e.prototype.loadSlider = function () {
            var i = this;
            i.setPosition(),
                i.$slideTrack.css({ opacity: 1 }),
                i.$slider.removeClass("slick-loading"),
                i.initUI(),
                "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
        }),
        (e.prototype.next = e.prototype.slickNext =
            function () {
                this.changeSlide({ data: { message: "next" } });
            }),
        (e.prototype.orientationChange = function () {
            var i = this;
            i.checkResponsive(), i.setPosition();
        }),
        (e.prototype.pause = e.prototype.slickPause =
            function () {
                var i = this;
                i.autoPlayClear(), (i.paused = !0);
            }),
        (e.prototype.play = e.prototype.slickPlay =
            function () {
                var i = this;
                i.autoPlay(),
                    (i.options.autoplay = !0),
                    (i.paused = !1),
                    (i.focussed = !1),
                    (i.interrupted = !1);
            }),
        (e.prototype.postSlide = function (e) {
            var t = this;
            t.unslicked ||
                (t.$slider.trigger("afterChange", [t, e]),
                (t.animating = !1),
                t.slideCount > t.options.slidesToShow && t.setPosition(),
                (t.swipeLeft = null),
                t.options.autoplay && t.autoPlay(),
                !0 === t.options.accessibility &&
                    (t.initADA(),
                    t.options.focusOnChange &&
                        i(t.$slides.get(t.currentSlide))
                            .attr("tabindex", 0)
                            .focus()));
        }),
        (e.prototype.prev = e.prototype.slickPrev =
            function () {
                this.changeSlide({ data: { message: "previous" } });
            }),
        (e.prototype.preventDefault = function (i) {
            i.preventDefault();
        }),
        (e.prototype.progressiveLazyLoad = function (e) {
            e = e || 1;
            var t,
                o,
                s,
                n,
                r,
                l = this,
                d = i("img[data-lazy]", l.$slider);
            d.length
                ? ((t = d.first()),
                  (o = t.attr("data-lazy")),
                  (s = t.attr("data-srcset")),
                  (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
                  ((r = document.createElement("img")).onload = function () {
                      s && (t.attr("srcset", s), n && t.attr("sizes", n)),
                          t
                              .attr("src", o)
                              .removeAttr("data-lazy data-srcset data-sizes")
                              .removeClass("slick-loading"),
                          !0 === l.options.adaptiveHeight && l.setPosition(),
                          l.$slider.trigger("lazyLoaded", [l, t, o]),
                          l.progressiveLazyLoad();
                  }),
                  (r.onerror = function () {
                      e < 3
                          ? setTimeout(function () {
                                l.progressiveLazyLoad(e + 1);
                            }, 500)
                          : (t
                                .removeAttr("data-lazy")
                                .removeClass("slick-loading")
                                .addClass("slick-lazyload-error"),
                            l.$slider.trigger("lazyLoadError", [l, t, o]),
                            l.progressiveLazyLoad());
                  }),
                  (r.src = o))
                : l.$slider.trigger("allImagesLoaded", [l]);
        }),
        (e.prototype.refresh = function (e) {
            var t,
                o,
                s = this;
            (o = s.slideCount - s.options.slidesToShow),
                !s.options.infinite &&
                    s.currentSlide > o &&
                    (s.currentSlide = o),
                s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
                (t = s.currentSlide),
                s.destroy(!0),
                i.extend(s, s.initials, { currentSlide: t }),
                s.init(),
                e ||
                    s.changeSlide({ data: { message: "index", index: t } }, !1);
        }),
        (e.prototype.registerBreakpoints = function () {
            var e,
                t,
                o,
                s = this,
                n = s.options.responsive || null;
            if ("array" === i.type(n) && n.length) {
                s.respondTo = s.options.respondTo || "window";
                for (e in n)
                    if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
                        for (t = n[e].breakpoint; o >= 0; )
                            s.breakpoints[o] &&
                                s.breakpoints[o] === t &&
                                s.breakpoints.splice(o, 1),
                                o--;
                        s.breakpoints.push(t),
                            (s.breakpointSettings[t] = n[e].settings);
                    }
                s.breakpoints.sort(function (i, e) {
                    return s.options.mobileFirst ? i - e : e - i;
                });
            }
        }),
        (e.prototype.reinit = function () {
            var e = this;
            (e.$slides = e.$slideTrack
                .children(e.options.slide)
                .addClass("slick-slide")),
                (e.slideCount = e.$slides.length),
                e.currentSlide >= e.slideCount &&
                    0 !== e.currentSlide &&
                    (e.currentSlide =
                        e.currentSlide - e.options.slidesToScroll),
                e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
                e.registerBreakpoints(),
                e.setProps(),
                e.setupInfinite(),
                e.buildArrows(),
                e.updateArrows(),
                e.initArrowEvents(),
                e.buildDots(),
                e.updateDots(),
                e.initDotEvents(),
                e.cleanUpSlideEvents(),
                e.initSlideEvents(),
                e.checkResponsive(!1, !0),
                !0 === e.options.focusOnSelect &&
                    i(e.$slideTrack)
                        .children()
                        .on("click.slick", e.selectHandler),
                e.setSlideClasses(
                    "number" == typeof e.currentSlide ? e.currentSlide : 0
                ),
                e.setPosition(),
                e.focusHandler(),
                (e.paused = !e.options.autoplay),
                e.autoPlay(),
                e.$slider.trigger("reInit", [e]);
        }),
        (e.prototype.resize = function () {
            var e = this;
            i(window).width() !== e.windowWidth &&
                (clearTimeout(e.windowDelay),
                (e.windowDelay = window.setTimeout(function () {
                    (e.windowWidth = i(window).width()),
                        e.checkResponsive(),
                        e.unslicked || e.setPosition();
                }, 50)));
        }),
        (e.prototype.removeSlide = e.prototype.slickRemove =
            function (i, e, t) {
                var o = this;
                if (
                    ((i =
                        "boolean" == typeof i
                            ? !0 === (e = i)
                                ? 0
                                : o.slideCount - 1
                            : !0 === e
                            ? --i
                            : i),
                    o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
                )
                    return !1;
                o.unload(),
                    !0 === t
                        ? o.$slideTrack.children().remove()
                        : o.$slideTrack
                              .children(this.options.slide)
                              .eq(i)
                              .remove(),
                    (o.$slides = o.$slideTrack.children(this.options.slide)),
                    o.$slideTrack.children(this.options.slide).detach(),
                    o.$slideTrack.append(o.$slides),
                    (o.$slidesCache = o.$slides),
                    o.reinit();
            }),
        (e.prototype.setCSS = function (i) {
            var e,
                t,
                o = this,
                s = {};
            !0 === o.options.rtl && (i = -i),
                (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
                (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
                (s[o.positionProp] = i),
                !1 === o.transformsEnabled
                    ? o.$slideTrack.css(s)
                    : ((s = {}),
                      !1 === o.cssTransitions
                          ? ((s[o.animType] =
                                "translate(" + e + ", " + t + ")"),
                            o.$slideTrack.css(s))
                          : ((s[o.animType] =
                                "translate3d(" + e + ", " + t + ", 0px)"),
                            o.$slideTrack.css(s)));
        }),
        (e.prototype.setDimensions = function () {
            var i = this;
            !1 === i.options.vertical
                ? !0 === i.options.centerMode &&
                  i.$list.css({ padding: "0px " + i.options.centerPadding })
                : (i.$list.height(
                      i.$slides.first().outerHeight(!0) * i.options.slidesToShow
                  ),
                  !0 === i.options.centerMode &&
                      i.$list.css({
                          padding: i.options.centerPadding + " 0px",
                      })),
                (i.listWidth = i.$list.width()),
                (i.listHeight = i.$list.height()),
                !1 === i.options.vertical && !1 === i.options.variableWidth
                    ? ((i.slideWidth = Math.ceil(
                          i.listWidth / i.options.slidesToShow
                      )),
                      i.$slideTrack.width(
                          Math.ceil(
                              i.slideWidth *
                                  i.$slideTrack.children(".slick-slide").length
                          )
                      ))
                    : !0 === i.options.variableWidth
                    ? i.$slideTrack.width(5e3 * i.slideCount)
                    : ((i.slideWidth = Math.ceil(i.listWidth)),
                      i.$slideTrack.height(
                          Math.ceil(
                              i.$slides.first().outerHeight(!0) *
                                  i.$slideTrack.children(".slick-slide").length
                          )
                      ));
            var e =
                i.$slides.first().outerWidth(!0) - i.$slides.first().width();
            !1 === i.options.variableWidth &&
                i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
        }),
        (e.prototype.setFade = function () {
            var e,
                t = this;
            t.$slides.each(function (o, s) {
                (e = t.slideWidth * o * -1),
                    !0 === t.options.rtl
                        ? i(s).css({
                              position: "relative",
                              right: e,
                              top: 0,
                              zIndex: t.options.zIndex - 2,
                              opacity: 0,
                          })
                        : i(s).css({
                              position: "relative",
                              left: e,
                              top: 0,
                              zIndex: t.options.zIndex - 2,
                              opacity: 0,
                          });
            }),
                t.$slides
                    .eq(t.currentSlide)
                    .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
        }),
        (e.prototype.setHeight = function () {
            var i = this;
            if (
                1 === i.options.slidesToShow &&
                !0 === i.options.adaptiveHeight &&
                !1 === i.options.vertical
            ) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.css("height", e);
            }
        }),
        (e.prototype.setOption = e.prototype.slickSetOption =
            function () {
                var e,
                    t,
                    o,
                    s,
                    n,
                    r = this,
                    l = !1;
                if (
                    ("object" === i.type(arguments[0])
                        ? ((o = arguments[0]),
                          (l = arguments[1]),
                          (n = "multiple"))
                        : "string" === i.type(arguments[0]) &&
                          ((o = arguments[0]),
                          (s = arguments[1]),
                          (l = arguments[2]),
                          "responsive" === arguments[0] &&
                          "array" === i.type(arguments[1])
                              ? (n = "responsive")
                              : void 0 !== arguments[1] && (n = "single")),
                    "single" === n)
                )
                    r.options[o] = s;
                else if ("multiple" === n)
                    i.each(o, function (i, e) {
                        r.options[i] = e;
                    });
                else if ("responsive" === n)
                    for (t in s)
                        if ("array" !== i.type(r.options.responsive))
                            r.options.responsive = [s[t]];
                        else {
                            for (e = r.options.responsive.length - 1; e >= 0; )
                                r.options.responsive[e].breakpoint ===
                                    s[t].breakpoint &&
                                    r.options.responsive.splice(e, 1),
                                    e--;
                            r.options.responsive.push(s[t]);
                        }
                l && (r.unload(), r.reinit());
            }),
        (e.prototype.setPosition = function () {
            var i = this;
            i.setDimensions(),
                i.setHeight(),
                !1 === i.options.fade
                    ? i.setCSS(i.getLeft(i.currentSlide))
                    : i.setFade(),
                i.$slider.trigger("setPosition", [i]);
        }),
        (e.prototype.setProps = function () {
            var i = this,
                e = document.body.style;
            (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
                "top" === i.positionProp
                    ? i.$slider.addClass("slick-vertical")
                    : i.$slider.removeClass("slick-vertical"),
                (void 0 === e.WebkitTransition &&
                    void 0 === e.MozTransition &&
                    void 0 === e.msTransition) ||
                    (!0 === i.options.useCSS && (i.cssTransitions = !0)),
                i.options.fade &&
                    ("number" == typeof i.options.zIndex
                        ? i.options.zIndex < 3 && (i.options.zIndex = 3)
                        : (i.options.zIndex = i.defaults.zIndex)),
                void 0 !== e.OTransform &&
                    ((i.animType = "OTransform"),
                    (i.transformType = "-o-transform"),
                    (i.transitionType = "OTransition"),
                    void 0 === e.perspectiveProperty &&
                        void 0 === e.webkitPerspective &&
                        (i.animType = !1)),
                void 0 !== e.MozTransform &&
                    ((i.animType = "MozTransform"),
                    (i.transformType = "-moz-transform"),
                    (i.transitionType = "MozTransition"),
                    void 0 === e.perspectiveProperty &&
                        void 0 === e.MozPerspective &&
                        (i.animType = !1)),
                void 0 !== e.webkitTransform &&
                    ((i.animType = "webkitTransform"),
                    (i.transformType = "-webkit-transform"),
                    (i.transitionType = "webkitTransition"),
                    void 0 === e.perspectiveProperty &&
                        void 0 === e.webkitPerspective &&
                        (i.animType = !1)),
                void 0 !== e.msTransform &&
                    ((i.animType = "msTransform"),
                    (i.transformType = "-ms-transform"),
                    (i.transitionType = "msTransition"),
                    void 0 === e.msTransform && (i.animType = !1)),
                void 0 !== e.transform &&
                    !1 !== i.animType &&
                    ((i.animType = "transform"),
                    (i.transformType = "transform"),
                    (i.transitionType = "transition")),
                (i.transformsEnabled =
                    i.options.useTransform &&
                    null !== i.animType &&
                    !1 !== i.animType);
        }),
        (e.prototype.setSlideClasses = function (i) {
            var e,
                t,
                o,
                s,
                n = this;
            if (
                ((t = n.$slider
                    .find(".slick-slide")
                    .removeClass("slick-active slick-center slick-current")
                    .attr("aria-hidden", "true")),
                n.$slides.eq(i).addClass("slick-current"),
                !0 === n.options.centerMode)
            ) {
                var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
                (e = Math.floor(n.options.slidesToShow / 2)),
                    !0 === n.options.infinite &&
                        (i >= e && i <= n.slideCount - 1 - e
                            ? n.$slides
                                  .slice(i - e + r, i + e + 1)
                                  .addClass("slick-active")
                                  .attr("aria-hidden", "false")
                            : ((o = n.options.slidesToShow + i),
                              t
                                  .slice(o - e + 1 + r, o + e + 2)
                                  .addClass("slick-active")
                                  .attr("aria-hidden", "false")),
                        0 === i
                            ? t
                                  .eq(t.length - 1 - n.options.slidesToShow)
                                  .addClass("slick-center")
                            : i === n.slideCount - 1 &&
                              t
                                  .eq(n.options.slidesToShow)
                                  .addClass("slick-center")),
                    n.$slides.eq(i).addClass("slick-center");
            } else
                i >= 0 && i <= n.slideCount - n.options.slidesToShow
                    ? n.$slides
                          .slice(i, i + n.options.slidesToShow)
                          .addClass("slick-active")
                          .attr("aria-hidden", "false")
                    : t.length <= n.options.slidesToShow
                    ? t.addClass("slick-active").attr("aria-hidden", "false")
                    : ((s = n.slideCount % n.options.slidesToShow),
                      (o =
                          !0 === n.options.infinite
                              ? n.options.slidesToShow + i
                              : i),
                      n.options.slidesToShow == n.options.slidesToScroll &&
                      n.slideCount - i < n.options.slidesToShow
                          ? t
                                .slice(o - (n.options.slidesToShow - s), o + s)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false")
                          : t
                                .slice(o, o + n.options.slidesToShow)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false"));
            ("ondemand" !== n.options.lazyLoad &&
                "anticipated" !== n.options.lazyLoad) ||
                n.lazyLoad();
        }),
        (e.prototype.setupInfinite = function () {
            var e,
                t,
                o,
                s = this;
            if (
                (!0 === s.options.fade && (s.options.centerMode = !1),
                !0 === s.options.infinite &&
                    !1 === s.options.fade &&
                    ((t = null), s.slideCount > s.options.slidesToShow))
            ) {
                for (
                    o =
                        !0 === s.options.centerMode
                            ? s.options.slidesToShow + 1
                            : s.options.slidesToShow,
                        e = s.slideCount;
                    e > s.slideCount - o;
                    e -= 1
                )
                    (t = e - 1),
                        i(s.$slides[t])
                            .clone(!0)
                            .attr("id", "")
                            .attr("data-slick-index", t - s.slideCount)
                            .prependTo(s.$slideTrack)
                            .addClass("slick-cloned");
                for (e = 0; e < o + s.slideCount; e += 1)
                    (t = e),
                        i(s.$slides[t])
                            .clone(!0)
                            .attr("id", "")
                            .attr("data-slick-index", t + s.slideCount)
                            .appendTo(s.$slideTrack)
                            .addClass("slick-cloned");
                s.$slideTrack
                    .find(".slick-cloned")
                    .find("[id]")
                    .each(function () {
                        i(this).attr("id", "");
                    });
            }
        }),
        (e.prototype.interrupt = function (i) {
            var e = this;
            i || e.autoPlay(), (e.interrupted = i);
        }),
        (e.prototype.selectHandler = function (e) {
            var t = this,
                o = i(e.target).is(".slick-slide")
                    ? i(e.target)
                    : i(e.target).parents(".slick-slide"),
                s = parseInt(o.attr("data-slick-index"));
            s || (s = 0),
                t.slideCount <= t.options.slidesToShow
                    ? t.slideHandler(s, !1, !0)
                    : t.slideHandler(s);
        }),
        (e.prototype.slideHandler = function (i, e, t) {
            var o,
                s,
                n,
                r,
                l,
                d = null,
                a = this;
            if (
                ((e = e || !1),
                !(
                    (!0 === a.animating && !0 === a.options.waitForAnimate) ||
                    (!0 === a.options.fade && a.currentSlide === i)
                ))
            )
                if (
                    (!1 === e && a.asNavFor(i),
                    (o = i),
                    (d = a.getLeft(o)),
                    (r = a.getLeft(a.currentSlide)),
                    (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
                    !1 === a.options.infinite &&
                        !1 === a.options.centerMode &&
                        (i < 0 ||
                            i > a.getDotCount() * a.options.slidesToScroll))
                )
                    !1 === a.options.fade &&
                        ((o = a.currentSlide),
                        !0 !== t
                            ? a.animateSlide(r, function () {
                                  a.postSlide(o);
                              })
                            : a.postSlide(o));
                else if (
                    !1 === a.options.infinite &&
                    !0 === a.options.centerMode &&
                    (i < 0 || i > a.slideCount - a.options.slidesToScroll)
                )
                    !1 === a.options.fade &&
                        ((o = a.currentSlide),
                        !0 !== t
                            ? a.animateSlide(r, function () {
                                  a.postSlide(o);
                              })
                            : a.postSlide(o));
                else {
                    if (
                        (a.options.autoplay && clearInterval(a.autoPlayTimer),
                        (s =
                            o < 0
                                ? a.slideCount % a.options.slidesToScroll != 0
                                    ? a.slideCount -
                                      (a.slideCount % a.options.slidesToScroll)
                                    : a.slideCount + o
                                : o >= a.slideCount
                                ? a.slideCount % a.options.slidesToScroll != 0
                                    ? 0
                                    : o - a.slideCount
                                : o),
                        (a.animating = !0),
                        a.$slider.trigger("beforeChange", [
                            a,
                            a.currentSlide,
                            s,
                        ]),
                        (n = a.currentSlide),
                        (a.currentSlide = s),
                        a.setSlideClasses(a.currentSlide),
                        a.options.asNavFor &&
                            (l = (l = a.getNavTarget()).slick("getSlick"))
                                .slideCount <= l.options.slidesToShow &&
                            l.setSlideClasses(a.currentSlide),
                        a.updateDots(),
                        a.updateArrows(),
                        !0 === a.options.fade)
                    )
                        return (
                            !0 !== t
                                ? (a.fadeSlideOut(n),
                                  a.fadeSlide(s, function () {
                                      a.postSlide(s);
                                  }))
                                : a.postSlide(s),
                            void a.animateHeight()
                        );
                    !0 !== t
                        ? a.animateSlide(d, function () {
                              a.postSlide(s);
                          })
                        : a.postSlide(s);
                }
        }),
        (e.prototype.startLoad = function () {
            var i = this;
            !0 === i.options.arrows &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow.hide(), i.$nextArrow.hide()),
                !0 === i.options.dots &&
                    i.slideCount > i.options.slidesToShow &&
                    i.$dots.hide(),
                i.$slider.addClass("slick-loading");
        }),
        (e.prototype.swipeDirection = function () {
            var i,
                e,
                t,
                o,
                s = this;
            return (
                (i = s.touchObject.startX - s.touchObject.curX),
                (e = s.touchObject.startY - s.touchObject.curY),
                (t = Math.atan2(e, i)),
                (o = Math.round((180 * t) / Math.PI)) < 0 &&
                    (o = 360 - Math.abs(o)),
                o <= 45 && o >= 0
                    ? !1 === s.options.rtl
                        ? "left"
                        : "right"
                    : o <= 360 && o >= 315
                    ? !1 === s.options.rtl
                        ? "left"
                        : "right"
                    : o >= 135 && o <= 225
                    ? !1 === s.options.rtl
                        ? "right"
                        : "left"
                    : !0 === s.options.verticalSwiping
                    ? o >= 35 && o <= 135
                        ? "down"
                        : "up"
                    : "vertical"
            );
        }),
        (e.prototype.swipeEnd = function (i) {
            var e,
                t,
                o = this;
            if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
                return (o.scrolling = !1), !1;
            if (
                ((o.interrupted = !1),
                (o.shouldClick = !(o.touchObject.swipeLength > 10)),
                void 0 === o.touchObject.curX)
            )
                return !1;
            if (
                (!0 === o.touchObject.edgeHit &&
                    o.$slider.trigger("edge", [o, o.swipeDirection()]),
                o.touchObject.swipeLength >= o.touchObject.minSwipe)
            ) {
                switch ((t = o.swipeDirection())) {
                    case "left":
                    case "down":
                        (e = o.options.swipeToSlide
                            ? o.checkNavigable(
                                  o.currentSlide + o.getSlideCount()
                              )
                            : o.currentSlide + o.getSlideCount()),
                            (o.currentDirection = 0);
                        break;
                    case "right":
                    case "up":
                        (e = o.options.swipeToSlide
                            ? o.checkNavigable(
                                  o.currentSlide - o.getSlideCount()
                              )
                            : o.currentSlide - o.getSlideCount()),
                            (o.currentDirection = 1);
                }
                "vertical" != t &&
                    (o.slideHandler(e),
                    (o.touchObject = {}),
                    o.$slider.trigger("swipe", [o, t]));
            } else
                o.touchObject.startX !== o.touchObject.curX &&
                    (o.slideHandler(o.currentSlide), (o.touchObject = {}));
        }),
        (e.prototype.swipeHandler = function (i) {
            var e = this;
            if (
                !(
                    !1 === e.options.swipe ||
                    ("ontouchend" in document && !1 === e.options.swipe) ||
                    (!1 === e.options.draggable &&
                        -1 !== i.type.indexOf("mouse"))
                )
            )
                switch (
                    ((e.touchObject.fingerCount =
                        i.originalEvent && void 0 !== i.originalEvent.touches
                            ? i.originalEvent.touches.length
                            : 1),
                    (e.touchObject.minSwipe =
                        e.listWidth / e.options.touchThreshold),
                    !0 === e.options.verticalSwiping &&
                        (e.touchObject.minSwipe =
                            e.listHeight / e.options.touchThreshold),
                    i.data.action)
                ) {
                    case "start":
                        e.swipeStart(i);
                        break;
                    case "move":
                        e.swipeMove(i);
                        break;
                    case "end":
                        e.swipeEnd(i);
                }
        }),
        (e.prototype.swipeMove = function (i) {
            var e,
                t,
                o,
                s,
                n,
                r,
                l = this;
            return (
                (n =
                    void 0 !== i.originalEvent
                        ? i.originalEvent.touches
                        : null),
                !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
                    ((e = l.getLeft(l.currentSlide)),
                    (l.touchObject.curX =
                        void 0 !== n ? n[0].pageX : i.clientX),
                    (l.touchObject.curY =
                        void 0 !== n ? n[0].pageY : i.clientY),
                    (l.touchObject.swipeLength = Math.round(
                        Math.sqrt(
                            Math.pow(
                                l.touchObject.curX - l.touchObject.startX,
                                2
                            )
                        )
                    )),
                    (r = Math.round(
                        Math.sqrt(
                            Math.pow(
                                l.touchObject.curY - l.touchObject.startY,
                                2
                            )
                        )
                    )),
                    !l.options.verticalSwiping && !l.swiping && r > 4
                        ? ((l.scrolling = !0), !1)
                        : (!0 === l.options.verticalSwiping &&
                              (l.touchObject.swipeLength = r),
                          (t = l.swipeDirection()),
                          void 0 !== i.originalEvent &&
                              l.touchObject.swipeLength > 4 &&
                              ((l.swiping = !0), i.preventDefault()),
                          (s =
                              (!1 === l.options.rtl ? 1 : -1) *
                              (l.touchObject.curX > l.touchObject.startX
                                  ? 1
                                  : -1)),
                          !0 === l.options.verticalSwiping &&
                              (s =
                                  l.touchObject.curY > l.touchObject.startY
                                      ? 1
                                      : -1),
                          (o = l.touchObject.swipeLength),
                          (l.touchObject.edgeHit = !1),
                          !1 === l.options.infinite &&
                              ((0 === l.currentSlide && "right" === t) ||
                                  (l.currentSlide >= l.getDotCount() &&
                                      "left" === t)) &&
                              ((o =
                                  l.touchObject.swipeLength *
                                  l.options.edgeFriction),
                              (l.touchObject.edgeHit = !0)),
                          !1 === l.options.vertical
                              ? (l.swipeLeft = e + o * s)
                              : (l.swipeLeft =
                                    e +
                                    o * (l.$list.height() / l.listWidth) * s),
                          !0 === l.options.verticalSwiping &&
                              (l.swipeLeft = e + o * s),
                          !0 !== l.options.fade &&
                              !1 !== l.options.touchMove &&
                              (!0 === l.animating
                                  ? ((l.swipeLeft = null), !1)
                                  : void l.setCSS(l.swipeLeft))))
            );
        }),
        (e.prototype.swipeStart = function (i) {
            var e,
                t = this;
            if (
                ((t.interrupted = !0),
                1 !== t.touchObject.fingerCount ||
                    t.slideCount <= t.options.slidesToShow)
            )
                return (t.touchObject = {}), !1;
            void 0 !== i.originalEvent &&
                void 0 !== i.originalEvent.touches &&
                (e = i.originalEvent.touches[0]),
                (t.touchObject.startX = t.touchObject.curX =
                    void 0 !== e ? e.pageX : i.clientX),
                (t.touchObject.startY = t.touchObject.curY =
                    void 0 !== e ? e.pageY : i.clientY),
                (t.dragging = !0);
        }),
        (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
            function () {
                var i = this;
                null !== i.$slidesCache &&
                    (i.unload(),
                    i.$slideTrack.children(this.options.slide).detach(),
                    i.$slidesCache.appendTo(i.$slideTrack),
                    i.reinit());
            }),
        (e.prototype.unload = function () {
            var e = this;
            i(".slick-cloned", e.$slider).remove(),
                e.$dots && e.$dots.remove(),
                e.$prevArrow &&
                    e.htmlExpr.test(e.options.prevArrow) &&
                    e.$prevArrow.remove(),
                e.$nextArrow &&
                    e.htmlExpr.test(e.options.nextArrow) &&
                    e.$nextArrow.remove(),
                e.$slides
                    .removeClass(
                        "slick-slide slick-active slick-visible slick-current"
                    )
                    .attr("aria-hidden", "true")
                    .css("width", "");
        }),
        (e.prototype.unslick = function (i) {
            var e = this;
            e.$slider.trigger("unslick", [e, i]), e.destroy();
        }),
        (e.prototype.updateArrows = function () {
            var i = this;
            Math.floor(i.options.slidesToShow / 2),
                !0 === i.options.arrows &&
                    i.slideCount > i.options.slidesToShow &&
                    !i.options.infinite &&
                    (i.$prevArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false"),
                    i.$nextArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false"),
                    0 === i.currentSlide
                        ? (i.$prevArrow
                              .addClass("slick-disabled")
                              .attr("aria-disabled", "true"),
                          i.$nextArrow
                              .removeClass("slick-disabled")
                              .attr("aria-disabled", "false"))
                        : i.currentSlide >=
                              i.slideCount - i.options.slidesToShow &&
                          !1 === i.options.centerMode
                        ? (i.$nextArrow
                              .addClass("slick-disabled")
                              .attr("aria-disabled", "true"),
                          i.$prevArrow
                              .removeClass("slick-disabled")
                              .attr("aria-disabled", "false"))
                        : i.currentSlide >= i.slideCount - 1 &&
                          !0 === i.options.centerMode &&
                          (i.$nextArrow
                              .addClass("slick-disabled")
                              .attr("aria-disabled", "true"),
                          i.$prevArrow
                              .removeClass("slick-disabled")
                              .attr("aria-disabled", "false")));
        }),
        (e.prototype.updateDots = function () {
            var i = this;
            null !== i.$dots &&
                (i.$dots.find("li").removeClass("slick-active").end(),
                i.$dots
                    .find("li")
                    .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
                    .addClass("slick-active"));
        }),
        (e.prototype.visibility = function () {
            var i = this;
            i.options.autoplay &&
                (document[i.hidden]
                    ? (i.interrupted = !0)
                    : (i.interrupted = !1));
        }),
        (i.fn.slick = function () {
            var i,
                t,
                o = this,
                s = arguments[0],
                n = Array.prototype.slice.call(arguments, 1),
                r = o.length;
            for (i = 0; i < r; i++)
                if (
                    ("object" == typeof s || void 0 === s
                        ? (o[i].slick = new e(o[i], s))
                        : (t = o[i].slick[s].apply(o[i].slick, n)),
                    void 0 !== t)
                )
                    return t;
            return o;
        });
});
/* Bootstrap 4.5.3 */
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? e(exports, require("jquery"), require("popper.js"))
        : "function" == typeof define && define.amd
        ? define(["exports", "jquery", "popper.js"], e)
        : e(
              ((t =
                  "undefined" != typeof globalThis
                      ? globalThis
                      : t || self).bootstrap = {}),
              t.jQuery,
              t.Popper
          );
})(this, function (t, e, n) {
    "use strict";
    function i(t) {
        return t && "object" == typeof t && "default" in t ? t : { default: t };
    }
    var o = i(e),
        a = i(n);
    function s(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
        }
    }
    function l(t, e, n) {
        return e && s(t.prototype, e), n && s(t, n), t;
    }
    function r() {
        return (r =
            Object.assign ||
            function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) &&
                            (t[i] = n[i]);
                }
                return t;
            }).apply(this, arguments);
    }
    function u(t) {
        var e = this,
            n = !1;
        return (
            o.default(this).one(d.TRANSITION_END, function () {
                n = !0;
            }),
            setTimeout(function () {
                n || d.triggerTransitionEnd(e);
            }, t),
            this
        );
    }
    var d = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (t) {
            do {
                t += ~~(1e6 * Math.random());
            } while (document.getElementById(t));
            return t;
        },
        getSelectorFromElement: function (t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : "";
            }
            try {
                return document.querySelector(e) ? e : null;
            } catch (t) {
                return null;
            }
        },
        getTransitionDurationFromElement: function (t) {
            if (!t) return 0;
            var e = o.default(t).css("transition-duration"),
                n = o.default(t).css("transition-delay"),
                i = parseFloat(e),
                a = parseFloat(n);
            return i || a
                ? ((e = e.split(",")[0]),
                  (n = n.split(",")[0]),
                  1e3 * (parseFloat(e) + parseFloat(n)))
                : 0;
        },
        reflow: function (t) {
            return t.offsetHeight;
        },
        triggerTransitionEnd: function (t) {
            o.default(t).trigger("transitionend");
        },
        supportsTransitionEnd: function () {
            return Boolean("transitionend");
        },
        isElement: function (t) {
            return (t[0] || t).nodeType;
        },
        typeCheckConfig: function (t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i],
                        a = e[i],
                        s =
                            a && d.isElement(a)
                                ? "element"
                                : null === (l = a) || "undefined" == typeof l
                                ? "" + l
                                : {}.toString
                                      .call(l)
                                      .match(/\s([a-z]+)/i)[1]
                                      .toLowerCase();
                    if (!new RegExp(o).test(s))
                        throw new Error(
                            t.toUpperCase() +
                                ': Option "' +
                                i +
                                '" provided type "' +
                                s +
                                '" but expected type "' +
                                o +
                                '".'
                        );
                }
            var l;
        },
        findShadowRoot: function (t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                var e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null;
            }
            return t instanceof ShadowRoot
                ? t
                : t.parentNode
                ? d.findShadowRoot(t.parentNode)
                : null;
        },
        jQueryDetection: function () {
            if ("undefined" == typeof o.default)
                throw new TypeError(
                    "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
                );
            var t = o.default.fn.jquery.split(" ")[0].split(".");
            if (
                (t[0] < 2 && t[1] < 9) ||
                (1 === t[0] && 9 === t[1] && t[2] < 1) ||
                t[0] >= 4
            )
                throw new Error(
                    "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
                );
        },
    };
    d.jQueryDetection(),
        (o.default.fn.emulateTransitionEnd = u),
        (o.default.event.special[d.TRANSITION_END] = {
            bindType: "transitionend",
            delegateType: "transitionend",
            handle: function (t) {
                if (o.default(t.target).is(this))
                    return t.handleObj.handler.apply(this, arguments);
            },
        });
    var f = "alert",
        c = o.default.fn[f],
        h = (function () {
            function t(t) {
                this._element = t;
            }
            var e = t.prototype;
            return (
                (e.close = function (t) {
                    var e = this._element;
                    t && (e = this._getRootElement(t)),
                        this._triggerCloseEvent(e).isDefaultPrevented() ||
                            this._removeElement(e);
                }),
                (e.dispose = function () {
                    o.default.removeData(this._element, "bs.alert"),
                        (this._element = null);
                }),
                (e._getRootElement = function (t) {
                    var e = d.getSelectorFromElement(t),
                        n = !1;
                    return (
                        e && (n = document.querySelector(e)),
                        n || (n = o.default(t).closest(".alert")[0]),
                        n
                    );
                }),
                (e._triggerCloseEvent = function (t) {
                    var e = o.default.Event("close.bs.alert");
                    return o.default(t).trigger(e), e;
                }),
                (e._removeElement = function (t) {
                    var e = this;
                    if (
                        (o.default(t).removeClass("show"),
                        o.default(t).hasClass("fade"))
                    ) {
                        var n = d.getTransitionDurationFromElement(t);
                        o.default(t)
                            .one(d.TRANSITION_END, function (n) {
                                return e._destroyElement(t, n);
                            })
                            .emulateTransitionEnd(n);
                    } else this._destroyElement(t);
                }),
                (e._destroyElement = function (t) {
                    o.default(t).detach().trigger("closed.bs.alert").remove();
                }),
                (t._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = o.default(this),
                            i = n.data("bs.alert");
                        i || ((i = new t(this)), n.data("bs.alert", i)),
                            "close" === e && i[e](this);
                    });
                }),
                (t._handleDismiss = function (t) {
                    return function (e) {
                        e && e.preventDefault(), t.close(this);
                    };
                }),
                l(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.3";
                        },
                    },
                ]),
                t
            );
        })();
    o
        .default(document)
        .on(
            "click.bs.alert.data-api",
            '[data-dismiss="alert"]',
            h._handleDismiss(new h())
        ),
        (o.default.fn[f] = h._jQueryInterface),
        (o.default.fn[f].Constructor = h),
        (o.default.fn[f].noConflict = function () {
            return (o.default.fn[f] = c), h._jQueryInterface;
        });
    var g = o.default.fn.button,
        m = (function () {
            function t(t) {
                (this._element = t), (this.shouldAvoidTriggerChange = !1);
            }
            var e = t.prototype;
            return (
                (e.toggle = function () {
                    var t = !0,
                        e = !0,
                        n = o
                            .default(this._element)
                            .closest('[data-toggle="buttons"]')[0];
                    if (n) {
                        var i = this._element.querySelector(
                            'input:not([type="hidden"])'
                        );
                        if (i) {
                            if ("radio" === i.type)
                                if (
                                    i.checked &&
                                    this._element.classList.contains("active")
                                )
                                    t = !1;
                                else {
                                    var a = n.querySelector(".active");
                                    a && o.default(a).removeClass("active");
                                }
                            t &&
                                (("checkbox" !== i.type &&
                                    "radio" !== i.type) ||
                                    (i.checked =
                                        !this._element.classList.contains(
                                            "active"
                                        )),
                                this.shouldAvoidTriggerChange ||
                                    o.default(i).trigger("change")),
                                i.focus(),
                                (e = !1);
                        }
                    }
                    this._element.hasAttribute("disabled") ||
                        this._element.classList.contains("disabled") ||
                        (e &&
                            this._element.setAttribute(
                                "aria-pressed",
                                !this._element.classList.contains("active")
                            ),
                        t && o.default(this._element).toggleClass("active"));
                }),
                (e.dispose = function () {
                    o.default.removeData(this._element, "bs.button"),
                        (this._element = null);
                }),
                (t._jQueryInterface = function (e, n) {
                    return this.each(function () {
                        var i = o.default(this),
                            a = i.data("bs.button");
                        a || ((a = new t(this)), i.data("bs.button", a)),
                            (a.shouldAvoidTriggerChange = n),
                            "toggle" === e && a[e]();
                    });
                }),
                l(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.3";
                        },
                    },
                ]),
                t
            );
        })();
    o
        .default(document)
        .on(
            "click.bs.button.data-api",
            '[data-toggle^="button"]',
            function (t) {
                var e = t.target,
                    n = e;
                if (
                    (o.default(e).hasClass("btn") ||
                        (e = o.default(e).closest(".btn")[0]),
                    !e ||
                        e.hasAttribute("disabled") ||
                        e.classList.contains("disabled"))
                )
                    t.preventDefault();
                else {
                    var i = e.querySelector('input:not([type="hidden"])');
                    if (
                        i &&
                        (i.hasAttribute("disabled") ||
                            i.classList.contains("disabled"))
                    )
                        return void t.preventDefault();
                    ("INPUT" !== n.tagName && "LABEL" === e.tagName) ||
                        m._jQueryInterface.call(
                            o.default(e),
                            "toggle",
                            "INPUT" === n.tagName
                        );
                }
            }
        )
        .on(
            "focus.bs.button.data-api blur.bs.button.data-api",
            '[data-toggle^="button"]',
            function (t) {
                var e = o.default(t.target).closest(".btn")[0];
                o.default(e).toggleClass("focus", /^focus(in)?$/.test(t.type));
            }
        ),
        o.default(window).on("load.bs.button.data-api", function () {
            for (
                var t = [].slice.call(
                        document.querySelectorAll(
                            '[data-toggle="buttons"] .btn'
                        )
                    ),
                    e = 0,
                    n = t.length;
                e < n;
                e++
            ) {
                var i = t[e],
                    o = i.querySelector('input:not([type="hidden"])');
                o.checked || o.hasAttribute("checked")
                    ? i.classList.add("active")
                    : i.classList.remove("active");
            }
            for (
                var a = 0,
                    s = (t = [].slice.call(
                        document.querySelectorAll('[data-toggle="button"]')
                    )).length;
                a < s;
                a++
            ) {
                var l = t[a];
                "true" === l.getAttribute("aria-pressed")
                    ? l.classList.add("active")
                    : l.classList.remove("active");
            }
        }),
        (o.default.fn.button = m._jQueryInterface),
        (o.default.fn.button.Constructor = m),
        (o.default.fn.button.noConflict = function () {
            return (o.default.fn.button = g), m._jQueryInterface;
        });
    var p = "carousel",
        _ = ".bs.carousel",
        v = o.default.fn[p],
        b = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0,
        },
        y = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean",
        },
        E = { TOUCH: "touch", PEN: "pen" },
        w = (function () {
            function t(t, e) {
                (this._items = null),
                    (this._interval = null),
                    (this._activeElement = null),
                    (this._isPaused = !1),
                    (this._isSliding = !1),
                    (this.touchTimeout = null),
                    (this.touchStartX = 0),
                    (this.touchDeltaX = 0),
                    (this._config = this._getConfig(e)),
                    (this._element = t),
                    (this._indicatorsElement = this._element.querySelector(
                        ".carousel-indicators"
                    )),
                    (this._touchSupported =
                        "ontouchstart" in document.documentElement ||
                        navigator.maxTouchPoints > 0),
                    (this._pointerEvent = Boolean(
                        window.PointerEvent || window.MSPointerEvent
                    )),
                    this._addEventListeners();
            }
            var e = t.prototype;
            return (
                (e.next = function () {
                    this._isSliding || this._slide("next");
                }),
                (e.nextWhenVisible = function () {
                    var t = o.default(this._element);
                    !document.hidden &&
                        t.is(":visible") &&
                        "hidden" !== t.css("visibility") &&
                        this.next();
                }),
                (e.prev = function () {
                    this._isSliding || this._slide("prev");
                }),
                (e.pause = function (t) {
                    t || (this._isPaused = !0),
                        this._element.querySelector(
                            ".carousel-item-next, .carousel-item-prev"
                        ) &&
                            (d.triggerTransitionEnd(this._element),
                            this.cycle(!0)),
                        clearInterval(this._interval),
                        (this._interval = null);
                }),
                (e.cycle = function (t) {
                    t || (this._isPaused = !1),
                        this._interval &&
                            (clearInterval(this._interval),
                            (this._interval = null)),
                        this._config.interval &&
                            !this._isPaused &&
                            (this._interval = setInterval(
                                (document.visibilityState
                                    ? this.nextWhenVisible
                                    : this.next
                                ).bind(this),
                                this._config.interval
                            ));
                }),
                (e.to = function (t) {
                    var e = this;
                    this._activeElement = this._element.querySelector(
                        ".active.carousel-item"
                    );
                    var n = this._getItemIndex(this._activeElement);
                    if (!(t > this._items.length - 1 || t < 0))
                        if (this._isSliding)
                            o.default(this._element).one(
                                "slid.bs.carousel",
                                function () {
                                    return e.to(t);
                                }
                            );
                        else {
                            if (n === t) return this.pause(), void this.cycle();
                            var i = t > n ? "next" : "prev";
                            this._slide(i, this._items[t]);
                        }
                }),
                (e.dispose = function () {
                    o.default(this._element).off(_),
                        o.default.removeData(this._element, "bs.carousel"),
                        (this._items = null),
                        (this._config = null),
                        (this._element = null),
                        (this._interval = null),
                        (this._isPaused = null),
                        (this._isSliding = null),
                        (this._activeElement = null),
                        (this._indicatorsElement = null);
                }),
                (e._getConfig = function (t) {
                    return (t = r({}, b, t)), d.typeCheckConfig(p, t, y), t;
                }),
                (e._handleSwipe = function () {
                    var t = Math.abs(this.touchDeltaX);
                    if (!(t <= 40)) {
                        var e = t / this.touchDeltaX;
                        (this.touchDeltaX = 0),
                            e > 0 && this.prev(),
                            e < 0 && this.next();
                    }
                }),
                (e._addEventListeners = function () {
                    var t = this;
                    this._config.keyboard &&
                        o
                            .default(this._element)
                            .on("keydown.bs.carousel", function (e) {
                                return t._keydown(e);
                            }),
                        "hover" === this._config.pause &&
                            o
                                .default(this._element)
                                .on("mouseenter.bs.carousel", function (e) {
                                    return t.pause(e);
                                })
                                .on("mouseleave.bs.carousel", function (e) {
                                    return t.cycle(e);
                                }),
                        this._config.touch && this._addTouchEventListeners();
                }),
                (e._addTouchEventListeners = function () {
                    var t = this;
                    if (this._touchSupported) {
                        var e = function (e) {
                                t._pointerEvent &&
                                E[e.originalEvent.pointerType.toUpperCase()]
                                    ? (t.touchStartX = e.originalEvent.clientX)
                                    : t._pointerEvent ||
                                      (t.touchStartX =
                                          e.originalEvent.touches[0].clientX);
                            },
                            n = function (e) {
                                t._pointerEvent &&
                                    E[
                                        e.originalEvent.pointerType.toUpperCase()
                                    ] &&
                                    (t.touchDeltaX =
                                        e.originalEvent.clientX -
                                        t.touchStartX),
                                    t._handleSwipe(),
                                    "hover" === t._config.pause &&
                                        (t.pause(),
                                        t.touchTimeout &&
                                            clearTimeout(t.touchTimeout),
                                        (t.touchTimeout = setTimeout(function (
                                            e
                                        ) {
                                            return t.cycle(e);
                                        },
                                        500 + t._config.interval)));
                            };
                        o
                            .default(
                                this._element.querySelectorAll(
                                    ".carousel-item img"
                                )
                            )
                            .on("dragstart.bs.carousel", function (t) {
                                return t.preventDefault();
                            }),
                            this._pointerEvent
                                ? (o
                                      .default(this._element)
                                      .on(
                                          "pointerdown.bs.carousel",
                                          function (t) {
                                              return e(t);
                                          }
                                      ),
                                  o
                                      .default(this._element)
                                      .on(
                                          "pointerup.bs.carousel",
                                          function (t) {
                                              return n(t);
                                          }
                                      ),
                                  this._element.classList.add("pointer-event"))
                                : (o
                                      .default(this._element)
                                      .on(
                                          "touchstart.bs.carousel",
                                          function (t) {
                                              return e(t);
                                          }
                                      ),
                                  o
                                      .default(this._element)
                                      .on(
                                          "touchmove.bs.carousel",
                                          function (e) {
                                              return (function (e) {
                                                  e.originalEvent.touches &&
                                                  e.originalEvent.touches
                                                      .length > 1
                                                      ? (t.touchDeltaX = 0)
                                                      : (t.touchDeltaX =
                                                            e.originalEvent
                                                                .touches[0]
                                                                .clientX -
                                                            t.touchStartX);
                                              })(e);
                                          }
                                      ),
                                  o
                                      .default(this._element)
                                      .on("touchend.bs.carousel", function (t) {
                                          return n(t);
                                      }));
                    }
                }),
                (e._keydown = function (t) {
                    if (!/input|textarea/i.test(t.target.tagName))
                        switch (t.which) {
                            case 37:
                                t.preventDefault(), this.prev();
                                break;
                            case 39:
                                t.preventDefault(), this.next();
                        }
                }),
                (e._getItemIndex = function (t) {
                    return (
                        (this._items =
                            t && t.parentNode
                                ? [].slice.call(
                                      t.parentNode.querySelectorAll(
                                          ".carousel-item"
                                      )
                                  )
                                : []),
                        this._items.indexOf(t)
                    );
                }),
                (e._getItemByDirection = function (t, e) {
                    var n = "next" === t,
                        i = "prev" === t,
                        o = this._getItemIndex(e),
                        a = this._items.length - 1;
                    if (
                        ((i && 0 === o) || (n && o === a)) &&
                        !this._config.wrap
                    )
                        return e;
                    var s = (o + ("prev" === t ? -1 : 1)) % this._items.length;
                    return -1 === s
                        ? this._items[this._items.length - 1]
                        : this._items[s];
                }),
                (e._triggerSlideEvent = function (t, e) {
                    var n = this._getItemIndex(t),
                        i = this._getItemIndex(
                            this._element.querySelector(".active.carousel-item")
                        ),
                        a = o.default.Event("slide.bs.carousel", {
                            relatedTarget: t,
                            direction: e,
                            from: i,
                            to: n,
                        });
                    return o.default(this._element).trigger(a), a;
                }),
                (e._setActiveIndicatorElement = function (t) {
                    if (this._indicatorsElement) {
                        var e = [].slice.call(
                            this._indicatorsElement.querySelectorAll(".active")
                        );
                        o.default(e).removeClass("active");
                        var n =
                            this._indicatorsElement.children[
                                this._getItemIndex(t)
                            ];
                        n && o.default(n).addClass("active");
                    }
                }),
                (e._slide = function (t, e) {
                    var n,
                        i,
                        a,
                        s = this,
                        l = this._element.querySelector(
                            ".active.carousel-item"
                        ),
                        r = this._getItemIndex(l),
                        u = e || (l && this._getItemByDirection(t, l)),
                        f = this._getItemIndex(u),
                        c = Boolean(this._interval);
                    if (
                        ("next" === t
                            ? ((n = "carousel-item-left"),
                              (i = "carousel-item-next"),
                              (a = "left"))
                            : ((n = "carousel-item-right"),
                              (i = "carousel-item-prev"),
                              (a = "right")),
                        u && o.default(u).hasClass("active"))
                    )
                        this._isSliding = !1;
                    else if (
                        !this._triggerSlideEvent(u, a).isDefaultPrevented() &&
                        l &&
                        u
                    ) {
                        (this._isSliding = !0),
                            c && this.pause(),
                            this._setActiveIndicatorElement(u);
                        var h = o.default.Event("slid.bs.carousel", {
                            relatedTarget: u,
                            direction: a,
                            from: r,
                            to: f,
                        });
                        if (o.default(this._element).hasClass("slide")) {
                            o.default(u).addClass(i),
                                d.reflow(u),
                                o.default(l).addClass(n),
                                o.default(u).addClass(n);
                            var g = parseInt(
                                u.getAttribute("data-interval"),
                                10
                            );
                            g
                                ? ((this._config.defaultInterval =
                                      this._config.defaultInterval ||
                                      this._config.interval),
                                  (this._config.interval = g))
                                : (this._config.interval =
                                      this._config.defaultInterval ||
                                      this._config.interval);
                            var m = d.getTransitionDurationFromElement(l);
                            o.default(l)
                                .one(d.TRANSITION_END, function () {
                                    o
                                        .default(u)
                                        .removeClass(n + " " + i)
                                        .addClass("active"),
                                        o
                                            .default(l)
                                            .removeClass(
                                                "active " + i + " " + n
                                            ),
                                        (s._isSliding = !1),
                                        setTimeout(function () {
                                            return o
                                                .default(s._element)
                                                .trigger(h);
                                        }, 0);
                                })
                                .emulateTransitionEnd(m);
                        } else
                            o.default(l).removeClass("active"),
                                o.default(u).addClass("active"),
                                (this._isSliding = !1),
                                o.default(this._element).trigger(h);
                        c && this.cycle();
                    }
                }),
                (t._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = o.default(this).data("bs.carousel"),
                            i = r({}, b, o.default(this).data());
                        "object" == typeof e && (i = r({}, i, e));
                        var a = "string" == typeof e ? e : i.slide;
                        if (
                            (n ||
                                ((n = new t(this, i)),
                                o.default(this).data("bs.carousel", n)),
                            "number" == typeof e)
                        )
                            n.to(e);
                        else if ("string" == typeof a) {
                            if ("undefined" == typeof n[a])
                                throw new TypeError(
                                    'No method named "' + a + '"'
                                );
                            n[a]();
                        } else i.interval && i.ride && (n.pause(), n.cycle());
                    });
                }),
                (t._dataApiClickHandler = function (e) {
                    var n = d.getSelectorFromElement(this);
                    if (n) {
                        var i = o.default(n)[0];
                        if (i && o.default(i).hasClass("carousel")) {
                            var a = r(
                                    {},
                                    o.default(i).data(),
                                    o.default(this).data()
                                ),
                                s = this.getAttribute("data-slide-to");
                            s && (a.interval = !1),
                                t._jQueryInterface.call(o.default(i), a),
                                s && o.default(i).data("bs.carousel").to(s),
                                e.preventDefault();
                        }
                    }
                }),
                l(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.3";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return b;
                        },
                    },
                ]),
                t
            );
        })();
    o
        .default(document)
        .on(
            "click.bs.carousel.data-api",
            "[data-slide], [data-slide-to]",
            w._dataApiClickHandler
        ),
        o.default(window).on("load.bs.carousel.data-api", function () {
            for (
                var t = [].slice.call(
                        document.querySelectorAll('[data-ride="carousel"]')
                    ),
                    e = 0,
                    n = t.length;
                e < n;
                e++
            ) {
                var i = o.default(t[e]);
                w._jQueryInterface.call(i, i.data());
            }
        }),
        (o.default.fn[p] = w._jQueryInterface),
        (o.default.fn[p].Constructor = w),
        (o.default.fn[p].noConflict = function () {
            return (o.default.fn[p] = v), w._jQueryInterface;
        });
    var T = "collapse",
        C = o.default.fn[T],
        S = { toggle: !0, parent: "" },
        N = { toggle: "boolean", parent: "(string|element)" },
        D = (function () {
            function t(t, e) {
                (this._isTransitioning = !1),
                    (this._element = t),
                    (this._config = this._getConfig(e)),
                    (this._triggerArray = [].slice.call(
                        document.querySelectorAll(
                            '[data-toggle="collapse"][href="#' +
                                t.id +
                                '"],[data-toggle="collapse"][data-target="#' +
                                t.id +
                                '"]'
                        )
                    ));
                for (
                    var n = [].slice.call(
                            document.querySelectorAll(
                                '[data-toggle="collapse"]'
                            )
                        ),
                        i = 0,
                        o = n.length;
                    i < o;
                    i++
                ) {
                    var a = n[i],
                        s = d.getSelectorFromElement(a),
                        l = [].slice
                            .call(document.querySelectorAll(s))
                            .filter(function (e) {
                                return e === t;
                            });
                    null !== s &&
                        l.length > 0 &&
                        ((this._selector = s), this._triggerArray.push(a));
                }
                (this._parent = this._config.parent ? this._getParent() : null),
                    this._config.parent ||
                        this._addAriaAndCollapsedClass(
                            this._element,
                            this._triggerArray
                        ),
                    this._config.toggle && this.toggle();
            }
            var e = t.prototype;
            return (
                (e.toggle = function () {
                    o.default(this._element).hasClass("show")
                        ? this.hide()
                        : this.show();
                }),
                (e.show = function () {
                    var e,
                        n,
                        i = this;
                    if (
                        !this._isTransitioning &&
                        !o.default(this._element).hasClass("show") &&
                        (this._parent &&
                            0 ===
                                (e = [].slice
                                    .call(
                                        this._parent.querySelectorAll(
                                            ".show, .collapsing"
                                        )
                                    )
                                    .filter(function (t) {
                                        return "string" ==
                                            typeof i._config.parent
                                            ? t.getAttribute("data-parent") ===
                                                  i._config.parent
                                            : t.classList.contains("collapse");
                                    })).length &&
                            (e = null),
                        !(
                            e &&
                            (n = o
                                .default(e)
                                .not(this._selector)
                                .data("bs.collapse")) &&
                            n._isTransitioning
                        ))
                    ) {
                        var a = o.default.Event("show.bs.collapse");
                        if (
                            (o.default(this._element).trigger(a),
                            !a.isDefaultPrevented())
                        ) {
                            e &&
                                (t._jQueryInterface.call(
                                    o.default(e).not(this._selector),
                                    "hide"
                                ),
                                n || o.default(e).data("bs.collapse", null));
                            var s = this._getDimension();
                            o
                                .default(this._element)
                                .removeClass("collapse")
                                .addClass("collapsing"),
                                (this._element.style[s] = 0),
                                this._triggerArray.length &&
                                    o
                                        .default(this._triggerArray)
                                        .removeClass("collapsed")
                                        .attr("aria-expanded", !0),
                                this.setTransitioning(!0);
                            var l =
                                    "scroll" +
                                    (s[0].toUpperCase() + s.slice(1)),
                                r = d.getTransitionDurationFromElement(
                                    this._element
                                );
                            o
                                .default(this._element)
                                .one(d.TRANSITION_END, function () {
                                    o
                                        .default(i._element)
                                        .removeClass("collapsing")
                                        .addClass("collapse show"),
                                        (i._element.style[s] = ""),
                                        i.setTransitioning(!1),
                                        o
                                            .default(i._element)
                                            .trigger("shown.bs.collapse");
                                })
                                .emulateTransitionEnd(r),
                                (this._element.style[s] =
                                    this._element[l] + "px");
                        }
                    }
                }),
                (e.hide = function () {
                    var t = this;
                    if (
                        !this._isTransitioning &&
                        o.default(this._element).hasClass("show")
                    ) {
                        var e = o.default.Event("hide.bs.collapse");
                        if (
                            (o.default(this._element).trigger(e),
                            !e.isDefaultPrevented())
                        ) {
                            var n = this._getDimension();
                            (this._element.style[n] =
                                this._element.getBoundingClientRect()[n] +
                                "px"),
                                d.reflow(this._element),
                                o
                                    .default(this._element)
                                    .addClass("collapsing")
                                    .removeClass("collapse show");
                            var i = this._triggerArray.length;
                            if (i > 0)
                                for (var a = 0; a < i; a++) {
                                    var s = this._triggerArray[a],
                                        l = d.getSelectorFromElement(s);
                                    if (null !== l)
                                        o
                                            .default(
                                                [].slice.call(
                                                    document.querySelectorAll(l)
                                                )
                                            )
                                            .hasClass("show") ||
                                            o
                                                .default(s)
                                                .addClass("collapsed")
                                                .attr("aria-expanded", !1);
                                }
                            this.setTransitioning(!0);
                            this._element.style[n] = "";
                            var r = d.getTransitionDurationFromElement(
                                this._element
                            );
                            o.default(this._element)
                                .one(d.TRANSITION_END, function () {
                                    t.setTransitioning(!1),
                                        o
                                            .default(t._element)
                                            .removeClass("collapsing")
                                            .addClass("collapse")
                                            .trigger("hidden.bs.collapse");
                                })
                                .emulateTransitionEnd(r);
                        }
                    }
                }),
                (e.setTransitioning = function (t) {
                    this._isTransitioning = t;
                }),
                (e.dispose = function () {
                    o.default.removeData(this._element, "bs.collapse"),
                        (this._config = null),
                        (this._parent = null),
                        (this._element = null),
                        (this._triggerArray = null),
                        (this._isTransitioning = null);
                }),
                (e._getConfig = function (t) {
                    return (
                        ((t = r({}, S, t)).toggle = Boolean(t.toggle)),
                        d.typeCheckConfig(T, t, N),
                        t
                    );
                }),
                (e._getDimension = function () {
                    return o.default(this._element).hasClass("width")
                        ? "width"
                        : "height";
                }),
                (e._getParent = function () {
                    var e,
                        n = this;
                    d.isElement(this._config.parent)
                        ? ((e = this._config.parent),
                          "undefined" != typeof this._config.parent.jquery &&
                              (e = this._config.parent[0]))
                        : (e = document.querySelector(this._config.parent));
                    var i =
                            '[data-toggle="collapse"][data-parent="' +
                            this._config.parent +
                            '"]',
                        a = [].slice.call(e.querySelectorAll(i));
                    return (
                        o.default(a).each(function (e, i) {
                            n._addAriaAndCollapsedClass(
                                t._getTargetFromElement(i),
                                [i]
                            );
                        }),
                        e
                    );
                }),
                (e._addAriaAndCollapsedClass = function (t, e) {
                    var n = o.default(t).hasClass("show");
                    e.length &&
                        o
                            .default(e)
                            .toggleClass("collapsed", !n)
                            .attr("aria-expanded", n);
                }),
                (t._getTargetFromElement = function (t) {
                    var e = d.getSelectorFromElement(t);
                    return e ? document.querySelector(e) : null;
                }),
                (t._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = o.default(this),
                            i = n.data("bs.collapse"),
                            a = r(
                                {},
                                S,
                                n.data(),
                                "object" == typeof e && e ? e : {}
                            );
                        if (
                            (!i &&
                                a.toggle &&
                                "string" == typeof e &&
                                /show|hide/.test(e) &&
                                (a.toggle = !1),
                            i ||
                                ((i = new t(this, a)),
                                n.data("bs.collapse", i)),
                            "string" == typeof e)
                        ) {
                            if ("undefined" == typeof i[e])
                                throw new TypeError(
                                    'No method named "' + e + '"'
                                );
                            i[e]();
                        }
                    });
                }),
                l(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.3";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return S;
                        },
                    },
                ]),
                t
            );
        })();
    o
        .default(document)
        .on(
            "click.bs.collapse.data-api",
            '[data-toggle="collapse"]',
            function (t) {
                "A" === t.currentTarget.tagName && t.preventDefault();
                var e = o.default(this),
                    n = d.getSelectorFromElement(this),
                    i = [].slice.call(document.querySelectorAll(n));
                o.default(i).each(function () {
                    var t = o.default(this),
                        n = t.data("bs.collapse") ? "toggle" : e.data();
                    D._jQueryInterface.call(t, n);
                });
            }
        ),
        (o.default.fn[T] = D._jQueryInterface),
        (o.default.fn[T].Constructor = D),
        (o.default.fn[T].noConflict = function () {
            return (o.default.fn[T] = C), D._jQueryInterface;
        });
    var k = "dropdown",
        A = o.default.fn[k],
        I = new RegExp("38|40|27"),
        j = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null,
        },
        O = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)",
        },
        x = (function () {
            function t(t, e) {
                (this._element = t),
                    (this._popper = null),
                    (this._config = this._getConfig(e)),
                    (this._menu = this._getMenuElement()),
                    (this._inNavbar = this._detectNavbar()),
                    this._addEventListeners();
            }
            var e = t.prototype;
            return (
                (e.toggle = function () {
                    if (
                        !this._element.disabled &&
                        !o.default(this._element).hasClass("disabled")
                    ) {
                        var e = o.default(this._menu).hasClass("show");
                        t._clearMenus(), e || this.show(!0);
                    }
                }),
                (e.show = function (e) {
                    if (
                        (void 0 === e && (e = !1),
                        !(
                            this._element.disabled ||
                            o.default(this._element).hasClass("disabled") ||
                            o.default(this._menu).hasClass("show")
                        ))
                    ) {
                        var n = { relatedTarget: this._element },
                            i = o.default.Event("show.bs.dropdown", n),
                            s = t._getParentFromElement(this._element);
                        if (
                            (o.default(s).trigger(i), !i.isDefaultPrevented())
                        ) {
                            if (!this._inNavbar && e) {
                                if ("undefined" == typeof a.default)
                                    throw new TypeError(
                                        "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                                    );
                                var l = this._element;
                                "parent" === this._config.reference
                                    ? (l = s)
                                    : d.isElement(this._config.reference) &&
                                      ((l = this._config.reference),
                                      "undefined" !=
                                          typeof this._config.reference
                                              .jquery &&
                                          (l = this._config.reference[0])),
                                    "scrollParent" !== this._config.boundary &&
                                        o
                                            .default(s)
                                            .addClass("position-static"),
                                    (this._popper = new a.default(
                                        l,
                                        this._menu,
                                        this._getPopperConfig()
                                    ));
                            }
                            "ontouchstart" in document.documentElement &&
                                0 ===
                                    o.default(s).closest(".navbar-nav")
                                        .length &&
                                o
                                    .default(document.body)
                                    .children()
                                    .on("mouseover", null, o.default.noop),
                                this._element.focus(),
                                this._element.setAttribute("aria-expanded", !0),
                                o.default(this._menu).toggleClass("show"),
                                o
                                    .default(s)
                                    .toggleClass("show")
                                    .trigger(
                                        o.default.Event("shown.bs.dropdown", n)
                                    );
                        }
                    }
                }),
                (e.hide = function () {
                    if (
                        !this._element.disabled &&
                        !o.default(this._element).hasClass("disabled") &&
                        o.default(this._menu).hasClass("show")
                    ) {
                        var e = { relatedTarget: this._element },
                            n = o.default.Event("hide.bs.dropdown", e),
                            i = t._getParentFromElement(this._element);
                        o.default(i).trigger(n),
                            n.isDefaultPrevented() ||
                                (this._popper && this._popper.destroy(),
                                o.default(this._menu).toggleClass("show"),
                                o
                                    .default(i)
                                    .toggleClass("show")
                                    .trigger(
                                        o.default.Event("hidden.bs.dropdown", e)
                                    ));
                    }
                }),
                (e.dispose = function () {
                    o.default.removeData(this._element, "bs.dropdown"),
                        o.default(this._element).off(".bs.dropdown"),
                        (this._element = null),
                        (this._menu = null),
                        null !== this._popper &&
                            (this._popper.destroy(), (this._popper = null));
                }),
                (e.update = function () {
                    (this._inNavbar = this._detectNavbar()),
                        null !== this._popper && this._popper.scheduleUpdate();
                }),
                (e._addEventListeners = function () {
                    var t = this;
                    o.default(this._element).on(
                        "click.bs.dropdown",
                        function (e) {
                            e.preventDefault(), e.stopPropagation(), t.toggle();
                        }
                    );
                }),
                (e._getConfig = function (t) {
                    return (
                        (t = r(
                            {},
                            this.constructor.Default,
                            o.default(this._element).data(),
                            t
                        )),
                        d.typeCheckConfig(k, t, this.constructor.DefaultType),
                        t
                    );
                }),
                (e._getMenuElement = function () {
                    if (!this._menu) {
                        var e = t._getParentFromElement(this._element);
                        e && (this._menu = e.querySelector(".dropdown-menu"));
                    }
                    return this._menu;
                }),
                (e._getPlacement = function () {
                    var t = o.default(this._element.parentNode),
                        e = "bottom-start";
                    return (
                        t.hasClass("dropup")
                            ? (e = o
                                  .default(this._menu)
                                  .hasClass("dropdown-menu-right")
                                  ? "top-end"
                                  : "top-start")
                            : t.hasClass("dropright")
                            ? (e = "right-start")
                            : t.hasClass("dropleft")
                            ? (e = "left-start")
                            : o
                                  .default(this._menu)
                                  .hasClass("dropdown-menu-right") &&
                              (e = "bottom-end"),
                        e
                    );
                }),
                (e._detectNavbar = function () {
                    return (
                        o.default(this._element).closest(".navbar").length > 0
                    );
                }),
                (e._getOffset = function () {
                    var t = this,
                        e = {};
                    return (
                        "function" == typeof this._config.offset
                            ? (e.fn = function (e) {
                                  return (
                                      (e.offsets = r(
                                          {},
                                          e.offsets,
                                          t._config.offset(
                                              e.offsets,
                                              t._element
                                          ) || {}
                                      )),
                                      e
                                  );
                              })
                            : (e.offset = this._config.offset),
                        e
                    );
                }),
                (e._getPopperConfig = function () {
                    var t = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: this._getOffset(),
                            flip: { enabled: this._config.flip },
                            preventOverflow: {
                                boundariesElement: this._config.boundary,
                            },
                        },
                    };
                    return (
                        "static" === this._config.display &&
                            (t.modifiers.applyStyle = { enabled: !1 }),
                        r({}, t, this._config.popperConfig)
                    );
                }),
                (t._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = o.default(this).data("bs.dropdown");
                        if (
                            (n ||
                                ((n = new t(
                                    this,
                                    "object" == typeof e ? e : null
                                )),
                                o.default(this).data("bs.dropdown", n)),
                            "string" == typeof e)
                        ) {
                            if ("undefined" == typeof n[e])
                                throw new TypeError(
                                    'No method named "' + e + '"'
                                );
                            n[e]();
                        }
                    });
                }),
                (t._clearMenus = function (e) {
                    if (
                        !e ||
                        (3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    )
                        for (
                            var n = [].slice.call(
                                    document.querySelectorAll(
                                        '[data-toggle="dropdown"]'
                                    )
                                ),
                                i = 0,
                                a = n.length;
                            i < a;
                            i++
                        ) {
                            var s = t._getParentFromElement(n[i]),
                                l = o.default(n[i]).data("bs.dropdown"),
                                r = { relatedTarget: n[i] };
                            if (
                                (e && "click" === e.type && (r.clickEvent = e),
                                l)
                            ) {
                                var u = l._menu;
                                if (
                                    o.default(s).hasClass("show") &&
                                    !(
                                        e &&
                                        (("click" === e.type &&
                                            /input|textarea/i.test(
                                                e.target.tagName
                                            )) ||
                                            ("keyup" === e.type &&
                                                9 === e.which)) &&
                                        o.default.contains(s, e.target)
                                    )
                                ) {
                                    var d = o.default.Event(
                                        "hide.bs.dropdown",
                                        r
                                    );
                                    o.default(s).trigger(d),
                                        d.isDefaultPrevented() ||
                                            ("ontouchstart" in
                                                document.documentElement &&
                                                o
                                                    .default(document.body)
                                                    .children()
                                                    .off(
                                                        "mouseover",
                                                        null,
                                                        o.default.noop
                                                    ),
                                            n[i].setAttribute(
                                                "aria-expanded",
                                                "false"
                                            ),
                                            l._popper && l._popper.destroy(),
                                            o.default(u).removeClass("show"),
                                            o
                                                .default(s)
                                                .removeClass("show")
                                                .trigger(
                                                    o.default.Event(
                                                        "hidden.bs.dropdown",
                                                        r
                                                    )
                                                ));
                                }
                            }
                        }
                }),
                (t._getParentFromElement = function (t) {
                    var e,
                        n = d.getSelectorFromElement(t);
                    return (
                        n && (e = document.querySelector(n)), e || t.parentNode
                    );
                }),
                (t._dataApiKeydownHandler = function (e) {
                    if (
                        !(/input|textarea/i.test(e.target.tagName)
                            ? 32 === e.which ||
                              (27 !== e.which &&
                                  ((40 !== e.which && 38 !== e.which) ||
                                      o
                                          .default(e.target)
                                          .closest(".dropdown-menu").length))
                            : !I.test(e.which)) &&
                        !this.disabled &&
                        !o.default(this).hasClass("disabled")
                    ) {
                        var n = t._getParentFromElement(this),
                            i = o.default(n).hasClass("show");
                        if (i || 27 !== e.which) {
                            if (
                                (e.preventDefault(),
                                e.stopPropagation(),
                                !i || 27 === e.which || 32 === e.which)
                            )
                                return (
                                    27 === e.which &&
                                        o
                                            .default(
                                                n.querySelector(
                                                    '[data-toggle="dropdown"]'
                                                )
                                            )
                                            .trigger("focus"),
                                    void o.default(this).trigger("click")
                                );
                            var a = [].slice
                                .call(
                                    n.querySelectorAll(
                                        ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                                    )
                                )
                                .filter(function (t) {
                                    return o.default(t).is(":visible");
                                });
                            if (0 !== a.length) {
                                var s = a.indexOf(e.target);
                                38 === e.which && s > 0 && s--,
                                    40 === e.which && s < a.length - 1 && s++,
                                    s < 0 && (s = 0),
                                    a[s].focus();
                            }
                        }
                    }
                }),
                l(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.3";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return j;
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return O;
                        },
                    },
                ]),
                t
            );
        })();
    o
        .default(document)
        .on(
            "keydown.bs.dropdown.data-api",
            '[data-toggle="dropdown"]',
            x._dataApiKeydownHandler
        )
        .on(
            "keydown.bs.dropdown.data-api",
            ".dropdown-menu",
            x._dataApiKeydownHandler
        )
        .on(
            "click.bs.dropdown.data-api keyup.bs.dropdown.data-api",
            x._clearMenus
        )
        .on(
            "click.bs.dropdown.data-api",
            '[data-toggle="dropdown"]',
            function (t) {
                t.preventDefault(),
                    t.stopPropagation(),
                    x._jQueryInterface.call(o.default(this), "toggle");
            }
        )
        .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
            t.stopPropagation();
        }),
        (o.default.fn[k] = x._jQueryInterface),
        (o.default.fn[k].Constructor = x),
        (o.default.fn[k].noConflict = function () {
            return (o.default.fn[k] = A), x._jQueryInterface;
        });
    var P = o.default.fn.modal,
        R = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        L = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean",
        },
        q = (function () {
            function t(t, e) {
                (this._config = this._getConfig(e)),
                    (this._element = t),
                    (this._dialog = t.querySelector(".modal-dialog")),
                    (this._backdrop = null),
                    (this._isShown = !1),
                    (this._isBodyOverflowing = !1),
                    (this._ignoreBackdropClick = !1),
                    (this._isTransitioning = !1),
                    (this._scrollbarWidth = 0);
            }
            var e = t.prototype;
            return (
                (e.toggle = function (t) {
                    return this._isShown ? this.hide() : this.show(t);
                }),
                (e.show = function (t) {
                    var e = this;
                    if (!this._isShown && !this._isTransitioning) {
                        o.default(this._element).hasClass("fade") &&
                            (this._isTransitioning = !0);
                        var n = o.default.Event("show.bs.modal", {
                            relatedTarget: t,
                        });
                        o.default(this._element).trigger(n),
                            this._isShown ||
                                n.isDefaultPrevented() ||
                                ((this._isShown = !0),
                                this._checkScrollbar(),
                                this._setScrollbar(),
                                this._adjustDialog(),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                o
                                    .default(this._element)
                                    .on(
                                        "click.dismiss.bs.modal",
                                        '[data-dismiss="modal"]',
                                        function (t) {
                                            return e.hide(t);
                                        }
                                    ),
                                o
                                    .default(this._dialog)
                                    .on(
                                        "mousedown.dismiss.bs.modal",
                                        function () {
                                            o.default(e._element).one(
                                                "mouseup.dismiss.bs.modal",
                                                function (t) {
                                                    o
                                                        .default(t.target)
                                                        .is(e._element) &&
                                                        (e._ignoreBackdropClick =
                                                            !0);
                                                }
                                            );
                                        }
                                    ),
                                this._showBackdrop(function () {
                                    return e._showElement(t);
                                }));
                    }
                }),
                (e.hide = function (t) {
                    var e = this;
                    if (
                        (t && t.preventDefault(),
                        this._isShown && !this._isTransitioning)
                    ) {
                        var n = o.default.Event("hide.bs.modal");
                        if (
                            (o.default(this._element).trigger(n),
                            this._isShown && !n.isDefaultPrevented())
                        ) {
                            this._isShown = !1;
                            var i = o.default(this._element).hasClass("fade");
                            if (
                                (i && (this._isTransitioning = !0),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                o.default(document).off("focusin.bs.modal"),
                                o.default(this._element).removeClass("show"),
                                o
                                    .default(this._element)
                                    .off("click.dismiss.bs.modal"),
                                o
                                    .default(this._dialog)
                                    .off("mousedown.dismiss.bs.modal"),
                                i)
                            ) {
                                var a = d.getTransitionDurationFromElement(
                                    this._element
                                );
                                o.default(this._element)
                                    .one(d.TRANSITION_END, function (t) {
                                        return e._hideModal(t);
                                    })
                                    .emulateTransitionEnd(a);
                            } else this._hideModal();
                        }
                    }
                }),
                (e.dispose = function () {
                    [window, this._element, this._dialog].forEach(function (t) {
                        return o.default(t).off(".bs.modal");
                    }),
                        o.default(document).off("focusin.bs.modal"),
                        o.default.removeData(this._element, "bs.modal"),
                        (this._config = null),
                        (this._element = null),
                        (this._dialog = null),
                        (this._backdrop = null),
                        (this._isShown = null),
                        (this._isBodyOverflowing = null),
                        (this._ignoreBackdropClick = null),
                        (this._isTransitioning = null),
                        (this._scrollbarWidth = null);
                }),
                (e.handleUpdate = function () {
                    this._adjustDialog();
                }),
                (e._getConfig = function (t) {
                    return (
                        (t = r({}, R, t)), d.typeCheckConfig("modal", t, L), t
                    );
                }),
                (e._triggerBackdropTransition = function () {
                    var t = this;
                    if ("static" === this._config.backdrop) {
                        var e = o.default.Event("hidePrevented.bs.modal");
                        if (
                            (o.default(this._element).trigger(e),
                            e.isDefaultPrevented())
                        )
                            return;
                        var n =
                            this._element.scrollHeight >
                            document.documentElement.clientHeight;
                        n || (this._element.style.overflowY = "hidden"),
                            this._element.classList.add("modal-static");
                        var i = d.getTransitionDurationFromElement(
                            this._dialog
                        );
                        o.default(this._element).off(d.TRANSITION_END),
                            o
                                .default(this._element)
                                .one(d.TRANSITION_END, function () {
                                    t._element.classList.remove("modal-static"),
                                        n ||
                                            o
                                                .default(t._element)
                                                .one(
                                                    d.TRANSITION_END,
                                                    function () {
                                                        t._element.style.overflowY =
                                                            "";
                                                    }
                                                )
                                                .emulateTransitionEnd(
                                                    t._element,
                                                    i
                                                );
                                })
                                .emulateTransitionEnd(i),
                            this._element.focus();
                    } else this.hide();
                }),
                (e._showElement = function (t) {
                    var e = this,
                        n = o.default(this._element).hasClass("fade"),
                        i = this._dialog
                            ? this._dialog.querySelector(".modal-body")
                            : null;
                    (this._element.parentNode &&
                        this._element.parentNode.nodeType ===
                            Node.ELEMENT_NODE) ||
                        document.body.appendChild(this._element),
                        (this._element.style.display = "block"),
                        this._element.removeAttribute("aria-hidden"),
                        this._element.setAttribute("aria-modal", !0),
                        this._element.setAttribute("role", "dialog"),
                        o
                            .default(this._dialog)
                            .hasClass("modal-dialog-scrollable") && i
                            ? (i.scrollTop = 0)
                            : (this._element.scrollTop = 0),
                        n && d.reflow(this._element),
                        o.default(this._element).addClass("show"),
                        this._config.focus && this._enforceFocus();
                    var a = o.default.Event("shown.bs.modal", {
                            relatedTarget: t,
                        }),
                        s = function () {
                            e._config.focus && e._element.focus(),
                                (e._isTransitioning = !1),
                                o.default(e._element).trigger(a);
                        };
                    if (n) {
                        var l = d.getTransitionDurationFromElement(
                            this._dialog
                        );
                        o.default(this._dialog)
                            .one(d.TRANSITION_END, s)
                            .emulateTransitionEnd(l);
                    } else s();
                }),
                (e._enforceFocus = function () {
                    var t = this;
                    o.default(document)
                        .off("focusin.bs.modal")
                        .on("focusin.bs.modal", function (e) {
                            document !== e.target &&
                                t._element !== e.target &&
                                0 ===
                                    o.default(t._element).has(e.target)
                                        .length &&
                                t._element.focus();
                        });
                }),
                (e._setEscapeEvent = function () {
                    var t = this;
                    this._isShown
                        ? o
                              .default(this._element)
                              .on("keydown.dismiss.bs.modal", function (e) {
                                  t._config.keyboard && 27 === e.which
                                      ? (e.preventDefault(), t.hide())
                                      : t._config.keyboard ||
                                        27 !== e.which ||
                                        t._triggerBackdropTransition();
                              })
                        : this._isShown ||
                          o
                              .default(this._element)
                              .off("keydown.dismiss.bs.modal");
                }),
                (e._setResizeEvent = function () {
                    var t = this;
                    this._isShown
                        ? o.default(window).on("resize.bs.modal", function (e) {
                              return t.handleUpdate(e);
                          })
                        : o.default(window).off("resize.bs.modal");
                }),
                (e._hideModal = function () {
                    var t = this;
                    (this._element.style.display = "none"),
                        this._element.setAttribute("aria-hidden", !0),
                        this._element.removeAttribute("aria-modal"),
                        this._element.removeAttribute("role"),
                        (this._isTransitioning = !1),
                        this._showBackdrop(function () {
                            o.default(document.body).removeClass("modal-open"),
                                t._resetAdjustments(),
                                t._resetScrollbar(),
                                o
                                    .default(t._element)
                                    .trigger("hidden.bs.modal");
                        });
                }),
                (e._removeBackdrop = function () {
                    this._backdrop &&
                        (o.default(this._backdrop).remove(),
                        (this._backdrop = null));
                }),
                (e._showBackdrop = function (t) {
                    var e = this,
                        n = o.default(this._element).hasClass("fade")
                            ? "fade"
                            : "";
                    if (this._isShown && this._config.backdrop) {
                        if (
                            ((this._backdrop = document.createElement("div")),
                            (this._backdrop.className = "modal-backdrop"),
                            n && this._backdrop.classList.add(n),
                            o.default(this._backdrop).appendTo(document.body),
                            o
                                .default(this._element)
                                .on("click.dismiss.bs.modal", function (t) {
                                    e._ignoreBackdropClick
                                        ? (e._ignoreBackdropClick = !1)
                                        : t.target === t.currentTarget &&
                                          e._triggerBackdropTransition();
                                }),
                            n && d.reflow(this._backdrop),
                            o.default(this._backdrop).addClass("show"),
                            !t)
                        )
                            return;
                        if (!n) return void t();
                        var i = d.getTransitionDurationFromElement(
                            this._backdrop
                        );
                        o.default(this._backdrop)
                            .one(d.TRANSITION_END, t)
                            .emulateTransitionEnd(i);
                    } else if (!this._isShown && this._backdrop) {
                        o.default(this._backdrop).removeClass("show");
                        var a = function () {
                            e._removeBackdrop(), t && t();
                        };
                        if (o.default(this._element).hasClass("fade")) {
                            var s = d.getTransitionDurationFromElement(
                                this._backdrop
                            );
                            o.default(this._backdrop)
                                .one(d.TRANSITION_END, a)
                                .emulateTransitionEnd(s);
                        } else a();
                    } else t && t();
                }),
                (e._adjustDialog = function () {
                    var t =
                        this._element.scrollHeight >
                        document.documentElement.clientHeight;
                    !this._isBodyOverflowing &&
                        t &&
                        (this._element.style.paddingLeft =
                            this._scrollbarWidth + "px"),
                        this._isBodyOverflowing &&
                            !t &&
                            (this._element.style.paddingRight =
                                this._scrollbarWidth + "px");
                }),
                (e._resetAdjustments = function () {
                    (this._element.style.paddingLeft = ""),
                        (this._element.style.paddingRight = "");
                }),
                (e._checkScrollbar = function () {
                    var t = document.body.getBoundingClientRect();
                    (this._isBodyOverflowing =
                        Math.round(t.left + t.right) < window.innerWidth),
                        (this._scrollbarWidth = this._getScrollbarWidth());
                }),
                (e._setScrollbar = function () {
                    var t = this;
                    if (this._isBodyOverflowing) {
                        var e = [].slice.call(
                                document.querySelectorAll(
                                    ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
                                )
                            ),
                            n = [].slice.call(
                                document.querySelectorAll(".sticky-top")
                            );
                        o.default(e).each(function (e, n) {
                            var i = n.style.paddingRight,
                                a = o.default(n).css("padding-right");
                            o.default(n)
                                .data("padding-right", i)
                                .css(
                                    "padding-right",
                                    parseFloat(a) + t._scrollbarWidth + "px"
                                );
                        }),
                            o.default(n).each(function (e, n) {
                                var i = n.style.marginRight,
                                    a = o.default(n).css("margin-right");
                                o.default(n)
                                    .data("margin-right", i)
                                    .css(
                                        "margin-right",
                                        parseFloat(a) - t._scrollbarWidth + "px"
                                    );
                            });
                        var i = document.body.style.paddingRight,
                            a = o.default(document.body).css("padding-right");
                        o.default(document.body)
                            .data("padding-right", i)
                            .css(
                                "padding-right",
                                parseFloat(a) + this._scrollbarWidth + "px"
                            );
                    }
                    o.default(document.body).addClass("modal-open");
                }),
                (e._resetScrollbar = function () {
                    var t = [].slice.call(
                        document.querySelectorAll(
                            ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
                        )
                    );
                    o.default(t).each(function (t, e) {
                        var n = o.default(e).data("padding-right");
                        o.default(e).removeData("padding-right"),
                            (e.style.paddingRight = n || "");
                    });
                    var e = [].slice.call(
                        document.querySelectorAll(".sticky-top")
                    );
                    o.default(e).each(function (t, e) {
                        var n = o.default(e).data("margin-right");
                        "undefined" != typeof n &&
                            o
                                .default(e)
                                .css("margin-right", n)
                                .removeData("margin-right");
                    });
                    var n = o.default(document.body).data("padding-right");
                    o.default(document.body).removeData("padding-right"),
                        (document.body.style.paddingRight = n || "");
                }),
                (e._getScrollbarWidth = function () {
                    var t = document.createElement("div");
                    (t.className = "modal-scrollbar-measure"),
                        document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t), e;
                }),
                (t._jQueryInterface = function (e, n) {
                    return this.each(function () {
                        var i = o.default(this).data("bs.modal"),
                            a = r(
                                {},
                                R,
                                o.default(this).data(),
                                "object" == typeof e && e ? e : {}
                            );
                        if (
                            (i ||
                                ((i = new t(this, a)),
                                o.default(this).data("bs.modal", i)),
                            "string" == typeof e)
                        ) {
                            if ("undefined" == typeof i[e])
                                throw new TypeError(
                                    'No method named "' + e + '"'
                                );
                            i[e](n);
                        } else a.show && i.show(n);
                    });
                }),
                l(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.3";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return R;
                        },
                    },
                ]),
                t
            );
        })();
    o
        .default(document)
        .on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
            var e,
                n = this,
                i = d.getSelectorFromElement(this);
            i && (e = document.querySelector(i));
            var a = o.default(e).data("bs.modal")
                ? "toggle"
                : r({}, o.default(e).data(), o.default(this).data());
            ("A" !== this.tagName && "AREA" !== this.tagName) ||
                t.preventDefault();
            var s = o.default(e).one("show.bs.modal", function (t) {
                t.isDefaultPrevented() ||
                    s.one("hidden.bs.modal", function () {
                        o.default(n).is(":visible") && n.focus();
                    });
            });
            q._jQueryInterface.call(o.default(e), a, this);
        }),
        (o.default.fn.modal = q._jQueryInterface),
        (o.default.fn.modal.Constructor = q),
        (o.default.fn.modal.noConflict = function () {
            return (o.default.fn.modal = P), q._jQueryInterface;
        });
    var F = [
            "background",
            "cite",
            "href",
            "itemtype",
            "longdesc",
            "poster",
            "src",
            "xlink:href",
        ],
        Q = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: [],
        },
        B = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        H =
            /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function U(t, e, n) {
        if (0 === t.length) return t;
        if (n && "function" == typeof n) return n(t);
        for (
            var i = new window.DOMParser().parseFromString(t, "text/html"),
                o = Object.keys(e),
                a = [].slice.call(i.body.querySelectorAll("*")),
                s = function (t, n) {
                    var i = a[t],
                        s = i.nodeName.toLowerCase();
                    if (-1 === o.indexOf(i.nodeName.toLowerCase()))
                        return i.parentNode.removeChild(i), "continue";
                    var l = [].slice.call(i.attributes),
                        r = [].concat(e["*"] || [], e[s] || []);
                    l.forEach(function (t) {
                        (function (t, e) {
                            var n = t.nodeName.toLowerCase();
                            if (-1 !== e.indexOf(n))
                                return (
                                    -1 === F.indexOf(n) ||
                                    Boolean(
                                        t.nodeValue.match(B) ||
                                            t.nodeValue.match(H)
                                    )
                                );
                            for (
                                var i = e.filter(function (t) {
                                        return t instanceof RegExp;
                                    }),
                                    o = 0,
                                    a = i.length;
                                o < a;
                                o++
                            )
                                if (n.match(i[o])) return !0;
                            return !1;
                        })(t, r) || i.removeAttribute(t.nodeName);
                    });
                },
                l = 0,
                r = a.length;
            l < r;
            l++
        )
            s(l);
        return i.body.innerHTML;
    }
    var M = "tooltip",
        W = o.default.fn[M],
        V = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        z = ["sanitize", "whiteList", "sanitizeFn"],
        K = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)",
        },
        X = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left",
        },
        Y = {
            animation: !0,
            template:
                '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: Q,
            popperConfig: null,
        },
        $ = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip",
        },
        J = (function () {
            function t(t, e) {
                if ("undefined" == typeof a.default)
                    throw new TypeError(
                        "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
                    );
                (this._isEnabled = !0),
                    (this._timeout = 0),
                    (this._hoverState = ""),
                    (this._activeTrigger = {}),
                    (this._popper = null),
                    (this.element = t),
                    (this.config = this._getConfig(e)),
                    (this.tip = null),
                    this._setListeners();
            }
            var e = t.prototype;
            return (
                (e.enable = function () {
                    this._isEnabled = !0;
                }),
                (e.disable = function () {
                    this._isEnabled = !1;
                }),
                (e.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled;
                }),
                (e.toggle = function (t) {
                    if (this._isEnabled)
                        if (t) {
                            var e = this.constructor.DATA_KEY,
                                n = o.default(t.currentTarget).data(e);
                            n ||
                                ((n = new this.constructor(
                                    t.currentTarget,
                                    this._getDelegateConfig()
                                )),
                                o.default(t.currentTarget).data(e, n)),
                                (n._activeTrigger.click =
                                    !n._activeTrigger.click),
                                n._isWithActiveTrigger()
                                    ? n._enter(null, n)
                                    : n._leave(null, n);
                        } else {
                            if (
                                o.default(this.getTipElement()).hasClass("show")
                            )
                                return void this._leave(null, this);
                            this._enter(null, this);
                        }
                }),
                (e.dispose = function () {
                    clearTimeout(this._timeout),
                        o.default.removeData(
                            this.element,
                            this.constructor.DATA_KEY
                        ),
                        o.default(this.element).off(this.constructor.EVENT_KEY),
                        o
                            .default(this.element)
                            .closest(".modal")
                            .off("hide.bs.modal", this._hideModalHandler),
                        this.tip && o.default(this.tip).remove(),
                        (this._isEnabled = null),
                        (this._timeout = null),
                        (this._hoverState = null),
                        (this._activeTrigger = null),
                        this._popper && this._popper.destroy(),
                        (this._popper = null),
                        (this.element = null),
                        (this.config = null),
                        (this.tip = null);
                }),
                (e.show = function () {
                    var t = this;
                    if ("none" === o.default(this.element).css("display"))
                        throw new Error("Please use show on visible elements");
                    var e = o.default.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        o.default(this.element).trigger(e);
                        var n = d.findShadowRoot(this.element),
                            i = o.default.contains(
                                null !== n
                                    ? n
                                    : this.element.ownerDocument
                                          .documentElement,
                                this.element
                            );
                        if (e.isDefaultPrevented() || !i) return;
                        var s = this.getTipElement(),
                            l = d.getUID(this.constructor.NAME);
                        s.setAttribute("id", l),
                            this.element.setAttribute("aria-describedby", l),
                            this.setContent(),
                            this.config.animation &&
                                o.default(s).addClass("fade");
                        var r =
                                "function" == typeof this.config.placement
                                    ? this.config.placement.call(
                                          this,
                                          s,
                                          this.element
                                      )
                                    : this.config.placement,
                            u = this._getAttachment(r);
                        this.addAttachmentClass(u);
                        var f = this._getContainer();
                        o.default(s).data(this.constructor.DATA_KEY, this),
                            o.default.contains(
                                this.element.ownerDocument.documentElement,
                                this.tip
                            ) || o.default(s).appendTo(f),
                            o
                                .default(this.element)
                                .trigger(this.constructor.Event.INSERTED),
                            (this._popper = new a.default(
                                this.element,
                                s,
                                this._getPopperConfig(u)
                            )),
                            o.default(s).addClass("show"),
                            "ontouchstart" in document.documentElement &&
                                o
                                    .default(document.body)
                                    .children()
                                    .on("mouseover", null, o.default.noop);
                        var c = function () {
                            t.config.animation && t._fixTransition();
                            var e = t._hoverState;
                            (t._hoverState = null),
                                o
                                    .default(t.element)
                                    .trigger(t.constructor.Event.SHOWN),
                                "out" === e && t._leave(null, t);
                        };
                        if (o.default(this.tip).hasClass("fade")) {
                            var h = d.getTransitionDurationFromElement(
                                this.tip
                            );
                            o.default(this.tip)
                                .one(d.TRANSITION_END, c)
                                .emulateTransitionEnd(h);
                        } else c();
                    }
                }),
                (e.hide = function (t) {
                    var e = this,
                        n = this.getTipElement(),
                        i = o.default.Event(this.constructor.Event.HIDE),
                        a = function () {
                            "show" !== e._hoverState &&
                                n.parentNode &&
                                n.parentNode.removeChild(n),
                                e._cleanTipClass(),
                                e.element.removeAttribute("aria-describedby"),
                                o
                                    .default(e.element)
                                    .trigger(e.constructor.Event.HIDDEN),
                                null !== e._popper && e._popper.destroy(),
                                t && t();
                        };
                    if (
                        (o.default(this.element).trigger(i),
                        !i.isDefaultPrevented())
                    ) {
                        if (
                            (o.default(n).removeClass("show"),
                            "ontouchstart" in document.documentElement &&
                                o
                                    .default(document.body)
                                    .children()
                                    .off("mouseover", null, o.default.noop),
                            (this._activeTrigger.click = !1),
                            (this._activeTrigger.focus = !1),
                            (this._activeTrigger.hover = !1),
                            o.default(this.tip).hasClass("fade"))
                        ) {
                            var s = d.getTransitionDurationFromElement(n);
                            o.default(n)
                                .one(d.TRANSITION_END, a)
                                .emulateTransitionEnd(s);
                        } else a();
                        this._hoverState = "";
                    }
                }),
                (e.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate();
                }),
                (e.isWithContent = function () {
                    return Boolean(this.getTitle());
                }),
                (e.addAttachmentClass = function (t) {
                    o.default(this.getTipElement()).addClass("bs-tooltip-" + t);
                }),
                (e.getTipElement = function () {
                    return (
                        (this.tip =
                            this.tip || o.default(this.config.template)[0]),
                        this.tip
                    );
                }),
                (e.setContent = function () {
                    var t = this.getTipElement();
                    this.setElementContent(
                        o.default(t.querySelectorAll(".tooltip-inner")),
                        this.getTitle()
                    ),
                        o.default(t).removeClass("fade show");
                }),
                (e.setElementContent = function (t, e) {
                    "object" != typeof e || (!e.nodeType && !e.jquery)
                        ? this.config.html
                            ? (this.config.sanitize &&
                                  (e = U(
                                      e,
                                      this.config.whiteList,
                                      this.config.sanitizeFn
                                  )),
                              t.html(e))
                            : t.text(e)
                        : this.config.html
                        ? o.default(e).parent().is(t) || t.empty().append(e)
                        : t.text(o.default(e).text());
                }),
                (e.getTitle = function () {
                    var t = this.element.getAttribute("data-original-title");
                    return (
                        t ||
                            (t =
                                "function" == typeof this.config.title
                                    ? this.config.title.call(this.element)
                                    : this.config.title),
                        t
                    );
                }),
                (e._getPopperConfig = function (t) {
                    var e = this;
                    return r(
                        {},
                        {
                            placement: t,
                            modifiers: {
                                offset: this._getOffset(),
                                flip: {
                                    behavior: this.config.fallbackPlacement,
                                },
                                arrow: { element: ".arrow" },
                                preventOverflow: {
                                    boundariesElement: this.config.boundary,
                                },
                            },
                            onCreate: function (t) {
                                t.originalPlacement !== t.placement &&
                                    e._handlePopperPlacementChange(t);
                            },
                            onUpdate: function (t) {
                                return e._handlePopperPlacementChange(t);
                            },
                        },
                        this.config.popperConfig
                    );
                }),
                (e._getOffset = function () {
                    var t = this,
                        e = {};
                    return (
                        "function" == typeof this.config.offset
                            ? (e.fn = function (e) {
                                  return (
                                      (e.offsets = r(
                                          {},
                                          e.offsets,
                                          t.config.offset(
                                              e.offsets,
                                              t.element
                                          ) || {}
                                      )),
                                      e
                                  );
                              })
                            : (e.offset = this.config.offset),
                        e
                    );
                }),
                (e._getContainer = function () {
                    return !1 === this.config.container
                        ? document.body
                        : d.isElement(this.config.container)
                        ? o.default(this.config.container)
                        : o.default(document).find(this.config.container);
                }),
                (e._getAttachment = function (t) {
                    return X[t.toUpperCase()];
                }),
                (e._setListeners = function () {
                    var t = this;
                    this.config.trigger.split(" ").forEach(function (e) {
                        if ("click" === e)
                            o.default(t.element).on(
                                t.constructor.Event.CLICK,
                                t.config.selector,
                                function (e) {
                                    return t.toggle(e);
                                }
                            );
                        else if ("manual" !== e) {
                            var n =
                                    "hover" === e
                                        ? t.constructor.Event.MOUSEENTER
                                        : t.constructor.Event.FOCUSIN,
                                i =
                                    "hover" === e
                                        ? t.constructor.Event.MOUSELEAVE
                                        : t.constructor.Event.FOCUSOUT;
                            o.default(t.element)
                                .on(n, t.config.selector, function (e) {
                                    return t._enter(e);
                                })
                                .on(i, t.config.selector, function (e) {
                                    return t._leave(e);
                                });
                        }
                    }),
                        (this._hideModalHandler = function () {
                            t.element && t.hide();
                        }),
                        o
                            .default(this.element)
                            .closest(".modal")
                            .on("hide.bs.modal", this._hideModalHandler),
                        this.config.selector
                            ? (this.config = r({}, this.config, {
                                  trigger: "manual",
                                  selector: "",
                              }))
                            : this._fixTitle();
                }),
                (e._fixTitle = function () {
                    var t = typeof this.element.getAttribute(
                        "data-original-title"
                    );
                    (this.element.getAttribute("title") || "string" !== t) &&
                        (this.element.setAttribute(
                            "data-original-title",
                            this.element.getAttribute("title") || ""
                        ),
                        this.element.setAttribute("title", ""));
                }),
                (e._enter = function (t, e) {
                    var n = this.constructor.DATA_KEY;
                    (e = e || o.default(t.currentTarget).data(n)) ||
                        ((e = new this.constructor(
                            t.currentTarget,
                            this._getDelegateConfig()
                        )),
                        o.default(t.currentTarget).data(n, e)),
                        t &&
                            (e._activeTrigger[
                                "focusin" === t.type ? "focus" : "hover"
                            ] = !0),
                        o.default(e.getTipElement()).hasClass("show") ||
                        "show" === e._hoverState
                            ? (e._hoverState = "show")
                            : (clearTimeout(e._timeout),
                              (e._hoverState = "show"),
                              e.config.delay && e.config.delay.show
                                  ? (e._timeout = setTimeout(function () {
                                        "show" === e._hoverState && e.show();
                                    }, e.config.delay.show))
                                  : e.show());
                }),
                (e._leave = function (t, e) {
                    var n = this.constructor.DATA_KEY;
                    (e = e || o.default(t.currentTarget).data(n)) ||
                        ((e = new this.constructor(
                            t.currentTarget,
                            this._getDelegateConfig()
                        )),
                        o.default(t.currentTarget).data(n, e)),
                        t &&
                            (e._activeTrigger[
                                "focusout" === t.type ? "focus" : "hover"
                            ] = !1),
                        e._isWithActiveTrigger() ||
                            (clearTimeout(e._timeout),
                            (e._hoverState = "out"),
                            e.config.delay && e.config.delay.hide
                                ? (e._timeout = setTimeout(function () {
                                      "out" === e._hoverState && e.hide();
                                  }, e.config.delay.hide))
                                : e.hide());
                }),
                (e._isWithActiveTrigger = function () {
                    for (var t in this._activeTrigger)
                        if (this._activeTrigger[t]) return !0;
                    return !1;
                }),
                (e._getConfig = function (t) {
                    var e = o.default(this.element).data();
                    return (
                        Object.keys(e).forEach(function (t) {
                            -1 !== z.indexOf(t) && delete e[t];
                        }),
                        "number" ==
                            typeof (t = r(
                                {},
                                this.constructor.Default,
                                e,
                                "object" == typeof t && t ? t : {}
                            )).delay &&
                            (t.delay = { show: t.delay, hide: t.delay }),
                        "number" == typeof t.title &&
                            (t.title = t.title.toString()),
                        "number" == typeof t.content &&
                            (t.content = t.content.toString()),
                        d.typeCheckConfig(M, t, this.constructor.DefaultType),
                        t.sanitize &&
                            (t.template = U(
                                t.template,
                                t.whiteList,
                                t.sanitizeFn
                            )),
                        t
                    );
                }),
                (e._getDelegateConfig = function () {
                    var t = {};
                    if (this.config)
                        for (var e in this.config)
                            this.constructor.Default[e] !== this.config[e] &&
                                (t[e] = this.config[e]);
                    return t;
                }),
                (e._cleanTipClass = function () {
                    var t = o.default(this.getTipElement()),
                        e = t.attr("class").match(V);
                    null !== e && e.length && t.removeClass(e.join(""));
                }),
                (e._handlePopperPlacementChange = function (t) {
                    (this.tip = t.instance.popper),
                        this._cleanTipClass(),
                        this.addAttachmentClass(
                            this._getAttachment(t.placement)
                        );
                }),
                (e._fixTransition = function () {
                    var t = this.getTipElement(),
                        e = this.config.animation;
                    null === t.getAttribute("x-placement") &&
                        (o.default(t).removeClass("fade"),
                        (this.config.animation = !1),
                        this.hide(),
                        this.show(),
                        (this.config.animation = e));
                }),
                (t._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = o.default(this),
                            i = n.data("bs.tooltip"),
                            a = "object" == typeof e && e;
                        if (
                            (i || !/dispose|hide/.test(e)) &&
                            (i ||
                                ((i = new t(this, a)), n.data("bs.tooltip", i)),
                            "string" == typeof e)
                        ) {
                            if ("undefined" == typeof i[e])
                                throw new TypeError(
                                    'No method named "' + e + '"'
                                );
                            i[e]();
                        }
                    });
                }),
                l(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.3";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return Y;
                        },
                    },
                    {
                        key: "NAME",
                        get: function () {
                            return M;
                        },
                    },
                    {
                        key: "DATA_KEY",
                        get: function () {
                            return "bs.tooltip";
                        },
                    },
                    {
                        key: "Event",
                        get: function () {
                            return $;
                        },
                    },
                    {
                        key: "EVENT_KEY",
                        get: function () {
                            return ".bs.tooltip";
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return K;
                        },
                    },
                ]),
                t
            );
        })();
    (o.default.fn[M] = J._jQueryInterface),
        (o.default.fn[M].Constructor = J),
        (o.default.fn[M].noConflict = function () {
            return (o.default.fn[M] = W), J._jQueryInterface;
        });
    var G = "popover",
        Z = o.default.fn[G],
        tt = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        et = r({}, J.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template:
                '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        }),
        nt = r({}, J.DefaultType, { content: "(string|element|function)" }),
        it = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover",
        },
        ot = (function (t) {
            var e, n;
            function i() {
                return t.apply(this, arguments) || this;
            }
            (n = t),
                ((e = i).prototype = Object.create(n.prototype)),
                (e.prototype.constructor = e),
                (e.__proto__ = n);
            var a = i.prototype;
            return (
                (a.isWithContent = function () {
                    return this.getTitle() || this._getContent();
                }),
                (a.addAttachmentClass = function (t) {
                    o.default(this.getTipElement()).addClass("bs-popover-" + t);
                }),
                (a.getTipElement = function () {
                    return (
                        (this.tip =
                            this.tip || o.default(this.config.template)[0]),
                        this.tip
                    );
                }),
                (a.setContent = function () {
                    var t = o.default(this.getTipElement());
                    this.setElementContent(
                        t.find(".popover-header"),
                        this.getTitle()
                    );
                    var e = this._getContent();
                    "function" == typeof e && (e = e.call(this.element)),
                        this.setElementContent(t.find(".popover-body"), e),
                        t.removeClass("fade show");
                }),
                (a._getContent = function () {
                    return (
                        this.element.getAttribute("data-content") ||
                        this.config.content
                    );
                }),
                (a._cleanTipClass = function () {
                    var t = o.default(this.getTipElement()),
                        e = t.attr("class").match(tt);
                    null !== e && e.length > 0 && t.removeClass(e.join(""));
                }),
                (i._jQueryInterface = function (t) {
                    return this.each(function () {
                        var e = o.default(this).data("bs.popover"),
                            n = "object" == typeof t ? t : null;
                        if (
                            (e || !/dispose|hide/.test(t)) &&
                            (e ||
                                ((e = new i(this, n)),
                                o.default(this).data("bs.popover", e)),
                            "string" == typeof t)
                        ) {
                            if ("undefined" == typeof e[t])
                                throw new TypeError(
                                    'No method named "' + t + '"'
                                );
                            e[t]();
                        }
                    });
                }),
                l(i, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.3";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return et;
                        },
                    },
                    {
                        key: "NAME",
                        get: function () {
                            return G;
                        },
                    },
                    {
                        key: "DATA_KEY",
                        get: function () {
                            return "bs.popover";
                        },
                    },
                    {
                        key: "Event",
                        get: function () {
                            return it;
                        },
                    },
                    {
                        key: "EVENT_KEY",
                        get: function () {
                            return ".bs.popover";
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return nt;
                        },
                    },
                ]),
                i
            );
        })(J);
    (o.default.fn[G] = ot._jQueryInterface),
        (o.default.fn[G].Constructor = ot),
        (o.default.fn[G].noConflict = function () {
            return (o.default.fn[G] = Z), ot._jQueryInterface;
        });
    var at = "scrollspy",
        st = o.default.fn[at],
        lt = { offset: 10, method: "auto", target: "" },
        rt = { offset: "number", method: "string", target: "(string|element)" },
        ut = (function () {
            function t(t, e) {
                var n = this;
                (this._element = t),
                    (this._scrollElement = "BODY" === t.tagName ? window : t),
                    (this._config = this._getConfig(e)),
                    (this._selector =
                        this._config.target +
                        " .nav-link," +
                        this._config.target +
                        " .list-group-item," +
                        this._config.target +
                        " .dropdown-item"),
                    (this._offsets = []),
                    (this._targets = []),
                    (this._activeTarget = null),
                    (this._scrollHeight = 0),
                    o
                        .default(this._scrollElement)
                        .on("scroll.bs.scrollspy", function (t) {
                            return n._process(t);
                        }),
                    this.refresh(),
                    this._process();
            }
            var e = t.prototype;
            return (
                (e.refresh = function () {
                    var t = this,
                        e =
                            this._scrollElement === this._scrollElement.window
                                ? "offset"
                                : "position",
                        n =
                            "auto" === this._config.method
                                ? e
                                : this._config.method,
                        i = "position" === n ? this._getScrollTop() : 0;
                    (this._offsets = []),
                        (this._targets = []),
                        (this._scrollHeight = this._getScrollHeight()),
                        [].slice
                            .call(document.querySelectorAll(this._selector))
                            .map(function (t) {
                                var e,
                                    a = d.getSelectorFromElement(t);
                                if ((a && (e = document.querySelector(a)), e)) {
                                    var s = e.getBoundingClientRect();
                                    if (s.width || s.height)
                                        return [o.default(e)[n]().top + i, a];
                                }
                                return null;
                            })
                            .filter(function (t) {
                                return t;
                            })
                            .sort(function (t, e) {
                                return t[0] - e[0];
                            })
                            .forEach(function (e) {
                                t._offsets.push(e[0]), t._targets.push(e[1]);
                            });
                }),
                (e.dispose = function () {
                    o.default.removeData(this._element, "bs.scrollspy"),
                        o.default(this._scrollElement).off(".bs.scrollspy"),
                        (this._element = null),
                        (this._scrollElement = null),
                        (this._config = null),
                        (this._selector = null),
                        (this._offsets = null),
                        (this._targets = null),
                        (this._activeTarget = null),
                        (this._scrollHeight = null);
                }),
                (e._getConfig = function (t) {
                    if (
                        "string" !=
                            typeof (t = r(
                                {},
                                lt,
                                "object" == typeof t && t ? t : {}
                            )).target &&
                        d.isElement(t.target)
                    ) {
                        var e = o.default(t.target).attr("id");
                        e ||
                            ((e = d.getUID(at)),
                            o.default(t.target).attr("id", e)),
                            (t.target = "#" + e);
                    }
                    return d.typeCheckConfig(at, t, rt), t;
                }),
                (e._getScrollTop = function () {
                    return this._scrollElement === window
                        ? this._scrollElement.pageYOffset
                        : this._scrollElement.scrollTop;
                }),
                (e._getScrollHeight = function () {
                    return (
                        this._scrollElement.scrollHeight ||
                        Math.max(
                            document.body.scrollHeight,
                            document.documentElement.scrollHeight
                        )
                    );
                }),
                (e._getOffsetHeight = function () {
                    return this._scrollElement === window
                        ? window.innerHeight
                        : this._scrollElement.getBoundingClientRect().height;
                }),
                (e._process = function () {
                    var t = this._getScrollTop() + this._config.offset,
                        e = this._getScrollHeight(),
                        n = this._config.offset + e - this._getOffsetHeight();
                    if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i);
                    } else {
                        if (
                            this._activeTarget &&
                            t < this._offsets[0] &&
                            this._offsets[0] > 0
                        )
                            return (
                                (this._activeTarget = null), void this._clear()
                            );
                        for (var o = this._offsets.length; o--; ) {
                            this._activeTarget !== this._targets[o] &&
                                t >= this._offsets[o] &&
                                ("undefined" == typeof this._offsets[o + 1] ||
                                    t < this._offsets[o + 1]) &&
                                this._activate(this._targets[o]);
                        }
                    }
                }),
                (e._activate = function (t) {
                    (this._activeTarget = t), this._clear();
                    var e = this._selector.split(",").map(function (e) {
                            return (
                                e +
                                '[data-target="' +
                                t +
                                '"],' +
                                e +
                                '[href="' +
                                t +
                                '"]'
                            );
                        }),
                        n = o.default(
                            [].slice.call(
                                document.querySelectorAll(e.join(","))
                            )
                        );
                    n.hasClass("dropdown-item")
                        ? (n
                              .closest(".dropdown")
                              .find(".dropdown-toggle")
                              .addClass("active"),
                          n.addClass("active"))
                        : (n.addClass("active"),
                          n
                              .parents(".nav, .list-group")
                              .prev(".nav-link, .list-group-item")
                              .addClass("active"),
                          n
                              .parents(".nav, .list-group")
                              .prev(".nav-item")
                              .children(".nav-link")
                              .addClass("active")),
                        o
                            .default(this._scrollElement)
                            .trigger("activate.bs.scrollspy", {
                                relatedTarget: t,
                            });
                }),
                (e._clear = function () {
                    [].slice
                        .call(document.querySelectorAll(this._selector))
                        .filter(function (t) {
                            return t.classList.contains("active");
                        })
                        .forEach(function (t) {
                            return t.classList.remove("active");
                        });
                }),
                (t._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = o.default(this).data("bs.scrollspy");
                        if (
                            (n ||
                                ((n = new t(this, "object" == typeof e && e)),
                                o.default(this).data("bs.scrollspy", n)),
                            "string" == typeof e)
                        ) {
                            if ("undefined" == typeof n[e])
                                throw new TypeError(
                                    'No method named "' + e + '"'
                                );
                            n[e]();
                        }
                    });
                }),
                l(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.3";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return lt;
                        },
                    },
                ]),
                t
            );
        })();
    o.default(window).on("load.bs.scrollspy.data-api", function () {
        for (
            var t = [].slice.call(
                    document.querySelectorAll('[data-spy="scroll"]')
                ),
                e = t.length;
            e--;

        ) {
            var n = o.default(t[e]);
            ut._jQueryInterface.call(n, n.data());
        }
    }),
        (o.default.fn[at] = ut._jQueryInterface),
        (o.default.fn[at].Constructor = ut),
        (o.default.fn[at].noConflict = function () {
            return (o.default.fn[at] = st), ut._jQueryInterface;
        });
    var dt = o.default.fn.tab,
        ft = (function () {
            function t(t) {
                this._element = t;
            }
            var e = t.prototype;
            return (
                (e.show = function () {
                    var t = this;
                    if (
                        !(
                            (this._element.parentNode &&
                                this._element.parentNode.nodeType ===
                                    Node.ELEMENT_NODE &&
                                o.default(this._element).hasClass("active")) ||
                            o.default(this._element).hasClass("disabled")
                        )
                    ) {
                        var e,
                            n,
                            i = o
                                .default(this._element)
                                .closest(".nav, .list-group")[0],
                            a = d.getSelectorFromElement(this._element);
                        if (i) {
                            var s =
                                "UL" === i.nodeName || "OL" === i.nodeName
                                    ? "> li > .active"
                                    : ".active";
                            n = (n = o.default.makeArray(o.default(i).find(s)))[
                                n.length - 1
                            ];
                        }
                        var l = o.default.Event("hide.bs.tab", {
                                relatedTarget: this._element,
                            }),
                            r = o.default.Event("show.bs.tab", {
                                relatedTarget: n,
                            });
                        if (
                            (n && o.default(n).trigger(l),
                            o.default(this._element).trigger(r),
                            !r.isDefaultPrevented() && !l.isDefaultPrevented())
                        ) {
                            a && (e = document.querySelector(a)),
                                this._activate(this._element, i);
                            var u = function () {
                                var e = o.default.Event("hidden.bs.tab", {
                                        relatedTarget: t._element,
                                    }),
                                    i = o.default.Event("shown.bs.tab", {
                                        relatedTarget: n,
                                    });
                                o.default(n).trigger(e),
                                    o.default(t._element).trigger(i);
                            };
                            e ? this._activate(e, e.parentNode, u) : u();
                        }
                    }
                }),
                (e.dispose = function () {
                    o.default.removeData(this._element, "bs.tab"),
                        (this._element = null);
                }),
                (e._activate = function (t, e, n) {
                    var i = this,
                        a = (
                            !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
                                ? o.default(e).children(".active")
                                : o.default(e).find("> li > .active")
                        )[0],
                        s = n && a && o.default(a).hasClass("fade"),
                        l = function () {
                            return i._transitionComplete(t, a, n);
                        };
                    if (a && s) {
                        var r = d.getTransitionDurationFromElement(a);
                        o.default(a)
                            .removeClass("show")
                            .one(d.TRANSITION_END, l)
                            .emulateTransitionEnd(r);
                    } else l();
                }),
                (e._transitionComplete = function (t, e, n) {
                    if (e) {
                        o.default(e).removeClass("active");
                        var i = o
                            .default(e.parentNode)
                            .find("> .dropdown-menu .active")[0];
                        i && o.default(i).removeClass("active"),
                            "tab" === e.getAttribute("role") &&
                                e.setAttribute("aria-selected", !1);
                    }
                    if (
                        (o.default(t).addClass("active"),
                        "tab" === t.getAttribute("role") &&
                            t.setAttribute("aria-selected", !0),
                        d.reflow(t),
                        t.classList.contains("fade") && t.classList.add("show"),
                        t.parentNode &&
                            o.default(t.parentNode).hasClass("dropdown-menu"))
                    ) {
                        var a = o.default(t).closest(".dropdown")[0];
                        if (a) {
                            var s = [].slice.call(
                                a.querySelectorAll(".dropdown-toggle")
                            );
                            o.default(s).addClass("active");
                        }
                        t.setAttribute("aria-expanded", !0);
                    }
                    n && n();
                }),
                (t._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = o.default(this),
                            i = n.data("bs.tab");
                        if (
                            (i || ((i = new t(this)), n.data("bs.tab", i)),
                            "string" == typeof e)
                        ) {
                            if ("undefined" == typeof i[e])
                                throw new TypeError(
                                    'No method named "' + e + '"'
                                );
                            i[e]();
                        }
                    });
                }),
                l(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.3";
                        },
                    },
                ]),
                t
            );
        })();
    o
        .default(document)
        .on(
            "click.bs.tab.data-api",
            '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            function (t) {
                t.preventDefault(),
                    ft._jQueryInterface.call(o.default(this), "show");
            }
        ),
        (o.default.fn.tab = ft._jQueryInterface),
        (o.default.fn.tab.Constructor = ft),
        (o.default.fn.tab.noConflict = function () {
            return (o.default.fn.tab = dt), ft._jQueryInterface;
        });
    var ct = o.default.fn.toast,
        ht = { animation: "boolean", autohide: "boolean", delay: "number" },
        gt = { animation: !0, autohide: !0, delay: 500 },
        mt = (function () {
            function t(t, e) {
                (this._element = t),
                    (this._config = this._getConfig(e)),
                    (this._timeout = null),
                    this._setListeners();
            }
            var e = t.prototype;
            return (
                (e.show = function () {
                    var t = this,
                        e = o.default.Event("show.bs.toast");
                    if (
                        (o.default(this._element).trigger(e),
                        !e.isDefaultPrevented())
                    ) {
                        this._clearTimeout(),
                            this._config.animation &&
                                this._element.classList.add("fade");
                        var n = function () {
                            t._element.classList.remove("showing"),
                                t._element.classList.add("show"),
                                o.default(t._element).trigger("shown.bs.toast"),
                                t._config.autohide &&
                                    (t._timeout = setTimeout(function () {
                                        t.hide();
                                    }, t._config.delay));
                        };
                        if (
                            (this._element.classList.remove("hide"),
                            d.reflow(this._element),
                            this._element.classList.add("showing"),
                            this._config.animation)
                        ) {
                            var i = d.getTransitionDurationFromElement(
                                this._element
                            );
                            o.default(this._element)
                                .one(d.TRANSITION_END, n)
                                .emulateTransitionEnd(i);
                        } else n();
                    }
                }),
                (e.hide = function () {
                    if (this._element.classList.contains("show")) {
                        var t = o.default.Event("hide.bs.toast");
                        o.default(this._element).trigger(t),
                            t.isDefaultPrevented() || this._close();
                    }
                }),
                (e.dispose = function () {
                    this._clearTimeout(),
                        this._element.classList.contains("show") &&
                            this._element.classList.remove("show"),
                        o.default(this._element).off("click.dismiss.bs.toast"),
                        o.default.removeData(this._element, "bs.toast"),
                        (this._element = null),
                        (this._config = null);
                }),
                (e._getConfig = function (t) {
                    return (
                        (t = r(
                            {},
                            gt,
                            o.default(this._element).data(),
                            "object" == typeof t && t ? t : {}
                        )),
                        d.typeCheckConfig(
                            "toast",
                            t,
                            this.constructor.DefaultType
                        ),
                        t
                    );
                }),
                (e._setListeners = function () {
                    var t = this;
                    o.default(this._element).on(
                        "click.dismiss.bs.toast",
                        '[data-dismiss="toast"]',
                        function () {
                            return t.hide();
                        }
                    );
                }),
                (e._close = function () {
                    var t = this,
                        e = function () {
                            t._element.classList.add("hide"),
                                o
                                    .default(t._element)
                                    .trigger("hidden.bs.toast");
                        };
                    if (
                        (this._element.classList.remove("show"),
                        this._config.animation)
                    ) {
                        var n = d.getTransitionDurationFromElement(
                            this._element
                        );
                        o.default(this._element)
                            .one(d.TRANSITION_END, e)
                            .emulateTransitionEnd(n);
                    } else e();
                }),
                (e._clearTimeout = function () {
                    clearTimeout(this._timeout), (this._timeout = null);
                }),
                (t._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = o.default(this),
                            i = n.data("bs.toast");
                        if (
                            (i ||
                                ((i = new t(this, "object" == typeof e && e)),
                                n.data("bs.toast", i)),
                            "string" == typeof e)
                        ) {
                            if ("undefined" == typeof i[e])
                                throw new TypeError(
                                    'No method named "' + e + '"'
                                );
                            i[e](this);
                        }
                    });
                }),
                l(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.3";
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return ht;
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return gt;
                        },
                    },
                ]),
                t
            );
        })();
    (o.default.fn.toast = mt._jQueryInterface),
        (o.default.fn.toast.Constructor = mt),
        (o.default.fn.toast.noConflict = function () {
            return (o.default.fn.toast = ct), mt._jQueryInterface;
        }),
        (t.Alert = h),
        (t.Button = m),
        (t.Carousel = w),
        (t.Collapse = D),
        (t.Dropdown = x),
        (t.Modal = q),
        (t.Popover = ot),
        (t.Scrollspy = ut),
        (t.Tab = ft),
        (t.Toast = mt),
        (t.Tooltip = J),
        (t.Util = d),
        Object.defineProperty(t, "__esModule", { value: !0 });
});
/* Sweet Alert */
!(function (e, t, n) {
    "use strict";
    !(function o(e, t, n) {
        function a(s, l) {
            if (!t[s]) {
                if (!e[s]) {
                    var i = "function" == typeof require && require;
                    if (!l && i) return i(s, !0);
                    if (r) return r(s, !0);
                    var u = new Error("Cannot find module '" + s + "'");
                    throw ((u.code = "MODULE_NOT_FOUND"), u);
                }
                var c = (t[s] = { exports: {} });
                e[s][0].call(
                    c.exports,
                    function (t) {
                        var n = e[s][1][t];
                        return a(n ? n : t);
                    },
                    c,
                    c.exports,
                    o,
                    e,
                    t,
                    n
                );
            }
            return t[s].exports;
        }
        for (
            var r = "function" == typeof require && require, s = 0;
            s < n.length;
            s++
        )
            a(n[s]);
        return a;
    })(
        {
            1: [
                function (o, a) {
                    var r,
                        s,
                        l,
                        i,
                        u = function (e) {
                            return e && e.__esModule ? e : { default: e };
                        },
                        c = o("./modules/handle-dom"),
                        d = o("./modules/utils"),
                        f = o("./modules/handle-swal-dom"),
                        p = o("./modules/handle-click"),
                        m = o("./modules/handle-key"),
                        v = u(m),
                        y = o("./modules/default-params"),
                        h = u(y),
                        g = o("./modules/set-params"),
                        b = u(g);
                    (l = i =
                        function () {
                            function o(e) {
                                var t = a;
                                return t[e] === n ? h["default"][e] : t[e];
                            }
                            var a = arguments[0];
                            if (
                                (c.addClass(t.body, "stop-scrolling"),
                                f.resetInput(),
                                a === n)
                            )
                                return (
                                    d.logStr(
                                        "SweetAlert expects at least 1 attribute!"
                                    ),
                                    !1
                                );
                            var l = d.extend({}, h["default"]);
                            switch (typeof a) {
                                case "string":
                                    (l.title = a),
                                        (l.text = arguments[1] || ""),
                                        (l.type = arguments[2] || "");
                                    break;
                                case "object":
                                    if (a.title === n)
                                        return (
                                            d.logStr(
                                                'Missing "title" argument!'
                                            ),
                                            !1
                                        );
                                    l.title = a.title;
                                    for (var i in h["default"]) l[i] = o(i);
                                    (l.confirmButtonText = l.showCancelButton
                                        ? "Confirm"
                                        : h["default"].confirmButtonText),
                                        (l.confirmButtonText =
                                            o("confirmButtonText")),
                                        (l.doneFunction = arguments[1] || null);
                                    break;
                                default:
                                    return (
                                        d.logStr(
                                            'Unexpected type of argument! Expected "string" or "object", got ' +
                                                typeof a
                                        ),
                                        !1
                                    );
                            }
                            b["default"](l),
                                f.fixVerticalPosition(),
                                f.openModal();
                            for (
                                var u = f.getModal(),
                                    m = u.querySelectorAll("button"),
                                    y = [
                                        "onclick",
                                        "onmouseover",
                                        "onmouseout",
                                        "onmousedown",
                                        "onmouseup",
                                        "onfocus",
                                    ],
                                    g = function (e) {
                                        return p.handleButton(e, l, u);
                                    },
                                    w = 0;
                                w < m.length;
                                w++
                            )
                                for (var C = 0; C < y.length; C++) {
                                    var S = y[C];
                                    m[w][S] = g;
                                }
                            (f.getOverlay().onclick = g), (r = e.onkeydown);
                            var x = function (e) {
                                return v["default"](e, l, u);
                            };
                            (e.onkeydown = x),
                                (e.onfocus = function () {
                                    setTimeout(function () {
                                        s !== n && (s.focus(), (s = n));
                                    }, 0);
                                });
                        }),
                        (l.setDefaults = i.setDefaults =
                            function (e) {
                                if (!e)
                                    throw new Error("userParams is required");
                                if ("object" != typeof e)
                                    throw new Error(
                                        "userParams has to be a object"
                                    );
                                d.extend(h["default"], e);
                            }),
                        (l.close = i.close =
                            function () {
                                var o = f.getModal();
                                c.fadeOut(f.getOverlay(), 5),
                                    c.fadeOut(o, 5),
                                    c.removeClass(o, "showSweetAlert"),
                                    c.addClass(o, "hideSweetAlert"),
                                    c.removeClass(o, "visible");
                                var a = o.querySelector(".sa-icon.sa-success");
                                c.removeClass(a, "animate"),
                                    c.removeClass(
                                        a.querySelector(".sa-tip"),
                                        "animateSuccessTip"
                                    ),
                                    c.removeClass(
                                        a.querySelector(".sa-long"),
                                        "animateSuccessLong"
                                    );
                                var l = o.querySelector(".sa-icon.sa-error");
                                c.removeClass(l, "animateErrorIcon"),
                                    c.removeClass(
                                        l.querySelector(".sa-x-mark"),
                                        "animateXMark"
                                    );
                                var i = o.querySelector(".sa-icon.sa-warning");
                                return (
                                    c.removeClass(i, "pulseWarning"),
                                    c.removeClass(
                                        i.querySelector(".sa-body"),
                                        "pulseWarningIns"
                                    ),
                                    c.removeClass(
                                        i.querySelector(".sa-dot"),
                                        "pulseWarningIns"
                                    ),
                                    c.removeClass(t.body, "stop-scrolling"),
                                    (e.onkeydown = r),
                                    e.previousActiveElement &&
                                        e.previousActiveElement.focus(),
                                    (s = n),
                                    clearTimeout(o.timeout),
                                    !0
                                );
                            }),
                        (l.showInputError = i.showInputError =
                            function (e) {
                                var t = f.getModal(),
                                    n = t.querySelector(".sa-input-error");
                                c.addClass(n, "show");
                                var o = t.querySelector(".sa-error-container");
                                c.addClass(o, "show"),
                                    (o.querySelector("p").innerHTML = e),
                                    t.querySelector("input").focus();
                            }),
                        (l.resetInputError = i.resetInputError =
                            function (e) {
                                if (e && 13 === e.keyCode) return !1;
                                var t = f.getModal(),
                                    n = t.querySelector(".sa-input-error");
                                c.removeClass(n, "show");
                                var o = t.querySelector(".sa-error-container");
                                c.removeClass(o, "show");
                            }),
                        "function" == typeof define && define.amd
                            ? define(function () {
                                  return l;
                              })
                            : "undefined" != typeof e
                            ? (e.sweetAlert = e.swal = l)
                            : "undefined" != typeof a &&
                              a.exports &&
                              (a.exports = l);
                },
                {
                    "./modules/default-params": 2,
                    "./modules/handle-click": 3,
                    "./modules/handle-dom": 4,
                    "./modules/handle-key": 5,
                    "./modules/handle-swal-dom": 6,
                    "./modules/set-params": 8,
                    "./modules/utils": 9,
                },
            ],
            2: [
                function (e, t, n) {
                    Object.defineProperty(n, "__esModule", { value: !0 });
                    var o = {
                        title: "",
                        text: "",
                        type: null,
                        allowOutsideClick: !1,
                        showConfirmButton: !0,
                        showCancelButton: !1,
                        closeOnConfirm: !0,
                        closeOnCancel: !0,
                        confirmButtonText: "OK",
                        confirmButtonColor: "#AEDEF4",
                        cancelButtonText: "Cancel",
                        imageUrl: null,
                        imageSize: null,
                        timer: null,
                        customClass: "",
                        html: !1,
                        animation: !0,
                        allowEscapeKey: !0,
                        inputType: "text",
                        inputPlaceholder: "",
                    };
                    (n["default"] = o), (t.exports = n["default"]);
                },
                {},
            ],
            3: [
                function (t, n, o) {
                    Object.defineProperty(o, "__esModule", { value: !0 });
                    var a = t("./utils"),
                        r = (t("./handle-swal-dom"), t("./handle-dom")),
                        s = function (t, n, o) {
                            function s(e) {
                                m &&
                                    n.confirmButtonColor &&
                                    (p.style.backgroundColor = e);
                            }
                            var u,
                                c,
                                d,
                                f = t || e.event,
                                p = f.target || f.srcElement,
                                m = -1 !== p.className.indexOf("confirm"),
                                v = -1 !== p.className.indexOf("sweet-overlay"),
                                y = r.hasClass(o, "visible"),
                                h =
                                    n.doneFunction &&
                                    "true" ===
                                        o.getAttribute(
                                            "data-has-done-function"
                                        );
                            switch (
                                (m &&
                                    n.confirmButtonColor &&
                                    ((u = n.confirmButtonColor),
                                    (c = a.colorLuminance(u, -0.04)),
                                    (d = a.colorLuminance(u, -0.14))),
                                f.type)
                            ) {
                                case "mouseover":
                                    s(c);
                                    break;
                                case "mouseout":
                                    s(u);
                                    break;
                                case "mousedown":
                                    s(d);
                                    break;
                                case "mouseup":
                                    s(c);
                                    break;
                                case "focus":
                                    var g = o.querySelector("button.confirm"),
                                        b = o.querySelector("button.cancel");
                                    m
                                        ? (b.style.boxShadow = "none")
                                        : (g.style.boxShadow = "none");
                                    break;
                                case "click":
                                    var w = o === p,
                                        C = r.isDescendant(o, p);
                                    if (!w && !C && y && !n.allowOutsideClick)
                                        break;
                                    m && h && y
                                        ? l(o, n)
                                        : (h && y) || v
                                        ? i(o, n)
                                        : r.isDescendant(o, p) &&
                                          "BUTTON" === p.tagName &&
                                          sweetAlert.close();
                            }
                        },
                        l = function (e, t) {
                            var n = !0;
                            r.hasClass(e, "show-input") &&
                                ((n = e.querySelector("input").value),
                                n || (n = "")),
                                t.doneFunction(n),
                                t.closeOnConfirm && sweetAlert.close();
                        },
                        i = function (e, t) {
                            var n = String(t.doneFunction).replace(/\s/g, ""),
                                o =
                                    "function(" === n.substring(0, 9) &&
                                    ")" !== n.substring(9, 10);
                            o && t.doneFunction(!1),
                                t.closeOnCancel && sweetAlert.close();
                        };
                    (o["default"] = {
                        handleButton: s,
                        handleConfirm: l,
                        handleCancel: i,
                    }),
                        (n.exports = o["default"]);
                },
                { "./handle-dom": 4, "./handle-swal-dom": 6, "./utils": 9 },
            ],
            4: [
                function (n, o, a) {
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var r = function (e, t) {
                            return new RegExp(" " + t + " ").test(
                                " " + e.className + " "
                            );
                        },
                        s = function (e, t) {
                            r(e, t) || (e.className += " " + t);
                        },
                        l = function (e, t) {
                            var n =
                                " " +
                                e.className.replace(/[\t\r\n]/g, " ") +
                                " ";
                            if (r(e, t)) {
                                for (; n.indexOf(" " + t + " ") >= 0; )
                                    n = n.replace(" " + t + " ", " ");
                                e.className = n.replace(/^\s+|\s+$/g, "");
                            }
                        },
                        i = function (e) {
                            var n = t.createElement("div");
                            return (
                                n.appendChild(t.createTextNode(e)), n.innerHTML
                            );
                        },
                        u = function (e) {
                            (e.style.opacity = ""), (e.style.display = "block");
                        },
                        c = function (e) {
                            if (e && !e.length) return u(e);
                            for (var t = 0; t < e.length; ++t) u(e[t]);
                        },
                        d = function (e) {
                            (e.style.opacity = ""), (e.style.display = "none");
                        },
                        f = function (e) {
                            if (e && !e.length) return d(e);
                            for (var t = 0; t < e.length; ++t) d(e[t]);
                        },
                        p = function (e, t) {
                            for (var n = t.parentNode; null !== n; ) {
                                if (n === e) return !0;
                                n = n.parentNode;
                            }
                            return !1;
                        },
                        m = function (e) {
                            (e.style.left = "-9999px"),
                                (e.style.display = "block");
                            var t,
                                n = e.clientHeight;
                            return (
                                (t =
                                    "undefined" != typeof getComputedStyle
                                        ? parseInt(
                                              getComputedStyle(
                                                  e
                                              ).getPropertyValue("padding-top"),
                                              10
                                          )
                                        : parseInt(e.currentStyle.padding)),
                                (e.style.left = ""),
                                (e.style.display = "none"),
                                "-" + parseInt((n + t) / 2) + "px"
                            );
                        },
                        v = function (e, t) {
                            if (+e.style.opacity < 1) {
                                (t = t || 16),
                                    (e.style.opacity = 0),
                                    (e.style.display = "block");
                                var n = +new Date(),
                                    o = (function (e) {
                                        function t() {
                                            return e.apply(this, arguments);
                                        }
                                        return (
                                            (t.toString = function () {
                                                return e.toString();
                                            }),
                                            t
                                        );
                                    })(function () {
                                        (e.style.opacity =
                                            +e.style.opacity +
                                            (new Date() - n) / 100),
                                            (n = +new Date()),
                                            +e.style.opacity < 1 &&
                                                setTimeout(o, t);
                                    });
                                o();
                            }
                            e.style.display = "block";
                        },
                        y = function (e, t) {
                            (t = t || 16), (e.style.opacity = 1);
                            var n = +new Date(),
                                o = (function (e) {
                                    function t() {
                                        return e.apply(this, arguments);
                                    }
                                    return (
                                        (t.toString = function () {
                                            return e.toString();
                                        }),
                                        t
                                    );
                                })(function () {
                                    (e.style.opacity =
                                        +e.style.opacity -
                                        (new Date() - n) / 100),
                                        (n = +new Date()),
                                        +e.style.opacity > 0
                                            ? setTimeout(o, t)
                                            : (e.style.display = "none");
                                });
                            o();
                        },
                        h = function (n) {
                            if ("function" == typeof MouseEvent) {
                                var o = new MouseEvent("click", {
                                    view: e,
                                    bubbles: !1,
                                    cancelable: !0,
                                });
                                n.dispatchEvent(o);
                            } else if (t.createEvent) {
                                var a = t.createEvent("MouseEvents");
                                a.initEvent("click", !1, !1),
                                    n.dispatchEvent(a);
                            } else
                                t.createEventObject
                                    ? n.fireEvent("onclick")
                                    : "function" == typeof n.onclick &&
                                      n.onclick();
                        },
                        g = function (t) {
                            "function" == typeof t.stopPropagation
                                ? (t.stopPropagation(), t.preventDefault())
                                : e.event &&
                                  e.event.hasOwnProperty("cancelBubble") &&
                                  (e.event.cancelBubble = !0);
                        };
                    (a.hasClass = r),
                        (a.addClass = s),
                        (a.removeClass = l),
                        (a.escapeHtml = i),
                        (a._show = u),
                        (a.show = c),
                        (a._hide = d),
                        (a.hide = f),
                        (a.isDescendant = p),
                        (a.getTopMargin = m),
                        (a.fadeIn = v),
                        (a.fadeOut = y),
                        (a.fireClick = h),
                        (a.stopEventPropagation = g);
                },
                {},
            ],
            5: [
                function (t, o, a) {
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var r = t("./handle-dom"),
                        s = t("./handle-swal-dom"),
                        l = function (t, o, a) {
                            var l = t || e.event,
                                i = l.keyCode || l.which,
                                u = a.querySelector("button.confirm"),
                                c = a.querySelector("button.cancel"),
                                d = a.querySelectorAll("button[tabindex]");
                            if (-1 !== [9, 13, 32, 27].indexOf(i)) {
                                for (
                                    var f = l.target || l.srcElement,
                                        p = -1,
                                        m = 0;
                                    m < d.length;
                                    m++
                                )
                                    if (f === d[m]) {
                                        p = m;
                                        break;
                                    }
                                9 === i
                                    ? ((f =
                                          -1 === p
                                              ? u
                                              : p === d.length - 1
                                              ? d[0]
                                              : d[p + 1]),
                                      r.stopEventPropagation(l),
                                      f.focus(),
                                      o.confirmButtonColor &&
                                          s.setFocusStyle(
                                              f,
                                              o.confirmButtonColor
                                          ))
                                    : 13 === i
                                    ? ("INPUT" === f.tagName &&
                                          ((f = u), u.focus()),
                                      (f = -1 === p ? u : n))
                                    : 27 === i && o.allowEscapeKey === !0
                                    ? ((f = c), r.fireClick(f, l))
                                    : (f = n);
                            }
                        };
                    (a["default"] = l), (o.exports = a["default"]);
                },
                { "./handle-dom": 4, "./handle-swal-dom": 6 },
            ],
            6: [
                function (n, o, a) {
                    var r = function (e) {
                        return e && e.__esModule ? e : { default: e };
                    };
                    Object.defineProperty(a, "__esModule", { value: !0 });
                    var s = n("./utils"),
                        l = n("./handle-dom"),
                        i = n("./default-params"),
                        u = r(i),
                        c = n("./injected-html"),
                        d = r(c),
                        f = ".sweet-alert",
                        p = ".sweet-overlay",
                        m = function () {
                            var e = t.createElement("div");
                            for (e.innerHTML = d["default"]; e.firstChild; )
                                t.body.appendChild(e.firstChild);
                        },
                        v = (function (e) {
                            function t() {
                                return e.apply(this, arguments);
                            }
                            return (
                                (t.toString = function () {
                                    return e.toString();
                                }),
                                t
                            );
                        })(function () {
                            var e = t.querySelector(f);
                            return e || (m(), (e = v())), e;
                        }),
                        y = function () {
                            var e = v();
                            return e ? e.querySelector("input") : void 0;
                        },
                        h = function () {
                            return t.querySelector(p);
                        },
                        g = function (e, t) {
                            var n = s.hexToRgb(t);
                            e.style.boxShadow =
                                "0 0 2px rgba(" +
                                n +
                                ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)";
                        },
                        b = function () {
                            var n = v();
                            l.fadeIn(h(), 10),
                                l.show(n),
                                l.addClass(n, "showSweetAlert"),
                                l.removeClass(n, "hideSweetAlert"),
                                (e.previousActiveElement = t.activeElement);
                            var o = n.querySelector("button.confirm");
                            o.focus(),
                                setTimeout(function () {
                                    l.addClass(n, "visible");
                                }, 500);
                            var a = n.getAttribute("data-timer");
                            "null" !== a &&
                                "" !== a &&
                                (n.timeout = setTimeout(function () {
                                    swal.close();
                                }, a));
                        },
                        w = function () {
                            var e = v(),
                                t = y();
                            l.removeClass(e, "show-input"),
                                (t.value = ""),
                                t.setAttribute("type", u["default"].inputType),
                                t.setAttribute(
                                    "placeholder",
                                    u["default"].inputPlaceholder
                                ),
                                C();
                        },
                        C = function (e) {
                            if (e && 13 === e.keyCode) return !1;
                            var t = v(),
                                n = t.querySelector(".sa-input-error");
                            l.removeClass(n, "show");
                            var o = t.querySelector(".sa-error-container");
                            l.removeClass(o, "show");
                        },
                        S = function () {
                            var e = v();
                            e.style.marginTop = l.getTopMargin(v());
                        };
                    (a.sweetAlertInitialize = m),
                        (a.getModal = v),
                        (a.getOverlay = h),
                        (a.getInput = y),
                        (a.setFocusStyle = g),
                        (a.openModal = b),
                        (a.resetInput = w),
                        (a.resetInputError = C),
                        (a.fixVerticalPosition = S);
                },
                {
                    "./default-params": 2,
                    "./handle-dom": 4,
                    "./injected-html": 7,
                    "./utils": 9,
                },
            ],
            7: [
                function (e, t, n) {
                    Object.defineProperty(n, "__esModule", { value: !0 });
                    var o =
                        '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <button class="confirm" tabIndex="1">OK</button>\n    </div></div>';
                    (n["default"] = o), (t.exports = n["default"]);
                },
                {},
            ],
            8: [
                function (e, t, o) {
                    Object.defineProperty(o, "__esModule", { value: !0 });
                    var a = e("./utils"),
                        r = e("./handle-swal-dom"),
                        s = e("./handle-dom"),
                        l = [
                            "error",
                            "warning",
                            "info",
                            "success",
                            "input",
                            "prompt",
                        ],
                        i = function (e) {
                            var t = r.getModal(),
                                o = t.querySelector("h2"),
                                i = t.querySelector("p"),
                                u = t.querySelector("button.cancel"),
                                c = t.querySelector("button.confirm");
                            if (
                                ((o.innerHTML = e.html
                                    ? e.title
                                    : s
                                          .escapeHtml(e.title)
                                          .split("\n")
                                          .join("<br>")),
                                (i.innerHTML = e.html
                                    ? e.text
                                    : s
                                          .escapeHtml(e.text || "")
                                          .split("\n")
                                          .join("<br>")),
                                e.text && s.show(i),
                                e.customClass)
                            )
                                s.addClass(t, e.customClass),
                                    t.setAttribute(
                                        "data-custom-class",
                                        e.customClass
                                    );
                            else {
                                var d = t.getAttribute("data-custom-class");
                                s.removeClass(t, d),
                                    t.setAttribute("data-custom-class", "");
                            }
                            if (
                                (s.hide(t.querySelectorAll(".sa-icon")),
                                e.type && !a.isIE8())
                            ) {
                                var f = (function () {
                                    for (var o = !1, a = 0; a < l.length; a++)
                                        if (e.type === l[a]) {
                                            o = !0;
                                            break;
                                        }
                                    if (!o)
                                        return (
                                            logStr(
                                                "Unknown alert type: " + e.type
                                            ),
                                            { v: !1 }
                                        );
                                    var i = [
                                            "success",
                                            "error",
                                            "warning",
                                            "info",
                                        ],
                                        u = n;
                                    -1 !== i.indexOf(e.type) &&
                                        ((u = t.querySelector(
                                            ".sa-icon.sa-" + e.type
                                        )),
                                        s.show(u));
                                    var c = r.getInput();
                                    switch (e.type) {
                                        case "success":
                                            s.addClass(u, "animate"),
                                                s.addClass(
                                                    u.querySelector(".sa-tip"),
                                                    "animateSuccessTip"
                                                ),
                                                s.addClass(
                                                    u.querySelector(".sa-long"),
                                                    "animateSuccessLong"
                                                );
                                            break;
                                        case "error":
                                            s.addClass(u, "animateErrorIcon"),
                                                s.addClass(
                                                    u.querySelector(
                                                        ".sa-x-mark"
                                                    ),
                                                    "animateXMark"
                                                );
                                            break;
                                        case "warning":
                                            s.addClass(u, "pulseWarning"),
                                                s.addClass(
                                                    u.querySelector(".sa-body"),
                                                    "pulseWarningIns"
                                                ),
                                                s.addClass(
                                                    u.querySelector(".sa-dot"),
                                                    "pulseWarningIns"
                                                );
                                            break;
                                        case "input":
                                        case "prompt":
                                            c.setAttribute("type", e.inputType),
                                                c.setAttribute(
                                                    "placeholder",
                                                    e.inputPlaceholder
                                                ),
                                                s.addClass(t, "show-input"),
                                                setTimeout(function () {
                                                    c.focus(),
                                                        c.addEventListener(
                                                            "keyup",
                                                            swal.resetInputError
                                                        );
                                                }, 400);
                                    }
                                })();
                                if ("object" == typeof f) return f.v;
                            }
                            if (e.imageUrl) {
                                var p = t.querySelector(".sa-icon.sa-custom");
                                (p.style.backgroundImage =
                                    "url(" + e.imageUrl + ")"),
                                    s.show(p);
                                var m = 80,
                                    v = 80;
                                if (e.imageSize) {
                                    var y = e.imageSize.toString().split("x"),
                                        h = y[0],
                                        g = y[1];
                                    h && g
                                        ? ((m = h), (v = g))
                                        : logStr(
                                              "Parameter imageSize expects value with format WIDTHxHEIGHT, got " +
                                                  e.imageSize
                                          );
                                }
                                p.setAttribute(
                                    "style",
                                    p.getAttribute("style") +
                                        "width:" +
                                        m +
                                        "px; height:" +
                                        v +
                                        "px"
                                );
                            }
                            t.setAttribute(
                                "data-has-cancel-button",
                                e.showCancelButton
                            ),
                                e.showCancelButton
                                    ? (u.style.display = "inline-block")
                                    : s.hide(u),
                                t.setAttribute(
                                    "data-has-confirm-button",
                                    e.showConfirmButton
                                ),
                                e.showConfirmButton
                                    ? (c.style.display = "inline-block")
                                    : s.hide(c),
                                e.cancelButtonText &&
                                    (u.innerHTML = s.escapeHtml(
                                        e.cancelButtonText
                                    )),
                                e.confirmButtonText &&
                                    (c.innerHTML = s.escapeHtml(
                                        e.confirmButtonText
                                    )),
                                e.confirmButtonColor &&
                                    ((c.style.backgroundColor =
                                        e.confirmButtonColor),
                                    r.setFocusStyle(c, e.confirmButtonColor)),
                                t.setAttribute(
                                    "data-allow-outside-click",
                                    e.allowOutsideClick
                                );
                            var b = e.doneFunction ? !0 : !1;
                            t.setAttribute("data-has-done-function", b),
                                e.animation
                                    ? "string" == typeof e.animation
                                        ? t.setAttribute(
                                              "data-animation",
                                              e.animation
                                          )
                                        : t.setAttribute(
                                              "data-animation",
                                              "pop"
                                          )
                                    : t.setAttribute("data-animation", "none"),
                                t.setAttribute("data-timer", e.timer);
                        };
                    (o["default"] = i), (t.exports = o["default"]);
                },
                { "./handle-dom": 4, "./handle-swal-dom": 6, "./utils": 9 },
            ],
            9: [
                function (t, n, o) {
                    Object.defineProperty(o, "__esModule", { value: !0 });
                    var a = function (e, t) {
                            for (var n in t)
                                t.hasOwnProperty(n) && (e[n] = t[n]);
                            return e;
                        },
                        r = function (e) {
                            var t =
                                /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
                                    e
                                );
                            return t
                                ? parseInt(t[1], 16) +
                                      ", " +
                                      parseInt(t[2], 16) +
                                      ", " +
                                      parseInt(t[3], 16)
                                : null;
                        },
                        s = function () {
                            return e.attachEvent && !e.addEventListener;
                        },
                        l = function (t) {
                            e.console && e.console.log("SweetAlert: " + t);
                        },
                        i = function (e, t) {
                            (e = String(e).replace(/[^0-9a-f]/gi, "")),
                                e.length < 6 &&
                                    (e =
                                        e[0] +
                                        e[0] +
                                        e[1] +
                                        e[1] +
                                        e[2] +
                                        e[2]),
                                (t = t || 0);
                            var n,
                                o,
                                a = "#";
                            for (o = 0; 3 > o; o++)
                                (n = parseInt(e.substr(2 * o, 2), 16)),
                                    (n = Math.round(
                                        Math.min(Math.max(0, n + n * t), 255)
                                    ).toString(16)),
                                    (a += ("00" + n).substr(n.length));
                            return a;
                        };
                    (o.extend = a),
                        (o.hexToRgb = r),
                        (o.isIE8 = s),
                        (o.logStr = l),
                        (o.colorLuminance = i);
                },
                {},
            ],
        },
        {},
        [1]
    );
})(window, document);
/* Placeholer */
!(function (t) {
    "use strict";
    t.fn.placeholderTypewriter = function (e) {
        var n = t.extend({ delay: 50, pause: 2e3, text: [] }, e);
        function r(t, e) {
            t.attr("placeholder", ""),
                (function t(e, r, u, a) {
                    var i = n.text[r],
                        o = e.attr("placeholder");
                    if ((e.attr("placeholder", o + i[u]), u < i.length - 1))
                        return (
                            setTimeout(function () {
                                t(e, r, u + 1, a);
                            }, n.delay),
                            !0
                        );
                    a();
                })(t, e, 0, function () {
                    setTimeout(function () {
                        !(function t(e, r) {
                            var u = e.attr("placeholder"),
                                a = u.length;
                            if (
                                (e.attr("placeholder", u.substr(0, a - 1)),
                                a > 1)
                            )
                                return (
                                    setTimeout(function () {
                                        t(e, r);
                                    }, n.delay),
                                    !0
                                );
                            r();
                        })(t, function () {
                            r(t, (e + 1) % n.text.length);
                        });
                    }, n.pause);
                });
        }
        return this.each(function () {
            r(t(this), 0);
        });
    };
})(jQuery);
