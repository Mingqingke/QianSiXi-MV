"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "node_modules/react/cjs/react.production.min.js"(exports2) {
    "use strict";
    var l = /* @__PURE__ */ Symbol.for("react.element");
    var n = /* @__PURE__ */ Symbol.for("react.portal");
    var p = /* @__PURE__ */ Symbol.for("react.fragment");
    var q = /* @__PURE__ */ Symbol.for("react.strict_mode");
    var r = /* @__PURE__ */ Symbol.for("react.profiler");
    var t = /* @__PURE__ */ Symbol.for("react.provider");
    var u = /* @__PURE__ */ Symbol.for("react.context");
    var v = /* @__PURE__ */ Symbol.for("react.forward_ref");
    var w = /* @__PURE__ */ Symbol.for("react.suspense");
    var x = /* @__PURE__ */ Symbol.for("react.memo");
    var y = /* @__PURE__ */ Symbol.for("react.lazy");
    var z = Symbol.iterator;
    function A(a) {
      if (null === a || "object" !== typeof a) return null;
      a = z && a[z] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } };
    var C2 = Object.assign;
    var D = {};
    function E(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function(a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E.prototype;
    function G(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    var H = G.prototype = new F();
    H.constructor = G;
    C2(H, E.prototype);
    H.isPureReactComponent = true;
    var I = Array.isArray;
    var J = Object.prototype.hasOwnProperty;
    var K = { current: null };
    var L2 = { key: true, ref: true, __self: true, __source: true };
    function M(a, b, e) {
      var d, c = {}, k = null, h = null;
      if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L2.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (1 === g) c.children = e;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
        c.children = f;
      }
      if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
      return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
    }
    function N(a, b) {
      return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var P = /\/+/g;
    function Q(a, b) {
      return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
    }
    function R(a, b, e, d, c) {
      var k = typeof a;
      if ("undefined" === k || "boolean" === k) a = null;
      var h = false;
      if (null === a) h = true;
      else switch (k) {
        case "string":
        case "number":
          h = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case l:
            case n:
              h = true;
          }
      }
      if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
        return a2;
      })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
      h = 0;
      d = "" === d ? "." : d + ":";
      if (I(a)) for (var g = 0; g < a.length; g++) {
        k = a[g];
        var f = d + Q(k, g);
        h += R(k, b, e, f, c);
      }
      else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
      else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h;
    }
    function S(a, b, e) {
      if (null == a) return a;
      var d = [], c = 0;
      R(a, d, "", "", function(a2) {
        return b.call(e, a2, c++);
      });
      return d;
    }
    function T(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
        }, function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
        });
        -1 === a._status && (a._status = 0, a._result = b);
      }
      if (1 === a._status) return a._result.default;
      throw a._result;
    }
    var U = { current: null };
    var V = { transition: null };
    var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
    function X() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    exports2.Children = { map: S, forEach: function(a, b, e) {
      S(a, function() {
        b.apply(this, arguments);
      }, e);
    }, count: function(a) {
      var b = 0;
      S(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return S(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    exports2.Component = E;
    exports2.Fragment = p;
    exports2.Profiler = r;
    exports2.PureComponent = G;
    exports2.StrictMode = q;
    exports2.Suspense = w;
    exports2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    exports2.act = X;
    exports2.cloneElement = function(a, b, e) {
      if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C2({}, a.props), c = a.key, k = a.ref, h = a._owner;
      if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for (f in b) J.call(b, f) && !L2.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (1 === f) d.children = e;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
        d.children = g;
      }
      return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
    };
    exports2.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t, _context: a };
      return a.Consumer = a;
    };
    exports2.createElement = M;
    exports2.createFactory = function(a) {
      var b = M.bind(null, a);
      b.type = a;
      return b;
    };
    exports2.createRef = function() {
      return { current: null };
    };
    exports2.forwardRef = function(a) {
      return { $$typeof: v, render: a };
    };
    exports2.isValidElement = O;
    exports2.lazy = function(a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
    };
    exports2.memo = function(a, b) {
      return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
    };
    exports2.startTransition = function(a) {
      var b = V.transition;
      V.transition = {};
      try {
        a();
      } finally {
        V.transition = b;
      }
    };
    exports2.unstable_act = X;
    exports2.useCallback = function(a, b) {
      return U.current.useCallback(a, b);
    };
    exports2.useContext = function(a) {
      return U.current.useContext(a);
    };
    exports2.useDebugValue = function() {
    };
    exports2.useDeferredValue = function(a) {
      return U.current.useDeferredValue(a);
    };
    exports2.useEffect = function(a, b) {
      return U.current.useEffect(a, b);
    };
    exports2.useId = function() {
      return U.current.useId();
    };
    exports2.useImperativeHandle = function(a, b, e) {
      return U.current.useImperativeHandle(a, b, e);
    };
    exports2.useInsertionEffect = function(a, b) {
      return U.current.useInsertionEffect(a, b);
    };
    exports2.useLayoutEffect = function(a, b) {
      return U.current.useLayoutEffect(a, b);
    };
    exports2.useMemo = function(a, b) {
      return U.current.useMemo(a, b);
    };
    exports2.useReducer = function(a, b, e) {
      return U.current.useReducer(a, b, e);
    };
    exports2.useRef = function(a) {
      return U.current.useRef(a);
    };
    exports2.useState = function(a) {
      return U.current.useState(a);
    };
    exports2.useSyncExternalStore = function(a, b, e) {
      return U.current.useSyncExternalStore(a, b, e);
    };
    exports2.useTransition = function() {
      return U.current.useTransition();
    };
    exports2.version = "18.3.1";
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports2, module2) {
    "use strict";
    if (true) {
      module2.exports = require_react_production_min();
    } else {
      module2.exports = null;
    }
  }
});

// node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js
var require_react_dom_server_legacy_node_production_min = __commonJS({
  "node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js"(exports2) {
    "use strict";
    var ea = require_react();
    var fa = require("stream");
    var n = Object.prototype.hasOwnProperty;
    var ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var ia = {};
    var ja = {};
    function ka(a) {
      if (n.call(ja, a)) return true;
      if (n.call(ia, a)) return false;
      if (ha.test(a)) return ja[a] = true;
      ia[a] = true;
      return false;
    }
    function q(a, b, c, d, f, e, g) {
      this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
      this.attributeName = d;
      this.attributeNamespace = f;
      this.mustUseProperty = c;
      this.propertyName = a;
      this.type = b;
      this.sanitizeURL = e;
      this.removeEmptyString = g;
    }
    var r = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      r[a] = new q(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b = a[0];
      r[b] = new q(b, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      r[a] = new q(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      r[a] = new q(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      r[a] = new q(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      r[a] = new q(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      r[a] = new q(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      r[a] = new q(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      r[a] = new q(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var la = /[\-:]([a-z])/g;
    function ma(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b = a.replace(
        la,
        ma
      );
      r[b] = new q(b, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b = a.replace(la, ma);
      r[b] = new q(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b = a.replace(la, ma);
      r[b] = new q(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      r[a] = new q(a, 1, false, a.toLowerCase(), null, false, false);
    });
    r.xlinkHref = new q("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      r[a] = new q(a, 1, false, a.toLowerCase(), null, true, true);
    });
    var t = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    var na = ["Webkit", "ms", "Moz", "O"];
    Object.keys(t).forEach(function(a) {
      na.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        t[b] = t[a];
      });
    });
    var oa = /["'&<>]/;
    function u(a) {
      if ("boolean" === typeof a || "number" === typeof a) return "" + a;
      a = "" + a;
      var b = oa.exec(a);
      if (b) {
        var c = "", d, f = 0;
        for (d = b.index; d < a.length; d++) {
          switch (a.charCodeAt(d)) {
            case 34:
              b = "&quot;";
              break;
            case 38:
              b = "&amp;";
              break;
            case 39:
              b = "&#x27;";
              break;
            case 60:
              b = "&lt;";
              break;
            case 62:
              b = "&gt;";
              break;
            default:
              continue;
          }
          f !== d && (c += a.substring(f, d));
          f = d + 1;
          c += b;
        }
        a = f !== d ? c + a.substring(f, d) : c;
      }
      return a;
    }
    var pa = /([A-Z])/g;
    var qa = /^ms-/;
    var ra = Array.isArray;
    function v(a, b) {
      return { insertionMode: a, selectedValue: b };
    }
    function sa(a, b, c) {
      switch (b) {
        case "select":
          return v(1, null != c.value ? c.value : c.defaultValue);
        case "svg":
          return v(2, null);
        case "math":
          return v(3, null);
        case "foreignObject":
          return v(1, null);
        case "table":
          return v(4, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return v(5, null);
        case "colgroup":
          return v(7, null);
        case "tr":
          return v(6, null);
      }
      return 4 <= a.insertionMode || 0 === a.insertionMode ? v(1, null) : a;
    }
    var ta = /* @__PURE__ */ new Map();
    function ua(a, b, c) {
      if ("object" !== typeof c) throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      b = true;
      for (var d in c) if (n.call(c, d)) {
        var f = c[d];
        if (null != f && "boolean" !== typeof f && "" !== f) {
          if (0 === d.indexOf("--")) {
            var e = u(d);
            f = u(("" + f).trim());
          } else {
            e = d;
            var g = ta.get(e);
            void 0 !== g ? e = g : (g = u(e.replace(pa, "-$1").toLowerCase().replace(qa, "-ms-")), ta.set(e, g), e = g);
            f = "number" === typeof f ? 0 === f || n.call(
              t,
              d
            ) ? "" + f : f + "px" : u(("" + f).trim());
          }
          b ? (b = false, a.push(' style="', e, ":", f)) : a.push(";", e, ":", f);
        }
      }
      b || a.push('"');
    }
    function w(a, b, c, d) {
      switch (c) {
        case "style":
          ua(a, b, d);
          return;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (!(2 < c.length) || "o" !== c[0] && "O" !== c[0] || "n" !== c[1] && "N" !== c[1]) {
        if (b = r.hasOwnProperty(c) ? r[c] : null, null !== b) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!b.acceptsBooleans) return;
          }
          c = b.attributeName;
          switch (b.type) {
            case 3:
              d && a.push(" ", c, '=""');
              break;
            case 4:
              true === d ? a.push(" ", c, '=""') : false !== d && a.push(" ", c, '="', u(d), '"');
              break;
            case 5:
              isNaN(d) || a.push(" ", c, '="', u(d), '"');
              break;
            case 6:
              !isNaN(d) && 1 <= d && a.push(" ", c, '="', u(d), '"');
              break;
            default:
              b.sanitizeURL && (d = "" + d), a.push(" ", c, '="', u(d), '"');
          }
        } else if (ka(c)) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (b = c.toLowerCase().slice(0, 5), "data-" !== b && "aria-" !== b) return;
          }
          a.push(" ", c, '="', u(d), '"');
        }
      }
    }
    function x(a, b, c) {
      if (null != b) {
        if (null != c) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if ("object" !== typeof b || !("__html" in b)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        b = b.__html;
        null !== b && void 0 !== b && a.push("" + b);
      }
    }
    function va(a) {
      var b = "";
      ea.Children.forEach(a, function(a2) {
        null != a2 && (b += a2);
      });
      return b;
    }
    function wa(a, b, c, d) {
      a.push(z(c));
      var f = c = null, e;
      for (e in b) if (n.call(b, e)) {
        var g = b[e];
        if (null != g) switch (e) {
          case "children":
            c = g;
            break;
          case "dangerouslySetInnerHTML":
            f = g;
            break;
          default:
            w(a, d, e, g);
        }
      }
      a.push(">");
      x(a, f, c);
      return "string" === typeof c ? (a.push(u(c)), null) : c;
    }
    var xa = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    var ya = /* @__PURE__ */ new Map();
    function z(a) {
      var b = ya.get(a);
      if (void 0 === b) {
        if (!xa.test(a)) throw Error("Invalid tag: " + a);
        b = "<" + a;
        ya.set(a, b);
      }
      return b;
    }
    function za(a, b, c, d, f) {
      switch (b) {
        case "select":
          a.push(z("select"));
          var e = null, g = null;
          for (l in c) if (n.call(c, l)) {
            var h = c[l];
            if (null != h) switch (l) {
              case "children":
                e = h;
                break;
              case "dangerouslySetInnerHTML":
                g = h;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                w(a, d, l, h);
            }
          }
          a.push(">");
          x(a, g, e);
          return e;
        case "option":
          g = f.selectedValue;
          a.push(z("option"));
          var k = h = null, m = null;
          var l = null;
          for (e in c) if (n.call(c, e)) {
            var p = c[e];
            if (null != p) switch (e) {
              case "children":
                h = p;
                break;
              case "selected":
                m = p;
                break;
              case "dangerouslySetInnerHTML":
                l = p;
                break;
              case "value":
                k = p;
              default:
                w(a, d, e, p);
            }
          }
          if (null != g) if (c = null !== k ? "" + k : va(h), ra(g)) for (d = 0; d < g.length; d++) {
            if ("" + g[d] === c) {
              a.push(' selected=""');
              break;
            }
          }
          else "" + g === c && a.push(' selected=""');
          else m && a.push(' selected=""');
          a.push(">");
          x(a, l, h);
          return h;
        case "textarea":
          a.push(z("textarea"));
          l = g = e = null;
          for (h in c) if (n.call(c, h) && (k = c[h], null != k)) switch (h) {
            case "children":
              l = k;
              break;
            case "value":
              e = k;
              break;
            case "defaultValue":
              g = k;
              break;
            case "dangerouslySetInnerHTML":
              throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              w(a, d, h, k);
          }
          null === e && null !== g && (e = g);
          a.push(">");
          if (null != l) {
            if (null != e) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (ra(l) && 1 < l.length) throw Error("<textarea> can only have at most one child.");
            e = "" + l;
          }
          "string" === typeof e && "\n" === e[0] && a.push("\n");
          null !== e && a.push(u("" + e));
          return null;
        case "input":
          a.push(z("input"));
          k = l = h = e = null;
          for (g in c) if (n.call(c, g) && (m = c[g], null != m)) switch (g) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              k = m;
              break;
            case "defaultValue":
              h = m;
              break;
            case "checked":
              l = m;
              break;
            case "value":
              e = m;
              break;
            default:
              w(a, d, g, m);
          }
          null !== l ? w(a, d, "checked", l) : null !== k && w(a, d, "checked", k);
          null !== e ? w(a, d, "value", e) : null !== h && w(a, d, "value", h);
          a.push("/>");
          return null;
        case "menuitem":
          a.push(z("menuitem"));
          for (var B in c) if (n.call(c, B) && (e = c[B], null != e)) switch (B) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              w(
                a,
                d,
                B,
                e
              );
          }
          a.push(">");
          return null;
        case "title":
          a.push(z("title"));
          e = null;
          for (p in c) if (n.call(c, p) && (g = c[p], null != g)) switch (p) {
            case "children":
              e = g;
              break;
            case "dangerouslySetInnerHTML":
              throw Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              w(a, d, p, g);
          }
          a.push(">");
          return e;
        case "listing":
        case "pre":
          a.push(z(b));
          g = e = null;
          for (k in c) if (n.call(c, k) && (h = c[k], null != h)) switch (k) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            default:
              w(a, d, k, h);
          }
          a.push(">");
          if (null != g) {
            if (null != e) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            if ("object" !== typeof g || !("__html" in g)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
            c = g.__html;
            null !== c && void 0 !== c && ("string" === typeof c && 0 < c.length && "\n" === c[0] ? a.push("\n", c) : a.push("" + c));
          }
          "string" === typeof e && "\n" === e[0] && a.push("\n");
          return e;
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          a.push(z(b));
          for (var C2 in c) if (n.call(c, C2) && (e = c[C2], null != e)) switch (C2) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(b + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              w(a, d, C2, e);
          }
          a.push("/>");
          return null;
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return wa(a, c, b, d);
        case "html":
          return 0 === f.insertionMode && a.push("<!DOCTYPE html>"), wa(a, c, b, d);
        default:
          if (-1 === b.indexOf("-") && "string" !== typeof c.is) return wa(a, c, b, d);
          a.push(z(b));
          g = e = null;
          for (m in c) if (n.call(c, m) && (h = c[m], null != h)) switch (m) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            case "style":
              ua(a, d, h);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ka(m) && "function" !== typeof h && "symbol" !== typeof h && a.push(" ", m, '="', u(h), '"');
          }
          a.push(">");
          x(a, g, e);
          return e;
      }
    }
    function Aa(a, b, c) {
      a.push('<!--$?--><template id="');
      if (null === c) throw Error("An ID must have been assigned before we can complete the boundary.");
      a.push(c);
      return a.push('"></template>');
    }
    function Ba(a, b, c, d) {
      switch (c.insertionMode) {
        case 0:
        case 1:
          return a.push('<div hidden id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 2:
          return a.push('<svg aria-hidden="true" style="display:none" id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 3:
          return a.push('<math aria-hidden="true" style="display:none" id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 4:
          return a.push('<table hidden id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 5:
          return a.push('<table hidden><tbody id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 6:
          return a.push('<table hidden><tr id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 7:
          return a.push('<table hidden><colgroup id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Ca(a, b) {
      switch (b.insertionMode) {
        case 0:
        case 1:
          return a.push("</div>");
        case 2:
          return a.push("</svg>");
        case 3:
          return a.push("</math>");
        case 4:
          return a.push("</table>");
        case 5:
          return a.push("</tbody></table>");
        case 6:
          return a.push("</tr></table>");
        case 7:
          return a.push("</colgroup></table>");
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Da = /[<\u2028\u2029]/g;
    function Ea(a) {
      return JSON.stringify(a).replace(Da, function(a2) {
        switch (a2) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    function Fa(a, b) {
      b = void 0 === b ? "" : b;
      return { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: b + "P:", segmentPrefix: b + "S:", boundaryPrefix: b + "B:", idPrefix: b, nextSuspenseID: 0, sentCompleteSegmentFunction: false, sentCompleteBoundaryFunction: false, sentClientRenderFunction: false, generateStaticMarkup: a };
    }
    function Ga() {
      return { insertionMode: 1, selectedValue: null };
    }
    function Ha(a, b, c, d) {
      if (c.generateStaticMarkup) return a.push(u(b)), false;
      "" === b ? a = d : (d && a.push("<!-- -->"), a.push(u(b)), a = true);
      return a;
    }
    var A = Object.assign;
    var Ia = /* @__PURE__ */ Symbol.for("react.element");
    var Ja = /* @__PURE__ */ Symbol.for("react.portal");
    var Ka = /* @__PURE__ */ Symbol.for("react.fragment");
    var La = /* @__PURE__ */ Symbol.for("react.strict_mode");
    var Ma = /* @__PURE__ */ Symbol.for("react.profiler");
    var Na = /* @__PURE__ */ Symbol.for("react.provider");
    var Oa = /* @__PURE__ */ Symbol.for("react.context");
    var Pa = /* @__PURE__ */ Symbol.for("react.forward_ref");
    var Qa = /* @__PURE__ */ Symbol.for("react.suspense");
    var Ra = /* @__PURE__ */ Symbol.for("react.suspense_list");
    var Sa = /* @__PURE__ */ Symbol.for("react.memo");
    var Ta = /* @__PURE__ */ Symbol.for("react.lazy");
    var Ua = /* @__PURE__ */ Symbol.for("react.scope");
    var Va = /* @__PURE__ */ Symbol.for("react.debug_trace_mode");
    var Wa = /* @__PURE__ */ Symbol.for("react.legacy_hidden");
    var Xa = /* @__PURE__ */ Symbol.for("react.default_value");
    var Ya = Symbol.iterator;
    function Za(a) {
      if (null == a) return null;
      if ("function" === typeof a) return a.displayName || a.name || null;
      if ("string" === typeof a) return a;
      switch (a) {
        case Ka:
          return "Fragment";
        case Ja:
          return "Portal";
        case Ma:
          return "Profiler";
        case La:
          return "StrictMode";
        case Qa:
          return "Suspense";
        case Ra:
          return "SuspenseList";
      }
      if ("object" === typeof a) switch (a.$$typeof) {
        case Oa:
          return (a.displayName || "Context") + ".Consumer";
        case Na:
          return (a._context.displayName || "Context") + ".Provider";
        case Pa:
          var b = a.render;
          a = a.displayName;
          a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          return a;
        case Sa:
          return b = a.displayName || null, null !== b ? b : Za(a.type) || "Memo";
        case Ta:
          b = a._payload;
          a = a._init;
          try {
            return Za(a(b));
          } catch (c) {
          }
      }
      return null;
    }
    var $a = {};
    function ab(a, b) {
      a = a.contextTypes;
      if (!a) return $a;
      var c = {}, d;
      for (d in a) c[d] = b[d];
      return c;
    }
    var D = null;
    function E(a, b) {
      if (a !== b) {
        a.context._currentValue2 = a.parentValue;
        a = a.parent;
        var c = b.parent;
        if (null === a) {
          if (null !== c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (null === c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
          E(a, c);
        }
        b.context._currentValue2 = b.value;
      }
    }
    function bb(a) {
      a.context._currentValue2 = a.parentValue;
      a = a.parent;
      null !== a && bb(a);
    }
    function cb(a) {
      var b = a.parent;
      null !== b && cb(b);
      a.context._currentValue2 = a.value;
    }
    function db(a, b) {
      a.context._currentValue2 = a.parentValue;
      a = a.parent;
      if (null === a) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      a.depth === b.depth ? E(a, b) : db(a, b);
    }
    function eb(a, b) {
      var c = b.parent;
      if (null === c) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      a.depth === c.depth ? E(a, c) : eb(a, c);
      b.context._currentValue2 = b.value;
    }
    function F(a) {
      var b = D;
      b !== a && (null === b ? cb(a) : null === a ? bb(b) : b.depth === a.depth ? E(b, a) : b.depth > a.depth ? db(b, a) : eb(b, a), D = a);
    }
    var fb = { isMounted: function() {
      return false;
    }, enqueueSetState: function(a, b) {
      a = a._reactInternals;
      null !== a.queue && a.queue.push(b);
    }, enqueueReplaceState: function(a, b) {
      a = a._reactInternals;
      a.replace = true;
      a.queue = [b];
    }, enqueueForceUpdate: function() {
    } };
    function gb(a, b, c, d) {
      var f = void 0 !== a.state ? a.state : null;
      a.updater = fb;
      a.props = c;
      a.state = f;
      var e = { queue: [], replace: false };
      a._reactInternals = e;
      var g = b.contextType;
      a.context = "object" === typeof g && null !== g ? g._currentValue2 : d;
      g = b.getDerivedStateFromProps;
      "function" === typeof g && (g = g(c, f), f = null === g || void 0 === g ? f : A({}, f, g), a.state = f);
      if ("function" !== typeof b.getDerivedStateFromProps && "function" !== typeof a.getSnapshotBeforeUpdate && ("function" === typeof a.UNSAFE_componentWillMount || "function" === typeof a.componentWillMount)) if (b = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), b !== a.state && fb.enqueueReplaceState(a, a.state, null), null !== e.queue && 0 < e.queue.length) if (b = e.queue, g = e.replace, e.queue = null, e.replace = false, g && 1 === b.length) a.state = b[0];
      else {
        e = g ? b[0] : a.state;
        f = true;
        for (g = g ? 1 : 0; g < b.length; g++) {
          var h = b[g];
          h = "function" === typeof h ? h.call(a, e, c, d) : h;
          null != h && (f ? (f = false, e = A({}, e, h)) : A(e, h));
        }
        a.state = e;
      }
      else e.queue = null;
    }
    var hb = { id: 1, overflow: "" };
    function ib(a, b, c) {
      var d = a.id;
      a = a.overflow;
      var f = 32 - G(d) - 1;
      d &= ~(1 << f);
      c += 1;
      var e = 32 - G(b) + f;
      if (30 < e) {
        var g = f - f % 5;
        e = (d & (1 << g) - 1).toString(32);
        d >>= g;
        f -= g;
        return { id: 1 << 32 - G(b) + f | c << f | d, overflow: e + a };
      }
      return { id: 1 << e | c << f | d, overflow: a };
    }
    var G = Math.clz32 ? Math.clz32 : jb;
    var kb = Math.log;
    var lb = Math.LN2;
    function jb(a) {
      a >>>= 0;
      return 0 === a ? 32 : 31 - (kb(a) / lb | 0) | 0;
    }
    function mb(a, b) {
      return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var nb = "function" === typeof Object.is ? Object.is : mb;
    var H = null;
    var ob = null;
    var I = null;
    var J = null;
    var K = false;
    var L2 = false;
    var M = 0;
    var N = null;
    var O = 0;
    function P() {
      if (null === H) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
      return H;
    }
    function rb() {
      if (0 < O) throw Error("Rendered more hooks than during the previous render");
      return { memoizedState: null, queue: null, next: null };
    }
    function sb() {
      null === J ? null === I ? (K = false, I = J = rb()) : (K = true, J = I) : null === J.next ? (K = false, J = J.next = rb()) : (K = true, J = J.next);
      return J;
    }
    function tb() {
      ob = H = null;
      L2 = false;
      I = null;
      O = 0;
      J = N = null;
    }
    function ub(a, b) {
      return "function" === typeof b ? b(a) : b;
    }
    function vb(a, b, c) {
      H = P();
      J = sb();
      if (K) {
        var d = J.queue;
        b = d.dispatch;
        if (null !== N && (c = N.get(d), void 0 !== c)) {
          N.delete(d);
          d = J.memoizedState;
          do
            d = a(d, c.action), c = c.next;
          while (null !== c);
          J.memoizedState = d;
          return [d, b];
        }
        return [J.memoizedState, b];
      }
      a = a === ub ? "function" === typeof b ? b() : b : void 0 !== c ? c(b) : b;
      J.memoizedState = a;
      a = J.queue = { last: null, dispatch: null };
      a = a.dispatch = wb.bind(null, H, a);
      return [J.memoizedState, a];
    }
    function xb(a, b) {
      H = P();
      J = sb();
      b = void 0 === b ? null : b;
      if (null !== J) {
        var c = J.memoizedState;
        if (null !== c && null !== b) {
          var d = c[1];
          a: if (null === d) d = false;
          else {
            for (var f = 0; f < d.length && f < b.length; f++) if (!nb(b[f], d[f])) {
              d = false;
              break a;
            }
            d = true;
          }
          if (d) return c[0];
        }
      }
      a = a();
      J.memoizedState = [a, b];
      return a;
    }
    function wb(a, b, c) {
      if (25 <= O) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (a === H) if (L2 = true, a = { action: c, next: null }, null === N && (N = /* @__PURE__ */ new Map()), c = N.get(b), void 0 === c) N.set(b, a);
      else {
        for (b = c; null !== b.next; ) b = b.next;
        b.next = a;
      }
    }
    function yb() {
      throw Error("startTransition cannot be called during server rendering.");
    }
    function Q() {
    }
    var zb = { readContext: function(a) {
      return a._currentValue2;
    }, useContext: function(a) {
      P();
      return a._currentValue2;
    }, useMemo: xb, useReducer: vb, useRef: function(a) {
      H = P();
      J = sb();
      var b = J.memoizedState;
      return null === b ? (a = { current: a }, J.memoizedState = a) : b;
    }, useState: function(a) {
      return vb(ub, a);
    }, useInsertionEffect: Q, useLayoutEffect: function() {
    }, useCallback: function(a, b) {
      return xb(function() {
        return a;
      }, b);
    }, useImperativeHandle: Q, useEffect: Q, useDebugValue: Q, useDeferredValue: function(a) {
      P();
      return a;
    }, useTransition: function() {
      P();
      return [false, yb];
    }, useId: function() {
      var a = ob.treeContext;
      var b = a.overflow;
      a = a.id;
      a = (a & ~(1 << 32 - G(a) - 1)).toString(32) + b;
      var c = R;
      if (null === c) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      b = M++;
      a = ":" + c.idPrefix + "R" + a;
      0 < b && (a += "H" + b.toString(32));
      return a + ":";
    }, useMutableSource: function(a, b) {
      P();
      return b(a._source);
    }, useSyncExternalStore: function(a, b, c) {
      if (void 0 === c) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return c();
    } };
    var R = null;
    var Ab = ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
    function Bb(a) {
      console.error(a);
      return null;
    }
    function S() {
    }
    function Cb(a, b, c, d, f, e, g, h, k) {
      var m = [], l = /* @__PURE__ */ new Set();
      b = { destination: null, responseState: b, progressiveChunkSize: void 0 === d ? 12800 : d, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: l, pingedTasks: m, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: void 0 === f ? Bb : f, onAllReady: void 0 === e ? S : e, onShellReady: void 0 === g ? S : g, onShellError: void 0 === h ? S : h, onFatalError: void 0 === k ? S : k };
      c = T(b, 0, null, c, false, false);
      c.parentFlushed = true;
      a = Db(b, a, null, c, l, $a, null, hb);
      m.push(a);
      return b;
    }
    function Db(a, b, c, d, f, e, g, h) {
      a.allPendingTasks++;
      null === c ? a.pendingRootTasks++ : c.pendingTasks++;
      var k = { node: b, ping: function() {
        var b2 = a.pingedTasks;
        b2.push(k);
        1 === b2.length && Eb(a);
      }, blockedBoundary: c, blockedSegment: d, abortSet: f, legacyContext: e, context: g, treeContext: h };
      f.add(k);
      return k;
    }
    function T(a, b, c, d, f, e) {
      return { status: 0, id: -1, index: b, parentFlushed: false, chunks: [], children: [], formatContext: d, boundary: c, lastPushedText: f, textEmbedded: e };
    }
    function U(a, b) {
      a = a.onError(b);
      if (null != a && "string" !== typeof a) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
      return a;
    }
    function V(a, b) {
      var c = a.onShellError;
      c(b);
      c = a.onFatalError;
      c(b);
      null !== a.destination ? (a.status = 2, a.destination.destroy(b)) : (a.status = 1, a.fatalError = b);
    }
    function Fb(a, b, c, d, f) {
      H = {};
      ob = b;
      M = 0;
      for (a = c(d, f); L2; ) L2 = false, M = 0, O += 1, J = null, a = c(d, f);
      tb();
      return a;
    }
    function Gb(a, b, c, d) {
      var f = c.render(), e = d.childContextTypes;
      if (null !== e && void 0 !== e) {
        var g = b.legacyContext;
        if ("function" !== typeof c.getChildContext) d = g;
        else {
          c = c.getChildContext();
          for (var h in c) if (!(h in e)) throw Error((Za(d) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
          d = A({}, g, c);
        }
        b.legacyContext = d;
        W(a, b, f);
        b.legacyContext = g;
      } else W(a, b, f);
    }
    function Hb(a, b) {
      if (a && a.defaultProps) {
        b = A({}, b);
        a = a.defaultProps;
        for (var c in a) void 0 === b[c] && (b[c] = a[c]);
        return b;
      }
      return b;
    }
    function Ib(a, b, c, d, f) {
      if ("function" === typeof c) if (c.prototype && c.prototype.isReactComponent) {
        f = ab(c, b.legacyContext);
        var e = c.contextType;
        e = new c(d, "object" === typeof e && null !== e ? e._currentValue2 : f);
        gb(e, c, d, f);
        Gb(a, b, e, c);
      } else {
        e = ab(c, b.legacyContext);
        f = Fb(a, b, c, d, e);
        var g = 0 !== M;
        if ("object" === typeof f && null !== f && "function" === typeof f.render && void 0 === f.$$typeof) gb(f, c, d, e), Gb(a, b, f, c);
        else if (g) {
          d = b.treeContext;
          b.treeContext = ib(d, 1, 0);
          try {
            W(a, b, f);
          } finally {
            b.treeContext = d;
          }
        } else W(a, b, f);
      }
      else if ("string" === typeof c) {
        f = b.blockedSegment;
        e = za(f.chunks, c, d, a.responseState, f.formatContext);
        f.lastPushedText = false;
        g = f.formatContext;
        f.formatContext = sa(g, c, d);
        Jb(a, b, e);
        f.formatContext = g;
        switch (c) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break;
          default:
            f.chunks.push("</", c, ">");
        }
        f.lastPushedText = false;
      } else {
        switch (c) {
          case Wa:
          case Va:
          case La:
          case Ma:
          case Ka:
            W(a, b, d.children);
            return;
          case Ra:
            W(a, b, d.children);
            return;
          case Ua:
            throw Error("ReactDOMServer does not yet support scope components.");
          case Qa:
            a: {
              c = b.blockedBoundary;
              f = b.blockedSegment;
              e = d.fallback;
              d = d.children;
              g = /* @__PURE__ */ new Set();
              var h = { id: null, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, forceClientRender: false, completedSegments: [], byteSize: 0, fallbackAbortableTasks: g, errorDigest: null }, k = T(a, f.chunks.length, h, f.formatContext, false, false);
              f.children.push(k);
              f.lastPushedText = false;
              var m = T(a, 0, null, f.formatContext, false, false);
              m.parentFlushed = true;
              b.blockedBoundary = h;
              b.blockedSegment = m;
              try {
                if (Jb(a, b, d), a.responseState.generateStaticMarkup || m.lastPushedText && m.textEmbedded && m.chunks.push("<!-- -->"), m.status = 1, X(h, m), 0 === h.pendingTasks) break a;
              } catch (l) {
                m.status = 4, h.forceClientRender = true, h.errorDigest = U(a, l);
              } finally {
                b.blockedBoundary = c, b.blockedSegment = f;
              }
              b = Db(a, e, c, k, g, b.legacyContext, b.context, b.treeContext);
              a.pingedTasks.push(b);
            }
            return;
        }
        if ("object" === typeof c && null !== c) switch (c.$$typeof) {
          case Pa:
            d = Fb(a, b, c.render, d, f);
            if (0 !== M) {
              c = b.treeContext;
              b.treeContext = ib(c, 1, 0);
              try {
                W(a, b, d);
              } finally {
                b.treeContext = c;
              }
            } else W(a, b, d);
            return;
          case Sa:
            c = c.type;
            d = Hb(c, d);
            Ib(a, b, c, d, f);
            return;
          case Na:
            f = d.children;
            c = c._context;
            d = d.value;
            e = c._currentValue2;
            c._currentValue2 = d;
            g = D;
            D = d = { parent: g, depth: null === g ? 0 : g.depth + 1, context: c, parentValue: e, value: d };
            b.context = d;
            W(a, b, f);
            a = D;
            if (null === a) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
            d = a.parentValue;
            a.context._currentValue2 = d === Xa ? a.context._defaultValue : d;
            a = D = a.parent;
            b.context = a;
            return;
          case Oa:
            d = d.children;
            d = d(c._currentValue2);
            W(a, b, d);
            return;
          case Ta:
            f = c._init;
            c = f(c._payload);
            d = Hb(c, d);
            Ib(a, b, c, d, void 0);
            return;
        }
        throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((null == c ? c : typeof c) + "."));
      }
    }
    function W(a, b, c) {
      b.node = c;
      if ("object" === typeof c && null !== c) {
        switch (c.$$typeof) {
          case Ia:
            Ib(a, b, c.type, c.props, c.ref);
            return;
          case Ja:
            throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case Ta:
            var d = c._init;
            c = d(c._payload);
            W(a, b, c);
            return;
        }
        if (ra(c)) {
          Kb(a, b, c);
          return;
        }
        null === c || "object" !== typeof c ? d = null : (d = Ya && c[Ya] || c["@@iterator"], d = "function" === typeof d ? d : null);
        if (d && (d = d.call(c))) {
          c = d.next();
          if (!c.done) {
            var f = [];
            do
              f.push(c.value), c = d.next();
            while (!c.done);
            Kb(a, b, f);
          }
          return;
        }
        a = Object.prototype.toString.call(c);
        throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === a ? "object with keys {" + Object.keys(c).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
      }
      "string" === typeof c ? (d = b.blockedSegment, d.lastPushedText = Ha(b.blockedSegment.chunks, c, a.responseState, d.lastPushedText)) : "number" === typeof c && (d = b.blockedSegment, d.lastPushedText = Ha(
        b.blockedSegment.chunks,
        "" + c,
        a.responseState,
        d.lastPushedText
      ));
    }
    function Kb(a, b, c) {
      for (var d = c.length, f = 0; f < d; f++) {
        var e = b.treeContext;
        b.treeContext = ib(e, d, f);
        try {
          Jb(a, b, c[f]);
        } finally {
          b.treeContext = e;
        }
      }
    }
    function Jb(a, b, c) {
      var d = b.blockedSegment.formatContext, f = b.legacyContext, e = b.context;
      try {
        return W(a, b, c);
      } catch (k) {
        if (tb(), "object" === typeof k && null !== k && "function" === typeof k.then) {
          c = k;
          var g = b.blockedSegment, h = T(a, g.chunks.length, null, g.formatContext, g.lastPushedText, true);
          g.children.push(h);
          g.lastPushedText = false;
          a = Db(a, b.node, b.blockedBoundary, h, b.abortSet, b.legacyContext, b.context, b.treeContext).ping;
          c.then(a, a);
          b.blockedSegment.formatContext = d;
          b.legacyContext = f;
          b.context = e;
          F(e);
        } else throw b.blockedSegment.formatContext = d, b.legacyContext = f, b.context = e, F(e), k;
      }
    }
    function Lb(a) {
      var b = a.blockedBoundary;
      a = a.blockedSegment;
      a.status = 3;
      Mb(this, b, a);
    }
    function Nb(a, b, c) {
      var d = a.blockedBoundary;
      a.blockedSegment.status = 3;
      null === d ? (b.allPendingTasks--, 2 !== b.status && (b.status = 2, null !== b.destination && b.destination.push(null))) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = true, d.errorDigest = b.onError(void 0 === c ? Error("The render was aborted by the server without a reason.") : c), d.parentFlushed && b.clientRenderedBoundaries.push(d)), d.fallbackAbortableTasks.forEach(function(a2) {
        return Nb(a2, b, c);
      }), d.fallbackAbortableTasks.clear(), b.allPendingTasks--, 0 === b.allPendingTasks && (a = b.onAllReady, a()));
    }
    function X(a, b) {
      if (0 === b.chunks.length && 1 === b.children.length && null === b.children[0].boundary) {
        var c = b.children[0];
        c.id = b.id;
        c.parentFlushed = true;
        1 === c.status && X(a, c);
      } else a.completedSegments.push(b);
    }
    function Mb(a, b, c) {
      if (null === b) {
        if (c.parentFlushed) {
          if (null !== a.completedRootSegment) throw Error("There can only be one root segment. This is a bug in React.");
          a.completedRootSegment = c;
        }
        a.pendingRootTasks--;
        0 === a.pendingRootTasks && (a.onShellError = S, b = a.onShellReady, b());
      } else b.pendingTasks--, b.forceClientRender || (0 === b.pendingTasks ? (c.parentFlushed && 1 === c.status && X(b, c), b.parentFlushed && a.completedBoundaries.push(b), b.fallbackAbortableTasks.forEach(Lb, a), b.fallbackAbortableTasks.clear()) : c.parentFlushed && 1 === c.status && (X(b, c), 1 === b.completedSegments.length && b.parentFlushed && a.partialBoundaries.push(b)));
      a.allPendingTasks--;
      0 === a.allPendingTasks && (a = a.onAllReady, a());
    }
    function Eb(a) {
      if (2 !== a.status) {
        var b = D, c = Ab.current;
        Ab.current = zb;
        var d = R;
        R = a.responseState;
        try {
          var f = a.pingedTasks, e;
          for (e = 0; e < f.length; e++) {
            var g = f[e];
            var h = a, k = g.blockedSegment;
            if (0 === k.status) {
              F(g.context);
              try {
                W(h, g, g.node), h.responseState.generateStaticMarkup || k.lastPushedText && k.textEmbedded && k.chunks.push("<!-- -->"), g.abortSet.delete(g), k.status = 1, Mb(h, g.blockedBoundary, k);
              } catch (y) {
                if (tb(), "object" === typeof y && null !== y && "function" === typeof y.then) {
                  var m = g.ping;
                  y.then(m, m);
                } else {
                  g.abortSet.delete(g);
                  k.status = 4;
                  var l = g.blockedBoundary, p = y, B = U(h, p);
                  null === l ? V(h, p) : (l.pendingTasks--, l.forceClientRender || (l.forceClientRender = true, l.errorDigest = B, l.parentFlushed && h.clientRenderedBoundaries.push(l)));
                  h.allPendingTasks--;
                  if (0 === h.allPendingTasks) {
                    var C2 = h.onAllReady;
                    C2();
                  }
                }
              } finally {
              }
            }
          }
          f.splice(0, e);
          null !== a.destination && Ob(a, a.destination);
        } catch (y) {
          U(a, y), V(a, y);
        } finally {
          R = d, Ab.current = c, c === zb && F(b);
        }
      }
    }
    function Y(a, b, c) {
      c.parentFlushed = true;
      switch (c.status) {
        case 0:
          var d = c.id = a.nextSegmentId++;
          c.lastPushedText = false;
          c.textEmbedded = false;
          a = a.responseState;
          b.push('<template id="');
          b.push(a.placeholderPrefix);
          a = d.toString(16);
          b.push(a);
          return b.push('"></template>');
        case 1:
          c.status = 2;
          var f = true;
          d = c.chunks;
          var e = 0;
          c = c.children;
          for (var g = 0; g < c.length; g++) {
            for (f = c[g]; e < f.index; e++) b.push(d[e]);
            f = Z(a, b, f);
          }
          for (; e < d.length - 1; e++) b.push(d[e]);
          e < d.length && (f = b.push(d[e]));
          return f;
        default:
          throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function Z(a, b, c) {
      var d = c.boundary;
      if (null === d) return Y(a, b, c);
      d.parentFlushed = true;
      if (d.forceClientRender) return a.responseState.generateStaticMarkup || (d = d.errorDigest, b.push("<!--$!-->"), b.push("<template"), d && (b.push(' data-dgst="'), d = u(d), b.push(d), b.push('"')), b.push("></template>")), Y(a, b, c), a = a.responseState.generateStaticMarkup ? true : b.push("<!--/$-->"), a;
      if (0 < d.pendingTasks) {
        d.rootSegmentID = a.nextSegmentId++;
        0 < d.completedSegments.length && a.partialBoundaries.push(d);
        var f = a.responseState;
        var e = f.nextSuspenseID++;
        f = f.boundaryPrefix + e.toString(16);
        d = d.id = f;
        Aa(b, a.responseState, d);
        Y(a, b, c);
        return b.push("<!--/$-->");
      }
      if (d.byteSize > a.progressiveChunkSize) return d.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(d), Aa(b, a.responseState, d.id), Y(a, b, c), b.push("<!--/$-->");
      a.responseState.generateStaticMarkup || b.push("<!--$-->");
      c = d.completedSegments;
      if (1 !== c.length) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
      Z(a, b, c[0]);
      a = a.responseState.generateStaticMarkup ? true : b.push("<!--/$-->");
      return a;
    }
    function Pb(a, b, c) {
      Ba(b, a.responseState, c.formatContext, c.id);
      Z(a, b, c);
      return Ca(b, c.formatContext);
    }
    function Qb(a, b, c) {
      for (var d = c.completedSegments, f = 0; f < d.length; f++) Rb(a, b, c, d[f]);
      d.length = 0;
      a = a.responseState;
      d = c.id;
      c = c.rootSegmentID;
      b.push(a.startInlineScript);
      a.sentCompleteBoundaryFunction ? b.push('$RC("') : (a.sentCompleteBoundaryFunction = true, b.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'));
      if (null === d) throw Error("An ID must have been assigned before we can complete the boundary.");
      c = c.toString(16);
      b.push(d);
      b.push('","');
      b.push(a.segmentPrefix);
      b.push(c);
      return b.push('")</script>');
    }
    function Rb(a, b, c, d) {
      if (2 === d.status) return true;
      var f = d.id;
      if (-1 === f) {
        if (-1 === (d.id = c.rootSegmentID)) throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Pb(a, b, d);
      }
      Pb(a, b, d);
      a = a.responseState;
      b.push(a.startInlineScript);
      a.sentCompleteSegmentFunction ? b.push('$RS("') : (a.sentCompleteSegmentFunction = true, b.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'));
      b.push(a.segmentPrefix);
      f = f.toString(16);
      b.push(f);
      b.push('","');
      b.push(a.placeholderPrefix);
      b.push(f);
      return b.push('")</script>');
    }
    function Ob(a, b) {
      try {
        var c = a.completedRootSegment;
        if (null !== c && 0 === a.pendingRootTasks) {
          Z(a, b, c);
          a.completedRootSegment = null;
          var d = a.responseState.bootstrapChunks;
          for (c = 0; c < d.length - 1; c++) b.push(d[c]);
          c < d.length && b.push(d[c]);
        }
        var f = a.clientRenderedBoundaries, e;
        for (e = 0; e < f.length; e++) {
          var g = f[e];
          d = b;
          var h = a.responseState, k = g.id, m = g.errorDigest, l = g.errorMessage, p = g.errorComponentStack;
          d.push(h.startInlineScript);
          h.sentClientRenderFunction ? d.push('$RX("') : (h.sentClientRenderFunction = true, d.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'));
          if (null === k) throw Error("An ID must have been assigned before we can complete the boundary.");
          d.push(k);
          d.push('"');
          if (m || l || p) {
            d.push(",");
            var B = Ea(m || "");
            d.push(B);
          }
          if (l || p) {
            d.push(",");
            var C2 = Ea(l || "");
            d.push(C2);
          }
          if (p) {
            d.push(",");
            var y = Ea(p);
            d.push(y);
          }
          if (!d.push(")</script>")) {
            a.destination = null;
            e++;
            f.splice(0, e);
            return;
          }
        }
        f.splice(0, e);
        var aa = a.completedBoundaries;
        for (e = 0; e < aa.length; e++) if (!Qb(a, b, aa[e])) {
          a.destination = null;
          e++;
          aa.splice(0, e);
          return;
        }
        aa.splice(0, e);
        var ba = a.partialBoundaries;
        for (e = 0; e < ba.length; e++) {
          var pb = ba[e];
          a: {
            f = a;
            g = b;
            var ca = pb.completedSegments;
            for (h = 0; h < ca.length; h++) if (!Rb(f, g, pb, ca[h])) {
              h++;
              ca.splice(0, h);
              var qb = false;
              break a;
            }
            ca.splice(0, h);
            qb = true;
          }
          if (!qb) {
            a.destination = null;
            e++;
            ba.splice(0, e);
            return;
          }
        }
        ba.splice(0, e);
        var da = a.completedBoundaries;
        for (e = 0; e < da.length; e++) if (!Qb(a, b, da[e])) {
          a.destination = null;
          e++;
          da.splice(0, e);
          return;
        }
        da.splice(0, e);
      } finally {
        0 === a.allPendingTasks && 0 === a.pingedTasks.length && 0 === a.clientRenderedBoundaries.length && 0 === a.completedBoundaries.length && b.push(null);
      }
    }
    function Sb(a, b) {
      if (1 === a.status) a.status = 2, b.destroy(a.fatalError);
      else if (2 !== a.status && null === a.destination) {
        a.destination = b;
        try {
          Ob(a, b);
        } catch (c) {
          U(a, c), V(a, c);
        }
      }
    }
    function Tb(a, b) {
      try {
        var c = a.abortableTasks;
        c.forEach(function(c2) {
          return Nb(c2, a, b);
        });
        c.clear();
        null !== a.destination && Ob(a, a.destination);
      } catch (d) {
        U(a, d), V(a, d);
      }
    }
    function Ub() {
    }
    function Vb(a, b, c, d) {
      var f = false, e = null, g = "", h = false;
      a = Cb(a, Fa(c, b ? b.identifierPrefix : void 0), Ga(), Infinity, Ub, void 0, function() {
        h = true;
      }, void 0, void 0);
      Eb(a);
      Tb(a, d);
      Sb(a, { push: function(a2) {
        null !== a2 && (g += a2);
        return true;
      }, destroy: function(a2) {
        f = true;
        e = a2;
      } });
      if (f) throw e;
      if (!h) throw Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return g;
    }
    function Wb(a, b) {
      a.prototype = Object.create(b.prototype);
      a.prototype.constructor = a;
      a.__proto__ = b;
    }
    var Xb = (function(a) {
      function b() {
        var b2 = a.call(this, {}) || this;
        b2.request = null;
        b2.startedFlowing = false;
        return b2;
      }
      Wb(b, a);
      var c = b.prototype;
      c._destroy = function(a2, b2) {
        Tb(this.request);
        b2(a2);
      };
      c._read = function() {
        this.startedFlowing && Sb(this.request, this);
      };
      return b;
    })(fa.Readable);
    function Yb() {
    }
    function Zb(a, b) {
      var c = new Xb(), d = Cb(a, Fa(false, b ? b.identifierPrefix : void 0), Ga(), Infinity, Yb, function() {
        c.startedFlowing = true;
        Sb(d, c);
      }, void 0, void 0);
      c.request = d;
      Eb(d);
      return c;
    }
    exports2.renderToNodeStream = function(a, b) {
      return Zb(a, b);
    };
    exports2.renderToStaticMarkup = function(a, b) {
      return Vb(a, b, true, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server');
    };
    exports2.renderToStaticNodeStream = function(a, b) {
      return Zb(a, b);
    };
    exports2.renderToString = function(a, b) {
      return Vb(a, b, false, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server');
    };
    exports2.version = "18.3.1";
  }
});

// node_modules/react-dom/cjs/react-dom-server.node.production.min.js
var require_react_dom_server_node_production_min = __commonJS({
  "node_modules/react-dom/cjs/react-dom-server.node.production.min.js"(exports2) {
    "use strict";
    var aa = require("util");
    var ba = require_react();
    var k = null;
    var l = 0;
    var q = true;
    function r(a, b) {
      if ("string" === typeof b) {
        if (0 !== b.length) if (2048 < 3 * b.length) 0 < l && (t(a, k.subarray(0, l)), k = new Uint8Array(2048), l = 0), t(a, u.encode(b));
        else {
          var c = k;
          0 < l && (c = k.subarray(l));
          c = u.encodeInto(b, c);
          var d = c.read;
          l += c.written;
          d < b.length && (t(a, k), k = new Uint8Array(2048), l = u.encodeInto(b.slice(d), k).written);
          2048 === l && (t(a, k), k = new Uint8Array(2048), l = 0);
        }
      } else 0 !== b.byteLength && (2048 < b.byteLength ? (0 < l && (t(a, k.subarray(0, l)), k = new Uint8Array(2048), l = 0), t(a, b)) : (c = k.length - l, c < b.byteLength && (0 === c ? t(
        a,
        k
      ) : (k.set(b.subarray(0, c), l), l += c, t(a, k), b = b.subarray(c)), k = new Uint8Array(2048), l = 0), k.set(b, l), l += b.byteLength, 2048 === l && (t(a, k), k = new Uint8Array(2048), l = 0)));
    }
    function t(a, b) {
      a = a.write(b);
      q = q && a;
    }
    function w(a, b) {
      r(a, b);
      return q;
    }
    function ca(a) {
      k && 0 < l && a.write(k.subarray(0, l));
      k = null;
      l = 0;
      q = true;
    }
    var u = new aa.TextEncoder();
    function x(a) {
      return u.encode(a);
    }
    var y = Object.prototype.hasOwnProperty;
    var da = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var ea = {};
    var fa = {};
    function ha(a) {
      if (y.call(fa, a)) return true;
      if (y.call(ea, a)) return false;
      if (da.test(a)) return fa[a] = true;
      ea[a] = true;
      return false;
    }
    function z(a, b, c, d, f, e, g) {
      this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
      this.attributeName = d;
      this.attributeNamespace = f;
      this.mustUseProperty = c;
      this.propertyName = a;
      this.type = b;
      this.sanitizeURL = e;
      this.removeEmptyString = g;
    }
    var A = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      A[a] = new z(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b = a[0];
      A[b] = new z(b, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      A[a] = new z(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      A[a] = new z(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      A[a] = new z(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      A[a] = new z(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      A[a] = new z(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      A[a] = new z(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      A[a] = new z(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var ia = /[\-:]([a-z])/g;
    function ja(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b = a.replace(
        ia,
        ja
      );
      A[b] = new z(b, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b = a.replace(ia, ja);
      A[b] = new z(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b = a.replace(ia, ja);
      A[b] = new z(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      A[a] = new z(a, 1, false, a.toLowerCase(), null, false, false);
    });
    A.xlinkHref = new z("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      A[a] = new z(a, 1, false, a.toLowerCase(), null, true, true);
    });
    var B = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    var ka = ["Webkit", "ms", "Moz", "O"];
    Object.keys(B).forEach(function(a) {
      ka.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        B[b] = B[a];
      });
    });
    var la = /["'&<>]/;
    function F(a) {
      if ("boolean" === typeof a || "number" === typeof a) return "" + a;
      a = "" + a;
      var b = la.exec(a);
      if (b) {
        var c = "", d, f = 0;
        for (d = b.index; d < a.length; d++) {
          switch (a.charCodeAt(d)) {
            case 34:
              b = "&quot;";
              break;
            case 38:
              b = "&amp;";
              break;
            case 39:
              b = "&#x27;";
              break;
            case 60:
              b = "&lt;";
              break;
            case 62:
              b = "&gt;";
              break;
            default:
              continue;
          }
          f !== d && (c += a.substring(f, d));
          f = d + 1;
          c += b;
        }
        a = f !== d ? c + a.substring(f, d) : c;
      }
      return a;
    }
    var ma = /([A-Z])/g;
    var pa = /^ms-/;
    var qa = Array.isArray;
    var ra = x("<script>");
    var sa = x("</script>");
    var ta = x('<script src="');
    var ua = x('<script type="module" src="');
    var va = x('" async=""></script>');
    var wa = /(<\/|<)(s)(cript)/gi;
    function xa(a, b, c, d) {
      return "" + b + ("s" === c ? "\\u0073" : "\\u0053") + d;
    }
    function G(a, b) {
      return { insertionMode: a, selectedValue: b };
    }
    function ya(a, b, c) {
      switch (b) {
        case "select":
          return G(1, null != c.value ? c.value : c.defaultValue);
        case "svg":
          return G(2, null);
        case "math":
          return G(3, null);
        case "foreignObject":
          return G(1, null);
        case "table":
          return G(4, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return G(5, null);
        case "colgroup":
          return G(7, null);
        case "tr":
          return G(6, null);
      }
      return 4 <= a.insertionMode || 0 === a.insertionMode ? G(1, null) : a;
    }
    var za = x("<!-- -->");
    function Aa(a, b, c, d) {
      if ("" === b) return d;
      d && a.push(za);
      a.push(F(b));
      return true;
    }
    var Ba = /* @__PURE__ */ new Map();
    var Ca = x(' style="');
    var Da = x(":");
    var Ea = x(";");
    function Fa(a, b, c) {
      if ("object" !== typeof c) throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      b = true;
      for (var d in c) if (y.call(c, d)) {
        var f = c[d];
        if (null != f && "boolean" !== typeof f && "" !== f) {
          if (0 === d.indexOf("--")) {
            var e = F(d);
            f = F(("" + f).trim());
          } else {
            e = d;
            var g = Ba.get(e);
            void 0 !== g ? e = g : (g = x(F(e.replace(ma, "-$1").toLowerCase().replace(pa, "-ms-"))), Ba.set(e, g), e = g);
            f = "number" === typeof f ? 0 === f || y.call(
              B,
              d
            ) ? "" + f : f + "px" : F(("" + f).trim());
          }
          b ? (b = false, a.push(Ca, e, Da, f)) : a.push(Ea, e, Da, f);
        }
      }
      b || a.push(H);
    }
    var I = x(" ");
    var J = x('="');
    var H = x('"');
    var Ga = x('=""');
    function K(a, b, c, d) {
      switch (c) {
        case "style":
          Fa(a, b, d);
          return;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (!(2 < c.length) || "o" !== c[0] && "O" !== c[0] || "n" !== c[1] && "N" !== c[1]) {
        if (b = A.hasOwnProperty(c) ? A[c] : null, null !== b) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!b.acceptsBooleans) return;
          }
          c = b.attributeName;
          switch (b.type) {
            case 3:
              d && a.push(I, c, Ga);
              break;
            case 4:
              true === d ? a.push(I, c, Ga) : false !== d && a.push(I, c, J, F(d), H);
              break;
            case 5:
              isNaN(d) || a.push(I, c, J, F(d), H);
              break;
            case 6:
              !isNaN(d) && 1 <= d && a.push(I, c, J, F(d), H);
              break;
            default:
              b.sanitizeURL && (d = "" + d), a.push(I, c, J, F(d), H);
          }
        } else if (ha(c)) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (b = c.toLowerCase().slice(0, 5), "data-" !== b && "aria-" !== b) return;
          }
          a.push(I, c, J, F(d), H);
        }
      }
    }
    var L2 = x(">");
    var Ha = x("/>");
    function M(a, b, c) {
      if (null != b) {
        if (null != c) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if ("object" !== typeof b || !("__html" in b)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        b = b.__html;
        null !== b && void 0 !== b && a.push("" + b);
      }
    }
    function Ia(a) {
      var b = "";
      ba.Children.forEach(a, function(a2) {
        null != a2 && (b += a2);
      });
      return b;
    }
    var Ja = x(' selected=""');
    function Ka(a, b, c, d) {
      a.push(N(c));
      var f = c = null, e;
      for (e in b) if (y.call(b, e)) {
        var g = b[e];
        if (null != g) switch (e) {
          case "children":
            c = g;
            break;
          case "dangerouslySetInnerHTML":
            f = g;
            break;
          default:
            K(a, d, e, g);
        }
      }
      a.push(L2);
      M(a, f, c);
      return "string" === typeof c ? (a.push(F(c)), null) : c;
    }
    var La = x("\n");
    var Ma = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    var Na = /* @__PURE__ */ new Map();
    function N(a) {
      var b = Na.get(a);
      if (void 0 === b) {
        if (!Ma.test(a)) throw Error("Invalid tag: " + a);
        b = x("<" + a);
        Na.set(a, b);
      }
      return b;
    }
    var Oa = x("<!DOCTYPE html>");
    function Pa(a, b, c, d, f) {
      switch (b) {
        case "select":
          a.push(N("select"));
          var e = null, g = null;
          for (p in c) if (y.call(c, p)) {
            var h = c[p];
            if (null != h) switch (p) {
              case "children":
                e = h;
                break;
              case "dangerouslySetInnerHTML":
                g = h;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                K(a, d, p, h);
            }
          }
          a.push(L2);
          M(a, g, e);
          return e;
        case "option":
          g = f.selectedValue;
          a.push(N("option"));
          var m = h = null, n = null;
          var p = null;
          for (e in c) if (y.call(c, e)) {
            var v = c[e];
            if (null != v) switch (e) {
              case "children":
                h = v;
                break;
              case "selected":
                n = v;
                break;
              case "dangerouslySetInnerHTML":
                p = v;
                break;
              case "value":
                m = v;
              default:
                K(a, d, e, v);
            }
          }
          if (null != g) if (c = null !== m ? "" + m : Ia(h), qa(g)) for (d = 0; d < g.length; d++) {
            if ("" + g[d] === c) {
              a.push(Ja);
              break;
            }
          }
          else "" + g === c && a.push(Ja);
          else n && a.push(Ja);
          a.push(L2);
          M(a, p, h);
          return h;
        case "textarea":
          a.push(N("textarea"));
          p = g = e = null;
          for (h in c) if (y.call(c, h) && (m = c[h], null != m)) switch (h) {
            case "children":
              p = m;
              break;
            case "value":
              e = m;
              break;
            case "defaultValue":
              g = m;
              break;
            case "dangerouslySetInnerHTML":
              throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              K(a, d, h, m);
          }
          null === e && null !== g && (e = g);
          a.push(L2);
          if (null != p) {
            if (null != e) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (qa(p) && 1 < p.length) throw Error("<textarea> can only have at most one child.");
            e = "" + p;
          }
          "string" === typeof e && "\n" === e[0] && a.push(La);
          null !== e && a.push(F("" + e));
          return null;
        case "input":
          a.push(N("input"));
          m = p = h = e = null;
          for (g in c) if (y.call(c, g) && (n = c[g], null != n)) switch (g) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              m = n;
              break;
            case "defaultValue":
              h = n;
              break;
            case "checked":
              p = n;
              break;
            case "value":
              e = n;
              break;
            default:
              K(a, d, g, n);
          }
          null !== p ? K(a, d, "checked", p) : null !== m && K(a, d, "checked", m);
          null !== e ? K(a, d, "value", e) : null !== h && K(a, d, "value", h);
          a.push(Ha);
          return null;
        case "menuitem":
          a.push(N("menuitem"));
          for (var C2 in c) if (y.call(c, C2) && (e = c[C2], null != e)) switch (C2) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              K(a, d, C2, e);
          }
          a.push(L2);
          return null;
        case "title":
          a.push(N("title"));
          e = null;
          for (v in c) if (y.call(c, v) && (g = c[v], null != g)) switch (v) {
            case "children":
              e = g;
              break;
            case "dangerouslySetInnerHTML":
              throw Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              K(a, d, v, g);
          }
          a.push(L2);
          return e;
        case "listing":
        case "pre":
          a.push(N(b));
          g = e = null;
          for (m in c) if (y.call(c, m) && (h = c[m], null != h)) switch (m) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            default:
              K(a, d, m, h);
          }
          a.push(L2);
          if (null != g) {
            if (null != e) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            if ("object" !== typeof g || !("__html" in g)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
            c = g.__html;
            null !== c && void 0 !== c && ("string" === typeof c && 0 < c.length && "\n" === c[0] ? a.push(La, c) : a.push("" + c));
          }
          "string" === typeof e && "\n" === e[0] && a.push(La);
          return e;
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          a.push(N(b));
          for (var D in c) if (y.call(c, D) && (e = c[D], null != e)) switch (D) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(b + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              K(a, d, D, e);
          }
          a.push(Ha);
          return null;
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return Ka(a, c, b, d);
        case "html":
          return 0 === f.insertionMode && a.push(Oa), Ka(
            a,
            c,
            b,
            d
          );
        default:
          if (-1 === b.indexOf("-") && "string" !== typeof c.is) return Ka(a, c, b, d);
          a.push(N(b));
          g = e = null;
          for (n in c) if (y.call(c, n) && (h = c[n], null != h)) switch (n) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            case "style":
              Fa(a, d, h);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ha(n) && "function" !== typeof h && "symbol" !== typeof h && a.push(I, n, J, F(h), H);
          }
          a.push(L2);
          M(a, g, e);
          return e;
      }
    }
    var Qa = x("</");
    var Ra = x(">");
    var Sa = x('<template id="');
    var Ta = x('"></template>');
    var Ua = x("<!--$-->");
    var Va = x('<!--$?--><template id="');
    var Wa = x('"></template>');
    var Xa = x("<!--$!-->");
    var Ya = x("<!--/$-->");
    var Za = x("<template");
    var $a = x('"');
    var ab = x(' data-dgst="');
    x(' data-msg="');
    x(' data-stck="');
    var bb = x("></template>");
    function cb(a, b, c) {
      r(a, Va);
      if (null === c) throw Error("An ID must have been assigned before we can complete the boundary.");
      r(a, c);
      return w(a, Wa);
    }
    var db = x('<div hidden id="');
    var eb = x('">');
    var fb = x("</div>");
    var gb = x('<svg aria-hidden="true" style="display:none" id="');
    var hb = x('">');
    var ib = x("</svg>");
    var jb = x('<math aria-hidden="true" style="display:none" id="');
    var kb = x('">');
    var lb = x("</math>");
    var mb = x('<table hidden id="');
    var nb = x('">');
    var ob = x("</table>");
    var pb = x('<table hidden><tbody id="');
    var qb = x('">');
    var rb = x("</tbody></table>");
    var sb = x('<table hidden><tr id="');
    var tb = x('">');
    var ub = x("</tr></table>");
    var vb = x('<table hidden><colgroup id="');
    var wb = x('">');
    var xb = x("</colgroup></table>");
    function yb(a, b, c, d) {
      switch (c.insertionMode) {
        case 0:
        case 1:
          return r(a, db), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, eb);
        case 2:
          return r(a, gb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, hb);
        case 3:
          return r(a, jb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, kb);
        case 4:
          return r(a, mb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, nb);
        case 5:
          return r(a, pb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, qb);
        case 6:
          return r(a, sb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, tb);
        case 7:
          return r(a, vb), r(
            a,
            b.segmentPrefix
          ), r(a, d.toString(16)), w(a, wb);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function zb(a, b) {
      switch (b.insertionMode) {
        case 0:
        case 1:
          return w(a, fb);
        case 2:
          return w(a, ib);
        case 3:
          return w(a, lb);
        case 4:
          return w(a, ob);
        case 5:
          return w(a, rb);
        case 6:
          return w(a, ub);
        case 7:
          return w(a, xb);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Ab = x('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("');
    var Bb = x('$RS("');
    var Cb = x('","');
    var Db = x('")</script>');
    var Fb = x('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("');
    var Gb = x('$RC("');
    var Hb = x('","');
    var Ib = x('")</script>');
    var Jb = x('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("');
    var Kb = x('$RX("');
    var Lb = x('"');
    var Mb = x(")</script>");
    var Nb = x(",");
    var Ob = /[<\u2028\u2029]/g;
    function Pb(a) {
      return JSON.stringify(a).replace(Ob, function(a2) {
        switch (a2) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    var O = Object.assign;
    var Qb = /* @__PURE__ */ Symbol.for("react.element");
    var Rb = /* @__PURE__ */ Symbol.for("react.portal");
    var Sb = /* @__PURE__ */ Symbol.for("react.fragment");
    var Tb = /* @__PURE__ */ Symbol.for("react.strict_mode");
    var Ub = /* @__PURE__ */ Symbol.for("react.profiler");
    var Vb = /* @__PURE__ */ Symbol.for("react.provider");
    var Wb = /* @__PURE__ */ Symbol.for("react.context");
    var Xb = /* @__PURE__ */ Symbol.for("react.forward_ref");
    var Yb = /* @__PURE__ */ Symbol.for("react.suspense");
    var Zb = /* @__PURE__ */ Symbol.for("react.suspense_list");
    var $b = /* @__PURE__ */ Symbol.for("react.memo");
    var ac = /* @__PURE__ */ Symbol.for("react.lazy");
    var bc = /* @__PURE__ */ Symbol.for("react.scope");
    var cc = /* @__PURE__ */ Symbol.for("react.debug_trace_mode");
    var dc = /* @__PURE__ */ Symbol.for("react.legacy_hidden");
    var ec = /* @__PURE__ */ Symbol.for("react.default_value");
    var fc = Symbol.iterator;
    function gc(a) {
      if (null == a) return null;
      if ("function" === typeof a) return a.displayName || a.name || null;
      if ("string" === typeof a) return a;
      switch (a) {
        case Sb:
          return "Fragment";
        case Rb:
          return "Portal";
        case Ub:
          return "Profiler";
        case Tb:
          return "StrictMode";
        case Yb:
          return "Suspense";
        case Zb:
          return "SuspenseList";
      }
      if ("object" === typeof a) switch (a.$$typeof) {
        case Wb:
          return (a.displayName || "Context") + ".Consumer";
        case Vb:
          return (a._context.displayName || "Context") + ".Provider";
        case Xb:
          var b = a.render;
          a = a.displayName;
          a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          return a;
        case $b:
          return b = a.displayName || null, null !== b ? b : gc(a.type) || "Memo";
        case ac:
          b = a._payload;
          a = a._init;
          try {
            return gc(a(b));
          } catch (c) {
          }
      }
      return null;
    }
    var hc = {};
    function ic(a, b) {
      a = a.contextTypes;
      if (!a) return hc;
      var c = {}, d;
      for (d in a) c[d] = b[d];
      return c;
    }
    var P = null;
    function Q(a, b) {
      if (a !== b) {
        a.context._currentValue = a.parentValue;
        a = a.parent;
        var c = b.parent;
        if (null === a) {
          if (null !== c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (null === c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
          Q(a, c);
        }
        b.context._currentValue = b.value;
      }
    }
    function jc(a) {
      a.context._currentValue = a.parentValue;
      a = a.parent;
      null !== a && jc(a);
    }
    function kc(a) {
      var b = a.parent;
      null !== b && kc(b);
      a.context._currentValue = a.value;
    }
    function lc(a, b) {
      a.context._currentValue = a.parentValue;
      a = a.parent;
      if (null === a) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      a.depth === b.depth ? Q(a, b) : lc(a, b);
    }
    function mc(a, b) {
      var c = b.parent;
      if (null === c) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      a.depth === c.depth ? Q(a, c) : mc(a, c);
      b.context._currentValue = b.value;
    }
    function nc(a) {
      var b = P;
      b !== a && (null === b ? kc(a) : null === a ? jc(b) : b.depth === a.depth ? Q(b, a) : b.depth > a.depth ? lc(b, a) : mc(b, a), P = a);
    }
    var oc = { isMounted: function() {
      return false;
    }, enqueueSetState: function(a, b) {
      a = a._reactInternals;
      null !== a.queue && a.queue.push(b);
    }, enqueueReplaceState: function(a, b) {
      a = a._reactInternals;
      a.replace = true;
      a.queue = [b];
    }, enqueueForceUpdate: function() {
    } };
    function pc(a, b, c, d) {
      var f = void 0 !== a.state ? a.state : null;
      a.updater = oc;
      a.props = c;
      a.state = f;
      var e = { queue: [], replace: false };
      a._reactInternals = e;
      var g = b.contextType;
      a.context = "object" === typeof g && null !== g ? g._currentValue : d;
      g = b.getDerivedStateFromProps;
      "function" === typeof g && (g = g(c, f), f = null === g || void 0 === g ? f : O({}, f, g), a.state = f);
      if ("function" !== typeof b.getDerivedStateFromProps && "function" !== typeof a.getSnapshotBeforeUpdate && ("function" === typeof a.UNSAFE_componentWillMount || "function" === typeof a.componentWillMount)) if (b = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), b !== a.state && oc.enqueueReplaceState(a, a.state, null), null !== e.queue && 0 < e.queue.length) if (b = e.queue, g = e.replace, e.queue = null, e.replace = false, g && 1 === b.length) a.state = b[0];
      else {
        e = g ? b[0] : a.state;
        f = true;
        for (g = g ? 1 : 0; g < b.length; g++) {
          var h = b[g];
          h = "function" === typeof h ? h.call(a, e, c, d) : h;
          null != h && (f ? (f = false, e = O({}, e, h)) : O(e, h));
        }
        a.state = e;
      }
      else e.queue = null;
    }
    var qc = { id: 1, overflow: "" };
    function rc(a, b, c) {
      var d = a.id;
      a = a.overflow;
      var f = 32 - sc(d) - 1;
      d &= ~(1 << f);
      c += 1;
      var e = 32 - sc(b) + f;
      if (30 < e) {
        var g = f - f % 5;
        e = (d & (1 << g) - 1).toString(32);
        d >>= g;
        f -= g;
        return { id: 1 << 32 - sc(b) + f | c << f | d, overflow: e + a };
      }
      return { id: 1 << e | c << f | d, overflow: a };
    }
    var sc = Math.clz32 ? Math.clz32 : tc;
    var uc = Math.log;
    var vc = Math.LN2;
    function tc(a) {
      a >>>= 0;
      return 0 === a ? 32 : 31 - (uc(a) / vc | 0) | 0;
    }
    function wc(a, b) {
      return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var xc = "function" === typeof Object.is ? Object.is : wc;
    var R = null;
    var yc = null;
    var zc = null;
    var S = null;
    var T = false;
    var Ac = false;
    var U = 0;
    var V = null;
    var Bc = 0;
    function W() {
      if (null === R) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
      return R;
    }
    function Cc() {
      if (0 < Bc) throw Error("Rendered more hooks than during the previous render");
      return { memoizedState: null, queue: null, next: null };
    }
    function Dc() {
      null === S ? null === zc ? (T = false, zc = S = Cc()) : (T = true, S = zc) : null === S.next ? (T = false, S = S.next = Cc()) : (T = true, S = S.next);
      return S;
    }
    function Ec() {
      yc = R = null;
      Ac = false;
      zc = null;
      Bc = 0;
      S = V = null;
    }
    function Fc(a, b) {
      return "function" === typeof b ? b(a) : b;
    }
    function Gc(a, b, c) {
      R = W();
      S = Dc();
      if (T) {
        var d = S.queue;
        b = d.dispatch;
        if (null !== V && (c = V.get(d), void 0 !== c)) {
          V.delete(d);
          d = S.memoizedState;
          do
            d = a(d, c.action), c = c.next;
          while (null !== c);
          S.memoizedState = d;
          return [d, b];
        }
        return [S.memoizedState, b];
      }
      a = a === Fc ? "function" === typeof b ? b() : b : void 0 !== c ? c(b) : b;
      S.memoizedState = a;
      a = S.queue = { last: null, dispatch: null };
      a = a.dispatch = Hc.bind(null, R, a);
      return [S.memoizedState, a];
    }
    function Ic(a, b) {
      R = W();
      S = Dc();
      b = void 0 === b ? null : b;
      if (null !== S) {
        var c = S.memoizedState;
        if (null !== c && null !== b) {
          var d = c[1];
          a: if (null === d) d = false;
          else {
            for (var f = 0; f < d.length && f < b.length; f++) if (!xc(b[f], d[f])) {
              d = false;
              break a;
            }
            d = true;
          }
          if (d) return c[0];
        }
      }
      a = a();
      S.memoizedState = [a, b];
      return a;
    }
    function Hc(a, b, c) {
      if (25 <= Bc) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (a === R) if (Ac = true, a = { action: c, next: null }, null === V && (V = /* @__PURE__ */ new Map()), c = V.get(b), void 0 === c) V.set(b, a);
      else {
        for (b = c; null !== b.next; ) b = b.next;
        b.next = a;
      }
    }
    function Jc() {
      throw Error("startTransition cannot be called during server rendering.");
    }
    function Kc() {
    }
    var Mc = { readContext: function(a) {
      return a._currentValue;
    }, useContext: function(a) {
      W();
      return a._currentValue;
    }, useMemo: Ic, useReducer: Gc, useRef: function(a) {
      R = W();
      S = Dc();
      var b = S.memoizedState;
      return null === b ? (a = { current: a }, S.memoizedState = a) : b;
    }, useState: function(a) {
      return Gc(Fc, a);
    }, useInsertionEffect: Kc, useLayoutEffect: function() {
    }, useCallback: function(a, b) {
      return Ic(function() {
        return a;
      }, b);
    }, useImperativeHandle: Kc, useEffect: Kc, useDebugValue: Kc, useDeferredValue: function(a) {
      W();
      return a;
    }, useTransition: function() {
      W();
      return [false, Jc];
    }, useId: function() {
      var a = yc.treeContext;
      var b = a.overflow;
      a = a.id;
      a = (a & ~(1 << 32 - sc(a) - 1)).toString(32) + b;
      var c = Lc;
      if (null === c) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      b = U++;
      a = ":" + c.idPrefix + "R" + a;
      0 < b && (a += "H" + b.toString(32));
      return a + ":";
    }, useMutableSource: function(a, b) {
      W();
      return b(a._source);
    }, useSyncExternalStore: function(a, b, c) {
      if (void 0 === c) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return c();
    } };
    var Lc = null;
    var Nc = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
    function Oc(a) {
      console.error(a);
      return null;
    }
    function X() {
    }
    function Pc(a, b) {
      var c = a.pingedTasks;
      c.push(b);
      1 === c.length && setImmediate(function() {
        return Qc(a);
      });
    }
    function Rc(a, b, c, d, f, e, g, h) {
      a.allPendingTasks++;
      null === c ? a.pendingRootTasks++ : c.pendingTasks++;
      var m = { node: b, ping: function() {
        return Pc(a, m);
      }, blockedBoundary: c, blockedSegment: d, abortSet: f, legacyContext: e, context: g, treeContext: h };
      f.add(m);
      return m;
    }
    function Sc(a, b, c, d, f, e) {
      return { status: 0, id: -1, index: b, parentFlushed: false, chunks: [], children: [], formatContext: d, boundary: c, lastPushedText: f, textEmbedded: e };
    }
    function Y(a, b) {
      a = a.onError(b);
      if (null != a && "string" !== typeof a) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
      return a;
    }
    function Tc(a, b) {
      var c = a.onShellError;
      c(b);
      c = a.onFatalError;
      c(b);
      null !== a.destination ? (a.status = 2, a.destination.destroy(b)) : (a.status = 1, a.fatalError = b);
    }
    function Uc(a, b, c, d, f) {
      R = {};
      yc = b;
      U = 0;
      for (a = c(d, f); Ac; ) Ac = false, U = 0, Bc += 1, S = null, a = c(d, f);
      Ec();
      return a;
    }
    function Vc(a, b, c, d) {
      var f = c.render(), e = d.childContextTypes;
      if (null !== e && void 0 !== e) {
        var g = b.legacyContext;
        if ("function" !== typeof c.getChildContext) d = g;
        else {
          c = c.getChildContext();
          for (var h in c) if (!(h in e)) throw Error((gc(d) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
          d = O({}, g, c);
        }
        b.legacyContext = d;
        Z(a, b, f);
        b.legacyContext = g;
      } else Z(a, b, f);
    }
    function Wc(a, b) {
      if (a && a.defaultProps) {
        b = O({}, b);
        a = a.defaultProps;
        for (var c in a) void 0 === b[c] && (b[c] = a[c]);
        return b;
      }
      return b;
    }
    function Xc(a, b, c, d, f) {
      if ("function" === typeof c) if (c.prototype && c.prototype.isReactComponent) {
        f = ic(c, b.legacyContext);
        var e = c.contextType;
        e = new c(d, "object" === typeof e && null !== e ? e._currentValue : f);
        pc(e, c, d, f);
        Vc(a, b, e, c);
      } else {
        e = ic(c, b.legacyContext);
        f = Uc(a, b, c, d, e);
        var g = 0 !== U;
        if ("object" === typeof f && null !== f && "function" === typeof f.render && void 0 === f.$$typeof) pc(f, c, d, e), Vc(a, b, f, c);
        else if (g) {
          d = b.treeContext;
          b.treeContext = rc(d, 1, 0);
          try {
            Z(a, b, f);
          } finally {
            b.treeContext = d;
          }
        } else Z(a, b, f);
      }
      else if ("string" === typeof c) {
        f = b.blockedSegment;
        e = Pa(f.chunks, c, d, a.responseState, f.formatContext);
        f.lastPushedText = false;
        g = f.formatContext;
        f.formatContext = ya(g, c, d);
        Yc(a, b, e);
        f.formatContext = g;
        switch (c) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break;
          default:
            f.chunks.push(Qa, c, Ra);
        }
        f.lastPushedText = false;
      } else {
        switch (c) {
          case dc:
          case cc:
          case Tb:
          case Ub:
          case Sb:
            Z(a, b, d.children);
            return;
          case Zb:
            Z(
              a,
              b,
              d.children
            );
            return;
          case bc:
            throw Error("ReactDOMServer does not yet support scope components.");
          case Yb:
            a: {
              c = b.blockedBoundary;
              f = b.blockedSegment;
              e = d.fallback;
              d = d.children;
              g = /* @__PURE__ */ new Set();
              var h = { id: null, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, forceClientRender: false, completedSegments: [], byteSize: 0, fallbackAbortableTasks: g, errorDigest: null }, m = Sc(a, f.chunks.length, h, f.formatContext, false, false);
              f.children.push(m);
              f.lastPushedText = false;
              var n = Sc(a, 0, null, f.formatContext, false, false);
              n.parentFlushed = true;
              b.blockedBoundary = h;
              b.blockedSegment = n;
              try {
                if (Yc(a, b, d), n.lastPushedText && n.textEmbedded && n.chunks.push(za), n.status = 1, Zc(h, n), 0 === h.pendingTasks) break a;
              } catch (p) {
                n.status = 4, h.forceClientRender = true, h.errorDigest = Y(a, p);
              } finally {
                b.blockedBoundary = c, b.blockedSegment = f;
              }
              b = Rc(a, e, c, m, g, b.legacyContext, b.context, b.treeContext);
              a.pingedTasks.push(b);
            }
            return;
        }
        if ("object" === typeof c && null !== c) switch (c.$$typeof) {
          case Xb:
            d = Uc(a, b, c.render, d, f);
            if (0 !== U) {
              c = b.treeContext;
              b.treeContext = rc(c, 1, 0);
              try {
                Z(a, b, d);
              } finally {
                b.treeContext = c;
              }
            } else Z(
              a,
              b,
              d
            );
            return;
          case $b:
            c = c.type;
            d = Wc(c, d);
            Xc(a, b, c, d, f);
            return;
          case Vb:
            f = d.children;
            c = c._context;
            d = d.value;
            e = c._currentValue;
            c._currentValue = d;
            g = P;
            P = d = { parent: g, depth: null === g ? 0 : g.depth + 1, context: c, parentValue: e, value: d };
            b.context = d;
            Z(a, b, f);
            a = P;
            if (null === a) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
            d = a.parentValue;
            a.context._currentValue = d === ec ? a.context._defaultValue : d;
            a = P = a.parent;
            b.context = a;
            return;
          case Wb:
            d = d.children;
            d = d(c._currentValue);
            Z(a, b, d);
            return;
          case ac:
            f = c._init;
            c = f(c._payload);
            d = Wc(c, d);
            Xc(a, b, c, d, void 0);
            return;
        }
        throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((null == c ? c : typeof c) + "."));
      }
    }
    function Z(a, b, c) {
      b.node = c;
      if ("object" === typeof c && null !== c) {
        switch (c.$$typeof) {
          case Qb:
            Xc(a, b, c.type, c.props, c.ref);
            return;
          case Rb:
            throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case ac:
            var d = c._init;
            c = d(c._payload);
            Z(a, b, c);
            return;
        }
        if (qa(c)) {
          $c(a, b, c);
          return;
        }
        null === c || "object" !== typeof c ? d = null : (d = fc && c[fc] || c["@@iterator"], d = "function" === typeof d ? d : null);
        if (d && (d = d.call(c))) {
          c = d.next();
          if (!c.done) {
            var f = [];
            do
              f.push(c.value), c = d.next();
            while (!c.done);
            $c(a, b, f);
          }
          return;
        }
        a = Object.prototype.toString.call(c);
        throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === a ? "object with keys {" + Object.keys(c).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
      }
      "string" === typeof c ? (d = b.blockedSegment, d.lastPushedText = Aa(b.blockedSegment.chunks, c, a.responseState, d.lastPushedText)) : "number" === typeof c && (d = b.blockedSegment, d.lastPushedText = Aa(
        b.blockedSegment.chunks,
        "" + c,
        a.responseState,
        d.lastPushedText
      ));
    }
    function $c(a, b, c) {
      for (var d = c.length, f = 0; f < d; f++) {
        var e = b.treeContext;
        b.treeContext = rc(e, d, f);
        try {
          Yc(a, b, c[f]);
        } finally {
          b.treeContext = e;
        }
      }
    }
    function Yc(a, b, c) {
      var d = b.blockedSegment.formatContext, f = b.legacyContext, e = b.context;
      try {
        return Z(a, b, c);
      } catch (m) {
        if (Ec(), "object" === typeof m && null !== m && "function" === typeof m.then) {
          c = m;
          var g = b.blockedSegment, h = Sc(a, g.chunks.length, null, g.formatContext, g.lastPushedText, true);
          g.children.push(h);
          g.lastPushedText = false;
          a = Rc(a, b.node, b.blockedBoundary, h, b.abortSet, b.legacyContext, b.context, b.treeContext).ping;
          c.then(a, a);
          b.blockedSegment.formatContext = d;
          b.legacyContext = f;
          b.context = e;
          nc(e);
        } else throw b.blockedSegment.formatContext = d, b.legacyContext = f, b.context = e, nc(e), m;
      }
    }
    function ad(a) {
      var b = a.blockedBoundary;
      a = a.blockedSegment;
      a.status = 3;
      bd(this, b, a);
    }
    function cd(a, b, c) {
      var d = a.blockedBoundary;
      a.blockedSegment.status = 3;
      null === d ? (b.allPendingTasks--, 2 !== b.status && (b.status = 2, null !== b.destination && b.destination.end())) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = true, d.errorDigest = b.onError(void 0 === c ? Error("The render was aborted by the server without a reason.") : c), d.parentFlushed && b.clientRenderedBoundaries.push(d)), d.fallbackAbortableTasks.forEach(function(a2) {
        return cd(a2, b, c);
      }), d.fallbackAbortableTasks.clear(), b.allPendingTasks--, 0 === b.allPendingTasks && (a = b.onAllReady, a()));
    }
    function Zc(a, b) {
      if (0 === b.chunks.length && 1 === b.children.length && null === b.children[0].boundary) {
        var c = b.children[0];
        c.id = b.id;
        c.parentFlushed = true;
        1 === c.status && Zc(a, c);
      } else a.completedSegments.push(b);
    }
    function bd(a, b, c) {
      if (null === b) {
        if (c.parentFlushed) {
          if (null !== a.completedRootSegment) throw Error("There can only be one root segment. This is a bug in React.");
          a.completedRootSegment = c;
        }
        a.pendingRootTasks--;
        0 === a.pendingRootTasks && (a.onShellError = X, b = a.onShellReady, b());
      } else b.pendingTasks--, b.forceClientRender || (0 === b.pendingTasks ? (c.parentFlushed && 1 === c.status && Zc(b, c), b.parentFlushed && a.completedBoundaries.push(b), b.fallbackAbortableTasks.forEach(ad, a), b.fallbackAbortableTasks.clear()) : c.parentFlushed && 1 === c.status && (Zc(b, c), 1 === b.completedSegments.length && b.parentFlushed && a.partialBoundaries.push(b)));
      a.allPendingTasks--;
      0 === a.allPendingTasks && (a = a.onAllReady, a());
    }
    function Qc(a) {
      if (2 !== a.status) {
        var b = P, c = Nc.current;
        Nc.current = Mc;
        var d = Lc;
        Lc = a.responseState;
        try {
          var f = a.pingedTasks, e;
          for (e = 0; e < f.length; e++) {
            var g = f[e];
            var h = a, m = g.blockedSegment;
            if (0 === m.status) {
              nc(g.context);
              try {
                Z(h, g, g.node), m.lastPushedText && m.textEmbedded && m.chunks.push(za), g.abortSet.delete(g), m.status = 1, bd(h, g.blockedBoundary, m);
              } catch (E) {
                if (Ec(), "object" === typeof E && null !== E && "function" === typeof E.then) {
                  var n = g.ping;
                  E.then(n, n);
                } else {
                  g.abortSet.delete(g);
                  m.status = 4;
                  var p = g.blockedBoundary, v = E, C2 = Y(h, v);
                  null === p ? Tc(h, v) : (p.pendingTasks--, p.forceClientRender || (p.forceClientRender = true, p.errorDigest = C2, p.parentFlushed && h.clientRenderedBoundaries.push(p)));
                  h.allPendingTasks--;
                  if (0 === h.allPendingTasks) {
                    var D = h.onAllReady;
                    D();
                  }
                }
              } finally {
              }
            }
          }
          f.splice(0, e);
          null !== a.destination && dd(a, a.destination);
        } catch (E) {
          Y(a, E), Tc(a, E);
        } finally {
          Lc = d, Nc.current = c, c === Mc && nc(b);
        }
      }
    }
    function ed(a, b, c) {
      c.parentFlushed = true;
      switch (c.status) {
        case 0:
          var d = c.id = a.nextSegmentId++;
          c.lastPushedText = false;
          c.textEmbedded = false;
          a = a.responseState;
          r(b, Sa);
          r(b, a.placeholderPrefix);
          a = d.toString(16);
          r(b, a);
          return w(b, Ta);
        case 1:
          c.status = 2;
          var f = true;
          d = c.chunks;
          var e = 0;
          c = c.children;
          for (var g = 0; g < c.length; g++) {
            for (f = c[g]; e < f.index; e++) r(b, d[e]);
            f = fd(a, b, f);
          }
          for (; e < d.length - 1; e++) r(b, d[e]);
          e < d.length && (f = w(b, d[e]));
          return f;
        default:
          throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function fd(a, b, c) {
      var d = c.boundary;
      if (null === d) return ed(a, b, c);
      d.parentFlushed = true;
      if (d.forceClientRender) d = d.errorDigest, w(b, Xa), r(b, Za), d && (r(b, ab), r(b, F(d)), r(b, $a)), w(b, bb), ed(a, b, c);
      else if (0 < d.pendingTasks) {
        d.rootSegmentID = a.nextSegmentId++;
        0 < d.completedSegments.length && a.partialBoundaries.push(d);
        var f = a.responseState;
        var e = f.nextSuspenseID++;
        f = x(f.boundaryPrefix + e.toString(16));
        d = d.id = f;
        cb(b, a.responseState, d);
        ed(a, b, c);
      } else if (d.byteSize > a.progressiveChunkSize) d.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(d), cb(b, a.responseState, d.id), ed(a, b, c);
      else {
        w(b, Ua);
        c = d.completedSegments;
        if (1 !== c.length) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        fd(a, b, c[0]);
      }
      return w(b, Ya);
    }
    function gd(a, b, c) {
      yb(b, a.responseState, c.formatContext, c.id);
      fd(a, b, c);
      return zb(b, c.formatContext);
    }
    function hd(a, b, c) {
      for (var d = c.completedSegments, f = 0; f < d.length; f++) id(a, b, c, d[f]);
      d.length = 0;
      a = a.responseState;
      d = c.id;
      c = c.rootSegmentID;
      r(b, a.startInlineScript);
      a.sentCompleteBoundaryFunction ? r(b, Gb) : (a.sentCompleteBoundaryFunction = true, r(b, Fb));
      if (null === d) throw Error("An ID must have been assigned before we can complete the boundary.");
      c = c.toString(16);
      r(b, d);
      r(b, Hb);
      r(b, a.segmentPrefix);
      r(b, c);
      return w(b, Ib);
    }
    function id(a, b, c, d) {
      if (2 === d.status) return true;
      var f = d.id;
      if (-1 === f) {
        if (-1 === (d.id = c.rootSegmentID)) throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return gd(a, b, d);
      }
      gd(a, b, d);
      a = a.responseState;
      r(b, a.startInlineScript);
      a.sentCompleteSegmentFunction ? r(b, Bb) : (a.sentCompleteSegmentFunction = true, r(b, Ab));
      r(b, a.segmentPrefix);
      f = f.toString(16);
      r(b, f);
      r(b, Cb);
      r(b, a.placeholderPrefix);
      r(b, f);
      return w(b, Db);
    }
    function dd(a, b) {
      k = new Uint8Array(2048);
      l = 0;
      q = true;
      try {
        var c = a.completedRootSegment;
        if (null !== c && 0 === a.pendingRootTasks) {
          fd(a, b, c);
          a.completedRootSegment = null;
          var d = a.responseState.bootstrapChunks;
          for (c = 0; c < d.length - 1; c++) r(b, d[c]);
          c < d.length && w(b, d[c]);
        }
        var f = a.clientRenderedBoundaries, e;
        for (e = 0; e < f.length; e++) {
          var g = f[e];
          d = b;
          var h = a.responseState, m = g.id, n = g.errorDigest, p = g.errorMessage, v = g.errorComponentStack;
          r(d, h.startInlineScript);
          h.sentClientRenderFunction ? r(d, Kb) : (h.sentClientRenderFunction = true, r(d, Jb));
          if (null === m) throw Error("An ID must have been assigned before we can complete the boundary.");
          r(d, m);
          r(d, Lb);
          if (n || p || v) r(d, Nb), r(d, Pb(n || ""));
          if (p || v) r(d, Nb), r(d, Pb(p || ""));
          v && (r(d, Nb), r(d, Pb(v)));
          if (!w(d, Mb)) {
            a.destination = null;
            e++;
            f.splice(0, e);
            return;
          }
        }
        f.splice(0, e);
        var C2 = a.completedBoundaries;
        for (e = 0; e < C2.length; e++) if (!hd(a, b, C2[e])) {
          a.destination = null;
          e++;
          C2.splice(0, e);
          return;
        }
        C2.splice(0, e);
        ca(b);
        k = new Uint8Array(2048);
        l = 0;
        q = true;
        var D = a.partialBoundaries;
        for (e = 0; e < D.length; e++) {
          var E = D[e];
          a: {
            f = a;
            g = b;
            var na = E.completedSegments;
            for (h = 0; h < na.length; h++) if (!id(f, g, E, na[h])) {
              h++;
              na.splice(0, h);
              var Eb = false;
              break a;
            }
            na.splice(0, h);
            Eb = true;
          }
          if (!Eb) {
            a.destination = null;
            e++;
            D.splice(0, e);
            return;
          }
        }
        D.splice(0, e);
        var oa = a.completedBoundaries;
        for (e = 0; e < oa.length; e++) if (!hd(a, b, oa[e])) {
          a.destination = null;
          e++;
          oa.splice(0, e);
          return;
        }
        oa.splice(0, e);
      } finally {
        ca(b), "function" === typeof b.flush && b.flush(), 0 === a.allPendingTasks && 0 === a.pingedTasks.length && 0 === a.clientRenderedBoundaries.length && 0 === a.completedBoundaries.length && b.end();
      }
    }
    function jd(a) {
      setImmediate(function() {
        return Qc(a);
      });
    }
    function kd(a, b) {
      if (1 === a.status) a.status = 2, b.destroy(a.fatalError);
      else if (2 !== a.status && null === a.destination) {
        a.destination = b;
        try {
          dd(a, b);
        } catch (c) {
          Y(a, c), Tc(a, c);
        }
      }
    }
    function ld(a, b) {
      try {
        var c = a.abortableTasks;
        c.forEach(function(c2) {
          return cd(c2, a, b);
        });
        c.clear();
        null !== a.destination && dd(a, a.destination);
      } catch (d) {
        Y(a, d), Tc(a, d);
      }
    }
    function md(a, b) {
      return function() {
        return kd(b, a);
      };
    }
    function nd(a, b) {
      return function() {
        return ld(a, b);
      };
    }
    function od(a, b) {
      var c = b ? b.identifierPrefix : void 0, d = b ? b.nonce : void 0, f = b ? b.bootstrapScriptContent : void 0, e = b ? b.bootstrapScripts : void 0;
      var g = b ? b.bootstrapModules : void 0;
      c = void 0 === c ? "" : c;
      d = void 0 === d ? ra : x('<script nonce="' + F(d) + '">');
      var h = [];
      void 0 !== f && h.push(d, ("" + f).replace(wa, xa), sa);
      if (void 0 !== e) for (f = 0; f < e.length; f++) h.push(ta, F(e[f]), va);
      if (void 0 !== g) for (e = 0; e < g.length; e++) h.push(ua, F(g[e]), va);
      g = {
        bootstrapChunks: h,
        startInlineScript: d,
        placeholderPrefix: x(c + "P:"),
        segmentPrefix: x(c + "S:"),
        boundaryPrefix: c + "B:",
        idPrefix: c,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: false,
        sentCompleteBoundaryFunction: false,
        sentClientRenderFunction: false
      };
      e = b ? b.namespaceURI : void 0;
      e = G("http://www.w3.org/2000/svg" === e ? 2 : "http://www.w3.org/1998/Math/MathML" === e ? 3 : 0, null);
      f = b ? b.progressiveChunkSize : void 0;
      d = b ? b.onError : void 0;
      h = b ? b.onAllReady : void 0;
      var m = b ? b.onShellReady : void 0, n = b ? b.onShellError : void 0;
      b = [];
      c = /* @__PURE__ */ new Set();
      g = {
        destination: null,
        responseState: g,
        progressiveChunkSize: void 0 === f ? 12800 : f,
        status: 0,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: c,
        pingedTasks: b,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: void 0 === d ? Oc : d,
        onAllReady: void 0 === h ? X : h,
        onShellReady: void 0 === m ? X : m,
        onShellError: void 0 === n ? X : n,
        onFatalError: X
      };
      e = Sc(g, 0, null, e, false, false);
      e.parentFlushed = true;
      a = Rc(g, a, null, e, c, hc, null, qc);
      b.push(a);
      return g;
    }
    exports2.renderToPipeableStream = function(a, b) {
      var c = od(a, b), d = false;
      jd(c);
      return { pipe: function(a2) {
        if (d) throw Error("React currently only supports piping to one writable stream.");
        d = true;
        kd(c, a2);
        a2.on("drain", md(a2, c));
        a2.on("error", nd(c, Error("The destination stream errored while writing data.")));
        a2.on("close", nd(c, Error("The destination stream closed early.")));
        return a2;
      }, abort: function(a2) {
        ld(c, a2);
      } };
    };
    exports2.version = "18.3.1";
  }
});

// node_modules/react-dom/server.node.js
var require_server_node = __commonJS({
  "node_modules/react-dom/server.node.js"(exports2) {
    "use strict";
    var l;
    var s;
    if (true) {
      l = require_react_dom_server_legacy_node_production_min();
      s = require_react_dom_server_node_production_min();
    } else {
      l = null;
      s = null;
    }
    exports2.version = l.version;
    exports2.renderToString = l.renderToString;
    exports2.renderToStaticMarkup = l.renderToStaticMarkup;
    exports2.renderToNodeStream = l.renderToNodeStream;
    exports2.renderToStaticNodeStream = l.renderToStaticNodeStream;
    exports2.renderToPipeableStream = s.renderToPipeableStream;
  }
});

// node_modules/react/cjs/react-jsx-runtime.production.min.js
var require_react_jsx_runtime_production_min = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.production.min.js"(exports2) {
    "use strict";
    var f = require_react();
    var k = /* @__PURE__ */ Symbol.for("react.element");
    var l = /* @__PURE__ */ Symbol.for("react.fragment");
    var m = Object.prototype.hasOwnProperty;
    var n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
    var p = { key: true, ref: true, __self: true, __source: true };
    function q(c, a, g) {
      var b, d = {}, e = null, h = null;
      void 0 !== g && (e = "" + g);
      void 0 !== a.key && (e = "" + a.key);
      void 0 !== a.ref && (h = a.ref);
      for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
      if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
      return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
    }
    exports2.Fragment = l;
    exports2.jsx = q;
    exports2.jsxs = q;
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports2, module2) {
    "use strict";
    if (true) {
      module2.exports = require_react_jsx_runtime_production_min();
    } else {
      module2.exports = null;
    }
  }
});

// node_modules/sharp/lib/is.js
var require_is = __commonJS({
  "node_modules/sharp/lib/is.js"(exports2, module2) {
    var defined = (val) => typeof val !== "undefined" && val !== null;
    var object = (val) => typeof val === "object";
    var plainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
    var fn = (val) => typeof val === "function";
    var bool = (val) => typeof val === "boolean";
    var buffer = (val) => val instanceof Buffer;
    var typedArray = (val) => {
      if (defined(val)) {
        switch (val.constructor) {
          case Uint8Array:
          case Uint8ClampedArray:
          case Int8Array:
          case Uint16Array:
          case Int16Array:
          case Uint32Array:
          case Int32Array:
          case Float32Array:
          case Float64Array:
            return true;
        }
      }
      return false;
    };
    var arrayBuffer = (val) => val instanceof ArrayBuffer;
    var string = (val) => typeof val === "string" && val.length > 0;
    var number = (val) => typeof val === "number" && !Number.isNaN(val);
    var integer = (val) => Number.isInteger(val);
    var inRange = (val, min, max) => val >= min && val <= max;
    var inArray = (val, list) => list.includes(val);
    var invalidParameterError = (name, expected, actual) => new Error(
      `Expected ${expected} for ${name} but received ${actual} of type ${typeof actual}`
    );
    var nativeError = (native, context) => {
      context.message = native.message;
      return context;
    };
    module2.exports = {
      defined,
      object,
      plainObject,
      fn,
      bool,
      buffer,
      typedArray,
      arrayBuffer,
      string,
      number,
      integer,
      inRange,
      inArray,
      invalidParameterError,
      nativeError
    };
  }
});

// node_modules/detect-libc/lib/process.js
var require_process = __commonJS({
  "node_modules/detect-libc/lib/process.js"(exports2, module2) {
    "use strict";
    var isLinux = () => process.platform === "linux";
    var report = null;
    var getReport = () => {
      if (!report) {
        if (isLinux() && process.report) {
          const orig = process.report.excludeNetwork;
          process.report.excludeNetwork = true;
          report = process.report.getReport();
          process.report.excludeNetwork = orig;
        } else {
          report = {};
        }
      }
      return report;
    };
    module2.exports = { isLinux, getReport };
  }
});

// node_modules/detect-libc/lib/filesystem.js
var require_filesystem = __commonJS({
  "node_modules/detect-libc/lib/filesystem.js"(exports2, module2) {
    "use strict";
    var fs2 = require("fs");
    var LDD_PATH = "/usr/bin/ldd";
    var SELF_PATH = "/proc/self/exe";
    var MAX_LENGTH = 2048;
    var readFileSync = (path2) => {
      const fd = fs2.openSync(path2, "r");
      const buffer = Buffer.alloc(MAX_LENGTH);
      const bytesRead = fs2.readSync(fd, buffer, 0, MAX_LENGTH, 0);
      fs2.close(fd, () => {
      });
      return buffer.subarray(0, bytesRead);
    };
    var readFile = (path2) => new Promise((resolve, reject) => {
      fs2.open(path2, "r", (err, fd) => {
        if (err) {
          reject(err);
        } else {
          const buffer = Buffer.alloc(MAX_LENGTH);
          fs2.read(fd, buffer, 0, MAX_LENGTH, 0, (_, bytesRead) => {
            resolve(buffer.subarray(0, bytesRead));
            fs2.close(fd, () => {
            });
          });
        }
      });
    });
    module2.exports = {
      LDD_PATH,
      SELF_PATH,
      readFileSync,
      readFile
    };
  }
});

// node_modules/detect-libc/lib/elf.js
var require_elf = __commonJS({
  "node_modules/detect-libc/lib/elf.js"(exports2, module2) {
    "use strict";
    var interpreterPath = (elf) => {
      if (elf.length < 64) {
        return null;
      }
      if (elf.readUInt32BE(0) !== 2135247942) {
        return null;
      }
      if (elf.readUInt8(4) !== 2) {
        return null;
      }
      if (elf.readUInt8(5) !== 1) {
        return null;
      }
      const offset = elf.readUInt32LE(32);
      const size = elf.readUInt16LE(54);
      const count = elf.readUInt16LE(56);
      for (let i = 0; i < count; i++) {
        const headerOffset = offset + i * size;
        const type = elf.readUInt32LE(headerOffset);
        if (type === 3) {
          const fileOffset = elf.readUInt32LE(headerOffset + 8);
          const fileSize = elf.readUInt32LE(headerOffset + 32);
          return elf.subarray(fileOffset, fileOffset + fileSize).toString().replace(/\0.*$/g, "");
        }
      }
      return null;
    };
    module2.exports = {
      interpreterPath
    };
  }
});

// node_modules/detect-libc/lib/detect-libc.js
var require_detect_libc = __commonJS({
  "node_modules/detect-libc/lib/detect-libc.js"(exports2, module2) {
    "use strict";
    var childProcess = require("child_process");
    var { isLinux, getReport } = require_process();
    var { LDD_PATH, SELF_PATH, readFile, readFileSync } = require_filesystem();
    var { interpreterPath } = require_elf();
    var cachedFamilyInterpreter;
    var cachedFamilyFilesystem;
    var cachedVersionFilesystem;
    var command = "getconf GNU_LIBC_VERSION 2>&1 || true; ldd --version 2>&1 || true";
    var commandOut = "";
    var safeCommand = () => {
      if (!commandOut) {
        return new Promise((resolve) => {
          childProcess.exec(command, (err, out) => {
            commandOut = err ? " " : out;
            resolve(commandOut);
          });
        });
      }
      return commandOut;
    };
    var safeCommandSync = () => {
      if (!commandOut) {
        try {
          commandOut = childProcess.execSync(command, { encoding: "utf8" });
        } catch (_err) {
          commandOut = " ";
        }
      }
      return commandOut;
    };
    var GLIBC = "glibc";
    var RE_GLIBC_VERSION = /LIBC[a-z0-9 \-).]*?(\d+\.\d+)/i;
    var MUSL = "musl";
    var isFileMusl = (f) => f.includes("libc.musl-") || f.includes("ld-musl-");
    var familyFromReport = () => {
      const report = getReport();
      if (report.header && report.header.glibcVersionRuntime) {
        return GLIBC;
      }
      if (Array.isArray(report.sharedObjects)) {
        if (report.sharedObjects.some(isFileMusl)) {
          return MUSL;
        }
      }
      return null;
    };
    var familyFromCommand = (out) => {
      const [getconf, ldd1] = out.split(/[\r\n]+/);
      if (getconf && getconf.includes(GLIBC)) {
        return GLIBC;
      }
      if (ldd1 && ldd1.includes(MUSL)) {
        return MUSL;
      }
      return null;
    };
    var familyFromInterpreterPath = (path2) => {
      if (path2) {
        if (path2.includes("/ld-musl-")) {
          return MUSL;
        } else if (path2.includes("/ld-linux-")) {
          return GLIBC;
        }
      }
      return null;
    };
    var getFamilyFromLddContent = (content) => {
      content = content.toString();
      if (content.includes("musl")) {
        return MUSL;
      }
      if (content.includes("GNU C Library")) {
        return GLIBC;
      }
      return null;
    };
    var familyFromFilesystem = async () => {
      if (cachedFamilyFilesystem !== void 0) {
        return cachedFamilyFilesystem;
      }
      cachedFamilyFilesystem = null;
      try {
        const lddContent = await readFile(LDD_PATH);
        cachedFamilyFilesystem = getFamilyFromLddContent(lddContent);
      } catch (e) {
      }
      return cachedFamilyFilesystem;
    };
    var familyFromFilesystemSync = () => {
      if (cachedFamilyFilesystem !== void 0) {
        return cachedFamilyFilesystem;
      }
      cachedFamilyFilesystem = null;
      try {
        const lddContent = readFileSync(LDD_PATH);
        cachedFamilyFilesystem = getFamilyFromLddContent(lddContent);
      } catch (e) {
      }
      return cachedFamilyFilesystem;
    };
    var familyFromInterpreter = async () => {
      if (cachedFamilyInterpreter !== void 0) {
        return cachedFamilyInterpreter;
      }
      cachedFamilyInterpreter = null;
      try {
        const selfContent = await readFile(SELF_PATH);
        const path2 = interpreterPath(selfContent);
        cachedFamilyInterpreter = familyFromInterpreterPath(path2);
      } catch (e) {
      }
      return cachedFamilyInterpreter;
    };
    var familyFromInterpreterSync = () => {
      if (cachedFamilyInterpreter !== void 0) {
        return cachedFamilyInterpreter;
      }
      cachedFamilyInterpreter = null;
      try {
        const selfContent = readFileSync(SELF_PATH);
        const path2 = interpreterPath(selfContent);
        cachedFamilyInterpreter = familyFromInterpreterPath(path2);
      } catch (e) {
      }
      return cachedFamilyInterpreter;
    };
    var family = async () => {
      let family2 = null;
      if (isLinux()) {
        family2 = await familyFromInterpreter();
        if (!family2) {
          family2 = await familyFromFilesystem();
          if (!family2) {
            family2 = familyFromReport();
          }
          if (!family2) {
            const out = await safeCommand();
            family2 = familyFromCommand(out);
          }
        }
      }
      return family2;
    };
    var familySync = () => {
      let family2 = null;
      if (isLinux()) {
        family2 = familyFromInterpreterSync();
        if (!family2) {
          family2 = familyFromFilesystemSync();
          if (!family2) {
            family2 = familyFromReport();
          }
          if (!family2) {
            const out = safeCommandSync();
            family2 = familyFromCommand(out);
          }
        }
      }
      return family2;
    };
    var isNonGlibcLinux = async () => isLinux() && await family() !== GLIBC;
    var isNonGlibcLinuxSync = () => isLinux() && familySync() !== GLIBC;
    var versionFromFilesystem = async () => {
      if (cachedVersionFilesystem !== void 0) {
        return cachedVersionFilesystem;
      }
      cachedVersionFilesystem = null;
      try {
        const lddContent = await readFile(LDD_PATH);
        const versionMatch = lddContent.match(RE_GLIBC_VERSION);
        if (versionMatch) {
          cachedVersionFilesystem = versionMatch[1];
        }
      } catch (e) {
      }
      return cachedVersionFilesystem;
    };
    var versionFromFilesystemSync = () => {
      if (cachedVersionFilesystem !== void 0) {
        return cachedVersionFilesystem;
      }
      cachedVersionFilesystem = null;
      try {
        const lddContent = readFileSync(LDD_PATH);
        const versionMatch = lddContent.match(RE_GLIBC_VERSION);
        if (versionMatch) {
          cachedVersionFilesystem = versionMatch[1];
        }
      } catch (e) {
      }
      return cachedVersionFilesystem;
    };
    var versionFromReport = () => {
      const report = getReport();
      if (report.header && report.header.glibcVersionRuntime) {
        return report.header.glibcVersionRuntime;
      }
      return null;
    };
    var versionSuffix = (s) => s.trim().split(/\s+/)[1];
    var versionFromCommand = (out) => {
      const [getconf, ldd1, ldd2] = out.split(/[\r\n]+/);
      if (getconf && getconf.includes(GLIBC)) {
        return versionSuffix(getconf);
      }
      if (ldd1 && ldd2 && ldd1.includes(MUSL)) {
        return versionSuffix(ldd2);
      }
      return null;
    };
    var version = async () => {
      let version2 = null;
      if (isLinux()) {
        version2 = await versionFromFilesystem();
        if (!version2) {
          version2 = versionFromReport();
        }
        if (!version2) {
          const out = await safeCommand();
          version2 = versionFromCommand(out);
        }
      }
      return version2;
    };
    var versionSync = () => {
      let version2 = null;
      if (isLinux()) {
        version2 = versionFromFilesystemSync();
        if (!version2) {
          version2 = versionFromReport();
        }
        if (!version2) {
          const out = safeCommandSync();
          version2 = versionFromCommand(out);
        }
      }
      return version2;
    };
    module2.exports = {
      GLIBC,
      MUSL,
      family,
      familySync,
      isNonGlibcLinux,
      isNonGlibcLinuxSync,
      version,
      versionSync
    };
  }
});

// node_modules/sharp/node_modules/semver/internal/debug.js
var require_debug = __commonJS({
  "node_modules/sharp/node_modules/semver/internal/debug.js"(exports2, module2) {
    "use strict";
    var debug = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
    };
    module2.exports = debug;
  }
});

// node_modules/sharp/node_modules/semver/internal/constants.js
var require_constants = __commonJS({
  "node_modules/sharp/node_modules/semver/internal/constants.js"(exports2, module2) {
    "use strict";
    var SEMVER_SPEC_VERSION = "2.0.0";
    var MAX_LENGTH = 256;
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
    9007199254740991;
    var MAX_SAFE_COMPONENT_LENGTH = 16;
    var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
    var RELEASE_TYPES = [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ];
    module2.exports = {
      MAX_LENGTH,
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_SAFE_INTEGER,
      RELEASE_TYPES,
      SEMVER_SPEC_VERSION,
      FLAG_INCLUDE_PRERELEASE: 1,
      FLAG_LOOSE: 2
    };
  }
});

// node_modules/sharp/node_modules/semver/internal/re.js
var require_re = __commonJS({
  "node_modules/sharp/node_modules/semver/internal/re.js"(exports2, module2) {
    "use strict";
    var {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = require_constants();
    var debug = require_debug();
    exports2 = module2.exports = {};
    var re = exports2.re = [];
    var safeRe = exports2.safeRe = [];
    var src = exports2.src = [];
    var safeSrc = exports2.safeSrc = [];
    var t = exports2.t = {};
    var R = 0;
    var LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    var safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    var makeSafeRegex = (value) => {
      for (const [token, max] of safeRegexReplacements) {
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
      }
      return value;
    };
    var createToken = (name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index = R++;
      debug(name, index, value);
      t[name] = index;
      src[index] = value;
      safeSrc[index] = safe;
      re[index] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
    };
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
    createToken("FULL", `^${src[t.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
    createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
    createToken("COERCE", `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
    createToken("COERCEFULL", src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?(?:${src[t.BUILD]})?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t.COERCE], true);
    createToken("COERCERTLFULL", src[t.COERCEFULL], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
    exports2.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
    exports2.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
    exports2.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }
});

// node_modules/sharp/node_modules/semver/internal/parse-options.js
var require_parse_options = __commonJS({
  "node_modules/sharp/node_modules/semver/internal/parse-options.js"(exports2, module2) {
    "use strict";
    var looseOption = Object.freeze({ loose: true });
    var emptyOpts = Object.freeze({});
    var parseOptions = (options) => {
      if (!options) {
        return emptyOpts;
      }
      if (typeof options !== "object") {
        return looseOption;
      }
      return options;
    };
    module2.exports = parseOptions;
  }
});

// node_modules/sharp/node_modules/semver/internal/identifiers.js
var require_identifiers = __commonJS({
  "node_modules/sharp/node_modules/semver/internal/identifiers.js"(exports2, module2) {
    "use strict";
    var numeric = /^[0-9]+$/;
    var compareIdentifiers = (a, b) => {
      if (typeof a === "number" && typeof b === "number") {
        return a === b ? 0 : a < b ? -1 : 1;
      }
      const anum = numeric.test(a);
      const bnum = numeric.test(b);
      if (anum && bnum) {
        a = +a;
        b = +b;
      }
      return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
    };
    var rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
    module2.exports = {
      compareIdentifiers,
      rcompareIdentifiers
    };
  }
});

// node_modules/sharp/node_modules/semver/classes/semver.js
var require_semver = __commonJS({
  "node_modules/sharp/node_modules/semver/classes/semver.js"(exports2, module2) {
    "use strict";
    var debug = require_debug();
    var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants();
    var { safeRe: re, t } = require_re();
    var parseOptions = require_parse_options();
    var { compareIdentifiers } = require_identifiers();
    var isPrereleaseIdentifier = (prerelease, identifier) => {
      const identifiers = identifier.split(".");
      if (identifiers.length > prerelease.length) {
        return false;
      }
      for (let i = 0; i < identifiers.length; i++) {
        if (compareIdentifiers(prerelease[i], identifiers[i]) !== 0) {
          return false;
        }
      }
      return true;
    };
    var SemVer = class _SemVer {
      constructor(version, options) {
        options = parseOptions(options);
        if (version instanceof _SemVer) {
          if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
            return version;
          } else {
            version = version.version;
          }
        } else if (typeof version !== "string") {
          throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
        }
        if (version.length > MAX_LENGTH) {
          throw new TypeError(
            `version is longer than ${MAX_LENGTH} characters`
          );
        }
        debug("SemVer", version, options);
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m) {
          throw new TypeError(`Invalid Version: ${version}`);
        }
        this.raw = version;
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError("Invalid major version");
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError("Invalid minor version");
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError("Invalid patch version");
        }
        if (!m[4]) {
          this.prerelease = [];
        } else {
          this.prerelease = m[4].split(".").map((id) => {
            if (/^[0-9]+$/.test(id)) {
              const num = +id;
              if (num >= 0 && num < MAX_SAFE_INTEGER) {
                return num;
              }
            }
            return id;
          });
        }
        this.build = m[5] ? m[5].split(".") : [];
        this.format();
      }
      format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
          this.version += `-${this.prerelease.join(".")}`;
        }
        return this.version;
      }
      toString() {
        return this.version;
      }
      compare(other) {
        debug("SemVer.compare", this.version, this.options, other);
        if (!(other instanceof _SemVer)) {
          if (typeof other === "string" && other === this.version) {
            return 0;
          }
          other = new _SemVer(other, this.options);
        }
        if (other.version === this.version) {
          return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
      }
      compareMain(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        if (this.major < other.major) {
          return -1;
        }
        if (this.major > other.major) {
          return 1;
        }
        if (this.minor < other.minor) {
          return -1;
        }
        if (this.minor > other.minor) {
          return 1;
        }
        if (this.patch < other.patch) {
          return -1;
        }
        if (this.patch > other.patch) {
          return 1;
        }
        return 0;
      }
      comparePre(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        if (this.prerelease.length && !other.prerelease.length) {
          return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
          return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
          return 0;
        }
        let i = 0;
        do {
          const a = this.prerelease[i];
          const b = other.prerelease[i];
          debug("prerelease compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      compareBuild(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        let i = 0;
        do {
          const a = this.build[i];
          const b = other.build[i];
          debug("build compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      // preminor will bump the version up to the next minor release, and immediately
      // down to pre-release. premajor and prepatch work the same way.
      inc(release, identifier, identifierBase) {
        if (release.startsWith("pre")) {
          if (!identifier && identifierBase === false) {
            throw new Error("invalid increment argument: identifier is empty");
          }
          if (identifier) {
            const match = `-${identifier}`.match(this.options.loose ? re[t.PRERELEASELOOSE] : re[t.PRERELEASE]);
            if (!match || match[1] !== identifier) {
              throw new Error(`invalid identifier: ${identifier}`);
            }
          }
        }
        switch (release) {
          case "premajor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "preminor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "prepatch":
            this.prerelease.length = 0;
            this.inc("patch", identifier, identifierBase);
            this.inc("pre", identifier, identifierBase);
            break;
          // If the input is a non-prerelease version, this acts the same as
          // prepatch.
          case "prerelease":
            if (this.prerelease.length === 0) {
              this.inc("patch", identifier, identifierBase);
            }
            this.inc("pre", identifier, identifierBase);
            break;
          case "release":
            if (this.prerelease.length === 0) {
              throw new Error(`version ${this.raw} is not a prerelease`);
            }
            this.prerelease.length = 0;
            break;
          case "major":
            if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
              this.major++;
            }
            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break;
          case "minor":
            if (this.patch !== 0 || this.prerelease.length === 0) {
              this.minor++;
            }
            this.patch = 0;
            this.prerelease = [];
            break;
          case "patch":
            if (this.prerelease.length === 0) {
              this.patch++;
            }
            this.prerelease = [];
            break;
          // This probably shouldn't be used publicly.
          // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
          case "pre": {
            const base = Number(identifierBase) ? 1 : 0;
            if (this.prerelease.length === 0) {
              this.prerelease = [base];
            } else {
              let i = this.prerelease.length;
              while (--i >= 0) {
                if (typeof this.prerelease[i] === "number") {
                  this.prerelease[i]++;
                  i = -2;
                }
              }
              if (i === -1) {
                if (identifier === this.prerelease.join(".") && identifierBase === false) {
                  throw new Error("invalid increment argument: identifier already exists");
                }
                this.prerelease.push(base);
              }
            }
            if (identifier) {
              let prerelease = [identifier, base];
              if (identifierBase === false) {
                prerelease = [identifier];
              }
              if (isPrereleaseIdentifier(this.prerelease, identifier)) {
                const prereleaseBase = this.prerelease[identifier.split(".").length];
                if (isNaN(prereleaseBase)) {
                  this.prerelease = prerelease;
                }
              } else {
                this.prerelease = prerelease;
              }
            }
            break;
          }
          default:
            throw new Error(`invalid increment argument: ${release}`);
        }
        this.raw = this.format();
        if (this.build.length) {
          this.raw += `+${this.build.join(".")}`;
        }
        return this;
      }
    };
    module2.exports = SemVer;
  }
});

// node_modules/sharp/node_modules/semver/functions/parse.js
var require_parse = __commonJS({
  "node_modules/sharp/node_modules/semver/functions/parse.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var parse = (version, options, throwErrors = false) => {
      if (version instanceof SemVer) {
        return version;
      }
      try {
        return new SemVer(version, options);
      } catch (er) {
        if (!throwErrors) {
          return null;
        }
        throw er;
      }
    };
    module2.exports = parse;
  }
});

// node_modules/sharp/node_modules/semver/functions/coerce.js
var require_coerce = __commonJS({
  "node_modules/sharp/node_modules/semver/functions/coerce.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var parse = require_parse();
    var { safeRe: re, t } = require_re();
    var coerce = (version, options) => {
      if (version instanceof SemVer) {
        return version;
      }
      if (typeof version === "number") {
        version = String(version);
      }
      if (typeof version !== "string") {
        return null;
      }
      options = options || {};
      let match = null;
      if (!options.rtl) {
        match = version.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE]);
      } else {
        const coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL];
        let next;
        while ((next = coerceRtlRegex.exec(version)) && (!match || match.index + match[0].length !== version.length)) {
          if (!match || next.index + next[0].length !== match.index + match[0].length) {
            match = next;
          }
          coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
        }
        coerceRtlRegex.lastIndex = -1;
      }
      if (match === null) {
        return null;
      }
      const major = match[2];
      const minor = match[3] || "0";
      const patch = match[4] || "0";
      const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : "";
      const build = options.includePrerelease && match[6] ? `+${match[6]}` : "";
      return parse(`${major}.${minor}.${patch}${prerelease}${build}`, options);
    };
    module2.exports = coerce;
  }
});

// node_modules/sharp/node_modules/semver/functions/compare.js
var require_compare = __commonJS({
  "node_modules/sharp/node_modules/semver/functions/compare.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var compare = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
    module2.exports = compare;
  }
});

// node_modules/sharp/node_modules/semver/functions/gte.js
var require_gte = __commonJS({
  "node_modules/sharp/node_modules/semver/functions/gte.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var gte = (a, b, loose) => compare(a, b, loose) >= 0;
    module2.exports = gte;
  }
});

// node_modules/sharp/node_modules/semver/internal/lrucache.js
var require_lrucache = __commonJS({
  "node_modules/sharp/node_modules/semver/internal/lrucache.js"(exports2, module2) {
    "use strict";
    var LRUCache = class {
      constructor() {
        this.max = 1e3;
        this.map = /* @__PURE__ */ new Map();
      }
      get(key) {
        const value = this.map.get(key);
        if (value === void 0) {
          return void 0;
        } else {
          this.map.delete(key);
          this.map.set(key, value);
          return value;
        }
      }
      delete(key) {
        return this.map.delete(key);
      }
      set(key, value) {
        const deleted = this.delete(key);
        if (!deleted && value !== void 0) {
          if (this.map.size >= this.max) {
            const firstKey = this.map.keys().next().value;
            this.delete(firstKey);
          }
          this.map.set(key, value);
        }
        return this;
      }
    };
    module2.exports = LRUCache;
  }
});

// node_modules/sharp/node_modules/semver/functions/eq.js
var require_eq = __commonJS({
  "node_modules/sharp/node_modules/semver/functions/eq.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var eq = (a, b, loose) => compare(a, b, loose) === 0;
    module2.exports = eq;
  }
});

// node_modules/sharp/node_modules/semver/functions/neq.js
var require_neq = __commonJS({
  "node_modules/sharp/node_modules/semver/functions/neq.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var neq = (a, b, loose) => compare(a, b, loose) !== 0;
    module2.exports = neq;
  }
});

// node_modules/sharp/node_modules/semver/functions/gt.js
var require_gt = __commonJS({
  "node_modules/sharp/node_modules/semver/functions/gt.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var gt = (a, b, loose) => compare(a, b, loose) > 0;
    module2.exports = gt;
  }
});

// node_modules/sharp/node_modules/semver/functions/lt.js
var require_lt = __commonJS({
  "node_modules/sharp/node_modules/semver/functions/lt.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var lt = (a, b, loose) => compare(a, b, loose) < 0;
    module2.exports = lt;
  }
});

// node_modules/sharp/node_modules/semver/functions/lte.js
var require_lte = __commonJS({
  "node_modules/sharp/node_modules/semver/functions/lte.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var lte = (a, b, loose) => compare(a, b, loose) <= 0;
    module2.exports = lte;
  }
});

// node_modules/sharp/node_modules/semver/functions/cmp.js
var require_cmp = __commonJS({
  "node_modules/sharp/node_modules/semver/functions/cmp.js"(exports2, module2) {
    "use strict";
    var eq = require_eq();
    var neq = require_neq();
    var gt = require_gt();
    var gte = require_gte();
    var lt = require_lt();
    var lte = require_lte();
    var cmp = (a, op, b, loose) => {
      switch (op) {
        case "===":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a === b;
        case "!==":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a !== b;
        case "":
        case "=":
        case "==":
          return eq(a, b, loose);
        case "!=":
          return neq(a, b, loose);
        case ">":
          return gt(a, b, loose);
        case ">=":
          return gte(a, b, loose);
        case "<":
          return lt(a, b, loose);
        case "<=":
          return lte(a, b, loose);
        default:
          throw new TypeError(`Invalid operator: ${op}`);
      }
    };
    module2.exports = cmp;
  }
});

// node_modules/sharp/node_modules/semver/classes/comparator.js
var require_comparator = __commonJS({
  "node_modules/sharp/node_modules/semver/classes/comparator.js"(exports2, module2) {
    "use strict";
    var ANY = /* @__PURE__ */ Symbol("SemVer ANY");
    var Comparator = class _Comparator {
      static get ANY() {
        return ANY;
      }
      constructor(comp, options) {
        options = parseOptions(options);
        if (comp instanceof _Comparator) {
          if (comp.loose === !!options.loose) {
            return comp;
          } else {
            comp = comp.value;
          }
        }
        comp = comp.trim().split(/\s+/).join(" ");
        debug("comparator", comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) {
          this.value = "";
        } else {
          this.value = this.operator + this.semver.version;
        }
        debug("comp", this);
      }
      parse(comp) {
        const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
        const m = comp.match(r);
        if (!m) {
          throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m[1] !== void 0 ? m[1] : "";
        if (this.operator === "=") {
          this.operator = "";
        }
        if (!m[2]) {
          this.semver = ANY;
        } else {
          this.semver = new SemVer(m[2], this.options.loose);
        }
      }
      toString() {
        return this.value;
      }
      test(version) {
        debug("Comparator.test", version, this.options.loose);
        if (this.semver === ANY || version === ANY) {
          return true;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        return cmp(version, this.operator, this.semver, this.options);
      }
      intersects(comp, options) {
        if (!(comp instanceof _Comparator)) {
          throw new TypeError("a Comparator is required");
        }
        if (this.operator === "") {
          if (this.value === "") {
            return true;
          }
          return new Range(comp.value, options).test(this.value);
        } else if (comp.operator === "") {
          if (comp.value === "") {
            return true;
          }
          return new Range(this.value, options).test(comp.semver);
        }
        options = parseOptions(options);
        if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
          return false;
        }
        if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
          return false;
        }
        if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
          return true;
        }
        if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
          return true;
        }
        if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
          return true;
        }
        if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
          return true;
        }
        if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
          return true;
        }
        return false;
      }
    };
    module2.exports = Comparator;
    var parseOptions = require_parse_options();
    var { safeRe: re, t } = require_re();
    var cmp = require_cmp();
    var debug = require_debug();
    var SemVer = require_semver();
    var Range = require_range();
  }
});

// node_modules/sharp/node_modules/semver/classes/range.js
var require_range = __commonJS({
  "node_modules/sharp/node_modules/semver/classes/range.js"(exports2, module2) {
    "use strict";
    var SPACE_CHARACTERS = /\s+/g;
    var Range = class _Range {
      constructor(range, options) {
        options = parseOptions(options);
        if (range instanceof _Range) {
          if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
            return range;
          } else {
            return new _Range(range.raw, options);
          }
        }
        if (range instanceof Comparator) {
          this.raw = range.value;
          this.set = [[range]];
          this.formatted = void 0;
          return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        this.raw = range.trim().replace(SPACE_CHARACTERS, " ");
        this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((c) => c.length);
        if (!this.set.length) {
          throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
        }
        if (this.set.length > 1) {
          const first = this.set[0];
          this.set = this.set.filter((c) => !isNullSet(c[0]));
          if (this.set.length === 0) {
            this.set = [first];
          } else if (this.set.length > 1) {
            for (const c of this.set) {
              if (c.length === 1 && isAny(c[0])) {
                this.set = [c];
                break;
              }
            }
          }
        }
        this.formatted = void 0;
      }
      get range() {
        if (this.formatted === void 0) {
          this.formatted = "";
          for (let i = 0; i < this.set.length; i++) {
            if (i > 0) {
              this.formatted += "||";
            }
            const comps = this.set[i];
            for (let k = 0; k < comps.length; k++) {
              if (k > 0) {
                this.formatted += " ";
              }
              this.formatted += comps[k].toString().trim();
            }
          }
        }
        return this.formatted;
      }
      format() {
        return this.range;
      }
      toString() {
        return this.range;
      }
      parseRange(range) {
        range = range.replace(BUILDSTRIPRE, "");
        const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
        const memoKey = memoOpts + ":" + range;
        const cached = cache.get(memoKey);
        if (cached) {
          return cached;
        }
        const loose = this.options.loose;
        const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug("hyphen replace", range);
        range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
        debug("comparator trim", range);
        range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
        debug("tilde trim", range);
        range = range.replace(re[t.CARETTRIM], caretTrimReplace);
        debug("caret trim", range);
        let rangeList = range.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
        if (loose) {
          rangeList = rangeList.filter((comp) => {
            debug("loose invalid filter", comp, this.options);
            return !!comp.match(re[t.COMPARATORLOOSE]);
          });
        }
        debug("range list", rangeList);
        const rangeMap = /* @__PURE__ */ new Map();
        const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
        for (const comp of comparators) {
          if (isNullSet(comp)) {
            return [comp];
          }
          rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has("")) {
          rangeMap.delete("");
        }
        const result = [...rangeMap.values()];
        cache.set(memoKey, result);
        return result;
      }
      intersects(range, options) {
        if (!(range instanceof _Range)) {
          throw new TypeError("a Range is required");
        }
        return this.set.some((thisComparators) => {
          return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators) => {
            return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options);
              });
            });
          });
        });
      }
      // if ANY of the sets match ALL of its comparators, then pass
      test(version) {
        if (!version) {
          return false;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        for (let i = 0; i < this.set.length; i++) {
          if (testSet(this.set[i], version, this.options)) {
            return true;
          }
        }
        return false;
      }
    };
    module2.exports = Range;
    var LRU = require_lrucache();
    var cache = new LRU();
    var parseOptions = require_parse_options();
    var Comparator = require_comparator();
    var debug = require_debug();
    var SemVer = require_semver();
    var {
      safeRe: re,
      src,
      t,
      comparatorTrimReplace,
      tildeTrimReplace,
      caretTrimReplace
    } = require_re();
    var { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = require_constants();
    var BUILDSTRIPRE = new RegExp(src[t.BUILD], "g");
    var isNullSet = (c) => c.value === "<0.0.0-0";
    var isAny = (c) => c.value === "";
    var isSatisfiable = (comparators, options) => {
      let result = true;
      const remainingComparators = comparators.slice();
      let testComparator = remainingComparators.pop();
      while (result && remainingComparators.length) {
        result = remainingComparators.every((otherComparator) => {
          return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
      }
      return result;
    };
    var parseComparator = (comp, options) => {
      comp = comp.replace(re[t.BUILD], "");
      debug("comp", comp, options);
      comp = replaceCarets(comp, options);
      debug("caret", comp);
      comp = replaceTildes(comp, options);
      debug("tildes", comp);
      comp = replaceXRanges(comp, options);
      debug("xrange", comp);
      comp = replaceStars(comp, options);
      debug("stars", comp);
      return comp;
    };
    var isX = (id) => !id || id.toLowerCase() === "x" || id === "*";
    var invalidXRangeOrder = (M, m, p) => isX(M) && !isX(m) || isX(m) && p && !isX(p);
    var replaceTildes = (comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" ");
    };
    var replaceTilde = (comp, options) => {
      const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
      const z = options.includePrerelease ? "-0" : "";
      return comp.replace(r, (_, M, m, p, pr) => {
        debug("tilde", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
        } else if (pr) {
          debug("replaceTilde pr", pr);
          ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        } else {
          ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
        }
        debug("tilde return", ret);
        return ret;
      });
    };
    var replaceCarets = (comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" ");
    };
    var replaceCaret = (comp, options) => {
      debug("caret", comp, options);
      const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
      const z = options.includePrerelease ? "-0" : "";
      return comp.replace(r, (_, M, m, p, pr) => {
        debug("caret", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          if (M === "0") {
            ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
          } else {
            ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
          }
        } else if (pr) {
          debug("replaceCaret pr", pr);
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
          }
        } else {
          debug("no pr");
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
          }
        }
        debug("caret return", ret);
        return ret;
      });
    };
    var replaceXRanges = (comp, options) => {
      debug("replaceXRanges", comp, options);
      return comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ");
    };
    var replaceXRange = (comp, options) => {
      comp = comp.trim();
      const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
      return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
        debug("xRange", comp, ret, gtlt, M, m, p, pr);
        if (invalidXRangeOrder(M, m, p)) {
          return comp;
        }
        const xM = isX(M);
        const xm = xM || isX(m);
        const xp = xm || isX(p);
        const anyX = xp;
        if (gtlt === "=" && anyX) {
          gtlt = "";
        }
        pr = options.includePrerelease ? "-0" : "";
        if (xM) {
          if (gtlt === ">" || gtlt === "<") {
            ret = "<0.0.0-0";
          } else {
            ret = "*";
          }
        } else if (gtlt && anyX) {
          if (xm) {
            m = 0;
          }
          p = 0;
          if (gtlt === ">") {
            gtlt = ">=";
            if (xm) {
              M = +M + 1;
              m = 0;
              p = 0;
            } else {
              m = +m + 1;
              p = 0;
            }
          } else if (gtlt === "<=") {
            gtlt = "<";
            if (xm) {
              M = +M + 1;
            } else {
              m = +m + 1;
            }
          }
          if (gtlt === "<") {
            pr = "-0";
          }
          ret = `${gtlt + M}.${m}.${p}${pr}`;
        } else if (xm) {
          ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        } else if (xp) {
          ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
        }
        debug("xRange return", ret);
        return ret;
      });
    };
    var replaceStars = (comp, options) => {
      debug("replaceStars", comp, options);
      return comp.trim().replace(re[t.STAR], "");
    };
    var replaceGTE0 = (comp, options) => {
      debug("replaceGTE0", comp, options);
      return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], "");
    };
    var hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr) => {
      if (isX(fM)) {
        from = "";
      } else if (isX(fm)) {
        from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
      } else if (isX(fp)) {
        from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
      } else if (fpr) {
        from = `>=${from}`;
      } else {
        from = `>=${from}${incPr ? "-0" : ""}`;
      }
      if (isX(tM)) {
        to = "";
      } else if (isX(tm)) {
        to = `<${+tM + 1}.0.0-0`;
      } else if (isX(tp)) {
        to = `<${tM}.${+tm + 1}.0-0`;
      } else if (tpr) {
        to = `<=${tM}.${tm}.${tp}-${tpr}`;
      } else if (incPr) {
        to = `<${tM}.${tm}.${+tp + 1}-0`;
      } else {
        to = `<=${to}`;
      }
      return `${from} ${to}`.trim();
    };
    var testSet = (set, version, options) => {
      for (let i = 0; i < set.length; i++) {
        if (!set[i].test(version)) {
          return false;
        }
      }
      if (version.prerelease.length && !options.includePrerelease) {
        for (let i = 0; i < set.length; i++) {
          debug(set[i].semver);
          if (set[i].semver === Comparator.ANY) {
            continue;
          }
          if (set[i].semver.prerelease.length > 0) {
            const allowed = set[i].semver;
            if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
              return true;
            }
          }
        }
        return false;
      }
      return true;
    };
  }
});

// node_modules/sharp/node_modules/semver/functions/satisfies.js
var require_satisfies = __commonJS({
  "node_modules/sharp/node_modules/semver/functions/satisfies.js"(exports2, module2) {
    "use strict";
    var Range = require_range();
    var satisfies = (version, range, options) => {
      try {
        range = new Range(range, options);
      } catch (er) {
        return false;
      }
      return range.test(version);
    };
    module2.exports = satisfies;
  }
});

// node_modules/sharp/package.json
var require_package = __commonJS({
  "node_modules/sharp/package.json"(exports2, module2) {
    module2.exports = {
      name: "sharp",
      description: "High performance Node.js image processing, the fastest module to resize JPEG, PNG, WebP, GIF, AVIF and TIFF images",
      version: "0.34.5",
      author: "Lovell Fuller <npm@lovell.info>",
      homepage: "https://sharp.pixelplumbing.com",
      contributors: [
        "Pierre Inglebert <pierre.inglebert@gmail.com>",
        "Jonathan Ong <jonathanrichardong@gmail.com>",
        "Chanon Sajjamanochai <chanon.s@gmail.com>",
        "Juliano Julio <julianojulio@gmail.com>",
        "Daniel Gasienica <daniel@gasienica.ch>",
        "Julian Walker <julian@fiftythree.com>",
        "Amit Pitaru <pitaru.amit@gmail.com>",
        "Brandon Aaron <hello.brandon@aaron.sh>",
        "Andreas Lind <andreas@one.com>",
        "Maurus Cuelenaere <mcuelenaere@gmail.com>",
        "Linus Unneb\xE4ck <linus@folkdatorn.se>",
        "Victor Mateevitsi <mvictoras@gmail.com>",
        "Alaric Holloway <alaric.holloway@gmail.com>",
        "Bernhard K. Weisshuhn <bkw@codingforce.com>",
        "Chris Riley <criley@primedia.com>",
        "David Carley <dacarley@gmail.com>",
        "John Tobin <john@limelightmobileinc.com>",
        "Kenton Gray <kentongray@gmail.com>",
        "Felix B\xFCnemann <Felix.Buenemann@gmail.com>",
        "Samy Al Zahrani <samyalzahrany@gmail.com>",
        "Chintan Thakkar <lemnisk8@gmail.com>",
        "F. Orlando Galashan <frulo@gmx.de>",
        "Kleis Auke Wolthuizen <info@kleisauke.nl>",
        "Matt Hirsch <mhirsch@media.mit.edu>",
        "Matthias Thoemmes <thoemmes@gmail.com>",
        "Patrick Paskaris <patrick@paskaris.gr>",
        "J\xE9r\xE9my Lal <kapouer@melix.org>",
        "Rahul Nanwani <r.nanwani@gmail.com>",
        "Alice Monday <alice0meta@gmail.com>",
        "Kristo Jorgenson <kristo.jorgenson@gmail.com>",
        "YvesBos <yves_bos@outlook.com>",
        "Guy Maliar <guy@tailorbrands.com>",
        "Nicolas Coden <nicolas@ncoden.fr>",
        "Matt Parrish <matt.r.parrish@gmail.com>",
        "Marcel Bretschneider <marcel.bretschneider@gmail.com>",
        "Matthew McEachen <matthew+github@mceachen.org>",
        "Jarda Kot\u011B\u0161ovec <jarda.kotesovec@gmail.com>",
        "Kenric D'Souza <kenric.dsouza@gmail.com>",
        "Oleh Aleinyk <oleg.aleynik@gmail.com>",
        "Marcel Bretschneider <marcel.bretschneider@gmail.com>",
        "Andrea Bianco <andrea.bianco@unibas.ch>",
        "Rik Heywood <rik@rik.org>",
        "Thomas Parisot <hi@oncletom.io>",
        "Nathan Graves <nathanrgraves+github@gmail.com>",
        "Tom Lokhorst <tom@lokhorst.eu>",
        "Espen Hovlandsdal <espen@hovlandsdal.com>",
        "Sylvain Dumont <sylvain.dumont35@gmail.com>",
        "Alun Davies <alun.owain.davies@googlemail.com>",
        "Aidan Hoolachan <ajhoolachan21@gmail.com>",
        "Axel Eirola <axel.eirola@iki.fi>",
        "Freezy <freezy@xbmc.org>",
        "Daiz <taneli.vatanen@gmail.com>",
        "Julian Aubourg <j@ubourg.net>",
        "Keith Belovay <keith@picthrive.com>",
        "Michael B. Klein <mbklein@gmail.com>",
        "Jordan Prudhomme <jordan@raboland.fr>",
        "Ilya Ovdin <iovdin@gmail.com>",
        "Andargor <andargor@yahoo.com>",
        "Paul Neave <paul.neave@gmail.com>",
        "Brendan Kennedy <brenwken@gmail.com>",
        "Brychan Bennett-Odlum <git@brychan.io>",
        "Edward Silverton <e.silverton@gmail.com>",
        "Roman Malieiev <aromaleev@gmail.com>",
        "Tomas Szabo <tomas.szabo@deftomat.com>",
        "Robert O'Rourke <robert@o-rourke.org>",
        "Guillermo Alfonso Varela Chouci\xF1o <guillevch@gmail.com>",
        "Christian Flintrup <chr@gigahost.dk>",
        "Manan Jadhav <manan@motionden.com>",
        "Leon Radley <leon@radley.se>",
        "alza54 <alza54@thiocod.in>",
        "Jacob Smith <jacob@frende.me>",
        "Michael Nutt <michael@nutt.im>",
        "Brad Parham <baparham@gmail.com>",
        "Taneli Vatanen <taneli.vatanen@gmail.com>",
        "Joris Dugu\xE9 <zaruike10@gmail.com>",
        "Chris Banks <christopher.bradley.banks@gmail.com>",
        "Ompal Singh <ompal.hitm09@gmail.com>",
        "Brodan <christopher.hranj@gmail.com>",
        "Ankur Parihar <ankur.github@gmail.com>",
        "Brahim Ait elhaj <brahima@gmail.com>",
        "Mart Jansink <m.jansink@gmail.com>",
        "Lachlan Newman <lachnewman007@gmail.com>",
        "Dennis Beatty <dennis@dcbeatty.com>",
        "Ingvar Stepanyan <me@rreverser.com>",
        "Don Denton <don@happycollision.com>"
      ],
      scripts: {
        build: "node install/build.js",
        install: "node install/check.js || npm run build",
        clean: "rm -rf src/build/ .nyc_output/ coverage/ test/fixtures/output.*",
        test: "npm run lint && npm run test-unit",
        lint: "npm run lint-cpp && npm run lint-js && npm run lint-types",
        "lint-cpp": "cpplint --quiet src/*.h src/*.cc",
        "lint-js": "biome lint",
        "lint-types": "tsd --files ./test/types/sharp.test-d.ts",
        "test-leak": "./test/leak/leak.sh",
        "test-unit": "node --experimental-test-coverage test/unit.mjs",
        "package-from-local-build": "node npm/from-local-build.js",
        "package-release-notes": "node npm/release-notes.js",
        "docs-build": "node docs/build.mjs",
        "docs-serve": "cd docs && npm start",
        "docs-publish": "cd docs && npm run build && npx firebase-tools deploy --project pixelplumbing --only hosting:pixelplumbing-sharp"
      },
      type: "commonjs",
      main: "lib/index.js",
      types: "lib/index.d.ts",
      files: [
        "install",
        "lib",
        "src/*.{cc,h,gyp}"
      ],
      repository: {
        type: "git",
        url: "git://github.com/lovell/sharp.git"
      },
      keywords: [
        "jpeg",
        "png",
        "webp",
        "avif",
        "tiff",
        "gif",
        "svg",
        "jp2",
        "dzi",
        "image",
        "resize",
        "thumbnail",
        "crop",
        "embed",
        "libvips",
        "vips"
      ],
      dependencies: {
        "@img/colour": "^1.0.0",
        "detect-libc": "^2.1.2",
        semver: "^7.7.3"
      },
      optionalDependencies: {
        "@img/sharp-darwin-arm64": "0.34.5",
        "@img/sharp-darwin-x64": "0.34.5",
        "@img/sharp-libvips-darwin-arm64": "1.2.4",
        "@img/sharp-libvips-darwin-x64": "1.2.4",
        "@img/sharp-libvips-linux-arm": "1.2.4",
        "@img/sharp-libvips-linux-arm64": "1.2.4",
        "@img/sharp-libvips-linux-ppc64": "1.2.4",
        "@img/sharp-libvips-linux-riscv64": "1.2.4",
        "@img/sharp-libvips-linux-s390x": "1.2.4",
        "@img/sharp-libvips-linux-x64": "1.2.4",
        "@img/sharp-libvips-linuxmusl-arm64": "1.2.4",
        "@img/sharp-libvips-linuxmusl-x64": "1.2.4",
        "@img/sharp-linux-arm": "0.34.5",
        "@img/sharp-linux-arm64": "0.34.5",
        "@img/sharp-linux-ppc64": "0.34.5",
        "@img/sharp-linux-riscv64": "0.34.5",
        "@img/sharp-linux-s390x": "0.34.5",
        "@img/sharp-linux-x64": "0.34.5",
        "@img/sharp-linuxmusl-arm64": "0.34.5",
        "@img/sharp-linuxmusl-x64": "0.34.5",
        "@img/sharp-wasm32": "0.34.5",
        "@img/sharp-win32-arm64": "0.34.5",
        "@img/sharp-win32-ia32": "0.34.5",
        "@img/sharp-win32-x64": "0.34.5"
      },
      devDependencies: {
        "@biomejs/biome": "^2.3.4",
        "@cpplint/cli": "^0.1.0",
        "@emnapi/runtime": "^1.7.0",
        "@img/sharp-libvips-dev": "1.2.4",
        "@img/sharp-libvips-dev-wasm32": "1.2.4",
        "@img/sharp-libvips-win32-arm64": "1.2.4",
        "@img/sharp-libvips-win32-ia32": "1.2.4",
        "@img/sharp-libvips-win32-x64": "1.2.4",
        "@types/node": "*",
        emnapi: "^1.7.0",
        "exif-reader": "^2.0.2",
        "extract-zip": "^2.0.1",
        icc: "^3.0.0",
        "jsdoc-to-markdown": "^9.1.3",
        "node-addon-api": "^8.5.0",
        "node-gyp": "^11.5.0",
        "tar-fs": "^3.1.1",
        tsd: "^0.33.0"
      },
      license: "Apache-2.0",
      engines: {
        node: "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      config: {
        libvips: ">=8.17.3"
      },
      funding: {
        url: "https://opencollective.com/libvips"
      }
    };
  }
});

// node_modules/sharp/lib/libvips.js
var require_libvips = __commonJS({
  "node_modules/sharp/lib/libvips.js"(exports2, module2) {
    var { spawnSync } = require("node:child_process");
    var { createHash } = require("node:crypto");
    var semverCoerce = require_coerce();
    var semverGreaterThanOrEqualTo = require_gte();
    var semverSatisfies = require_satisfies();
    var detectLibc = require_detect_libc();
    var { config, engines, optionalDependencies } = require_package();
    var minimumLibvipsVersionLabelled = process.env.npm_package_config_libvips || config.libvips;
    var minimumLibvipsVersion = semverCoerce(minimumLibvipsVersionLabelled).version;
    var prebuiltPlatforms = [
      "darwin-arm64",
      "darwin-x64",
      "linux-arm",
      "linux-arm64",
      "linux-ppc64",
      "linux-riscv64",
      "linux-s390x",
      "linux-x64",
      "linuxmusl-arm64",
      "linuxmusl-x64",
      "win32-arm64",
      "win32-ia32",
      "win32-x64"
    ];
    var spawnSyncOptions = {
      encoding: "utf8",
      shell: true
    };
    var log = (item) => {
      if (item instanceof Error) {
        console.error(`sharp: Installation error: ${item.message}`);
      } else {
        console.log(`sharp: ${item}`);
      }
    };
    var runtimeLibc = () => detectLibc.isNonGlibcLinuxSync() ? detectLibc.familySync() : "";
    var runtimePlatformArch = () => `${process.platform}${runtimeLibc()}-${process.arch}`;
    var buildPlatformArch = () => {
      if (isEmscripten()) {
        return "wasm32";
      }
      const { npm_config_arch, npm_config_platform, npm_config_libc } = process.env;
      const libc = typeof npm_config_libc === "string" ? npm_config_libc : runtimeLibc();
      return `${npm_config_platform || process.platform}${libc}-${npm_config_arch || process.arch}`;
    };
    var buildSharpLibvipsIncludeDir = () => {
      try {
        return require(`@img/sharp-libvips-dev-${buildPlatformArch()}/include`);
      } catch {
        try {
          return require("@img/sharp-libvips-dev/include");
        } catch {
        }
      }
      return "";
    };
    var buildSharpLibvipsCPlusPlusDir = () => {
      try {
        return require("@img/sharp-libvips-dev/cplusplus");
      } catch {
      }
      return "";
    };
    var buildSharpLibvipsLibDir = () => {
      try {
        return require(`@img/sharp-libvips-dev-${buildPlatformArch()}/lib`);
      } catch {
        try {
          return require(`@img/sharp-libvips-${buildPlatformArch()}/lib`);
        } catch {
        }
      }
      return "";
    };
    var isUnsupportedNodeRuntime = () => {
      if (process.release?.name === "node" && process.versions) {
        if (!semverSatisfies(process.versions.node, engines.node)) {
          return { found: process.versions.node, expected: engines.node };
        }
      }
    };
    var isEmscripten = () => {
      const { CC } = process.env;
      return Boolean(CC?.endsWith("/emcc"));
    };
    var isRosetta = () => {
      if (process.platform === "darwin" && process.arch === "x64") {
        const translated = spawnSync("sysctl sysctl.proc_translated", spawnSyncOptions).stdout;
        return (translated || "").trim() === "sysctl.proc_translated: 1";
      }
      return false;
    };
    var sha512 = (s) => createHash("sha512").update(s).digest("hex");
    var yarnLocator = () => {
      try {
        const identHash = sha512(`imgsharp-libvips-${buildPlatformArch()}`);
        const npmVersion = semverCoerce(optionalDependencies[`@img/sharp-libvips-${buildPlatformArch()}`], {
          includePrerelease: true
        }).version;
        return sha512(`${identHash}npm:${npmVersion}`).slice(0, 10);
      } catch {
      }
      return "";
    };
    var spawnRebuild = () => spawnSync(`node-gyp rebuild --directory=src ${isEmscripten() ? "--nodedir=emscripten" : ""}`, {
      ...spawnSyncOptions,
      stdio: "inherit"
    }).status;
    var globalLibvipsVersion = () => {
      if (process.platform !== "win32") {
        const globalLibvipsVersion2 = spawnSync("pkg-config --modversion vips-cpp", {
          ...spawnSyncOptions,
          env: {
            ...process.env,
            PKG_CONFIG_PATH: pkgConfigPath()
          }
        }).stdout;
        return (globalLibvipsVersion2 || "").trim();
      } else {
        return "";
      }
    };
    var pkgConfigPath = () => {
      if (process.platform !== "win32") {
        const brewPkgConfigPath = spawnSync(
          'which brew >/dev/null 2>&1 && brew environment --plain | grep PKG_CONFIG_LIBDIR | cut -d" " -f2',
          spawnSyncOptions
        ).stdout || "";
        return [
          brewPkgConfigPath.trim(),
          process.env.PKG_CONFIG_PATH,
          "/usr/local/lib/pkgconfig",
          "/usr/lib/pkgconfig",
          "/usr/local/libdata/pkgconfig",
          "/usr/libdata/pkgconfig"
        ].filter(Boolean).join(":");
      } else {
        return "";
      }
    };
    var skipSearch = (status, reason, logger) => {
      if (logger) {
        logger(`Detected ${reason}, skipping search for globally-installed libvips`);
      }
      return status;
    };
    var useGlobalLibvips = (logger) => {
      if (Boolean(process.env.SHARP_IGNORE_GLOBAL_LIBVIPS) === true) {
        return skipSearch(false, "SHARP_IGNORE_GLOBAL_LIBVIPS", logger);
      }
      if (Boolean(process.env.SHARP_FORCE_GLOBAL_LIBVIPS) === true) {
        return skipSearch(true, "SHARP_FORCE_GLOBAL_LIBVIPS", logger);
      }
      if (isRosetta()) {
        return skipSearch(false, "Rosetta", logger);
      }
      const globalVipsVersion = globalLibvipsVersion();
      return !!globalVipsVersion && semverGreaterThanOrEqualTo(globalVipsVersion, minimumLibvipsVersion);
    };
    module2.exports = {
      minimumLibvipsVersion,
      prebuiltPlatforms,
      buildPlatformArch,
      buildSharpLibvipsIncludeDir,
      buildSharpLibvipsCPlusPlusDir,
      buildSharpLibvipsLibDir,
      isUnsupportedNodeRuntime,
      runtimePlatformArch,
      log,
      yarnLocator,
      spawnRebuild,
      globalLibvipsVersion,
      pkgConfigPath,
      useGlobalLibvips
    };
  }
});

// node_modules/sharp/lib/sharp.js
var require_sharp = __commonJS({
  "node_modules/sharp/lib/sharp.js"(exports2, module2) {
    var { familySync, versionSync } = require_detect_libc();
    var { runtimePlatformArch, isUnsupportedNodeRuntime, prebuiltPlatforms, minimumLibvipsVersion } = require_libvips();
    var runtimePlatform = runtimePlatformArch();
    var paths = [
      `../src/build/Release/sharp-${runtimePlatform}.node`,
      "../src/build/Release/sharp-wasm32.node",
      `@img/sharp-${runtimePlatform}/sharp.node`,
      "@img/sharp-wasm32/sharp.node"
    ];
    var path2;
    var sharp;
    var errors = [];
    for (path2 of paths) {
      try {
        sharp = require(path2);
        break;
      } catch (err) {
        errors.push(err);
      }
    }
    if (sharp && path2.startsWith("@img/sharp-linux-x64") && !sharp._isUsingX64V2()) {
      const err = new Error("Prebuilt binaries for linux-x64 require v2 microarchitecture");
      err.code = "Unsupported CPU";
      errors.push(err);
      sharp = null;
    }
    if (sharp) {
      module2.exports = sharp;
    } else {
      const [isLinux, isMacOs, isWindows] = ["linux", "darwin", "win32"].map((os) => runtimePlatform.startsWith(os));
      const help = [`Could not load the "sharp" module using the ${runtimePlatform} runtime`];
      errors.forEach((err) => {
        if (err.code !== "MODULE_NOT_FOUND") {
          help.push(`${err.code}: ${err.message}`);
        }
      });
      const messages = errors.map((err) => err.message).join(" ");
      help.push("Possible solutions:");
      if (isUnsupportedNodeRuntime()) {
        const { found, expected } = isUnsupportedNodeRuntime();
        help.push(
          "- Please upgrade Node.js:",
          `    Found ${found}`,
          `    Requires ${expected}`
        );
      } else if (prebuiltPlatforms.includes(runtimePlatform)) {
        const [os, cpu] = runtimePlatform.split("-");
        const libc = os.endsWith("musl") ? " --libc=musl" : "";
        help.push(
          "- Ensure optional dependencies can be installed:",
          "    npm install --include=optional sharp",
          "- Ensure your package manager supports multi-platform installation:",
          "    See https://sharp.pixelplumbing.com/install#cross-platform",
          "- Add platform-specific dependencies:",
          `    npm install --os=${os.replace("musl", "")}${libc} --cpu=${cpu} sharp`
        );
      } else {
        help.push(
          `- Manually install libvips >= ${minimumLibvipsVersion}`,
          "- Add experimental WebAssembly-based dependencies:",
          "    npm install --cpu=wasm32 sharp",
          "    npm install @img/sharp-wasm32"
        );
      }
      if (isLinux && /(symbol not found|CXXABI_)/i.test(messages)) {
        try {
          const { config } = require(`@img/sharp-libvips-${runtimePlatform}/package`);
          const libcFound = `${familySync()} ${versionSync()}`;
          const libcRequires = `${config.musl ? "musl" : "glibc"} ${config.musl || config.glibc}`;
          help.push(
            "- Update your OS:",
            `    Found ${libcFound}`,
            `    Requires ${libcRequires}`
          );
        } catch (_errEngines) {
        }
      }
      if (isLinux && /\/snap\/core[0-9]{2}/.test(messages)) {
        help.push(
          "- Remove the Node.js Snap, which does not support native modules",
          "    snap remove node"
        );
      }
      if (isMacOs && /Incompatible library version/.test(messages)) {
        help.push(
          "- Update Homebrew:",
          "    brew update && brew upgrade vips"
        );
      }
      if (errors.some((err) => err.code === "ERR_DLOPEN_DISABLED")) {
        help.push("- Run Node.js without using the --no-addons flag");
      }
      if (isWindows && /The specified procedure could not be found/.test(messages)) {
        help.push(
          "- Using the canvas package on Windows?",
          "    See https://sharp.pixelplumbing.com/install#canvas-and-windows",
          "- Check for outdated versions of sharp in the dependency tree:",
          "    npm ls sharp"
        );
      }
      help.push(
        "- Consult the installation documentation:",
        "    See https://sharp.pixelplumbing.com/install"
      );
      throw new Error(help.join("\n"));
    }
  }
});

// node_modules/sharp/lib/constructor.js
var require_constructor = __commonJS({
  "node_modules/sharp/lib/constructor.js"(exports2, module2) {
    var util = require("node:util");
    var stream = require("node:stream");
    var is = require_is();
    require_sharp();
    var debuglog = util.debuglog("sharp");
    var queueListener = (queueLength) => {
      Sharp.queue.emit("change", queueLength);
    };
    var Sharp = function(input, options) {
      if (arguments.length === 1 && !is.defined(input)) {
        throw new Error("Invalid input");
      }
      if (!(this instanceof Sharp)) {
        return new Sharp(input, options);
      }
      stream.Duplex.call(this);
      this.options = {
        // resize options
        topOffsetPre: -1,
        leftOffsetPre: -1,
        widthPre: -1,
        heightPre: -1,
        topOffsetPost: -1,
        leftOffsetPost: -1,
        widthPost: -1,
        heightPost: -1,
        width: -1,
        height: -1,
        canvas: "crop",
        position: 0,
        resizeBackground: [0, 0, 0, 255],
        angle: 0,
        rotationAngle: 0,
        rotationBackground: [0, 0, 0, 255],
        rotateBefore: false,
        orientBefore: false,
        flip: false,
        flop: false,
        extendTop: 0,
        extendBottom: 0,
        extendLeft: 0,
        extendRight: 0,
        extendBackground: [0, 0, 0, 255],
        extendWith: "background",
        withoutEnlargement: false,
        withoutReduction: false,
        affineMatrix: [],
        affineBackground: [0, 0, 0, 255],
        affineIdx: 0,
        affineIdy: 0,
        affineOdx: 0,
        affineOdy: 0,
        affineInterpolator: this.constructor.interpolators.bilinear,
        kernel: "lanczos3",
        fastShrinkOnLoad: true,
        // operations
        tint: [-1, 0, 0, 0],
        flatten: false,
        flattenBackground: [0, 0, 0],
        unflatten: false,
        negate: false,
        negateAlpha: true,
        medianSize: 0,
        blurSigma: 0,
        precision: "integer",
        minAmpl: 0.2,
        sharpenSigma: 0,
        sharpenM1: 1,
        sharpenM2: 2,
        sharpenX1: 2,
        sharpenY2: 10,
        sharpenY3: 20,
        threshold: 0,
        thresholdGrayscale: true,
        trimBackground: [],
        trimThreshold: -1,
        trimLineArt: false,
        dilateWidth: 0,
        erodeWidth: 0,
        gamma: 0,
        gammaOut: 0,
        greyscale: false,
        normalise: false,
        normaliseLower: 1,
        normaliseUpper: 99,
        claheWidth: 0,
        claheHeight: 0,
        claheMaxSlope: 3,
        brightness: 1,
        saturation: 1,
        hue: 0,
        lightness: 0,
        booleanBufferIn: null,
        booleanFileIn: "",
        joinChannelIn: [],
        extractChannel: -1,
        removeAlpha: false,
        ensureAlpha: -1,
        colourspace: "srgb",
        colourspacePipeline: "last",
        composite: [],
        // output
        fileOut: "",
        formatOut: "input",
        streamOut: false,
        keepMetadata: 0,
        withMetadataOrientation: -1,
        withMetadataDensity: 0,
        withIccProfile: "",
        withExif: {},
        withExifMerge: true,
        withXmp: "",
        resolveWithObject: false,
        loop: -1,
        delay: [],
        // output format
        jpegQuality: 80,
        jpegProgressive: false,
        jpegChromaSubsampling: "4:2:0",
        jpegTrellisQuantisation: false,
        jpegOvershootDeringing: false,
        jpegOptimiseScans: false,
        jpegOptimiseCoding: true,
        jpegQuantisationTable: 0,
        pngProgressive: false,
        pngCompressionLevel: 6,
        pngAdaptiveFiltering: false,
        pngPalette: false,
        pngQuality: 100,
        pngEffort: 7,
        pngBitdepth: 8,
        pngDither: 1,
        jp2Quality: 80,
        jp2TileHeight: 512,
        jp2TileWidth: 512,
        jp2Lossless: false,
        jp2ChromaSubsampling: "4:4:4",
        webpQuality: 80,
        webpAlphaQuality: 100,
        webpLossless: false,
        webpNearLossless: false,
        webpSmartSubsample: false,
        webpSmartDeblock: false,
        webpPreset: "default",
        webpEffort: 4,
        webpMinSize: false,
        webpMixed: false,
        gifBitdepth: 8,
        gifEffort: 7,
        gifDither: 1,
        gifInterFrameMaxError: 0,
        gifInterPaletteMaxError: 3,
        gifKeepDuplicateFrames: false,
        gifReuse: true,
        gifProgressive: false,
        tiffQuality: 80,
        tiffCompression: "jpeg",
        tiffBigtiff: false,
        tiffPredictor: "horizontal",
        tiffPyramid: false,
        tiffMiniswhite: false,
        tiffBitdepth: 8,
        tiffTile: false,
        tiffTileHeight: 256,
        tiffTileWidth: 256,
        tiffXres: 1,
        tiffYres: 1,
        tiffResolutionUnit: "inch",
        heifQuality: 50,
        heifLossless: false,
        heifCompression: "av1",
        heifEffort: 4,
        heifChromaSubsampling: "4:4:4",
        heifBitdepth: 8,
        jxlDistance: 1,
        jxlDecodingTier: 0,
        jxlEffort: 7,
        jxlLossless: false,
        rawDepth: "uchar",
        tileSize: 256,
        tileOverlap: 0,
        tileContainer: "fs",
        tileLayout: "dz",
        tileFormat: "last",
        tileDepth: "last",
        tileAngle: 0,
        tileSkipBlanks: -1,
        tileBackground: [255, 255, 255, 255],
        tileCentre: false,
        tileId: "https://example.com/iiif",
        tileBasename: "",
        timeoutSeconds: 0,
        linearA: [],
        linearB: [],
        pdfBackground: [255, 255, 255, 255],
        // Function to notify of libvips warnings
        debuglog: (warning) => {
          this.emit("warning", warning);
          debuglog(warning);
        },
        // Function to notify of queue length changes
        queueListener
      };
      this.options.input = this._createInputDescriptor(input, options, { allowStream: true });
      return this;
    };
    Object.setPrototypeOf(Sharp.prototype, stream.Duplex.prototype);
    Object.setPrototypeOf(Sharp, stream.Duplex);
    function clone() {
      const clone2 = this.constructor.call();
      const { debuglog: debuglog2, queueListener: queueListener2, ...options } = this.options;
      clone2.options = structuredClone(options);
      clone2.options.debuglog = debuglog2;
      clone2.options.queueListener = queueListener2;
      if (this._isStreamInput()) {
        this.on("finish", () => {
          this._flattenBufferIn();
          clone2.options.input.buffer = this.options.input.buffer;
          clone2.emit("finish");
        });
      }
      return clone2;
    }
    Object.assign(Sharp.prototype, { clone });
    module2.exports = Sharp;
  }
});

// node_modules/sharp/lib/input.js
var require_input = __commonJS({
  "node_modules/sharp/lib/input.js"(exports2, module2) {
    var is = require_is();
    var sharp = require_sharp();
    var align = {
      left: "low",
      top: "low",
      low: "low",
      center: "centre",
      centre: "centre",
      right: "high",
      bottom: "high",
      high: "high"
    };
    var inputStreamParameters = [
      // Limits and error handling
      "failOn",
      "limitInputPixels",
      "unlimited",
      // Format-generic
      "animated",
      "autoOrient",
      "density",
      "ignoreIcc",
      "page",
      "pages",
      "sequentialRead",
      // Format-specific
      "jp2",
      "openSlide",
      "pdf",
      "raw",
      "svg",
      "tiff",
      // Deprecated
      "failOnError",
      "openSlideLevel",
      "pdfBackground",
      "tiffSubifd"
    ];
    function _inputOptionsFromObject(obj) {
      const params = inputStreamParameters.filter((p) => is.defined(obj[p])).map((p) => [p, obj[p]]);
      return params.length ? Object.fromEntries(params) : void 0;
    }
    function _createInputDescriptor(input, inputOptions, containerOptions) {
      const inputDescriptor = {
        autoOrient: false,
        failOn: "warning",
        limitInputPixels: 16383 ** 2,
        ignoreIcc: false,
        unlimited: false,
        sequentialRead: true
      };
      if (is.string(input)) {
        inputDescriptor.file = input;
      } else if (is.buffer(input)) {
        if (input.length === 0) {
          throw Error("Input Buffer is empty");
        }
        inputDescriptor.buffer = input;
      } else if (is.arrayBuffer(input)) {
        if (input.byteLength === 0) {
          throw Error("Input bit Array is empty");
        }
        inputDescriptor.buffer = Buffer.from(input, 0, input.byteLength);
      } else if (is.typedArray(input)) {
        if (input.length === 0) {
          throw Error("Input Bit Array is empty");
        }
        inputDescriptor.buffer = Buffer.from(input.buffer, input.byteOffset, input.byteLength);
      } else if (is.plainObject(input) && !is.defined(inputOptions)) {
        inputOptions = input;
        if (_inputOptionsFromObject(inputOptions)) {
          inputDescriptor.buffer = [];
        }
      } else if (!is.defined(input) && !is.defined(inputOptions) && is.object(containerOptions) && containerOptions.allowStream) {
        inputDescriptor.buffer = [];
      } else if (Array.isArray(input)) {
        if (input.length > 1) {
          if (!this.options.joining) {
            this.options.joining = true;
            this.options.join = input.map((i) => this._createInputDescriptor(i));
          } else {
            throw new Error("Recursive join is unsupported");
          }
        } else {
          throw new Error("Expected at least two images to join");
        }
      } else {
        throw new Error(`Unsupported input '${input}' of type ${typeof input}${is.defined(inputOptions) ? ` when also providing options of type ${typeof inputOptions}` : ""}`);
      }
      if (is.object(inputOptions)) {
        if (is.defined(inputOptions.failOnError)) {
          if (is.bool(inputOptions.failOnError)) {
            inputDescriptor.failOn = inputOptions.failOnError ? "warning" : "none";
          } else {
            throw is.invalidParameterError("failOnError", "boolean", inputOptions.failOnError);
          }
        }
        if (is.defined(inputOptions.failOn)) {
          if (is.string(inputOptions.failOn) && is.inArray(inputOptions.failOn, ["none", "truncated", "error", "warning"])) {
            inputDescriptor.failOn = inputOptions.failOn;
          } else {
            throw is.invalidParameterError("failOn", "one of: none, truncated, error, warning", inputOptions.failOn);
          }
        }
        if (is.defined(inputOptions.autoOrient)) {
          if (is.bool(inputOptions.autoOrient)) {
            inputDescriptor.autoOrient = inputOptions.autoOrient;
          } else {
            throw is.invalidParameterError("autoOrient", "boolean", inputOptions.autoOrient);
          }
        }
        if (is.defined(inputOptions.density)) {
          if (is.inRange(inputOptions.density, 1, 1e5)) {
            inputDescriptor.density = inputOptions.density;
          } else {
            throw is.invalidParameterError("density", "number between 1 and 100000", inputOptions.density);
          }
        }
        if (is.defined(inputOptions.ignoreIcc)) {
          if (is.bool(inputOptions.ignoreIcc)) {
            inputDescriptor.ignoreIcc = inputOptions.ignoreIcc;
          } else {
            throw is.invalidParameterError("ignoreIcc", "boolean", inputOptions.ignoreIcc);
          }
        }
        if (is.defined(inputOptions.limitInputPixels)) {
          if (is.bool(inputOptions.limitInputPixels)) {
            inputDescriptor.limitInputPixels = inputOptions.limitInputPixels ? 16383 ** 2 : 0;
          } else if (is.integer(inputOptions.limitInputPixels) && is.inRange(inputOptions.limitInputPixels, 0, Number.MAX_SAFE_INTEGER)) {
            inputDescriptor.limitInputPixels = inputOptions.limitInputPixels;
          } else {
            throw is.invalidParameterError("limitInputPixels", "positive integer", inputOptions.limitInputPixels);
          }
        }
        if (is.defined(inputOptions.unlimited)) {
          if (is.bool(inputOptions.unlimited)) {
            inputDescriptor.unlimited = inputOptions.unlimited;
          } else {
            throw is.invalidParameterError("unlimited", "boolean", inputOptions.unlimited);
          }
        }
        if (is.defined(inputOptions.sequentialRead)) {
          if (is.bool(inputOptions.sequentialRead)) {
            inputDescriptor.sequentialRead = inputOptions.sequentialRead;
          } else {
            throw is.invalidParameterError("sequentialRead", "boolean", inputOptions.sequentialRead);
          }
        }
        if (is.defined(inputOptions.raw)) {
          if (is.object(inputOptions.raw) && is.integer(inputOptions.raw.width) && inputOptions.raw.width > 0 && is.integer(inputOptions.raw.height) && inputOptions.raw.height > 0 && is.integer(inputOptions.raw.channels) && is.inRange(inputOptions.raw.channels, 1, 4)) {
            inputDescriptor.rawWidth = inputOptions.raw.width;
            inputDescriptor.rawHeight = inputOptions.raw.height;
            inputDescriptor.rawChannels = inputOptions.raw.channels;
            switch (input.constructor) {
              case Uint8Array:
              case Uint8ClampedArray:
                inputDescriptor.rawDepth = "uchar";
                break;
              case Int8Array:
                inputDescriptor.rawDepth = "char";
                break;
              case Uint16Array:
                inputDescriptor.rawDepth = "ushort";
                break;
              case Int16Array:
                inputDescriptor.rawDepth = "short";
                break;
              case Uint32Array:
                inputDescriptor.rawDepth = "uint";
                break;
              case Int32Array:
                inputDescriptor.rawDepth = "int";
                break;
              case Float32Array:
                inputDescriptor.rawDepth = "float";
                break;
              case Float64Array:
                inputDescriptor.rawDepth = "double";
                break;
              default:
                inputDescriptor.rawDepth = "uchar";
                break;
            }
          } else {
            throw new Error("Expected width, height and channels for raw pixel input");
          }
          inputDescriptor.rawPremultiplied = false;
          if (is.defined(inputOptions.raw.premultiplied)) {
            if (is.bool(inputOptions.raw.premultiplied)) {
              inputDescriptor.rawPremultiplied = inputOptions.raw.premultiplied;
            } else {
              throw is.invalidParameterError("raw.premultiplied", "boolean", inputOptions.raw.premultiplied);
            }
          }
          inputDescriptor.rawPageHeight = 0;
          if (is.defined(inputOptions.raw.pageHeight)) {
            if (is.integer(inputOptions.raw.pageHeight) && inputOptions.raw.pageHeight > 0 && inputOptions.raw.pageHeight <= inputOptions.raw.height) {
              if (inputOptions.raw.height % inputOptions.raw.pageHeight !== 0) {
                throw new Error(`Expected raw.height ${inputOptions.raw.height} to be a multiple of raw.pageHeight ${inputOptions.raw.pageHeight}`);
              }
              inputDescriptor.rawPageHeight = inputOptions.raw.pageHeight;
            } else {
              throw is.invalidParameterError("raw.pageHeight", "positive integer", inputOptions.raw.pageHeight);
            }
          }
        }
        if (is.defined(inputOptions.animated)) {
          if (is.bool(inputOptions.animated)) {
            inputDescriptor.pages = inputOptions.animated ? -1 : 1;
          } else {
            throw is.invalidParameterError("animated", "boolean", inputOptions.animated);
          }
        }
        if (is.defined(inputOptions.pages)) {
          if (is.integer(inputOptions.pages) && is.inRange(inputOptions.pages, -1, 1e5)) {
            inputDescriptor.pages = inputOptions.pages;
          } else {
            throw is.invalidParameterError("pages", "integer between -1 and 100000", inputOptions.pages);
          }
        }
        if (is.defined(inputOptions.page)) {
          if (is.integer(inputOptions.page) && is.inRange(inputOptions.page, 0, 1e5)) {
            inputDescriptor.page = inputOptions.page;
          } else {
            throw is.invalidParameterError("page", "integer between 0 and 100000", inputOptions.page);
          }
        }
        if (is.object(inputOptions.openSlide) && is.defined(inputOptions.openSlide.level)) {
          if (is.integer(inputOptions.openSlide.level) && is.inRange(inputOptions.openSlide.level, 0, 256)) {
            inputDescriptor.openSlideLevel = inputOptions.openSlide.level;
          } else {
            throw is.invalidParameterError("openSlide.level", "integer between 0 and 256", inputOptions.openSlide.level);
          }
        } else if (is.defined(inputOptions.level)) {
          if (is.integer(inputOptions.level) && is.inRange(inputOptions.level, 0, 256)) {
            inputDescriptor.openSlideLevel = inputOptions.level;
          } else {
            throw is.invalidParameterError("level", "integer between 0 and 256", inputOptions.level);
          }
        }
        if (is.object(inputOptions.tiff) && is.defined(inputOptions.tiff.subifd)) {
          if (is.integer(inputOptions.tiff.subifd) && is.inRange(inputOptions.tiff.subifd, -1, 1e5)) {
            inputDescriptor.tiffSubifd = inputOptions.tiff.subifd;
          } else {
            throw is.invalidParameterError("tiff.subifd", "integer between -1 and 100000", inputOptions.tiff.subifd);
          }
        } else if (is.defined(inputOptions.subifd)) {
          if (is.integer(inputOptions.subifd) && is.inRange(inputOptions.subifd, -1, 1e5)) {
            inputDescriptor.tiffSubifd = inputOptions.subifd;
          } else {
            throw is.invalidParameterError("subifd", "integer between -1 and 100000", inputOptions.subifd);
          }
        }
        if (is.object(inputOptions.svg)) {
          if (is.defined(inputOptions.svg.stylesheet)) {
            if (is.string(inputOptions.svg.stylesheet)) {
              inputDescriptor.svgStylesheet = inputOptions.svg.stylesheet;
            } else {
              throw is.invalidParameterError("svg.stylesheet", "string", inputOptions.svg.stylesheet);
            }
          }
          if (is.defined(inputOptions.svg.highBitdepth)) {
            if (is.bool(inputOptions.svg.highBitdepth)) {
              inputDescriptor.svgHighBitdepth = inputOptions.svg.highBitdepth;
            } else {
              throw is.invalidParameterError("svg.highBitdepth", "boolean", inputOptions.svg.highBitdepth);
            }
          }
        }
        if (is.object(inputOptions.pdf) && is.defined(inputOptions.pdf.background)) {
          inputDescriptor.pdfBackground = this._getBackgroundColourOption(inputOptions.pdf.background);
        } else if (is.defined(inputOptions.pdfBackground)) {
          inputDescriptor.pdfBackground = this._getBackgroundColourOption(inputOptions.pdfBackground);
        }
        if (is.object(inputOptions.jp2) && is.defined(inputOptions.jp2.oneshot)) {
          if (is.bool(inputOptions.jp2.oneshot)) {
            inputDescriptor.jp2Oneshot = inputOptions.jp2.oneshot;
          } else {
            throw is.invalidParameterError("jp2.oneshot", "boolean", inputOptions.jp2.oneshot);
          }
        }
        if (is.defined(inputOptions.create)) {
          if (is.object(inputOptions.create) && is.integer(inputOptions.create.width) && inputOptions.create.width > 0 && is.integer(inputOptions.create.height) && inputOptions.create.height > 0 && is.integer(inputOptions.create.channels)) {
            inputDescriptor.createWidth = inputOptions.create.width;
            inputDescriptor.createHeight = inputOptions.create.height;
            inputDescriptor.createChannels = inputOptions.create.channels;
            inputDescriptor.createPageHeight = 0;
            if (is.defined(inputOptions.create.pageHeight)) {
              if (is.integer(inputOptions.create.pageHeight) && inputOptions.create.pageHeight > 0 && inputOptions.create.pageHeight <= inputOptions.create.height) {
                if (inputOptions.create.height % inputOptions.create.pageHeight !== 0) {
                  throw new Error(`Expected create.height ${inputOptions.create.height} to be a multiple of create.pageHeight ${inputOptions.create.pageHeight}`);
                }
                inputDescriptor.createPageHeight = inputOptions.create.pageHeight;
              } else {
                throw is.invalidParameterError("create.pageHeight", "positive integer", inputOptions.create.pageHeight);
              }
            }
            if (is.defined(inputOptions.create.noise)) {
              if (!is.object(inputOptions.create.noise)) {
                throw new Error("Expected noise to be an object");
              }
              if (inputOptions.create.noise.type !== "gaussian") {
                throw new Error("Only gaussian noise is supported at the moment");
              }
              inputDescriptor.createNoiseType = inputOptions.create.noise.type;
              if (!is.inRange(inputOptions.create.channels, 1, 4)) {
                throw is.invalidParameterError("create.channels", "number between 1 and 4", inputOptions.create.channels);
              }
              inputDescriptor.createNoiseMean = 128;
              if (is.defined(inputOptions.create.noise.mean)) {
                if (is.number(inputOptions.create.noise.mean) && is.inRange(inputOptions.create.noise.mean, 0, 1e4)) {
                  inputDescriptor.createNoiseMean = inputOptions.create.noise.mean;
                } else {
                  throw is.invalidParameterError("create.noise.mean", "number between 0 and 10000", inputOptions.create.noise.mean);
                }
              }
              inputDescriptor.createNoiseSigma = 30;
              if (is.defined(inputOptions.create.noise.sigma)) {
                if (is.number(inputOptions.create.noise.sigma) && is.inRange(inputOptions.create.noise.sigma, 0, 1e4)) {
                  inputDescriptor.createNoiseSigma = inputOptions.create.noise.sigma;
                } else {
                  throw is.invalidParameterError("create.noise.sigma", "number between 0 and 10000", inputOptions.create.noise.sigma);
                }
              }
            } else if (is.defined(inputOptions.create.background)) {
              if (!is.inRange(inputOptions.create.channels, 3, 4)) {
                throw is.invalidParameterError("create.channels", "number between 3 and 4", inputOptions.create.channels);
              }
              inputDescriptor.createBackground = this._getBackgroundColourOption(inputOptions.create.background);
            } else {
              throw new Error("Expected valid noise or background to create a new input image");
            }
            delete inputDescriptor.buffer;
          } else {
            throw new Error("Expected valid width, height and channels to create a new input image");
          }
        }
        if (is.defined(inputOptions.text)) {
          if (is.object(inputOptions.text) && is.string(inputOptions.text.text)) {
            inputDescriptor.textValue = inputOptions.text.text;
            if (is.defined(inputOptions.text.height) && is.defined(inputOptions.text.dpi)) {
              throw new Error("Expected only one of dpi or height");
            }
            if (is.defined(inputOptions.text.font)) {
              if (is.string(inputOptions.text.font)) {
                inputDescriptor.textFont = inputOptions.text.font;
              } else {
                throw is.invalidParameterError("text.font", "string", inputOptions.text.font);
              }
            }
            if (is.defined(inputOptions.text.fontfile)) {
              if (is.string(inputOptions.text.fontfile)) {
                inputDescriptor.textFontfile = inputOptions.text.fontfile;
              } else {
                throw is.invalidParameterError("text.fontfile", "string", inputOptions.text.fontfile);
              }
            }
            if (is.defined(inputOptions.text.width)) {
              if (is.integer(inputOptions.text.width) && inputOptions.text.width > 0) {
                inputDescriptor.textWidth = inputOptions.text.width;
              } else {
                throw is.invalidParameterError("text.width", "positive integer", inputOptions.text.width);
              }
            }
            if (is.defined(inputOptions.text.height)) {
              if (is.integer(inputOptions.text.height) && inputOptions.text.height > 0) {
                inputDescriptor.textHeight = inputOptions.text.height;
              } else {
                throw is.invalidParameterError("text.height", "positive integer", inputOptions.text.height);
              }
            }
            if (is.defined(inputOptions.text.align)) {
              if (is.string(inputOptions.text.align) && is.string(this.constructor.align[inputOptions.text.align])) {
                inputDescriptor.textAlign = this.constructor.align[inputOptions.text.align];
              } else {
                throw is.invalidParameterError("text.align", "valid alignment", inputOptions.text.align);
              }
            }
            if (is.defined(inputOptions.text.justify)) {
              if (is.bool(inputOptions.text.justify)) {
                inputDescriptor.textJustify = inputOptions.text.justify;
              } else {
                throw is.invalidParameterError("text.justify", "boolean", inputOptions.text.justify);
              }
            }
            if (is.defined(inputOptions.text.dpi)) {
              if (is.integer(inputOptions.text.dpi) && is.inRange(inputOptions.text.dpi, 1, 1e6)) {
                inputDescriptor.textDpi = inputOptions.text.dpi;
              } else {
                throw is.invalidParameterError("text.dpi", "integer between 1 and 1000000", inputOptions.text.dpi);
              }
            }
            if (is.defined(inputOptions.text.rgba)) {
              if (is.bool(inputOptions.text.rgba)) {
                inputDescriptor.textRgba = inputOptions.text.rgba;
              } else {
                throw is.invalidParameterError("text.rgba", "bool", inputOptions.text.rgba);
              }
            }
            if (is.defined(inputOptions.text.spacing)) {
              if (is.integer(inputOptions.text.spacing) && is.inRange(inputOptions.text.spacing, -1e6, 1e6)) {
                inputDescriptor.textSpacing = inputOptions.text.spacing;
              } else {
                throw is.invalidParameterError("text.spacing", "integer between -1000000 and 1000000", inputOptions.text.spacing);
              }
            }
            if (is.defined(inputOptions.text.wrap)) {
              if (is.string(inputOptions.text.wrap) && is.inArray(inputOptions.text.wrap, ["word", "char", "word-char", "none"])) {
                inputDescriptor.textWrap = inputOptions.text.wrap;
              } else {
                throw is.invalidParameterError("text.wrap", "one of: word, char, word-char, none", inputOptions.text.wrap);
              }
            }
            delete inputDescriptor.buffer;
          } else {
            throw new Error("Expected a valid string to create an image with text.");
          }
        }
        if (is.defined(inputOptions.join)) {
          if (is.defined(this.options.join)) {
            if (is.defined(inputOptions.join.animated)) {
              if (is.bool(inputOptions.join.animated)) {
                inputDescriptor.joinAnimated = inputOptions.join.animated;
              } else {
                throw is.invalidParameterError("join.animated", "boolean", inputOptions.join.animated);
              }
            }
            if (is.defined(inputOptions.join.across)) {
              if (is.integer(inputOptions.join.across) && is.inRange(inputOptions.join.across, 1, 1e6)) {
                inputDescriptor.joinAcross = inputOptions.join.across;
              } else {
                throw is.invalidParameterError("join.across", "integer between 1 and 100000", inputOptions.join.across);
              }
            }
            if (is.defined(inputOptions.join.shim)) {
              if (is.integer(inputOptions.join.shim) && is.inRange(inputOptions.join.shim, 0, 1e6)) {
                inputDescriptor.joinShim = inputOptions.join.shim;
              } else {
                throw is.invalidParameterError("join.shim", "integer between 0 and 100000", inputOptions.join.shim);
              }
            }
            if (is.defined(inputOptions.join.background)) {
              inputDescriptor.joinBackground = this._getBackgroundColourOption(inputOptions.join.background);
            }
            if (is.defined(inputOptions.join.halign)) {
              if (is.string(inputOptions.join.halign) && is.string(this.constructor.align[inputOptions.join.halign])) {
                inputDescriptor.joinHalign = this.constructor.align[inputOptions.join.halign];
              } else {
                throw is.invalidParameterError("join.halign", "valid alignment", inputOptions.join.halign);
              }
            }
            if (is.defined(inputOptions.join.valign)) {
              if (is.string(inputOptions.join.valign) && is.string(this.constructor.align[inputOptions.join.valign])) {
                inputDescriptor.joinValign = this.constructor.align[inputOptions.join.valign];
              } else {
                throw is.invalidParameterError("join.valign", "valid alignment", inputOptions.join.valign);
              }
            }
          } else {
            throw new Error("Expected input to be an array of images to join");
          }
        }
      } else if (is.defined(inputOptions)) {
        throw new Error(`Invalid input options ${inputOptions}`);
      }
      return inputDescriptor;
    }
    function _write(chunk, _encoding, callback) {
      if (Array.isArray(this.options.input.buffer)) {
        if (is.buffer(chunk)) {
          if (this.options.input.buffer.length === 0) {
            this.on("finish", () => {
              this.streamInFinished = true;
            });
          }
          this.options.input.buffer.push(chunk);
          callback();
        } else {
          callback(new Error("Non-Buffer data on Writable Stream"));
        }
      } else {
        callback(new Error("Unexpected data on Writable Stream"));
      }
    }
    function _flattenBufferIn() {
      if (this._isStreamInput()) {
        this.options.input.buffer = Buffer.concat(this.options.input.buffer);
      }
    }
    function _isStreamInput() {
      return Array.isArray(this.options.input.buffer);
    }
    function metadata(callback) {
      const stack = Error();
      if (is.fn(callback)) {
        if (this._isStreamInput()) {
          this.on("finish", () => {
            this._flattenBufferIn();
            sharp.metadata(this.options, (err, metadata2) => {
              if (err) {
                callback(is.nativeError(err, stack));
              } else {
                callback(null, metadata2);
              }
            });
          });
        } else {
          sharp.metadata(this.options, (err, metadata2) => {
            if (err) {
              callback(is.nativeError(err, stack));
            } else {
              callback(null, metadata2);
            }
          });
        }
        return this;
      } else {
        if (this._isStreamInput()) {
          return new Promise((resolve, reject) => {
            const finished = () => {
              this._flattenBufferIn();
              sharp.metadata(this.options, (err, metadata2) => {
                if (err) {
                  reject(is.nativeError(err, stack));
                } else {
                  resolve(metadata2);
                }
              });
            };
            if (this.writableFinished) {
              finished();
            } else {
              this.once("finish", finished);
            }
          });
        } else {
          return new Promise((resolve, reject) => {
            sharp.metadata(this.options, (err, metadata2) => {
              if (err) {
                reject(is.nativeError(err, stack));
              } else {
                resolve(metadata2);
              }
            });
          });
        }
      }
    }
    function stats(callback) {
      const stack = Error();
      if (is.fn(callback)) {
        if (this._isStreamInput()) {
          this.on("finish", () => {
            this._flattenBufferIn();
            sharp.stats(this.options, (err, stats2) => {
              if (err) {
                callback(is.nativeError(err, stack));
              } else {
                callback(null, stats2);
              }
            });
          });
        } else {
          sharp.stats(this.options, (err, stats2) => {
            if (err) {
              callback(is.nativeError(err, stack));
            } else {
              callback(null, stats2);
            }
          });
        }
        return this;
      } else {
        if (this._isStreamInput()) {
          return new Promise((resolve, reject) => {
            this.on("finish", function() {
              this._flattenBufferIn();
              sharp.stats(this.options, (err, stats2) => {
                if (err) {
                  reject(is.nativeError(err, stack));
                } else {
                  resolve(stats2);
                }
              });
            });
          });
        } else {
          return new Promise((resolve, reject) => {
            sharp.stats(this.options, (err, stats2) => {
              if (err) {
                reject(is.nativeError(err, stack));
              } else {
                resolve(stats2);
              }
            });
          });
        }
      }
    }
    module2.exports = (Sharp) => {
      Object.assign(Sharp.prototype, {
        // Private
        _inputOptionsFromObject,
        _createInputDescriptor,
        _write,
        _flattenBufferIn,
        _isStreamInput,
        // Public
        metadata,
        stats
      });
      Sharp.align = align;
    };
  }
});

// node_modules/sharp/lib/resize.js
var require_resize = __commonJS({
  "node_modules/sharp/lib/resize.js"(exports2, module2) {
    var is = require_is();
    var gravity = {
      center: 0,
      centre: 0,
      north: 1,
      east: 2,
      south: 3,
      west: 4,
      northeast: 5,
      southeast: 6,
      southwest: 7,
      northwest: 8
    };
    var position = {
      top: 1,
      right: 2,
      bottom: 3,
      left: 4,
      "right top": 5,
      "right bottom": 6,
      "left bottom": 7,
      "left top": 8
    };
    var extendWith = {
      background: "background",
      copy: "copy",
      repeat: "repeat",
      mirror: "mirror"
    };
    var strategy = {
      entropy: 16,
      attention: 17
    };
    var kernel = {
      nearest: "nearest",
      linear: "linear",
      cubic: "cubic",
      mitchell: "mitchell",
      lanczos2: "lanczos2",
      lanczos3: "lanczos3",
      mks2013: "mks2013",
      mks2021: "mks2021"
    };
    var fit = {
      contain: "contain",
      cover: "cover",
      fill: "fill",
      inside: "inside",
      outside: "outside"
    };
    var mapFitToCanvas = {
      contain: "embed",
      cover: "crop",
      fill: "ignore_aspect",
      inside: "max",
      outside: "min"
    };
    function isRotationExpected(options) {
      return options.angle % 360 !== 0 || options.rotationAngle !== 0;
    }
    function isResizeExpected(options) {
      return options.width !== -1 || options.height !== -1;
    }
    function resize(widthOrOptions, height, options) {
      if (isResizeExpected(this.options)) {
        this.options.debuglog("ignoring previous resize options");
      }
      if (this.options.widthPost !== -1) {
        this.options.debuglog("operation order will be: extract, resize, extract");
      }
      if (is.defined(widthOrOptions)) {
        if (is.object(widthOrOptions) && !is.defined(options)) {
          options = widthOrOptions;
        } else if (is.integer(widthOrOptions) && widthOrOptions > 0) {
          this.options.width = widthOrOptions;
        } else {
          throw is.invalidParameterError("width", "positive integer", widthOrOptions);
        }
      } else {
        this.options.width = -1;
      }
      if (is.defined(height)) {
        if (is.integer(height) && height > 0) {
          this.options.height = height;
        } else {
          throw is.invalidParameterError("height", "positive integer", height);
        }
      } else {
        this.options.height = -1;
      }
      if (is.object(options)) {
        if (is.defined(options.width)) {
          if (is.integer(options.width) && options.width > 0) {
            this.options.width = options.width;
          } else {
            throw is.invalidParameterError("width", "positive integer", options.width);
          }
        }
        if (is.defined(options.height)) {
          if (is.integer(options.height) && options.height > 0) {
            this.options.height = options.height;
          } else {
            throw is.invalidParameterError("height", "positive integer", options.height);
          }
        }
        if (is.defined(options.fit)) {
          const canvas = mapFitToCanvas[options.fit];
          if (is.string(canvas)) {
            this.options.canvas = canvas;
          } else {
            throw is.invalidParameterError("fit", "valid fit", options.fit);
          }
        }
        if (is.defined(options.position)) {
          const pos = is.integer(options.position) ? options.position : strategy[options.position] || position[options.position] || gravity[options.position];
          if (is.integer(pos) && (is.inRange(pos, 0, 8) || is.inRange(pos, 16, 17))) {
            this.options.position = pos;
          } else {
            throw is.invalidParameterError("position", "valid position/gravity/strategy", options.position);
          }
        }
        this._setBackgroundColourOption("resizeBackground", options.background);
        if (is.defined(options.kernel)) {
          if (is.string(kernel[options.kernel])) {
            this.options.kernel = kernel[options.kernel];
          } else {
            throw is.invalidParameterError("kernel", "valid kernel name", options.kernel);
          }
        }
        if (is.defined(options.withoutEnlargement)) {
          this._setBooleanOption("withoutEnlargement", options.withoutEnlargement);
        }
        if (is.defined(options.withoutReduction)) {
          this._setBooleanOption("withoutReduction", options.withoutReduction);
        }
        if (is.defined(options.fastShrinkOnLoad)) {
          this._setBooleanOption("fastShrinkOnLoad", options.fastShrinkOnLoad);
        }
      }
      if (isRotationExpected(this.options) && isResizeExpected(this.options)) {
        this.options.rotateBefore = true;
      }
      return this;
    }
    function extend(extend2) {
      if (is.integer(extend2) && extend2 > 0) {
        this.options.extendTop = extend2;
        this.options.extendBottom = extend2;
        this.options.extendLeft = extend2;
        this.options.extendRight = extend2;
      } else if (is.object(extend2)) {
        if (is.defined(extend2.top)) {
          if (is.integer(extend2.top) && extend2.top >= 0) {
            this.options.extendTop = extend2.top;
          } else {
            throw is.invalidParameterError("top", "positive integer", extend2.top);
          }
        }
        if (is.defined(extend2.bottom)) {
          if (is.integer(extend2.bottom) && extend2.bottom >= 0) {
            this.options.extendBottom = extend2.bottom;
          } else {
            throw is.invalidParameterError("bottom", "positive integer", extend2.bottom);
          }
        }
        if (is.defined(extend2.left)) {
          if (is.integer(extend2.left) && extend2.left >= 0) {
            this.options.extendLeft = extend2.left;
          } else {
            throw is.invalidParameterError("left", "positive integer", extend2.left);
          }
        }
        if (is.defined(extend2.right)) {
          if (is.integer(extend2.right) && extend2.right >= 0) {
            this.options.extendRight = extend2.right;
          } else {
            throw is.invalidParameterError("right", "positive integer", extend2.right);
          }
        }
        this._setBackgroundColourOption("extendBackground", extend2.background);
        if (is.defined(extend2.extendWith)) {
          if (is.string(extendWith[extend2.extendWith])) {
            this.options.extendWith = extendWith[extend2.extendWith];
          } else {
            throw is.invalidParameterError("extendWith", "one of: background, copy, repeat, mirror", extend2.extendWith);
          }
        }
      } else {
        throw is.invalidParameterError("extend", "integer or object", extend2);
      }
      return this;
    }
    function extract(options) {
      const suffix = isResizeExpected(this.options) || this.options.widthPre !== -1 ? "Post" : "Pre";
      if (this.options[`width${suffix}`] !== -1) {
        this.options.debuglog("ignoring previous extract options");
      }
      ["left", "top", "width", "height"].forEach(function(name) {
        const value = options[name];
        if (is.integer(value) && value >= 0) {
          this.options[name + (name === "left" || name === "top" ? "Offset" : "") + suffix] = value;
        } else {
          throw is.invalidParameterError(name, "integer", value);
        }
      }, this);
      if (isRotationExpected(this.options) && !isResizeExpected(this.options)) {
        if (this.options.widthPre === -1 || this.options.widthPost === -1) {
          this.options.rotateBefore = true;
        }
      }
      if (this.options.input.autoOrient) {
        this.options.orientBefore = true;
      }
      return this;
    }
    function trim(options) {
      this.options.trimThreshold = 10;
      if (is.defined(options)) {
        if (is.object(options)) {
          if (is.defined(options.background)) {
            this._setBackgroundColourOption("trimBackground", options.background);
          }
          if (is.defined(options.threshold)) {
            if (is.number(options.threshold) && options.threshold >= 0) {
              this.options.trimThreshold = options.threshold;
            } else {
              throw is.invalidParameterError("threshold", "positive number", options.threshold);
            }
          }
          if (is.defined(options.lineArt)) {
            this._setBooleanOption("trimLineArt", options.lineArt);
          }
        } else {
          throw is.invalidParameterError("trim", "object", options);
        }
      }
      if (isRotationExpected(this.options)) {
        this.options.rotateBefore = true;
      }
      return this;
    }
    module2.exports = (Sharp) => {
      Object.assign(Sharp.prototype, {
        resize,
        extend,
        extract,
        trim
      });
      Sharp.gravity = gravity;
      Sharp.strategy = strategy;
      Sharp.kernel = kernel;
      Sharp.fit = fit;
      Sharp.position = position;
    };
  }
});

// node_modules/sharp/lib/composite.js
var require_composite = __commonJS({
  "node_modules/sharp/lib/composite.js"(exports2, module2) {
    var is = require_is();
    var blend = {
      clear: "clear",
      source: "source",
      over: "over",
      in: "in",
      out: "out",
      atop: "atop",
      dest: "dest",
      "dest-over": "dest-over",
      "dest-in": "dest-in",
      "dest-out": "dest-out",
      "dest-atop": "dest-atop",
      xor: "xor",
      add: "add",
      saturate: "saturate",
      multiply: "multiply",
      screen: "screen",
      overlay: "overlay",
      darken: "darken",
      lighten: "lighten",
      "colour-dodge": "colour-dodge",
      "color-dodge": "colour-dodge",
      "colour-burn": "colour-burn",
      "color-burn": "colour-burn",
      "hard-light": "hard-light",
      "soft-light": "soft-light",
      difference: "difference",
      exclusion: "exclusion"
    };
    function composite(images) {
      if (!Array.isArray(images)) {
        throw is.invalidParameterError("images to composite", "array", images);
      }
      this.options.composite = images.map((image) => {
        if (!is.object(image)) {
          throw is.invalidParameterError("image to composite", "object", image);
        }
        const inputOptions = this._inputOptionsFromObject(image);
        const composite2 = {
          input: this._createInputDescriptor(image.input, inputOptions, { allowStream: false }),
          blend: "over",
          tile: false,
          left: 0,
          top: 0,
          hasOffset: false,
          gravity: 0,
          premultiplied: false
        };
        if (is.defined(image.blend)) {
          if (is.string(blend[image.blend])) {
            composite2.blend = blend[image.blend];
          } else {
            throw is.invalidParameterError("blend", "valid blend name", image.blend);
          }
        }
        if (is.defined(image.tile)) {
          if (is.bool(image.tile)) {
            composite2.tile = image.tile;
          } else {
            throw is.invalidParameterError("tile", "boolean", image.tile);
          }
        }
        if (is.defined(image.left)) {
          if (is.integer(image.left)) {
            composite2.left = image.left;
          } else {
            throw is.invalidParameterError("left", "integer", image.left);
          }
        }
        if (is.defined(image.top)) {
          if (is.integer(image.top)) {
            composite2.top = image.top;
          } else {
            throw is.invalidParameterError("top", "integer", image.top);
          }
        }
        if (is.defined(image.top) !== is.defined(image.left)) {
          throw new Error("Expected both left and top to be set");
        } else {
          composite2.hasOffset = is.integer(image.top) && is.integer(image.left);
        }
        if (is.defined(image.gravity)) {
          if (is.integer(image.gravity) && is.inRange(image.gravity, 0, 8)) {
            composite2.gravity = image.gravity;
          } else if (is.string(image.gravity) && is.integer(this.constructor.gravity[image.gravity])) {
            composite2.gravity = this.constructor.gravity[image.gravity];
          } else {
            throw is.invalidParameterError("gravity", "valid gravity", image.gravity);
          }
        }
        if (is.defined(image.premultiplied)) {
          if (is.bool(image.premultiplied)) {
            composite2.premultiplied = image.premultiplied;
          } else {
            throw is.invalidParameterError("premultiplied", "boolean", image.premultiplied);
          }
        }
        return composite2;
      });
      return this;
    }
    module2.exports = (Sharp) => {
      Sharp.prototype.composite = composite;
      Sharp.blend = blend;
    };
  }
});

// node_modules/sharp/lib/operation.js
var require_operation = __commonJS({
  "node_modules/sharp/lib/operation.js"(exports2, module2) {
    var is = require_is();
    var vipsPrecision = {
      integer: "integer",
      float: "float",
      approximate: "approximate"
    };
    function rotate(angle, options) {
      if (!is.defined(angle)) {
        return this.autoOrient();
      }
      if (this.options.angle || this.options.rotationAngle) {
        this.options.debuglog("ignoring previous rotate options");
        this.options.angle = 0;
        this.options.rotationAngle = 0;
      }
      if (is.integer(angle) && !(angle % 90)) {
        this.options.angle = angle;
      } else if (is.number(angle)) {
        this.options.rotationAngle = angle;
        if (is.object(options) && options.background) {
          this._setBackgroundColourOption("rotationBackground", options.background);
        }
      } else {
        throw is.invalidParameterError("angle", "numeric", angle);
      }
      return this;
    }
    function autoOrient() {
      this.options.input.autoOrient = true;
      return this;
    }
    function flip(flip2) {
      this.options.flip = is.bool(flip2) ? flip2 : true;
      return this;
    }
    function flop(flop2) {
      this.options.flop = is.bool(flop2) ? flop2 : true;
      return this;
    }
    function affine(matrix, options) {
      const flatMatrix = [].concat(...matrix);
      if (flatMatrix.length === 4 && flatMatrix.every(is.number)) {
        this.options.affineMatrix = flatMatrix;
      } else {
        throw is.invalidParameterError("matrix", "1x4 or 2x2 array", matrix);
      }
      if (is.defined(options)) {
        if (is.object(options)) {
          this._setBackgroundColourOption("affineBackground", options.background);
          if (is.defined(options.idx)) {
            if (is.number(options.idx)) {
              this.options.affineIdx = options.idx;
            } else {
              throw is.invalidParameterError("options.idx", "number", options.idx);
            }
          }
          if (is.defined(options.idy)) {
            if (is.number(options.idy)) {
              this.options.affineIdy = options.idy;
            } else {
              throw is.invalidParameterError("options.idy", "number", options.idy);
            }
          }
          if (is.defined(options.odx)) {
            if (is.number(options.odx)) {
              this.options.affineOdx = options.odx;
            } else {
              throw is.invalidParameterError("options.odx", "number", options.odx);
            }
          }
          if (is.defined(options.ody)) {
            if (is.number(options.ody)) {
              this.options.affineOdy = options.ody;
            } else {
              throw is.invalidParameterError("options.ody", "number", options.ody);
            }
          }
          if (is.defined(options.interpolator)) {
            if (is.inArray(options.interpolator, Object.values(this.constructor.interpolators))) {
              this.options.affineInterpolator = options.interpolator;
            } else {
              throw is.invalidParameterError("options.interpolator", "valid interpolator name", options.interpolator);
            }
          }
        } else {
          throw is.invalidParameterError("options", "object", options);
        }
      }
      return this;
    }
    function sharpen(options, flat, jagged) {
      if (!is.defined(options)) {
        this.options.sharpenSigma = -1;
      } else if (is.bool(options)) {
        this.options.sharpenSigma = options ? -1 : 0;
      } else if (is.number(options) && is.inRange(options, 0.01, 1e4)) {
        this.options.sharpenSigma = options;
        if (is.defined(flat)) {
          if (is.number(flat) && is.inRange(flat, 0, 1e4)) {
            this.options.sharpenM1 = flat;
          } else {
            throw is.invalidParameterError("flat", "number between 0 and 10000", flat);
          }
        }
        if (is.defined(jagged)) {
          if (is.number(jagged) && is.inRange(jagged, 0, 1e4)) {
            this.options.sharpenM2 = jagged;
          } else {
            throw is.invalidParameterError("jagged", "number between 0 and 10000", jagged);
          }
        }
      } else if (is.plainObject(options)) {
        if (is.number(options.sigma) && is.inRange(options.sigma, 1e-6, 10)) {
          this.options.sharpenSigma = options.sigma;
        } else {
          throw is.invalidParameterError("options.sigma", "number between 0.000001 and 10", options.sigma);
        }
        if (is.defined(options.m1)) {
          if (is.number(options.m1) && is.inRange(options.m1, 0, 1e6)) {
            this.options.sharpenM1 = options.m1;
          } else {
            throw is.invalidParameterError("options.m1", "number between 0 and 1000000", options.m1);
          }
        }
        if (is.defined(options.m2)) {
          if (is.number(options.m2) && is.inRange(options.m2, 0, 1e6)) {
            this.options.sharpenM2 = options.m2;
          } else {
            throw is.invalidParameterError("options.m2", "number between 0 and 1000000", options.m2);
          }
        }
        if (is.defined(options.x1)) {
          if (is.number(options.x1) && is.inRange(options.x1, 0, 1e6)) {
            this.options.sharpenX1 = options.x1;
          } else {
            throw is.invalidParameterError("options.x1", "number between 0 and 1000000", options.x1);
          }
        }
        if (is.defined(options.y2)) {
          if (is.number(options.y2) && is.inRange(options.y2, 0, 1e6)) {
            this.options.sharpenY2 = options.y2;
          } else {
            throw is.invalidParameterError("options.y2", "number between 0 and 1000000", options.y2);
          }
        }
        if (is.defined(options.y3)) {
          if (is.number(options.y3) && is.inRange(options.y3, 0, 1e6)) {
            this.options.sharpenY3 = options.y3;
          } else {
            throw is.invalidParameterError("options.y3", "number between 0 and 1000000", options.y3);
          }
        }
      } else {
        throw is.invalidParameterError("sigma", "number between 0.01 and 10000", options);
      }
      return this;
    }
    function median(size) {
      if (!is.defined(size)) {
        this.options.medianSize = 3;
      } else if (is.integer(size) && is.inRange(size, 1, 1e3)) {
        this.options.medianSize = size;
      } else {
        throw is.invalidParameterError("size", "integer between 1 and 1000", size);
      }
      return this;
    }
    function blur(options) {
      let sigma;
      if (is.number(options)) {
        sigma = options;
      } else if (is.plainObject(options)) {
        if (!is.number(options.sigma)) {
          throw is.invalidParameterError("options.sigma", "number between 0.3 and 1000", sigma);
        }
        sigma = options.sigma;
        if ("precision" in options) {
          if (is.string(vipsPrecision[options.precision])) {
            this.options.precision = vipsPrecision[options.precision];
          } else {
            throw is.invalidParameterError("precision", "one of: integer, float, approximate", options.precision);
          }
        }
        if ("minAmplitude" in options) {
          if (is.number(options.minAmplitude) && is.inRange(options.minAmplitude, 1e-3, 1)) {
            this.options.minAmpl = options.minAmplitude;
          } else {
            throw is.invalidParameterError("minAmplitude", "number between 0.001 and 1", options.minAmplitude);
          }
        }
      }
      if (!is.defined(options)) {
        this.options.blurSigma = -1;
      } else if (is.bool(options)) {
        this.options.blurSigma = options ? -1 : 0;
      } else if (is.number(sigma) && is.inRange(sigma, 0.3, 1e3)) {
        this.options.blurSigma = sigma;
      } else {
        throw is.invalidParameterError("sigma", "number between 0.3 and 1000", sigma);
      }
      return this;
    }
    function dilate(width) {
      if (!is.defined(width)) {
        this.options.dilateWidth = 1;
      } else if (is.integer(width) && width > 0) {
        this.options.dilateWidth = width;
      } else {
        throw is.invalidParameterError("dilate", "positive integer", dilate);
      }
      return this;
    }
    function erode(width) {
      if (!is.defined(width)) {
        this.options.erodeWidth = 1;
      } else if (is.integer(width) && width > 0) {
        this.options.erodeWidth = width;
      } else {
        throw is.invalidParameterError("erode", "positive integer", erode);
      }
      return this;
    }
    function flatten(options) {
      this.options.flatten = is.bool(options) ? options : true;
      if (is.object(options)) {
        this._setBackgroundColourOption("flattenBackground", options.background);
      }
      return this;
    }
    function unflatten() {
      this.options.unflatten = true;
      return this;
    }
    function gamma(gamma2, gammaOut) {
      if (!is.defined(gamma2)) {
        this.options.gamma = 2.2;
      } else if (is.number(gamma2) && is.inRange(gamma2, 1, 3)) {
        this.options.gamma = gamma2;
      } else {
        throw is.invalidParameterError("gamma", "number between 1.0 and 3.0", gamma2);
      }
      if (!is.defined(gammaOut)) {
        this.options.gammaOut = this.options.gamma;
      } else if (is.number(gammaOut) && is.inRange(gammaOut, 1, 3)) {
        this.options.gammaOut = gammaOut;
      } else {
        throw is.invalidParameterError("gammaOut", "number between 1.0 and 3.0", gammaOut);
      }
      return this;
    }
    function negate(options) {
      this.options.negate = is.bool(options) ? options : true;
      if (is.plainObject(options) && "alpha" in options) {
        if (!is.bool(options.alpha)) {
          throw is.invalidParameterError("alpha", "should be boolean value", options.alpha);
        } else {
          this.options.negateAlpha = options.alpha;
        }
      }
      return this;
    }
    function normalise(options) {
      if (is.plainObject(options)) {
        if (is.defined(options.lower)) {
          if (is.number(options.lower) && is.inRange(options.lower, 0, 99)) {
            this.options.normaliseLower = options.lower;
          } else {
            throw is.invalidParameterError("lower", "number between 0 and 99", options.lower);
          }
        }
        if (is.defined(options.upper)) {
          if (is.number(options.upper) && is.inRange(options.upper, 1, 100)) {
            this.options.normaliseUpper = options.upper;
          } else {
            throw is.invalidParameterError("upper", "number between 1 and 100", options.upper);
          }
        }
      }
      if (this.options.normaliseLower >= this.options.normaliseUpper) {
        throw is.invalidParameterError(
          "range",
          "lower to be less than upper",
          `${this.options.normaliseLower} >= ${this.options.normaliseUpper}`
        );
      }
      this.options.normalise = true;
      return this;
    }
    function normalize(options) {
      return this.normalise(options);
    }
    function clahe(options) {
      if (is.plainObject(options)) {
        if (is.integer(options.width) && options.width > 0) {
          this.options.claheWidth = options.width;
        } else {
          throw is.invalidParameterError("width", "integer greater than zero", options.width);
        }
        if (is.integer(options.height) && options.height > 0) {
          this.options.claheHeight = options.height;
        } else {
          throw is.invalidParameterError("height", "integer greater than zero", options.height);
        }
        if (is.defined(options.maxSlope)) {
          if (is.integer(options.maxSlope) && is.inRange(options.maxSlope, 0, 100)) {
            this.options.claheMaxSlope = options.maxSlope;
          } else {
            throw is.invalidParameterError("maxSlope", "integer between 0 and 100", options.maxSlope);
          }
        }
      } else {
        throw is.invalidParameterError("options", "plain object", options);
      }
      return this;
    }
    function convolve(kernel) {
      if (!is.object(kernel) || !Array.isArray(kernel.kernel) || !is.integer(kernel.width) || !is.integer(kernel.height) || !is.inRange(kernel.width, 3, 1001) || !is.inRange(kernel.height, 3, 1001) || kernel.height * kernel.width !== kernel.kernel.length) {
        throw new Error("Invalid convolution kernel");
      }
      if (!is.integer(kernel.scale)) {
        kernel.scale = kernel.kernel.reduce((a, b) => a + b, 0);
      }
      if (kernel.scale < 1) {
        kernel.scale = 1;
      }
      if (!is.integer(kernel.offset)) {
        kernel.offset = 0;
      }
      this.options.convKernel = kernel;
      return this;
    }
    function threshold(threshold2, options) {
      if (!is.defined(threshold2)) {
        this.options.threshold = 128;
      } else if (is.bool(threshold2)) {
        this.options.threshold = threshold2 ? 128 : 0;
      } else if (is.integer(threshold2) && is.inRange(threshold2, 0, 255)) {
        this.options.threshold = threshold2;
      } else {
        throw is.invalidParameterError("threshold", "integer between 0 and 255", threshold2);
      }
      if (!is.object(options) || options.greyscale === true || options.grayscale === true) {
        this.options.thresholdGrayscale = true;
      } else {
        this.options.thresholdGrayscale = false;
      }
      return this;
    }
    function boolean(operand, operator, options) {
      this.options.boolean = this._createInputDescriptor(operand, options);
      if (is.string(operator) && is.inArray(operator, ["and", "or", "eor"])) {
        this.options.booleanOp = operator;
      } else {
        throw is.invalidParameterError("operator", "one of: and, or, eor", operator);
      }
      return this;
    }
    function linear(a, b) {
      if (!is.defined(a) && is.number(b)) {
        a = 1;
      } else if (is.number(a) && !is.defined(b)) {
        b = 0;
      }
      if (!is.defined(a)) {
        this.options.linearA = [];
      } else if (is.number(a)) {
        this.options.linearA = [a];
      } else if (Array.isArray(a) && a.length && a.every(is.number)) {
        this.options.linearA = a;
      } else {
        throw is.invalidParameterError("a", "number or array of numbers", a);
      }
      if (!is.defined(b)) {
        this.options.linearB = [];
      } else if (is.number(b)) {
        this.options.linearB = [b];
      } else if (Array.isArray(b) && b.length && b.every(is.number)) {
        this.options.linearB = b;
      } else {
        throw is.invalidParameterError("b", "number or array of numbers", b);
      }
      if (this.options.linearA.length !== this.options.linearB.length) {
        throw new Error("Expected a and b to be arrays of the same length");
      }
      return this;
    }
    function recomb(inputMatrix) {
      if (!Array.isArray(inputMatrix)) {
        throw is.invalidParameterError("inputMatrix", "array", inputMatrix);
      }
      if (inputMatrix.length !== 3 && inputMatrix.length !== 4) {
        throw is.invalidParameterError("inputMatrix", "3x3 or 4x4 array", inputMatrix.length);
      }
      const recombMatrix = inputMatrix.flat().map(Number);
      if (recombMatrix.length !== 9 && recombMatrix.length !== 16) {
        throw is.invalidParameterError("inputMatrix", "cardinality of 9 or 16", recombMatrix.length);
      }
      this.options.recombMatrix = recombMatrix;
      return this;
    }
    function modulate(options) {
      if (!is.plainObject(options)) {
        throw is.invalidParameterError("options", "plain object", options);
      }
      if ("brightness" in options) {
        if (is.number(options.brightness) && options.brightness >= 0) {
          this.options.brightness = options.brightness;
        } else {
          throw is.invalidParameterError("brightness", "number above zero", options.brightness);
        }
      }
      if ("saturation" in options) {
        if (is.number(options.saturation) && options.saturation >= 0) {
          this.options.saturation = options.saturation;
        } else {
          throw is.invalidParameterError("saturation", "number above zero", options.saturation);
        }
      }
      if ("hue" in options) {
        if (is.integer(options.hue)) {
          this.options.hue = options.hue % 360;
        } else {
          throw is.invalidParameterError("hue", "number", options.hue);
        }
      }
      if ("lightness" in options) {
        if (is.number(options.lightness)) {
          this.options.lightness = options.lightness;
        } else {
          throw is.invalidParameterError("lightness", "number", options.lightness);
        }
      }
      return this;
    }
    module2.exports = (Sharp) => {
      Object.assign(Sharp.prototype, {
        autoOrient,
        rotate,
        flip,
        flop,
        affine,
        sharpen,
        erode,
        dilate,
        median,
        blur,
        flatten,
        unflatten,
        gamma,
        negate,
        normalise,
        normalize,
        clahe,
        convolve,
        threshold,
        boolean,
        linear,
        recomb,
        modulate
      });
    };
  }
});

// node_modules/@img/colour/color.cjs
var require_color = __commonJS({
  "node_modules/@img/colour/color.cjs"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var index_exports = {};
    __export(index_exports, {
      default: () => index_default
    });
    module2.exports = __toCommonJS(index_exports);
    var colors = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50]
    };
    for (const key in colors) Object.freeze(colors[key]);
    var color_name_default = Object.freeze(colors);
    var reverseNames = /* @__PURE__ */ Object.create(null);
    for (const name in color_name_default) {
      if (Object.hasOwn(color_name_default, name)) {
        reverseNames[color_name_default[name]] = name;
      }
    }
    var cs = {
      to: {},
      get: {}
    };
    cs.get = function(string) {
      const prefix = string.slice(0, 3).toLowerCase();
      let value;
      let model;
      switch (prefix) {
        case "hsl": {
          value = cs.get.hsl(string);
          model = "hsl";
          break;
        }
        case "hwb": {
          value = cs.get.hwb(string);
          model = "hwb";
          break;
        }
        default: {
          value = cs.get.rgb(string);
          model = "rgb";
          break;
        }
      }
      if (!value) {
        return null;
      }
      return { model, value };
    };
    cs.get.rgb = function(string) {
      if (!string) {
        return null;
      }
      const abbr = /^#([a-f\d]{3,4})$/i;
      const hex = /^#([a-f\d]{6})([a-f\d]{2})?$/i;
      const rgba = /^rgba?\(\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)\s*(?:[\s,|/]\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(%?)\s*)?\)$/i;
      const per = /^rgba?\(\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[\s,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/i;
      const keyword = /^(\w+)$/;
      let rgb = [0, 0, 0, 1];
      let match;
      let i;
      let hexAlpha;
      if (match = string.match(hex)) {
        hexAlpha = match[2];
        match = match[1];
        for (i = 0; i < 3; i++) {
          const i2 = i * 2;
          rgb[i] = Number.parseInt(match.slice(i2, i2 + 2), 16);
        }
        if (hexAlpha) {
          rgb[3] = Number.parseInt(hexAlpha, 16) / 255;
        }
      } else if (match = string.match(abbr)) {
        match = match[1];
        hexAlpha = match[3];
        for (i = 0; i < 3; i++) {
          rgb[i] = Number.parseInt(match[i] + match[i], 16);
        }
        if (hexAlpha) {
          rgb[3] = Number.parseInt(hexAlpha + hexAlpha, 16) / 255;
        }
      } else if (match = string.match(rgba)) {
        for (i = 0; i < 3; i++) {
          rgb[i] = Number.parseFloat(match[i + 1]);
        }
        if (match[4]) {
          rgb[3] = match[5] ? Number.parseFloat(match[4]) * 0.01 : Number.parseFloat(match[4]);
        }
      } else if (match = string.match(per)) {
        for (i = 0; i < 3; i++) {
          rgb[i] = Math.round(Number.parseFloat(match[i + 1]) * 2.55);
        }
        if (match[4]) {
          rgb[3] = match[5] ? Number.parseFloat(match[4]) * 0.01 : Number.parseFloat(match[4]);
        }
      } else if (match = string.toLowerCase().match(keyword)) {
        if (match[1] === "transparent") {
          return [0, 0, 0, 0];
        }
        if (!Object.hasOwn(color_name_default, match[1])) {
          return null;
        }
        rgb = color_name_default[match[1]].slice();
        rgb[3] = 1;
        return rgb;
      } else {
        return null;
      }
      for (i = 0; i < 3; i++) {
        rgb[i] = clamp2(rgb[i], 0, 255);
      }
      rgb[3] = clamp2(rgb[3], 0, 1);
      return rgb;
    };
    cs.get.hsl = function(string) {
      if (!string) {
        return null;
      }
      const hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[,|/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i;
      const match = string.match(hsl);
      if (match) {
        const alpha = Number.parseFloat(match[4]);
        const h = (Number.parseFloat(match[1]) % 360 + 360) % 360;
        const s = clamp2(Number.parseFloat(match[2]), 0, 100);
        const l = clamp2(Number.parseFloat(match[3]), 0, 100);
        const a = clamp2(Number.isNaN(alpha) ? 1 : alpha, 0, 1);
        return [h, s, l, a];
      }
      return null;
    };
    cs.get.hwb = function(string) {
      if (!string) {
        return null;
      }
      const hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*[\s,]\s*([+-]?[\d.]+)%\s*[\s,]\s*([+-]?[\d.]+)%\s*(?:[\s,]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i;
      const match = string.match(hwb);
      if (match) {
        const alpha = Number.parseFloat(match[4]);
        const h = (Number.parseFloat(match[1]) % 360 + 360) % 360;
        const w = clamp2(Number.parseFloat(match[2]), 0, 100);
        const b = clamp2(Number.parseFloat(match[3]), 0, 100);
        const a = clamp2(Number.isNaN(alpha) ? 1 : alpha, 0, 1);
        return [h, w, b, a];
      }
      return null;
    };
    cs.to.hex = function(...rgba) {
      return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : "");
    };
    cs.to.rgb = function(...rgba) {
      return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ")" : "rgba(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ", " + rgba[3] + ")";
    };
    cs.to.rgb.percent = function(...rgba) {
      const r = Math.round(rgba[0] / 255 * 100);
      const g = Math.round(rgba[1] / 255 * 100);
      const b = Math.round(rgba[2] / 255 * 100);
      return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r + "%, " + g + "%, " + b + "%)" : "rgba(" + r + "%, " + g + "%, " + b + "%, " + rgba[3] + ")";
    };
    cs.to.hsl = function(...hsla) {
      return hsla.length < 4 || hsla[3] === 1 ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)" : "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + hsla[3] + ")";
    };
    cs.to.hwb = function(...hwba) {
      let a = "";
      if (hwba.length >= 4 && hwba[3] !== 1) {
        a = ", " + hwba[3];
      }
      return "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a + ")";
    };
    cs.to.keyword = function(...rgb) {
      return reverseNames[rgb.slice(0, 3)];
    };
    function clamp2(number_, min, max) {
      return Math.min(Math.max(min, number_), max);
    }
    function hexDouble(number_) {
      const string_ = Math.round(number_).toString(16).toUpperCase();
      return string_.length < 2 ? "0" + string_ : string_;
    }
    var color_string_default = cs;
    var reverseKeywords = {};
    for (const key of Object.keys(color_name_default)) {
      reverseKeywords[color_name_default[key]] = key;
    }
    var convert = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      oklab: { channels: 3, labels: ["okl", "oka", "okb"] },
      lch: { channels: 3, labels: "lch" },
      oklch: { channels: 3, labels: ["okl", "okc", "okh"] },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    var conversions_default = convert;
    var LAB_FT = (6 / 29) ** 3;
    function srgbNonlinearTransform(c) {
      const cc = c > 31308e-7 ? 1.055 * c ** (1 / 2.4) - 0.055 : c * 12.92;
      return Math.min(Math.max(0, cc), 1);
    }
    function srgbNonlinearTransformInv(c) {
      return c > 0.04045 ? ((c + 0.055) / 1.055) ** 2.4 : c / 12.92;
    }
    for (const model of Object.keys(convert)) {
      if (!("channels" in convert[model])) {
        throw new Error("missing channels property: " + model);
      }
      if (!("labels" in convert[model])) {
        throw new Error("missing channel labels property: " + model);
      }
      if (convert[model].labels.length !== convert[model].channels) {
        throw new Error("channel and label counts mismatch: " + model);
      }
      const { channels, labels } = convert[model];
      delete convert[model].channels;
      delete convert[model].labels;
      Object.defineProperty(convert[model], "channels", { value: channels });
      Object.defineProperty(convert[model], "labels", { value: labels });
    }
    convert.rgb.hsl = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const min = Math.min(r, g, b);
      const max = Math.max(r, g, b);
      const delta = max - min;
      let h;
      let s;
      switch (max) {
        case min: {
          h = 0;
          break;
        }
        case r: {
          h = (g - b) / delta;
          break;
        }
        case g: {
          h = 2 + (b - r) / delta;
          break;
        }
        case b: {
          h = 4 + (r - g) / delta;
          break;
        }
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      const l = (min + max) / 2;
      if (max === min) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }
      return [h, s * 100, l * 100];
    };
    convert.rgb.hsv = function(rgb) {
      let rdif;
      let gdif;
      let bdif;
      let h;
      let s;
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const v = Math.max(r, g, b);
      const diff = v - Math.min(r, g, b);
      const diffc = function(c) {
        return (v - c) / 6 / diff + 1 / 2;
      };
      if (diff === 0) {
        h = 0;
        s = 0;
      } else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        switch (v) {
          case r: {
            h = bdif - gdif;
            break;
          }
          case g: {
            h = 1 / 3 + rdif - bdif;
            break;
          }
          case b: {
            h = 2 / 3 + gdif - rdif;
            break;
          }
        }
        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }
      return [
        h * 360,
        s * 100,
        v * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      const r = rgb[0];
      const g = rgb[1];
      let b = rgb[2];
      const h = convert.rgb.hsl(rgb)[0];
      const w = 1 / 255 * Math.min(r, Math.min(g, b));
      b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
      return [h, w * 100, b * 100];
    };
    convert.rgb.oklab = function(rgb) {
      const r = srgbNonlinearTransformInv(rgb[0] / 255);
      const g = srgbNonlinearTransformInv(rgb[1] / 255);
      const b = srgbNonlinearTransformInv(rgb[2] / 255);
      const lp = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
      const mp = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
      const sp = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
      const l = 0.2104542553 * lp + 0.793617785 * mp - 0.0040720468 * sp;
      const aa = 1.9779984951 * lp - 2.428592205 * mp + 0.4505937099 * sp;
      const bb = 0.0259040371 * lp + 0.7827717662 * mp - 0.808675766 * sp;
      return [l * 100, aa * 100, bb * 100];
    };
    convert.rgb.cmyk = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const k = Math.min(1 - r, 1 - g, 1 - b);
      const c = (1 - r - k) / (1 - k) || 0;
      const m = (1 - g - k) / (1 - k) || 0;
      const y = (1 - b - k) / (1 - k) || 0;
      return [c * 100, m * 100, y * 100, k * 100];
    };
    function comparativeDistance(x, y) {
      return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
    }
    convert.rgb.keyword = function(rgb) {
      const reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      let currentClosestDistance = Number.POSITIVE_INFINITY;
      let currentClosestKeyword;
      for (const keyword of Object.keys(color_name_default)) {
        const value = color_name_default[keyword];
        const distance = comparativeDistance(rgb, value);
        if (distance < currentClosestDistance) {
          currentClosestDistance = distance;
          currentClosestKeyword = keyword;
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return [...color_name_default[keyword]];
    };
    convert.rgb.xyz = function(rgb) {
      const r = srgbNonlinearTransformInv(rgb[0] / 255);
      const g = srgbNonlinearTransformInv(rgb[1] / 255);
      const b = srgbNonlinearTransformInv(rgb[2] / 255);
      const x = r * 0.4124564 + g * 0.3575761 + b * 0.1804375;
      const y = r * 0.2126729 + g * 0.7151522 + b * 0.072175;
      const z = r * 0.0193339 + g * 0.119192 + b * 0.9503041;
      return [x * 100, y * 100, z * 100];
    };
    convert.rgb.lab = function(rgb) {
      const xyz = convert.rgb.xyz(rgb);
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > LAB_FT ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > LAB_FT ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > LAB_FT ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.hsl.rgb = function(hsl) {
      const h = hsl[0] / 360;
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      let t3;
      let value;
      if (s === 0) {
        value = l * 255;
        return [value, value, value];
      }
      const t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const t1 = 2 * l - t2;
      const rgb = [0, 0, 0];
      for (let i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          value = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          value = t2;
        } else if (3 * t3 < 2) {
          value = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          value = t1;
        }
        rgb[i] = value * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      const h = hsl[0];
      let s = hsl[1] / 100;
      let l = hsl[2] / 100;
      let smin = s;
      const lmin = Math.max(l, 0.01);
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      const v = (l + s) / 2;
      const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
      return [h, sv * 100, v * 100];
    };
    convert.hsv.rgb = function(hsv) {
      const h = hsv[0] / 60;
      const s = hsv[1] / 100;
      let v = hsv[2] / 100;
      const hi = Math.floor(h) % 6;
      const f = h - Math.floor(h);
      const p = 255 * v * (1 - s);
      const q = 255 * v * (1 - s * f);
      const t = 255 * v * (1 - s * (1 - f));
      v *= 255;
      switch (hi) {
        case 0: {
          return [v, t, p];
        }
        case 1: {
          return [q, v, p];
        }
        case 2: {
          return [p, v, t];
        }
        case 3: {
          return [p, q, v];
        }
        case 4: {
          return [t, p, v];
        }
        case 5: {
          return [v, p, q];
        }
      }
    };
    convert.hsv.hsl = function(hsv) {
      const h = hsv[0];
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const vmin = Math.max(v, 0.01);
      let sl;
      let l;
      l = (2 - s) * v;
      const lmin = (2 - s) * vmin;
      sl = s * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;
      return [h, sl * 100, l * 100];
    };
    convert.hwb.rgb = function(hwb) {
      const h = hwb[0] / 360;
      let wh = hwb[1] / 100;
      let bl = hwb[2] / 100;
      const ratio = wh + bl;
      let f;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      const i = Math.floor(6 * h);
      const v = 1 - bl;
      f = 6 * h - i;
      if ((i & 1) !== 0) {
        f = 1 - f;
      }
      const n = wh + f * (v - wh);
      let r;
      let g;
      let b;
      switch (i) {
        default:
        case 6:
        case 0: {
          r = v;
          g = n;
          b = wh;
          break;
        }
        case 1: {
          r = n;
          g = v;
          b = wh;
          break;
        }
        case 2: {
          r = wh;
          g = v;
          b = n;
          break;
        }
        case 3: {
          r = wh;
          g = n;
          b = v;
          break;
        }
        case 4: {
          r = n;
          g = wh;
          b = v;
          break;
        }
        case 5: {
          r = v;
          g = wh;
          b = n;
          break;
        }
      }
      return [r * 255, g * 255, b * 255];
    };
    convert.cmyk.rgb = function(cmyk) {
      const c = cmyk[0] / 100;
      const m = cmyk[1] / 100;
      const y = cmyk[2] / 100;
      const k = cmyk[3] / 100;
      const r = 1 - Math.min(1, c * (1 - k) + k);
      const g = 1 - Math.min(1, m * (1 - k) + k);
      const b = 1 - Math.min(1, y * (1 - k) + k);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.rgb = function(xyz) {
      const x = xyz[0] / 100;
      const y = xyz[1] / 100;
      const z = xyz[2] / 100;
      let r;
      let g;
      let b;
      r = x * 3.2404542 + y * -1.5371385 + z * -0.4985314;
      g = x * -0.969266 + y * 1.8760108 + z * 0.041556;
      b = x * 0.0556434 + y * -0.2040259 + z * 1.0572252;
      r = srgbNonlinearTransform(r);
      g = srgbNonlinearTransform(g);
      b = srgbNonlinearTransform(b);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.lab = function(xyz) {
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > LAB_FT ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > LAB_FT ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > LAB_FT ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.xyz.oklab = function(xyz) {
      const x = xyz[0] / 100;
      const y = xyz[1] / 100;
      const z = xyz[2] / 100;
      const lp = Math.cbrt(0.8189330101 * x + 0.3618667424 * y - 0.1288597137 * z);
      const mp = Math.cbrt(0.0329845436 * x + 0.9293118715 * y + 0.0361456387 * z);
      const sp = Math.cbrt(0.0482003018 * x + 0.2643662691 * y + 0.633851707 * z);
      const l = 0.2104542553 * lp + 0.793617785 * mp - 0.0040720468 * sp;
      const a = 1.9779984951 * lp - 2.428592205 * mp + 0.4505937099 * sp;
      const b = 0.0259040371 * lp + 0.7827717662 * mp - 0.808675766 * sp;
      return [l * 100, a * 100, b * 100];
    };
    convert.oklab.oklch = function(oklab) {
      return convert.lab.lch(oklab);
    };
    convert.oklab.xyz = function(oklab) {
      const ll = oklab[0] / 100;
      const a = oklab[1] / 100;
      const b = oklab[2] / 100;
      const l = (0.999999998 * ll + 0.396337792 * a + 0.215803758 * b) ** 3;
      const m = (1.000000008 * ll - 0.105561342 * a - 0.063854175 * b) ** 3;
      const s = (1.000000055 * ll - 0.089484182 * a - 1.291485538 * b) ** 3;
      const x = 1.227013851 * l - 0.55779998 * m + 0.281256149 * s;
      const y = -0.040580178 * l + 1.11225687 * m - 0.071676679 * s;
      const z = -0.076381285 * l - 0.421481978 * m + 1.58616322 * s;
      return [x * 100, y * 100, z * 100];
    };
    convert.oklab.rgb = function(oklab) {
      const ll = oklab[0] / 100;
      const aa = oklab[1] / 100;
      const bb = oklab[2] / 100;
      const l = (ll + 0.3963377774 * aa + 0.2158037573 * bb) ** 3;
      const m = (ll - 0.1055613458 * aa - 0.0638541728 * bb) ** 3;
      const s = (ll - 0.0894841775 * aa - 1.291485548 * bb) ** 3;
      const r = srgbNonlinearTransform(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s);
      const g = srgbNonlinearTransform(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s);
      const b = srgbNonlinearTransform(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s);
      return [r * 255, g * 255, b * 255];
    };
    convert.oklch.oklab = function(oklch) {
      return convert.lch.lab(oklch);
    };
    convert.lab.xyz = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let x;
      let y;
      let z;
      y = (l + 16) / 116;
      x = a / 500 + y;
      z = y - b / 200;
      const y2 = y ** 3;
      const x2 = x ** 3;
      const z2 = z ** 3;
      y = y2 > LAB_FT ? y2 : (y - 16 / 116) / 7.787;
      x = x2 > LAB_FT ? x2 : (x - 16 / 116) / 7.787;
      z = z2 > LAB_FT ? z2 : (z - 16 / 116) / 7.787;
      x *= 95.047;
      y *= 100;
      z *= 108.883;
      return [x, y, z];
    };
    convert.lab.lch = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let h;
      const hr = Math.atan2(b, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      const c = Math.sqrt(a * a + b * b);
      return [l, c, h];
    };
    convert.lch.lab = function(lch) {
      const l = lch[0];
      const c = lch[1];
      const h = lch[2];
      const hr = h / 360 * 2 * Math.PI;
      const a = c * Math.cos(hr);
      const b = c * Math.sin(hr);
      return [l, a, b];
    };
    convert.rgb.ansi16 = function(args, saturation = null) {
      const [r, g, b] = args;
      let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
      const r = args[0];
      const g = args[1];
      const b = args[2];
      if (r >> 4 === g >> 4 && g >> 4 === b >> 4) {
        if (r < 8) {
          return 16;
        }
        if (r > 248) {
          return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
      }
      const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args) {
      args = args[0];
      let color = args % 10;
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [color, color, color];
      }
      const mult = (Math.trunc(args > 50) + 1) * 0.5;
      const r = (color & 1) * mult * 255;
      const g = (color >> 1 & 1) * mult * 255;
      const b = (color >> 2 & 1) * mult * 255;
      return [r, g, b];
    };
    convert.ansi256.rgb = function(args) {
      args = args[0];
      if (args >= 232) {
        const c = (args - 232) * 10 + 8;
        return [c, c, c];
      }
      args -= 16;
      let rem;
      const r = Math.floor(args / 36) / 5 * 255;
      const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
      const b = rem % 6 / 5 * 255;
      return [r, g, b];
    };
    convert.rgb.hex = function(args) {
      const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
      const string = integer.toString(16).toUpperCase();
      return "000000".slice(string.length) + string;
    };
    convert.hex.rgb = function(args) {
      const match = args.toString(16).match(/[a-f\d]{6}|[a-f\d]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }
      let colorString = match[0];
      if (match[0].length === 3) {
        colorString = [...colorString].map((char) => char + char).join("");
      }
      const integer = Number.parseInt(colorString, 16);
      const r = integer >> 16 & 255;
      const g = integer >> 8 & 255;
      const b = integer & 255;
      return [r, g, b];
    };
    convert.rgb.hcg = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const max = Math.max(Math.max(r, g), b);
      const min = Math.min(Math.min(r, g), b);
      const chroma = max - min;
      let hue;
      const grayscale = chroma < 1 ? min / (1 - chroma) : 0;
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r) {
        hue = (g - b) / chroma % 6;
      } else if (max === g) {
        hue = 2 + (b - r) / chroma;
      } else {
        hue = 4 + (r - g) / chroma;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert.hsl.hcg = function(hsl) {
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
      let f = 0;
      if (c < 1) {
        f = (l - 0.5 * c) / (1 - c);
      }
      return [hsl[0], c * 100, f * 100];
    };
    convert.hsv.hcg = function(hsv) {
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const c = s * v;
      let f = 0;
      if (c < 1) {
        f = (v - c) / (1 - c);
      }
      return [hsv[0], c * 100, f * 100];
    };
    convert.hcg.rgb = function(hcg) {
      const h = hcg[0] / 360;
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      if (c === 0) {
        return [g * 255, g * 255, g * 255];
      }
      const pure = [0, 0, 0];
      const hi = h % 1 * 6;
      const v = hi % 1;
      const w = 1 - v;
      let mg = 0;
      switch (Math.floor(hi)) {
        case 0: {
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        }
        case 1: {
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        }
        case 2: {
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        }
        case 3: {
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        }
        case 4: {
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        }
        default: {
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
        }
      }
      mg = (1 - c) * g;
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      let f = 0;
      if (v > 0) {
        f = c / v;
      }
      return [hcg[0], f * 100, v * 100];
    };
    convert.hcg.hsl = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const l = g * (1 - c) + 0.5 * c;
      let s = 0;
      if (l > 0 && l < 0.5) {
        s = c / (2 * l);
      } else if (l >= 0.5 && l < 1) {
        s = c / (2 * (1 - l));
      }
      return [hcg[0], s * 100, l * 100];
    };
    convert.hcg.hwb = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      return [hcg[0], (v - c) * 100, (1 - v) * 100];
    };
    convert.hwb.hcg = function(hwb) {
      const w = hwb[1] / 100;
      const b = hwb[2] / 100;
      const v = 1 - b;
      const c = v - w;
      let g = 0;
      if (c < 1) {
        g = (v - c) / (1 - c);
      }
      return [hwb[0], c * 100, g * 100];
    };
    convert.apple.rgb = function(apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };
    convert.rgb.apple = function(rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };
    convert.gray.rgb = function(args) {
      return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
    };
    convert.gray.hsl = function(args) {
      return [0, 0, args[0]];
    };
    convert.gray.hsv = convert.gray.hsl;
    convert.gray.hwb = function(gray) {
      return [0, 100, gray[0]];
    };
    convert.gray.cmyk = function(gray) {
      return [0, 0, 0, gray[0]];
    };
    convert.gray.lab = function(gray) {
      return [gray[0], 0, 0];
    };
    convert.gray.hex = function(gray) {
      const value = Math.round(gray[0] / 100 * 255) & 255;
      const integer = (value << 16) + (value << 8) + value;
      const string = integer.toString(16).toUpperCase();
      return "000000".slice(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
      const value = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [value / 255 * 100];
    };
    function buildGraph() {
      const graph = {};
      const models2 = Object.keys(conversions_default);
      for (let { length } = models2, i = 0; i < length; i++) {
        graph[models2[i]] = {
          // http://jsperf.com/1-vs-infinity
          // micro-opt, but this is simple.
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    function deriveBFS(fromModel) {
      const graph = buildGraph();
      const queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length > 0) {
        const current = queue.pop();
        const adjacents = Object.keys(conversions_default[current]);
        for (let { length } = adjacents, i = 0; i < length; i++) {
          const adjacent = adjacents[i];
          const node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    function link(from, to) {
      return function(args) {
        return to(from(args));
      };
    }
    function wrapConversion(toModel, graph) {
      const path2 = [graph[toModel].parent, toModel];
      let fn = conversions_default[graph[toModel].parent][toModel];
      let cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path2.unshift(graph[cur].parent);
        fn = link(conversions_default[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path2;
      return fn;
    }
    function route(fromModel) {
      const graph = deriveBFS(fromModel);
      const conversion = {};
      const models2 = Object.keys(graph);
      for (let { length } = models2, i = 0; i < length; i++) {
        const toModel = models2[i];
        const node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    }
    var route_default = route;
    var convert2 = {};
    var models = Object.keys(conversions_default);
    function wrapRaw(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        return fn(args);
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    function wrapRounded(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        const result = fn(args);
        if (typeof result === "object") {
          for (let { length } = result, i = 0; i < length; i++) {
            result[i] = Math.round(result[i]);
          }
        }
        return result;
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    for (const fromModel of models) {
      convert2[fromModel] = {};
      Object.defineProperty(convert2[fromModel], "channels", { value: conversions_default[fromModel].channels });
      Object.defineProperty(convert2[fromModel], "labels", { value: conversions_default[fromModel].labels });
      const routes = route_default(fromModel);
      const routeModels = Object.keys(routes);
      for (const toModel of routeModels) {
        const fn = routes[toModel];
        convert2[fromModel][toModel] = wrapRounded(fn);
        convert2[fromModel][toModel].raw = wrapRaw(fn);
      }
    }
    var color_convert_default = convert2;
    var skippedModels = [
      // To be honest, I don't really feel like keyword belongs in color convert, but eh.
      "keyword",
      // Gray conflicts with some method names, and has its own method defined.
      "gray",
      // Shouldn't really be in color-convert either...
      "hex"
    ];
    var hashedModelKeys = {};
    for (const model of Object.keys(color_convert_default)) {
      hashedModelKeys[[...color_convert_default[model].labels].sort().join("")] = model;
    }
    var limiters = {};
    function Color(object, model) {
      if (!(this instanceof Color)) {
        return new Color(object, model);
      }
      if (model && model in skippedModels) {
        model = null;
      }
      if (model && !(model in color_convert_default)) {
        throw new Error("Unknown model: " + model);
      }
      let i;
      let channels;
      if (object == null) {
        this.model = "rgb";
        this.color = [0, 0, 0];
        this.valpha = 1;
      } else if (object instanceof Color) {
        this.model = object.model;
        this.color = [...object.color];
        this.valpha = object.valpha;
      } else if (typeof object === "string") {
        const result = color_string_default.get(object);
        if (result === null) {
          throw new Error("Unable to parse color from string: " + object);
        }
        this.model = result.model;
        channels = color_convert_default[this.model].channels;
        this.color = result.value.slice(0, channels);
        this.valpha = typeof result.value[channels] === "number" ? result.value[channels] : 1;
      } else if (object.length > 0) {
        this.model = model || "rgb";
        channels = color_convert_default[this.model].channels;
        const newArray = Array.prototype.slice.call(object, 0, channels);
        this.color = zeroArray(newArray, channels);
        this.valpha = typeof object[channels] === "number" ? object[channels] : 1;
      } else if (typeof object === "number") {
        this.model = "rgb";
        this.color = [
          object >> 16 & 255,
          object >> 8 & 255,
          object & 255
        ];
        this.valpha = 1;
      } else {
        this.valpha = 1;
        const keys = Object.keys(object);
        if ("alpha" in object) {
          keys.splice(keys.indexOf("alpha"), 1);
          this.valpha = typeof object.alpha === "number" ? object.alpha : 0;
        }
        const hashedKeys = keys.sort().join("");
        if (!(hashedKeys in hashedModelKeys)) {
          throw new Error("Unable to parse color from object: " + JSON.stringify(object));
        }
        this.model = hashedModelKeys[hashedKeys];
        const { labels } = color_convert_default[this.model];
        const color = [];
        for (i = 0; i < labels.length; i++) {
          color.push(object[labels[i]]);
        }
        this.color = zeroArray(color);
      }
      if (limiters[this.model]) {
        channels = color_convert_default[this.model].channels;
        for (i = 0; i < channels; i++) {
          const limit = limiters[this.model][i];
          if (limit) {
            this.color[i] = limit(this.color[i]);
          }
        }
      }
      this.valpha = Math.max(0, Math.min(1, this.valpha));
      if (Object.freeze) {
        Object.freeze(this);
      }
    }
    Color.prototype = {
      toString() {
        return this.string();
      },
      toJSON() {
        return this[this.model]();
      },
      string(places) {
        let self = this.model in color_string_default.to ? this : this.rgb();
        self = self.round(typeof places === "number" ? places : 1);
        const arguments_ = self.valpha === 1 ? self.color : [...self.color, this.valpha];
        return color_string_default.to[self.model](...arguments_);
      },
      percentString(places) {
        const self = this.rgb().round(typeof places === "number" ? places : 1);
        const arguments_ = self.valpha === 1 ? self.color : [...self.color, this.valpha];
        return color_string_default.to.rgb.percent(...arguments_);
      },
      array() {
        return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
      },
      object() {
        const result = {};
        const { channels } = color_convert_default[this.model];
        const { labels } = color_convert_default[this.model];
        for (let i = 0; i < channels; i++) {
          result[labels[i]] = this.color[i];
        }
        if (this.valpha !== 1) {
          result.alpha = this.valpha;
        }
        return result;
      },
      unitArray() {
        const rgb = this.rgb().color;
        rgb[0] /= 255;
        rgb[1] /= 255;
        rgb[2] /= 255;
        if (this.valpha !== 1) {
          rgb.push(this.valpha);
        }
        return rgb;
      },
      unitObject() {
        const rgb = this.rgb().object();
        rgb.r /= 255;
        rgb.g /= 255;
        rgb.b /= 255;
        if (this.valpha !== 1) {
          rgb.alpha = this.valpha;
        }
        return rgb;
      },
      round(places) {
        places = Math.max(places || 0, 0);
        return new Color([...this.color.map(roundToPlace(places)), this.valpha], this.model);
      },
      alpha(value) {
        if (value !== void 0) {
          return new Color([...this.color, Math.max(0, Math.min(1, value))], this.model);
        }
        return this.valpha;
      },
      // Rgb
      red: getset("rgb", 0, maxfn(255)),
      green: getset("rgb", 1, maxfn(255)),
      blue: getset("rgb", 2, maxfn(255)),
      hue: getset(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (value) => (value % 360 + 360) % 360),
      saturationl: getset("hsl", 1, maxfn(100)),
      lightness: getset("hsl", 2, maxfn(100)),
      saturationv: getset("hsv", 1, maxfn(100)),
      value: getset("hsv", 2, maxfn(100)),
      chroma: getset("hcg", 1, maxfn(100)),
      gray: getset("hcg", 2, maxfn(100)),
      white: getset("hwb", 1, maxfn(100)),
      wblack: getset("hwb", 2, maxfn(100)),
      cyan: getset("cmyk", 0, maxfn(100)),
      magenta: getset("cmyk", 1, maxfn(100)),
      yellow: getset("cmyk", 2, maxfn(100)),
      black: getset("cmyk", 3, maxfn(100)),
      x: getset("xyz", 0, maxfn(95.047)),
      y: getset("xyz", 1, maxfn(100)),
      z: getset("xyz", 2, maxfn(108.833)),
      l: getset("lab", 0, maxfn(100)),
      a: getset("lab", 1),
      b: getset("lab", 2),
      keyword(value) {
        if (value !== void 0) {
          return new Color(value);
        }
        return color_convert_default[this.model].keyword(this.color);
      },
      hex(value) {
        if (value !== void 0) {
          return new Color(value);
        }
        return color_string_default.to.hex(...this.rgb().round().color);
      },
      hexa(value) {
        if (value !== void 0) {
          return new Color(value);
        }
        const rgbArray = this.rgb().round().color;
        let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
        if (alphaHex.length === 1) {
          alphaHex = "0" + alphaHex;
        }
        return color_string_default.to.hex(...rgbArray) + alphaHex;
      },
      rgbNumber() {
        const rgb = this.rgb().color;
        return (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255;
      },
      luminosity() {
        const rgb = this.rgb().color;
        const lum = [];
        for (const [i, element] of rgb.entries()) {
          const chan = element / 255;
          lum[i] = chan <= 0.04045 ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
        }
        return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
      },
      contrast(color2) {
        const lum1 = this.luminosity();
        const lum2 = color2.luminosity();
        if (lum1 > lum2) {
          return (lum1 + 0.05) / (lum2 + 0.05);
        }
        return (lum2 + 0.05) / (lum1 + 0.05);
      },
      level(color2) {
        const contrastRatio = this.contrast(color2);
        if (contrastRatio >= 7) {
          return "AAA";
        }
        return contrastRatio >= 4.5 ? "AA" : "";
      },
      isDark() {
        const rgb = this.rgb().color;
        const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 1e4;
        return yiq < 128;
      },
      isLight() {
        return !this.isDark();
      },
      negate() {
        const rgb = this.rgb();
        for (let i = 0; i < 3; i++) {
          rgb.color[i] = 255 - rgb.color[i];
        }
        return rgb;
      },
      lighten(ratio) {
        const hsl = this.hsl();
        hsl.color[2] += hsl.color[2] * ratio;
        return hsl;
      },
      darken(ratio) {
        const hsl = this.hsl();
        hsl.color[2] -= hsl.color[2] * ratio;
        return hsl;
      },
      saturate(ratio) {
        const hsl = this.hsl();
        hsl.color[1] += hsl.color[1] * ratio;
        return hsl;
      },
      desaturate(ratio) {
        const hsl = this.hsl();
        hsl.color[1] -= hsl.color[1] * ratio;
        return hsl;
      },
      whiten(ratio) {
        const hwb = this.hwb();
        hwb.color[1] += hwb.color[1] * ratio;
        return hwb;
      },
      blacken(ratio) {
        const hwb = this.hwb();
        hwb.color[2] += hwb.color[2] * ratio;
        return hwb;
      },
      grayscale() {
        const rgb = this.rgb().color;
        const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
        return Color.rgb(value, value, value);
      },
      fade(ratio) {
        return this.alpha(this.valpha - this.valpha * ratio);
      },
      opaquer(ratio) {
        return this.alpha(this.valpha + this.valpha * ratio);
      },
      rotate(degrees) {
        const hsl = this.hsl();
        let hue = hsl.color[0];
        hue = (hue + degrees) % 360;
        hue = hue < 0 ? 360 + hue : hue;
        hsl.color[0] = hue;
        return hsl;
      },
      mix(mixinColor, weight) {
        if (!mixinColor || !mixinColor.rgb) {
          throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
        }
        const color1 = mixinColor.rgb();
        const color2 = this.rgb();
        const p = weight === void 0 ? 0.5 : weight;
        const w = 2 * p - 1;
        const a = color1.alpha() - color2.alpha();
        const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
        const w2 = 1 - w1;
        return Color.rgb(
          w1 * color1.red() + w2 * color2.red(),
          w1 * color1.green() + w2 * color2.green(),
          w1 * color1.blue() + w2 * color2.blue(),
          color1.alpha() * p + color2.alpha() * (1 - p)
        );
      }
    };
    for (const model of Object.keys(color_convert_default)) {
      if (skippedModels.includes(model)) {
        continue;
      }
      const { channels } = color_convert_default[model];
      Color.prototype[model] = function(...arguments_) {
        if (this.model === model) {
          return new Color(this);
        }
        if (arguments_.length > 0) {
          return new Color(arguments_, model);
        }
        return new Color([...assertArray(color_convert_default[this.model][model].raw(this.color)), this.valpha], model);
      };
      Color[model] = function(...arguments_) {
        let color = arguments_[0];
        if (typeof color === "number") {
          color = zeroArray(arguments_, channels);
        }
        return new Color(color, model);
      };
    }
    function roundTo(number, places) {
      return Number(number.toFixed(places));
    }
    function roundToPlace(places) {
      return function(number) {
        return roundTo(number, places);
      };
    }
    function getset(model, channel, modifier) {
      model = Array.isArray(model) ? model : [model];
      for (const m of model) {
        (limiters[m] ||= [])[channel] = modifier;
      }
      model = model[0];
      return function(value) {
        let result;
        if (value !== void 0) {
          if (modifier) {
            value = modifier(value);
          }
          result = this[model]();
          result.color[channel] = value;
          return result;
        }
        result = this[model]().color[channel];
        if (modifier) {
          result = modifier(result);
        }
        return result;
      };
    }
    function maxfn(max) {
      return function(v) {
        return Math.max(0, Math.min(max, v));
      };
    }
    function assertArray(value) {
      return Array.isArray(value) ? value : [value];
    }
    function zeroArray(array, length) {
      for (let i = 0; i < length; i++) {
        if (typeof array[i] !== "number") {
          array[i] = 0;
        }
      }
      return array;
    }
    var index_default = Color;
  }
});

// node_modules/@img/colour/index.cjs
var require_colour = __commonJS({
  "node_modules/@img/colour/index.cjs"(exports2, module2) {
    module2.exports = require_color().default;
  }
});

// node_modules/sharp/lib/colour.js
var require_colour2 = __commonJS({
  "node_modules/sharp/lib/colour.js"(exports2, module2) {
    var color = require_colour();
    var is = require_is();
    var colourspace = {
      multiband: "multiband",
      "b-w": "b-w",
      bw: "b-w",
      cmyk: "cmyk",
      srgb: "srgb"
    };
    function tint(tint2) {
      this._setBackgroundColourOption("tint", tint2);
      return this;
    }
    function greyscale(greyscale2) {
      this.options.greyscale = is.bool(greyscale2) ? greyscale2 : true;
      return this;
    }
    function grayscale(grayscale2) {
      return this.greyscale(grayscale2);
    }
    function pipelineColourspace(colourspace2) {
      if (!is.string(colourspace2)) {
        throw is.invalidParameterError("colourspace", "string", colourspace2);
      }
      this.options.colourspacePipeline = colourspace2;
      return this;
    }
    function pipelineColorspace(colorspace) {
      return this.pipelineColourspace(colorspace);
    }
    function toColourspace(colourspace2) {
      if (!is.string(colourspace2)) {
        throw is.invalidParameterError("colourspace", "string", colourspace2);
      }
      this.options.colourspace = colourspace2;
      return this;
    }
    function toColorspace(colorspace) {
      return this.toColourspace(colorspace);
    }
    function _getBackgroundColourOption(value) {
      if (is.object(value) || is.string(value) && value.length >= 3 && value.length <= 200) {
        const colour = color(value);
        return [
          colour.red(),
          colour.green(),
          colour.blue(),
          Math.round(colour.alpha() * 255)
        ];
      } else {
        throw is.invalidParameterError("background", "object or string", value);
      }
    }
    function _setBackgroundColourOption(key, value) {
      if (is.defined(value)) {
        this.options[key] = _getBackgroundColourOption(value);
      }
    }
    module2.exports = (Sharp) => {
      Object.assign(Sharp.prototype, {
        // Public
        tint,
        greyscale,
        grayscale,
        pipelineColourspace,
        pipelineColorspace,
        toColourspace,
        toColorspace,
        // Private
        _getBackgroundColourOption,
        _setBackgroundColourOption
      });
      Sharp.colourspace = colourspace;
      Sharp.colorspace = colourspace;
    };
  }
});

// node_modules/sharp/lib/channel.js
var require_channel = __commonJS({
  "node_modules/sharp/lib/channel.js"(exports2, module2) {
    var is = require_is();
    var bool = {
      and: "and",
      or: "or",
      eor: "eor"
    };
    function removeAlpha() {
      this.options.removeAlpha = true;
      return this;
    }
    function ensureAlpha(alpha) {
      if (is.defined(alpha)) {
        if (is.number(alpha) && is.inRange(alpha, 0, 1)) {
          this.options.ensureAlpha = alpha;
        } else {
          throw is.invalidParameterError("alpha", "number between 0 and 1", alpha);
        }
      } else {
        this.options.ensureAlpha = 1;
      }
      return this;
    }
    function extractChannel(channel) {
      const channelMap = { red: 0, green: 1, blue: 2, alpha: 3 };
      if (Object.keys(channelMap).includes(channel)) {
        channel = channelMap[channel];
      }
      if (is.integer(channel) && is.inRange(channel, 0, 4)) {
        this.options.extractChannel = channel;
      } else {
        throw is.invalidParameterError("channel", "integer or one of: red, green, blue, alpha", channel);
      }
      return this;
    }
    function joinChannel(images, options) {
      if (Array.isArray(images)) {
        images.forEach(function(image) {
          this.options.joinChannelIn.push(this._createInputDescriptor(image, options));
        }, this);
      } else {
        this.options.joinChannelIn.push(this._createInputDescriptor(images, options));
      }
      return this;
    }
    function bandbool(boolOp) {
      if (is.string(boolOp) && is.inArray(boolOp, ["and", "or", "eor"])) {
        this.options.bandBoolOp = boolOp;
      } else {
        throw is.invalidParameterError("boolOp", "one of: and, or, eor", boolOp);
      }
      return this;
    }
    module2.exports = (Sharp) => {
      Object.assign(Sharp.prototype, {
        // Public instance functions
        removeAlpha,
        ensureAlpha,
        extractChannel,
        joinChannel,
        bandbool
      });
      Sharp.bool = bool;
    };
  }
});

// node_modules/sharp/lib/output.js
var require_output = __commonJS({
  "node_modules/sharp/lib/output.js"(exports2, module2) {
    var path2 = require("node:path");
    var is = require_is();
    var sharp = require_sharp();
    var formats = /* @__PURE__ */ new Map([
      ["heic", "heif"],
      ["heif", "heif"],
      ["avif", "avif"],
      ["jpeg", "jpeg"],
      ["jpg", "jpeg"],
      ["jpe", "jpeg"],
      ["tile", "tile"],
      ["dz", "tile"],
      ["png", "png"],
      ["raw", "raw"],
      ["tiff", "tiff"],
      ["tif", "tiff"],
      ["webp", "webp"],
      ["gif", "gif"],
      ["jp2", "jp2"],
      ["jpx", "jp2"],
      ["j2k", "jp2"],
      ["j2c", "jp2"],
      ["jxl", "jxl"]
    ]);
    var jp2Regex = /\.(jp[2x]|j2[kc])$/i;
    var errJp2Save = () => new Error("JP2 output requires libvips with support for OpenJPEG");
    var bitdepthFromColourCount = (colours) => 1 << 31 - Math.clz32(Math.ceil(Math.log2(colours)));
    function toFile(fileOut, callback) {
      let err;
      if (!is.string(fileOut)) {
        err = new Error("Missing output file path");
      } else if (is.string(this.options.input.file) && path2.resolve(this.options.input.file) === path2.resolve(fileOut)) {
        err = new Error("Cannot use same file for input and output");
      } else if (jp2Regex.test(path2.extname(fileOut)) && !this.constructor.format.jp2k.output.file) {
        err = errJp2Save();
      }
      if (err) {
        if (is.fn(callback)) {
          callback(err);
        } else {
          return Promise.reject(err);
        }
      } else {
        this.options.fileOut = fileOut;
        const stack = Error();
        return this._pipeline(callback, stack);
      }
      return this;
    }
    function toBuffer(options, callback) {
      if (is.object(options)) {
        this._setBooleanOption("resolveWithObject", options.resolveWithObject);
      } else if (this.options.resolveWithObject) {
        this.options.resolveWithObject = false;
      }
      this.options.fileOut = "";
      const stack = Error();
      return this._pipeline(is.fn(options) ? options : callback, stack);
    }
    function keepExif() {
      this.options.keepMetadata |= 1;
      return this;
    }
    function withExif(exif) {
      if (is.object(exif)) {
        for (const [ifd, entries] of Object.entries(exif)) {
          if (is.object(entries)) {
            for (const [k, v] of Object.entries(entries)) {
              if (is.string(v)) {
                this.options.withExif[`exif-${ifd.toLowerCase()}-${k}`] = v;
              } else {
                throw is.invalidParameterError(`${ifd}.${k}`, "string", v);
              }
            }
          } else {
            throw is.invalidParameterError(ifd, "object", entries);
          }
        }
      } else {
        throw is.invalidParameterError("exif", "object", exif);
      }
      this.options.withExifMerge = false;
      return this.keepExif();
    }
    function withExifMerge(exif) {
      this.withExif(exif);
      this.options.withExifMerge = true;
      return this;
    }
    function keepIccProfile() {
      this.options.keepMetadata |= 8;
      return this;
    }
    function withIccProfile(icc, options) {
      if (is.string(icc)) {
        this.options.withIccProfile = icc;
      } else {
        throw is.invalidParameterError("icc", "string", icc);
      }
      this.keepIccProfile();
      if (is.object(options)) {
        if (is.defined(options.attach)) {
          if (is.bool(options.attach)) {
            if (!options.attach) {
              this.options.keepMetadata &= ~8;
            }
          } else {
            throw is.invalidParameterError("attach", "boolean", options.attach);
          }
        }
      }
      return this;
    }
    function keepXmp() {
      this.options.keepMetadata |= 2;
      return this;
    }
    function withXmp(xmp) {
      if (is.string(xmp) && xmp.length > 0) {
        this.options.withXmp = xmp;
        this.options.keepMetadata |= 2;
      } else {
        throw is.invalidParameterError("xmp", "non-empty string", xmp);
      }
      return this;
    }
    function keepMetadata() {
      this.options.keepMetadata = 31;
      return this;
    }
    function withMetadata(options) {
      this.keepMetadata();
      this.withIccProfile("srgb");
      if (is.object(options)) {
        if (is.defined(options.orientation)) {
          if (is.integer(options.orientation) && is.inRange(options.orientation, 1, 8)) {
            this.options.withMetadataOrientation = options.orientation;
          } else {
            throw is.invalidParameterError("orientation", "integer between 1 and 8", options.orientation);
          }
        }
        if (is.defined(options.density)) {
          if (is.number(options.density) && options.density > 0) {
            this.options.withMetadataDensity = options.density;
          } else {
            throw is.invalidParameterError("density", "positive number", options.density);
          }
        }
        if (is.defined(options.icc)) {
          this.withIccProfile(options.icc);
        }
        if (is.defined(options.exif)) {
          this.withExifMerge(options.exif);
        }
      }
      return this;
    }
    function toFormat(format, options) {
      const actualFormat = formats.get((is.object(format) && is.string(format.id) ? format.id : format).toLowerCase());
      if (!actualFormat) {
        throw is.invalidParameterError("format", `one of: ${[...formats.keys()].join(", ")}`, format);
      }
      return this[actualFormat](options);
    }
    function jpeg(options) {
      if (is.object(options)) {
        if (is.defined(options.quality)) {
          if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
            this.options.jpegQuality = options.quality;
          } else {
            throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
          }
        }
        if (is.defined(options.progressive)) {
          this._setBooleanOption("jpegProgressive", options.progressive);
        }
        if (is.defined(options.chromaSubsampling)) {
          if (is.string(options.chromaSubsampling) && is.inArray(options.chromaSubsampling, ["4:2:0", "4:4:4"])) {
            this.options.jpegChromaSubsampling = options.chromaSubsampling;
          } else {
            throw is.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", options.chromaSubsampling);
          }
        }
        const optimiseCoding = is.bool(options.optimizeCoding) ? options.optimizeCoding : options.optimiseCoding;
        if (is.defined(optimiseCoding)) {
          this._setBooleanOption("jpegOptimiseCoding", optimiseCoding);
        }
        if (is.defined(options.mozjpeg)) {
          if (is.bool(options.mozjpeg)) {
            if (options.mozjpeg) {
              this.options.jpegTrellisQuantisation = true;
              this.options.jpegOvershootDeringing = true;
              this.options.jpegOptimiseScans = true;
              this.options.jpegProgressive = true;
              this.options.jpegQuantisationTable = 3;
            }
          } else {
            throw is.invalidParameterError("mozjpeg", "boolean", options.mozjpeg);
          }
        }
        const trellisQuantisation = is.bool(options.trellisQuantization) ? options.trellisQuantization : options.trellisQuantisation;
        if (is.defined(trellisQuantisation)) {
          this._setBooleanOption("jpegTrellisQuantisation", trellisQuantisation);
        }
        if (is.defined(options.overshootDeringing)) {
          this._setBooleanOption("jpegOvershootDeringing", options.overshootDeringing);
        }
        const optimiseScans = is.bool(options.optimizeScans) ? options.optimizeScans : options.optimiseScans;
        if (is.defined(optimiseScans)) {
          this._setBooleanOption("jpegOptimiseScans", optimiseScans);
          if (optimiseScans) {
            this.options.jpegProgressive = true;
          }
        }
        const quantisationTable = is.number(options.quantizationTable) ? options.quantizationTable : options.quantisationTable;
        if (is.defined(quantisationTable)) {
          if (is.integer(quantisationTable) && is.inRange(quantisationTable, 0, 8)) {
            this.options.jpegQuantisationTable = quantisationTable;
          } else {
            throw is.invalidParameterError("quantisationTable", "integer between 0 and 8", quantisationTable);
          }
        }
      }
      return this._updateFormatOut("jpeg", options);
    }
    function png(options) {
      if (is.object(options)) {
        if (is.defined(options.progressive)) {
          this._setBooleanOption("pngProgressive", options.progressive);
        }
        if (is.defined(options.compressionLevel)) {
          if (is.integer(options.compressionLevel) && is.inRange(options.compressionLevel, 0, 9)) {
            this.options.pngCompressionLevel = options.compressionLevel;
          } else {
            throw is.invalidParameterError("compressionLevel", "integer between 0 and 9", options.compressionLevel);
          }
        }
        if (is.defined(options.adaptiveFiltering)) {
          this._setBooleanOption("pngAdaptiveFiltering", options.adaptiveFiltering);
        }
        const colours = options.colours || options.colors;
        if (is.defined(colours)) {
          if (is.integer(colours) && is.inRange(colours, 2, 256)) {
            this.options.pngBitdepth = bitdepthFromColourCount(colours);
          } else {
            throw is.invalidParameterError("colours", "integer between 2 and 256", colours);
          }
        }
        if (is.defined(options.palette)) {
          this._setBooleanOption("pngPalette", options.palette);
        } else if ([options.quality, options.effort, options.colours, options.colors, options.dither].some(is.defined)) {
          this._setBooleanOption("pngPalette", true);
        }
        if (this.options.pngPalette) {
          if (is.defined(options.quality)) {
            if (is.integer(options.quality) && is.inRange(options.quality, 0, 100)) {
              this.options.pngQuality = options.quality;
            } else {
              throw is.invalidParameterError("quality", "integer between 0 and 100", options.quality);
            }
          }
          if (is.defined(options.effort)) {
            if (is.integer(options.effort) && is.inRange(options.effort, 1, 10)) {
              this.options.pngEffort = options.effort;
            } else {
              throw is.invalidParameterError("effort", "integer between 1 and 10", options.effort);
            }
          }
          if (is.defined(options.dither)) {
            if (is.number(options.dither) && is.inRange(options.dither, 0, 1)) {
              this.options.pngDither = options.dither;
            } else {
              throw is.invalidParameterError("dither", "number between 0.0 and 1.0", options.dither);
            }
          }
        }
      }
      return this._updateFormatOut("png", options);
    }
    function webp(options) {
      if (is.object(options)) {
        if (is.defined(options.quality)) {
          if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
            this.options.webpQuality = options.quality;
          } else {
            throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
          }
        }
        if (is.defined(options.alphaQuality)) {
          if (is.integer(options.alphaQuality) && is.inRange(options.alphaQuality, 0, 100)) {
            this.options.webpAlphaQuality = options.alphaQuality;
          } else {
            throw is.invalidParameterError("alphaQuality", "integer between 0 and 100", options.alphaQuality);
          }
        }
        if (is.defined(options.lossless)) {
          this._setBooleanOption("webpLossless", options.lossless);
        }
        if (is.defined(options.nearLossless)) {
          this._setBooleanOption("webpNearLossless", options.nearLossless);
        }
        if (is.defined(options.smartSubsample)) {
          this._setBooleanOption("webpSmartSubsample", options.smartSubsample);
        }
        if (is.defined(options.smartDeblock)) {
          this._setBooleanOption("webpSmartDeblock", options.smartDeblock);
        }
        if (is.defined(options.preset)) {
          if (is.string(options.preset) && is.inArray(options.preset, ["default", "photo", "picture", "drawing", "icon", "text"])) {
            this.options.webpPreset = options.preset;
          } else {
            throw is.invalidParameterError("preset", "one of: default, photo, picture, drawing, icon, text", options.preset);
          }
        }
        if (is.defined(options.effort)) {
          if (is.integer(options.effort) && is.inRange(options.effort, 0, 6)) {
            this.options.webpEffort = options.effort;
          } else {
            throw is.invalidParameterError("effort", "integer between 0 and 6", options.effort);
          }
        }
        if (is.defined(options.minSize)) {
          this._setBooleanOption("webpMinSize", options.minSize);
        }
        if (is.defined(options.mixed)) {
          this._setBooleanOption("webpMixed", options.mixed);
        }
      }
      trySetAnimationOptions(options, this.options);
      return this._updateFormatOut("webp", options);
    }
    function gif(options) {
      if (is.object(options)) {
        if (is.defined(options.reuse)) {
          this._setBooleanOption("gifReuse", options.reuse);
        }
        if (is.defined(options.progressive)) {
          this._setBooleanOption("gifProgressive", options.progressive);
        }
        const colours = options.colours || options.colors;
        if (is.defined(colours)) {
          if (is.integer(colours) && is.inRange(colours, 2, 256)) {
            this.options.gifBitdepth = bitdepthFromColourCount(colours);
          } else {
            throw is.invalidParameterError("colours", "integer between 2 and 256", colours);
          }
        }
        if (is.defined(options.effort)) {
          if (is.number(options.effort) && is.inRange(options.effort, 1, 10)) {
            this.options.gifEffort = options.effort;
          } else {
            throw is.invalidParameterError("effort", "integer between 1 and 10", options.effort);
          }
        }
        if (is.defined(options.dither)) {
          if (is.number(options.dither) && is.inRange(options.dither, 0, 1)) {
            this.options.gifDither = options.dither;
          } else {
            throw is.invalidParameterError("dither", "number between 0.0 and 1.0", options.dither);
          }
        }
        if (is.defined(options.interFrameMaxError)) {
          if (is.number(options.interFrameMaxError) && is.inRange(options.interFrameMaxError, 0, 32)) {
            this.options.gifInterFrameMaxError = options.interFrameMaxError;
          } else {
            throw is.invalidParameterError("interFrameMaxError", "number between 0.0 and 32.0", options.interFrameMaxError);
          }
        }
        if (is.defined(options.interPaletteMaxError)) {
          if (is.number(options.interPaletteMaxError) && is.inRange(options.interPaletteMaxError, 0, 256)) {
            this.options.gifInterPaletteMaxError = options.interPaletteMaxError;
          } else {
            throw is.invalidParameterError("interPaletteMaxError", "number between 0.0 and 256.0", options.interPaletteMaxError);
          }
        }
        if (is.defined(options.keepDuplicateFrames)) {
          if (is.bool(options.keepDuplicateFrames)) {
            this._setBooleanOption("gifKeepDuplicateFrames", options.keepDuplicateFrames);
          } else {
            throw is.invalidParameterError("keepDuplicateFrames", "boolean", options.keepDuplicateFrames);
          }
        }
      }
      trySetAnimationOptions(options, this.options);
      return this._updateFormatOut("gif", options);
    }
    function jp2(options) {
      if (!this.constructor.format.jp2k.output.buffer) {
        throw errJp2Save();
      }
      if (is.object(options)) {
        if (is.defined(options.quality)) {
          if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
            this.options.jp2Quality = options.quality;
          } else {
            throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
          }
        }
        if (is.defined(options.lossless)) {
          if (is.bool(options.lossless)) {
            this.options.jp2Lossless = options.lossless;
          } else {
            throw is.invalidParameterError("lossless", "boolean", options.lossless);
          }
        }
        if (is.defined(options.tileWidth)) {
          if (is.integer(options.tileWidth) && is.inRange(options.tileWidth, 1, 32768)) {
            this.options.jp2TileWidth = options.tileWidth;
          } else {
            throw is.invalidParameterError("tileWidth", "integer between 1 and 32768", options.tileWidth);
          }
        }
        if (is.defined(options.tileHeight)) {
          if (is.integer(options.tileHeight) && is.inRange(options.tileHeight, 1, 32768)) {
            this.options.jp2TileHeight = options.tileHeight;
          } else {
            throw is.invalidParameterError("tileHeight", "integer between 1 and 32768", options.tileHeight);
          }
        }
        if (is.defined(options.chromaSubsampling)) {
          if (is.string(options.chromaSubsampling) && is.inArray(options.chromaSubsampling, ["4:2:0", "4:4:4"])) {
            this.options.jp2ChromaSubsampling = options.chromaSubsampling;
          } else {
            throw is.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", options.chromaSubsampling);
          }
        }
      }
      return this._updateFormatOut("jp2", options);
    }
    function trySetAnimationOptions(source, target) {
      if (is.object(source) && is.defined(source.loop)) {
        if (is.integer(source.loop) && is.inRange(source.loop, 0, 65535)) {
          target.loop = source.loop;
        } else {
          throw is.invalidParameterError("loop", "integer between 0 and 65535", source.loop);
        }
      }
      if (is.object(source) && is.defined(source.delay)) {
        if (is.integer(source.delay) && is.inRange(source.delay, 0, 65535)) {
          target.delay = [source.delay];
        } else if (Array.isArray(source.delay) && source.delay.every(is.integer) && source.delay.every((v) => is.inRange(v, 0, 65535))) {
          target.delay = source.delay;
        } else {
          throw is.invalidParameterError("delay", "integer or an array of integers between 0 and 65535", source.delay);
        }
      }
    }
    function tiff(options) {
      if (is.object(options)) {
        if (is.defined(options.quality)) {
          if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
            this.options.tiffQuality = options.quality;
          } else {
            throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
          }
        }
        if (is.defined(options.bitdepth)) {
          if (is.integer(options.bitdepth) && is.inArray(options.bitdepth, [1, 2, 4, 8])) {
            this.options.tiffBitdepth = options.bitdepth;
          } else {
            throw is.invalidParameterError("bitdepth", "1, 2, 4 or 8", options.bitdepth);
          }
        }
        if (is.defined(options.tile)) {
          this._setBooleanOption("tiffTile", options.tile);
        }
        if (is.defined(options.tileWidth)) {
          if (is.integer(options.tileWidth) && options.tileWidth > 0) {
            this.options.tiffTileWidth = options.tileWidth;
          } else {
            throw is.invalidParameterError("tileWidth", "integer greater than zero", options.tileWidth);
          }
        }
        if (is.defined(options.tileHeight)) {
          if (is.integer(options.tileHeight) && options.tileHeight > 0) {
            this.options.tiffTileHeight = options.tileHeight;
          } else {
            throw is.invalidParameterError("tileHeight", "integer greater than zero", options.tileHeight);
          }
        }
        if (is.defined(options.miniswhite)) {
          this._setBooleanOption("tiffMiniswhite", options.miniswhite);
        }
        if (is.defined(options.pyramid)) {
          this._setBooleanOption("tiffPyramid", options.pyramid);
        }
        if (is.defined(options.xres)) {
          if (is.number(options.xres) && options.xres > 0) {
            this.options.tiffXres = options.xres;
          } else {
            throw is.invalidParameterError("xres", "number greater than zero", options.xres);
          }
        }
        if (is.defined(options.yres)) {
          if (is.number(options.yres) && options.yres > 0) {
            this.options.tiffYres = options.yres;
          } else {
            throw is.invalidParameterError("yres", "number greater than zero", options.yres);
          }
        }
        if (is.defined(options.compression)) {
          if (is.string(options.compression) && is.inArray(options.compression, ["none", "jpeg", "deflate", "packbits", "ccittfax4", "lzw", "webp", "zstd", "jp2k"])) {
            this.options.tiffCompression = options.compression;
          } else {
            throw is.invalidParameterError("compression", "one of: none, jpeg, deflate, packbits, ccittfax4, lzw, webp, zstd, jp2k", options.compression);
          }
        }
        if (is.defined(options.bigtiff)) {
          this._setBooleanOption("tiffBigtiff", options.bigtiff);
        }
        if (is.defined(options.predictor)) {
          if (is.string(options.predictor) && is.inArray(options.predictor, ["none", "horizontal", "float"])) {
            this.options.tiffPredictor = options.predictor;
          } else {
            throw is.invalidParameterError("predictor", "one of: none, horizontal, float", options.predictor);
          }
        }
        if (is.defined(options.resolutionUnit)) {
          if (is.string(options.resolutionUnit) && is.inArray(options.resolutionUnit, ["inch", "cm"])) {
            this.options.tiffResolutionUnit = options.resolutionUnit;
          } else {
            throw is.invalidParameterError("resolutionUnit", "one of: inch, cm", options.resolutionUnit);
          }
        }
      }
      return this._updateFormatOut("tiff", options);
    }
    function avif(options) {
      return this.heif({ ...options, compression: "av1" });
    }
    function heif(options) {
      if (is.object(options)) {
        if (is.string(options.compression) && is.inArray(options.compression, ["av1", "hevc"])) {
          this.options.heifCompression = options.compression;
        } else {
          throw is.invalidParameterError("compression", "one of: av1, hevc", options.compression);
        }
        if (is.defined(options.quality)) {
          if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
            this.options.heifQuality = options.quality;
          } else {
            throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
          }
        }
        if (is.defined(options.lossless)) {
          if (is.bool(options.lossless)) {
            this.options.heifLossless = options.lossless;
          } else {
            throw is.invalidParameterError("lossless", "boolean", options.lossless);
          }
        }
        if (is.defined(options.effort)) {
          if (is.integer(options.effort) && is.inRange(options.effort, 0, 9)) {
            this.options.heifEffort = options.effort;
          } else {
            throw is.invalidParameterError("effort", "integer between 0 and 9", options.effort);
          }
        }
        if (is.defined(options.chromaSubsampling)) {
          if (is.string(options.chromaSubsampling) && is.inArray(options.chromaSubsampling, ["4:2:0", "4:4:4"])) {
            this.options.heifChromaSubsampling = options.chromaSubsampling;
          } else {
            throw is.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", options.chromaSubsampling);
          }
        }
        if (is.defined(options.bitdepth)) {
          if (is.integer(options.bitdepth) && is.inArray(options.bitdepth, [8, 10, 12])) {
            if (options.bitdepth !== 8 && this.constructor.versions.heif) {
              throw is.invalidParameterError("bitdepth when using prebuilt binaries", 8, options.bitdepth);
            }
            this.options.heifBitdepth = options.bitdepth;
          } else {
            throw is.invalidParameterError("bitdepth", "8, 10 or 12", options.bitdepth);
          }
        }
      } else {
        throw is.invalidParameterError("options", "Object", options);
      }
      return this._updateFormatOut("heif", options);
    }
    function jxl(options) {
      if (is.object(options)) {
        if (is.defined(options.quality)) {
          if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
            this.options.jxlDistance = options.quality >= 30 ? 0.1 + (100 - options.quality) * 0.09 : 53 / 3e3 * options.quality * options.quality - 23 / 20 * options.quality + 25;
          } else {
            throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
          }
        } else if (is.defined(options.distance)) {
          if (is.number(options.distance) && is.inRange(options.distance, 0, 15)) {
            this.options.jxlDistance = options.distance;
          } else {
            throw is.invalidParameterError("distance", "number between 0.0 and 15.0", options.distance);
          }
        }
        if (is.defined(options.decodingTier)) {
          if (is.integer(options.decodingTier) && is.inRange(options.decodingTier, 0, 4)) {
            this.options.jxlDecodingTier = options.decodingTier;
          } else {
            throw is.invalidParameterError("decodingTier", "integer between 0 and 4", options.decodingTier);
          }
        }
        if (is.defined(options.lossless)) {
          if (is.bool(options.lossless)) {
            this.options.jxlLossless = options.lossless;
          } else {
            throw is.invalidParameterError("lossless", "boolean", options.lossless);
          }
        }
        if (is.defined(options.effort)) {
          if (is.integer(options.effort) && is.inRange(options.effort, 1, 9)) {
            this.options.jxlEffort = options.effort;
          } else {
            throw is.invalidParameterError("effort", "integer between 1 and 9", options.effort);
          }
        }
      }
      trySetAnimationOptions(options, this.options);
      return this._updateFormatOut("jxl", options);
    }
    function raw(options) {
      if (is.object(options)) {
        if (is.defined(options.depth)) {
          if (is.string(options.depth) && is.inArray(
            options.depth,
            ["char", "uchar", "short", "ushort", "int", "uint", "float", "complex", "double", "dpcomplex"]
          )) {
            this.options.rawDepth = options.depth;
          } else {
            throw is.invalidParameterError("depth", "one of: char, uchar, short, ushort, int, uint, float, complex, double, dpcomplex", options.depth);
          }
        }
      }
      return this._updateFormatOut("raw");
    }
    function tile(options) {
      if (is.object(options)) {
        if (is.defined(options.size)) {
          if (is.integer(options.size) && is.inRange(options.size, 1, 8192)) {
            this.options.tileSize = options.size;
          } else {
            throw is.invalidParameterError("size", "integer between 1 and 8192", options.size);
          }
        }
        if (is.defined(options.overlap)) {
          if (is.integer(options.overlap) && is.inRange(options.overlap, 0, 8192)) {
            if (options.overlap > this.options.tileSize) {
              throw is.invalidParameterError("overlap", `<= size (${this.options.tileSize})`, options.overlap);
            }
            this.options.tileOverlap = options.overlap;
          } else {
            throw is.invalidParameterError("overlap", "integer between 0 and 8192", options.overlap);
          }
        }
        if (is.defined(options.container)) {
          if (is.string(options.container) && is.inArray(options.container, ["fs", "zip"])) {
            this.options.tileContainer = options.container;
          } else {
            throw is.invalidParameterError("container", "one of: fs, zip", options.container);
          }
        }
        if (is.defined(options.layout)) {
          if (is.string(options.layout) && is.inArray(options.layout, ["dz", "google", "iiif", "iiif3", "zoomify"])) {
            this.options.tileLayout = options.layout;
          } else {
            throw is.invalidParameterError("layout", "one of: dz, google, iiif, iiif3, zoomify", options.layout);
          }
        }
        if (is.defined(options.angle)) {
          if (is.integer(options.angle) && !(options.angle % 90)) {
            this.options.tileAngle = options.angle;
          } else {
            throw is.invalidParameterError("angle", "positive/negative multiple of 90", options.angle);
          }
        }
        this._setBackgroundColourOption("tileBackground", options.background);
        if (is.defined(options.depth)) {
          if (is.string(options.depth) && is.inArray(options.depth, ["onepixel", "onetile", "one"])) {
            this.options.tileDepth = options.depth;
          } else {
            throw is.invalidParameterError("depth", "one of: onepixel, onetile, one", options.depth);
          }
        }
        if (is.defined(options.skipBlanks)) {
          if (is.integer(options.skipBlanks) && is.inRange(options.skipBlanks, -1, 65535)) {
            this.options.tileSkipBlanks = options.skipBlanks;
          } else {
            throw is.invalidParameterError("skipBlanks", "integer between -1 and 255/65535", options.skipBlanks);
          }
        } else if (is.defined(options.layout) && options.layout === "google") {
          this.options.tileSkipBlanks = 5;
        }
        const centre = is.bool(options.center) ? options.center : options.centre;
        if (is.defined(centre)) {
          this._setBooleanOption("tileCentre", centre);
        }
        if (is.defined(options.id)) {
          if (is.string(options.id)) {
            this.options.tileId = options.id;
          } else {
            throw is.invalidParameterError("id", "string", options.id);
          }
        }
        if (is.defined(options.basename)) {
          if (is.string(options.basename)) {
            this.options.tileBasename = options.basename;
          } else {
            throw is.invalidParameterError("basename", "string", options.basename);
          }
        }
      }
      if (is.inArray(this.options.formatOut, ["jpeg", "png", "webp"])) {
        this.options.tileFormat = this.options.formatOut;
      } else if (this.options.formatOut !== "input") {
        throw is.invalidParameterError("format", "one of: jpeg, png, webp", this.options.formatOut);
      }
      return this._updateFormatOut("dz");
    }
    function timeout(options) {
      if (!is.plainObject(options)) {
        throw is.invalidParameterError("options", "object", options);
      }
      if (is.integer(options.seconds) && is.inRange(options.seconds, 0, 3600)) {
        this.options.timeoutSeconds = options.seconds;
      } else {
        throw is.invalidParameterError("seconds", "integer between 0 and 3600", options.seconds);
      }
      return this;
    }
    function _updateFormatOut(formatOut, options) {
      if (!(is.object(options) && options.force === false)) {
        this.options.formatOut = formatOut;
      }
      return this;
    }
    function _setBooleanOption(key, val) {
      if (is.bool(val)) {
        this.options[key] = val;
      } else {
        throw is.invalidParameterError(key, "boolean", val);
      }
    }
    function _read() {
      if (!this.options.streamOut) {
        this.options.streamOut = true;
        const stack = Error();
        this._pipeline(void 0, stack);
      }
    }
    function _pipeline(callback, stack) {
      if (typeof callback === "function") {
        if (this._isStreamInput()) {
          this.on("finish", () => {
            this._flattenBufferIn();
            sharp.pipeline(this.options, (err, data, info) => {
              if (err) {
                callback(is.nativeError(err, stack));
              } else {
                callback(null, data, info);
              }
            });
          });
        } else {
          sharp.pipeline(this.options, (err, data, info) => {
            if (err) {
              callback(is.nativeError(err, stack));
            } else {
              callback(null, data, info);
            }
          });
        }
        return this;
      } else if (this.options.streamOut) {
        if (this._isStreamInput()) {
          this.once("finish", () => {
            this._flattenBufferIn();
            sharp.pipeline(this.options, (err, data, info) => {
              if (err) {
                this.emit("error", is.nativeError(err, stack));
              } else {
                this.emit("info", info);
                this.push(data);
              }
              this.push(null);
              this.on("end", () => this.emit("close"));
            });
          });
          if (this.streamInFinished) {
            this.emit("finish");
          }
        } else {
          sharp.pipeline(this.options, (err, data, info) => {
            if (err) {
              this.emit("error", is.nativeError(err, stack));
            } else {
              this.emit("info", info);
              this.push(data);
            }
            this.push(null);
            this.on("end", () => this.emit("close"));
          });
        }
        return this;
      } else {
        if (this._isStreamInput()) {
          return new Promise((resolve, reject) => {
            this.once("finish", () => {
              this._flattenBufferIn();
              sharp.pipeline(this.options, (err, data, info) => {
                if (err) {
                  reject(is.nativeError(err, stack));
                } else {
                  if (this.options.resolveWithObject) {
                    resolve({ data, info });
                  } else {
                    resolve(data);
                  }
                }
              });
            });
          });
        } else {
          return new Promise((resolve, reject) => {
            sharp.pipeline(this.options, (err, data, info) => {
              if (err) {
                reject(is.nativeError(err, stack));
              } else {
                if (this.options.resolveWithObject) {
                  resolve({ data, info });
                } else {
                  resolve(data);
                }
              }
            });
          });
        }
      }
    }
    module2.exports = (Sharp) => {
      Object.assign(Sharp.prototype, {
        // Public
        toFile,
        toBuffer,
        keepExif,
        withExif,
        withExifMerge,
        keepIccProfile,
        withIccProfile,
        keepXmp,
        withXmp,
        keepMetadata,
        withMetadata,
        toFormat,
        jpeg,
        jp2,
        png,
        webp,
        tiff,
        avif,
        heif,
        jxl,
        gif,
        raw,
        tile,
        timeout,
        // Private
        _updateFormatOut,
        _setBooleanOption,
        _read,
        _pipeline
      });
    };
  }
});

// node_modules/sharp/lib/utility.js
var require_utility = __commonJS({
  "node_modules/sharp/lib/utility.js"(exports2, module2) {
    var events = require("node:events");
    var detectLibc = require_detect_libc();
    var is = require_is();
    var { runtimePlatformArch } = require_libvips();
    var sharp = require_sharp();
    var runtimePlatform = runtimePlatformArch();
    var libvipsVersion = sharp.libvipsVersion();
    var format = sharp.format();
    format.heif.output.alias = ["avif", "heic"];
    format.jpeg.output.alias = ["jpe", "jpg"];
    format.tiff.output.alias = ["tif"];
    format.jp2k.output.alias = ["j2c", "j2k", "jp2", "jpx"];
    var interpolators = {
      /** [Nearest neighbour interpolation](http://en.wikipedia.org/wiki/Nearest-neighbor_interpolation). Suitable for image enlargement only. */
      nearest: "nearest",
      /** [Bilinear interpolation](http://en.wikipedia.org/wiki/Bilinear_interpolation). Faster than bicubic but with less smooth results. */
      bilinear: "bilinear",
      /** [Bicubic interpolation](http://en.wikipedia.org/wiki/Bicubic_interpolation) (the default). */
      bicubic: "bicubic",
      /** [LBB interpolation](https://github.com/libvips/libvips/blob/master/libvips/resample/lbb.cpp#L100). Prevents some "[acutance](http://en.wikipedia.org/wiki/Acutance)" but typically reduces performance by a factor of 2. */
      locallyBoundedBicubic: "lbb",
      /** [Nohalo interpolation](http://eprints.soton.ac.uk/268086/). Prevents acutance but typically reduces performance by a factor of 3. */
      nohalo: "nohalo",
      /** [VSQBS interpolation](https://github.com/libvips/libvips/blob/master/libvips/resample/vsqbs.cpp#L48). Prevents "staircasing" when enlarging. */
      vertexSplitQuadraticBasisSpline: "vsqbs"
    };
    var versions = {
      vips: libvipsVersion.semver
    };
    if (!libvipsVersion.isGlobal) {
      if (!libvipsVersion.isWasm) {
        try {
          versions = require(`@img/sharp-${runtimePlatform}/versions`);
        } catch (_) {
          try {
            versions = require(`@img/sharp-libvips-${runtimePlatform}/versions`);
          } catch (_2) {
          }
        }
      } else {
        try {
          versions = require("@img/sharp-wasm32/versions");
        } catch (_) {
        }
      }
    }
    versions.sharp = require_package().version;
    if (versions.heif && format.heif) {
      format.heif.input.fileSuffix = [".avif"];
      format.heif.output.alias = ["avif"];
    }
    function cache(options) {
      if (is.bool(options)) {
        if (options) {
          return sharp.cache(50, 20, 100);
        } else {
          return sharp.cache(0, 0, 0);
        }
      } else if (is.object(options)) {
        return sharp.cache(options.memory, options.files, options.items);
      } else {
        return sharp.cache();
      }
    }
    cache(true);
    function concurrency(concurrency2) {
      return sharp.concurrency(is.integer(concurrency2) ? concurrency2 : null);
    }
    if (detectLibc.familySync() === detectLibc.GLIBC && !sharp._isUsingJemalloc()) {
      sharp.concurrency(1);
    } else if (detectLibc.familySync() === detectLibc.MUSL && sharp.concurrency() === 1024) {
      sharp.concurrency(require("node:os").availableParallelism());
    }
    var queue = new events.EventEmitter();
    function counters() {
      return sharp.counters();
    }
    function simd(simd2) {
      return sharp.simd(is.bool(simd2) ? simd2 : null);
    }
    function block(options) {
      if (is.object(options)) {
        if (Array.isArray(options.operation) && options.operation.every(is.string)) {
          sharp.block(options.operation, true);
        } else {
          throw is.invalidParameterError("operation", "Array<string>", options.operation);
        }
      } else {
        throw is.invalidParameterError("options", "object", options);
      }
    }
    function unblock(options) {
      if (is.object(options)) {
        if (Array.isArray(options.operation) && options.operation.every(is.string)) {
          sharp.block(options.operation, false);
        } else {
          throw is.invalidParameterError("operation", "Array<string>", options.operation);
        }
      } else {
        throw is.invalidParameterError("options", "object", options);
      }
    }
    module2.exports = (Sharp) => {
      Sharp.cache = cache;
      Sharp.concurrency = concurrency;
      Sharp.counters = counters;
      Sharp.simd = simd;
      Sharp.format = format;
      Sharp.interpolators = interpolators;
      Sharp.versions = versions;
      Sharp.queue = queue;
      Sharp.block = block;
      Sharp.unblock = unblock;
    };
  }
});

// node_modules/sharp/lib/index.js
var require_lib = __commonJS({
  "node_modules/sharp/lib/index.js"(exports2, module2) {
    var Sharp = require_constructor();
    require_input()(Sharp);
    require_resize()(Sharp);
    require_composite()(Sharp);
    require_operation()(Sharp);
    require_colour2()(Sharp);
    require_channel()(Sharp);
    require_output()(Sharp);
    require_utility()(Sharp);
    module2.exports = Sharp;
  }
});

// offline/main.tsx
var import_node_fs = __toESM(require("node:fs"));
var import_node_path = __toESM(require("node:path"));
var import_node_child_process = require("node:child_process");
var import_react2 = __toESM(require_react());
var import_server = __toESM(require_server_node());

// offline/shim.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var state = {
  frame: 0,
  width: 1920,
  height: 1080,
  fps: 30,
  durationInFrames: 1
};
var __set = (s) => {
  state = { ...state, ...s };
};
var useCurrentFrame = () => state.frame;
var useVideoConfig = () => ({
  width: state.width,
  height: state.height,
  fps: state.fps,
  durationInFrames: state.durationInFrames
});

// src/theme.ts
var C = {
  // 主色
  cinnabar: "#B4322A",
  // 朱砂
  cinnabarDeep: "#7A1E18",
  cinnabarLight: "#D9573F",
  ink: "#0A0A0C",
  // 墨黑
  inkSoft: "#141216",
  inkWarm: "#1C1614",
  paper: "#E8DCC3",
  // 旧纸白
  paperShade: "#C9B995",
  paperDim: "#8A7A60",
  gold: "#C9A24A",
  // 暗金
  goldBright: "#E8C87A",
  goldDim: "#8A6C2E",
  skin: "#F0DFC6",
  // 木偶脸底色
  wood: "#8A5A3B",
  woodDark: "#5A3722",
  // 光
  lampWarm: "#FFB46B",
  flameHot: "#FFD79A",
  snow: "#CFE0E8",
  night: "#07070A"
};

// src/rig.ts
var ZERO_POSE = {
  rise: 0,
  sway: 0,
  lean: 0,
  headTurn: 0,
  headTilt: 0,
  shNear: 6,
  shFar: -4,
  elNear: 8,
  elFar: 6,
  wrNear: 0,
  wrFar: 0,
  thNear: -2,
  thFar: 2,
  knNear: 3,
  knFar: 3,
  sleeveLag: 0,
  tassel: 0
};
var L = {
  torso: 96,
  neck: 22,
  head: 30,
  upperArm: 46,
  foreArm: 40,
  hand: 20,
  thigh: 46,
  shin: 44,
  shoulderW: 19
};
var dir = (deg) => {
  const r = deg * Math.PI / 180;
  return { x: Math.sin(r), y: Math.cos(r) };
};
var add = (p, d, k) => ({ x: p.x + d.x * k, y: p.y + d.y * k });
var solve = (p) => {
  const hip = { x: p.sway, y: p.rise };
  const torsoDir = { x: Math.sin(p.lean * Math.PI / 180), y: -Math.cos(p.lean * Math.PI / 180) };
  const chest = add(hip, torsoDir, L.torso);
  const neck = add(chest, torsoDir, L.neck);
  const headDir = {
    x: Math.sin((p.lean + p.headTilt * 0.6) * Math.PI / 180),
    y: -Math.cos((p.lean + p.headTilt * 0.6) * Math.PI / 180)
  };
  const head = add(neck, headDir, L.head);
  const nx = Math.cos(p.lean * Math.PI / 180);
  const ny = Math.sin(p.lean * Math.PI / 180);
  const shoulderNear = { x: chest.x + nx * L.shoulderW, y: chest.y + ny * L.shoulderW };
  const shoulderFar = { x: chest.x - nx * L.shoulderW * 0.9, y: chest.y - ny * L.shoulderW * 0.9 };
  const arm = (sh, a1, el, wr) => {
    const d1 = dir(a1);
    const elbow = add(sh, d1, L.upperArm);
    const d2 = dir(a1 + el);
    const hand = add(elbow, d2, L.foreArm);
    const d3 = dir(a1 + el + wr);
    const tip = add(hand, d3, L.hand);
    return { elbow, hand, tip };
  };
  const near = arm(shoulderNear, p.shNear, p.elNear, p.wrNear);
  const far = arm(shoulderFar, p.shFar, p.elFar, p.wrFar);
  const leg = (t, kn, side) => {
    const hipSide = { x: hip.x + side * 7, y: hip.y };
    const knee = add(hipSide, dir(t), L.thigh);
    const foot = add(knee, dir(t + kn), L.shin);
    return { knee, foot };
  };
  const lgN = leg(p.thNear, p.knNear, 1);
  const lgF = leg(p.thFar, p.knFar, -1);
  return {
    hip,
    chest,
    neck,
    head,
    shoulderNear,
    shoulderFar,
    elbowNear: near.elbow,
    elbowFar: far.elbow,
    handNear: near.hand,
    handFar: far.hand,
    tipNear: near.tip,
    tipFar: far.tip,
    kneeNear: lgN.knee,
    kneeFar: lgF.knee,
    footNear: lgN.foot,
    footFar: lgF.foot,
    anchors: {
      handNear: near.hand,
      handFar: far.hand,
      shoulderNear,
      shoulderFar,
      head: { x: head.x, y: head.y - 26 }
    }
  };
};
var BOW_POSE = {
  ...ZERO_POSE,
  rise: -4,
  lean: 13,
  // 欠身：这是"谢幕"，不是站着
  headTilt: 7,
  // 头微微低下
  headTurn: -0.5,
  // 但脸仍偏向操偶者的方向
  shNear: 34,
  // 双手收在身前（万福的起势）
  shFar: 26,
  elNear: 96,
  elFar: 88,
  wrNear: -34,
  wrFar: -28,
  thNear: 2,
  thFar: 6,
  tassel: 8
};
var BOW_SETTLE = {
  ...BOW_POSE,
  rise: 0,
  lean: 16,
  headTilt: 12,
  shNear: 18,
  shFar: 14,
  elNear: 62,
  elFar: 56,
  wrNear: -18,
  wrFar: -14,
  tassel: 12
};

// src/components/Puppet.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var taper = (a, b, wa, wb) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;
  return `M ${a.x + nx * wa} ${a.y + ny * wa} L ${b.x + nx * wb} ${b.y + ny * wb} L ${b.x - nx * wb} ${b.y - ny * wb} L ${a.x - nx * wa} ${a.y - ny * wa} Z`;
};
var Joint = ({ p, r = 4 }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { children: [
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("circle", { cx: p.x, cy: p.y, r, fill: "url(#jointGrad)", stroke: C.woodDark, strokeWidth: 0.7 }),
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("circle", { cx: p.x, cy: p.y, r: r * 0.32, fill: C.goldBright, opacity: 0.9 }),
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: `M ${p.x - r * 0.75} ${p.y - r * 0.5} Q ${p.x} ${p.y - r * 0.95} ${p.x + r * 0.7} ${p.y - r * 0.45}`, stroke: "#fff", strokeWidth: 0.6, fill: "none", opacity: 0.5 })
] });
var Hand = ({ p, ang, scale = 1 }) => {
  const r = ang * Math.PI / 180;
  const dx = Math.sin(r);
  const dy = Math.cos(r);
  const px = -dy;
  const py = dx;
  const fingers = [0, 1, 2, 3].map((i) => {
    const spread = (i - 1.5) * 5.4;
    const len = (13.5 - Math.abs(i - 1.4) * 1.7) * scale;
    const kn = { x: p.x + dx * 7.5 * scale + px * spread * 0.62, y: p.y + dy * 7.5 * scale + py * spread * 0.62 };
    const tip = { x: kn.x + (dx * 0.88 + px * 0.3) * len, y: kn.y + (dy * 0.88 + py * 0.3) * len };
    return { kn, tip, spread };
  });
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: taper(p, { x: p.x + dx * 9 * scale, y: p.y + dy * 9 * scale }, 5.4 * scale, 4.6 * scale), fill: "url(#skinGrad)", stroke: C.wood, strokeWidth: 0.55 }),
    fingers.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: taper(f.kn, f.tip, 1.35 * scale, 0.85 * scale), fill: "url(#skinGrad)", stroke: C.wood, strokeWidth: 0.4 }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("circle", { cx: f.kn.x, cy: f.kn.y, r: 1.15 * scale, fill: C.wood, opacity: 0.65 })
    ] }, i)),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "path",
      {
        d: taper({ x: p.x + px * 4 * scale + dx * 3 * scale, y: p.y + py * 4 * scale + dy * 3 * scale }, { x: p.x + px * 11 * scale + dx * 8 * scale, y: p.y + py * 11 * scale + dy * 8 * scale }, 1.7 * scale, 1.1 * scale),
        fill: "url(#skinGrad)",
        stroke: C.wood,
        strokeWidth: 0.45
      }
    )
  ] });
};
var Puppet = ({
  pose,
  eyesOpen = 0,
  tear = 0,
  crack = 0,
  ash = 0,
  opacity = 1,
  detail = "near",
  rim = 0.55,
  fireGlow = 0
}) => {
  const r = solve(pose);
  const near = detail === "near";
  const open = Math.max(0.05, eyesOpen);
  const hip = r.hip;
  const waist = { x: hip.x * 0.55 + r.chest.x * 0.45, y: hip.y * 0.55 + r.chest.y * 0.45 };
  const hemY = hip.y + 96;
  const hemShift = pose.sleeveLag * 0.28;
  const hemL = { x: hip.x - 30 + hemShift, y: hemY };
  const hemR = { x: hip.x + 30 + hemShift, y: hemY };
  const bodyPath = `M ${r.shoulderFar.x - 4} ${r.shoulderFar.y - 10}
    C ${r.shoulderFar.x - 12} ${r.chest.y + 34} ${waist.x - 20} ${waist.y - 6} ${waist.x - 19} ${waist.y + 6}
    C ${waist.x - 26} ${hip.y + 24} ${hemL.x - 4} ${hemY - 22} ${hemL.x} ${hemY}
    Q ${hip.x + hemShift} ${hemY + 13} ${hemR.x} ${hemY}
    C ${hemR.x + 2} ${hemY - 26} ${waist.x + 24} ${hip.y + 20} ${waist.x + 19} ${waist.y + 4}
    C ${waist.x + 18} ${waist.y - 8} ${r.shoulderNear.x + 10} ${r.chest.y + 30} ${r.shoulderNear.x + 4} ${r.shoulderNear.y - 10}
    Q ${r.neck.x} ${r.neck.y + 16} ${r.shoulderFar.x - 4} ${r.shoulderFar.y - 10} Z`;
  const sleeve = (sh, el, flip) => {
    const dx = el.x - sh.x;
    const dy = el.y - sh.y;
    const len = Math.hypot(dx, dy) || 1;
    const nx = -dy / len * 1;
    const ny = dx / len * 1;
    const o = flip ? -1 : 1;
    const drop = 46 + pose.sleeveLag * 0.5;
    return `M ${sh.x + nx * 9 * o} ${sh.y + ny * 9 * o - 4}
      C ${sh.x + nx * 16 * o + dx * 0.4} ${sh.y + ny * 16 * o + dy * 0.4} ${el.x + nx * 22 * o} ${el.y + ny * 22 * o - 6} ${el.x + nx * 26 * o} ${el.y + ny * 26 * o + 8}
      C ${el.x + nx * 32 * o + 6} ${el.y + drop * 0.7} ${el.x + 10 * o} ${el.y + drop} ${el.x - 6 * o} ${el.y + drop - 4}
      C ${el.x - nx * 12 * o} ${el.y + drop * 0.5} ${sh.x - nx * 4 * o} ${sh.y + ny * 8 * o + 16} ${sh.x - nx * 9 * o} ${sh.y + 8} Z`;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { opacity, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { opacity: near ? 0.82 : 1, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: taper(r.shoulderFar, r.elbowFar, 6.4, 5), fill: "url(#woodLimbFar)" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: taper(r.elbowFar, r.handFar, 4.6, 3.6), fill: "url(#woodLimbFar)" }),
      near ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Hand, { p: r.handFar, ang: pose.shFar + pose.elFar + pose.wrFar, scale: 0.9 }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: sleeve(r.shoulderFar, r.elbowFar, true), fill: "url(#robeDark)", stroke: C.goldDim, strokeWidth: 0.8, opacity: 0.96 })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: taper(r.hip, r.kneeFar, 7.4, 5.4), fill: "url(#woodLimbFar)" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: taper(r.kneeFar, r.footFar, 5.2, 3.8), fill: "url(#woodLimbFar)" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: taper(r.hip, r.kneeNear, 8.2, 6), fill: "url(#woodLimb)" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: taper(r.kneeNear, r.footNear, 5.8, 4.2), fill: "url(#woodLimb)" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: `M ${r.footFar.x - 13} ${r.footFar.y + 5} Q ${r.footFar.x} ${r.footFar.y - 3} ${r.footFar.x + 15} ${r.footFar.y + 4} Q ${r.footFar.x + 3} ${r.footFar.y + 11} ${r.footFar.x - 13} ${r.footFar.y + 5} Z`, fill: "#120E0C", stroke: C.goldDim, strokeWidth: 0.7 }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: `M ${r.footNear.x - 14} ${r.footNear.y + 6} Q ${r.footNear.x} ${r.footNear.y - 4} ${r.footNear.x + 16} ${r.footNear.y + 5} Q ${r.footNear.x + 3} ${r.footNear.y + 13} ${r.footNear.x - 14} ${r.footNear.y + 6} Z`, fill: "#0D0A09", stroke: C.gold, strokeWidth: 0.8 }),
      near ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Joint, { p: r.kneeNear, r: 3.4 }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Joint, { p: r.kneeFar, r: 3 })
      ] }) : null
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: bodyPath, fill: "url(#robeDark)", transform: "translate(-3 2)", opacity: 0.85 }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: bodyPath, fill: "url(#robeGrad)", stroke: C.goldDim, strokeWidth: 1 }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "path",
        {
          d: `M ${r.shoulderFar.x - 3} ${r.shoulderFar.y - 8} C ${waist.x - 16} ${waist.y} ${waist.x - 22} ${hip.y + 10} ${hemL.x - 2} ${hemY - 4} L ${hemL.x + 8} ${hemY - 2} C ${waist.x - 6} ${hip.y + 16} ${waist.x + 2} ${waist.y + 10} ${r.shoulderFar.x + 10} ${r.shoulderFar.y - 6} Z`,
          fill: "#2A0705",
          opacity: 0.42
        }
      ),
      near ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { stroke: "#3A0A07", strokeWidth: 0.9, fill: "none", opacity: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: `M ${waist.x - 8} ${waist.y + 6} C ${waist.x - 14} ${hip.y + 26} ${hemL.x - 6} ${hemY - 30} ${hemL.x - 2} ${hemY - 6}` }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: `M ${waist.x + 6} ${waist.y + 6} C ${waist.x + 10} ${hip.y + 30} ${hemR.x - 4} ${hemY - 26} ${hemR.x} ${hemY - 6}` }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: `M ${waist.x} ${waist.y + 8} C ${waist.x + 1} ${hip.y + 30} ${hemL.x + 22} ${hemY - 24} ${hemL.x + 24} ${hemY - 4}`, opacity: 0.5 })
      ] }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "path",
        {
          d: `M ${r.neck.x - 11} ${r.neck.y + 16} Q ${r.neck.x} ${r.neck.y + 3} ${r.neck.x + 11} ${r.neck.y + 16}
              L ${r.neck.x + 9} ${r.neck.y + 26} Q ${r.neck.x} ${r.neck.y + 20} ${r.neck.x - 9} ${r.neck.y + 26} Z`,
          fill: "#4A0F0B",
          stroke: C.gold,
          strokeWidth: 0.9
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "path",
        {
          d: `M ${r.shoulderFar.x + 1} ${r.shoulderFar.y - 6} L ${r.neck.x + 1} ${r.neck.y + 9} L ${r.shoulderNear.x - 1} ${r.shoulderNear.y - 6}`,
          fill: "none",
          stroke: C.gold,
          strokeWidth: 2,
          opacity: 0.92
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: `M ${r.shoulderFar.x + 3} ${r.shoulderFar.y - 3} L ${r.neck.x + 4} ${r.neck.y + 13} L ${waist.x + 4} ${waist.y - 2}`, fill: "none", stroke: C.paperDim, strokeWidth: 1.1, opacity: 0.4 }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: `M ${waist.x - 18} ${waist.y - 2} Q ${waist.x + 1} ${waist.y - 9} ${waist.x + 18} ${waist.y - 3} L ${waist.x + 19} ${waist.y + 11} Q ${waist.x} ${waist.y + 17} ${waist.x - 19} ${waist.y + 10} Z`, fill: "url(#sashGrad)", stroke: C.gold, strokeWidth: 1 }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("circle", { cx: waist.x + 1, cy: waist.y + 5, r: 3.2, fill: C.goldBright, stroke: C.goldDim, strokeWidth: 0.6 }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "path",
        {
          d: `M ${waist.x - 14} ${waist.y + 6} C ${waist.x - 30 - pose.sleeveLag} ${waist.y + 40} ${waist.x - 26 - pose.sleeveLag * 1.3} ${hip.y + 52} ${waist.x - 30 - pose.sleeveLag * 1.5} ${hip.y + 78}`,
          stroke: C.cinnabarLight,
          strokeWidth: 3.4,
          strokeLinecap: "round",
          fill: "none",
          opacity: 0.5
        }
      ),
      near ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { opacity: 0.42, stroke: C.gold, strokeWidth: 0.75, fill: "none", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: `M ${waist.x - 11} ${waist.y - 16} q 7 10 1 18 q -6 8 1 13` }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: `M ${waist.x + 11} ${waist.y - 20} q -6 9 0 16` }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("circle", { cx: waist.x - 8, cy: waist.y - 26, r: 1.6, fill: C.gold, stroke: "none" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("circle", { cx: waist.x + 9, cy: waist.y - 30, r: 1.4, fill: C.gold, stroke: "none" })
      ] }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: `M ${hemL.x} ${hemY} Q ${hip.x + hemShift} ${hemY + 13} ${hemR.x} ${hemY}`, stroke: C.gold, strokeWidth: 1.6, fill: "none", opacity: 0.8 }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: bodyPath, fill: "none", stroke: "url(#rimGrad)", strokeWidth: 2.4, opacity: 0.55 * rim })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: taper(r.shoulderNear, r.elbowNear, 6.8, 5.2), fill: "url(#woodLimb)" }),
      near ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Joint, { p: r.elbowNear, r: 3.6 }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: sleeve(r.shoulderNear, r.elbowNear, false), fill: "url(#robeGrad)", stroke: C.goldDim, strokeWidth: 0.9 }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: taper(r.elbowNear, r.handNear, 7.6, 5.4), fill: "url(#robeGrad)", stroke: C.goldDim, strokeWidth: 0.6 }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: taper(r.elbowNear, { x: (r.elbowNear.x + r.handNear.x) / 2, y: (r.elbowNear.y + r.handNear.y) / 2 }, 3.4, 2.2), fill: "#2A0705", opacity: 0.25 }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "path",
        {
          d: `M ${r.elbowNear.x - 20} ${r.elbowNear.y + 40} Q ${r.elbowNear.x} ${r.elbowNear.y + 54} ${r.elbowNear.x + 22} ${r.elbowNear.y + 42}`,
          fill: "none",
          stroke: C.gold,
          strokeWidth: 1.4,
          opacity: 0.55
        }
      ),
      near ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Hand, { p: r.handNear, ang: pose.shNear + pose.elNear + pose.wrNear }) : null
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: taper(r.neck, r.head, 4.2, 4.6), fill: "url(#neckGrad)", stroke: C.wood, strokeWidth: 0.5 }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", { cx: r.neck.x, cy: r.neck.y + 6, rx: 7, ry: 9, fill: "#3A2418", opacity: 0.35 }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { transform: `translate(${r.head.x} ${r.head.y}) rotate(${pose.headTilt * 0.4})`, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { transform: `scale(${1 - Math.abs(pose.headTurn) * 0.2} 1)`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "path",
            {
              d: "M 0 -22 C 15 -22 23 -12 23.5 -1 C 24 10 18 19 10 23 C 4 26 -4 26 -10 23 C -18 19 -24 10 -23.5 -1 C -23 -12 -15 -22 0 -22 Z",
              fill: "url(#faceGrad)",
              stroke: C.wood,
              strokeWidth: 0.85
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { opacity: 0.14, stroke: C.woodDark, strokeWidth: 0.6, fill: "none", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M -17 -9 C -9 -13 4 -12 15 -7" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M -16 6 C -7 3 7 4 16 8" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M -13 16 C -5 14 4 15 11 17" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", { cx: -15, cy: 5, rx: 6, ry: 4, fill: C.cinnabarLight, opacity: 0.2 }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", { cx: 15, cy: 5, rx: 6, ry: 4, fill: C.cinnabarLight, opacity: 0.14 }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M 0 -22 C 15 -22 23 -12 23.5 -1 C 24 10 18 19 10 23 C 4 26 -4 26 -10 23 C -18 19 -24 10 -23.5 -1 C -23 -12 -15 -22 0 -22 Z", fill: "url(#faceShade)", opacity: 0.55 }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", { cx: -4, cy: -14, rx: 12, ry: 7, fill: "#FFF8EA", opacity: 0.28 }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M 0 -13.5 l 3.4 2.6 l -3.4 3.6 l -3.4 -3.6 Z", fill: C.cinnabar, opacity: 0.95 }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M -15.5 -6.5 Q -11.5 -10 -6.5 -6.8", fill: "none", stroke: C.ink, strokeWidth: 1.5, strokeLinecap: "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M 6.5 -6.8 Q 11.5 -10 15.5 -6.5", fill: "none", stroke: C.ink, strokeWidth: 1.5, strokeLinecap: "round" }),
          open < 0.24 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M -15 0 Q -10.4 2.8 -5.6 0.2", fill: "none", stroke: C.ink, strokeWidth: 1.6, strokeLinecap: "round" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M 5.6 0.2 Q 10.4 2.8 15 0", fill: "none", stroke: C.ink, strokeWidth: 1.6, strokeLinecap: "round" })
          ] }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: `M -14.6 -0.2 Q -10.6 ${-3 * open} -6.4 -0.1 Q -10.6 ${3.2 * open} -14.6 -0.2 Z`, fill: C.ink }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: `M 6.4 -0.1 Q 10.6 ${-3 * open} 14.6 -0.2 Q 10.6 ${3.2 * open} 6.4 -0.1 Z`, fill: C.ink }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M -15 -0.7 Q -10.6 -1.6 -6 -0.6", fill: "none", stroke: C.ink, strokeWidth: 1.1, strokeLinecap: "round" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M 15 -0.7 Q 10.6 -1.6 6 -0.6", fill: "none", stroke: C.ink, strokeWidth: 1.1, strokeLinecap: "round" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("circle", { cx: -10.9 - pose.headTurn * 1.1, cy: 0.1, r: 1.25, fill: C.goldBright }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("circle", { cx: 10.9 - pose.headTurn * 1.1, cy: 0.1, r: 1.25, fill: C.goldBright }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("circle", { cx: -11.25 - pose.headTurn * 1.1, cy: -0.3, r: 0.42, fill: "#fff", opacity: 0.95 }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("circle", { cx: 10.55 - pose.headTurn * 1.1, cy: -0.3, r: 0.42, fill: "#fff", opacity: 0.95 })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M -15.5 -2.6 C -19.5 -4.6 -22.6 -1.4 -23.4 2.6", fill: "none", stroke: C.cinnabar, strokeWidth: 2.3, strokeLinecap: "round", opacity: 0.9 }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M 15.5 -2.6 C 19.5 -4.6 22.6 -1.4 23.4 2.6", fill: "none", stroke: C.cinnabar, strokeWidth: 2.3, strokeLinecap: "round", opacity: 0.9 }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M 0.6 4.6 Q 2 7.6 0.2 9", fill: "none", stroke: C.woodDark, strokeWidth: 0.8, opacity: 0.5, strokeLinecap: "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M -3.4 14.2 Q -1.6 12.9 -0.4 13.5 Q 0 12.5 0.6 13.5 Q 1.8 12.9 3.4 14.2 Q 0 17.2 -3.4 14.2 Z", fill: C.cinnabar }),
          tear > 0.01 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "path",
            {
              d: `M 12.6 5.6 C 13.6 11 11.8 17 10.8 21.4`,
              fill: "none",
              stroke: C.cinnabar,
              strokeWidth: 1.9 * tear,
              strokeLinecap: "round",
              opacity: 0.92
            }
          ) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M -22 -12 C -26 -30 -13 -39 0 -39 C 14 -39 26 -30 22 -12 C 16 -22 8 -25 0 -25 C -9 -25 -16 -21 -22 -12 Z", fill: "url(#hairGrad)" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M -21 -14 C -28 -4 -27 12 -22 24 C -19 16 -20 4 -17 -6 Z", fill: "url(#hairGrad)", opacity: 0.95 }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M 21 -14 C 28 -4 27 12 22 24 C 19 16 20 4 17 -6 Z", fill: "url(#hairGrad)", opacity: 0.95 }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", { cx: -1, cy: -41, rx: 13, ry: 9.5, fill: "url(#hairGrad)" }),
        near ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { opacity: 0.5, stroke: "#2A2420", strokeWidth: 0.6, fill: "none", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M -9 -44 C -3 -47 4 -46 9 -42" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M -7 -39 C -2 -41 4 -40 8 -37" })
        ] }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: `M -1 -50 l 0 -9`, stroke: C.gold, strokeWidth: 2, strokeLinecap: "round" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("circle", { cx: -1, cy: -61, r: 3.4, fill: C.goldBright, stroke: C.goldDim, strokeWidth: 0.6 }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { transform: `rotate(${pose.tassel} 13 -33)`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M 13 -33 q 7 15 3.4 32", stroke: C.cinnabarLight, strokeWidth: 2.3, fill: "none", strokeLinecap: "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("circle", { cx: 13, cy: -33, r: 2.6, fill: C.gold }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("circle", { cx: 16, cy: -2, r: 1.8, fill: C.goldBright, opacity: 0.9 })
        ] })
      ] })
    ] }),
    fireGlow > 0.02 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { opacity: fireGlow, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", { cx: hip.x, cy: hip.y - 20, rx: 44, ry: 80, fill: C.flameHot, opacity: 0.12 }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", { cx: hip.x + 20, cy: hip.y + 40, rx: 26, ry: 44, fill: C.cinnabarLight, opacity: 0.16 })
    ] }) : null,
    crack > 0.01 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { opacity: 0.7 * crack, stroke: C.ink, strokeWidth: 0.9, fill: "none", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: `M ${waist.x - 12} ${waist.y - 18} l 8 12 l -4 10 l 7 9` }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: `M ${r.head.x + 7} ${r.head.y + 9} l 5 9 l -3 7` }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: `M ${r.elbowNear.x} ${r.elbowNear.y} l 6 8` })
    ] }) : null,
    ash > 0.01 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { opacity: 0.5 * ash, fill: C.paperDim, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", { cx: hip.x - 6, cy: hip.y + 62, rx: 26, ry: 10 }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", { cx: r.head.x + 3, cy: r.head.y + 20, rx: 11, ry: 5 })
    ] }) : null
  ] });
};

// src/components/Puppeteer.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var PUPPETEER_REST = {
  lean: 6,
  armNear: 52,
  armFar: 44,
  elbowNear: 26,
  elbowFar: 20,
  age: 0,
  tremor: 0
};
var dir2 = (deg) => {
  const r = deg * Math.PI / 180;
  return { x: Math.sin(r), y: Math.cos(r) };
};
var puppeteerRig = (pose) => {
  const leanR = pose.lean * Math.PI / 180;
  const spine = { x: Math.sin(leanR), y: -Math.cos(leanR) };
  const hip = { x: 0, y: 0 };
  const chest = { x: hip.x + spine.x * 150, y: hip.y + spine.y * 150 };
  const neck = { x: chest.x + spine.x * 40, y: chest.y + spine.y * 40 };
  const head = { x: neck.x + spine.x * 34, y: neck.y + spine.y * 34 };
  const shoulder = (s) => ({ x: chest.x + Math.cos(leanR) * 26 * s, y: chest.y + Math.sin(leanR) * 26 * s });
  const shNear = shoulder(1);
  const shFar = shoulder(-1);
  const arm = (sh, a1, el) => {
    const d1 = dir2(a1);
    const elbow = { x: sh.x + d1.x * 78, y: sh.y + d1.y * 78 };
    const d2 = dir2(a1 + el);
    const hand = { x: elbow.x + d2.x * 72, y: elbow.y + d2.y * 72 };
    return { elbow, hand, ang: a1 + el };
  };
  const nA = arm(shNear, pose.armNear, pose.elbowNear);
  const fA = arm(shFar, pose.armFar, pose.elbowFar);
  return {
    hip,
    chest,
    neck,
    head,
    shNear,
    shFar,
    elbowNear: nA.elbow,
    elbowFar: fA.elbow,
    handNear: nA.hand,
    handFar: fA.hand,
    handNearAng: nA.ang,
    handFarAng: fA.ang,
    hemY: 250 - Math.abs(pose.lean) * 0.9
  };
};
var taper2 = (a, b, wa, wb) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;
  return `M ${a.x + nx * wa} ${a.y + ny * wa} L ${b.x + nx * wb} ${b.y + ny * wb} L ${b.x - nx * wb} ${b.y - ny * wb} L ${a.x - nx * wa} ${a.y - ny * wa} Z`;
};
var Puppeteer = ({
  pose,
  scale = 1,
  opacity = 1,
  rim = 0.55
}) => {
  const r = puppeteerRig(pose);
  const tremor = (k) => Math.sin(k * 2.3) * pose.tremor;
  const handN = { x: r.handNear.x + tremor(1), y: r.handNear.y + tremor(0.7) };
  const handF = { x: r.handFar.x + tremor(1.4), y: r.handFar.y + tremor(1.1) };
  const hemY = r.hemY;
  const robe = `M ${r.shFar.x - 13} ${r.shFar.y - 8}
    C ${r.shFar.x - 28} ${r.chest.y + 54} ${r.hip.x - 44} ${hemY - 66} ${r.hip.x - 54} ${hemY}
    Q ${r.hip.x} ${hemY + 18} ${r.hip.x + 68} ${hemY}
    C ${r.hip.x + 46} ${hemY - 62} ${r.shNear.x + 26} ${r.chest.y + 56} ${r.shNear.x + 11} ${r.shNear.y - 8}
    Q ${r.neck.x} ${r.chest.y - 4} ${r.shFar.x - 13} ${r.shFar.y - 8} Z`;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("g", { transform: `scale(${scale})`, opacity, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: robe, fill: "url(#ppRobe)" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "path",
      {
        d: `M ${r.shFar.x - 10} ${r.shFar.y - 4} C ${r.shFar.x - 30} ${r.chest.y + 50} ${r.hip.x - 48} ${hemY - 70} ${r.hip.x - 60} ${hemY - 4}
            L ${r.hip.x - 18} ${hemY - 2} C ${r.hip.x - 10} ${hemY - 80} ${r.chest.x - 24} ${r.chest.y + 40} ${r.shFar.x + 14} ${r.shFar.y + 6} Z`,
        fill: "#050405",
        opacity: 0.5
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: `M ${r.hip.x - 30} ${r.chest.y + 96} Q ${r.hip.x} ${r.chest.y + 88} ${r.hip.x + 30} ${r.chest.y + 96} L ${r.hip.x + 32} ${r.chest.y + 116} Q ${r.hip.x} ${r.chest.y + 124} ${r.hip.x - 32} ${r.chest.y + 116} Z`, fill: "#0A0809", stroke: C.goldDim, strokeWidth: 0.8, opacity: 0.9 }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("g", { stroke: "#000", strokeWidth: 2.2, fill: "none", opacity: 0.5, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: `M ${r.hip.x - 6} ${r.chest.y + 120} C ${r.hip.x - 14} ${hemY - 84} ${r.hip.x - 22} ${hemY - 40} ${r.hip.x - 30} ${hemY - 6}` }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: `M ${r.hip.x + 12} ${r.chest.y + 122} C ${r.hip.x + 22} ${hemY - 80} ${r.hip.x + 28} ${hemY - 44} ${r.hip.x + 36} ${hemY - 8}` })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: robe, fill: "none", stroke: "url(#ppRim)", strokeWidth: 3, opacity: 0.85 * rim }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("g", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: taper2(r.shFar, r.elbowFar, 9, 7), fill: "#0B0909" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "path",
        {
          d: `M ${r.shFar.x - 6} ${r.shFar.y} C ${r.shFar.x - 22} ${r.shFar.y + 26} ${r.elbowFar.x - 20} ${r.elbowFar.y - 4} ${r.elbowFar.x - 8} ${r.elbowFar.y + 6}
              L ${r.elbowFar.x - 2} ${r.elbowFar.y + 70} C ${r.elbowFar.x - 22} ${r.elbowFar.y + 74} ${r.elbowFar.x - 30} ${r.elbowFar.y + 40} ${r.elbowFar.x - 24} ${r.elbowFar.y + 12} Z`,
          fill: "#0B0909",
          opacity: 0.95
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: taper2(r.elbowFar, handF, 7, 5), fill: "#0B0909" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("ellipse", { cx: handF.x, cy: handF.y, rx: 6.4, ry: 5.6, fill: "#7A4C32", opacity: 0.85 })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: taper2(r.shNear, r.elbowNear, 10, 8), fill: "url(#ppRobe)" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "path",
      {
        d: `M ${r.shNear.x + 4} ${r.shNear.y}
            C ${r.shNear.x + 24} ${r.shNear.y + 22} ${r.elbowNear.x + 22} ${r.elbowNear.y - 6} ${r.elbowNear.x + 10} ${r.elbowNear.y + 4}
            L ${r.elbowNear.x + 4} ${r.elbowNear.y + 76}
            C ${r.elbowNear.x + 26} ${r.elbowNear.y + 80} ${r.elbowNear.x + 34} ${r.elbowNear.y + 44} ${r.elbowNear.x + 26} ${r.elbowNear.y + 10} Z`,
        fill: "url(#ppRobe)",
        stroke: "#000",
        strokeWidth: 0.6,
        opacity: 0.97
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "path",
      {
        d: `M ${r.elbowNear.x - 22} ${r.elbowNear.y + 74} Q ${r.elbowNear.x + 4} ${r.elbowNear.y + 90} ${r.elbowNear.x + 30} ${r.elbowNear.y + 70}`,
        fill: "none",
        stroke: C.goldDim,
        strokeWidth: 1.4,
        opacity: 0.45
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: taper2(r.elbowNear, handN, 8, 5.4), fill: "url(#ppRobe)" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: taper2(handN, { x: handN.x + 9, y: handN.y + 6 }, 6, 5), fill: "url(#skinGrad)", stroke: "#3A2418", strokeWidth: 0.6 }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: `M ${handN.x - 4} ${handN.y + 4} q 5 7 10 1`, stroke: "#3A2418", strokeWidth: 1.2, fill: "none", opacity: 0.6 }),
    pose.age > 0.1 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("g", { opacity: pose.age, stroke: "#3A2418", strokeWidth: 0.6, fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: `M ${r.elbowNear.x + 26} ${r.elbowNear.y + 18} l -2 12 M ${r.elbowNear.x + 34} ${r.elbowNear.y + 14} l -1 14` }) }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: taper2(r.neck, r.head, 9, 8), fill: "#0B0909" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("ellipse", { cx: r.head.x, cy: r.head.y, rx: 22, ry: 26, fill: "#0B0909" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: `M ${r.head.x - 20} ${r.head.y - 9} C ${r.head.x - 15} ${r.head.y - 32} ${r.head.x + 12} ${r.head.y - 34} ${r.head.x + 20} ${r.head.y - 9} Z`, fill: "#060505" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("ellipse", { cx: r.head.x - 2, cy: r.head.y - 30, rx: 9.5, ry: 7.5, fill: "#060505" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: `M ${r.head.x - 2} ${r.head.y - 37} l 0 -7`, stroke: C.goldDim, strokeWidth: 1.8, strokeLinecap: "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("ellipse", { cx: r.head.x, cy: r.head.y, rx: 21, ry: 25, fill: "none", stroke: "url(#ppRim)", strokeWidth: 1.8, opacity: 0.5 * rim }),
    pose.age > 0.35 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("g", { opacity: (pose.age - 0.35) * 1.5, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "path",
        {
          d: `M ${r.head.x + 12} ${r.head.y - 4} C ${r.head.x + 18} ${r.head.y + 10} ${r.head.x + 12} ${r.head.y + 22} ${r.head.x + 4} ${r.head.y + 28}`,
          stroke: C.paperDim,
          strokeWidth: 1.6,
          fill: "none"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: `M ${r.head.x - 16} ${r.head.y - 14} C ${r.head.x - 20} ${r.head.y - 4} ${r.head.x - 17} ${r.head.y + 6} ${r.head.x - 12} ${r.head.y + 12}`, stroke: C.paperDim, strokeWidth: 1.2, fill: "none", opacity: 0.8 })
    ] }) : null
  ] });
};

// src/lib/rand.ts
var hash = (seed) => {
  const s = Math.sin(seed * 127.1 + 311.7) * 43758.5453123;
  return s - Math.floor(s);
};
var rnd = (i, salt = 1) => hash(i * 13.37 + salt * 7.77);
var noise = (t, seed = 0) => {
  const i = Math.floor(t);
  const f = t - i;
  const a = hash(i + seed * 100.5);
  const b = hash(i + 1 + seed * 100.5);
  const u = f * f * (3 - 2 * f);
  return a + (b - a) * u;
};

// src/lib/motion.ts
var clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
var lerp = (a, b, t) => a + (b - a) * t;
var smooth = (t) => {
  const x = clamp(t);
  return x * x * (3 - 2 * x);
};
var kf = (frame, frames, ease = smooth) => {
  if (frames.length === 0) return 0;
  if (frame <= frames[0][0]) return frames[0][1];
  const last = frames[frames.length - 1];
  if (frame >= last[0]) return last[1];
  for (let i = 0; i < frames.length - 1; i++) {
    const [f0, v0] = frames[i];
    const [f1, v1] = frames[i + 1];
    if (frame >= f0 && frame <= f1) {
      const t = f1 === f0 ? 1 : (frame - f0) / (f1 - f0);
      return lerp(v0, v1, ease(t));
    }
  }
  return last[1];
};

// src/components/Stage.tsx
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var Carving = ({ x, y, h, flip, worn }) => {
  const s = flip ? -1 : 1;
  const gold = lerp(0.85, 0.28, worn);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { transform: `translate(${x} ${y}) scale(${s} 1)`, opacity: gold, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { x: -16, y: -h, width: 32, height: h, fill: "url(#woodGrad)", stroke: C.goldDim, strokeWidth: 1.2 }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { x: -16, y: -h, width: 6, height: h, fill: "#000", opacity: 0.25 }),
    [0.18, 0.38, 0.58, 0.78].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { transform: `translate(0 ${-h * p})`, opacity: 0.9 - worn * 0.4, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M 0 0 C 10 -6 16 4 8 10 C 2 14 -6 8 0 2", fill: "none", stroke: C.gold, strokeWidth: 1.4 }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M 0 0 C -10 -6 -16 4 -8 10 C -2 14 6 8 0 2", fill: "none", stroke: C.gold, strokeWidth: 1.4 }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("circle", { cx: 0, cy: 0, r: 1.6, fill: C.goldBright })
    ] }, i)),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { x: -22, y: -h - 12, width: 44, height: 12, fill: "#241611", stroke: C.gold, strokeWidth: 1.1 })
  ] });
};
var Stage = ({
  width,
  height,
  horizon,
  open,
  worn,
  warm,
  lantern,
  frost,
  mirror = 0,
  floorY
}) => {
  const W = width;
  const H = height;
  const fy = floorY ?? H * 0.92;
  const deckBackW = W * 0.34;
  const deckFrontW = W * 0.52;
  const cx = W / 2;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { opacity: 0.2 - worn * 0.09, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { x: cx - W * 0.36, y: horizon - H * 0.4, width: W * 0.72, height: H * 0.4, fill: "url(#paperScreen)" }),
      Array.from({ length: 7 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("g", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "line",
        {
          x1: cx - W * 0.36 + W * 0.72 * (i + 1) / 8,
          y1: horizon - H * 0.4,
          x2: cx - W * 0.36 + W * 0.72 * (i + 1) / 8,
          y2: horizon,
          stroke: C.paperDim,
          strokeWidth: 0.8,
          opacity: 0.35
        }
      ) }, i)),
      Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "line",
        {
          x1: cx - W * 0.36,
          y1: horizon - H * 0.4 + H * 0.4 * (i + 1) / 5,
          x2: cx + W * 0.36,
          y2: horizon - H * 0.4 + H * 0.4 * (i + 1) / 5,
          stroke: C.paperDim,
          strokeWidth: 0.7,
          opacity: 0.2
        },
        `h${i}`
      )),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { x: cx - W * 0.36, y: horizon - H * 0.4, width: W * 0.72, height: H * 0.4, fill: "url(#screenShade)", opacity: 0.9 }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "rect",
        {
          x: cx - W * 0.36,
          y: horizon - H * 0.4,
          width: W * 0.72,
          height: H * 0.4,
          fill: "none",
          stroke: C.goldDim,
          strokeWidth: 1.4,
          opacity: 0.22
        }
      ),
      [
        { y: horizon - 6, amp: H * 0.16, op: 0.3, seed: 3 },
        { y: horizon + 2, amp: H * 0.1, op: 0.22, seed: 9 }
      ].map((L2, li) => {
        let d = `M ${cx - W * 0.36} ${horizon}`;
        const n = 9;
        for (let i = 0; i <= n; i++) {
          const t = i / n;
          const x = cx - W * 0.36 + W * 0.72 * t;
          const h = L2.amp * (0.5 + 0.5 * Math.sin(t * 7 + rnd(L2.seed, li + 1) * 6.28)) * (1 - Math.abs(t - 0.5));
          d += ` L ${x.toFixed(0)} ${(L2.y - h).toFixed(0)}`;
        }
        d += ` L ${cx + W * 0.36} ${horizon} Z`;
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d, fill: C.inkWarm, opacity: L2.op }, li);
      })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "path",
      {
        d: `M ${cx - deckBackW / 2} ${horizon} L ${cx + deckBackW / 2} ${horizon} L ${cx + deckFrontW / 2} ${fy} L ${cx - deckFrontW / 2} ${fy} Z`,
        fill: "#17100D",
        stroke: C.ink,
        strokeWidth: 2
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { opacity: 0.5, children: [
      Array.from({ length: 9 }).map((_, i) => {
        const t = i / 8;
        const y = lerp(horizon, fy, t * t);
        const w = lerp(deckBackW, deckFrontW, t * t);
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("line", { x1: cx - w / 2, y1: y, x2: cx + w / 2, y2: y, stroke: "#000", strokeWidth: 0.9, opacity: 0.5 }, i);
      }),
      Array.from({ length: 11 }).map((_, i) => {
        const t = i / 10;
        const xTop = cx - deckBackW / 2 + deckBackW * t;
        const xBot = cx - deckFrontW / 2 + deckFrontW * t;
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("line", { x1: xTop, y1: horizon, x2: xBot, y2: fy, stroke: "#000", strokeWidth: 0.7, opacity: 0.35 }, `p${i}`);
      })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { x: cx - deckFrontW / 2, y: fy, width: deckFrontW, height: 10, fill: "#0C0806" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "path",
      {
        d: `M ${cx - deckFrontW / 2} ${fy} L ${cx + deckFrontW / 2} ${fy}`,
        stroke: C.gold,
        strokeWidth: 2.2,
        opacity: 0.8 * (1 - worn * 0.6)
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { opacity: 0.75 * warm, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("ellipse", { cx, cy: fy + 4, rx: deckFrontW * 0.46, ry: 16, fill: C.lampWarm, opacity: 0.25, filter: "url(#softGlow)" }),
      [-0.36, -0.18, 0, 0.18, 0.36].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("circle", { cx: cx + deckFrontW * t, cy: fy - 2, r: 3.4, fill: C.flameHot, opacity: 0.85 }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("circle", { cx: cx + deckFrontW * t, cy: fy - 2, r: 10, fill: C.lampWarm, opacity: 0.22, filter: "url(#tinyGlow)" })
      ] }, i))
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Carving, { x: cx - W * 0.41, y: horizon, h: H * 0.62, worn }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Carving, { x: cx + W * 0.41, y: horizon, h: H * 0.62, flip: true, worn }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { opacity: 0.92 - worn * 0.3, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { x: cx - W * 0.44, y: horizon - H * 0.62 - 54, width: W * 0.88, height: 44, fill: "url(#woodGrad)", stroke: C.goldDim, strokeWidth: 1.4 }),
      Array.from({ length: 13 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("g", { transform: `translate(${cx - W * 0.4 + i * (W * 0.8 / 12)} ${horizon - H * 0.62 - 32})`, opacity: 0.55, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M -8 0 Q 0 -12 8 0 Q 0 8 -8 0 Z", fill: "none", stroke: C.gold, strokeWidth: 1.2 }) }, i))
    ] }),
    [0, 1].map((side) => {
      const dir3 = side === 0 ? -1 : 1;
      const slide = open * W * 0.44;
      const baseX = cx + dir3 * (W * 0.02);
      const panelW = W * 0.5;
      const top = -H * 0.06;
      const bottom = fy + 14;
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { transform: `translate(${dir3 * slide} 0)`, opacity: 1 - worn * 0.18, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "path",
          {
            d: `M ${baseX} ${top}
                  L ${baseX + dir3 * panelW} ${top}
                  L ${baseX + dir3 * panelW} ${bottom}
                  L ${baseX} ${bottom} Z`,
            fill: "#3E0C0A"
          }
        ),
        Array.from({ length: 9 }).map((_, i) => {
          const t = (i + 0.5) / 9;
          const x = baseX + dir3 * panelW * t;
          const w = panelW * (0.05 + rnd(i + side * 10, 31) * 0.06);
          return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "rect",
            {
              x: dir3 > 0 ? x : x - w,
              y: top,
              width: w,
              height: bottom - top,
              fill: i % 2 === 0 ? "#000" : C.cinnabarLight,
              opacity: i % 2 === 0 ? 0.3 : 0.16
            },
            i
          );
        }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "rect",
          {
            x: dir3 > 0 ? baseX + dir3 * panelW * 0.86 : baseX + dir3 * panelW * 0.14,
            y: top,
            width: panelW * 0.14,
            height: bottom - top,
            fill: C.cinnabar,
            opacity: 0.35
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "rect",
          {
            x: dir3 > 0 ? baseX : baseX + dir3 * panelW,
            y: bottom - 10,
            width: panelW,
            height: 8,
            fill: C.goldDim,
            opacity: 0.55
          }
        )
      ] }, side);
    }),
    [0, 1].map((i) => {
      const x = cx + (i === 0 ? -W * 0.3 : W * 0.3);
      const y = horizon - H * 0.56;
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { opacity: lantern, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("line", { x1: x, y1: horizon - H * 0.62 - 6, x2: x, y2: y - 26, stroke: C.goldDim, strokeWidth: 1 }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("ellipse", { cx: x, cy: y + 26, rx: 30, ry: 34, fill: C.cinnabar, opacity: 0.85 }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("ellipse", { cx: x, cy: y + 26, rx: 30, ry: 34, fill: "url(#lampGrad)", opacity: 0.5 }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { x: x - 13, y: y - 6, width: 26, height: 6, fill: C.goldDim }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { x: x - 13, y: y + 56, width: 26, height: 5, fill: C.goldDim }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("circle", { cx: x, cy: y + 26, r: 44, fill: "url(#lampGrad)", opacity: 0.55 * lantern }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("circle", { cx: x, cy: y + 26, r: 24, fill: C.lampWarm, opacity: 0.28, filter: "url(#tinyGlow)" })
      ] }, i);
    }),
    mirror > 0.01 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { opacity: mirror * 0.34, transform: `translate(${cx + W * 0.14} ${horizon - H * 0.05}) scale(0.52)`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { x: -W * 0.5, y: -H * 0.5, width: W, height: H * 0.5, fill: "none", stroke: C.gold, strokeWidth: 2 }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: `M -W * 0.28 ${H * 0.42} L W * 0.28 ${H * 0.42} L W * 0.2 ${H * 0.2} L -W * 0.2 ${H * 0.2} Z`, fill: "url(#woodGrad)" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { opacity: 0.9, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: `M -W * 0.34 ${-H * 0.5} L -W * 0.1 ${-H * 0.5} L -W * 0.1 ${H * 0.1} L -W * 0.34 ${H * 0.1} Z`, fill: "url(#curtainGrad)" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: `M W * 0.34 ${-H * 0.5} L W * 0.1 ${-H * 0.5} L W * 0.1 ${H * 0.1} L W * 0.34 ${H * 0.1} Z`, fill: "url(#curtainGrad)" })
      ] })
    ] }) : null,
    frost > 0.01 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { opacity: frost * 0.5, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "path",
        {
          d: `M ${cx - deckFrontW / 2} ${fy} L ${cx + deckFrontW / 2} ${fy} L ${cx + deckBackW / 2} ${horizon} L ${cx - deckBackW / 2} ${horizon} Z`,
          fill: C.snow,
          opacity: 0.22
        }
      ),
      [0, 1, 2, 3].map((i) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "path",
        {
          d: `M ${cx - 300 + i * 180} ${horizon + 20 + i * 24} q ${30 + i * 8} -14 ${62 + i * 10} 4`,
          stroke: C.snow,
          strokeWidth: 1.6,
          fill: "none",
          opacity: 0.35
        },
        i
      ))
    ] }) : null,
    worn > 0.01 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { opacity: clamp(worn) * 0.7, stroke: C.ink, strokeWidth: 0.9, fill: "none", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: `M ${cx - 240} ${horizon + 40} l 26 30 l -12 34` }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: `M ${cx + 120} ${horizon + 70} l -18 36 l 14 26` }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: `M ${cx - 40} ${horizon - H * 0.2} l 22 24 l -10 30`, opacity: 0.6 })
    ] }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("ellipse", { cx, cy: horizon + 30, rx: W * 0.34, ry: H * 0.16, fill: C.lampWarm, opacity: 0.1 * warm, filter: "url(#softGlow)" })
  ] });
};

// src/components/Mountains.tsx
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var ridge = (seed, w, baseY, amp, points) => {
  let d = `M -${w} ${baseY + 200} L -${w} ${baseY}`;
  for (let i = 0; i <= points; i++) {
    const t = i / points;
    const x = -w + t * (w * 3);
    const n = Math.sin(t * Math.PI * (2.2 + rnd(seed, 1) * 1.6) + rnd(seed, 2) * 6.28) * 0.6 + Math.sin(t * Math.PI * (6.1 + rnd(seed, 3) * 3) + rnd(seed, 4) * 6.28) * 0.3 + (rnd(seed + i, 5) - 0.5) * 0.24;
    const y = baseY - amp * (0.45 + n * 0.55);
    d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  d += ` L ${w * 2} ${baseY + 200} Z`;
  return d;
};
var layers = [
  { seed: 11, y: 660, amp: 150, op: 0.3, speed: 0.18, tint: 0.8 },
  { seed: 27, y: 726, amp: 190, op: 0.42, speed: 0.32, tint: 0.6 },
  { seed: 43, y: 800, amp: 230, op: 0.55, speed: 0.5, tint: 0.42 },
  { seed: 61, y: 880, amp: 260, op: 0.68, speed: 0.72, tint: 0.28 }
];
var Mountains = ({ reveal, travel, cold, opacity = 1, w = 1920 }) => {
  const r = clamp(reveal);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("g", { opacity: opacity * r, children: [
    layers.map((L2, i) => {
      const dx = -travel * 900 * L2.speed;
      const warm = { r: 78, g: 58, b: 44 };
      const cool = { r: 58, g: 66, b: 74 };
      const mix = (a, b) => Math.round(lerp(a, b, cold));
      const fill = `rgb(${mix(warm.r, cool.r)},${mix(warm.g, cool.g)},${mix(warm.b, cool.b)})`;
      const d = ridge(L2.seed, w, L2.y, L2.amp, 26);
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("g", { opacity: L2.op * (0.55 + 0.45 * r), transform: `translate(${dx} 0)`, children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d, fill }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d, fill: "none", stroke: C.paper, strokeWidth: 0.9, opacity: 0.22 })
      ] }, i);
    }),
    [0, 1, 2, 3, 4].map((i) => {
      const x = (rnd(i, 21) * 2400 + travel * 260 * (0.4 + rnd(i, 22))) % 2400 - 240;
      const y = 560 + rnd(i, 23) * 210;
      const rx = 180 + rnd(i, 24) * 260;
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "ellipse",
        {
          cx: x,
          cy: y,
          rx,
          ry: 22 + rnd(i, 25) * 26,
          fill: C.paper,
          opacity: 0.05 + 0.05 * rnd(i, 26)
        },
        `c${i}`
      );
    })
  ] });
};
var Bridge = ({ x, y, opacity, cold = 0 }) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("g", { opacity, transform: `translate(${x} ${y})`, children: [
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M -90 0 Q 0 -52 90 0 L 90 8 Q 0 -40 -90 8 Z", fill: cold > 0.5 ? "#2A3138" : "#2B2118" }),
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: -96, y: 6, width: 192, height: 5, fill: cold > 0.5 ? "#333B42" : "#332618" }),
  [-60, -20, 20, 60].map((px, i) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: px - 2, y: 2, width: 4, height: 16, fill: cold > 0.5 ? "#262C32" : "#241A12" }, i)),
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("circle", { cx: 0, cy: -26, r: 3.2, fill: C.lampWarm, opacity: 0.9 }),
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("circle", { cx: 0, cy: -26, r: 13, fill: C.lampWarm, opacity: 0.18, filter: "url(#tinyGlow)" })
] });
var WindVeil = ({ frame, strength, w = 1920, h = 1080 }) => {
  if (strength <= 0.01) return null;
  const t = frame * 6e-3;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("g", { opacity: strength * 0.5, children: [0, 1, 2].map((i) => {
    const y = 300 + i * 240 + noise(t + i, 3) * 40;
    const x = (noise(t * 0.6 + i * 2, 4) * 1.4 - 0.2) * w % (w * 1.4);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("ellipse", { cx: x, cy: y, rx: 420 - i * 70, ry: 3 + i, fill: C.paper, opacity: 0.055 - i * 0.012 }, i);
  }) });
};

// src/components/Threads.tsx
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var curve = (a, b, sag, wobble, seed) => {
  const mx = (a.x + b.x) / 2 + wobble * 0.3;
  const my = (a.y + b.y) / 2 + sag;
  const qx = a.x * 0.25 + mx * 0.5 + b.x * 0.25;
  const qy = a.y * 0.25 + my * 0.5 + b.y * 0.25 + wobble;
  void qx;
  return { d: `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`, mid: { x: mx, y: my } };
};
var Threads = ({ threads, frame }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("g", { children: threads.map((t, i) => {
    const seed = i * 3.77 + 1;
    const vib = (noise(frame * 0.14, seed) - 0.5) * 6 * (0.35 + t.tension * 0.9);
    const sag = (1 - clamp(t.tension)) * 46 + 3;
    const w = t.width ?? 0.9;
    const op = (t.opacity ?? 0.9) * (0.55 + 0.45 * t.tension);
    const b = t.broken ?? 0;
    const bp = t.breakPoint ?? 0.5;
    const cut = { x: t.a.x + (t.b.x - t.a.x) * bp, y: t.a.y + (t.b.y - t.a.y) * bp };
    if (b <= 1e-3) {
      const { d } = curve(t.a, t.b, sag, vib, seed);
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("g", { opacity: op, children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d, fill: "none", stroke: C.goldDim, strokeWidth: w + 2.2, opacity: 0.28 }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d, fill: "none", stroke: C.goldBright, strokeWidth: w, opacity: 0.95 })
      ] }, i);
    }
    const fall = b * b;
    const upperEnd = { x: cut.x + fall * 10, y: cut.y + fall * 130 };
    const lowerStart = { x: cut.x - fall * 5, y: cut.y + fall * 150 };
    const lowerEnd = { x: t.b.x + fall * 14, y: t.b.y + fall * 190 };
    const u = curve(t.a, upperEnd, sag * 1.4, vib * (1 + b), seed);
    const l = curve(lowerStart, lowerEnd, sag * 0.8, vib, seed + 9);
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("g", { opacity: op * (1 - b * 0.35), children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: u.d, fill: "none", stroke: C.goldBright, strokeWidth: w, opacity: 0.9 }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: l.d, fill: "none", stroke: C.gold, strokeWidth: w * 0.9, opacity: 0.75 }),
      t.glow && t.glow > 0.01 ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("g", { opacity: t.glow, children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("circle", { cx: cut.x, cy: cut.y, r: 4 + t.glow * 16, fill: C.flameHot, opacity: 0.6 }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("circle", { cx: cut.x, cy: cut.y, r: 1.6 + t.glow * 5, fill: "#FFF6E0" })
      ] }) : null
    ] }, i);
  }) });
};

// src/components/Fire.tsx
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var lobe = (cx, w, h, lean) => {
  const tx = cx + lean;
  return `M ${cx - w} 2
    C ${cx - w * 1.02} ${-h * 0.34} ${cx - w * 0.66} ${-h * 0.62} ${tx - w * 0.34} ${-h * 0.8}
    C ${tx - w * 0.12} ${-h * 0.92} ${tx - w * 0.04} ${-h * 0.99} ${tx} ${-h}
    C ${tx + w * 0.12} ${-h * 0.96} ${tx + w * 0.3} ${-h * 0.84} ${tx + w * 0.45} ${-h * 0.66}
    C ${cx + w * 0.78} ${-h * 0.46} ${cx + w * 1.02} ${-h * 0.2} ${cx + w} 2
    Q ${cx} ${9 + Math.sin(cx) * 3} ${cx - w} 2 Z`;
};
var Fire = ({ frame, intensity, seed = 1, width = 520, height = 320, y = 0 }) => {
  const k = clamp(intensity);
  if (k <= 0.01) return null;
  const t = frame * 0.15;
  const flick = 0.86 + 0.14 * noise(frame * 0.19, 5);
  const layers2 = [
    { op: 0.5, count: 13, spread: 0.46, hMin: 0.28, hMax: 0.86, fill: "#6E160F", wf: 0.17 },
    { op: 0.68, count: 11, spread: 0.34, hMin: 0.34, hMax: 0.92, fill: "#A82A20", wf: 0.18 },
    { op: 0.88, count: 8, spread: 0.22, hMin: 0.3, hMax: 0.64, fill: "#D9492A", wf: 0.19 },
    { op: 0.95, count: 5, spread: 0.1, hMin: 0.18, hMax: 0.36, fill: "#FFC06A", wf: 0.2 }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("g", { transform: `translate(0 ${y})`, opacity: k, children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("ellipse", { cx: 0, cy: -height * 0.34, rx: width * 0.56, ry: height * 0.52, fill: C.cinnabarLight, opacity: 0.24 * k * flick, filter: "url(#softGlow)" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("g", { opacity: 0.5 * k, children: [0, 1, 2, 3].map((i) => {
      const life = (frame * 0.5 + i * 60) % 240 / 240;
      const cx = (noise(t * 0.5 + i, 41) - 0.5) * width * 0.5;
      const cy = -height * (0.55 + life * 0.9);
      const rr = width * (0.16 + life * 0.22);
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("ellipse", { cx, cy, rx: rr, ry: rr * 0.62, fill: "#14100F", opacity: 0.35 * (1 - life) * k }, i);
    }) }),
    layers2.map((L2, li) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("g", { opacity: L2.op * flick, children: Array.from({ length: L2.count }).map((_, i) => {
      const spread = L2.count === 1 ? 0 : (i - (L2.count - 1) / 2) / ((L2.count - 1) / 2);
      const jitter = (rnd(i + li * 17, seed + 9) - 0.5) * 0.42 + (noise(t * 0.6 + i * 3.1 + li, seed + li) - 0.5) * 0.1;
      const cx = (spread + jitter * 0.7) * width * L2.spread;
      const n = noise(t + i * 1.9 + li * 4.7 + seed, seed + li + 3);
      const h = height * (L2.hMin + (L2.hMax - L2.hMin) * (0.18 + n * 0.82)) * (1 - Math.abs(spread) * 0.32);
      const w = h * L2.wf * (0.85 + rnd(i, li + 11) * 0.3);
      const lean = (noise(t * 0.5 + i * 2.3 + li, seed + 5) - 0.5) * (34 - li * 6);
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: lobe(cx, w, h, lean), fill: L2.fill }, i);
    }) }, li)),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("ellipse", { cx: 0, cy: -10, rx: width * 0.19, ry: height * 0.06, fill: "#FFF6DC", opacity: 0.55 * k * flick, filter: "url(#tinyGlow)" })
  ] });
};
var Embers = ({
  frame,
  count,
  intensity,
  width = 900,
  height = 600,
  y = 0
}) => {
  const k = clamp(intensity);
  if (k <= 0.01) return null;
  const cycle = 210;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("g", { transform: `translate(0 ${y})`, opacity: k, children: Array.from({ length: count }).map((_, i) => {
    const life = (frame + rnd(i, 51) * cycle) % cycle / cycle;
    const x = (rnd(i, 52) - 0.5) * width + Math.sin(life * 6 + rnd(i, 53) * 6) * 26 * life;
    const yy = -life * height * (0.6 + rnd(i, 54) * 0.6);
    const r = (0.7 + rnd(i, 55) * 2.1) * (1 - life * 0.5);
    const op = Math.sin(life * Math.PI) * (0.5 + rnd(i, 56) * 0.5);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("circle", { cx: x, cy: yy, r, fill: rnd(i, 57) > 0.4 ? C.flameHot : C.cinnabarLight, opacity: op * k }, i);
  }) });
};

// src/components/Particles.tsx
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var Particles = ({ frame, kind, count, intensity, width = 1920, height = 1080, wind = 0, scale = 1 }) => {
  const k = clamp(intensity);
  if (k <= 0.01) return null;
  const cfg = {
    dust: { cycle: 620, speedX: 16, speedY: -9, rMin: 0.6, rMax: 2.3, fill: C.paper, opMin: 0.1, opMax: 0.4 },
    snow: { cycle: 460, speedX: 42, speedY: 26, rMin: 1, rMax: 3.6, fill: C.snow, opMin: 0.25, opMax: 0.75 },
    ash: { cycle: 700, speedX: 22, speedY: -5, rMin: 0.8, rMax: 2.6, fill: "#8C8378", opMin: 0.15, opMax: 0.5 }
  }[kind];
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("g", { opacity: k, children: Array.from({ length: count }).map((_, i) => {
    const phase = rnd(i, 61) * cfg.cycle;
    const life = (frame + phase) % cfg.cycle / cfg.cycle;
    const baseX = rnd(i, 62) * width;
    const x = kind === "snow" ? (baseX + frame * cfg.speedX * (0.6 + rnd(i, 63) * 0.8) + Math.sin(frame * 0.012 + rnd(i, 64) * 6.28) * 30) % width : (baseX + frame * cfg.speedX * (0.4 + rnd(i, 63) * 0.9) + wind * life * 180) % width;
    const y = kind === "snow" ? (frame * cfg.speedY * (0.5 + rnd(i, 65) * 0.9) + rnd(i, 66) * height) % height : height - life * height;
    const r = (cfg.rMin + rnd(i, 67) * (cfg.rMax - cfg.rMin)) * scale;
    const op = cfg.opMin + rnd(i, 68) * (cfg.opMax - cfg.opMin);
    const fadeEdge = kind === "snow" ? 1 : Math.min(1, Math.sin(life * Math.PI) * 2.2);
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("circle", { cx: x, cy: y, r, fill: cfg.fill, opacity: op * fadeEdge }, i);
  }) });
};

// src/assets/grain.ts
var GRAIN = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAgAElEQVR42k3d5dNdNRDA4fzdlELx4u7uVtyKu7sXh+LuPsxhnsz83smH2/v2npxkPclmdzO+/PLL7fPPP98ee+yx7a233tpuuOGG7Yknntjeeeed7YUXXtiuu+667fLLL9++++67+fvrr78+25500knbWWedtZ199tnbyy+/vN19993zt0suuWT28f77788+brzxxu3aa6/dXnvttfneM888s7366qvbbbfdtl1zzTXbm2++uT366KPb008/vd1xxx3zN98vvfTSdt55581v/V100UXbXXfdNWH84osvtnvuuWc75ZRTthNPPHG7/vrr5//fe++9OYZ3Pvjgg9neBwzff//9HPfBBx/cTj311O2RRx6ZcIHnm2++me2M98orr0xYbr755gmLMfbu3bs9//zz208//bTdeuutkx4ff/zx9uSTT076HDhwYPvwww+322+/fb7jXb+98cYb20033TTH9M6VV145n6GXsX28D/8777xzPj/nnHO2iy++eML10UcfTbr6P1qCDR3hccUVV8y2xkMPOD300EPz/76vuuqq7cwzz9zuv//+7bTTTpu/4ed99903aQn/Cy64YBsQh4gXrr766sm4F198cRIU0oAHwNdffz2RMoBOzjjjjO3xxx+fAnHhhRduJ5xwwvw/wDEVwg8//PAcHFMAA3DMhSyA9AtA4+/bt2+OixkISZAQCqF9YwpC7d+/f3vuuecmY4wJKTD5fuCBByZS/v7kk08mPBjw7bffTiEhwIhM+BA+RhkDTP4GF4HxAQ+aHH300bMvz84999w5BlgwgEC8/fbb27333juZ5Vt/2j/77LPbLbfcMmmL2WCnSNp4H+3QSlvPCbP+0eTdd9+dz4zvPe+gi7aE4fzzz590ACe8MRWO0Z2iGBtt0N3f8IUTWqMDYRo//PDDHAyRdRRzSLSX+kAUcyEHCUKAuQQIMpiIoYAiPBjmN4wElP4RxHO/Q56AQVZ/iEeqWSMwIC54IE+bjcHiIAoNRyzE8Lnsssvm+8aBHIH77LPP5pi0yFhw0jdtBicB8SEMYLj00ks31hBBjz322NkPHPTPAn311VdTOcBGmP2GaeAKPrRAK9/eQ0P0+vTTT2d7fafB6ABe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";

// src/components/Paper.tsx
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var SceneDefs = () => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("defs", { children: [
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("linearGradient", { id: "skyGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "0%", stopColor: "#050507" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "45%", stopColor: "#120D0C" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "78%", stopColor: "#1E1411" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "100%", stopColor: "#0A0808" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("radialGradient", { id: "lampGrad", cx: "50%", cy: "50%", r: "50%", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "0%", stopColor: C.lampWarm, stopOpacity: "0.85" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "45%", stopColor: C.cinnabar, stopOpacity: "0.28" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "100%", stopColor: C.cinnabar, stopOpacity: "0" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("linearGradient", { id: "robeGrad", x1: "0", y1: "0", x2: "1", y2: "1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "0%", stopColor: C.cinnabarLight }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "42%", stopColor: C.cinnabar }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "100%", stopColor: C.cinnabarDeep })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("linearGradient", { id: "robeGrad2", x1: "0", y1: "0", x2: "1", y2: "1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "0%", stopColor: C.cinnabar }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "55%", stopColor: C.cinnabarDeep }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "100%", stopColor: "#4E120E" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("linearGradient", { id: "woodLimb", x1: "0", y1: "0", x2: "1", y2: "0.6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "0%", stopColor: "#C08A5E" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "55%", stopColor: C.wood }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "100%", stopColor: C.woodDark })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("linearGradient", { id: "woodLimbFar", x1: "0", y1: "0", x2: "1", y2: "0.6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "0%", stopColor: "#7A4C32" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "100%", stopColor: "#3E2517" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("linearGradient", { id: "skinGrad", x1: "0", y1: "0", x2: "1", y2: "0.8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "0%", stopColor: "#FBF0DC" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "70%", stopColor: C.skin }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "100%", stopColor: "#D3B78F" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("radialGradient", { id: "jointGrad", cx: "35%", cy: "30%", r: "70%", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "0%", stopColor: "#C79B6B" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "70%", stopColor: C.wood }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "100%", stopColor: C.woodDark })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("linearGradient", { id: "hairGrad", x1: "0", y1: "0", x2: "0.4", y2: "1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "0%", stopColor: "#26211F" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "55%", stopColor: "#14100F" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "100%", stopColor: "#0A0707" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("linearGradient", { id: "robeDark", x1: "0", y1: "0", x2: "1", y2: "1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "0%", stopColor: "#6E1A14" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "100%", stopColor: "#3A0A07" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("linearGradient", { id: "sashGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "0%", stopColor: "#8E241C" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "50%", stopColor: "#7A1E18" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "100%", stopColor: "#4A0F0B" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("linearGradient", { id: "ppRobe", x1: "0.15", y1: "0", x2: "0.85", y2: "1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "0%", stopColor: "#221B1A" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "42%", stopColor: "#12100F" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "100%", stopColor: "#070606" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("linearGradient", { id: "ppRim", x1: "1", y1: "0", x2: "0", y2: "0.3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "0%", stopColor: "#FFDFB4", stopOpacity: "0.9" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "50%", stopColor: "#E8B87C", stopOpacity: "0.3" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "100%", stopColor: "#E8B87C", stopOpacity: "0" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("linearGradient", { id: "rimGrad", x1: "0", y1: "0", x2: "1", y2: "0.2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "0%", stopColor: "#FFE3B8", stopOpacity: "0.95" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "45%", stopColor: "#FFC98A", stopOpacity: "0.35" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "100%", stopColor: "#FFC98A", stopOpacity: "0" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("radialGradient", { id: "faceGrad", cx: "42%", cy: "34%", r: "72%", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "0%", stopColor: "#FBF0DC" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "62%", stopColor: C.skin }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "100%", stopColor: "#D9BF9A" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("linearGradient", { id: "flameGrad", x1: "0", y1: "1", x2: "0", y2: "0", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "0%", stopColor: "#FFE9B0", stopOpacity: "0.95" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "30%", stopColor: C.flameHot, stopOpacity: "0.85" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "62%", stopColor: C.cinnabarLight, stopOpacity: "0.6" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "100%", stopColor: C.cinnabarDeep, stopOpacity: "0" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("linearGradient", { id: "curtainGrad", x1: "0", y1: "0", x2: "1", y2: "0.2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "0%", stopColor: "#4A0F0C" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "28%", stopColor: C.cinnabarDeep }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "52%", stopColor: C.cinnabar }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "74%", stopColor: C.cinnabarDeep }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "100%", stopColor: "#3A0B09" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("linearGradient", { id: "woodGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "0%", stopColor: "#2A1B14" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "100%", stopColor: "#150E0B" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("linearGradient", { id: "paperScreen", x1: "0", y1: "0", x2: "0", y2: "1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "0%", stopColor: C.paper, stopOpacity: "0.16" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "100%", stopColor: C.paperShade, stopOpacity: "0.05" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("linearGradient", { id: "neckGrad", x1: "0", y1: "0", x2: "1", y2: "1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "0%", stopColor: "#D9BE97" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "60%", stopColor: "#B89673" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "100%", stopColor: "#8A6A4C" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("linearGradient", { id: "faceShade", x1: "0.2", y1: "0", x2: "1", y2: "1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "0%", stopColor: "#FFFFFF", stopOpacity: "0" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "55%", stopColor: "#C08A5E", stopOpacity: "0.12" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "100%", stopColor: "#6B3B22", stopOpacity: "0.32" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("radialGradient", { id: "screenShade", cx: "50%", cy: "42%", r: "62%", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "45%", stopColor: "#000", stopOpacity: "0" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "100%", stopColor: "#000", stopOpacity: "0.72" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("linearGradient", { id: "hazeGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "0%", stopColor: C.paper, stopOpacity: "0" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "45%", stopColor: C.paper, stopOpacity: "0.055" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "100%", stopColor: C.paper, stopOpacity: "0" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("radialGradient", { id: "vignetteGrad", cx: "50%", cy: "48%", r: "72%", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "52%", stopColor: "#000", stopOpacity: "0" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "82%", stopColor: "#000", stopOpacity: "0.42" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "100%", stopColor: "#000", stopOpacity: "0.86" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("pattern", { id: "grainPat", width: "256", height: "256", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("image", { href: GRAIN, x: "0", y: "0", width: "256", height: "256", preserveAspectRatio: "none" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("filter", { id: "woodGrain", x: "0", y: "0", width: "100%", height: "100%", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("feTurbulence", { type: "fractalNoise", baseFrequency: "0.02 0.6", numOctaves: "4", seed: "3", result: "n" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("feColorMatrix", { in: "n", type: "saturate", values: "0", result: "g" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("feComponentTransfer", { in: "g", result: "a", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("feFuncA", { type: "linear", slope: "0.32", intercept: "0" }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("filter", { id: "softGlow", x: "-60%", y: "-60%", width: "220%", height: "220%", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("feGaussianBlur", { stdDeviation: "14" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("filter", { id: "tinyGlow", x: "-80%", y: "-80%", width: "260%", height: "260%", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("feGaussianBlur", { stdDeviation: "3.2" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("filter", { id: "depthBlur", x: "-20%", y: "-20%", width: "140%", height: "140%", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("feGaussianBlur", { stdDeviation: "5" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("filter", { id: "farBlur", x: "-20%", y: "-20%", width: "140%", height: "140%", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("feGaussianBlur", { stdDeviation: "2" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("linearGradient", { id: "skyWarm", x1: "0", y1: "0", x2: "0", y2: "1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "0%", stopColor: "#0B0A0C" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "60%", stopColor: "#1A1210" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("stop", { offset: "100%", stopColor: "#2A1A14" })
  ] })
] });
var FilmLayer = ({
  grain = 0.5,
  vignette = 0.85,
  width = 1920,
  height = 1080
}) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("g", { style: { pointerEvents: "none" }, children: [
  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("rect", { x: 0, y: 0, width, height, fill: "url(#grainPat)", opacity: 0.3 * grain }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("rect", { x: 0, y: 0, width, height, fill: "url(#vignetteGrad)", opacity: vignette })
] });

// src/components/Camera.tsx
var import_react = __toESM(require_react());
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var series = (spec, key) => {
  const def = key === "zoom" ? 1 : 0;
  return spec.kfs.map((k) => [k.at, k[key] ?? def]);
};
var cameraAt = (spec, frame, width, height) => {
  const zoom = kf(frame, series(spec, "zoom"), smooth);
  const x = kf(frame, series(spec, "x"), smooth);
  const y = kf(frame, series(spec, "y"), smooth);
  const rot = kf(frame, series(spec, "rot"), smooth);
  const sh = spec.shake ?? 0;
  const sx = (noise(frame * 0.35, 71) - 0.5) * sh;
  const sy = (noise(frame * 0.31, 72) - 0.5) * sh;
  const breathe = 1 + (spec.breath ?? 0) * Math.sin(frame * 0.0175);
  return { zoom: zoom * breathe, x: x + sx, y: y + sy, rot, width, height };
};
var CamCtx = import_react.default.createContext({ zoom: 1, x: 0, y: 0, rot: 0, width: 1920, height: 1080 });
var Camera = ({
  spec,
  width,
  height,
  children
}) => {
  const frame = useCurrentFrame();
  const state2 = cameraAt(spec, frame, width, height);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(CamCtx.Provider, { value: state2, children });
};
var Parallax = ({
  depth = 1,
  children,
  extra
}) => {
  const c = import_react.default.useContext(CamCtx);
  const z = 1 + (c.zoom - 1) * depth;
  const x = c.x * depth;
  const y = c.y * depth;
  const r = c.rot * (0.35 + depth * 0.65);
  const cx = c.width / 2;
  const cy = c.height / 2;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("g", { transform: `translate(${cx + x} ${cy + y}) scale(${z.toFixed(5)}) rotate(${r.toFixed(3)}) translate(${-cx} ${-cy})`, children: extra ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("g", { transform: extra, children }) : children });
};

// src/components/Scene.tsx
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var Scene = (p) => {
  const { frame, width: W, height: H } = p;
  const horizon = p.stage?.horizon ?? H * 0.54;
  const floorY = p.stage?.floorY ?? H * 0.9;
  const rig = solve(p.puppet.pose);
  const P = { x: p.puppet.x, y: p.puppet.y, s: p.puppet.scale };
  const wp = (q) => ({ x: P.x + q.x * P.s, y: P.y + q.y * P.s });
  const O = p.puppeteer ? { x: p.puppeteer.x, y: p.puppeteer.y, s: p.puppeteer.scale } : null;
  const prig = p.puppeteer ? puppeteerRig(p.puppeteer.pose) : null;
  const wo = (q) => O ? { x: O.x + q.x * O.s, y: O.y + q.y * O.s } : q;
  const t = p.threads;
  const threadList = [];
  const barVisible = (t?.bar ?? 0) * (t?.visible ?? 1);
  const handN = prig ? wo(prig.handNear) : null;
  const handF = prig ? wo(prig.handFar) : null;
  const headTopY = wp(rig.anchors.head).y;
  const barY = headTopY - 46;
  const barHalf = 150 * P.s;
  const barA = { x: P.x - barHalf, y: barY };
  const barB = { x: P.x + barHalf, y: barY };
  const barPts = (i, n) => {
    const a = barA;
    const b = barB;
    const tt = 0.14 + 0.72 * i / Math.max(1, n - 1);
    return { x: a.x + (b.x - a.x) * tt, y: a.y + (b.y - a.y) * tt - 6 };
  };
  if (t && (t.visible ?? 1) > 1e-3 && barA && barB) {
    const anchorPts = [
      { b: wp(rig.anchors.head), bp: 0.58, w: 1.15 },
      { b: wp(rig.anchors.shoulderNear), bp: 0.52, w: 0.95 },
      { b: wp(rig.anchors.shoulderFar), bp: 0.54, w: 0.95 },
      { b: wp(rig.anchors.handNear), bp: 0.46, w: 0.85 },
      { b: wp(rig.anchors.handFar), bp: 0.5, w: 0.85 }
    ];
    const n = Math.min(t.count ?? 5, 5);
    const progress = t.broken ?? 0;
    const stag = t.stagger ?? 0.14;
    const mount = t.mount ?? 1;
    for (let i = 0; i < n; i++) {
      const mountI = Math.max(0, Math.min(1, (mount - i * 0.17) / 0.2));
      if (mountI <= 1e-3) continue;
      const span = 0.18;
      const local = Math.max(0, Math.min(1, (progress - i * stag) / span));
      const glow = Math.max(0, 1 - Math.abs(local - 0.35) * 3.4) * (t.glow ?? 1);
      threadList.push({
        a: barPts(i, n),
        b: anchorPts[i].b,
        tension: t.tension,
        broken: local,
        breakPoint: anchorPts[i].bp,
        glow,
        width: anchorPts[i].w * 0.72,
        opacity: (t.opacity ?? 0.9) * (t.visible ?? 1) * mountI * (i === 0 ? 0.85 : 0.78)
      });
    }
  }
  const light = p.light ?? { x: W / 2, y: horizon - H * 0.2, r: W * 0.5, intensity: 0.5 };
  const fireK = p.fire?.intensity ?? 0;
  const flicker = 0.72 + 0.28 * noise(frame * 0.22, 13);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    "svg",
    {
      width: W,
      height: H,
      viewBox: `0 0 ${W} ${H}`,
      xmlns: "http://www.w3.org/2000/svg",
      style: { position: "absolute", left: 0, top: 0, backgroundColor: C.night },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SceneDefs, {}),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("rect", { x: 0, y: 0, width: W, height: H, fill: C.night }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Camera, { spec: p.cam ?? { kfs: [{ at: 0, zoom: 1 }] }, width: W, height: H, children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Parallax, { depth: 0.45, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("rect", { x: -W * 0.2, y: -H * 0.2, width: W * 1.4, height: H * 1.4, fill: "url(#skyGrad)" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Parallax, { depth: 0.6, children: [
            p.mountains ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Mountains, { ...p.mountains, w: W }) : null,
            p.bridge ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Bridge, { x: p.bridge.x, y: p.bridge.y, opacity: p.bridge.opacity, cold: p.bridge.cold ?? 0 }) : null
          ] }),
          (p.stageVisible ?? 1) > 0.01 && p.stage ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Parallax, { depth: 0.82, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("g", { opacity: p.stageVisible ?? 1, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            Stage,
            {
              width: W,
              height: H,
              horizon,
              floorY,
              open: p.stage.open,
              worn: p.stage.worn,
              warm: p.stage.warm,
              lantern: p.stage.lantern,
              frost: p.stage.frost ?? 0,
              mirror: p.stage.mirror ?? 0
            }
          ) }) }) : null,
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Parallax, { depth: 0.95, children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              "ellipse",
              {
                cx: light.x,
                cy: floorY - 6,
                rx: light.r * 0.92,
                ry: light.r * 0.24,
                fill: light.cool ? C.snow : C.lampWarm,
                opacity: 0.26 * light.intensity,
                filter: "url(#softGlow)"
              }
            ),
            fireK > 0.02 && p.fire ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ellipse", { cx: p.fire.x, cy: floorY - 4, rx: W * 0.22, ry: H * 0.05, fill: C.cinnabarLight, opacity: 0.3 * fireK * flicker, filter: "url(#softGlow)" }) : null,
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("rect", { x: -W * 0.1, y: horizon - H * 0.1, width: W * 1.2, height: H * 0.14, fill: "url(#hazeGrad)", opacity: 0.85 })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Parallax, { depth: 1, children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ellipse", { cx: P.x + 4 * P.s, cy: P.y + 92 * P.s, rx: 70 * P.s, ry: 16 * P.s, fill: "#000", opacity: 0.62, filter: "url(#depthBlur)" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ellipse", { cx: P.x, cy: P.y - 130 * P.s, rx: 190 * P.s, ry: 250 * P.s, fill: "url(#lampGrad)", opacity: 0.5 * light.intensity }),
            O && p.puppeteer && (p.puppeteer.depth ?? "behind") === "behind" ? /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("g", { transform: `translate(${O.x} ${O.y})`, children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ellipse", { cx: 6, cy: 250 * O.s, rx: 90 * O.s, ry: 18 * O.s, fill: "#000", opacity: 0.5, filter: "url(#depthBlur)" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Puppeteer, { pose: p.puppeteer.pose, scale: O.s, opacity: p.puppeteer.opacity ?? 1, rim: p.puppeteer.rim ?? 0.5 })
            ] }) : null,
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("g", { transform: `translate(${P.x} ${P.y}) scale(${P.s})`, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              Puppet,
              {
                pose: p.puppet.pose,
                eyesOpen: p.puppet.eyesOpen ?? 0,
                tear: p.puppet.tear ?? 0,
                crack: p.puppet.crack ?? 0,
                ash: p.puppet.ash ?? 0,
                opacity: p.puppet.opacity ?? 1,
                detail: p.puppet.detail ?? "near",
                rim: p.puppet.rim ?? 0.55,
                fireGlow: fireK * flicker
              }
            ) }),
            barVisible > 0.01 ? /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("g", { opacity: barVisible, children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("line", { x1: barA.x, y1: barA.y, x2: barB.x, y2: barB.y, stroke: "#2A1B12", strokeWidth: 9, strokeLinecap: "round" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("line", { x1: barA.x, y1: barA.y - 3, x2: barB.x, y2: barB.y - 3, stroke: C.goldDim, strokeWidth: 1.6, strokeLinecap: "round", opacity: 0.9 }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                "line",
                {
                  x1: P.x - 46,
                  y1: barA.y + 4,
                  x2: P.x + 46,
                  y2: barB.y + 4,
                  stroke: "#241611",
                  strokeWidth: 6,
                  strokeLinecap: "round"
                }
              ),
              handN ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("line", { x1: barA.x, y1: barA.y, x2: handN.x, y2: handN.y, stroke: "#2A1B12", strokeWidth: 5, strokeLinecap: "round" }) : null,
              handF ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("line", { x1: barB.x, y1: barB.y, x2: handF.x, y2: handF.y, stroke: "#2A1B12", strokeWidth: 5, strokeLinecap: "round" }) : null,
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("circle", { cx: barA.x, cy: barA.y, r: 5, fill: C.gold, opacity: 0.85 }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("circle", { cx: barB.x, cy: barB.y, r: 5, fill: C.gold, opacity: 0.85 })
            ] }) : null,
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Threads, { threads: threadList, frame })
          ] }),
          p.fire && p.fire.intensity > 0.01 ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Parallax, { depth: 1.05, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("g", { transform: `translate(${p.fire.x} ${p.fire.y})`, children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Fire, { frame, intensity: p.fire.intensity, width: p.fire.width ?? 520, height: p.fire.height ?? 320 }),
            p.fire.embers ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Embers, { frame, count: p.fire.embers, intensity: p.fire.intensity, width: W * 0.5, height: H * 0.6 }) : null
          ] }) }) : null,
          O && p.puppeteer && p.puppeteer.depth === "front" ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Parallax, { depth: 1.28, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("g", { transform: `translate(${O.x} ${O.y}) scale(${O.s})`, filter: "url(#depthBlur)", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Puppeteer, { pose: p.puppeteer.pose, scale: 1, opacity: (p.puppeteer.opacity ?? 1) * 0.9, rim: p.puppeteer.rim ?? 0.7 }) }) }) : null,
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Parallax, { depth: 1.1, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(WindVeil, { frame, strength: p.particles?.wind ?? 0, w: W, h: H }) }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Parallax, { depth: 1, children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("g", { opacity: light.intensity, style: { mixBlendMode: "screen" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ellipse", { cx: light.x, cy: light.y, rx: light.r, ry: light.r * 0.9, fill: light.cool ? C.snow : C.lampWarm, opacity: 0.2, filter: "url(#softGlow)" }) }),
            fireK > 0.02 && p.fire ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("g", { opacity: 0.55 * fireK, style: { mixBlendMode: "screen" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ellipse", { cx: p.fire.x, cy: p.fire.y - (p.fire.height ?? 320) * 0.4, rx: (p.fire.width ?? 520) * 0.8, ry: (p.fire.height ?? 320) * 0.9, fill: C.cinnabarLight, opacity: 0.35 * flicker, filter: "url(#softGlow)" }) }) : null
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Parallax, { depth: 1.15, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Particles, { frame, kind: "dust", count: 90, intensity: p.particles?.dust ?? 0, width: W, height: H, wind: p.particles?.wind ?? 0 }) }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Parallax, { depth: 1.32, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Particles, { frame, kind: "snow", count: 150, intensity: p.particles?.snow ?? 0, width: W, height: H, scale: 1.5 }) }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Parallax, { depth: 1.2, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Particles, { frame, kind: "ash", count: 100, intensity: p.particles?.ash ?? 0, width: W, height: H, wind: p.particles?.wind ?? 0, scale: 1.3 }) }),
          p.foreground && p.foreground > 0.01 ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Parallax, { depth: 1.45, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("g", { opacity: p.foreground, filter: "url(#depthBlur)", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: `M ${-60} ${-60} L ${W * 0.13} ${-60} L ${W * 0.09} ${H + 60} L ${-60} ${H + 60} Z`, fill: "#000" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: `M ${W + 60} ${-60} L ${W * 0.91} ${-60} L ${W * 0.95} ${H + 60} L ${W + 60} ${H + 60} Z`, fill: "#000" })
          ] }) }) : null,
          p.extra
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(FilmLayer, { grain: p.film?.grain ?? 0.55, vignette: p.film?.vignette ?? 0.85, width: W, height: H }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("rect", { x: 0, y: 0, width: W, height: H, fill: "#000", opacity: 1 - (p.exposure ?? 1) })
      ]
    }
  );
};

// src/lib/tracks.ts
var fieldsOf = (keys) => {
  const set = /* @__PURE__ */ new Set();
  for (const k of keys) for (const f of Object.keys(k.pose)) set.add(f);
  return [...set];
};
var poseAt = (progress, keys, ease = smooth) => {
  const out = { ...ZERO_POSE };
  for (const f of fieldsOf(keys)) {
    const track = [];
    let last = keys[0].pose[f] ?? ZERO_POSE[f];
    for (const k of keys) {
      if (k.pose[f] !== void 0) {
        last = k.pose[f];
        track.push([k.p * 1e3, last]);
      }
    }
    if (track.length === 0) continue;
    if (track[0][0] > 0) track.unshift([0, track[0][1]]);
    out[f] = kf(progress * 1e3, track, ease);
  }
  return out;
};
var puppeteerAt = (progress, keys, ease = smooth) => {
  const out = { ...PUPPETEER_REST };
  for (const f of fieldsOf(keys)) {
    const track = [];
    for (const k of keys) {
      if (k.pose[f] !== void 0) track.push([k.p * 1e3, k.pose[f]]);
    }
    if (track.length === 0) continue;
    if (track[0][0] > 0) track.unshift([0, track[0][1]]);
    out[f] = kf(progress * 1e3, track, ease);
  }
  return out;
};
var cam = (duration, keys, shake = 0, breath = 0) => ({
  kfs: keys.map(({ p, ...rest }) => ({ at: p * duration, ...rest })),
  shake,
  breath
});

// src/timeline.ts
var VIDEO = {
  width: 1920,
  height: 1080,
  fps: 30
};
var secToFrames = (s) => Math.round(s * VIDEO.fps);
var sectionFrames = (s) => ({
  from: secToFrames(s.from),
  duration: Math.max(1, secToFrames(s.to) - secToFrames(s.from))
});
var PHASES = [
  {
    id: "p1",
    name: "\u4E00 \xB7 \u5B64\u72EC\u4E0E\u76F8\u9047",
    from: 0,
    to: 44.95,
    lyricRange: [0, 3],
    intent: "0\u201323.65s \u662F 21.65 \u79D2\u7EAF\u524D\u594F\uFF1A\u96EA\u591C\u3001\u7834\u5E99\u3001\u767D\u53D1\u8001\u4EBA\u3001\u76D6\u7740\u5E03\u7684\u5973\u6728\u5076\u3002\u7B2C\u4E00\u53E5\u5531\u8BCD\u843D\u4E0B\u65F6\uFF0C\u8001\u4EBA\u6380\u5F00\u5E03\u3001\u64E6\u62ED\u3001\u6574\u7406\u8863\u895F\u3001\u68C0\u67E5\u5173\u8282\u3002"
  },
  {
    id: "p2",
    name: "\u4E8C \xB7 \u76F8\u4F34\u4E0E\u76F8\u4F9D",
    from: 44.95,
    to: 113.39,
    lyricRange: [4, 14],
    intent: "\u5236\u4F5C\u3001\u4FEE\u8865\u3001\u63CF\u5986\uFF1B\u65C5\u9014\u3001\u5C71\u6C34\u3001\u77F3\u6865\u3001\u591C\u706F\uFF1B\u7834\u65E7\u8863\u888D vs \u7CBE\u7F8E\u620F\u670D\uFF0C\u7C97\u7CD9\u624B vs \u5F69\u7ED8\u624B\u6307\u3002"
  },
  {
    id: "p3",
    name: "\u4E09 \xB7 \u821E\u53F0\u4E0E\u9ED8\u5951",
    from: 113.39,
    to: 135.31,
    intent: '21.92 \u79D2\u65E0\u5531\u8BCD\u7684\u5927\u7A7A\u6863\uFF1A\u6574\u90E8\u7247\u552F\u4E00"\u5B8C\u6574\u4E00\u51FA\u620F"\u3002\u63A7\u5236\u6746\u2014\u4E1D\u7EBF\u2014\u5173\u8282\u7684\u5173\u7CFB\u5FC5\u987B\u770B\u6E05\uFF1B\u6B63\u9762\u4E0E\u5E55\u540E\u4EA4\u53C9\u526A\u8F91\u3002'
  },
  {
    id: "p4",
    name: "\u56DB \xB7 \u5C81\u6708\u4E0E\u77DB\u76FE",
    from: 135.31,
    to: 157.41,
    lyricRange: [15, 17],
    intent: "\u8870\u8001\u3001\u78E8\u635F\u3001\u624B\u6296\u3001\u5173\u8282\u8001\u5316\u3001\u73AF\u5883\u7834\u8D25\uFF1B\u534E\u4E3D\u4E0E\u6F66\u5012\u7684\u53CD\u5DEE\uFF1B\u77DB\u76FE\u9760\u8DDD\u79BB\u4E0E\u5149\u5F71\u8868\u8FBE\u3002"
  },
  {
    id: "p5",
    name: "\u4E94 \xB7 \u98CE\u96EA\u4E0E\u544A\u522B",
    from: 157.41,
    to: 184.94,
    lyricRange: [18, 22],
    intent: "\u767D\u53D1\u82CD\u82CD\u3001\u660F\u706F\u3001\u7A97\u4E0A\u98CE\u96EA\u3001\u98A4\u6296\u7684\u624B\u3001\u6728\u5076\u5F69\u7ED8\u6CEA\u75D5\u3002"
  },
  {
    id: "p6",
    name: "\u516D \xB7 \u711A\u6BC1\u4E0E\u6700\u540E\u8C22\u5E55",
    from: 184.94,
    to: 225.34,
    lyricRange: [23, 29],
    intent: "\u628A\u6728\u5076\u6295\u5165\u706B\u4E2D \u2192 \u9759\u6B62 \u2192 \u706B\u5149\u4E2D\u6700\u540E\u4E00\u6B21\u8C22\u5E55 \u2192 \u4E1D\u7EBF\u9010\u6839\u65AD\u88C2 \u2192 \u8001\u4EBA\u53EA\u63A5\u4F4F\u7070\u70EC\u3002\u8C22\u5E55\u52A8\u4F5C\u5FC5\u987B\u590D\u7528\u524D\u9762\u7684\u821E\u53F0\u59FF\u6001\u3002"
  },
  {
    id: "p7",
    name: "\u4E03 \xB7 \u4F59\u70EC\u4E0E\u7A7A\u620F\u53F0",
    from: 225.34,
    to: 239.3,
    intent: "13.96 \u79D2\u7EAF\u5C3E\u594F\uFF1A\u8001\u4EBA\u72EC\u5750\u7070\u70EC\u65C1\uFF0C\u955C\u5934\u62C9\u8FDC\u6210\u7A7A\u620F\u53F0\uFF0C\u98CE\u96EA\u505C\u606F\uFF0C\u6700\u540E\u4E00\u70B9\u6668\u5149\u3002"
  }
];
var SECTIONS = PHASES.map((ph, i) => ({
  id: ph.id,
  act: i + 1,
  name: ph.name,
  from: ph.from,
  to: ph.to,
  beat: ph.intent
}));

// src/acts.tsx
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var at = (sec, phaseFrom, phaseTo) => clamp((sec - phaseFrom) / (phaseTo - phaseFrom));
var useCtx = () => {
  const f = useCurrentFrame();
  const { durationInFrames: d, width: W, height: H } = useVideoConfig();
  const floor = H * 0.9;
  const ps = 1.7;
  const os = 1.2;
  return {
    f,
    d,
    p: d > 1 ? f / (d - 1) : 0,
    W,
    H,
    horizon: H * 0.54,
    floor,
    ps,
    px: W * 0.5,
    py: floor - 90 * ps - 80,
    os,
    oy: floor - 250 * os
  };
};
var focus = (cx, cy, z, W, H) => ({
  zoom: z,
  x: -(cx - W / 2) * z,
  y: -(cy - H / 2) * z
});
var Act1 = () => {
  const c = useCtx();
  const { p, W, H } = c;
  const headY = c.py - 150 * c.ps;
  const k = (sec) => at(sec, 0, 44.95);
  const shots = [
    { p: 0, ...focus(c.px, c.horizon + 60, 1, W, H) },
    { p: k(20.4), ...focus(c.px, c.horizon + 90, 1.16, W, H) },
    { p: k(23.4), ...focus(c.px + 20, headY + 40, 3.27, W, H) },
    { p: k(26.2), ...focus(c.px + 10, headY + 10, 4.36, W, H) },
    { p: k(34.4), ...focus(c.px + 90, c.py - 40 * c.ps, 3.64, W, H) },
    { p: k(40.2), ...focus(c.px + 40, c.py - 70 * c.ps, 2, W, H) },
    { p: 1, ...focus(c.px + 30, c.py - 60 * c.ps, 1.75, W, H) }
  ];
  const spec = {
    frame: c.f,
    width: W,
    height: H,
    cam: cam(c.d, shots, 0.35, 4e-3),
    stageVisible: 0.62,
    stage: { open: 0, worn: 1, warm: lerp(0.03, 0.1, p), lantern: lerp(0, 0.16, clamp(p / 0.5)), frost: 1 },
    mountains: { reveal: lerp(0.2, 0.42, p), travel: 0, cold: 1, opacity: 0.3 },
    puppeteer: {
      x: W * 0.66,
      y: c.oy + 26,
      scale: c.os,
      pose: puppeteerAt(p, [
        // 弯下腰擦木偶：靠前倾角度表达"蹲伏"，不假装跪
        { p: 0, pose: { lean: 34, armNear: 62, armFar: 48, elbowNear: 52, elbowFar: 40, age: 0.85, tremor: 0.6 } },
        { p: 0.52, pose: { lean: 40, armNear: 74, armFar: 58, elbowNear: 62, elbowFar: 48, age: 0.85, tremor: 0.8 } },
        { p: 0.72, pose: { lean: 30, armNear: 66, armFar: 52, elbowNear: 48, elbowFar: 38, age: 0.85, tremor: 0.7 } },
        { p: 1, pose: { lean: 24, armNear: 40, armFar: 34, elbowNear: 28, elbowFar: 24, age: 0.85, tremor: 0.9 } }
      ]),
      opacity: 1,
      depth: "behind"
    },
    puppet: {
      x: c.px - 10,
      y: c.py,
      scale: c.ps,
      pose: poseAt(p, [
        // 静止、垂首、闭眼；被擦拭时只有极小的迟滞
        { p: 0, pose: { lean: 6, headTilt: 8, headTurn: 0.15, shNear: 4, shFar: 2, elNear: 6, elFar: 5, rise: 0 } },
        { p: 0.5, pose: { lean: 5, headTilt: 9, headTurn: 0.1, shNear: 5, shFar: 3, elNear: 8, elFar: 6, rise: -1 } },
        { p: 0.72, pose: { lean: 3, headTilt: 4, headTurn: 0.2, shNear: 8, shFar: 4, elNear: 10, elFar: 8, rise: -2, sleeveLag: 3 } },
        { p: 1, pose: { lean: 2, headTilt: 1, headTurn: 0.25, shNear: 10, shFar: 5, elNear: 12, elFar: 9, rise: -2, sleeveLag: 4, tassel: 2 } }
      ]),
      eyesOpen: kf(c.f, [
        [0, 0],
        [k(23.65) * c.d, 0],
        [k(25.6) * c.d, 0.18],
        [k(31) * c.d, 0.55],
        [c.d, 0.6]
      ]),
      crack: 0.12,
      opacity: 1
    },
    // 还没有丝线，也没有控制杆
    threads: { tension: 0, opacity: 0, visible: 0, bar: 0, mount: 0 },
    particles: { snow: 0.9, dust: 0.4, wind: 0.4 },
    light: { x: W * 0.46, y: c.horizon - H * 0.12, r: W * 0.4, intensity: lerp(0.26, 0.4, p), cool: 0.85 },
    exposure: lerp(0.62, 0.82, clamp(p / 0.6)),
    film: { grain: 0.8, vignette: 1 }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Scene, { ...spec });
};
var Act2 = () => {
  const c = useCtx();
  const { p, W, H } = c;
  const headY = c.py - 150 * c.ps;
  const K = (sec) => at(sec, 44.95, 113.39);
  const shots = [
    { p: 0, ...focus(c.px + 4, headY + 6, 3.76, W, H) },
    // 描妆特写
    { p: K(58), ...focus(c.px + 6, headY + 2, 3.39, W, H) },
    { p: K(75), ...focus(c.px, c.py - 250 * c.ps, 1.82, W, H) },
    // 挂丝：看得到杆与手
    { p: K(91), ...focus(c.px + 130, c.horizon, 1.05, W, H) },
    // 旅途远景
    { p: K(104), ...focus(c.px + 190, c.horizon - 20, 1.2, W, H) },
    { p: 1, ...focus(c.px + 30, c.py - 110 * c.ps, 1.39, W, H) }
  ];
  const spec = {
    frame: c.f,
    width: W,
    height: H,
    cam: cam(c.d, shots, 0.3, 5e-3),
    stageVisible: lerp(1, 0.34, clamp((p - 0.26) / 0.2) * (1 - clamp((p - 0.78) / 0.14))),
    stage: {
      open: 0,
      worn: lerp(0.95, 0.55, clamp((p - 0.26) / 0.3)),
      warm: lerp(0.12, 0.5, clamp(p / 0.6)),
      lantern: lerp(0.2, 0.6, clamp(p / 0.5)),
      frost: lerp(1, 0.3, clamp(p / 0.5))
    },
    mountains: {
      reveal: lerp(0.4, 1, clamp((p - 0.26) / 0.3)),
      travel: clamp((p - 0.26) / 0.5) * 1.4,
      cold: lerp(0.9, 0.1, clamp((p - 0.3) / 0.4)),
      opacity: lerp(0.35, 0.95, clamp((p - 0.26) / 0.3))
    },
    bridge: { x: W * 0.82 - clamp((p - 0.3) / 0.4) * 240, y: H * 0.66, opacity: clamp((p - 0.34) / 0.2) * 0.85 },
    puppeteer: {
      x: lerp(W * 0.7, W * 0.78, p),
      y: c.oy + lerp(24, 0, clamp((p - 0.26) / 0.2)),
      scale: c.os,
      pose: puppeteerAt(p, [
        // 描妆：极轻的手上动作
        { p: 0, pose: { lean: 30, armNear: 70, armFar: 40, elbowNear: 58, elbowFar: 30, age: 0.84, tremor: 0.7 } },
        { p: 0.24, pose: { lean: 28, armNear: 66, armFar: 36, elbowNear: 54, elbowFar: 28, age: 0.84, tremor: 0.9 } },
        // 挂丝：两只手一起抬到控制杆
        { p: 0.34, pose: { lean: 16, armNear: 74, armFar: 66, elbowNear: 44, elbowFar: 40, age: 0.83, tremor: 0.8 } },
        // 旅途：正常牵线行走
        { p: 0.5, pose: { lean: 10, armNear: 54, armFar: 48, elbowNear: 30, elbowFar: 26, age: 0.8, tremor: 0.9 } },
        { p: 0.78, pose: { lean: 12, armNear: 50, armFar: 44, elbowNear: 28, elbowFar: 24, age: 0.82, tremor: 1.1 } },
        { p: 1, pose: { lean: 10, armNear: 56, armFar: 50, elbowNear: 32, elbowFar: 28, age: 0.84, tremor: 1.2 } }
      ]),
      opacity: clamp((p - 0.06) / 0.1),
      depth: "behind"
    },
    puppet: {
      x: c.px - 10,
      y: c.py,
      scale: c.ps,
      pose: poseAt(p, [
        { p: 0, pose: { lean: 2, headTilt: 2, headTurn: 0.25, shNear: 10, shFar: 5, elNear: 12, elFar: 9, rise: -2 } },
        // 上丝后第一次被提起：肩先动，头后动
        { p: 0.34, pose: { lean: 0, headTilt: -2, headTurn: 0.1, shNear: 24, shFar: 14, elNear: 22, elFar: 16, rise: -8, sleeveLag: 6 } },
        // 旅途上的行走：交替前后摆
        { p: 0.46, pose: { lean: 5, headTilt: 2, headTurn: 0.3, shNear: 34, shFar: 22, elNear: 28, elFar: 20, thNear: -6, thFar: 6, rise: -4, sleeveLag: 10 } },
        { p: 0.56, pose: { lean: 3, headTilt: -2, headTurn: 0.45, shNear: 26, shFar: 30, elNear: 20, elFar: 26, thNear: 6, thFar: -4, rise: -6, sleeveLag: -8, tassel: 4 } },
        { p: 0.66, pose: { lean: 6, headTilt: 3, headTurn: 0.2, shNear: 36, shFar: 18, elNear: 30, elFar: 22, thNear: -4, thFar: 8, rise: -3, sleeveLag: 12 } },
        // 回到灯下：试着抬袖
        { p: 0.84, pose: { lean: 1, headTilt: -4, headTurn: 0.35, shNear: 72, shFar: 40, elNear: 46, elFar: 30, rise: -10, sleeveLag: 14, tassel: -5 } },
        { p: 1, pose: { lean: 4, headTilt: 0, headTurn: 0.2, shNear: 44, shFar: 28, elNear: 32, elFar: 24, rise: -5, sleeveLag: 8 } }
      ]),
      eyesOpen: 0.75,
      crack: 0.1
    },
    threads: {
      tension: kf(c.f, [
        [0, 0.1],
        [K(75) * c.d, 0.35],
        [K(85) * c.d, 0.62],
        [c.d, 0.7]
      ]),
      opacity: 0.9,
      visible: 1,
      // 挂丝：杆先亮起来，再一根根把线挂上
      bar: clamp((p - 0.3) / 0.06),
      mount: clamp((p - 0.33) / 0.07),
      stagger: 0.05
    },
    particles: { snow: lerp(0.8, 0.15, clamp(p / 0.5)), dust: 0.5, wind: lerp(0.4, 0.6, p) },
    light: { x: W * 0.5, y: c.horizon - H * 0.18, r: W * 0.5, intensity: lerp(0.35, 0.55, p), cool: lerp(0.9, 0.1, clamp(p / 0.6)) },
    exposure: lerp(0.82, 0.96, clamp(p / 0.4)),
    film: { grain: 0.65, vignette: 0.95 }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Scene, { ...spec });
};
var Act3 = () => {
  const c = useCtx();
  const { p, W, H } = c;
  const shots = [
    { p: 0, zoom: 1.04, y: 46, x: 0 },
    // 正面低机位
    { p: 0.2, zoom: 1.22, y: 60, x: 0 },
    { p: 0.38, zoom: 1.3, y: 30, x: -70, rot: -5 },
    // 侧向环绕
    { p: 0.56, zoom: 1.55, y: 10, x: -40, rot: -3 },
    // 幕后
    { p: 0.7, zoom: 2.61, x: 90, y: 120, rot: 0 },
    // 杆与丝线特写
    { p: 0.84, zoom: 1.9, x: 20, y: 40, rot: 0 },
    { p: 1, zoom: 1.16, x: 0, y: 30, rot: 0 }
    // 收势后拉回
  ];
  const spec = {
    frame: c.f,
    width: W,
    height: H,
    cam: cam(c.d, shots, 0.55, 6e-3),
    stageVisible: 1,
    stage: { open: lerp(0, 1, clamp(p / 0.16)), worn: 0.28, warm: 0.62, lantern: 0.9 },
    mountains: { reveal: 0.45, travel: 0.3, cold: 0.1, opacity: 0.45 },
    foreground: 0.5,
    // 台口虚焦，压出纵深
    puppeteer: {
      x: W * 0.74,
      y: c.oy,
      scale: c.os,
      pose: puppeteerAt(p, [
        { p: 0, pose: { lean: 12, armNear: 56, armFar: 50, elbowNear: 34, elbowFar: 30, age: 0.82, tremor: 0.8 } },
        { p: 0.3, pose: { lean: 10, armNear: 62, armFar: 44, elbowNear: 38, elbowFar: 26, age: 0.82, tremor: 0.9 } },
        { p: 0.55, pose: { lean: 14, armNear: 70, armFar: 58, elbowNear: 44, elbowFar: 36, age: 0.83, tremor: 1 } },
        { p: 0.8, pose: { lean: 9, armNear: 52, armFar: 46, elbowNear: 30, elbowFar: 26, age: 0.83, tremor: 1.1 } },
        { p: 1, pose: { lean: 11, armNear: 58, armFar: 50, elbowNear: 34, elbowFar: 28, age: 0.84, tremor: 1.2 } }
      ]),
      opacity: 1,
      depth: p > 0.45 && p < 0.62 ? "front" : "behind"
      // 这一段之后切到幕后视角
    },
    puppet: {
      x: c.px - 30,
      y: c.py,
      scale: c.ps,
      pose: poseAt(p, [
        // 起势：垂袖、低头
        { p: 0, pose: { lean: 6, headTilt: 6, headTurn: 0.2, shNear: 8, shFar: 4, elNear: 10, elFar: 8, rise: 0 } },
        // 抬袖：肩先被拉
        { p: 0.14, pose: { lean: 0, headTilt: -4, headTurn: 0.4, shNear: 88, shFar: 30, elNear: 54, elFar: 38, wrNear: -18, rise: -8, sleeveLag: 16 } },
        // 转身：躯干、头、飘带依次
        { p: 0.32, pose: { lean: 9, headTilt: 8, headTurn: 0.75, shNear: 130, shFar: 62, elNear: 22, elFar: 32, rise: -4, thNear: -8, thFar: 10, sleeveLag: -12, tassel: 9 } },
        // 亮相：正面、双臂展开、抬头
        { p: 0.5, pose: { lean: -3, headTilt: -6, headTurn: 0.1, shNear: 104, shFar: 96, elNear: 40, elFar: 44, wrNear: -8, wrFar: 8, rise: -12, sleeveLag: 6 } },
        // 旋身：后半圈，动作幅度最大
        { p: 0.66, pose: { lean: 12, headTilt: 10, headTurn: -0.6, shNear: 120, shFar: 40, elNear: 30, elFar: 54, rise: -3, thNear: 10, thFar: -6, sleeveLag: -16, tassel: -8 } },
        // 收势：慢慢落回，最后一拍停住
        { p: 0.88, pose: { lean: 3, headTilt: -2, headTurn: 0.3, shNear: 46, shFar: 30, elNear: 34, elFar: 26, rise: -6, sleeveLag: 10 } },
        { p: 1, pose: { lean: 2, headTilt: 0, headTurn: 0.25, shNear: 42, shFar: 28, elNear: 32, elFar: 24, rise: -5, sleeveLag: 6 } }
      ]),
      eyesOpen: 1
    },
    threads: {
      tension: 0.82,
      opacity: 0.95,
      visible: 1,
      bar: 1,
      mount: 1
    },
    particles: { dust: 0.55, wind: 0.25 },
    light: { x: W * 0.46, y: c.horizon - H * 0.2, r: W * 0.44, intensity: 0.6 },
    exposure: 0.98,
    film: { grain: 0.45, vignette: 0.78 }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Scene, { ...spec });
};
var Act4 = () => {
  const c = useCtx();
  const { p, W, H } = c;
  const shots = [
    { p: 0, zoom: 3.03, x: 260, y: 220 },
    // 老人手部特写（发抖）
    { p: 0.26, zoom: 2.67, x: 60, y: 150 },
    // 木偶关节
    { p: 0.5, zoom: 1.6, x: 0, y: 40 },
    // 中景：两人距离
    { p: 0.78, zoom: 1.2, x: -20, y: 20 },
    { p: 1, zoom: 0.95, x: -30, y: 0 }
    // 拉远
  ];
  const spec = {
    frame: c.f,
    width: W,
    height: H,
    cam: cam(c.d, shots, 0.22, 3e-3),
    stageVisible: 1,
    stage: { open: 0.7, worn: lerp(0.5, 0.96, clamp(p / 0.7)), warm: lerp(0.34, 0.16, p), lantern: lerp(0.5, 0.22, p), frost: 0.35 },
    mountains: { reveal: 0.6, travel: 0.4, cold: lerp(0.3, 0.75, p), opacity: 0.28 },
    puppeteer: {
      x: W * 0.78,
      y: c.oy + 10 * p,
      scale: c.os,
      pose: puppeteerAt(p, [
        { p: 0, pose: { lean: 16, armNear: 48, armFar: 42, elbowNear: 26, elbowFar: 22, age: 0.88, tremor: 3 } },
        { p: 0.4, pose: { lean: 20, armNear: 40, armFar: 36, elbowNear: 20, elbowFar: 18, age: 0.92, tremor: 3.6 } },
        // 矛盾：手垂下，又抬起来
        { p: 0.6, pose: { lean: 24, armNear: 22, armFar: 20, elbowNear: 10, elbowFar: 9, age: 0.94, tremor: 4.2 } },
        { p: 0.8, pose: { lean: 18, armNear: 44, armFar: 38, elbowNear: 24, elbowFar: 20, age: 0.95, tremor: 4.6 } },
        { p: 1, pose: { lean: 20, armNear: 38, armFar: 34, elbowNear: 20, elbowFar: 17, age: 0.96, tremor: 5 } }
      ]),
      opacity: 0.95,
      depth: "behind"
    },
    puppet: {
      x: c.px - 40,
      y: c.py,
      scale: c.ps,
      pose: poseAt(p, [
        { p: 0, pose: { lean: 3, headTilt: 2, headTurn: -0.5, shNear: 30, shFar: 20, elNear: 24, elFar: 18, rise: -3 } },
        // 被放下时失重下沉，再勉强站住
        { p: 0.55, pose: { lean: 8, headTilt: 10, headTurn: -0.2, shNear: 14, shFar: 10, elNear: 10, elFar: 8, rise: 5, sleeveLag: -8 } },
        { p: 0.8, pose: { lean: 4, headTilt: 6, headTurn: -0.55, shNear: 22, shFar: 15, elNear: 16, elFar: 13, rise: 1, sleeveLag: -4 } },
        { p: 1, pose: { lean: 5, headTilt: 8, headTurn: -0.6, shNear: 16, shFar: 12, elNear: 12, elFar: 10, rise: 3 } }
      ]),
      eyesOpen: lerp(0.9, 0.4, clamp(p / 0.8)),
      crack: clamp(p / 0.85),
      ash: clamp((p - 0.5) / 0.5) * 0.25,
      tear: 0.5
    },
    threads: {
      tension: lerp(0.7, 0.24, p),
      opacity: lerp(0.85, 0.6, p),
      visible: 1,
      bar: 1,
      mount: 1
    },
    particles: { dust: 0.6, snow: 0.25, wind: 0.3 },
    light: { x: W * 0.48, y: c.horizon - H * 0.2, r: W * 0.36, intensity: lerp(0.45, 0.28, p), cool: lerp(0.2, 0.6, p) },
    exposure: lerp(0.94, 0.86, p),
    film: { grain: 0.6, vignette: 1 }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Scene, { ...spec });
};
var Act5 = () => {
  const c = useCtx();
  const { p, W, H } = c;
  const headY = c.py - 150 * c.ps;
  const z = p < 0.24 ? 6.8 : p < 0.46 ? 5.4 : lerp(2.6, 0.92, clamp((p - 0.46) / 0.54));
  const cxw = p < 0.24 ? c.px + 14 : p < 0.46 ? W * 0.78 : lerp(c.px - 60, c.px - 100, clamp((p - 0.46) / 0.54));
  const cyw = p < 0.24 ? headY + 26 : p < 0.46 ? c.oy - 150 * c.os : lerp(headY + 80, c.py - 40, clamp((p - 0.46) / 0.54));
  const spec = {
    frame: c.f,
    width: W,
    height: H,
    cam: { kfs: [{ at: 0, ...focus(cxw, cyw, z, W, H) }], shake: 0.3, breath: 4e-3 },
    stageVisible: 1,
    stage: { open: 0.3, worn: 0.85, warm: 0.12, lantern: 0.3, frost: 1 },
    mountains: { reveal: 0.55, travel: 0.5, cold: 1, opacity: 0.22 },
    puppeteer: {
      x: lerp(W * 0.76, W * 0.8, p),
      y: c.oy + 8,
      scale: c.os,
      pose: puppeteerAt(p, [
        { p: 0, pose: { lean: 22, armNear: 34, armFar: 30, elbowNear: 16, elbowFar: 14, age: 0.96, tremor: 4.4 } },
        { p: 0.5, pose: { lean: 25, armNear: 26, armFar: 24, elbowNear: 12, elbowFar: 11, age: 0.97, tremor: 5.2 } },
        { p: 1, pose: { lean: 26, armNear: 20, armFar: 18, elbowNear: 9, elbowFar: 8, age: 0.98, tremor: 5.6 } }
      ]),
      opacity: 0.92,
      depth: "behind"
    },
    puppet: {
      x: c.px - 130,
      y: c.py,
      scale: c.ps,
      pose: poseAt(p, [
        { p: 0, pose: { lean: 5, headTilt: 4, headTurn: -0.55, shNear: 24, shFar: 16, elNear: 18, elFar: 14, rise: 3 } },
        { p: 0.3, pose: { lean: 3, headTilt: 10, headTurn: -0.7, shNear: 18, shFar: 12, elNear: 14, elFar: 11, rise: 4, tassel: 9 } },
        { p: 0.72, pose: { lean: 6, headTilt: 6, headTurn: -0.5, shNear: 12, shFar: 9, elNear: 9, elFar: 7, rise: 6, sleeveLag: -12 } },
        { p: 1, pose: { lean: 7, headTilt: 3, headTurn: -0.35, shNear: 9, shFar: 7, elNear: 7, elFar: 6, rise: 7, sleeveLag: -14 } }
      ]),
      eyesOpen: 0.75,
      tear: clamp((p - 0.12) / 0.2),
      crack: 0.7,
      ash: 0.25
    },
    threads: {
      tension: lerp(0.55, 0.16, p),
      broken: clamp((p - 0.55) / 0.6) * 0.3,
      // 个别先断，还没断完
      opacity: 0.55,
      visible: 1,
      bar: 1,
      mount: 1,
      stagger: 0.2
    },
    particles: { snow: 1, dust: 0.2, wind: 0.7 },
    light: { x: W * 0.4, y: c.horizon - H * 0.2, r: W * 0.4, intensity: lerp(0.3, 0.2, p), cool: 1 },
    exposure: lerp(0.9, 0.84, p),
    film: { grain: 0.55, vignette: 1 }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Scene, { ...spec });
};
var Act6 = () => {
  const c = useCtx();
  const { p, W, H } = c;
  const fireI = kf(c.f, [
    [0, 0],
    [0.06 * c.d, 0.2],
    [0.2 * c.d, 0.45],
    [0.3 * c.d, 0.8],
    [0.45 * c.d, 1],
    [0.88 * c.d, 1],
    [0.96 * c.d, 0.35],
    [c.d, 0.12]
  ]);
  const broken = kf(c.f, [
    [0, 0],
    [0.5 * c.d, 0],
    [0.68 * c.d, 1],
    [c.d, 1]
  ]);
  const shots = [
    { p: 0, zoom: 1.02, y: 40, x: 0 },
    // 抱着木偶走向柴堆
    { p: 0.16, zoom: 1.3, y: 60, x: -30 },
    { p: 0.28, zoom: 1.8, y: 70, x: 20 },
    // 投入火中
    { p: 0.44, zoom: 1.58, y: 60, x: 10 },
    // 火中静止、抬头
    { p: 0.58, zoom: 1.82, y: 50, x: 0, rot: -1 },
    // 断丝
    { p: 0.74, zoom: 1.95, y: 95, x: 10, rot: 0 },
    // 谢幕（火要完整在画面里）
    { p: 0.9, zoom: 1.6, y: 80, x: 0 },
    // 老人伸手
    { p: 1, zoom: 1.45, y: 70, x: 0 }
  ];
  const spec = {
    frame: c.f,
    width: W,
    height: H,
    cam: cam(c.d, shots, 0.5, 5e-3),
    stageVisible: lerp(1, 0.7, p),
    stage: { open: 0.34, worn: 0.98, warm: 0.1, lantern: lerp(0.22, 0.06, p), frost: 0.5 },
    mountains: { reveal: 0.3, travel: 0.4, cold: 0.9, opacity: 0.16 },
    puppeteer: {
      x: W * 0.78,
      y: c.oy,
      scale: c.os,
      pose: puppeteerAt(p, [
        { p: 0, pose: { lean: 26, armNear: 20, armFar: 18, elbowNear: 10, elbowFar: 9, age: 0.98, tremor: 5 } },
        // 放下：双手前伸
        { p: 0.2, pose: { lean: 34, armNear: 76, armFar: 70, elbowNear: 30, elbowFar: 26, age: 0.98, tremor: 4 } },
        { p: 0.3, pose: { lean: 38, armNear: 88, armFar: 82, elbowNear: 20, elbowFar: 18, age: 0.98, tremor: 3 } },
        // 丝线断了，手慢慢落下
        { p: 0.62, pose: { lean: 30, armNear: 44, armFar: 40, elbowNear: 16, elbowFar: 14, age: 0.98, tremor: 2 } },
        // 最后的徒劳：伸手去接
        { p: 0.86, pose: { lean: 40, armNear: 84, armFar: 78, elbowNear: 26, elbowFar: 22, age: 0.99, tremor: 3.4 } },
        { p: 1, pose: { lean: 44, armNear: 72, armFar: 66, elbowNear: 34, elbowFar: 30, age: 1, tremor: 2.6 } }
      ]),
      opacity: lerp(0.95, 0.8, p),
      depth: "behind"
    },
    puppet: {
      x: c.px - 60,
      y: c.py,
      scale: c.ps,
      pose: poseAt(p, [
        // 被抱/被举：身体微微后仰，四肢松弛
        { p: 0, pose: { lean: -4, headTilt: 8, headTurn: -0.2, shNear: 16, shFar: 12, elNear: 12, elFar: 10, rise: -4 } },
        { p: 0.14, pose: { lean: -8, headTilt: 12, headTurn: 0, shNear: 10, shFar: 8, elNear: 8, elFar: 6, rise: -10, sleeveLag: -10 } },
        // 落进火里：失重
        { p: 0.26, pose: { lean: 10, headTilt: 14, headTurn: 0.1, shNear: 4, shFar: 4, elNear: 4, elFar: 4, rise: 8, sleeveLag: -14 } },
        // 静止，然后抬头（主动，不是被拉）
        { p: 0.4, pose: { lean: 2, headTilt: 6, headTurn: -0.1, shNear: 8, shFar: 6, elNear: 6, elFar: 5, rise: 4 } },
        { p: 0.52, pose: { lean: -2, headTilt: -8, headTurn: -0.35, shNear: 20, shFar: 14, elNear: 16, elFar: 12, rise: 0 } },
        // 断丝之后：抬手、转向老人
        { p: 0.62, pose: { lean: -3, headTilt: -10, headTurn: -0.5, shNear: 44, shFar: 26, elNear: 34, elFar: 22, rise: -2, sleeveLag: 8 } },
        // 独自谢幕（与第三幕收势同源）
        { p: 0.76, pose: { ...BOW_POSE, lean: -9, headTilt: -12, rise: -8 } },
        { p: 0.86, pose: BOW_POSE },
        { p: 1, pose: BOW_POSE }
      ]),
      eyesOpen: p < 0.5 ? 0.85 : 1,
      crack: 0.6,
      ash: lerp(0.15, 0.5, p),
      tear: 0.7
    },
    threads: {
      tension: lerp(0.6, 0.1, clamp(p / 0.45)),
      broken,
      glow: 1,
      opacity: 0.95,
      visible: 1,
      bar: 1,
      mount: 1,
      stagger: 0.1
    },
    fire: { intensity: fireI, x: c.px - 70, y: c.floor + 4, width: W * 0.5, height: H * 0.4, embers: 60 },
    particles: { ash: 0.6, dust: 0.3, wind: 0.4 },
    light: { x: c.px - 70, y: c.floor - H * 0.24, r: W * 0.5, intensity: lerp(0.7, 0.85, p) },
    exposure: lerp(0.98, 0.93, p),
    film: { grain: 0.65, vignette: 1 }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Scene, { ...spec });
};
var Act7 = () => {
  const c = useCtx();
  const { p, W, H } = c;
  const shots = [
    { p: 0, zoom: 1.5, y: 26, x: 0 },
    { p: 0.28, zoom: 1.16, y: 22, x: 0 },
    { p: 0.62, zoom: 0.72, y: 0, x: 0 },
    { p: 0.86, zoom: 0.56, y: -8, x: 0 },
    { p: 1, zoom: 0.52, y: -12, x: 0 }
  ];
  const spec = {
    frame: c.f,
    width: W,
    height: H,
    cam: cam(c.d, shots, 0.12, 2e-3),
    stageVisible: lerp(0.7, 0.42, clamp(p / 0.7)),
    stage: { open: 0.34, worn: 1, warm: lerp(0.1, 0.06, p), lantern: lerp(0.06, 0, clamp(p / 0.4)), frost: 0.4 },
    mountains: { reveal: 0.3, travel: 0.4, cold: lerp(0.9, 0.55, p), opacity: lerp(0.16, 0.06, p) },
    puppeteer: {
      x: W * 0.78,
      y: c.oy,
      scale: c.os,
      pose: puppeteerAt(p, [
        // 独坐：整个身体沉下去
        { p: 0, pose: { lean: 44, armNear: 72, armFar: 66, elbowNear: 34, elbowFar: 30, age: 1, tremor: 2.4 } },
        { p: 0.4, pose: { lean: 50, armNear: 30, armFar: 28, elbowNear: 16, elbowFar: 14, age: 1, tremor: 1.4 } },
        { p: 1, pose: { lean: 52, armNear: 22, armFar: 20, elbowNear: 10, elbowFar: 9, age: 1, tremor: 0.8 } }
      ]),
      opacity: lerp(0.8, 0.7, p),
      depth: "behind"
    },
    puppet: {
      x: c.px - 60,
      y: c.py,
      scale: c.ps,
      pose: poseAt(p, [
        { p: 0, pose: BOW_POSE },
        { p: 0.3, pose: { ...BOW_POSE, rise: 2, headTilt: -8 } },
        { p: 1, pose: { ...BOW_POSE, rise: 2, headTilt: -8 } }
      ]),
      eyesOpen: lerp(1, 0.2, clamp(p / 0.25)),
      crack: 0.9,
      ash: 0.8,
      tear: 0.8,
      // 她已经不在了：只留一小段残影，然后化掉
      opacity: lerp(0.85, 0, clamp((p - 0.06) / 0.22))
    },
    threads: {
      tension: 0.06,
      broken: 1,
      glow: 0,
      opacity: 0.45,
      visible: 1,
      bar: 1,
      mount: 1,
      stagger: 0.1
    },
    fire: { intensity: lerp(0.12, 0, clamp(p / 0.3)), x: c.px - 70, y: c.floor + 4, width: W * 0.3, height: H * 0.14 },
    particles: { ash: lerp(0.6, 0.15, clamp(p / 0.6)), snow: 0.35 * (1 - clamp(p / 0.4)), dust: 0.3, wind: 0.3 },
    // 晨光：冷 → 极淡的暖，最后一点光落在台上
    light: { x: W * 0.42, y: c.horizon - H * 0.1, r: W * 0.5, intensity: lerp(0.24, 0.42, clamp((p - 0.4) / 0.4)), cool: lerp(1, 0.25, clamp((p - 0.5) / 0.5)) },
    exposure: kf(c.f, [
      [0, 0.9],
      [0.3 * c.d, 0.82],
      [0.7 * c.d, 0.7],
      [0.94 * c.d, 0.62],
      [c.d, 0.5]
    ]),
    film: { grain: 0.7, vignette: 1 }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Scene, { ...spec });
};
var ACTS = [Act1, Act2, Act3, Act4, Act5, Act6, Act7];
var __PHASE_COUNT = PHASES.length;

// offline/main.tsx
var spans = SECTIONS.map((s, i) => ({ ...sectionFrames(s), index: i }));
var TOTAL = spans.reduce((m, s) => Math.max(m, s.from + s.duration), 0);
var arg = (name, def) => {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : def;
};
var flag = (name) => process.argv.includes(`--${name}`);
var ENGINE = arg("engine", "resvg");
var buildSvg = (globalFrame) => {
  const span = spans.find((s) => globalFrame >= s.from && globalFrame < s.from + s.duration) ?? spans[spans.length - 1];
  const local = globalFrame - span.from;
  __set({ frame: local, durationInFrames: span.duration, width: VIDEO.width, height: VIDEO.height, fps: VIDEO.fps });
  const Act = ACTS[span.index];
  const markup = (0, import_server.renderToStaticMarkup)(import_react2.default.createElement(Act));
  return markup.includes("http://www.w3.org/2000/svg") ? markup : markup.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"');
};
var renderOne = async (globalFrame) => {
  const svg = buildSvg(globalFrame);
  if (flag("dump")) {
    import_node_fs.default.writeFileSync(`/tmp/frame-${globalFrame}.svg`, svg);
    process.stdout.write(`dump /tmp/frame-${globalFrame}.svg
`);
  }
  if (ENGINE === "sharp") {
    const sharp = (await Promise.resolve().then(() => __toESM(require_lib()))).default;
    const density = Number(arg("density", "72"));
    return await sharp(Buffer.from(svg), { density }).png({ compressionLevel: 3 }).toBuffer();
  }
  const { Resvg } = await import("@resvg/resvg-js");
  return new Resvg(svg, { fitTo: { mode: "width", value: VIDEO.width }, background: "#000000" }).render().asPng();
};
var runWorker = async () => {
  const from = Number(arg("from", "0"));
  const to = Number(arg("to", String(TOTAL)));
  const outDir = arg("out", "out/frames");
  import_node_fs.default.mkdirSync(outDir, { recursive: true });
  const t0 = Date.now();
  for (let f = from; f < to; f++) {
    const target = import_node_path.default.join(outDir, `f${String(f).padStart(5, "0")}.png`);
    if (import_node_fs.default.existsSync(target) && import_node_fs.default.statSync(target).size > 1e3) continue;
    const png = await renderOne(f);
    import_node_fs.default.writeFileSync(target, png);
    if ((f - from) % 20 === 0) {
      const el = (Date.now() - t0) / 1e3;
      const rate = (f - from + 1) / Math.max(el, 1e-3);
      process.stdout.write(
        `[${from}-${to}] ${f}  ${rate.toFixed(2)} fps  eta ${((to - f) / Math.max(rate, 0.01) / 60).toFixed(1)}m
`
      );
    }
  }
  process.stdout.write(`[${from}-${to}] done
`);
};
var runParent = async () => {
  const outDir = arg("out", "out/frames");
  import_node_fs.default.mkdirSync(outDir, { recursive: true });
  const only = arg("frames");
  if (only) {
    for (const s of only.split(",")) {
      const f = Number(s);
      const t0 = Date.now();
      const png = await renderOne(f);
      const p = import_node_path.default.join(outDir, `still-${String(f).padStart(5, "0")}.png`);
      import_node_fs.default.writeFileSync(p, png);
      process.stdout.write(`frame ${f} -> ${p} (${Date.now() - t0}ms, ${(png.length / 1024).toFixed(0)}KB)
`);
    }
    return;
  }
  const from = Number(arg("from", "0"));
  const to = Number(arg("to", String(TOTAL)));
  const workers = Math.max(1, Number(arg("workers", "4")));
  const chunk = Math.ceil((to - from) / workers);
  const jobs = [];
  for (let w = 0; w < workers; w++) {
    const a = from + w * chunk;
    const b = Math.min(to, a + chunk);
    if (a >= b) continue;
    jobs.push(
      new Promise((resolve, reject) => {
        const child = (0, import_node_child_process.spawn)(
          process.execPath,
          [__filename, "--from", String(a), "--to", String(b), "--out", outDir, "--worker", "--engine", ENGINE],
          { stdio: "inherit" }
        );
        child.on("exit", (code) => code === 0 ? resolve() : reject(new Error(`worker ${a}-${b} exit ${code}`)));
      })
    );
  }
  await Promise.all(jobs);
  process.stdout.write(`all frames ${from}-${to} done
`);
};
if (flag("worker")) {
  runWorker().catch((e) => {
    console.error(e);
    process.exit(1);
  });
} else {
  runParent().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-server-legacy.node.production.min.js:
  (**
   * @license React
   * react-dom-server-legacy.node.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-server.node.production.min.js:
  (**
   * @license React
   * react-dom-server.node.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

sharp/lib/is.js:
sharp/lib/libvips.js:
sharp/lib/sharp.js:
sharp/lib/constructor.js:
sharp/lib/input.js:
sharp/lib/resize.js:
sharp/lib/composite.js:
sharp/lib/operation.js:
sharp/lib/colour.js:
sharp/lib/channel.js:
sharp/lib/output.js:
sharp/lib/utility.js:
sharp/lib/index.js:
  (*!
    Copyright 2013 Lovell Fuller and others.
    SPDX-License-Identifier: Apache-2.0
  *)
*/
