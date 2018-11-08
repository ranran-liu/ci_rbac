!function() {
    for (var n, u = function() {}, t = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], i = t.length, r = window.console = window.console || {}; i--; )
        n = t[i],
        r[n] || (r[n] = u)
}();
$(function() {
    $(".browsehappy").on("click", function() {
        $(this).slideUp("fast")
    })
}),
    function(n, t) {
        var r, i = n.jQuery || n.Cowboy || (n.Cowboy = {});
        i.throttle = r = function(n, r, u, f) {
            function o() {
                function i() {
                    s = +new Date;
                    u.apply(c, l)
                }
                function h() {
                    e = t
                }
                var c = this
                    , o = +new Date - s
                    , l = arguments;
                f && !e && i();
                e && clearTimeout(e);
                f === t && o > n ? i() : r !== !0 && (e = setTimeout(f ? h : i, f === t ? n - o : n))
            }
            var e, s = 0;
            return "boolean" != typeof r && (f = u,
                u = r,
                r = t),
            i.guid && (o.guid = u.guid = u.guid || i.guid++),
                o
        }
        ;
        i.debounce = function(n, i, u) {
            return u === t ? r(n, i, !1) : r(n, u, i !== !1)
        }
    }(this);
!function(n) {
    var r, i, o = "0.4.2", e = "hasOwnProperty", f = /[\.\/]/, s = "*", h = function() {}, c = function(n, t) {
        return n - t
    }, u = {
        n: {}
    }, t = function(n, u) {
        var e, y;
        n = String(n);
        var f, p = i, a = Array.prototype.slice.call(arguments, 2), o = t.listeners(n), l = 0, h = [], v = {}, s = [], w = r;
        for (r = n,
                 i = 0,
                 e = 0,
                 y = o.length; y > e; e++)
            "zIndex"in o[e] && (h.push(o[e].zIndex),
            o[e].zIndex < 0 && (v[o[e].zIndex] = o[e]));
        for (h.sort(c); h[l] < 0; )
            if (f = v[h[l++]],
                    s.push(f.apply(u, a)),
                    i)
                return i = p,
                    s;
        for (e = 0; y > e; e++)
            if (f = o[e],
                "zIndex"in f)
                if (f.zIndex == h[l]) {
                    if (s.push(f.apply(u, a)),
                            i)
                        break;
                    do
                        if (l++,
                                f = v[h[l]],
                            f && s.push(f.apply(u, a)),
                                i)
                            break;
                    while (f)
                } else
                    v[f.zIndex] = f;
            else if (s.push(f.apply(u, a)),
                    i)
                break;
        return i = p,
            r = w,
            s.length ? s : null
    };
    t._events = u;
    t.listeners = function(n) {
        for (var t, a, o, r, y, h, p = n.split(f), e = u, c = [e], l = [], i = 0, v = p.length; v > i; i++) {
            for (h = [],
                     r = 0,
                     y = c.length; y > r; r++)
                for (e = c[r].n,
                         a = [e[p[i]], e[s]],
                         o = 2; o--; )
                    t = a[o],
                    t && (h.push(t),
                        l = l.concat(t.f || []));
            c = h
        }
        return l
    }
    ;
    t.on = function(n, t) {
        if (n = String(n),
            "function" != typeof t)
            return function() {}
                ;
        for (var e = n.split(f), i = u, r = 0, o = e.length; o > r; r++)
            i = i.n,
                i = i.hasOwnProperty(e[r]) && i[e[r]] || (i[e[r]] = {
                        n: {}
                    });
        for (i.f = i.f || [],
                 r = 0,
                 o = i.f.length; o > r; r++)
            if (i.f[r] == t)
                return h;
        return i.f.push(t),
            function(n) {
                +n == +n && (t.zIndex = +n)
            }
    }
    ;
    t.f = function(n) {
        var i = [].slice.call(arguments, 1);
        return function() {
            t.apply(null, [n, null].concat(i).concat([].slice.call(arguments, 0)))
        }
    }
    ;
    t.stop = function() {
        i = 1
    }
    ;
    t.nt = function(n) {
        return n ? new RegExp("(?:\\.|\\/|^)" + n + "(?:\\.|\\/|$)").test(r) : r
    }
    ;
    t.nts = function() {
        return r.split(f)
    }
    ;
    t.off = t.unbind = function(n, i) {
        var r, h, a, c, p, o, w, v, l, y;
        if (!n)
            return void (t._events = u = {
                n: {}
            });
        for (v = n.split(f),
                 l = [u],
                 c = 0,
                 p = v.length; p > c; c++)
            for (o = 0; o < l.length; o += a.length - 2) {
                if (a = [o, 1],
                        r = l[o].n,
                    v[c] != s)
                    r[v[c]] && a.push(r[v[c]]);
                else
                    for (h in r)
                        r[e](h) && a.push(r[h]);
                l.splice.apply(l, a)
            }
        for (c = 0,
                 p = l.length; p > c; c++)
            for (r = l[c]; r.n; ) {
                if (i) {
                    if (r.f) {
                        for (o = 0,
                                 w = r.f.length; w > o; o++)
                            if (r.f[o] == i) {
                                r.f.splice(o, 1);
                                break
                            }
                        r.f.length || delete r.f
                    }
                    for (h in r.n)
                        if (r.n[e](h) && r.n[h].f) {
                            for (y = r.n[h].f,
                                     o = 0,
                                     w = y.length; w > o; o++)
                                if (y[o] == i) {
                                    y.splice(o, 1);
                                    break
                                }
                            y.length || delete r.n[h].f
                        }
                } else {
                    delete r.f;
                    for (h in r.n)
                        r.n[e](h) && r.n[h].f && delete r.n[h].f
                }
                r = r.n
            }
    }
    ;
    t.once = function(n, i) {
        var r = function() {
            return t.unbind(n, r),
                i.apply(this, arguments)
        };
        return t.on(n, r)
    }
    ;
    t.version = o;
    t.toString = function() {
        return "You are running Eve " + o
    }
    ;
    "undefined" != typeof module && module.exports ? module.exports = t : "undefined" != typeof define ? define("eve", [], function() {
                return t
            }) : n.eve = t
}(this),
    function(n, t) {
        "function" == typeof define && define.amd ? define(["eve"], function(i) {
                return t(n, i)
            }) : t(n, n.eve)
    }(this, function(n, t) {
        var i = function(t) {
            var r = {}
                , u = n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || n.oRequestAnimationFrame || n.msRequestAnimationFrame || function(n) {
                    setTimeout(n, 16)
                }
                , e = Array.isArray || function(n) {
                    return n instanceof Array || "[object Array]" == Object.prototype.toString.call(n)
                }
                , o = 0
                , s = "M" + (+new Date).toString(36)
                , h = function() {
                return s + (o++).toString(36)
            }
                , c = Date.now || function() {
                    return +new Date
                }
                , l = function(n) {
                var t = this, i;
                if (null == n)
                    return t.s;
                i = t.s - n;
                t.b += t.dur * i;
                t.B += t.dur * i;
                t.s = n
            }
                , a = function(n) {
                var t = this;
                return null == n ? t.spd : void (t.spd = n)
            }
                , v = function(n) {
                var t = this;
                return null == n ? t.dur : (t.s = t.s * n / t.dur,
                        void (t.dur = n))
            }
                , y = function() {
                var n = this;
                delete r[n.id];
                t("mina.stop." + n.id, n)
            }
                , p = function() {
                var n = this;
                n.pdif || (delete r[n.id],
                    n.pdif = n.get() - n.b)
            }
                , w = function() {
                var n = this;
                n.pdif && (n.b = n.get() - n.pdif,
                    delete n.pdif,
                    r[n.id] = n)
            }
                , f = function() {
                var h = 0, o, s, n, c, i, l;
                for (o in r)
                    if (r.hasOwnProperty(o)) {
                        if (n = r[o],
                                c = n.get(),
                                h++,
                                n.s = (c - n.b) / (n.dur / n.spd),
                            n.s >= 1 && (delete r[o],
                                n.s = 1,
                                h--,
                                function(n) {
                                    setTimeout(function() {
                                        t("mina.finish." + n.id, n)
                                    })
                                }(n)),
                                e(n.start))
                            for (s = [],
                                     i = 0,
                                     l = n.start.length; l > i; i++)
                                s[i] = +n.start[i] + (n.end[i] - n.start[i]) * n.easing(n.s);
                        else
                            s = +n.start + (n.end - n.start) * n.easing(n.s);
                        n.set(s)
                    }
                h && u(f)
            }
                , i = function(n, t, e, o, s, c, b) {
                var d = {
                    id: h(),
                    start: n,
                    end: t,
                    b: e,
                    s: 0,
                    dur: o - e,
                    spd: 1,
                    get: s,
                    set: c,
                    easing: b || i.linear,
                    status: l,
                    speed: a,
                    duration: v,
                    stop: y,
                    pause: p,
                    resume: w
                }, g, k;
                r[d.id] = d;
                k = 0;
                for (g in r)
                    if (r.hasOwnProperty(g) && (k++,
                        2 == k))
                        break;
                return 1 == k && u(f),
                    d
            };
            return i.time = c,
                i.getById = function(n) {
                    return r[n] || null
                }
                ,
                i.linear = function(n) {
                    return n
                }
                ,
                i.easeout = function(n) {
                    return Math.pow(n, 1.7)
                }
                ,
                i.easein = function(n) {
                    return Math.pow(n, .48)
                }
                ,
                i.easeinout = function(n) {
                    if (1 == n)
                        return 1;
                    if (0 == n)
                        return 0;
                    var i = .48 - n / 1.04
                        , r = Math.sqrt(.1734 + i * i)
                        , u = r - i
                        , e = Math.pow(Math.abs(u), 1 / 3) * (0 > u ? -1 : 1)
                        , f = -r - i
                        , o = Math.pow(Math.abs(f), 1 / 3) * (0 > f ? -1 : 1)
                        , t = e + o + .5;
                    return 3 * (1 - t) * t * t + t * t * t
                }
                ,
                i.backin = function(n) {
                    if (1 == n)
                        return 1;
                    var t = 1.70158;
                    return n * n * ((t + 1) * n - t)
                }
                ,
                i.backout = function(n) {
                    if (0 == n)
                        return 0;
                    n -= 1;
                    var t = 1.70158;
                    return n * n * ((t + 1) * n + t) + 1
                }
                ,
                i.elastic = function(n) {
                    return n == !!n ? n : Math.pow(2, -10 * n) * Math.sin(2 * (n - .075) * Math.PI / .3) + 1
                }
                ,
                i.bounce = function(n) {
                    var i, r = 7.5625, t = 2.75;
                    return 1 / t > n ? i = r * n * n : 2 / t > n ? (n -= 1.5 / t,
                                i = r * n * n + .75) : 2.5 / t > n ? (n -= 2.25 / t,
                                    i = r * n * n + .9375) : (n -= 2.625 / t,
                                    i = r * n * n + .984375),
                        i
                }
                ,
                n.mina = i,
                i
        }("undefined" == typeof t ? function() {}
            : t)
            , r = function() {
            function r(n, t) {
                if (n) {
                    if (n.tagName)
                        return o(n);
                    if (n instanceof v)
                        return n;
                    if (null == t)
                        return n = e.doc.querySelector(n),
                            o(n)
                }
                return n = null == n ? "100%" : n,
                    t = null == t ? "100%" : t,
                    new d(n,t)
            }
            function u(n, t) {
                var i, r;
                if (t) {
                    if ("string" == typeof n && (n = u(n)),
                        "string" == typeof t)
                        return "xlink:" == t.substring(0, 6) ? n.getAttributeNS(vi, t.substring(6)) : "xml:" == t.substring(0, 4) ? n.getAttributeNS(ft, t.substring(4)) : n.getAttribute(t);
                    for (i in t)
                        t[l](i) && (r = c(t[i]),
                            r ? "xlink:" == i.substring(0, 6) ? n.setAttributeNS(vi, i.substring(6), r) : "xml:" == i.substring(0, 4) ? n.setAttributeNS(ft, i.substring(4), r) : n.setAttribute(i, r) : n.removeAttribute(i))
                } else
                    n = e.doc.createElementNS(ft, n);
                return n
            }
            function f(n, t) {
                return t = c.prototype.toLowerCase.call(t),
                    "finite" == t ? isFinite(n) : "array" == t && (n instanceof Array || Array.isArray && Array.isArray(n)) ? !0 : "null" == t && null === n || t == typeof n && null !== n || "object" == t && n === Object(n) || ci.call(n).slice(8, -1).toLowerCase() == t
            }
            function bt(n) {
                var i, t;
                if ("function" == typeof n || Object(n) !== n)
                    return n;
                i = new n.constructor;
                for (t in n)
                    n[l](t) && (i[t] = bt(n[t]));
                return i
            }
            function tr(n, t) {
                for (var i = 0, r = n.length; r > i; i++)
                    if (n[i] === t)
                        return n.push(n.splice(i, 1)[0])
            }
            function tt(n, t, i) {
                function r() {
                    var o = Array.prototype.slice.call(arguments, 0)
                        , u = o.join("â€")
                        , f = r.cache = r.cache || {}
                        , e = r.count = r.count || [];
                    return f[l](u) ? (tr(e, u),
                            i ? i(f[u]) : f[u]) : (e.length >= 1e3 && delete f[e.shift()],
                            e.push(u),
                            f[u] = n.apply(t, o),
                            i ? i(f[u]) : f[u])
                }
                return r
            }
            function st(n, t, i, r, u, f) {
                if (null == u) {
                    var e = n - i
                        , o = t - r;
                    return e || o ? (180 + 180 * s.atan2(-o, -e) / vt + 360) % 360 : 0
                }
                return st(n, t, u, f) - st(i, r, u, f)
            }
            function ot(n) {
                return n % 360 * vt / 180
            }
            function ht(n) {
                return 180 * n / vt % 360
            }
            function b(n, t, i, r, u, f) {
                return null == t && "[object SVGMatrix]" == ci.call(n) ? (this.a = n.a,
                        this.b = n.b,
                        this.c = n.c,
                        this.d = n.d,
                        this.e = n.e,
                        void (this.f = n.f)) : void (null != n ? (this.a = +n,
                            this.b = +t,
                            this.c = +i,
                            this.d = +r,
                            this.e = +u,
                            this.f = +f) : (this.a = 1,
                            this.b = 0,
                            this.c = 0,
                            this.d = 1,
                            this.e = 0,
                            this.f = 0))
            }
            function ct(n) {
                var t = [];
                return n = n.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(n, i, r) {
                    return r = r.split(/\s*,\s*|\s+/),
                    "rotate" == i && 1 == r.length && r.push(0, 0),
                    "scale" == i && (2 == r.length && r.push(0, 0),
                    1 == r.length && r.push(r[0], 0, 0)),
                        "skewX" == i ? t.push(["m", 1, 0, s.tan(ot(r[0])), 1, 0, 0]) : "skewY" == i ? t.push(["m", 1, s.tan(ot(r[0])), 0, 1, 0, 0]) : t.push([i.charAt(0)].concat(r)),
                        n
                }),
                    t
            }
            function kt(n, t) {
                var v = ki(n), r = new b, a, y;
                if (v)
                    for (a = 0,
                             y = v.length; y > a; a++) {
                        var p, w, o, s, u, i = v[a], f = i.length, h = c(i[0]).toLowerCase(), l = i[0] != h, e = l ? r.invert() : 0;
                        "t" == h && 2 == f ? r.translate(i[1], 0) : "t" == h && 3 == f ? l ? (p = e.x(0, 0),
                                        w = e.y(0, 0),
                                        o = e.x(i[1], i[2]),
                                        s = e.y(i[1], i[2]),
                                        r.translate(o - p, s - w)) : r.translate(i[1], i[2]) : "r" == h ? 2 == f ? (u = u || t,
                                            r.rotate(i[1], u.x + u.width / 2, u.y + u.height / 2)) : 4 == f && (l ? (o = e.x(i[2], i[3]),
                                                s = e.y(i[2], i[3]),
                                                r.rotate(i[1], o, s)) : r.rotate(i[1], i[2], i[3])) : "s" == h ? 2 == f || 3 == f ? (u = u || t,
                                                r.scale(i[1], i[f - 1], u.x + u.width / 2, u.y + u.height / 2)) : 4 == f ? l ? (o = e.x(i[2], i[3]),
                                                        s = e.y(i[2], i[3]),
                                                        r.scale(i[1], i[1], o, s)) : r.scale(i[1], i[1], i[2], i[3]) : 5 == f && (l ? (o = e.x(i[3], i[4]),
                                                        s = e.y(i[3], i[4]),
                                                        r.scale(i[1], i[2], o, s)) : r.scale(i[1], i[2], i[3], i[4])) : "m" == h && 7 == f && r.add(i[1], i[2], i[3], i[4], i[5], i[6])
                    }
                return r
            }
            function dt(n, t) {
                var u, i;
                if (null == t) {
                    if (u = !0,
                            t = "linearGradient" == n.type || "radialGradient" == n.type ? n.node.getAttribute("gradientTransform") : "pattern" == n.type ? n.node.getAttribute("patternTransform") : n.node.getAttribute("transform"),
                            !t)
                        return new b;
                    t = ct(t)
                } else
                    t = r._.rgTransform.test(t) ? c(t).replace(/\.{3}|\u2026/g, n._.transform || w) : ct(t),
                    f(t, "array") && (t = r.path ? r.path.toString.call(t) : c(t)),
                        n._.transform = t;
                return i = kt(t, n.getBBox(1)),
                    u ? i : void (n.matrix = i)
            }
            function p(n) {
                var t = r._.someDefs;
                if (t && di(t.ownerDocument.documentElement, t))
                    return t;
                var u = n.node.ownerSVGElement && o(n.node.ownerSVGElement) || n.node.parentNode && o(n.node.parentNode) || r.select("svg") || r(0, 0)
                    , f = u.select("defs")
                    , i = null == f ? !1 : f.node;
                return i || (i = h("defs", u.node).node),
                    r._.someDefs = i,
                    i
            }
            function gt(n, t, i) {
                function f(n) {
                    return null == n ? w : n == +n ? n : (u(o, {
                                width: n
                            }),
                                o.getBBox().width)
                }
                function e(n) {
                    return null == n ? w : n == +n ? n : (u(o, {
                                height: n
                            }),
                                o.getBBox().height)
                }
                function r(r, u) {
                    null == t ? s[r] = u(n.attr(r)) : r == t && (s = u(null == i ? n.attr(r) : i))
                }
                var h = p(n)
                    , s = {}
                    , o = h.querySelector(".svg---mgr");
                switch (o || (o = u("rect"),
                    u(o, {
                        width: 10,
                        height: 10,
                        "class": "svg---mgr"
                    }),
                    h.appendChild(o)),
                    n.type) {
                    case "rect":
                        r("rx", f);
                        r("ry", e);
                    case "image":
                        r("width", f);
                        r("height", e);
                    case "text":
                        r("x", f);
                        r("y", e);
                        break;
                    case "circle":
                        r("cx", f);
                        r("cy", e);
                        r("r", f);
                        break;
                    case "ellipse":
                        r("cx", f);
                        r("cy", e);
                        r("rx", f);
                        r("ry", e);
                        break;
                    case "line":
                        r("x1", f);
                        r("x2", f);
                        r("y1", e);
                        r("y2", e);
                        break;
                    case "marker":
                        r("refX", f);
                        r("markerWidth", f);
                        r("refY", e);
                        r("markerHeight", e);
                        break;
                    case "radialGradient":
                        r("fx", f);
                        r("fy", e);
                        break;
                    case "tspan":
                        r("dx", f);
                        r("dy", e);
                        break;
                    default:
                        r(t, f)
                }
                return s
            }
            function ni(n) {
                var r;
                f(n, "array") || (n = Array.prototype.slice.call(arguments, 0));
                for (var t = 0, u = 0, i = this.node; this[t]; )
                    delete this[t++];
                for (t = 0; t < n.length; t++)
                    "set" == n[t].type ? n[t].forEach(function(n) {
                            i.appendChild(n.node)
                        }) : i.appendChild(n[t].node);
                for (r = i.childNodes,
                         t = 0; t < r.length; t++)
                    this[u++] = o(r[t]);
                return this
            }
            function v(n) {
                var i, r, t;
                if (n.snap in et)
                    return et[n.snap];
                r = this.id = pt();
                try {
                    i = n.ownerSVGElement
                } catch (u) {}
                if (this.node = n,
                    i && (this.paper = new d(i)),
                        this.type = n.tagName,
                        this.anims = {},
                        this._ = {
                            transform: []
                        },
                        n.snap = r,
                        et[r] = this,
                    "g" == this.type) {
                    this.add = ni;
                    for (t in d.prototype)
                        d.prototype[l](t) && (this[t] = d.prototype[t])
                }
            }
            function ti(n) {
                for (var t, i = 0, r = n.length; r > i; i++)
                    if (t = t || n[i])
                        return t
            }
            function k(n) {
                this.node = n
            }
            function h(n, t) {
                var r = u(n), i;
                return t.appendChild(r),
                    i = o(r),
                    i.type = n,
                    i
            }
            function d(n, t) {
                var i, r, f, s = d.prototype, o;
                if (n && "svg" == n.tagName) {
                    if (n.snap in et)
                        return et[n.snap];
                    i = new v(n);
                    r = n.getElementsByTagName("desc")[0];
                    f = n.getElementsByTagName("defs")[0];
                    r || (r = u("desc"),
                        r.appendChild(e.doc.createTextNode("Created with Snap")),
                        i.node.appendChild(r));
                    f || (f = u("defs"),
                        i.node.appendChild(f));
                    i.defs = f;
                    for (o in s)
                        s[l](o) && (i[o] = s[o]);
                    i.paper = i.root = i
                } else
                    i = h("svg", e.doc.body),
                        u(i.node, {
                            height: t,
                            version: 1.1,
                            width: n,
                            xmlns: ft
                        });
                return i
            }
            function o(n) {
                return n ? n instanceof v || n instanceof k ? n : "svg" == n.tagName ? new d(n) : new v(n) : n
            }
            function ii() {
                return this.selectAll("stop")
            }
            function ri(n, t) {
                var f = u("stop")
                    , i = {
                    offset: +t + "%"
                };
                return n = r.color(n),
                    i["stop-color"] = n.hex,
                n.opacity < 1 && (i["stop-opacity"] = n.opacity),
                    u(f, i),
                    this.node.appendChild(f),
                    this
            }
            function ui() {
                if ("linearGradient" == this.type) {
                    var t = u(this.node, "x1") || 0
                        , f = u(this.node, "x2") || 1
                        , i = u(this.node, "y1") || 0
                        , e = u(this.node, "y2") || 0;
                    return r._.box(t, i, s.abs(f - t), s.abs(e - i))
                }
                var o = this.node.cx || .5
                    , h = this.node.cy || .5
                    , n = this.node.r || 0;
                return r._.box(o - n, h - n, 2 * n, 2 * n)
            }
            function fi(n, i) {
                function a(n, t) {
                    for (var r = (t - c) / (n - h), i = h; n > i; i++)
                        e[i].offset = +(+c + r * (i - h)).toFixed(2);
                    h = n;
                    c = t
                }
                var s, f = ti(t("snap.util.grad.parse", null, i)), r, l;
                if (!f)
                    return null;
                f.params.unshift(n);
                s = "l" == f.type.toLowerCase() ? ei.apply(0, f.params) : oi.apply(0, f.params);
                f.type != f.type.toLowerCase() && u(s.node, {
                    gradientUnits: "userSpaceOnUse"
                });
                var e = f.stops
                    , o = e.length
                    , c = 0
                    , h = 0;
                for (o--,
                         r = 0; o > r; r++)
                    "offset"in e[r] && a(r, e[r].offset);
                for (e[o].offset = e[o].offset || 100,
                         a(o, e[o].offset),
                         r = 0; o >= r; r++)
                    l = e[r],
                        s.addStop(l.color, l.offset);
                return s
            }
            function ei(n, t, i, r, f) {
                var e = h("linearGradient", n);
                return e.stops = ii,
                    e.addStop = ri,
                    e.getBBox = ui,
                null != t && u(e.node, {
                    x1: t,
                    y1: i,
                    x2: r,
                    y2: f
                }),
                    e
            }
            function oi(n, t, i, r, f, e) {
                var o = h("radialGradient", n);
                return o.stops = ii,
                    o.addStop = ri,
                    o.getBBox = ui,
                null != t && u(o.node, {
                    cx: t,
                    cy: i,
                    r: r
                }),
                null != f && null != e && u(o.node, {
                    fx: f,
                    fy: e
                }),
                    o
            }
            function si(n) {
                return function(i) {
                    var f, e, s;
                    (t.stop(),
                    i instanceof k && 1 == i.node.childNodes.length && ("radialGradient" == i.node.firstChild.tagName || "linearGradient" == i.node.firstChild.tagName || "pattern" == i.node.firstChild.tagName) && (i = i.node.firstChild,
                        p(this).appendChild(i),
                        i = o(i)),
                    i instanceof v) ? "radialGradient" == i.type || "linearGradient" == i.type || "pattern" == i.type ? (i.node.id || u(i.node, {
                                id: i.id
                            }),
                                f = ut(i.node.id)) : f = i.attr(n) : (f = r.color(i),
                            f.error) ? (e = fi(p(this), i),
                                e ? (e.node.id || u(e.node, {
                                        id: e.id
                                    }),
                                        f = ut(e.node.id)) : f = i) : f = c(f);
                    s = {};
                    s[n] = f;
                    u(this.node, s);
                    this.node.style[n] = w
                }
            }
            function hi(n) {
                for (var t, i = [], u = n.childNodes, r = 0, f = u.length; f > r; r++)
                    t = u[r],
                    3 == t.nodeType && i.push(t.nodeValue),
                    "tspan" == t.tagName && (1 == t.childNodes.length && 3 == t.firstChild.nodeType ? i.push(t.firstChild.nodeValue) : i.push(hi(t)));
                return i
            }
            var e, yi, ki, di, gi, wt, nr;
            r.version = "0.2.0";
            r.toString = function() {
                return "Snap v" + this.version
            }
            ;
            r._ = {};
            e = {
                win: n,
                doc: n.document
            };
            r._.glob = e;
            var l = "hasOwnProperty"
                , c = String
                , y = parseFloat
                , it = parseInt
                , s = Math
                , lt = s.max
                , rt = s.min
                , at = s.abs
                , vt = (s.pow,
                    s.PI)
                , w = (s.round,
                    "")
                , ir = " "
                , ci = Object.prototype.toString
                , rr = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i
                , ur = /^url\(#?([^)]+)\)$/
                , a = "    \n\x0b\f\r Â áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029"
                , li = new RegExp("[," + a + "]+")
                , yt = (new RegExp("[" + a + "]","g"),
                    new RegExp("[" + a + "]*,[" + a + "]*"))
                , fr = {
                    hs: 1,
                    rg: 1
                }
                , er = new RegExp("([a-z])[" + a + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + a + "]*,?[" + a + "]*)+)","ig")
                , or = new RegExp("([rstm])[" + a + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + a + "]*,?[" + a + "]*)+)","ig")
                , ai = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + a + "]*,?[" + a + "]*","ig")
                , sr = 0
                , hr = "S" + (+new Date).toString(36)
                , pt = function() {
                    return hr + (sr++).toString(36)
                }
                , vi = "http://www.w3.org/1999/xlink"
                , ft = "http://www.w3.org/2000/svg"
                , et = {}
                , ut = r.url = function(n) {
                    return "url('#" + n + "')"
                }
                ;
            r._.$ = u;
            r._.id = pt;
            r.format = function() {
                var n = /\{([^\}]+)\}/g
                    , t = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g
                    , i = function(n, i, r) {
                    var u = r;
                    return i.replace(t, function(n, t, i, r, f) {
                        t = t || r;
                        u && (t in u && (u = u[t]),
                        "function" == typeof u && f && (u = u()))
                    }),
                        u = (null == u || u == r ? n : u) + ""
                };
                return function(t, r) {
                    return c(t).replace(n, function(n, t) {
                        return i(n, t, r)
                    })
                }
            }();
            yi = function() {
                function n() {
                    this.parentNode.removeChild(this)
                }
                return function(t, i) {
                    var r = e.doc.createElement("img")
                        , u = e.doc.body;
                    r.style.cssText = "position:absolute;left:-9999em;top:-9999em";
                    r.onload = function() {
                        i.call(r);
                        r.onload = r.onerror = null;
                        u.removeChild(r)
                    }
                    ;
                    r.onerror = n;
                    u.appendChild(r);
                    r.src = t
                }
            }();
            r._.clone = bt;
            r._.cacher = tt;
            r.rad = ot;
            r.deg = ht;
            r.angle = st;
            r.is = f;
            r.snapTo = function(n, t, i) {
                var u, r;
                if (i = f(i, "finite") ? i : 10,
                        f(n, "array")) {
                    for (u = n.length; u--; )
                        if (at(n[u] - t) <= i)
                            return n[u]
                } else {
                    if (n = +n,
                            r = t % n,
                        i > r)
                        return t - r;
                    if (r > n - i)
                        return t - r + n
                }
                return t
            }
                ,
                function(n) {
                    function t(n) {
                        return n[0] * n[0] + n[1] * n[1]
                    }
                    function i(n) {
                        var i = s.sqrt(t(n));
                        n[0] && (n[0] /= i);
                        n[1] && (n[1] /= i)
                    }
                    n.add = function(n, t, i, r, u, f) {
                        var o, s, h, c, e = [[], [], []], a = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]], l = [[n, i, u], [t, r, f], [0, 0, 1]];
                        for (n && n instanceof b && (l = [[n.a, n.c, n.e], [n.b, n.d, n.f], [0, 0, 1]]),
                                 o = 0; 3 > o; o++)
                            for (s = 0; 3 > s; s++) {
                                for (c = 0,
                                         h = 0; 3 > h; h++)
                                    c += a[o][h] * l[h][s];
                                e[o][s] = c
                            }
                        return this.a = e[0][0],
                            this.b = e[1][0],
                            this.c = e[0][1],
                            this.d = e[1][1],
                            this.e = e[0][2],
                            this.f = e[1][2],
                            this
                    }
                    ;
                    n.invert = function() {
                        var n = this
                            , t = n.a * n.d - n.b * n.c;
                        return new b(n.d / t,-n.b / t,-n.c / t,n.a / t,(n.c * n.f - n.d * n.e) / t,(n.b * n.e - n.a * n.f) / t)
                    }
                    ;
                    n.clone = function() {
                        return new b(this.a,this.b,this.c,this.d,this.e,this.f)
                    }
                    ;
                    n.translate = function(n, t) {
                        return this.add(1, 0, 0, 1, n, t)
                    }
                    ;
                    n.scale = function(n, t, i, r) {
                        return null == t && (t = n),
                        (i || r) && this.add(1, 0, 0, 1, i, r),
                            this.add(n, 0, 0, t, 0, 0),
                        (i || r) && this.add(1, 0, 0, 1, -i, -r),
                            this
                    }
                    ;
                    n.rotate = function(n, t, i) {
                        n = ot(n);
                        t = t || 0;
                        i = i || 0;
                        var r = +s.cos(n).toFixed(9)
                            , u = +s.sin(n).toFixed(9);
                        return this.add(r, u, -u, r, t, i),
                            this.add(1, 0, 0, 1, -t, -i)
                    }
                    ;
                    n.x = function(n, t) {
                        return n * this.a + t * this.c + this.e
                    }
                    ;
                    n.y = function(n, t) {
                        return n * this.b + t * this.d + this.f
                    }
                    ;
                    n.get = function(n) {
                        return +this[c.fromCharCode(97 + n)].toFixed(4)
                    }
                    ;
                    n.toString = function() {
                        return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
                    }
                    ;
                    n.offset = function() {
                        return [this.e.toFixed(4), this.f.toFixed(4)]
                    }
                    ;
                    n.split = function() {
                        var n = {}, r, u, f;
                        return n.dx = this.e,
                            n.dy = this.f,
                            r = [[this.a, this.c], [this.b, this.d]],
                            n.scalex = s.sqrt(t(r[0])),
                            i(r[0]),
                            n.shear = r[0][0] * r[1][0] + r[0][1] * r[1][1],
                            r[1] = [r[1][0] - r[0][0] * n.shear, r[1][1] - r[0][1] * n.shear],
                            n.scaley = s.sqrt(t(r[1])),
                            i(r[1]),
                            n.shear /= n.scaley,
                            u = -r[0][1],
                            f = r[1][1],
                            0 > f ? (n.rotate = ht(s.acos(f)),
                                0 > u && (n.rotate = 360 - n.rotate)) : n.rotate = ht(s.asin(u)),
                            n.isSimple = !(+n.shear.toFixed(9) || n.scalex.toFixed(9) != n.scaley.toFixed(9) && n.rotate),
                            n.isSuperSimple = !+n.shear.toFixed(9) && n.scalex.toFixed(9) == n.scaley.toFixed(9) && !n.rotate,
                            n.noRotation = !+n.shear.toFixed(9) && !n.rotate,
                            n
                    }
                    ;
                    n.toTransformString = function(n) {
                        var t = n || this.split();
                        return t.isSimple ? (t.scalex = +t.scalex.toFixed(4),
                                t.scaley = +t.scaley.toFixed(4),
                                t.rotate = +t.rotate.toFixed(4),
                            (t.dx || t.dy ? "t" + [+t.dx.toFixed(4), +t.dy.toFixed(4)] : w) + (1 != t.scalex || 1 != t.scaley ? "s" + [t.scalex, t.scaley, 0, 0] : w) + (t.rotate ? "r" + [+t.rotate.toFixed(4), 0, 0] : w)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
                    }
                }(b.prototype);
            r.Matrix = b;
            r.getRGB = tt(function(n) {
                if (!n || (n = c(n)).indexOf("-") + 1)
                    return {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        error: 1,
                        toString: nt
                    };
                if ("none" == n)
                    return {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        toString: nt
                    };
                if (!(fr[l](n.toLowerCase().substring(0, 2)) || "#" == n.charAt()) && (n = pi(n)),
                        !n)
                    return {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        error: 1,
                        toString: nt
                    };
                var u, e, o, h, a, t, i = n.match(rr);
                return i ? (i[2] && (o = it(i[2].substring(5), 16),
                        e = it(i[2].substring(3, 5), 16),
                        u = it(i[2].substring(1, 3), 16)),
                    i[3] && (o = it((a = i[3].charAt(3)) + a, 16),
                        e = it((a = i[3].charAt(2)) + a, 16),
                        u = it((a = i[3].charAt(1)) + a, 16)),
                    i[4] && (t = i[4].split(yt),
                        u = y(t[0]),
                    "%" == t[0].slice(-1) && (u *= 2.55),
                        e = y(t[1]),
                    "%" == t[1].slice(-1) && (e *= 2.55),
                        o = y(t[2]),
                    "%" == t[2].slice(-1) && (o *= 2.55),
                    "rgba" == i[1].toLowerCase().slice(0, 4) && (h = y(t[3])),
                    t[3] && "%" == t[3].slice(-1) && (h /= 100)),
                        i[5] ? (t = i[5].split(yt),
                                u = y(t[0]),
                            "%" == t[0].slice(-1) && (u /= 100),
                                e = y(t[1]),
                            "%" == t[1].slice(-1) && (e /= 100),
                                o = y(t[2]),
                            "%" == t[2].slice(-1) && (o /= 100),
                            ("deg" == t[0].slice(-3) || "Â°" == t[0].slice(-1)) && (u /= 360),
                            "hsba" == i[1].toLowerCase().slice(0, 4) && (h = y(t[3])),
                            t[3] && "%" == t[3].slice(-1) && (h /= 100),
                                r.hsb2rgb(u, e, o, h)) : i[6] ? (t = i[6].split(yt),
                                    u = y(t[0]),
                                "%" == t[0].slice(-1) && (u /= 100),
                                    e = y(t[1]),
                                "%" == t[1].slice(-1) && (e /= 100),
                                    o = y(t[2]),
                                "%" == t[2].slice(-1) && (o /= 100),
                                ("deg" == t[0].slice(-3) || "Â°" == t[0].slice(-1)) && (u /= 360),
                                "hsla" == i[1].toLowerCase().slice(0, 4) && (h = y(t[3])),
                                t[3] && "%" == t[3].slice(-1) && (h /= 100),
                                    r.hsl2rgb(u, e, o, h)) : (u = rt(s.round(u), 255),
                                    e = rt(s.round(e), 255),
                                    o = rt(s.round(o), 255),
                                    h = rt(lt(h, 0), 1),
                                    i = {
                                        r: u,
                                        g: e,
                                        b: o,
                                        toString: nt
                                    },
                                    i.hex = "#" + (16777216 | o | e << 8 | u << 16).toString(16).slice(1),
                                    i.opacity = f(h, "finite") ? h : 1,
                                    i)) : {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        error: 1,
                        toString: nt
                    }
            }, r);
            r.hsb = tt(function(n, t, i) {
                return r.hsb2rgb(n, t, i).hex
            });
            r.hsl = tt(function(n, t, i) {
                return r.hsl2rgb(n, t, i).hex
            });
            r.rgb = tt(function(n, t, i, r) {
                if (f(r, "finite")) {
                    var u = s.round;
                    return "rgba(" + [u(n), u(t), u(i), +r.toFixed(2)] + ")"
                }
                return "#" + (16777216 | i | t << 8 | n << 16).toString(16).slice(1)
            });
            var pi = function(n) {
                var t = e.doc.getElementsByTagName("head")[0]
                    , i = "rgb(255, 0, 0)";
                return (pi = tt(function(n) {
                    if ("red" == n.toLowerCase())
                        return i;
                    t.style.color = i;
                    t.style.color = n;
                    var r = e.doc.defaultView.getComputedStyle(t, w).getPropertyValue("color");
                    return r == i ? null : r
                }))(n)
            }
                , cr = function() {
                return "hsb(" + [this.h, this.s, this.b] + ")"
            }
                , lr = function() {
                return "hsl(" + [this.h, this.s, this.l] + ")"
            }
                , nt = function() {
                return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
            }
                , wi = function(n, t, i) {
                if (null == t && f(n, "object") && "r"in n && "g"in n && "b"in n && (i = n.b,
                        t = n.g,
                        n = n.r),
                    null == t && f(n, string)) {
                    var u = r.getRGB(n);
                    n = u.r;
                    t = u.g;
                    i = u.b
                }
                return (n > 1 || t > 1 || i > 1) && (n /= 255,
                    t /= 255,
                    i /= 255),
                    [n, t, i]
            }
                , bi = function(n, t, i, u) {
                n = s.round(255 * n);
                t = s.round(255 * t);
                i = s.round(255 * i);
                var e = {
                    r: n,
                    g: t,
                    b: i,
                    opacity: f(u, "finite") ? u : 1,
                    hex: r.rgb(n, t, i),
                    toString: nt
                };
                return f(u, "finite") && (e.opacity = u),
                    e
            };
            return r.color = function(n) {
                var t;
                return f(n, "object") && "h"in n && "s"in n && "b"in n ? (t = r.hsb2rgb(n),
                        n.r = t.r,
                        n.g = t.g,
                        n.b = t.b,
                        n.opacity = 1,
                        n.hex = t.hex) : f(n, "object") && "h"in n && "s"in n && "l"in n ? (t = r.hsl2rgb(n),
                            n.r = t.r,
                            n.g = t.g,
                            n.b = t.b,
                            n.opacity = 1,
                            n.hex = t.hex) : (f(n, "string") && (n = r.getRGB(n)),
                            f(n, "object") && "r"in n && "g"in n && "b"in n && !("error"in n) ? (t = r.rgb2hsl(n),
                                    n.h = t.h,
                                    n.s = t.s,
                                    n.l = t.l,
                                    t = r.rgb2hsb(n),
                                    n.v = t.b) : (n = {
                                    hex: "none"
                                },
                                    n.r = n.g = n.b = n.h = n.s = n.v = n.l = -1,
                                    n.error = 1)),
                    n.toString = nt,
                    n
            }
                ,
                r.hsb2rgb = function(n, t, i, r) {
                    f(n, "object") && "h"in n && "s"in n && "b"in n && (i = n.b,
                        t = n.s,
                        n = n.h,
                        r = n.o);
                    n *= 360;
                    var o, s, h, e, u;
                    return n = n % 360 / 60,
                        u = i * t,
                        e = u * (1 - at(n % 2 - 1)),
                        o = s = h = i - u,
                        n = ~~n,
                        o += [u, e, 0, 0, e, u][n],
                        s += [e, u, u, e, 0, 0][n],
                        h += [0, 0, e, u, u, e][n],
                        bi(o, s, h, r)
                }
                ,
                r.hsl2rgb = function(n, t, i, r) {
                    f(n, "object") && "h"in n && "s"in n && "l"in n && (i = n.l,
                        t = n.s,
                        n = n.h);
                    (n > 1 || t > 1 || i > 1) && (n /= 360,
                        t /= 100,
                        i /= 100);
                    n *= 360;
                    var o, s, h, e, u;
                    return n = n % 360 / 60,
                        u = 2 * t * (.5 > i ? i : 1 - i),
                        e = u * (1 - at(n % 2 - 1)),
                        o = s = h = i - u / 2,
                        n = ~~n,
                        o += [u, e, 0, 0, e, u][n],
                        s += [e, u, u, e, 0, 0][n],
                        h += [0, 0, e, u, u, e][n],
                        bi(o, s, h, r)
                }
                ,
                r.rgb2hsb = function(n, t, i) {
                    i = wi(n, t, i);
                    n = i[0];
                    t = i[1];
                    i = i[2];
                    var f, e, u, r;
                    return u = lt(n, t, i),
                        r = u - rt(n, t, i),
                        f = 0 == r ? null : u == n ? (t - i) / r : u == t ? (i - n) / r + 2 : (n - t) / r + 4,
                        f = (f + 360) % 6 / 6,
                        e = 0 == r ? 0 : r / u,
                        {
                            h: f,
                            s: e,
                            b: u,
                            toString: cr
                        }
                }
                ,
                r.rgb2hsl = function(n, t, i) {
                    i = wi(n, t, i);
                    n = i[0];
                    t = i[1];
                    i = i[2];
                    var e, s, u, f, o, r;
                    return f = lt(n, t, i),
                        o = rt(n, t, i),
                        r = f - o,
                        e = 0 == r ? null : f == n ? (t - i) / r : f == t ? (i - n) / r + 2 : (n - t) / r + 4,
                        e = (e + 360) % 6 / 6,
                        u = (f + o) / 2,
                        s = 0 == r ? 0 : .5 > u ? r / (2 * u) : r / (2 - 2 * u),
                        {
                            h: e,
                            s: s,
                            l: u,
                            toString: lr
                        }
                }
                ,
                r.parsePathString = function(n) {
                    var i, u, t;
                    return n ? (i = r.path(n),
                            i.arr) ? r.path.clone(i.arr) : (u = {
                                a: 7,
                                c: 6,
                                o: 2,
                                h: 1,
                                l: 2,
                                m: 2,
                                r: 4,
                                q: 4,
                                s: 4,
                                t: 2,
                                v: 1,
                                u: 3,
                                z: 0
                            },
                                t = [],
                            f(n, "array") && f(n[0], "array") && (t = r.path.clone(n)),
                            t.length || c(n).replace(er, function(n, i, r) {
                                var f = []
                                    , e = i.toLowerCase();
                                if (r.replace(ai, function(n, t) {
                                        t && f.push(+t)
                                    }),
                                    "m" == e && f.length > 2 && (t.push([i].concat(f.splice(0, 2))),
                                        e = "l",
                                        i = "m" == i ? "l" : "L"),
                                    "o" == e && 1 == f.length && t.push([i, f[0]]),
                                    "r" == e)
                                    t.push([i].concat(f));
                                else
                                    for (; f.length >= u[e] && (t.push([i].concat(f.splice(0, u[e]))),
                                        u[e]); )
                                        ;
                            }),
                                t.toString = r.path.toString,
                                i.arr = r.path.clone(t),
                                t) : null
                }
                ,
                ki = r.parseTransformString = function(n) {
                    if (!n)
                        return null;
                    var t = [];
                    return f(n, "array") && f(n[0], "array") && (t = r.path.clone(n)),
                    t.length || c(n).replace(or, function(n, i, r) {
                        var u = [];
                        i.toLowerCase();
                        r.replace(ai, function(n, t) {
                            t && u.push(+t)
                        });
                        t.push([i].concat(u))
                    }),
                        t.toString = r.path.toString,
                        t
                }
                ,
                r._.svgTransform2string = ct,
                r._.rgTransform = new RegExp("^[a-z][" + a + "]*-?\\.?\\d","i"),
                r._.transform2matrix = kt,
                r._unit2px = gt,
                di = e.doc.contains || e.doc.compareDocumentPosition ? function(n, t) {
                        var r = 9 == n.nodeType ? n.documentElement : n
                            , i = t && t.parentNode;
                        return n == i || !(!i || 1 != i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
                    }
                    : function(n, t) {
                        if (t)
                            for (; t; )
                                if (t = t.parentNode,
                                    t == n)
                                    return !0;
                        return !1
                    }
                ,
                r._.getSomeDefs = p,
                r.select = function(n) {
                    return o(e.doc.querySelector(n))
                }
                ,
                r.selectAll = function(n) {
                    for (var i = e.doc.querySelectorAll(n), u = (r.set || Array)(), t = 0; t < i.length; t++)
                        u.push(o(i[t]));
                    return u
                }
                ,
                function(n) {
                    function y(n) {
                        function r(n, t) {
                            var i = u(n.node, t);
                            i = i && i.match(y);
                            i = i && i[2];
                            i && "#" == i.charAt() && (i = i.substring(1),
                            i && (f[i] = (f[i] || []).concat(function(i) {
                                var r = {};
                                r[t] = ut(i);
                                u(n.node, r)
                            })))
                        }
                        function v(n) {
                            var t = u(n.node, "xlink:href");
                            t && "#" == t.charAt() && (t = t.substring(1),
                            t && (f[t] = (f[t] || []).concat(function(t) {
                                n.attr("xlink:href", "#" + t)
                            })))
                        }
                        for (var c, o, s, a, t, l = n.selectAll("*"), y = /^\s*url\(("|'|)(.*)\1\)\s*$/, e = [], f = {}, i = 0, h = l.length; h > i; i++)
                            t = l[i],
                                r(t, "fill"),
                                r(t, "stroke"),
                                r(t, "filter"),
                                r(t, "mask"),
                                r(t, "clip-path"),
                                v(t),
                                c = u(t.node, "id"),
                            c && (u(t.node, {
                                id: t.id
                            }),
                                e.push({
                                    old: c,
                                    id: t.id
                                }));
                        for (i = 0,
                                 h = e.length; h > i; i++)
                            if (o = f[e[i].old],
                                    o)
                                for (s = 0,
                                         a = o.length; a > s; s++)
                                    o[s](e[i].id)
                    }
                    function w(n, t, i) {
                        return function(r) {
                            var u = r.slice(n, t);
                            return 1 == u.length && (u = u[0]),
                                i ? i(u) : u
                        }
                    }
                    function a(n) {
                        return function() {
                            var i = n ? "<" + this.type : "", f = this.node.attributes, r = this.node.childNodes, t, u;
                            if (n)
                                for (t = 0,
                                         u = f.length; u > t; t++)
                                    i += " " + f[t].name + '="' + f[t].value.replace(/"/g, '\\"') + '"';
                            if (r.length) {
                                for (n && (i += ">"),
                                         t = 0,
                                         u = r.length; u > t; t++)
                                    3 == r[t].nodeType ? i += r[t].nodeValue : 1 == r[t].nodeType && (i += o(r[t]).toString());
                                n && (i += "<\/" + this.type + ">")
                            } else
                                n && (i += "/>");
                            return i
                        }
                    }
                    var v, s, e;
                    n.attr = function(n, i) {
                        var r = this, e, u;
                        if (r.node,
                                !n)
                            return r;
                        if (f(n, "string")) {
                            if (!(arguments.length > 1))
                                return ti(t("snap.util.getattr." + n, r));
                            e = {};
                            e[n] = i;
                            n = e
                        }
                        for (u in n)
                            n[l](u) && t("snap.util.attr." + u, r, n[u]);
                        return r
                    }
                    ;
                    n.getBBox = function(n) {
                        var t = this, i;
                        return ("use" == t.type && (t = t.original),
                            t.removed) ? {} : (i = t._,
                                n ? (i.bboxwt = r.path.get[t.type] ? r.path.getBBox(t.realPath = r.path.get[t.type](t)) : r._.box(t.node.getBBox()),
                                        r._.box(i.bboxwt)) : (t.realPath = (r.path.get[t.type] || r.path.get.deflt)(t),
                                        i.bbox = r.path.getBBox(r.path.map(t.realPath, t.matrix)),
                                        r._.box(i.bbox)))
                    }
                    ;
                    v = function() {
                        return this.string
                    }
                    ;
                    n.transform = function(n) {
                        var f = this._;
                        if (null == n) {
                            var i = new b(this.node.getCTM())
                                , t = dt(this)
                                , r = t.toTransformString()
                                , e = c(t) == c(this.matrix) ? f.transform : r;
                            return {
                                string: e,
                                globalMatrix: i,
                                localMatrix: t,
                                diffMatrix: i.clone().add(t.invert()),
                                global: i.toTransformString(),
                                local: r,
                                toString: v
                            }
                        }
                        return n instanceof b && (n = n.toTransformString()),
                            dt(this, n),
                        this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? u(this.node, {
                                gradientTransform: this.matrix
                            }) : "pattern" == this.type ? u(this.node, {
                                    patternTransform: this.matrix
                                }) : u(this.node, {
                                    transform: this.matrix
                                })),
                            this
                    }
                    ;
                    n.parent = function() {
                        return o(this.node.parentNode)
                    }
                    ;
                    n.append = n.add = function(n) {
                        if (n) {
                            if ("set" == n.type) {
                                var t = this;
                                return n.forEach(function(n) {
                                    t.add(n)
                                }),
                                    this
                            }
                            n = o(n);
                            this.node.appendChild(n.node);
                            n.paper = this.paper
                        }
                        return this
                    }
                    ;
                    n.appendTo = function(n) {
                        return n && (n = o(n),
                            n.append(this)),
                            this
                    }
                    ;
                    n.prepend = function(n) {
                        if (n) {
                            n = o(n);
                            var t = n.parent();
                            this.node.insertBefore(n.node, this.node.firstChild);
                            this.add && this.add();
                            n.paper = this.paper;
                            this.parent() && this.parent().add();
                            t && t.add()
                        }
                        return this
                    }
                    ;
                    n.prependTo = function(n) {
                        return n = o(n),
                            n.prepend(this),
                            this
                    }
                    ;
                    n.before = function(n) {
                        var t, i;
                        return "set" == n.type ? (t = this,
                                n.forEach(function(n) {
                                    var i = n.parent();
                                    t.node.parentNode.insertBefore(n.node, t.node);
                                    i && i.add()
                                }),
                                this.parent().add(),
                                this) : (n = o(n),
                                i = n.parent(),
                                this.node.parentNode.insertBefore(n.node, this.node),
                            this.parent() && this.parent().add(),
                            i && i.add(),
                                n.paper = this.paper,
                                this)
                    }
                    ;
                    n.after = function(n) {
                        n = o(n);
                        var t = n.parent();
                        return this.node.nextSibling ? this.node.parentNode.insertBefore(n.node, this.node.nextSibling) : this.node.parentNode.appendChild(n.node),
                        this.parent() && this.parent().add(),
                        t && t.add(),
                            n.paper = this.paper,
                            this
                    }
                    ;
                    n.insertBefore = function(n) {
                        n = o(n);
                        var t = this.parent();
                        return n.node.parentNode.insertBefore(this.node, n.node),
                            this.paper = n.paper,
                        t && t.add(),
                        n.parent() && n.parent().add(),
                            this
                    }
                    ;
                    n.insertAfter = function(n) {
                        n = o(n);
                        var t = this.parent();
                        return n.node.parentNode.insertBefore(this.node, n.node.nextSibling),
                            this.paper = n.paper,
                        t && t.add(),
                        n.parent() && n.parent().add(),
                            this
                    }
                    ;
                    n.remove = function() {
                        var n = this.parent();
                        return this.node.parentNode && this.node.parentNode.removeChild(this.node),
                            delete this.paper,
                            this.removed = !0,
                        n && n.add(),
                            this
                    }
                    ;
                    n.select = function(n) {
                        return o(this.node.querySelector(n))
                    }
                    ;
                    n.selectAll = function(n) {
                        for (var i = this.node.querySelectorAll(n), u = (r.set || Array)(), t = 0; t < i.length; t++)
                            u.push(o(i[t]));
                        return u
                    }
                    ;
                    n.asPX = function(n, t) {
                        return null == t && (t = this.attr(n)),
                            +gt(this, n, t)
                    }
                    ;
                    n.use = function() {
                        var n, t = this.node.id;
                        return t || (t = this.id,
                            u(this.node, {
                                id: t
                            })),
                            n = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? h(this.type, this.node.parentNode) : h("use", this.node.parentNode),
                            u(n.node, {
                                "xlink:href": "#" + t
                            }),
                            n.original = this,
                            n
                    }
                    ;
                    n.clone = function() {
                        var n = o(this.node.cloneNode(!0));
                        return u(n.node, "id") && u(n.node, {
                            id: n.id
                        }),
                            y(n),
                            n.insertAfter(this),
                            n
                    }
                    ;
                    n.toDefs = function() {
                        var n = p(this);
                        return n.appendChild(this.node),
                            this
                    }
                    ;
                    n.pattern = function(n, t, i, r) {
                        var e = h("pattern", p(this));
                        return null == n && (n = this.getBBox()),
                        f(n, "object") && "x"in n && (t = n.y,
                            i = n.width,
                            r = n.height,
                            n = n.x),
                            u(e.node, {
                                x: n,
                                y: t,
                                width: i,
                                height: r,
                                patternUnits: "userSpaceOnUse",
                                id: e.id,
                                viewBox: [n, t, i, r].join(" ")
                            }),
                            e.node.appendChild(this.node),
                            e
                    }
                    ;
                    n.marker = function(n, t, i, r, e, o) {
                        var s = h("marker", p(this));
                        return null == n && (n = this.getBBox()),
                        f(n, "object") && "x"in n && (t = n.y,
                            i = n.width,
                            r = n.height,
                            e = n.refX || n.cx,
                            o = n.refY || n.cy,
                            n = n.x),
                            u(s.node, {
                                viewBox: [n, t, i, r].join(ir),
                                markerWidth: i,
                                markerHeight: r,
                                orient: "auto",
                                refX: e || 0,
                                refY: o || 0,
                                id: s.id
                            }),
                            s.node.appendChild(this.node),
                            s
                    }
                    ;
                    s = function(n, t, r, u) {
                        "function" != typeof r || r.length || (u = r,
                            r = i.linear);
                        this.attr = n;
                        this.dur = t;
                        r && (this.easing = r);
                        u && (this.callback = u)
                    }
                    ;
                    r.animation = function(n, t, i, r) {
                        return new s(n,t,i,r)
                    }
                    ;
                    n.inAnim = function() {
                        var n = this, i = [], t;
                        for (t in n.anims)
                            n.anims[l](t) && !function(n) {
                                i.push({
                                    anim: new s(n._attrs,n.dur,n.easing,n._callback),
                                    curStatus: n.status(),
                                    status: function(t) {
                                        return n.status(t)
                                    },
                                    stop: function() {
                                        n.stop()
                                    }
                                })
                            }(n.anims[t]);
                        return i
                    }
                    ;
                    r.animate = function(n, r, u, f, e, o) {
                        "function" != typeof e || e.length || (o = e,
                            e = i.linear);
                        var s = i.time()
                            , h = i(n, r, s, s + f, i.time, u, e);
                        return o && t.once("mina.finish." + h.id, o),
                            h
                    }
                    ;
                    n.stop = function() {
                        for (var t = this.inAnim(), n = 0, i = t.length; i > n; n++)
                            t[n].stop();
                        return this
                    }
                    ;
                    n.animate = function(n, r, u, e) {
                        var a, tt, g, h;
                        "function" != typeof u || u.length || (e = u,
                            u = i.linear);
                        n instanceof s && (e = n.callback,
                            u = n.easing,
                            r = u.dur,
                            n = n.attr);
                        var v, k, nt, p, y = [], d = [], b = {}, o = this;
                        for (a in n)
                            n[l](a) && (o.equal ? (p = o.equal(a, c(n[a])),
                                    v = p.from,
                                    k = p.to,
                                    nt = p.f) : (v = +o.attr(a),
                                    k = +n[a]),
                                tt = f(v, "array") ? v.length : 1,
                                b[a] = w(y.length, y.length + tt, nt),
                                y = y.concat(v),
                                d = d.concat(k));
                        return g = i.time(),
                            h = i(y, d, g, g + r, i.time, function(n) {
                                var i = {}, t;
                                for (t in b)
                                    b[l](t) && (i[t] = b[t](n));
                                o.attr(i)
                            }, u),
                            o.anims[h.id] = h,
                            h._attrs = n,
                            h._callback = e,
                            t.once("mina.finish." + h.id, function() {
                                delete o.anims[h.id];
                                e && e.call(o)
                            }),
                            t.once("mina.stop." + h.id, function() {
                                delete o.anims[h.id]
                            }),
                            o
                    }
                    ;
                    e = {};
                    n.data = function(n, i) {
                        var u = e[this.id] = e[this.id] || {}, f;
                        if (0 == arguments.length)
                            return t("snap.data.get." + this.id, this, u, null),
                                u;
                        if (1 == arguments.length) {
                            if (r.is(n, "object")) {
                                for (f in n)
                                    n[l](f) && this.data(f, n[f]);
                                return this
                            }
                            return t("snap.data.get." + this.id, this, u[n], n),
                                u[n]
                        }
                        return u[n] = i,
                            t("snap.data.set." + this.id, this, i, n),
                            this
                    }
                    ;
                    n.removeData = function(n) {
                        return null == n ? e[this.id] = {} : e[this.id] && delete e[this.id][n],
                            this
                    }
                    ;
                    n.outerSVG = n.toString = a(1);
                    n.innerSVG = a()
                }(v.prototype),
                r.parse = function(n) {
                    var t = e.doc.createDocumentFragment()
                        , r = !0
                        , i = e.doc.createElement("div");
                    if (n = c(n),
                        n.match(/^\s*<\s*svg(?:\s|>)/) || (n = "<svg>" + n + "<\/svg>",
                            r = !1),
                            i.innerHTML = n,
                            n = i.getElementsByTagName("svg")[0])
                        if (r)
                            t = n;
                        else
                            for (; n.firstChild; )
                                t.appendChild(n.firstChild);
                    return i.innerHTML = w,
                        new k(t)
                }
                ,
                k.prototype.select = v.prototype.select,
                k.prototype.selectAll = v.prototype.selectAll,
                r.fragment = function() {
                    for (var n, u = Array.prototype.slice.call(arguments, 0), t = e.doc.createDocumentFragment(), i = 0, f = u.length; f > i; i++)
                        n = u[i],
                        n.node && n.node.nodeType && t.appendChild(n.node),
                        n.nodeType && t.appendChild(n),
                        "string" == typeof n && t.appendChild(r.parse(n).node);
                    return new k(t)
                }
                ,
                function(n) {
                    n.el = function(n, t) {
                        return h(n, this.node).attr(t)
                    }
                    ;
                    n.rect = function(n, t, i, r, u, e) {
                        var o;
                        return null == e && (e = u),
                            f(n, "object") && "x"in n ? o = n : null != n && (o = {
                                    x: n,
                                    y: t,
                                    width: i,
                                    height: r
                                },
                                null != u && (o.rx = u,
                                    o.ry = e)),
                            this.el("rect", o)
                    }
                    ;
                    n.circle = function(n, t, i) {
                        var r;
                        return f(n, "object") && "cx"in n ? r = n : null != n && (r = {
                                cx: n,
                                cy: t,
                                r: i
                            }),
                            this.el("circle", r)
                    }
                    ;
                    n.image = function(n, t, i, r, e) {
                        var s = h("image", this.node), o;
                        return f(n, "object") && "src"in n ? s.attr(n) : null != n && (o = {
                                "xlink:href": n,
                                preserveAspectRatio: "none"
                            },
                            null != t && null != i && (o.x = t,
                                o.y = i),
                                null != r && null != e ? (o.width = r,
                                        o.height = e) : yi(n, function() {
                                        u(s.node, {
                                            width: this.offsetWidth,
                                            height: this.offsetHeight
                                        })
                                    }),
                                u(s.node, o)),
                            s
                    }
                    ;
                    n.ellipse = function(n, t, i, r) {
                        var u = h("ellipse", this.node);
                        return f(n, "object") && "cx"in n ? u.attr(n) : null != n && u.attr({
                                cx: n,
                                cy: t,
                                rx: i,
                                ry: r
                            }),
                            u
                    }
                    ;
                    n.path = function(n) {
                        var t = h("path", this.node);
                        return f(n, "object") && !f(n, "array") ? t.attr(n) : n && t.attr({
                                d: n
                            }),
                            t
                    }
                    ;
                    n.group = n.g = function(t) {
                        var i = h("g", this.node), r;
                        i.add = ni;
                        for (r in n)
                            n[l](r) && (i[r] = n[r]);
                        return 1 == arguments.length && t && !t.type ? i.attr(t) : arguments.length && i.add(Array.prototype.slice.call(arguments, 0)),
                            i
                    }
                    ;
                    n.text = function(n, t, i) {
                        var r = h("text", this.node);
                        return f(n, "object") ? r.attr(n) : null != n && r.attr({
                                x: n,
                                y: t,
                                text: i || ""
                            }),
                            r
                    }
                    ;
                    n.line = function(n, t, i, r) {
                        var u = h("line", this.node);
                        return f(n, "object") ? u.attr(n) : null != n && u.attr({
                                x1: n,
                                x2: i,
                                y1: t,
                                y2: r
                            }),
                            u
                    }
                    ;
                    n.polyline = function(n) {
                        arguments.length > 1 && (n = Array.prototype.slice.call(arguments, 0));
                        var t = h("polyline", this.node);
                        return f(n, "object") && !f(n, "array") ? t.attr(n) : null != n && t.attr({
                                points: n
                            }),
                            t
                    }
                    ;
                    n.polygon = function(n) {
                        arguments.length > 1 && (n = Array.prototype.slice.call(arguments, 0));
                        var t = h("polygon", this.node);
                        return f(n, "object") && !f(n, "array") ? t.attr(n) : null != n && t.attr({
                                points: n
                            }),
                            t
                    }
                        ,
                        function() {
                            n.gradient = function(n) {
                                return fi(this.defs, n)
                            }
                            ;
                            n.gradientLinear = function(n, t, i, r) {
                                return ei(this.defs, n, t, i, r)
                            }
                            ;
                            n.gradientRadial = function(n, t, i, r, u) {
                                return oi(this.defs, n, t, i, r, u)
                            }
                            ;
                            n.toString = function() {
                                var i, n = e.doc.createDocumentFragment(), t = e.doc.createElement("div"), r = this.node.cloneNode(!0);
                                return n.appendChild(t),
                                    t.appendChild(r),
                                    u(r, {
                                        xmlns: ft
                                    }),
                                    i = t.innerHTML,
                                    n.removeChild(n.firstChild),
                                    i
                            }
                            ;
                            n.clear = function() {
                                for (var t, n = this.node.firstChild; n; )
                                    t = n.nextSibling,
                                    "defs" != n.tagName && n.parentNode.removeChild(n),
                                        n = t
                            }
                        }()
                }(d.prototype),
                r.ajax = function(n, i, r, u) {
                    var e = new XMLHttpRequest, o = pt(), h, s;
                    if (e) {
                        if (f(i, "function"))
                            u = r,
                                r = i,
                                i = null;
                        else if (f(i, "object")) {
                            h = [];
                            for (s in i)
                                i.hasOwnProperty(s) && h.push(encodeURIComponent(s) + "=" + encodeURIComponent(i[s]));
                            i = h.join("&")
                        }
                        return e.open(i ? "POST" : "GET", n, !0),
                            e.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                        i && e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                        r && (t.once("snap.ajax." + o + ".0", r),
                            t.once("snap.ajax." + o + ".200", r),
                            t.once("snap.ajax." + o + ".304", r)),
                            e.onreadystatechange = function() {
                                4 == e.readyState && t("snap.ajax." + o + "." + e.status, u, e)
                            }
                            ,
                            4 == e.readyState ? e : (e.send(i),
                                    e)
                    }
                }
                ,
                r.load = function(n, t, i) {
                    r.ajax(n, function(n) {
                        var u = r.parse(n.responseText);
                        i ? t.call(i, u) : t(u)
                    })
                }
                ,
                t.on("snap.util.attr.mask", function(n) {
                    if (n instanceof v || n instanceof k) {
                        if (t.stop(),
                            n instanceof k && 1 == n.node.childNodes.length && (n = n.node.firstChild,
                                p(this).appendChild(n),
                                n = o(n)),
                            "mask" == n.type)
                            var i = n;
                        else
                            i = h("mask", p(this)),
                                i.node.appendChild(n.node),
                            !i.node.id && u(i.node, {
                                id: i.id
                            });
                        u(this.node, {
                            mask: ut(i.id)
                        })
                    }
                }),
                function(n) {
                    t.on("snap.util.attr.clip", n);
                    t.on("snap.util.attr.clip-path", n);
                    t.on("snap.util.attr.clipPath", n)
                }(function(n) {
                    if (n instanceof v || n instanceof k) {
                        if (t.stop(),
                            "clipPath" == n.type)
                            var i = n;
                        else
                            i = h("clipPath", p(this)),
                                i.node.appendChild(n.node),
                            !i.node.id && u(i.node, {
                                id: i.id
                            });
                        u(this.node, {
                            "clip-path": ut(i.id)
                        })
                    }
                }),
                t.on("snap.util.attr.fill", si("fill")),
                t.on("snap.util.attr.stroke", si("stroke")),
                gi = /^([lr])(?:\(([^)]*)\))?(.*)$/i,
                t.on("snap.util.grad.parse", function(n) {
                    var i;
                    if (n = c(n),
                            i = n.match(gi),
                            !i)
                        return null;
                    var u = i[1]
                        , t = i[2]
                        , r = i[3];
                    return t = t.split(/\s*,\s*/).map(function(n) {
                        return +n == n ? +n : n
                    }),
                    1 == t.length && 0 == t[0] && (t = []),
                        r = r.split("-"),
                        r = r.map(function(n) {
                            n = n.split(":");
                            var t = {
                                color: n[0]
                            };
                            return n[1] && (t.offset = n[1]),
                                t
                        }),
                        {
                            type: u,
                            params: t,
                            stops: r
                        }
                }),
                t.on("snap.util.attr.d", function(n) {
                    t.stop();
                    f(n, "array") && f(n[0], "array") && (n = r.path.toString.call(n));
                    n = c(n);
                    n.match(/[ruo]/i) && (n = r.path.toAbsolute(n));
                    u(this.node, {
                        d: n
                    })
                })(-1),
                t.on("snap.util.attr.#text", function(n) {
                    t.stop();
                    n = c(n);
                    for (var i = e.doc.createTextNode(n); this.node.firstChild; )
                        this.node.removeChild(this.node.firstChild);
                    this.node.appendChild(i)
                })(-1),
                t.on("snap.util.attr.path", function(n) {
                    t.stop();
                    this.attr({
                        d: n
                    })
                })(-1),
                t.on("snap.util.attr.viewBox", function(n) {
                    var i;
                    i = f(n, "object") && "x"in n ? [n.x, n.y, n.width, n.height].join(" ") : f(n, "array") ? n.join(" ") : n;
                    u(this.node, {
                        viewBox: i
                    });
                    t.stop()
                })(-1),
                t.on("snap.util.attr.transform", function(n) {
                    this.transform(n);
                    t.stop()
                })(-1),
                t.on("snap.util.attr.r", function(n) {
                    "rect" == this.type && (t.stop(),
                        u(this.node, {
                            rx: n,
                            ry: n
                        }))
                })(-1),
                t.on("snap.util.attr.textpath", function(n) {
                    var r, i, e, h, s;
                    if (t.stop(),
                        "text" == this.type) {
                        if (!n && this.textPath) {
                            for (i = this.textPath; i.node.firstChild; )
                                this.node.appendChild(i.node.firstChild);
                            return i.remove(),
                                void delete this.textPath
                        }
                        if (f(n, "string") ? (h = p(this),
                                    s = o(h.parentNode).path(n),
                                    h.appendChild(s.node),
                                    r = s.id,
                                    s.attr({
                                        id: r
                                    })) : (n = o(n),
                                n instanceof v && (r = n.attr("id"),
                                r || (r = n.id,
                                    n.attr({
                                        id: r
                                    })))),
                                r)
                            if (i = this.textPath,
                                    e = this.node,
                                    i)
                                i.attr({
                                    "xlink:href": "#" + r
                                });
                            else {
                                for (i = u("textPath", {
                                    "xlink:href": "#" + r
                                }); e.firstChild; )
                                    i.appendChild(e.firstChild);
                                e.appendChild(i);
                                this.textPath = o(i)
                            }
                    }
                })(-1),
                t.on("snap.util.attr.text", function(n) {
                    var i, r, o;
                    if ("text" == this.type) {
                        for (i = this.node,
                                 r = function(n) {
                                     var t = u("tspan"), i;
                                     if (f(n, "array"))
                                         for (i = 0; i < n.length; i++)
                                             t.appendChild(r(n[i]));
                                     else
                                         t.appendChild(e.doc.createTextNode(n));
                                     return t.normalize && t.normalize(),
                                         t
                                 }
                            ; i.firstChild; )
                            i.removeChild(i.firstChild);
                        for (o = r(n); o.firstChild; )
                            i.appendChild(o.firstChild)
                    }
                    t.stop()
                })(-1),
                wt = {
                    "alignment-baseline": 0,
                    "baseline-shift": 0,
                    clip: 0,
                    "clip-path": 0,
                    "clip-rule": 0,
                    color: 0,
                    "color-interpolation": 0,
                    "color-interpolation-filters": 0,
                    "color-profile": 0,
                    "color-rendering": 0,
                    cursor: 0,
                    direction: 0,
                    display: 0,
                    "dominant-baseline": 0,
                    "enable-background": 0,
                    fill: 0,
                    "fill-opacity": 0,
                    "fill-rule": 0,
                    filter: 0,
                    "flood-color": 0,
                    "flood-opacity": 0,
                    font: 0,
                    "font-family": 0,
                    "font-size": 0,
                    "font-size-adjust": 0,
                    "font-stretch": 0,
                    "font-style": 0,
                    "font-variant": 0,
                    "font-weight": 0,
                    "glyph-orientation-horizontal": 0,
                    "glyph-orientation-vertical": 0,
                    "image-rendering": 0,
                    kerning: 0,
                    "letter-spacing": 0,
                    "lighting-color": 0,
                    marker: 0,
                    "marker-end": 0,
                    "marker-mid": 0,
                    "marker-start": 0,
                    mask: 0,
                    opacity: 0,
                    overflow: 0,
                    "pointer-events": 0,
                    "shape-rendering": 0,
                    "stop-color": 0,
                    "stop-opacity": 0,
                    stroke: 0,
                    "stroke-dasharray": 0,
                    "stroke-dashoffset": 0,
                    "stroke-linecap": 0,
                    "stroke-linejoin": 0,
                    "stroke-miterlimit": 0,
                    "stroke-opacity": 0,
                    "stroke-width": 0,
                    "text-anchor": 0,
                    "text-decoration": 0,
                    "text-rendering": 0,
                    "unicode-bidi": 0,
                    visibility: 0,
                    "word-spacing": 0,
                    "writing-mode": 0
                },
                t.on("snap.util.attr", function(n) {
                    var i = t.nt(), r = {}, f, e;
                    i = i.substring(i.lastIndexOf(".") + 1);
                    r[i] = n;
                    f = i.replace(/-(\w)/gi, function(n, t) {
                        return t.toUpperCase()
                    });
                    e = i.replace(/[A-Z]/g, function(n) {
                        return "-" + n.toLowerCase()
                    });
                    wt[l](e) ? this.node.style[f] = null == n ? w : n : u(this.node, r)
                }),
                t.on("snap.util.getattr.transform", function() {
                    return t.stop(),
                        this.transform()
                })(-1),
                t.on("snap.util.getattr.textpath", function() {
                    return t.stop(),
                        this.textPath
                })(-1),
                function() {
                    function n(n) {
                        return function() {
                            t.stop();
                            var i = e.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + n);
                            return "none" == i ? i : r(e.doc.getElementById(i.match(ur)[1]))
                        }
                    }
                    function i(n) {
                        return function(i) {
                            var r, f;
                            return (t.stop(),
                                r = "marker" + n.charAt(0).toUpperCase() + n.substring(1),
                            "" == i || !i) ? void (this.node.style[r] = "none") : "marker" == i.type ? (f = i.node.id,
                                    f || u(i.node, {
                                        id: i.id
                                    }),
                                        void (this.node.style[r] = ut(f))) : void 0
                        }
                    }
                    t.on("snap.util.getattr.marker-end", n("end"))(-1);
                    t.on("snap.util.getattr.markerEnd", n("end"))(-1);
                    t.on("snap.util.getattr.marker-start", n("start"))(-1);
                    t.on("snap.util.getattr.markerStart", n("start"))(-1);
                    t.on("snap.util.getattr.marker-mid", n("mid"))(-1);
                    t.on("snap.util.getattr.markerMid", n("mid"))(-1);
                    t.on("snap.util.attr.marker-end", i("end"))(-1);
                    t.on("snap.util.attr.markerEnd", i("end"))(-1);
                    t.on("snap.util.attr.marker-start", i("start"))(-1);
                    t.on("snap.util.attr.markerStart", i("start"))(-1);
                    t.on("snap.util.attr.marker-mid", i("mid"))(-1);
                    t.on("snap.util.attr.markerMid", i("mid"))(-1)
                }(),
                t.on("snap.util.getattr.r", function() {
                    if ("rect" == this.type && u(this.node, "rx") == u(this.node, "ry"))
                        return (t.stop(),
                            u(this.node, "rx"))
                })(-1),
                t.on("snap.util.getattr.text", function() {
                    if ("text" == this.type || "tspan" == this.type) {
                        t.stop();
                        var n = hi(this.node);
                        return 1 == n.length ? n[0] : n
                    }
                })(-1),
                t.on("snap.util.getattr.#text", function() {
                    return this.node.textContent
                })(-1),
                t.on("snap.util.getattr.viewBox", function() {
                    t.stop();
                    var n = u(this.node, "viewBox").split(li);
                    return r._.box(+n[0], +n[1], +n[2], +n[3])
                })(-1),
                t.on("snap.util.getattr.points", function() {
                    var n = u(this.node, "points");
                    return t.stop(),
                        n.split(li)
                }),
                t.on("snap.util.getattr.path", function() {
                    var n = u(this.node, "d");
                    return t.stop(),
                        n
                }),
                t.on("snap.util.getattr", function() {
                    var n = t.nt(), i;
                    return n = n.substring(n.lastIndexOf(".") + 1),
                        i = n.replace(/[A-Z]/g, function(n) {
                            return "-" + n.toLowerCase()
                        }),
                        wt[l](i) ? e.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue(i) : u(this.node, n)
                }),
                nr = function(n) {
                    var r = n.getBoundingClientRect()
                        , u = n.ownerDocument
                        , t = u.body
                        , i = u.documentElement
                        , f = i.clientTop || t.clientTop || 0
                        , e = i.clientLeft || t.clientLeft || 0
                        , o = r.top + (g.win.pageYOffset || i.scrollTop || t.scrollTop) - f
                        , s = r.left + (g.win.pageXOffset || i.scrollLeft || t.scrollLeft) - e;
                    return {
                        y: o,
                        x: s
                    }
                }
                ,
                r.getElementByPoint = function(n, t) {
                    var s = this, i = (s.canvas,
                        e.doc.elementFromPoint(n, t)), f, r, u;
                    return e.win.opera && "svg" == i.tagName && (f = nr(i),
                        r = i.createSVGRect(),
                        r.x = n - f.x,
                        r.y = t - f.y,
                        r.width = r.height = 1,
                        u = i.getIntersectionList(r, null),
                    u.length && (i = u[u.length - 1])),
                        i ? o(i) : null
                }
                ,
                r.plugin = function(n) {
                    n(r, v, d, e)
                }
                ,
                e.win.Snap = r,
                r
        }();
        return r.plugin(function(n, t) {
            function c(n) {
                var t = c.ps = c.ps || {};
                return t[n] ? t[n].sleep = 100 : t[n] = {
                        sleep: 100
                    },
                    setTimeout(function() {
                        for (var i in t)
                            t[fi](i) && i != n && (t[i].sleep--,
                            !t[i].sleep && delete t[i])
                    }),
                    t[n]
            }
            function a(n, t, r, u) {
                return null == n && (n = t = r = u = 0),
                null == t && (t = n.y,
                    r = n.width,
                    u = n.height,
                    n = n.x),
                    {
                        x: n,
                        y: t,
                        width: r,
                        w: r,
                        height: u,
                        h: u,
                        x2: n + r,
                        y2: t + u,
                        cx: n + r / 2,
                        cy: t + u / 2,
                        r1: i.min(r, u) / 2,
                        r2: i.max(r, u) / 2,
                        r0: i.sqrt(r * r + u * u) / 2,
                        path: s(n, t, r, u),
                        vb: [n, t, r, u].join(" ")
                    }
            }
            function v() {
                return this.join(",").replace(ei, "$1")
            }
            function l(n) {
                var t = ot(n);
                return t.toString = v,
                    t
            }
            function tt(n, t, i, r, u, f, e, o, s) {
                return null == s ? y(n, t, i, r, u, f, e, o) : b(n, t, i, r, u, f, e, o, kt(n, t, i, r, u, f, e, o, s))
            }
            function it(i, r) {
                function u(n) {
                    return +(+n).toFixed(3)
                }
                return n._.cacher(function(n, f, e) {
                    n instanceof t && (n = n.attr("d"));
                    n = w(n);
                    for (var h, c, o, v, s, l = "", y = {}, a = 0, p = 0, k = n.length; k > p; p++) {
                        if (o = n[p],
                            "M" == o[0])
                            h = +o[1],
                                c = +o[2];
                        else {
                            if (v = tt(h, c, o[1], o[2], o[3], o[4], o[5], o[6]),
                                a + v > f) {
                                if (r && !y.start) {
                                    if (s = tt(h, c, o[1], o[2], o[3], o[4], o[5], o[6], f - a),
                                            l += ["C" + u(s.start.x), u(s.start.y), u(s.m.x), u(s.m.y), u(s.x), u(s.y)],
                                            e)
                                        return l;
                                    y.start = l;
                                    l = ["M" + u(s.x), u(s.y) + "C" + u(s.n.x), u(s.n.y), u(s.end.x), u(s.end.y), u(o[5]), u(o[6])].join();
                                    a += v;
                                    h = +o[5];
                                    c = +o[6];
                                    continue
                                }
                                if (!i && !r)
                                    return tt(h, c, o[1], o[2], o[3], o[4], o[5], o[6], f - a)
                            }
                            a += v;
                            h = +o[5];
                            c = +o[6]
                        }
                        l += o.shift() + o
                    }
                    return y.end = l,
                        s = i ? a : r ? y : b(h, c, o[0], o[1], o[2], o[3], o[4], o[5], 1)
                }, null, n._.clone)
            }
            function b(n, t, r, u, e, o, s, c, l) {
                var a = 1 - l
                    , y = h(a, 3)
                    , p = h(a, 2)
                    , v = l * l
                    , w = v * l
                    , nt = y * n + 3 * p * l * r + 3 * a * l * l * e + w * s
                    , tt = y * t + 3 * p * l * u + 3 * a * l * l * o + w * c
                    , b = n + 2 * l * (r - n) + v * (e - 2 * r + n)
                    , k = t + 2 * l * (u - t) + v * (o - 2 * u + t)
                    , d = r + 2 * l * (e - r) + v * (s - 2 * e + r)
                    , g = u + 2 * l * (o - u) + v * (c - 2 * o + u)
                    , it = a * n + l * r
                    , rt = a * t + l * u
                    , ut = a * e + l * s
                    , ft = a * o + l * c
                    , et = 90 - 180 * i.atan2(b - d, k - g) / f;
                return {
                    x: nt,
                    y: tt,
                    m: {
                        x: b,
                        y: k
                    },
                    n: {
                        x: d,
                        y: g
                    },
                    start: {
                        x: it,
                        y: rt
                    },
                    end: {
                        x: ut,
                        y: ft
                    },
                    alpha: et
                }
            }
            function rt(t, i, r, u, f, e, o, s) {
                n.is(t, "array") || (t = [t, i, r, u, f, e, o, s]);
                var h = yt.apply(null, t);
                return a(h.min.x, h.min.y, h.max.x - h.min.x, h.max.y - h.min.y)
            }
            function o(n, t, i) {
                return t >= n.x && t <= n.x + n.width && i >= n.y && i <= n.y + n.height
            }
            function ht(n, t) {
                return n = a(n),
                    t = a(t),
                o(t, n.x, n.y) || o(t, n.x2, n.y) || o(t, n.x, n.y2) || o(t, n.x2, n.y2) || o(n, t.x, t.y) || o(n, t.x2, t.y) || o(n, t.x, t.y2) || o(n, t.x2, t.y2) || (n.x < t.x2 && n.x > t.x || t.x < n.x2 && t.x > n.x) && (n.y < t.y2 && n.y > t.y || t.y < n.y2 && t.y > n.y)
            }
            function ct(n, t, i, r, u) {
                var f = -3 * t + 9 * i - 9 * r + 3 * u
                    , e = n * f + 6 * t - 12 * i + 6 * r;
                return n * e - 3 * t + 3 * i
            }
            function y(n, t, r, u, f, e, o, s, h) {
                null == h && (h = 1);
                h = h > 1 ? 1 : 0 > h ? 0 : h;
                for (var l = h / 2, w = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], b = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], a = 0, c = 0; 12 > c; c++) {
                    var v = l * w[c] + l
                        , y = ct(v, n, r, f, o)
                        , p = ct(v, t, u, e, s)
                        , k = y * y + p * p;
                    a += b[c] * i.sqrt(k)
                }
                return l * a
            }
            function kt(n, t, i, r, u, f, o, s, h) {
                if (!(0 > h || y(n, t, i, r, u, f, o, s) < h)) {
                    for (var v = 1, a = v / 2, l = v - a, c = y(n, t, i, r, u, f, o, s, l); e(c - h) > .01; )
                        a /= 2,
                            l += (h > c ? 1 : -1) * a,
                            c = y(n, t, i, r, u, f, o, s, l);
                    return l
                }
            }
            function dt(n, t, i, f, e, o, s, h) {
                if (!(r(n, i) < u(e, s) || u(n, i) > r(e, s) || r(t, f) < u(o, h) || u(t, f) > r(o, h))) {
                    var p = (n * f - t * i) * (e - s) - (n - i) * (e * h - o * s)
                        , w = (n * f - t * i) * (o - h) - (t - f) * (e * h - o * s)
                        , a = (n - i) * (o - h) - (t - f) * (e - s);
                    if (a) {
                        var v = p / a
                            , y = w / a
                            , c = +v.toFixed(2)
                            , l = +y.toFixed(2);
                        if (!(c < +u(n, i).toFixed(2) || c > +r(n, i).toFixed(2) || c < +u(e, s).toFixed(2) || c > +r(e, s).toFixed(2) || l < +u(t, f).toFixed(2) || l > +r(t, f).toFixed(2) || l < +u(o, h).toFixed(2) || l > +r(o, h).toFixed(2)))
                            return {
                                x: v,
                                y: y
                            }
                    }
                }
            }
            function gt(n, t, i) {
                var ut = rt(n), ft = rt(t), s, h, k, d;
                if (!ht(ut, ft))
                    return i ? 0 : [];
                for (var et = y.apply(0, n), ot = y.apply(0, t), a = ~~(et / 5), v = ~~(ot / 5), g = [], nt = [], it = {}, tt = i ? 0 : [], r = 0; a + 1 > r; r++)
                    s = b.apply(0, n.concat(r / a)),
                        g.push({
                            x: s.x,
                            y: s.y,
                            t: r / a
                        });
                for (r = 0; v + 1 > r; r++)
                    s = b.apply(0, t.concat(r / v)),
                        nt.push({
                            x: s.x,
                            y: s.y,
                            t: r / v
                        });
                for (r = 0; a > r; r++)
                    for (h = 0; v > h; h++) {
                        var f = g[r]
                            , c = g[r + 1]
                            , o = nt[h]
                            , l = nt[h + 1]
                            , p = e(c.x - f.x) < .001 ? "y" : "x"
                            , w = e(l.x - o.x) < .001 ? "y" : "x"
                            , u = dt(f.x, f.y, c.x, c.y, o.x, o.y, l.x, l.y);
                        if (u) {
                            if (it[u.x.toFixed(4)] == u.y.toFixed(4))
                                continue;
                            it[u.x.toFixed(4)] = u.y.toFixed(4);
                            k = f.t + e((u[p] - f[p]) / (c[p] - f[p])) * (c.t - f.t);
                            d = o.t + e((u[w] - o[w]) / (l[w] - o[w])) * (l.t - o.t);
                            k >= 0 && 1 >= k && d >= 0 && 1 >= d && (i ? tt++ : tt.push({
                                    x: u.x,
                                    y: u.y,
                                    t1: k,
                                    t2: d
                                }))
                        }
                    }
                return tt
            }
            function ni(n, t) {
                return ut(n, t)
            }
            function ti(n, t) {
                return ut(n, t, 1)
            }
            function ut(n, t, i) {
                var l, v, nt, a, r, u, tt;
                n = w(n);
                t = w(t);
                for (var f, e, o, s, y, p, b, k, h, c, d = i ? 0 : [], g = 0, it = n.length; it > g; g++)
                    if (l = n[g],
                        "M" == l[0])
                        f = y = l[1],
                            e = p = l[2];
                    else
                        for ("C" == l[0] ? (h = [f, e].concat(l.slice(1)),
                                f = h[6],
                                e = h[7]) : (h = [f, e, f, e, y, p, y, p],
                                f = y,
                                e = p),
                                 v = 0,
                                 nt = t.length; nt > v; v++)
                            if (a = t[v],
                                "M" == a[0])
                                o = b = a[1],
                                    s = k = a[2];
                            else if ("C" == a[0] ? (c = [o, s].concat(a.slice(1)),
                                        o = c[6],
                                        s = c[7]) : (c = [o, s, o, s, b, k, b, k],
                                        o = b,
                                        s = k),
                                    r = gt(h, c, i),
                                    i)
                                d += r;
                            else {
                                for (u = 0,
                                         tt = r.length; tt > u; u++)
                                    r[u].segment1 = g,
                                        r[u].segment2 = v,
                                        r[u].bez1 = h,
                                        r[u].bez2 = c;
                                d = d.concat(r)
                            }
                return d
            }
            function ii(n, t, i) {
                var r = lt(n);
                return o(r, t, i) && 1 == ut(n, [["M", t, i], ["H", r.x2 + 10]], 1) % 2
            }
            function lt(n) {
                var h = c(n), e;
                if (h.bbox)
                    return ot(h.bbox);
                if (!n)
                    return a();
                n = w(n);
                for (var t, o = 0, s = 0, i = [], f = [], l = 0, b = n.length; b > l; l++)
                    (t = n[l],
                    "M" == t[0]) ? (o = t[1],
                            s = t[2],
                            i.push(o),
                            f.push(s)) : (e = yt(o, s, t[1], t[2], t[3], t[4], t[5], t[6]),
                            i = i.concat(e.min.x, e.max.x),
                            f = f.concat(e.min.y, e.max.y),
                            o = t[5],
                            s = t[6]);
                var v = u.apply(0, i)
                    , y = u.apply(0, f)
                    , k = r.apply(0, i)
                    , d = r.apply(0, f)
                    , p = a(v, y, k - v, d - y);
                return h.bbox = ot(p),
                    p
            }
            function s(n, t, i, r, u) {
                if (u)
                    return [["M", n + u, t], ["l", i - 2 * u, 0], ["a", u, u, 0, 0, 1, u, u], ["l", 0, r - 2 * u], ["a", u, u, 0, 0, 1, -u, u], ["l", 2 * u - i, 0], ["a", u, u, 0, 0, 1, -u, -u], ["l", 0, 2 * u - r], ["a", u, u, 0, 0, 1, u, -u], ["z"]];
                var f = [["M", n, t], ["l", i, 0], ["l", 0, r], ["l", -i, 0], ["z"]];
                return f.toString = v,
                    f
            }
            function p(n, t, i, r, u) {
                if (null == u && null == r && (r = i),
                    null != u)
                    var f = Math.PI / 180
                        , o = n + i * Math.cos(-r * f)
                        , s = n + i * Math.cos(-u * f)
                        , h = t + i * Math.sin(-r * f)
                        , c = t + i * Math.sin(-u * f)
                        , e = [["M", o, h], ["A", i, i, 0, +(u - r > 180), 0, s, c]];
                else
                    e = [["M", n, t], ["m", 0, -r], ["a", i, r, 0, 1, 1, 0, 2 * r], ["a", i, r, 0, 1, 1, 0, -2 * r], ["z"]];
                return e.toString = v,
                    e
            }
            function ri(t) {
                var w = c(t), b = String.prototype.toLowerCase, u, d, f, i, s, g, h, nt, a;
                if (w.rel)
                    return l(w.rel);
                n.is(t, "array") && n.is(t && t[0], "array") || (t = n.parsePathString(t));
                var r = []
                    , o = 0
                    , e = 0
                    , y = 0
                    , p = 0
                    , k = 0;
                for ("M" == t[0][0] && (o = t[0][1],
                    e = t[0][2],
                    y = o,
                    p = e,
                    k++,
                    r.push(["M", o, e])),
                         u = k,
                         d = t.length; d > u; u++) {
                    if (f = r[u] = [],
                            i = t[u],
                        i[0] != b.call(i[0]))
                        switch (f[0] = b.call(i[0]),
                            f[0]) {
                            case "a":
                                f[1] = i[1];
                                f[2] = i[2];
                                f[3] = i[3];
                                f[4] = i[4];
                                f[5] = i[5];
                                f[6] = +(i[6] - o).toFixed(3);
                                f[7] = +(i[7] - e).toFixed(3);
                                break;
                            case "v":
                                f[1] = +(i[1] - e).toFixed(3);
                                break;
                            case "m":
                                y = i[1];
                                p = i[2];
                            default:
                                for (s = 1,
                                         g = i.length; g > s; s++)
                                    f[s] = +(i[s] - (s % 2 ? o : e)).toFixed(3)
                        }
                    else
                        for (f = r[u] = [],
                             "m" == i[0] && (y = i[1] + o,
                                 p = i[2] + e),
                                 h = 0,
                                 nt = i.length; nt > h; h++)
                            r[u][h] = i[h];
                    a = r[u].length;
                    switch (r[u][0]) {
                        case "z":
                            o = y;
                            e = p;
                            break;
                        case "h":
                            o += +r[u][a - 1];
                            break;
                        case "v":
                            e += +r[u][a - 1];
                            break;
                        default:
                            o += +r[u][a - 2];
                            e += +r[u][a - 1]
                    }
                }
                return r.toString = v,
                    w.rel = l(r),
                    r
            }
            function ft(t) {
                var b = c(t), a, tt;
                if (b.abs)
                    return l(b.abs);
                if (wt(t, "array") && wt(t && t[0], "array") || (t = n.parsePathString(t)),
                    !t || !t.length)
                    return [["M", 0, 0]];
                var h, u = [], f = 0, e = 0, y = 0, w = 0, g = 0;
                "M" == t[0][0] && (f = +t[0][1],
                    e = +t[0][2],
                    y = f,
                    w = e,
                    g++,
                    u[0] = ["M", f, e]);
                for (var r, i, nt = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), k = g, it = t.length; it > k; k++) {
                    if (u.push(r = []),
                            i = t[k],
                            h = i[0],
                        h != h.toUpperCase())
                        switch (r[0] = h.toUpperCase(),
                            r[0]) {
                            case "A":
                                r[1] = i[1];
                                r[2] = i[2];
                                r[3] = i[3];
                                r[4] = i[4];
                                r[5] = i[5];
                                r[6] = +(i[6] + f);
                                r[7] = +(i[7] + e);
                                break;
                            case "V":
                                r[1] = +i[1] + e;
                                break;
                            case "H":
                                r[1] = +i[1] + f;
                                break;
                            case "R":
                                for (var o = [f, e].concat(i.slice(1)), s = 2, d = o.length; d > s; s++)
                                    o[s] = +o[s] + f,
                                        o[++s] = +o[s] + e;
                                u.pop();
                                u = u.concat(pt(o, nt));
                                break;
                            case "O":
                                u.pop();
                                o = p(f, e, i[1], i[2]);
                                o.push(o[0]);
                                u = u.concat(o);
                                break;
                            case "U":
                                u.pop();
                                u = u.concat(p(f, e, i[1], i[2], i[3]));
                                r = ["U"].concat(u[u.length - 1].slice(-2));
                                break;
                            case "M":
                                y = +i[1] + f;
                                w = +i[2] + e;
                            default:
                                for (s = 1,
                                         d = i.length; d > s; s++)
                                    r[s] = +i[s] + (s % 2 ? f : e)
                        }
                    else if ("R" == h)
                        o = [f, e].concat(i.slice(1)),
                            u.pop(),
                            u = u.concat(pt(o, nt)),
                            r = ["R"].concat(i.slice(-2));
                    else if ("O" == h)
                        u.pop(),
                            o = p(f, e, i[1], i[2]),
                            o.push(o[0]),
                            u = u.concat(o);
                    else if ("U" == h)
                        u.pop(),
                            u = u.concat(p(f, e, i[1], i[2], i[3])),
                            r = ["U"].concat(u[u.length - 1].slice(-2));
                    else
                        for (a = 0,
                                 tt = i.length; tt > a; a++)
                            r[a] = i[a];
                    if (h = h.toUpperCase(),
                        "O" != h)
                        switch (r[0]) {
                            case "Z":
                                f = y;
                                e = w;
                                break;
                            case "H":
                                f = r[1];
                                break;
                            case "V":
                                e = r[1];
                                break;
                            case "M":
                                y = r[r.length - 2];
                                w = r[r.length - 1];
                            default:
                                f = r[r.length - 2];
                                e = r[r.length - 1]
                        }
                }
                return u.toString = v,
                    b.abs = l(u),
                    u
            }
            function k(n, t, i, r) {
                return [n, t, i, r, i, r]
            }
            function at(n, t, i, r, u, f) {
                var e = 1 / 3
                    , o = 2 / 3;
                return [e * n + o * i, e * t + o * r, e * u + o * i, e * f + o * r, u, f]
            }
            function vt(t, r, u, o, s, h, c, l, a, v) {
                var g, ht = 120 * f / 180, ut = f / 180 * (+s || 0), w = [], ft = n._.cacher(function(n, t, r) {
                    var u = n * i.cos(r) - t * i.sin(r)
                        , f = n * i.sin(r) + t * i.cos(r);
                    return {
                        x: u,
                        y: f
                    }
                }), et;
                if (v)
                    p = v[0],
                        y = v[1],
                        it = v[2],
                        rt = v[3];
                else {
                    g = ft(t, r, -ut);
                    t = g.x;
                    r = g.y;
                    g = ft(l, a, -ut);
                    l = g.x;
                    a = g.y;
                    var k = (i.cos(f / 180 * s),
                        i.sin(f / 180 * s),
                    (t - l) / 2)
                        , d = (r - a) / 2
                        , tt = k * k / (u * u) + d * d / (o * o);
                    tt > 1 && (tt = i.sqrt(tt),
                        u = tt * u,
                        o = tt * o);
                    var ot = u * u
                        , st = o * o
                        , ct = (h == c ? -1 : 1) * i.sqrt(e((ot * st - ot * d * d - st * k * k) / (ot * d * d + st * k * k)))
                        , it = ct * u * d / o + (t + l) / 2
                        , rt = ct * -o * k / u + (r + a) / 2
                        , p = i.asin(((r - rt) / o).toFixed(9))
                        , y = i.asin(((a - rt) / o).toFixed(9));
                    p = it > t ? f - p : p;
                    y = it > l ? f - y : y;
                    0 > p && (p = 2 * f + p);
                    0 > y && (y = 2 * f + y);
                    c && p > y && (p -= 2 * f);
                    !c && y > p && (y -= 2 * f)
                }
                if (et = y - p,
                    e(et) > ht) {
                    var dt = y
                        , gt = l
                        , ni = a;
                    y = p + ht * (c && y > p ? 1 : -1);
                    l = it + u * i.cos(y);
                    a = rt + o * i.sin(y);
                    w = vt(l, a, u, o, s, 0, c, gt, ni, [y, dt, it, rt])
                }
                et = y - p;
                var ti = i.cos(p)
                    , ii = i.sin(p)
                    , ri = i.cos(y)
                    , ui = i.sin(y)
                    , lt = i.tan(et / 4)
                    , at = 4 / 3 * u * lt
                    , yt = 4 / 3 * o * lt
                    , pt = [t, r]
                    , nt = [t + at * ii, r - yt * ti]
                    , wt = [l + at * ui, a - yt * ri]
                    , bt = [l, a];
                if (nt[0] = 2 * pt[0] - nt[0],
                        nt[1] = 2 * pt[1] - nt[1],
                        v)
                    return [nt, wt, bt].concat(w);
                w = [nt, wt, bt].concat(w).join().split(",");
                for (var kt = [], b = 0, fi = w.length; fi > b; b++)
                    kt[b] = b % 2 ? ft(w[b - 1], w[b], ut).y : ft(w[b], w[b + 1], ut).x;
                return kt
            }
            function d(n, t, i, r, u, f, e, o, s) {
                var c = 1 - s;
                return {
                    x: h(c, 3) * n + 3 * h(c, 2) * s * i + 3 * c * s * s * u + h(s, 3) * e,
                    y: h(c, 3) * t + 3 * h(c, 2) * s * r + 3 * c * s * s * f + h(s, 3) * o
                }
            }
            function yt(n, t, f, o, s, h, c, l) {
                var v, w = s - 2 * f + n - (c - 2 * s + f), a = 2 * (f - n) - 2 * (s - f), g = n - f, y = (-a + i.sqrt(a * a - 4 * w * g)) / 2 / w, p = (-a - i.sqrt(a * a - 4 * w * g)) / 2 / w, b = [t, l], k = [n, c];
                return e(y) > "1e12" && (y = .5),
                e(p) > "1e12" && (p = .5),
                y > 0 && 1 > y && (v = d(n, t, f, o, s, h, c, l, y),
                    k.push(v.x),
                    b.push(v.y)),
                p > 0 && 1 > p && (v = d(n, t, f, o, s, h, c, l, p),
                    k.push(v.x),
                    b.push(v.y)),
                    w = h - 2 * o + t - (l - 2 * h + o),
                    a = 2 * (o - t) - 2 * (h - o),
                    g = t - o,
                    y = (-a + i.sqrt(a * a - 4 * w * g)) / 2 / w,
                    p = (-a - i.sqrt(a * a - 4 * w * g)) / 2 / w,
                e(y) > "1e12" && (y = .5),
                e(p) > "1e12" && (p = .5),
                y > 0 && 1 > y && (v = d(n, t, f, o, s, h, c, l, y),
                    k.push(v.x),
                    b.push(v.y)),
                p > 0 && 1 > p && (v = d(n, t, f, o, s, h, c, l, p),
                    k.push(v.x),
                    b.push(v.y)),
                    {
                        min: {
                            x: u.apply(0, k),
                            y: u.apply(0, b)
                        },
                        max: {
                            x: r.apply(0, k),
                            y: r.apply(0, b)
                        }
                    }
            }
            function w(n, t) {
                var y = !t && c(n);
                if (!t && y.curve)
                    return l(y.curve);
                for (var u = ft(n), i = t && ft(t), e = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, o = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, w = function(n, t) {
                    var i, r;
                    if (!n)
                        return ["C", t.x, t.y, t.x, t.y, t.x, t.y];
                    switch (!(n[0]in {
                        T: 1,
                        Q: 1
                    }) && (t.qx = t.qy = null),
                        n[0]) {
                        case "M":
                            t.X = n[1];
                            t.Y = n[2];
                            break;
                        case "A":
                            n = ["C"].concat(vt.apply(0, [t.x, t.y].concat(n.slice(1))));
                            break;
                        case "S":
                            i = t.x + (t.x - (t.bx || t.x));
                            r = t.y + (t.y - (t.by || t.y));
                            n = ["C", i, r].concat(n.slice(1));
                            break;
                        case "T":
                            t.qx = t.x + (t.x - (t.qx || t.x));
                            t.qy = t.y + (t.y - (t.qy || t.y));
                            n = ["C"].concat(at(t.x, t.y, t.qx, t.qy, n[1], n[2]));
                            break;
                        case "Q":
                            t.qx = n[1];
                            t.qy = n[2];
                            n = ["C"].concat(at(t.x, t.y, n[1], n[2], n[3], n[4]));
                            break;
                        case "L":
                            n = ["C"].concat(k(t.x, t.y, n[1], n[2]));
                            break;
                        case "H":
                            n = ["C"].concat(k(t.x, t.y, n[1], t.y));
                            break;
                        case "V":
                            n = ["C"].concat(k(t.x, t.y, t.x, n[1]));
                            break;
                        case "Z":
                            n = ["C"].concat(k(t.x, t.y, t.X, t.Y))
                    }
                    return n
                }, b = function(n, t) {
                    if (n[t].length > 7) {
                        n[t].shift();
                        for (var f = n[t]; f.length; )
                            n.splice(t++, 0, ["C"].concat(f.splice(0, 6)));
                        n.splice(t, 1);
                        p = r(u.length, i && i.length || 0)
                    }
                }, d = function(n, t, f, e, o) {
                    n && t && "M" == n[o][0] && "M" != t[o][0] && (t.splice(o, 0, ["M", e.x, e.y]),
                        f.bx = 0,
                        f.by = 0,
                        f.x = n[o][1],
                        f.y = n[o][2],
                        p = r(u.length, i && i.length || 0))
                }, f = 0, p = r(u.length, i && i.length || 0); p > f; f++) {
                    u[f] = w(u[f], e);
                    b(u, f);
                    i && (i[f] = w(i[f], o));
                    i && b(i, f);
                    d(u, i, e, o, f);
                    d(i, u, o, e, f);
                    var s = u[f]
                        , h = i && i[f]
                        , a = s.length
                        , v = i && h.length;
                    e.x = s[a - 2];
                    e.y = s[a - 1];
                    e.bx = g(s[a - 4]) || e.x;
                    e.by = g(s[a - 3]) || e.y;
                    o.bx = i && (g(h[v - 4]) || o.x);
                    o.by = i && (g(h[v - 3]) || o.y);
                    o.x = i && h[v - 2];
                    o.y = i && h[v - 1]
                }
                return i || (y.curve = l(u)),
                    i ? [u, i] : u
            }
            function ui(n, t) {
                if (!t)
                    return n;
                var f, e, u, i, o, s, r;
                for (n = w(n),
                         u = 0,
                         o = n.length; o > u; u++)
                    for (r = n[u],
                             i = 1,
                             s = r.length; s > i; i += 2)
                        f = t.x(r[i], r[i + 1]),
                            e = t.y(r[i], r[i + 1]),
                            r[i] = f,
                            r[i + 1] = e;
                return n
            }
            function pt(n, t) {
                for (var i, f = [], r = 0, u = n.length; u - 2 * !t > r; r += 2)
                    i = [{
                        x: +n[r - 2],
                        y: +n[r - 1]
                    }, {
                        x: +n[r],
                        y: +n[r + 1]
                    }, {
                        x: +n[r + 2],
                        y: +n[r + 3]
                    }, {
                        x: +n[r + 4],
                        y: +n[r + 5]
                    }],
                        t ? r ? u - 4 == r ? i[3] = {
                                        x: +n[0],
                                        y: +n[1]
                                    } : u - 2 == r && (i[2] = {
                                        x: +n[0],
                                        y: +n[1]
                                    },
                                        i[3] = {
                                            x: +n[2],
                                            y: +n[3]
                                        }) : i[0] = {
                                    x: +n[u - 2],
                                    y: +n[u - 1]
                                } : u - 4 == r ? i[3] = i[2] : r || (i[0] = {
                                    x: +n[r],
                                    y: +n[r + 1]
                                }),
                        f.push(["C", (-i[0].x + 6 * i[1].x + i[2].x) / 6, (-i[0].y + 6 * i[1].y + i[2].y) / 6, (i[1].x + 6 * i[2].x - i[3].x) / 6, (i[1].y + 6 * i[2].y - i[3].y) / 6, i[2].x, i[2].y]);
                return f
            }
            var et = t.prototype
                , wt = n.is
                , ot = n._.clone
                , fi = "hasOwnProperty"
                , ei = /,?([a-z]),?/gi
                , g = parseFloat
                , i = Math
                , f = i.PI
                , u = i.min
                , r = i.max
                , h = i.pow
                , e = i.abs
                , oi = it(1)
                , bt = it()
                , st = it(0, 1)
                , nt = n._unit2px
                , si = {
                path: function(n) {
                    return n.attr("path")
                },
                circle: function(n) {
                    var t = nt(n);
                    return p(t.cx, t.cy, t.r)
                },
                ellipse: function(n) {
                    var t = nt(n);
                    return p(t.cx, t.cy, t.rx, t.ry)
                },
                rect: function(n) {
                    var t = nt(n);
                    return s(t.x, t.y, t.width, t.height, t.rx, t.ry)
                },
                image: function(n) {
                    var t = nt(n);
                    return s(t.x, t.y, t.width, t.height)
                },
                text: function(n) {
                    var t = n.node.getBBox();
                    return s(t.x, t.y, t.width, t.height)
                },
                g: function(n) {
                    var t = n.node.getBBox();
                    return s(t.x, t.y, t.width, t.height)
                },
                symbol: function(n) {
                    var t = n.getBBox();
                    return s(t.x, t.y, t.width, t.height)
                },
                line: function(n) {
                    return "M" + [n.attr("x1"), n.attr("y1"), n.attr("x2"), n.attr("y2")]
                },
                polyline: function(n) {
                    return "M" + n.attr("points")
                },
                polygon: function(n) {
                    return "M" + n.attr("points") + "z"
                },
                svg: function(n) {
                    var t = n.node.getBBox();
                    return s(t.x, t.y, t.width, t.height)
                },
                deflt: function(n) {
                    var t = n.node.getBBox();
                    return s(t.x, t.y, t.width, t.height)
                }
            };
            n.path = c;
            n.path.getTotalLength = oi;
            n.path.getPointAtLength = bt;
            n.path.getSubpath = function(n, t, i) {
                if (this.getTotalLength(n) - i < 1e-6)
                    return st(n, t).end;
                var r = st(n, i, 1);
                return t ? st(r, t).end : r
            }
            ;
            et.getTotalLength = function() {
                if (this.node.getTotalLength)
                    return this.node.getTotalLength()
            }
            ;
            et.getPointAtLength = function(n) {
                return bt(this.attr("d"), n)
            }
            ;
            et.getSubpath = function(t, i) {
                return n.path.getSubpath(this.attr("d"), t, i)
            }
            ;
            n._.box = a;
            n.path.findDotsAtSegment = b;
            n.path.bezierBBox = rt;
            n.path.isPointInsideBBox = o;
            n.path.isBBoxIntersect = ht;
            n.path.intersection = ni;
            n.path.intersectionNumber = ti;
            n.path.isPointInside = ii;
            n.path.getBBox = lt;
            n.path.get = si;
            n.path.toRelative = ri;
            n.path.toAbsolute = ft;
            n.path.toCubic = w;
            n.path.map = ui;
            n.path.toString = v;
            n.path.clone = l
        }),
            r.plugin(function(n) {
                var i = Math.max
                    , u = Math.min
                    , r = function(n) {
                    if (this.items = [],
                            this.length = 0,
                            this.type = "set",
                            n)
                        for (var t = 0, i = n.length; i > t; t++)
                            n[t] && (this[this.items.length] = this.items[this.items.length] = n[t],
                                this.length++)
                }
                    , t = r.prototype;
                t.push = function() {
                    for (var n, t, i = 0, r = arguments.length; r > i; i++)
                        n = arguments[i],
                        n && (t = this.items.length,
                            this[t] = this.items[t] = n,
                            this.length++);
                    return this
                }
                ;
                t.pop = function() {
                    return this.length && delete this[this.length--],
                        this.items.pop()
                }
                ;
                t.forEach = function(n, t) {
                    for (var i = 0, r = this.items.length; r > i; i++)
                        if (n.call(t, this.items[i], i) === !1)
                            return this;
                    return this
                }
                ;
                t.remove = function() {
                    for (; this.length; )
                        this.pop().remove();
                    return this
                }
                ;
                t.attr = function(n) {
                    for (var t = 0, i = this.items.length; i > t; t++)
                        this.items[t].attr(n);
                    return this
                }
                ;
                t.clear = function() {
                    for (; this.length; )
                        this.pop()
                }
                ;
                t.splice = function(n, t) {
                    var e;
                    n = 0 > n ? i(this.length + n, 0) : n;
                    t = i(0, u(this.length - n, t));
                    for (var o = [], h = [], s = [], f = 2; f < arguments.length; f++)
                        s.push(arguments[f]);
                    for (f = 0; t > f; f++)
                        h.push(this[n + f]);
                    for (; f < this.length - n; f++)
                        o.push(this[n + f]);
                    for (e = s.length,
                             f = 0; f < e + o.length; f++)
                        this.items[n + f] = this[n + f] = e > f ? s[f] : o[f - e];
                    for (f = this.items.length = this.length -= t - e; this[f]; )
                        delete this[f++];
                    return new r(h)
                }
                ;
                t.exclude = function(n) {
                    for (var t = 0, i = this.length; i > t; t++)
                        if (this[t] == n)
                            return this.splice(t, 1),
                                !0;
                    return !1
                }
                ;
                t.insertAfter = function(n) {
                    for (var t = this.items.length; t--; )
                        this.items[t].insertAfter(n);
                    return this
                }
                ;
                t.getBBox = function() {
                    for (var r, n = [], t = [], f = [], e = [], o = this.items.length; o--; )
                        this.items[o].removed || (r = this.items[o].getBBox(),
                            n.push(r.x),
                            t.push(r.y),
                            f.push(r.x + r.width),
                            e.push(r.y + r.height));
                    return n = u.apply(0, n),
                        t = u.apply(0, t),
                        f = i.apply(0, f),
                        e = i.apply(0, e),
                        {
                            x: n,
                            y: t,
                            x2: f,
                            y2: e,
                            width: f - n,
                            height: e - t,
                            cx: n + (f - n) / 2,
                            cy: t + (e - t) / 2
                        }
                }
                ;
                t.clone = function(n) {
                    n = new r;
                    for (var t = 0, i = this.items.length; i > t; t++)
                        n.push(this.items[t].clone());
                    return n
                }
                ;
                t.toString = function() {
                    return "Snapâ€˜s set"
                }
                ;
                t.type = "set";
                n.set = function() {
                    var n = new r;
                    return arguments.length && n.push.apply(n, Array.prototype.slice.call(arguments, 0)),
                        n
                }
            }),
            r.plugin(function(n, t) {
                function f(n) {
                    var t = n[0];
                    switch (t.toLowerCase()) {
                        case "t":
                            return [t, 0, 0];
                        case "m":
                            return [t, 1, 0, 0, 1, 0, 0];
                        case "r":
                            return 4 == n.length ? [t, 0, n[2], n[3]] : [t, 0];
                        case "s":
                            return 5 == n.length ? [t, 1, 1, n[3], n[4]] : 3 == n.length ? [t, 1, 1] : [t, 1]
                    }
                }
                function h(t, u, e) {
                    u = i(u).replace(/\.{3}|\u2026/g, t);
                    t = n.parseTransformString(t) || [];
                    u = n.parseTransformString(u) || [];
                    for (var h, y, s, c, p = Math.max(t.length, u.length), a = [], v = [], l = 0; p > l; l++) {
                        if (s = t[l] || f(u[l]),
                                c = u[l] || f(s),
                            s[0] != c[0] || "r" == s[0].toLowerCase() && (s[2] != c[2] || s[3] != c[3]) || "s" == s[0].toLowerCase() && (s[3] != c[3] || s[4] != c[4])) {
                            t = n._.transform2matrix(t, e());
                            u = n._.transform2matrix(u, e());
                            a = [["m", t.a, t.b, t.c, t.d, t.e, t.f]];
                            v = [["m", u.a, u.b, u.c, u.d, u.e, u.f]];
                            break
                        }
                        for (a[l] = [],
                                 v[l] = [],
                                 h = 0,
                                 y = Math.max(s.length, c.length); y > h; h++)
                            h in s && (a[l][h] = s[h]),
                            h in c && (v[l][h] = c[h])
                    }
                    return {
                        from: r(a),
                        to: r(v),
                        f: o(a)
                    }
                }
                function e(n) {
                    return n
                }
                function c(n) {
                    return function(t) {
                        return +t.toFixed(3) + n
                    }
                }
                function l(t) {
                    return n.rgb(t[0], t[1], t[2])
                }
                function o(n) {
                    for (var i, e, r, u, s = 0, o = [], t = 0, f = n.length; f > t; t++) {
                        for (r = "[",
                                 u = ['"' + n[t][0] + '"'],
                                 i = 1,
                                 e = n[t].length; e > i; i++)
                            u[i] = "val[" + s++ + "]";
                        r += u + "]";
                        o[t] = r
                    }
                    return Function("val", "return Snap.path.toString.call([" + o + "])")
                }
                function r(n) {
                    for (var i, u, r = [], t = 0, f = n.length; f > t; t++)
                        for (i = 1,
                                 u = n[t].length; u > i; i++)
                            r.push(n[t][i]);
                    return r
                }
                var u = {}
                    , s = /[a-z]+$/i
                    , i = String;
                u.stroke = u.fill = "colour";
                t.prototype.equal = function(t, f) {
                    var a, y, v = i(this.attr(t) || ""), b = this, p, w;
                    return v == +v && f == +f ? {
                            from: +v,
                            to: +f,
                            f: e
                        } : "colour" == u[t] ? (a = n.color(v),
                                y = n.color(f),
                                {
                                    from: [a.r, a.g, a.b, a.opacity],
                                    to: [y.r, y.g, y.b, y.opacity],
                                    f: l
                                }) : "transform" == t || "gradientTransform" == t || "patternTransform" == t ? (f instanceof n.Matrix && (f = f.toTransformString()),
                                n._.rgTransform.test(f) || (f = n._.svgTransform2string(f)),
                                    h(v, f, function() {
                                        return b.getBBox(1)
                                    })) : "d" == t || "path" == t ? (a = n.path.toCubic(v, f),
                                        {
                                            from: r(a[0]),
                                            to: r(a[1]),
                                            f: o(a[0])
                                        }) : "points" == t ? (a = i(v).split(","),
                                            y = i(f).split(","),
                                            {
                                                from: a,
                                                to: y,
                                                f: function(n) {
                                                    return n
                                                }
                                            }) : (p = v.match(s),
                                            w = i(f).match(s),
                                            p && p == w ? {
                                                    from: parseFloat(v),
                                                    to: parseFloat(f),
                                                    f: c(p)
                                                } : {
                                                    from: this.asPX(t),
                                                    to: this.asPX(t, f),
                                                    f: e
                                                })
                }
            }),
            r.plugin(function(n, i, r, u) {
                for (var e, o = i.prototype, p = "hasOwnProperty", h = ("createTouch"in u.doc), v = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], c = {
                    mousedown: "touchstart",
                    mousemove: "touchmove",
                    mouseup: "touchend"
                }, s = function(n) {
                    var t = "y" == n ? "scrollTop" : "scrollLeft";
                    return u.doc.documentElement[t] || u.doc.body[t]
                }, w = function() {
                    this.returnValue = !1
                }, b = function() {
                    return this.originalEvent.preventDefault()
                }, k = function() {
                    this.cancelBubble = !0
                }, d = function() {
                    return this.originalEvent.stopPropagation()
                }, g = function() {
                    return u.doc.addEventListener ? function(n, t, i, r) {
                            var u = h && c[t] ? c[t] : t
                                , f = function(u) {
                                var v = s("y"), y = s("x"), f, e, o, l, a;
                                if (h && c[p](t))
                                    for (f = 0,
                                             e = u.targetTouches && u.targetTouches.length; e > f; f++)
                                        if (u.targetTouches[f].target == n || n.contains(u.targetTouches[f].target)) {
                                            o = u;
                                            u = u.targetTouches[f];
                                            u.originalEvent = o;
                                            u.preventDefault = b;
                                            u.stopPropagation = d;
                                            break
                                        }
                                return l = u.clientX + y,
                                    a = u.clientY + v,
                                    i.call(r, u, l, a)
                            };
                            return t !== u && n.addEventListener(t, f, !1),
                                n.addEventListener(u, f, !1),
                                function() {
                                    return t !== u && n.removeEventListener(t, f, !1),
                                        n.removeEventListener(u, f, !1),
                                        !0
                                }
                        }
                        : u.doc.attachEvent ? function(n, t, i, r) {
                                var f = function(n) {
                                    n = n || u.win.event;
                                    var t = s("y")
                                        , f = s("x")
                                        , e = n.clientX + f
                                        , o = n.clientY + t;
                                    return n.preventDefault = n.preventDefault || w,
                                        n.stopPropagation = n.stopPropagation || k,
                                        i.call(r, n, e, o)
                                };
                                return n.attachEvent("on" + t, f),
                                    function() {
                                        return n.detachEvent("on" + t, f),
                                            !0
                                    }
                            }
                            : void 0
                }(), f = [], l = function(i) {
                    for (var u, l, c, r, e = i.clientX, o = i.clientY, v = s("y"), y = s("x"), a = f.length; a--; ) {
                        if (r = f[a],
                                h) {
                            for (l = i.touches && i.touches.length; l--; )
                                if (u = i.touches[l],
                                    u.identifier == r.el._drag.id || r.el.node.contains(u.target)) {
                                    e = u.clientX;
                                    o = u.clientY;
                                    (i.originalEvent ? i.originalEvent : i).preventDefault();
                                    break
                                }
                        } else
                            i.preventDefault();
                        c = r.el.node;
                        n._.glob;
                        c.nextSibling;
                        c.parentNode;
                        c.style.display;
                        e += y;
                        o += v;
                        t("snap.drag.move." + r.el.id, r.move_scope || r.el, e - r.el._drag.x, o - r.el._drag.y, e, o, i)
                    }
                }, a = function(i) {
                    n.unmousemove(l).unmouseup(a);
                    for (var r, u = f.length; u--; )
                        r = f[u],
                            r.el._drag = {},
                            t("snap.drag.end." + r.el.id, r.end_scope || r.start_scope || r.move_scope || r.el, i);
                    f = []
                }, y = v.length; y--; )
                    !function(t) {
                        n[t] = o[t] = function(i, r) {
                            return n.is(i, "function") && (this.events = this.events || [],
                                this.events.push({
                                    name: t,
                                    f: i,
                                    unbind: g(this.shape || this.node || u.doc, t, i, r || this)
                                })),
                                this
                        }
                        ;
                        n["un" + t] = o["un" + t] = function(n) {
                            for (var i = this.events || [], r = i.length; r--; )
                                if (i[r].name == t && (i[r].f == n || !n))
                                    return i[r].unbind(),
                                        i.splice(r, 1),
                                    !i.length && delete this.events,
                                        this;
                            return this
                        }
                    }(v[y]);
                o.hover = function(n, t, i, r) {
                    return this.mouseover(n, i).mouseout(t, r || i)
                }
                ;
                o.unhover = function(n, t) {
                    return this.unmouseover(n).unmouseout(t)
                }
                ;
                e = [];
                o.drag = function(i, r, u, o, s, h) {
                    function v(e, c, v) {
                        (e.originalEvent || e).preventDefault();
                        this._drag.x = c;
                        this._drag.y = v;
                        this._drag.id = e.identifier;
                        !f.length && n.mousemove(l).mouseup(a);
                        f.push({
                            el: this,
                            move_scope: o,
                            start_scope: s,
                            end_scope: h
                        });
                        r && t.on("snap.drag.start." + this.id, r);
                        i && t.on("snap.drag.move." + this.id, i);
                        u && t.on("snap.drag.end." + this.id, u);
                        t("snap.drag.start." + this.id, s || o || this, c, v, e)
                    }
                    if (!arguments.length) {
                        var c;
                        return this.drag(function(n, t) {
                            this.attr({
                                transform: c + (c ? "T" : "t") + [n, t]
                            })
                        }, function() {
                            c = this.transform().local
                        })
                    }
                    return this._drag = {},
                        e.push({
                            el: this,
                            start: v
                        }),
                        this.mousedown(v),
                        this
                }
                ;
                o.undrag = function() {
                    for (var i = e.length; i--; )
                        e[i].el == this && (this.unmousedown(e[i].start),
                            e.splice(i, 1),
                            t.unbind("snap.drag.*." + this.id));
                    return !e.length && n.unmousemove(l).unmouseup(a),
                        this
                }
            }),
            r.plugin(function(n, i, r) {
                var e = (i.prototype,
                    r.prototype)
                    , o = /^\s*url\((.+)\)/
                    , f = String
                    , u = n._.$;
                n.filter = {};
                e.filter = function(t) {
                    var r = this;
                    "svg" != r.type && (r = r.paper);
                    var o = n.parse(f(t))
                        , s = n._.id()
                        , e = (r.node.offsetWidth,
                        r.node.offsetHeight,
                        u("filter"));
                    return u(e, {
                        id: s,
                        filterUnits: "userSpaceOnUse"
                    }),
                        e.appendChild(o.node),
                        r.defs.appendChild(e),
                        new i(e)
                }
                ;
                t.on("snap.util.getattr.filter", function() {
                    var i, r;
                    return t.stop(),
                        i = u(this.node, "filter"),
                        i ? (r = f(i).match(o),
                            r && n.select(r[1])) : void 0
                });
                t.on("snap.util.attr.filter", function(r) {
                    if (r instanceof i && "filter" == r.type) {
                        t.stop();
                        var f = r.node.id;
                        f || (u(r.node, {
                            id: r.id
                        }),
                            f = r.id);
                        u(this.node, {
                            filter: n.url(f)
                        })
                    }
                    r && "none" != r || (t.stop(),
                        this.node.removeAttribute("filter"))
                });
                n.filter.blur = function(t, i) {
                    null == t && (t = 2);
                    var r = null == i ? t : [t, i];
                    return n.format('<feGaussianBlur stdDeviation="{def}"/>', {
                        def: r
                    })
                }
                ;
                n.filter.blur.toString = function() {
                    return this()
                }
                ;
                n.filter.shadow = function(t, i, r, u) {
                    return u = u || "#000",
                    null == r && (r = 4),
                    "string" == typeof r && (u = r,
                        r = 4),
                    null == t && (t = 0,
                        i = 2),
                    null == i && (i = t),
                        u = n.color(u),
                        n.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/><\/feMerge>', {
                            color: u,
                            dx: t,
                            dy: i,
                            blur: r
                        })
                }
                ;
                n.filter.shadow.toString = function() {
                    return this()
                }
                ;
                n.filter.grayscale = function(t) {
                    return null == t && (t = 1),
                        n.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                            a: .2126 + .7874 * (1 - t),
                            b: .7152 - .7152 * (1 - t),
                            c: .0722 - .0722 * (1 - t),
                            d: .2126 - .2126 * (1 - t),
                            e: .7152 + .2848 * (1 - t),
                            f: .0722 - .0722 * (1 - t),
                            g: .2126 - .2126 * (1 - t),
                            h: .0722 + .9278 * (1 - t)
                        })
                }
                ;
                n.filter.grayscale.toString = function() {
                    return this()
                }
                ;
                n.filter.sepia = function(t) {
                    return null == t && (t = 1),
                        n.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                            a: .393 + .607 * (1 - t),
                            b: .769 - .769 * (1 - t),
                            c: .189 - .189 * (1 - t),
                            d: .349 - .349 * (1 - t),
                            e: .686 + .314 * (1 - t),
                            f: .168 - .168 * (1 - t),
                            g: .272 - .272 * (1 - t),
                            h: .534 - .534 * (1 - t),
                            i: .131 + .869 * (1 - t)
                        })
                }
                ;
                n.filter.sepia.toString = function() {
                    return this()
                }
                ;
                n.filter.saturate = function(t) {
                    return null == t && (t = 1),
                        n.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                            amount: 1 - t
                        })
                }
                ;
                n.filter.saturate.toString = function() {
                    return this()
                }
                ;
                n.filter.hueRotate = function(t) {
                    return t = t || 0,
                        n.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                            angle: t
                        })
                }
                ;
                n.filter.hueRotate.toString = function() {
                    return this()
                }
                ;
                n.filter.invert = function(t) {
                    return null == t && (t = 1),
                        n.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/><\/feComponentTransfer>', {
                            amount: t,
                            amount2: 1 - t
                        })
                }
                ;
                n.filter.invert.toString = function() {
                    return this()
                }
                ;
                n.filter.brightness = function(t) {
                    return null == t && (t = 1),
                        n.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/><\/feComponentTransfer>', {
                            amount: t
                        })
                }
                ;
                n.filter.brightness.toString = function() {
                    return this()
                }
                ;
                n.filter.contrast = function(t) {
                    return null == t && (t = 1),
                        n.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/><\/feComponentTransfer>', {
                            amount: t,
                            amount2: .5 - t / 2
                        })
                }
                ;
                n.filter.contrast.toString = function() {
                    return this()
                }
            }),
            r
    }),
    function() {
        function t() {}
        function r(n, t) {
            for (var i = n.length; i--; )
                if (n[i].listener === t)
                    return i;
            return -1
        }
        function i(n) {
            return function() {
                return this[n].apply(this, arguments)
            }
        }
        var n = t.prototype
            , u = this
            , f = u.EventEmitter;
        n.getListeners = function(n) {
            var r, t, i = this._getEvents();
            if ("object" == typeof n) {
                r = {};
                for (t in i)
                    i.hasOwnProperty(t) && n.test(t) && (r[t] = i[t])
            } else
                r = i[n] || (i[n] = []);
            return r
        }
        ;
        n.flattenListeners = function(n) {
            for (var i = [], t = 0; n.length > t; t += 1)
                i.push(n[t].listener);
            return i
        }
        ;
        n.getListenersAsObject = function(n) {
            var t, i = this.getListeners(n);
            return i instanceof Array && (t = {},
                t[n] = i),
            t || i
        }
        ;
        n.addListener = function(n, t) {
            var i, u = this.getListenersAsObject(n), f = "object" == typeof t;
            for (i in u)
                u.hasOwnProperty(i) && -1 === r(u[i], t) && u[i].push(f ? t : {
                        listener: t,
                        once: !1
                    });
            return this
        }
        ;
        n.on = i("addListener");
        n.addOnceListener = function(n, t) {
            return this.addListener(n, {
                listener: t,
                once: !0
            })
        }
        ;
        n.once = i("addOnceListener");
        n.defineEvent = function(n) {
            return this.getListeners(n),
                this
        }
        ;
        n.defineEvents = function(n) {
            for (var t = 0; n.length > t; t += 1)
                this.defineEvent(n[t]);
            return this
        }
        ;
        n.removeListener = function(n, t) {
            var f, i, u = this.getListenersAsObject(n);
            for (i in u)
                u.hasOwnProperty(i) && (f = r(u[i], t),
                -1 !== f && u[i].splice(f, 1));
            return this
        }
        ;
        n.off = i("removeListener");
        n.addListeners = function(n, t) {
            return this.manipulateListeners(!1, n, t)
        }
        ;
        n.removeListeners = function(n, t) {
            return this.manipulateListeners(!0, n, t)
        }
        ;
        n.manipulateListeners = function(n, t, i) {
            var r, u, f = n ? this.removeListener : this.addListener, e = n ? this.removeListeners : this.addListeners;
            if ("object" != typeof t || t instanceof RegExp)
                for (r = i.length; r--; )
                    f.call(this, t, i[r]);
            else
                for (r in t)
                    t.hasOwnProperty(r) && (u = t[r]) && ("function" == typeof u ? f.call(this, r, u) : e.call(this, r, u));
            return this
        }
        ;
        n.removeEvent = function(n) {
            var t, r = typeof n, i = this._getEvents();
            if ("string" === r)
                delete i[n];
            else if ("object" === r)
                for (t in i)
                    i.hasOwnProperty(t) && n.test(t) && delete i[t];
            else
                delete this._events;
            return this
        }
        ;
        n.removeAllListeners = i("removeEvent");
        n.emitEvent = function(n, t) {
            var i, f, r, e, u = this.getListenersAsObject(n);
            for (r in u)
                if (u.hasOwnProperty(r))
                    for (f = u[r].length; f--; )
                        i = u[r][f],
                        i.once === !0 && this.removeListener(n, i.listener),
                            e = i.listener.apply(this, t || []),
                        e === this._getOnceReturnValue() && this.removeListener(n, i.listener);
            return this
        }
        ;
        n.trigger = i("emitEvent");
        n.emit = function(n) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(n, t)
        }
        ;
        n.setOnceReturnValue = function(n) {
            return this._onceReturnValue = n,
                this
        }
        ;
        n._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }
        ;
        n._getEvents = function() {
            return this._events || (this._events = {})
        }
        ;
        t.noConflict = function() {
            return u.EventEmitter = f,
                t
        }
        ;
        "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
                return t
            }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
    }
        .call(this),
    function(n) {
        function f(t) {
            var i = n.event;
            return i.target = i.target || i.srcElement || t,
                i
        }
        var t = document.documentElement, r = function() {}, i, u;
        t.addEventListener ? r = function(n, t, i) {
                n.addEventListener(t, i, !1)
            }
            : t.attachEvent && (r = function(n, t, i) {
                    n[t + i] = i.handleEvent ? function() {
                            var t = f(n);
                            i.handleEvent.call(i, t)
                        }
                        : function() {
                            var t = f(n);
                            i.call(n, t)
                        }
                    ;
                    n.attachEvent("on" + t, n[t + i])
                }
            );
        i = function() {}
        ;
        t.removeEventListener ? i = function(n, t, i) {
                n.removeEventListener(t, i, !1)
            }
            : t.detachEvent && (i = function(n, t, i) {
                    n.detachEvent("on" + t, n[t + i]);
                    try {
                        delete n[t + i]
                    } catch (r) {
                        n[t + i] = void 0
                    }
                }
            );
        u = {
            bind: r,
            unbind: i
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", u) : n.eventie = u
    }(this),
    function(n, t) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(i, r) {
                return t(n, i, r)
            }) : "object" == typeof exports ? module.exports = t(n, require("wolfy87-eventemitter"), require("eventie")) : n.imagesLoaded = t(n, n.EventEmitter, n.eventie)
    }(window, function(n, t, i) {
        function s(n, t) {
            for (var i in t)
                n[i] = t[i];
            return n
        }
        function c(n) {
            return "[object Array]" === v.call(n)
        }
        function l(n) {
            var t = [], i, r;
            if (c(n))
                t = n;
            else if ("number" == typeof n.length)
                for (i = 0,
                         r = n.length; r > i; i++)
                    t.push(n[i]);
            else
                t.push(n);
            return t
        }
        function r(n, t, i) {
            if (!(this instanceof r))
                return new r(n,t);
            "string" == typeof n && (n = document.querySelectorAll(n));
            this.elements = l(n);
            this.options = s({}, this.options);
            "function" == typeof t ? i = t : s(this.options, t);
            i && this.on("always", i);
            this.getImages();
            f && (this.jqDeferred = new f.Deferred);
            var u = this;
            setTimeout(function() {
                u.check()
            })
        }
        function e(n) {
            this.img = n
        }
        function u(n) {
            this.src = n;
            o[n] = this
        }
        var f = n.jQuery, h = n.console, a = void 0 !== h, v = Object.prototype.toString, o;
        return r.prototype = new t,
            r.prototype.options = {},
            r.prototype.getImages = function() {
                var i, u, n, t, e;
                for (this.images = [],
                         i = 0,
                         u = this.elements.length; u > i; i++)
                    if (n = this.elements[i],
                        "IMG" === n.nodeName && this.addImage(n),
                            t = n.nodeType,
                        t && (1 === t || 9 === t || 11 === t))
                        for (var f = n.querySelectorAll("img"), r = 0, o = f.length; o > r; r++)
                            e = f[r],
                                this.addImage(e)
            }
            ,
            r.prototype.addImage = function(n) {
                var t = new e(n);
                this.images.push(t)
            }
            ,
            r.prototype.check = function() {
                function f(n, r) {
                    return t.options.debug && a && h.log("confirm", n, r),
                        t.progress(n),
                        u++,
                    u === i && t.complete(),
                        !0
                }
                var t = this, u = 0, i = this.images.length, n, r;
                if (this.hasAnyBroken = !1,
                        !i)
                    return void this.complete();
                for (n = 0; i > n; n++)
                    r = this.images[n],
                        r.on("confirm", f),
                        r.check()
            }
            ,
            r.prototype.progress = function(n) {
                this.hasAnyBroken = this.hasAnyBroken || !n.isLoaded;
                var t = this;
                setTimeout(function() {
                    t.emit("progress", t, n);
                    t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, n)
                })
            }
            ,
            r.prototype.complete = function() {
                var t = this.hasAnyBroken ? "fail" : "done", n;
                this.isComplete = !0;
                n = this;
                setTimeout(function() {
                    if (n.emit(t, n),
                            n.emit("always", n),
                            n.jqDeferred) {
                        var i = n.hasAnyBroken ? "reject" : "resolve";
                        n.jqDeferred[i](n)
                    }
                })
            }
            ,
        f && (f.fn.imagesLoaded = function(n, t) {
                var i = new r(this,n,t);
                return i.jqDeferred.promise(f(this))
            }
        ),
            e.prototype = new t,
            e.prototype.check = function() {
                var n = o[this.img.src] || new u(this.img.src), t;
                if (n.isConfirmed)
                    return void this.confirm(n.isLoaded, "cached was confirmed");
                if (this.img.complete && void 0 !== this.img.naturalWidth)
                    return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
                t = this;
                n.on("confirm", function(n, i) {
                    return t.confirm(n.isLoaded, i),
                        !0
                });
                n.check()
            }
            ,
            e.prototype.confirm = function(n, t) {
                this.isLoaded = n;
                this.emit("confirm", this, t)
            }
            ,
            o = {},
            u.prototype = new t,
            u.prototype.check = function() {
                if (!this.isChecked) {
                    var n = new Image;
                    i.bind(n, "load", this);
                    i.bind(n, "error", this);
                    n.src = this.src;
                    this.isChecked = !0
                }
            }
            ,
            u.prototype.handleEvent = function(n) {
                var t = "on" + n.type;
                this[t] && this[t](n)
            }
            ,
            u.prototype.onload = function(n) {
                this.confirm(!0, "onload");
                this.unbindProxyEvents(n)
            }
            ,
            u.prototype.onerror = function(n) {
                this.confirm(!1, "onerror");
                this.unbindProxyEvents(n)
            }
            ,
            u.prototype.confirm = function(n, t) {
                this.isConfirmed = !0;
                this.isLoaded = n;
                this.emit("confirm", this, t)
            }
            ,
            u.prototype.unbindProxyEvents = function(n) {
                i.unbind(n.target, "load", this);
                i.unbind(n.target, "error", this)
            }
            ,
            r
    }),
    function(n) {
        function i() {}
        function t(n) {
            function u(t) {
                t.prototype.option || (t.prototype.option = function(t) {
                        n.isPlainObject(t) && (this.options = n.extend(!0, this.options, t))
                    }
                )
            }
            function f(i, u) {
                n.fn[i] = function(f) {
                    var h, e, s;
                    if ("string" == typeof f) {
                        for (var c = r.call(arguments, 1), o = 0, l = this.length; l > o; o++)
                            if (h = this[o],
                                    e = n.data(h, i),
                                    e)
                                if (n.isFunction(e[f]) && "_" !== f.charAt(0)) {
                                    if (s = e[f].apply(e, c),
                                        void 0 !== s)
                                        return s
                                } else
                                    t("no such method '" + f + "' for " + i + " instance");
                            else
                                t("cannot call methods on " + i + " prior to initialization; attempted to call '" + f + "'");
                        return this
                    }
                    return this.each(function() {
                        var t = n.data(this, i);
                        t ? (t.option(f),
                                t._init()) : (t = new u(this,f),
                                n.data(this, i, t))
                    })
                }
            }
            if (n) {
                var t = "undefined" == typeof console ? i : function(n) {
                            console.error(n)
                        }
                    ;
                return n.bridget = function(n, t) {
                    u(t);
                    f(n, t)
                }
                    ,
                    n.bridget
            }
        }
        var r = Array.prototype.slice;
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], t) : t(n.jQuery)
    }(window),
    function(n) {
        function f(n) {
            return RegExp("(^|\\s+)" + n + "(\\s+|$)")
        }
        function e(n, u) {
            var f = t(n, u) ? r : i;
            f(n, u)
        }
        var t, i, r, u;
        "classList"in document.documentElement ? (t = function(n, t) {
                    return n.classList.contains(t)
                }
                    ,
                    i = function(n, t) {
                        n.classList.add(t)
                    }
                    ,
                    r = function(n, t) {
                        n.classList.remove(t)
                    }
            ) : (t = function(n, t) {
                    return f(t).test(n.className)
                }
                    ,
                    i = function(n, i) {
                        t(n, i) || (n.className = n.className + " " + i)
                    }
                    ,
                    r = function(n, t) {
                        n.className = n.className.replace(f(t), " ")
                    }
            );
        u = {
            hasClass: t,
            addClass: i,
            removeClass: r,
            toggleClass: e,
            has: t,
            add: i,
            remove: r,
            toggle: e
        };
        "function" == typeof define && define.amd ? define("classie/classie", u) : n.classie = u
    }(window),
    function(n) {
        function t(n) {
            if (n) {
                if ("string" == typeof r[n])
                    return n;
                n = n.charAt(0).toUpperCase() + n.slice(1);
                for (var t, u = 0, f = i.length; f > u; u++)
                    if (t = i[u] + n,
                        "string" == typeof r[t])
                        return t
            }
        }
        var i = "Webkit Moz ms Ms O".split(" ")
            , r = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
                return t
            }) : "object" == typeof exports ? module.exports = t : n.getStyleProperty = t
    }(window),
    function(n) {
        function i(n) {
            var t = parseFloat(n)
                , i = -1 === n.indexOf("%") && !isNaN(t);
            return i && t
        }
        function e() {
            for (var r, i = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, n = 0, u = t.length; u > n; n++)
                r = t[n],
                    i[r] = 0;
            return i
        }
        function r(n) {
            function s(n) {
                var s, u, a, c, v, y;
                if ("string" == typeof n && (n = document.querySelector(n)),
                    n && "object" == typeof n && n.nodeType) {
                    if (s = f(n),
                        "none" === s.display)
                        return e();
                    u = {};
                    u.width = n.offsetWidth;
                    u.height = n.offsetHeight;
                    for (var nt = u.isBorderBox = !(!r || !s[r] || "border-box" !== s[r]), l = 0, tt = t.length; tt > l; l++)
                        a = t[l],
                            c = s[a],
                            c = h(n, c),
                            v = parseFloat(c),
                            u[a] = isNaN(v) ? 0 : v;
                    var p = u.paddingLeft + u.paddingRight
                        , w = u.paddingTop + u.paddingBottom
                        , it = u.marginLeft + u.marginRight
                        , rt = u.marginTop + u.marginBottom
                        , b = u.borderLeftWidth + u.borderRightWidth
                        , k = u.borderTopWidth + u.borderBottomWidth
                        , d = nt && o
                        , g = i(s.width);
                    return g !== !1 && (u.width = g + (d ? 0 : p + b)),
                        y = i(s.height),
                    y !== !1 && (u.height = y + (d ? 0 : w + k)),
                        u.innerWidth = u.width - (p + b),
                        u.innerHeight = u.height - (w + k),
                        u.outerWidth = u.width + it,
                        u.outerHeight = u.height + rt,
                        u
                }
            }
            function h(n, t) {
                if (u || -1 === t.indexOf("%"))
                    return t;
                var i = n.style
                    , e = i.left
                    , r = n.runtimeStyle
                    , f = r && r.left;
                return f && (r.left = n.currentStyle.left),
                    i.left = t,
                    t = i.pixelLeft,
                    i.left = e,
                f && (r.left = f),
                    t
            }
            var o, r = n("boxSizing");
            return function() {
                var n, t, u;
                r && (n = document.createElement("div"),
                    n.style.width = "200px",
                    n.style.padding = "1px 2px 3px 4px",
                    n.style.borderStyle = "solid",
                    n.style.borderWidth = "1px 2px 3px 4px",
                    n.style[r] = "border-box",
                    t = document.body || document.documentElement,
                    t.appendChild(n),
                    u = f(n),
                    o = 200 === i(u.width),
                    t.removeChild(n))
            }(),
                s
        }
        var u = n.getComputedStyle
            , f = u ? function(n) {
                return u(n, null)
            }
            : function(n) {
                return n.currentStyle
            }
            , t = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], r) : "object" == typeof exports ? module.exports = r(require("get-style-property")) : n.getSize = r(n.getStyleProperty)
    }(window),
    function(n) {
        function f(t) {
            var i = n.event;
            return i.target = i.target || i.srcElement || t,
                i
        }
        var t = document.documentElement, u = function() {}, i, r;
        t.addEventListener ? u = function(n, t, i) {
                n.addEventListener(t, i, !1)
            }
            : t.attachEvent && (u = function(n, t, i) {
                    n[t + i] = i.handleEvent ? function() {
                            var t = f(n);
                            i.handleEvent.call(i, t)
                        }
                        : function() {
                            var t = f(n);
                            i.call(n, t)
                        }
                    ;
                    n.attachEvent("on" + t, n[t + i])
                }
            );
        i = function() {}
        ;
        t.removeEventListener ? i = function(n, t, i) {
                n.removeEventListener(t, i, !1)
            }
            : t.detachEvent && (i = function(n, t, i) {
                    n.detachEvent("on" + t, n[t + i]);
                    try {
                        delete n[t + i]
                    } catch (r) {
                        n[t + i] = void 0
                    }
                }
            );
        r = {
            bind: u,
            unbind: i
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : n.eventie = r
    }(this),
    function(n) {
        function t(n) {
            "function" == typeof n && (t.isReady ? n() : u.push(n))
        }
        function i(n) {
            var o = "readystatechange" === n.type && "complete" !== r.readyState, i, f, e;
            if (!t.isReady && !o)
                for (t.isReady = !0,
                         i = 0,
                         f = u.length; f > i; i++)
                    e = u[i],
                        e()
        }
        function f(u) {
            return u.bind(r, "DOMContentLoaded", i),
                u.bind(r, "readystatechange", i),
                u.bind(n, "load", i),
                t
        }
        var r = n.document
            , u = [];
        t.isReady = !1;
        "function" == typeof define && define.amd ? (t.isReady = "function" == typeof requirejs,
                define("doc-ready/doc-ready", ["eventie/eventie"], f)) : n.docReady = f(n.eventie)
    }(this),
    function() {
        function t() {}
        function r(n, t) {
            for (var i = n.length; i--; )
                if (n[i].listener === t)
                    return i;
            return -1
        }
        function i(n) {
            return function() {
                return this[n].apply(this, arguments)
            }
        }
        var n = t.prototype
            , u = this
            , f = u.EventEmitter;
        n.getListeners = function(n) {
            var r, t, i = this._getEvents();
            if (n instanceof RegExp) {
                r = {};
                for (t in i)
                    i.hasOwnProperty(t) && n.test(t) && (r[t] = i[t])
            } else
                r = i[n] || (i[n] = []);
            return r
        }
        ;
        n.flattenListeners = function(n) {
            for (var i = [], t = 0; n.length > t; t += 1)
                i.push(n[t].listener);
            return i
        }
        ;
        n.getListenersAsObject = function(n) {
            var t, i = this.getListeners(n);
            return i instanceof Array && (t = {},
                t[n] = i),
            t || i
        }
        ;
        n.addListener = function(n, t) {
            var i, u = this.getListenersAsObject(n), f = "object" == typeof t;
            for (i in u)
                u.hasOwnProperty(i) && -1 === r(u[i], t) && u[i].push(f ? t : {
                        listener: t,
                        once: !1
                    });
            return this
        }
        ;
        n.on = i("addListener");
        n.addOnceListener = function(n, t) {
            return this.addListener(n, {
                listener: t,
                once: !0
            })
        }
        ;
        n.once = i("addOnceListener");
        n.defineEvent = function(n) {
            return this.getListeners(n),
                this
        }
        ;
        n.defineEvents = function(n) {
            for (var t = 0; n.length > t; t += 1)
                this.defineEvent(n[t]);
            return this
        }
        ;
        n.removeListener = function(n, t) {
            var f, i, u = this.getListenersAsObject(n);
            for (i in u)
                u.hasOwnProperty(i) && (f = r(u[i], t),
                -1 !== f && u[i].splice(f, 1));
            return this
        }
        ;
        n.off = i("removeListener");
        n.addListeners = function(n, t) {
            return this.manipulateListeners(!1, n, t)
        }
        ;
        n.removeListeners = function(n, t) {
            return this.manipulateListeners(!0, n, t)
        }
        ;
        n.manipulateListeners = function(n, t, i) {
            var r, u, f = n ? this.removeListener : this.addListener, e = n ? this.removeListeners : this.addListeners;
            if ("object" != typeof t || t instanceof RegExp)
                for (r = i.length; r--; )
                    f.call(this, t, i[r]);
            else
                for (r in t)
                    t.hasOwnProperty(r) && (u = t[r]) && ("function" == typeof u ? f.call(this, r, u) : e.call(this, r, u));
            return this
        }
        ;
        n.removeEvent = function(n) {
            var t, r = typeof n, i = this._getEvents();
            if ("string" === r)
                delete i[n];
            else if (n instanceof RegExp)
                for (t in i)
                    i.hasOwnProperty(t) && n.test(t) && delete i[t];
            else
                delete this._events;
            return this
        }
        ;
        n.removeAllListeners = i("removeEvent");
        n.emitEvent = function(n, t) {
            var i, f, r, e, u = this.getListenersAsObject(n);
            for (r in u)
                if (u.hasOwnProperty(r))
                    for (f = u[r].length; f--; )
                        i = u[r][f],
                        i.once === !0 && this.removeListener(n, i.listener),
                            e = i.listener.apply(this, t || []),
                        e === this._getOnceReturnValue() && this.removeListener(n, i.listener);
            return this
        }
        ;
        n.trigger = i("emitEvent");
        n.emit = function(n) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(n, t)
        }
        ;
        n.setOnceReturnValue = function(n) {
            return this._onceReturnValue = n,
                this
        }
        ;
        n._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }
        ;
        n._getEvents = function() {
            return this._events || (this._events = {})
        }
        ;
        t.noConflict = function() {
            return u.EventEmitter = f,
                t
        }
        ;
        "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
                return t
            }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
    }
        .call(this),
    function(n, t) {
        function r(n, t) {
            return n[f](t)
        }
        function u(n) {
            if (!n.parentNode) {
                var t = document.createDocumentFragment();
                t.appendChild(n)
            }
        }
        function s(n, t) {
            u(n);
            for (var r = n.parentNode.querySelectorAll(t), i = 0, f = r.length; f > i; i++)
                if (r[i] === n)
                    return !0;
            return !1
        }
        function h(n, t) {
            return u(n),
                r(n, t)
        }
        var i, f = function() {
            var u, i;
            if (t.matchesSelector)
                return "matchesSelector";
            for (var r = ["webkit", "moz", "ms", "o"], n = 0, f = r.length; f > n; n++)
                if (u = r[n],
                        i = u + "MatchesSelector",
                        t[i])
                    return i
        }(), e, o;
        f ? (e = document.createElement("div"),
                o = r(e, "div"),
                i = o ? r : h) : i = s;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
                return i
            }) : window.matchesSelector = i
    }(this, Element.prototype),
    function(n) {
        function r(n, t) {
            for (var i in t)
                n[i] = t[i];
            return n
        }
        function u(n) {
            for (var t in n)
                return !1;
            return t = null,
                !0
        }
        function f(n) {
            return n.replace(/([A-Z])/g, function(n) {
                return "-" + n.toLowerCase()
            })
        }
        function i(n, t, i) {
            function o(n, t) {
                n && (this.element = n,
                    this.layout = t,
                    this.position = {
                        x: 0,
                        y: 0
                    },
                    this._create())
            }
            var s = i("transition"), h = i("transform"), w = s && h, b = !!i("perspective"), c = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[s], l = ["transform", "transition", "transitionDuration", "transitionProperty"], k = function() {
                for (var n, t, u = {}, r = 0, f = l.length; f > r; r++)
                    n = l[r],
                        t = i(n),
                    t && t !== n && (u[n] = t);
                return u
            }(), a, v, y, p;
            return r(o.prototype, n.prototype),
                o.prototype._create = function() {
                    this._transn = {
                        ingProperties: {},
                        clean: {},
                        onEnd: {}
                    };
                    this.css({
                        position: "absolute"
                    })
                }
                ,
                o.prototype.handleEvent = function(n) {
                    var t = "on" + n.type;
                    this[t] && this[t](n)
                }
                ,
                o.prototype.getSize = function() {
                    this.size = t(this.element)
                }
                ,
                o.prototype.css = function(n) {
                    var r = this.element.style, t, i;
                    for (t in n)
                        i = k[t] || t,
                            r[i] = n[t]
                }
                ,
                o.prototype.getPosition = function() {
                    var r = e(this.element), u = this.layout.options, f = u.isOriginLeft, o = u.isOriginTop, n = parseInt(r[f ? "left" : "right"], 10), t = parseInt(r[o ? "top" : "bottom"], 10), i;
                    n = isNaN(n) ? 0 : n;
                    t = isNaN(t) ? 0 : t;
                    i = this.layout.size;
                    n -= f ? i.paddingLeft : i.paddingRight;
                    t -= o ? i.paddingTop : i.paddingBottom;
                    this.position.x = n;
                    this.position.y = t
                }
                ,
                o.prototype.layoutPosition = function() {
                    var t = this.layout.size
                        , i = this.layout.options
                        , n = {};
                    i.isOriginLeft ? (n.left = this.position.x + t.paddingLeft + "px",
                            n.right = "") : (n.right = this.position.x + t.paddingRight + "px",
                            n.left = "");
                    i.isOriginTop ? (n.top = this.position.y + t.paddingTop + "px",
                            n.bottom = "") : (n.bottom = this.position.y + t.paddingBottom + "px",
                            n.top = "");
                    this.css(n);
                    this.emitEvent("layout", [this])
                }
                ,
                a = b ? function(n, t) {
                        return "translate3d(" + n + "px, " + t + "px, 0)"
                    }
                    : function(n, t) {
                        return "translate(" + n + "px, " + t + "px)"
                    }
                ,
                o.prototype._transitionTo = function(n, t) {
                    this.getPosition();
                    var e = this.position.x
                        , o = this.position.y
                        , s = parseInt(n, 10)
                        , h = parseInt(t, 10)
                        , c = s === this.position.x && h === this.position.y;
                    if (this.setPosition(n, t),
                        c && !this.isTransitioning)
                        return void this.layoutPosition();
                    var i = n - e
                        , r = t - o
                        , u = {}
                        , f = this.layout.options;
                    i = f.isOriginLeft ? i : -i;
                    r = f.isOriginTop ? r : -r;
                    u.transform = a(i, r);
                    this.transition({
                        to: u,
                        onTransitionEnd: {
                            transform: this.layoutPosition
                        },
                        isCleaning: !0
                    })
                }
                ,
                o.prototype.goTo = function(n, t) {
                    this.setPosition(n, t);
                    this.layoutPosition()
                }
                ,
                o.prototype.moveTo = w ? o.prototype._transitionTo : o.prototype.goTo,
                o.prototype.setPosition = function(n, t) {
                    this.position.x = parseInt(n, 10);
                    this.position.y = parseInt(t, 10)
                }
                ,
                o.prototype._nonTransition = function(n) {
                    this.css(n.to);
                    n.isCleaning && this._removeStyles(n.to);
                    for (var t in n.onTransitionEnd)
                        n.onTransitionEnd[t].call(this)
                }
                ,
                o.prototype._transition = function(n) {
                    var i, t, r;
                    if (!parseFloat(this.layout.options.transitionDuration))
                        return void this._nonTransition(n);
                    i = this._transn;
                    for (t in n.onTransitionEnd)
                        i.onEnd[t] = n.onTransitionEnd[t];
                    for (t in n.to)
                        i.ingProperties[t] = !0,
                        n.isCleaning && (i.clean[t] = !0);
                    n.from && (this.css(n.from),
                        r = this.element.offsetHeight,
                        r = null);
                    this.enableTransition(n.to);
                    this.css(n.to);
                    this.isTransitioning = !0
                }
                ,
                v = h && f(h) + ",opacity",
                o.prototype.enableTransition = function() {
                    this.isTransitioning || (this.css({
                        transitionProperty: v,
                        transitionDuration: this.layout.options.transitionDuration
                    }),
                        this.element.addEventListener(c, this, !1))
                }
                ,
                o.prototype.transition = o.prototype[s ? "_transition" : "_nonTransition"],
                o.prototype.onwebkitTransitionEnd = function(n) {
                    this.ontransitionend(n)
                }
                ,
                o.prototype.onotransitionend = function(n) {
                    this.ontransitionend(n)
                }
                ,
                y = {
                    "-webkit-transform": "transform",
                    "-moz-transform": "transform",
                    "-o-transform": "transform"
                },
                o.prototype.ontransitionend = function(n) {
                    var t, i, r;
                    n.target === this.element && (t = this._transn,
                        i = y[n.propertyName] || n.propertyName,
                    (delete t.ingProperties[i],
                    u(t.ingProperties) && this.disableTransition(),
                    i in t.clean && (this.element.style[n.propertyName] = "",
                        delete t.clean[i]),
                    i in t.onEnd) && (r = t.onEnd[i],
                        r.call(this),
                        delete t.onEnd[i]),
                        this.emitEvent("transitionEnd", [this]))
                }
                ,
                o.prototype.disableTransition = function() {
                    this.removeTransitionStyles();
                    this.element.removeEventListener(c, this, !1);
                    this.isTransitioning = !1
                }
                ,
                o.prototype._removeStyles = function(n) {
                    var t = {}, i;
                    for (i in n)
                        t[i] = "";
                    this.css(t)
                }
                ,
                p = {
                    transitionProperty: "",
                    transitionDuration: ""
                },
                o.prototype.removeTransitionStyles = function() {
                    this.css(p)
                }
                ,
                o.prototype.removeElem = function() {
                    this.element.parentNode.removeChild(this.element);
                    this.emitEvent("remove", [this])
                }
                ,
                o.prototype.remove = function() {
                    if (!s || !parseFloat(this.layout.options.transitionDuration))
                        return void this.removeElem();
                    var n = this;
                    this.on("transitionEnd", function() {
                        return n.removeElem(),
                            !0
                    });
                    this.hide()
                }
                ,
                o.prototype.reveal = function() {
                    delete this.isHidden;
                    this.css({
                        display: ""
                    });
                    var n = this.layout.options;
                    this.transition({
                        from: n.hiddenStyle,
                        to: n.visibleStyle,
                        isCleaning: !0
                    })
                }
                ,
                o.prototype.hide = function() {
                    this.isHidden = !0;
                    this.css({
                        display: ""
                    });
                    var n = this.layout.options;
                    this.transition({
                        from: n.visibleStyle,
                        to: n.hiddenStyle,
                        isCleaning: !0,
                        onTransitionEnd: {
                            opacity: function() {
                                this.isHidden && this.css({
                                    display: "none"
                                })
                            }
                        }
                    })
                }
                ,
                o.prototype.destroy = function() {
                    this.css({
                        position: "",
                        left: "",
                        right: "",
                        top: "",
                        bottom: "",
                        transition: "",
                        transform: ""
                    })
                }
                ,
                o
        }
        var t = document.defaultView
            , e = t && t.getComputedStyle ? function(n) {
                    return t.getComputedStyle(n, null)
                }
                : function(n) {
                    return n.currentStyle
                }
            ;
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], i) : (n.Outlayer = {},
                n.Outlayer.Item = i(n.EventEmitter, n.getSize, n.getStyleProperty))
    }(window),
    function(n) {
        function t(n, t) {
            for (var i in t)
                n[i] = t[i];
            return n
        }
        function c(n) {
            return "[object Array]" === a.call(n)
        }
        function u(n) {
            var t = [], i, r;
            if (c(n))
                t = n;
            else if (n && "number" == typeof n.length)
                for (i = 0,
                         r = n.length; r > i; i++)
                    t.push(n[i]);
            else
                t.push(n);
            return t
        }
        function e(n, t) {
            var i = v(t, n);
            -1 !== i && t.splice(i, 1)
        }
        function l(n) {
            return n.replace(/(.)([A-Z])/g, function(n, t, i) {
                return t + "-" + i
            }).toLowerCase()
        }
        function o(o, c, a, v, y, p) {
            function w(n, i) {
                if ("string" == typeof n && (n = s.querySelector(n)),
                    !n || !f(n))
                    return void (r && r.error("Bad " + this.constructor.namespace + " element: " + n));
                this.element = n;
                this.options = t({}, this.options);
                this.option(i);
                var u = ++d;
                this.element.outlayerGUID = u;
                b[u] = this;
                this._create();
                this.options.isInitLayout && this.layout()
            }
            function k(n, i) {
                n.prototype[i] = t({}, w.prototype[i])
            }
            var d = 0
                , b = {};
            return w.namespace = "outlayer",
                w.Item = p,
                w.prototype.options = {
                    containerStyle: {
                        position: "relative"
                    },
                    isInitLayout: !0,
                    isOriginLeft: !0,
                    isOriginTop: !0,
                    isResizeBound: !0,
                    transitionDuration: "0.4s",
                    hiddenStyle: {
                        opacity: 0,
                        transform: "scale(0.001)"
                    },
                    visibleStyle: {
                        opacity: 1,
                        transform: "scale(1)"
                    }
                },
                t(w.prototype, a.prototype),
                w.prototype.option = function(n) {
                    t(this.options, n)
                }
                ,
                w.prototype._create = function() {
                    this.reloadItems();
                    this.stamps = [];
                    this.stamp(this.options.stamp);
                    t(this.element.style, this.options.containerStyle);
                    this.options.isResizeBound && this.bindResize()
                }
                ,
                w.prototype.reloadItems = function() {
                    this.items = this._itemize(this.element.children)
                }
                ,
                w.prototype._itemize = function(n) {
                    for (var u, f, i = this._filterFindItemElements(n), e = this.constructor.Item, r = [], t = 0, o = i.length; o > t; t++)
                        u = i[t],
                            f = new e(u,this),
                            r.push(f);
                    return r
                }
                ,
                w.prototype._filterFindItemElements = function(n) {
                    var t;
                    n = u(n);
                    for (var r = this.options.itemSelector, i = [], e = 0, h = n.length; h > e; e++)
                        if (t = n[e],
                                f(t))
                            if (r) {
                                y(t, r) && i.push(t);
                                for (var s = t.querySelectorAll(r), o = 0, c = s.length; c > o; o++)
                                    i.push(s[o])
                            } else
                                i.push(t);
                    return i
                }
                ,
                w.prototype.getItemElements = function() {
                    for (var t = [], n = 0, i = this.items.length; i > n; n++)
                        t.push(this.items[n].element);
                    return t
                }
                ,
                w.prototype.layout = function() {
                    this._resetLayout();
                    this._manageStamps();
                    var n = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                    this.layoutItems(this.items, n);
                    this._isLayoutInited = !0
                }
                ,
                w.prototype._init = w.prototype.layout,
                w.prototype._resetLayout = function() {
                    this.getSize()
                }
                ,
                w.prototype.getSize = function() {
                    this.size = v(this.element)
                }
                ,
                w.prototype._getMeasurement = function(n, t) {
                    var r, i = this.options[n];
                    i ? ("string" == typeof i ? r = this.element.querySelector(i) : f(i) && (r = i),
                            this[n] = r ? v(r)[t] : i) : this[n] = 0
                }
                ,
                w.prototype.layoutItems = function(n, t) {
                    n = this._getItemsForLayout(n);
                    this._layoutItems(n, t);
                    this._postLayout()
                }
                ,
                w.prototype._getItemsForLayout = function(n) {
                    for (var i, r = [], t = 0, u = n.length; u > t; t++)
                        i = n[t],
                        i.isIgnored || r.push(i);
                    return r
                }
                ,
                w.prototype._layoutItems = function(n, t) {
                    function f() {
                        e.emitEvent("layoutComplete", [e, n])
                    }
                    var e = this, i, r;
                    if (!n || !n.length)
                        return void f();
                    this._itemsOn(n, "layout", f);
                    for (var o = [], u = 0, s = n.length; s > u; u++)
                        i = n[u],
                            r = this._getItemLayoutPosition(i),
                            r.item = i,
                            r.isInstant = t || i.isLayoutInstant,
                            o.push(r);
                    this._processLayoutQueue(o)
                }
                ,
                w.prototype._getItemLayoutPosition = function() {
                    return {
                        x: 0,
                        y: 0
                    }
                }
                ,
                w.prototype._processLayoutQueue = function(n) {
                    for (var t, i = 0, r = n.length; r > i; i++)
                        t = n[i],
                            this._positionItem(t.item, t.x, t.y, t.isInstant)
                }
                ,
                w.prototype._positionItem = function(n, t, i, r) {
                    r ? n.goTo(t, i) : n.moveTo(t, i)
                }
                ,
                w.prototype._postLayout = function() {
                    var n = this._getContainerSize();
                    n && (this._setContainerMeasure(n.width, !0),
                        this._setContainerMeasure(n.height, !1))
                }
                ,
                w.prototype._getContainerSize = h,
                w.prototype._setContainerMeasure = function(n, t) {
                    if (void 0 !== n) {
                        var i = this.size;
                        i.isBorderBox && (n += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth);
                        n = Math.max(n, 0);
                        this.element.style[t ? "width" : "height"] = n + "px"
                    }
                }
                ,
                w.prototype._itemsOn = function(n, t, i) {
                    function e() {
                        return u++,
                        u === o && i.call(s),
                            !0
                    }
                    for (var f, u = 0, o = n.length, s = this, r = 0, h = n.length; h > r; r++) {
                        f = n[r];
                        f.on(t, e)
                    }
                }
                ,
                w.prototype.ignore = function(n) {
                    var t = this.getItem(n);
                    t && (t.isIgnored = !0)
                }
                ,
                w.prototype.unignore = function(n) {
                    var t = this.getItem(n);
                    t && delete t.isIgnored
                }
                ,
                w.prototype.stamp = function(n) {
                    var t, i, r;
                    if (n = this._find(n))
                        for (this.stamps = this.stamps.concat(n),
                                 t = 0,
                                 i = n.length; i > t; t++)
                            r = n[t],
                                this.ignore(r)
                }
                ,
                w.prototype.unstamp = function(n) {
                    var t, r, i;
                    if (n = this._find(n))
                        for (t = 0,
                                 r = n.length; r > t; t++)
                            i = n[t],
                                e(i, this.stamps),
                                this.unignore(i)
                }
                ,
                w.prototype._find = function(n) {
                    if (n)
                        return ("string" == typeof n && (n = this.element.querySelectorAll(n)),
                            n = u(n))
                }
                ,
                w.prototype._manageStamps = function() {
                    var n, t, i;
                    if (this.stamps && this.stamps.length)
                        for (this._getBoundingRect(),
                                 n = 0,
                                 t = this.stamps.length; t > n; n++)
                            i = this.stamps[n],
                                this._manageStamp(i)
                }
                ,
                w.prototype._getBoundingRect = function() {
                    var t = this.element.getBoundingClientRect()
                        , n = this.size;
                    this._boundingRect = {
                        left: t.left + n.paddingLeft + n.borderLeftWidth,
                        top: t.top + n.paddingTop + n.borderTopWidth,
                        right: t.right - (n.paddingRight + n.borderRightWidth),
                        bottom: t.bottom - (n.paddingBottom + n.borderBottomWidth)
                    }
                }
                ,
                w.prototype._manageStamp = h,
                w.prototype._getElementOffset = function(n) {
                    var t = n.getBoundingClientRect()
                        , i = this._boundingRect
                        , r = v(n);
                    return {
                        left: t.left - i.left - r.marginLeft,
                        top: t.top - i.top - r.marginTop,
                        right: i.right - t.right - r.marginRight,
                        bottom: i.bottom - t.bottom - r.marginBottom
                    }
                }
                ,
                w.prototype.handleEvent = function(n) {
                    var t = "on" + n.type;
                    this[t] && this[t](n)
                }
                ,
                w.prototype.bindResize = function() {
                    this.isResizeBound || (o.bind(n, "resize", this),
                        this.isResizeBound = !0)
                }
                ,
                w.prototype.unbindResize = function() {
                    o.unbind(n, "resize", this);
                    this.isResizeBound = !1
                }
                ,
                w.prototype.onresize = function() {
                    function t() {
                        n.resize();
                        delete n.resizeTimeout
                    }
                    this.resizeTimeout && clearTimeout(this.resizeTimeout);
                    var n = this;
                    this.resizeTimeout = setTimeout(t, 100)
                }
                ,
                w.prototype.resize = function() {
                    var n = v(this.element)
                        , t = this.size && n;
                    t && n.innerWidth === this.size.innerWidth || this.layout()
                }
                ,
                w.prototype.addItems = function(n) {
                    var t = this._itemize(n);
                    return t.length && (this.items = this.items.concat(t)),
                        t
                }
                ,
                w.prototype.appended = function(n) {
                    var t = this.addItems(n);
                    t.length && (this.layoutItems(t, !0),
                        this.reveal(t))
                }
                ,
                w.prototype.prepended = function(n) {
                    var t = this._itemize(n), i;
                    t.length && (i = this.items.slice(0),
                        this.items = t.concat(i),
                        this._resetLayout(),
                        this._manageStamps(),
                        this.layoutItems(t, !0),
                        this.reveal(t),
                        this.layoutItems(i))
                }
                ,
                w.prototype.reveal = function(n) {
                    var i = n && n.length, t, r;
                    if (i)
                        for (t = 0; i > t; t++)
                            r = n[t],
                                r.reveal()
                }
                ,
                w.prototype.hide = function(n) {
                    var i = n && n.length, t, r;
                    if (i)
                        for (t = 0; i > t; t++)
                            r = n[t],
                                r.hide()
                }
                ,
                w.prototype.getItem = function(n) {
                    for (var i, t = 0, r = this.items.length; r > t; t++)
                        if (i = this.items[t],
                            i.element === n)
                            return i
                }
                ,
                w.prototype.getItems = function(n) {
                    var u, i;
                    if (n && n.length) {
                        for (var r = [], t = 0, f = n.length; f > t; t++)
                            u = n[t],
                                i = this.getItem(u),
                            i && r.push(i);
                        return r
                    }
                }
                ,
                w.prototype.remove = function(n) {
                    var t, i, f, r;
                    if (n = u(n),
                            t = this.getItems(n),
                        t && t.length)
                        for (this._itemsOn(t, "remove", function() {
                            this.emitEvent("removeComplete", [this, t])
                        }),
                                 i = 0,
                                 f = t.length; f > i; i++)
                            r = t[i],
                                r.remove(),
                                e(r, this.items)
                }
                ,
                w.prototype.destroy = function() {
                    var t = this.element.style, n, r, u;
                    for (t.height = "",
                             t.position = "",
                             t.width = "",
                             n = 0,
                             r = this.items.length; r > n; n++)
                        u = this.items[n],
                            u.destroy();
                    this.unbindResize();
                    delete this.element.outlayerGUID;
                    i && i.removeData(this.element, this.constructor.namespace)
                }
                ,
                w.data = function(n) {
                    var t = n && n.outlayerGUID;
                    return t && b[t]
                }
                ,
                w.create = function(n, u) {
                    function f() {
                        w.apply(this, arguments)
                    }
                    return Object.create ? f.prototype = Object.create(w.prototype) : t(f.prototype, w.prototype),
                        f.prototype.constructor = f,
                        k(f, "options"),
                        t(f.prototype.options, u),
                        f.namespace = n,
                        f.data = w.data,
                        f.Item = function() {
                            p.apply(this, arguments)
                        }
                        ,
                        f.Item.prototype = new p,
                        c(function() {
                            for (var a, t, e, v, o = l(n), h = s.querySelectorAll(".js-" + o), c = "data-" + o + "-options", u = 0, y = h.length; y > u; u++) {
                                t = h[u];
                                e = t.getAttribute(c);
                                try {
                                    a = e && JSON.parse(e)
                                } catch (p) {
                                    r && r.error("Error parsing " + c + " on " + t.nodeName.toLowerCase() + (t.id ? "#" + t.id : "") + ": " + p);
                                    continue
                                }
                                v = new f(t,a);
                                i && i.data(t, n, v)
                            }
                        }),
                    i && i.bridget && i.bridget(n, f),
                        f
                }
                ,
                w.Item = p,
                w
        }
        var s = n.document
            , r = n.console
            , i = n.jQuery
            , h = function() {}
            , a = Object.prototype.toString
            , f = "object" == typeof HTMLElement ? function(n) {
                    return n instanceof HTMLElement
                }
                : function(n) {
                    return n && "object" == typeof n && 1 === n.nodeType && "string" == typeof n.nodeName
                }
            , v = Array.prototype.indexOf ? function(n, t) {
                    return n.indexOf(t)
                }
                : function(n, t) {
                    for (var i = 0, r = n.length; r > i; i++)
                        if (n[i] === t)
                            return i;
                    return -1
                }
            ;
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], o) : n.Outlayer = o(n.eventie, n.docReady, n.EventEmitter, n.getSize, n.matchesSelector, n.Outlayer.Item)
    }(window),
    function(n) {
        function t() {
            function n(t) {
                for (var i in n.defaults)
                    this[i] = n.defaults[i];
                for (i in t)
                    this[i] = t[i]
            }
            return i.Rect = n,
                n.defaults = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                },
                n.prototype.contains = function(n) {
                    var t = n.width || 0
                        , i = n.height || 0;
                    return this.x <= n.x && this.y <= n.y && this.x + this.width >= n.x + t && this.y + this.height >= n.y + i
                }
                ,
                n.prototype.overlaps = function(n) {
                    var t = this.x + this.width
                        , i = this.y + this.height
                        , r = n.x + n.width
                        , u = n.y + n.height;
                    return r > this.x && t > n.x && u > this.y && i > n.y
                }
                ,
                n.prototype.getMaximalFreeRects = function(t) {
                    if (!this.overlaps(t))
                        return !1;
                    var i, r = [], e = this.x + this.width, o = this.y + this.height, u = t.x + t.width, f = t.y + t.height;
                    return this.y < t.y && (i = new n({
                        x: this.x,
                        y: this.y,
                        width: this.width,
                        height: t.y - this.y
                    }),
                        r.push(i)),
                    e > u && (i = new n({
                        x: u,
                        y: this.y,
                        width: e - u,
                        height: this.height
                    }),
                        r.push(i)),
                    o > f && (i = new n({
                        x: this.x,
                        y: f,
                        width: this.width,
                        height: o - f
                    }),
                        r.push(i)),
                    this.x < t.x && (i = new n({
                        x: this.x,
                        y: this.y,
                        width: t.x - this.x,
                        height: this.height
                    }),
                        r.push(i)),
                        r
                }
                ,
                n.prototype.canFit = function(n) {
                    return this.width >= n.width && this.height >= n.height
                }
                ,
                n
        }
        var i = n.Packery = function() {}
            ;
        "function" == typeof define && define.amd ? define("packery/js/rect", t) : (n.Packery = n.Packery || {},
                n.Packery.Rect = t())
    }(window),
    function(n) {
        function t(n) {
            function t(n, t, i) {
                this.width = n || 0;
                this.height = t || 0;
                this.sortDirection = i || "downwardLeftToRight";
                this.reset()
            }
            t.prototype.reset = function() {
                this.spaces = [];
                this.newSpaces = [];
                var t = new n({
                    x: 0,
                    y: 0,
                    width: this.width,
                    height: this.height
                });
                this.spaces.push(t);
                this.sorter = i[this.sortDirection] || i.downwardLeftToRight
            }
            ;
            t.prototype.pack = function(n) {
                for (var i, t = 0, r = this.spaces.length; r > t; t++)
                    if (i = this.spaces[t],
                            i.canFit(n)) {
                        this.placeInSpace(n, i);
                        break
                    }
            }
            ;
            t.prototype.placeInSpace = function(n, t) {
                n.x = t.x;
                n.y = t.y;
                this.placed(n)
            }
            ;
            t.prototype.placed = function(n) {
                for (var u, f, i = [], r = 0, e = this.spaces.length; e > r; r++)
                    u = this.spaces[r],
                        f = u.getMaximalFreeRects(n),
                        f ? i.push.apply(i, f) : i.push(u);
                this.spaces = i;
                t.mergeRects(this.spaces);
                this.spaces.sort(this.sorter)
            }
            ;
            t.mergeRects = function(n) {
                for (var u, r, o, s, t = 0, f = n.length; f > t; t++)
                    if (u = n[t],
                            u) {
                        r = n.slice(0);
                        r.splice(t, 1);
                        for (var e = 0, i = 0, h = r.length; h > i; i++)
                            o = r[i],
                                s = t > i ? 0 : 1,
                            u.contains(o) && (n.splice(i + s - e, 1),
                                e++)
                    }
                return n
            }
            ;
            var i = {
                downwardLeftToRight: function(n, t) {
                    return n.y - t.y || n.x - t.x
                },
                rightwardTopToBottom: function(n, t) {
                    return n.x - t.x || n.y - t.y
                }
            };
            return t
        }
        if ("function" == typeof define && define.amd)
            define("packery/js/packer", ["./rect"], t);
        else {
            var i = n.Packery = n.Packery || {};
            i.Packer = t(i.Rect)
        }
    }(window),
    function(n) {
        function t(n, t, i) {
            var u = n("transform"), r = function() {
                t.Item.apply(this, arguments)
            }, f;
            return r.prototype = new t.Item,
                f = r.prototype._create,
                r.prototype._create = function() {
                    f.call(this);
                    this.rect = new i;
                    this.placeRect = new i
                }
                ,
                r.prototype.dragStart = function() {
                    this.getPosition();
                    this.removeTransitionStyles();
                    this.isTransitioning && u && (this.element.style[u] = "none");
                    this.getSize();
                    this.isPlacing = !0;
                    this.needsPositioning = !1;
                    this.positionPlaceRect(this.position.x, this.position.y);
                    this.isTransitioning = !1;
                    this.didDrag = !1
                }
                ,
                r.prototype.dragMove = function(n, t) {
                    this.didDrag = !0;
                    var i = this.layout.size;
                    n -= i.paddingLeft;
                    t -= i.paddingTop;
                    this.positionPlaceRect(n, t)
                }
                ,
                r.prototype.dragStop = function() {
                    this.getPosition();
                    var n = this.position.x !== this.placeRect.x
                        , t = this.position.y !== this.placeRect.y;
                    this.needsPositioning = n || t;
                    this.didDrag = !1
                }
                ,
                r.prototype.positionPlaceRect = function(n, t, i) {
                    this.placeRect.x = this.getPlaceRectCoord(n, !0);
                    this.placeRect.y = this.getPlaceRectCoord(t, !1, i)
                }
                ,
                r.prototype.getPlaceRectCoord = function(n, t, i) {
                    var o = t ? "Width" : "Height", s = this.size["outer" + o], r = this.layout[t ? "columnWidth" : "rowHeight"], u = this.layout.size["inner" + o], f, h, e;
                    return t || (u = Math.max(u, this.layout.maxY),
                    this.layout.rowHeight || (u -= this.layout.gutter)),
                        r ? (r += this.layout.gutter,
                                u += t ? this.layout.gutter : 0,
                                n = Math.round(n / r),
                                h = this.layout.options.isHorizontal ? t ? "ceil" : "floor" : t ? "floor" : "ceil",
                                e = Math[h](u / r),
                                e -= Math.ceil(s / r),
                                f = e) : f = u - s,
                        n = i ? n : Math.min(n, f),
                        n *= r || 1,
                        Math.max(0, n)
                }
                ,
                r.prototype.copyPlaceRectPosition = function() {
                    this.rect.x = this.placeRect.x;
                    this.rect.y = this.placeRect.y
                }
                ,
                r
        }
        "function" == typeof define && define.amd ? define("packery/js/item", ["get-style-property/get-style-property", "outlayer/outlayer", "./rect"], t) : n.Packery.Item = t(n.getStyleProperty, n.Outlayer, n.Packery.Rect)
    }(window),
    function(n) {
        function t(n, t, i, r, u, f) {
            function o(n, t) {
                return n.position.y - t.position.y || n.position.x - t.position.x
            }
            function s(n, t) {
                return n.position.x - t.position.x || n.position.y - t.position.y
            }
            var e = i.create("packery");
            return e.Item = f,
                e.prototype._create = function() {
                    i.prototype._create.call(this);
                    this.packer = new u;
                    this.stamp(this.options.stamped);
                    var n = this;
                    this.handleDraggabilly = {
                        dragStart: function(t) {
                            n.itemDragStart(t.element)
                        },
                        dragMove: function(t) {
                            n.itemDragMove(t.element, t.position.x, t.position.y)
                        },
                        dragEnd: function(t) {
                            n.itemDragEnd(t.element)
                        }
                    };
                    this.handleUIDraggable = {
                        start: function(t) {
                            n.itemDragStart(t.currentTarget)
                        },
                        drag: function(t, i) {
                            n.itemDragMove(t.currentTarget, i.position.left, i.position.top)
                        },
                        stop: function(t) {
                            n.itemDragEnd(t.currentTarget)
                        }
                    }
                }
                ,
                e.prototype._resetLayout = function() {
                    this.getSize();
                    this._getMeasurements();
                    var n = this.packer;
                    this.options.isHorizontal ? (n.width = Number.POSITIVE_INFINITY,
                            n.height = this.size.innerHeight + this.gutter,
                            n.sortDirection = "rightwardTopToBottom") : (n.width = this.size.innerWidth + this.gutter,
                            n.height = Number.POSITIVE_INFINITY,
                            n.sortDirection = "downwardLeftToRight");
                    n.reset();
                    this.maxY = 0;
                    this.maxX = 0
                }
                ,
                e.prototype._getMeasurements = function() {
                    this._getMeasurement("columnWidth", "width");
                    this._getMeasurement("rowHeight", "height");
                    this._getMeasurement("gutter", "width")
                }
                ,
                e.prototype._getItemLayoutPosition = function(n) {
                    return this._packItem(n),
                        n.rect
                }
                ,
                e.prototype._packItem = function(n) {
                    this._setRectSize(n.element, n.rect);
                    this.packer.pack(n.rect);
                    this._setMaxXY(n.rect)
                }
                ,
                e.prototype._setMaxXY = function(n) {
                    this.maxX = Math.max(n.x + n.width, this.maxX);
                    this.maxY = Math.max(n.y + n.height, this.maxY)
                }
                ,
                e.prototype._setRectSize = function(n, i) {
                    var f = t(n)
                        , r = f.outerWidth
                        , u = f.outerHeight
                        , e = this.columnWidth + this.gutter
                        , o = this.rowHeight + this.gutter;
                    r = this.columnWidth ? Math.ceil(r / e) * e : r + this.gutter;
                    u = this.rowHeight ? Math.ceil(u / o) * o : u + this.gutter;
                    i.width = Math.min(r, this.packer.width);
                    i.height = u
                }
                ,
                e.prototype._getContainerSize = function() {
                    return this.options.isHorizontal ? {
                            width: this.maxX - this.gutter
                        } : {
                            height: this.maxY - this.gutter
                        }
                }
                ,
                e.prototype._manageStamp = function(n) {
                    var t, u = this.getItem(n), i;
                    u && u.isPlacing ? t = u.placeRect : (i = this._getElementOffset(n),
                            t = new r({
                                x: this.options.isOriginLeft ? i.left : i.right,
                                y: this.options.isOriginTop ? i.top : i.bottom
                            }));
                    this._setRectSize(n, t);
                    this.packer.placed(t);
                    this._setMaxXY(t)
                }
                ,
                e.prototype.sortItemsByPosition = function() {
                    var n = this.options.isHorizontal ? s : o;
                    this.items.sort(n)
                }
                ,
                e.prototype.fit = function(n, t, i) {
                    var r = this.getItem(n);
                    r && (this._getMeasurements(),
                        this.stamp(r.element),
                        r.getSize(),
                        r.isPlacing = !0,
                        t = void 0 === t ? r.rect.x : t,
                        i = void 0 === i ? r.rect.y : i,
                        r.positionPlaceRect(t, i, !0),
                        this._bindFitEvents(r),
                        r.moveTo(r.placeRect.x, r.placeRect.y),
                        this.layout(),
                        this.unstamp(r.element),
                        this.sortItemsByPosition(),
                        r.isPlacing = !1,
                        r.copyPlaceRectPosition())
                }
                ,
                e.prototype._bindFitEvents = function(n) {
                    function t() {
                        r++;
                        2 === r && i.emitEvent("fitComplete", [i, n])
                    }
                    var i = this
                        , r = 0;
                    n.on("layout", function() {
                        return t(),
                            !0
                    });
                    this.on("layoutComplete", function() {
                        return t(),
                            !0
                    })
                }
                ,
                e.prototype.resize = function() {
                    var n = t(this.element)
                        , r = this.size && n
                        , i = this.options.isHorizontal ? "innerHeight" : "innerWidth";
                    r && n[i] === this.size[i] || this.layout()
                }
                ,
                e.prototype.itemDragStart = function(n) {
                    this.stamp(n);
                    var t = this.getItem(n);
                    t && t.dragStart()
                }
                ,
                e.prototype.itemDragMove = function(n, t, i) {
                    function f() {
                        r.layout();
                        delete r.dragTimeout
                    }
                    var u = this.getItem(n), r;
                    u && u.dragMove(t, i);
                    r = this;
                    this.clearDragTimeout();
                    this.dragTimeout = setTimeout(f, 40)
                }
                ,
                e.prototype.clearDragTimeout = function() {
                    this.dragTimeout && clearTimeout(this.dragTimeout)
                }
                ,
                e.prototype.itemDragEnd = function(t) {
                    var u, i = this.getItem(t), r;
                    if (i && (u = i.didDrag,
                            i.dragStop()),
                        !i || !u && !i.needsPositioning)
                        return void this.unstamp(t);
                    n.add(i.element, "is-positioning-post-drag");
                    r = this._getDragEndLayoutComplete(t, i);
                    i.needsPositioning ? (i.on("layout", r),
                            i.moveTo(i.placeRect.x, i.placeRect.y)) : i && i.copyPlaceRectPosition();
                    this.clearDragTimeout();
                    this.on("layoutComplete", r);
                    this.layout()
                }
                ,
                e.prototype._getDragEndLayoutComplete = function(t, i) {
                    var u = i && i.needsPositioning
                        , f = 0
                        , e = u ? 2 : 1
                        , r = this;
                    return function() {
                        return f++,
                            f !== e ? !0 : (i && (n.remove(i.element, "is-positioning-post-drag"),
                                    i.isPlacing = !1,
                                    i.copyPlaceRectPosition()),
                                    r.unstamp(t),
                                    r.sortItemsByPosition(),
                                u && r.emitEvent("dragItemPositioned", [r, i]),
                                    !0)
                    }
                }
                ,
                e.prototype.bindDraggabillyEvents = function(n) {
                    n.on("dragStart", this.handleDraggabilly.dragStart);
                    n.on("dragMove", this.handleDraggabilly.dragMove);
                    n.on("dragEnd", this.handleDraggabilly.dragEnd)
                }
                ,
                e.prototype.bindUIDraggableEvents = function(n) {
                    n.on("dragstart", this.handleUIDraggable.start).on("drag", this.handleUIDraggable.drag).on("dragstop", this.handleUIDraggable.stop)
                }
                ,
                e.Rect = r,
                e.Packer = u,
                e
        }
        "function" == typeof define && define.amd ? define(["classie/classie", "get-size/get-size", "outlayer/outlayer", "packery/js/rect", "packery/js/packer", "packery/js/item"], t) : n.Packery = t(n.classie, n.getSize, n.Outlayer, n.Packery.Rect, n.Packery.Packer, n.Packery.Item)
    }(window);
var Sketch = function() {
    "use strict";
    function ft(n) {
        return "[object Array]" == Object.prototype.toString.call(n)
    }
    function f(n) {
        return "function" == typeof n
    }
    function et(n) {
        return "number" == typeof n
    }
    function y(n) {
        return "string" == typeof n
    }
    function ot(n) {
        return b[n] || String.fromCharCode(n)
    }
    function i(n, t, i) {
        for (var r in t)
            !i && r in n || (n[r] = t[r]);
        return n
    }
    function st(n, t) {
        return function() {
            n.apply(t, arguments)
        }
    }
    function ht(n) {
        var i = {}, t;
        for (t in n)
            i[t] = f(n[t]) ? st(n[t], n) : n[t];
        return i
    }
    function ct(n) {
        function l(t) {
            f(t) && t.apply(n, [].splice.call(arguments, 1))
        }
        function kt(n) {
            for (t = 0; t < w.length; t++)
                k = w[t],
                    y(k) ? u[(n ? "add" : "remove") + "EventListener"].call(u, k, ii, !1) : f(k) ? ii = k : u = k
        }
        function dt() {
            a(ti);
            ti = e(dt);
            pt || (l(n.setup),
                pt = f(n.setup));
            fi || (l(n.resize),
                fi = f(n.resize));
            n.running && !yt && (n.dt = (ri = +new Date) - n.now,
                n.millis += n.dt,
                n.now = ri,
                l(n.update),
            n.autoclear && wt && n.clear(),
                l(n.draw));
            yt = ++yt % n.interval
        }
        function gt() {
            u = ei ? n.style : n.canvas;
            lt = ei ? "px" : "";
            d = n.width;
            g = n.height;
            n.fullscreen && (g = n.height = r.innerHeight,
                d = n.width = r.innerWidth);
            n.retina && wt && it && (u.style.height = g + "px",
                u.style.width = d + "px",
                d *= it,
                g *= it,
                n.scale(it, it));
            u.height !== g && (u.height = g + lt);
            u.width !== d && (u.width = d + lt);
            pt && l(n.resize)
        }
        function oi(n, t) {
            return ct = t.getBoundingClientRect(),
                n.x = n.pageX - ct.left - r.scrollX,
                n.y = n.pageY - ct.top - r.scrollY,
                n
        }
        function ni(t, i) {
            return oi(t, n.element),
                i = i || {},
                i.ox = i.x || t.x,
                i.oy = i.y || t.y,
                i.x = t.x,
                i.y = t.y,
                i.dx = i.x - i.ox,
                i.dy = i.y - i.oy,
                i
        }
        function si(n) {
            if (n.preventDefault(),
                    v = ht(n),
                    v.originalEvent = n,
                    v.touches)
                for (p.length = v.touches.length,
                         t = 0; t < v.touches.length; t++)
                    p[t] = ni(v.touches[t], p[t]);
            else
                p.length = 0,
                    p[0] = ni(v, bt);
            return i(bt, p[0], !0),
                v
        }
        function rt(t) {
            for (t = si(t),
                     tt = (vt = w.indexOf(at = t.type)) - 1,
                     n.dragging = /down|start/.test(at) ? !0 : /up|end/.test(at) ? !1 : n.dragging; tt; )
                y(w[tt]) ? l(n[w[tt--]], t) : y(w[vt]) ? l(n[w[vt++]], t) : tt = 0
        }
        function hi(t) {
            nt = t.keyCode;
            ui = "keyup" == t.type;
            et[nt] = et[ot(nt)] = !ui;
            l(n[t.type], t)
        }
        function ci(t) {
            n.autopause && ("blur" == t.type ? ft : ut)();
            l(n[t.type], t)
        }
        function ut() {
            n.now = +new Date;
            n.running = !0
        }
        function ft() {
            n.running = !1
        }
        function li() {
            (n.running ? ft : ut)()
        }
        function ai() {
            wt && n.clearRect(0, 0, n.width, n.height)
        }
        function vi() {
            st = n.element.parentNode;
            t = c.indexOf(n);
            st && st.removeChild(n.element);
            ~t && c.splice(t, 1);
            kt(!1);
            ft()
        }
        var ti, ii, u, st, ct, t, lt, ri, k, v, at, nt, ui, tt, vt, d, g, yt = 0, p = [], fi = !1, pt = !1, it = r.devicePixelRatio, ei = n.type == s, wt = n.type == o, bt = {
            x: 0,
            y: 0,
            ox: 0,
            oy: 0,
            dx: 0,
            dy: 0
        }, w = [n.element, rt, "mousedown", "touchstart", rt, "mousemove", "touchmove", rt, "mouseup", "touchend", rt, "click", h, hi, "keydown", "keyup", r, ci, "focus", "blur", gt, "resize"], et = {};
        for (nt in b)
            et[b[nt]] = !1;
        return i(n, {
            touches: p,
            mouse: bt,
            keys: et,
            dragging: !1,
            running: !1,
            millis: 0,
            now: NaN,
            dt: NaN,
            destroy: vi,
            toggle: li,
            clear: ai,
            start: ut,
            stop: ft
        }),
            c.push(n),
        n.autostart && ut(),
            kt(!0),
            gt(),
            dt(),
            n
    }
    for (var n, g, p = "E LN10 LN2 LOG2E LOG10E PI SQRT1_2 SQRT2 abs acos asin atan ceil cos exp floor log round sin sqrt tan atan2 pow max min".split(" "), nt = "__hasSketch", t = Math, o = "canvas", w = "webgl", s = "dom", h = document, r = window, c = [], tt = {
        fullscreen: !0,
        autostart: !0,
        autoclear: !0,
        autopause: !0,
        container: h.body,
        interval: 1,
        globals: !0,
        retina: !1,
        type: o
    }, b = {
        8: "BACKSPACE",
        9: "TAB",
        13: "ENTER",
        16: "SHIFT",
        27: "ESCAPE",
        32: "SPACE",
        37: "LEFT",
        38: "UP",
        39: "RIGHT",
        40: "DOWN"
    }, k = {
        CANVAS: o,
        WEB_GL: w,
        WEBGL: w,
        DOM: s,
        instances: c,
        install: function(n) {
            if (!n[nt]) {
                for (var r = 0; r < p.length; r++)
                    n[p[r]] = t[p[r]];
                i(n, {
                    TWO_PI: 2 * t.PI,
                    HALF_PI: t.PI / 2,
                    QUATER_PI: t.PI / 4,
                    random: function(n, i) {
                        return ft(n) ? n[~~(t.random() * n.length)] : (et(i) || (i = n || 1,
                                n = 0),
                            n + t.random() * (i - n))
                    },
                    lerp: function(n, t, i) {
                        return n + i * (t - n)
                    },
                    map: function(n, t, i, r, u) {
                        return (n - t) / (i - t) * (u - r) + r
                    }
                });
                n[nt] = !0
            }
        },
        create: function(t) {
            return t = i(t || {}, tt),
            t.globals && k.install(self),
                n = t.element = t.element || h.createElement(t.type === s ? "div" : "canvas"),
                g = t.context = t.context || function() {
                        switch (t.type) {
                            case o:
                                return n.getContext("2d", t);
                            case w:
                                return n.getContext("webgl", t) || n.getContext("experimental-webgl", t);
                            case s:
                                return n.canvas = n
                        }
                    }(),
                (t.container || h.body).appendChild(n),
                k.augment(g, t)
        },
        augment: function(n, t) {
            return t = i(t || {}, tt),
                t.element = n.canvas || n,
                t.element.className += " sketch",
                i(n, t, !0),
                ct(n)
        }
    }, d = ["ms", "moz", "webkit", "o"], u = self, it = 0, l = "AnimationFrame", rt = "request" + l, ut = "cancel" + l, e = u[rt], a = u[ut], v = 0; v < d.length && !e; v++)
        e = u[d[v] + "Request" + l],
            a = u[d[v] + "Cancel" + l];
    return u[rt] = e = e || function(n) {
            var i = +new Date
                , r = t.max(0, 16 - (i - it))
                , u = setTimeout(function() {
                n(i + r)
            }, r);
            return it = i + r,
                u
        }
        ,
        u[ut] = a = a || function(n) {
                clearTimeout(n)
            }
        ,
        k
}();
!function(n, t) {
    var r, i = n.jQuery || n.Cowboy || (n.Cowboy = {});
    i.throttle = r = function(n, r, u, f) {
        function o() {
            function i() {
                s = +new Date;
                u.apply(c, l)
            }
            function h() {
                e = t
            }
            var c = this
                , o = +new Date - s
                , l = arguments;
            f && !e && i();
            e && clearTimeout(e);
            f === t && o > n ? i() : r !== !0 && (e = setTimeout(f ? h : i, f === t ? n - o : n))
        }
        var e, s = 0;
        return "boolean" != typeof r && (f = u,
            u = r,
            r = t),
        i.guid && (o.guid = u.guid = u.guid || i.guid++),
            o
    }
    ;
    i.debounce = function(n, i, u) {
        return u === t ? r(n, i, !1) : r(n, u, i !== !1)
    }
}(this);
$(function() {
    var e = $("html"), n = $(".rowgrid"), t = $("#loader"), o = {
        show: function() {
            t.show()
        },
        hide: function() {
            t.hide()
        }
    }, s = function() {
        $("html, body").animate({
            scrollTop: "0px"
        }, 0)
    }, i = $(window), h = 760, c = 1100, r = function(n) {
        var i = n.outerWidth()
            , r = i % 12
            , t = 12 - r
            , f = i + t
            , u = t > 0 ? Math.floor(t / 2) : 0
            , e = t > 0 ? t - u : 0;
        0 == r ? n.css({
                width: "100%",
                margin: "0"
            }) : n.css({
                width: f + "px",
                margin: "0px -" + e + "px 0px -" + u + "px"
            })
    }, u = !1, f;
    $(window).resize($.throttle(250, function() {
        u && (r(n),
            n.packery("layout"));
        u = !0
    }));
    f = function(t) {
        function nt() {
            i.width() > c && $(window).scrollTop() > p ? !u.hasClass("l-top--fixed") : u.hasClass("l-top--fixed")
        }
        var u, p, l, a, v, w, y, b, k, f, d, g;
        setTimeout(function() {
            $(".burger").addClass("burger--loaded");
            e.addClass("loaded")
        }, 200);
        imagesLoaded(n, function() {
            r(n);
            n.packery({
                itemSelector: ".rowgrid__item",
                gutter: 0,
                isResizeBound: !1
            });
            n.packery("bindResize");
            o.hide()
        });
        u = $(".l-top").first();
        p = u.outerHeight(!0);
        $(".l-main");
        $(window).off("scroll").scroll(nt);
        l = 300;
        a = mina.backout;
        ($("[data-path-hover]").each(function(n, t) {
            var i = $(t)
                , f = Snap(i.find("svg")[0])
                , r = f.select("path")
                , u = {
                from: r.attr("d"),
                to: i.attr("data-path-hover")
            };
            i.on("mouseenter", function() {
                r.animate({
                    path: u.to
                }, l, a)
            });
            i.on("mouseleave", function() {
                r.animate({
                    path: u.from
                }, l, a)
            })
        }),
        i.width() > h) && (v = $(".l-top.hasAnim").first(),
        v.length && (f = 170,
            g = 7,
            k = 4,
            y = .75,
            b = 9.81,
            w = ["#FF4746", "#E8DA5E", "#92B55F", "#487D76"],
            d = function() {
                function n(n, t, i) {
                    this.x = null != n ? n : 0;
                    this.y = null != t ? t : 0;
                    this.mass = null != i ? i : 1;
                    this.tail = [];
                    this.radius = .15 * this.mass;
                    this.charge = random([-1, 1]);
                    this.color = random(w);
                    this.fx = this.fy = 0;
                    this.vx = this.vy = 0
                }
                return n
            }(),
            Sketch.create({
                container: v.get(0),
                particles: [],
                setup: function() {
                    for (var r, u, e, n, t = [], i = n = 0; f >= n; i = n += 1)
                        u = random(this.width),
                            e = random(this.height),
                            r = random(.5, 8),
                            t.push(this.particles.push(new d(u,e,r)));
                    return t
                },
                draw: function() {
                    var n, t, tt, s, r, u, i, h, c, e, l, a, v, it, p, w, o, rt, ut, d, nt;
                    for (this.lineCap = this.lineJoin = "round",
                             nt = [],
                             e = p = 0; f >= p; e = p += 1) {
                        for (n = this.particles[e],
                             random() < .08 && (n.charge = -n.charge),
                                 l = w = ut = e + 1; f >= w; l = w += 1)
                            t = this.particles[l],
                                r = t.x - n.x,
                                u = t.y - n.y,
                                s = sqrt(tt = r * r + u * u + .1),
                                it = n.radius + t.radius,
                            s >= it && (a = 1 / s,
                                h = r * a,
                                c = u * a,
                                i = min(k, b * n.mass * t.mass / tt),
                                n.fx += i * h * t.charge,
                                n.fy += i * c * t.charge,
                                t.fx += -i * h * n.charge,
                                t.fy += -i * c * n.charge);
                        for (n.vx += n.fx,
                                 n.vy += n.fy,
                                 n.vx *= y,
                                 n.vy *= y,
                                 n.tail.unshift({
                                     x: n.x,
                                     y: n.y
                                 }),
                             n.tail.length > g && n.tail.pop(),
                                 n.x += n.vx,
                                 n.y += n.vy,
                                 n.fx = n.fy = 0,
                                 n.x > this.width + n.radius ? (n.x = -n.radius,
                                         n.tail = []) : n.x < -n.radius && (n.x = this.width + n.radius,
                                         n.tail = []),
                                 n.y > this.height + n.radius ? (n.y = -n.radius,
                                         n.tail = []) : n.y < -n.radius && (n.y = this.height + n.radius,
                                         n.tail = []),
                                 this.strokeStyle = n.color,
                                 this.lineWidth = 2 * n.radius,
                                 this.beginPath(),
                                 this.moveTo(n.x, n.y),
                                 d = n.tail,
                                 o = 0,
                                 rt = d.length; rt > o; o++)
                            v = d[o],
                                this.lineTo(v.x, v.y);
                        nt.push(this.stroke())
                    }
                    return nt
                }
            }))),
            function() {
                function n() {
                    var n = !1;
                    return function(t) {
                        (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (n = !0)
                    }(navigator.userAgent || navigator.vendor || window.opera),
                        n
                }
                function t() {
                    var t = document.getElementById("bb-menu-wrapper")
                        , i = "bb-menu-effect"
                        , u = $(".burger")
                        , r = n() ? "touchstart" : "click"
                        , e = function() {
                        $(t).removeClass("bb-menu-open")
                    }
                        , f = function(n) {
                        0 == $(n.target).parents(".bb-menu").length && (u.removeClass("burger--open"),
                            e(),
                            setTimeout(function() {
                                $(t).removeClass(i);
                                $(document).on(r, f)
                            }, 350))
                    };
                    $.each(u, function(n, u) {
                        $(".bb-menu").addClass(i);
                        $(u).on(r, function(n) {
                            return $(t).hasClass("bb-menu-open") ? !0 : (s(),
                                    setTimeout(function() {
                                        $(u).addClass("burger--open")
                                    }, 20),
                                    n.stopPropagation(),
                                    n.preventDefault(),
                                    t.className = "bb-menu-wrapper",
                                    $(t).addClass(i),
                                    setTimeout(function() {
                                        $(t).addClass("bb-menu-open")
                                    }, 0),
                                    void $(document).on(r, f))
                        })
                    })
                }
                t()
            }();
        t && $("#disqus_thread").length > 0 && "undefined" != typeof DISQUS && DISQUS.reset({
            reload: !0
        })
    }
    ;
    f(!1)
})

