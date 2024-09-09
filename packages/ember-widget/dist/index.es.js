import qt, { useState as Mt, useRef as $r, useEffect as Wt, useMemo as xo, useCallback as Ns } from "react";
var da = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function As(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ji = { exports: {} }, Gn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fa;
function Ms() {
  if (fa) return Gn;
  fa = 1;
  var e = qt, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, l, u) {
    var c, f = {}, m = null, h = null;
    u !== void 0 && (m = "" + u), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (h = l.ref);
    for (c in l) r.call(l, c) && !a.hasOwnProperty(c) && (f[c] = l[c]);
    if (s && s.defaultProps) for (c in l = s.defaultProps, l) f[c] === void 0 && (f[c] = l[c]);
    return { $$typeof: t, type: s, key: m, ref: h, props: f, _owner: i.current };
  }
  return Gn.Fragment = n, Gn.jsx = o, Gn.jsxs = o, Gn;
}
var Xn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ha;
function Rs() {
  return ha || (ha = 1, process.env.NODE_ENV !== "production" && function() {
    var e = qt, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), x = Symbol.iterator, E = "@@iterator";
    function R(p) {
      if (p === null || typeof p != "object")
        return null;
      var I = x && p[x] || p[E];
      return typeof I == "function" ? I : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(p) {
      {
        for (var I = arguments.length, L = new Array(I > 1 ? I - 1 : 0), W = 1; W < I; W++)
          L[W - 1] = arguments[W];
        _("error", p, L);
      }
    }
    function _(p, I, L) {
      {
        var W = b.ReactDebugCurrentFrame, ce = W.getStackAddendum();
        ce !== "" && (I += "%s", L = L.concat([ce]));
        var ye = L.map(function(oe) {
          return String(oe);
        });
        ye.unshift("Warning: " + I), Function.prototype.apply.call(console[p], console, ye);
      }
    }
    var P = !1, T = !1, w = !1, K = !1, he = !1, ue;
    ue = Symbol.for("react.module.reference");
    function ge(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === r || p === a || he || p === i || p === u || p === c || K || p === h || P || T || w || typeof p == "object" && p !== null && (p.$$typeof === m || p.$$typeof === f || p.$$typeof === o || p.$$typeof === s || p.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === ue || p.getModuleId !== void 0));
    }
    function Z(p, I, L) {
      var W = p.displayName;
      if (W)
        return W;
      var ce = I.displayName || I.name || "";
      return ce !== "" ? L + "(" + ce + ")" : L;
    }
    function V(p) {
      return p.displayName || "Context";
    }
    function ae(p) {
      if (p == null)
        return null;
      if (typeof p.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
        return p.displayName || p.name || null;
      if (typeof p == "string")
        return p;
      switch (p) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case u:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case s:
            var I = p;
            return V(I) + ".Consumer";
          case o:
            var L = p;
            return V(L._context) + ".Provider";
          case l:
            return Z(p, p.render, "ForwardRef");
          case f:
            var W = p.displayName || null;
            return W !== null ? W : ae(p.type) || "Memo";
          case m: {
            var ce = p, ye = ce._payload, oe = ce._init;
            try {
              return ae(oe(ye));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var pe = Object.assign, X = 0, Pe, Te, Be, Je, g, Ve, Qe;
    function v() {
    }
    v.__reactDisabledLog = !0;
    function We() {
      {
        if (X === 0) {
          Pe = console.log, Te = console.info, Be = console.warn, Je = console.error, g = console.group, Ve = console.groupCollapsed, Qe = console.groupEnd;
          var p = {
            configurable: !0,
            enumerable: !0,
            value: v,
            writable: !0
          };
          Object.defineProperties(console, {
            info: p,
            log: p,
            warn: p,
            error: p,
            group: p,
            groupCollapsed: p,
            groupEnd: p
          });
        }
        X++;
      }
    }
    function ht() {
      {
        if (X--, X === 0) {
          var p = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: pe({}, p, {
              value: Pe
            }),
            info: pe({}, p, {
              value: Te
            }),
            warn: pe({}, p, {
              value: Be
            }),
            error: pe({}, p, {
              value: Je
            }),
            group: pe({}, p, {
              value: g
            }),
            groupCollapsed: pe({}, p, {
              value: Ve
            }),
            groupEnd: pe({}, p, {
              value: Qe
            })
          });
        }
        X < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ce = b.ReactCurrentDispatcher, pt;
    function qe(p, I, L) {
      {
        if (pt === void 0)
          try {
            throw Error();
          } catch (ce) {
            var W = ce.stack.trim().match(/\n( *(at )?)/);
            pt = W && W[1] || "";
          }
        return `
` + pt + p;
      }
    }
    var st = !1, Ue;
    {
      var Ft = typeof WeakMap == "function" ? WeakMap : Map;
      Ue = new Ft();
    }
    function Jt(p, I) {
      if (!p || st)
        return "";
      {
        var L = Ue.get(p);
        if (L !== void 0)
          return L;
      }
      var W;
      st = !0;
      var ce = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ye;
      ye = Ce.current, Ce.current = null, We();
      try {
        if (I) {
          var oe = function() {
            throw Error();
          };
          if (Object.defineProperty(oe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(oe, []);
            } catch (xt) {
              W = xt;
            }
            Reflect.construct(p, [], oe);
          } else {
            try {
              oe.call();
            } catch (xt) {
              W = xt;
            }
            p.call(oe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xt) {
            W = xt;
          }
          p();
        }
      } catch (xt) {
        if (xt && W && typeof xt.stack == "string") {
          for (var ne = xt.stack.split(`
`), ze = W.stack.split(`
`), Ee = ne.length - 1, je = ze.length - 1; Ee >= 1 && je >= 0 && ne[Ee] !== ze[je]; )
            je--;
          for (; Ee >= 1 && je >= 0; Ee--, je--)
            if (ne[Ee] !== ze[je]) {
              if (Ee !== 1 || je !== 1)
                do
                  if (Ee--, je--, je < 0 || ne[Ee] !== ze[je]) {
                    var _e = `
` + ne[Ee].replace(" at new ", " at ");
                    return p.displayName && _e.includes("<anonymous>") && (_e = _e.replace("<anonymous>", p.displayName)), typeof p == "function" && Ue.set(p, _e), _e;
                  }
                while (Ee >= 1 && je >= 0);
              break;
            }
        }
      } finally {
        st = !1, Ce.current = ye, ht(), Error.prepareStackTrace = ce;
      }
      var Tt = p ? p.displayName || p.name : "", Lr = Tt ? qe(Tt) : "";
      return typeof p == "function" && Ue.set(p, Lr), Lr;
    }
    function Ct(p, I, L) {
      return Jt(p, !1);
    }
    function On(p) {
      var I = p.prototype;
      return !!(I && I.isReactComponent);
    }
    function mt(p, I, L) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return Jt(p, On(p));
      if (typeof p == "string")
        return qe(p);
      switch (p) {
        case u:
          return qe("Suspense");
        case c:
          return qe("SuspenseList");
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case l:
            return Ct(p.render);
          case f:
            return mt(p.type, I, L);
          case m: {
            var W = p, ce = W._payload, ye = W._init;
            try {
              return mt(ye(ce), I, L);
            } catch {
            }
          }
        }
      return "";
    }
    var gt = Object.prototype.hasOwnProperty, Qt = {}, lt = b.ReactDebugCurrentFrame;
    function Et(p) {
      if (p) {
        var I = p._owner, L = mt(p.type, p._source, I ? I.type : null);
        lt.setExtraStackFrame(L);
      } else
        lt.setExtraStackFrame(null);
    }
    function Tn(p, I, L, W, ce) {
      {
        var ye = Function.call.bind(gt);
        for (var oe in p)
          if (ye(p, oe)) {
            var ne = void 0;
            try {
              if (typeof p[oe] != "function") {
                var ze = Error((W || "React class") + ": " + L + " type `" + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[oe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ze.name = "Invariant Violation", ze;
              }
              ne = p[oe](I, oe, W, L, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ee) {
              ne = Ee;
            }
            ne && !(ne instanceof Error) && (Et(ce), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", W || "React class", L, oe, typeof ne), Et(null)), ne instanceof Error && !(ne.message in Qt) && (Qt[ne.message] = !0, Et(ce), O("Failed %s type: %s", L, ne.message), Et(null));
          }
      }
    }
    var jn = Array.isArray;
    function pn(p) {
      return jn(p);
    }
    function Kn(p) {
      {
        var I = typeof Symbol == "function" && Symbol.toStringTag, L = I && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return L;
      }
    }
    function Pn(p) {
      try {
        return mn(p), !1;
      } catch {
        return !0;
      }
    }
    function mn(p) {
      return "" + p;
    }
    function C(p) {
      if (Pn(p))
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Kn(p)), mn(p);
    }
    var N = b.ReactCurrentOwner, U = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, J, se, Le;
    Le = {};
    function ut(p) {
      if (gt.call(p, "ref")) {
        var I = Object.getOwnPropertyDescriptor(p, "ref").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return p.ref !== void 0;
    }
    function nt(p) {
      if (gt.call(p, "key")) {
        var I = Object.getOwnPropertyDescriptor(p, "key").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return p.key !== void 0;
    }
    function yt(p, I) {
      if (typeof p.ref == "string" && N.current && I && N.current.stateNode !== I) {
        var L = ae(N.current.type);
        Le[L] || (O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ae(N.current.type), p.ref), Le[L] = !0);
      }
    }
    function Ot(p, I) {
      {
        var L = function() {
          J || (J = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        L.isReactWarning = !0, Object.defineProperty(p, "key", {
          get: L,
          configurable: !0
        });
      }
    }
    function De(p, I) {
      {
        var L = function() {
          se || (se = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        L.isReactWarning = !0, Object.defineProperty(p, "ref", {
          get: L,
          configurable: !0
        });
      }
    }
    var vt = function(p, I, L, W, ce, ye, oe) {
      var ne = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: p,
        key: I,
        ref: L,
        props: oe,
        // Record the component responsible for creating this element.
        _owner: ye
      };
      return ne._store = {}, Object.defineProperty(ne._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ne, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: W
      }), Object.defineProperty(ne, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.freeze && (Object.freeze(ne.props), Object.freeze(ne)), ne;
    };
    function Ge(p, I, L, W, ce) {
      {
        var ye, oe = {}, ne = null, ze = null;
        L !== void 0 && (C(L), ne = "" + L), nt(I) && (C(I.key), ne = "" + I.key), ut(I) && (ze = I.ref, yt(I, ce));
        for (ye in I)
          gt.call(I, ye) && !U.hasOwnProperty(ye) && (oe[ye] = I[ye]);
        if (p && p.defaultProps) {
          var Ee = p.defaultProps;
          for (ye in Ee)
            oe[ye] === void 0 && (oe[ye] = Ee[ye]);
        }
        if (ne || ze) {
          var je = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          ne && Ot(oe, je), ze && De(oe, je);
        }
        return vt(p, ne, ze, ce, W, N.current, oe);
      }
    }
    var Jn = b.ReactCurrentOwner, Ye = b.ReactDebugCurrentFrame;
    function Gt(p) {
      if (p) {
        var I = p._owner, L = mt(p.type, p._source, I ? I.type : null);
        Ye.setExtraStackFrame(L);
      } else
        Ye.setExtraStackFrame(null);
    }
    var Bt;
    Bt = !1;
    function Xt(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }
    function Ar() {
      {
        if (Jn.current) {
          var p = ae(Jn.current.type);
          if (p)
            return `

Check the render method of \`` + p + "`.";
        }
        return "";
      }
    }
    function oi(p) {
      return "";
    }
    var In = {};
    function si(p) {
      {
        var I = Ar();
        if (!I) {
          var L = typeof p == "string" ? p : p.displayName || p.name;
          L && (I = `

Check the top-level render call using <` + L + ">.");
        }
        return I;
      }
    }
    function Mr(p, I) {
      {
        if (!p._store || p._store.validated || p.key != null)
          return;
        p._store.validated = !0;
        var L = si(I);
        if (In[L])
          return;
        In[L] = !0;
        var W = "";
        p && p._owner && p._owner !== Jn.current && (W = " It was passed a child from " + ae(p._owner.type) + "."), Gt(p), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', L, W), Gt(null);
      }
    }
    function Qn(p, I) {
      {
        if (typeof p != "object")
          return;
        if (pn(p))
          for (var L = 0; L < p.length; L++) {
            var W = p[L];
            Xt(W) && Mr(W, I);
          }
        else if (Xt(p))
          p._store && (p._store.validated = !0);
        else if (p) {
          var ce = R(p);
          if (typeof ce == "function" && ce !== p.entries)
            for (var ye = ce.call(p), oe; !(oe = ye.next()).done; )
              Xt(oe.value) && Mr(oe.value, I);
        }
      }
    }
    function Nn(p) {
      {
        var I = p.type;
        if (I == null || typeof I == "string")
          return;
        var L;
        if (typeof I == "function")
          L = I.propTypes;
        else if (typeof I == "object" && (I.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        I.$$typeof === f))
          L = I.propTypes;
        else
          return;
        if (L) {
          var W = ae(I);
          Tn(L, p.props, "prop", W, p);
        } else if (I.PropTypes !== void 0 && !Bt) {
          Bt = !0;
          var ce = ae(I);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ce || "Unknown");
        }
        typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function li(p) {
      {
        for (var I = Object.keys(p.props), L = 0; L < I.length; L++) {
          var W = I[L];
          if (W !== "children" && W !== "key") {
            Gt(p), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", W), Gt(null);
            break;
          }
        }
        p.ref !== null && (Gt(p), O("Invalid attribute `ref` supplied to `React.Fragment`."), Gt(null));
      }
    }
    function An(p, I, L, W, ce, ye) {
      {
        var oe = ge(p);
        if (!oe) {
          var ne = "";
          (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (ne += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ze = oi();
          ze ? ne += ze : ne += Ar();
          var Ee;
          p === null ? Ee = "null" : pn(p) ? Ee = "array" : p !== void 0 && p.$$typeof === t ? (Ee = "<" + (ae(p.type) || "Unknown") + " />", ne = " Did you accidentally export a JSX literal instead of a component?") : Ee = typeof p, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ee, ne);
        }
        var je = Ge(p, I, L, ce, ye);
        if (je == null)
          return je;
        if (oe) {
          var _e = I.children;
          if (_e !== void 0)
            if (W)
              if (pn(_e)) {
                for (var Tt = 0; Tt < _e.length; Tt++)
                  Qn(_e[Tt], p);
                Object.freeze && Object.freeze(_e);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Qn(_e, p);
        }
        return p === r ? li(je) : Nn(je), je;
      }
    }
    function ui(p, I, L) {
      return An(p, I, L, !0);
    }
    function Rr(p, I, L) {
      return An(p, I, L, !1);
    }
    var ci = Rr, di = ui;
    Xn.Fragment = r, Xn.jsx = ci, Xn.jsxs = di;
  }()), Xn;
}
process.env.NODE_ENV === "production" ? ji.exports = Ms() : ji.exports = Rs();
var y = ji.exports, bo = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 }, pa = qt.createContext && qt.createContext(bo), ln = function() {
  return ln = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    return e;
  }, ln.apply(this, arguments);
}, Ls = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  }
  return n;
};
function wo(e) {
  return e && e.map(function(t, n) {
    return qt.createElement(t.tag, ln({ key: n }, t.attr), wo(t.child));
  });
}
function Re(e) {
  return function(t) {
    return qt.createElement(zs, ln({ attr: ln({}, e.attr) }, t), wo(e.child));
  };
}
function zs(e) {
  var t = function(n) {
    var r, i = e.attr, a = e.size, o = e.title, s = Ls(e, ["attr", "size", "title"]), l = a || n.size || "1em";
    return n.className && (r = n.className), e.className && (r = (r ? r + " " : "") + e.className), qt.createElement("svg", ln({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, n.attr, i, s, { className: r, style: ln(ln({ color: e.color || n.color }, n.style), e.style), height: l, width: l, xmlns: "http://www.w3.org/2000/svg" }), o && qt.createElement("title", null, o), e.children);
  };
  return pa !== void 0 ? qt.createElement(pa.Consumer, null, function(n) {
    return t(n);
  }) : t(bo);
}
function Ds(e) {
  return Re({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z" } }] })(e);
}
function Fs(e) {
  return Re({ tag: "svg", attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" } }] })(e);
}
function Bs(e) {
  return Re({ tag: "svg", attr: { viewBox: "0 0 192 512" }, child: [{ tag: "path", attr: { d: "M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" } }] })(e);
}
function Vs(e) {
  return Re({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" } }] })(e);
}
function Wi(e) {
  return Re({ tag: "svg", attr: { viewBox: "0 0 640 512" }, child: [{ tag: "path", attr: { d: "M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zm-132.9 88.7L299.3 420.7c-6.2 6.2-16.4 6.2-22.6 0L171.3 315.3c-10.1-10.1-2.9-27.3 11.3-27.3H248V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v112h65.4c14.2 0 21.4 17.2 11.3 27.3z" } }] })(e);
}
function qi(e) {
  return Re({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" } }] })(e);
}
function Us(e) {
  return Re({ tag: "svg", attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z" } }] })(e);
}
var ma, Zs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ko = { exports: {} };
ma = function() {
  return (() => {
    var e = { 720: (r, i, a) => {
      a.r(i), a.d(i, { Scene: () => Ts, Tweenable: () => Ye, interpolate: () => Lr, processTweens: () => ut, setBezierFunction: () => Ps, shouldScheduleUpdate: () => Ot, tween: () => Gt, unsetBezierFunction: () => Is });
      var o = {};
      a.r(o), a.d(o, { bounce: () => v, bouncePast: () => We, easeFrom: () => Ce, easeFromTo: () => ht, easeInBack: () => Pe, easeInCirc: () => V, easeInCubic: () => h, easeInExpo: () => ue, easeInOutBack: () => Be, easeInOutCirc: () => pe, easeInOutCubic: () => E, easeInOutExpo: () => Z, easeInOutQuad: () => m, easeInOutQuart: () => O, easeInOutQuint: () => T, easeInOutSine: () => he, easeInQuad: () => c, easeInQuart: () => R, easeInQuint: () => _, easeInSine: () => w, easeOutBack: () => Te, easeOutBounce: () => X, easeOutCirc: () => ae, easeOutCubic: () => x, easeOutExpo: () => ge, easeOutQuad: () => f, easeOutQuart: () => b, easeOutQuint: () => P, easeOutSine: () => K, easeTo: () => pt, elastic: () => Je, linear: () => u, swingFrom: () => Ve, swingFromTo: () => g, swingTo: () => Qe });
      var s = {};
      a.r(s), a.d(s, { afterTween: () => ne, beforeTween: () => oe, doesApply: () => ce, tweenCreated: () => ye });
      /*!
      	 * All equations are adapted from Thomas Fuchs'
      	 * [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js).
      	 *
      	 * Based on Easing Equations (c) 2003 [Robert
      	 * Penner](http://www.robertpenner.com/), all rights reserved. This work is
      	 * [subject to terms](http://www.robertpenner.com/easing_terms_of_use.html).
      	 */
      /*!
      	 *  TERMS OF USE - EASING EQUATIONS
      	 *  Open source under the BSD License.
      	 *  Easing Equations (c) 2003 Robert Penner, all rights reserved.
      	 */
      var l, u = function(d) {
        return d;
      }, c = function(d) {
        return Math.pow(d, 2);
      }, f = function(d) {
        return -(Math.pow(d - 1, 2) - 1);
      }, m = function(d) {
        return (d /= 0.5) < 1 ? 0.5 * Math.pow(d, 2) : -0.5 * ((d -= 2) * d - 2);
      }, h = function(d) {
        return Math.pow(d, 3);
      }, x = function(d) {
        return Math.pow(d - 1, 3) + 1;
      }, E = function(d) {
        return (d /= 0.5) < 1 ? 0.5 * Math.pow(d, 3) : 0.5 * (Math.pow(d - 2, 3) + 2);
      }, R = function(d) {
        return Math.pow(d, 4);
      }, b = function(d) {
        return -(Math.pow(d - 1, 4) - 1);
      }, O = function(d) {
        return (d /= 0.5) < 1 ? 0.5 * Math.pow(d, 4) : -0.5 * ((d -= 2) * Math.pow(d, 3) - 2);
      }, _ = function(d) {
        return Math.pow(d, 5);
      }, P = function(d) {
        return Math.pow(d - 1, 5) + 1;
      }, T = function(d) {
        return (d /= 0.5) < 1 ? 0.5 * Math.pow(d, 5) : 0.5 * (Math.pow(d - 2, 5) + 2);
      }, w = function(d) {
        return 1 - Math.cos(d * (Math.PI / 2));
      }, K = function(d) {
        return Math.sin(d * (Math.PI / 2));
      }, he = function(d) {
        return -0.5 * (Math.cos(Math.PI * d) - 1);
      }, ue = function(d) {
        return d === 0 ? 0 : Math.pow(2, 10 * (d - 1));
      }, ge = function(d) {
        return d === 1 ? 1 : 1 - Math.pow(2, -10 * d);
      }, Z = function(d) {
        return d === 0 ? 0 : d === 1 ? 1 : (d /= 0.5) < 1 ? 0.5 * Math.pow(2, 10 * (d - 1)) : 0.5 * (2 - Math.pow(2, -10 * --d));
      }, V = function(d) {
        return -(Math.sqrt(1 - d * d) - 1);
      }, ae = function(d) {
        return Math.sqrt(1 - Math.pow(d - 1, 2));
      }, pe = function(d) {
        return (d /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - d * d) - 1) : 0.5 * (Math.sqrt(1 - (d -= 2) * d) + 1);
      }, X = function(d) {
        return d < 1 / 2.75 ? 7.5625 * d * d : d < 2 / 2.75 ? 7.5625 * (d -= 1.5 / 2.75) * d + 0.75 : d < 2.5 / 2.75 ? 7.5625 * (d -= 2.25 / 2.75) * d + 0.9375 : 7.5625 * (d -= 2.625 / 2.75) * d + 0.984375;
      }, Pe = function(d) {
        var k = 1.70158;
        return d * d * ((k + 1) * d - k);
      }, Te = function(d) {
        var k = 1.70158;
        return (d -= 1) * d * ((k + 1) * d + k) + 1;
      }, Be = function(d) {
        var k = 1.70158;
        return (d /= 0.5) < 1 ? d * d * ((1 + (k *= 1.525)) * d - k) * 0.5 : 0.5 * ((d -= 2) * d * ((1 + (k *= 1.525)) * d + k) + 2);
      }, Je = function(d) {
        return -1 * Math.pow(4, -8 * d) * Math.sin((6 * d - 1) * (2 * Math.PI) / 2) + 1;
      }, g = function(d) {
        var k = 1.70158;
        return (d /= 0.5) < 1 ? d * d * ((1 + (k *= 1.525)) * d - k) * 0.5 : 0.5 * ((d -= 2) * d * ((1 + (k *= 1.525)) * d + k) + 2);
      }, Ve = function(d) {
        var k = 1.70158;
        return d * d * ((k + 1) * d - k);
      }, Qe = function(d) {
        var k = 1.70158;
        return (d -= 1) * d * ((k + 1) * d + k) + 1;
      }, v = function(d) {
        return d < 1 / 2.75 ? 7.5625 * d * d : d < 2 / 2.75 ? 7.5625 * (d -= 1.5 / 2.75) * d + 0.75 : d < 2.5 / 2.75 ? 7.5625 * (d -= 2.25 / 2.75) * d + 0.9375 : 7.5625 * (d -= 2.625 / 2.75) * d + 0.984375;
      }, We = function(d) {
        return d < 1 / 2.75 ? 7.5625 * d * d : d < 2 / 2.75 ? 2 - (7.5625 * (d -= 1.5 / 2.75) * d + 0.75) : d < 2.5 / 2.75 ? 2 - (7.5625 * (d -= 2.25 / 2.75) * d + 0.9375) : 2 - (7.5625 * (d -= 2.625 / 2.75) * d + 0.984375);
      }, ht = function(d) {
        return (d /= 0.5) < 1 ? 0.5 * Math.pow(d, 4) : -0.5 * ((d -= 2) * Math.pow(d, 3) - 2);
      }, Ce = function(d) {
        return Math.pow(d, 4);
      }, pt = function(d) {
        return Math.pow(d, 0.25);
      };
      function qe(d, k) {
        if (!(d instanceof k)) throw new TypeError("Cannot call a class as a function");
      }
      function st(d, k) {
        for (var j = 0; j < k.length; j++) {
          var S = k[j];
          S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(d, S.key, S);
        }
      }
      function Ue(d) {
        return Ue = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(k) {
          return typeof k;
        } : function(k) {
          return k && typeof Symbol == "function" && k.constructor === Symbol && k !== Symbol.prototype ? "symbol" : typeof k;
        }, Ue(d);
      }
      function Ft(d, k) {
        var j = Object.keys(d);
        if (Object.getOwnPropertySymbols) {
          var S = Object.getOwnPropertySymbols(d);
          k && (S = S.filter(function(z) {
            return Object.getOwnPropertyDescriptor(d, z).enumerable;
          })), j.push.apply(j, S);
        }
        return j;
      }
      function Jt(d) {
        for (var k = 1; k < arguments.length; k++) {
          var j = arguments[k] != null ? arguments[k] : {};
          k % 2 ? Ft(Object(j), !0).forEach(function(S) {
            Ct(d, S, j[S]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(j)) : Ft(Object(j)).forEach(function(S) {
            Object.defineProperty(d, S, Object.getOwnPropertyDescriptor(j, S));
          });
        }
        return d;
      }
      function Ct(d, k, j) {
        return k in d ? Object.defineProperty(d, k, { value: j, enumerable: !0, configurable: !0, writable: !0 }) : d[k] = j, d;
      }
      var On, mt, gt, Qt = "linear", lt = typeof window < "u" ? window : Zs, Et = "afterTween", Tn = "afterTweenEnd", jn = "beforeTween", pn = "tweenCreated", Kn = "function", Pn = "string", mn = lt.requestAnimationFrame || lt.webkitRequestAnimationFrame || lt.oRequestAnimationFrame || lt.msRequestAnimationFrame || lt.mozCancelRequestAnimationFrame && lt.mozRequestAnimationFrame || setTimeout, C = function() {
      }, N = null, U = null, J = Jt({}, o), se = function(d, k, j, S, z, H, ee) {
        var re, de, Se, xe = d < H ? 0 : (d - H) / z, Ie = !1;
        for (var Ae in ee && ee.call && (Ie = !0, re = ee(xe)), k) Ie || (re = ((de = ee[Ae]).call ? de : J[de])(xe)), Se = j[Ae], k[Ae] = Se + (S[Ae] - Se) * re;
        return k;
      }, Le = function(d, k) {
        var j = d._timestamp, S = d._currentState, z = d._delay;
        if (!(k < j + z)) {
          var H = d._duration, ee = d._targetState, re = j + z + H, de = k > re ? re : k;
          d._hasEnded = de >= re;
          var Se = H - (re - de), xe = d._filters.length > 0;
          if (d._hasEnded) return d._render(ee, d._data, Se), d.stop(!0);
          xe && d._applyFilter(jn), de < j + z ? j = H = de = 1 : j += z, se(de, S, d._originalState, ee, H, j, d._easing), xe && d._applyFilter(Et), d._render(S, d._data, Se);
        }
      }, ut = function() {
        for (var d, k = Ye.now(), j = N; j; ) d = j._next, Le(j, k), j = d;
      }, nt = Date.now || function() {
        return +/* @__PURE__ */ new Date();
      }, yt = !1, Ot = function(d) {
        d && yt || (yt = d, d && De());
      }, De = function d() {
        On = nt(), yt && mn.call(lt, d, 16.666666666666668), ut();
      }, vt = function(d) {
        var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qt, j = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, S = Ue(k);
        if (J[k]) return J[k];
        if (S === Pn || S === Kn) for (var z in d) j[z] = k;
        else for (var H in d) j[H] = k[H] || Qt;
        return j;
      }, Ge = function(d) {
        d === N ? (N = d._next) ? N._previous = null : U = null : d === U ? (U = d._previous) ? U._next = null : N = null : (mt = d._previous, gt = d._next, mt._next = gt, gt._previous = mt), d._previous = d._next = null;
      }, Jn = typeof Promise == "function" ? Promise : null;
      l = Symbol.toStringTag;
      var Ye = function() {
        function d() {
          var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          qe(this, d), Ct(this, l, "Promise"), this._config = {}, this._data = {}, this._delay = 0, this._filters = [], this._next = null, this._previous = null, this._timestamp = null, this._hasEnded = !1, this._resolve = null, this._reject = null, this._currentState = S || {}, this._originalState = {}, this._targetState = {}, this._start = C, this._render = C, this._promiseCtor = Jn, z && this.setConfig(z);
        }
        var k, j;
        return k = d, j = [{ key: "_applyFilter", value: function(S) {
          for (var z = this._filters.length; z > 0; z--) {
            var H = this._filters[z - z][S];
            H && H(this);
          }
        } }, { key: "tween", value: function() {
          var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
          return this._isPlaying && this.stop(), !S && this._config || this.setConfig(S), this._pausedAtTime = null, this._timestamp = d.now(), this._start(this.get(), this._data), this._delay && this._render(this._currentState, this._data, 0), this._resume(this._timestamp);
        } }, { key: "setConfig", value: function() {
          var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, z = this._config;
          for (var H in S) z[H] = S[H];
          var ee = z.promise, re = ee === void 0 ? this._promiseCtor : ee, de = z.start, Se = de === void 0 ? C : de, xe = z.finish, Ie = z.render, Ae = Ie === void 0 ? this._config.step || C : Ie, Xe = z.step, Mn = Xe === void 0 ? C : Xe;
          this._data = z.data || z.attachment || this._data, this._isPlaying = !1, this._pausedAtTime = null, this._scheduleId = null, this._delay = S.delay || 0, this._start = Se, this._render = Ae || Mn, this._duration = z.duration || 500, this._promiseCtor = re, xe && (this._resolve = xe);
          var en = S.from, tn = S.to, ke = tn === void 0 ? {} : tn, Rn = this._currentState, nn = this._originalState, gn = this._targetState;
          for (var Ze in en) Rn[Ze] = en[Ze];
          var Pt = !1;
          for (var Vt in Rn) {
            var yn = Rn[Vt];
            Pt || Ue(yn) !== Pn || (Pt = !0), nn[Vt] = yn, gn[Vt] = ke.hasOwnProperty(Vt) ? ke[Vt] : yn;
          }
          if (this._easing = vt(this._currentState, z.easing, this._easing), this._filters.length = 0, Pt) {
            for (var ca in d.filters) d.filters[ca].doesApply(this) && this._filters.push(d.filters[ca]);
            this._applyFilter(pn);
          }
          return this;
        } }, { key: "then", value: function(S, z) {
          var H = this;
          return this._promise = new this._promiseCtor(function(ee, re) {
            H._resolve = ee, H._reject = re;
          }), this._promise.then(S, z);
        } }, { key: "catch", value: function(S) {
          return this.then().catch(S);
        } }, { key: "finally", value: function(S) {
          return this.then().finally(S);
        } }, { key: "get", value: function() {
          return Jt({}, this._currentState);
        } }, { key: "set", value: function(S) {
          this._currentState = S;
        } }, { key: "pause", value: function() {
          if (this._isPlaying) return this._pausedAtTime = d.now(), this._isPlaying = !1, Ge(this), this;
        } }, { key: "resume", value: function() {
          return this._resume();
        } }, { key: "_resume", value: function() {
          var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : d.now();
          return this._timestamp === null ? this.tween() : this._isPlaying ? this._promise : (this._pausedAtTime && (this._timestamp += S - this._pausedAtTime, this._pausedAtTime = null), this._isPlaying = !0, N === null ? (N = this, U = this) : (this._previous = U, U._next = this, U = this), this);
        } }, { key: "seek", value: function(S) {
          S = Math.max(S, 0);
          var z = d.now();
          return this._timestamp + S === 0 || (this._timestamp = z - S, Le(this, z)), this;
        } }, { key: "stop", value: function() {
          var S = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
          if (!this._isPlaying) return this;
          this._isPlaying = !1, Ge(this);
          var z = this._filters.length > 0;
          return S && (z && this._applyFilter(jn), se(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing), z && (this._applyFilter(Et), this._applyFilter(Tn))), this._resolve && this._resolve({ data: this._data, state: this._currentState, tweenable: this }), this._resolve = null, this._reject = null, this;
        } }, { key: "cancel", value: function() {
          var S = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], z = this._currentState, H = this._data, ee = this._isPlaying;
          return ee ? (this._reject && this._reject({ data: H, state: z, tweenable: this }), this._resolve = null, this._reject = null, this.stop(S)) : this;
        } }, { key: "isPlaying", value: function() {
          return this._isPlaying;
        } }, { key: "hasEnded", value: function() {
          return this._hasEnded;
        } }, { key: "setScheduleFunction", value: function(S) {
          d.setScheduleFunction(S);
        } }, { key: "data", value: function() {
          var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
          return S && (this._data = Jt({}, S)), this._data;
        } }, { key: "dispose", value: function() {
          for (var S in this) delete this[S];
        } }], j && st(k.prototype, j), d;
      }();
      function Gt() {
        var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, k = new Ye();
        return k.tween(d), k.tweenable = k, k;
      }
      Ct(Ye, "now", function() {
        return On;
      }), Ct(Ye, "setScheduleFunction", function(d) {
        return mn = d;
      }), Ct(Ye, "filters", {}), Ct(Ye, "formulas", J), Ot(!0);
      var Bt, Xt, Ar = /(\d|-|\.)/, oi = /([^\-0-9.]+)/g, In = /[0-9.-]+/g, si = (Bt = In.source, Xt = /,\s*/.source, new RegExp("rgba?\\(".concat(Bt).concat(Xt).concat(Bt).concat(Xt).concat(Bt, "(").concat(Xt).concat(Bt, ")?\\)"), "g")), Mr = /^.*\(/, Qn = /#([0-9]|[a-f]){3,6}/gi, Nn = "VAL", li = function(d, k) {
        return d.map(function(j, S) {
          return "_".concat(k, "_").concat(S);
        });
      };
      function An(d) {
        return parseInt(d, 16);
      }
      var ui = function(d) {
        return "rgb(".concat((k = d, (k = k.replace(/#/, "")).length === 3 && (k = (k = k.split(""))[0] + k[0] + k[1] + k[1] + k[2] + k[2]), [An(k.substr(0, 2)), An(k.substr(2, 2)), An(k.substr(4, 2))]).join(","), ")");
        var k;
      }, Rr = function(d, k, j) {
        var S = k.match(d), z = k.replace(d, Nn);
        return S && S.forEach(function(H) {
          return z = z.replace(Nn, j(H));
        }), z;
      }, ci = function(d) {
        for (var k in d) {
          var j = d[k];
          typeof j == "string" && j.match(Qn) && (d[k] = Rr(Qn, j, ui));
        }
      }, di = function(d) {
        var k = d.match(In), j = k.slice(0, 3).map(Math.floor), S = d.match(Mr)[0];
        if (k.length === 3) return "".concat(S).concat(j.join(","), ")");
        if (k.length === 4) return "".concat(S).concat(j.join(","), ",").concat(k[3], ")");
        throw new Error("Invalid rgbChunk: ".concat(d));
      }, p = function(d) {
        return d.match(In);
      }, I = function(d, k) {
        var j = {};
        return k.forEach(function(S) {
          j[S] = d[S], delete d[S];
        }), j;
      }, L = function(d, k) {
        return k.map(function(j) {
          return d[j];
        });
      }, W = function(d, k) {
        return k.forEach(function(j) {
          return d = d.replace(Nn, +j.toFixed(4));
        }), d;
      }, ce = function(d) {
        for (var k in d._currentState) if (typeof d._currentState[k] == "string") return !0;
        return !1;
      };
      function ye(d) {
        var k = d._currentState;
        [k, d._originalState, d._targetState].forEach(ci), d._tokenData = function(j) {
          var S, z, H = {};
          for (var ee in j) {
            var re = j[ee];
            typeof re == "string" && (H[ee] = { formatString: (S = re, z = void 0, z = S.match(oi), z ? (z.length === 1 || S.charAt(0).match(Ar)) && z.unshift("") : z = ["", ""], z.join(Nn)), chunkNames: li(p(re), ee) });
          }
          return H;
        }(k);
      }
      function oe(d) {
        var k = d._currentState, j = d._originalState, S = d._targetState, z = d._easing, H = d._tokenData;
        (function(ee, re) {
          var de = function(xe) {
            var Ie = re[xe].chunkNames, Ae = ee[xe];
            if (typeof Ae == "string") {
              var Xe = Ae.split(" "), Mn = Xe[Xe.length - 1];
              Ie.forEach(function(en, tn) {
                return ee[en] = Xe[tn] || Mn;
              });
            } else Ie.forEach(function(en) {
              return ee[en] = Ae;
            });
            delete ee[xe];
          };
          for (var Se in re) de(Se);
        })(z, H), [k, j, S].forEach(function(ee) {
          return function(re, de) {
            var Se = function(Ie) {
              p(re[Ie]).forEach(function(Ae, Xe) {
                return re[de[Ie].chunkNames[Xe]] = +Ae;
              }), delete re[Ie];
            };
            for (var xe in de) Se(xe);
          }(ee, H);
        });
      }
      function ne(d) {
        var k = d._currentState, j = d._originalState, S = d._targetState, z = d._easing, H = d._tokenData;
        [k, j, S].forEach(function(ee) {
          return function(re, de) {
            for (var Se in de) {
              var xe = de[Se], Ie = xe.chunkNames, Ae = xe.formatString, Xe = W(Ae, L(I(re, Ie), Ie));
              re[Se] = Rr(si, Xe, di);
            }
          }(ee, H);
        }), function(ee, re) {
          for (var de in re) {
            var Se = re[de].chunkNames, xe = ee[Se[0]];
            ee[de] = typeof xe == "string" ? Se.map(function(Ie) {
              var Ae = ee[Ie];
              return delete ee[Ie], Ae;
            }).join(" ") : xe;
          }
        }(z, H);
      }
      function ze(d, k) {
        var j = Object.keys(d);
        if (Object.getOwnPropertySymbols) {
          var S = Object.getOwnPropertySymbols(d);
          k && (S = S.filter(function(z) {
            return Object.getOwnPropertyDescriptor(d, z).enumerable;
          })), j.push.apply(j, S);
        }
        return j;
      }
      function Ee(d) {
        for (var k = 1; k < arguments.length; k++) {
          var j = arguments[k] != null ? arguments[k] : {};
          k % 2 ? ze(Object(j), !0).forEach(function(S) {
            je(d, S, j[S]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(j)) : ze(Object(j)).forEach(function(S) {
            Object.defineProperty(d, S, Object.getOwnPropertyDescriptor(j, S));
          });
        }
        return d;
      }
      function je(d, k, j) {
        return k in d ? Object.defineProperty(d, k, { value: j, enumerable: !0, configurable: !0, writable: !0 }) : d[k] = j, d;
      }
      var _e = new Ye(), Tt = Ye.filters, Lr = function(d, k, j, S) {
        var z = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, H = Ee({}, d), ee = vt(d, S);
        for (var re in _e._filters.length = 0, _e.set({}), _e._currentState = H, _e._originalState = d, _e._targetState = k, _e._easing = ee, Tt) Tt[re].doesApply(_e) && _e._filters.push(Tt[re]);
        _e._applyFilter("tweenCreated"), _e._applyFilter("beforeTween");
        var de = se(j, H, d, k, 1, z, ee);
        return _e._applyFilter("afterTween"), de;
      };
      function xt(d) {
        return function(k) {
          if (Array.isArray(k)) return fi(k);
        }(d) || function(k) {
          if (typeof Symbol < "u" && Symbol.iterator in Object(k)) return Array.from(k);
        }(d) || function(k, j) {
          if (k) {
            if (typeof k == "string") return fi(k, j);
            var S = Object.prototype.toString.call(k).slice(8, -1);
            return S === "Object" && k.constructor && (S = k.constructor.name), S === "Map" || S === "Set" ? Array.from(k) : S === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S) ? fi(k, j) : void 0;
          }
        }(d) || function() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }();
      }
      function fi(d, k) {
        (k == null || k > d.length) && (k = d.length);
        for (var j = 0, S = new Array(k); j < k; j++) S[j] = d[j];
        return S;
      }
      function Es(d, k) {
        if (!(d instanceof k)) throw new TypeError("Cannot call a class as a function");
      }
      function Os(d, k) {
        for (var j = 0; j < k.length; j++) {
          var S = k[j];
          S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(d, S.key, S);
        }
      }
      function jt(d, k) {
        var j = k.get(d);
        if (!j) throw new TypeError("attempted to get private field on non-instance");
        return j.get ? j.get.call(d) : j.value;
      }
      var bt = /* @__PURE__ */ new WeakMap(), Ts = function() {
        function d() {
          Es(this, d), bt.set(this, { writable: !0, value: [] });
          for (var S = arguments.length, z = new Array(S), H = 0; H < S; H++) z[H] = arguments[H];
          z.forEach(this.add.bind(this));
        }
        var k, j;
        return k = d, (j = [{ key: "add", value: function(S) {
          return jt(this, bt).push(S), S;
        } }, { key: "remove", value: function(S) {
          var z = jt(this, bt).indexOf(S);
          return ~z && jt(this, bt).splice(z, 1), S;
        } }, { key: "empty", value: function() {
          return this.tweenables.map(this.remove.bind(this));
        } }, { key: "isPlaying", value: function() {
          return jt(this, bt).some(function(S) {
            return S.isPlaying();
          });
        } }, { key: "play", value: function() {
          return jt(this, bt).forEach(function(S) {
            return S.tween();
          }), this;
        } }, { key: "pause", value: function() {
          return jt(this, bt).forEach(function(S) {
            return S.pause();
          }), this;
        } }, { key: "resume", value: function() {
          return jt(this, bt).forEach(function(S) {
            return S.resume();
          }), this;
        } }, { key: "stop", value: function(S) {
          return jt(this, bt).forEach(function(z) {
            return z.stop(S);
          }), this;
        } }, { key: "tweenables", get: function() {
          return xt(jt(this, bt));
        } }, { key: "promises", get: function() {
          return jt(this, bt).map(function(S) {
            return S.then();
          });
        } }]) && Os(k.prototype, j), d;
      }();
      function js(d, k, j, S, z, H) {
        var ee, re, de = 0, Se = 0, xe = 0, Ie = 0, Ae = 0, Xe = 0, Mn = function(ke) {
          return ((de * ke + Se) * ke + xe) * ke;
        }, en = function(ke) {
          return (3 * de * ke + 2 * Se) * ke + xe;
        }, tn = function(ke) {
          return ke >= 0 ? ke : 0 - ke;
        };
        return de = 1 - (xe = 3 * k) - (Se = 3 * (S - k) - xe), Ie = 1 - (Xe = 3 * j) - (Ae = 3 * (z - j) - Xe), ee = d, re = function(ke) {
          return 1 / (200 * ke);
        }(H), function(ke) {
          return ((Ie * ke + Ae) * ke + Xe) * ke;
        }(function(ke, Rn) {
          var nn, gn, Ze, Pt, Vt, yn;
          for (Ze = ke, yn = 0; yn < 8; yn++) {
            if (Pt = Mn(Ze) - ke, tn(Pt) < Rn) return Ze;
            if (Vt = en(Ze), tn(Vt) < 1e-6) break;
            Ze -= Pt / Vt;
          }
          if ((Ze = ke) < (nn = 0)) return nn;
          if (Ze > (gn = 1)) return gn;
          for (; nn < gn; ) {
            if (Pt = Mn(Ze), tn(Pt - ke) < Rn) return Ze;
            ke > Pt ? nn = Ze : gn = Ze, Ze = 0.5 * (gn - nn) + nn;
          }
          return Ze;
        }(ee, re));
      }
      var Ps = function(d, k, j, S, z) {
        var H = /* @__PURE__ */ function(ee, re, de, Se) {
          return function(xe) {
            return js(xe, ee, re, de, Se, 1);
          };
        }(k, j, S, z);
        return H.displayName = d, H.x1 = k, H.y1 = j, H.x2 = S, H.y2 = z, Ye.formulas[d] = H;
      }, Is = function(d) {
        return delete Ye.formulas[d];
      };
      Ye.filters.token = s;
    } }, t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var i = t[r] = { exports: {} };
      return e[r](i, i.exports, n), i.exports;
    }
    return n.d = (r, i) => {
      for (var a in i) n.o(i, a) && !n.o(r, a) && Object.defineProperty(r, a, { enumerable: !0, get: i[a] });
    }, n.o = (r, i) => Object.prototype.hasOwnProperty.call(r, i), n.r = (r) => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(r, "__esModule", { value: !0 });
    }, n(720);
  })();
}, ko.exports = ma();
var ga = "Webkit Moz O ms".split(" ");
function ya(e, t, n) {
  for (var r = e.style, i = 0; i < ga.length; ++i)
    r[ga[i] + _o(t)] = n;
  r[t] = n;
}
function _o(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function zr(e) {
  return !function(t) {
    return Object.prototype.toString.call(t) === "[object Array]";
  }(e) && typeof e == "object" && !!e;
}
function va(e, t) {
  for (var n in e)
    e.hasOwnProperty(n) && t(e[n], n);
}
var Cn = { extend: function e(t, n, r) {
  for (var i in t = t || {}, r = r || !1, n = n || {}) if (n.hasOwnProperty(i)) {
    var a = t[i], o = n[i];
    r && zr(a) && zr(o) ? t[i] = e(a, o, r) : t[i] = o;
  }
  return t;
}, render: function(e, t) {
  var n = e;
  for (var r in t) if (t.hasOwnProperty(r)) {
    var i = t[r], a = new RegExp("\\{" + r + "\\}", "g");
    n = n.replace(a, i);
  }
  return n;
}, setStyle: ya, setStyles: function(e, t) {
  va(t, function(n, r) {
    n != null && (zr(n) && n.prefix === !0 ? ya(e, r, n.value) : e.style[r] = n);
  });
}, capitalize: _o, isString: function(e) {
  return typeof e == "string" || e instanceof String;
}, isFunction: function(e) {
  return typeof e == "function";
}, isObject: zr, forEachObject: va, floatEquals: function(e, t) {
  return Math.abs(e - t) < 1e-3;
}, removeChildren: function(e) {
  for (; e.firstChild; ) e.removeChild(e.firstChild);
} }, Pi = ko.exports, It = Cn, Hs = Pi.Tweenable, xa = { easeIn: "easeInCubic", easeOut: "easeOutCubic", easeInOut: "easeInOutCubic" }, ct = function e(t, n) {
  if (!(this instanceof e)) throw new Error("Constructor was called without new keyword");
  var r;
  n = It.extend({ delay: 0, duration: 800, easing: "linear", from: {}, to: {}, step: function() {
  } }, n), r = It.isString(t) ? document.querySelector(t) : t, this.path = r, this._opts = n, this._tweenable = null;
  var i = this.path.getTotalLength();
  this.path.style.strokeDasharray = i + " " + i, this.set(0);
};
ct.prototype.value = function() {
  var e = this._getComputedDashOffset(), t = this.path.getTotalLength();
  return parseFloat((1 - e / t).toFixed(6), 10);
}, ct.prototype.set = function(e) {
  this.stop(), this.path.style.strokeDashoffset = this._progressToOffset(e);
  var t = this._opts.step;
  if (It.isFunction(t)) {
    var n = this._easing(this._opts.easing);
    t(this._calculateTo(e, n), this._opts.shape || this, this._opts.attachment);
  }
}, ct.prototype.stop = function() {
  this._stopTween(), this.path.style.strokeDashoffset = this._getComputedDashOffset();
}, ct.prototype.animate = function(e, t, n) {
  t = t || {}, It.isFunction(t) && (n = t, t = {});
  var r = It.extend({}, t), i = It.extend({}, this._opts);
  t = It.extend(i, t);
  var a = this._easing(t.easing), o = this._resolveFromAndTo(e, a, r);
  this.stop(), this.path.getBoundingClientRect();
  var s = this._getComputedDashOffset(), l = this._progressToOffset(e), u = this;
  this._tweenable = new Hs(), this._tweenable.tween({ from: It.extend({ offset: s }, o.from), to: It.extend({ offset: l }, o.to), duration: t.duration, delay: t.delay, easing: a, step: function(c) {
    u.path.style.strokeDashoffset = c.offset;
    var f = t.shape || u;
    t.step(c, f, t.attachment);
  } }).then(function(c) {
    It.isFunction(n) && n();
  });
}, ct.prototype._getComputedDashOffset = function() {
  var e = window.getComputedStyle(this.path, null);
  return parseFloat(e.getPropertyValue("stroke-dashoffset"), 10);
}, ct.prototype._progressToOffset = function(e) {
  var t = this.path.getTotalLength();
  return t - e * t;
}, ct.prototype._resolveFromAndTo = function(e, t, n) {
  return n.from && n.to ? { from: n.from, to: n.to } : { from: this._calculateFrom(t), to: this._calculateTo(e, t) };
}, ct.prototype._calculateFrom = function(e) {
  return Pi.interpolate(this._opts.from, this._opts.to, this.value(), e);
}, ct.prototype._calculateTo = function(e, t) {
  return Pi.interpolate(this._opts.from, this._opts.to, e, t);
}, ct.prototype._stopTween = function() {
  this._tweenable !== null && (this._tweenable.stop(), this._tweenable = null);
}, ct.prototype._easing = function(e) {
  return xa.hasOwnProperty(e) ? xa[e] : e;
};
var So = ct, $s = So, it = Cn, rn = "Object is destroyed", Me = function e(t, n) {
  if (!(this instanceof e)) throw new Error("Constructor was called without new keyword");
  if (arguments.length !== 0) {
    this._opts = it.extend({ color: "#555", strokeWidth: 1, trailColor: null, trailWidth: null, fill: null, text: { style: { color: null, position: "absolute", left: "50%", top: "50%", padding: 0, margin: 0, transform: { prefix: !0, value: "translate(-50%, -50%)" } }, autoStyleContainer: !0, alignToBottom: !0, value: null, className: "progressbar-text" }, svgStyle: { display: "block", width: "100%" }, warnings: !1 }, n, !0), it.isObject(n) && n.svgStyle !== void 0 && (this._opts.svgStyle = n.svgStyle), it.isObject(n) && it.isObject(n.text) && n.text.style !== void 0 && (this._opts.text.style = n.text.style);
    var r, i = this._createSvgView(this._opts);
    if (!(r = it.isString(t) ? document.querySelector(t) : t)) throw new Error("Container does not exist: " + t);
    this._container = r, this._container.appendChild(i.svg), this._opts.warnings && this._warnContainerAspectRatio(this._container), this._opts.svgStyle && it.setStyles(i.svg, this._opts.svgStyle), this.svg = i.svg, this.path = i.path, this.trail = i.trail, this.text = null;
    var a = it.extend({ attachment: void 0, shape: this }, this._opts);
    this._progressPath = new $s(i.path, a), it.isObject(this._opts.text) && this._opts.text.value !== null && this.setText(this._opts.text.value);
  }
};
Me.prototype.animate = function(e, t, n) {
  if (this._progressPath === null) throw new Error(rn);
  this._progressPath.animate(e, t, n);
}, Me.prototype.stop = function() {
  if (this._progressPath === null) throw new Error(rn);
  this._progressPath !== void 0 && this._progressPath.stop();
}, Me.prototype.pause = function() {
  if (this._progressPath === null) throw new Error(rn);
  this._progressPath !== void 0 && this._progressPath._tweenable && this._progressPath._tweenable.pause();
}, Me.prototype.resume = function() {
  if (this._progressPath === null) throw new Error(rn);
  this._progressPath !== void 0 && this._progressPath._tweenable && this._progressPath._tweenable.resume();
}, Me.prototype.destroy = function() {
  if (this._progressPath === null) throw new Error(rn);
  this.stop(), this.svg.parentNode.removeChild(this.svg), this.svg = null, this.path = null, this.trail = null, this._progressPath = null, this.text !== null && (this.text.parentNode.removeChild(this.text), this.text = null);
}, Me.prototype.set = function(e) {
  if (this._progressPath === null) throw new Error(rn);
  this._progressPath.set(e);
}, Me.prototype.value = function() {
  if (this._progressPath === null) throw new Error(rn);
  return this._progressPath === void 0 ? 0 : this._progressPath.value();
}, Me.prototype.setText = function(e) {
  if (this._progressPath === null) throw new Error(rn);
  this.text === null && (this.text = this._createTextContainer(this._opts, this._container), this._container.appendChild(this.text)), it.isObject(e) ? (it.removeChildren(this.text), this.text.appendChild(e)) : this.text.innerHTML = e;
}, Me.prototype._createSvgView = function(e) {
  var t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  this._initializeSvg(t, e);
  var n = null;
  (e.trailColor || e.trailWidth) && (n = this._createTrail(e), t.appendChild(n));
  var r = this._createPath(e);
  return t.appendChild(r), { svg: t, path: r, trail: n };
}, Me.prototype._initializeSvg = function(e, t) {
  e.setAttribute("viewBox", "0 0 100 100");
}, Me.prototype._createPath = function(e) {
  var t = this._pathString(e);
  return this._createPathElement(t, e);
}, Me.prototype._createTrail = function(e) {
  var t = this._trailString(e), n = it.extend({}, e);
  return n.trailColor || (n.trailColor = "#eee"), n.trailWidth || (n.trailWidth = n.strokeWidth), n.color = n.trailColor, n.strokeWidth = n.trailWidth, n.fill = null, this._createPathElement(t, n);
}, Me.prototype._createPathElement = function(e, t) {
  var n = document.createElementNS("http://www.w3.org/2000/svg", "path");
  return n.setAttribute("d", e), n.setAttribute("stroke", t.color), n.setAttribute("stroke-width", t.strokeWidth), t.fill ? n.setAttribute("fill", t.fill) : n.setAttribute("fill-opacity", "0"), n;
}, Me.prototype._createTextContainer = function(e, t) {
  var n = document.createElement("div");
  n.className = e.text.className;
  var r = e.text.style;
  return r && (e.text.autoStyleContainer && (t.style.position = "relative"), it.setStyles(n, r), r.color || (n.style.color = e.color)), this._initializeTextContainer(e, t, n), n;
}, Me.prototype._initializeTextContainer = function(e, t, n) {
}, Me.prototype._pathString = function(e) {
  throw new Error("Override this function for each progress bar");
}, Me.prototype._trailString = function(e) {
  throw new Error("Override this function for each progress bar");
}, Me.prototype._warnContainerAspectRatio = function(e) {
  if (this.containerAspectRatio) {
    var t = window.getComputedStyle(e, null), n = parseFloat(t.getPropertyValue("width"), 10), r = parseFloat(t.getPropertyValue("height"), 10);
    it.floatEquals(this.containerAspectRatio, n / r) || (console.warn("Incorrect aspect ratio of container", "#" + e.id, "detected:", t.getPropertyValue("width") + "(width)", "/", t.getPropertyValue("height") + "(height)", "=", n / r), console.warn("Aspect ratio of should be", this.containerAspectRatio));
  }
};
var jr = Me, Co = jr, Ws = Cn, zn = function(e, t) {
  this._pathTemplate = "M 0,{center} L 100,{center}", Co.apply(this, arguments);
};
(zn.prototype = new Co()).constructor = zn, zn.prototype._initializeSvg = function(e, t) {
  e.setAttribute("viewBox", "0 0 100 " + t.strokeWidth), e.setAttribute("preserveAspectRatio", "none");
}, zn.prototype._pathString = function(e) {
  return Ws.render(this._pathTemplate, { center: e.strokeWidth / 2 });
}, zn.prototype._trailString = function(e) {
  return this._pathString(e);
};
var qs = zn, Eo = jr, Ys = Cn, nr = function(e, t) {
  this._pathTemplate = "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}", this.containerAspectRatio = 1, Eo.apply(this, arguments);
};
(nr.prototype = new Eo()).constructor = nr, nr.prototype._pathString = function(e) {
  var t = e.strokeWidth;
  e.trailWidth && e.trailWidth > e.strokeWidth && (t = e.trailWidth);
  var n = 50 - t / 2;
  return Ys.render(this._pathTemplate, { radius: n, "2radius": 2 * n });
}, nr.prototype._trailString = function(e) {
  return this._pathString(e);
};
var Oo = nr, To = jr, ba = Oo, wa = Cn, xn = function(e, t) {
  this._pathTemplate = "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0", this.containerAspectRatio = 2, To.apply(this, arguments);
};
(xn.prototype = new To()).constructor = xn, xn.prototype._initializeSvg = function(e, t) {
  e.setAttribute("viewBox", "0 0 100 50");
}, xn.prototype._initializeTextContainer = function(e, t, n) {
  e.text.style && (n.style.top = "auto", n.style.bottom = "0", e.text.alignToBottom ? wa.setStyle(n, "transform", "translate(-50%, 0)") : wa.setStyle(n, "transform", "translate(-50%, 50%)"));
}, xn.prototype._pathString = ba.prototype._pathString, xn.prototype._trailString = ba.prototype._trailString;
var Ks = xn, jo = jr, ka = Cn, rr = function(e, t) {
  this._pathTemplate = "M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}", this._trailTemplate = "M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}", jo.apply(this, arguments);
};
(rr.prototype = new jo()).constructor = rr, rr.prototype._pathString = function(e) {
  var t = 100 - e.strokeWidth / 2;
  return ka.render(this._pathTemplate, { width: t, strokeWidth: e.strokeWidth, halfOfStrokeWidth: e.strokeWidth / 2 });
}, rr.prototype._trailString = function(e) {
  var t = 100 - e.strokeWidth / 2;
  return ka.render(this._trailTemplate, { width: t, strokeWidth: e.strokeWidth, halfOfStrokeWidth: e.strokeWidth / 2, startMargin: e.strokeWidth / 2 - e.trailWidth / 2 });
};
var hi, pi, Js = { Line: qs, Circle: Oo, SemiCircle: Ks, Square: rr, Path: So, Shape: jr, utils: Cn }, Yi = function(e) {
  var t = e.animate, n = e.progressOptions, r = e.className, i = xo(function() {
    return hi = document.createElement("div"), new Js.Circle(hi, n);
  }, []), a = Ns(function(o) {
    o && o.appendChild(hi);
  }, []);
  return Wt(function() {
    i.animate(t);
  }, [t, i]), y.jsx("div", { className: r, ref: a });
}, Nt = function() {
  return Nt = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    return e;
  }, Nt.apply(this, arguments);
}, Qs = function(e) {
  var t, n, r, i, a, o, s, l, u, c, f, m, h, x = { strokeWidth: 2.3, color: "#efe", trailColor: "#aaa", trailWidth: 1, step: function(R, b) {
    var O, _;
    b.path.setAttribute("trail", (O = R == null ? void 0 : R.state) === null || O === void 0 ? void 0 : O.color), b.path.setAttribute("trailwidth-width", (_ = R == null ? void 0 : R.state) === null || _ === void 0 ? void 0 : _.width);
    var P = Math.round(100 * b.value());
    P === 0 ? b.setText("") : b.setText(P);
  } }, E = ((t = e == null ? void 0 : e.data) === null || t === void 0 ? void 0 : t.status) && ((n = e == null ? void 0 : e.data) === null || n === void 0 ? void 0 : n.status.error) === !0;
  return y.jsxs("div", Nt({ className: "rce-mbox-photo" }, { children: [y.jsxs("div", Nt({ className: "rce-mbox-photo--img", style: Nt({}, ((r = e == null ? void 0 : e.data) === null || r === void 0 ? void 0 : r.width) && ((i = e == null ? void 0 : e.data) === null || i === void 0 ? void 0 : i.height) && { width: e.data.width, height: e.data.height }) }, { children: [y.jsx("img", { src: (a = e == null ? void 0 : e.data) === null || a === void 0 ? void 0 : a.uri, alt: (o = e == null ? void 0 : e.data) === null || o === void 0 ? void 0 : o.alt, onClick: e.onOpen, onLoad: e.onLoad, onError: e.onPhotoError }), E && y.jsx("div", Nt({ className: "rce-mbox-photo--img__block" }, { children: y.jsx("span", Nt({ className: "rce-mbox-photo--img__block-item rce-mbox-photo--error" }, { children: y.jsx(qi, {}) })) })), !E && ((s = e == null ? void 0 : e.data) === null || s === void 0 ? void 0 : s.status) && !(!((u = (l = e == null ? void 0 : e.data) === null || l === void 0 ? void 0 : l.status) === null || u === void 0) && u.download) && y.jsxs("div", Nt({ className: "rce-mbox-photo--img__block" }, { children: [!(!((c = e == null ? void 0 : e.data) === null || c === void 0) && c.status.click) && y.jsx("button", Nt({ onClick: e.onDownload, className: "rce-mbox-photo--img__block-item rce-mbox-photo--download" }, { children: y.jsx(Wi, {}) })), typeof ((f = e == null ? void 0 : e.data) === null || f === void 0 ? void 0 : f.status.loading) == "number" && ((m = e == null ? void 0 : e.data) === null || m === void 0 ? void 0 : m.status.loading) !== 0 && y.jsx(Yi, { animate: (h = e == null ? void 0 : e.data) === null || h === void 0 ? void 0 : h.status.loading, progressOptions: x, className: "rce-mbox-photo--img__block-item" })] }))] })), (e == null ? void 0 : e.text) && y.jsx("div", Nt({ className: "rce-mbox-text" }, { children: e.text }))] }));
}, Zt = function() {
  return Zt = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    return e;
  }, Zt.apply(this, arguments);
}, Gs = function(e) {
  var t, n, r, i, a, o, s, l, u, c = { strokeWidth: 5, color: "#333", trailColor: "#aaa", trailWidth: 5, step: function(m, h) {
    h.path.setAttribute("trail", m.color), h.path.setAttribute("trailwidth-width", m.width);
    var x = Math.round(100 * h.value());
    x === 0 ? h.setText("") : h.setText(x);
  } }, f = ((t = e == null ? void 0 : e.data) === null || t === void 0 ? void 0 : t.status) && ((n = e == null ? void 0 : e.data) === null || n === void 0 ? void 0 : n.status.error) === !0;
  return y.jsx("div", Zt({ className: "rce-mbox-file" }, { children: y.jsxs("button", Zt({ onClick: function(m) {
    var h, x, E;
    !((h = e == null ? void 0 : e.data) === null || h === void 0) && h.status && (!(!((x = e == null ? void 0 : e.data) === null || x === void 0) && x.status.download) && e.onDownload instanceof Function ? e.onDownload(m) : !((E = e == null ? void 0 : e.data) === null || E === void 0) && E.status.download && e.onOpen instanceof Function && e.onOpen(m));
  } }, { children: [y.jsxs("div", Zt({ className: "rce-mbox-file--icon" }, { children: [y.jsx(Us, { color: "#aaa" }), y.jsx("div", Zt({ className: "rce-mbox-file--size" }, { children: e == null ? void 0 : e.data.size }))] })), y.jsx("div", Zt({ className: "rce-mbox-file--text" }, { children: e.text })), y.jsxs("div", Zt({ className: "rce-mbox-file--buttons" }, { children: [f && y.jsx("span", Zt({ className: "rce-error-button" }, { children: y.jsx(qi, { color: "#ff3d3d" }) })), !f && ((r = e == null ? void 0 : e.data) === null || r === void 0 ? void 0 : r.status) && !(!((i = e == null ? void 0 : e.data) === null || i === void 0) && i.status.download) && !(!((a = e == null ? void 0 : e.data) === null || a === void 0) && a.status.click) && y.jsx(Wi, { color: "#aaa" }), !f && ((o = e == null ? void 0 : e.data) === null || o === void 0 ? void 0 : o.status) && typeof ((s = e == null ? void 0 : e.data) === null || s === void 0 ? void 0 : s.status.loading) == "number" && ((l = e == null ? void 0 : e.data) === null || l === void 0 ? void 0 : l.status.loading) !== 0 && y.jsx(Yi, { animate: (u = e == null ? void 0 : e.data) === null || u === void 0 ? void 0 : u.status.loading, className: "rce-mbox-file--loading", progressOptions: c })] }))] })) }));
}, Po = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
pi = Po, function() {
  var e = {}.hasOwnProperty;
  function t() {
    for (var n = [], r = 0; r < arguments.length; r++) {
      var i = arguments[r];
      if (i) {
        var a = typeof i;
        if (a === "string" || a === "number") n.push(i);
        else if (Array.isArray(i)) {
          if (i.length) {
            var o = t.apply(null, i);
            o && n.push(o);
          }
        } else if (a === "object") {
          if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
            n.push(i.toString());
            continue;
          }
          for (var s in i) e.call(i, s) && i[s] && n.push(s);
        }
      }
    }
    return n.join(" ");
  }
  pi.exports ? (t.default = t, pi.exports = t) : window.classNames = t;
}();
var me = Po.exports, or = function() {
  return or = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    return e;
  }, or.apply(this, arguments);
}, Xs = function(e) {
  return y.jsx("div", or({ className: me("rce-container-smsg", e.className) }, { children: y.jsx("div", or({ className: "rce-smsg" }, { children: y.jsx("div", or({ className: "rce-smsg-text" }, { children: e.text })) })) }));
}, sr = function() {
  return sr = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    return e;
  }, sr.apply(this, arguments);
}, el = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  }
  return n;
}, tl = function(e) {
  var t, n = e.markerColor, r = n === void 0 ? "red" : n, i = e.target, a = i === void 0 ? "_blank" : i, o = e.zoom, s = o === void 0 ? "14" : o, l = el(e, ["markerColor", "target", "zoom"]), u = function(c) {
    return c.replace(/LATITUDE/g, l == null ? void 0 : l.data.latitude).replace(/LONGITUDE/g, l == null ? void 0 : l.data.longitude).replace("MARKER_COLOR", r).replace("ZOOM", s).replace("KEY", l.apiKey);
  };
  return y.jsxs("div", sr({ className: "rce-container-lmsg" }, { children: [y.jsx("a", sr({ onClick: l.onOpen, target: a, href: l.href || l.src || u(l.data.mapURL || "https://www.google.com/maps/search/?api=1&query=LATITUDE,LONGITUDE&zoom=ZOOM"), className: (t = me("rce-mbox-location", l.className), l.text && (t = me(t, "rce-mbox-location-has-text")), t) }, { children: y.jsx("img", { onError: l.onError, className: "rce-mbox-location-img", src: l.src || u(l.data.staticURL || "https://maps.googleapis.com/maps/api/staticmap?markers=color:MARKER_COLOR|LATITUDE,LONGITUDE&zoom=ZOOM&size=270x200&scale=2&key=KEY") }) })), l.text && y.jsx("div", sr({ className: "rce-mbox-text rce-mbox-location-text" }, { children: l.text }))] }));
}, Ii = function() {
  return Ii = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    return e;
  }, Ii.apply(this, arguments);
}, nl = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  }
  return n;
}, rl = function(e) {
  var t = e.width, n = t === void 0 ? 300 : t, r = e.height, i = r === void 0 ? 380 : r, a = nl(e, ["width", "height"]);
  return a.uri ? y.jsx("div", Ii({ className: "rce-mbox-spotify" }, { children: y.jsx("iframe", { src: "https://open.spotify.com/embed?" + function() {
    var o = [];
    for (var s in a) {
      var l = encodeURIComponent(s), u = encodeURIComponent(a[s]);
      o.push(l + "=" + u);
    }
    return o.join("&");
  }(), width: n, height: i, frameBorder: "0", allowTransparency: !0 }) })) : null;
}, Ht = function() {
  return Ht = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    return e;
  }, Ht.apply(this, arguments);
}, il = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  }
  return n;
}, al = function(e) {
  var t = e.onClick, n = il(e, ["onClick"]);
  return y.jsxs("div", Ht({ className: me("rce-mbox-reply", { "rce-mbox-reply-border": !!n.titleColor }), style: Ht({}, n.titleColor && { borderColor: n.titleColor }), onClick: t }, { children: [y.jsxs("div", Ht({ className: "rce-mbox-reply-left" }, { children: [y.jsx("div", Ht({ style: Ht({}, n.titleColor && { color: n.titleColor }), className: "rce-mbox-reply-owner" }, { children: n.title || "Unknown" })), y.jsx("div", Ht({ className: "rce-mbox-reply-message" }, { children: n.message || "..." }))] })), n.photoURL && y.jsx("div", Ht({ className: "rce-mbox-reply-right" }, { children: y.jsx("img", { src: n.photoURL, alt: "" }) }))] }));
};
function ol(e) {
  return Re({ tag: "svg", attr: { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, child: [{ tag: "path", attr: { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" } }] })(e);
}
function sl(e) {
  return Re({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M317.5 210.3c1.7-1.8 1.8-4.7 0-6.5l-19.8-21c-.8-.9-2-1.4-3.2-1.4-1.2 0-2.4.5-3.2 1.4l-66.5 69.1 26.4 27.1 66.3-68.7zM123.8 253.1c-.9-.9-2-1.4-3.2-1.4-1.2 0-2.3.5-3.2 1.4l-20.1 20.7c-1.8 1.8-1.8 4.8 0 6.6l63.2 65c4 4.2 9 6.6 13.2 6.6 6 0 11.1-4.5 13.1-6.4l.1-.1 13.4-13.8-76.5-78.6z" } }, { tag: "path", attr: { d: "M414.7 182.4l-19.8-21c-.8-.9-2-1.4-3.2-1.4-1.2 0-2.4.5-3.2 1.4L250.7 304.1l-50.1-51.6c-.9-.9-2-1.4-3.2-1.4-1.2 0-2.3.5-3.2 1.4l-20.1 20.7c-1.8 1.8-1.8 4.8 0 6.6l63.2 65c4 4.2 9 6.6 13.2 6.6 6 0 11.1-4.5 13.1-6.4l.1-.1 151-156.1c1.7-1.7 1.7-4.6 0-6.4z" } }] })(e);
}
function ll(e) {
  return Re({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M391.553 64H57.607C53.131 64 48 67.745 48 72.159v214.217c0 4.413 5.131 8.624 9.607 8.624H115v88.894L205.128 295h186.425c4.477 0 7.447-4.211 7.447-8.624V72.159c0-4.414-2.971-8.159-7.447-8.159z" } }, { tag: "path", attr: { d: "M456.396 127H424v166.57c0 15.987-6.915 26.43-25.152 26.43H218.096l-38.905 39h129.688L399 448v-89h57.396c4.478 0 7.604-4.262 7.604-8.682V136.103c0-4.414-3.126-9.103-7.604-9.103z" } }] })(e);
}
function ul(e) {
  return Re({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" } }] })(e);
}
function cl(e) {
  return Re({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z" } }] })(e);
}
function dl(e) {
  return Re({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" } }] })(e);
}
function fl(e) {
  return Re({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9A7.902 7.902 0 014 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1A7.902 7.902 0 0120 12c0 4.42-3.58 8-8 8z" } }] })(e);
}
function hl(e) {
  return Re({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" } }, { tag: "path", attr: { d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" } }] })(e);
}
function pl(e) {
  return Re({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" } }] })(e);
}
function ml(e) {
  return Re({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" } }] })(e);
}
var gl = ["second", "minute", "hour", "day", "week", "month", "year"], yl = ["秒", "分钟", "小时", "天", "周", "个月", "年"], Ni = {}, _a = function(e, t) {
  Ni[e] = t;
}, mi = [60, 60, 24, 7, 365 / 7 / 12, 12];
function vl(e) {
  return e instanceof Date ? e : !isNaN(e) || /^\d+$/.test(e) ? new Date(parseInt(e)) : (e = (e || "").trim().replace(/\.\d+/, "").replace(/-/, "/").replace(/-/, "/").replace(/(\d)T(\d)/, "$1 $2").replace(/Z/, " UTC").replace(/([+-]\d\d):?(\d\d)/, " $1$2"), new Date(e));
}
var lr = function(e, t, n) {
  var r = function(i, a) {
    return (+/* @__PURE__ */ new Date() - +vl(i)) / 1e3;
  }(e);
  return function(i, a) {
    for (var o = i < 0 ? 1 : 0, s = i = Math.abs(i), l = 0; i >= mi[l] && l < mi.length; l++) i /= mi[l];
    return (i = Math.floor(i)) > ((l *= 2) == 0 ? 9 : 1) && (l += 1), a(i, l, s)[o].replace("%s", i.toString());
  }(r, function(i) {
    return Ni[i] || Ni.en_US;
  }(t));
};
_a("en_US", function(e, t) {
  if (t === 0) return ["just now", "right now"];
  var n = gl[Math.floor(t / 2)];
  return e > 1 && (n += "s"), [e + " " + n + " ago", "in " + e + " " + n];
}), _a("zh_CN", function(e, t) {
  if (t === 0) return ["刚刚", "片刻后"];
  var n = yl[~~(t / 2)];
  return [e + " " + n + "前", e + " " + n + "后"];
});
var ur = function() {
  return ur = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    return e;
  }, ur.apply(this, arguments);
}, xl = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  }
  return n;
}, Ur = function(e) {
  var t = e.type, n = t === void 0 ? "default" : t, r = e.size, i = r === void 0 ? "default" : r, a = e.lazyLoadingImage, o = a === void 0 ? void 0 : a, s = xl(e, ["type", "size", "lazyLoadingImage"]), l = [], u = !1, c = s.src, f = !1;
  Wt(function() {
    o && (f = !0, m(c) ? f = !1 : (c = o, u || h(s.src)));
  }, []);
  var m = function(x) {
    return l.indexOf(x) !== -1;
  }, h = function(x) {
    u = !0;
    var E = function() {
      l.push(x), u = !1;
    }, R = document.createElement("img");
    R.src = x, R.onload = E, R.onerror = E;
  };
  return y.jsxs("div", ur({ className: me("rce-avatar-container", n, i, s.className) }, { children: [s.letterItem ? y.jsx("div", ur({ className: "rce-avatar-letter-background", style: { backgroundColor: function(x) {
    for (var E = 0, R = 0; R < x.length; R++) E = x.charCodeAt(R) + ((E << 5) - E);
    var b = "#";
    for (R = 0; R < 3; R++) {
      var O = E >> 8 * R & 255;
      b += ("00" + (O = O % 150 + 50).toString(16)).substr(-2);
    }
    return b;
  }(s.letterItem.id) } }, { children: y.jsx("span", ur({ className: "rce-avatar-letter" }, { children: s.letterItem.letter })) })) : y.jsx("img", { alt: s.alt, src: c, onError: s.onError, className: me("rce-avatar", { "rce-avatar-lazy": f }) }), s.sideElement] }));
}, cr = function() {
  return cr = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    return e;
  }, cr.apply(this, arguments);
}, bl = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  }
  return n;
}, Io = function(e) {
  var t = e.disabled, n = t !== void 0 && t, r = e.backgroundColor, i = r === void 0 ? "#3979aa" : r, a = e.color, o = a === void 0 ? "white" : a, s = bl(e, ["disabled", "backgroundColor", "color"]);
  return y.jsx("button", cr({ ref: s.buttonRef, title: s.title, className: me("rce-button", s.type, s.className), style: { backgroundColor: i, color: o, borderColor: i }, disabled: n, onClick: s.onClick }, { children: s.icon ? y.jsxs("span", cr({ className: "rce-button-icon--container" }, { children: [(s.icon.float === "right" || !s.icon.float) && y.jsx("span", { children: s.text }), y.jsx("span", cr({ style: { float: s.icon.float, fontSize: s.icon.size || 12 }, className: "rce-button-icon" }, { children: s.icon.component })), s.icon.float === "left" && y.jsx("span", { children: s.text })] })) : y.jsx("span", { children: s.text }) }));
}, $t = function() {
  return $t = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    return e;
  }, $t.apply(this, arguments);
}, wl = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  }
  return n;
}, kl = function(e) {
  var t, n = e.animationPosition, r = n === void 0 ? "nortwest" : n, i = e.animationType, a = i === void 0 ? "default" : i, o = wl(e, ["animationPosition", "animationType"]), s = Mt(void 0), l = s[0], u = s[1];
  return y.jsxs("div", $t({ className: me("rce-dropdown-container", o.className), onBlur: function() {
    l === !0 && u(!1);
  } }, { children: [y.jsx(Io, $t({}, o.buttonProps, { onClick: function() {
    return u(!l);
  } })), y.jsx("div", $t({ className: me("rce-dropdown", a, "rce-dropdown-open__" + r, { "dropdown-hide": l === !1 }, { "dropdown-show": l === !0 }) }, { children: y.jsxs("ul", { children: [o.title && y.jsx("span", $t({ className: "rce-dropdown-title" }, { children: o.title })), (t = o.items) === null || t === void 0 ? void 0 : t.map(function(c, f) {
    return y.jsx("li", $t({ onMouseDown: function(m) {
      return o.onSelect(f);
    } }, { children: c instanceof Object ? c.icon ? y.jsxs("span", $t({ className: "rce-button-icon--container" }, { children: [(c.icon.float === "right" || !c.icon.float) && y.jsx("a", { children: c.text }), y.jsx("span", $t({ style: { float: c.icon.float, color: c.icon.color, fontSize: c.icon.size || 12 }, className: me("rce-button-icon", c.icon.className) }, { children: c.icon.component })), c.icon.float === "left" && y.jsx("a", { children: c.text })] })) : y.jsx("a", { children: c.text }) : y.jsx("a", { children: c }) }), f);
  })] }) }))] }));
}, ie = function() {
  return ie = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    return e;
  }, ie.apply(this, arguments);
}, _l = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  }
  return n;
}, Sl = function(e) {
  var t = e.date, n = e.dateString, r = e.title, i = e.subject, a = e.collapseTitle, o = e.moreItems, s = e.participants, l = e.dataSource, u = e.onClick, c = e.onMeetingTitleClick, f = e.onMeetingVideoLinkClick, m = e.onMeetingMoreSelect, h = _l(e, ["date", "dateString", "title", "subject", "collapseTitle", "moreItems", "participants", "dataSource", "onClick", "onMeetingTitleClick", "onMeetingVideoLinkClick", "onMeetingMoreSelect"]), x = Mt(!1), E = x[0], R = x[1], b = h.participantsLimit, O = n || t && lr(t);
  return y.jsx("div", ie({ className: "rce-mbox-mtmg" }, { children: y.jsxs("div", ie({ className: "rce-mtmg" }, { children: [y.jsx("div", ie({ className: "rce-mtmg-subject" }, { children: i || "Unknown Meeting" })), y.jsxs("div", ie({ className: "rce-mtmg-body", onClick: u }, { children: [y.jsxs("div", ie({ className: "rce-mtmg-item" }, { children: [y.jsx(Ds, {}), y.jsxs("div", ie({ className: "rce-mtmg-content" }, { children: [y.jsx("span", ie({ className: "rce-mtmg-title" }, { children: r })), y.jsx("span", ie({ className: "rce-mtmg-date" }, { children: O }))] }))] })), m && o && o.length > 0 && y.jsx("div", { children: y.jsx(kl, { animationType: "bottom", animationPosition: "norteast", buttonProps: { className: "rce-mtmg-right-icon", icon: { component: y.jsx(ml, {}), size: 24 } }, items: o, onSelect: m }) })] })), y.jsx("div", ie({ className: "rce-mtmg-body-bottom", onClick: function() {
    R(!E);
  } }, { children: y.jsxs("div", E === !0 ? ie({ className: "rce-mtmg-bottom--tptitle" }, { children: [y.jsx(Fs, {}), y.jsx("span", { children: a })] }) : ie({ className: "rce-mtmg-body-bottom--bttitle" }, { children: [y.jsx(Bs, {}), y.jsxs("span", { children: [s == null ? void 0 : s.slice(0, b).map(function(_) {
    return _.title || "Unknow";
  }).join(", "), s && b && s.length > b && ", +".concat(s.length - b)] })] })) })), y.jsx("div", ie({ className: me("rce-mtmg-toogleContent", { "rce-mtmg-toogleContent--click": E === !0 }) }, { children: l && l.map(function(_, P) {
    return y.jsxs("div", { children: [!_.event && y.jsxs("div", ie({ className: "rce-mitem" }, { children: [y.jsx("div", ie({ className: me("rce-mitem avatar", { "rce-mitem no-avatar": !_.avatar }) }, { children: _.avatar ? y.jsx(Ur, { src: _.avatar }) : y.jsx(ll, {}) })), y.jsxs("div", ie({ className: "rce-mitem-body" }, { children: [y.jsxs("div", ie({ className: "rce-mitem-body--top" }, { children: [y.jsx("div", ie({ className: "rce-mitem-body--top-title", onClick: function(T) {
      return w = _, K = P, he = T, void (c instanceof Function && c(w, K, he));
      var w, K, he;
    } }, { children: _.title })), y.jsx("div", ie({ className: "rce-mitem-body--top-time" }, { children: _.dateString ? _.dateString : _.date && _.date && lr(_.date) }))] })), y.jsx("div", ie({ className: "rce-mitem-body--bottom" }, { children: y.jsx("div", ie({ className: "rce-mitem-body--bottom-title" }, { children: _.message })) }))] }))] })), _.event && y.jsx("div", ie({ className: "rce-mitem-event" }, { children: y.jsxs("div", ie({ className: "rce-mitem-bottom-body" }, { children: [y.jsx("div", ie({ className: "rce-mitem-body avatar" }, { children: y.jsx(ol, {}) })), y.jsxs("div", ie({ className: "rce-mitem-bottom-body-top" }, { children: [_.event.title, y.jsx("div", ie({ className: "rce-mitem-body--top-time" }, { children: _.dateString ? _.dateString : _.date && lr(_.date) })), y.jsx("div", ie({ className: "rce-mitem-avatar-content" }, { children: y.jsxs("div", ie({ className: "rce-mitem-avatar" }, { children: [_.event.avatars && _.event.avatars.slice(0, _.event.avatarsLimit).map(function(T, w) {
      return y.jsx(Ur, { src: T.src }, w);
    }), _.event.avatars && _.event.avatarsLimit && _.event.avatars.length > _.event.avatarsLimit && y.jsx("div", ie({ className: "rce-mitem-length rce-mitem-tooltip", tooltip: _.event.avatars.slice(_.event.avatarsLimit, _.event.avatars.length).map(function(T) {
      return T.title;
    }).join(",").toString() }, { children: y.jsx("span", ie({ className: "rce-mitem-tooltip-text" }, { children: "+" + (_.event.avatars.length - _.event.avatarsLimit) })) }))] })) })), _.record && y.jsx("div", ie({ className: "rce-mtmg-call-record" }, { children: y.jsxs("div", ie({ className: "rce-mtmg-call-body" }, { children: [y.jsxs("div", ie({ onClick: function(T) {
      return w = _, K = P, he = T, void (f instanceof Function && f(w, K, he));
      var w, K, he;
    }, className: "rce-mtmg-call-avatars" }, { children: [y.jsx(Ur, { className: "rce-mtmg-call-avatars", src: _.record.avatar }), y.jsx("div", ie({ className: "rce-mtmg-record-time" }, { children: _.record.time }))] })), y.jsxs("div", ie({ className: "rce-mtmg-call-body-title" }, { children: [y.jsx("span", { children: _.record.title }), y.jsx("div", ie({ className: "rce-mtmg-call-body-bottom" }, { children: _.record.savedBy }))] }))] })) }))] }))] })) }))] }, P);
  }) }))] })) }));
}, wt = function() {
  return wt = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    return e;
  }, wt.apply(this, arguments);
}, Cl = function(e) {
  var t, n, r, i, a, o = { strokeWidth: 2.3, color: "#efe", trailColor: "#aaa", trailWidth: 1, step: function(u, c) {
    var f, m;
    c.path.setAttribute("trail", u.state !== void 0 && ((f = u == null ? void 0 : u.state) === null || f === void 0 ? void 0 : f.color) || ""), c.path.setAttribute("trailwidth-width", u.state !== void 0 && ((m = u == null ? void 0 : u.state) === null || m === void 0 ? void 0 : m.width) || "");
    var h = Math.round(100 * (c == null ? void 0 : c.value()));
    h === 0 ? c == null || c.setText("") : c == null || c.setText(h);
  } }, s = ((t = e == null ? void 0 : e.data) === null || t === void 0 ? void 0 : t.status) && ((n = e == null ? void 0 : e.data) === null || n === void 0 ? void 0 : n.status.error) === !0, l = ((r = e == null ? void 0 : e.data) === null || r === void 0 ? void 0 : r.status) && ((i = e == null ? void 0 : e.data) === null || i === void 0 ? void 0 : i.status.download);
  return y.jsxs("div", wt({ className: me("rce-mbox-video", { "padding-time": !(e != null && e.text) }) }, { children: [y.jsxs("div", wt({ className: "rce-mbox-video--video", style: wt({}, (e == null ? void 0 : e.data.width) && (e == null ? void 0 : e.data.height) && { width: e.data.width, height: e.data.height }) }, { children: [!l && y.jsx("img", { src: e == null ? void 0 : e.data.uri, alt: e == null ? void 0 : e.data.alt, onClick: e.onOpen, onLoad: e.onLoad, onError: e.onPhotoError }), l && y.jsxs("video", wt({ controls: !0, controlsList: e.controlsList }, { children: [y.jsx("source", { src: e == null ? void 0 : e.data.videoURL, type: "video/mp4" }), "Your browser does not support HTML video."] })), s && y.jsx("div", wt({ className: "rce-mbox-video--video__block" }, { children: y.jsx("span", wt({ className: "rce-mbox-video--video__block-item rce-mbox-video--error" }, { children: y.jsx(qi, {}) })) })), !s && ((a = e == null ? void 0 : e.data) === null || a === void 0 ? void 0 : a.status) && !l && y.jsxs("div", wt({ className: "rce-mbox-video--video__block" }, { children: [!e.data.status.click && y.jsx("button", wt({ onClick: e.onDownload, className: "rce-mbox-video--video__block-item rce-mbox-video--download" }, { children: y.jsx(Wi, {}) })), typeof e.data.status.loading == "number" && e.data.status.loading !== 0 && y.jsx(Yi, { animate: e.data.status.loading, className: "rce-mbox-video--video__block-item", progressOptions: o })] }))] })), (e == null ? void 0 : e.text) && y.jsx("div", wt({ className: "rce-mbox-text" }, { children: e.text }))] }));
}, dr = function() {
  return dr = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    return e;
  }, dr.apply(this, arguments);
}, El = function(e) {
  var t = e.data.controlsList;
  return y.jsxs("div", dr({ className: "rce-mbox-audio", style: e.customStyle }, { children: [y.jsxs("audio", dr({}, e.audioProps, { controls: !0, controlsList: t || "nodownload" }, { children: [y.jsx("source", { src: e.data.audioURL, type: e.data.audioType || "audio/mp3" }), "Your browser does not support the audio element."] })), e.text && y.jsx("div", dr({ className: "rce-mbox-text" }, { children: e.text }))] }));
}, on = function() {
  return on = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    return e;
  }, on.apply(this, arguments);
}, Ol = function(e) {
  var t;
  return y.jsx("div", on({ className: "rce-mtlink" }, { children: y.jsxs("div", on({ className: "rce-mtlink-content" }, { children: [y.jsx("div", on({ className: "rce-mtlink-item" }, { children: y.jsx("div", on({ className: "rce-mtlink-title" }, { children: e.text })) })), y.jsx("div", on({ className: "rce-mtlink-btn" }, { children: (t = e == null ? void 0 : e.actionButtons) === null || t === void 0 ? void 0 : t.map(function(n) {
    return y.jsx("div", on({ className: "rce-mtlink-btn-content", onClick: function() {
      var r;
      return n.onClickButton((r = e == null ? void 0 : e.meetingID) !== null && r !== void 0 ? r : "");
    } }, { children: y.jsx(n.Component, {}) }));
  }) }))] })) }));
};
function Tl(e) {
  return Re({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M13 14h-2a8.999 8.999 0 0 0-7.968 4.81A10.136 10.136 0 0 1 3 18C3 12.477 7.477 8 13 8V3l10 8-10 8v-5z" } }] }] })(e);
}
function jl(e) {
  return Re({ tag: "svg", attr: { version: "1.2", baseProfile: "tiny", viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M13 5.499c-.256 0-.512.097-.707.292-.195.196-.293.452-.293.708v2.559c-4.5.498-8 4.309-8 8.941v1c2.245-3.423 5.25-3.92 8-3.989v2.489c0 .255.098.512.293.707s.451.293.707.293.512-.098.707-.293l6.293-6.207-6.293-6.208c-.195-.195-.451-.292-.707-.292z" } }] })(e);
}
var ve = function() {
  return ve = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    return e;
  }, ve.apply(this, arguments);
}, Pl = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  }
  return n;
}, Il = function(e) {
  var t = e.focus, n = t !== void 0 && t, r = e.notch, i = r === void 0 || r, a = e.styles, o = Pl(e, ["focus", "notch", "styles"]), s = $r(n), l = $r(null), u = me("rce-mbox", { "rce-mbox-right": o.position === "right" }), c = !(/(text|video|file|meeting|audio)/g.test(o.type || "text") || o.type === "location" && o.text), f = o.date && (o.dateString || lr(o.date));
  return Wt(function() {
    var m;
    s.current !== n && n === !0 && l && ((m = l.current) === null || m === void 0 || m.scrollIntoView({ block: "center", behavior: "smooth" }), o.onMessageFocused(s)), s.current = n;
  }, [n, s]), y.jsxs("div", ve({ ref: l, className: me("rce-container-mbox", o.className), onClick: o.onClick }, { children: [o.renderAddCmp instanceof Function ? o.renderAddCmp() : o.renderAddCmp, o.type === "system" ? y.jsx(Xs, ve({}, o, { focus: n, notch: i })) : y.jsxs("div", ve({ style: a, className: me(u, { "rce-mbox--clear-padding": c }, { "rce-mbox--clear-notch": !i }, { "message-focus": n }) }, { children: [y.jsxs("div", ve({ className: "rce-mbox-body", onContextMenu: o.onContextMenu }, { children: [!o.retracted && o.forwarded === !0 && y.jsx("div", ve({ className: me("rce-mbox-forward", { "rce-mbox-forward-right": o.position === "left" }, { "rce-mbox-forward-left": o.position === "right" }), onClick: o.onForwardClick }, { children: y.jsx(Tl, {}) })), !o.retracted && o.replyButton === !0 && y.jsx("div", ve({ className: o.forwarded !== !0 ? me("rce-mbox-forward", { "rce-mbox-forward-right": o.position === "left" }, { "rce-mbox-forward-left": o.position === "right" }) : me("rce-mbox-forward", { "rce-mbox-reply-btn-right": o.position === "left" }, { "rce-mbox-reply-btn-left": o.position === "right" }), onClick: o.onReplyClick }, { children: y.jsx(dl, {}) })), !o.retracted && o.removeButton === !0 && y.jsx("div", ve({ className: o.forwarded === !0 ? me("rce-mbox-remove", { "rce-mbox-remove-right": o.position === "left" }, { "rce-mbox-remove-left": o.position === "right" }) : me("rce-mbox-forward", { "rce-mbox-reply-btn-right": o.position === "left" }, { "rce-mbox-reply-btn-left": o.position === "right" }), onClick: o.onRemoveMessageClick }, { children: y.jsx(ul, {}) })), (o.title || o.avatar) && y.jsxs("div", ve({ style: ve({}, o.titleColor && { color: o.titleColor }), onClick: o.onTitleClick, className: me("rce-mbox-title", { "rce-mbox-title--clear": o.type === "text" }) }, { children: [o.avatar && y.jsx(Ur, { letterItem: o.letterItem, src: o.avatar }), o.title && y.jsx("span", { children: o.title })] })), o.forwardedMessageText ? y.jsx("div", ve({ className: "rce-mbox-forwardedMessage" }, { children: y.jsxs("div", ve({ className: "rce-mbox-forwarded-message" }, { children: [y.jsx(jl, { fontSize: 18 }), y.jsxs("i", ve({ style: { margin: "0 3px 1px 0" } }, { children: [" ", o.forwardedMessageText] }))] })) })) : null, !o.forwardedMessageText && o.reply ? y.jsx(al, ve({ onClick: o.onReplyMessageClick }, o.reply)) : null, o.type === "text" && y.jsxs("div", ve({ className: me("rce-mbox-text", { "rce-mbox-text-retracted": o.retracted, left: o.position === "left", right: o.position === "right" }) }, { children: [o.retracted && y.jsx(fl, {}), o.text] })), o.type === "location" && y.jsx(tl, ve({ focus: n, notch: i }, o)), o.type === "photo" && y.jsx(Qs, ve({ focus: n, notch: i }, o)), o.type === "video" && y.jsx(Cl, ve({ focus: n, notch: i }, o)), o.type === "file" && y.jsx(Gs, ve({ focus: n, notch: i }, o)), o.type === "spotify" && y.jsx(rl, ve({ focus: n, notch: i }, o)), o.type === "meeting" && y.jsx(Sl, ve({ focus: n, notch: i }, o)), o.type === "audio" && y.jsx(El, ve({ focus: n, notch: i }, o)), o.type === "meetingLink" && y.jsx(Ol, ve({ focus: n, notch: i }, o, { actionButtons: o == null ? void 0 : o.actionButtons })), y.jsxs("div", ve({ title: o.statusTitle, className: me("rce-mbox-time", { "rce-mbox-time-block": c }, { "non-copiable": !o.copiableDate }), "data-text": o.copiableDate ? void 0 : f }, { children: [o.copiableDate && o.date && (o.dateString || lr(o.date)), o.status && y.jsxs("span", ve({ className: "rce-mbox-status" }, { children: [o.status === "waiting" && y.jsx(hl, {}), o.status === "sent" && y.jsx(pl, {}), o.status === "received" && y.jsx(sl, {}), o.status === "read" && y.jsx(cl, { color: "#4FC3F7" })] }))] }))] })), i && (o.position === "right" ? y.jsx("svg", ve({ style: o.notchStyle, className: me("rce-mbox-right-notch", { "message-focus": n }), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, { children: y.jsx("path", { d: "M0 0v20L20 0" }) })) : y.jsx("div", { children: y.jsxs("svg", ve({ style: o.notchStyle, className: me("rce-mbox-left-notch", { "message-focus": n }), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, { children: [y.jsx("defs", { children: y.jsxs("filter", ve({ id: "filter1", x: "0", y: "0" }, { children: [y.jsx("feOffset", { result: "offOut", in: "SourceAlpha", dx: "-2", dy: "-5" }), y.jsx("feGaussianBlur", { result: "blurOut", in: "offOut", stdDeviation: "3" }), y.jsx("feBlend", { in: "SourceGraphic", in2: "blurOut", mode: "normal" })] })) }), y.jsx("path", { d: "M20 0v20L0 0", filter: "url(#filter1)" })] })) }))] }))] }));
}, bn = function() {
  return bn = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    return e;
  }, bn.apply(this, arguments);
}, Nl = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  }
  return n;
}, Al = function(e) {
  var t = e.referance, n = t === void 0 ? null : t, r = e.lockable, i = r !== void 0 && r, a = e.toBottomHeight, o = a === void 0 ? 300 : a, s = e.downButton, l = Nl(e, ["referance", "lockable", "toBottomHeight", "downButton"]), u = Mt(0), c = u[0], f = u[1], m = Mt(!1), h = m[0], x = m[1], E = $r(l);
  Wt(function() {
    var b;
    n && (E.current.dataSource.length !== l.dataSource.length && (f(R(n)), (b = n) && b.current && (o === "100%" || o && c < o ? b.current.scrollTop = b.current.scrollHeight : i === !0 && (b.current.scrollTop = b.current.scrollHeight - b.current.offsetHeight - c))), E.current = l);
  }, [E, l]);
  var R = function(b) {
    return b.current ? b.current.scrollHeight - b.current.scrollTop - b.current.offsetHeight : b.scrollHeight - b.scrollTop - b.offsetHeight;
  };
  return y.jsxs("div", bn({ className: me(["rce-container-mlist", l.className]) }, l.customProps, { children: [!!l.children && l.isShowChild && l.children, y.jsx("div", bn({ ref: n, onScroll: function(b) {
    var O = R(b.currentTarget);
    f(O), o === "100%" || o && O > o ? h !== !0 && (x(!0), f(O)) : h !== !1 && (x(!1), f(O)), l.onScroll instanceof Function && l.onScroll(b);
  }, className: "rce-mlist" }, { children: l.dataSource.map(function(b, O) {
    return y.jsx(Il, bn({}, b, { onOpen: l.onOpen && function(_) {
      return P = b, T = O, w = _, void (l.onOpen instanceof Function && l.onOpen(P, T, w));
      var P, T, w;
    }, onPhotoError: l.onPhotoError && function(_) {
      return P = b, T = O, w = _, void (l.onPhotoError instanceof Function && l.onPhotoError(P, T, w));
      var P, T, w;
    }, onDownload: l.onDownload && function(_) {
      return P = b, T = O, w = _, void (l.onDownload instanceof Function && l.onDownload(P, T, w));
      var P, T, w;
    }, onTitleClick: l.onTitleClick && function(_) {
      return P = b, T = O, w = _, void (l.onTitleClick instanceof Function && l.onTitleClick(P, T, w));
      var P, T, w;
    }, onForwardClick: l.onForwardClick && function(_) {
      return P = b, T = O, w = _, void (l.onForwardClick instanceof Function && l.onForwardClick(P, T, w));
      var P, T, w;
    }, onReplyClick: l.onReplyClick && function(_) {
      return P = b, T = O, w = _, void (l.onReplyClick instanceof Function && l.onReplyClick(P, T, w));
      var P, T, w;
    }, onReplyMessageClick: l.onReplyMessageClick && function(_) {
      return P = b, T = O, w = _, void (l.onReplyMessageClick instanceof Function && l.onReplyMessageClick(P, T, w));
      var P, T, w;
    }, onRemoveMessageClick: l.onRemoveMessageClick && function(_) {
      return P = b, T = O, w = _, void (l.onRemoveMessageClick instanceof Function && l.onRemoveMessageClick(P, T, w));
      var P, T, w;
    }, onClick: l.onClick && function(_) {
      return P = b, T = O, w = _, void (l.onClick instanceof Function && l.onClick(P, T, w));
      var P, T, w;
    }, onContextMenu: l.onContextMenu && function(_) {
      return P = b, T = O, w = _, void (l.onContextMenu instanceof Function && l.onContextMenu(P, T, w));
      var P, T, w;
    }, onMeetingMoreSelect: l.onMeetingMoreSelect && function(_) {
      return function(P, T, w) {
        l.onMeetingMoreSelect instanceof Function && l.onMeetingMoreSelect(P, T, w);
      }(b, O, _);
    }, onMessageFocused: l.onMessageFocused && function(_) {
      return P = b, T = O, w = _, void (l.onMessageFocused instanceof Function && l.onMessageFocused(P, T, w));
      var P, T, w;
    }, onMeetingMessageClick: l.onMeetingMessageClick && function(_) {
      return P = b, T = O, w = _, void (l.onMeetingMessageClick instanceof Function && l.onMeetingMessageClick(P, T, w));
      var P, T, w;
    }, onMeetingTitleClick: l.onMeetingTitleClick, onMeetingVideoLinkClick: l.onMeetingVideoLinkClick, onMeetingLinkClick: l.onMeetingLinkClick && function(_) {
      return function(P, T, w) {
        l.onMeetingLinkClick instanceof Function && l.onMeetingLinkClick(P, T, w);
      }(b, O, _);
    }, actionButtons: l.actionButtons, styles: l.messageBoxStyles, notchStyle: l.notchStyle }), O);
  }) })), s === !0 && h && o !== "100%" && y.jsxs("div", bn({ className: "rce-mlist-down-button", onClick: function(b) {
    n && (n.current.scrollTop = n.current.scrollHeight, l.onDownButtonClick instanceof Function && l.onDownButtonClick(b));
  } }, { children: [y.jsx(Vs, {}), l.downButtonBadge !== void 0 ? y.jsx("span", bn({ className: "rce-mlist-down-button--badge" }, { children: l.downButtonBadge.toString() })) : null] }))] }));
}, Fn = function() {
  return Fn = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    return e;
  }, Fn.apply(this, arguments);
}, Ml = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  }
  return n;
}, Rl = function(e) {
  var t, n = e.type, r = n === void 0 ? "text" : n, i = e.multiline, a = i !== void 0 && i, o = e.minHeight, s = o === void 0 ? 25 : o, l = e.maxHeight, u = l === void 0 ? 200 : l, c = e.autoHeight, f = c === void 0 || c, m = e.autofocus, h = m !== void 0 && m, x = Ml(e, ["type", "multiline", "minHeight", "maxHeight", "autoHeight", "autofocus"]);
  Wt(function() {
    var b, O;
    h === !0 && ((O = (b = x.referance) === null || b === void 0 ? void 0 : b.current) === null || O === void 0 || O.focus()), x.clear instanceof Function && x.clear(R);
  }, []);
  var E = function(b) {
    if (a === !0 && f === !0) {
      b.target.style.height !== s + "px" && (b.target.style.height = s + "px");
      var O = void 0;
      O = b.target.scrollHeight <= u ? b.target.scrollHeight + "px" : u + "px", b.target.style.height !== O && (b.target.style.height = O);
    }
    if (x.maxlength && (b.target.value || "").length > x.maxlength) return x.onMaxLengthExceed instanceof Function && x.onMaxLengthExceed(), void (x.referance && (x.referance.current.value = (b.target.value || "").substring(0, x.maxlength)));
    x.onChange instanceof Function && x.onChange(b);
  }, R = function() {
    var b, O, _, P = { FAKE_EVENT: !0, target: (b = x.referance) === null || b === void 0 ? void 0 : b.current };
    !((_ = (O = x.referance) === null || O === void 0 ? void 0 : O.current) === null || _ === void 0) && _.value && (x.referance.current.value = ""), E(P);
  };
  return y.jsxs("div", Fn({ className: me("rce-container-input", x.className) }, { children: [x.leftButtons && y.jsx("div", Fn({ className: "rce-input-buttons" }, { children: x.leftButtons })), a === !1 ? y.jsx("input", { ref: x.referance, type: r, className: me("rce-input"), placeholder: x.placeholder, defaultValue: x.defaultValue, style: x.inputStyle, onChange: E, onCopy: x.onCopy, onCut: x.onCut, onPaste: x.onPaste, onBlur: x.onBlur, onFocus: x.onFocus, onSelect: x.onSelect, onSubmit: x.onSubmit, onReset: x.onReset, onKeyDown: x.onKeyDown, onKeyPress: x.onKeyPress, onKeyUp: x.onKeyUp, value: x.value }) : y.jsx("textarea", Fn({ ref: x.referance, className: me("rce-input", "rce-input-textarea"), placeholder: x.placeholder, defaultValue: x.defaultValue, style: x.inputStyle, onChange: E, onCopy: x.onCopy, onCut: x.onCut, onPaste: x.onPaste, onBlur: x.onBlur, onFocus: x.onFocus, onSelect: x.onSelect, onSubmit: x.onSubmit, onReset: x.onReset, onKeyDown: x.onKeyDown, onKeyPress: x.onKeyPress, onKeyUp: x.onKeyUp }, { children: x.defaultValue && (t = x == null ? void 0 : x.value) !== null && t !== void 0 ? t : null })), x.rightButtons && y.jsx("div", Fn({ className: "rce-input-buttons" }, { children: x.rightButtons }))] }));
}, le;
(function(e) {
  e.assertEqual = (i) => i;
  function t(i) {
  }
  e.assertIs = t;
  function n(i) {
    throw new Error();
  }
  e.assertNever = n, e.arrayToEnum = (i) => {
    const a = {};
    for (const o of i)
      a[o] = o;
    return a;
  }, e.getValidEnumValues = (i) => {
    const a = e.objectKeys(i).filter((s) => typeof i[i[s]] != "number"), o = {};
    for (const s of a)
      o[s] = i[s];
    return e.objectValues(o);
  }, e.objectValues = (i) => e.objectKeys(i).map(function(a) {
    return i[a];
  }), e.objectKeys = typeof Object.keys == "function" ? (i) => Object.keys(i) : (i) => {
    const a = [];
    for (const o in i)
      Object.prototype.hasOwnProperty.call(i, o) && a.push(o);
    return a;
  }, e.find = (i, a) => {
    for (const o of i)
      if (a(o))
        return o;
  }, e.isInteger = typeof Number.isInteger == "function" ? (i) => Number.isInteger(i) : (i) => typeof i == "number" && isFinite(i) && Math.floor(i) === i;
  function r(i, a = " | ") {
    return i.map((o) => typeof o == "string" ? `'${o}'` : o).join(a);
  }
  e.joinValues = r, e.jsonStringifyReplacer = (i, a) => typeof a == "bigint" ? a.toString() : a;
})(le || (le = {}));
var Ai;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(Ai || (Ai = {}));
const F = le.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), sn = (e) => {
  switch (typeof e) {
    case "undefined":
      return F.undefined;
    case "string":
      return F.string;
    case "number":
      return isNaN(e) ? F.nan : F.number;
    case "boolean":
      return F.boolean;
    case "function":
      return F.function;
    case "bigint":
      return F.bigint;
    case "symbol":
      return F.symbol;
    case "object":
      return Array.isArray(e) ? F.array : e === null ? F.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? F.promise : typeof Map < "u" && e instanceof Map ? F.map : typeof Set < "u" && e instanceof Set ? F.set : typeof Date < "u" && e instanceof Date ? F.date : F.object;
    default:
      return F.unknown;
  }
}, A = le.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), Ll = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class ot extends Error {
  constructor(t) {
    super(), this.issues = [], this.addIssue = (r) => {
      this.issues = [...this.issues, r];
    }, this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r];
    };
    const n = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = t;
  }
  get errors() {
    return this.issues;
  }
  format(t) {
    const n = t || function(a) {
      return a.message;
    }, r = { _errors: [] }, i = (a) => {
      for (const o of a.issues)
        if (o.code === "invalid_union")
          o.unionErrors.map(i);
        else if (o.code === "invalid_return_type")
          i(o.returnTypeError);
        else if (o.code === "invalid_arguments")
          i(o.argumentsError);
        else if (o.path.length === 0)
          r._errors.push(n(o));
        else {
          let s = r, l = 0;
          for (; l < o.path.length; ) {
            const u = o.path[l];
            l === o.path.length - 1 ? (s[u] = s[u] || { _errors: [] }, s[u]._errors.push(n(o))) : s[u] = s[u] || { _errors: [] }, s = s[u], l++;
          }
        }
    };
    return i(this), r;
  }
  static assert(t) {
    if (!(t instanceof ot))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, le.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {}, r = [];
    for (const i of this.issues)
      i.path.length > 0 ? (n[i.path[0]] = n[i.path[0]] || [], n[i.path[0]].push(t(i))) : r.push(t(i));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
ot.create = (e) => new ot(e);
const Hn = (e, t) => {
  let n;
  switch (e.code) {
    case A.invalid_type:
      e.received === F.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case A.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, le.jsonStringifyReplacer)}`;
      break;
    case A.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${le.joinValues(e.keys, ", ")}`;
      break;
    case A.invalid_union:
      n = "Invalid input";
      break;
    case A.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${le.joinValues(e.options)}`;
      break;
    case A.invalid_enum_value:
      n = `Invalid enum value. Expected ${le.joinValues(e.options)}, received '${e.received}'`;
      break;
    case A.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case A.invalid_return_type:
      n = "Invalid function return type";
      break;
    case A.invalid_date:
      n = "Invalid date";
      break;
    case A.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : le.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case A.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case A.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case A.custom:
      n = "Invalid input";
      break;
    case A.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case A.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case A.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, le.assertNever(e);
  }
  return { message: n };
};
let No = Hn;
function zl(e) {
  No = e;
}
function Wr() {
  return No;
}
const qr = (e) => {
  const { data: t, path: n, errorMaps: r, issueData: i } = e, a = [...n, ...i.path || []], o = {
    ...i,
    path: a
  };
  if (i.message !== void 0)
    return {
      ...i,
      path: a,
      message: i.message
    };
  let s = "";
  const l = r.filter((u) => !!u).slice().reverse();
  for (const u of l)
    s = u(o, { data: t, defaultError: s }).message;
  return {
    ...i,
    path: a,
    message: s
  };
}, Dl = [];
function D(e, t) {
  const n = Wr(), r = qr({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      n,
      n === Hn ? void 0 : Hn
      // then global default map
    ].filter((i) => !!i)
  });
  e.common.issues.push(r);
}
class He {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, n) {
    const r = [];
    for (const i of n) {
      if (i.status === "aborted")
        return q;
      i.status === "dirty" && t.dirty(), r.push(i.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const i of n) {
      const a = await i.key, o = await i.value;
      r.push({
        key: a,
        value: o
      });
    }
    return He.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const i of n) {
      const { key: a, value: o } = i;
      if (a.status === "aborted" || o.status === "aborted")
        return q;
      a.status === "dirty" && t.dirty(), o.status === "dirty" && t.dirty(), a.value !== "__proto__" && (typeof o.value < "u" || i.alwaysSet) && (r[a.value] = o.value);
    }
    return { status: t.value, value: r };
  }
}
const q = Object.freeze({
  status: "aborted"
}), Bn = (e) => ({ status: "dirty", value: e }), Ke = (e) => ({ status: "valid", value: e }), Mi = (e) => e.status === "aborted", Ri = (e) => e.status === "dirty", pr = (e) => e.status === "valid", mr = (e) => typeof Promise < "u" && e instanceof Promise;
function Yr(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t.get(e);
}
function Ao(e, t, n, r, i) {
  if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var B;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(B || (B = {}));
var ir, ar;
class zt {
  constructor(t, n, r, i) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Sa = (e, t) => {
  if (pr(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new ot(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function G(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: r, description: i } = e;
  if (t && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: i } : { errorMap: (o, s) => {
    var l, u;
    const { message: c } = e;
    return o.code === "invalid_enum_value" ? { message: c ?? s.defaultError } : typeof s.data > "u" ? { message: (l = c ?? r) !== null && l !== void 0 ? l : s.defaultError } : o.code !== "invalid_type" ? { message: s.defaultError } : { message: (u = c ?? n) !== null && u !== void 0 ? u : s.defaultError };
  }, description: i };
}
class te {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return sn(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: sn(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new He(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: sn(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (mr(n))
      throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const r = this.safeParse(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  safeParse(t, n) {
    var r;
    const i = {
      common: {
        issues: [],
        async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1,
        contextualErrorMap: n == null ? void 0 : n.errorMap
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: sn(t)
    }, a = this._parseSync({ data: t, path: i.path, parent: i });
    return Sa(i, a);
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  async safeParseAsync(t, n) {
    const r = {
      common: {
        issues: [],
        contextualErrorMap: n == null ? void 0 : n.errorMap,
        async: !0
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: sn(t)
    }, i = this._parse({ data: t, path: r.path, parent: r }), a = await (mr(i) ? i : Promise.resolve(i));
    return Sa(r, a);
  }
  refine(t, n) {
    const r = (i) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(i) : n;
    return this._refinement((i, a) => {
      const o = t(i), s = () => a.addIssue({
        code: A.custom,
        ...r(i)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((l) => l ? !0 : (s(), !1)) : o ? !0 : (s(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, i) => t(r) ? !0 : (i.addIssue(typeof n == "function" ? n(r, i) : n), !1));
  }
  _refinement(t) {
    return new St({
      schema: this,
      typeName: $.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return Lt.create(this, this._def);
  }
  nullable() {
    return fn.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return _t.create(this, this._def);
  }
  promise() {
    return Wn.create(this, this._def);
  }
  or(t) {
    return xr.create([this, t], this._def);
  }
  and(t) {
    return br.create(this, t, this._def);
  }
  transform(t) {
    return new St({
      ...G(this._def),
      schema: this,
      typeName: $.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Cr({
      ...G(this._def),
      innerType: this,
      defaultValue: n,
      typeName: $.ZodDefault
    });
  }
  brand() {
    return new Ki({
      typeName: $.ZodBranded,
      type: this,
      ...G(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Er({
      ...G(this._def),
      innerType: this,
      catchValue: n,
      typeName: $.ZodCatch
    });
  }
  describe(t) {
    const n = this.constructor;
    return new n({
      ...this._def,
      description: t
    });
  }
  pipe(t) {
    return Pr.create(this, t);
  }
  readonly() {
    return Or.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Fl = /^c[^\s-]{8,}$/i, Bl = /^[0-9a-z]+$/, Vl = /^[0-9A-HJKMNP-TV-Z]{26}$/, Ul = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Zl = /^[a-z0-9_-]{21}$/i, Hl = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, $l = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Wl = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let gi;
const ql = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Yl = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Kl = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Mo = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Jl = new RegExp(`^${Mo}$`);
function Ro(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t;
}
function Ql(e) {
  return new RegExp(`^${Ro(e)}$`);
}
function Lo(e) {
  let t = `${Mo}T${Ro(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function Gl(e, t) {
  return !!((t === "v4" || !t) && ql.test(e) || (t === "v6" || !t) && Yl.test(e));
}
class kt extends te {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== F.string) {
      const a = this._getOrReturnCtx(t);
      return D(a, {
        code: A.invalid_type,
        expected: F.string,
        received: a.parsedType
      }), q;
    }
    const r = new He();
    let i;
    for (const a of this._def.checks)
      if (a.kind === "min")
        t.data.length < a.value && (i = this._getOrReturnCtx(t, i), D(i, {
          code: A.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "max")
        t.data.length > a.value && (i = this._getOrReturnCtx(t, i), D(i, {
          code: A.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "length") {
        const o = t.data.length > a.value, s = t.data.length < a.value;
        (o || s) && (i = this._getOrReturnCtx(t, i), o ? D(i, {
          code: A.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : s && D(i, {
          code: A.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), r.dirty());
      } else if (a.kind === "email")
        $l.test(t.data) || (i = this._getOrReturnCtx(t, i), D(i, {
          validation: "email",
          code: A.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "emoji")
        gi || (gi = new RegExp(Wl, "u")), gi.test(t.data) || (i = this._getOrReturnCtx(t, i), D(i, {
          validation: "emoji",
          code: A.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "uuid")
        Ul.test(t.data) || (i = this._getOrReturnCtx(t, i), D(i, {
          validation: "uuid",
          code: A.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "nanoid")
        Zl.test(t.data) || (i = this._getOrReturnCtx(t, i), D(i, {
          validation: "nanoid",
          code: A.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid")
        Fl.test(t.data) || (i = this._getOrReturnCtx(t, i), D(i, {
          validation: "cuid",
          code: A.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid2")
        Bl.test(t.data) || (i = this._getOrReturnCtx(t, i), D(i, {
          validation: "cuid2",
          code: A.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "ulid")
        Vl.test(t.data) || (i = this._getOrReturnCtx(t, i), D(i, {
          validation: "ulid",
          code: A.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "url")
        try {
          new URL(t.data);
        } catch {
          i = this._getOrReturnCtx(t, i), D(i, {
            validation: "url",
            code: A.invalid_string,
            message: a.message
          }), r.dirty();
        }
      else a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(t.data) || (i = this._getOrReturnCtx(t, i), D(i, {
        validation: "regex",
        code: A.invalid_string,
        message: a.message
      }), r.dirty())) : a.kind === "trim" ? t.data = t.data.trim() : a.kind === "includes" ? t.data.includes(a.value, a.position) || (i = this._getOrReturnCtx(t, i), D(i, {
        code: A.invalid_string,
        validation: { includes: a.value, position: a.position },
        message: a.message
      }), r.dirty()) : a.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : a.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : a.kind === "startsWith" ? t.data.startsWith(a.value) || (i = this._getOrReturnCtx(t, i), D(i, {
        code: A.invalid_string,
        validation: { startsWith: a.value },
        message: a.message
      }), r.dirty()) : a.kind === "endsWith" ? t.data.endsWith(a.value) || (i = this._getOrReturnCtx(t, i), D(i, {
        code: A.invalid_string,
        validation: { endsWith: a.value },
        message: a.message
      }), r.dirty()) : a.kind === "datetime" ? Lo(a).test(t.data) || (i = this._getOrReturnCtx(t, i), D(i, {
        code: A.invalid_string,
        validation: "datetime",
        message: a.message
      }), r.dirty()) : a.kind === "date" ? Jl.test(t.data) || (i = this._getOrReturnCtx(t, i), D(i, {
        code: A.invalid_string,
        validation: "date",
        message: a.message
      }), r.dirty()) : a.kind === "time" ? Ql(a).test(t.data) || (i = this._getOrReturnCtx(t, i), D(i, {
        code: A.invalid_string,
        validation: "time",
        message: a.message
      }), r.dirty()) : a.kind === "duration" ? Hl.test(t.data) || (i = this._getOrReturnCtx(t, i), D(i, {
        validation: "duration",
        code: A.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "ip" ? Gl(t.data, a.version) || (i = this._getOrReturnCtx(t, i), D(i, {
        validation: "ip",
        code: A.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "base64" ? Kl.test(t.data) || (i = this._getOrReturnCtx(t, i), D(i, {
        validation: "base64",
        code: A.invalid_string,
        message: a.message
      }), r.dirty()) : le.assertNever(a);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((i) => t.test(i), {
      validation: n,
      code: A.invalid_string,
      ...B.errToObj(r)
    });
  }
  _addCheck(t) {
    return new kt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...B.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...B.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...B.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...B.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...B.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...B.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...B.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...B.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...B.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...B.errToObj(t) });
  }
  datetime(t) {
    var n, r;
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      offset: (n = t == null ? void 0 : t.offset) !== null && n !== void 0 ? n : !1,
      local: (r = t == null ? void 0 : t.local) !== null && r !== void 0 ? r : !1,
      ...B.errToObj(t == null ? void 0 : t.message)
    });
  }
  date(t) {
    return this._addCheck({ kind: "date", message: t });
  }
  time(t) {
    return typeof t == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: t
    }) : this._addCheck({
      kind: "time",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      ...B.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...B.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...B.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...B.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...B.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...B.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...B.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...B.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...B.errToObj(n)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(t) {
    return this.min(1, B.errToObj(t));
  }
  trim() {
    return new kt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new kt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new kt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === "base64");
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
kt.create = (e) => {
  var t;
  return new kt({
    checks: [],
    typeName: $.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...G(e)
  });
};
function Xl(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, i = n > r ? n : r, a = parseInt(e.toFixed(i).replace(".", "")), o = parseInt(t.toFixed(i).replace(".", ""));
  return a % o / Math.pow(10, i);
}
class un extends te {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== F.number) {
      const a = this._getOrReturnCtx(t);
      return D(a, {
        code: A.invalid_type,
        expected: F.number,
        received: a.parsedType
      }), q;
    }
    let r;
    const i = new He();
    for (const a of this._def.checks)
      a.kind === "int" ? le.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), D(r, {
        code: A.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), i.dirty()) : a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), D(r, {
        code: A.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), i.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), D(r, {
        code: A.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), i.dirty()) : a.kind === "multipleOf" ? Xl(t.data, a.value) !== 0 && (r = this._getOrReturnCtx(t, r), D(r, {
        code: A.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), i.dirty()) : a.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), D(r, {
        code: A.not_finite,
        message: a.message
      }), i.dirty()) : le.assertNever(a);
    return { status: i.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, B.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, B.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, B.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, B.toString(n));
  }
  setLimit(t, n, r, i) {
    return new un({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: B.toString(i)
        }
      ]
    });
  }
  _addCheck(t) {
    return new un({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: B.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: B.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: B.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: B.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: B.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: B.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: B.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: B.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: B.toString(t)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && le.isInteger(t.value));
  }
  get isFinite() {
    let t = null, n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
un.create = (e) => new un({
  checks: [],
  typeName: $.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...G(e)
});
class cn extends te {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== F.bigint) {
      const a = this._getOrReturnCtx(t);
      return D(a, {
        code: A.invalid_type,
        expected: F.bigint,
        received: a.parsedType
      }), q;
    }
    let r;
    const i = new He();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), D(r, {
        code: A.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), i.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), D(r, {
        code: A.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), i.dirty()) : a.kind === "multipleOf" ? t.data % a.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), D(r, {
        code: A.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), i.dirty()) : le.assertNever(a);
    return { status: i.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, B.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, B.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, B.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, B.toString(n));
  }
  setLimit(t, n, r, i) {
    return new cn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: B.toString(i)
        }
      ]
    });
  }
  _addCheck(t) {
    return new cn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: B.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: B.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: B.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: B.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: B.toString(n)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
cn.create = (e) => {
  var t;
  return new cn({
    checks: [],
    typeName: $.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...G(e)
  });
};
class gr extends te {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== F.boolean) {
      const r = this._getOrReturnCtx(t);
      return D(r, {
        code: A.invalid_type,
        expected: F.boolean,
        received: r.parsedType
      }), q;
    }
    return Ke(t.data);
  }
}
gr.create = (e) => new gr({
  typeName: $.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...G(e)
});
class _n extends te {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== F.date) {
      const a = this._getOrReturnCtx(t);
      return D(a, {
        code: A.invalid_type,
        expected: F.date,
        received: a.parsedType
      }), q;
    }
    if (isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return D(a, {
        code: A.invalid_date
      }), q;
    }
    const r = new He();
    let i;
    for (const a of this._def.checks)
      a.kind === "min" ? t.data.getTime() < a.value && (i = this._getOrReturnCtx(t, i), D(i, {
        code: A.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), r.dirty()) : a.kind === "max" ? t.data.getTime() > a.value && (i = this._getOrReturnCtx(t, i), D(i, {
        code: A.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), r.dirty()) : le.assertNever(a);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new _n({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: B.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: B.toString(n)
    });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
}
_n.create = (e) => new _n({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: $.ZodDate,
  ...G(e)
});
class Kr extends te {
  _parse(t) {
    if (this._getType(t) !== F.symbol) {
      const r = this._getOrReturnCtx(t);
      return D(r, {
        code: A.invalid_type,
        expected: F.symbol,
        received: r.parsedType
      }), q;
    }
    return Ke(t.data);
  }
}
Kr.create = (e) => new Kr({
  typeName: $.ZodSymbol,
  ...G(e)
});
class yr extends te {
  _parse(t) {
    if (this._getType(t) !== F.undefined) {
      const r = this._getOrReturnCtx(t);
      return D(r, {
        code: A.invalid_type,
        expected: F.undefined,
        received: r.parsedType
      }), q;
    }
    return Ke(t.data);
  }
}
yr.create = (e) => new yr({
  typeName: $.ZodUndefined,
  ...G(e)
});
class vr extends te {
  _parse(t) {
    if (this._getType(t) !== F.null) {
      const r = this._getOrReturnCtx(t);
      return D(r, {
        code: A.invalid_type,
        expected: F.null,
        received: r.parsedType
      }), q;
    }
    return Ke(t.data);
  }
}
vr.create = (e) => new vr({
  typeName: $.ZodNull,
  ...G(e)
});
class $n extends te {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Ke(t.data);
  }
}
$n.create = (e) => new $n({
  typeName: $.ZodAny,
  ...G(e)
});
class kn extends te {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Ke(t.data);
  }
}
kn.create = (e) => new kn({
  typeName: $.ZodUnknown,
  ...G(e)
});
class Yt extends te {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return D(n, {
      code: A.invalid_type,
      expected: F.never,
      received: n.parsedType
    }), q;
  }
}
Yt.create = (e) => new Yt({
  typeName: $.ZodNever,
  ...G(e)
});
class Jr extends te {
  _parse(t) {
    if (this._getType(t) !== F.undefined) {
      const r = this._getOrReturnCtx(t);
      return D(r, {
        code: A.invalid_type,
        expected: F.void,
        received: r.parsedType
      }), q;
    }
    return Ke(t.data);
  }
}
Jr.create = (e) => new Jr({
  typeName: $.ZodVoid,
  ...G(e)
});
class _t extends te {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), i = this._def;
    if (n.parsedType !== F.array)
      return D(n, {
        code: A.invalid_type,
        expected: F.array,
        received: n.parsedType
      }), q;
    if (i.exactLength !== null) {
      const o = n.data.length > i.exactLength.value, s = n.data.length < i.exactLength.value;
      (o || s) && (D(n, {
        code: o ? A.too_big : A.too_small,
        minimum: s ? i.exactLength.value : void 0,
        maximum: o ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), r.dirty());
    }
    if (i.minLength !== null && n.data.length < i.minLength.value && (D(n, {
      code: A.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), r.dirty()), i.maxLength !== null && n.data.length > i.maxLength.value && (D(n, {
      code: A.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((o, s) => i.type._parseAsync(new zt(n, o, n.path, s)))).then((o) => He.mergeArray(r, o));
    const a = [...n.data].map((o, s) => i.type._parseSync(new zt(n, o, n.path, s)));
    return He.mergeArray(r, a);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new _t({
      ...this._def,
      minLength: { value: t, message: B.toString(n) }
    });
  }
  max(t, n) {
    return new _t({
      ...this._def,
      maxLength: { value: t, message: B.toString(n) }
    });
  }
  length(t, n) {
    return new _t({
      ...this._def,
      exactLength: { value: t, message: B.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
_t.create = (e, t) => new _t({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: $.ZodArray,
  ...G(t)
});
function Dn(e) {
  if (e instanceof Oe) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = Lt.create(Dn(r));
    }
    return new Oe({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof _t ? new _t({
    ...e._def,
    type: Dn(e.element)
  }) : e instanceof Lt ? Lt.create(Dn(e.unwrap())) : e instanceof fn ? fn.create(Dn(e.unwrap())) : e instanceof Dt ? Dt.create(e.items.map((t) => Dn(t))) : e;
}
class Oe extends te {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = le.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== F.object) {
      const u = this._getOrReturnCtx(t);
      return D(u, {
        code: A.invalid_type,
        expected: F.object,
        received: u.parsedType
      }), q;
    }
    const { status: r, ctx: i } = this._processInputParams(t), { shape: a, keys: o } = this._getCached(), s = [];
    if (!(this._def.catchall instanceof Yt && this._def.unknownKeys === "strip"))
      for (const u in i.data)
        o.includes(u) || s.push(u);
    const l = [];
    for (const u of o) {
      const c = a[u], f = i.data[u];
      l.push({
        key: { status: "valid", value: u },
        value: c._parse(new zt(i, f, i.path, u)),
        alwaysSet: u in i.data
      });
    }
    if (this._def.catchall instanceof Yt) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const c of s)
          l.push({
            key: { status: "valid", value: c },
            value: { status: "valid", value: i.data[c] }
          });
      else if (u === "strict")
        s.length > 0 && (D(i, {
          code: A.unrecognized_keys,
          keys: s
        }), r.dirty());
      else if (u !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const c of s) {
        const f = i.data[c];
        l.push({
          key: { status: "valid", value: c },
          value: u._parse(
            new zt(i, f, i.path, c)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: c in i.data
        });
      }
    }
    return i.common.async ? Promise.resolve().then(async () => {
      const u = [];
      for (const c of l) {
        const f = await c.key, m = await c.value;
        u.push({
          key: f,
          value: m,
          alwaysSet: c.alwaysSet
        });
      }
      return u;
    }).then((u) => He.mergeObjectSync(r, u)) : He.mergeObjectSync(r, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return B.errToObj, new Oe({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          var i, a, o, s;
          const l = (o = (a = (i = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(i, n, r).message) !== null && o !== void 0 ? o : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (s = B.errToObj(t).message) !== null && s !== void 0 ? s : l
          } : {
            message: l
          };
        }
      } : {}
    });
  }
  strip() {
    return new Oe({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Oe({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(t) {
    return new Oe({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...t
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(t) {
    return new Oe({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: $.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(t) {
    return new Oe({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    return le.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new Oe({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return le.objectKeys(this.shape).forEach((r) => {
      t[r] || (n[r] = this.shape[r]);
    }), new Oe({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Dn(this);
  }
  partial(t) {
    const n = {};
    return le.objectKeys(this.shape).forEach((r) => {
      const i = this.shape[r];
      t && !t[r] ? n[r] = i : n[r] = i.optional();
    }), new Oe({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return le.objectKeys(this.shape).forEach((r) => {
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let a = this.shape[r];
        for (; a instanceof Lt; )
          a = a._def.innerType;
        n[r] = a;
      }
    }), new Oe({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return zo(le.objectKeys(this.shape));
  }
}
Oe.create = (e, t) => new Oe({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Yt.create(),
  typeName: $.ZodObject,
  ...G(t)
});
Oe.strictCreate = (e, t) => new Oe({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Yt.create(),
  typeName: $.ZodObject,
  ...G(t)
});
Oe.lazycreate = (e, t) => new Oe({
  shape: e,
  unknownKeys: "strip",
  catchall: Yt.create(),
  typeName: $.ZodObject,
  ...G(t)
});
class xr extends te {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function i(a) {
      for (const s of a)
        if (s.result.status === "valid")
          return s.result;
      for (const s of a)
        if (s.result.status === "dirty")
          return n.common.issues.push(...s.ctx.common.issues), s.result;
      const o = a.map((s) => new ot(s.ctx.common.issues));
      return D(n, {
        code: A.invalid_union,
        unionErrors: o
      }), q;
    }
    if (n.common.async)
      return Promise.all(r.map(async (a) => {
        const o = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await a._parseAsync({
            data: n.data,
            path: n.path,
            parent: o
          }),
          ctx: o
        };
      })).then(i);
    {
      let a;
      const o = [];
      for (const l of r) {
        const u = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        }, c = l._parseSync({
          data: n.data,
          path: n.path,
          parent: u
        });
        if (c.status === "valid")
          return c;
        c.status === "dirty" && !a && (a = { result: c, ctx: u }), u.common.issues.length && o.push(u.common.issues);
      }
      if (a)
        return n.common.issues.push(...a.ctx.common.issues), a.result;
      const s = o.map((l) => new ot(l));
      return D(n, {
        code: A.invalid_union,
        unionErrors: s
      }), q;
    }
  }
  get options() {
    return this._def.options;
  }
}
xr.create = (e, t) => new xr({
  options: e,
  typeName: $.ZodUnion,
  ...G(t)
});
const Ut = (e) => e instanceof kr ? Ut(e.schema) : e instanceof St ? Ut(e.innerType()) : e instanceof _r ? [e.value] : e instanceof dn ? e.options : e instanceof Sr ? le.objectValues(e.enum) : e instanceof Cr ? Ut(e._def.innerType) : e instanceof yr ? [void 0] : e instanceof vr ? [null] : e instanceof Lt ? [void 0, ...Ut(e.unwrap())] : e instanceof fn ? [null, ...Ut(e.unwrap())] : e instanceof Ki || e instanceof Or ? Ut(e.unwrap()) : e instanceof Er ? Ut(e._def.innerType) : [];
class ni extends te {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== F.object)
      return D(n, {
        code: A.invalid_type,
        expected: F.object,
        received: n.parsedType
      }), q;
    const r = this.discriminator, i = n.data[r], a = this.optionsMap.get(i);
    return a ? n.common.async ? a._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : a._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (D(n, {
      code: A.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), q);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(t, n, r) {
    const i = /* @__PURE__ */ new Map();
    for (const a of n) {
      const o = Ut(a.shape[t]);
      if (!o.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const s of o) {
        if (i.has(s))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(s)}`);
        i.set(s, a);
      }
    }
    return new ni({
      typeName: $.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: i,
      ...G(r)
    });
  }
}
function Li(e, t) {
  const n = sn(e), r = sn(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === F.object && r === F.object) {
    const i = le.objectKeys(t), a = le.objectKeys(e).filter((s) => i.indexOf(s) !== -1), o = { ...e, ...t };
    for (const s of a) {
      const l = Li(e[s], t[s]);
      if (!l.valid)
        return { valid: !1 };
      o[s] = l.data;
    }
    return { valid: !0, data: o };
  } else if (n === F.array && r === F.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const i = [];
    for (let a = 0; a < e.length; a++) {
      const o = e[a], s = t[a], l = Li(o, s);
      if (!l.valid)
        return { valid: !1 };
      i.push(l.data);
    }
    return { valid: !0, data: i };
  } else return n === F.date && r === F.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class br extends te {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), i = (a, o) => {
      if (Mi(a) || Mi(o))
        return q;
      const s = Li(a.value, o.value);
      return s.valid ? ((Ri(a) || Ri(o)) && n.dirty(), { status: n.value, value: s.data }) : (D(r, {
        code: A.invalid_intersection_types
      }), q);
    };
    return r.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }),
      this._def.right._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      })
    ]).then(([a, o]) => i(a, o)) : i(this._def.left._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }));
  }
}
br.create = (e, t, n) => new br({
  left: e,
  right: t,
  typeName: $.ZodIntersection,
  ...G(n)
});
class Dt extends te {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== F.array)
      return D(r, {
        code: A.invalid_type,
        expected: F.array,
        received: r.parsedType
      }), q;
    if (r.data.length < this._def.items.length)
      return D(r, {
        code: A.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), q;
    !this._def.rest && r.data.length > this._def.items.length && (D(r, {
      code: A.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const a = [...r.data].map((o, s) => {
      const l = this._def.items[s] || this._def.rest;
      return l ? l._parse(new zt(r, o, r.path, s)) : null;
    }).filter((o) => !!o);
    return r.common.async ? Promise.all(a).then((o) => He.mergeArray(n, o)) : He.mergeArray(n, a);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Dt({
      ...this._def,
      rest: t
    });
  }
}
Dt.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Dt({
    items: e,
    typeName: $.ZodTuple,
    rest: null,
    ...G(t)
  });
};
class wr extends te {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== F.object)
      return D(r, {
        code: A.invalid_type,
        expected: F.object,
        received: r.parsedType
      }), q;
    const i = [], a = this._def.keyType, o = this._def.valueType;
    for (const s in r.data)
      i.push({
        key: a._parse(new zt(r, s, r.path, s)),
        value: o._parse(new zt(r, r.data[s], r.path, s)),
        alwaysSet: s in r.data
      });
    return r.common.async ? He.mergeObjectAsync(n, i) : He.mergeObjectSync(n, i);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof te ? new wr({
      keyType: t,
      valueType: n,
      typeName: $.ZodRecord,
      ...G(r)
    }) : new wr({
      keyType: kt.create(),
      valueType: t,
      typeName: $.ZodRecord,
      ...G(n)
    });
  }
}
class Qr extends te {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== F.map)
      return D(r, {
        code: A.invalid_type,
        expected: F.map,
        received: r.parsedType
      }), q;
    const i = this._def.keyType, a = this._def.valueType, o = [...r.data.entries()].map(([s, l], u) => ({
      key: i._parse(new zt(r, s, r.path, [u, "key"])),
      value: a._parse(new zt(r, l, r.path, [u, "value"]))
    }));
    if (r.common.async) {
      const s = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of o) {
          const u = await l.key, c = await l.value;
          if (u.status === "aborted" || c.status === "aborted")
            return q;
          (u.status === "dirty" || c.status === "dirty") && n.dirty(), s.set(u.value, c.value);
        }
        return { status: n.value, value: s };
      });
    } else {
      const s = /* @__PURE__ */ new Map();
      for (const l of o) {
        const u = l.key, c = l.value;
        if (u.status === "aborted" || c.status === "aborted")
          return q;
        (u.status === "dirty" || c.status === "dirty") && n.dirty(), s.set(u.value, c.value);
      }
      return { status: n.value, value: s };
    }
  }
}
Qr.create = (e, t, n) => new Qr({
  valueType: t,
  keyType: e,
  typeName: $.ZodMap,
  ...G(n)
});
class Sn extends te {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== F.set)
      return D(r, {
        code: A.invalid_type,
        expected: F.set,
        received: r.parsedType
      }), q;
    const i = this._def;
    i.minSize !== null && r.data.size < i.minSize.value && (D(r, {
      code: A.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), n.dirty()), i.maxSize !== null && r.data.size > i.maxSize.value && (D(r, {
      code: A.too_big,
      maximum: i.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.maxSize.message
    }), n.dirty());
    const a = this._def.valueType;
    function o(l) {
      const u = /* @__PURE__ */ new Set();
      for (const c of l) {
        if (c.status === "aborted")
          return q;
        c.status === "dirty" && n.dirty(), u.add(c.value);
      }
      return { status: n.value, value: u };
    }
    const s = [...r.data.values()].map((l, u) => a._parse(new zt(r, l, r.path, u)));
    return r.common.async ? Promise.all(s).then((l) => o(l)) : o(s);
  }
  min(t, n) {
    return new Sn({
      ...this._def,
      minSize: { value: t, message: B.toString(n) }
    });
  }
  max(t, n) {
    return new Sn({
      ...this._def,
      maxSize: { value: t, message: B.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Sn.create = (e, t) => new Sn({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: $.ZodSet,
  ...G(t)
});
class Vn extends te {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== F.function)
      return D(n, {
        code: A.invalid_type,
        expected: F.function,
        received: n.parsedType
      }), q;
    function r(s, l) {
      return qr({
        data: s,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Wr(),
          Hn
        ].filter((u) => !!u),
        issueData: {
          code: A.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function i(s, l) {
      return qr({
        data: s,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Wr(),
          Hn
        ].filter((u) => !!u),
        issueData: {
          code: A.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const a = { errorMap: n.common.contextualErrorMap }, o = n.data;
    if (this._def.returns instanceof Wn) {
      const s = this;
      return Ke(async function(...l) {
        const u = new ot([]), c = await s._def.args.parseAsync(l, a).catch((h) => {
          throw u.addIssue(r(l, h)), u;
        }), f = await Reflect.apply(o, this, c);
        return await s._def.returns._def.type.parseAsync(f, a).catch((h) => {
          throw u.addIssue(i(f, h)), u;
        });
      });
    } else {
      const s = this;
      return Ke(function(...l) {
        const u = s._def.args.safeParse(l, a);
        if (!u.success)
          throw new ot([r(l, u.error)]);
        const c = Reflect.apply(o, this, u.data), f = s._def.returns.safeParse(c, a);
        if (!f.success)
          throw new ot([i(c, f.error)]);
        return f.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new Vn({
      ...this._def,
      args: Dt.create(t).rest(kn.create())
    });
  }
  returns(t) {
    return new Vn({
      ...this._def,
      returns: t
    });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, n, r) {
    return new Vn({
      args: t || Dt.create([]).rest(kn.create()),
      returns: n || kn.create(),
      typeName: $.ZodFunction,
      ...G(r)
    });
  }
}
class kr extends te {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
kr.create = (e, t) => new kr({
  getter: e,
  typeName: $.ZodLazy,
  ...G(t)
});
class _r extends te {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return D(n, {
        received: n.data,
        code: A.invalid_literal,
        expected: this._def.value
      }), q;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
_r.create = (e, t) => new _r({
  value: e,
  typeName: $.ZodLiteral,
  ...G(t)
});
function zo(e, t) {
  return new dn({
    values: e,
    typeName: $.ZodEnum,
    ...G(t)
  });
}
class dn extends te {
  constructor() {
    super(...arguments), ir.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return D(n, {
        expected: le.joinValues(r),
        received: n.parsedType,
        code: A.invalid_type
      }), q;
    }
    if (Yr(this, ir) || Ao(this, ir, new Set(this._def.values)), !Yr(this, ir).has(t.data)) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return D(n, {
        received: n.data,
        code: A.invalid_enum_value,
        options: r
      }), q;
    }
    return Ke(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  extract(t, n = this._def) {
    return dn.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return dn.create(this.options.filter((r) => !t.includes(r)), {
      ...this._def,
      ...n
    });
  }
}
ir = /* @__PURE__ */ new WeakMap();
dn.create = zo;
class Sr extends te {
  constructor() {
    super(...arguments), ar.set(this, void 0);
  }
  _parse(t) {
    const n = le.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== F.string && r.parsedType !== F.number) {
      const i = le.objectValues(n);
      return D(r, {
        expected: le.joinValues(i),
        received: r.parsedType,
        code: A.invalid_type
      }), q;
    }
    if (Yr(this, ar) || Ao(this, ar, new Set(le.getValidEnumValues(this._def.values))), !Yr(this, ar).has(t.data)) {
      const i = le.objectValues(n);
      return D(r, {
        received: r.data,
        code: A.invalid_enum_value,
        options: i
      }), q;
    }
    return Ke(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
ar = /* @__PURE__ */ new WeakMap();
Sr.create = (e, t) => new Sr({
  values: e,
  typeName: $.ZodNativeEnum,
  ...G(t)
});
class Wn extends te {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== F.promise && n.common.async === !1)
      return D(n, {
        code: A.invalid_type,
        expected: F.promise,
        received: n.parsedType
      }), q;
    const r = n.parsedType === F.promise ? n.data : Promise.resolve(n.data);
    return Ke(r.then((i) => this._def.type.parseAsync(i, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
Wn.create = (e, t) => new Wn({
  type: e,
  typeName: $.ZodPromise,
  ...G(t)
});
class St extends te {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === $.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), i = this._def.effect || null, a = {
      addIssue: (o) => {
        D(r, o), o.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (a.addIssue = a.addIssue.bind(a), i.type === "preprocess") {
      const o = i.transform(r.data, a);
      if (r.common.async)
        return Promise.resolve(o).then(async (s) => {
          if (n.value === "aborted")
            return q;
          const l = await this._def.schema._parseAsync({
            data: s,
            path: r.path,
            parent: r
          });
          return l.status === "aborted" ? q : l.status === "dirty" || n.value === "dirty" ? Bn(l.value) : l;
        });
      {
        if (n.value === "aborted")
          return q;
        const s = this._def.schema._parseSync({
          data: o,
          path: r.path,
          parent: r
        });
        return s.status === "aborted" ? q : s.status === "dirty" || n.value === "dirty" ? Bn(s.value) : s;
      }
    }
    if (i.type === "refinement") {
      const o = (s) => {
        const l = i.refinement(s, a);
        if (r.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return s;
      };
      if (r.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return s.status === "aborted" ? q : (s.status === "dirty" && n.dirty(), o(s.value), { status: n.value, value: s.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => s.status === "aborted" ? q : (s.status === "dirty" && n.dirty(), o(s.value).then(() => ({ status: n.value, value: s.value }))));
    }
    if (i.type === "transform")
      if (r.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!pr(o))
          return o;
        const s = i.transform(o.value, a);
        if (s instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: s };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((o) => pr(o) ? Promise.resolve(i.transform(o.value, a)).then((s) => ({ status: n.value, value: s })) : o);
    le.assertNever(i);
  }
}
St.create = (e, t, n) => new St({
  schema: e,
  typeName: $.ZodEffects,
  effect: t,
  ...G(n)
});
St.createWithPreprocess = (e, t, n) => new St({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: $.ZodEffects,
  ...G(n)
});
class Lt extends te {
  _parse(t) {
    return this._getType(t) === F.undefined ? Ke(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Lt.create = (e, t) => new Lt({
  innerType: e,
  typeName: $.ZodOptional,
  ...G(t)
});
class fn extends te {
  _parse(t) {
    return this._getType(t) === F.null ? Ke(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
fn.create = (e, t) => new fn({
  innerType: e,
  typeName: $.ZodNullable,
  ...G(t)
});
class Cr extends te {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return n.parsedType === F.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Cr.create = (e, t) => new Cr({
  innerType: e,
  typeName: $.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...G(t)
});
class Er extends te {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    }, i = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return mr(i) ? i.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new ot(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new ot(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Er.create = (e, t) => new Er({
  innerType: e,
  typeName: $.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...G(t)
});
class Gr extends te {
  _parse(t) {
    if (this._getType(t) !== F.nan) {
      const r = this._getOrReturnCtx(t);
      return D(r, {
        code: A.invalid_type,
        expected: F.nan,
        received: r.parsedType
      }), q;
    }
    return { status: "valid", value: t.data };
  }
}
Gr.create = (e) => new Gr({
  typeName: $.ZodNaN,
  ...G(e)
});
const eu = Symbol("zod_brand");
class Ki extends te {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = n.data;
    return this._def.type._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class Pr extends te {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? q : a.status === "dirty" ? (n.dirty(), Bn(a.value)) : this._def.out._parseAsync({
          data: a.value,
          path: r.path,
          parent: r
        });
      })();
    {
      const i = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return i.status === "aborted" ? q : i.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: i.value
      }) : this._def.out._parseSync({
        data: i.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(t, n) {
    return new Pr({
      in: t,
      out: n,
      typeName: $.ZodPipeline
    });
  }
}
class Or extends te {
  _parse(t) {
    const n = this._def.innerType._parse(t), r = (i) => (pr(i) && (i.value = Object.freeze(i.value)), i);
    return mr(n) ? n.then((i) => r(i)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Or.create = (e, t) => new Or({
  innerType: e,
  typeName: $.ZodReadonly,
  ...G(t)
});
function Do(e, t = {}, n) {
  return e ? $n.create().superRefine((r, i) => {
    var a, o;
    if (!e(r)) {
      const s = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, l = (o = (a = s.fatal) !== null && a !== void 0 ? a : n) !== null && o !== void 0 ? o : !0, u = typeof s == "string" ? { message: s } : s;
      i.addIssue({ code: "custom", ...u, fatal: l });
    }
  }) : $n.create();
}
const tu = {
  object: Oe.lazycreate
};
var $;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})($ || ($ = {}));
const nu = (e, t = {
  message: `Input not instance of ${e.name}`
}) => Do((n) => n instanceof e, t), Fo = kt.create, Bo = un.create, ru = Gr.create, iu = cn.create, Vo = gr.create, au = _n.create, ou = Kr.create, su = yr.create, lu = vr.create, uu = $n.create, cu = kn.create, du = Yt.create, fu = Jr.create, hu = _t.create, pu = Oe.create, mu = Oe.strictCreate, gu = xr.create, yu = ni.create, vu = br.create, xu = Dt.create, bu = wr.create, wu = Qr.create, ku = Sn.create, _u = Vn.create, Su = kr.create, Cu = _r.create, Eu = dn.create, Ou = Sr.create, Tu = Wn.create, Ca = St.create, ju = Lt.create, Pu = fn.create, Iu = St.createWithPreprocess, Nu = Pr.create, Au = () => Fo().optional(), Mu = () => Bo().optional(), Ru = () => Vo().optional(), Lu = {
  string: (e) => kt.create({ ...e, coerce: !0 }),
  number: (e) => un.create({ ...e, coerce: !0 }),
  boolean: (e) => gr.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => cn.create({ ...e, coerce: !0 }),
  date: (e) => _n.create({ ...e, coerce: !0 })
}, zu = q;
var vn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Hn,
  setErrorMap: zl,
  getErrorMap: Wr,
  makeIssue: qr,
  EMPTY_PATH: Dl,
  addIssueToContext: D,
  ParseStatus: He,
  INVALID: q,
  DIRTY: Bn,
  OK: Ke,
  isAborted: Mi,
  isDirty: Ri,
  isValid: pr,
  isAsync: mr,
  get util() {
    return le;
  },
  get objectUtil() {
    return Ai;
  },
  ZodParsedType: F,
  getParsedType: sn,
  ZodType: te,
  datetimeRegex: Lo,
  ZodString: kt,
  ZodNumber: un,
  ZodBigInt: cn,
  ZodBoolean: gr,
  ZodDate: _n,
  ZodSymbol: Kr,
  ZodUndefined: yr,
  ZodNull: vr,
  ZodAny: $n,
  ZodUnknown: kn,
  ZodNever: Yt,
  ZodVoid: Jr,
  ZodArray: _t,
  ZodObject: Oe,
  ZodUnion: xr,
  ZodDiscriminatedUnion: ni,
  ZodIntersection: br,
  ZodTuple: Dt,
  ZodRecord: wr,
  ZodMap: Qr,
  ZodSet: Sn,
  ZodFunction: Vn,
  ZodLazy: kr,
  ZodLiteral: _r,
  ZodEnum: dn,
  ZodNativeEnum: Sr,
  ZodPromise: Wn,
  ZodEffects: St,
  ZodTransformer: St,
  ZodOptional: Lt,
  ZodNullable: fn,
  ZodDefault: Cr,
  ZodCatch: Er,
  ZodNaN: Gr,
  BRAND: eu,
  ZodBranded: Ki,
  ZodPipeline: Pr,
  ZodReadonly: Or,
  custom: Do,
  Schema: te,
  ZodSchema: te,
  late: tu,
  get ZodFirstPartyTypeKind() {
    return $;
  },
  coerce: Lu,
  any: uu,
  array: hu,
  bigint: iu,
  boolean: Vo,
  date: au,
  discriminatedUnion: yu,
  effect: Ca,
  enum: Eu,
  function: _u,
  instanceof: nu,
  intersection: vu,
  lazy: Su,
  literal: Cu,
  map: wu,
  nan: ru,
  nativeEnum: Ou,
  never: du,
  null: lu,
  nullable: Pu,
  number: Bo,
  object: pu,
  oboolean: Ru,
  onumber: Mu,
  optional: ju,
  ostring: Au,
  pipeline: Nu,
  preprocess: Iu,
  promise: Tu,
  record: bu,
  set: ku,
  strictObject: mu,
  string: Fo,
  symbol: ou,
  transformer: Ca,
  tuple: xu,
  undefined: su,
  union: gu,
  unknown: cu,
  void: fu,
  NEVER: zu,
  ZodIssueCode: A,
  quotelessJson: Ll,
  ZodError: ot
});
const Du = "https://api.emberai.xyz/v1/", Fu = vn.object({
  status: vn.union([
    vn.literal("done"),
    vn.literal("processing"),
    vn.literal("error")
  ]),
  message: vn.string(),
  sign_tx_url: vn.string().nullable()
}), Bu = async (e, t) => {
  console.log(`

---

request:`), console.log(e);
  const n = await fetch(Du + "chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${e.secret}`
    },
    body: JSON.stringify({
      user_id: e.fid,
      message: e.inputText,
      username: e.username
    })
  });
  if (console.log(`

---

response:`), console.log(n), console.log("response.body"), console.log(n.body), !n.ok || n.body == null)
    throw new Error("Failed to connect to Ember server");
  const r = n.body.getReader(), i = new TextDecoder();
  for (; ; ) {
    const { done: a, value: o } = await r.read(), { event: s, rawData: l } = Vu(i.decode(o));
    if (a && s !== "done")
      throw new Error("Invalid response");
    if (l == null)
      continue;
    const u = await Fu.safeParseAsync(JSON.parse(l));
    if (!u.success)
      throw new Error("Invalid response");
    const c = u.data;
    let f = new Event("none");
    switch (s === "activity" && (f = new CustomEvent("activity", {
      detail: {
        message: c.message,
        sign_tx_url: c.sign_tx_url
      }
    })), s) {
      case "done":
        return r.cancel(), c;
      case "activity":
        t.dispatchEvent(f);
        continue;
      case "error":
        return `Error: ${c.message}`;
      default:
        throw new Error("Invalid response");
    }
  }
};
function Vu(e) {
  const t = e.split(`
`);
  let n, r;
  for (const i of t)
    i.startsWith("event: ") ? n = i.substring(7).trim() : i.startsWith("data: ") && (r = i.substring(6));
  return { event: n, rawData: r };
}
function Uu(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const Zu = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Hu = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, $u = {};
function Ea(e, t) {
  return ($u.jsx ? Hu : Zu).test(e);
}
const Wu = /[ \t\n\f\r]/g;
function qu(e) {
  return typeof e == "object" ? e.type === "text" ? Oa(e.value) : !1 : Oa(e);
}
function Oa(e) {
  return e.replace(Wu, "") === "";
}
class Ir {
  /**
   * @constructor
   * @param {Properties} property
   * @param {Normal} normal
   * @param {string} [space]
   */
  constructor(t, n, r) {
    this.property = t, this.normal = n, r && (this.space = r);
  }
}
Ir.prototype.property = {};
Ir.prototype.normal = {};
Ir.prototype.space = null;
function Uo(e, t) {
  const n = {}, r = {};
  let i = -1;
  for (; ++i < e.length; )
    Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
  return new Ir(n, r, t);
}
function zi(e) {
  return e.toLowerCase();
}
class ft {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   */
  constructor(t, n) {
    this.property = t, this.attribute = n;
  }
}
ft.prototype.space = null;
ft.prototype.boolean = !1;
ft.prototype.booleanish = !1;
ft.prototype.overloadedBoolean = !1;
ft.prototype.number = !1;
ft.prototype.commaSeparated = !1;
ft.prototype.spaceSeparated = !1;
ft.prototype.commaOrSpaceSeparated = !1;
ft.prototype.mustUseProperty = !1;
ft.prototype.defined = !1;
let Yu = 0;
const Q = En(), Ne = En(), Zo = En(), M = En(), be = En(), Un = En(), rt = En();
function En() {
  return 2 ** ++Yu;
}
const Di = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: Q,
  booleanish: Ne,
  commaOrSpaceSeparated: rt,
  commaSeparated: Un,
  number: M,
  overloadedBoolean: Zo,
  spaceSeparated: be
}, Symbol.toStringTag, { value: "Module" })), yi = Object.keys(Di);
class Ji extends ft {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number|null} [mask]
   * @param {string} [space]
   */
  constructor(t, n, r, i) {
    let a = -1;
    if (super(t, n), Ta(this, "space", i), typeof r == "number")
      for (; ++a < yi.length; ) {
        const o = yi[a];
        Ta(this, yi[a], (r & Di[o]) === Di[o]);
      }
  }
}
Ji.prototype.defined = !0;
function Ta(e, t, n) {
  n && (e[t] = n);
}
const Ku = {}.hasOwnProperty;
function qn(e) {
  const t = {}, n = {};
  let r;
  for (r in e.properties)
    if (Ku.call(e.properties, r)) {
      const i = e.properties[r], a = new Ji(
        r,
        e.transform(e.attributes || {}, r),
        i,
        e.space
      );
      e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0), t[r] = a, n[zi(r)] = r, n[zi(a.attribute)] = r;
    }
  return new Ir(t, n, e.space);
}
const Ho = qn({
  space: "xlink",
  transform(e, t) {
    return "xlink:" + t.slice(5).toLowerCase();
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
}), $o = qn({
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function Wo(e, t) {
  return t in e ? e[t] : t;
}
function qo(e, t) {
  return Wo(e, t.toLowerCase());
}
const Yo = qn({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: qo,
  properties: { xmlns: null, xmlnsXLink: null }
}), Ko = qn({
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Ne,
    ariaAutoComplete: null,
    ariaBusy: Ne,
    ariaChecked: Ne,
    ariaColCount: M,
    ariaColIndex: M,
    ariaColSpan: M,
    ariaControls: be,
    ariaCurrent: null,
    ariaDescribedBy: be,
    ariaDetails: null,
    ariaDisabled: Ne,
    ariaDropEffect: be,
    ariaErrorMessage: null,
    ariaExpanded: Ne,
    ariaFlowTo: be,
    ariaGrabbed: Ne,
    ariaHasPopup: null,
    ariaHidden: Ne,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: be,
    ariaLevel: M,
    ariaLive: null,
    ariaModal: Ne,
    ariaMultiLine: Ne,
    ariaMultiSelectable: Ne,
    ariaOrientation: null,
    ariaOwns: be,
    ariaPlaceholder: null,
    ariaPosInSet: M,
    ariaPressed: Ne,
    ariaReadOnly: Ne,
    ariaRelevant: null,
    ariaRequired: Ne,
    ariaRoleDescription: be,
    ariaRowCount: M,
    ariaRowIndex: M,
    ariaRowSpan: M,
    ariaSelected: Ne,
    ariaSetSize: M,
    ariaSort: null,
    ariaValueMax: M,
    ariaValueMin: M,
    ariaValueNow: M,
    ariaValueText: null,
    role: null
  }
}), Ju = qn({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: qo,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: Un,
    acceptCharset: be,
    accessKey: be,
    action: null,
    allow: null,
    allowFullScreen: Q,
    allowPaymentRequest: Q,
    allowUserMedia: Q,
    alt: null,
    as: null,
    async: Q,
    autoCapitalize: null,
    autoComplete: be,
    autoFocus: Q,
    autoPlay: Q,
    blocking: be,
    capture: null,
    charSet: null,
    checked: Q,
    cite: null,
    className: be,
    cols: M,
    colSpan: null,
    content: null,
    contentEditable: Ne,
    controls: Q,
    controlsList: be,
    coords: M | Un,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: Q,
    defer: Q,
    dir: null,
    dirName: null,
    disabled: Q,
    download: Zo,
    draggable: Ne,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: Q,
    formTarget: null,
    headers: be,
    height: M,
    hidden: Q,
    high: M,
    href: null,
    hrefLang: null,
    htmlFor: be,
    httpEquiv: be,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: Q,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: Q,
    itemId: null,
    itemProp: be,
    itemRef: be,
    itemScope: Q,
    itemType: be,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: Q,
    low: M,
    manifest: null,
    max: null,
    maxLength: M,
    media: null,
    method: null,
    min: null,
    minLength: M,
    multiple: Q,
    muted: Q,
    name: null,
    nonce: null,
    noModule: Q,
    noValidate: Q,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: Q,
    optimum: M,
    pattern: null,
    ping: be,
    placeholder: null,
    playsInline: Q,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: Q,
    referrerPolicy: null,
    rel: be,
    required: Q,
    reversed: Q,
    rows: M,
    rowSpan: M,
    sandbox: be,
    scope: null,
    scoped: Q,
    seamless: Q,
    selected: Q,
    shadowRootClonable: Q,
    shadowRootDelegatesFocus: Q,
    shadowRootMode: null,
    shape: null,
    size: M,
    sizes: null,
    slot: null,
    span: M,
    spellCheck: Ne,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: M,
    step: null,
    style: null,
    tabIndex: M,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: Q,
    useMap: null,
    value: Ne,
    width: M,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: be,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: M,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: M,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: Q,
    // Lists. Use CSS to reduce space between items instead
    declare: Q,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: M,
    // `<img>` and `<object>`
    leftMargin: M,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: M,
    // `<body>`
    marginWidth: M,
    // `<body>`
    noResize: Q,
    // `<frame>`
    noHref: Q,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: Q,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: Q,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: M,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: Ne,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: M,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: M,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: Q,
    disableRemotePlayback: Q,
    prefix: null,
    property: null,
    results: M,
    security: null,
    unselectable: null
  }
}), Qu = qn({
  space: "svg",
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  transform: Wo,
  properties: {
    about: rt,
    accentHeight: M,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: M,
    amplitude: M,
    arabicForm: null,
    ascent: M,
    attributeName: null,
    attributeType: null,
    azimuth: M,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: M,
    by: null,
    calcMode: null,
    capHeight: M,
    className: be,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: M,
    diffuseConstant: M,
    direction: null,
    display: null,
    dur: null,
    divisor: M,
    dominantBaseline: null,
    download: Q,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: M,
    enableBackground: null,
    end: null,
    event: null,
    exponent: M,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: M,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: Un,
    g2: Un,
    glyphName: Un,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: M,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: M,
    horizOriginX: M,
    horizOriginY: M,
    id: null,
    ideographic: M,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: M,
    k: M,
    k1: M,
    k2: M,
    k3: M,
    k4: M,
    kernelMatrix: rt,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: M,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: M,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: M,
    overlineThickness: M,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: M,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: be,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: M,
    pointsAtY: M,
    pointsAtZ: M,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: rt,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: rt,
    rev: rt,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: rt,
    requiredFeatures: rt,
    requiredFonts: rt,
    requiredFormats: rt,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: M,
    specularExponent: M,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: M,
    strikethroughThickness: M,
    string: null,
    stroke: null,
    strokeDashArray: rt,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: M,
    strokeOpacity: M,
    strokeWidth: null,
    style: null,
    surfaceScale: M,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: rt,
    tabIndex: M,
    tableValues: null,
    target: null,
    targetX: M,
    targetY: M,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: rt,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: M,
    underlineThickness: M,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: M,
    values: null,
    vAlphabetic: M,
    vMathematical: M,
    vectorEffect: null,
    vHanging: M,
    vIdeographic: M,
    version: null,
    vertAdvY: M,
    vertOriginX: M,
    vertOriginY: M,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: M,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
}), Gu = /^data[-\w.:]+$/i, ja = /-[a-z]/g, Xu = /[A-Z]/g;
function ec(e, t) {
  const n = zi(t);
  let r = t, i = ft;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && Gu.test(t)) {
    if (t.charAt(4) === "-") {
      const a = t.slice(5).replace(ja, nc);
      r = "data" + a.charAt(0).toUpperCase() + a.slice(1);
    } else {
      const a = t.slice(4);
      if (!ja.test(a)) {
        let o = a.replace(Xu, tc);
        o.charAt(0) !== "-" && (o = "-" + o), t = "data" + o;
      }
    }
    i = Ji;
  }
  return new i(r, t);
}
function tc(e) {
  return "-" + e.toLowerCase();
}
function nc(e) {
  return e.charAt(1).toUpperCase();
}
const rc = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, ic = Uo([$o, Ho, Yo, Ko, Ju], "html"), Qi = Uo([$o, Ho, Yo, Ko, Qu], "svg");
function ac(e) {
  return e.join(" ").trim();
}
var Jo = {}, Pa = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, oc = /\n/g, sc = /^\s*/, lc = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, uc = /^:\s*/, cc = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, dc = /^[;\s]*/, fc = /^\s+|\s+$/g, hc = `
`, Ia = "/", Na = "*", wn = "", pc = "comment", mc = "declaration", gc = function(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var n = 1, r = 1;
  function i(x) {
    var E = x.match(oc);
    E && (n += E.length);
    var R = x.lastIndexOf(hc);
    r = ~R ? x.length - R : r + x.length;
  }
  function a() {
    var x = { line: n, column: r };
    return function(E) {
      return E.position = new o(x), u(), E;
    };
  }
  function o(x) {
    this.start = x, this.end = { line: n, column: r }, this.source = t.source;
  }
  o.prototype.content = e;
  function s(x) {
    var E = new Error(
      t.source + ":" + n + ":" + r + ": " + x
    );
    if (E.reason = x, E.filename = t.source, E.line = n, E.column = r, E.source = e, !t.silent) throw E;
  }
  function l(x) {
    var E = x.exec(e);
    if (E) {
      var R = E[0];
      return i(R), e = e.slice(R.length), E;
    }
  }
  function u() {
    l(sc);
  }
  function c(x) {
    var E;
    for (x = x || []; E = f(); )
      E !== !1 && x.push(E);
    return x;
  }
  function f() {
    var x = a();
    if (!(Ia != e.charAt(0) || Na != e.charAt(1))) {
      for (var E = 2; wn != e.charAt(E) && (Na != e.charAt(E) || Ia != e.charAt(E + 1)); )
        ++E;
      if (E += 2, wn === e.charAt(E - 1))
        return s("End of comment missing");
      var R = e.slice(2, E - 2);
      return r += 2, i(R), e = e.slice(E), r += 2, x({
        type: pc,
        comment: R
      });
    }
  }
  function m() {
    var x = a(), E = l(lc);
    if (E) {
      if (f(), !l(uc)) return s("property missing ':'");
      var R = l(cc), b = x({
        type: mc,
        property: Aa(E[0].replace(Pa, wn)),
        value: R ? Aa(R[0].replace(Pa, wn)) : wn
      });
      return l(dc), b;
    }
  }
  function h() {
    var x = [];
    c(x);
    for (var E; E = m(); )
      E !== !1 && (x.push(E), c(x));
    return x;
  }
  return u(), h();
};
function Aa(e) {
  return e ? e.replace(fc, wn) : wn;
}
var yc = da && da.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Jo, "__esModule", { value: !0 });
var Ma = Jo.default = xc, vc = yc(gc);
function xc(e, t) {
  var n = null;
  if (!e || typeof e != "string")
    return n;
  var r = (0, vc.default)(e), i = typeof t == "function";
  return r.forEach(function(a) {
    if (a.type === "declaration") {
      var o = a.property, s = a.value;
      i ? t(o, s, a) : s && (n = n || {}, n[o] = s);
    }
  }), n;
}
const bc = Ma.default || Ma, Qo = Go("end"), Gi = Go("start");
function Go(e) {
  return t;
  function t(n) {
    const r = n && n.position && n.position[e] || {};
    if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
  }
}
function wc(e) {
  const t = Gi(e), n = Qo(e);
  if (t && n)
    return { start: t, end: n };
}
function fr(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Ra(e.position) : "start" in e || "end" in e ? Ra(e) : "line" in e || "column" in e ? Fi(e) : "";
}
function Fi(e) {
  return La(e && e.line) + ":" + La(e && e.column);
}
function Ra(e) {
  return Fi(e && e.start) + "-" + Fi(e && e.end);
}
function La(e) {
  return e && typeof e == "number" ? e : 1;
}
class $e extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(t, n, r) {
    super(), typeof n == "string" && (r = n, n = void 0);
    let i = "", a = {}, o = !1;
    if (n && ("line" in n && "column" in n ? a = { place: n } : "start" in n && "end" in n ? a = { place: n } : "type" in n ? a = {
      ancestors: [n],
      place: n.position
    } : a = { ...n }), typeof t == "string" ? i = t : !a.cause && t && (o = !0, i = t.message, a.cause = t), !a.ruleId && !a.source && typeof r == "string") {
      const l = r.indexOf(":");
      l === -1 ? a.ruleId = r : (a.source = r.slice(0, l), a.ruleId = r.slice(l + 1));
    }
    if (!a.place && a.ancestors && a.ancestors) {
      const l = a.ancestors[a.ancestors.length - 1];
      l && (a.place = l.position);
    }
    const s = a.place && "start" in a.place ? a.place.start : a.place;
    this.ancestors = a.ancestors || void 0, this.cause = a.cause || void 0, this.column = s ? s.column : void 0, this.fatal = void 0, this.file, this.message = i, this.line = s ? s.line : void 0, this.name = fr(a.place) || "1:1", this.place = a.place || void 0, this.reason = this.message, this.ruleId = a.ruleId || void 0, this.source = a.source || void 0, this.stack = o && a.cause && typeof a.cause.stack == "string" ? a.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
$e.prototype.file = "";
$e.prototype.name = "";
$e.prototype.reason = "";
$e.prototype.message = "";
$e.prototype.stack = "";
$e.prototype.column = void 0;
$e.prototype.line = void 0;
$e.prototype.ancestors = void 0;
$e.prototype.cause = void 0;
$e.prototype.fatal = void 0;
$e.prototype.place = void 0;
$e.prototype.ruleId = void 0;
$e.prototype.source = void 0;
const Xi = {}.hasOwnProperty, kc = /* @__PURE__ */ new Map(), _c = /[A-Z]/g, Sc = /-([a-z])/g, Cc = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), Ec = /* @__PURE__ */ new Set(["td", "th"]), Xo = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Oc(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = Rc(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = Mc(n, t.jsx, t.jsxs);
  }
  const i = {
    Fragment: t.Fragment,
    ancestors: [],
    components: t.components || {},
    create: r,
    elementAttributeNameCase: t.elementAttributeNameCase || "react",
    evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
    filePath: n,
    ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
    passKeys: t.passKeys !== !1,
    passNode: t.passNode || !1,
    schema: t.space === "svg" ? Qi : ic,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, a = es(i, e, void 0);
  return a && typeof a != "string" ? a : i.create(
    e,
    i.Fragment,
    { children: a || void 0 },
    void 0
  );
}
function es(e, t, n) {
  if (t.type === "element")
    return Tc(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return jc(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return Ic(e, t, n);
  if (t.type === "mdxjsEsm")
    return Pc(e, t);
  if (t.type === "root")
    return Nc(e, t, n);
  if (t.type === "text")
    return Ac(e, t);
}
function Tc(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = Qi, e.schema = i), e.ancestors.push(t);
  const a = ns(e, t.tagName, !1), o = Lc(e, t);
  let s = ta(e, t);
  return Cc.has(t.tagName) && (s = s.filter(function(l) {
    return typeof l == "string" ? !qu(l) : !0;
  })), ts(e, o, a, t), ea(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function jc(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  Tr(e, t.position);
}
function Pc(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  Tr(e, t.position);
}
function Ic(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = Qi, e.schema = i), e.ancestors.push(t);
  const a = t.name === null ? e.Fragment : ns(e, t.name, !0), o = zc(e, t), s = ta(e, t);
  return ts(e, o, a, t), ea(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function Nc(e, t, n) {
  const r = {};
  return ea(r, ta(e, t)), e.create(t, e.Fragment, r, n);
}
function Ac(e, t) {
  return t.value;
}
function ts(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function ea(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function Mc(e, t, n) {
  return r;
  function r(i, a, o, s) {
    const u = Array.isArray(o.children) ? n : t;
    return s ? u(a, o, s) : u(a, o);
  }
}
function Rc(e, t) {
  return n;
  function n(r, i, a, o) {
    const s = Array.isArray(a.children), l = Gi(r);
    return t(
      i,
      a,
      o,
      s,
      {
        columnNumber: l ? l.column - 1 : void 0,
        fileName: e,
        lineNumber: l ? l.line : void 0
      },
      void 0
    );
  }
}
function Lc(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && Xi.call(t.properties, i)) {
      const a = Dc(e, i, t.properties[i]);
      if (a) {
        const [o, s] = a;
        e.tableCellAlignToStyle && o === "align" && typeof s == "string" && Ec.has(t.tagName) ? r = s : n[o] = s;
      }
    }
  if (r) {
    const a = (
      /** @type {Style} */
      n.style || (n.style = {})
    );
    a[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function zc(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const a = r.data.estree.body[0];
        a.type;
        const o = a.expression;
        o.type;
        const s = o.properties[0];
        s.type, Object.assign(
          n,
          e.evaluater.evaluateExpression(s.argument)
        );
      } else
        Tr(e, t.position);
    else {
      const i = r.name;
      let a;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const s = r.value.data.estree.body[0];
          s.type, a = e.evaluater.evaluateExpression(s.expression);
        } else
          Tr(e, t.position);
      else
        a = r.value === null ? !0 : r.value;
      n[i] = /** @type {Props[keyof Props]} */
      a;
    }
  return n;
}
function ta(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : kc;
  for (; ++r < t.children.length; ) {
    const a = t.children[r];
    let o;
    if (e.passKeys) {
      const l = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
      if (l) {
        const u = i.get(l) || 0;
        o = l + "-" + u, i.set(l, u + 1);
      }
    }
    const s = es(e, a, o);
    s !== void 0 && n.push(s);
  }
  return n;
}
function Dc(e, t, n) {
  const r = ec(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? Uu(n) : ac(n)), r.property === "style") {
      let i = typeof n == "object" ? n : Fc(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = Bc(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? rc[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function Fc(e, t) {
  const n = {};
  try {
    bc(t, r);
  } catch (i) {
    if (!e.ignoreInvalidStyle) {
      const a = (
        /** @type {Error} */
        i
      ), o = new $e("Cannot parse `style` attribute", {
        ancestors: e.ancestors,
        cause: a,
        ruleId: "style",
        source: "hast-util-to-jsx-runtime"
      });
      throw o.file = e.filePath || void 0, o.url = Xo + "#cannot-parse-style-attribute", o;
    }
  }
  return n;
  function r(i, a) {
    let o = i;
    o.slice(0, 2) !== "--" && (o.slice(0, 4) === "-ms-" && (o = "ms-" + o.slice(4)), o = o.replace(Sc, Uc)), n[o] = a;
  }
}
function ns(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let a = -1, o;
    for (; ++a < i.length; ) {
      const s = Ea(i[a]) ? { type: "Identifier", name: i[a] } : { type: "Literal", value: i[a] };
      o = o ? {
        type: "MemberExpression",
        object: o,
        property: s,
        computed: !!(a && s.type === "Literal"),
        optional: !1
      } : s;
    }
    r = o;
  } else
    r = Ea(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {keyof JSX.IntrinsicElements} */
      r.value
    );
    return Xi.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  Tr(e);
}
function Tr(e, t) {
  const n = new $e(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = Xo + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function Bc(e) {
  const t = {};
  let n;
  for (n in e)
    Xi.call(e, n) && (t[Vc(n)] = e[n]);
  return t;
}
function Vc(e) {
  let t = e.replace(_c, Zc);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function Uc(e, t) {
  return t.toUpperCase();
}
function Zc(e) {
  return "-" + e.toLowerCase();
}
const vi = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, Hc = {};
function $c(e, t) {
  const n = Hc, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return rs(e, r, i);
}
function rs(e, t, n) {
  if (Wc(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return za(e.children, t, n);
  }
  return Array.isArray(e) ? za(e, t, n) : "";
}
function za(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = rs(e[i], t, n);
  return r.join("");
}
function Wc(e) {
  return !!(e && typeof e == "object");
}
const Da = document.createElement("i");
function na(e) {
  const t = "&" + e + ";";
  Da.innerHTML = t;
  const n = Da.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function Kt(e, t, n, r) {
  const i = e.length;
  let a = 0, o;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    o = Array.from(r), o.unshift(t, n), e.splice(...o);
  else
    for (n && e.splice(t, n); a < r.length; )
      o = r.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
}
function dt(e, t) {
  return e.length > 0 ? (Kt(e, e.length, 0, t), e) : t;
}
const Fa = {}.hasOwnProperty;
function qc(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    Yc(t, e[n]);
  return t;
}
function Yc(e, t) {
  let n;
  for (n in t) {
    const i = (Fa.call(e, n) ? e[n] : void 0) || (e[n] = {}), a = t[n];
    let o;
    if (a)
      for (o in a) {
        Fa.call(i, o) || (i[o] = []);
        const s = a[o];
        Kc(
          // @ts-expect-error Looks like a list.
          i[o],
          Array.isArray(s) ? s : s ? [s] : []
        );
      }
  }
}
function Kc(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  Kt(e, 0, 0, r);
}
function is(e, t) {
  const n = Number.parseInt(e, t);
  return (
    // C0 except for HT, LF, FF, CR, space.
    n < 9 || n === 11 || n > 13 && n < 32 || // Control character (DEL) of C0, and C1 controls.
    n > 126 && n < 160 || // Lone high surrogates and low surrogates.
    n > 55295 && n < 57344 || // Noncharacters.
    n > 64975 && n < 65008 || /* eslint-disable no-bitwise */
    (n & 65535) === 65535 || (n & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    n > 1114111 ? "�" : String.fromCodePoint(n)
  );
}
function Zn(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const Rt = hn(/[A-Za-z]/), at = hn(/[\dA-Za-z]/), Jc = hn(/[#-'*+\--9=?A-Z^-~]/);
function Bi(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const Vi = hn(/\d/), Qc = hn(/[\dA-Fa-f]/), Gc = hn(/[!-/:-@[-`{-~]/);
function Y(e) {
  return e !== null && e < -2;
}
function tt(e) {
  return e !== null && (e < 0 || e === 32);
}
function fe(e) {
  return e === -2 || e === -1 || e === 32;
}
const Xc = hn(new RegExp("\\p{P}|\\p{S}", "u")), ed = hn(/\s/);
function hn(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function Yn(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const a = e.charCodeAt(n);
    let o = "";
    if (a === 37 && at(e.charCodeAt(n + 1)) && at(e.charCodeAt(n + 2)))
      i = 2;
    else if (a < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (o = String.fromCharCode(a));
    else if (a > 55295 && a < 57344) {
      const s = e.charCodeAt(n + 1);
      a < 56320 && s > 56319 && s < 57344 ? (o = String.fromCharCode(a, s), i = 1) : o = "�";
    } else
      o = String.fromCharCode(a);
    o && (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, o = ""), i && (n += i, i = 0);
  }
  return t.join("") + e.slice(r);
}
function we(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let a = 0;
  return o;
  function o(l) {
    return fe(l) ? (e.enter(n), s(l)) : t(l);
  }
  function s(l) {
    return fe(l) && a++ < i ? (e.consume(l), s) : (e.exit(n), t(l));
  }
}
const td = {
  tokenize: nd
};
function nd(e) {
  const t = e.attempt(
    this.parser.constructs.contentInitial,
    r,
    i
  );
  let n;
  return t;
  function r(s) {
    if (s === null) {
      e.consume(s);
      return;
    }
    return e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), we(e, t, "linePrefix");
  }
  function i(s) {
    return e.enter("paragraph"), a(s);
  }
  function a(s) {
    const l = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = l), n = l, o(s);
  }
  function o(s) {
    if (s === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(s);
      return;
    }
    return Y(s) ? (e.consume(s), e.exit("chunkText"), a) : (e.consume(s), o);
  }
}
const rd = {
  tokenize: id
}, Ba = {
  tokenize: ad
};
function id(e) {
  const t = this, n = [];
  let r = 0, i, a, o;
  return s;
  function s(_) {
    if (r < n.length) {
      const P = n[r];
      return t.containerState = P[1], e.attempt(
        P[0].continuation,
        l,
        u
      )(_);
    }
    return u(_);
  }
  function l(_) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && O();
      const P = t.events.length;
      let T = P, w;
      for (; T--; )
        if (t.events[T][0] === "exit" && t.events[T][1].type === "chunkFlow") {
          w = t.events[T][1].end;
          break;
        }
      b(r);
      let K = P;
      for (; K < t.events.length; )
        t.events[K][1].end = Object.assign({}, w), K++;
      return Kt(
        t.events,
        T + 1,
        0,
        t.events.slice(P)
      ), t.events.length = K, u(_);
    }
    return s(_);
  }
  function u(_) {
    if (r === n.length) {
      if (!i)
        return m(_);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return x(_);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(
      Ba,
      c,
      f
    )(_);
  }
  function c(_) {
    return i && O(), b(r), m(_);
  }
  function f(_) {
    return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, x(_);
  }
  function m(_) {
    return t.containerState = {}, e.attempt(
      Ba,
      h,
      x
    )(_);
  }
  function h(_) {
    return r++, n.push([t.currentConstruct, t.containerState]), m(_);
  }
  function x(_) {
    if (_ === null) {
      i && O(), b(0), e.consume(_);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
      contentType: "flow",
      previous: a,
      _tokenizer: i
    }), E(_);
  }
  function E(_) {
    if (_ === null) {
      R(e.exit("chunkFlow"), !0), b(0), e.consume(_);
      return;
    }
    return Y(_) ? (e.consume(_), R(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(_), E);
  }
  function R(_, P) {
    const T = t.sliceStream(_);
    if (P && T.push(null), _.previous = a, a && (a.next = _), a = _, i.defineSkip(_.start), i.write(T), t.parser.lazy[_.start.line]) {
      let w = i.events.length;
      for (; w--; )
        if (
          // The token starts before the line ending…
          i.events[w][1].start.offset < o && // …and either is not ended yet…
          (!i.events[w][1].end || // …or ends after it.
          i.events[w][1].end.offset > o)
        )
          return;
      const K = t.events.length;
      let he = K, ue, ge;
      for (; he--; )
        if (t.events[he][0] === "exit" && t.events[he][1].type === "chunkFlow") {
          if (ue) {
            ge = t.events[he][1].end;
            break;
          }
          ue = !0;
        }
      for (b(r), w = K; w < t.events.length; )
        t.events[w][1].end = Object.assign({}, ge), w++;
      Kt(
        t.events,
        he + 1,
        0,
        t.events.slice(K)
      ), t.events.length = w;
    }
  }
  function b(_) {
    let P = n.length;
    for (; P-- > _; ) {
      const T = n[P];
      t.containerState = T[1], T[0].exit.call(t, e);
    }
    n.length = _;
  }
  function O() {
    i.write([null]), a = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function ad(e, t, n) {
  return we(
    e,
    e.attempt(this.parser.constructs.document, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function Va(e) {
  if (e === null || tt(e) || ed(e))
    return 1;
  if (Xc(e))
    return 2;
}
function ra(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const a = e[i].resolveAll;
    a && !r.includes(a) && (t = a(t, n), r.push(a));
  }
  return t;
}
const Ui = {
  name: "attention",
  tokenize: sd,
  resolveAll: od
};
function od(e, t) {
  let n = -1, r, i, a, o, s, l, u, c;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          l = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const f = Object.assign({}, e[r][1].end), m = Object.assign({}, e[n][1].start);
          Ua(f, -l), Ua(m, l), o = {
            type: l > 1 ? "strongSequence" : "emphasisSequence",
            start: f,
            end: Object.assign({}, e[r][1].end)
          }, s = {
            type: l > 1 ? "strongSequence" : "emphasisSequence",
            start: Object.assign({}, e[n][1].start),
            end: m
          }, a = {
            type: l > 1 ? "strongText" : "emphasisText",
            start: Object.assign({}, e[r][1].end),
            end: Object.assign({}, e[n][1].start)
          }, i = {
            type: l > 1 ? "strong" : "emphasis",
            start: Object.assign({}, o.start),
            end: Object.assign({}, s.end)
          }, e[r][1].end = Object.assign({}, o.start), e[n][1].start = Object.assign({}, s.end), u = [], e[r][1].end.offset - e[r][1].start.offset && (u = dt(u, [["enter", e[r][1], t], ["exit", e[r][1], t]])), u = dt(u, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["enter", a, t]]), u = dt(u, ra(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), u = dt(u, [["exit", a, t], ["enter", s, t], ["exit", s, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (c = 2, u = dt(u, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : c = 0, Kt(e, r - 1, n - r + 3, u), n = r + u.length - c - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function sd(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Va(r);
  let a;
  return o;
  function o(l) {
    return a = l, e.enter("attentionSequence"), s(l);
  }
  function s(l) {
    if (l === a)
      return e.consume(l), s;
    const u = e.exit("attentionSequence"), c = Va(l), f = !c || c === 2 && i || n.includes(l), m = !i || i === 2 && c || n.includes(r);
    return u._open = !!(a === 42 ? f : f && (i || !m)), u._close = !!(a === 42 ? m : m && (c || !f)), t(l);
  }
}
function Ua(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const ld = {
  name: "autolink",
  tokenize: ud
};
function ud(e, t, n) {
  let r = 0;
  return i;
  function i(h) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
  }
  function a(h) {
    return Rt(h) ? (e.consume(h), o) : h === 64 ? n(h) : u(h);
  }
  function o(h) {
    return h === 43 || h === 45 || h === 46 || at(h) ? (r = 1, s(h)) : u(h);
  }
  function s(h) {
    return h === 58 ? (e.consume(h), r = 0, l) : (h === 43 || h === 45 || h === 46 || at(h)) && r++ < 32 ? (e.consume(h), s) : (r = 0, u(h));
  }
  function l(h) {
    return h === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.exit("autolink"), t) : h === null || h === 32 || h === 60 || Bi(h) ? n(h) : (e.consume(h), l);
  }
  function u(h) {
    return h === 64 ? (e.consume(h), c) : Jc(h) ? (e.consume(h), u) : n(h);
  }
  function c(h) {
    return at(h) ? f(h) : n(h);
  }
  function f(h) {
    return h === 46 ? (e.consume(h), r = 0, c) : h === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.exit("autolink"), t) : m(h);
  }
  function m(h) {
    if ((h === 45 || at(h)) && r++ < 63) {
      const x = h === 45 ? m : f;
      return e.consume(h), x;
    }
    return n(h);
  }
}
const ri = {
  tokenize: cd,
  partial: !0
};
function cd(e, t, n) {
  return r;
  function r(a) {
    return fe(a) ? we(e, i, "linePrefix")(a) : i(a);
  }
  function i(a) {
    return a === null || Y(a) ? t(a) : n(a);
  }
}
const as = {
  name: "blockQuote",
  tokenize: dd,
  continuation: {
    tokenize: fd
  },
  exit: hd
};
function dd(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    if (o === 62) {
      const s = r.containerState;
      return s.open || (e.enter("blockQuote", {
        _container: !0
      }), s.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(o), e.exit("blockQuoteMarker"), a;
    }
    return n(o);
  }
  function a(o) {
    return fe(o) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(o), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(o));
  }
}
function fd(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return fe(o) ? we(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o) : a(o);
  }
  function a(o) {
    return e.attempt(as, t, n)(o);
  }
}
function hd(e) {
  e.exit("blockQuote");
}
const os = {
  name: "characterEscape",
  tokenize: pd
};
function pd(e, t, n) {
  return r;
  function r(a) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(a), e.exit("escapeMarker"), i;
  }
  function i(a) {
    return Gc(a) ? (e.enter("characterEscapeValue"), e.consume(a), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(a);
  }
}
const ss = {
  name: "characterReference",
  tokenize: md
};
function md(e, t, n) {
  const r = this;
  let i = 0, a, o;
  return s;
  function s(f) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), l;
  }
  function l(f) {
    return f === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(f), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), a = 31, o = at, c(f));
  }
  function u(f) {
    return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = Qc, c) : (e.enter("characterReferenceValue"), a = 7, o = Vi, c(f));
  }
  function c(f) {
    if (f === 59 && i) {
      const m = e.exit("characterReferenceValue");
      return o === at && !na(r.sliceSerialize(m)) ? n(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return o(f) && i++ < a ? (e.consume(f), c) : n(f);
  }
}
const Za = {
  tokenize: yd,
  partial: !0
}, Ha = {
  name: "codeFenced",
  tokenize: gd,
  concrete: !0
};
function gd(e, t, n) {
  const r = this, i = {
    tokenize: T,
    partial: !0
  };
  let a = 0, o = 0, s;
  return l;
  function l(w) {
    return u(w);
  }
  function u(w) {
    const K = r.events[r.events.length - 1];
    return a = K && K[1].type === "linePrefix" ? K[2].sliceSerialize(K[1], !0).length : 0, s = w, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), c(w);
  }
  function c(w) {
    return w === s ? (o++, e.consume(w), c) : o < 3 ? n(w) : (e.exit("codeFencedFenceSequence"), fe(w) ? we(e, f, "whitespace")(w) : f(w));
  }
  function f(w) {
    return w === null || Y(w) ? (e.exit("codeFencedFence"), r.interrupt ? t(w) : e.check(Za, E, P)(w)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), m(w));
  }
  function m(w) {
    return w === null || Y(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), f(w)) : fe(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), we(e, h, "whitespace")(w)) : w === 96 && w === s ? n(w) : (e.consume(w), m);
  }
  function h(w) {
    return w === null || Y(w) ? f(w) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), x(w));
  }
  function x(w) {
    return w === null || Y(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), f(w)) : w === 96 && w === s ? n(w) : (e.consume(w), x);
  }
  function E(w) {
    return e.attempt(i, P, R)(w);
  }
  function R(w) {
    return e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), b;
  }
  function b(w) {
    return a > 0 && fe(w) ? we(e, O, "linePrefix", a + 1)(w) : O(w);
  }
  function O(w) {
    return w === null || Y(w) ? e.check(Za, E, P)(w) : (e.enter("codeFlowValue"), _(w));
  }
  function _(w) {
    return w === null || Y(w) ? (e.exit("codeFlowValue"), O(w)) : (e.consume(w), _);
  }
  function P(w) {
    return e.exit("codeFenced"), t(w);
  }
  function T(w, K, he) {
    let ue = 0;
    return ge;
    function ge(X) {
      return w.enter("lineEnding"), w.consume(X), w.exit("lineEnding"), Z;
    }
    function Z(X) {
      return w.enter("codeFencedFence"), fe(X) ? we(w, V, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(X) : V(X);
    }
    function V(X) {
      return X === s ? (w.enter("codeFencedFenceSequence"), ae(X)) : he(X);
    }
    function ae(X) {
      return X === s ? (ue++, w.consume(X), ae) : ue >= o ? (w.exit("codeFencedFenceSequence"), fe(X) ? we(w, pe, "whitespace")(X) : pe(X)) : he(X);
    }
    function pe(X) {
      return X === null || Y(X) ? (w.exit("codeFencedFence"), K(X)) : he(X);
    }
  }
}
function yd(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return o === null ? n(o) : (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), a);
  }
  function a(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
const xi = {
  name: "codeIndented",
  tokenize: xd
}, vd = {
  tokenize: bd,
  partial: !0
};
function xd(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return e.enter("codeIndented"), we(e, a, "linePrefix", 5)(u);
  }
  function a(u) {
    const c = r.events[r.events.length - 1];
    return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? o(u) : n(u);
  }
  function o(u) {
    return u === null ? l(u) : Y(u) ? e.attempt(vd, o, l)(u) : (e.enter("codeFlowValue"), s(u));
  }
  function s(u) {
    return u === null || Y(u) ? (e.exit("codeFlowValue"), o(u)) : (e.consume(u), s);
  }
  function l(u) {
    return e.exit("codeIndented"), t(u);
  }
}
function bd(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return r.parser.lazy[r.now().line] ? n(o) : Y(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), i) : we(e, a, "linePrefix", 5)(o);
  }
  function a(o) {
    const s = r.events[r.events.length - 1];
    return s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? t(o) : Y(o) ? i(o) : n(o);
  }
}
const wd = {
  name: "codeText",
  tokenize: Sd,
  resolve: kd,
  previous: _d
};
function kd(e) {
  let t = e.length - 4, n = 3, r, i;
  if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
    for (r = n; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
  return e;
}
function _d(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Sd(e, t, n) {
  let r = 0, i, a;
  return o;
  function o(f) {
    return e.enter("codeText"), e.enter("codeTextSequence"), s(f);
  }
  function s(f) {
    return f === 96 ? (e.consume(f), r++, s) : (e.exit("codeTextSequence"), l(f));
  }
  function l(f) {
    return f === null ? n(f) : f === 32 ? (e.enter("space"), e.consume(f), e.exit("space"), l) : f === 96 ? (a = e.enter("codeTextSequence"), i = 0, c(f)) : Y(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), l) : (e.enter("codeTextData"), u(f));
  }
  function u(f) {
    return f === null || f === 32 || f === 96 || Y(f) ? (e.exit("codeTextData"), l(f)) : (e.consume(f), u);
  }
  function c(f) {
    return f === 96 ? (e.consume(f), i++, c) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(f)) : (a.type = "codeTextData", u(f));
  }
}
class Cd {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(t) {
    this.left = t ? [...t] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(t) {
    if (t < 0 || t >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + t + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return t < this.left.length ? this.left[t] : this.right[this.right.length - t + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(t, n) {
    const r = n ?? Number.POSITIVE_INFINITY;
    return r < this.left.length ? this.left.slice(t, r) : t > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - t + this.left.length).reverse() : this.left.slice(t).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(t, n, r) {
    const i = n || 0;
    this.setCursor(Math.trunc(t));
    const a = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return r && er(this.left, r), a.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(t) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(t) {
    this.setCursor(Number.POSITIVE_INFINITY), er(this.left, t);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(t) {
    this.setCursor(0), this.right.push(t);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(t) {
    this.setCursor(0), er(this.right, t.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(t) {
    if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0))
      if (t < this.left.length) {
        const n = this.left.splice(t, Number.POSITIVE_INFINITY);
        er(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        er(this.left, n.reverse());
      }
  }
}
function er(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function ls(e) {
  const t = {};
  let n = -1, r, i, a, o, s, l, u;
  const c = new Cd(e);
  for (; ++n < c.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = c.get(n), n && r[1].type === "chunkFlow" && c.get(n - 1)[1].type === "listItemPrefix" && (l = r[1]._tokenizer.events, a = 0, a < l.length && l[a][1].type === "lineEndingBlank" && (a += 2), a < l.length && l[a][1].type === "content"))
      for (; ++a < l.length && l[a][1].type !== "content"; )
        l[a][1].type === "chunkText" && (l[a][1]._isInFirstContentOfListItem = !0, a++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, Ed(c, n)), n = t[n], u = !0);
    else if (r[1]._container) {
      for (a = n, i = void 0; a-- && (o = c.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank"); )
        o[0] === "enter" && (i && (c.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
      i && (r[1].end = Object.assign({}, c.get(i)[1].start), s = c.slice(i, n), s.unshift(r), c.splice(i, n - i + 1, s));
    }
  }
  return Kt(e, 0, Number.POSITIVE_INFINITY, c.slice(0)), !u;
}
function Ed(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const a = [], o = n._tokenizer || r.parser[n.contentType](n.start), s = o.events, l = [], u = {};
  let c, f, m = -1, h = n, x = 0, E = 0;
  const R = [E];
  for (; h; ) {
    for (; e.get(++i)[1] !== h; )
      ;
    a.push(i), h._tokenizer || (c = r.sliceStream(h), h.next || c.push(null), f && o.defineSkip(h.start), h._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(c), h._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), f = h, h = h.next;
  }
  for (h = n; ++m < s.length; )
    // Find a void token that includes a break.
    s[m][0] === "exit" && s[m - 1][0] === "enter" && s[m][1].type === s[m - 1][1].type && s[m][1].start.line !== s[m][1].end.line && (E = m + 1, R.push(E), h._tokenizer = void 0, h.previous = void 0, h = h.next);
  for (o.events = [], h ? (h._tokenizer = void 0, h.previous = void 0) : R.pop(), m = R.length; m--; ) {
    const b = s.slice(R[m], R[m + 1]), O = a.pop();
    l.push([O, O + b.length - 1]), e.splice(O, 2, b);
  }
  for (l.reverse(), m = -1; ++m < l.length; )
    u[x + l[m][0]] = x + l[m][1], x += l[m][1] - l[m][0] - 1;
  return u;
}
const Od = {
  tokenize: Pd,
  resolve: jd
}, Td = {
  tokenize: Id,
  partial: !0
};
function jd(e) {
  return ls(e), e;
}
function Pd(e, t) {
  let n;
  return r;
  function r(s) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(s);
  }
  function i(s) {
    return s === null ? a(s) : Y(s) ? e.check(Td, o, a)(s) : (e.consume(s), i);
  }
  function a(s) {
    return e.exit("chunkContent"), e.exit("content"), t(s);
  }
  function o(s) {
    return e.consume(s), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, i;
  }
}
function Id(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), we(e, a, "linePrefix");
  }
  function a(o) {
    if (o === null || Y(o))
      return n(o);
    const s = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? t(o) : e.interrupt(r.parser.constructs.flow, n, t)(o);
  }
}
function us(e, t, n, r, i, a, o, s, l) {
  const u = l || Number.POSITIVE_INFINITY;
  let c = 0;
  return f;
  function f(b) {
    return b === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(b), e.exit(a), m) : b === null || b === 32 || b === 41 || Bi(b) ? n(b) : (e.enter(r), e.enter(o), e.enter(s), e.enter("chunkString", {
      contentType: "string"
    }), E(b));
  }
  function m(b) {
    return b === 62 ? (e.enter(a), e.consume(b), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(s), e.enter("chunkString", {
      contentType: "string"
    }), h(b));
  }
  function h(b) {
    return b === 62 ? (e.exit("chunkString"), e.exit(s), m(b)) : b === null || b === 60 || Y(b) ? n(b) : (e.consume(b), b === 92 ? x : h);
  }
  function x(b) {
    return b === 60 || b === 62 || b === 92 ? (e.consume(b), h) : h(b);
  }
  function E(b) {
    return !c && (b === null || b === 41 || tt(b)) ? (e.exit("chunkString"), e.exit(s), e.exit(o), e.exit(r), t(b)) : c < u && b === 40 ? (e.consume(b), c++, E) : b === 41 ? (e.consume(b), c--, E) : b === null || b === 32 || b === 40 || Bi(b) ? n(b) : (e.consume(b), b === 92 ? R : E);
  }
  function R(b) {
    return b === 40 || b === 41 || b === 92 ? (e.consume(b), E) : E(b);
  }
}
function cs(e, t, n, r, i, a) {
  const o = this;
  let s = 0, l;
  return u;
  function u(h) {
    return e.enter(r), e.enter(i), e.consume(h), e.exit(i), e.enter(a), c;
  }
  function c(h) {
    return s > 999 || h === null || h === 91 || h === 93 && !l || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    h === 94 && !s && "_hiddenFootnoteSupport" in o.parser.constructs ? n(h) : h === 93 ? (e.exit(a), e.enter(i), e.consume(h), e.exit(i), e.exit(r), t) : Y(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), c) : (e.enter("chunkString", {
      contentType: "string"
    }), f(h));
  }
  function f(h) {
    return h === null || h === 91 || h === 93 || Y(h) || s++ > 999 ? (e.exit("chunkString"), c(h)) : (e.consume(h), l || (l = !fe(h)), h === 92 ? m : f);
  }
  function m(h) {
    return h === 91 || h === 92 || h === 93 ? (e.consume(h), s++, f) : f(h);
  }
}
function ds(e, t, n, r, i, a) {
  let o;
  return s;
  function s(m) {
    return m === 34 || m === 39 || m === 40 ? (e.enter(r), e.enter(i), e.consume(m), e.exit(i), o = m === 40 ? 41 : m, l) : n(m);
  }
  function l(m) {
    return m === o ? (e.enter(i), e.consume(m), e.exit(i), e.exit(r), t) : (e.enter(a), u(m));
  }
  function u(m) {
    return m === o ? (e.exit(a), l(o)) : m === null ? n(m) : Y(m) ? (e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), we(e, u, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), c(m));
  }
  function c(m) {
    return m === o || m === null || Y(m) ? (e.exit("chunkString"), u(m)) : (e.consume(m), m === 92 ? f : c);
  }
  function f(m) {
    return m === o || m === 92 ? (e.consume(m), c) : c(m);
  }
}
function hr(e, t) {
  let n;
  return r;
  function r(i) {
    return Y(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : fe(i) ? we(
      e,
      r,
      n ? "linePrefix" : "lineSuffix"
    )(i) : t(i);
  }
}
const Nd = {
  name: "definition",
  tokenize: Md
}, Ad = {
  tokenize: Rd,
  partial: !0
};
function Md(e, t, n) {
  const r = this;
  let i;
  return a;
  function a(h) {
    return e.enter("definition"), o(h);
  }
  function o(h) {
    return cs.call(
      r,
      e,
      s,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(h);
  }
  function s(h) {
    return i = Zn(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), h === 58 ? (e.enter("definitionMarker"), e.consume(h), e.exit("definitionMarker"), l) : n(h);
  }
  function l(h) {
    return tt(h) ? hr(e, u)(h) : u(h);
  }
  function u(h) {
    return us(
      e,
      c,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(h);
  }
  function c(h) {
    return e.attempt(Ad, f, f)(h);
  }
  function f(h) {
    return fe(h) ? we(e, m, "whitespace")(h) : m(h);
  }
  function m(h) {
    return h === null || Y(h) ? (e.exit("definition"), r.parser.defined.push(i), t(h)) : n(h);
  }
}
function Rd(e, t, n) {
  return r;
  function r(s) {
    return tt(s) ? hr(e, i)(s) : n(s);
  }
  function i(s) {
    return ds(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(s);
  }
  function a(s) {
    return fe(s) ? we(e, o, "whitespace")(s) : o(s);
  }
  function o(s) {
    return s === null || Y(s) ? t(s) : n(s);
  }
}
const Ld = {
  name: "hardBreakEscape",
  tokenize: zd
};
function zd(e, t, n) {
  return r;
  function r(a) {
    return e.enter("hardBreakEscape"), e.consume(a), i;
  }
  function i(a) {
    return Y(a) ? (e.exit("hardBreakEscape"), t(a)) : n(a);
  }
}
const Dd = {
  name: "headingAtx",
  tokenize: Bd,
  resolve: Fd
};
function Fd(e, t) {
  let n = e.length - 2, r = 3, i, a;
  return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[n][1].end
  }, a = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[n][1].end,
    contentType: "text"
  }, Kt(e, r, n - r + 1, [["enter", i, t], ["enter", a, t], ["exit", a, t], ["exit", i, t]])), e;
}
function Bd(e, t, n) {
  let r = 0;
  return i;
  function i(c) {
    return e.enter("atxHeading"), a(c);
  }
  function a(c) {
    return e.enter("atxHeadingSequence"), o(c);
  }
  function o(c) {
    return c === 35 && r++ < 6 ? (e.consume(c), o) : c === null || tt(c) ? (e.exit("atxHeadingSequence"), s(c)) : n(c);
  }
  function s(c) {
    return c === 35 ? (e.enter("atxHeadingSequence"), l(c)) : c === null || Y(c) ? (e.exit("atxHeading"), t(c)) : fe(c) ? we(e, s, "whitespace")(c) : (e.enter("atxHeadingText"), u(c));
  }
  function l(c) {
    return c === 35 ? (e.consume(c), l) : (e.exit("atxHeadingSequence"), s(c));
  }
  function u(c) {
    return c === null || c === 35 || tt(c) ? (e.exit("atxHeadingText"), s(c)) : (e.consume(c), u);
  }
}
const Vd = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], $a = ["pre", "script", "style", "textarea"], Ud = {
  name: "htmlFlow",
  tokenize: Wd,
  resolveTo: $d,
  concrete: !0
}, Zd = {
  tokenize: Yd,
  partial: !0
}, Hd = {
  tokenize: qd,
  partial: !0
};
function $d(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function Wd(e, t, n) {
  const r = this;
  let i, a, o, s, l;
  return u;
  function u(v) {
    return c(v);
  }
  function c(v) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(v), f;
  }
  function f(v) {
    return v === 33 ? (e.consume(v), m) : v === 47 ? (e.consume(v), a = !0, E) : v === 63 ? (e.consume(v), i = 3, r.interrupt ? t : g) : Rt(v) ? (e.consume(v), o = String.fromCharCode(v), R) : n(v);
  }
  function m(v) {
    return v === 45 ? (e.consume(v), i = 2, h) : v === 91 ? (e.consume(v), i = 5, s = 0, x) : Rt(v) ? (e.consume(v), i = 4, r.interrupt ? t : g) : n(v);
  }
  function h(v) {
    return v === 45 ? (e.consume(v), r.interrupt ? t : g) : n(v);
  }
  function x(v) {
    const We = "CDATA[";
    return v === We.charCodeAt(s++) ? (e.consume(v), s === We.length ? r.interrupt ? t : V : x) : n(v);
  }
  function E(v) {
    return Rt(v) ? (e.consume(v), o = String.fromCharCode(v), R) : n(v);
  }
  function R(v) {
    if (v === null || v === 47 || v === 62 || tt(v)) {
      const We = v === 47, ht = o.toLowerCase();
      return !We && !a && $a.includes(ht) ? (i = 1, r.interrupt ? t(v) : V(v)) : Vd.includes(o.toLowerCase()) ? (i = 6, We ? (e.consume(v), b) : r.interrupt ? t(v) : V(v)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(v) : a ? O(v) : _(v));
    }
    return v === 45 || at(v) ? (e.consume(v), o += String.fromCharCode(v), R) : n(v);
  }
  function b(v) {
    return v === 62 ? (e.consume(v), r.interrupt ? t : V) : n(v);
  }
  function O(v) {
    return fe(v) ? (e.consume(v), O) : ge(v);
  }
  function _(v) {
    return v === 47 ? (e.consume(v), ge) : v === 58 || v === 95 || Rt(v) ? (e.consume(v), P) : fe(v) ? (e.consume(v), _) : ge(v);
  }
  function P(v) {
    return v === 45 || v === 46 || v === 58 || v === 95 || at(v) ? (e.consume(v), P) : T(v);
  }
  function T(v) {
    return v === 61 ? (e.consume(v), w) : fe(v) ? (e.consume(v), T) : _(v);
  }
  function w(v) {
    return v === null || v === 60 || v === 61 || v === 62 || v === 96 ? n(v) : v === 34 || v === 39 ? (e.consume(v), l = v, K) : fe(v) ? (e.consume(v), w) : he(v);
  }
  function K(v) {
    return v === l ? (e.consume(v), l = null, ue) : v === null || Y(v) ? n(v) : (e.consume(v), K);
  }
  function he(v) {
    return v === null || v === 34 || v === 39 || v === 47 || v === 60 || v === 61 || v === 62 || v === 96 || tt(v) ? T(v) : (e.consume(v), he);
  }
  function ue(v) {
    return v === 47 || v === 62 || fe(v) ? _(v) : n(v);
  }
  function ge(v) {
    return v === 62 ? (e.consume(v), Z) : n(v);
  }
  function Z(v) {
    return v === null || Y(v) ? V(v) : fe(v) ? (e.consume(v), Z) : n(v);
  }
  function V(v) {
    return v === 45 && i === 2 ? (e.consume(v), Pe) : v === 60 && i === 1 ? (e.consume(v), Te) : v === 62 && i === 4 ? (e.consume(v), Ve) : v === 63 && i === 3 ? (e.consume(v), g) : v === 93 && i === 5 ? (e.consume(v), Je) : Y(v) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Zd, Qe, ae)(v)) : v === null || Y(v) ? (e.exit("htmlFlowData"), ae(v)) : (e.consume(v), V);
  }
  function ae(v) {
    return e.check(Hd, pe, Qe)(v);
  }
  function pe(v) {
    return e.enter("lineEnding"), e.consume(v), e.exit("lineEnding"), X;
  }
  function X(v) {
    return v === null || Y(v) ? ae(v) : (e.enter("htmlFlowData"), V(v));
  }
  function Pe(v) {
    return v === 45 ? (e.consume(v), g) : V(v);
  }
  function Te(v) {
    return v === 47 ? (e.consume(v), o = "", Be) : V(v);
  }
  function Be(v) {
    if (v === 62) {
      const We = o.toLowerCase();
      return $a.includes(We) ? (e.consume(v), Ve) : V(v);
    }
    return Rt(v) && o.length < 8 ? (e.consume(v), o += String.fromCharCode(v), Be) : V(v);
  }
  function Je(v) {
    return v === 93 ? (e.consume(v), g) : V(v);
  }
  function g(v) {
    return v === 62 ? (e.consume(v), Ve) : v === 45 && i === 2 ? (e.consume(v), g) : V(v);
  }
  function Ve(v) {
    return v === null || Y(v) ? (e.exit("htmlFlowData"), Qe(v)) : (e.consume(v), Ve);
  }
  function Qe(v) {
    return e.exit("htmlFlow"), t(v);
  }
}
function qd(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return Y(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), a) : n(o);
  }
  function a(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
function Yd(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(ri, t, n);
  }
}
const Kd = {
  name: "htmlText",
  tokenize: Jd
};
function Jd(e, t, n) {
  const r = this;
  let i, a, o;
  return s;
  function s(g) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(g), l;
  }
  function l(g) {
    return g === 33 ? (e.consume(g), u) : g === 47 ? (e.consume(g), T) : g === 63 ? (e.consume(g), _) : Rt(g) ? (e.consume(g), he) : n(g);
  }
  function u(g) {
    return g === 45 ? (e.consume(g), c) : g === 91 ? (e.consume(g), a = 0, x) : Rt(g) ? (e.consume(g), O) : n(g);
  }
  function c(g) {
    return g === 45 ? (e.consume(g), h) : n(g);
  }
  function f(g) {
    return g === null ? n(g) : g === 45 ? (e.consume(g), m) : Y(g) ? (o = f, Te(g)) : (e.consume(g), f);
  }
  function m(g) {
    return g === 45 ? (e.consume(g), h) : f(g);
  }
  function h(g) {
    return g === 62 ? Pe(g) : g === 45 ? m(g) : f(g);
  }
  function x(g) {
    const Ve = "CDATA[";
    return g === Ve.charCodeAt(a++) ? (e.consume(g), a === Ve.length ? E : x) : n(g);
  }
  function E(g) {
    return g === null ? n(g) : g === 93 ? (e.consume(g), R) : Y(g) ? (o = E, Te(g)) : (e.consume(g), E);
  }
  function R(g) {
    return g === 93 ? (e.consume(g), b) : E(g);
  }
  function b(g) {
    return g === 62 ? Pe(g) : g === 93 ? (e.consume(g), b) : E(g);
  }
  function O(g) {
    return g === null || g === 62 ? Pe(g) : Y(g) ? (o = O, Te(g)) : (e.consume(g), O);
  }
  function _(g) {
    return g === null ? n(g) : g === 63 ? (e.consume(g), P) : Y(g) ? (o = _, Te(g)) : (e.consume(g), _);
  }
  function P(g) {
    return g === 62 ? Pe(g) : _(g);
  }
  function T(g) {
    return Rt(g) ? (e.consume(g), w) : n(g);
  }
  function w(g) {
    return g === 45 || at(g) ? (e.consume(g), w) : K(g);
  }
  function K(g) {
    return Y(g) ? (o = K, Te(g)) : fe(g) ? (e.consume(g), K) : Pe(g);
  }
  function he(g) {
    return g === 45 || at(g) ? (e.consume(g), he) : g === 47 || g === 62 || tt(g) ? ue(g) : n(g);
  }
  function ue(g) {
    return g === 47 ? (e.consume(g), Pe) : g === 58 || g === 95 || Rt(g) ? (e.consume(g), ge) : Y(g) ? (o = ue, Te(g)) : fe(g) ? (e.consume(g), ue) : Pe(g);
  }
  function ge(g) {
    return g === 45 || g === 46 || g === 58 || g === 95 || at(g) ? (e.consume(g), ge) : Z(g);
  }
  function Z(g) {
    return g === 61 ? (e.consume(g), V) : Y(g) ? (o = Z, Te(g)) : fe(g) ? (e.consume(g), Z) : ue(g);
  }
  function V(g) {
    return g === null || g === 60 || g === 61 || g === 62 || g === 96 ? n(g) : g === 34 || g === 39 ? (e.consume(g), i = g, ae) : Y(g) ? (o = V, Te(g)) : fe(g) ? (e.consume(g), V) : (e.consume(g), pe);
  }
  function ae(g) {
    return g === i ? (e.consume(g), i = void 0, X) : g === null ? n(g) : Y(g) ? (o = ae, Te(g)) : (e.consume(g), ae);
  }
  function pe(g) {
    return g === null || g === 34 || g === 39 || g === 60 || g === 61 || g === 96 ? n(g) : g === 47 || g === 62 || tt(g) ? ue(g) : (e.consume(g), pe);
  }
  function X(g) {
    return g === 47 || g === 62 || tt(g) ? ue(g) : n(g);
  }
  function Pe(g) {
    return g === 62 ? (e.consume(g), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(g);
  }
  function Te(g) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), Be;
  }
  function Be(g) {
    return fe(g) ? we(e, Je, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(g) : Je(g);
  }
  function Je(g) {
    return e.enter("htmlTextData"), o(g);
  }
}
const ia = {
  name: "labelEnd",
  tokenize: nf,
  resolveTo: tf,
  resolveAll: ef
}, Qd = {
  tokenize: rf
}, Gd = {
  tokenize: af
}, Xd = {
  tokenize: of
};
function ef(e) {
  let t = -1;
  for (; ++t < e.length; ) {
    const n = e[t][1];
    (n.type === "labelImage" || n.type === "labelLink" || n.type === "labelEnd") && (e.splice(t + 1, n.type === "labelImage" ? 4 : 2), n.type = "data", t++);
  }
  return e;
}
function tf(e, t) {
  let n = e.length, r = 0, i, a, o, s;
  for (; n--; )
    if (i = e[n][1], a) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (o) {
      if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (a = n, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (o = n);
  const l = {
    type: e[a][1].type === "labelLink" ? "link" : "image",
    start: Object.assign({}, e[a][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, u = {
    type: "label",
    start: Object.assign({}, e[a][1].start),
    end: Object.assign({}, e[o][1].end)
  }, c = {
    type: "labelText",
    start: Object.assign({}, e[a + r + 2][1].end),
    end: Object.assign({}, e[o - 2][1].start)
  };
  return s = [["enter", l, t], ["enter", u, t]], s = dt(s, e.slice(a + 1, a + r + 3)), s = dt(s, [["enter", c, t]]), s = dt(s, ra(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t)), s = dt(s, [["exit", c, t], e[o - 2], e[o - 1], ["exit", u, t]]), s = dt(s, e.slice(o + 1)), s = dt(s, [["exit", l, t]]), Kt(e, a, e.length, s), e;
}
function nf(e, t, n) {
  const r = this;
  let i = r.events.length, a, o;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      a = r.events[i][1];
      break;
    }
  return s;
  function s(m) {
    return a ? a._inactive ? f(m) : (o = r.parser.defined.includes(Zn(r.sliceSerialize({
      start: a.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(m), e.exit("labelMarker"), e.exit("labelEnd"), l) : n(m);
  }
  function l(m) {
    return m === 40 ? e.attempt(Qd, c, o ? c : f)(m) : m === 91 ? e.attempt(Gd, c, o ? u : f)(m) : o ? c(m) : f(m);
  }
  function u(m) {
    return e.attempt(Xd, c, f)(m);
  }
  function c(m) {
    return t(m);
  }
  function f(m) {
    return a._balanced = !0, n(m);
  }
}
function rf(e, t, n) {
  return r;
  function r(f) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), i;
  }
  function i(f) {
    return tt(f) ? hr(e, a)(f) : a(f);
  }
  function a(f) {
    return f === 41 ? c(f) : us(e, o, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(f);
  }
  function o(f) {
    return tt(f) ? hr(e, l)(f) : c(f);
  }
  function s(f) {
    return n(f);
  }
  function l(f) {
    return f === 34 || f === 39 || f === 40 ? ds(e, u, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(f) : c(f);
  }
  function u(f) {
    return tt(f) ? hr(e, c)(f) : c(f);
  }
  function c(f) {
    return f === 41 ? (e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), e.exit("resource"), t) : n(f);
  }
}
function af(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return cs.call(r, e, a, o, "reference", "referenceMarker", "referenceString")(s);
  }
  function a(s) {
    return r.parser.defined.includes(Zn(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(s) : n(s);
  }
  function o(s) {
    return n(s);
  }
}
function of(e, t, n) {
  return r;
  function r(a) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), i;
  }
  function i(a) {
    return a === 93 ? (e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), e.exit("reference"), t) : n(a);
  }
}
const sf = {
  name: "labelStartImage",
  tokenize: lf,
  resolveAll: ia.resolveAll
};
function lf(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(s), e.exit("labelImageMarker"), a;
  }
  function a(s) {
    return s === 91 ? (e.enter("labelMarker"), e.consume(s), e.exit("labelMarker"), e.exit("labelImage"), o) : n(s);
  }
  function o(s) {
    return s === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(s) : t(s);
  }
}
const uf = {
  name: "labelStartLink",
  tokenize: cf,
  resolveAll: ia.resolveAll
};
function cf(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(o), e.exit("labelMarker"), e.exit("labelLink"), a;
  }
  function a(o) {
    return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(o) : t(o);
  }
}
const bi = {
  name: "lineEnding",
  tokenize: df
};
function df(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), we(e, t, "linePrefix");
  }
}
const Zr = {
  name: "thematicBreak",
  tokenize: ff
};
function ff(e, t, n) {
  let r = 0, i;
  return a;
  function a(u) {
    return e.enter("thematicBreak"), o(u);
  }
  function o(u) {
    return i = u, s(u);
  }
  function s(u) {
    return u === i ? (e.enter("thematicBreakSequence"), l(u)) : r >= 3 && (u === null || Y(u)) ? (e.exit("thematicBreak"), t(u)) : n(u);
  }
  function l(u) {
    return u === i ? (e.consume(u), r++, l) : (e.exit("thematicBreakSequence"), fe(u) ? we(e, s, "whitespace")(u) : s(u));
  }
}
const et = {
  name: "list",
  tokenize: mf,
  continuation: {
    tokenize: gf
  },
  exit: vf
}, hf = {
  tokenize: xf,
  partial: !0
}, pf = {
  tokenize: yf,
  partial: !0
};
function mf(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
  return s;
  function s(h) {
    const x = r.containerState.type || (h === 42 || h === 43 || h === 45 ? "listUnordered" : "listOrdered");
    if (x === "listUnordered" ? !r.containerState.marker || h === r.containerState.marker : Vi(h)) {
      if (r.containerState.type || (r.containerState.type = x, e.enter(x, {
        _container: !0
      })), x === "listUnordered")
        return e.enter("listItemPrefix"), h === 42 || h === 45 ? e.check(Zr, n, u)(h) : u(h);
      if (!r.interrupt || h === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), l(h);
    }
    return n(h);
  }
  function l(h) {
    return Vi(h) && ++o < 10 ? (e.consume(h), l) : (!r.interrupt || o < 2) && (r.containerState.marker ? h === r.containerState.marker : h === 41 || h === 46) ? (e.exit("listItemValue"), u(h)) : n(h);
  }
  function u(h) {
    return e.enter("listItemMarker"), e.consume(h), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || h, e.check(
      ri,
      // Can’t be empty when interrupting.
      r.interrupt ? n : c,
      e.attempt(hf, m, f)
    );
  }
  function c(h) {
    return r.containerState.initialBlankLine = !0, a++, m(h);
  }
  function f(h) {
    return fe(h) ? (e.enter("listItemPrefixWhitespace"), e.consume(h), e.exit("listItemPrefixWhitespace"), m) : n(h);
  }
  function m(h) {
    return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(h);
  }
}
function gf(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(ri, i, a);
  function i(s) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, we(e, t, "listItemIndent", r.containerState.size + 1)(s);
  }
  function a(s) {
    return r.containerState.furtherBlankLines || !fe(s) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(s)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(pf, t, o)(s));
  }
  function o(s) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, we(e, e.attempt(et, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(s);
  }
}
function yf(e, t, n) {
  const r = this;
  return we(e, i, "listItemIndent", r.containerState.size + 1);
  function i(a) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "listItemIndent" && o[2].sliceSerialize(o[1], !0).length === r.containerState.size ? t(a) : n(a);
  }
}
function vf(e) {
  e.exit(this.containerState.type);
}
function xf(e, t, n) {
  const r = this;
  return we(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(a) {
    const o = r.events[r.events.length - 1];
    return !fe(a) && o && o[1].type === "listItemPrefixWhitespace" ? t(a) : n(a);
  }
}
const Wa = {
  name: "setextUnderline",
  tokenize: wf,
  resolveTo: bf
};
function bf(e, t) {
  let n = e.length, r, i, a;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (i = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1), !a && e[n][1].type === "definition" && (a = n);
  const o = {
    type: "setextHeading",
    start: Object.assign({}, e[i][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  };
  return e[i][1].type = "setextHeadingText", a ? (e.splice(i, 0, ["enter", o, t]), e.splice(a + 1, 0, ["exit", e[r][1], t]), e[r][1].end = Object.assign({}, e[a][1].end)) : e[r][1] = o, e.push(["exit", o, t]), e;
}
function wf(e, t, n) {
  const r = this;
  let i;
  return a;
  function a(u) {
    let c = r.events.length, f;
    for (; c--; )
      if (r.events[c][1].type !== "lineEnding" && r.events[c][1].type !== "linePrefix" && r.events[c][1].type !== "content") {
        f = r.events[c][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || f) ? (e.enter("setextHeadingLine"), i = u, o(u)) : n(u);
  }
  function o(u) {
    return e.enter("setextHeadingLineSequence"), s(u);
  }
  function s(u) {
    return u === i ? (e.consume(u), s) : (e.exit("setextHeadingLineSequence"), fe(u) ? we(e, l, "lineSuffix")(u) : l(u));
  }
  function l(u) {
    return u === null || Y(u) ? (e.exit("setextHeadingLine"), t(u)) : n(u);
  }
}
const kf = {
  tokenize: _f
};
function _f(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    ri,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(
      this.parser.constructs.flowInitial,
      i,
      we(
        e,
        e.attempt(
          this.parser.constructs.flow,
          i,
          e.attempt(Od, i)
        ),
        "linePrefix"
      )
    )
  );
  return n;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(a), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
  }
  function i(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), t.currentConstruct = void 0, n;
  }
}
const Sf = {
  resolveAll: hs()
}, Cf = fs("string"), Ef = fs("text");
function fs(e) {
  return {
    tokenize: t,
    resolveAll: hs(
      e === "text" ? Of : void 0
    )
  };
  function t(n) {
    const r = this, i = this.parser.constructs[e], a = n.attempt(i, o, s);
    return o;
    function o(c) {
      return u(c) ? a(c) : s(c);
    }
    function s(c) {
      if (c === null) {
        n.consume(c);
        return;
      }
      return n.enter("data"), n.consume(c), l;
    }
    function l(c) {
      return u(c) ? (n.exit("data"), a(c)) : (n.consume(c), l);
    }
    function u(c) {
      if (c === null)
        return !0;
      const f = i[c];
      let m = -1;
      if (f)
        for (; ++m < f.length; ) {
          const h = f[m];
          if (!h.previous || h.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function hs(e) {
  return t;
  function t(n, r) {
    let i = -1, a;
    for (; ++i <= n.length; )
      a === void 0 ? n[i] && n[i][1].type === "data" && (a = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== a + 2 && (n[a][1].end = n[i - 1][1].end, n.splice(a + 2, i - a - 2), i = a + 2), a = void 0);
    return e ? e(n, r) : n;
  }
}
function Of(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], i = t.sliceStream(r);
      let a = i.length, o = -1, s = 0, l;
      for (; a--; ) {
        const u = i[a];
        if (typeof u == "string") {
          for (o = u.length; u.charCodeAt(o - 1) === 32; )
            s++, o--;
          if (o) break;
          o = -1;
        } else if (u === -2)
          l = !0, s++;
        else if (u !== -1) {
          a++;
          break;
        }
      }
      if (s) {
        const u = {
          type: n === e.length || l || s < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            line: r.end.line,
            column: r.end.column - s,
            offset: r.end.offset - s,
            _index: r.start._index + a,
            _bufferIndex: a ? o : r.start._bufferIndex + o
          },
          end: Object.assign({}, r.end)
        };
        r.end = Object.assign({}, u.start), r.start.offset === r.end.offset ? Object.assign(r, u) : (e.splice(
          n,
          0,
          ["enter", u, t],
          ["exit", u, t]
        ), n += 2);
      }
      n++;
    }
  return e;
}
function Tf(e, t, n) {
  let r = Object.assign(
    n ? Object.assign({}, n) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const i = {}, a = [];
  let o = [], s = [];
  const l = {
    consume: O,
    enter: _,
    exit: P,
    attempt: K(T),
    check: K(w),
    interrupt: K(w, {
      interrupt: !0
    })
  }, u = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser: e,
    sliceStream: h,
    sliceSerialize: m,
    now: x,
    defineSkip: E,
    write: f
  };
  let c = t.tokenize.call(u, l);
  return t.resolveAll && a.push(t), u;
  function f(Z) {
    return o = dt(o, Z), R(), o[o.length - 1] !== null ? [] : (he(t, 0), u.events = ra(a, u.events, u), u.events);
  }
  function m(Z, V) {
    return Pf(h(Z), V);
  }
  function h(Z) {
    return jf(o, Z);
  }
  function x() {
    const { line: Z, column: V, offset: ae, _index: pe, _bufferIndex: X } = r;
    return {
      line: Z,
      column: V,
      offset: ae,
      _index: pe,
      _bufferIndex: X
    };
  }
  function E(Z) {
    i[Z.line] = Z.column, ge();
  }
  function R() {
    let Z;
    for (; r._index < o.length; ) {
      const V = o[r._index];
      if (typeof V == "string")
        for (Z = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === Z && r._bufferIndex < V.length; )
          b(V.charCodeAt(r._bufferIndex));
      else
        b(V);
    }
  }
  function b(Z) {
    c = c(Z);
  }
  function O(Z) {
    Y(Z) ? (r.line++, r.column = 1, r.offset += Z === -3 ? 2 : 1, ge()) : Z !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = Z;
  }
  function _(Z, V) {
    const ae = V || {};
    return ae.type = Z, ae.start = x(), u.events.push(["enter", ae, u]), s.push(ae), ae;
  }
  function P(Z) {
    const V = s.pop();
    return V.end = x(), u.events.push(["exit", V, u]), V;
  }
  function T(Z, V) {
    he(Z, V.from);
  }
  function w(Z, V) {
    V.restore();
  }
  function K(Z, V) {
    return ae;
    function ae(pe, X, Pe) {
      let Te, Be, Je, g;
      return Array.isArray(pe) ? Qe(pe) : "tokenize" in pe ? (
        // @ts-expect-error Looks like a construct.
        Qe([pe])
      ) : Ve(pe);
      function Ve(Ce) {
        return pt;
        function pt(qe) {
          const st = qe !== null && Ce[qe], Ue = qe !== null && Ce.null, Ft = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(st) ? st : st ? [st] : [],
            ...Array.isArray(Ue) ? Ue : Ue ? [Ue] : []
          ];
          return Qe(Ft)(qe);
        }
      }
      function Qe(Ce) {
        return Te = Ce, Be = 0, Ce.length === 0 ? Pe : v(Ce[Be]);
      }
      function v(Ce) {
        return pt;
        function pt(qe) {
          return g = ue(), Je = Ce, Ce.partial || (u.currentConstruct = Ce), Ce.name && u.parser.constructs.disable.null.includes(Ce.name) ? ht() : Ce.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            V ? Object.assign(Object.create(u), V) : u,
            l,
            We,
            ht
          )(qe);
        }
      }
      function We(Ce) {
        return Z(Je, g), X;
      }
      function ht(Ce) {
        return g.restore(), ++Be < Te.length ? v(Te[Be]) : Pe;
      }
    }
  }
  function he(Z, V) {
    Z.resolveAll && !a.includes(Z) && a.push(Z), Z.resolve && Kt(
      u.events,
      V,
      u.events.length - V,
      Z.resolve(u.events.slice(V), u)
    ), Z.resolveTo && (u.events = Z.resolveTo(u.events, u));
  }
  function ue() {
    const Z = x(), V = u.previous, ae = u.currentConstruct, pe = u.events.length, X = Array.from(s);
    return {
      restore: Pe,
      from: pe
    };
    function Pe() {
      r = Z, u.previous = V, u.currentConstruct = ae, u.events.length = pe, s = X, ge();
    }
  }
  function ge() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function jf(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, i = t.end._index, a = t.end._bufferIndex;
  let o;
  if (n === i)
    o = [e[n].slice(r, a)];
  else {
    if (o = e.slice(n, i), r > -1) {
      const s = o[0];
      typeof s == "string" ? o[0] = s.slice(r) : o.shift();
    }
    a > 0 && o.push(e[i].slice(0, a));
  }
  return o;
}
function Pf(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const a = e[n];
    let o;
    if (typeof a == "string")
      o = a;
    else
      switch (a) {
        case -5: {
          o = "\r";
          break;
        }
        case -4: {
          o = `
`;
          break;
        }
        case -3: {
          o = `\r
`;
          break;
        }
        case -2: {
          o = t ? " " : "	";
          break;
        }
        case -1: {
          if (!t && i) continue;
          o = " ";
          break;
        }
        default:
          o = String.fromCharCode(a);
      }
    i = a === -2, r.push(o);
  }
  return r.join("");
}
const If = {
  42: et,
  43: et,
  45: et,
  48: et,
  49: et,
  50: et,
  51: et,
  52: et,
  53: et,
  54: et,
  55: et,
  56: et,
  57: et,
  62: as
}, Nf = {
  91: Nd
}, Af = {
  [-2]: xi,
  [-1]: xi,
  32: xi
}, Mf = {
  35: Dd,
  42: Zr,
  45: [Wa, Zr],
  60: Ud,
  61: Wa,
  95: Zr,
  96: Ha,
  126: Ha
}, Rf = {
  38: ss,
  92: os
}, Lf = {
  [-5]: bi,
  [-4]: bi,
  [-3]: bi,
  33: sf,
  38: ss,
  42: Ui,
  60: [ld, Kd],
  91: uf,
  92: [Ld, os],
  93: ia,
  95: Ui,
  96: wd
}, zf = {
  null: [Ui, Sf]
}, Df = {
  null: [42, 95]
}, Ff = {
  null: []
}, Bf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: Df,
  contentInitial: Nf,
  disable: Ff,
  document: If,
  flow: Mf,
  flowInitial: Af,
  insideSpan: zf,
  string: Rf,
  text: Lf
}, Symbol.toStringTag, { value: "Module" }));
function Vf(e) {
  const n = (
    /** @type {FullNormalizedExtension} */
    qc([Bf, ...(e || {}).extensions || []])
  ), r = {
    defined: [],
    lazy: {},
    constructs: n,
    content: i(td),
    document: i(rd),
    flow: i(kf),
    string: i(Cf),
    text: i(Ef)
  };
  return r;
  function i(a) {
    return o;
    function o(s) {
      return Tf(r, a, s);
    }
  }
}
function Uf(e) {
  for (; !ls(e); )
    ;
  return e;
}
const qa = /[\0\t\n\r]/g;
function Zf() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(a, o, s) {
    const l = [];
    let u, c, f, m, h;
    for (a = t + (typeof a == "string" ? a.toString() : new TextDecoder(o || void 0).decode(a)), f = 0, t = "", n && (a.charCodeAt(0) === 65279 && f++, n = void 0); f < a.length; ) {
      if (qa.lastIndex = f, u = qa.exec(a), m = u && u.index !== void 0 ? u.index : a.length, h = a.charCodeAt(m), !u) {
        t = a.slice(f);
        break;
      }
      if (h === 10 && f === m && r)
        l.push(-3), r = void 0;
      else
        switch (r && (l.push(-5), r = void 0), f < m && (l.push(a.slice(f, m)), e += m - f), h) {
          case 0: {
            l.push(65533), e++;
            break;
          }
          case 9: {
            for (c = Math.ceil(e / 4) * 4, l.push(-2); e++ < c; ) l.push(-1);
            break;
          }
          case 10: {
            l.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      f = m + 1;
    }
    return s && (r && l.push(-5), t && l.push(t), l.push(null)), l;
  }
}
const Hf = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function $f(e) {
  return e.replace(Hf, Wf);
}
function Wf(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), a = i === 120 || i === 88;
    return is(n.slice(a ? 2 : 1), a ? 16 : 10);
  }
  return na(n) || e;
}
const ps = {}.hasOwnProperty;
function qf(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), Yf(n)(Uf(Vf(n).document().write(Zf()(e, t, !0))));
}
function Yf(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: a(Et),
      autolinkProtocol: ue,
      autolinkEmail: ue,
      atxHeading: a(mt),
      blockQuote: a(Ue),
      characterEscape: ue,
      characterReference: ue,
      codeFenced: a(Ft),
      codeFencedFenceInfo: o,
      codeFencedFenceMeta: o,
      codeIndented: a(Ft, o),
      codeText: a(Jt, o),
      codeTextData: ue,
      data: ue,
      codeFlowValue: ue,
      definition: a(Ct),
      definitionDestinationString: o,
      definitionLabelString: o,
      definitionTitleString: o,
      emphasis: a(On),
      hardBreakEscape: a(gt),
      hardBreakTrailing: a(gt),
      htmlFlow: a(Qt, o),
      htmlFlowData: ue,
      htmlText: a(Qt, o),
      htmlTextData: ue,
      image: a(lt),
      label: o,
      link: a(Et),
      listItem: a(jn),
      listItemValue: m,
      listOrdered: a(Tn, f),
      listUnordered: a(Tn),
      paragraph: a(pn),
      reference: v,
      referenceString: o,
      resourceDestinationString: o,
      resourceTitleString: o,
      setextHeading: a(mt),
      strong: a(Kn),
      thematicBreak: a(mn)
    },
    exit: {
      atxHeading: l(),
      atxHeadingSequence: T,
      autolink: l(),
      autolinkEmail: st,
      autolinkProtocol: qe,
      blockQuote: l(),
      characterEscapeValue: ge,
      characterReferenceMarkerHexadecimal: ht,
      characterReferenceMarkerNumeric: ht,
      characterReferenceValue: Ce,
      characterReference: pt,
      codeFenced: l(R),
      codeFencedFence: E,
      codeFencedFenceInfo: h,
      codeFencedFenceMeta: x,
      codeFlowValue: ge,
      codeIndented: l(b),
      codeText: l(X),
      codeTextData: ge,
      data: ge,
      definition: l(),
      definitionDestinationString: P,
      definitionLabelString: O,
      definitionTitleString: _,
      emphasis: l(),
      hardBreakEscape: l(V),
      hardBreakTrailing: l(V),
      htmlFlow: l(ae),
      htmlFlowData: ge,
      htmlText: l(pe),
      htmlTextData: ge,
      image: l(Te),
      label: Je,
      labelText: Be,
      lineEnding: Z,
      link: l(Pe),
      listItem: l(),
      listOrdered: l(),
      listUnordered: l(),
      paragraph: l(),
      referenceString: We,
      resourceDestinationString: g,
      resourceTitleString: Ve,
      resource: Qe,
      setextHeading: l(he),
      setextHeadingLineSequence: K,
      setextHeadingText: w,
      strong: l(),
      thematicBreak: l()
    }
  };
  ms(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(C) {
    let N = {
      type: "root",
      children: []
    };
    const U = {
      stack: [N],
      tokenStack: [],
      config: t,
      enter: s,
      exit: u,
      buffer: o,
      resume: c,
      data: n
    }, J = [];
    let se = -1;
    for (; ++se < C.length; )
      if (C[se][1].type === "listOrdered" || C[se][1].type === "listUnordered")
        if (C[se][0] === "enter")
          J.push(se);
        else {
          const Le = J.pop();
          se = i(C, Le, se);
        }
    for (se = -1; ++se < C.length; ) {
      const Le = t[C[se][0]];
      ps.call(Le, C[se][1].type) && Le[C[se][1].type].call(Object.assign({
        sliceSerialize: C[se][2].sliceSerialize
      }, U), C[se][1]);
    }
    if (U.tokenStack.length > 0) {
      const Le = U.tokenStack[U.tokenStack.length - 1];
      (Le[1] || Ya).call(U, void 0, Le[0]);
    }
    for (N.position = {
      start: an(C.length > 0 ? C[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: an(C.length > 0 ? C[C.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, se = -1; ++se < t.transforms.length; )
      N = t.transforms[se](N) || N;
    return N;
  }
  function i(C, N, U) {
    let J = N - 1, se = -1, Le = !1, ut, nt, yt, Ot;
    for (; ++J <= U; ) {
      const De = C[J];
      switch (De[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          De[0] === "enter" ? se++ : se--, Ot = void 0;
          break;
        }
        case "lineEndingBlank": {
          De[0] === "enter" && (ut && !Ot && !se && !yt && (yt = J), Ot = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Ot = void 0;
      }
      if (!se && De[0] === "enter" && De[1].type === "listItemPrefix" || se === -1 && De[0] === "exit" && (De[1].type === "listUnordered" || De[1].type === "listOrdered")) {
        if (ut) {
          let vt = J;
          for (nt = void 0; vt--; ) {
            const Ge = C[vt];
            if (Ge[1].type === "lineEnding" || Ge[1].type === "lineEndingBlank") {
              if (Ge[0] === "exit") continue;
              nt && (C[nt][1].type = "lineEndingBlank", Le = !0), Ge[1].type = "lineEnding", nt = vt;
            } else if (!(Ge[1].type === "linePrefix" || Ge[1].type === "blockQuotePrefix" || Ge[1].type === "blockQuotePrefixWhitespace" || Ge[1].type === "blockQuoteMarker" || Ge[1].type === "listItemIndent")) break;
          }
          yt && (!nt || yt < nt) && (ut._spread = !0), ut.end = Object.assign({}, nt ? C[nt][1].start : De[1].end), C.splice(nt || J, 0, ["exit", ut, De[2]]), J++, U++;
        }
        if (De[1].type === "listItemPrefix") {
          const vt = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, De[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          ut = vt, C.splice(J, 0, ["enter", vt, De[2]]), J++, U++, yt = void 0, Ot = !0;
        }
      }
    }
    return C[N][1]._spread = Le, U;
  }
  function a(C, N) {
    return U;
    function U(J) {
      s.call(this, C(J), J), N && N.call(this, J);
    }
  }
  function o() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function s(C, N, U) {
    this.stack[this.stack.length - 1].children.push(C), this.stack.push(C), this.tokenStack.push([N, U]), C.position = {
      start: an(N.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function l(C) {
    return N;
    function N(U) {
      C && C.call(this, U), u.call(this, U);
    }
  }
  function u(C, N) {
    const U = this.stack.pop(), J = this.tokenStack.pop();
    if (J)
      J[0].type !== C.type && (N ? N.call(this, C, J[0]) : (J[1] || Ya).call(this, C, J[0]));
    else throw new Error("Cannot close `" + C.type + "` (" + fr({
      start: C.start,
      end: C.end
    }) + "): it’s not open");
    U.position.end = an(C.end);
  }
  function c() {
    return $c(this.stack.pop());
  }
  function f() {
    this.data.expectingFirstListItemValue = !0;
  }
  function m(C) {
    if (this.data.expectingFirstListItemValue) {
      const N = this.stack[this.stack.length - 2];
      N.start = Number.parseInt(this.sliceSerialize(C), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function h() {
    const C = this.resume(), N = this.stack[this.stack.length - 1];
    N.lang = C;
  }
  function x() {
    const C = this.resume(), N = this.stack[this.stack.length - 1];
    N.meta = C;
  }
  function E() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function R() {
    const C = this.resume(), N = this.stack[this.stack.length - 1];
    N.value = C.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function b() {
    const C = this.resume(), N = this.stack[this.stack.length - 1];
    N.value = C.replace(/(\r?\n|\r)$/g, "");
  }
  function O(C) {
    const N = this.resume(), U = this.stack[this.stack.length - 1];
    U.label = N, U.identifier = Zn(this.sliceSerialize(C)).toLowerCase();
  }
  function _() {
    const C = this.resume(), N = this.stack[this.stack.length - 1];
    N.title = C;
  }
  function P() {
    const C = this.resume(), N = this.stack[this.stack.length - 1];
    N.url = C;
  }
  function T(C) {
    const N = this.stack[this.stack.length - 1];
    if (!N.depth) {
      const U = this.sliceSerialize(C).length;
      N.depth = U;
    }
  }
  function w() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function K(C) {
    const N = this.stack[this.stack.length - 1];
    N.depth = this.sliceSerialize(C).codePointAt(0) === 61 ? 1 : 2;
  }
  function he() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function ue(C) {
    const U = this.stack[this.stack.length - 1].children;
    let J = U[U.length - 1];
    (!J || J.type !== "text") && (J = Pn(), J.position = {
      start: an(C.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, U.push(J)), this.stack.push(J);
  }
  function ge(C) {
    const N = this.stack.pop();
    N.value += this.sliceSerialize(C), N.position.end = an(C.end);
  }
  function Z(C) {
    const N = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const U = N.children[N.children.length - 1];
      U.position.end = an(C.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(N.type) && (ue.call(this, C), ge.call(this, C));
  }
  function V() {
    this.data.atHardBreak = !0;
  }
  function ae() {
    const C = this.resume(), N = this.stack[this.stack.length - 1];
    N.value = C;
  }
  function pe() {
    const C = this.resume(), N = this.stack[this.stack.length - 1];
    N.value = C;
  }
  function X() {
    const C = this.resume(), N = this.stack[this.stack.length - 1];
    N.value = C;
  }
  function Pe() {
    const C = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const N = this.data.referenceType || "shortcut";
      C.type += "Reference", C.referenceType = N, delete C.url, delete C.title;
    } else
      delete C.identifier, delete C.label;
    this.data.referenceType = void 0;
  }
  function Te() {
    const C = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const N = this.data.referenceType || "shortcut";
      C.type += "Reference", C.referenceType = N, delete C.url, delete C.title;
    } else
      delete C.identifier, delete C.label;
    this.data.referenceType = void 0;
  }
  function Be(C) {
    const N = this.sliceSerialize(C), U = this.stack[this.stack.length - 2];
    U.label = $f(N), U.identifier = Zn(N).toLowerCase();
  }
  function Je() {
    const C = this.stack[this.stack.length - 1], N = this.resume(), U = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, U.type === "link") {
      const J = C.children;
      U.children = J;
    } else
      U.alt = N;
  }
  function g() {
    const C = this.resume(), N = this.stack[this.stack.length - 1];
    N.url = C;
  }
  function Ve() {
    const C = this.resume(), N = this.stack[this.stack.length - 1];
    N.title = C;
  }
  function Qe() {
    this.data.inReference = void 0;
  }
  function v() {
    this.data.referenceType = "collapsed";
  }
  function We(C) {
    const N = this.resume(), U = this.stack[this.stack.length - 1];
    U.label = N, U.identifier = Zn(this.sliceSerialize(C)).toLowerCase(), this.data.referenceType = "full";
  }
  function ht(C) {
    this.data.characterReferenceType = C.type;
  }
  function Ce(C) {
    const N = this.sliceSerialize(C), U = this.data.characterReferenceType;
    let J;
    U ? (J = is(N, U === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : J = na(N);
    const se = this.stack[this.stack.length - 1];
    se.value += J;
  }
  function pt(C) {
    const N = this.stack.pop();
    N.position.end = an(C.end);
  }
  function qe(C) {
    ge.call(this, C);
    const N = this.stack[this.stack.length - 1];
    N.url = this.sliceSerialize(C);
  }
  function st(C) {
    ge.call(this, C);
    const N = this.stack[this.stack.length - 1];
    N.url = "mailto:" + this.sliceSerialize(C);
  }
  function Ue() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function Ft() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function Jt() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function Ct() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function On() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function mt() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function gt() {
    return {
      type: "break"
    };
  }
  function Qt() {
    return {
      type: "html",
      value: ""
    };
  }
  function lt() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function Et() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Tn(C) {
    return {
      type: "list",
      ordered: C.type === "listOrdered",
      start: null,
      spread: C._spread,
      children: []
    };
  }
  function jn(C) {
    return {
      type: "listItem",
      spread: C._spread,
      checked: null,
      children: []
    };
  }
  function pn() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Kn() {
    return {
      type: "strong",
      children: []
    };
  }
  function Pn() {
    return {
      type: "text",
      value: ""
    };
  }
  function mn() {
    return {
      type: "thematicBreak"
    };
  }
}
function an(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function ms(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? ms(e, r) : Kf(e, r);
  }
}
function Kf(e, t) {
  let n;
  for (n in t)
    if (ps.call(t, n))
      switch (n) {
        case "canContainEols": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "transforms": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = t[n];
          r && Object.assign(e[n], r);
          break;
        }
      }
}
function Ya(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + fr({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + fr({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + fr({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function Jf(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return qf(r, {
      ...t.data("settings"),
      ...e,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: t.data("micromarkExtensions") || [],
      mdastExtensions: t.data("fromMarkdownExtensions") || []
    });
  }
}
function Qf(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Gf(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function Xf(e, t) {
  const n = t.value ? t.value + `
` : "", r = {};
  t.lang && (r.className = ["language-" + t.lang]);
  let i = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }]
  };
  return t.meta && (i.data = { meta: t.meta }), e.patch(t, i), i = e.applyData(t, i), i = { type: "element", tagName: "pre", properties: {}, children: [i] }, e.patch(t, i), i;
}
function eh(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function th(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function nh(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = Yn(r.toLowerCase()), a = e.footnoteOrder.indexOf(r);
  let o, s = e.footnoteCounts.get(r);
  s === void 0 ? (s = 0, e.footnoteOrder.push(r), o = e.footnoteOrder.length) : o = a + 1, s += 1, e.footnoteCounts.set(r, s);
  const l = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + i,
      id: n + "fnref-" + i + (s > 1 ? "-" + s : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(o) }]
  };
  e.patch(t, l);
  const u = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [l]
  };
  return e.patch(t, u), e.applyData(t, u);
}
function rh(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function ih(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function gs(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), a = i[0];
  a && a.type === "text" ? a.value = "[" + a.value : i.unshift({ type: "text", value: "[" });
  const o = i[i.length - 1];
  return o && o.type === "text" ? o.value += r : i.push({ type: "text", value: r }), i;
}
function ah(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return gs(e, t);
  const i = { src: Yn(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const a = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, a), e.applyData(t, a);
}
function oh(e, t) {
  const n = { src: Yn(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function sh(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [n]
  };
  return e.patch(t, r), e.applyData(t, r);
}
function lh(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return gs(e, t);
  const i = { href: Yn(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const a = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function uh(e, t) {
  const n = { href: Yn(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function ch(e, t, n) {
  const r = e.all(t), i = n ? dh(n) : ys(t), a = {}, o = [];
  if (typeof t.checked == "boolean") {
    const c = r[0];
    let f;
    c && c.type === "element" && c.tagName === "p" ? f = c : (f = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(f)), f.children.length > 0 && f.children.unshift({ type: "text", value: " " }), f.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), a.className = ["task-list-item"];
  }
  let s = -1;
  for (; ++s < r.length; ) {
    const c = r[s];
    (i || s !== 0 || c.type !== "element" || c.tagName !== "p") && o.push({ type: "text", value: `
` }), c.type === "element" && c.tagName === "p" && !i ? o.push(...c.children) : o.push(c);
  }
  const l = r[r.length - 1];
  l && (i || l.type !== "element" || l.tagName !== "p") && o.push({ type: "text", value: `
` });
  const u = { type: "element", tagName: "li", properties: a, children: o };
  return e.patch(t, u), e.applyData(t, u);
}
function dh(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = ys(n[r]);
  }
  return t;
}
function ys(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function fh(e, t) {
  const n = {}, r = e.all(t);
  let i = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
    const o = r[i];
    if (o.type === "element" && o.tagName === "li" && o.properties && Array.isArray(o.properties.className) && o.properties.className.includes("task-list-item")) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const a = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function hh(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function ph(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function mh(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function gh(e, t) {
  const n = e.all(t), r = n.shift(), i = [];
  if (r) {
    const o = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(t.children[0], o), i.push(o);
  }
  if (n.length > 0) {
    const o = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(n, !0)
    }, s = Gi(t.children[1]), l = Qo(t.children[t.children.length - 1]);
    s && l && (o.position = { start: s, end: l }), i.push(o);
  }
  const a = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function yh(e, t, n) {
  const r = n ? n.children : void 0, a = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", o = n && n.type === "table" ? n.align : void 0, s = o ? o.length : t.children.length;
  let l = -1;
  const u = [];
  for (; ++l < s; ) {
    const f = t.children[l], m = {}, h = o ? o[l] : void 0;
    h && (m.align = h);
    let x = { type: "element", tagName: a, properties: m, children: [] };
    f && (x.children = e.all(f), e.patch(f, x), x = e.applyData(f, x)), u.push(x);
  }
  const c = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(u, !0)
  };
  return e.patch(t, c), e.applyData(t, c);
}
function vh(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Ka = 9, Ja = 32;
function xh(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const a = [];
  for (; r; )
    a.push(
      Qa(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return a.push(Qa(t.slice(i), i > 0, !1)), a.join("");
}
function Qa(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let a = e.codePointAt(r);
    for (; a === Ka || a === Ja; )
      r++, a = e.codePointAt(r);
  }
  if (n) {
    let a = e.codePointAt(i - 1);
    for (; a === Ka || a === Ja; )
      i--, a = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function bh(e, t) {
  const n = { type: "text", value: xh(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function wh(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const kh = {
  blockquote: Qf,
  break: Gf,
  code: Xf,
  delete: eh,
  emphasis: th,
  footnoteReference: nh,
  heading: rh,
  html: ih,
  imageReference: ah,
  image: oh,
  inlineCode: sh,
  linkReference: lh,
  link: uh,
  listItem: ch,
  list: fh,
  paragraph: hh,
  // @ts-expect-error: root is different, but hard to type.
  root: ph,
  strong: mh,
  table: gh,
  tableCell: vh,
  tableRow: yh,
  text: bh,
  thematicBreak: wh,
  toml: Dr,
  yaml: Dr,
  definition: Dr,
  footnoteDefinition: Dr
};
function Dr() {
}
const vs = -1, ii = 0, Xr = 1, ei = 2, aa = 3, oa = 4, sa = 5, la = 6, xs = 7, bs = 8, Ga = typeof self == "object" ? self : globalThis, _h = (e, t) => {
  const n = (i, a) => (e.set(a, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [a, o] = t[i];
    switch (a) {
      case ii:
      case vs:
        return n(o, i);
      case Xr: {
        const s = n([], i);
        for (const l of o)
          s.push(r(l));
        return s;
      }
      case ei: {
        const s = n({}, i);
        for (const [l, u] of o)
          s[r(l)] = r(u);
        return s;
      }
      case aa:
        return n(new Date(o), i);
      case oa: {
        const { source: s, flags: l } = o;
        return n(new RegExp(s, l), i);
      }
      case sa: {
        const s = n(/* @__PURE__ */ new Map(), i);
        for (const [l, u] of o)
          s.set(r(l), r(u));
        return s;
      }
      case la: {
        const s = n(/* @__PURE__ */ new Set(), i);
        for (const l of o)
          s.add(r(l));
        return s;
      }
      case xs: {
        const { name: s, message: l } = o;
        return n(new Ga[s](l), i);
      }
      case bs:
        return n(BigInt(o), i);
      case "BigInt":
        return n(Object(BigInt(o)), i);
    }
    return n(new Ga[a](o), i);
  };
  return r;
}, Xa = (e) => _h(/* @__PURE__ */ new Map(), e)(0), Ln = "", { toString: Sh } = {}, { keys: Ch } = Object, tr = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [ii, t];
  const n = Sh.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [Xr, Ln];
    case "Object":
      return [ei, Ln];
    case "Date":
      return [aa, Ln];
    case "RegExp":
      return [oa, Ln];
    case "Map":
      return [sa, Ln];
    case "Set":
      return [la, Ln];
  }
  return n.includes("Array") ? [Xr, n] : n.includes("Error") ? [xs, n] : [ei, n];
}, Fr = ([e, t]) => e === ii && (t === "function" || t === "symbol"), Eh = (e, t, n, r) => {
  const i = (o, s) => {
    const l = r.push(o) - 1;
    return n.set(s, l), l;
  }, a = (o) => {
    if (n.has(o))
      return n.get(o);
    let [s, l] = tr(o);
    switch (s) {
      case ii: {
        let c = o;
        switch (l) {
          case "bigint":
            s = bs, c = o.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + l);
            c = null;
            break;
          case "undefined":
            return i([vs], o);
        }
        return i([s, c], o);
      }
      case Xr: {
        if (l)
          return i([l, [...o]], o);
        const c = [], f = i([s, c], o);
        for (const m of o)
          c.push(a(m));
        return f;
      }
      case ei: {
        if (l)
          switch (l) {
            case "BigInt":
              return i([l, o.toString()], o);
            case "Boolean":
            case "Number":
            case "String":
              return i([l, o.valueOf()], o);
          }
        if (t && "toJSON" in o)
          return a(o.toJSON());
        const c = [], f = i([s, c], o);
        for (const m of Ch(o))
          (e || !Fr(tr(o[m]))) && c.push([a(m), a(o[m])]);
        return f;
      }
      case aa:
        return i([s, o.toISOString()], o);
      case oa: {
        const { source: c, flags: f } = o;
        return i([s, { source: c, flags: f }], o);
      }
      case sa: {
        const c = [], f = i([s, c], o);
        for (const [m, h] of o)
          (e || !(Fr(tr(m)) || Fr(tr(h)))) && c.push([a(m), a(h)]);
        return f;
      }
      case la: {
        const c = [], f = i([s, c], o);
        for (const m of o)
          (e || !Fr(tr(m))) && c.push(a(m));
        return f;
      }
    }
    const { message: u } = o;
    return i([s, { name: l, message: u }], o);
  };
  return a;
}, eo = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return Eh(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, ti = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? Xa(eo(e, t)) : structuredClone(e)
) : (e, t) => Xa(eo(e, t));
function Oh(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function Th(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function jh(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Oh, r = e.options.footnoteBackLabel || Th, i = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, s = [];
  let l = -1;
  for (; ++l < e.footnoteOrder.length; ) {
    const u = e.footnoteById.get(
      e.footnoteOrder[l]
    );
    if (!u)
      continue;
    const c = e.all(u), f = String(u.identifier).toUpperCase(), m = Yn(f.toLowerCase());
    let h = 0;
    const x = [], E = e.footnoteCounts.get(f);
    for (; E !== void 0 && ++h <= E; ) {
      x.length > 0 && x.push({ type: "text", value: " " });
      let O = typeof n == "string" ? n : n(l, h);
      typeof O == "string" && (O = { type: "text", value: O }), x.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + m + (h > 1 ? "-" + h : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(l, h),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(O) ? O : [O]
      });
    }
    const R = c[c.length - 1];
    if (R && R.type === "element" && R.tagName === "p") {
      const O = R.children[R.children.length - 1];
      O && O.type === "text" ? O.value += " " : R.children.push({ type: "text", value: " " }), R.children.push(...x);
    } else
      c.push(...x);
    const b = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + m },
      children: e.wrap(c, !0)
    };
    e.patch(u, b), s.push(b);
  }
  if (s.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: a,
          properties: {
            ...ti(o),
            id: "footnote-label"
          },
          children: [{ type: "text", value: i }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(s, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const ws = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return Ah;
    if (typeof e == "function")
      return ai(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Ph(e) : Ih(e);
    if (typeof e == "string")
      return Nh(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Ph(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = ws(e[n]);
  return ai(r);
  function r(...i) {
    let a = -1;
    for (; ++a < t.length; )
      if (t[a].apply(this, i)) return !0;
    return !1;
  }
}
function Ih(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return ai(n);
  function n(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let a;
    for (a in e)
      if (i[a] !== t[a]) return !1;
    return !0;
  }
}
function Nh(e) {
  return ai(t);
  function t(n) {
    return n && n.type === e;
  }
}
function ai(e) {
  return t;
  function t(n, r, i) {
    return !!(Mh(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function Ah() {
  return !0;
}
function Mh(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const ks = [], Rh = !0, to = !1, Lh = "skip";
function zh(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const a = ws(i), o = r ? -1 : 1;
  s(e, void 0, [])();
  function s(l, u, c) {
    const f = (
      /** @type {Record<string, unknown>} */
      l && typeof l == "object" ? l : {}
    );
    if (typeof f.type == "string") {
      const h = (
        // `hast`
        typeof f.tagName == "string" ? f.tagName : (
          // `xast`
          typeof f.name == "string" ? f.name : void 0
        )
      );
      Object.defineProperty(m, "name", {
        value: "node (" + (l.type + (h ? "<" + h + ">" : "")) + ")"
      });
    }
    return m;
    function m() {
      let h = ks, x, E, R;
      if ((!t || a(l, u, c[c.length - 1] || void 0)) && (h = Dh(n(l, c)), h[0] === to))
        return h;
      if ("children" in l && l.children) {
        const b = (
          /** @type {UnistParent} */
          l
        );
        if (b.children && h[0] !== Lh)
          for (E = (r ? b.children.length : -1) + o, R = c.concat(b); E > -1 && E < b.children.length; ) {
            const O = b.children[E];
            if (x = s(O, E, R)(), x[0] === to)
              return x;
            E = typeof x[1] == "number" ? x[1] : E + o;
          }
      }
      return h;
    }
  }
}
function Dh(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Rh, e] : e == null ? ks : [e];
}
function _s(e, t, n, r) {
  let i, a, o;
  typeof t == "function" && typeof n != "function" ? (a = void 0, o = t, i = n) : (a = t, o = n, i = r), zh(e, a, s, i);
  function s(l, u) {
    const c = u[u.length - 1], f = c ? c.children.indexOf(l) : void 0;
    return o(l, f, c);
  }
}
const Zi = {}.hasOwnProperty, Fh = {};
function Bh(e, t) {
  const n = t || Fh, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), o = { ...kh, ...n.handlers }, s = {
    all: u,
    applyData: Uh,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: a,
    footnoteOrder: [],
    handlers: o,
    one: l,
    options: n,
    patch: Vh,
    wrap: Hh
  };
  return _s(e, function(c) {
    if (c.type === "definition" || c.type === "footnoteDefinition") {
      const f = c.type === "definition" ? r : i, m = String(c.identifier).toUpperCase();
      f.has(m) || f.set(m, c);
    }
  }), s;
  function l(c, f) {
    const m = c.type, h = s.handlers[m];
    if (Zi.call(s.handlers, m) && h)
      return h(s, c, f);
    if (s.options.passThrough && s.options.passThrough.includes(m)) {
      if ("children" in c) {
        const { children: E, ...R } = c, b = ti(R);
        return b.children = s.all(c), b;
      }
      return ti(c);
    }
    return (s.options.unknownHandler || Zh)(s, c, f);
  }
  function u(c) {
    const f = [];
    if ("children" in c) {
      const m = c.children;
      let h = -1;
      for (; ++h < m.length; ) {
        const x = s.one(m[h], c);
        if (x) {
          if (h && m[h - 1].type === "break" && (!Array.isArray(x) && x.type === "text" && (x.value = no(x.value)), !Array.isArray(x) && x.type === "element")) {
            const E = x.children[0];
            E && E.type === "text" && (E.value = no(E.value));
          }
          Array.isArray(x) ? f.push(...x) : f.push(x);
        }
      }
    }
    return f;
  }
}
function Vh(e, t) {
  e.position && (t.position = wc(e));
}
function Uh(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, a = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element")
        n.tagName = r;
      else {
        const o = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: o };
      }
    n.type === "element" && a && Object.assign(n.properties, ti(a)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function Zh(e, t) {
  const n = t.data || {}, r = "value" in t && !(Zi.call(n, "hProperties") || Zi.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Hh(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function no(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function ro(e, t) {
  const n = Bh(e, t), r = n.one(e, void 0), i = jh(n), a = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && a.children.push({ type: "text", value: `
` }, i), a;
}
function $h(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      ro(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      ro(n, { file: r, ...t || e })
    );
  };
}
function io(e) {
  if (e)
    throw e;
}
var Hr = Object.prototype.hasOwnProperty, Ss = Object.prototype.toString, ao = Object.defineProperty, oo = Object.getOwnPropertyDescriptor, so = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : Ss.call(t) === "[object Array]";
}, lo = function(t) {
  if (!t || Ss.call(t) !== "[object Object]")
    return !1;
  var n = Hr.call(t, "constructor"), r = t.constructor && t.constructor.prototype && Hr.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !n && !r)
    return !1;
  var i;
  for (i in t)
    ;
  return typeof i > "u" || Hr.call(t, i);
}, uo = function(t, n) {
  ao && n.name === "__proto__" ? ao(t, n.name, {
    enumerable: !0,
    configurable: !0,
    value: n.newValue,
    writable: !0
  }) : t[n.name] = n.newValue;
}, co = function(t, n) {
  if (n === "__proto__")
    if (Hr.call(t, n)) {
      if (oo)
        return oo(t, n).value;
    } else return;
  return t[n];
}, Wh = function e() {
  var t, n, r, i, a, o, s = arguments[0], l = 1, u = arguments.length, c = !1;
  for (typeof s == "boolean" && (c = s, s = arguments[1] || {}, l = 2), (s == null || typeof s != "object" && typeof s != "function") && (s = {}); l < u; ++l)
    if (t = arguments[l], t != null)
      for (n in t)
        r = co(s, n), i = co(t, n), s !== i && (c && i && (lo(i) || (a = so(i))) ? (a ? (a = !1, o = r && so(r) ? r : []) : o = r && lo(r) ? r : {}, uo(s, { name: n, newValue: e(c, o, i) })) : typeof i < "u" && uo(s, { name: n, newValue: i }));
  return s;
};
const wi = /* @__PURE__ */ As(Wh);
function Hi(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function qh() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...i) {
    let a = -1;
    const o = i.pop();
    if (typeof o != "function")
      throw new TypeError("Expected function as last argument, not " + o);
    s(null, ...i);
    function s(l, ...u) {
      const c = e[++a];
      let f = -1;
      if (l) {
        o(l);
        return;
      }
      for (; ++f < i.length; )
        (u[f] === null || u[f] === void 0) && (u[f] = i[f]);
      i = u, c ? Yh(c, s)(...u) : o(null, ...u);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + i
      );
    return e.push(i), t;
  }
}
function Yh(e, t) {
  let n;
  return r;
  function r(...o) {
    const s = e.length > o.length;
    let l;
    s && o.push(i);
    try {
      l = e.apply(this, o);
    } catch (u) {
      const c = (
        /** @type {Error} */
        u
      );
      if (s && n)
        throw c;
      return i(c);
    }
    s || (l && l.then && typeof l.then == "function" ? l.then(a, i) : l instanceof Error ? i(l) : a(l));
  }
  function i(o, ...s) {
    n || (n = !0, t(o, ...s));
  }
  function a(o) {
    i(null, o);
  }
}
const At = { basename: Kh, dirname: Jh, extname: Qh, join: Gh, sep: "/" };
function Kh(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  Nr(e);
  let n = 0, r = -1, i = e.length, a;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (a) {
          n = i + 1;
          break;
        }
      } else r < 0 && (a = !0, r = i + 1);
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e)
    return "";
  let o = -1, s = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (a) {
        n = i + 1;
        break;
      }
    } else
      o < 0 && (a = !0, o = i + 1), s > -1 && (e.codePointAt(i) === t.codePointAt(s--) ? s < 0 && (r = i) : (s = -1, r = o));
  return n === r ? r = o : r < 0 && (r = e.length), e.slice(n, r);
}
function Jh(e) {
  if (Nr(e), e.length === 0)
    return ".";
  let t = -1, n = e.length, r;
  for (; --n; )
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function Qh(e) {
  Nr(e);
  let t = e.length, n = -1, r = 0, i = -1, a = 0, o;
  for (; t--; ) {
    const s = e.codePointAt(t);
    if (s === 47) {
      if (o) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (o = !0, n = t + 1), s === 46 ? i < 0 ? i = t : a !== 1 && (a = 1) : i > -1 && (a = -1);
  }
  return i < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  a === 0 || // The (right-most) trimmed path component is exactly `..`.
  a === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function Gh(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    Nr(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : Xh(n);
}
function Xh(e) {
  Nr(e);
  const t = e.codePointAt(0) === 47;
  let n = ep(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function ep(e, t) {
  let n = "", r = 0, i = -1, a = 0, o = -1, s, l;
  for (; ++o <= e.length; ) {
    if (o < e.length)
      s = e.codePointAt(o);
    else {
      if (s === 47)
        break;
      s = 47;
    }
    if (s === 47) {
      if (!(i === o - 1 || a === 1)) if (i !== o - 1 && a === 2) {
        if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
          if (n.length > 2) {
            if (l = n.lastIndexOf("/"), l !== n.length - 1) {
              l < 0 ? (n = "", r = 0) : (n = n.slice(0, l), r = n.length - 1 - n.lastIndexOf("/")), i = o, a = 0;
              continue;
            }
          } else if (n.length > 0) {
            n = "", r = 0, i = o, a = 0;
            continue;
          }
        }
        t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += "/" + e.slice(i + 1, o) : n = e.slice(i + 1, o), r = o - i - 1;
      i = o, a = 0;
    } else s === 46 && a > -1 ? a++ : a = -1;
  }
  return n;
}
function Nr(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const tp = { cwd: np };
function np() {
  return "/";
}
function $i(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function rp(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!$i(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return ip(e);
}
function ip(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const r = t.codePointAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
  return decodeURIComponent(t);
}
const ki = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class Cs {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(t) {
    let n;
    t ? $i(t) ? n = { path: t } : typeof t == "string" || ap(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : tp.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < ki.length; ) {
      const a = ki[r];
      a in n && n[a] !== void 0 && n[a] !== null && (this[a] = a === "history" ? [...n[a]] : n[a]);
    }
    let i;
    for (i in n)
      ki.includes(i) || (this[i] = n[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? At.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(t) {
    Si(t, "basename"), _i(t, "basename"), this.path = At.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? At.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(t) {
    fo(this.basename, "dirname"), this.path = At.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? At.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(t) {
    if (_i(t, "extname"), fo(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = At.join(this.dirname, this.stem + (t || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(t) {
    $i(t) && (t = rp(t)), Si(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? At.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(t) {
    Si(t, "stem"), _i(t, "stem"), this.path = At.join(this.dirname || "", t + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(t, n, r) {
    const i = this.message(t, n, r);
    throw i.fatal = !0, i;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(t, n, r) {
    const i = this.message(t, n, r);
    return i.fatal = void 0, i;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(t, n, r) {
    const i = new $e(
      // @ts-expect-error: the overloads are fine.
      t,
      n,
      r
    );
    return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(t) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value);
  }
}
function _i(e, t) {
  if (e && e.includes(At.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + At.sep + "`"
    );
}
function Si(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function fo(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function ap(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const op = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(e) {
    const r = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), i = r[e], a = function() {
      return i.apply(a, arguments);
    };
    return Object.setPrototypeOf(a, r), a;
  }
), sp = {}.hasOwnProperty;
class ua extends op {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = qh();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const t = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new ua()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(wi(!0, {}, this.namespace)), t;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(t, n) {
    return typeof t == "string" ? arguments.length === 2 ? (Oi("data", this.frozen), this.namespace[t] = n, this) : sp.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (Oi("data", this.frozen), this.namespace = t, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const t = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [n, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1)
        continue;
      r[0] === !0 && (r[0] = void 0);
      const i = n.call(t, ...r);
      typeof i == "function" && this.transformers.use(i);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(t) {
    this.freeze();
    const n = Br(t), r = this.parser || this.Parser;
    return Ci("parse", r), r(String(n), n);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(t, n) {
    const r = this;
    return this.freeze(), Ci("process", this.parser || this.Parser), Ei("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(a, o) {
      const s = Br(t), l = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(s)
      );
      r.run(l, s, function(c, f, m) {
        if (c || !f || !m)
          return u(c);
        const h = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          f
        ), x = r.stringify(h, m);
        cp(x) ? m.value = x : m.result = x, u(
          c,
          /** @type {VFileWithOutput<CompileResult>} */
          m
        );
      });
      function u(c, f) {
        c || !f ? o(c) : a ? a(f) : n(void 0, f);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(t) {
    let n = !1, r;
    return this.freeze(), Ci("processSync", this.parser || this.Parser), Ei("processSync", this.compiler || this.Compiler), this.process(t, i), po("processSync", "process", n), r;
    function i(a, o) {
      n = !0, io(a), r = o;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(t, n, r) {
    ho(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? a(void 0, r) : new Promise(a);
    function a(o, s) {
      const l = Br(n);
      i.run(t, l, u);
      function u(c, f, m) {
        const h = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          f || t
        );
        c ? s(c) : o ? o(h) : r(void 0, h, m);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(t, n) {
    let r = !1, i;
    return this.run(t, n, a), po("runSync", "run", r), i;
    function a(o, s) {
      io(o), i = s, r = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(t, n) {
    this.freeze();
    const r = Br(n), i = this.compiler || this.Compiler;
    return Ei("stringify", i), ho(t), i(t, r);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(t, ...n) {
    const r = this.attachers, i = this.namespace;
    if (Oi("use", this.frozen), t != null) if (typeof t == "function")
      l(t, n);
    else if (typeof t == "object")
      Array.isArray(t) ? s(t) : o(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function a(u) {
      if (typeof u == "function")
        l(u, []);
      else if (typeof u == "object")
        if (Array.isArray(u)) {
          const [c, ...f] = (
            /** @type {PluginTuple<Array<unknown>>} */
            u
          );
          l(c, f);
        } else
          o(u);
      else
        throw new TypeError("Expected usable value, not `" + u + "`");
    }
    function o(u) {
      if (!("plugins" in u) && !("settings" in u))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      s(u.plugins), u.settings && (i.settings = wi(!0, i.settings, u.settings));
    }
    function s(u) {
      let c = -1;
      if (u != null) if (Array.isArray(u))
        for (; ++c < u.length; ) {
          const f = u[c];
          a(f);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + u + "`");
    }
    function l(u, c) {
      let f = -1, m = -1;
      for (; ++f < r.length; )
        if (r[f][0] === u) {
          m = f;
          break;
        }
      if (m === -1)
        r.push([u, ...c]);
      else if (c.length > 0) {
        let [h, ...x] = c;
        const E = r[m][1];
        Hi(E) && Hi(h) && (h = wi(!0, E, h)), r[m] = [u, h, ...x];
      }
    }
  }
}
const lp = new ua().freeze();
function Ci(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Ei(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Oi(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function ho(e) {
  if (!Hi(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function po(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function Br(e) {
  return up(e) ? e : new Cs(e);
}
function up(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function cp(e) {
  return typeof e == "string" || dp(e);
}
function dp(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const fp = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", mo = [], go = { allowDangerousHtml: !0 }, hp = /^(https?|ircs?|mailto|xmpp)$/i, pp = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function mp(e) {
  const t = e.allowedElements, n = e.allowElement, r = e.children || "", i = e.className, a = e.components, o = e.disallowedElements, s = e.rehypePlugins || mo, l = e.remarkPlugins || mo, u = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...go } : go, c = e.skipHtml, f = e.unwrapDisallowed, m = e.urlTransform || gp, h = lp().use(Jf).use(l).use($h, u).use(s), x = new Cs();
  typeof r == "string" && (x.value = r);
  for (const O of pp)
    Object.hasOwn(e, O.from) && ("" + O.from + (O.to ? "use `" + O.to + "` instead" : "remove it") + fp + O.id, void 0);
  const E = h.parse(x);
  let R = h.runSync(E, x);
  return i && (R = {
    type: "element",
    tagName: "div",
    properties: { className: i },
    // Assume no doctypes.
    children: (
      /** @type {Array<ElementContent>} */
      R.type === "root" ? R.children : [R]
    )
  }), _s(R, b), Oc(R, {
    Fragment: y.Fragment,
    components: a,
    ignoreInvalidStyle: !0,
    jsx: y.jsx,
    jsxs: y.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function b(O, _, P) {
    if (O.type === "raw" && P && typeof _ == "number")
      return c ? P.children.splice(_, 1) : P.children[_] = { type: "text", value: O.value }, _;
    if (O.type === "element") {
      let T;
      for (T in vi)
        if (Object.hasOwn(vi, T) && Object.hasOwn(O.properties, T)) {
          const w = O.properties[T], K = vi[T];
          (K === null || K.includes(O.tagName)) && (O.properties[T] = m(String(w || ""), T, O));
        }
    }
    if (O.type === "element") {
      let T = t ? !t.includes(O.tagName) : o ? o.includes(O.tagName) : !1;
      if (!T && n && typeof _ == "number" && (T = !n(O, _, P)), T && P && typeof _ == "number")
        return f && O.children ? P.children.splice(_, 1, ...O.children) : P.children.splice(_, 1), _;
    }
  }
}
function gp(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t < 0 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i > -1 && t > i || n > -1 && t > n || r > -1 && t > r || // It is a protocol, it should be allowed.
    hp.test(e.slice(0, t)) ? e : ""
  );
}
const yo = "data:image/svg+xml,%3csvg%20width='95'%20height='99'%20viewBox='0%200%2095%2099'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M94.9902%2049.5C94.9902%2022.1648%2073.7249%200%2047.4951%200C21.2653%200%200%2022.1678%200%2049.5C0%2076.8322%2021.2653%2099%2047.4951%2099C67.7263%2099%2085.0112%2085.8127%2091.8558%2067.2231C91.8558%2067.2172%2091.8558%2067.2084%2091.8441%2067.2084H67.694C67.694%2067.2084%2067.6882%2067.2084%2067.6852%2067.2113C62.9146%2073.5215%2055.6293%2077.5608%2047.4951%2077.5608C37.0137%2077.5608%2027.963%2070.8599%2023.8328%2061.2243C22.7782%2058.7625%2024.0207%2057.2085%2026.6381%2057.7784C32.5956%2059.0769%2035.8681%2060.2637%2046.981%2060.2637C61.293%2060.2637%2069.8855%2059.4764%2091.3329%2056.5857C93.2247%2056.3301%2094.7024%2054.8143%2094.8581%2052.9136C94.9462%2051.8384%2094.9902%2050.7515%2094.9902%2049.5ZM29.5023%2028.9391V32.7875C29.5023%2034.18%2028.3772%2035.308%2026.9818%2035.308C25.5865%2035.308%2024.4731%2034.1829%2024.4731%2032.7875V28.9391C24.4731%2027.5467%2025.5982%2026.4215%2026.9818%2026.4215C28.3655%2026.4215%2029.5023%2027.5467%2029.5023%2028.9391ZM60.35%2028.9391V32.7875C60.35%2034.18%2059.225%2035.308%2057.8414%2035.308C56.4577%2035.308%2055.3238%2034.1829%2055.3238%2032.7875V28.9391C55.3238%2027.5467%2056.4489%2026.4215%2057.8414%2026.4215C59.2338%2026.4215%2060.35%2027.5467%2060.35%2028.9391ZM44.4753%2034.9408C44.4753%2041.7915%2038.9232%2047.3526%2032.0639%2047.3526C25.2046%2047.3526%2019.6526%2041.7886%2019.6526%2034.9408V31.1688C19.6526%2024.3093%2025.2046%2018.7454%2032.0639%2018.7454C38.9232%2018.7454%2044.4753%2024.3093%2044.4753%2031.1688V34.9408ZM75.3347%2034.9408C75.3347%2041.7915%2069.771%2047.3526%2062.9117%2047.3526C56.0524%2047.3526%2050.5003%2041.7886%2050.5003%2034.9408V31.1688C50.5003%2024.3093%2056.0641%2018.7454%2062.9117%2018.7454C69.7592%2018.7454%2075.3347%2024.3093%2075.3347%2031.1688V34.9408Z'%20fill='%23FDF063'/%3e%3c/svg%3e";
var Fe = [];
for (var Ti = 0; Ti < 256; ++Ti)
  Fe.push((Ti + 256).toString(16).slice(1));
function yp(e, t = 0) {
  return (Fe[e[t + 0]] + Fe[e[t + 1]] + Fe[e[t + 2]] + Fe[e[t + 3]] + "-" + Fe[e[t + 4]] + Fe[e[t + 5]] + "-" + Fe[e[t + 6]] + Fe[e[t + 7]] + "-" + Fe[e[t + 8]] + Fe[e[t + 9]] + "-" + Fe[e[t + 10]] + Fe[e[t + 11]] + Fe[e[t + 12]] + Fe[e[t + 13]] + Fe[e[t + 14]] + Fe[e[t + 15]]).toLowerCase();
}
var Vr, vp = new Uint8Array(16);
function xp() {
  if (!Vr && (Vr = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Vr))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Vr(vp);
}
var bp = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const vo = {
  randomUUID: bp
};
function wp(e, t, n) {
  if (vo.randomUUID && !t && !e)
    return vo.randomUUID();
  e = e || {};
  var r = e.random || (e.rng || xp)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, yp(r);
}
const _p = ({ config: e }) => {
  let t = localStorage.getItem("emberId");
  t || (t = wp(), localStorage.setItem("emberId", t));
  const n = {
    position: "left",
    type: "text",
    title: "Ember",
    text: "Hi, I am Ember. I can help you with your crypto transactions. Click on the buttons below to perform an action or type a message in the text box below!"
  }, r = {
    position: "left",
    type: "text",
    title: "Ember",
    text: "Welcome back! I am Ember. I can help you with your crypto transactions. Click on the buttons below to perform an action or type a message in the text box below!"
  }, [i, a] = Mt(!1), [o, s] = Mt([]), [l, u] = Mt(
    "Ember is ready to help"
  ), [c, f] = Mt(
    localStorage.getItem("emberMessages") ? [
      ...JSON.parse(localStorage.getItem("emberMessages")),
      r
    ] : [n]
  ), [m, h] = Mt(""), [x, E] = Mt(!1);
  let R = xo(() => new EventTarget(), []);
  Wt(() => {
    var T;
    ((T = c[c.length - 1]) == null ? void 0 : T.position) === "right" && m && (b(m), O());
  }, [c]), Wt(() => {
    const T = c.map((w) => ({
      ...w,
      text: /* @__PURE__ */ y.jsx(mp, { children: w.text })
    }));
    s([...T]), localStorage.setItem("emberMessages", JSON.stringify(c));
  }, [c]), Wt(() => {
    const T = (w) => {
      if (console.log("activity", w), w instanceof CustomEvent) {
        const { message: K } = w.detail;
        u(K);
      }
    };
    return R.addEventListener("activity", T), () => {
      R.removeEventListener("activity", T);
    };
  }, [R]), Wt(() => {
    x && (P != null && P.current) && P.current.disabled === !1 && (P.current.disabled = !0, u("🔥")), !x && (P != null && P.current) && P.current.disabled === !0 && (P.current.disabled = !1, P.current.focus());
  }, [x]);
  const b = async (T) => {
    try {
      const w = await Bu(
        {
          inputText: T,
          secret: e.secret,
          fid: t,
          username: t
        },
        R
      );
      if (w instanceof Error)
        throw E(!1), w;
      if (typeof w == "string")
        throw E(!1), new Error(w);
      if ("message" in w)
        f([
          ...c,
          {
            position: "left",
            type: "text",
            title: "Ember",
            text: w.message
          }
        ]), localStorage.setItem("emberMessages", JSON.stringify(c)), E(!1);
      else
        throw E(!1), new Error("Invalid response");
    } catch (w) {
      console.log(w.message);
    } finally {
      E(!1), localStorage.setItem("emberMessages", JSON.stringify(c)), R = new EventTarget(), setTimeout(() => u("Ember is ready to help"), 1e3);
    }
  }, O = () => {
    P != null && P.current && (P.current.value = "", h(""));
  }, _ = async () => {
    E(!0), s([
      ...o,
      {
        position: "right",
        type: "text",
        title: "You",
        text: m
      }
    ]), f([
      ...c,
      {
        position: "right",
        type: "text",
        title: "You",
        text: m
      }
    ]);
  }, P = $r();
  return i ? /* @__PURE__ */ y.jsxs("div", { className: "emberChat", children: [
    /* @__PURE__ */ y.jsxs("div", { className: "emberChat__header flex justify-between w-full", children: [
      /* @__PURE__ */ y.jsxs("h6", { className: "flex gap-2", children: [
        /* @__PURE__ */ y.jsx(
          "img",
          {
            src: yo,
            alt: "Ember",
            className: "w-6 h-6 ember-icon bg-orange-500 p-1 rounded-full"
          }
        ),
        /* @__PURE__ */ y.jsx("span", { className: "font-bold", children: "Ember" })
      ] }),
      /* @__PURE__ */ y.jsxs(
        "button",
        {
          onClick: () => a(!1),
          type: "button",
          className: "bg-transparent text-orange-500 border border-orange-500 hover:bg-yellow-300 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:focus:ring-yellow-300 dark:hover:bg-orange-500",
          children: [
            /* @__PURE__ */ y.jsx("svg", { fill: "none", viewBox: "0 0 24 24", height: "1em", width: "1em", children: /* @__PURE__ */ y.jsx(
              "path",
              {
                fill: "currentColor",
                d: "M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
              }
            ) }),
            /* @__PURE__ */ y.jsx("span", { className: "sr-only", children: "Icon description" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ y.jsx(
      Al,
      {
        referance: (T) => {
          T && (T.scrollTop = T.scrollHeight);
        },
        className: "message-list max-w-lg max-h-64",
        lockable: !0,
        toBottomHeight: "100%",
        dataSource: o
      }
    ),
    /* @__PURE__ */ y.jsx("div", { className: "status_box text-xs text-slate-500", children: l }),
    /* @__PURE__ */ y.jsx("div", { className: "emberChat__input", children: /* @__PURE__ */ y.jsx(
      Rl,
      {
        referance: P,
        onChange: (T) => h(T.target.value),
        className: "flex-grow",
        placeholder: "Type here...",
        multiline: !0,
        maxHeight: 200,
        value: m,
        rightButtons: [
          /* @__PURE__ */ y.jsx(Io, { text: "Send", onClick: _, title: "Send" })
        ],
        onKeyUp: (T) => {
          T.key === "Enter" && _();
        }
      }
    ) })
  ] }) : /* @__PURE__ */ y.jsx("button", { onClick: () => a(!0), className: "toggleButton p-2", children: /* @__PURE__ */ y.jsx("img", { src: yo, alt: "Ember", className: "w-10 h-10 ember-icon " }) });
};
export {
  _p as EmberChat
};
//# sourceMappingURL=index.es.js.map
