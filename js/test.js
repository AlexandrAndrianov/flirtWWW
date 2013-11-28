(function(e, h) {
    function f(b) {
        var i = Na[b] = {};
        d.each(b.split(O), function(b, d) {
            i[d] = !0
        });
        return i
    }
    function t(b, i, k) {
        if (k === h && b.nodeType === 1)
            if (k = "data-" + i.replace(ob, "-$1").toLowerCase(), k = b.getAttribute(k), typeof k === "string") {
                try {
                    k = k === "true" ? !0 : k === "false" ? !1 : k === "null" ? null : +k + "" === k ? +k : pb.test(k) ? d.parseJSON(k) : k
                } catch (a) {
                }
                d.data(b, i, k)
            } else
                k = h;
        return k
    }
    function n(b) {
        for (var i in b)
            if (!(i === "data" && d.isEmptyObject(b[i])) && i !== "toJSON")
                return!1;
        return!0
    }
    function A() {
        return!1
    }
    function z() {
        return!0
    }
    function J(b) {
        return!b || !b.parentNode || b.parentNode.nodeType === 11
    }
    function E(b, i) {
        do
            b = b[i];
        while (b && b.nodeType !== 1);
        return b
    }
    function C(b, i, k) {
        i = i || 0;
        if (d.isFunction(i))
            return d.grep(b, function(b, d) {
                return!!i.call(b, d, b) === k
            });
        else if (i.nodeType)
            return d.grep(b, function(b) {
                return b === i === k
            });
        else if (typeof i === "string") {
            var a = d.grep(b, function(b) {
                return b.nodeType === 1
            });
            if (qb.test(i))
                return d.filter(i, a, !k);
            else
                i = d.filter(i, a)
        }
        return d.grep(b, function(b) {
            return d.inArray(b, i) >= 0 === k
        })
    }
    function L(b) {
        var i =
                Oa.split("|"), b = b.createDocumentFragment();
        if (b.createElement)
            for (; i.length; )
                b.createElement(i.pop());
        return b
    }
    function x(b, i) {
        if (i.nodeType === 1 && d.hasData(b)) {
            var k, a, c;
            a = d._data(b);
            var l = d._data(i, a), e = a.events;
            if (e)
                for (k in delete l.handle, l.events = {}, e) {
                    a = 0;
                    for (c = e[k].length; a < c; a++)
                        d.event.add(i, k, e[k][a])
                }
            if (l.data)
                l.data = d.extend({}, l.data)
        }
    }
    function F(b, i) {
        var k;
        if (i.nodeType === 1) {
            i.clearAttributes && i.clearAttributes();
            i.mergeAttributes && i.mergeAttributes(b);
            k = i.nodeName.toLowerCase();
            if (k ===
                    "object") {
                if (i.parentNode)
                    i.outerHTML = b.outerHTML;
                if (d.support.html5Clone && b.innerHTML && !d.trim(i.innerHTML))
                    i.innerHTML = b.innerHTML
            } else if (k === "input" && Pa.test(b.type)) {
                if (i.defaultChecked = i.checked = b.checked, i.value !== b.value)
                    i.value = b.value
            } else if (k === "option")
                i.selected = b.defaultSelected;
            else if (k === "input" || k === "textarea")
                i.defaultValue = b.defaultValue;
            else if (k === "script" && i.text !== b.text)
                i.text = b.text;
            i.removeAttribute(d.expando)
        }
    }
    function r(b) {
        return typeof b.getElementsByTagName !== "undefined" ?
                b.getElementsByTagName("*") : typeof b.querySelectorAll !== "undefined" ? b.querySelectorAll("*") : []
    }
    function D(b) {
        if (Pa.test(b.type))
            b.defaultChecked = b.checked
    }
    function I(b, i) {
        if (i in b)
            return i;
        for (var d = i.charAt(0).toUpperCase() + i.slice(1), a = i, c = Qa.length; c--; )
            if (i = Qa[c] + d, i in b)
                return i;
        return a
    }
    function H(b, i) {
        b = i || b;
        return d.css(b, "display") === "none" || !d.contains(b.ownerDocument, b)
    }
    function M(b, i) {
        for (var k, a, c = [], l = 0, e = b.length; l < e; l++)
            if (k = b[l], k.style)
                if (c[l] = d._data(k, "olddisplay"), i) {
                    if (!c[l] &&
                            k.style.display === "none")
                        k.style.display = "";
                    k.style.display === "" && H(k) && (c[l] = d._data(k, "olddisplay", da(k.nodeName)))
                } else
                    a = W(k, "display"), !c[l] && a !== "none" && d._data(k, "olddisplay", a);
        for (l = 0; l < e; l++)
            if (k = b[l], k.style && (!i || k.style.display === "none" || k.style.display === ""))
                k.style.display = i ? c[l] || "" : "none";
        return b
    }
    function T(b, i, d) {
        return(b = rb.exec(i)) ? Math.max(0, b[1] - (d || 0)) + (b[2] || "px") : i
    }
    function U(b, i, k, a) {
        for (var i = k === (a ? "border" : "content") ? 4 : i === "width" ? 1 : 0, c = 0; i < 4; i += 2)
            k === "margin" && (c += d.css(b,
                    k + ja[i], !0)), a ? (k === "content" && (c -= parseFloat(W(b, "padding" + ja[i])) || 0), k !== "margin" && (c -= parseFloat(W(b, "border" + ja[i] + "Width")) || 0)) : (c += parseFloat(W(b, "padding" + ja[i])) || 0, k !== "padding" && (c += parseFloat(W(b, "border" + ja[i] + "Width")) || 0));
        return c
    }
    function aa(b, i, a) {
        var w = i === "width" ? b.offsetWidth : b.offsetHeight, c = !0, l = d.support.boxSizing && d.css(b, "boxSizing") === "border-box";
        if (w <= 0 || w == null) {
            w = W(b, i);
            if (w < 0 || w == null)
                w = b.style[i];
            if (va.test(w))
                return w;
            c = l && (d.support.boxSizingReliable || w === b.style[i]);
            w = parseFloat(w) || 0
        }
        return w + U(b, i, a || (l ? "border" : "content"), c) + "px"
    }
    function da(b) {
        if (Da[b])
            return Da[b];
        var i = d("<" + b + ">").appendTo(c.body), a = i.css("display");
        i.remove();
        if (a === "none" || a === "") {
            oa = c.body.appendChild(oa || d.extend(c.createElement("iframe"), {frameBorder: 0, width: 0, height: 0}));
            if (!pa || !oa.createElement)
                pa = (oa.contentWindow || oa.contentDocument).document, pa.write("<!doctype html><html><body>"), pa.close();
            i = pa.body.appendChild(pa.createElement(b));
            a = W(i, "display");
            c.body.removeChild(oa)
        }
        return Da[b] =
        a
    }
    function R(b, i, a, w) {
        var c;
        if (d.isArray(i))
            d.each(i, function(i, d) {
                a || sb.test(b) ? w(b, d) : R(b + "[" + (typeof d === "object" ? i : "") + "]", d, a, w)
            });
        else if (!a && d.type(i) === "object")
            for (c in i)
                R(b + "[" + c + "]", i[c], a, w);
        else
            w(b, i)
    }
    function ka(b) {
        return function(i, a) {
            var k;
            typeof i !== "string" && (a = i, i = "*");
            var w, c, l = i.toLowerCase().split(O), e = 0, y = l.length;
            if (d.isFunction(a))
                for (; e < y; e++)
                    w = l[e], (c = /^\+/.test(w)) && (w = w.substr(1) || "*"), k = b[w] = b[w] || [], w = k, w[c ? "unshift" : "push"](a)
        }
    }
    function Y(b, i, d, a, c, l) {
        c = c || i.dataTypes[0];
        l = l || {};
        l[c] = !0;
        for (var e, c = b[c], y = 0, g = c ? c.length : 0, f = b === Ea; y < g && (f || !e); y++)
            e = c[y](i, d, a), typeof e === "string" && (!f || l[e] ? e = h : (i.dataTypes.unshift(e), e = Y(b, i, d, a, e, l)));
        if ((f || !e) && !l["*"])
            e = Y(b, i, d, a, "*", l);
        return e
    }
    function X(b, i) {
        var a, w, c = d.ajaxSettings.flatOptions || {};
        for (a in i)
            i[a] !== h && ((c[a] ? b : w || (w = {}))[a] = i[a]);
        w && d.extend(!0, b, w)
    }
    function fa() {
        try {
            return new e.XMLHttpRequest
        } catch (b) {
        }
    }
    function S() {
        setTimeout(function() {
            qa = h
        }, 0);
        return qa = d.now()
    }
    function wa(b, i) {
        d.each(i, function(i,
                d) {
            for (var a = (ta[i] || []).concat(ta["*"]), c = 0, e = a.length; c < e; c++)
                if (a[c].call(b, i, d))
                    break
        })
    }
    function V(b, i, a) {
        var w = 0, c = xa.length, l = d.Deferred().always(function() {
            delete e.elem
        }), e = function() {
            for (var i = qa || S(), i = Math.max(0, y.startTime + y.duration - i), d = 1 - (i / y.duration || 0), a = 0, k = y.tweens.length; a < k; a++)
                y.tweens[a].run(d);
            l.notifyWith(b, [y, d, i]);
            return d < 1 && k ? i : (l.resolveWith(b, [y]), !1)
        }, y = l.promise({elem: b, props: d.extend({}, i), opts: d.extend(!0, {specialEasing: {}}, a), originalProperties: i, originalOptions: a,
            startTime: qa || S(), duration: a.duration, tweens: [], createTween: function(i, a) {
                var k = d.Tween(b, y.opts, i, a, y.opts.specialEasing[i] || y.opts.easing);
                y.tweens.push(k);
                return k
            }, stop: function(i) {
                for (var d = 0, a = i ? y.tweens.length : 0; d < a; d++)
                    y.tweens[d].run(1);
                i ? l.resolveWith(b, [y, i]) : l.rejectWith(b, [y, i]);
                return this
            }}), a = y.props;
        for (ua(a, y.opts.specialEasing); w < c; w++)
            if (i = xa[w].call(y, b, a, y.opts))
                return i;
        wa(y, a);
        d.isFunction(y.opts.start) && y.opts.start.call(b, y);
        d.fx.timer(d.extend(e, {anim: y, queue: y.opts.queue,
            elem: b}));
        return y.progress(y.opts.progress).done(y.opts.done, y.opts.complete).fail(y.opts.fail).always(y.opts.always)
    }
    function ua(b, i) {
        var k;
        var a, w, c, l, e;
        for (a in b)
            if (w = d.camelCase(a), c = i[w], l = b[a], d.isArray(l) && (c = l[1], k = b[a] = l[0], l = k), a !== w && (b[w] = l, delete b[a]), (e = d.cssHooks[w]) && "expand"in e)
                for (a in l = e.expand(l), delete b[w], l)
                    a in b || (b[a] = l[a], i[a] = c);
            else
                i[w] = c
    }
    function Q(b, i, d, a, c) {
        return new Q.prototype.init(b, i, d, a, c)
    }
    function s(b, i) {
        for (var d, a = {height: b}, c = 0, i = i ? 1 : 0; c < 4; c += 2 - i)
            d =
                    ja[c], a["margin" + d] = a["padding" + d] = b;
        if (i)
            a.opacity = a.width = b;
        return a
    }
    function la(b) {
        return d.isWindow(b) ? b : b.nodeType === 9 ? b.defaultView || b.parentWindow : !1
    }
    var ba, a, c = e.document, j = e.location, g = e.navigator, v = e.jQuery, o = e.$, u = Array.prototype.push, m = Array.prototype.slice, Z = Array.prototype.indexOf, p = Object.prototype.toString, q = Object.prototype.hasOwnProperty, $ = String.prototype.trim, d = function(b, i) {
        return new d.fn.init(b, i, ba)
    }, N = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, K = /\S/, O = /\s+/, ea = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ga = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, ya = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, za = /^[\],:{}\s]*$/, ha = /(?:^|:|,)(?:\s*\[)+/g, ra = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, Fa = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, Ga = /^-ms-/, tb = /-([\da-z])/gi, ub = function(b, i) {
                return(i + "").toUpperCase()
            }, Aa = function() {
        c.addEventListener ? (c.removeEventListener("DOMContentLoaded", Aa, !1), d.ready()) : c.readyState === "complete" && (c.detachEvent("onreadystatechange", Aa), d.ready())
    }, Ra = {};
    d.fn = d.prototype =
            {constructor: d, init: function(b, i, a) {
                    var w;
                    if (!b)
                        return this;
                    if (b.nodeType)
                        return this.context = this[0] = b, this.length = 1, this;
                    if (typeof b === "string")
                        if ((w = b.charAt(0) === "<" && b.charAt(b.length - 1) === ">" && b.length >= 3 ? [null, b, null] : ga.exec(b)) && (w[1] || !i))
                            if (w[1])
                                return b = (i = i instanceof d ? i[0] : i) && i.nodeType ? i.ownerDocument || i : c, b = d.parseHTML(w[1], b, !0), ya.test(w[1]) && d.isPlainObject(i) && this.attr.call(b, i, !0), d.merge(this, b);
                            else {
                                if ((i = c.getElementById(w[2])) && i.parentNode) {
                                    if (i.id !== w[2])
                                        return a.find(b);
                                    this.length = 1;
                                    this[0] = i
                                }
                                this.context = c;
                                this.selector = b;
                                return this
                            }
                        else
                            return!i || i.jquery ? (i || a).find(b) : this.constructor(i).find(b);
                    else if (d.isFunction(b))
                        return a.ready(b);
                    if (b.selector !== h)
                        this.selector = b.selector, this.context = b.context;
                    return d.makeArray(b, this)
                }, selector: "", jquery: "1.8.3", length: 0, size: function() {
                    return this.length
                }, toArray: function() {
                    return m.call(this)
                }, get: function(b) {
                    return b == null ? this.toArray() : b < 0 ? this[this.length + b] : this[b]
                }, pushStack: function(b, i, a) {
                    b = d.merge(this.constructor(),
                            b);
                    b.prevObject = this;
                    b.context = this.context;
                    if (i === "find")
                        b.selector = this.selector + (this.selector ? " " : "") + a;
                    else if (i)
                        b.selector = this.selector + "." + i + "(" + a + ")";
                    return b
                }, each: function(b, i) {
                    return d.each(this, b, i)
                }, ready: function(b) {
                    d.ready.promise().done(b);
                    return this
                }, eq: function(b) {
                    b = +b;
                    return b === -1 ? this.slice(b) : this.slice(b, b + 1)
                }, first: function() {
                    return this.eq(0)
                }, last: function() {
                    return this.eq(-1)
                }, slice: function() {
                    return this.pushStack(m.apply(this, arguments), "slice", m.call(arguments).join(","))
                },
                map: function(b) {
                    return this.pushStack(d.map(this, function(i, d) {
                        return b.call(i, d, i)
                    }))
                }, end: function() {
                    return this.prevObject || this.constructor(null)
                }, push: u, sort: [].sort, splice: [].splice};
    d.fn.init.prototype = d.fn;
    d.extend = d.fn.extend = function() {
        var b, i, a, c, e, l = arguments[0] || {}, B = 1, y = arguments.length, g = !1;
        typeof l === "boolean" && (g = l, l = arguments[1] || {}, B = 2);
        typeof l !== "object" && !d.isFunction(l) && (l = {});
        y === B && (l = this, --B);
        for (; B < y; B++)
            if ((b = arguments[B]) != null)
                for (i in b)
                    a = l[i], c = b[i], l !== c && (g && c &&
                            (d.isPlainObject(c) || (e = d.isArray(c))) ? (e ? (e = !1, a = a && d.isArray(a) ? a : []) : a = a && d.isPlainObject(a) ? a : {}, l[i] = d.extend(g, a, c)) : c !== h && (l[i] = c));
        return l
    };
    d.extend({noConflict: function(b) {
            if (e.$ === d)
                e.$ = o;
            if (b && e.jQuery === d)
                e.jQuery = v;
            return d
        }, isReady: !1, readyWait: 1, holdReady: function(b) {
            b ? d.readyWait++ : d.ready(!0)
        }, ready: function(b) {
            if (!(b === !0 ? --d.readyWait : d.isReady)) {
                if (!c.body)
                    return setTimeout(d.ready, 1);
                d.isReady = !0;
                b !== !0 && --d.readyWait > 0 || (a.resolveWith(c, [d]), d.fn.trigger && d(c).trigger("ready").off("ready"))
            }
        },
        isFunction: function(b) {
            return d.type(b) === "function"
        }, isArray: Array.isArray || function(b) {
            return d.type(b) === "array"
        }, isWindow: function(b) {
            return b != null && b == b.window
        }, isNumeric: function(b) {
            return!isNaN(parseFloat(b)) && isFinite(b)
        }, type: function(b) {
            return b == null ? String(b) : Ra[p.call(b)] || "object"
        }, isPlainObject: function(b) {
            if (!b || d.type(b) !== "object" || b.nodeType || d.isWindow(b))
                return!1;
            try {
                if (b.constructor && !q.call(b, "constructor") && !q.call(b.constructor.prototype, "isPrototypeOf"))
                    return!1
            } catch (i) {
                return!1
            }
            for (var a in b)
                ;
            return a === h || q.call(b, a)
        }, isEmptyObject: function(b) {
            for (var i in b)
                return!1;
            return!0
        }, error: function(b) {
            throw Error(b);
        }, parseHTML: function(b, i, a) {
            var w;
            if (!b || typeof b !== "string")
                return null;
            typeof i === "boolean" && (a = i, i = 0);
            i = i || c;
            if (w = ya.exec(b))
                return[i.createElement(w[1])];
            w = d.buildFragment([b], i, a ? null : []);
            return d.merge([], (w.cacheable ? d.clone(w.fragment) : w.fragment).childNodes)
        }, parseJSON: function(b) {
            if (!b || typeof b !== "string")
                return null;
            b = d.trim(b);
            if (e.JSON && e.JSON.parse)
                return e.JSON.parse(b);
            if (za.test(b.replace(ra, "@").replace(Fa, "]").replace(ha, "")))
                return(new Function("return " + b))();
            d.error("Invalid JSON: " + b)
        }, parseXML: function(b) {
            var i, a;
            if (!b || typeof b !== "string")
                return null;
            try {
                e.DOMParser ? (a = new DOMParser, i = a.parseFromString(b, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(b))
            } catch (c) {
                i = h
            }
            (!i || !i.documentElement || i.getElementsByTagName("parsererror").length) && d.error("Invalid XML: " + b);
            return i
        }, noop: function() {
        }, globalEval: function(b) {
            b && K.test(b) &&
                    (e.execScript || function(b) {
                        e.eval.call(e, b)
                    })(b)
        }, camelCase: function(b) {
            return b.replace(Ga, "ms-").replace(tb, ub)
        }, nodeName: function(b, i) {
            return b.nodeName && b.nodeName.toLowerCase() === i.toLowerCase()
        }, each: function(b, i, a) {
            var c, e = 0, l = b.length, B = l === h || d.isFunction(b);
            if (a)
                if (B)
                    for (c in b) {
                        if (i.apply(b[c], a) === !1)
                            break
                    }
                else
                    for (; e < l; ) {
                        if (i.apply(b[e++], a) === !1)
                            break
                    }
            else if (B)
                for (c in b) {
                    if (i.call(b[c], c, b[c]) === !1)
                        break
                }
            else
                for (; e < l; )
                    if (i.call(b[e], e, b[e++]) === !1)
                        break;
            return b
        }, trim: $ && !$.call("\ufeff\u00a0") ?
                function(b) {
                    return b == null ? "" : $.call(b)
                } : function(b) {
            return b == null ? "" : (b + "").replace(ea, "")
        }, makeArray: function(b, i) {
            var a, c = i || [];
            b != null && (a = d.type(b), b.length == null || a === "string" || a === "function" || a === "regexp" || d.isWindow(b) ? u.call(c, b) : d.merge(c, b));
            return c
        }, inArray: function(b, i, d) {
            var a;
            if (i) {
                if (Z)
                    return Z.call(i, b, d);
                a = i.length;
                for (d = d?d < 0?Math.max(0, a + d):d:0; d < a; d++)
                    if (d in i && i[d] === b)
                        return d
            }
            return-1
        }, merge: function(b, i) {
            var d = i.length, a = b.length, c = 0;
            if (typeof d === "number")
                for (; c < d; c++)
                    b[a++] =
                            i[c];
            else
                for (; i[c] !== h; )
                    b[a++] = i[c++];
            b.length = a;
            return b
        }, grep: function(b, i, d) {
            for (var a, c = [], l = 0, e = b.length, d = !!d; l < e; l++)
                a = !!i(b[l], l), d !== a && c.push(b[l]);
            return c
        }, map: function(b, i, a) {
            var c, e, l = [], B = 0, y = b.length;
            if (b instanceof d || y !== h && typeof y === "number" && (y > 0 && b[0] && b[y - 1] || y === 0 || d.isArray(b)))
                for (; B < y; B++)
                    c = i(b[B], B, a), c != null && (l[l.length] = c);
            else
                for (e in b)
                    c = i(b[e], e, a), c != null && (l[l.length] = c);
            return l.concat.apply([], l)
        }, guid: 1, proxy: function(b, i) {
            var a, c;
            typeof i === "string" && (a = b[i],
                    i = b, b = a);
            if (!d.isFunction(b))
                return h;
            c = m.call(arguments, 2);
            a = function() {
                return b.apply(i, c.concat(m.call(arguments)))
            };
            a.guid = b.guid = b.guid || d.guid++;
            return a
        }, access: function(b, i, a, c, e, l, B) {
            var y, g = a == null, f = 0, j = b.length;
            if (a && typeof a === "object") {
                for (f in a)
                    d.access(b, i, f, a[f], 1, l, c);
                e = 1
            } else if (c !== h) {
                y = B === h && d.isFunction(c);
                g && (y ? (y = i, i = function(b, i, a) {
                    return y.call(d(b), a)
                }) : (i.call(b, c), i = null));
                if (i)
                    for (; f < j; f++)
                        i(b[f], a, y ? c.call(b[f], f, i(b[f], a)) : c, B);
                e = 1
            }
            return e ? b : g ? i.call(b) : j ? i(b[0],
                    a) : l
        }, now: function() {
            return(new Date).getTime()
        }});
    d.ready.promise = function(b) {
        if (!a)
            if (a = d.Deferred(), c.readyState === "complete")
                setTimeout(d.ready, 1);
            else if (c.addEventListener)
                c.addEventListener("DOMContentLoaded", Aa, !1), e.addEventListener("load", d.ready, !1);
            else {
                c.attachEvent("onreadystatechange", Aa);
                e.attachEvent("onload", d.ready);
                var i = !1;
                try {
                    i = e.frameElement == null && c.documentElement
                } catch (k) {
                }
                i && i.doScroll && function P() {
                    if (!d.isReady) {
                        try {
                            i.doScroll("left")
                        } catch (b) {
                            return setTimeout(P, 50)
                        }
                        d.ready()
                    }
                }()
            }
        return a.promise(b)
    };
    d.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(b, i) {
        Ra["[object " + i + "]"] = i.toLowerCase()
    });
    ba = d(c);
    var Na = {};
    d.Callbacks = function(b) {
        var b = typeof b === "string" ? Na[b] || f(b) : d.extend({}, b), i, a, c, e, l, B, y = [], g = !b.once && [], j = function(d) {
            i = b.memory && d;
            a = !0;
            B = e || 0;
            e = 0;
            l = y.length;
            for (c = !0; y && B < l; B++)
                if (y[B].apply(d[0], d[1]) === !1 && b.stopOnFalse) {
                    i = !1;
                    break
                }
            c = !1;
            y && (g ? g.length && j(g.shift()) : i ? y = [] : p.disable())
        }, p = {add: function() {
                if (y) {
                    var a = y.length;
                    (function vb(a) {
                        d.each(a,
                                function(a, i) {
                                    var k = d.type(i);
                                    k === "function" ? (!b.unique || !p.has(i)) && y.push(i) : i && i.length && k !== "string" && vb(i)
                                })
                    })(arguments);
                    c ? l = y.length : i && (e = a, j(i))
                }
                return this
            }, remove: function() {
                y && d.each(arguments, function(b, i) {
                    for (var a; (a = d.inArray(i, y, a)) > - 1; )
                        y.splice(a, 1), c && (a <= l && l--, a <= B && B--)
                });
                return this
            }, has: function(b) {
                return d.inArray(b, y) > -1
            }, empty: function() {
                y = [];
                return this
            }, disable: function() {
                y = g = i = h;
                return this
            }, disabled: function() {
                return!y
            }, lock: function() {
                g = h;
                i || p.disable();
                return this
            },
            locked: function() {
                return!g
            }, fireWith: function(b, i) {
                i = i || [];
                i = [b, i.slice ? i.slice() : i];
                if (y && (!a || g))
                    c ? g.push(i) : j(i);
                return this
            }, fire: function() {
                p.fireWith(this, arguments);
                return this
            }, fired: function() {
                return!!a
            }};
        return p
    };
    d.extend({Deferred: function(b) {
            var i = [["resolve", "done", d.Callbacks("once memory"), "resolved"], ["reject", "fail", d.Callbacks("once memory"), "rejected"], ["notify", "progress", d.Callbacks("memory")]], a = "pending", c = {state: function() {
                    return a
                }, always: function() {
                    e.done(arguments).fail(arguments);
                    return this
                }, then: function() {
                    var b = arguments;
                    return d.Deferred(function(a) {
                        d.each(i, function(i, k) {
                            var c = k[0], w = b[i];
                            e[k[1]](d.isFunction(w) ? function() {
                                var b = w.apply(this, arguments);
                                if (b && d.isFunction(b.promise))
                                    b.promise().done(a.resolve).fail(a.reject).progress(a.notify);
                                else
                                    a[c + "With"](this === e ? a : this, [b])
                            } : a[c])
                        });
                        b = null
                    }).promise()
                }, promise: function(b) {
                    return b != null ? d.extend(b, c) : c
                }}, e = {};
            c.pipe = c.then;
            d.each(i, function(b, d) {
                var y = d[2], g = d[3];
                c[d[1]] = y.add;
                g && y.add(function() {
                    a = g
                }, i[b ^ 1][2].disable,
                        i[2][2].lock);
                e[d[0]] = y.fire;
                e[d[0] + "With"] = y.fireWith
            });
            c.promise(e);
            b && b.call(e, e);
            return e
        }, when: function(b) {
            var a = 0, k = m.call(arguments), c = k.length, e = c !== 1 || b && d.isFunction(b.promise) ? c : 0, l = e === 1 ? b : d.Deferred(), B = function(b, a, i) {
                return function(d) {
                    a[b] = this;
                    i[b] = arguments.length > 1 ? m.call(arguments) : d;
                    i === y ? l.notifyWith(a, i) : --e || l.resolveWith(a, i)
                }
            }, y, g, f;
            if (c > 1) {
                y = Array(c);
                g = Array(c);
                for (f = Array(c); a < c; a++)
                    k[a] && d.isFunction(k[a].promise) ? k[a].promise().done(B(a, f, k)).fail(l.reject).progress(B(a,
                            g, y)) : --e
            }
            e || l.resolveWith(f, k);
            return l.promise()
        }});
    d.support = function() {
        var b, a, k, w, P, l, B, g = c.createElement("div");
        g.setAttribute("className", "t");
        g.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        a = g.getElementsByTagName("*");
        k = g.getElementsByTagName("a")[0];
        if (!a || !k || !a.length)
            return{};
        w = c.createElement("select");
        P = w.appendChild(c.createElement("option"));
        a = g.getElementsByTagName("input")[0];
        k.style.cssText = "top:1px;float:left;opacity:.5";
        b = {leadingWhitespace: g.firstChild.nodeType ===
            3, tbody: !g.getElementsByTagName("tbody").length, htmlSerialize: !!g.getElementsByTagName("link").length, style: /top/.test(k.getAttribute("style")), hrefNormalized: k.getAttribute("href") === "/a", opacity: /^0.5/.test(k.style.opacity), cssFloat: !!k.style.cssFloat, checkOn: a.value === "on", optSelected: P.selected, getSetAttribute: g.className !== "t", enctype: !!c.createElement("form").enctype, html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", boxModel: c.compatMode === "CSS1Compat", submitBubbles: !0,
            changeBubbles: !0, focusinBubbles: !1, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1};
        a.checked = !0;
        b.noCloneChecked = a.cloneNode(!0).checked;
        w.disabled = !0;
        b.optDisabled = !P.disabled;
        try {
            delete g.test
        } catch (f) {
            b.deleteExpando = !1
        }
        !g.addEventListener && g.attachEvent && g.fireEvent && (g.attachEvent("onclick", k = function() {
            b.noCloneEvent = !1
        }), g.cloneNode(!0).fireEvent("onclick"), g.detachEvent("onclick", k));
        a = c.createElement("input");
        a.value = "t";
        a.setAttribute("type", "radio");
        b.radioValue = a.value === "t";
        a.setAttribute("checked", "checked");
        a.setAttribute("name", "t");
        g.appendChild(a);
        k = c.createDocumentFragment();
        k.appendChild(g.lastChild);
        b.checkClone = k.cloneNode(!0).cloneNode(!0).lastChild.checked;
        b.appendChecked = a.checked;
        k.removeChild(a);
        k.appendChild(g);
        if (g.attachEvent)
            for (l in{submit:!0, change:!0, focusin:!0})
                a = "on" + l, B = a in g, B || (g.setAttribute(a, "return;"), B = typeof g[a] === "function"), b[l + "Bubbles"] = B;
        d(function() {
            var a, d,
                    i, k = c.getElementsByTagName("body")[0];
            if (k) {
                a = c.createElement("div");
                a.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
                k.insertBefore(a, k.firstChild);
                d = c.createElement("div");
                a.appendChild(d);
                d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
                i = d.getElementsByTagName("td");
                i[0].style.cssText = "padding:0;margin:0;border:0;display:none";
                B = i[0].offsetHeight === 0;
                i[0].style.display = "";
                i[1].style.display = "none";
                b.reliableHiddenOffsets = B && i[0].offsetHeight ===
                        0;
                d.innerHTML = "";
                d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
                b.boxSizing = d.offsetWidth === 4;
                b.doesNotIncludeMarginInBodyOffset = k.offsetTop !== 1;
                if (e.getComputedStyle)
                    b.pixelPosition = (e.getComputedStyle(d, null) || {}).top !== "1%", b.boxSizingReliable = (e.getComputedStyle(d, null) || {width: "4px"}).width === "4px", i = c.createElement("div"), i.style.cssText = d.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                            i.style.marginRight = i.style.width = "0", d.style.width = "1px", d.appendChild(i), b.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight);
                if (typeof d.style.zoom !== "undefined")
                    d.innerHTML = "", d.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = d.offsetWidth === 3, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", b.shrinkWrapBlocks = d.offsetWidth !==
                            3, a.style.zoom = 1;
                k.removeChild(a)
            }
        });
        k.removeChild(g);
        a = k = w = P = a = k = g = null;
        return b
    }();
    var pb = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, ob = /([A-Z])/g;
    d.extend({cache: {}, deletedIds: [], uuid: 0, expando: "jQuery" + (d.fn.jquery + Math.random()).replace(/\D/g, ""), noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0}, hasData: function(b) {
            b = b.nodeType ? d.cache[b[d.expando]] : b[d.expando];
            return!!b && !n(b)
        }, data: function(b, a, k, c) {
            if (d.acceptData(b)) {
                var e = d.expando, l = typeof a === "string", g = b.nodeType, f =
                        g ? d.cache : b, j = g ? b[e] : b[e] && e;
                if (j && f[j] && (c || f[j].data) || !(l && k === h)) {
                    j || (g ? b[e] = j = d.deletedIds.pop() || d.guid++ : j = e);
                    if (!f[j] && (f[j] = {}, !g))
                        f[j].toJSON = d.noop;
                    if (typeof a === "object" || typeof a === "function")
                        c ? f[j] = d.extend(f[j], a) : f[j].data = d.extend(f[j].data, a);
                    b = f[j];
                    if (!c) {
                        if (!b.data)
                            b.data = {};
                        b = b.data
                    }
                    k !== h && (b[d.camelCase(a)] = k);
                    l ? (k = b[a], k == null && (k = b[d.camelCase(a)])) : k = b;
                    return k
                }
            }
        }, removeData: function(b, a, k) {
            if (d.acceptData(b)) {
                var c, e, l, g = b.nodeType, f = g ? d.cache : b, j = g ? b[d.expando] : d.expando;
                if (f[j]) {
                    if (a && (c = k ? f[j] : f[j].data)) {
                        d.isArray(a) || (a in c ? a = [a] : (a = d.camelCase(a), a = a in c ? [a] : a.split(" ")));
                        e = 0;
                        for (l = a.length; e < l; e++)
                            delete c[a[e]];
                        if (!(k ? n : d.isEmptyObject)(c))
                            return
                    }
                    if (!k && (delete f[j].data, !n(f[j])))
                        return;
                    g ? d.cleanData([b], !0) : d.support.deleteExpando || f != f.window ? delete f[j] : f[j] = null
                }
            }
        }, _data: function(b, a, k) {
            return d.data(b, a, k, !0)
        }, acceptData: function(b) {
            var a = b.nodeName && d.noData[b.nodeName.toLowerCase()];
            return!a || a !== !0 && b.getAttribute("classid") === a
        }});
    d.fn.extend({data: function(b,
                a) {
            var k, c, e, l, g, f = this[0], j = 0, p = null;
            if (b === h) {
                if (this.length && (p = d.data(f), f.nodeType === 1 && !d._data(f, "parsedAttrs"))) {
                    e = f.attributes;
                    for (g = e.length; j < g; j++)
                        l = e[j].name, l.indexOf("data-") || (l = d.camelCase(l.substring(5)), t(f, l, p[l]));
                    d._data(f, "parsedAttrs", !0)
                }
                return p
            }
            if (typeof b === "object")
                return this.each(function() {
                    d.data(this, b)
                });
            k = b.split(".", 2);
            k[1] = k[1] ? "." + k[1] : "";
            c = k[1] + "!";
            return d.access(this, function(a) {
                if (a === h)
                    return p = this.triggerHandler("getData" + c, [k[0]]), p === h && f && (p = d.data(f,
                            b), p = t(f, b, p)), p === h && k[1] ? this.data(k[0]) : p;
                k[1] = a;
                this.each(function() {
                    var i = d(this);
                    i.triggerHandler("setData" + c, k);
                    d.data(this, b, a);
                    i.triggerHandler("changeData" + c, k)
                })
            }, null, a, arguments.length > 1, null, !1)
        }, removeData: function(b) {
            return this.each(function() {
                d.removeData(this, b)
            })
        }});
    d.extend({queue: function(b, a, k) {
            var c;
            if (b)
                return a = (a || "fx") + "queue", c = d._data(b, a), k && (!c || d.isArray(k) ? c = d._data(b, a, d.makeArray(k)) : c.push(k)), c || []
        }, dequeue: function(b, a) {
            var a = a || "fx", k = d.queue(b, a), c = k.length,
                    e = k.shift(), l = d._queueHooks(b, a), g = function() {
                d.dequeue(b, a)
            };
            e === "inprogress" && (e = k.shift(), c--);
            e && (a === "fx" && k.unshift("inprogress"), delete l.stop, e.call(b, g, l));
            !c && l && l.empty.fire()
        }, _queueHooks: function(b, a) {
            var k = a + "queueHooks";
            return d._data(b, k) || d._data(b, k, {empty: d.Callbacks("once memory").add(function() {
                    d.removeData(b, a + "queue", !0);
                    d.removeData(b, k, !0)
                })})
        }});
    d.fn.extend({queue: function(b, a) {
            var k = 2;
            typeof b !== "string" && (a = b, b = "fx", k--);
            if (arguments.length < k)
                return d.queue(this[0], b);
            return a === h ? this : this.each(function() {
                var k = d.queue(this, b, a);
                d._queueHooks(this, b);
                b === "fx" && k[0] !== "inprogress" && d.dequeue(this, b)
            })
        }, dequeue: function(b) {
            return this.each(function() {
                d.dequeue(this, b)
            })
        }, delay: function(b, a) {
            b = d.fx ? d.fx.speeds[b] || b : b;
            return this.queue(a || "fx", function(a, d) {
                var i = setTimeout(a, b);
                d.stop = function() {
                    clearTimeout(i)
                }
            })
        }, clearQueue: function(b) {
            return this.queue(b || "fx", [])
        }, promise: function(b, a) {
            var k, c = 1, e = d.Deferred(), l = this, g = this.length, f = function() {
                --c || e.resolveWith(l,
                        [l])
            };
            typeof b !== "string" && (a = b, b = h);
            for (b = b || "fx"; g--; )
                if ((k = d._data(l[g], b + "queueHooks")) && k.empty)
                    c++, k.empty.add(f);
            f();
            return e.promise(a)
        }});
    var ia, Sa, Ta, Ua = /[\t\r\n]/g, wb = /\r/g, xb = /^(?:button|input)$/i, yb = /^(?:button|input|object|select|textarea)$/i, zb = /^a(?:rea|)$/i, Va = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, Wa = d.support.getSetAttribute;
    d.fn.extend({attr: function(b, a) {
            return d.access(this, d.attr, b, a, arguments.length >
                    1)
        }, removeAttr: function(b) {
            return this.each(function() {
                d.removeAttr(this, b)
            })
        }, prop: function(b, a) {
            return d.access(this, d.prop, b, a, arguments.length > 1)
        }, removeProp: function(b) {
            b = d.propFix[b] || b;
            return this.each(function() {
                try {
                    this[b] = h, delete this[b]
                } catch (a) {
                }
            })
        }, addClass: function(b) {
            var a, k, c, e, l, g, f;
            if (d.isFunction(b))
                return this.each(function(a) {
                    d(this).addClass(b.call(this, a, this.className))
                });
            if (b && typeof b === "string") {
                a = b.split(O);
                k = 0;
                for (c = this.length; k < c; k++)
                    if (e = this[k], e.nodeType === 1)
                        if (!e.className &&
                                a.length === 1)
                            e.className = b;
                        else {
                            l = " " + e.className + " ";
                            g = 0;
                            for (f = a.length; g < f; g++)
                                l.indexOf(" " + a[g] + " ") < 0 && (l += a[g] + " ");
                            e.className = d.trim(l)
                        }
            }
            return this
        }, removeClass: function(b) {
            var a, k, c, e, l, g, f;
            if (d.isFunction(b))
                return this.each(function(a) {
                    d(this).removeClass(b.call(this, a, this.className))
                });
            if (b && typeof b === "string" || b === h) {
                a = (b || "").split(O);
                g = 0;
                for (f = this.length; g < f; g++)
                    if (c = this[g], c.nodeType === 1 && c.className) {
                        k = (" " + c.className + " ").replace(Ua, " ");
                        e = 0;
                        for (l = a.length; e < l; e++)
                            for (; k.indexOf(" " +
                                    a[e] + " ") >= 0; )
                                k = k.replace(" " + a[e] + " ", " ");
                        c.className = b ? d.trim(k) : ""
                    }
            }
            return this
        }, toggleClass: function(b, a) {
            var k = typeof b, c = typeof a === "boolean";
            if (d.isFunction(b))
                return this.each(function(k) {
                    d(this).toggleClass(b.call(this, k, this.className, a), a)
                });
            return this.each(function() {
                if (k === "string")
                    for (var e, l = 0, g = d(this), f = a, j = b.split(O); e = j[l++]; )
                        f = c ? f : !g.hasClass(e), g[f ? "addClass" : "removeClass"](e);
                else if (k === "undefined" || k === "boolean")
                    this.className && d._data(this, "__className__", this.className),
                            this.className = this.className || b === !1 ? "" : d._data(this, "__className__") || ""
            })
        }, hasClass: function(b) {
            for (var b = " " + b + " ", a = 0, d = this.length; a < d; a++)
                if (this[a].nodeType === 1 && (" " + this[a].className + " ").replace(Ua, " ").indexOf(b) >= 0)
                    return!0;
            return!1
        }, val: function(b) {
            var a, k, c, e = this[0];
            if (arguments.length)
                return c = d.isFunction(b), this.each(function(k) {
                    var e = d(this);
                    if (this.nodeType === 1 && (k = c ? b.call(this, k, e.val()) : b, k == null ? k = "" : typeof k === "number" ? k += "" : d.isArray(k) && (k = d.map(k, function(b) {
                        return b ==
                                null ? "" : b + ""
                    })), a = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()], !a || !("set"in a) || a.set(this, k, "value") === h))
                        this.value = k
                });
            else if (e) {
                if ((a = d.valHooks[e.type] || d.valHooks[e.nodeName.toLowerCase()]) && "get"in a && (k = a.get(e, "value")) !== h)
                    return k;
                k = e.value;
                return typeof k === "string" ? k.replace(wb, "") : k == null ? "" : k
            }
        }});
    d.extend({valHooks: {option: {get: function(b) {
                    var a = b.attributes.value;
                    return!a || a.specified ? b.value : b.text
                }}, select: {get: function(b) {
                    for (var a, k = b.options, c = b.selectedIndex,
                            e = (b = b.type === "select-one" || c < 0) ? null : [], l = b ? c + 1 : k.length, g = c < 0 ? l : b ? c : 0; g < l; g++)
                        if (a = k[g], (a.selected || g === c) && (d.support.optDisabled ? !a.disabled : a.getAttribute("disabled") === null) && (!a.parentNode.disabled || !d.nodeName(a.parentNode, "optgroup"))) {
                            a = d(a).val();
                            if (b)
                                return a;
                            e.push(a)
                        }
                    return e
                }, set: function(b, a) {
                    var k = d.makeArray(a);
                    d(b).find("option").each(function() {
                        this.selected = d.inArray(d(this).val(), k) >= 0
                    });
                    if (!k.length)
                        b.selectedIndex = -1;
                    return k
                }}}, attrFn: {}, attr: function(b, a, k, c) {
            var e, l, g =
                    b.nodeType;
            if (b && !(g === 3 || g === 8 || g === 2)) {
                if (c && d.isFunction(d.fn[a]))
                    return d(b)[a](k);
                if (typeof b.getAttribute === "undefined")
                    return d.prop(b, a, k);
                if (c = g !== 1 || !d.isXMLDoc(b))
                    a = a.toLowerCase(), l = d.attrHooks[a] || (Va.test(a) ? Sa : ia);
                if (k !== h)
                    if (k === null)
                        d.removeAttr(b, a);
                    else
                        return l && "set"in l && c && (e = l.set(b, k, a)) !== h ? e : (b.setAttribute(a, k + ""), k);
                else
                    return l && "get"in l && c && (e = l.get(b, a)) !== null ? e : (e = b.getAttribute(a), e === null ? h : e)
            }
        }, removeAttr: function(b, a) {
            var k, c, e, l, g = 0;
            if (a && b.nodeType === 1)
                for (c =
                        a.split(O); g < c.length; g++)
                    if (e = c[g])
                        k = d.propFix[e] || e, (l = Va.test(e)) || d.attr(b, e, ""), b.removeAttribute(Wa ? e : k), l && k in b && (b[k] = !1)
        }, attrHooks: {type: {set: function(b, a) {
                    if (xb.test(b.nodeName) && b.parentNode)
                        d.error("type property can't be changed");
                    else if (!d.support.radioValue && a === "radio" && d.nodeName(b, "input")) {
                        var k = b.value;
                        b.setAttribute("type", a);
                        if (k)
                            b.value = k;
                        return a
                    }
                }}, value: {get: function(b, a) {
                    if (ia && d.nodeName(b, "button"))
                        return ia.get(b, a);
                    return a in b ? b.value : null
                }, set: function(b, a, k) {
                    if (ia &&
                            d.nodeName(b, "button"))
                        return ia.set(b, a, k);
                    b.value = a
                }}}, propFix: {tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable"}, prop: function(b, a, k) {
            var c, e, l = b.nodeType;
            if (b && !(l === 3 || l === 8 || l === 2)) {
                if (l !== 1 || !d.isXMLDoc(b))
                    a = d.propFix[a] || a, e = d.propHooks[a];
                return k !== h ? e && "set"in e && (c = e.set(b, k,
                        a)) !== h ? c : b[a] = k : e && "get"in e && (c = e.get(b, a)) !== null ? c : b[a]
            }
        }, propHooks: {tabIndex: {get: function(b) {
                    var a = b.getAttributeNode("tabindex");
                    return a && a.specified ? parseInt(a.value, 10) : yb.test(b.nodeName) || zb.test(b.nodeName) && b.href ? 0 : h
                }}}});
    Sa = {get: function(b, a) {
            var k, c = d.prop(b, a);
            return c === !0 || typeof c !== "boolean" && (k = b.getAttributeNode(a)) && k.nodeValue !== !1 ? a.toLowerCase() : h
        }, set: function(b, a, k) {
            a === !1 ? d.removeAttr(b, k) : (a = d.propFix[k] || k, a in b && (b[a] = !0), b.setAttribute(k, k.toLowerCase()));
            return k
        }};
    if (!Wa)
        Ta = {name: !0, id: !0, coords: !0}, ia = d.valHooks.button = {get: function(b, a) {
                var d;
                return(d = b.getAttributeNode(a)) && (Ta[a] ? d.value !== "" : d.specified) ? d.value : h
            }, set: function(b, a, d) {
                var e = b.getAttributeNode(d);
                e || (e = c.createAttribute(d), b.setAttributeNode(e));
                return e.value = a + ""
            }}, d.each(["width", "height"], function(b, a) {
            d.attrHooks[a] = d.extend(d.attrHooks[a], {set: function(b, d) {
                    if (d === "")
                        return b.setAttribute(a, "auto"), d
                }})
        }), d.attrHooks.contenteditable = {get: ia.get, set: function(b, a, d) {
                a === "" && (a = "false");
                ia.set(b, a, d)
            }};
    d.support.hrefNormalized || d.each(["href", "src", "width", "height"], function(b, a) {
        d.attrHooks[a] = d.extend(d.attrHooks[a], {get: function(b) {
                b = b.getAttribute(a, 2);
                return b === null ? h : b
            }})
    });
    if (!d.support.style)
        d.attrHooks.style = {get: function(b) {
                return b.style.cssText.toLowerCase() || h
            }, set: function(b, a) {
                return b.style.cssText = a + ""
            }};
    if (!d.support.optSelected)
        d.propHooks.selected = d.extend(d.propHooks.selected, {get: function() {
                return null
            }});
    if (!d.support.enctype)
        d.propFix.enctype = "encoding";
    d.support.checkOn || d.each(["radio", "checkbox"], function() {
        d.valHooks[this] = {get: function(b) {
                return b.getAttribute("value") === null ? "on" : b.value
            }}
    });
    d.each(["radio", "checkbox"], function() {
        d.valHooks[this] = d.extend(d.valHooks[this], {set: function(b, a) {
                if (d.isArray(a))
                    return b.checked = d.inArray(d(b).val(), a) >= 0
            }})
    });
    var Ha = /^(?:textarea|input|select)$/i, Xa = /^([^\.]*|)(?:\.(.+)|)$/, Ab = /(?:^|\s)hover(\.\S+|)\b/, Bb = /^key/, Cb = /^(?:mouse|contextmenu)|click/, Ya = /^(?:focusinfocus|focusoutblur)$/, Za = function(b) {
        return d.event.special.hover ?
                b : b.replace(Ab, "mouseenter$1 mouseleave$1")
    };
    d.event = {add: function(b, a, k, c, e) {
            var l, g, f, j, p, v, o, q, m;
            if (!(b.nodeType === 3 || b.nodeType === 8 || !a || !k || !(l = d._data(b)))) {
                if (k.handler)
                    o = k, k = o.handler, e = o.selector;
                if (!k.guid)
                    k.guid = d.guid++;
                f = l.events;
                if (!f)
                    l.events = f = {};
                g = l.handle;
                if (!g)
                    l.handle = g = function(b) {
                        return typeof d !== "undefined" && (!b || d.event.triggered !== b.type) ? d.event.dispatch.apply(g.elem, arguments) : h
                    }, g.elem = b;
                a = d.trim(Za(a)).split(" ");
                for (l = 0; l < a.length; l++) {
                    j = Xa.exec(a[l]) || [];
                    p = j[1];
                    v = (j[2] ||
                            "").split(".").sort();
                    m = d.event.special[p] || {};
                    p = (e ? m.delegateType : m.bindType) || p;
                    m = d.event.special[p] || {};
                    j = d.extend({type: p, origType: j[1], data: c, handler: k, guid: k.guid, selector: e, needsContext: e && d.expr.match.needsContext.test(e), namespace: v.join(".")}, o);
                    q = f[p];
                    if (!q && (q = f[p] = [], q.delegateCount = 0, !m.setup || m.setup.call(b, c, v, g) === !1))
                        b.addEventListener ? b.addEventListener(p, g, !1) : b.attachEvent && b.attachEvent("on" + p, g);
                    if (m.add && (m.add.call(b, j), !j.handler.guid))
                        j.handler.guid = k.guid;
                    e ? q.splice(q.delegateCount++,
                            0, j) : q.push(j);
                    d.event.global[p] = !0
                }
                b = null
            }
        }, global: {}, remove: function(b, a, k, c, e) {
            var l, g, f, j, h, p, v, o, q, m, u = d.hasData(b) && d._data(b);
            if (u && (v = u.events)) {
                a = d.trim(Za(a || "")).split(" ");
                for (l = 0; l < a.length; l++)
                    if (g = Xa.exec(a[l]) || [], f = j = g[1], g = g[2], f) {
                        o = d.event.special[f] || {};
                        f = (c ? o.delegateType : o.bindType) || f;
                        q = v[f] || [];
                        h = q.length;
                        g = g ? RegExp("(^|\\.)" + g.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        for (p = 0; p < q.length; p++)
                            if (m = q[p], (e || j === m.origType) && (!k || k.guid === m.guid) && (!g || g.test(m.namespace)) &&
                                    (!c || c === m.selector || c === "**" && m.selector))
                                q.splice(p--, 1), m.selector && q.delegateCount--, o.remove && o.remove.call(b, m);
                        q.length === 0 && h !== q.length && ((!o.teardown || o.teardown.call(b, g, u.handle) === !1) && d.removeEvent(b, f, u.handle), delete v[f])
                    } else
                        for (f in v)
                            d.event.remove(b, f + a[l], k, c, !0);
                d.isEmptyObject(v) && (delete u.handle, d.removeData(b, "events", !0))
            }
        }, customEvent: {getData: !0, setData: !0, changeData: !0}, trigger: function(b, a, k, g) {
            if (!k || !(k.nodeType === 3 || k.nodeType === 8)) {
                var f, l, j, p, v, o, q = b.type || b;
                j = [];
                if (!Ya.test(q + d.event.triggered) && (q.indexOf("!") >= 0 && (q = q.slice(0, -1), f = !0), q.indexOf(".") >= 0 && (j = q.split("."), q = j.shift(), j.sort()), k && !d.event.customEvent[q] || d.event.global[q]))
                    if (b = typeof b === "object" ? b[d.expando] ? b : new d.Event(q, b) : new d.Event(q), b.type = q, b.isTrigger = !0, b.exclusive = f, b.namespace = j.join("."), b.namespace_re = b.namespace ? RegExp("(^|\\.)" + j.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, j = q.indexOf(":") < 0 ? "on" + q : "", k) {
                        b.result = h;
                        if (!b.target)
                            b.target = k;
                        a = a != null ? d.makeArray(a) : [];
                        a.unshift(b);
                        p = d.event.special[q] || {};
                        if (!(p.trigger && p.trigger.apply(k, a) === !1)) {
                            o = [[k, p.bindType || q]];
                            if (!g && !p.noBubble && !d.isWindow(k)) {
                                v = p.delegateType || q;
                                f = Ya.test(v + q) ? k : k.parentNode;
                                for (l = k; f; f = f.parentNode)
                                    o.push([f, v]), l = f;
                                if (l === (k.ownerDocument || c))
                                    o.push([l.defaultView || l.parentWindow || e, v])
                            }
                            for (l = 0; l < o.length && !b.isPropagationStopped(); l++)
                                f = o[l][0], b.type = o[l][1], (v = (d._data(f, "events") || {})[b.type] && d._data(f, "handle")) && v.apply(f, a), (v = j && f[j]) && d.acceptData(f) && v.apply && v.apply(f, a) === !1 && b.preventDefault();
                            b.type = q;
                            if (!g && !b.isDefaultPrevented() && (!p._default || p._default.apply(k.ownerDocument, a) === !1) && !(q === "click" && d.nodeName(k, "a")) && d.acceptData(k))
                                if (j && k[q] && (q !== "focus" && q !== "blur" || b.target.offsetWidth !== 0) && !d.isWindow(k))
                                    (l = k[j]) && (k[j] = null), d.event.triggered = q, k[q](), d.event.triggered = h, l && (k[j] = l);
                            return b.result
                        }
                    } else
                        for (l in k = d.cache, k)
                            k[l].events && k[l].events[q] && d.event.trigger(b, a, k[l].handle.elem, !0)
            }
        }, dispatch: function(b) {
            var b = d.event.fix(b || e.event), a, k, c, g, l, f, j = (d._data(this,
                    "events") || {})[b.type] || [], p = j.delegateCount, v = m.call(arguments), q = !b.exclusive && !b.namespace, o = d.event.special[b.type] || {}, u = [];
            v[0] = b;
            b.delegateTarget = this;
            if (!(o.preDispatch && o.preDispatch.call(this, b) === !1)) {
                if (p && !(b.button && b.type === "click"))
                    for (k = b.target; k != this; k = k.parentNode || this)
                        if (k.disabled !== !0 || b.type !== "click") {
                            g = {};
                            l = [];
                            for (a = 0; a < p; a++)
                                c = j[a], f = c.selector, g[f] === h && (g[f] = c.needsContext ? d(f, this).index(k) >= 0 : d.find(f, this, null, [k]).length), g[f] && l.push(c);
                            l.length && u.push({elem: k,
                                matches: l})
                        }
                j.length > p && u.push({elem: this, matches: j.slice(p)});
                for (a = 0; a < u.length && !b.isPropagationStopped(); a++) {
                    g = u[a];
                    b.currentTarget = g.elem;
                    for (k = 0; k < g.matches.length && !b.isImmediatePropagationStopped(); k++)
                        if (c = g.matches[k], q || !b.namespace && !c.namespace || b.namespace_re && b.namespace_re.test(c.namespace))
                            if (b.data = c.data, b.handleObj = c, c = ((d.event.special[c.origType] || {}).handle || c.handler).apply(g.elem, v), c !== h)
                                b.result = c, c === !1 && (b.preventDefault(), b.stopPropagation())
                }
                o.postDispatch && o.postDispatch.call(this,
                        b);
                return b.result
            }
        }, props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function(b, a) {
                if (b.which == null)
                    b.which = a.charCode != null ? a.charCode : a.keyCode;
                return b
            }}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(b,
                    a) {
                var d, e, g = a.button, l = a.fromElement;
                if (b.pageX == null && a.clientX != null)
                    d = b.target.ownerDocument || c, e = d.documentElement, d = d.body, b.pageX = a.clientX + (e && e.scrollLeft || d && d.scrollLeft || 0) - (e && e.clientLeft || d && d.clientLeft || 0), b.pageY = a.clientY + (e && e.scrollTop || d && d.scrollTop || 0) - (e && e.clientTop || d && d.clientTop || 0);
                if (!b.relatedTarget && l)
                    b.relatedTarget = l === b.target ? a.toElement : l;
                if (!b.which && g !== h)
                    b.which = g & 1 ? 1 : g & 2 ? 3 : g & 4 ? 2 : 0;
                return b
            }}, fix: function(b) {
            if (b[d.expando])
                return b;
            var a, k, e = b, g = d.event.fixHooks[b.type] ||
                    {}, l = g.props ? this.props.concat(g.props) : this.props, b = d.Event(e);
            for (a = l.length; a; )
                k = l[--a], b[k] = e[k];
            if (!b.target)
                b.target = e.srcElement || c;
            if (b.target.nodeType === 3)
                b.target = b.target.parentNode;
            b.metaKey = !!b.metaKey;
            return g.filter ? g.filter(b, e) : b
        }, special: {load: {noBubble: !0}, focus: {delegateType: "focusin"}, blur: {delegateType: "focusout"}, beforeunload: {setup: function(b, a, c) {
                    if (d.isWindow(this))
                        this.onbeforeunload = c
                }, teardown: function(b, a) {
                    if (this.onbeforeunload === a)
                        this.onbeforeunload = null
                }}}, simulate: function(b,
                a, c, e) {
            b = d.extend(new d.Event, c, {type: b, isSimulated: !0, originalEvent: {}});
            e ? d.event.trigger(b, null, a) : d.event.dispatch.call(a, b);
            b.isDefaultPrevented() && c.preventDefault()
        }};
    d.event.handle = d.event.dispatch;
    d.removeEvent = c.removeEventListener ? function(b, a, d) {
        b.removeEventListener && b.removeEventListener(a, d, !1)
    } : function(b, a, d) {
        a = "on" + a;
        b.detachEvent && (typeof b[a] === "undefined" && (b[a] = null), b.detachEvent(a, d))
    };
    d.Event = function(b, a) {
        if (!(this instanceof d.Event))
            return new d.Event(b, a);
        b && b.type ? (this.originalEvent =
                b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || b.returnValue === !1 || b.getPreventDefault && b.getPreventDefault() ? z : A) : this.type = b;
        a && d.extend(this, a);
        this.timeStamp = b && b.timeStamp || d.now();
        this[d.expando] = !0
    };
    d.Event.prototype = {preventDefault: function() {
            this.isDefaultPrevented = z;
            var b = this.originalEvent;
            if (b)
                b.preventDefault ? b.preventDefault() : b.returnValue = !1
        }, stopPropagation: function() {
            this.isPropagationStopped = z;
            var b = this.originalEvent;
            if (b)
                b.stopPropagation && b.stopPropagation(),
                        b.cancelBubble = !0
        }, stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = z;
            this.stopPropagation()
        }, isDefaultPrevented: A, isPropagationStopped: A, isImmediatePropagationStopped: A};
    d.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function(b, a) {
        d.event.special[b] = {delegateType: a, bindType: a, handle: function(b) {
                var c, e = b.relatedTarget, g = b.handleObj;
                if (!e || e !== this && !d.contains(this, e))
                    b.type = g.origType, c = g.handler.apply(this, arguments), b.type = a;
                return c
            }}
    });
    if (!d.support.submitBubbles)
        d.event.special.submit =
                {setup: function() {
                        if (d.nodeName(this, "form"))
                            return!1;
                        d.event.add(this, "click._submit keypress._submit", function(b) {
                            b = b.target;
                            if ((b = d.nodeName(b, "input") || d.nodeName(b, "button") ? b.form : h) && !d._data(b, "_submit_attached"))
                                d.event.add(b, "submit._submit", function(b) {
                                    b._submit_bubble = !0
                                }), d._data(b, "_submit_attached", !0)
                        })
                    }, postDispatch: function(b) {
                        b._submit_bubble && (delete b._submit_bubble, this.parentNode && !b.isTrigger && d.event.simulate("submit", this.parentNode, b, !0))
                    }, teardown: function() {
                        if (d.nodeName(this,
                                "form"))
                            return!1;
                        d.event.remove(this, "._submit")
                    }};
    if (!d.support.changeBubbles)
        d.event.special.change = {setup: function() {
                if (Ha.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio")
                        d.event.add(this, "propertychange._change", function(b) {
                            if (b.originalEvent.propertyName === "checked")
                                this._just_changed = !0
                        }), d.event.add(this, "click._change", function(b) {
                            if (this._just_changed && !b.isTrigger)
                                this._just_changed = !1;
                            d.event.simulate("change", this, b, !0)
                        });
                    return!1
                }
                d.event.add(this, "beforeactivate._change",
                        function(b) {
                            b = b.target;
                            Ha.test(b.nodeName) && !d._data(b, "_change_attached") && (d.event.add(b, "change._change", function(b) {
                                this.parentNode && !b.isSimulated && !b.isTrigger && d.event.simulate("change", this.parentNode, b, !0)
                            }), d._data(b, "_change_attached", !0))
                        })
            }, handle: function(b) {
                var a = b.target;
                if (this !== a || b.isSimulated || b.isTrigger || a.type !== "radio" && a.type !== "checkbox")
                    return b.handleObj.handler.apply(this, arguments)
            }, teardown: function() {
                d.event.remove(this, "._change");
                return!Ha.test(this.nodeName)
            }};
    d.support.focusinBubbles || d.each({focus: "focusin", blur: "focusout"}, function(b, a) {
        var k = 0, e = function(b) {
            d.event.simulate(a, b.target, d.event.fix(b), !0)
        };
        d.event.special[a] = {setup: function() {
                k++ === 0 && c.addEventListener(b, e, !0)
            }, teardown: function() {
                --k === 0 && c.removeEventListener(b, e, !0)
            }}
    });
    d.fn.extend({on: function(b, a, c, e, g) {
            var l, f;
            if (typeof b === "object") {
                typeof a !== "string" && (c = c || a, a = h);
                for (f in b)
                    this.on(f, a, c, b[f], g);
                return this
            }
            c == null && e == null ? (e = a, c = a = h) : e == null && (typeof a === "string" ? (e = c, c =
                    h) : (e = c, c = a, a = h));
            if (e === !1)
                e = A;
            else if (!e)
                return this;
            if (g === 1)
                l = e, e = function(b) {
                    d().off(b);
                    return l.apply(this, arguments)
                }, e.guid = l.guid || (l.guid = d.guid++);
            return this.each(function() {
                d.event.add(this, b, e, c, a)
            })
        }, one: function(b, a, d, c) {
            return this.on(b, a, d, c, 1)
        }, off: function(b, a, c) {
            var e;
            if (b && b.preventDefault && b.handleObj)
                return e = b.handleObj, d(b.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if (typeof b === "object") {
                for (e in b)
                    this.off(e, a, b[e]);
                return this
            }
            if (a === !1 || typeof a === "function")
                c = a, a = h;
            c === !1 && (c = A);
            return this.each(function() {
                d.event.remove(this, b, c, a)
            })
        }, bind: function(b, a, d) {
            return this.on(b, null, a, d)
        }, unbind: function(b, a) {
            return this.off(b, null, a)
        }, live: function(b, a, c) {
            d(this.context).on(b, this.selector, a, c);
            return this
        }, die: function(b, a) {
            d(this.context).off(b, this.selector || "**", a);
            return this
        }, delegate: function(b, a, d, c) {
            return this.on(a, b, d, c)
        }, undelegate: function(b, a, d) {
            return arguments.length === 1 ? this.off(b, "**") : this.off(a,
                    b || "**", d)
        }, trigger: function(b, a) {
            return this.each(function() {
                d.event.trigger(b, a, this)
            })
        }, triggerHandler: function(b, a) {
            if (this[0])
                return d.event.trigger(b, a, this[0], !0)
        }, toggle: function(b) {
            var a = arguments, c = b.guid || d.guid++, e = 0, g = function(c) {
                var k = (d._data(this, "lastToggle" + b.guid) || 0) % e;
                d._data(this, "lastToggle" + b.guid, k + 1);
                c.preventDefault();
                return a[k].apply(this, arguments) || !1
            };
            for (g.guid = c; e < a.length; )
                a[e++].guid = c;
            return this.click(g)
        }, hover: function(b, a) {
            return this.mouseenter(b).mouseleave(a ||
                    b)
        }});
    d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(b, a) {
        d.fn[a] = function(b, d) {
            d == null && (d = b, b = null);
            return arguments.length > 0 ? this.on(a, null, b, d) : this.trigger(a)
        };
        if (Bb.test(a))
            d.event.fixHooks[a] = d.event.keyHooks;
        if (Cb.test(a))
            d.event.fixHooks[a] = d.event.mouseHooks
    });
    (function(b, a) {
        function c(b, a, d, i) {
            var d = d || [], a =
                    a || I, k, e, g, l, f = a.nodeType;
            if (!b || typeof b !== "string")
                return d;
            if (f !== 1 && f !== 9)
                return[];
            g = N(a);
            if (!g && !i && (k = aa.exec(b)))
                if (l = k[1])
                    if (f === 9)
                        if ((e = a.getElementById(l)) && e.parentNode) {
                            if (e.id === l)
                                return d.push(e), d
                        } else
                            return d;
                    else {
                        if (a.ownerDocument && (e = a.ownerDocument.getElementById(l)) && x(a, e) && e.id === l)
                            return d.push(e), d
                    }
                else if (k[2])
                    return ga.apply(d, ha.call(a.getElementsByTagName(b), 0)), d;
                else if ((l = k[3]) && ba && a.getElementsByClassName)
                    return ga.apply(d, ha.call(a.getElementsByClassName(l), 0)),
                            d;
            return u(b.replace(ra, "$1"), a, d, i, g)
        }
        function e(b) {
            return function(a) {
                return a.nodeName.toLowerCase() === "input" && a.type === b
            }
        }
        function g(b) {
            return function(a) {
                var d = a.nodeName.toLowerCase();
                return(d === "input" || d === "button") && a.type === b
            }
        }
        function l(b) {
            return D(function(a) {
                a = +a;
                return D(function(d, c) {
                    for (var i, e = b([], d.length, a), k = e.length; k--; )
                        if (d[i = e[k]])
                            d[i] = !(c[i] = d[i])
                })
            })
        }
        function f(b, a, d) {
            if (b === a)
                return d;
            for (b = b.nextSibling; b; ) {
                if (b === a)
                    return-1;
                b = b.nextSibling
            }
            return 1
        }
        function j(b, a) {
            var d,
                    i, e, g, l, f, w;
            if (l = za[t][b + " "])
                return a ? 0 : l.slice(0);
            l = b;
            f = [];
            for (w = n.preFilter; l; ) {
                if (!d || (i = X.exec(l)))
                    i && (l = l.slice(i[0].length) || l), f.push(e = []);
                d = !1;
                if (i = da.exec(l))
                    e.push(d = new H(i.shift())), l = l.slice(d.length), d.type = i[0].replace(ra, " ");
                for (g in n.filter)
                    if ((i = V[g].exec(l)) && (!w[g] || (i = w[g](i))))
                        e.push(d = new H(i.shift())), l = l.slice(d.length), d.type = g, d.matches = i;
                if (!d)
                    break
            }
            return a ? l.length : l ? c.error(b) : za(b, f).slice(0)
        }
        function h(b, a, d) {
            var c = a.dir, i = d && a.dir === "parentNode", e = L++;
            return a.first ?
                    function(a, d, e) {
                        for (; a = a[c]; )
                            if (i || a.nodeType === 1)
                                return b(a, d, e)
                    } : function(a, d, k) {
                if (k)
                    for (; a = a[c]; ) {
                        if ((i || a.nodeType === 1) && b(a, d, k))
                            return a
                    }
                else
                    for (var g, l = F + " " + e + " ", f = l + $; a = a[c]; )
                        if (i || a.nodeType === 1)
                            if ((g = a[t]) === f)
                                return a.sizset;
                            else if (typeof g === "string" && g.indexOf(l) === 0) {
                                if (a.sizset)
                                    return a
                            } else {
                                a[t] = f;
                                if (b(a, d, k))
                                    return a.sizset = !0, a;
                                a.sizset = !1
                            }
            }
        }
        function p(b) {
            return b.length > 1 ? function(a, d, c) {
                for (var i = b.length; i--; )
                    if (!b[i](a, d, c))
                        return!1;
                return!0
            } : b[0]
        }
        function v(b, a, d, c, i) {
            for (var e,
                    k = [], g = 0, l = b.length, f = a != null; g < l; g++)
                if (e = b[g])
                    if (!d || d(e, c, i))
                        k.push(e), f && a.push(g);
            return k
        }
        function q(b, a, d, i, e, g) {
            i && !i[t] && (i = q(i));
            e && !e[t] && (e = q(e, g));
            return D(function(g, l, f, j) {
                var w, h, p = [], q = [], o = l.length, P;
                if (!(P = g)) {
                    P = a || "*";
                    for (var B = f.nodeType ? [f] : f, m = [], y = 0, u = B.length; y < u; y++)
                        c(P, B[y], m);
                    P = m
                }
                P = b && (g || !a) ? v(P, p, b, f, j) : P;
                B = d ? e || (g ? b : o || i) ? [] : l : P;
                d && d(P, B, f, j);
                if (i) {
                    w = v(B, q);
                    i(w, [], f, j);
                    for (f = w.length; f--; )
                        if (h = w[f])
                            B[q[f]] = !(P[q[f]] = h)
                }
                if (g) {
                    if (e || b) {
                        if (e) {
                            w = [];
                            for (f = B.length; f--; )
                                if (h =
                                        B[f])
                                    w.push(P[f] = h);
                            e(null, B = [], w, j)
                        }
                        for (f = B.length; f--; )
                            if ((h = B[f]) && (w = e ? A.call(g, h) : p[f]) > -1)
                                g[w] = !(l[w] = h)
                    }
                } else
                    B = v(B === l ? B.splice(o, B.length) : B), e ? e(null, l, B, j) : ga.apply(l, B)
            })
        }
        function o(b) {
            var a, d, c, i = b.length, e = n.relative[b[0].type];
            d = e || n.relative[" "];
            for (var k = e ? 1 : 0, g = h(function(b) {
                return b === a
            }, d, !0), l = h(function(b) {
                return A.call(a, b) > -1
            }, d, !0), f = [function(b, d, c) {
                    return!e && (c || d !== J) || ((a = d).nodeType ? g(b, d, c) : l(b, d, c))
                }]; k < i; k++)
                if (d = n.relative[b[k].type])
                    f = [h(p(f), d)];
                else {
                    d = n.filter[b[k].type].apply(null,
                            b[k].matches);
                    if (d[t]) {
                        for (c = ++k; c < i; c++)
                            if (n.relative[b[c].type])
                                break;
                        return q(k > 1 && p(f), k > 1 && b.slice(0, k - 1).join("").replace(ra, "$1"), d, k < c && o(b.slice(k, c)), c < i && o(b = b.slice(c)), c < i && b.join(""))
                    }
                    f.push(d)
                }
            return p(f)
        }
        function m(b, a) {
            var d = a.length > 0, i = b.length > 0, e = function(g, l, f, j, w) {
                var h, p, q = [], o = 0, B = "0", P = g && [], m = w != null, y = J, u = g || i && n.find.TAG("*", w && l.parentNode || l), s = F += y == null ? 1 : Math.E;
                if (m)
                    J = l !== I && l, $ = e.el;
                for (; (w = u[B]) != null; B++) {
                    if (i && w) {
                        for (h = 0; p = b[h]; h++)
                            if (p(w, l, f)) {
                                j.push(w);
                                break
                            }
                        m &&
                                (F = s, $ = ++e.el)
                    }
                    d && ((w = !p && w) && o--, g && P.push(w))
                }
                o += B;
                if (d && B !== o) {
                    for (h = 0; p = a[h]; h++)
                        p(P, q, l, f);
                    if (g) {
                        if (o > 0)
                            for (; B--; )
                                !P[B] && !q[B] && (q[B] = ya.call(j));
                        q = v(q)
                    }
                    ga.apply(j, q);
                    m && !g && q.length > 0 && o + a.length > 1 && c.uniqueSort(j)
                }
                m && (F = s, J = y);
                return P
            };
            e.el = 0;
            return d ? D(e) : e
        }
        function u(b, a, d, c, i) {
            var e, k, g, l, f = j(b);
            if (!c && f.length === 1) {
                k = f[0] = f[0].slice(0);
                if (k.length > 2 && (g = k[0]).type === "ID" && a.nodeType === 9 && !i && n.relative[k[1].type]) {
                    a = n.find.ID(g.matches[0].replace(Y, ""), a, i)[0];
                    if (!a)
                        return d;
                    b = b.slice(k.shift().length)
                }
                for (e =
                        V.POS.test(b) ? -1 : k.length - 1; e >= 0; e--) {
                    g = k[e];
                    if (n.relative[l = g.type])
                        break;
                    if (l = n.find[l])
                        if (c = l(g.matches[0].replace(Y, ""), R.test(k[0].type) && a.parentNode || a, i)) {
                            k.splice(e, 1);
                            b = c.length && k.join("");
                            if (!b)
                                return ga.apply(d, ha.call(c, 0)), d;
                            break
                        }
                }
            }
            K(b, f)(c, a, i, d, R.test(b));
            return d
        }
        function s() {
        }
        var $, z, n, r, N, x, K, E, C, J, Z = !0, t = ("sizcache" + Math.random()).replace(".", ""), H = String, I = b.document, O = I.documentElement, F = 0, L = 0, ya = [].pop, ga = [].push, ha = [].slice, A = [].indexOf || function(b) {
            for (var a = 0, d = this.length; a <
                    d; a++)
                if (this[a] === b)
                    return a;
            return-1
        }, D = function(b, a) {
            b[t] = a == null || a;
            return b
        }, ea = function() {
            var b = {}, a = [];
            return D(function(d, c) {
                a.push(d) > n.cacheLength && delete b[a.shift()];
                return b[d + " "] = c
            }, b)
        }, M = ea(), za = ea(), T = ea(), ea = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w#") + ")|)|)[\\x20\\t\\r\\n\\f]*\\]", Q = ":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" +
                ea + ")|[^:]|\\\\.)*|.*))\\)|)", ra = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"), X = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, da = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/, U = RegExp(Q), aa = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, R = /[\x20\t\r\n\f]*[+~]/, ka = /h\d/i, Ga = /input|select|textarea|button/i, Y = /\\(?!\\)/g, V = {ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/, CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/, NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/, TAG: RegExp("^(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w",
                    "w*") + ")"), ATTR: RegExp("^" + ea), PSEUDO: RegExp("^" + Q), POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i, CHILD: RegExp("^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"), needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                    "i")}, S = function(b) {
            var a = I.createElement("div");
            try {
                return b(a)
            } catch (d) {
                return!1
            } finally {
            }
        }, ea = S(function(b) {
            b.appendChild(I.createComment(""));
            return!b.getElementsByTagName("*").length
        }), W = S(function(b) {
            b.innerHTML = "<a href='#'></a>";
            return b.firstChild && typeof b.firstChild.getAttribute !== "undefined" && b.firstChild.getAttribute("href") === "#"
        }), fa = S(function(b) {
            b.innerHTML = "<select></select>";
            b = typeof b.lastChild.getAttribute("multiple");
            return b !== "boolean" && b !== "string"
        }), ba = S(function(b) {
            b.innerHTML =
                    "<div class='hidden e'></div><div class='hidden'></div>";
            if (!b.getElementsByClassName || !b.getElementsByClassName("e").length)
                return!1;
            b.lastChild.className = "e";
            return b.getElementsByClassName("e").length === 2
        }), Fa = S(function(b) {
            b.id = t + 0;
            b.innerHTML = "<a name='" + t + "'></a><div name='" + t + "'></div>";
            O.insertBefore(b, O.firstChild);
            var a = I.getElementsByName && I.getElementsByName(t).length === 2 + I.getElementsByName(t + 0).length;
            z = !I.getElementById(t);
            O.removeChild(b);
            return a
        });
        try {
            ha.call(O.childNodes, 0)
        } catch (la) {
            ha =
                    function(b) {
                        for (var a, d = []; a = this[b]; b++)
                            d.push(a);
                        return d
                    }
        }
        c.matches = function(b, a) {
            return c(b, null, null, a)
        };
        c.matchesSelector = function(b, a) {
            return c(a, null, null, [b]).length > 0
        };
        r = c.getText = function(b) {
            var a, d = "", c = 0;
            if (a = b.nodeType)
                if (a === 1 || a === 9 || a === 11)
                    if (typeof b.textContent === "string")
                        return b.textContent;
                    else
                        for (b = b.firstChild; b; b = b.nextSibling)
                            d += r(b);
                else {
                    if (a === 3 || a === 4)
                        return b.nodeValue
                }
            else
                for (; a = b[c]; c++)
                    d += r(a);
            return d
        };
        N = c.isXML = function(b) {
            return(b = b && (b.ownerDocument || b).documentElement) ?
                    b.nodeName !== "HTML" : !1
        };
        x = c.contains = O.contains ? function(b, a) {
            var d = b.nodeType === 9 ? b.documentElement : b, c = a && a.parentNode;
            return b === c || !(!c || !(c.nodeType === 1 && d.contains && d.contains(c)))
        } : O.compareDocumentPosition ? function(b, a) {
            return a && !!(b.compareDocumentPosition(a) & 16)
        } : function(b, a) {
            for (; a = a.parentNode; )
                if (a === b)
                    return!0;
            return!1
        };
        c.attr = function(b, a) {
            var d, c = N(b);
            c || (a = a.toLowerCase());
            if (d = n.attrHandle[a])
                return d(b);
            if (c || fa)
                return b.getAttribute(a);
            return(d = b.getAttributeNode(a)) ? typeof b[a] ===
                    "boolean" ? b[a] ? a : null : d.specified ? d.value : null : null
        };
        n = c.selectors = {cacheLength: 50, createPseudo: D, match: V, attrHandle: W ? {} : {href: function(b) {
                    return b.getAttribute("href", 2)
                }, type: function(b) {
                    return b.getAttribute("type")
                }}, find: {ID: z ? function(b, a, d) {
                    if (typeof a.getElementById !== "undefined" && !d)
                        return(b = a.getElementById(b)) && b.parentNode ? [b] : []
                } : function(b, d, c) {
                    if (typeof d.getElementById !== "undefined" && !c)
                        return(d = d.getElementById(b)) ? d.id === b || typeof d.getAttributeNode !== "undefined" && d.getAttributeNode("id").value ===
                                b ? [d] : a : []
                }, TAG: ea ? function(b, a) {
                    if (typeof a.getElementsByTagName !== "undefined")
                        return a.getElementsByTagName(b)
                } : function(b, a) {
                    var d = a.getElementsByTagName(b);
                    if (b === "*") {
                        for (var c, i = [], e = 0; c = d[e]; e++)
                            c.nodeType === 1 && i.push(c);
                        return i
                    }
                    return d
                }, NAME: Fa && function(b, a) {
                    if (typeof a.getElementsByName !== "undefined")
                        return a.getElementsByName(name)
                }, CLASS: ba && function(b, a, d) {
                    if (typeof a.getElementsByClassName !== "undefined" && !d)
                        return a.getElementsByClassName(b)
                }}, relative: {">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function(b) {
                    b[1] = b[1].replace(Y, "");
                    b[3] = (b[4] || b[5] || "").replace(Y, "");
                    b[2] === "~=" && (b[3] = " " + b[3] + " ");
                    return b.slice(0, 4)
                }, CHILD: function(b) {
                    b[1] = b[1].toLowerCase();
                    b[1] === "nth" ? (b[2] || c.error(b[0]), b[3] = +(b[3] ? b[4] + (b[5] || 1) : 2 * (b[2] === "even" || b[2] === "odd")), b[4] = +(b[6] + b[7] || b[2] === "odd")) : b[2] && c.error(b[0]);
                    return b
                }, PSEUDO: function(b) {
                    var a, d;
                    if (V.CHILD.test(b[0]))
                        return null;
                    if (b[3])
                        b[2] =
                                b[3];
                    else if (a = b[4]) {
                        if (U.test(a) && (d = j(a, !0)) && (d = a.indexOf(")", a.length - d) - a.length))
                            a = a.slice(0, d), b[0] = b[0].slice(0, d);
                        b[2] = a
                    }
                    return b.slice(0, 3)
                }}, filter: {ID: z ? function(b) {
                    b = b.replace(Y, "");
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                } : function(b) {
                    b = b.replace(Y, "");
                    return function(a) {
                        return(a = typeof a.getAttributeNode !== "undefined" && a.getAttributeNode("id")) && a.value === b
                    }
                }, TAG: function(b) {
                    if (b === "*")
                        return function() {
                            return!0
                        };
                    b = b.replace(Y, "").toLowerCase();
                    return function(a) {
                        return a.nodeName &&
                                a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function(b) {
                    var a = M[t][b + " "];
                    return a || (a = RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)")) && M(b, function(b) {
                        return a.test(b.className || typeof b.getAttribute !== "undefined" && b.getAttribute("class") || "")
                    })
                }, ATTR: function(b, a, d) {
                    return function(i) {
                        i = c.attr(i, b);
                        if (i == null)
                            return a === "!=";
                        if (!a)
                            return!0;
                        i += "";
                        return a === "=" ? i === d : a === "!=" ? i !== d : a === "^=" ? d && i.indexOf(d) === 0 : a === "*=" ? d && i.indexOf(d) > -1 : a === "$=" ? d && i.substr(i.length - d.length) === d : a === "~=" ?
                                (" " + i + " ").indexOf(d) > -1 : a === "|=" ? i === d || i.substr(0, d.length + 1) === d + "-" : !1
                    }
                }, CHILD: function(b, a, d, c) {
                    if (b === "nth")
                        return function(b) {
                            var a, i;
                            a = b.parentNode;
                            if (d === 1 && c === 0)
                                return!0;
                            if (a) {
                                i = 0;
                                for (a = a.firstChild; a; a = a.nextSibling)
                                    if (a.nodeType === 1 && (i++, b === a))
                                        break
                            }
                            i -= c;
                            return i === d || i % d === 0 && i / d >= 0
                        };
                    return function(a) {
                        var d = a;
                        switch (b) {
                            case "only":
                            case "first":
                                for (; d = d.previousSibling; )
                                    if (d.nodeType === 1)
                                        return!1;
                                if (b === "first")
                                    return!0;
                                d = a;
                            case "last":
                                for (; d = d.nextSibling; )
                                    if (d.nodeType === 1)
                                        return!1;
                                return!0
                            }
                    }
                }, PSEUDO: function(b, a) {
                    var d, i = n.pseudos[b] || n.setFilters[b.toLowerCase()] || c.error("unsupported pseudo: " + b);
                    if (i[t])
                        return i(a);
                    if (i.length > 1)
                        return d = [b, b, "", a], n.setFilters.hasOwnProperty(b.toLowerCase()) ? D(function(b, d) {
                            for (var c, e = i(b, a), k = e.length; k--; )
                                c = A.call(b, e[k]), b[c] = !(d[c] = e[k])
                        }) : function(b) {
                            return i(b, 0, d)
                        };
                    return i
                }}, pseudos: {not: D(function(b) {
                    var a = [], d = [], c = K(b.replace(ra, "$1"));
                    return c[t] ? D(function(b, a, d, i) {
                        for (var i = c(b, null, i, []), e = b.length; e--; )
                            if (d = i[e])
                                b[e] = !(a[e] =
                                        d)
                    }) : function(b, i, e) {
                        a[0] = b;
                        c(a, null, e, d);
                        return!d.pop()
                    }
                }), has: D(function(b) {
                    return function(a) {
                        return c(b, a).length > 0
                    }
                }), contains: D(function(b) {
                    return function(a) {
                        return(a.textContent || a.innerText || r(a)).indexOf(b) > -1
                    }
                }), enabled: function(b) {
                    return b.disabled === !1
                }, disabled: function(b) {
                    return b.disabled === !0
                }, checked: function(b) {
                    var a = b.nodeName.toLowerCase();
                    return a === "input" && !!b.checked || a === "option" && !!b.selected
                }, selected: function(b) {
                    return b.selected === !0
                }, parent: function(b) {
                    return!n.pseudos.empty(b)
                },
                empty: function(b) {
                    for (var a, b = b.firstChild; b; ) {
                        if (b.nodeName > "@" || (a = b.nodeType) === 3 || a === 4)
                            return!1;
                        b = b.nextSibling
                    }
                    return!0
                }, header: function(b) {
                    return ka.test(b.nodeName)
                }, text: function(b) {
                    var a, d;
                    return b.nodeName.toLowerCase() === "input" && (a = b.type) === "text" && ((d = b.getAttribute("type")) == null || d.toLowerCase() === a)
                }, radio: e("radio"), checkbox: e("checkbox"), file: e("file"), password: e("password"), image: e("image"), submit: g("submit"), reset: g("reset"), button: function(b) {
                    var a = b.nodeName.toLowerCase();
                    return a === "input" && b.type === "button" || a === "button"
                }, input: function(b) {
                    return Ga.test(b.nodeName)
                }, focus: function(b) {
                    var a = b.ownerDocument;
                    return b === a.activeElement && (!a.hasFocus || a.hasFocus()) && !(!b.type && !b.href && !~b.tabIndex)
                }, active: function(b) {
                    return b === b.ownerDocument.activeElement
                }, first: l(function() {
                    return[0]
                }), last: l(function(b, a) {
                    return[a - 1]
                }), eq: l(function(b, a, d) {
                    return[d < 0 ? d + a : d]
                }), even: l(function(b, a) {
                    for (var d = 0; d < a; d += 2)
                        b.push(d);
                    return b
                }), odd: l(function(b, a) {
                    for (var d = 1; d < a; d +=
                            2)
                        b.push(d);
                    return b
                }), lt: l(function(b, a, d) {
                    for (a = d < 0?d + a:d; --a >= 0; )
                        b.push(a);
                    return b
                }), gt: l(function(b, a, d) {
                    for (d = d < 0?d + a:d; ++d < a; )
                        b.push(d);
                    return b
                })}};
        E = O.compareDocumentPosition ? function(b, a) {
            if (b === a)
                return C = !0, 0;
            return(!b.compareDocumentPosition || !a.compareDocumentPosition ? b.compareDocumentPosition : b.compareDocumentPosition(a) & 4) ? -1 : 1
        } : function(b, a) {
            if (b === a)
                return C = !0, 0;
            else if (b.sourceIndex && a.sourceIndex)
                return b.sourceIndex - a.sourceIndex;
            var d, c, i = [], e = [];
            d = b.parentNode;
            c = a.parentNode;
            var k = d;
            if (d === c)
                return f(b, a);
            else if (d) {
                if (!c)
                    return 1
            } else
                return-1;
            for (; k; )
                i.unshift(k), k = k.parentNode;
            for (k = c; k; )
                e.unshift(k), k = k.parentNode;
            d = i.length;
            c = e.length;
            for (k = 0; k < d && k < c; k++)
                if (i[k] !== e[k])
                    return f(i[k], e[k]);
            return k === d ? f(b, e[k], -1) : f(i[k], a, 1)
        };
        [0, 0].sort(E);
        Z = !C;
        c.uniqueSort = function(b) {
            var a, d = [], c = 1, i = 0;
            C = Z;
            b.sort(E);
            if (C) {
                for (; a = b[c]; c++)
                    a === b[c - 1] && (i = d.push(c));
                for (; i--; )
                    b.splice(d[i], 1)
            }
            return b
        };
        c.error = function(b) {
            throw Error("Syntax error, unrecognized expression: " + b);
        };
        K = c.compile = function(b, a) {
            var d, c = [], i = [], e = T[t][b + " "];
            if (!e) {
                a || (a = j(b));
                for (d = a.length; d--; )
                    e = o(a[d]), e[t] ? c.push(e) : i.push(e);
                e = T(b, m(i, c))
            }
            return e
        };
        I.querySelectorAll && function() {
            var b, a = u, d = /'|\\/g, i = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, e = [":focus"], g = [":active"], l = O.matchesSelector || O.mozMatchesSelector || O.webkitMatchesSelector || O.oMatchesSelector || O.msMatchesSelector;
            S(function(b) {
                b.innerHTML = "<select><option selected=''></option></select>";
                b.querySelectorAll("[selected]").length ||
                        e.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
                b.querySelectorAll(":checked").length || e.push(":checked")
            });
            S(function(b) {
                b.innerHTML = "<p test=''></p>";
                b.querySelectorAll("[test^='']").length && e.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
                b.innerHTML = "<input type='hidden'/>";
                b.querySelectorAll(":enabled").length || e.push(":enabled", ":disabled")
            });
            e = RegExp(e.join("|"));
            u = function(b, c, i, k, g) {
                if (!k && !g && !e.test(b)) {
                    var l, f, w = !0, h = t;
                    f = c;
                    l = c.nodeType === 9 &&
                            b;
                    if (c.nodeType === 1 && c.nodeName.toLowerCase() !== "object") {
                        l = j(b);
                        (w = c.getAttribute("id")) ? h = w.replace(d, "\\$&") : c.setAttribute("id", h);
                        h = "[id='" + h + "'] ";
                        for (f = l.length; f--; )
                            l[f] = h + l[f].join("");
                        f = R.test(b) && c.parentNode || c;
                        l = l.join(",")
                    }
                    if (l)
                        try {
                            return ga.apply(i, ha.call(f.querySelectorAll(l), 0)), i
                        } catch (p) {
                        } finally {
                            w || c.removeAttribute("id")
                        }
                }
                return a(b, c, i, k, g)
            };
            if (l)
                S(function(a) {
                    b = l.call(a, "div");
                    try {
                        l.call(a, "[test!='']:sizzle"), g.push("!=", Q)
                    } catch (d) {
                    }
                }), g = RegExp(g.join("|")), c.matchesSelector =
                        function(a, d) {
                            d = d.replace(i, "='$1']");
                            if (!N(a) && !g.test(d) && !e.test(d))
                                try {
                                    var f = l.call(a, d);
                                    if (f || b || a.document && a.document.nodeType !== 11)
                                        return f
                                } catch (j) {
                                }
                            return c(d, null, null, [a]).length > 0
                        }
        }();
        n.pseudos.nth = n.pseudos.eq;
        n.filters = s.prototype = n.pseudos;
        n.setFilters = new s;
        c.attr = d.attr;
        d.find = c;
        d.expr = c.selectors;
        d.expr[":"] = d.expr.pseudos;
        d.unique = c.uniqueSort;
        d.text = c.getText;
        d.isXMLDoc = c.isXML;
        d.contains = c.contains
    })(e);
    var Db = /Until$/, Eb = /^(?:parents|prev(?:Until|All))/, qb = /^.[^:#\[\.,]*$/,
            $a = d.expr.match.needsContext, Fb = {children: !0, contents: !0, next: !0, prev: !0};
    d.fn.extend({find: function(b) {
            var a, c, e, g, l, f, j = this;
            if (typeof b !== "string")
                return d(b).filter(function() {
                    a = 0;
                    for (c = j.length; a < c; a++)
                        if (d.contains(j[a], this))
                            return!0
                });
            f = this.pushStack("", "find", b);
            a = 0;
            for (c = this.length; a < c; a++)
                if (e = f.length, d.find(b, this[a], f), a > 0)
                    for (g = e; g < f.length; g++)
                        for (l = 0; l < e; l++)
                            if (f[l] === f[g]) {
                                f.splice(g--, 1);
                                break
                            }
            return f
        }, has: function(b) {
            var a, c = d(b, this), e = c.length;
            return this.filter(function() {
                for (a =
                        0; a < e; a++)
                    if (d.contains(this, c[a]))
                        return!0
            })
        }, not: function(b) {
            return this.pushStack(C(this, b, !1), "not", b)
        }, filter: function(b) {
            return this.pushStack(C(this, b, !0), "filter", b)
        }, is: function(b) {
            return!!b && (typeof b === "string" ? $a.test(b) ? d(b, this.context).index(this[0]) >= 0 : d.filter(b, this).length > 0 : this.filter(b).length > 0)
        }, closest: function(b, a) {
            for (var c, e = 0, g = this.length, l = [], f = $a.test(b) || typeof b !== "string" ? d(b, a || this.context) : 0; e < g; e++)
                for (c = this[e]; c && c.ownerDocument && c !== a && c.nodeType !== 11; ) {
                    if (f ?
                            f.index(c) > -1 : d.find.matchesSelector(c, b)) {
                        l.push(c);
                        break
                    }
                    c = c.parentNode
                }
            l = l.length > 1 ? d.unique(l) : l;
            return this.pushStack(l, "closest", b)
        }, index: function(b) {
            if (!b)
                return this[0] && this[0].parentNode ? this.prevAll().length : -1;
            if (typeof b === "string")
                return d.inArray(this[0], d(b));
            return d.inArray(b.jquery ? b[0] : b, this)
        }, add: function(b, a) {
            var c = typeof b === "string" ? d(b, a) : d.makeArray(b && b.nodeType ? [b] : b), e = d.merge(this.get(), c);
            return this.pushStack(J(c[0]) || J(e[0]) ? e : d.unique(e))
        }, addBack: function(b) {
            return this.add(b ==
                    null ? this.prevObject : this.prevObject.filter(b))
        }});
    d.fn.andSelf = d.fn.addBack;
    d.each({parent: function(b) {
            return(b = b.parentNode) && b.nodeType !== 11 ? b : null
        }, parents: function(b) {
            return d.dir(b, "parentNode")
        }, parentsUntil: function(b, a, c) {
            return d.dir(b, "parentNode", c)
        }, next: function(b) {
            return E(b, "nextSibling")
        }, prev: function(b) {
            return E(b, "previousSibling")
        }, nextAll: function(b) {
            return d.dir(b, "nextSibling")
        }, prevAll: function(b) {
            return d.dir(b, "previousSibling")
        }, nextUntil: function(b, a, c) {
            return d.dir(b,
                    "nextSibling", c)
        }, prevUntil: function(b, a, c) {
            return d.dir(b, "previousSibling", c)
        }, siblings: function(b) {
            return d.sibling((b.parentNode || {}).firstChild, b)
        }, children: function(b) {
            return d.sibling(b.firstChild)
        }, contents: function(b) {
            return d.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : d.merge([], b.childNodes)
        }}, function(b, a) {
        d.fn[b] = function(c, e) {
            var g = d.map(this, a, c);
            Db.test(b) || (e = c);
            e && typeof e === "string" && (g = d.filter(e, g));
            g = this.length > 1 && !Fb[b] ? d.unique(g) : g;
            this.length > 1 && Eb.test(b) &&
                    (g = g.reverse());
            return this.pushStack(g, b, m.call(arguments).join(","))
        }
    });
    d.extend({filter: function(b, a, c) {
            c && (b = ":not(" + b + ")");
            return a.length === 1 ? d.find.matchesSelector(a[0], b) ? [a[0]] : [] : d.find.matches(b, a)
        }, dir: function(b, a, c) {
            for (var e = [], b = b[a]; b && b.nodeType !== 9 && (c === h || b.nodeType !== 1 || !d(b).is(c)); )
                b.nodeType === 1 && e.push(b), b = b[a];
            return e
        }, sibling: function(b, a) {
            for (var d = []; b; b = b.nextSibling)
                b.nodeType === 1 && b !== a && d.push(b);
            return d
        }});
    var Oa = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Gb = / jQuery\d+="(?:null|\d+)"/g, Ia = /^\s+/, ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bb = /<([\w:]+)/, Hb = /<tbody/i, Ib = /<|&#?\w+;/, Jb = /<(?:script|style|link)/i, Kb = /<(?:script|object|embed|option|style)/i, Ja = RegExp("<(?:" + Oa + ")[\\s/>]", "i"), Pa = /^(?:checkbox|radio)$/, cb = /checked\s*(?:[^=]|=\s*.checked.)/i, Lb = /\/(java|ecma)script/i, Mb = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, ca = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""]}, db = L(c), Ka = db.appendChild(c.createElement("div"));
    ca.optgroup = ca.option;
    ca.tbody = ca.tfoot = ca.colgroup = ca.caption = ca.thead;
    ca.th = ca.td;
    if (!d.support.htmlSerialize)
        ca._default = [1, "X<div>", "</div>"];
    d.fn.extend({text: function(b) {
            return d.access(this, function(b) {
                return b ===
                        h ? d.text(this) : this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(b))
            }, null, b, arguments.length)
        }, wrapAll: function(b) {
            if (d.isFunction(b))
                return this.each(function(a) {
                    d(this).wrapAll(b.call(this, a))
                });
            if (this[0]) {
                var a = d(b, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && a.insertBefore(this[0]);
                a.map(function() {
                    for (var b = this; b.firstChild && b.firstChild.nodeType === 1; )
                        b = b.firstChild;
                    return b
                }).append(this)
            }
            return this
        }, wrapInner: function(b) {
            if (d.isFunction(b))
                return this.each(function(a) {
                    d(this).wrapInner(b.call(this,
                            a))
                });
            return this.each(function() {
                var a = d(this), c = a.contents();
                c.length ? c.wrapAll(b) : a.append(b)
            })
        }, wrap: function(b) {
            var a = d.isFunction(b);
            return this.each(function(c) {
                d(this).wrapAll(a ? b.call(this, c) : b)
            })
        }, unwrap: function() {
            return this.parent().each(function() {
                d.nodeName(this, "body") || d(this).replaceWith(this.childNodes)
            }).end()
        }, append: function() {
            return this.domManip(arguments, !0, function(b) {
                (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(b)
            })
        }, prepend: function() {
            return this.domManip(arguments,
                    !0, function(b) {
                        (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(b, this.firstChild)
                    })
        }, before: function() {
            if (!J(this[0]))
                return this.domManip(arguments, !1, function(b) {
                    this.parentNode.insertBefore(b, this)
                });
            if (arguments.length) {
                var b = d.clean(arguments);
                return this.pushStack(d.merge(b, this), "before", this.selector)
            }
        }, after: function() {
            if (!J(this[0]))
                return this.domManip(arguments, !1, function(b) {
                    this.parentNode.insertBefore(b, this.nextSibling)
                });
            if (arguments.length) {
                var b = d.clean(arguments);
                return this.pushStack(d.merge(this,
                        b), "after", this.selector)
            }
        }, remove: function(b, a) {
            for (var c, e = 0; (c = this[e]) != null; e++)
                if (!b || d.filter(b, [c]).length)
                    !a && c.nodeType === 1 && (d.cleanData(c.getElementsByTagName("*")), d.cleanData([c])), c.parentNode && c.parentNode.removeChild(c);
            return this
        }, empty: function() {
            for (var b, a = 0; (b = this[a]) != null; a++)
                for (b.nodeType === 1 && d.cleanData(b.getElementsByTagName("*")); b.firstChild; )
                    b.removeChild(b.firstChild);
            return this
        }, clone: function(b, a) {
            b = b == null ? !1 : b;
            a = a == null ? b : a;
            return this.map(function() {
                return d.clone(this,
                        b, a)
            })
        }, html: function(b) {
            return d.access(this, function(b) {
                var a = this[0] || {}, c = 0, e = this.length;
                if (b === h)
                    return a.nodeType === 1 ? a.innerHTML.replace(Gb, "") : h;
                if (typeof b === "string" && !Jb.test(b) && (d.support.htmlSerialize || !Ja.test(b)) && (d.support.leadingWhitespace || !Ia.test(b)) && !ca[(bb.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = b.replace(ab, "<$1></$2>");
                    try {
                        for (; c < e; c++)
                            if (a = this[c] || {}, a.nodeType === 1)
                                d.cleanData(a.getElementsByTagName("*")), a.innerHTML = b;
                        a = 0
                    } catch (g) {
                    }
                }
                a && this.empty().append(b)
            }, null, b,
                    arguments.length)
        }, replaceWith: function(b) {
            if (!J(this[0])) {
                if (d.isFunction(b))
                    return this.each(function(a) {
                        var c = d(this), e = c.html();
                        c.replaceWith(b.call(this, a, e))
                    });
                typeof b !== "string" && (b = d(b).detach());
                return this.each(function() {
                    var a = this.nextSibling, c = this.parentNode;
                    d(this).remove();
                    a ? d(a).before(b) : d(c).append(b)
                })
            }
            return this.length ? this.pushStack(d(d.isFunction(b) ? b() : b), "replaceWith", b) : this
        }, detach: function(b) {
            return this.remove(b, !0)
        }, domManip: function(b, a, c) {
            var b = [].concat.apply([],
                    b), e, g, l, f = 0, j = b[0], p = [], q = this.length;
            if (!d.support.checkClone && q > 1 && typeof j === "string" && cb.test(j))
                return this.each(function() {
                    d(this).domManip(b, a, c)
                });
            if (d.isFunction(j))
                return this.each(function(e) {
                    var g = d(this);
                    b[0] = j.call(this, e, a ? g.html() : h);
                    g.domManip(b, a, c)
                });
            if (this[0]) {
                e = d.buildFragment(b, this, p);
                l = e.fragment;
                g = l.firstChild;
                l.childNodes.length === 1 && (l = g);
                if (g) {
                    a = a && d.nodeName(g, "tr");
                    for (e = e.cacheable || q - 1; f < q; f++)
                        c.call(a && d.nodeName(this[f], "table") ? this[f].getElementsByTagName("tbody")[0] ||
                                this[f].appendChild(this[f].ownerDocument.createElement("tbody")) : this[f], f === e ? l : d.clone(l, !0, !0))
                }
                l = g = null;
                p.length && d.each(p, function(b, a) {
                    a.src ? d.ajax ? d.ajax({url: a.src, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0}) : d.error("no ajax") : d.globalEval((a.text || a.textContent || a.innerHTML || "").replace(Mb, ""));
                    a.parentNode && a.parentNode.removeChild(a)
                })
            }
            return this
        }});
    d.buildFragment = function(b, a, e) {
        var g, f, l, j = b[0], a = a || c, a = !a.nodeType && a[0] || a, a = a.ownerDocument || a;
        if (b.length === 1 && typeof j ===
                "string" && j.length < 512 && a === c && j.charAt(0) === "<" && !Kb.test(j) && (d.support.checkClone || !cb.test(j)) && (d.support.html5Clone || !Ja.test(j)))
            f = !0, g = d.fragments[j], l = g !== h;
        g || (g = a.createDocumentFragment(), d.clean(b, a, g, e), f && (d.fragments[j] = l && g));
        return{fragment: g, cacheable: f}
    };
    d.fragments = {};
    d.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function(b, a) {
        d.fn[b] = function(c) {
            var e, g = 0, f = [], c = d(c), j = c.length;
            e = this.length === 1 && this[0].parentNode;
            if ((e == null || e && e.nodeType === 11 && e.childNodes.length === 1) && j === 1)
                return c[a](this[0]), this;
            else {
                for (; g < j; g++)
                    e = (g > 0 ? this.clone(!0) : this).get(), d(c[g])[a](e), f = f.concat(e);
                return this.pushStack(f, b, c.selector)
            }
        }
    });
    d.extend({clone: function(b, a, c) {
            var e, g, f, j;
            d.support.html5Clone || d.isXMLDoc(b) || !Ja.test("<" + b.nodeName + ">") ? j = b.cloneNode(!0) : (Ka.innerHTML = b.outerHTML, Ka.removeChild(j = Ka.firstChild));
            if ((!d.support.noCloneEvent || !d.support.noCloneChecked) && (b.nodeType === 1 || b.nodeType === 11) && !d.isXMLDoc(b)) {
                F(b,
                        j);
                e = r(b);
                g = r(j);
                for (f = 0; e[f]; ++f)
                    g[f] && F(e[f], g[f])
            }
            if (a && (x(b, j), c)) {
                e = r(b);
                g = r(j);
                for (f = 0; e[f]; ++f)
                    x(e[f], g[f])
            }
            return j
        }, clean: function(b, a, e, g) {
            var f, l, j, h, p, q, v = a === c && db, o = [];
            if (!a || typeof a.createDocumentFragment === "undefined")
                a = c;
            for (f = 0; (j = b[f]) != null; f++)
                if (typeof j === "number" && (j += ""), j) {
                    if (typeof j === "string")
                        if (Ib.test(j)) {
                            v = v || L(a);
                            q = a.createElement("div");
                            v.appendChild(q);
                            j = j.replace(ab, "<$1></$2>");
                            l = (bb.exec(j) || ["", ""])[1].toLowerCase();
                            h = ca[l] || ca._default;
                            p = h[0];
                            for (q.innerHTML =
                                    h[1] + j + h[2]; p--; )
                                q = q.lastChild;
                            if (!d.support.tbody) {
                                p = Hb.test(j);
                                h = l === "table" && !p ? q.firstChild && q.firstChild.childNodes : h[1] === "<table>" && !p ? q.childNodes : [];
                                for (l = h.length - 1; l >= 0; --l)
                                    d.nodeName(h[l], "tbody") && !h[l].childNodes.length && h[l].parentNode.removeChild(h[l])
                            }
                            !d.support.leadingWhitespace && Ia.test(j) && q.insertBefore(a.createTextNode(Ia.exec(j)[0]), q.firstChild);
                            j = q.childNodes;
                            q.parentNode.removeChild(q)
                        } else
                            j = a.createTextNode(j);
                    j.nodeType ? o.push(j) : d.merge(o, j)
                }
            q && (j = q = v = null);
            if (!d.support.appendChecked)
                for (f =
                        0; (j = o[f]) != null; f++)
                    d.nodeName(j, "input") ? D(j) : typeof j.getElementsByTagName !== "undefined" && d.grep(j.getElementsByTagName("input"), D);
            if (e) {
                b = function(b) {
                    if (!b.type || Lb.test(b.type))
                        return g ? g.push(b.parentNode ? b.parentNode.removeChild(b) : b) : e.appendChild(b)
                };
                for (f = 0; (j = o[f]) != null; f++)
                    if (!d.nodeName(j, "script") || !b(j))
                        e.appendChild(j), typeof j.getElementsByTagName !== "undefined" && (j = d.grep(d.merge([], j.getElementsByTagName("script")), b), o.splice.apply(o, [f + 1, 0].concat(j)), f += j.length)
            }
            return o
        },
        cleanData: function(b, a) {
            for (var c, e, g, f, j = 0, h = d.expando, p = d.cache, q = d.support.deleteExpando, v = d.event.special; (g = b[j]) != null; j++)
                if (a || d.acceptData(g))
                    if (c = (e = g[h]) && p[e]) {
                        if (c.events)
                            for (f in c.events)
                                v[f] ? d.event.remove(g, f) : d.removeEvent(g, f, c.handle);
                        p[e] && (delete p[e], q ? delete g[h] : g.removeAttribute ? g.removeAttribute(h) : g[h] = null, d.deletedIds.push(e))
                    }
        }});
    (function() {
        var b, a;
        d.uaMatch = function(b) {
            b = b.toLowerCase();
            b = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) ||
                    /(msie) ([\w.]+)/.exec(b) || b.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
            return{browser: b[1] || "", version: b[2] || "0"}
        };
        b = d.uaMatch(g.userAgent);
        a = {};
        if (b.browser)
            a[b.browser] = !0, a.version = b.version;
        if (a.chrome)
            a.webkit = !0;
        else if (a.webkit)
            a.safari = !0;
        d.browser = a;
        d.sub = function() {
            function b(a, d) {
                return new b.fn.init(a, d)
            }
            d.extend(!0, b, this);
            b.superclass = this;
            b.fn = b.prototype = this();
            b.fn.constructor = b;
            b.sub = this.sub;
            b.fn.init = function(c, e) {
                e && e instanceof d && !(e instanceof b) &&
                        (e = b(e));
                return d.fn.init.call(this, c, e, a)
            };
            b.fn.init.prototype = b.fn;
            var a = b(c);
            return b
        }
    })();
    var W, oa, pa, La = /alpha\([^)]*\)/i, Nb = /opacity=([^)]*)/, Ob = /^(top|right|bottom|left)$/, Pb = /^(none|table(?!-c[ea]).+)/, eb = /^margin/, rb = RegExp("^(" + N + ")(.*)$", "i"), va = RegExp("^(" + N + ")(?!px)[a-z%]+$", "i"), Qb = RegExp("^([-+])=(" + N + ")", "i"), Da = {BODY: "block"}, Rb = {position: "absolute", visibility: "hidden", display: "block"}, fb = {letterSpacing: 0, fontWeight: 400}, ja = ["Top", "Right", "Bottom", "Left"], Qa = ["Webkit", "O", "Moz", "ms"],
            Sb = d.fn.toggle;
    d.fn.extend({css: function(b, a) {
            return d.access(this, function(b, a, c) {
                return c !== h ? d.style(b, a, c) : d.css(b, a)
            }, b, a, arguments.length > 1)
        }, show: function() {
            return M(this, !0)
        }, hide: function() {
            return M(this)
        }, toggle: function(b, a) {
            var c = typeof b === "boolean";
            if (d.isFunction(b) && d.isFunction(a))
                return Sb.apply(this, arguments);
            return this.each(function() {
                (c ? b : H(this)) ? d(this).show() : d(this).hide()
            })
        }});
    d.extend({cssHooks: {opacity: {get: function(b, a) {
                    if (a) {
                        var d = W(b, "opacity");
                        return d === "" ? "1" : d
                    }
                }}},
        cssNumber: {fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": d.support.cssFloat ? "cssFloat" : "styleFloat"}, style: function(b, a, c, e) {
            if (b && !(b.nodeType === 3 || b.nodeType === 8 || !b.style)) {
                var g, f, j, p = d.camelCase(a), q = b.style, a = d.cssProps[p] || (d.cssProps[p] = I(q, p));
                j = d.cssHooks[a] || d.cssHooks[p];
                if (c !== h) {
                    f = typeof c;
                    if (f === "string" && (g = Qb.exec(c)))
                        c = (g[1] + 1) * g[2] + parseFloat(d.css(b, a)), f = "number";
                    if (!(c == null || f === "number" && isNaN(c)))
                        if (f === "number" &&
                                !d.cssNumber[p] && (c += "px"), !j || !("set"in j) || (c = j.set(b, c, e)) !== h)
                            try {
                                q[a] = c
                            } catch (v) {
                            }
                } else {
                    if (j && "get"in j && (g = j.get(b, !1, e)) !== h)
                        return g;
                    return q[a]
                }
            }
        }, css: function(b, a, c, e) {
            var g, f;
            f = d.camelCase(a);
            a = d.cssProps[f] || (d.cssProps[f] = I(b.style, f));
            (f = d.cssHooks[a] || d.cssHooks[f]) && "get"in f && (g = f.get(b, !0, e));
            g === h && (g = W(b, a));
            g === "normal" && a in fb && (g = fb[a]);
            if (c || e !== h)
                return b = parseFloat(g), c || d.isNumeric(b) ? b || 0 : g;
            return g
        }, swap: function(b, a, d) {
            var c, e = {};
            for (c in a)
                e[c] = b.style[c], b.style[c] =
                        a[c];
            d = d.call(b);
            for (c in a)
                b.style[c] = e[c];
            return d
        }});
    e.getComputedStyle ? W = function(b, a) {
        var c, g, f, j, h = e.getComputedStyle(b, null), p = b.style;
        if (h && (c = h.getPropertyValue(a) || h[a], c === "" && !d.contains(b.ownerDocument, b) && (c = d.style(b, a)), va.test(c) && eb.test(a)))
            g = p.width, f = p.minWidth, j = p.maxWidth, p.minWidth = p.maxWidth = p.width = c, c = h.width, p.width = g, p.minWidth = f, p.maxWidth = j;
        return c
    } : c.documentElement.currentStyle && (W = function(b, a) {
        var d, c, e = b.currentStyle && b.currentStyle[a], g = b.style;
        e == null && g && g[a] &&
                (e = g[a]);
        if (va.test(e) && !Ob.test(a)) {
            d = g.left;
            if (c = b.runtimeStyle && b.runtimeStyle.left)
                b.runtimeStyle.left = b.currentStyle.left;
            g.left = a === "fontSize" ? "1em" : e;
            e = g.pixelLeft + "px";
            g.left = d;
            if (c)
                b.runtimeStyle.left = c
        }
        return e === "" ? "auto" : e
    });
    d.each(["height", "width"], function(b, a) {
        d.cssHooks[a] = {get: function(b, c, e) {
                if (c)
                    return b.offsetWidth === 0 && Pb.test(W(b, "display")) ? d.swap(b, Rb, function() {
                        return aa(b, a, e)
                    }) : aa(b, a, e)
            }, set: function(b, c, e) {
                return T(b, c, e ? U(b, a, e, d.support.boxSizing && d.css(b, "boxSizing") ===
                        "border-box") : 0)
            }}
    });
    if (!d.support.opacity)
        d.cssHooks.opacity = {get: function(b, a) {
                return Nb.test((a && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : a ? "1" : ""
            }, set: function(b, a) {
                var c = b.style, e = b.currentStyle, g = d.isNumeric(a) ? "alpha(opacity=" + a * 100 + ")" : "", f = e && e.filter || c.filter || "";
                c.zoom = 1;
                if (a >= 1 && d.trim(f.replace(La, "")) === "" && c.removeAttribute && (c.removeAttribute("filter"), e && !e.filter))
                    return;
                c.filter = La.test(f) ? f.replace(La, g) : f + " " + g
            }};
    d(function() {
        if (!d.support.reliableMarginRight)
            d.cssHooks.marginRight =
                    {get: function(b, a) {
                            return d.swap(b, {display: "inline-block"}, function() {
                                if (a)
                                    return W(b, "marginRight")
                            })
                        }};
        !d.support.pixelPosition && d.fn.position && d.each(["top", "left"], function(b, a) {
            d.cssHooks[a] = {get: function(b, c) {
                    if (c) {
                        var e = W(b, a);
                        return va.test(e) ? d(b).position()[a] + "px" : e
                    }
                }}
        })
    });
    if (d.expr && d.expr.filters)
        d.expr.filters.hidden = function(b) {
            return b.offsetWidth === 0 && b.offsetHeight === 0 || !d.support.reliableHiddenOffsets && (b.style && b.style.display || W(b, "display")) === "none"
        }, d.expr.filters.visible =
                function(b) {
                    return!d.expr.filters.hidden(b)
                };
    d.each({margin: "", padding: "", border: "Width"}, function(b, a) {
        d.cssHooks[b + a] = {expand: function(d) {
                for (var c = typeof d === "string" ? d.split(" ") : [d], e = {}, d = 0; d < 4; d++)
                    e[b + ja[d] + a] = c[d] || c[d - 2] || c[0];
                return e
            }};
        if (!eb.test(b))
            d.cssHooks[b + a].set = T
    });
    var Tb = /%20/g, sb = /\[\]$/, gb = /\r?\n/g, Ub = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, Vb = /^(?:select|textarea)/i;
    d.fn.extend({serialize: function() {
            return d.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? d.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Vb.test(this.nodeName) || Ub.test(this.type))
            }).map(function(b, a) {
                var c = d(this).val();
                return c == null ? null : d.isArray(c) ? d.map(c, function(b) {
                    return{name: a.name, value: b.replace(gb, "\r\n")}
                }) : {name: a.name, value: c.replace(gb, "\r\n")}
            }).get()
        }});
    d.param = function(b, a) {
        var c, e = [], g = function(b, a) {
            a = d.isFunction(a) ? a() : a == null ? "" : a;
            e[e.length] =
                    encodeURIComponent(b) + "=" + encodeURIComponent(a)
        };
        a === h && (a = d.ajaxSettings && d.ajaxSettings.traditional);
        if (d.isArray(b) || b.jquery && !d.isPlainObject(b))
            d.each(b, function() {
                g(this.name, this.value)
            });
        else
            for (c in b)
                R(c, b[c], a, g);
        return e.join("&").replace(Tb, "+")
    };
    var ma, na, Wb = /#.*$/, Xb = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, Yb = /^(?:GET|HEAD)$/, Zb = /^\/\//, hb = /\?/, $b = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ac = /([?&])_=[^&]*/, ib = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, jb = d.fn.load, Ea = {},
            kb = {}, lb = ["*/"] + ["*"];
    try {
        na = j.href
    } catch (hc) {
        na = c.createElement("a"), na.href = "", na = na.href
    }
    ma = ib.exec(na.toLowerCase()) || [];
    d.fn.load = function(b, a, c) {
        if (typeof b !== "string" && jb)
            return jb.apply(this, arguments);
        if (!this.length)
            return this;
        var e, g, f, j = this, p = b.indexOf(" ");
        p >= 0 && (e = b.slice(p, b.length), b = b.slice(0, p));
        d.isFunction(a) ? (c = a, a = h) : a && typeof a === "object" && (g = "POST");
        d.ajax({url: b, type: g, dataType: "html", data: a, complete: function(b, a) {
                c && j.each(c, f || [b.responseText, a, b])
            }}).done(function(b) {
            f =
                    arguments;
            j.html(e ? d("<div>").append(b.replace($b, "")).find(e) : b)
        });
        return this
    };
    d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(b, a) {
        d.fn[a] = function(b) {
            return this.on(a, b)
        }
    });
    d.each(["get", "post"], function(b, a) {
        d[a] = function(b, c, e, g) {
            d.isFunction(c) && (g = g || e, e = c, c = h);
            return d.ajax({type: a, url: b, data: c, success: e, dataType: g})
        }
    });
    d.extend({getScript: function(b, a) {
            return d.get(b, h, a, "script")
        }, getJSON: function(b, a, c) {
            return d.get(b, a, c, "json")
        }, ajaxSetup: function(b,
                a) {
            a ? X(b, d.ajaxSettings) : (a = b, b = d.ajaxSettings);
            X(b, a);
            return b
        }, ajaxSettings: {url: na, isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(ma[1]), global: !0, type: "GET", contentType: "application/x-www-form-urlencoded; charset=UTF-8", processData: !0, async: !0, accepts: {xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": lb}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": e.String, "text html": !0, "text json": d.parseJSON, "text xml": d.parseXML}, flatOptions: {context: !0, url: !0}}, ajaxPrefilter: ka(Ea), ajaxTransport: ka(kb), ajax: function(b, a) {
            function c(b, a, i, f) {
                var k, l, q, o, r = a;
                if (t !== 2) {
                    t = 2;
                    p && clearTimeout(p);
                    j = h;
                    g = f || "";
                    K.readyState = b > 0 ? 4 : 0;
                    if (i) {
                        o = m;
                        var f = K, N, x, E, C, J = o.contents, Z = o.dataTypes, O = o.responseFields;
                        for (x in O)
                            x in i && (f[O[x]] = i[x]);
                        for (; Z[0] === "*"; )
                            Z.shift(), N === h && (N = o.mimeType || f.getResponseHeader("content-type"));
                        if (N)
                            for (x in J)
                                if (J[x] &&
                                        J[x].test(N)) {
                                    Z.unshift(x);
                                    break
                                }
                        if (Z[0]in i)
                            E = Z[0];
                        else {
                            for (x in i) {
                                if (!Z[0] || o.converters[x + " " + Z[0]]) {
                                    E = x;
                                    break
                                }
                                C || (C = x)
                            }
                            E = E || C
                        }
                        E ? (E !== Z[0] && Z.unshift(E), o = i[E]) : o = void 0
                    }
                    if (b >= 200 && b < 300 || b === 304)
                        if (m.ifModified && ((i = K.getResponseHeader("Last-Modified")) && (d.lastModified[e] = i), (i = K.getResponseHeader("Etag")) && (d.etag[e] = i)), b === 304)
                            r = "notmodified", k = !0;
                        else {
                            a:{
                                l = m;
                                q = o;
                                var I, H, r = l.dataTypes.slice();
                                N = r[0];
                                x = {};
                                E = 0;
                                l.dataFilter && (q = l.dataFilter(q, l.dataType));
                                if (r[1])
                                    for (I in l.converters)
                                        x[I.toLowerCase()] =
                                                l.converters[I];
                                for (; i = r[++E]; )
                                    if (i !== "*") {
                                        if (N !== "*" && N !== i) {
                                            I = x[N + " " + i] || x["* " + i];
                                            if (!I)
                                                for (H in x)
                                                    if (k = H.split(" "), k[1] === i && (I = x[N + " " + k[0]] || x["* " + k[0]])) {
                                                        I === !0 ? I = x[H] : x[H] !== !0 && (i = k[0], r.splice(E--, 0, i));
                                                        break
                                                    }
                                            if (I !== !0)
                                                if (I && l["throws"])
                                                    q = I(q);
                                                else
                                                    try {
                                                        q = I(q)
                                                    } catch (F) {
                                                        k = {state: "parsererror", error: I ? F : "No conversion from " + N + " to " + i};
                                                        break a
                                                    }
                                        }
                                        N = i
                                    }
                                k = {state: "success", data: q}
                            }
                            r = k.state;
                            l = k.data;
                            q = k.error;
                            k = !q
                        }
                    else if (q = r, !r || b)
                        r = "error", b < 0 && (b = 0);
                    K.status = b;
                    K.statusText = (a || r) + "";
                    k ? $.resolveWith(u,
                            [l, r, K]) : $.rejectWith(u, [K, r, q]);
                    K.statusCode(z);
                    z = h;
                    v && s.trigger("ajax" + (k ? "Success" : "Error"), [K, m, k ? l : q]);
                    n.fireWith(u, [K, r]);
                    v && (s.trigger("ajaxComplete", [K, m]), --d.active || d.event.trigger("ajaxStop"))
                }
            }
            typeof b === "object" && (a = b, b = h);
            var a = a || {}, e, g, f, j, p, q, v, o, m = d.ajaxSetup({}, a), u = m.context || m, s = u !== m && (u.nodeType || u instanceof d) ? d(u) : d.event, $ = d.Deferred(), n = d.Callbacks("once memory"), z = m.statusCode || {}, r = {}, N = {}, t = 0, x = "canceled", K = {readyState: 0, setRequestHeader: function(b, a) {
                    if (!t) {
                        var d =
                                b.toLowerCase(), b = N[d] = N[d] || b;
                        r[b] = a
                    }
                    return this
                }, getAllResponseHeaders: function() {
                    return t === 2 ? g : null
                }, getResponseHeader: function(b) {
                    var a;
                    if (t === 2) {
                        if (!f)
                            for (f = {}; a = Xb.exec(g); )
                                f[a[1].toLowerCase()] = a[2];
                        a = f[b.toLowerCase()]
                    }
                    return a === h ? null : a
                }, overrideMimeType: function(b) {
                    if (!t)
                        m.mimeType = b;
                    return this
                }, abort: function(b) {
                    b = b || x;
                    j && j.abort(b);
                    c(0, b);
                    return this
                }};
            $.promise(K);
            K.success = K.done;
            K.error = K.fail;
            K.complete = n.add;
            K.statusCode = function(b) {
                if (b) {
                    var a;
                    if (t < 2)
                        for (a in b)
                            z[a] = [z[a], b[a]];
                    else
                        a = b[K.status], K.always(a)
                }
                return this
            };
            m.url = ((b || m.url) + "").replace(Wb, "").replace(Zb, ma[1] + "//");
            m.dataTypes = d.trim(m.dataType || "*").toLowerCase().split(O);
            if (m.crossDomain == null)
                q = ib.exec(m.url.toLowerCase()), m.crossDomain = !(!q || !(q[1] !== ma[1] || q[2] !== ma[2] || (q[3] || (q[1] === "http:" ? 80 : 443)) != (ma[3] || (ma[1] === "http:" ? 80 : 443))));
            if (m.data && m.processData && typeof m.data !== "string")
                m.data = d.param(m.data, m.traditional);
            Y(Ea, m, a, K);
            if (t === 2)
                return K;
            v = m.global;
            m.type = m.type.toUpperCase();
            m.hasContent =
                    !Yb.test(m.type);
            v && d.active++ === 0 && d.event.trigger("ajaxStart");
            if (!m.hasContent && (m.data && (m.url += (hb.test(m.url) ? "&" : "?") + m.data, delete m.data), e = m.url, m.cache === !1)) {
                q = d.now();
                var E = m.url.replace(ac, "$1_=" + q);
                m.url = E + (E === m.url ? (hb.test(m.url) ? "&" : "?") + "_=" + q : "")
            }
            (m.data && m.hasContent && m.contentType !== !1 || a.contentType) && K.setRequestHeader("Content-Type", m.contentType);
            m.ifModified && (e = e || m.url, d.lastModified[e] && K.setRequestHeader("If-Modified-Since", d.lastModified[e]), d.etag[e] && K.setRequestHeader("If-None-Match",
                    d.etag[e]));
            K.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + (m.dataTypes[0] !== "*" ? ", " + lb + "; q=0.01" : "") : m.accepts["*"]);
            for (o in m.headers)
                K.setRequestHeader(o, m.headers[o]);
            if (m.beforeSend && (m.beforeSend.call(u, K, m) === !1 || t === 2))
                return K.abort();
            x = "abort";
            for (o in{success:1, error:1, complete:1})
                K[o](m[o]);
            if (j = Y(kb, m, a, K)) {
                K.readyState = 1;
                v && s.trigger("ajaxSend", [K, m]);
                m.async && m.timeout > 0 && (p = setTimeout(function() {
                    K.abort("timeout")
                }, m.timeout));
                try {
                    t =
                            1, j.send(r, c)
                } catch (C) {
                    if (t < 2)
                        c(-1, C);
                    else
                        throw C;
                }
            } else
                c(-1, "No Transport");
            return K
        }, active: 0, lastModified: {}, etag: {}});
    var mb = [], bc = /\?/, Ba = /(=)\?(?=&|$)|\?\?/, cc = d.now();
    d.ajaxSetup({jsonp: "callback", jsonpCallback: function() {
            var b = mb.pop() || d.expando + "_" + cc++;
            this[b] = !0;
            return b
        }});
    d.ajaxPrefilter("json jsonp", function(b, a, c) {
        var g, f, j, p = b.data, q = b.url, m = b.jsonp !== !1, o = m && Ba.test(q), v = m && !o && typeof p === "string" && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ba.test(p);
        if (b.dataTypes[0] ===
                "jsonp" || o || v)
            return g = b.jsonpCallback = d.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, f = e[g], o ? b.url = q.replace(Ba, "$1" + g) : v ? b.data = p.replace(Ba, "$1" + g) : m && (b.url += (bc.test(q) ? "&" : "?") + b.jsonp + "=" + g), b.converters["script json"] = function() {
                j || d.error(g + " was not called");
                return j[0]
            }, b.dataTypes[0] = "json", e[g] = function() {
                j = arguments
            }, c.always(function() {
                e[g] = f;
                if (b[g])
                    b.jsonpCallback = a.jsonpCallback, mb.push(g);
                j && d.isFunction(f) && f(j[0]);
                j = f = h
            }), "script"
    });
    d.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /javascript|ecmascript/}, converters: {"text script": function(b) {
                d.globalEval(b);
                return b
            }}});
    d.ajaxPrefilter("script", function(b) {
        if (b.cache === h)
            b.cache = !1;
        if (b.crossDomain)
            b.type = "GET", b.global = !1
    });
    d.ajaxTransport("script", function(b) {
        if (b.crossDomain) {
            var a, d = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return{send: function(e, g) {
                    a = c.createElement("script");
                    a.async = "async";
                    if (b.scriptCharset)
                        a.charset = b.scriptCharset;
                    a.src = b.url;
                    a.onload = a.onreadystatechange = function(b,
                            c) {
                        if (c || !a.readyState || /loaded|complete/.test(a.readyState))
                            a.onload = a.onreadystatechange = null, d && a.parentNode && d.removeChild(a), a = h, c || g(200, "success")
                    };
                    d.insertBefore(a, d.firstChild)
                }, abort: function() {
                    if (a)
                        a.onload(0, 1)
                }}
        }
    });
    var sa, Ma = e.ActiveXObject ? function() {
        for (var b in sa)
            sa[b](0, 1)
    } : !1, dc = 0;
    d.ajaxSettings.xhr = e.ActiveXObject ? function() {
        var b;
        if (!(b = !this.isLocal && fa()))
            a:{
                try {
                    b = new e.ActiveXObject("Microsoft.XMLHTTP");
                    break a
                } catch (a) {
                }
                b = void 0
            }
        return b
    } : fa;
    (function(b) {
        d.extend(d.support,
                {ajax: !!b, cors: !!b && "withCredentials"in b})
    })(d.ajaxSettings.xhr());
    d.support.ajax && d.ajaxTransport(function(b) {
        if (!b.crossDomain || d.support.cors) {
            var a;
            return{send: function(c, g) {
                    var f, j, p = b.xhr();
                    b.username ? p.open(b.type, b.url, b.async, b.username, b.password) : p.open(b.type, b.url, b.async);
                    if (b.xhrFields)
                        for (j in b.xhrFields)
                            p[j] = b.xhrFields[j];
                    b.mimeType && p.overrideMimeType && p.overrideMimeType(b.mimeType);
                    !b.crossDomain && !c["X-Requested-With"] && (c["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (j in c)
                            p.setRequestHeader(j,
                                    c[j])
                    } catch (q) {
                    }
                    p.send(b.hasContent && b.data || null);
                    a = function(c, e) {
                        var k, j, l, q, m;
                        try {
                            if (a && (e || p.readyState === 4)) {
                                a = h;
                                if (f)
                                    p.onreadystatechange = d.noop, Ma && delete sa[f];
                                if (e)
                                    p.readyState !== 4 && p.abort();
                                else {
                                    k = p.status;
                                    l = p.getAllResponseHeaders();
                                    q = {};
                                    if ((m = p.responseXML) && m.documentElement)
                                        q.xml = m;
                                    try {
                                        q.text = p.responseText
                                    } catch (o) {
                                    }
                                    try {
                                        j = p.statusText
                                    } catch (v) {
                                        j = ""
                                    }
                                    !k && b.isLocal && !b.crossDomain ? k = q.text ? 200 : 404 : k === 1223 && (k = 204)
                                }
                            }
                        } catch (u) {
                            e || g(-1, u)
                        }
                        q && g(k, j, q, l)
                    };
                    b.async ? p.readyState === 4 ? setTimeout(a,
                            0) : (f = ++dc, Ma && (sa || (sa = {}, d(e).unload(Ma)), sa[f] = a), p.onreadystatechange = a) : a()
                }, abort: function() {
                    a && a(0, 1)
                }}
        }
    });
    var qa, Ca, ec = /^(?:toggle|show|hide)$/, fc = RegExp("^(?:([-+])=|)(" + N + ")([a-z%]*)$", "i"), gc = /queueHooks$/, xa = [function(b, a, c) {
            var e, g, f, j, p, h, q = this, m = b.style, o = {}, v = [], u = b.nodeType && H(b);
            if (!c.queue) {
                p = d._queueHooks(b, "fx");
                if (p.unqueued == null)
                    p.unqueued = 0, h = p.empty.fire, p.empty.fire = function() {
                        p.unqueued || h()
                    };
                p.unqueued++;
                q.always(function() {
                    q.always(function() {
                        p.unqueued--;
                        d.queue(b,
                                "fx").length || p.empty.fire()
                    })
                })
            }
            if (b.nodeType === 1 && ("height"in a || "width"in a))
                if (c.overflow = [m.overflow, m.overflowX, m.overflowY], d.css(b, "display") === "inline" && d.css(b, "float") === "none")
                    !d.support.inlineBlockNeedsLayout || da(b.nodeName) === "inline" ? m.display = "inline-block" : m.zoom = 1;
            if (c.overflow)
                m.overflow = "hidden", d.support.shrinkWrapBlocks || q.done(function() {
                    m.overflow = c.overflow[0];
                    m.overflowX = c.overflow[1];
                    m.overflowY = c.overflow[2]
                });
            for (e in a)
                f = a[e], ec.exec(f) && (delete a[e], g = g || f === "toggle",
                        f !== (u ? "hide" : "show") && v.push(e));
            if (a = v.length) {
                f = d._data(b, "fxshow") || d._data(b, "fxshow", {});
                if ("hidden"in f)
                    u = f.hidden;
                if (g)
                    f.hidden = !u;
                u ? d(b).show() : q.done(function() {
                    d(b).hide()
                });
                q.done(function() {
                    var a;
                    d.removeData(b, "fxshow", !0);
                    for (a in o)
                        d.style(b, a, o[a])
                });
                for (e = 0; e < a; e++)
                    if (g = v[e], j = q.createTween(g, u ? f[g] : 0), o[g] = f[g] || d.style(b, g), !(g in f) && (f[g] = j.start, u))
                        j.end = j.start, j.start = g === "width" || g === "height" ? 1 : 0
            }
        }], ta = {"*": [function(b, a) {
                var c, e, g = this.createTween(b, a), f = fc.exec(a), j = g.cur(),
                        p = +j || 0, h = 1, q = 20;
                if (f) {
                    c = +f[2];
                    e = f[3] || (d.cssNumber[b] ? "" : "px");
                    if (e !== "px" && p) {
                        p = d.css(g.elem, b, !0) || c || 1;
                        do
                            h = h || ".5", p /= h, d.style(g.elem, b, p + e);
                        while (h !== (h = g.cur() / j) && h !== 1 && --q)
                    }
                    g.unit = e;
                    g.start = p;
                    g.end = f[1] ? p + (f[1] + 1) * c : c
                }
                return g
            }]};
    d.Animation = d.extend(V, {tweener: function(b, a) {
            d.isFunction(b) ? (a = b, b = ["*"]) : b = b.split(" ");
            for (var c, e = 0, g = b.length; e < g; e++)
                c = b[e], ta[c] = ta[c] || [], ta[c].unshift(a)
        }, prefilter: function(b, a) {
            a ? xa.unshift(b) : xa.push(b)
        }});
    d.Tween = Q;
    Q.prototype = {constructor: Q, init: function(b,
                a, c, e, g, f) {
            this.elem = b;
            this.prop = c;
            this.easing = g || "swing";
            this.options = a;
            this.start = this.now = this.cur();
            this.end = e;
            this.unit = f || (d.cssNumber[c] ? "" : "px")
        }, cur: function() {
            var b = Q.propHooks[this.prop];
            return b && b.get ? b.get(this) : Q.propHooks._default.get(this)
        }, run: function(b) {
            var a, c = Q.propHooks[this.prop];
            this.pos = this.options.duration ? a = d.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration) : a = b;
            this.now = (this.end - this.start) * a + this.start;
            this.options.step && this.options.step.call(this.elem,
                    this.now, this);
            c && c.set ? c.set(this) : Q.propHooks._default.set(this);
            return this
        }};
    Q.prototype.init.prototype = Q.prototype;
    Q.propHooks = {_default: {get: function(a) {
                if (a.elem[a.prop] != null && (!a.elem.style || a.elem.style[a.prop] == null))
                    return a.elem[a.prop];
                a = d.css(a.elem, a.prop, !1, "");
                return!a || a === "auto" ? 0 : a
            }, set: function(a) {
                if (d.fx.step[a.prop])
                    d.fx.step[a.prop](a);
                else
                    a.elem.style && (a.elem.style[d.cssProps[a.prop]] != null || d.cssHooks[a.prop]) ? d.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }}};
    Q.propHooks.scrollTop = Q.propHooks.scrollLeft = {set: function(a) {
            if (a.elem.nodeType && a.elem.parentNode)
                a.elem[a.prop] = a.now
        }};
    d.each(["toggle", "show", "hide"], function(a, c) {
        var e = d.fn[c];
        d.fn[c] = function(g, f, j) {
            return g == null || typeof g === "boolean" || !a && d.isFunction(g) && d.isFunction(f) ? e.apply(this, arguments) : this.animate(s(c, !0), g, f, j)
        }
    });
    d.fn.extend({fadeTo: function(a, d, c, e) {
            return this.filter(H).css("opacity", 0).show().end().animate({opacity: d}, a, c, e)
        }, animate: function(a, c, e, g) {
            var f = d.isEmptyObject(a),
                    j = d.speed(c, e, g), c = function() {
                var c = V(this, d.extend({}, a), j);
                f && c.stop(!0)
            };
            return f || j.queue === !1 ? this.each(c) : this.queue(j.queue, c)
        }, stop: function(a, c, e) {
            var g = function(a) {
                var b = a.stop;
                delete a.stop;
                b(e)
            };
            typeof a !== "string" && (e = c, c = a, a = h);
            c && a !== !1 && this.queue(a || "fx", []);
            return this.each(function() {
                var c = !0, f = a != null && a + "queueHooks", i = d.timers, j = d._data(this);
                if (f)
                    j[f] && j[f].stop && g(j[f]);
                else
                    for (f in j)
                        j[f] && j[f].stop && gc.test(f) && g(j[f]);
                for (f = i.length; f--; )
                    if (i[f].elem === this && (a == null || i[f].queue ===
                            a))
                        i[f].anim.stop(e), c = !1, i.splice(f, 1);
                (c || !e) && d.dequeue(this, a)
            })
        }});
    d.each({slideDown: s("show"), slideUp: s("hide"), slideToggle: s("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function(a, c) {
        d.fn[a] = function(a, b, d) {
            return this.animate(c, a, b, d)
        }
    });
    d.speed = function(a, c, e) {
        var g = a && typeof a === "object" ? d.extend({}, a) : {complete: e || !e && c || d.isFunction(a) && a, duration: a, easing: e && c || c && !d.isFunction(c) && c};
        g.duration = d.fx.off ? 0 : typeof g.duration === "number" ? g.duration :
                g.duration in d.fx.speeds ? d.fx.speeds[g.duration] : d.fx.speeds._default;
        if (g.queue == null || g.queue === !0)
            g.queue = "fx";
        g.old = g.complete;
        g.complete = function() {
            d.isFunction(g.old) && g.old.call(this);
            g.queue && d.dequeue(this, g.queue)
        };
        return g
    };
    d.easing = {linear: function(a) {
            return a
        }, swing: function(a) {
            return 0.5 - Math.cos(a * Math.PI) / 2
        }};
    d.timers = [];
    d.fx = Q.prototype.init;
    d.fx.tick = function() {
        var a, c = d.timers, e = 0;
        for (qa = d.now(); e < c.length; e++)
            a = c[e], !a() && c[e] === a && c.splice(e--, 1);
        c.length || d.fx.stop();
        qa = h
    };
    d.fx.timer = function(a) {
        a() && d.timers.push(a) && !Ca && (Ca = setInterval(d.fx.tick, d.fx.interval))
    };
    d.fx.interval = 13;
    d.fx.stop = function() {
        clearInterval(Ca);
        Ca = null
    };
    d.fx.speeds = {slow: 600, fast: 200, _default: 400};
    d.fx.step = {};
    if (d.expr && d.expr.filters)
        d.expr.filters.animated = function(a) {
            return d.grep(d.timers, function(d) {
                return a === d.elem
            }).length
        };
    var nb = /^(?:body|html)$/i;
    d.fn.offset = function(a) {
        if (arguments.length)
            return a === h ? this : this.each(function(c) {
                d.offset.setOffset(this, a, c)
            });
        var c, e, g, f, j, p = {top: 0,
            left: 0};
        if (f = (g = this[0]) && g.ownerDocument) {
            if ((e = f.body) === g)
                return d.offset.bodyOffset(g);
            c = f.documentElement;
            if (!d.contains(c, g))
                return p;
            typeof g.getBoundingClientRect !== "undefined" && (p = g.getBoundingClientRect());
            g = la(f);
            f = c.clientTop || e.clientTop || 0;
            e = c.clientLeft || e.clientLeft || 0;
            j = g.pageYOffset || c.scrollTop;
            return{top: p.top + j - f, left: p.left + (g.pageXOffset || c.scrollLeft) - e}
        }
    };
    d.offset = {bodyOffset: function(a) {
            var c = a.offsetTop, e = a.offsetLeft;
            d.support.doesNotIncludeMarginInBodyOffset && (c += parseFloat(d.css(a,
                    "marginTop")) || 0, e += parseFloat(d.css(a, "marginLeft")) || 0);
            return{top: c, left: e}
        }, setOffset: function(a, c, e) {
            var g = d.css(a, "position");
            if (g === "static")
                a.style.position = "relative";
            var f = d(a), j = f.offset(), p = d.css(a, "top"), h = d.css(a, "left"), q = {}, m = {};
            (g === "absolute" || g === "fixed") && d.inArray("auto", [p, h]) > -1 ? (m = f.position(), g = m.top, h = m.left) : (g = parseFloat(p) || 0, h = parseFloat(h) || 0);
            d.isFunction(c) && (c = c.call(a, e, j));
            if (c.top != null)
                q.top = c.top - j.top + g;
            if (c.left != null)
                q.left = c.left - j.left + h;
            "using"in c ? c.using.call(a,
                    q) : f.css(q)
        }};
    d.fn.extend({position: function() {
            if (this[0]) {
                var a = this[0], c = this.offsetParent(), e = this.offset(), g = nb.test(c[0].nodeName) ? {top: 0, left: 0} : c.offset();
                e.top -= parseFloat(d.css(a, "marginTop")) || 0;
                e.left -= parseFloat(d.css(a, "marginLeft")) || 0;
                g.top += parseFloat(d.css(c[0], "borderTopWidth")) || 0;
                g.left += parseFloat(d.css(c[0], "borderLeftWidth")) || 0;
                return{top: e.top - g.top, left: e.left - g.left}
            }
        }, offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || c.body; a && !nb.test(a.nodeName) &&
                        d.css(a, "position") === "static"; )
                    a = a.offsetParent;
                return a || c.body
            })
        }});
    d.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function(a, c) {
        var e = /Y/.test(c);
        d.fn[a] = function(g) {
            return d.access(this, function(a, b, g) {
                var f = la(a);
                if (g === h)
                    return f ? c in f ? f[c] : f.document.documentElement[b] : a[b];
                f ? f.scrollTo(!e ? g : d(f).scrollLeft(), e ? g : d(f).scrollTop()) : a[b] = g
            }, a, g, arguments.length, null)
        }
    });
    d.each({Height: "height", Width: "width"}, function(a, c) {
        d.each({padding: "inner" + a, content: c, "": "outer" + a}, function(e,
                g) {
            d.fn[g] = function(g, f) {
                var j = arguments.length && (e || typeof g !== "boolean"), p = e || (g === !0 || f === !0 ? "margin" : "border");
                return d.access(this, function(c, e, g) {
                    if (d.isWindow(c))
                        return c.document.documentElement["client" + a];
                    if (c.nodeType === 9)
                        return e = c.documentElement, Math.max(c.body["scroll" + a], e["scroll" + a], c.body["offset" + a], e["offset" + a], e["client" + a]);
                    return g === h ? d.css(c, e, g, p) : d.style(c, e, g, p)
                }, c, j ? g : h, j, null)
            }
        })
    });
    e.jQuery = e.$ = d;
    typeof define === "function" && define.amd && define.amd.jQuery && define("jquery",
            [], function() {
        return d
    })
})(window);
(function(e, h, f, t) {
    var n = h.document, A = e(n), z = e(h), J = Array.prototype, E = !0, C = !1, L = navigator.userAgent.toLowerCase(), x = h.location.hash.replace(/#\//, ""), F = h.location.protocol, r = Math, D = function() {
    }, I = function() {
        return!1
    }, H = function() {
        var a = 3, c = n.createElement("div"), e = c.getElementsByTagName("i");
        do
            c.innerHTML = "<\!--[if gt IE " + ++a + "]><i></i><![endif]--\>";
        while (e[0]);
        return a > 4 ? a : n.documentMode || t
    }(), M = function() {
        return{html: n.documentElement, body: n.body, head: n.getElementsByTagName("head")[0], title: n.title}
    },
    T = h.parent !== h.self, U = function() {
        var a = [];
        e.each("data ready thumbnail loadstart loadfinish image play pause progress fullscreen_enter fullscreen_exit idle_enter idle_exit rescale lightbox_open lightbox_close lightbox_image".split(" "), function(c, e) {
            a.push(e);
            /_/.test(e) && a.push(e.replace(/_/g, ""))
        });
        return a
    }(), aa = function(a) {
        var c;
        if (typeof a !== "object")
            return a;
        e.each(a, function(f, g) {
            /^[a-z]+_/.test(f) && (c = "", e.each(f.split("_"), function(a, e) {
                c += a > 0 ? e.substr(0, 1).toUpperCase() + e.substr(1) : e
            }),
                    a[c] = g, delete a[f])
        });
        return a
    }, da = function(a) {
        if (e.inArray(a, U) > -1)
            return f[a.toUpperCase()];
        return a
    }, R = {youtube: {reg: /https?:\/\/(?:[a-zA_Z]{2,3}.)?(?:youtube\.com\/watch\?)((?:[\w\d\-\_\=]+&amp;(?:amp;)?)*v(?:&lt;[A-Z]+&gt;)?=([0-9a-zA-Z\-\_]+))/i, embed: function() {
                return"http://www.youtube.com/embed/" + this.id
            }, getUrl: function() {
                return F + "//gdata.youtube.com/feeds/api/videos/" + this.id + "?v=2&alt=json-in-script&callback=?"
            }, get_thumb: function(a) {
                return a.entry.media$group.media$thumbnail[2].url
            },
            get_image: function(a) {
                if (a.entry.yt$hd)
                    return F + "//img.youtube.com/vi/" + this.id + "/maxresdefault.jpg";
                return a.entry.media$group.media$thumbnail[3].url
            }}, vimeo: {reg: /https?:\/\/(?:www\.)?(vimeo\.com)\/(?:hd#)?([0-9]+)/i, embed: function() {
                return"http://player.vimeo.com/video/" + this.id
            }, getUrl: function() {
                return F + "//vimeo.com/api/v2/video/" + this.id + ".json?callback=?"
            }, get_thumb: function(a) {
                return a[0].thumbnail_medium
            }, get_image: function(a) {
                return a[0].thumbnail_large
            }}, dailymotion: {reg: /https?:\/\/(?:www\.)?(dailymotion\.com)\/video\/([^_]+)/,
            embed: function() {
                return F + "//www.dailymotion.com/embed/video/" + this.id
            }, getUrl: function() {
                return"https://api.dailymotion.com/video/" + this.id + "?fields=thumbnail_240_url,thumbnail_720_url&callback=?"
            }, get_thumb: function(a) {
                return a.thumbnail_240_url
            }, get_image: function(a) {
                return a.thumbnail_720_url
            }}, _inst: []}, ka = function(a, c) {
        for (var f = 0; f < R._inst.length; f++)
            if (R._inst[f].id === c && R._inst[f].type == a)
                return R._inst[f];
        this.type = a;
        this.id = c;
        this.readys = [];
        R._inst.push(this);
        var g = this;
        e.extend(this, R[a]);
        e.getJSON(this.getUrl(), function(a) {
            g.data = a;
            e.each(g.readys, function(a, c) {
                c(g.data)
            });
            g.readys = []
        });
        this.getMedia = function(a, c, e) {
            var e = e || D, g = this, f = function(e) {
                c(g["get_" + a](e))
            };
            try {
                g.data ? f(g.data) : g.readys.push(f)
            } catch (j) {
                e()
            }
        }
    }, Y = function(a) {
        var c, e;
        for (e in R)
            if ((c = a && R[e].reg && a.match(R[e].reg)) && c.length)
                return{id: c[2], provider: e};
        return!1
    }, X = {support: function() {
            var a = M().html;
            return!T && (a.requestFullscreen || a.mozRequestFullScreen || a.webkitRequestFullScreen)
        }(), callback: D, enter: function(a,
                c, e) {
            this.instance = a;
            this.callback = c || D;
            e = e || M().html;
            e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullScreen && e.webkitRequestFullScreen()
        }, exit: function(a) {
            this.callback = a || D;
            n.exitFullscreen ? n.exitFullscreen() : n.mozCancelFullScreen ? n.mozCancelFullScreen() : n.webkitCancelFullScreen && n.webkitCancelFullScreen()
        }, instance: null, listen: function() {
            if (this.support) {
                var a = function() {
                    if (X.instance) {
                        var a = X.instance._fullscreen;
                        n.fullscreen || n.mozFullScreen ||
                                n.webkitIsFullScreen ? a._enter(X.callback) : a._exit(X.callback)
                    }
                };
                n.addEventListener("fullscreenchange", a, !1);
                n.addEventListener("mozfullscreenchange", a, !1);
                n.addEventListener("webkitfullscreenchange", a, !1)
            }
        }}, fa = [], S = [], wa = !1, V = !1, ua = [], Q = function(a) {
        f.theme = a;
        e.each(ua, function(a, e) {
            e._initialized || e._init.call(e)
        });
        ua = []
    }, s = function() {
        return{clearTimer: function(a) {
                e.each(f.get(), function() {
                    this.clearTimer(a)
                })
            }, addTimer: function(a) {
                e.each(f.get(), function() {
                    this.addTimer(a)
                })
            }, array: function(a) {
                return J.slice.call(a,
                        0)
            }, create: function(a, c) {
                var e = n.createElement(c || "div");
                e.className = a;
                return e
            }, removeFromArray: function(a, c) {
                e.each(a, function(e, g) {
                    if (g == c)
                        return a.splice(e, 1), !1
                });
                return a
            }, getScriptPath: function(a) {
                a = a || e("script:last").attr("src");
                a = a.split("/");
                if (a.length == 1)
                    return"";
                a.pop();
                return a.join("/") + "/"
            }, animate: function() {
                var a = function(a) {
                    var c = "transition WebkitTransition MozTransition OTransition".split(" "), e;
                    if (h.opera)
                        return!1;
                    for (e = 0; c[e]; e++)
                        if (typeof a[c[e]] !== "undefined")
                            return c[e];
                    return!1
                }((n.body || n.documentElement).style), c = {MozTransition: "transitionend", OTransition: "oTransitionEnd", WebkitTransition: "webkitTransitionEnd", transition: "transitionend"}[a], j = {_default: [0.25, 0.1, 0.25, 1], galleria: [0.645, 0.045, 0.355, 1], galleriaIn: [0.55, 0.085, 0.68, 0.53], galleriaOut: [0.25, 0.46, 0.45, 0.94], ease: [0.25, 0, 0.25, 1], linear: [0.25, 0.25, 0.75, 0.75], "ease-in": [0.42, 0, 1, 1], "ease-out": [0, 0, 0.58, 1], "ease-in-out": [0.42, 0, 0.58, 1]}, g = function(a, c, g) {
                    var f = {}, g = g || "transition";
                    e.each("webkit moz ms o".split(" "),
                            function() {
                                f["-" + this + "-" + g] = c
                            });
                    a.css(f)
                }, v = function(a) {
                    g(a, "none", "transition");
                    f.WEBKIT && f.TOUCH && (g(a, "translate3d(0,0,0)", "transform"), a.data("revert") && (a.css(a.data("revert")), a.data("revert", null)))
                }, o, u, m, z, p, q, $;
                return function(d, n, r) {
                    r = e.extend({duration: 400, complete: D, stop: !1}, r);
                    d = e(d);
                    r.duration ? a ? (r.stop && (d.off(c), v(d)), o = !1, e.each(n, function(a, c) {
                        $ = d.css(a);
                        s.parseValue($) != s.parseValue(c) && (o = !0);
                        d.css(a, $)
                    }), o ? (u = [], m = r.easing in j ? j[r.easing] : j._default, z = " " + r.duration + "ms cubic-bezier(" +
                            m.join(",") + ")", h.setTimeout(function(a, d, c, j) {
                        return function() {
                            a.one(d, function(a) {
                                return function() {
                                    v(a);
                                    r.complete.call(a[0])
                                }
                            }(a));
                            if (f.WEBKIT && f.TOUCH && (p = {}, q = [0, 0, 0], e.each(["left", "top"], function(d, e) {
                                e in c && (q[d] = s.parseValue(c[e]) - s.parseValue(a.css(e)) + "px", p[e] = c[e], delete c[e])
                            }), q[0] || q[1]))
                                a.data("revert", p), u.push("-webkit-transform" + j), g(a, "translate3d(" + q.join(",") + ")", "transform");
                            e.each(c, function(a) {
                                u.push(a + j)
                            });
                            g(a, u.join(","));
                            a.css(c)
                        }
                    }(d, c, n, z), 2)) : h.setTimeout(function() {
                        r.complete.call(d[0])
                    },
                            r.duration)) : d.animate(n, r) : (d.css(n), r.complete.call(d[0]))
                }
            }(), removeAlpha: function(a) {
                a instanceof jQuery && (a = a[0]);
                if (H < 9 && a) {
                    var c = a.style, a = (a = a.currentStyle) && a.filter || c.filter || "";
                    if (/alpha/.test(a))
                        c.filter = a.replace(/alpha\([^)]*\)/i, "")
                }
            }, forceStyles: function(a, c) {
                a = e(a);
                a.attr("style") && a.data("styles", a.attr("style")).removeAttr("style");
                a.css(c)
            }, revertStyles: function() {
                e.each(s.array(arguments), function(a, c) {
                    c = e(c);
                    c.removeAttr("style");
                    c.attr("style", "");
                    c.data("styles") && c.attr("style",
                            c.data("styles")).data("styles", null)
                })
            }, moveOut: function(a) {
                s.forceStyles(a, {position: "absolute", left: -1E4})
            }, moveIn: function() {
                s.revertStyles.apply(s, s.array(arguments))
            }, hide: function(a, c, f) {
                var f = f || D, g = e(a), a = g[0];
                g.data("opacity") || g.data("opacity", g.css("opacity"));
                var h = {opacity: 0};
                c ? s.animate(a, h, {duration: c, complete: H < 9 && a ? function() {
                        s.removeAlpha(a);
                        a.style.visibility = "hidden";
                        f.call(a)
                    } : f, stop: !0}) : H < 9 && a ? (s.removeAlpha(a), a.style.visibility = "hidden") : g.css(h)
            }, show: function(a, c, f) {
                var f =
                        f || D, g = e(a), a = g[0], h = {opacity: parseFloat(g.data("opacity")) || 1};
                if (c) {
                    if (H < 9)
                        g.css("opacity", 0), a.style.visibility = "visible";
                    s.animate(a, h, {duration: c, complete: H < 9 && a ? function() {
                            h.opacity == 1 && s.removeAlpha(a);
                            f.call(a)
                        } : f, stop: !0})
                } else
                    H < 9 && h.opacity == 1 && a ? (s.removeAlpha(a), a.style.visibility = "visible") : g.css(h)
            }, wait: function(a) {
                f._waiters = f._waiters || [];
                var a = e.extend({until: I, success: D, error: function() {
                        f.raise("Could not complete wait function.")
                    }, timeout: 3E3}, a), c = s.timestamp(), j, g, v, o = function() {
                    g =
                            s.timestamp();
                    j = g - c;
                    s.removeFromArray(f._waiters, v);
                    if (a.until(j))
                        return a.success(), !1;
                    if (typeof a.timeout == "number" && g >= c + a.timeout)
                        return a.error(), !1;
                    f._waiters.push(v = h.setTimeout(o, 10))
                };
                f._waiters.push(v = h.setTimeout(o, 10))
            }, toggleQuality: function(a, c) {
                if (!(H !== 7 && H !== 8 || !a || a.nodeName.toUpperCase() != "IMG"))
                    typeof c === "undefined" && (c = a.style.msInterpolationMode === "nearest-neighbor"), a.style.msInterpolationMode = c ? "bicubic" : "nearest-neighbor"
            }, insertStyleTag: function(a, c) {
                if (!c || !e("#" + c).length) {
                    var f =
                            n.createElement("style");
                    if (c)
                        f.id = c;
                    M().head.appendChild(f);
                    if (f.styleSheet)
                        f.styleSheet.cssText = a;
                    else {
                        var g = n.createTextNode(a);
                        f.appendChild(g)
                    }
                }
            }, loadScript: function(a, c) {
                var f = !1, g = e("<script>").attr({src: a, async: !0}).get(0);
                g.onload = g.onreadystatechange = function() {
                    if (!f && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete"))
                        f = !0, g.onload = g.onreadystatechange = null, typeof c === "function" && c.call(this, this)
                };
                M().head.appendChild(g)
            }, parseValue: function(a) {
                return typeof a ===
                        "number" ? a : typeof a === "string" ? (a = a.match(/\-?\d|\./g)) && a.constructor === Array ? a.join("") * 1 : 0 : 0
            }, timestamp: function() {
                return(new Date).getTime()
            }, loadCSS: function(a, c, j) {
                var g, h;
                e("link[rel=stylesheet]").each(function() {
                    if (RegExp(a).test(this.href))
                        return g = this, !1
                });
                typeof c === "function" && (j = c, c = t);
                j = j || D;
                if (g)
                    return j.call(g, g), g;
                h = n.styleSheets.length;
                if (e("#" + c).length)
                    e("#" + c).attr("href", a), h--;
                else if (g = e("<link>").attr({rel: "stylesheet", href: a, id: c}).get(0), c = e('link[rel="stylesheet"], style'),
                        c.length ? c.get(0).parentNode.insertBefore(g, c[0]) : M().head.appendChild(g), H && h >= 31) {
                    f.raise("You have reached the browser stylesheet limit (31)", !0);
                    return
                }
                if (typeof j === "function") {
                    var o = e("<s>").attr("id", "galleria-loader").hide().appendTo(M().body);
                    s.wait({until: function() {
                            return o.height() == 1
                        }, success: function() {
                            o.remove();
                            j.call(g, g)
                        }, error: function() {
                            o.remove();
                            f.raise("Theme CSS could not load after 20 sec. " + (f.QUIRK ? "Your browser is in Quirks Mode, please add a correct doctype." : "Please download the latest theme at http://galleria.io/customer/."),
                                    !0)
                        }, timeout: 5E3})
                }
                return g
            }}
    }(), la = function(a) {
        s.insertStyleTag(".galleria-videoicon{width:60px;height:60px;position:absolute;top:50%;left:50%;z-index:1;margin:-30px 0 0 -30px;cursor:pointer;background:#000;background:rgba(0,0,0,.8);border-radius:3px;-webkit-transition:all 150ms}.galleria-videoicon i{width:0px;height:0px;border-style:solid;border-width:10px 0 10px 16px;display:block;border-color:transparent transparent transparent #ffffff;margin:20px 0 0 22px}.galleria-image:hover .galleria-videoicon{background:#000}",
                "galleria-videoicon");
        return e(s.create("galleria-videoicon")).html("<i></i>").appendTo(a).click(function() {
            e(this).siblings("img").mouseup()
        })
    }, ba = function() {
        var a = function(a, f, g, h) {
            var o = this.getOptions("easing"), u = this.getStageWidth(), m = {left: u * (a.rewind ? -1 : 1)}, n = {left: 0};
            g ? (m.opacity = 0, n.opacity = 1) : m.opacity = 1;
            e(a.next).css(m);
            s.animate(a.next, n, {duration: a.speed, complete: function(a) {
                    return function() {
                        f();
                        a.css({left: 0})
                    }
                }(e(a.next).add(a.prev)), queue: !1, easing: o});
            if (h)
                a.rewind = !a.rewind;
            if (a.prev) {
                m =
                        {left: 0};
                n = {left: u * (a.rewind ? 1 : -1)};
                if (g)
                    m.opacity = 1, n.opacity = 0;
                e(a.prev).css(m);
                s.animate(a.prev, n, {duration: a.speed, queue: !1, easing: o, complete: function() {
                        e(this).css("opacity", 0)
                    }})
            }
        };
        return{active: !1, init: function(a, e, g) {
                ba.effects.hasOwnProperty(a) && ba.effects[a].call(this, e, g)
            }, effects: {fade: function(a, f) {
                    e(a.next).css({opacity: 0, left: 0});
                    s.animate(a.next, {opacity: 1}, {duration: a.speed, complete: f});
                    a.prev && (e(a.prev).css("opacity", 1).show(), s.animate(a.prev, {opacity: 0}, {duration: a.speed}))
                },
                flash: function(a, f) {
                    e(a.next).css({opacity: 0, left: 0});
                    a.prev ? s.animate(a.prev, {opacity: 0}, {duration: a.speed / 2, complete: function() {
                            s.animate(a.next, {opacity: 1}, {duration: a.speed, complete: f})
                        }}) : s.animate(a.next, {opacity: 1}, {duration: a.speed, complete: f})
                }, pulse: function(a, f) {
                    a.prev && e(a.prev).hide();
                    e(a.next).css({opacity: 0, left: 0}).show();
                    s.animate(a.next, {opacity: 1}, {duration: a.speed, complete: f})
                }, slide: function() {
                    a.apply(this, s.array(arguments))
                }, fadeslide: function() {
                    a.apply(this, s.array(arguments).concat([!0]))
                },
                doorslide: function() {
                    a.apply(this, s.array(arguments).concat([!1, !0]))
                }}}
    }();
    X.listen();
    e.event.special["click:fast"] = {propagate: !0, add: function(a) {
            if (f.TOUCH)
                e(this).on("touchstart.fast", function(c) {
                    var f = c.originalEvent, g, h, o = 0;
                    if (f.touches.length == 1)
                        g = f.touches[0].pageX, h = f.touches[0].pageY, e(this).on("touchmove.fast", function(a) {
                            a = a.originalEvent.touches;
                            a.length == 1 && (o = r.max(r.abs(g - a[0].pageX), r.abs(h - a[0].pageY)))
                        }), e(this).on("touchend.fast", function() {
                            if (o > 4)
                                return e(this).off("touchend.fast touchmove.fast");
                            a.handler.call(this, c);
                            e(this).off("touchend.fast touchmove.fast")
                        })
                });
            else
                e(this).on("click.fast", a.handler)
        }, remove: function(a) {
            f.TOUCH ? e(this).off("touchstart.fast touchmove.fast touchend.fast") : e(this).off("click.fast", a.handler)
        }};
    z.on("orientationchange", function() {
        e(this).resize()
    });
    f = function() {
        var a = this;
        this._options = {};
        this._playing = !1;
        this._playtime = 5E3;
        this._active = null;
        this._queue = {length: 0};
        this._data = [];
        this._dom = {};
        this._thumbnails = [];
        this._layers = [];
        this._firstrun = this._initialized =
                !1;
        this._stageHeight = this._stageWidth = 0;
        this._target = t;
        this._binds = [];
        this._id = parseInt(r.random() * 1E4, 10);
        e.each("container stage images image-nav image-nav-left image-nav-right info info-text info-title info-description thumbnails thumbnails-list thumbnails-container thumb-nav-left thumb-nav-right loader counter tooltip".split(" "), function(c, e) {
            a._dom[e] = s.create("galleria-" + e)
        });
        e.each("current total".split(" "), function(c, e) {
            a._dom[e] = s.create("galleria-" + e, "span")
        });
        var c = this._keyboard = {keys: {UP: 38,
                DOWN: 40, LEFT: 37, RIGHT: 39, RETURN: 13, ESCAPE: 27, BACKSPACE: 8, SPACE: 32}, map: {}, bound: !1, press: function(e) {
                var g = e.keyCode || e.which;
                g in c.map && typeof c.map[g] === "function" && c.map[g].call(a, e)
            }, attach: function(a) {
                var e, g;
                for (e in a)
                    a.hasOwnProperty(e) && (g = e.toUpperCase(), g in c.keys ? c.map[c.keys[g]] = a[e] : c.map[g] = a[e]);
                if (!c.bound)
                    c.bound = !0, A.on("keydown", c.press)
            }, detach: function() {
                c.bound = !1;
                c.map = {};
                A.off("keydown", c.press)
            }}, j = this._controls = {0: t, 1: t, active: 0, swap: function() {
                j.active = j.active ? 0 : 1
            },
            getActive: function() {
                return a._options.swipe ? j.slides[a._active] : j[j.active]
            }, getNext: function() {
                return a._options.swipe ? j.slides[a.getNext(a._active)] : j[1 - j.active]
            }, slides: [], frames: [], layers: []}, g = this._carousel = {next: a.$("thumb-nav-right"), prev: a.$("thumb-nav-left"), width: 0, current: 0, max: 0, hooks: [], update: function() {
                var c = 0, f = 0, j = [0];
                e.each(a._thumbnails, function(a, g) {
                    if (g.ready) {
                        c += g.outerWidth || e(g.container).outerWidth(!0);
                        var h = e(g.container).width();
                        c += h - r.floor(h);
                        j[a + 1] = c;
                        f = r.max(f, g.outerHeight ||
                                e(g.container).outerHeight(!0))
                    }
                });
                a.$("thumbnails").css({width: c, height: f});
                g.max = c;
                g.hooks = j;
                g.width = a.$("thumbnails-list").width();
                g.setClasses();
                a.$("thumbnails-container").toggleClass("galleria-carousel", c > g.width);
                g.width = a.$("thumbnails-list").width()
            }, bindControls: function() {
                var c;
                g.next.on("click:fast", function(e) {
                    e.preventDefault();
                    if (a._options.carouselSteps === "auto")
                        for (c = g.current; c < g.hooks.length; c++) {
                            if (g.hooks[c] - g.hooks[g.current] > g.width) {
                                g.set(c - 2);
                                break
                            }
                        }
                    else
                        g.set(g.current + a._options.carouselSteps)
                });
                g.prev.on("click:fast", function(e) {
                    e.preventDefault();
                    if (a._options.carouselSteps === "auto")
                        for (c = g.current; c >= 0; c--)
                            if (g.hooks[g.current] - g.hooks[c] > g.width) {
                                g.set(c + 2);
                                break
                            } else {
                                if (c === 0) {
                                    g.set(0);
                                    break
                                }
                            }
                    else
                        g.set(g.current - a._options.carouselSteps)
                })
            }, set: function(a) {
                for (a = r.max(a, 0); g.hooks[a - 1] + g.width >= g.max && a >= 0; )
                    a--;
                g.current = a;
                g.animate()
            }, getLast: function(a) {
                return(a || g.current) - 1
            }, follow: function(a) {
                if (a === 0 || a === g.hooks.length - 2)
                    g.set(a);
                else {
                    for (var c = g.current; g.hooks[c] - g.hooks[g.current] <
                            g.width && c <= g.hooks.length; )
                        c++;
                    a - 1 < g.current ? g.set(a - 1) : a + 2 > c && g.set(a - c + g.current + 2)
                }
            }, setClasses: function() {
                g.prev.toggleClass("disabled", !g.current);
                g.next.toggleClass("disabled", g.hooks[g.current] + g.width >= g.max)
            }, animate: function() {
                g.setClasses();
                var c = g.hooks[g.current] * -1;
                isNaN(c) || (a.$("thumbnails").css("left", function() {
                    return e(this).css("left")
                }), s.animate(a.get("thumbnails"), {left: c}, {duration: a._options.carouselSpeed, easing: a._options.easing, queue: !1}))
            }}, v = this._tooltip = {initialized: !1,
            open: !1, timer: "tooltip" + a._id, swapTimer: "swap" + a._id, init: function() {
                v.initialized = !0;
                s.insertStyleTag(".galleria-tooltip{padding:3px 8px;max-width:50%;background:#ffe;color:#000;z-index:3;position:absolute;font-size:11px;line-height:1.3;opacity:0;box-shadow:0 0 2px rgba(0,0,0,.4);-moz-box-shadow:0 0 2px rgba(0,0,0,.4);-webkit-box-shadow:0 0 2px rgba(0,0,0,.4);}", "galleria-tooltip");
                a.$("tooltip").css({opacity: 0.8, visibility: "visible", display: "none"})
            }, move: function(c) {
                var e = a.getMousePosition(c).x,
                        c = a.getMousePosition(c).y, g = a.$("tooltip"), d = c, f = g.outerHeight(!0) + 1, j = g.outerWidth(!0), h = f + 15, j = a.$("container").width() - j - 2, m = a.$("container").height() - f - 2;
                !isNaN(e) && !isNaN(d) && (e += 10, d -= f + 8, e = r.max(0, r.min(j, e)), d = r.max(0, r.min(m, d)), c < h && (d = h), g.css({left: e, top: d}))
            }, bind: function(c, g) {
                if (!f.TOUCH) {
                    v.initialized || v.init();
                    var j = function() {
                        a.$("container").off("mousemove", v.move);
                        a.clearTimer(v.timer);
                        a.$("tooltip").stop().animate({opacity: 0}, 200, function() {
                            a.$("tooltip").hide();
                            a.addTimer(v.swapTimer,
                                    function() {
                                        v.open = !1
                                    }, 1E3)
                        })
                    }, d = function(d, c) {
                        v.define(d, c);
                        e(d).hover(function() {
                            a.clearTimer(v.swapTimer);
                            a.$("container").off("mousemove", v.move).on("mousemove", v.move).trigger("mousemove");
                            v.show(d);
                            a.addTimer(v.timer, function() {
                                a.$("tooltip").stop().show().animate({opacity: 1});
                                v.open = !0
                            }, v.open ? 0 : 500)
                        }, j).click(j)
                    };
                    typeof g === "string" ? d(c in a._dom ? a.get(c) : c, g) : e.each(c, function(c, e) {
                        d(a.get(c), e)
                    })
                }
            }, show: function(c) {
                var c = e(c in a._dom ? a.get(c) : c), g = c.data("tt"), f = function(a) {
                    h.setTimeout(function(a) {
                        return function() {
                            v.move(a)
                        }
                    }(a),
                            10);
                    c.off("mouseup", f)
                };
                if (g = typeof g === "function" ? g() : g)
                    a.$("tooltip").html(g.replace(/\s/, "&#160;")), c.on("mouseup", f)
            }, define: function(c, g) {
                if (typeof g !== "function")
                    var f = g, g = function() {
                    return f
                };
                c = e(c in a._dom ? a.get(c) : c).data("tt", g);
                v.show(c)
            }}, o = this._fullscreen = {scrolled: 0, crop: t, active: !1, prev: e(), beforeEnter: function(a) {
                a()
            }, beforeExit: function(a) {
                a()
            }, keymap: a._keyboard.map, parseCallback: function(c, g) {
                return ba.active ? function() {
                    typeof c == "function" && c.call(a);
                    var f = a._controls.getActive(),
                            d = a._controls.getNext();
                    a._scaleImage(d);
                    a._scaleImage(f);
                    g && a._options.trueFullscreen && e(f.container).add(d.container).trigger("transitionend")
                } : c
            }, enter: function(c) {
                o.beforeEnter(function() {
                    c = o.parseCallback(c, !0);
                    a._options.trueFullscreen && X.support ? (o.active = !0, s.forceStyles(a.get("container"), {width: "100%", height: "100%"}), a.rescale(), f.MAC ? !f.SAFARI || !/version\/[1-5]/.test(L) ? (a.$("container").css("opacity", 0).addClass("fullscreen"), h.setTimeout(function() {
                        o.scale();
                        a.$("container").css("opacity",
                                1)
                    }, 50)) : (a.$("stage").css("opacity", 0), h.setTimeout(function() {
                        o.scale();
                        a.$("stage").css("opacity", 1)
                    }, 4)) : a.$("container").addClass("fullscreen"), z.resize(o.scale), X.enter(a, c, a.get("container"))) : (o.scrolled = z.scrollTop(), f.TOUCH || h.scrollTo(0, 0), o._enter(c))
                })
            }, _enter: function(c) {
                o.active = !0;
                if (T)
                    o.iframe = function() {
                        var a, d = n.referrer, c = n.createElement("a"), g = h.location;
                        c.href = d;
                        if (c.protocol != g.protocol || c.hostname != g.hostname || c.port != g.port)
                            return f.raise("Parent fullscreen not available. Iframe protocol, domains and ports must match."),
                                    !1;
                        o.pd = h.parent.document;
                        e(o.pd).find("iframe").each(function() {
                            if ((this.contentDocument || this.contentWindow.document) === n)
                                return a = this, !1
                        });
                        return a
                    }();
                s.hide(a.getActiveImage());
                if (T && o.iframe)
                    o.iframe.scrolled = e(h.parent).scrollTop(), h.parent.scrollTo(0, 0);
                var g = a.getData(), j = a._options, d = !a._options.trueFullscreen || !X.support, m = {height: "100%", overflow: "hidden", margin: 0, padding: 0};
                if (d) {
                    a.$("container").addClass("fullscreen");
                    o.prev = a.$("container").prev();
                    if (!o.prev.length)
                        o.parent = a.$("container").parent();
                    a.$("container").appendTo("body");
                    s.forceStyles(a.get("container"), {position: f.TOUCH ? "absolute" : "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1E4});
                    s.forceStyles(M().html, m);
                    s.forceStyles(M().body, m)
                }
                T && o.iframe && (s.forceStyles(o.pd.documentElement, m), s.forceStyles(o.pd.body, m), s.forceStyles(o.iframe, e.extend(m, {width: "100%", height: "100%", top: 0, left: 0, position: "fixed", zIndex: 1E4, border: "none"})));
                o.keymap = e.extend({}, a._keyboard.map);
                a.attachKeyboard({escape: a.exitFullscreen, right: a.next,
                    left: a.prev});
                o.crop = j.imageCrop;
                if (j.fullscreenCrop != t)
                    j.imageCrop = j.fullscreenCrop;
                if (g && g.big && g.image !== g.big) {
                    var j = new f.Picture, v = j.isCached(g.big), u = a.getIndex(), r = a._thumbnails[u];
                    a.trigger({type: f.LOADSTART, cached: v, rewind: !1, index: u, imageTarget: a.getActiveImage(), thumbTarget: r, galleriaData: g});
                    j.load(g.big, function(d) {
                        a._scaleImage(d, {complete: function(d) {
                                a.trigger({type: f.LOADFINISH, cached: v, index: u, rewind: !1, imageTarget: d.image, thumbTarget: r});
                                var c = a._controls.getActive().image;
                                c && e(c).width(d.image.width).height(d.image.height).attr("style",
                                        e(d.image).attr("style")).attr("src", d.image.src)
                            }})
                    })
                }
                a.rescale(function() {
                    a.addTimer(!1, function() {
                        d && s.show(a.getActiveImage());
                        typeof c === "function" && c.call(a);
                        a.rescale()
                    }, 100);
                    a.trigger(f.FULLSCREEN_ENTER)
                });
                d ? z.resize(o.scale) : s.show(a.getActiveImage())
            }, scale: function() {
                a.rescale()
            }, exit: function(c) {
                o.beforeExit(function() {
                    c = o.parseCallback(c);
                    a._options.trueFullscreen && X.support ? X.exit(c) : o._exit(c)
                })
            }, _exit: function(c) {
                o.active = !1;
                var e = !a._options.trueFullscreen || !X.support, g = a.$("container").removeClass("fullscreen");
                o.parent ? o.parent.prepend(g) : g.insertAfter(o.prev);
                if (e && (s.hide(a.getActiveImage()), s.revertStyles(a.get("container"), M().html, M().body), f.TOUCH || h.scrollTo(0, o.scrolled), (g = a._controls.frames[a._controls.active]) && g.image))
                    g.image.src = g.image.src;
                T && o.iframe && (s.revertStyles(o.pd.documentElement, o.pd.body, o.iframe), o.iframe.scrolled && h.parent.scrollTo(0, o.iframe.scrolled));
                a.detachKeyboard();
                a.attachKeyboard(o.keymap);
                a._options.imageCrop = o.crop;
                var g = a.getData().big, d = a._controls.getActive().image;
                !a.getData().iframe && d && g && g == d.src && h.setTimeout(function(a) {
                    return function() {
                        d.src = a
                    }
                }(a.getData().image), 1);
                a.rescale(function() {
                    a.addTimer(!1, function() {
                        e && s.show(a.getActiveImage());
                        typeof c === "function" && c.call(a);
                        z.trigger("resize")
                    }, 50);
                    a.trigger(f.FULLSCREEN_EXIT)
                });
                z.off("resize", o.scale)
            }}, u = this._idle = {trunk: [], bound: !1, active: !1, add: function(a, c, g, d) {
                if (a) {
                    u.bound || u.addEvent();
                    a = e(a);
                    typeof g == "boolean" && (d = g, g = {});
                    var g = g || {}, f = {}, j;
                    for (j in c)
                        c.hasOwnProperty(j) && (f[j] = a.css(j));
                    a.data("idle", {from: e.extend(f, g), to: c, complete: !0, busy: !1});
                    d ? a.css(c) : u.addTimer();
                    u.trunk.push(a)
                }
            }, remove: function(c) {
                c = e(c);
                e.each(u.trunk, function(a, e) {
                    e && e.length && !e.not(c).length && (c.css(c.data("idle").from), u.trunk.splice(a, 1))
                });
                u.trunk.length || (u.removeEvent(), a.clearTimer(u.timer))
            }, addEvent: function() {
                u.bound = !0;
                a.$("container").on("mousemove click", u.showAll);
                if (a._options.idleMode == "hover")
                    a.$("container").on("mouseleave", u.hide)
            }, removeEvent: function() {
                u.bound = !1;
                a.$("container").on("mousemove click",
                        u.showAll);
                a._options.idleMode == "hover" && a.$("container").off("mouseleave", u.hide)
            }, addTimer: function() {
                a._options.idleMode != "hover" && a.addTimer("idle", function() {
                    u.hide()
                }, a._options.idleTime)
            }, hide: function() {
                if (a._options.idleMode && a.getIndex() !== !1) {
                    a.trigger(f.IDLE_ENTER);
                    var c = u.trunk.length;
                    e.each(u.trunk, function(e, g) {
                        var d = g.data("idle");
                        if (d)
                            g.data("idle").complete = !1, s.animate(g, d.to, {duration: a._options.idleSpeed, complete: function() {
                                    if (e == c - 1)
                                        u.active = !1
                                }})
                    })
                }
            }, showAll: function() {
                a.clearTimer("idle");
                e.each(u.trunk, function(a, c) {
                    u.show(c)
                })
            }, show: function(c) {
                var g = c.data("idle");
                if (!u.active || !g.busy && !g.complete)
                    g.busy = !0, a.trigger(f.IDLE_EXIT), a.clearTimer("idle"), s.animate(c, g.from, {duration: a._options.idleSpeed / 2, complete: function() {
                            u.active = !0;
                            e(c).data("idle").busy = !1;
                            e(c).data("idle").complete = !0
                        }});
                u.addTimer()
            }}, m = this._lightbox = {width: 0, height: 0, initialized: !1, active: null, image: null, elems: {}, keymap: !1, init: function() {
                if (!m.initialized) {
                    m.initialized = !0;
                    var c = {}, g = a._options, j = "", g = {overlay: "position:fixed;display:none;opacity:" +
                                g.overlayOpacity + ";filter:alpha(opacity=" + g.overlayOpacity * 100 + ");top:0;left:0;width:100%;height:100%;background:" + g.overlayBackground + ";z-index:99990", box: "position:fixed;display:none;width:400px;height:400px;top:50%;left:50%;margin-top:-200px;margin-left:-200px;z-index:99991", shadow: "position:absolute;background:#000;width:100%;height:100%;", content: "position:absolute;background-color:#fff;top:10px;left:10px;right:10px;bottom:10px;overflow:hidden", info: "position:absolute;bottom:10px;left:10px;right:10px;color:#444;font:11px/13px arial,sans-serif;height:13px",
                        close: "position:absolute;top:10px;right:10px;height:20px;width:20px;background:#fff;text-align:center;cursor:pointer;color:#444;font:16px/22px arial,sans-serif;z-index:99999", image: "position:absolute;top:10px;left:10px;right:10px;bottom:30px;overflow:hidden;display:block;", prevholder: "position:absolute;width:50%;top:0;bottom:40px;cursor:pointer;", nextholder: "position:absolute;width:50%;top:0;bottom:40px;right:-1px;cursor:pointer;", prev: "position:absolute;top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;left:20px;display:none;text-align:center;color:#000;font:bold 16px/36px arial,sans-serif",
                        next: "position:absolute;top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;right:20px;left:auto;display:none;font:bold 16px/36px arial,sans-serif;text-align:center;color:#000", title: "float:left", counter: "float:right;margin-left:8px;"}, d = {};
                    H && H > 7 && (g.nextholder += "background:#000;filter:alpha(opacity=0);", g.prevholder += "background:#000;filter:alpha(opacity=0);");
                    e.each(g, function(a, d) {
                        j += ".galleria-lightbox-" + a + "{" + d + "}"
                    });
                    j += ".galleria-lightbox-box.iframe .galleria-lightbox-prevholder,.galleria-lightbox-box.iframe .galleria-lightbox-nextholder{width:100px;height:100px;top:50%;margin-top:-70px}";
                    s.insertStyleTag(j, "galleria-lightbox");
                    e.each("overlay box content shadow title info close prevholder prev nextholder next counter image".split(" "), function(d, e) {
                        a.addElement("lightbox-" + e);
                        c[e] = m.elems[e] = a.get("lightbox-" + e)
                    });
                    m.image = new f.Picture;
                    e.each({box: "shadow content close prevholder nextholder", info: "title counter", content: "info image", prevholder: "prev", nextholder: "next"}, function(a, c) {
                        var g = [];
                        e.each(c.split(" "), function(a, d) {
                            g.push("lightbox-" + d)
                        });
                        d["lightbox-" + a] = g
                    });
                    a.append(d);
                    e(c.image).append(m.image.container);
                    e(M().body).append(c.overlay, c.box);
                    (function(a) {
                        return a.hover(function() {
                            e(this).css("color", "#bbb")
                        }, function() {
                            e(this).css("color", "#444")
                        })
                    })(e(c.close).on("click:fast", m.hide).html("&#215;"));
                    e.each(["Prev", "Next"], function(a, d) {
                        var g = e(c[d.toLowerCase()]).html(/v/.test(d) ? "&#8249;&#160;" : "&#160;&#8250;"), j = e(c[d.toLowerCase() + "holder"]);
                        j.on("click:fast", function() {
                            m["show" + d]()
                        });
                        H < 8 || f.TOUCH ? g.show() : j.hover(function() {
                            g.show()
                        }, function() {
                            g.stop().fadeOut(200)
                        })
                    });
                    e(c.overlay).on("click:fast", m.hide);
                    if (f.IPAD)
                        a._options.lightboxTransitionSpeed = 0
                }
            }, rescale: function(c) {
                var g = r.min(z.width() - 40, m.width), j = r.min(z.height() - 60, m.height), j = r.min(g / m.width, j / m.height), g = r.round(m.width * j) + 40, j = r.round(m.height * j) + 60, g = {width: g, height: j, "margin-top": r.ceil(j / 2) * -1, "margin-left": r.ceil(g / 2) * -1};
                c ? e(m.elems.box).css(g) : e(m.elems.box).animate(g, {duration: a._options.lightboxTransitionSpeed, easing: a._options.easing, complete: function() {
                        var d = m.image, c = a._options.lightboxFadeSpeed;
                        a.trigger({type: f.LIGHTBOX_IMAGE, imageTarget: d.image});
                        e(d.container).show();
                        e(d.image).animate({opacity: 1}, c);
                        s.show(m.elems.info, c)
                    }})
            }, hide: function() {
                m.image.image = null;
                z.off("resize", m.rescale);
                e(m.elems.box).hide().find("iframe").remove();
                s.hide(m.elems.info);
                a.detachKeyboard();
                a.attachKeyboard(m.keymap);
                m.keymap = !1;
                s.hide(m.elems.overlay, 200, function() {
                    e(this).hide().css("opacity", a._options.overlayOpacity);
                    a.trigger(f.LIGHTBOX_CLOSE)
                })
            }, showNext: function() {
                m.show(a.getNext(m.active))
            }, showPrev: function() {
                m.show(a.getPrev(m.active))
            },
            show: function(c) {
                m.active = c = typeof c === "number" ? c : a.getIndex() || 0;
                m.initialized || m.init();
                a.trigger(f.LIGHTBOX_OPEN);
                if (!m.keymap)
                    m.keymap = e.extend({}, a._keyboard.map), a.attachKeyboard({escape: m.hide, right: m.showNext, left: m.showPrev});
                z.off("resize", m.rescale);
                var g = a.getData(c), j = a.getDataLength(), d = a.getNext(c), o, v, u;
                s.hide(m.elems.info);
                try {
                    for (u = a._options.preload; u > 0; u--)
                        v = new f.Picture, o = a.getData(d), v.preload(o.big ? o.big : o.image), d = a.getNext(d)
                } catch (n) {
                }
                m.image.isIframe = g.iframe && !g.image;
                e(m.elems.box).toggleClass("iframe", m.image.isIframe);
                e(m.image.container).find(".galleria-videoicon").remove();
                m.image.load(g.big || g.image || g.iframe, function(d) {
                    if (d.isIframe) {
                        var f = e(h).width(), o = e(h).height();
                        if (d.video && a._options.maxVideoSize) {
                            var v = r.min(a._options.maxVideoSize / f, a._options.maxVideoSize / o);
                            v < 1 && (f *= v, o *= v)
                        }
                        m.width = f;
                        m.height = o
                    } else
                        m.width = d.original.width, m.height = d.original.height;
                    e(d.image).css({width: d.isIframe ? "100%" : "100.1%", height: d.isIframe ? "100%" : "100.1%", top: 0, bottom: 0,
                        zIndex: 99998, opacity: 0, visibility: "visible"}).parent().height("100%");
                    m.elems.title.innerHTML = g.title || "";
                    m.elems.counter.innerHTML = c + 1 + " / " + j;
                    z.resize(m.rescale);
                    m.rescale();
                    if (g.image && g.iframe) {
                        e(m.elems.box).addClass("iframe");
                        if (g.video) {
                            var u = la(d.container).hide();
                            h.setTimeout(function() {
                                u.fadeIn(200)
                            }, 200)
                        }
                        e(d.image).css("cursor", "pointer").mouseup(function(a, d) {
                            return function(c) {
                                e(m.image.container).find(".galleria-videoicon").remove();
                                c.preventDefault();
                                d.isIframe = !0;
                                d.load(a.iframe + (a.video ?
                                        "&autoplay=1" : ""), {width: "100%", height: H < 8 ? e(m.image.container).height() : "100%"})
                            }
                        }(g, d))
                    }
                });
                e(m.elems.overlay).show().css("visibility", "visible");
                e(m.elems.box).show()
            }}, x = this._timer = {trunk: {}, add: function(a, c, e, d) {
                a = a || (new Date).getTime();
                d = d || !1;
                this.clear(a);
                if (d)
                    var g = c, c = function() {
                    g();
                    x.add(a, c, e)
                };
                this.trunk[a] = h.setTimeout(c, e)
            }, clear: function(a) {
                var c = function(a) {
                    h.clearTimeout(this.trunk[a]);
                    delete this.trunk[a]
                }, e;
                if (a && a in this.trunk)
                    c.call(this, a);
                else if (typeof a === "undefined")
                    for (e in this.trunk)
                        this.trunk.hasOwnProperty(e) &&
                                c.call(this, e)
            }};
        return this
    };
    f.prototype = {constructor: f, init: function(a, c) {
            c = aa(c);
            this._original = {target: a, options: c, data: null};
            this._target = this._dom.target = a.nodeName ? a : e(a).get(0);
            this._original.html = this._target.innerHTML;
            S.push(this);
            if (this._target) {
                this._options = {autoplay: !1, carousel: !0, carouselFollow: !0, carouselSpeed: 400, carouselSteps: "auto", clicknext: !1, dailymotion: {foreground: "%23EEEEEE", highlight: "%235BCEC5", background: "%23222222", logo: 0, hideInfos: 1}, dataConfig: function() {
                        return{}
                    }, dataSelector: "img",
                    dataSort: !1, dataSource: this._target, debug: t, dummy: t, easing: "galleria", extend: function() {
                    }, fullscreenCrop: t, fullscreenDoubleTap: !0, fullscreenTransition: t, height: 0, idleMode: !0, idleTime: 3E3, idleSpeed: 200, imageCrop: !1, imageMargin: 0, imagePan: !1, imagePanSmoothness: 12, imagePosition: "50%", imageTimeout: t, initialTransition: t, keepSource: !1, layerFollow: !0, lightbox: !1, lightboxFadeSpeed: 200, lightboxTransitionSpeed: 200, linkSourceImages: !0, maxScaleRatio: t, maxVideoSize: t, minScaleRatio: t, overlayOpacity: 0.85, overlayBackground: "#0b0b0b",
                    pauseOnInteraction: !0, popupLinks: !1, preload: 2, queue: !0, responsive: !0, show: 0, showInfo: !0, showCounter: !0, showImagenav: !0, swipe: !0, thumbCrop: !0, thumbEventType: "click:fast", thumbMargin: 0, thumbQuality: "auto", thumbDisplayOrder: !0, thumbPosition: "50%", thumbnails: !0, touchTransition: t, transition: "fade", transitionInitial: t, transitionSpeed: 400, trueFullscreen: !0, useCanvas: !1, variation: "", videoPoster: !0, vimeo: {title: 0, byline: 0, portrait: 0, color: "aaaaaa"}, wait: 5E3, width: "auto", youtube: {modestbranding: 1, autohide: 1,
                        color: "white", hd: 1, rel: 0, showinfo: 0}};
                this._options.initialTransition = this._options.initialTransition || this._options.transitionInitial;
                c && c.debug === !1 && (E = !1);
                if (c && typeof c.dummy === "string")
                    C = c.dummy;
                if (!f.TOUCH)
                    this._options.swipe = !1;
                e(this._target).children().hide();
                f.QUIRK && f.raise("Your page is in Quirks mode, Galleria may not render correctly. Please validate your HTML and add a correct doctype.");
                typeof f.theme === "object" ? this._init() : ua.push(this);
                return this
            } else
                f.raise("Target not found",
                        !0)
        }, _init: function() {
            var a = this, c = this._options;
            if (this._initialized)
                return f.raise("Init failed: Gallery instance already initialized."), this;
            this._initialized = !0;
            if (!f.theme)
                return f.raise("Init failed: No theme found.", !0), this;
            e.extend(!0, c, f.theme.defaults, this._original.options, f.configure.options);
            if (c.swipe)
                c.clicknext = !1, c.imagePan = !1;
            (function(a) {
                "getContext"in a && (V = V || {elem: a, context: a.getContext("2d"), cache: {}, length: 0})
            })(n.createElement("canvas"));
            this.bind(f.DATA, function() {
                h.screen &&
                        h.screen.width && Array.prototype.forEach && this._data.forEach(function(a) {
                            var c = "devicePixelRatio"in h ? h.devicePixelRatio : 1;
                            if (r.max(h.screen.width, h.screen.height) * c < 1024)
                                a.big = a.image
                        });
                this._original.data = this._data;
                this.get("total").innerHTML = this.getDataLength();
                var c = this.$("container");
                if (a._options.height < 2)
                    a._userRatio = a._ratio = a._options.height;
                var e = {width: 0, height: 0}, g = function() {
                    return a.$("stage").height()
                };
                s.wait({until: function() {
                        e = a._getWH();
                        c.width(e.width).height(e.height);
                        return g() &&
                                e.width && e.height > 50
                    }, success: function() {
                        a._width = e.width;
                        a._height = e.height;
                        a._ratio = a._ratio || e.height / e.width;
                        f.WEBKIT ? h.setTimeout(function() {
                            a._run()
                        }, 1) : a._run()
                    }, error: function() {
                        g() ? f.raise("Could not extract sufficient width/height of the gallery container. Traced measures: width:" + e.width + "px, height: " + e.height + "px.", !0) : f.raise("Could not extract a stage height from the CSS. Traced height: " + g() + "px.", !0)
                    }, timeout: typeof this._options.wait == "number" ? this._options.wait : !1})
            });
            this.append({"info-text": ["info-title",
                    "info-description"], info: ["info-text"], "image-nav": ["image-nav-right", "image-nav-left"], stage: ["images", "loader", "counter", "image-nav"], "thumbnails-list": ["thumbnails"], "thumbnails-container": ["thumb-nav-left", "thumbnails-list", "thumb-nav-right"], container: ["stage", "thumbnails-container", "info", "tooltip"]});
            s.hide(this.$("counter").append(this.get("current"), n.createTextNode(" / "), this.get("total")));
            this.setCounter("&#8211;");
            s.hide(a.get("tooltip"));
            this.$("container").addClass((f.TOUCH ? "touch" :
                    "notouch") + " " + this._options.variation);
            this._options.swipe || e.each(Array(2), function(c) {
                var g = new f.Picture;
                e(g.container).css({position: "absolute", top: 0, left: 0}).prepend(a._layers[c] = e(s.create("galleria-layer")).css({position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 2})[0]);
                a.$("images").append(g.container);
                a._controls[c] = g;
                var j = new f.Picture;
                j.isIframe = !0;
                e(j.container).attr("class", "galleria-frame").css({position: "absolute", top: 0, left: 0, zIndex: 4, background: "#000", display: "none"}).appendTo(g.container);
                a._controls.frames[c] = j
            });
            this.$("images").css({position: "relative", top: 0, left: 0, width: "100%", height: "100%"});
            if (c.swipe)
                this.$("images").css({position: "absolute", top: 0, left: 0, width: 0, height: "100%"}), this.finger = new f.Finger(this.get("stage"), {onchange: function(c) {
                        a.setCounter(c).setInfo(c).pause();
                        a.show(c)
                    }, oncomplete: function(c) {
                        c = r.max(0, r.min(parseInt(c, 10), a.getDataLength() - 1));
                        a.getData(c) && (a.$("images").find("iframe").remove(), a.$("images").find(".galleria-frame").css("opacity", 0).hide(),
                                a._options.carousel && a._options.carouselFollow && a._carousel.follow(c))
                    }}), this.bind(f.RESCALE, function() {
                    this.finger.setup()
                }), this.$("stage").on("click", function() {
                    var c = a.getData();
                    if (c)
                        if (c.iframe) {
                            a.isPlaying() && a.pause();
                            var g = a._controls.frames[a._active], f = a._stageWidth, j = a._stageHeight;
                            e(g.container).find("iframe").length || (e(g.container).css({width: f, height: j, opacity: 0}).show().animate({opacity: 1}, 200), h.setTimeout(function() {
                                g.load(c.iframe + (c.video ? "&autoplay=1" : ""), {width: f, height: j},
                                function(e) {
                                    a.$("container").addClass("videoplay");
                                    e.scale({width: a._stageWidth, height: a._stageHeight, iframelimit: c.video ? a._options.maxVideoSize : t})
                                })
                            }, 100))
                        } else if (c.link)
                            a._options.popupLinks ? h.open(c.link, "_blank") : h.location.href = c.link
                }), this.bind(f.IMAGE, function(c) {
                    a.setCounter(c.index);
                    a.setInfo(c.index);
                    var c = this.getNext(), g = this.getPrev(), f = [g, c];
                    f.push(this.getNext(c), this.getPrev(g), a._controls.slides.length - 1);
                    var j = [];
                    e.each(f, function(a, c) {
                        e.inArray(c, j) == -1 && j.push(c)
                    });
                    e.each(j,
                            function(c, g) {
                                var f = a.getData(g), j = a._controls.slides[g], d = a.isFullscreen() && f.big ? f.big : f.image || f.iframe;
                                if (f.iframe && !f.image)
                                    j.isIframe = !0;
                                j.ready || a._controls.slides[g].load(d, function(d) {
                                    d.isIframe || e(d.image).css("visibility", "hidden");
                                    a._scaleImage(d, {complete: function(a) {
                                            a.isIframe || e(a.image).css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 200)
                                        }})
                                })
                            })
                });
            this.$("thumbnails, thumbnails-list").css({overflow: "hidden", position: "relative"});
            this.$("image-nav-right, image-nav-left").on("click:fast",
                    function() {
                        c.pauseOnInteraction && a.pause();
                        var e = /right/.test(this.className) ? "next" : "prev";
                        a[e]()
                    }).on("click", function(a) {
                a.preventDefault();
                (c.clicknext || c.swipe) && a.stopPropagation()
            });
            e.each(["info", "counter", "image-nav"], function(e, g) {
                c["show" + g.substr(0, 1).toUpperCase() + g.substr(1).replace(/-/, "")] === !1 && s.moveOut(a.get(g.toLowerCase()))
            });
            this.load();
            if (!c.keepSource && !H)
                this._target.innerHTML = "";
            this.get("errors") && this.appendChild("target", "errors");
            this.appendChild("target", "container");
            if (c.carousel) {
                var j = 0, g = c.show;
                this.bind(f.THUMBNAIL, function() {
                    this.updateCarousel();
                    ++j == this.getDataLength() && typeof g == "number" && g > 0 && this._carousel.follow(g)
                })
            }
            if (c.responsive)
                z.on("resize", function() {
                    a.isFullscreen() || a.resize()
                });
            if (c.fullscreenDoubleTap)
                this.$("stage").on("touchstart", function() {
                    var c, e, g, f, j, h;
                    a.$("stage").on("touchmove", function() {
                        c = 0
                    });
                    return function(q) {
                        if (!/(-left|-right)/.test(q.target.className))
                            h = s.timestamp(), e = (q.originalEvent.touches ? q.originalEvent.touches[0] :
                                    q).pageX, g = (q.originalEvent.touches ? q.originalEvent.touches[0] : q).pageY, q.originalEvent.touches.length < 2 && h - c < 300 && e - f < 20 && g - j < 20 ? (a.toggleFullscreen(), q.preventDefault()) : (c = h, f = e, j = g)
                    }
                }());
            e.each(f.on.binds, function(c, g) {
                e.inArray(g.hash, a._binds) == -1 && a.bind(g.type, g.callback)
            });
            return this
        }, addTimer: function() {
            this._timer.add.apply(this._timer, s.array(arguments));
            return this
        }, clearTimer: function() {
            this._timer.clear.apply(this._timer, s.array(arguments));
            return this
        }, _getWH: function() {
            var a = this.$("container"),
                    c = this.$("target"), f = this, g = {}, h;
            e.each(["width", "height"], function(e, u) {
                f._options[u] && typeof f._options[u] === "number" ? g[u] = f._options[u] : (h = [s.parseValue(a.css(u)), s.parseValue(c.css(u)), a[u](), c[u]()], f["_" + u] || h.splice(h.length, s.parseValue(a.css("min-" + u)), s.parseValue(c.css("min-" + u))), g[u] = r.max.apply(r, h))
            });
            if (f._userRatio)
                g.height = g.width * f._userRatio;
            return g
        }, _createThumbnails: function(a) {
            this.get("total").innerHTML = this.getDataLength();
            var c, j, g, v = this, o = this._options, u = a ? this._data.length -
                    a.length : 0, m = u, r = [], p = 0, q = H < 8 ? "http://upload.wikimedia.org/wikipedia/commons/c/c0/Blank.gif" : "data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw%3D%3D", z = function() {
                var a = v.$("thumbnails").find(".active");
                if (!a.length)
                    return!1;
                return a.find("img").attr("src")
            }(), d = typeof o.thumbnails === "string" ? o.thumbnails.toLowerCase() : null, x = function(a) {
                return n.defaultView && n.defaultView.getComputedStyle ? n.defaultView.getComputedStyle(c.container, null)[a] : g.css(a)
            }, t = function(a, d,
                    c) {
                return function() {
                    e(c).append(a);
                    v.trigger({type: f.THUMBNAIL, thumbTarget: a, index: d, galleriaData: v.getData(d)})
                }
            }, E = function(a) {
                o.pauseOnInteraction && v.pause();
                var d = e(a.currentTarget).data("index");
                v.getIndex() !== d && v.show(d);
                a.preventDefault()
            }, C = function(a, d) {
                e(a.container).css("visibility", "visible");
                v.trigger({type: f.THUMBNAIL, thumbTarget: a.image, index: a.data.order, galleriaData: v.getData(a.data.order)});
                typeof d == "function" && d.call(v, a)
            }, I = function(a, d) {
                a.scale({width: a.data.width, height: a.data.height,
                    crop: o.thumbCrop, margin: o.thumbMargin, canvas: o.useCanvas, position: o.thumbPosition, complete: function(a) {
                        var c = ["left", "top"], g, f;
                        v.getData(a.index);
                        e.each(["Width", "Height"], function(d, j) {
                            g = j.toLowerCase();
                            if (o.thumbCrop !== !0 || o.thumbCrop === g)
                                f = {}, f[g] = a[g], e(a.container).css(f), f = {}, f[c[d]] = 0, e(a.image).css(f);
                            a["outer" + j] = e(a.container)["outer" + j](!0)
                        });
                        s.toggleQuality(a.image, o.thumbQuality === !0 || o.thumbQuality === "auto" && a.original.width < a.width * 3);
                        o.thumbDisplayOrder && !a.lazy ? e.each(r, function(a,
                                c) {
                            if (a === p && c.ready && !c.displayed)
                                p++, c.displayed = !0, C(c, d)
                        }) : C(a, d)
                    }})
            };
            if (!a)
                this._thumbnails = [], this.$("thumbnails").empty();
            for (; this._data[u]; u++)
                j = this._data[u], a = j.thumb || j.image, (o.thumbnails === !0 || d == "lazy") && (j.thumb || j.image) ? (c = new f.Picture(u), c.index = u, c.displayed = !1, c.lazy = !1, c.video = !1, this.$("thumbnails").append(c.container), g = e(c.container), g.css("visibility", "hidden"), c.data = {width: s.parseValue(x("width")), height: s.parseValue(x("height")), order: u, src: a}, o.thumbCrop !== !0 ? g.css({width: "auto",
                    height: "auto"}) : g.css({width: c.data.width, height: c.data.height}), d == "lazy" ? (g.addClass("lazy"), c.lazy = !0, c.load(q, {height: c.data.height, width: c.data.width})) : c.load(a, I), o.preload === "all" && c.preload(j.image)) : j.iframe || d === "empty" || d === "numbers" ? (c = {container: s.create("galleria-image"), image: s.create("img", "span"), ready: !0, data: {order: u}}, d === "numbers" && e(c.image).text(u + 1), j.iframe && e(c.image).addClass("iframe"), this.$("thumbnails").append(c.container), h.setTimeout(t(c.image, u, c.container), 50 + u *
                        20)) : c = {container: null, image: null}, e(c.container).add(o.keepSource && o.linkSourceImages ? j.original : null).data("index", u).on(o.thumbEventType, E).data("thumbload", I), z === a && e(c.container).addClass("active"), this._thumbnails.push(c);
            r = this._thumbnails.slice(m);
            return this
        }, lazyLoad: function(a, c) {
            var f = a.constructor == Array ? a : [a], g = this, h = 0;
            e.each(f, function(a, u) {
                if (!(u > g._thumbnails.length - 1)) {
                    var m = g._thumbnails[u], s = m.data, p = function() {
                        ++h == f.length && typeof c == "function" && c.call(g)
                    }, q = e(m.container).data("thumbload");
                    m.video ? q.call(g, m, p) : m.load(s.src, function(a) {
                        q.call(g, a, p)
                    })
                }
            });
            return this
        }, lazyLoadChunks: function(a, c) {
            for (var e = this.getDataLength(), g = 0, f = 0, o = [], u = [], m = this, c = c || 0; g < e; g++)
                if (u.push(g), ++f == a || g == e - 1)
                    o.push(u), f = 0, u = [];
            var s = function(a) {
                var e = o.shift();
                e && h.setTimeout(function() {
                    m.lazyLoad(e, function() {
                        s(!0)
                    })
                }, c && a ? c : 0)
            };
            s(!1);
            return this
        }, _run: function() {
            var a = this;
            a._createThumbnails();
            s.wait({timeout: 1E4, until: function() {
                    f.OPERA && a.$("stage").css("display", "inline-block");
                    a._stageWidth =
                            a.$("stage").width();
                    a._stageHeight = a.$("stage").height();
                    return a._stageWidth && a._stageHeight > 50
                }, success: function() {
                    fa.push(a);
                    if (a._options.swipe) {
                        var c = a.$("images").width(a.getDataLength() * a._stageWidth);
                        e.each(Array(a.getDataLength()), function(j) {
                            var g = new f.Picture, h = a.getData(j);
                            e(g.container).css({position: "absolute", top: 0, left: a._stageWidth * j}).prepend(a._layers[j] = e(s.create("galleria-layer")).css({position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 2})[0]).appendTo(c);
                            h.video && la(g.container);
                            a._controls.slides.push(g);
                            j = new f.Picture;
                            j.isIframe = !0;
                            e(j.container).attr("class", "galleria-frame").css({position: "absolute", top: 0, left: 0, zIndex: 4, background: "#000", display: "none"}).appendTo(g.container);
                            a._controls.frames.push(j)
                        });
                        a.finger.setup()
                    }
                    s.show(a.get("counter"));
                    a._options.carousel && a._carousel.bindControls();
                    if (a._options.autoplay) {
                        a.pause();
                        if (typeof a._options.autoplay === "number")
                            a._playtime = a._options.autoplay;
                        a._playing = !0
                    }
                    a._firstrun ? (a._options.autoplay && a.trigger(f.PLAY), typeof a._options.show ===
                            "number" && a.show(a._options.show)) : (a._firstrun = !0, f.History && f.History.change(function(c) {
                        isNaN(c) ? h.history.go(-1) : a.show(c, t, !0)
                    }), a.trigger(f.READY), f.theme.init.call(a, a._options), e.each(f.ready.callbacks, function(c, e) {
                        typeof e == "function" && e.call(a, a._options)
                    }), a._options.extend.call(a, a._options), /^[0-9]{1,4}$/.test(x) && f.History ? a.show(x, t, !0) : a._data[a._options.show] && a.show(a._options.show), a._options.autoplay && a.trigger(f.PLAY))
                }, error: function() {
                    f.raise("Stage width or height is too small to show the gallery. Traced measures: width:" +
                            a._stageWidth + "px, height: " + a._stageHeight + "px.", !0)
                }})
        }, load: function(a, c, j) {
            var g = this, h = this._options;
            this._data = [];
            this._thumbnails = [];
            this.$("thumbnails").empty();
            typeof c === "function" && (j = c, c = null);
            a = a || h.dataSource;
            c = c || h.dataSelector;
            j = j || h.dataConfig;
            e.isPlainObject(a) && (a = [a]);
            e.isArray(a) ? this.validate(a) ? this._data = a : f.raise("Load failed: JSON Array not valid.") : (c += ",.video,.iframe", e(a).find(c).each(function(a, c) {
                var c = e(c), f = {}, h = c.parent(), p = h.attr("href"), h = h.attr("rel");
                p && (c[0].nodeName ==
                        "IMG" || c.hasClass("video")) && Y(p) ? f.video = p : p && c.hasClass("iframe") ? f.iframe = p : f.image = f.big = p;
                if (h)
                    f.big = h;
                e.each("big title description link layer image".split(" "), function(a, e) {
                    c.data(e) && (f[e] = c.data(e).toString())
                });
                if (!f.big)
                    f.big = f.image;
                g._data.push(e.extend({title: c.attr("title") || "", thumb: c.attr("src"), image: c.attr("src"), big: c.attr("src"), description: c.attr("alt") || "", link: c.attr("longdesc"), original: c.get(0)}, f, j(c)))
            }));
            typeof h.dataSort == "function" ? J.sort.call(this._data, h.dataSort) :
                    h.dataSort == "random" && this._data.sort(function() {
                        return r.round(r.random()) - 0.5
                    });
            this.getDataLength() && this._parseData(function() {
                this.trigger(f.DATA)
            });
            return this
        }, _parseData: function(a) {
            var c = this, f, g = !1, h = function() {
                var f = !0;
                e.each(c._data, function(a, c) {
                    if (c.loading)
                        return f = !1
                });
                f && !g && (g = !0, a.call(c))
            };
            e.each(this._data, function(a, g) {
                f = c._data[a];
                if ("thumb"in g === !1)
                    f.thumb = g.image;
                if (!g.big)
                    f.big = g.image;
                if ("video"in g) {
                    var m = Y(g.video);
                    if (m)
                        f.iframe = (new ka(m.provider, m.id)).embed() + function() {
                            if (typeof c._options[m.provider] ==
                                    "object") {
                                var a = [];
                                e.each(c._options[m.provider], function(c, e) {
                                    a.push(c + "=" + e)
                                });
                                m.provider == "youtube" && (a = ["wmode=opaque"].concat(a));
                                return"?" + a.join("&")
                            }
                            return""
                        }(), (!f.thumb || !f.image) && e.each(["thumb", "image"], function(a, e) {
                            if (e == "image" && !c._options.videoPoster)
                                f.image = t;
                            else {
                                var g = new ka(m.provider, m.id);
                                if (!f[e])
                                    f.loading = !0, g.getMedia(e, function(a, c) {
                                        return function(e) {
                                            a[c] = e;
                                            if (c == "image" && !a.big)
                                                a.big = a.image;
                                            delete a.loading;
                                            h()
                                        }
                                    }(f, e))
                            }
                        })
                }
            });
            h();
            return this
        }, destroy: function() {
            this.$("target").data("galleria",
                    null);
            this.$("container").off("galleria");
            this.get("target").innerHTML = this._original.html;
            this.clearTimer();
            s.removeFromArray(S, this);
            s.removeFromArray(fa, this);
            f._waiters.length && e.each(f._waiters, function(a, c) {
                c && h.clearTimeout(c)
            });
            return this
        }, splice: function() {
            var a = this, c = s.array(arguments);
            h.setTimeout(function() {
                J.splice.apply(a._data, c);
                a._parseData(function() {
                    a._createThumbnails()
                })
            }, 2);
            return a
        }, push: function() {
            var a = this, c = s.array(arguments);
            c.length == 1 && c[0].constructor == Array && (c = c[0]);
            h.setTimeout(function() {
                J.push.apply(a._data, c);
                a._parseData(function() {
                    a._createThumbnails(c)
                })
            }, 2);
            return a
        }, _getActive: function() {
            return this._controls.getActive()
        }, validate: function() {
            return!0
        }, bind: function(a, c) {
            a = da(a);
            this.$("container").on(a, this.proxy(c));
            return this
        }, unbind: function(a) {
            a = da(a);
            this.$("container").off(a);
            return this
        }, trigger: function(a) {
            a = typeof a === "object" ? e.extend(a, {scope: this}) : {type: da(a), scope: this};
            this.$("container").trigger(a);
            return this
        }, addIdleState: function() {
            this._idle.add.apply(this._idle,
                    s.array(arguments));
            return this
        }, removeIdleState: function() {
            this._idle.remove.apply(this._idle, s.array(arguments));
            return this
        }, enterIdleMode: function() {
            this._idle.hide();
            return this
        }, exitIdleMode: function() {
            this._idle.showAll();
            return this
        }, enterFullscreen: function() {
            this._fullscreen.enter.apply(this, s.array(arguments));
            return this
        }, exitFullscreen: function() {
            this._fullscreen.exit.apply(this, s.array(arguments));
            return this
        }, toggleFullscreen: function() {
            this._fullscreen[this.isFullscreen() ? "exit" : "enter"].apply(this,
                    s.array(arguments));
            return this
        }, bindTooltip: function() {
            this._tooltip.bind.apply(this._tooltip, s.array(arguments));
            return this
        }, defineTooltip: function() {
            this._tooltip.define.apply(this._tooltip, s.array(arguments));
            return this
        }, refreshTooltip: function() {
            this._tooltip.show.apply(this._tooltip, s.array(arguments));
            return this
        }, openLightbox: function() {
            this._lightbox.show.apply(this._lightbox, s.array(arguments));
            return this
        }, closeLightbox: function() {
            this._lightbox.hide.apply(this._lightbox, s.array(arguments));
            return this
        }, hasVariation: function(a) {
            return e.inArray(a, this._options.variation.split(/\s+/)) > -1
        }, getActiveImage: function() {
            var a = this._getActive();
            return a ? a.image : t
        }, getActiveThumb: function() {
            return this._thumbnails[this._active].image || t
        }, getMousePosition: function(a) {
            return{x: a.pageX - this.$("container").offset().left, y: a.pageY - this.$("container").offset().top}
        }, addPan: function(a) {
            if (this._options.imageCrop !== !1) {
                var a = e(a || this.getActiveImage()), c = this, f = a.width() / 2, g = a.height() / 2, h = parseInt(a.css("left"),
                        10), o = parseInt(a.css("top"), 10), u = h || 0, m = o || 0, n = 0, p = 0, q = !1, z = s.timestamp(), d = 0, x = 0, t = function(c, e, g) {
                    if (c > 0 && (x = r.round(r.max(c * -1, r.min(0, e))), d !== x))
                        if (d = x, H === 8)
                            a.parent()["scroll" + g](x * -1);
                        else
                            c = {}, c[g.toLowerCase()] = x, a.css(c)
                }, E = function(a) {
                    if (!(s.timestamp() - z < 50))
                        q = !0, f = c.getMousePosition(a).x, g = c.getMousePosition(a).y
                };
                H === 8 && (a.parent().scrollTop(m * -1).scrollLeft(u * -1), a.css({top: 0, left: 0}));
                this.$("stage").off("mousemove", E).on("mousemove", E);
                this.addTimer("pan" + c._id, function() {
                    q && (n =
                            a.width() - c._stageWidth, p = a.height() - c._stageHeight, h = f / c._stageWidth * n * -1, o = g / c._stageHeight * p * -1, u += (h - u) / c._options.imagePanSmoothness, m += (o - m) / c._options.imagePanSmoothness, t(p, m, "Top"), t(n, u, "Left"))
                }, 50, !0);
                return this
            }
        }, proxy: function(a, c) {
            if (typeof a !== "function")
                return D;
            c = c || this;
            return function() {
                return a.apply(c, s.array(arguments))
            }
        }, removePan: function() {
            this.$("stage").off("mousemove");
            this.clearTimer("pan" + this._id);
            return this
        }, addElement: function() {
            var a = this._dom;
            e.each(s.array(arguments),
                    function(c, e) {
                        a[e] = s.create("galleria-" + e)
                    });
            return this
        }, attachKeyboard: function() {
            this._keyboard.attach.apply(this._keyboard, s.array(arguments));
            return this
        }, detachKeyboard: function() {
            this._keyboard.detach.apply(this._keyboard, s.array(arguments));
            return this
        }, appendChild: function(a, c) {
            this.$(a).append(this.get(c) || c);
            return this
        }, prependChild: function(a, c) {
            this.$(a).prepend(this.get(c) || c);
            return this
        }, remove: function() {
            this.$(s.array(arguments).join(",")).remove();
            return this
        }, append: function(a) {
            var c,
                    e;
            for (c in a)
                if (a.hasOwnProperty(c))
                    if (a[c].constructor === Array)
                        for (e = 0; a[c][e]; e++)
                            this.appendChild(c, a[c][e]);
                    else
                        this.appendChild(c, a[c]);
            return this
        }, _scaleImage: function(a, c) {
            if (a = a || this._controls.getActive()) {
                var f, g = function(a) {
                    e(a.container).children(":first").css({top: r.max(0, s.parseValue(a.image.style.top)), left: r.max(0, s.parseValue(a.image.style.left)), width: s.parseValue(a.image.width), height: s.parseValue(a.image.height)})
                }, c = e.extend({width: this._stageWidth, height: this._stageHeight,
                    crop: this._options.imageCrop, max: this._options.maxScaleRatio, min: this._options.minScaleRatio, margin: this._options.imageMargin, position: this._options.imagePosition, iframelimit: this._options.maxVideoSize}, c);
                this._options.layerFollow && this._options.imageCrop !== !0 ? typeof c.complete == "function" ? (f = c.complete, c.complete = function() {
                    f.call(a, a);
                    g(a)
                }) : c.complete = g : e(a.container).children(":first").css({top: 0, left: 0});
                a.scale(c);
                return this
            }
        }, updateCarousel: function() {
            this._carousel.update();
            return this
        },
        resize: function(a, c) {
            typeof a == "function" && (c = a, a = t);
            var a = e.extend({width: 0, height: 0}, a), f = this, g = this.$("container");
            e.each(a, function(c, e) {
                e || (g[c]("auto"), a[c] = f._getWH()[c])
            });
            e.each(a, function(a, c) {
                g[a](c)
            });
            return this.rescale(c)
        }, rescale: function(a, c, j) {
            var g = this;
            typeof a === "function" && (j = a, a = t);
            (function() {
                g._stageWidth = a || g.$("stage").width();
                g._stageHeight = c || g.$("stage").height();
                g._options.swipe ? (e.each(g._controls.slides, function(a, c) {
                    g._scaleImage(c);
                    e(c.container).css("left", g._stageWidth *
                            a)
                }), g.$("images").css("width", g._stageWidth * g.getDataLength())) : g._scaleImage();
                g._options.carousel && g.updateCarousel();
                g._controls.frames[g._controls.active].scale({width: g._stageWidth, height: g._stageHeight, iframelimit: g._options.maxVideoSize});
                g.trigger(f.RESCALE);
                typeof j === "function" && j.call(g)
            }).call(g);
            return this
        }, refreshImage: function() {
            this._scaleImage();
            this._options.imagePan && this.addPan();
            return this
        }, show: function(a, c, j) {
            var g = this._options.swipe;
            if (g || !(this._queue.length > 3 || a === !1 ||
                    !this._options.queue && this._queue.stalled))
                if (a = r.max(0, r.min(parseInt(a, 10), this.getDataLength() - 1)), c = typeof c !== "undefined" ? !!c : a < this.getIndex(), !j && f.History)
                    f.History.set(a.toString());
                else {
                    if (this.finger && a !== this._active)
                        this.finger.to = -(a * this.finger.width), this.finger.index = a;
                    this._active = a;
                    if (g) {
                        var v = this.getData(a), o = this;
                        if (!v)
                            return;
                        var s = this.isFullscreen() && v.big ? v.big : v.image || v.iframe, m = this._controls.slides[a], n = {cached: m.isCached(s), index: a, rewind: c, imageTarget: m.image, thumbTarget: this._thumbnails[a].image,
                            galleriaData: v};
                        this.trigger(e.extend(n, {type: f.LOADSTART}));
                        e(o._thumbnails[a].container).addClass("active").siblings(".active").removeClass("active");
                        o.$("container").removeClass("videoplay");
                        var p = function() {
                            o._layers[a].innerHTML = o.getData().layer || "";
                            o.trigger(e.extend(n, {type: f.LOADFINISH}));
                            o._playCheck()
                        };
                        h.setTimeout(function() {
                            if (m.ready)
                                o.trigger(e.extend(n, {type: f.IMAGE})), p();
                            else {
                                if (v.iframe && !v.image)
                                    m.isIframe = !0;
                                m.load(s, function(a) {
                                    o._scaleImage(a, p).trigger(e.extend(n, {type: f.IMAGE}));
                                    p()
                                })
                            }
                        }, 100)
                    } else
                        J.push.call(this._queue, {index: a, rewind: c}), this._queue.stalled || this._show();
                    return this
                }
        }, _show: function() {
            var a = this, c = this._queue[0], j = this.getData(c.index);
            if (j) {
                var g = this.isFullscreen() && j.big ? j.big : j.image || j.iframe, v = this._controls.getActive(), o = this._controls.getNext(), n = o.isCached(g), m = this._thumbnails[c.index], r = function() {
                    e(o.image).trigger("mouseup")
                };
                a.$("container").toggleClass("iframe", !!j.isIframe).removeClass("videoplay");
                var p = function(c, d, g, j, m) {
                    return function() {
                        ba.active =
                                !1;
                        s.toggleQuality(d.image, a._options.imageQuality);
                        a._layers[a._controls.active].innerHTML = "";
                        e(g.container).css({zIndex: 0, opacity: 0}).show();
                        e(g.container).find("iframe, .galleria-videoicon").remove();
                        e(a._controls.frames[a._controls.active].container).hide();
                        e(d.container).css({zIndex: 1, left: 0, top: 0}).show();
                        a._controls.swap();
                        a._options.imagePan && a.addPan(d.image);
                        if (c.iframe && c.image || c.link || a._options.lightbox || a._options.clicknext)
                            e(d.image).css({cursor: "pointer"}).on("mouseup", function(d) {
                                if (!(typeof d.which ==
                                        "number" && d.which > 1))
                                    if (c.iframe) {
                                        a.isPlaying() && a.pause();
                                        var g = a._controls.frames[a._controls.active], j = a._stageWidth, m = a._stageHeight;
                                        e(g.container).css({width: j, height: m, opacity: 0}).show().animate({opacity: 1}, 200);
                                        h.setTimeout(function() {
                                            g.load(c.iframe + (c.video ? "&autoplay=1" : ""), {width: j, height: m}, function(d) {
                                                a.$("container").addClass("videoplay");
                                                d.scale({width: a._stageWidth, height: a._stageHeight, iframelimit: c.video ? a._options.maxVideoSize : t})
                                            })
                                        }, 100)
                                    } else
                                        a._options.clicknext && !f.TOUCH ? (a._options.pauseOnInteraction &&
                                                a.pause(), a.next()) : c.link ? a._options.popupLinks ? h.open(c.link, "_blank") : h.location.href = c.link : a._options.lightbox && a.openLightbox()
                            });
                        a._playCheck();
                        a.trigger({type: f.IMAGE, index: j.index, imageTarget: d.image, thumbTarget: m.image, galleriaData: c});
                        J.shift.call(a._queue);
                        a._queue.stalled = !1;
                        a._queue.length && a._show()
                    }
                }(j, o, v, c, m);
                this._options.carousel && this._options.carouselFollow && this._carousel.follow(c.index);
                if (this._options.preload) {
                    var q, z, d = this.getNext(), x;
                    try {
                        for (z = this._options.preload; z >
                                0; z--)
                            q = new f.Picture, x = a.getData(d), q.preload(this.isFullscreen() && x.big ? x.big : x.image), d = a.getNext(d)
                    } catch (E) {
                    }
                }
                s.show(o.container);
                o.isIframe = j.iframe && !j.image;
                e(a._thumbnails[c.index].container).addClass("active").siblings(".active").removeClass("active");
                a.trigger({type: f.LOADSTART, cached: n, index: c.index, rewind: c.rewind, imageTarget: o.image, thumbTarget: m.image, galleriaData: j});
                a._queue.stalled = !0;
                o.load(g, function(d) {
                    var g = e(a._layers[1 - a._controls.active]).html(j.layer || "").hide();
                    a._scaleImage(d,
                            {complete: function(d) {
                                    "image"in v && s.toggleQuality(v.image, !1);
                                    s.toggleQuality(d.image, !1);
                                    a.removePan();
                                    a.setInfo(c.index);
                                    a.setCounter(c.index);
                                    j.layer && (g.show(), (j.iframe && j.image || j.link || a._options.lightbox || a._options.clicknext) && g.css("cursor", "pointer").off("mouseup").mouseup(r));
                                    j.video && j.image && la(d.container);
                                    var h = a._options.transition;
                                    e.each({initial: v.image === null, touch: f.TOUCH, fullscreen: a.isFullscreen()}, function(c, d) {
                                        if (d && a._options[c + "Transition"] !== t)
                                            return h = a._options[c + "Transition"],
                                                    !1
                                    });
                                    if (h in ba.effects === !1)
                                        p();
                                    else {
                                        var m = {prev: v.container, next: d.container, rewind: c.rewind, speed: a._options.transitionSpeed || 400};
                                        ba.active = !0;
                                        ba.init.call(a, h, m, p)
                                    }
                                    a.trigger({type: f.LOADFINISH, cached: n, index: c.index, rewind: c.rewind, imageTarget: d.image, thumbTarget: a._thumbnails[c.index].image, galleriaData: a.getData(c.index)})
                                }})
                })
            }
        }, getNext: function(a) {
            a = typeof a === "number" ? a : this.getIndex();
            return a === this.getDataLength() - 1 ? 0 : a + 1
        }, getPrev: function(a) {
            a = typeof a === "number" ? a : this.getIndex();
            return a ===
                    0 ? this.getDataLength() - 1 : a - 1
        }, next: function() {
            this.getDataLength() > 1 && this.show(this.getNext(), !1);
            return this
        }, prev: function() {
            this.getDataLength() > 1 && this.show(this.getPrev(), !0);
            return this
        }, get: function(a) {
            return a in this._dom ? this._dom[a] : null
        }, getData: function(a) {
            return a in this._data ? this._data[a] : this._data[this._active]
        }, getDataLength: function() {
            return this._data.length
        }, getIndex: function() {
            return typeof this._active === "number" ? this._active : !1
        }, getStageHeight: function() {
            return this._stageHeight
        },
        getStageWidth: function() {
            return this._stageWidth
        }, getOptions: function(a) {
            return typeof a === "undefined" ? this._options : this._options[a]
        }, setOptions: function(a, c) {
            typeof a === "object" ? e.extend(this._options, a) : this._options[a] = c;
            return this
        }, play: function(a) {
            this._playing = !0;
            this._playtime = a || this._playtime;
            this._playCheck();
            this.trigger(f.PLAY);
            return this
        }, pause: function() {
            this._playing = !1;
            this.trigger(f.PAUSE);
            return this
        }, playToggle: function(a) {
            return this._playing ? this.pause() : this.play(a)
        }, isPlaying: function() {
            return this._playing
        },
        isFullscreen: function() {
            return this._fullscreen.active
        }, _playCheck: function() {
            var a = this, c = 0, e = s.timestamp(), g = "play" + this._id;
            if (this._playing) {
                this.clearTimer(g);
                var h = function() {
                    c = s.timestamp() - e;
                    c >= a._playtime && a._playing ? (a.clearTimer(g), a.next()) : a._playing && (a.trigger({type: f.PROGRESS, percent: r.ceil(c / a._playtime * 100), seconds: r.floor(c / 1E3), milliseconds: c}), a.addTimer(g, h, 20))
                };
                a.addTimer(g, h, 20)
            }
        }, setPlaytime: function(a) {
            this._playtime = a;
            return this
        }, setIndex: function(a) {
            this._active = a;
            return this
        },
        setCounter: function(a) {
            typeof a === "number" ? a++ : typeof a === "undefined" && (a = this.getIndex() + 1);
            this.get("current").innerHTML = a;
            if (H) {
                var a = this.$("counter"), c = a.css("opacity");
                parseInt(c, 10) === 1 ? s.removeAlpha(a[0]) : this.$("counter").css("opacity", c)
            }
            return this
        }, setInfo: function(a) {
            var c = this, f = this.getData(a);
            e.each(["title", "description"], function(a, e) {
                var h = c.$("info-" + e);
                f[e] ? h[f[e].length ? "show" : "hide"]().html(f[e]) : h.empty().hide()
            });
            return this
        }, hasInfo: function(a) {
            var c = "title description".split(" "),
                    e;
            for (e = 0; c[e]; e++)
                if (this.getData(a)[c[e]])
                    return!0;
            return!1
        }, jQuery: function(a) {
            var c = this, f = [];
            e.each(a.split(","), function(a, g) {
                g = e.trim(g);
                c.get(g) && f.push(g)
            });
            var g = e(c.get(f.shift()));
            e.each(f, function(a, e) {
                g = g.add(c.get(e))
            });
            return g
        }, $: function() {
            return this.jQuery.apply(this, s.array(arguments))
        }};
    e.each(U, function(a, c) {
        var e = /_/.test(c) ? c.replace(/_/g, "") : c;
        f[c.toUpperCase()] = "galleria." + e
    });
    e.extend(f, {IE9: H === 9, IE8: H === 8, IE7: H === 7, IE6: H === 6, IE: H, WEBKIT: /webkit/.test(L), CHROME: /chrome/.test(L),
        SAFARI: /safari/.test(L) && !/chrome/.test(L), QUIRK: H && n.compatMode && n.compatMode === "BackCompat", MAC: /mac/.test(navigator.platform.toLowerCase()), OPERA: !!h.opera, IPHONE: /iphone/.test(L), IPAD: /ipad/.test(L), ANDROID: /android/.test(L), TOUCH: "ontouchstart"in n});
    f.addTheme = function(a) {
        a.name || f.raise("No theme name specified");
        a.defaults = typeof a.defaults !== "object" ? {} : aa(a.defaults);
        var c = !1, j;
        typeof a.css === "string" ? (e("link").each(function(e, f) {
            j = RegExp(a.css);
            if (j.test(f.href))
                return c = !0, Q(a), !1
        }),
                c || e(function() {
                    var g = 0, v = function() {
                        e("script").each(function(e, g) {
                            j = RegExp("galleria\\." + a.name.toLowerCase() + "\\.");
                            j.test(g.src) && (c = g.src.replace(/[^\/]*$/, "") + a.css, h.setTimeout(function() {
                                s.loadCSS(c, "galleria-theme", function() {
                                    Q(a)
                                })
                            }, 1))
                        });
                        c || (g++ > 5 ? f.raise("No theme CSS loaded") : h.setTimeout(v, 500))
                    };
                    v()
                })) : Q(a);
        return a
    };
    f.loadTheme = function(a) {
        if (!e("script").filter(function() {
            return e(this).attr("src") == a
        }).length) {
            var c = !1, j;
            e(h).load(function() {
                c || (j = h.setTimeout(function() {
                    !c && !f.theme &&
                            f.raise("Galleria had problems loading theme at " + a + ". Please check theme path or load manually.", !0)
                }, 2E4))
            });
            f.unloadTheme();
            s.loadScript(a, function() {
                c = !0;
                h.clearTimeout(j)
            });
            return f
        }
    };
    f.unloadTheme = function() {
        if (typeof f.theme == "object")
            e("script").each(function(a, c) {
                RegExp("galleria\\." + f.theme.name + "\\.").test(c.src) && e(c).remove()
            }), f.theme = t;
        return f
    };
    f.get = function(a) {
        if (S[a])
            return S[a];
        else if (typeof a !== "number")
            return S;
        else
            f.raise("Gallery index " + a + " not found")
    };
    f.configure = function(a,
            c) {
        var j = {};
        typeof a == "string" && c ? (j[a] = c, a = j) : e.extend(j, a);
        f.configure.options = j;
        e.each(f.get(), function(a, c) {
            c.setOptions(j)
        });
        return f
    };
    f.configure.options = {};
    f.on = function(a, c) {
        if (a) {
            var c = c || D, j = a + c.toString().replace(/\s/g, "") + s.timestamp();
            e.each(f.get(), function(e, f) {
                f._binds.push(j);
                f.bind(a, c)
            });
            f.on.binds.push({type: a, callback: c, hash: j});
            return f
        }
    };
    f.on.binds = [];
    f.run = function(a, c) {
        e.isFunction(c) && (c = {extend: c});
        e(a || "#galleria").galleria(c);
        return f
    };
    f.addTransition = function(a, c) {
        ba.effects[a] =
                c;
        return f
    };
    f.utils = s;
    f.log = function() {
        var a = s.array(arguments);
        if ("console"in h && "log"in h.console)
            try {
                return h.console.log.apply(h.console, a)
            } catch (c) {
                e.each(a, function() {
                    h.console.log(this)
                })
            }
        else
            return h.alert(a.join("<br>"))
    };
    f.ready = function(a) {
        if (typeof a != "function")
            return f;
        e.each(fa, function(c, e) {
            a.call(e, e._options)
        });
        f.ready.callbacks.push(a);
        return f
    };
    f.ready.callbacks = [];
    f.raise = function(a, c) {
        var f = c ? "Fatal error" : "Error", g = {color: "#fff", position: "absolute", top: 0, left: 0, zIndex: 1E5},
        h = function(a) {
            var h = '<div style="padding:4px;margin:0 0 2px;background:#' + (c ? "811" : "222") + ';">' + (c ? "<strong>" + f + ": </strong>" : "") + a + "</div>";
            e.each(S, function() {
                var a = this.$("errors"), c = this.$("target");
                a.length || (c.css("position", "relative"), a = this.addElement("errors").appendChild("target", "errors").$("errors").css(g));
                a.append(h)
            });
            S.length || e("<div>").css(e.extend(g, {position: "fixed"})).append(h).appendTo(M().body)
        };
        if (E) {
            if (h(a), c)
                throw Error(f + ": " + a);
        } else
            c && !wa && (wa = !0, c = !1, h("Gallery could not load."))
    };
    f.version = 1.33;
    f.requires = function(a, c) {
        f.version < a && f.raise(c || "You need to upgrade Galleria to version " + a + " to use one or more components.", !0);
        return f
    };
    f.Picture = function(a) {
        this.id = a || null;
        this.image = null;
        this.container = s.create("galleria-image");
        e(this.container).css({overflow: "hidden", position: "relative"});
        this.original = {width: 0, height: 0};
        this.isIframe = this.ready = !1
    };
    f.Picture.prototype = {cache: {}, show: function() {
            s.show(this.image)
        }, hide: function() {
            s.moveOut(this.image)
        }, clear: function() {
            this.image =
            null
        }, isCached: function(a) {
            return!!this.cache[a]
        }, preload: function(a) {
            e(new Image).load(function(a, e) {
                return function() {
                    e[a] = a
                }
            }(a, this.cache)).attr("src", a)
        }, load: function(a, c, j) {
            typeof c == "function" && (j = c, c = null);
            if (this.isIframe) {
                var g = "if" + (new Date).getTime(), n = this.image = e("<iframe>", {src: a, frameborder: 0, id: g, allowfullscreen: !0, css: {visibility: "hidden"}})[0];
                c && e(n).css(c);
                e(this.container).find("iframe,img").remove();
                this.container.appendChild(this.image);
                e("#" + g).load(function(a, c) {
                    return function() {
                        h.setTimeout(function() {
                            e(a.image).css("visibility",
                                    "visible");
                            typeof c == "function" && c.call(a, a)
                        }, 10)
                    }
                }(this, j));
                return this.container
            }
            this.image = new Image;
            f.IE8 && e(this.image).css("filter", "inherit");
            var o = !1, u = !1, m = e(this.container), r = e(this.image), p = function(a, g, d) {
                return function() {
                    var j = function() {
                        e(this).off("load");
                        a.original = c || {height: this.height, width: this.width};
                        if (f.HAS3D)
                            this.style.MozTransform = this.style.webkitTransform = "translate3d(0,0,0)";
                        m.append(this);
                        a.cache[d] = d;
                        typeof g == "function" && h.setTimeout(function() {
                            g.call(a, a)
                        }, 1)
                    };
                    !this.width ||
                            !this.height ? function(a) {
                                s.wait({until: function() {
                                        return a.width && a.height
                                    }, success: function() {
                                        j.call(a)
                                    }, error: function() {
                                        u ? f.raise("Could not extract width/height from image: " + a.src + ". Traced measures: width:" + a.width + "px, height: " + a.height + "px.") : (e(new Image).load(p).attr("src", a.src), u = !0)
                                    }, timeout: 100})
                            }(this) : j.call(this)
                }
            }(this, j, a);
            m.find("iframe,img").remove();
            r.css("display", "block");
            s.hide(this.image);
            e.each("minWidth minHeight maxWidth maxHeight".split(" "), function(a, c) {
                r.css(c, /min/.test(c) ?
                        "0" : "none")
            });
            r.load(p).on("error", function() {
                o ? C ? e(this).attr("src", C) : f.raise("Image not found: " + a) : (o = !0, h.setTimeout(function(a, c) {
                    return function() {
                        a.attr("src", c + (c.indexOf("?") > -1 ? "&" : "?") + s.timestamp())
                    }
                }(e(this), a), 50))
            }).attr("src", a);
            return this.container
        }, scale: function(a) {
            var c = this, a = e.extend({width: 0, height: 0, min: t, max: t, margin: 0, complete: D, position: "center", crop: !1, canvas: !1, iframelimit: t}, a);
            if (this.isIframe) {
                var h = a.width, g = a.height, n, o;
                if (a.iframelimit) {
                    var u = r.min(a.iframelimit /
                            h, a.iframelimit / g);
                    u < 1 ? (n = h * u, o = g * u, e(this.image).css({top: g / 2 - o / 2, left: h / 2 - n / 2, position: "absolute"})) : e(this.image).css({top: 0, left: 0})
                }
                e(this.image).width(n || h).height(o || g).removeAttr("width").removeAttr("height");
                e(this.container).width(h).height(g);
                a.complete.call(c, c);
                try {
                    this.image.contentWindow && e(this.image.contentWindow).trigger("resize")
                } catch (m) {
                }
                return this.container
            }
            if (!this.image)
                return this.container;
            var z, p, q = e(c.container), x;
            s.wait({until: function() {
                    z = a.width || q.width() || s.parseValue(q.css("width"));
                    p = a.height || q.height() || s.parseValue(q.css("height"));
                    return z && p
                }, success: function() {
                    var d = (z - a.margin * 2) / c.original.width, g = (p - a.margin * 2) / c.original.height, f = r.min(d, g), h = r.max(d, g), j = {"true": h, width: d, height: g, "false": f, landscape: c.original.width > c.original.height ? h : f, portrait: c.original.width < c.original.height ? h : f}[a.crop.toString()], d = "";
                    a.max && (j = r.min(a.max, j));
                    a.min && (j = r.max(a.min, j));
                    e.each(["width", "height"], function(a, d) {
                        e(c.image)[d](c[d] = c.image[d] = r.round(c.original[d] * j))
                    });
                    e(c.container).width(z).height(p);
                    if (a.canvas && V)
                        V.elem.width = c.width, V.elem.height = c.height, d = c.image.src + ":" + c.width + "x" + c.height, c.image.src = V.cache[d] || function(a) {
                            V.context.drawImage(c.image, 0, 0, c.original.width * j, c.original.height * j);
                            try {
                                return x = V.elem.toDataURL(), V.length += x.length, V.cache[a] = x
                            } catch (d) {
                                return c.image.src
                            }
                        }(d);
                    var m = {}, o = {}, d = function(a, d, g) {
                        var f = 0;
                        /\%/.test(a) ? (a = parseInt(a, 10) / 100, d = c.image[d] || e(c.image)[d](), f = r.ceil(d * -1 * a + g * a)) : f = s.parseValue(a);
                        return f
                    }, q = {top: {top: 0}, left: {left: 0}, right: {left: "100%"},
                        bottom: {top: "100%"}};
                    e.each(a.position.toLowerCase().split(" "), function(a, c) {
                        c === "center" && (c = "50%");
                        m[a ? "top" : "left"] = c
                    });
                    e.each(m, function(a, c) {
                        q.hasOwnProperty(c) && e.extend(o, q[c])
                    });
                    m = m.top ? e.extend(m, o) : o;
                    m = e.extend({top: "50%", left: "50%"}, m);
                    e(c.image).css({position: "absolute", top: d(m.top, "height", p), left: d(m.left, "width", z)});
                    c.show();
                    c.ready = !0;
                    a.complete.call(c, c)
                }, error: function() {
                    f.raise("Could not scale image: " + c.image.src)
                }, timeout: 1E3});
            return this
        }};
    e.extend(e.easing, {galleria: function(a,
                c, e, g, f) {
            if ((c /= f / 2) < 1)
                return g / 2 * c * c * c + e;
            return g / 2 * ((c -= 2) * c * c + 2) + e
        }, galleriaIn: function(a, c, e, g, f) {
            return g * (c /= f) * c + e
        }, galleriaOut: function(a, c, e, g, f) {
            return-g * (c /= f) * (c - 2) + e
        }});
    f.Finger = function() {
        var a = f.HAS3D = function() {
            var a = n.createElement("p"), c, f = ["webkit", "O", "ms", "Moz", ""], h, j = 0;
            for (M().html.insertBefore(a, null); f[j]; j++)
                h = f[j] ? f[j] + "Transform" : "transform", a.style[h] !== void 0 && (a.style[h] = "translate3d(1px,1px,1px)", c = e(a).css(f[j] ? "-" + f[j].toLowerCase() + "-transform" : "transform"));
            M().html.removeChild(a);
            return c !== void 0 && c.length > 0 && c !== "none"
        }(), c = function() {
            return h.requestAnimationFrame || h.webkitRequestAnimationFrame || h.mozRequestAnimationFrame || h.oRequestAnimationFrame || h.msRequestAnimationFrame || function(a) {
                h.setTimeout(a, 1E3 / 60)
            }
        }(), j = function(g, f) {
            this.config = {start: 0, duration: 500, onchange: function() {
                }, oncomplete: function() {
                }, easing: function(a, c, e, g, f) {
                    return-g * ((c = c / f - 1) * c * c * c - 1) + e
                }};
            this.easeout = function(a, c, e, g, f) {
                return g * ((c = c / f - 1) * c * c * c * c + 1) + e
            };
            if (g.children.length) {
                var j = this;
                e.extend(this.config,
                        f);
                this.elem = g;
                this.child = g.children[0];
                this.to = this.pos = 0;
                this.touching = !1;
                this.start = {};
                this.index = this.config.start;
                this.anim = 0;
                this.easing = this.config.easing;
                if (!a)
                    this.child.style.position = "absolute", this.elem.style.position = "relative";
                e.each(["ontouchstart", "ontouchmove", "ontouchend", "setup"], function(a, c) {
                    j[c] = function(a) {
                        return function() {
                            a.apply(j, arguments)
                        }
                    }(j[c])
                });
                this.setX = function() {
                    var c = j.child.style;
                    a ? c.MozTransform = c.webkitTransform = "translate3d(" + j.pos + "px,0,0)" : c.left = j.pos + "px"
                };
                e(g).on("touchstart", this.ontouchstart);
                e(h).on("resize", this.setup);
                e(h).on("orientationchange", this.setup);
                this.setup();
                (function m() {
                    c(m);
                    j.loop.call(j)
                })()
            }
        };
        j.prototype = {constructor: j, setup: function() {
                this.width = e(this.elem).width();
                this.length = r.ceil(e(this.child).width() / this.width);
                if (this.index !== 0)
                    this.index = r.max(0, r.min(this.index, this.length - 1)), this.pos = this.to = -this.width * this.index
            }, setPosition: function(a) {
                this.to = this.pos = a
            }, ontouchstart: function(a) {
                a = a.originalEvent.touches;
                this.start =
                        {pageX: a[0].pageX, pageY: a[0].pageY, time: +new Date};
                this.isScrolling = null;
                this.touching = !0;
                this.deltaX = 0;
                A.on("touchmove", this.ontouchmove);
                A.on("touchend", this.ontouchend)
            }, ontouchmove: function(a) {
                var c = a.originalEvent.touches;
                if (!(c && c.length > 1 || a.scale && a.scale !== 1)) {
                    this.deltaX = c[0].pageX - this.start.pageX;
                    if (this.isScrolling === null)
                        this.isScrolling = !!(this.isScrolling || r.abs(this.deltaX) < r.abs(c[0].pageY - this.start.pageY));
                    if (!this.isScrolling)
                        a.preventDefault(), this.deltaX /= !this.index && this.deltaX >
                                0 || this.index == this.length - 1 && this.deltaX < 0 ? r.abs(this.deltaX) / this.width + 1.8 : 1, this.to = this.deltaX - this.index * this.width;
                    a.stopPropagation()
                }
            }, ontouchend: function() {
                this.touching = !1;
                var a = +new Date - this.start.time < 250 && r.abs(this.deltaX) > 40 || r.abs(this.deltaX) > this.width / 2, c = !this.index && this.deltaX > 0 || this.index == this.length - 1 && this.deltaX < 0;
                this.isScrolling || this.show(this.index + (a && !c ? this.deltaX < 0 ? 1 : -1 : 0));
                A.off("touchmove", this.ontouchmove);
                A.off("touchend", this.ontouchend)
            }, show: function(a) {
                a !=
                        this.index ? this.config.onchange.call(this, a) : this.to = -(a * this.width)
            }, moveTo: function(a) {
                if (a != this.index)
                    this.pos = this.to = -(a * this.width), this.index = a
            }, loop: function() {
                var a = this.to - this.pos, c = 1;
                this.width && a && (c = r.max(0.5, r.min(1.5, r.abs(a / this.width))));
                if (this.touching || r.abs(a) <= 1) {
                    this.pos = this.to;
                    if (this.anim && !this.touching)
                        this.config.oncomplete(this.index);
                    this.anim = 0;
                    this.easing = this.config.easing
                } else {
                    if (!this.anim)
                        this.anim = {start: this.pos, time: +new Date, distance: a, factor: c, destination: this.to};
                    if (this.anim.destination != this.to) {
                        this.anim = 0;
                        this.easing = this.easeout;
                        return
                    }
                    this.pos = this.easing(null, +new Date - this.anim.time, this.anim.start, this.anim.distance, this.config.duration * this.anim.factor)
                }
                this.setX()
            }};
        return j
    }();
    e.fn.galleria = function(a) {
        var c = this.selector;
        if (!e(this).length)
            return e(function() {
                e(c).length ? e(c).galleria(a) : f.utils.wait({until: function() {
                        return e(c).length
                    }, success: function() {
                        e(c).galleria(a)
                    }, error: function() {
                        f.raise('Init failed: Galleria could not find the element "' +
                                c + '".')
                    }, timeout: 5E3})
            }), this;
        return this.each(function() {
            e.data(this, "galleria") && (e.data(this, "galleria").destroy(), e(this).find("*").hide());
            e.data(this, "galleria", (new f).init(this, a))
        })
    };
    typeof module === "object" && module && typeof module.exports === "object" ? module.exports = f : (h.Galleria = f, typeof define === "function" && define.amd && define("galleria", ["jquery"], function() {
        return f
    }))
})(jQuery, this);
(function(e) {
    var h = {prototyping: function() {
            e('img[src="#"]').attr("src", "/media/i/placeholder.png").addClass("placeholder").each(function() {
                this.width -= 2;
                this.height -= 2
            });
            e('a[href="#"]').click(function(e) {
                e.preventDefault()
            })
        }, BROWSER: {IE: function() {
                for (var e = 3, h = document.createElement("div"); h.innerHTML = "<\!--[if gt IE " + ++e + "]><i></i><![endif]--\>", h.getElementsByTagName("i")[0]; )
                    ;
                return e > 4 ? e : void 0
            }()}};
    window.Aino = h;
    window.STATIC_URL = "/static/";
    window.THEMES_URL = STATIC_URL + "themes/"
})(jQuery);
var STATIC_URL = "/static/", G_DEMO_IMAGES = [{title: "Memory Maker", thumb: STATIC_URL + "i/s2013/2s.jpg", image: STATIC_URL + "i/s2013/2m.jpg", big: STATIC_URL + "i/s2013/2b.jpg", description: "A retro camera stilleben."}, {title: "Athabasca Rail", thumb: STATIC_URL + "i/s2013/3s.jpg", image: STATIC_URL + "i/s2013/3m.jpg", big: STATIC_URL + "i/s2013/3b.jpg", description: "The Athabasca River railroad track at the mouth of Brul\u00e9 Lake in Alberta, Canada."}, {title: "New York City", thumb: STATIC_URL + "i/s2013/4s.jpg", image: STATIC_URL +
                "i/s2013/4m.jpg", big: STATIC_URL + "i/s2013/4b.jpg", description: "Vintage skyline in New York City."}, {title: "Works for Video too", video: "http://vimeo.com/25750735", thumb: "http://b.vimeocdn.com/ts/169/759/169759080_200.jpg", description: "Integrated API for YouTube, Vimeo and Dailymotion videos"}, {title: "Interior convento", thumb: STATIC_URL + "i/s2013/5s.jpg", image: STATIC_URL + "i/s2013/5m.jpg", big: STATIC_URL + "i/s2013/5b.jpg", description: "Interior view of Yuriria Convent, founded in 1550."}, {title: "Oxbow Bend outlook",
        thumb: STATIC_URL + "i/s2013/6s.jpg", image: STATIC_URL + "i/s2013/6m.jpg", big: STATIC_URL + "i/s2013/6b.jpg", description: "View over the Snake River to the Mount Moran with the Skillet Glacier."}, {title: "Hazy blue hour", thumb: STATIC_URL + "i/s2013/7s.jpg", image: STATIC_URL + "i/s2013/7m.jpg", big: STATIC_URL + "i/s2013/7b.jpg", description: "Hazy blue hour in Grand Canyon. View from the South Rim."}, {title: "Haute Severaisse valley", thumb: STATIC_URL + "i/s2013/8s.jpg", image: STATIC_URL + "i/s2013/8m.jpg", big: STATIC_URL + "i/s2013/8b.jpg",
        description: "View of Haute Severaisse valley and surrounding summits from the slopes of Les Vernets."}, {title: "Bohinj lake", thumb: STATIC_URL + "i/s2013/9s.jpg", image: STATIC_URL + "i/s2013/9m.jpg", big: STATIC_URL + "i/s2013/9b.jpg", description: "Bohinj lake (Triglav National Park, Slovenia) in the morning."}, {title: "Bowling Balls", thumb: STATIC_URL + "i/s2013/10s.jpg", image: STATIC_URL + "i/s2013/10m.jpg", big: STATIC_URL + "i/s2013/10b.jpg", description: "Mendocino county, California, USA."}];
(function(e, h, f, t) {
    (function(e) {
        typeof define === "function" && define.amd ? define(["jquery"], e) : e(jQuery)
    })(function(e) {
        function f(e) {
            if (L.raw)
                return e;
            return decodeURIComponent(e.replace(n, " "))
        }
        function h(e) {
            e.indexOf('"') === 0 && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            e = f(e);
            try {
                return L.json ? JSON.parse(e) : e
            } catch (n) {
            }
        }
        var n = /\+/g, L = e.cookie = function(n, C, r) {
            if (C !== t) {
                r = e.extend({}, L.defaults, r);
                if (typeof r.expires === "number") {
                    var D = r.expires, I = r.expires = new Date;
                    I.setDate(I.getDate() +
                            D)
                }
                C = L.json ? JSON.stringify(C) : String(C);
                return document.cookie = [L.raw ? n : encodeURIComponent(n), "=", L.raw ? C : encodeURIComponent(C), r.expires ? "; expires=" + r.expires.toUTCString() : "", r.path ? "; path=" + r.path : "", r.domain ? "; domain=" + r.domain : "", r.secure ? "; secure" : ""].join("")
            }
            C = document.cookie.split("; ");
            r = n ? t : {};
            D = 0;
            for (I = C.length; D < I; D++) {
                var H = C[D].split("="), A = f(H.shift()), H = H.join("=");
                if (n && n === A) {
                    r = h(H);
                    break
                }
                n || (r[A] = h(H))
            }
            return r
        };
        L.defaults = {};
        e.removeCookie = function(f, h) {
            if (e.cookie(f) !== t)
                return e.cookie(f,
                        "", e.extend({}, h, {expires: -1})), !0;
            return!1
        }
    });
    var n = [], A = e.G = {init: function(e) {
            this.views._global.call(this);
            for (var f = document.body.className.split(" "), h = 0; h < f.length; h++)
                f[h]in this.views && this.views[f[h]].call(this);
            typeof e === "number" && A.run(e)
        }, make: function(e, f) {
            n[e] = f
        }, run: function(e, t, E) {
            t = t || "#demo";
            E = E || function() {
            };
            f.theme = n[e];
            f.utils.loadCSS(THEMES_URL + e + "/" + e + ".css", "galleria-theme", function() {
                h(t).galleria({responsive: !0, height: 0.5, dataSource: G_DEMO_IMAGES, maxVideoSize: 1300, extend: function(e) {
                        E.call(this,
                                e)
                    }})
            })
        }, trackDownload: function(e) {
            h(e).each(function() {
                h(this).click(function() {
                    var e = this.href.split("/");
                    _gaq.push(["_trackEvent", "Stats", "Download", e.length > 1 ? e[e.length - 1] : "unknown"])
                })
            })
        }, views: {_global: function() {
                h(".campaign");
                h(".main a:path").addClass("active");
                h(".secondary .box li:last").addClass("last");
                A.trackDownload("a.dl, a.download");
                h(".messages li:first").each(function() {
                    var e = this;
                    h("<a>", {text: "'", href: "#", "class": "close symbol", click: function(f) {
                            f.preventDefault();
                            h(e).animate({opacity: 0},
                            300, function() {
                                h(e).animate({height: 0}, 200, function() {
                                    h(e).remove()
                                })
                            })
                        }}).appendTo(h(this).find("p"));
                    this.className == "info" ? h(this).find("p .symbol").text("/") : h(this).find("p .symbol").text("W")
                });
                h("ul.errorlist li").each(function() {
                    h(this).prepend('<span class="symbol">W</span> ')
                })
            }, admin: function() {
                h(".menu a:path").addClass("active")
            }, settings: function() {
                var f = h("form.settings"), n = f.find(".verify").hide(), t = f.find(".email"), C = t.val(), A;
                t.focus(function() {
                    A = e.setInterval(function() {
                        t.val() !=
                                C && n.is(":hidden") ? n.show() : t.val() == C && n.is(":visible") && n.hide()
                    }, 50)
                }).blur(function() {
                    e.clearInterval(A)
                })
            }, login: function() {
                h("form.login").find(".error ul").each(function() {
                    h(this).parent().prev("input").addClass("error");
                    h(this).find(".symbol").remove()
                });
                h("#id_login").blur().focus()
            }, home: function() {
                h.cookie("banner") && h("body").addClass("nobanner");
                h(".banner a.close").click(function(e) {
                    h.cookie("banner", "closed");
                    e.preventDefault();
                    h(".banner").animate({height: 0, opacity: 0, margin: 0})
                });
                A.run(1, "#demo", function() {
                    Galleria.TOUCH && this.setOptions("transition", "fadeslide");
                    this.setOptions("responsive", !0)
                })
            }, tp: function() {
                var e = h("#themes");
                h("#theme-switcher").click(function() {
                    e.toggle()
                }).trigger("click")
            }, docs: function() {
            }, "theme-purchase": function() {
                var f = h("form.info"), n = !1, t = !1, C = !1, A = f.find(".vat").each(function() {
                    h(this).find("input").val().length || h(this).css({position: "absolute", left: "-100000px"})
                }), x = !1, F, r, D = A.find("input"), I = f.find(".email"), H = I.parent().next(".err"), M =
                        !1, T = function() {
                            f.find("input[name=residence]").each(function() {
                                h(this).attr("checked") && (this.className == "sweden" && (U(), x = !1), this.className == "outside" && (aa(), x = !1), this.className == "addvat" && n ? (x = !0, t ? aa() : U(), A.css({position: "static", left: "auto"}).find("input").focus()) : (this.className == "addvat" && !n && (U(), x = !0), A.css({position: "absolute", left: "-100000px"})))
                            })
                        }, U = function() {
                    r = parseFloat(F) * 0.25;
                    var e = Math.round((parseFloat(F) + r) * 100) / 100;
                    h(".buy-form input[name=amount]").val(e);
                    h(".total span").html("$" +
                            F + " + $" + r + " VAT = <strong>$" + e + "</strong>")
                }, aa = function() {
                    h(".buy-form input[name=amount]").val(F);
                    h(".total span").html("<strong>$" + F + "</strong>")
                }, da = function() {
                }, R = !1;
                D.blur(function() {
                    if (D.val().length) {
                        var e = D.val().toUpperCase();
                        D.removeClass("error ok").addClass("loading");
                        R = !0;
                        h.ajax({url: "/vatok/" + e + "/", dataType: "json", success: function(e) {
                                t = e;
                                !t && x && U();
                                e && n && aa();
                                D.attr("class", e ? "ok" : "error");
                                R = !1;
                                da()
                            }, error: function() {
                                t = !1;
                                U();
                                D.attr("class", "error")
                            }})
                    } else
                        D.removeClass("error ok loading"),
                                n && x && (t = !1, U())
                });
                I.blur(function() {
                    I.val().length ? M || (C = !0, I.removeClass("error"), H.html("")) : (C = !1, H.html("This field is required."), I.attr("class", "error"))
                });
                if (I.length && I.val().length || !h(".emailwrap").length)
                    C = !0;
                A.find(".btn a").click(function(e) {
                    e.preventDefault();
                    D.blur()
                });
                f.find("input[name=typ]").change(function() {
                    n = this.className == "business";
                    T()
                }).each(function() {
                    n = this.className == "business" && this.checked
                });
                f.find("input[name=residence]").change(function() {
                    T()
                });
                F = parseFloat(h(".buy-form").data("price"));
                h("input[type=image]").each(function() {
                    F = F.toFixed(2);
                    var r = '<div class="total">Total: <span>' + (h(this).closest(".buy-form").hasClass("hasvat") ? "$" + F * 0.8 + " + $" + (F * 0.2).toFixed(2) + " VAT = <strong>$" + F : "<strong>$" + F) + "</strong></span></div>", D = h("<a>", {href: "#", html: "Buy Now", click: function(r) {
                            r.preventDefault();
                            h(this).closest("form");
                            var D = h(this), F = arguments.callee, T = function(e) {
                                var n = f.find("input[name=paytype]:checked").val();
                                n == "paypal" ? (n = h('<input type="hidden" name="invoice" value="' + e.invoice +
                                        '">'), h(".buy-form form").append(n), D.after('<p class="loading"><em>Contacting PayPal...</em></p>').parent().addClass("disabled"), console.log("subm"), A.find("input").removeClass("error"), h(".buy-form input[name=amount]").val(e.total_price), h(".buy-form form").submit()) : n == "dibs" && (console.log("dibs data:", e), h.each(e, function(f) {
                                    f = h('<input type="hidden" name="' + f + '" value="' + e[f] + '">');
                                    h(".dibs-form form").append(f)
                                }), D.after('<p class="loading"><em>Contacting Dibs...</em></p>').parent().addClass("disabled"),
                                        A.find("input").removeClass("error"), h(".dibs-form form").submit());
                                return!1
                            };
                            if (h("div.customer").length)
                                h.post(f.attr("action"), f.serialize(), function(e) {
                                    e.errors ? alert("We are very sorry, but something went wrong with your account, please contact us at info@aino.se and describe your problem.") : T(e)
                                }, "json");
                            else if (C) {
                                D.unbind("click").parent().addClass("disabled");
                                var U = function() {
                                    h.post(f.attr("action"), f.serialize(), function(f) {
                                        if (f.errors)
                                            if (D.bind("click", F).parent().removeClass("disabled"),
                                                    f.errors.email)
                                                M = !0, H.html(f.errors.email[0]), I.attr("class", "error").focus();
                                            else {
                                                var n = h("<div>").addClass("messages"), r = h("<ul>").appendTo(n), t = !1;
                                                h.each(f.errors, function() {
                                                    r.append('<li class="error"><p><span class="symbol">W</span>' + this[0] + "</p></li>");
                                                    /VAT/.test(this[0]) && (t = !0)
                                                });
                                                n.insertAfter("header.main");
                                                t && A.css({position: "static", left: "auto"}).find("input").attr("class", "error").focus();
                                                e.scrollTo(0, 0)
                                            }
                                        else
                                            T(f)
                                    }, "json")
                                };
                                (!x || !n) && A.find("input").val("");
                                if (x && n && !t) {
                                    var aa = function() {
                                        e.confirm("Are you sure you don\u2019t have a valid VAT number for your business? Without a valid VAT number, we will have to add 25% VAT on the total price. \n\nPress cancel to add your VAT number or OK to complete the purchase including VAT (total " +
                                                h(".total span strong").html() + ").") ? (A.find("input").val(""), U()) : (D.bind("click", F).parent().removeClass("disabled"), A.find("input").focus())
                                    };
                                    R ? da = function() {
                                        t ? U() : aa()
                                    } : aa()
                                } else
                                    U()
                            } else
                                I.attr("class", "error").focus(), H.html("This field is required.")
                        }});
                    h(this).replaceWith(D);
                    D.before(r);
                    D.wrap('<div class="btn send" />')
                });
                T()
            }}};
    h(document).on("mousedown mouseup", "a", function(e) {
        if ("hideFocus"in this)
            this.hideFocus = e.type == "mousedown";
        this.blur()
    });
    e.G = A
})(window, jQuery, Galleria);
(function(e) {
    G.make(0, {defaults: {transition: "fade", transitionSpeed: 500, imageCrop: !0, thumbCrop: "height", idleMode: "hover", idleSpeed: 500, fullscreenTransition: !1, _locale: {show_captions: "Show captions", hide_captions: "Hide captions", play: "Play slideshow", pause: "Pause slideshow", enter_fullscreen: "Enter fullscreen", exit_fullscreen: "Exit fullscreen", next: "Next image", prev: "Previous image", showing_image: "Showing image %s of %s"}, _toggleCaption: !0, _showCaption: !0, _showTooltip: !0}, init: function(h) {
            Galleria.requires(1.33,
                    "This version of Azur theme requires Galleria version 1.3.3 or later");
            this.addElement("bar", "fullscreen", "play", "progress").append({stage: "progress", container: "bar", bar: ["fullscreen", "play", "thumbnails-container"]}).prependChild("stage", "info").appendChild("container", "tooltip");
            var f = this, t = window.document, n = h._locale, A = "getContext"in t.createElement("canvas");
            (function() {
                if (A) {
                    var h = t.createElement("canvas"), n = h.getContext("2d");
                    h.width = 24;
                    h.height = 24;
                    e(h).css({zIndex: 1E4, position: "absolute", right: 10,
                        top: 10}).appendTo(f.get("container"));
                    f.bind("progress", function(f) {
                        e(h).fadeIn(200);
                        f = f.percent * 3.6;
                        n.strokeStyle = "rgba(255,255,255,.7)";
                        n.lineWidth = 3;
                        n.clearRect(0, 0, 24, 24);
                        n.beginPath();
                        n.arc(12, 12, 10, -90 * (Math.PI / 180), (f - 90) * (Math.PI / 180), !1);
                        n.stroke();
                        n.closePath()
                    });
                    f.bind("pause", function() {
                        e(h).fadeOut(200, function() {
                            n.clearRect(0, 0, 24, 24)
                        })
                    })
                } else {
                    f.addElement("progressbar").appendChild("progress", "progressbar");
                    f.$("progress").addClass("nocanvas");
                    var z = f.$("progress").width();
                    f.bind("progress",
                            function(e) {
                                f.$("progressbar").width(e.percent / 100 * z)
                            })
                }
            })();
            (function() {
                if (A) {
                    var h = t.createElement("canvas"), n = h.getContext("2d"), z = Math, x = function(e, f, h) {
                        h = h ? -2 : 2;
                        e.translate(f / h, f / h)
                    }, F = 28;
                    e(h).hide().appendTo(f.get("loader")).fadeIn(500);
                    window.setInterval(function() {
                        var e = F, f;
                        n.clearRect(0, 0, 48, 48);
                        n.lineWidth = 1.5;
                        for (var h = 0; h < 28; h++)
                            f = h + e >= 28 ? h - 28 + e : h + e, n.strokeStyle = "rgba(255,255,255," + z.max(0, f / 28) + ")", n.beginPath(), n.moveTo(24, 8), n.lineTo(24, 0), n.stroke(1), x(n, 48, !1), n.rotate(360 / 28 * z.PI /
                                    180), x(n, 48, !0);
                        n.save();
                        x(n, 48, !1);
                        n.rotate(-1 * (360 / 28 / 8) * z.PI / 180);
                        x(n, 48, !0);
                        F = F === 0 ? 28 : F - 1
                    }, 20)
                } else
                    f.$("loader").addClass("nocanvas")
            })();
            var z = Galleria.IE < 9 ? {bottom: -100} : {bottom: -50, opacity: 0}, J = Galleria.IE < 9 ? {top: -20} : {opacity: 0, top: -20};
            this.bind("play", function() {
                this.$("play").addClass("pause");
                A || this.$("progress").show()
            }).bind("pause", function() {
                this.$("play").removeClass("pause");
                A || this.$("progress").hide()
            }).bind("loadstart", function(e) {
                e.cached || this.$("loader").show()
            }).bind("loadfinish",
                    function() {
                        A ? this.$("loader").fadeOut(100) : this.$("loader").hide()
                    });
            this.addIdleState(this.get("info"), z, Galleria.IE < 9 ? {} : {opacity: 1}, !0).addIdleState(this.get("image-nav-left"), {opacity: 0, left: 0}, {opacity: 1}, !0).addIdleState(this.get("image-nav-right"), {opacity: 0, right: 0}, {opacity: 1}, !0).addIdleState(this.get("counter"), J, Galleria.IE < 9 ? {} : {opacity: 0.9}, !0);
            this.$("fullscreen").on("click:fast", function(e) {
                e.preventDefault();
                f.toggleFullscreen()
            });
            this.$("play").on("click:fast", function(e) {
                e.preventDefault();
                f.playToggle()
            });
            h._toggleCaption && (this.$("info").addClass("toggler"), this.addElement("captionopen").appendChild("stage", "captionopen"), this.addElement("captionclose").appendChild("info", "captionclose"), this.$("captionopen").on("click:fast", function() {
                f.$("info").addClass("open");
                e(this).hide()
            }).html(n.show_captions), this.bind("loadstart", function() {
                this.$("captionopen").toggle(!f.$("info").hasClass("open") && this.hasInfo())
            }), this.$("captionclose").on("click:fast", function() {
                f.$("info").removeClass("open");
                f.hasInfo() && f.$("captionopen").show()
            }).html("&#215;"), h._showCaption && this.$("captionopen").trigger("click:fast"));
            h._showTooltip && this.bindTooltip({fullscreen: function() {
                    return f.isFullscreen() ? n.exit_fullscreen : n.enter_fullscreen
                }, play: function() {
                    return f.isPlaying() ? n.pause : n.play
                }, captionclose: n.hide_captions, "image-nav-right": n.next, "image-nav-left": n.prev, counter: function() {
                    return n.showing_image.replace(/\%s/, f.getIndex() + 1).replace(/\%s/, f.getDataLength())
                }})
        }});
    G.make(1, {defaults: {transition: "pulse",
            transitionSpeed: 500, imageCrop: !0, thumbCrop: !0, carousel: !1, _locale: {show_thumbnails: "Show thumbnails", hide_thumbnails: "Hide thumbnails", play: "Play slideshow", pause: "Pause slideshow", enter_fullscreen: "Enter fullscreen", exit_fullscreen: "Exit fullscreen", popout_image: "Popout image", showing_image: "Showing image %s of %s"}, _showFullscreen: !0, _showPopout: !0, _showProgress: !0, _showTooltip: !0}, init: function(h) {
            Galleria.requires(1.33, "This version of Twelve theme requires Galleria version 1.3.3 or later");
            this.addElement("bar",
                    "fullscreen", "play", "popout", "thumblink", "s1", "s2", "s3", "s4", "progress");
            this.append({stage: "progress", container: ["bar", "tooltip"], bar: ["fullscreen", "play", "popout", "thumblink", "info", "s1", "s2", "s3", "s4"]});
            this.prependChild("info", "counter");
            var f = this, t = this.$("thumbnails-container"), n = this.$("thumblink"), A = this.$("fullscreen"), z = this.$("play"), J = this.$("popout"), E = this.$("bar"), C = this.$("progress"), L = h.transition, x = h._locale, F = !1, r = !1, D = !!h.autoplay, I = !1, H = function() {
                t.height(f.getStageHeight()).width(f.getStageWidth()).css("top",
                        F ? 0 : f.getStageHeight() + 30)
            }, M = function() {
                F && I ? f.play() : (I = D, f.pause());
                Galleria.utils.animate(t, {top: F ? f.getStageHeight() + 30 : 0}, {easing: "galleria", duration: 400, complete: function() {
                        f.defineTooltip("thumblink", F ? x.show_thumbnails : x.hide_thumbnails);
                        n[F ? "removeClass" : "addClass"]("open");
                        F = !F
                    }})
            };
            H();
            h._showTooltip && f.bindTooltip({thumblink: x.show_thumbnails, fullscreen: x.enter_fullscreen, play: function() {
                    return D ? x.pause : x.play
                }, popout: x.popout_image, caption: function() {
                    var e = f.getData(), h = "";
                    e && (e.title &&
                            e.title.length && (h += "<strong>" + e.title + "</strong>"), e.description && e.description.length && (h += "<br>" + e.description));
                    return h
                }, counter: function() {
                    return x.showing_image.replace(/\%s/, f.getIndex() + 1).replace(/\%s/, f.getDataLength())
                }});
            h.showInfo || this.$("info").hide();
            this.bind("play", function() {
                D = !0;
                z.addClass("playing")
            });
            this.bind("pause", function() {
                D = !1;
                z.removeClass("playing");
                C.width(0)
            });
            h._showProgress && this.bind("progress", function(e) {
                C.width(e.percent / 100 * this.getStageWidth())
            });
            this.bind("loadstart",
                    function(e) {
                        e.cached || this.$("loader").show()
                    });
            this.bind("loadfinish", function() {
                C.width(0);
                this.$("loader").hide();
                this.refreshTooltip("counter", "caption")
            });
            this.bind("thumbnail", function(h) {
                e(h.thumbTarget).hover(function() {
                    f.setInfo(h.thumbOrder);
                    f.setCounter(h.thumbOrder)
                }, function() {
                    f.setInfo();
                    f.setCounter()
                }).on("click:fast", function() {
                    M()
                })
            });
            this.bind("fullscreen_enter", function() {
                r = !0;
                f.setOptions("transition", !1);
                A.addClass("open");
                E.css("bottom", 0);
                this.defineTooltip("fullscreen", x.exit_fullscreen);
                Galleria.TOUCH || this.addIdleState(E, {bottom: -31})
            });
            this.bind("fullscreen_exit", function() {
                r = !1;
                Galleria.utils.clearTimer("bar");
                f.setOptions("transition", L);
                A.removeClass("open");
                E.css("bottom", 0);
                this.defineTooltip("fullscreen", x.enter_fullscreen);
                Galleria.TOUCH || this.removeIdleState(E, {bottom: -31})
            });
            this.bind("rescale", H);
            Galleria.TOUCH || (this.addIdleState(this.get("image-nav-left"), {left: -36}), this.addIdleState(this.get("image-nav-right"), {right: -36}));
            n.on("click:fast", M);
            h.thumbnails || (n.hide(),
                    z.css("left", 0), this.$("s2").hide(), this.$("info").css("left", 41));
            if (h._showPopout)
                J.on("click:fast", function(e) {
                    f.openLightbox();
                    e.preventDefault()
                });
            else
                J.remove(), h._showFullscreen && (this.$("s4").remove(), this.$("info").css("right", 40), A.css("right", 0));
            z.on("click:fast", function() {
                D ? f.pause() : (F && n.trigger("click:fast"), f.play())
            });
            if (h._showFullscreen)
                A.on("click:fast", function() {
                    r ? f.exitFullscreen() : f.enterFullscreen()
                });
            else
                A.remove(), h._show_popout && (this.$("s4").remove(), this.$("info").css("right",
                        40), J.css("right", 0));
            !h._showFullscreen && !h._showPopout && (this.$("s3,s4").remove(), this.$("info").css("right", 10));
            h.autoplay && this.trigger("play")
        }});
    G.make(2, {defaults: {transition: "none", imageCrop: !0, thumbCrop: "height", easing: "galleriaOut", trueFullscreen: !1, _hideDock: !0, _closeOnClick: !1}, init: function(h) {
            Galleria.requires(1.33, "This version of Fullscreen theme requires Galleria version 1.3.3 or later");
            this.addElement("thumbnails-tab");
            this.appendChild("thumbnails-container", "thumbnails-tab");
            var f = this.$("thumbnails-tab"), t = this.$("loader"), n = this.$("thumbnails-container"), A = this.$("thumbnails-list"), z = this.$("info-text"), J = this.$("info"), E = !h._hideDock, C = 0;
            Galleria.IE && (this.addElement("iefix"), this.appendChild("container", "iefix"), this.$("iefix").css({zIndex: 3, position: "absolute", backgroundColor: this.hasVariation("light") ? "#fff" : "#000", opacity: 0.4, top: 0}));
            h.thumbnails === !1 && n.hide();
            var L = this.proxy(function(f) {
                var h = f.width || e(f).width();
                if (f || h)
                    h = Math.min(h, e(window).width()), z.width(h -
                            40), Galleria.IE && this.getOptions("showInfo") && this.$("iefix").width(J.outerWidth()).height(J.outerHeight())
            });
            this.bind("rescale", function() {
                C = this.getStageHeight() - f.height() - 2;
                n.css("top", E ? C - A.outerHeight() + 2 : C);
                var e = this.getActiveImage();
                e && L(e)
            });
            this.bind("loadstart", function(f) {
                f.cached || t.show().fadeTo(100, 1);
                e(f.thumbTarget).css("opacity", 1).parent().siblings().children().css("opacity", 0.6)
            });
            this.bind("loadfinish", function() {
                t.fadeOut(300);
                this.$("info, iefix").toggle(this.hasInfo())
            });
            this.bind("image", function(e) {
                L(e.imageTarget)
            });
            this.bind("thumbnail", function(n) {
                e(n.thumbTarget).parent(":not(.active)").children().css("opacity", 0.6);
                e(n.thumbTarget).on("click:fast", function() {
                    E && h._closeOnClick && f.trigger("click:fast")
                })
            });
            this.trigger("rescale");
            Galleria.TOUCH || (this.addIdleState(n, {opacity: 0}), this.addIdleState(this.get("info"), {opacity: 0}), this.$("image-nav-left, image-nav-right").css("opacity", 0.01).hover(function() {
                e(this).animate({opacity: 1}, 100)
            }, function() {
                e(this).animate({opacity: 0})
            }).show());
            Galleria.IE && this.addIdleState(this.get("iefix"), {opacity: 0});
            if (h._hideDock)
                f.on("click:fast", this.proxy(function() {
                    f.toggleClass("open", !E);
                    E ? n.animate({top: C}, 400, h.easing) : n.animate({top: C - A.outerHeight() + 2}, 400, h.easing);
                    E = !E
                }));
            else
                this.bind("thumbnail", function() {
                    n.css("top", C - A.outerHeight() + 2)
                }), f.css("visibility", "hidden");
            this.$("thumbnails").children().hover(function() {
                e(this).not(".active").children().stop().fadeTo(100, 1)
            }, function() {
                e(this).not(".active").children().stop().fadeTo(400,
                        0.6)
            });
            this.enterFullscreen();
            this.attachKeyboard({escape: function() {
                    return!1
                }, up: function(e) {
                    E || f.trigger("click:fast");
                    e.preventDefault()
                }, down: function(e) {
                    E && f.trigger("click:fast");
                    e.preventDefault()
                }})
        }});
    G.make(3, {defaults: {transition: "slide", thumbCrop: "height", _toggleInfo: !0}, init: function(h) {
            Galleria.requires(1.33, "This version of Classic theme requires Galleria 1.3.3 or later");
            this.addElement("info-link", "info-close");
            this.append({info: ["info-link", "info-close"]});
            var f = this.$("info-link,info-close,info-text"),
                    t = Galleria.TOUCH;
            this.$("loader,counter").show().css("opacity", 0.4);
            t || (this.addIdleState(this.get("image-nav-left"), {left: -50}), this.addIdleState(this.get("image-nav-right"), {right: -50}), this.addIdleState(this.get("counter"), {opacity: 0}));
            h._toggleInfo === !0 ? f.bind("click:fast", function() {
                f.toggle()
            }) : (f.show(), this.$("info-link, info-close").hide());
            this.bind("thumbnail", function(f) {
                t ? e(f.thumbTarget).css("opacity", this.getIndex() ? 1 : 0.6).bind("click:fast", function() {
                    e(this).css("opacity", 1).parent().siblings().children().css("opacity",
                            0.6)
                }) : (e(f.thumbTarget).css("opacity", 0.6).parent().hover(function() {
                    e(this).not(".active").children().stop().fadeTo(100, 1)
                }, function() {
                    e(this).not(".active").children().stop().fadeTo(400, 0.6)
                }), f.index === this.getIndex() && e(f.thumbTarget).css("opacity", 1))
            });
            this.bind("loadstart", function(f) {
                f.cached || this.$("loader").show().fadeTo(200, 0.4);
                window.setTimeout(function() {
                    e(f.thumbTarget).css("opacity", 1).parent().siblings().children().css("opacity", 0.6)
                }, t ? 300 : 0);
                this.$("info").toggle(this.hasInfo())
            });
            this.bind("loadfinish", function() {
                this.$("loader").fadeOut(200)
            })
        }});
    G.make(4, {defaults: {transition: "pulse", thumbCrop: "width", imageCrop: !1, carousel: !1, show: !1, easing: "galleriaOut", trueFullscreen: !1, _webkitCursor: !1, _animate: !0, _onClick: null}, init: function(h) {
            Galleria.requires(1.33, "This version of Azur theme requires Galleria version 1.3.3 or later");
            this.addElement("preloader", "loaded", "close").append({container: "preloader", preloader: "loaded", stage: "close"});
            var f = this, t = this.$("stage"), n = this.$("thumbnails"),
                    A = this.$("images"), z = this.$("info"), J = this.$("loader"), E = this.$("target"), C = 0, L = E.width(), x = 0, F = window.location.hash.substr(2), r = function(h) {
                f.$("info").css({left: f.finger ? 20 : Math.max(20, e(window).width() / 2 - h / 2 + 10)})
            }, D = function(f, h) {
                var h = e.extend({speed: 400, width: 190, onbrick: function() {
                    }, onheight: function() {
                    }, delay: 0, debug: !1}, h), f = e(f), n = f.children(), r = f.width(), t = Math.floor(r / h.width), z = [], x, C, A, r = {"float": "none", position: "absolute", display: Galleria.SAFARI ? "inline-block" : "block"};
                if (f.data("colCount") !==
                        t && (f.data("colCount", t), n.length)) {
                    for (x = 0; x < t; x++)
                        z[x] = 0;
                    f.css("position", "relative");
                    n.css(r).each(function(f, n) {
                        n = e(n);
                        for (x = t - 1; x > - 1; x--)
                            z[x] === Math.min.apply(window, z) && (C = x);
                        A = {top: z[C], left: h.width * C};
                        typeof A.top !== "number" || typeof A.left !== "number" || (h.speed ? window.setTimeout(function(e, f, h) {
                            return function() {
                                Galleria.utils.animate(e, h, {easing: "galleriaOut", duration: f.speed, complete: f.onbrick})
                            }
                        }(n, h, A), f * h.delay) : (n.css(A), h.onbrick.call(n)), n.data("height") || n.data("height", n.outerHeight(!0)),
                                z[C] += n.data("height"))
                    });
                    n = Math.max.apply(window, z);
                    !(n < 0) && typeof n === "number" && (h.speed ? f.animate({height: Math.max.apply(window, z)}, h.speed, h.onheight) : (f.height(Math.max.apply(window, z)), h.onheight.call(f)))
                }
            };
            this.bind("fullscreen_enter", function() {
                this.$("container").css("height", "100%");
                f.finger && e.each(f._controls.slides, function(f, h) {
                    e(h.container).show()
                })
            });
            this.bind("fullscreen_exit", function() {
                this.getData().iframe && (e(this._controls.getActive().container).find("iframe").remove(), this.$("container").removeClass("iframe"));
                Galleria.TOUCH || e(f._controls.getActive().container).hide();
                f.finger && e.each(f._controls.slides, function(f, h) {
                    e(h.container).hide()
                })
            });
            this._fullscreen.beforeExit = function(e) {
                z.hide();
                Galleria.IE8 && Galleria.utils.animate(f.getActiveImage(), {opacity: 0}, {duration: 200});
                Galleria.utils.animate(t[0], {opacity: 0}, {duration: 200, complete: function() {
                        t.css({visibility: "hidden", opacity: 1});
                        n.show();
                        Galleria.utils.animate(n[0], {opacity: 1}, {duration: 200});
                        e()
                    }})
            };
            this.bind("thumbnail", function(r) {
                this.addElement("plus");
                var z = r.thumbTarget, J = this.$("plus").css({display: "block"}).insertAfter(z), F = e(z).parent().data("index", r.index);
                h.showInfo && this.hasInfo(r.index) && J.append("<span>" + this.getData(r.index).title + "</span>");
                x = x || e(z).parent().outerWidth(!0);
                e(z).css("opacity", 0);
                F.off(h.thumbEventType);
                Galleria.IE ? J.hide() : J.css("opacity", 0);
                if (Galleria.TOUCH)
                    F.on("touchstart", function() {
                        J.css("opacity", 1)
                    }).on("touchend", function() {
                        J.hide()
                    });
                else
                    F.hover(function() {
                        Galleria.IE ? J.show() : J.stop().css("opacity", 1)
                    },
                            function() {
                                Galleria.IE ? J.hide() : J.stop().animate({opacity: 0}, 300)
                            });
                C++;
                this.$("loaded").css("width", C / this.getDataLength() * 100 + "%");
                C === this.getDataLength() && (this.$("preloader").fadeOut(100), n.data("colCount", null), D(n, {width: x, speed: h._animate ? 400 : 0, onbrick: function() {
                        var r = e(this).find("img, .img");
                        window.setTimeout(function(r) {
                            return function() {
                                Galleria.utils.animate(r, {opacity: 1}, {duration: h.transition_speed, complete: function() {
                                        e(r).parent().css("background", "#000")
                                    }});
                                r.parent().off("click:fast click").on("click:fast",
                                        function() {
                                            var r = e(this).data("index");
                                            Galleria.IE < 9 && e(this).find(".galleria-plus").hide();
                                            e.isFunction(h._onClick) ? h._onClick.call(f, f.getData(r)) : (t.css({visibility: "visible", opacity: 0}), f.$("target").height(f.$("target").height()), f.finger && A.css("opacity", 0), Galleria.utils.animate(n[0], {opacity: 0}, {duration: 100, complete: function() {
                                                    n.hide();
                                                    f.enterFullscreen();
                                                    Galleria.utils.animate(t[0], {opacity: 1}, {duration: 200, complete: function() {
                                                            f.finger && (A.animate({opacity: 1}), f.finger.moveTo(r));
                                                            f.finger &&
                                                                    f.finger.setPosition(-r * f.finger.width);
                                                            f.show(r)
                                                        }})
                                                }}))
                                        })
                            }
                        }(r), h._animate ? r.parent().data("index") * 100 : 0)
                    }, onheight: function() {
                        E.height(n.height())
                    }}))
            });
            this.bind("loadstart", function(e) {
                e.cached || J.show()
            });
            this.bind("data", function() {
                C = 0
            });
            this.bind("loadfinish", function(f) {
                f.galleriaData && (J.hide(), this.finger || z.hide(), this.hasInfo() && h.showInfo && this.isFullscreen() && !this.finger && z.fadeIn(h.transition ? h.transitionSpeed : 0), r(e(f.imageTarget).width()), this.finger && z.show())
            });
            !Galleria.TOUCH &&
                    !h._webkitCursor && (this.addIdleState(this.get("image-nav-left"), {left: -100}), this.addIdleState(this.get("image-nav-right"), {right: -100}), this.addIdleState(this.get("info"), {opacity: 0}));
            this.$("container").css({width: h.width, height: "auto"});
            h._webkitCursor && Galleria.WEBKIT && !Galleria.TOUCH && this.$("image-nav-right,image-nav-left").addClass("cur");
            Galleria.TOUCH && this.setOptions({transition: "fadeslide", initialTransition: !1});
            this.$("close").on("click:fast", function() {
                f.exitFullscreen()
            });
            Galleria.History &&
                    F && (t.css("visibility", "visible"), n.hide(), this.$("preloader").hide(), this.enterFullscreen(function() {
                        this.show(parseInt(F, 10))
                    }));
            e(window).resize(function() {
                if (f.isFullscreen())
                    f.getActiveImage() && r(f.getActiveImage().width);
                else {
                    var e = E.width();
                    e !== L && (L = e, D(n, {width: x, delay: 50, debug: !0, onheight: function() {
                            E.height(n.height())
                        }}))
                }
            })
        }});
    G.make(5, {defaults: {transition: "pulse", thumbCrop: !0, imageCrop: !0, carousel: !1, imagePan: !0, clicknext: !0, _locale: {enter_fullscreen: "Enter fullscreen", exit_fullscreen: "Exit fullscreen",
                click_to_close: "Click to close", show_thumbnails: "Show thumbnails", show_info: "Show info"}}, init: function(h) {
            Galleria.requires(1.33, "This version of Miniml theme requires Galleria version 1.3.3 or later");
            var f = this, t = !1, n;
            n = 0;
            var A, z, J;
            this.addElement("desc", "dots", "thumbs", "fs", "more");
            this.append({container: ["desc", "dots", "thumbs", "fs", "info-description", "more"]});
            J = this.$("thumbnails-container").hide().css("visibility", "visible");
            var E = function(h) {
                return e("<div>").html("&#8226;").on("click:fast",
                        function(e) {
                            return function(h) {
                                h.preventDefault();
                                f.show(e)
                            }
                        }(h))
            };
            for (n = 0; n < this.getDataLength(); n++)
                this.$("dots").append(E(n));
            n = this.$("dots").outerWidth();
            A = this.$("desc").hide().hover(function() {
                e(this).addClass("hover")
            }, function() {
                e(this).removeClass("hover")
            }).on("click:fast", function() {
                e(this).hide()
            });
            z = this.$("loader");
            this.bindTooltip({fs: function() {
                    return t ? h._locale.exit_fullscreen : h._locale.enter_fullscreen
                }, desc: h._locale.click_to_close, more: h._locale.show_info, thumbs: h._locale.show_thumbnails});
            this.bind("loadstart", function(e) {
                e.cached || this.$("loader").show().fadeTo(200, 0.4)
            });
            this.bind("loadfinish", function(e) {
                var n = f.getData().title, t = f.getData().description;
                z.fadeOut(200);
                this.$("dots").children("div").eq(e.index).addClass("active").siblings(".active").removeClass("active");
                n && t ? (A.empty().append("<strong>" + n + "</strong>", "<p>" + t + "</p>"), this.$("more").show()) : this.$("more").hide();
                J.fadeOut(h.fadeSpeed);
                f.$("thumbs").removeClass("active")
            });
            this.bind("thumbnail", function(h) {
                e(h.thumbTarget).hover(function() {
                    f.setInfo(h.index)
                },
                        function() {
                            f.setInfo()
                        })
            });
            this.$("fs").on("click:fast", function() {
                f.toggleFullscreen();
                t = !t
            });
            this.$("thumbs").on("click:fast", function(f) {
                f.preventDefault();
                J.toggle();
                e(this).toggleClass("active");
                A.hide()
            });
            this.$("more").on("click:fast", function() {
                A.toggle()
            });
            this.$("info").css({width: this.getStageWidth() - n - 30, left: n + 10})
        }})
})(jQuery);
(function(e) {
    var h = this, f = function(e) {
        var f = h.location, n, t;
        if (/^\w+:/.test(e))
            return e.toString();
        n = f.protocol + "//" + f.host;
        if (e.indexOf("/") === 0)
            return n + e.toString();
        f = f.pathname.replace(/\/[^\/]*$/, "");
        if (t = e.match(/\.\.\//g)) {
            e = e.substring(t.length * 3);
            for (t = t.length; t--; )
                f = f.substring(0, f.lastIndexOf("/"))
        } else
            e = e.toString();
        return n + f + "/" + e
    }, t = function(e, f) {
        var h;
        if (e.length !== f.length)
            return!1;
        for (h = 0; h < f.length; h++)
            if (e[h] !== f[h])
                return!1;
        return!0
    }, n = function(e) {
        return e.replace(/#.*$/, "").replace(/\?.*/,
                "").replace(/\/$/, "")
    }, A = n(h.location.href).split("/");
    e.extend(e.expr[":"], {path: function(e) {
            if (!(e.href && e.nodeName.toUpperCase() === "A"))
                return!1;
            e = n(f(e.href)).split("/");
            if (e.length === 3)
                return t(A, e);
            return A.length < e.length ? !1 : t(A.slice(0, e.length), e)
        }, current: function(e) {
            if (!(e.href && e.nodeName.toUpperCase() === "A"))
                return!1;
            e = n(f(e.href)).split("/");
            return t(A, e)
        }})
})(jQuery);
