(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["JuicyPlayer"] = factory();
	else
		root["JuicyPlayer"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@emotion/hash/dist/hash.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.esm.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash2_32_gc(str) {
  var l = str.length,
      h = l ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return (h >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmurhash2_32_gc);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.esm.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e, m).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e, m).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        switch (d.constructor) {
          case Array:
            for (var c = 0, e = d.length; c < e; ++c) {
              T(d[c]);
            }

            break;

          case Function:
            S[A++] = d;
            break;

          case Boolean:
            Y = !!d | 0;
        }

    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.esm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/create-emotion/dist/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/create-emotion/dist/index.esm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.esm.js");
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/hash.esm.js");
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.esm.js");
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stylis-rule-sheet */ "./node_modules/stylis-rule-sheet/index.js");
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4__);






var hyphenateRegex = /[A-Z]|^ms/g;
var processStyleName = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (styleName) {
  return styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});
var processStyleValue = function processStyleValue(key, value) {
  if (value == null || typeof value === 'boolean') {
    return '';
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && key.charCodeAt(1) !== 45 && // custom properties
  !isNaN(value) && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    return oldProcessStyleValue(key, value);
  };
}

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'function':
        if (true) {
          console.error('Passing functions to cx is deprecated and will be removed in the next major version of Emotion.\n' + 'Please call the function before passing it to cx.');
        }

        toAdd = classnames([arg()]);
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};
var isBrowser = typeof document !== 'undefined';

/*

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance
- 'polyfills' on server side

// usage

import StyleSheet from 'glamor/lib/sheet'
let styleSheet = new StyleSheet()

styleSheet.inject()
- 'injects' the stylesheet into the page (or into memory if on server)

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function makeStyleTag(opts) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', opts.key || '');

  if (opts.nonce !== undefined) {
    tag.setAttribute('nonce', opts.nonce);
  }

  tag.appendChild(document.createTextNode('')) // $FlowFixMe
  ;
  (opts.container !== undefined ? opts.container : document.head).appendChild(tag);
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = "development" === 'production'; // the big drawback here is that the css won't be editable in devtools

    this.tags = [];
    this.ctr = 0;
    this.opts = options;
  }

  var _proto = StyleSheet.prototype;

  _proto.inject = function inject() {
    if (this.injected) {
      throw new Error('already injected!');
    }

    this.tags[0] = makeStyleTag(this.opts);
    this.injected = true;
  };

  _proto.speedy = function speedy(bool) {
    if (this.ctr !== 0) {
      // cannot change speedy mode after inserting any rule to sheet. Either call speedy(${bool}) earlier in your app, or call flush() before speedy(${bool})
      throw new Error("cannot change speedy now");
    }

    this.isSpeedy = !!bool;
  };

  _proto.insert = function insert(rule, sourceMap) {
    // this is the ultrafast version, works across browsers
    if (this.isSpeedy) {
      var tag = this.tags[this.tags.length - 1];
      var sheet = sheetForTag(tag);

      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (true) {
          console.warn('illegal rule', rule); // eslint-disable-line no-console
        }
      }
    } else {
      var _tag = makeStyleTag(this.opts);

      this.tags.push(_tag);

      _tag.appendChild(document.createTextNode(rule + (sourceMap || '')));
    }

    this.ctr++;

    if (this.ctr % 65000 === 0) {
      this.tags.push(makeStyleTag(this.opts));
    }
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0; // todo - look for remnants in document.styleSheets

    this.injected = false;
  };

  return StyleSheet;
}();

function createEmotion(context, options) {
  if (context.__SECRET_EMOTION__ !== undefined) {
    return context.__SECRET_EMOTION__;
  }

  if (options === undefined) options = {};
  var key = options.key || 'css';

  if (true) {
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var current;

  function insertRule(rule) {
    current += rule;

    if (isBrowser) {
      sheet.insert(rule, currentSourceMap);
    }
  }

  var insertionPlugin = stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4___default()(insertRule);
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var caches = {
    registered: {},
    inserted: {},
    nonce: options.nonce,
    key: key
  };
  var sheet = new StyleSheet(options);

  if (isBrowser) {
    // 🚀
    sheet.inject();
  }

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](stylisOptions);
  stylis.use(options.stylisPlugins)(insertionPlugin);
  var currentSourceMap = '';

  function handleInterpolation(interpolation, couldBeSelectorInterpolation) {
    if (interpolation == null) {
      return '';
    }

    switch (typeof interpolation) {
      case 'boolean':
        return '';

      case 'function':
        if (interpolation.__emotion_styles !== undefined) {
          var selector = interpolation.toString();

          if (selector === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
          }

          return selector;
        }

        if (this === undefined && "development" !== 'production') {
          console.error('Interpolating functions in css calls is deprecated and will be removed in the next major version of Emotion.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        return handleInterpolation.call(this, this === undefined ? interpolation() : // $FlowFixMe
        interpolation(this.mergedProps, this.context), couldBeSelectorInterpolation);

      case 'object':
        return createStringFromObject.call(this, interpolation);

      default:
        var cached = caches.registered[interpolation];
        return couldBeSelectorInterpolation === false && cached !== undefined ? cached : interpolation;
    }
  }

  var objectToStringCache = new WeakMap();

  function createStringFromObject(obj) {
    if (objectToStringCache.has(obj)) {
      // $FlowFixMe
      return objectToStringCache.get(obj);
    }

    var string = '';

    if (Array.isArray(obj)) {
      obj.forEach(function (interpolation) {
        string += handleInterpolation.call(this, interpolation, false);
      }, this);
    } else {
      Object.keys(obj).forEach(function (key) {
        if (typeof obj[key] !== 'object') {
          if (caches.registered[obj[key]] !== undefined) {
            string += key + "{" + caches.registered[obj[key]] + "}";
          } else {
            string += processStyleName(key) + ":" + processStyleValue(key, obj[key]) + ";";
          }
        } else {
          if (key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
          }

          if (Array.isArray(obj[key]) && typeof obj[key][0] === 'string' && caches.registered[obj[key][0]] === undefined) {
            obj[key].forEach(function (value) {
              string += processStyleName(key) + ":" + processStyleValue(key, value) + ";";
            });
          } else {
            string += key + "{" + handleInterpolation.call(this, obj[key], false) + "}";
          }
        }
      }, this);
    }

    objectToStringCache.set(obj, string);
    return string;
  }

  var name;
  var stylesWithLabel;
  var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;

  var createClassName = function createClassName(styles, identifierName) {
    return Object(_emotion_hash__WEBPACK_IMPORTED_MODULE_2__["default"])(styles + identifierName) + identifierName;
  };

  if (true) {
    var oldCreateClassName = createClassName;
    var sourceMappingUrlPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;

    createClassName = function createClassName(styles, identifierName) {
      return oldCreateClassName(styles.replace(sourceMappingUrlPattern, function (sourceMap) {
        currentSourceMap = sourceMap;
        return '';
      }), identifierName);
    };
  }

  var createStyles = function createStyles(strings) {
    var stringMode = true;
    var styles = '';
    var identifierName = '';

    if (strings == null || strings.raw === undefined) {
      stringMode = false;
      styles += handleInterpolation.call(this, strings, false);
    } else {
      styles += strings[0];
    }

    for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    interpolations.forEach(function (interpolation, i) {
      styles += handleInterpolation.call(this, interpolation, styles.charCodeAt(styles.length - 1) === 46 // .
      );

      if (stringMode === true && strings[i + 1] !== undefined) {
        styles += strings[i + 1];
      }
    }, this);
    stylesWithLabel = styles;
    styles = styles.replace(labelPattern, function (match, p1) {
      identifierName += "-" + p1;
      return '';
    });
    name = createClassName(styles, identifierName);
    return styles;
  };

  if (true) {
    var oldStylis = stylis;

    stylis = function stylis(selector, styles) {
      oldStylis(selector, styles);
      currentSourceMap = '';
    };
  }

  function insert(scope, styles) {
    if (caches.inserted[name] === undefined) {
      current = '';
      stylis(scope, styles);
      caches.inserted[name] = current;
    }
  }

  var css = function css() {
    var styles = createStyles.apply(this, arguments);
    var selector = key + "-" + name;

    if (caches.registered[selector] === undefined) {
      caches.registered[selector] = stylesWithLabel;
    }

    insert("." + selector, styles);
    return selector;
  };

  var keyframes = function keyframes() {
    var styles = createStyles.apply(this, arguments);
    var animation = "animation-" + name;
    insert('', "@keyframes " + animation + "{" + styles + "}");
    return animation;
  };

  var injectGlobal = function injectGlobal() {
    var styles = createStyles.apply(this, arguments);
    insert('', styles);
  };

  function getRegisteredStyles(registeredStyles, classNames) {
    var rawClassName = '';
    classNames.split(' ').forEach(function (className) {
      if (caches.registered[className] !== undefined) {
        registeredStyles.push(className);
      } else {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }

  function merge(className, sourceMap) {
    var registeredStyles = [];
    var rawClassName = getRegisteredStyles(registeredStyles, className);

    if (registeredStyles.length < 2) {
      return className;
    }

    return rawClassName + css(registeredStyles, sourceMap);
  }

  function cx() {
    for (var _len2 = arguments.length, classNames = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      classNames[_key2] = arguments[_key2];
    }

    return merge(classnames(classNames));
  }

  function hydrateSingleId(id) {
    caches.inserted[id] = true;
  }

  function hydrate(ids) {
    ids.forEach(hydrateSingleId);
  }

  function flush() {
    if (isBrowser) {
      sheet.flush();
      sheet.inject();
    }

    caches.inserted = {};
    caches.registered = {};
  }

  if (isBrowser) {
    var chunks = document.querySelectorAll("[data-emotion-" + key + "]");
    Array.prototype.forEach.call(chunks, function (node) {
      // $FlowFixMe
      sheet.tags[0].parentNode.insertBefore(node, sheet.tags[0]); // $FlowFixMe

      node.getAttribute("data-emotion-" + key).split(' ').forEach(hydrateSingleId);
    });
  }

  var emotion = {
    flush: flush,
    hydrate: hydrate,
    cx: cx,
    merge: merge,
    getRegisteredStyles: getRegisteredStyles,
    injectGlobal: injectGlobal,
    keyframes: keyframes,
    css: css,
    sheet: sheet,
    caches: caches
  };
  context.__SECRET_EMOTION__ = emotion;
  return emotion;
}

/* harmony default export */ __webpack_exports__["default"] = (createEmotion);


/***/ }),

/***/ "./node_modules/emotion/dist/index.esm.js":
/*!************************************************!*\
  !*** ./node_modules/emotion/dist/index.esm.js ***!
  \************************************************/
/*! exports provided: flush, hydrate, cx, merge, getRegisteredStyles, injectGlobal, keyframes, css, sheet, caches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cx", function() { return cx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectGlobal", function() { return injectGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sheet", function() { return sheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caches", function() { return caches; });
/* harmony import */ var create_emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! create-emotion */ "./node_modules/create-emotion/dist/index.esm.js");


var context = typeof global !== 'undefined' ? global : {};

var _createEmotion = Object(create_emotion__WEBPACK_IMPORTED_MODULE_0__["default"])(context),
    flush = _createEmotion.flush,
    hydrate = _createEmotion.hydrate,
    cx = _createEmotion.cx,
    merge = _createEmotion.merge,
    getRegisteredStyles = _createEmotion.getRegisteredStyles,
    injectGlobal = _createEmotion.injectGlobal,
    keyframes = _createEmotion.keyframes,
    css = _createEmotion.css,
    sheet = _createEmotion.sheet,
    caches = _createEmotion.caches;



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/preact/dist/preact.umd.js":
/*!************************************************!*\
  !*** ./node_modules/preact/dist/preact.umd.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports) :
	undefined;
}(this, (function (exports) { 'use strict';

	var VNode = function VNode() {};

	var options = {};

	var stack = [];

	var EMPTY_CHILDREN = [];

	function h(nodeName, attributes) {
		var children = EMPTY_CHILDREN,
		    lastSimple = void 0,
		    child = void 0,
		    simple = void 0,
		    i = void 0;
		for (i = arguments.length; i-- > 2;) {
			stack.push(arguments[i]);
		}
		if (attributes && attributes.children != null) {
			if (!stack.length) stack.push(attributes.children);
			delete attributes.children;
		}
		while (stack.length) {
			if ((child = stack.pop()) && child.pop !== undefined) {
				for (i = child.length; i--;) {
					stack.push(child[i]);
				}
			} else {
				if (typeof child === 'boolean') child = null;

				if (simple = typeof nodeName !== 'function') {
					if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
				}

				if (simple && lastSimple) {
					children[children.length - 1] += child;
				} else if (children === EMPTY_CHILDREN) {
					children = [child];
				} else {
					children.push(child);
				}

				lastSimple = simple;
			}
		}

		var p = new VNode();
		p.nodeName = nodeName;
		p.children = children;
		p.attributes = attributes == null ? undefined : attributes;
		p.key = attributes == null ? undefined : attributes.key;

		if (options.vnode !== undefined) options.vnode(p);

		return p;
	}

	function extend(obj, props) {
	  for (var i in props) {
	    obj[i] = props[i];
	  }return obj;
	}

	function applyRef(ref, value) {
	  if (ref) {
	    if (typeof ref == 'function') ref(value);else ref.current = value;
	  }
	}

	var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

	function cloneElement(vnode, props) {
	  return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
	}

	var NO_RENDER = 0;

	var SYNC_RENDER = 1;

	var FORCE_RENDER = 2;

	var ASYNC_RENDER = 3;

	var ATTR_KEY = '__preactattr_';

	var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

	var items = [];

	function enqueueRender(component) {
		if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
			(options.debounceRendering || defer)(rerender);
		}
	}

	function rerender() {
		var p = void 0;
		while (p = items.pop()) {
			if (p._dirty) renderComponent(p);
		}
	}

	function isSameNodeType(node, vnode, hydrating) {
		if (typeof vnode === 'string' || typeof vnode === 'number') {
			return node.splitText !== undefined;
		}
		if (typeof vnode.nodeName === 'string') {
			return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
		}
		return hydrating || node._componentConstructor === vnode.nodeName;
	}

	function isNamedNode(node, nodeName) {
		return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
	}

	function getNodeProps(vnode) {
		var props = extend({}, vnode.attributes);
		props.children = vnode.children;

		var defaultProps = vnode.nodeName.defaultProps;
		if (defaultProps !== undefined) {
			for (var i in defaultProps) {
				if (props[i] === undefined) {
					props[i] = defaultProps[i];
				}
			}
		}

		return props;
	}

	function createNode(nodeName, isSvg) {
		var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
		node.normalizedNodeName = nodeName;
		return node;
	}

	function removeNode(node) {
		var parentNode = node.parentNode;
		if (parentNode) parentNode.removeChild(node);
	}

	function setAccessor(node, name, old, value, isSvg) {
		if (name === 'className') name = 'class';

		if (name === 'key') {} else if (name === 'ref') {
			applyRef(old, null);
			applyRef(value, node);
		} else if (name === 'class' && !isSvg) {
			node.className = value || '';
		} else if (name === 'style') {
			if (!value || typeof value === 'string' || typeof old === 'string') {
				node.style.cssText = value || '';
			}
			if (value && typeof value === 'object') {
				if (typeof old !== 'string') {
					for (var i in old) {
						if (!(i in value)) node.style[i] = '';
					}
				}
				for (var _i in value) {
					node.style[_i] = typeof value[_i] === 'number' && IS_NON_DIMENSIONAL.test(_i) === false ? value[_i] + 'px' : value[_i];
				}
			}
		} else if (name === 'dangerouslySetInnerHTML') {
			if (value) node.innerHTML = value.__html || '';
		} else if (name[0] == 'o' && name[1] == 'n') {
			var useCapture = name !== (name = name.replace(/Capture$/, ''));
			name = name.toLowerCase().substring(2);
			if (value) {
				if (!old) node.addEventListener(name, eventProxy, useCapture);
			} else {
				node.removeEventListener(name, eventProxy, useCapture);
			}
			(node._listeners || (node._listeners = {}))[name] = value;
		} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
			try {
				node[name] = value == null ? '' : value;
			} catch (e) {}
			if ((value == null || value === false) && name != 'spellcheck') node.removeAttribute(name);
		} else {
			var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));

			if (value == null || value === false) {
				if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
			} else if (typeof value !== 'function') {
				if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
			}
		}
	}

	function eventProxy(e) {
		return this._listeners[e.type](options.event && options.event(e) || e);
	}

	var mounts = [];

	var diffLevel = 0;

	var isSvgMode = false;

	var hydrating = false;

	function flushMounts() {
		var c = void 0;
		while (c = mounts.shift()) {
			if (options.afterMount) options.afterMount(c);
			if (c.componentDidMount) c.componentDidMount();
		}
	}

	function diff(dom, vnode, context, mountAll, parent, componentRoot) {
		if (!diffLevel++) {
			isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

			hydrating = dom != null && !(ATTR_KEY in dom);
		}

		var ret = idiff(dom, vnode, context, mountAll, componentRoot);

		if (parent && ret.parentNode !== parent) parent.appendChild(ret);

		if (! --diffLevel) {
			hydrating = false;

			if (!componentRoot) flushMounts();
		}

		return ret;
	}

	function idiff(dom, vnode, context, mountAll, componentRoot) {
		var out = dom,
		    prevSvgMode = isSvgMode;

		if (vnode == null || typeof vnode === 'boolean') vnode = '';

		if (typeof vnode === 'string' || typeof vnode === 'number') {
			if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
				if (dom.nodeValue != vnode) {
					dom.nodeValue = vnode;
				}
			} else {
				out = document.createTextNode(vnode);
				if (dom) {
					if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
					recollectNodeTree(dom, true);
				}
			}

			out[ATTR_KEY] = true;

			return out;
		}

		var vnodeName = vnode.nodeName;
		if (typeof vnodeName === 'function') {
			return buildComponentFromVNode(dom, vnode, context, mountAll);
		}

		isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

		vnodeName = String(vnodeName);
		if (!dom || !isNamedNode(dom, vnodeName)) {
			out = createNode(vnodeName, isSvgMode);

			if (dom) {
				while (dom.firstChild) {
					out.appendChild(dom.firstChild);
				}
				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

				recollectNodeTree(dom, true);
			}
		}

		var fc = out.firstChild,
		    props = out[ATTR_KEY],
		    vchildren = vnode.children;

		if (props == null) {
			props = out[ATTR_KEY] = {};
			for (var a = out.attributes, i = a.length; i--;) {
				props[a[i].name] = a[i].value;
			}
		}

		if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
			if (fc.nodeValue != vchildren[0]) {
				fc.nodeValue = vchildren[0];
			}
		} else if (vchildren && vchildren.length || fc != null) {
				innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
			}

		diffAttributes(out, vnode.attributes, props);

		isSvgMode = prevSvgMode;

		return out;
	}

	function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
		var originalChildren = dom.childNodes,
		    children = [],
		    keyed = {},
		    keyedLen = 0,
		    min = 0,
		    len = originalChildren.length,
		    childrenLen = 0,
		    vlen = vchildren ? vchildren.length : 0,
		    j = void 0,
		    c = void 0,
		    f = void 0,
		    vchild = void 0,
		    child = void 0;

		if (len !== 0) {
			for (var i = 0; i < len; i++) {
				var _child = originalChildren[i],
				    props = _child[ATTR_KEY],
				    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
				if (key != null) {
					keyedLen++;
					keyed[key] = _child;
				} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
					children[childrenLen++] = _child;
				}
			}
		}

		if (vlen !== 0) {
			for (var _i = 0; _i < vlen; _i++) {
				vchild = vchildren[_i];
				child = null;

				var _key = vchild.key;
				if (_key != null) {
					if (keyedLen && keyed[_key] !== undefined) {
						child = keyed[_key];
						keyed[_key] = undefined;
						keyedLen--;
					}
				} else if (min < childrenLen) {
						for (j = min; j < childrenLen; j++) {
							if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
								child = c;
								children[j] = undefined;
								if (j === childrenLen - 1) childrenLen--;
								if (j === min) min++;
								break;
							}
						}
					}

				child = idiff(child, vchild, context, mountAll);

				f = originalChildren[_i];
				if (child && child !== dom && child !== f) {
					if (f == null) {
						dom.appendChild(child);
					} else if (child === f.nextSibling) {
						removeNode(f);
					} else {
						dom.insertBefore(child, f);
					}
				}
			}
		}

		if (keyedLen) {
			for (var _i2 in keyed) {
				if (keyed[_i2] !== undefined) recollectNodeTree(keyed[_i2], false);
			}
		}

		while (min <= childrenLen) {
			if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
		}
	}

	function recollectNodeTree(node, unmountOnly) {
		var component = node._component;
		if (component) {
			unmountComponent(component);
		} else {
			if (node[ATTR_KEY] != null) applyRef(node[ATTR_KEY].ref, null);

			if (unmountOnly === false || node[ATTR_KEY] == null) {
				removeNode(node);
			}

			removeChildren(node);
		}
	}

	function removeChildren(node) {
		node = node.lastChild;
		while (node) {
			var next = node.previousSibling;
			recollectNodeTree(node, true);
			node = next;
		}
	}

	function diffAttributes(dom, attrs, old) {
		var name = void 0;

		for (name in old) {
			if (!(attrs && attrs[name] != null) && old[name] != null) {
				setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
			}
		}

		for (name in attrs) {
			if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
				setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
			}
		}
	}

	var recyclerComponents = [];

	function createComponent(Ctor, props, context) {
		var inst = void 0,
		    i = recyclerComponents.length;

		if (Ctor.prototype && Ctor.prototype.render) {
			inst = new Ctor(props, context);
			Component.call(inst, props, context);
		} else {
			inst = new Component(props, context);
			inst.constructor = Ctor;
			inst.render = doRender;
		}

		while (i--) {
			if (recyclerComponents[i].constructor === Ctor) {
				inst.nextBase = recyclerComponents[i].nextBase;
				recyclerComponents.splice(i, 1);
				return inst;
			}
		}

		return inst;
	}

	function doRender(props, state, context) {
		return this.constructor(props, context);
	}

	function setComponentProps(component, props, renderMode, context, mountAll) {
		if (component._disable) return;
		component._disable = true;

		component.__ref = props.ref;
		component.__key = props.key;
		delete props.ref;
		delete props.key;

		if (typeof component.constructor.getDerivedStateFromProps === 'undefined') {
			if (!component.base || mountAll) {
				if (component.componentWillMount) component.componentWillMount();
			} else if (component.componentWillReceiveProps) {
				component.componentWillReceiveProps(props, context);
			}
		}

		if (context && context !== component.context) {
			if (!component.prevContext) component.prevContext = component.context;
			component.context = context;
		}

		if (!component.prevProps) component.prevProps = component.props;
		component.props = props;

		component._disable = false;

		if (renderMode !== NO_RENDER) {
			if (renderMode === SYNC_RENDER || options.syncComponentUpdates !== false || !component.base) {
				renderComponent(component, SYNC_RENDER, mountAll);
			} else {
				enqueueRender(component);
			}
		}

		applyRef(component.__ref, component);
	}

	function renderComponent(component, renderMode, mountAll, isChild) {
		if (component._disable) return;

		var props = component.props,
		    state = component.state,
		    context = component.context,
		    previousProps = component.prevProps || props,
		    previousState = component.prevState || state,
		    previousContext = component.prevContext || context,
		    isUpdate = component.base,
		    nextBase = component.nextBase,
		    initialBase = isUpdate || nextBase,
		    initialChildComponent = component._component,
		    skip = false,
		    snapshot = previousContext,
		    rendered = void 0,
		    inst = void 0,
		    cbase = void 0;

		if (component.constructor.getDerivedStateFromProps) {
			state = extend(extend({}, state), component.constructor.getDerivedStateFromProps(props, state));
			component.state = state;
		}

		if (isUpdate) {
			component.props = previousProps;
			component.state = previousState;
			component.context = previousContext;
			if (renderMode !== FORCE_RENDER && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
				skip = true;
			} else if (component.componentWillUpdate) {
				component.componentWillUpdate(props, state, context);
			}
			component.props = props;
			component.state = state;
			component.context = context;
		}

		component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
		component._dirty = false;

		if (!skip) {
			rendered = component.render(props, state, context);

			if (component.getChildContext) {
				context = extend(extend({}, context), component.getChildContext());
			}

			if (isUpdate && component.getSnapshotBeforeUpdate) {
				snapshot = component.getSnapshotBeforeUpdate(previousProps, previousState);
			}

			var childComponent = rendered && rendered.nodeName,
			    toUnmount = void 0,
			    base = void 0;

			if (typeof childComponent === 'function') {

				var childProps = getNodeProps(rendered);
				inst = initialChildComponent;

				if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
					setComponentProps(inst, childProps, SYNC_RENDER, context, false);
				} else {
					toUnmount = inst;

					component._component = inst = createComponent(childComponent, childProps, context);
					inst.nextBase = inst.nextBase || nextBase;
					inst._parentComponent = component;
					setComponentProps(inst, childProps, NO_RENDER, context, false);
					renderComponent(inst, SYNC_RENDER, mountAll, true);
				}

				base = inst.base;
			} else {
				cbase = initialBase;

				toUnmount = initialChildComponent;
				if (toUnmount) {
					cbase = component._component = null;
				}

				if (initialBase || renderMode === SYNC_RENDER) {
					if (cbase) cbase._component = null;
					base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
				}
			}

			if (initialBase && base !== initialBase && inst !== initialChildComponent) {
				var baseParent = initialBase.parentNode;
				if (baseParent && base !== baseParent) {
					baseParent.replaceChild(base, initialBase);

					if (!toUnmount) {
						initialBase._component = null;
						recollectNodeTree(initialBase, false);
					}
				}
			}

			if (toUnmount) {
				unmountComponent(toUnmount);
			}

			component.base = base;
			if (base && !isChild) {
				var componentRef = component,
				    t = component;
				while (t = t._parentComponent) {
					(componentRef = t).base = base;
				}
				base._component = componentRef;
				base._componentConstructor = componentRef.constructor;
			}
		}

		if (!isUpdate || mountAll) {
			mounts.push(component);
		} else if (!skip) {

			if (component.componentDidUpdate) {
				component.componentDidUpdate(previousProps, previousState, snapshot);
			}
			if (options.afterUpdate) options.afterUpdate(component);
		}

		while (component._renderCallbacks.length) {
			component._renderCallbacks.pop().call(component);
		}if (!diffLevel && !isChild) flushMounts();
	}

	function buildComponentFromVNode(dom, vnode, context, mountAll) {
		var c = dom && dom._component,
		    originalComponent = c,
		    oldDom = dom,
		    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
		    isOwner = isDirectOwner,
		    props = getNodeProps(vnode);
		while (c && !isOwner && (c = c._parentComponent)) {
			isOwner = c.constructor === vnode.nodeName;
		}

		if (c && isOwner && (!mountAll || c._component)) {
			setComponentProps(c, props, ASYNC_RENDER, context, mountAll);
			dom = c.base;
		} else {
			if (originalComponent && !isDirectOwner) {
				unmountComponent(originalComponent);
				dom = oldDom = null;
			}

			c = createComponent(vnode.nodeName, props, context);
			if (dom && !c.nextBase) {
				c.nextBase = dom;

				oldDom = null;
			}
			setComponentProps(c, props, SYNC_RENDER, context, mountAll);
			dom = c.base;

			if (oldDom && dom !== oldDom) {
				oldDom._component = null;
				recollectNodeTree(oldDom, false);
			}
		}

		return dom;
	}

	function unmountComponent(component) {
		if (options.beforeUnmount) options.beforeUnmount(component);

		var base = component.base;

		component._disable = true;

		if (component.componentWillUnmount) component.componentWillUnmount();

		component.base = null;

		var inner = component._component;
		if (inner) {
			unmountComponent(inner);
		} else if (base) {
			if (base[ATTR_KEY] != null) applyRef(base[ATTR_KEY].ref, null);

			component.nextBase = base;

			removeNode(base);
			recyclerComponents.push(component);

			removeChildren(base);
		}

		applyRef(component.__ref, null);
	}

	function Component(props, context) {
		this._dirty = true;

		this.context = context;

		this.props = props;

		this.state = this.state || {};

		this._renderCallbacks = [];
	}

	extend(Component.prototype, {
		setState: function setState(state, callback) {
			if (!this.prevState) this.prevState = this.state;
			this.state = extend(extend({}, this.state), typeof state === 'function' ? state(this.state, this.props) : state);
			if (callback) this._renderCallbacks.push(callback);
			enqueueRender(this);
		},
		forceUpdate: function forceUpdate(callback) {
			if (callback) this._renderCallbacks.push(callback);
			renderComponent(this, FORCE_RENDER);
		},
		render: function render() {}
	});

	function render(vnode, parent, merge) {
	  return diff(merge, vnode, {}, false, parent, false);
	}

	function createRef() {
		return {};
	}

	var preact = {
		h: h,
		createElement: h,
		cloneElement: cloneElement,
		createRef: createRef,
		Component: Component,
		render: render,
		rerender: rerender,
		options: options
	};

	exports.default = preact;
	exports.h = h;
	exports.createElement = h;
	exports.cloneElement = cloneElement;
	exports.createRef = createRef;
	exports.Component = Component;
	exports.render = render;
	exports.rerender = rerender;
	exports.options = options;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=preact.umd.js.map


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/stylis-rule-sheet/index.js":
/*!*************************************************!*\
  !*** ./node_modules/stylis-rule-sheet/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
	 true ? (module['exports'] = factory()) :
		undefined
}(function () {

	'use strict'

	return function (insertRule) {
		var delimiter = '/*|*/'
		var needle = delimiter+'}'

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}')
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet)
			}
		}
	}
}))


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/unistore/dist/unistore.es.js":
/*!***************************************************!*\
  !*** ./node_modules/unistore/dist/unistore.es.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function n(n,t){for(var r in t)n[r]=t[r];return n}/* harmony default export */ __webpack_exports__["default"] = (function(t){var r=[];function u(n){for(var t=[],u=0;u<r.length;u++)r[u]===n?n=null:t.push(r[u]);r=t}function e(u,e,f){t=e?u:n(n({},t),u);for(var i=r,o=0;o<i.length;o++)i[o](t,f)}return t=t||{},{action:function(n){function r(t){e(t,!1,n)}return function(){for(var u=arguments,e=[t],f=0;f<arguments.length;f++)e.push(u[f]);var i=n.apply(this,e);if(null!=i)return i.then?i.then(r):r(i)}},setState:e,subscribe:function(n){return r.push(n),function(){u(n)}},unsubscribe:u,getState:function(){return t}}});
//# sourceMappingURL=unistore.es.js.map


/***/ }),

/***/ "./node_modules/unistore/preact.js":
/*!*****************************************!*\
  !*** ./node_modules/unistore/preact.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var t=__webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");function n(t,n){for(var r in n)t[r]=n[r];return t}function r(t){this.getChildContext=function(){return{store:t.store}}}r.prototype.render=function(t){return t.children&&t.children[0]||t.children},exports.connect=function(r,e){var o;return"function"!=typeof r&&("string"==typeof(o=r||{})&&(o=o.split(/\s*,\s*/)),r=function(t){for(var n={},r=0;r<o.length;r++)n[o[r]]=t[o[r]];return n}),function(o){function i(i,u){var c=this,f=u.store,s=r(f?f.getState():{},i),a=e?function(t,n){"function"==typeof t&&(t=t(n));var r={};for(var e in t)r[e]=n.action(t[e]);return r}(e,f):{store:f},p=function(){var t=r(f?f.getState():{},i);for(var n in t)if(t[n]!==s[n])return s=t,c.setState({});for(var e in s)if(!(e in t))return s=t,c.setState({})};this.componentWillReceiveProps=function(t){i=t,p()},this.componentDidMount=function(){f.subscribe(p)},this.componentWillUnmount=function(){f.unsubscribe(p)},this.render=function(r){return t.h(o,n(n(n({},a),r),s))}}return(i.prototype=new t.Component).constructor=i}},exports.Provider=r;
//# sourceMappingURL=preact.js.map


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/assets/big-play.svg":
/*!*********************************!*\
  !*** ./src/assets/big-play.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 66 66\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><defs><path d=\"M0 30.006C0 46.582 13.44 60 30 60c16.56 0 30-13.43 30-30.006S46.56 0 30 0C13.44 0 0 13.43 0 30.006z\" id=\"b\"></path><filter x=\"-6.2%\" y=\"-6.2%\" width=\"112.5%\" height=\"112.5%\" filterUnits=\"objectBoundingBox\" id=\"a\"><feMorphology radius=\".75\" operator=\"dilate\" in=\"SourceAlpha\" result=\"shadowSpreadOuter1\"></feMorphology><feOffset in=\"shadowSpreadOuter1\" result=\"shadowOffsetOuter1\"></feOffset><feGaussianBlur stdDeviation=\"1\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"></feGaussianBlur><feComposite in=\"shadowBlurOuter1\" in2=\"SourceAlpha\" operator=\"out\" result=\"shadowBlurOuter1\"></feComposite><feColorMatrix values=\"0 0 0 0 0.563190901 0 0 0 0 0.563190901 0 0 0 0 0.563190901 0 0 0 1 0\" in=\"shadowBlurOuter1\"></feColorMatrix></filter></defs><g fill=\"none\" fill-rule=\"evenodd\"><g transform=\"translate(3 3)\"><use fill=\"#000\" filter=\"url(#a)\" xlink:href=\"#b\"></use><use stroke=\"#FFF\" stroke-width=\"1.5\" fill-opacity=\".3\" fill=\"#FFF\" xlink:href=\"#b\"></use></g><path d=\"M29.257 20.7c-.215-.24-.526-.395-.872-.395-.25 0-.49.084-.682.215-.06.036-.108.084-.155.132-.287.287-.395.682-.323 1.052V44.32c-.072.37.036.765.323 1.052.454.454 1.195.454 1.65 0L44.18 33.855c.227-.227.347-.538.335-.85 0-.31-.108-.61-.335-.848L29.257 20.7z\" fill=\"#FFF\"></path></g></svg>"

/***/ }),

/***/ "./src/assets/enter-full-screen.svg":
/*!******************************************!*\
  !*** ./src/assets/enter-full-screen.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.462 9.828l-4.277 4.277h3.412v1.825H.07V9.403h1.825v3.412l4.277-4.277 1.29 1.29zm1.94-7.933h3.413L8.537 6.172l1.29 1.29 4.278-4.277v3.412h1.825V.07H9.403v1.825z\" fill-rule=\"nonzero\"></path></svg>"

/***/ }),

/***/ "./src/assets/error.svg":
/*!******************************!*\
  !*** ./src/assets/error.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 46 40\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M45.07 36.303L24.814 1.217C24.384.472 23.588.012 22.727.012c-.86 0-1.657.46-2.088 1.205L.342 36.372c-.43.746-.43 1.665 0 2.41.43.746 1.226 1.206 2.087 1.206h40.594c1.332 0 2.41-1.08 2.41-2.41 0-.47-.133-.906-.364-1.275zm-20.275-3.67c0 1.14-.926 2.067-2.068 2.067-1.14 0-2.067-.926-2.067-2.068v-.066c0-1.142.926-2.067 2.067-2.067 1.142 0 2.068.924 2.068 2.066v.066zm0-7.554c0 1.14-.926 2.066-2.068 2.066-1.14 0-2.067-.926-2.067-2.067V14.085c0-1.14.926-2.067 2.067-2.067 1.142 0 2.068.925 2.068 2.066v10.992z\" fill-rule=\"nonzero\" fill=\"#E1E1E1\"></path></svg>"

/***/ }),

/***/ "./src/assets/exit-full-screen.svg":
/*!*****************************************!*\
  !*** ./src/assets/exit-full-screen.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M.07 14.64l4.278-4.278H.936V8.538h6.526v6.526H5.638v-3.412L1.36 15.93.07 14.64zm14.994-9.002h-3.412L15.93 1.36 14.64.07l-4.278 4.278V.936H8.537v6.527h6.527V5.638z\" fill-rule=\"nonzero\"></path></svg>"

/***/ }),

/***/ "./src/assets/pause.svg":
/*!******************************!*\
  !*** ./src/assets/pause.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 13 18\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0h3v18H0V0zm10 0h3v18h-3V0z\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./src/assets/play.svg":
/*!*****************************!*\
  !*** ./src/assets/play.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 18 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M.55 19.954c-.248.135-.55-.044-.55-.326V.368C0 .09.304-.09.55.05l16.848 9.474c.51.286.503 1.018-.01 1.296L.55 19.954z\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./src/assets/volume-off.svg":
/*!***********************************!*\
  !*** ./src/assets/volume-off.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 23 18\" xmlns=\"http://www.w3.org/2000/svg\"><g fill-rule=\"evenodd\"><path d=\"M12.215.1c-.204-.1-.448-.078-.63.06l-6.7 5.056H1.142C.56 5.216.087 5.69.087 6.27v5.46c0 .58.473 1.054 1.055 1.054h3.743l6.7 5.057c.107.08.234.122.362.122.092 0 .183-.02.268-.063.203-.103.332-.31.332-.538V.638c0-.227-.13-.435-.332-.537zm-1.288 15.46L5.52 11.48c-.095-.073-.212-.112-.33-.112H1.706V6.632H5.19c.12 0 .235-.04.33-.11l5.407-4.082v13.12z\" fill-rule=\"nonzero\"></path><path d=\"M15.224 5.224c.268-.27.672-.3.903-.07l6.72 6.72c.23.23.198.634-.07.902-.27.27-.673.3-.903.07l-6.72-6.72c-.23-.23-.2-.634.07-.902z\"></path><path d=\"M22.776 5.224c-.268-.27-.672-.3-.903-.07l-6.72 6.72c-.23.23-.198.634.07.902.27.27.673.3.903.07l6.72-6.72c.23-.23.2-.634-.07-.902z\"></path></g></svg>"

/***/ }),

/***/ "./src/assets/volume-on.svg":
/*!**********************************!*\
  !*** ./src/assets/volume-on.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 19 18\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.128.063c-.205-.102-.448-.08-.63.058l-6.7 5.058H1.054C.474 5.178 0 5.65 0 6.233v5.458c0 .583.473 1.056 1.054 1.056h3.744l6.7 5.057c.107.08.234.12.362.12.09 0 .183-.02.268-.062.203-.1.332-.31.332-.536V.6c0-.227-.13-.435-.332-.537zm-1.288 15.46L5.433 11.44c-.096-.07-.212-.11-.33-.11H1.62V6.594h3.482c.12 0 .235-.04.33-.11L10.84 2.4v13.12zm4.106-9.6c-.386 0-.7.27-.7.6V11.4c0 .33.314.6.7.6.387 0 .7-.27.7-.6V6.524c0-.332-.313-.6-.7-.6zm2.925-2.398c-.386 0-.7.268-.7.6V13.8c0 .33.314.6.7.6.387 0 .7-.27.7-.6V4.124c0-.332-.313-.6-.7-.6z\" fill-rule=\"nonzero\"></path></svg>"

/***/ }),

/***/ "./src/container.tsx":
/*!***************************!*\
  !*** ./src/container.tsx ***!
  \***************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/render */ "./src/utils/render.tsx");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! unistore/preact */ "./node_modules/unistore/preact.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(unistore_preact__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/style */ "./src/utils/style.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
/* harmony import */ var _utils_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/actions */ "./src/utils/actions.ts");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/event */ "./src/utils/event.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};








function mapStateToProps(state, props) {
    var options = state.options, plugins = state.plugins, emitter = state.emitter, properties = state.properties;
    return {
        options: options,
        plugins: plugins,
        emitter: emitter,
        properties: properties,
    };
}
var actions = {
    setIsFullScreen: _utils_actions__WEBPACK_IMPORTED_MODULE_6__["setIsFullScreen"],
};
var ContainerComponent = /** @class */ (function (_super) {
    __extends(ContainerComponent, _super);
    function ContainerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pluginName = "Container";
        _this.setRef = function (el) {
            var _loop_1 = function (item) {
                var requestFullscreen = item[0];
                var exitFullscreen = item[1];
                var fullscreenElement = item[2];
                var fullscreenchange = item[4];
                if ("on" + fullscreenchange in document) {
                    _this.enterFullScreen = function () {
                        el[requestFullscreen]();
                    };
                    _this.exitFullScreen = function () {
                        document[exitFullscreen]();
                    };
                    document.addEventListener(fullscreenchange, _this.fullScreenChanged);
                    _this.fullscreenchangeName = fullscreenchange;
                    _this.fullscreenElementName = fullscreenElement;
                    _this.el = el;
                    _this.fullScreenChanged();
                    return "break";
                }
            };
            for (var _i = 0, fullScreenApiList_1 = _utils__WEBPACK_IMPORTED_MODULE_5__["fullScreenApiList"]; _i < fullScreenApiList_1.length; _i++) {
                var item = fullScreenApiList_1[_i];
                var state_1 = _loop_1(item);
                if (state_1 === "break")
                    break;
            }
        };
        _this.fullScreenChanged = function () {
            var currentFullScreenElement = document[_this.fullscreenElementName];
            _this.props.setIsFullScreen(currentFullScreenElement === _this.el);
        };
        _this.handleToggleFullScreen = function () {
            if (_this.enterFullScreen && _this.exitFullScreen) {
                if (!_this.props.properties.isFullScreen) {
                    _this.enterFullScreen();
                }
                else {
                    _this.exitFullScreen();
                }
            }
        };
        return _this;
    }
    ContainerComponent.prototype.componentWillMount = function () {
        if (!this.props.options.controlFullScreen) {
            this.props.emitter.on(_utils_event__WEBPACK_IMPORTED_MODULE_7__["InnerEventType"].InnerToggleFullScreen, this.handleToggleFullScreen);
        }
    };
    ContainerComponent.prototype.componentWillUnmount = function () {
        if (this.props.options.controlFullScreen) {
            this.props.emitter.off(_utils_event__WEBPACK_IMPORTED_MODULE_7__["InnerEventType"].InnerToggleFullScreen, this.handleToggleFullScreen);
            document.removeEventListener(this.fullscreenchangeName, this.fullScreenChanged);
        }
    };
    ContainerComponent.prototype.render = function () {
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: styleContainer, ref: this.setRef }, Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["renderComponents"])(this.pluginName, this.props.plugins)));
    };
    return ContainerComponent;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));
var Container = Object(unistore_preact__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, actions)(ContainerComponent);
var styleContainer = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n\n  overflow: hidden;\n  background-color: #000;\n  font-family: \"PingFang SC\", Arial, \"Microsoft YaHei\", sans-serif;\n  font-size: ", ";\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-overflow-scrolling: touch;\n  user-select: none;\n\n  * {\n    box-sizing: content-box;\n    margin: 0;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  }\n"], ["\n  ", ";\n\n  overflow: hidden;\n  background-color: #000;\n  font-family: \"PingFang SC\", Arial, \"Microsoft YaHei\", sans-serif;\n  font-size: ", ";\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-overflow-scrolling: touch;\n  user-select: none;\n\n  * {\n    box-sizing: content-box;\n    margin: 0;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  }\n"])), _utils_style__WEBPACK_IMPORTED_MODULE_4__["styleAbsFull"], _utils_style__WEBPACK_IMPORTED_MODULE_4__["fontSizeDefault"]);
var templateObject_1;


/***/ }),

/***/ "./src/controls/big-play-button.tsx":
/*!******************************************!*\
  !*** ./src/controls/big-play-button.tsx ***!
  \******************************************/
/*! exports provided: bigPlayButtonPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bigPlayButtonPlugin", function() { return bigPlayButtonPlugin; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var _assets_big_play_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/big-play.svg */ "./src/assets/big-play.svg");
/* harmony import */ var _assets_big_play_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_big_play_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! unistore/preact */ "./node_modules/unistore/preact.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(unistore_preact__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/event */ "./src/utils/event.ts");
/* harmony import */ var _utils_image_placeholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/image-placeholder */ "./src/utils/image-placeholder.tsx");
/* harmony import */ var _utils_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/style */ "./src/utils/style.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};







function mapStateToProps(state, props) {
    var options = state.options, emitter = state.emitter, properties = state.properties;
    return {
        options: options,
        emitter: emitter,
        properties: properties,
    };
}
var BigPlayButton = /** @class */ (function (_super) {
    __extends(BigPlayButton, _super);
    function BigPlayButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pluginName = "BigPlayButton";
        _this.play = function (e) {
            _this.props.emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerVideoPlay);
            e.stopPropagation();
        };
        return _this;
    }
    BigPlayButton.prototype.render = function () {
        var playing = this.props.properties.playing;
        return !playing ? (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: stylePlayButton, onClick: this.play },
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_utils_image_placeholder__WEBPACK_IMPORTED_MODULE_5__["ImagePlaceHolder"], null),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: _utils_style__WEBPACK_IMPORTED_MODULE_6__["styleSvg"], dangerouslySetInnerHTML: { __html: _assets_big_play_svg__WEBPACK_IMPORTED_MODULE_2__ } }))) : null;
    };
    return BigPlayButton;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));
var stylePlayButton = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: calc(15% + 25px);\n  transform: translateY(-50%) translateX(-50%);\n  cursor: pointer;\n  opacity: 0.8;\n  transition: opacity 0.3s;\n\n  &:hover {\n    opacity: 1;\n  }\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: calc(15% + 25px);\n  transform: translateY(-50%) translateX(-50%);\n  cursor: pointer;\n  opacity: 0.8;\n  transition: opacity 0.3s;\n\n  &:hover {\n    opacity: 1;\n  }\n"])));
var component = Object(unistore_preact__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(BigPlayButton);
var bigPlayButtonPlugin = {
    entry: "Controls",
    index: 2,
    component: component,
};
var templateObject_1;


/***/ }),

/***/ "./src/controls/error.tsx":
/*!********************************!*\
  !*** ./src/controls/error.tsx ***!
  \********************************/
/*! exports provided: errorPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorPlugin", function() { return errorPlugin; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unistore/preact */ "./node_modules/unistore/preact.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unistore_preact__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../i18n */ "./src/i18n/index.ts");
/* harmony import */ var _utils_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/style */ "./src/utils/style.ts");
/* harmony import */ var _utils_image_placeholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/image-placeholder */ "./src/utils/image-placeholder.tsx");
/* harmony import */ var _assets_error_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/error.svg */ "./src/assets/error.svg");
/* harmony import */ var _assets_error_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_error_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/event */ "./src/utils/event.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};









function mapStateToProps(state, props) {
    var properties = state.properties, lang = state.lang, emitter = state.emitter;
    return {
        properties: properties,
        lang: lang,
        emitter: emitter,
    };
}
var Error = /** @class */ (function (_super) {
    __extends(Error, _super);
    function Error() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pluginName = "Error";
        _this.onClick = function () {
            _this.props.emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_8__["CustomEventType"].RetryPlaying);
        };
        return _this;
    }
    Error.prototype.render = function () {
        return this.props.properties.error ? (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: styleError },
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: styleErrorIcon },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_utils_image_placeholder__WEBPACK_IMPORTED_MODULE_5__["ImagePlaceHolder"], null),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: _utils_style__WEBPACK_IMPORTED_MODULE_4__["styleSvg"], dangerouslySetInnerHTML: { __html: _assets_error_svg__WEBPACK_IMPORTED_MODULE_6___default.a } })),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: styleErrorMessage }, this.getMessage()))) : null;
    };
    Error.prototype.getMessage = function () {
        var _a = this.props, properties = _a.properties, lang = _a.lang;
        var retryComponent = (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { className: _utils_style__WEBPACK_IMPORTED_MODULE_4__["styleLink"], onClick: this.onClick }, lang.RetryPlaying));
        switch (properties.error.code) {
            case _utils__WEBPACK_IMPORTED_MODULE_7__["MediaError"].MEDIA_ERR_SRC_NOT_SUPPORTED:
                return lang.SourceNotSupproted;
            case _utils__WEBPACK_IMPORTED_MODULE_7__["MediaError"].MEDIA_ERR_ABORTED:
            case _utils__WEBPACK_IMPORTED_MODULE_7__["MediaError"].MEDIA_ERR_NETWORK:
                return Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["printf"])(lang.NetworkError, retryComponent);
            case _utils__WEBPACK_IMPORTED_MODULE_7__["MediaError"].MEDIA_ERR_DECODE:
                return lang.DecodeError;
            default:
                return Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["printf"])(lang.OtherErrors, retryComponent);
        }
    };
    return Error;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));
var styleErrorIcon = Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  height: calc(15% + 25px);\n"], ["\n  position: relative;\n  height: calc(15% + 25px);\n"])));
var styleErrorMessage = Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  line-height: 1.5em;\n  text-align: center;\n  width: 80%;\n  margin: 2em auto 0;\n"], ["\n  color: ", ";\n  line-height: 1.5em;\n  text-align: center;\n  width: 80%;\n  margin: 2em auto 0;\n"])), _utils_style__WEBPACK_IMPORTED_MODULE_4__["colorDefault"]);
var styleError = Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n\n  background-color: #000;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"], ["\n  ", ";\n\n  background-color: #000;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])), _utils_style__WEBPACK_IMPORTED_MODULE_4__["styleAbsFull"]);
var component = Object(unistore_preact__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Error);
var errorPlugin = {
    entry: "Controls",
    index: 3,
    component: component,
};
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/controls/index.tsx":
/*!********************************!*\
  !*** ./src/controls/index.tsx ***!
  \********************************/
/*! exports provided: controlsPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controlsPlugin", function() { return controlsPlugin; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unistore/preact */ "./node_modules/unistore/preact.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unistore_preact__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/event */ "./src/utils/event.ts");
/* harmony import */ var _utils_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/style */ "./src/utils/style.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






function mapStateToProps(state, props) {
    var options = state.options, emitter = state.emitter, plugins = state.plugins;
    return {
        options: options,
        emitter: emitter,
        plugins: plugins,
    };
}
var Controls = /** @class */ (function (_super) {
    __extends(Controls, _super);
    function Controls() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pluginName = "Controls";
        _this.onClick = function () {
            if (_this.timer) {
                _this.handleDoubleClick();
            }
            else {
                _this.handleSingleClick();
            }
        };
        _this.onMouseMove = function () {
            var emitter = _this.props.emitter;
            emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerToolBarShow);
        };
        return _this;
    }
    Controls.prototype.render = function () {
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: _utils_style__WEBPACK_IMPORTED_MODULE_5__["styleAbsFull"], onClick: this.onClick, onMouseMove: !_utils__WEBPACK_IMPORTED_MODULE_3__["IS_TOUCHABLE_DEVICE"] && this.onMouseMove }, Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["renderComponents"])(this.pluginName, this.props.plugins)));
    };
    Controls.prototype.handleDoubleClick = function () {
        clearTimeout(this.timer);
        this.timer = null;
        var emitter = this.props.emitter;
        if (_utils__WEBPACK_IMPORTED_MODULE_3__["IS_TOUCHABLE_DEVICE"]) {
            emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerVideoToggle);
        }
        else {
            emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerToggleFullScreen);
        }
    };
    Controls.prototype.handleSingleClick = function () {
        var _this = this;
        this.timer = setTimeout(function () {
            var emitter = _this.props.emitter;
            if (_utils__WEBPACK_IMPORTED_MODULE_3__["IS_TOUCHABLE_DEVICE"]) {
                emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerToolBarToggle);
            }
            else {
                emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerVideoToggle);
            }
            _this.timer = null;
        }, 200);
    };
    return Controls;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));
var component = Object(unistore_preact__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Controls);
var controlsPlugin = {
    entry: "Container",
    index: 2,
    component: component,
};


/***/ }),

/***/ "./src/controls/loading.tsx":
/*!**********************************!*\
  !*** ./src/controls/loading.tsx ***!
  \**********************************/
/*! exports provided: loadingPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadingPlugin", function() { return loadingPlugin; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unistore/preact */ "./node_modules/unistore/preact.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(unistore_preact__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! timers */ "./node_modules/timers-browserify/main.js");
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(timers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/event */ "./src/utils/event.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/* harmony import */ var _utils_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/style */ "./src/utils/style.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};







var boxSize = "1.5em";
var color = "rgba(255, 255, 255, 1)";
var color2 = "rgba(255, 255, 255, 0.2)";
function mapStateToProps(state, props) {
    var options = state.options, emitter = state.emitter, properties = state.properties;
    return {
        options: options,
        emitter: emitter,
        properties: properties,
    };
}
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pluginName = "Loading";
        _this.lastPostion = -1;
        _this.lastStuckTime = -1;
        _this.handlePlay = function () {
            _this.played = true;
        };
        _this.loadingChecker = function () {
            var properties = _this.props.properties;
            var playing = properties.playing, currentTime = properties.currentTime, error = properties.error, readyState = properties.readyState, networkState = properties.networkState;
            var hasMediaError = !!error;
            var isStuck = _this.played && _this.lastPostion === currentTime;
            // stucking more than 2 minutes is considered as network issue occurred
            var isNeedLoading = isStuck && !hasMediaError;
            if (playing) {
                if (_this.lastPostion !== currentTime) {
                    _this.lastStuckTime = -1;
                }
                if (_this.lastPostion === -1 || _this.lastPostion !== currentTime) {
                    _this.lastPostion = currentTime;
                }
                if (isStuck && _this.lastStuckTime === -1) {
                    _this.lastStuckTime = new Date().getTime();
                }
            }
            else {
                if ((readyState === _utils__WEBPACK_IMPORTED_MODULE_5__["ReadyState"].HAVE_METADATA || readyState === _utils__WEBPACK_IMPORTED_MODULE_5__["ReadyState"].HAVE_CURRENT_DATA) &&
                    networkState === _utils__WEBPACK_IMPORTED_MODULE_5__["NetworkState"].NETWORK_LOADING) {
                    if (_this.lastStuckTime === -1)
                        _this.lastStuckTime = new Date().getTime();
                }
                else {
                    _this.lastStuckTime = -1;
                }
            }
            if (_this.state.isShown !== isNeedLoading) {
                _this.setState({
                    isShown: isNeedLoading,
                });
            }
        };
        return _this;
    }
    Loading.prototype.componentDidMount = function () {
        this.props.emitter.on(_utils_event__WEBPACK_IMPORTED_MODULE_4__["NativeEvent"].Play, this.handlePlay);
        this.timer = setInterval(this.loadingChecker, 500);
    };
    Loading.prototype.componentWillUnmount = function () {
        this.props.emitter.off(_utils_event__WEBPACK_IMPORTED_MODULE_4__["NativeEvent"].Play, this.handlePlay);
        Object(timers__WEBPACK_IMPORTED_MODULE_3__["clearInterval"])(this.timer);
    };
    Loading.prototype.render = function () {
        return this.state.isShown ? Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: styleLoading }) : null;
    };
    return Loading;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));
var loadingAnimation = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0%,\n  100% {\n    box-shadow: ", " ", " ", ", -", " ", " ", ", -", " -", " ", ",\n      ", " -", " ", ";\n  }\n\n  25% {\n    box-shadow: -", " ", " ", ", -", " -", " ", ", ", " -", " ", ",\n      ", " ", " ", ";\n  }\n\n  50% {\n    box-shadow: -", " -", " ", ", ", " -", " ", ", ", " ", " ", ",\n      -", " ", " ", ";\n  }\n\n  75% {\n    box-shadow: ", " -", " ", ", ", " ", " ", ", -", " ", " ", ",\n      -", " -", " ", ";\n  }\n"], ["\n  0%,\n  100% {\n    box-shadow: ", " ", " ", ", -", " ", " ", ", -", " -", " ", ",\n      ", " -", " ", ";\n  }\n\n  25% {\n    box-shadow: -", " ", " ", ", -", " -", " ", ", ", " -", " ", ",\n      ", " ", " ", ";\n  }\n\n  50% {\n    box-shadow: -", " -", " ", ", ", " -", " ", ", ", " ", " ", ",\n      -", " ", " ", ";\n  }\n\n  75% {\n    box-shadow: ", " -", " ", ", ", " ", " ", ", -", " ", " ", ",\n      -", " -", " ", ";\n  }\n"])), boxSize, boxSize, color2, boxSize, boxSize, color, boxSize, boxSize, color2, boxSize, boxSize, color, boxSize, boxSize, color, boxSize, boxSize, color2, boxSize, boxSize, color, boxSize, boxSize, color2, boxSize, boxSize, color2, boxSize, boxSize, color, boxSize, boxSize, color2, boxSize, boxSize, color, boxSize, boxSize, color, boxSize, boxSize, color2, boxSize, boxSize, color, boxSize, boxSize, color2);
var styleLoading = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n\n  margin: auto;\n  border-radius: 100%;\n  width: ", ";\n  height: ", ";\n  box-shadow: ", " ", " ", ", -", " ", " ", ", -", " -", " ", ",\n    ", " -", " ", ";\n  animation: ", " ease infinite 3s;\n"], ["\n  ", ";\n\n  margin: auto;\n  border-radius: 100%;\n  width: ", ";\n  height: ", ";\n  box-shadow: ", " ", " ", ", -", " ", " ", ", -", " -", " ", ",\n    ", " -", " ", ";\n  animation: ", " ease infinite 3s;\n"])), _utils_style__WEBPACK_IMPORTED_MODULE_6__["styleAbsFull"], boxSize, boxSize, boxSize, boxSize, color2, boxSize, boxSize, color, boxSize, boxSize, color2, boxSize, boxSize, color, loadingAnimation);
var component = Object(unistore_preact__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Loading);
var loadingPlugin = {
    entry: "Controls",
    index: 0,
    component: component,
};
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/controls/mobile-actions.tsx":
/*!*****************************************!*\
  !*** ./src/controls/mobile-actions.tsx ***!
  \*****************************************/
/*! exports provided: mobileActionsPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileActionsPlugin", function() { return mobileActionsPlugin; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unistore/preact */ "./node_modules/unistore/preact.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unistore_preact__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/event */ "./src/utils/event.ts");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var _utils_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/actions */ "./src/utils/actions.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/* harmony import */ var _utils_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/style */ "./src/utils/style.ts");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../i18n */ "./src/i18n/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};








var ProcessType;
(function (ProcessType) {
    ProcessType[ProcessType["None"] = 0] = "None";
    ProcessType[ProcessType["Progress"] = 1] = "Progress";
    ProcessType[ProcessType["Volume"] = 2] = "Volume";
    ProcessType[ProcessType["Brightness"] = 3] = "Brightness";
})(ProcessType || (ProcessType = {}));
var actions = {
    setCurrentTime: _utils_actions__WEBPACK_IMPORTED_MODULE_4__["setCurrentTime"],
};
function mapStateToProps(state, props) {
    var properties = state.properties, emitter = state.emitter, lang = state.lang;
    return {
        properties: properties,
        emitter: emitter,
        lang: lang,
    };
}
var MobileActions = /** @class */ (function (_super) {
    __extends(MobileActions, _super);
    function MobileActions(props) {
        var _this = _super.call(this, props) || this;
        _this.pluginName = "MobileActions";
        _this.touchStartTime = 0;
        _this.touchStartX = 0;
        _this.touchPrevX = 0;
        _this.touchPrevY = 0;
        _this.touchStartY = 0;
        _this.slowSwipeTimeStep = 0.1;
        _this.fastSwipeTimeStep = 10;
        _this.volumeStep = 0.01;
        _this.brightnessStep = 0.01;
        _this.fastSwipeCount = 0;
        _this.fastSwipeIncrease = null;
        _this.setRef = function (el) { return (_this.el = el); };
        _this.onTouchStart = function (e) {
            _this.touchStartX = e.targetTouches[0].pageX;
            _this.touchPrevX = _this.touchStartX;
            _this.touchPrevY = _this.touchStartY;
            _this.touchStartY = e.targetTouches[0].pageY;
            _this.touchStartTime = e.timeStamp;
            _this.rectCache = _this.el.getBoundingClientRect();
        };
        _this.onTouchMove = function (e) {
            var touchStartX = e.targetTouches[0].pageX;
            var touchStartY = e.targetTouches[0].pageY;
            var touchStartTime = e.timeStamp;
            _this.processSwipe(touchStartX, touchStartY, touchStartTime);
            _this.touchPrevX = touchStartX;
            _this.touchPrevY = touchStartY;
            e.preventDefault();
        };
        _this.onTouchEnd = function (e) {
            if (_this.needApplyCurrentTime) {
                _this.applyCurrentTimeToVideo();
                _this.needApplyCurrentTime = false;
            }
            _this.setProcessType(ProcessType.None);
        };
        _this.getFastSwipeCount = function (isIncrease) {
            if (_this.fastSwipeIncrease !== isIncrease) {
                _this.fastSwipeCount = 0;
                _this.fastSwipeIncrease = isIncrease;
            }
            _this.fastSwipeCount += 1;
            clearTimeout(_this.fastSwipeCountTimer);
            _this.fastSwipeCountTimer = setTimeout(function () {
                _this.fastSwipeCount = 0;
                _this.fastSwipeIncrease = null;
                clearTimeout(_this.fastSwipeCountTimer);
            }, 3000);
            return _this.fastSwipeCount;
        };
        _this.state = {
            processType: ProcessType.None,
        };
        return _this;
    }
    MobileActions.prototype.render = function () {
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: _utils_style__WEBPACK_IMPORTED_MODULE_6__["styleAbsFull"], onTouchStart: this.onTouchStart, onTouchMove: this.onTouchMove, onTouchEnd: this.onTouchEnd, ref: this.setRef }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(styleTips, this.state.processType !== ProcessType.None && "shown") }, this.getTips())));
    };
    MobileActions.prototype.getTips = function () {
        var _a = this.props, lang = _a.lang, properties = _a.properties;
        var duration = properties.duration, currentTime = properties.currentTime, volume = properties.volume, brightness = properties.brightness;
        switch (this.state.processType) {
            case ProcessType.Progress:
                return Object(_i18n__WEBPACK_IMPORTED_MODULE_7__["printf"])(lang.Progress, Object(_utils__WEBPACK_IMPORTED_MODULE_5__["secondToMMSS"])(currentTime), Object(_utils__WEBPACK_IMPORTED_MODULE_5__["secondToMMSS"])(duration));
            case ProcessType.Volume:
                return Object(_i18n__WEBPACK_IMPORTED_MODULE_7__["printf"])(lang.Volume, Object(_utils__WEBPACK_IMPORTED_MODULE_5__["parsePercent"])(volume * 100));
            case ProcessType.Brightness:
                return Object(_i18n__WEBPACK_IMPORTED_MODULE_7__["printf"])(lang.Brightness, Object(_utils__WEBPACK_IMPORTED_MODULE_5__["parsePercent"])(brightness * 100));
        }
        return null;
    };
    MobileActions.prototype.processSwipe = function (x, y, timeStamp) {
        var isHorizontalIncrease = x - this.touchPrevX > 0;
        var isVerticalIncrease = y - this.touchPrevY < 0;
        var horizontalLength = Math.abs(x - this.touchStartX);
        var verticalLength = Math.abs(y - this.touchStartY);
        if (this.isHorizontalSwipe(horizontalLength, verticalLength)) {
            this.processProgress(isHorizontalIncrease, timeStamp);
            this.setProcessType(ProcessType.Progress);
        }
        else if (this.isVerticalSwipe(horizontalLength, verticalLength)) {
            if (this.isLeftSwipe(x)) {
                this.processBrightness(isVerticalIncrease);
                this.setProcessType(ProcessType.Brightness);
            }
            else {
                this.processVolume(isVerticalIncrease);
                this.setProcessType(ProcessType.Volume);
            }
        }
    };
    MobileActions.prototype.isHorizontalSwipe = function (horizontalLength, verticalLength) {
        if (this.state.processType === ProcessType.None) {
            return horizontalLength / 5 > verticalLength;
        }
        else if (this.state.processType === ProcessType.Progress) {
            return true;
        }
        return false;
    };
    MobileActions.prototype.isVerticalSwipe = function (horizontalLength, verticalLength) {
        return verticalLength / 5 > horizontalLength;
    };
    MobileActions.prototype.isLeftSwipe = function (x) {
        return x - this.rectCache.left < this.rectCache.width / 2;
    };
    MobileActions.prototype.isFastSwipe = function (timeStamp) {
        return timeStamp - this.touchStartTime < 200;
    };
    MobileActions.prototype.isSlowSwipe = function (timeStamp) {
        return timeStamp - this.touchStartTime > 200;
    };
    MobileActions.prototype.processVolume = function (isIncrease) {
        var offset = this.volumeStep;
        var newVolume = this.getNewVolumeOrBrightness(isIncrease, true, offset);
        this.props.emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_2__["InnerEventType"].InnerVideoSetVolume, newVolume);
    };
    MobileActions.prototype.processBrightness = function (isIncrease) {
        var offset = this.brightnessStep;
        var newBrightness = this.getNewVolumeOrBrightness(isIncrease, false, offset);
        this.props.emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_2__["InnerEventType"].InnerVideoSetBrightness, newBrightness);
    };
    MobileActions.prototype.processProgress = function (isIncrease, timeStamp) {
        var _this = this;
        if (this.isFastSwipe(timeStamp)) {
            clearTimeout(this.fastSwipeTimer);
            this.fastSwipeTimer = setTimeout(function () {
                var fastSwipeCount = _this.getFastSwipeCount(isIncrease);
                var offsetTime = _this.fastSwipeTimeStep * fastSwipeCount;
                var newCurrentTime = _this.getNewCurrentTime(isIncrease, offsetTime);
                _this.setCurrentTime(newCurrentTime);
            }, 200);
        }
        else if (this.isSlowSwipe(timeStamp)) {
            clearTimeout(this.fastSwipeTimer);
            var offsetTime = this.slowSwipeTimeStep;
            var newCurrentTime = this.getNewCurrentTime(isIncrease, offsetTime);
            this.fastSwipeCount = 0;
            this.setCurrentTime(newCurrentTime);
        }
    };
    MobileActions.prototype.getNewCurrentTime = function (isIncrease, offsetTime) {
        var properties = this.props.properties;
        if (isIncrease) {
            if (properties.currentTime + offsetTime > properties.duration) {
                return properties.duration;
            }
            else {
                return properties.currentTime + offsetTime;
            }
        }
        else {
            if (properties.currentTime - offsetTime < 0) {
                return 0;
            }
            else {
                return properties.currentTime - offsetTime;
            }
        }
    };
    MobileActions.prototype.getNewVolumeOrBrightness = function (isIncrease, isVolume, offsetValue) {
        var properties = this.props.properties;
        var value = isVolume ? properties.volume : properties.brightness;
        if (isIncrease) {
            if (value + offsetValue > 1) {
                return 1;
            }
            else {
                return value + offsetValue;
            }
        }
        else {
            if (value - offsetValue < 0) {
                return 0;
            }
            else {
                return value - offsetValue;
            }
        }
    };
    MobileActions.prototype.setCurrentTime = function (time) {
        var _a = this.props, emitter = _a.emitter, setCurrentTime = _a.setCurrentTime;
        setCurrentTime(time);
        this.needApplyCurrentTime = true;
        emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_2__["InnerEventType"].InnerSeeking);
    };
    MobileActions.prototype.applyCurrentTimeToVideo = function () {
        var _a = this.props, emitter = _a.emitter, properties = _a.properties;
        emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_2__["InnerEventType"].InnerVideoSetCurrentTime, properties.currentTime);
        emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_2__["InnerEventType"].InnerSeeked);
    };
    MobileActions.prototype.setProcessType = function (type) {
        if (this.state.processType !== type) {
            this.setState({
                processType: type,
            });
        }
    };
    return MobileActions;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));
var mobileActionsComponent = Object(unistore_preact__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, actions)(MobileActions);
var styleTips = Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  pointer-events: none;\n  left: 50%;\n  top: 10%;\n  padding: 20px;\n  border-radius: 3px;\n  transform: translateX(-50%);\n  background-color: rgba(0, 0, 0, 0.5);\n  color: ", ";\n  white-space: nowrap;\n  opacity: 0;\n  transition: opacity 0.4s ease-in;\n\n  &.shown {\n    opacity: 1;\n    transition: opacity 0.4s ease-out;\n  }\n"], ["\n  position: absolute;\n  pointer-events: none;\n  left: 50%;\n  top: 10%;\n  padding: 20px;\n  border-radius: 3px;\n  transform: translateX(-50%);\n  background-color: rgba(0, 0, 0, 0.5);\n  color: ", ";\n  white-space: nowrap;\n  opacity: 0;\n  transition: opacity 0.4s ease-in;\n\n  &.shown {\n    opacity: 1;\n    transition: opacity 0.4s ease-out;\n  }\n"])), _utils_style__WEBPACK_IMPORTED_MODULE_6__["colorDefault"]);
var brightnessActions = {
    setBrightness: function (state, brightness) {
        return {
            properties: __assign({}, state.properties, { brightness: brightness }),
        };
    },
};
function mapStateToBrightnessProps(state, props) {
    var options = state.options, properties = state.properties, emitter = state.emitter;
    return {
        options: options,
        properties: properties,
        emitter: emitter,
    };
}
var Brightness = /** @class */ (function (_super) {
    __extends(Brightness, _super);
    function Brightness() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pluginName = "Brightness";
        _this.handleBrightness = function (e) {
            if (!_this.props.options.controlBrightness) {
                Object(_utils__WEBPACK_IMPORTED_MODULE_5__["saveBrightnessToLocalData"])(e.detail);
            }
            _this.props.setBrightness(e.detail);
        };
        return _this;
    }
    Brightness.prototype.componentWillMount = function () {
        if (!this.props.options.controlBrightness) {
            this.props.emitter.on(_utils_event__WEBPACK_IMPORTED_MODULE_2__["InnerEventType"].InnerVideoSetBrightness, this.handleBrightness);
        }
    };
    Brightness.prototype.componentWillUnmount = function () {
        if (!this.props.options.controlBrightness) {
            this.props.emitter.on(_utils_event__WEBPACK_IMPORTED_MODULE_2__["InnerEventType"].InnerToolBarShown, this.handleBrightness);
        }
    };
    Brightness.prototype.render = function () {
        var alpha = (1 - this.props.properties.brightness) * 0.5;
        return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: _utils_style__WEBPACK_IMPORTED_MODULE_6__["styleAbsFull"], style: { backgroundColor: "rgba(0,0,0," + alpha + ")" } });
    };
    return Brightness;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));
var brightnessComponent = Object(unistore_preact__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToBrightnessProps, brightnessActions)(Brightness);
var mobileActionsPlugin = [
    {
        entry: "Controls",
        index: 1,
        component: mobileActionsComponent,
    },
    {
        entry: "Container",
        index: 1,
        component: brightnessComponent,
    },
];
var templateObject_1;


/***/ }),

/***/ "./src/controls/tool-bar-full-screen-button.tsx":
/*!******************************************************!*\
  !*** ./src/controls/tool-bar-full-screen-button.tsx ***!
  \******************************************************/
/*! exports provided: toolBarFullScreenButtonPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toolBarFullScreenButtonPlugin", function() { return toolBarFullScreenButtonPlugin; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_enter_full_screen_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/enter-full-screen.svg */ "./src/assets/enter-full-screen.svg");
/* harmony import */ var _assets_enter_full_screen_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_enter_full_screen_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_exit_full_screen_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/exit-full-screen.svg */ "./src/assets/exit-full-screen.svg");
/* harmony import */ var _assets_exit_full_screen_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_exit_full_screen_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! unistore/preact */ "./node_modules/unistore/preact.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(unistore_preact__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/style */ "./src/utils/style.ts");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.tsx");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/event */ "./src/utils/event.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







function mapStateToProps(state, props) {
    var properties = state.properties, emitter = state.emitter;
    return {
        properties: properties,
        emitter: emitter,
    };
}
var ToolBarFullScreenButton = /** @class */ (function (_super) {
    __extends(ToolBarFullScreenButton, _super);
    function ToolBarFullScreenButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pluginName = "ToolBarFullScreenButton";
        _this.toggle = function () {
            _this.props.emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_6__["InnerEventType"].InnerToggleFullScreen);
        };
        return _this;
    }
    ToolBarFullScreenButton.prototype.render = function () {
        var properties = this.props.properties;
        if (properties.isFullScreen == null) {
            return null;
        }
        var svg = (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: _utils_style__WEBPACK_IMPORTED_MODULE_4__["styleToolbarButtonIcon"], dangerouslySetInnerHTML: {
                __html: (properties.isFullScreen === false ? _assets_enter_full_screen_svg__WEBPACK_IMPORTED_MODULE_1__ : _assets_exit_full_screen_svg__WEBPACK_IMPORTED_MODULE_2__),
            }, onClick: this.toggle }));
        return Object(_utils_render__WEBPACK_IMPORTED_MODULE_5__["getToolBarButtonTemplate"])(svg);
    };
    return ToolBarFullScreenButton;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));
var component = Object(unistore_preact__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(ToolBarFullScreenButton);
var toolBarFullScreenButtonPlugin = {
    entry: "ToolBar",
    index: 0,
    component: component,
};


/***/ }),

/***/ "./src/controls/tool-bar-play-button.tsx":
/*!***********************************************!*\
  !*** ./src/controls/tool-bar-play-button.tsx ***!
  \***********************************************/
/*! exports provided: toolBarPlayButtonPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toolBarPlayButtonPlugin", function() { return toolBarPlayButtonPlugin; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_play_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/play.svg */ "./src/assets/play.svg");
/* harmony import */ var _assets_play_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_play_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_pause_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/pause.svg */ "./src/assets/pause.svg");
/* harmony import */ var _assets_pause_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_pause_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! unistore/preact */ "./node_modules/unistore/preact.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(unistore_preact__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/style */ "./src/utils/style.ts");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.tsx");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/event */ "./src/utils/event.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







function mapStateToProps(state, props) {
    var properties = state.properties, emitter = state.emitter;
    return {
        properties: properties,
        emitter: emitter,
    };
}
var ToolBarPlayButton = /** @class */ (function (_super) {
    __extends(ToolBarPlayButton, _super);
    function ToolBarPlayButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pluginName = "ToolBarPlayButton";
        _this.toggle = function () {
            if (_this.props.properties.playing) {
                _this.pause();
            }
            else {
                _this.play();
            }
        };
        return _this;
    }
    ToolBarPlayButton.prototype.render = function () {
        var svg = (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: _utils_style__WEBPACK_IMPORTED_MODULE_4__["styleToolbarButtonIcon"], dangerouslySetInnerHTML: { __html: (this.props.properties.playing ? _assets_pause_svg__WEBPACK_IMPORTED_MODULE_2__ : _assets_play_svg__WEBPACK_IMPORTED_MODULE_1__) }, onClick: this.toggle }));
        return Object(_utils_render__WEBPACK_IMPORTED_MODULE_5__["getToolBarButtonTemplate"])(svg);
    };
    ToolBarPlayButton.prototype.play = function () {
        this.props.emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_6__["InnerEventType"].InnerVideoPlay);
    };
    ToolBarPlayButton.prototype.pause = function () {
        this.props.emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_6__["InnerEventType"].InnerVideoPause);
    };
    return ToolBarPlayButton;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));
var component = Object(unistore_preact__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(ToolBarPlayButton);
var toolBarPlayButtonPlugin = {
    entry: "ToolBar",
    index: 0,
    component: component,
};


/***/ }),

/***/ "./src/controls/tool-bar-progress-bar.tsx":
/*!************************************************!*\
  !*** ./src/controls/tool-bar-progress-bar.tsx ***!
  \************************************************/
/*! exports provided: toolBarProgressBarPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toolBarProgressBarPlugin", function() { return toolBarProgressBarPlugin; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unistore/preact */ "./node_modules/unistore/preact.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(unistore_preact__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/* harmony import */ var _utils_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/style */ "./src/utils/style.ts");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/event */ "./src/utils/event.ts");
/* harmony import */ var _utils_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/actions */ "./src/utils/actions.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};







var actions = {
    setCurrentTime: _utils_actions__WEBPACK_IMPORTED_MODULE_6__["setCurrentTime"],
};
function mapStateToProps(state, props) {
    var properties = state.properties, emitter = state.emitter;
    return {
        properties: properties,
        emitter: emitter,
    };
}
var ToolBarProgressBar = /** @class */ (function (_super) {
    __extends(ToolBarProgressBar, _super);
    function ToolBarProgressBar(props) {
        var _a;
        var _this = _super.call(this, props) || this;
        _this.pluginName = "ToolBarProgressBar";
        _this.eventsMap = (_a = {},
            _a[_utils_event__WEBPACK_IMPORTED_MODULE_5__["InnerEventType"].InnerProgressBarShow] = function () {
                _this.setState({
                    isProgressBarHidden: false,
                });
            },
            _a[_utils_event__WEBPACK_IMPORTED_MODULE_5__["InnerEventType"].InnerProgressBarHide] = function () {
                _this.setState({
                    isProgressBarHidden: true,
                });
            },
            _a);
        _this.setSliderRef = function (el) { return (_this.sliderEl = el); };
        _this.onTouchStart = function (e) {
            _this.setCurrentTimeBasedOnPoint(e.targetTouches[0].pageX);
        };
        _this.onTouchMove = function (e) {
            _this.setCurrentTimeBasedOnPoint(e.targetTouches[0].pageX);
        };
        _this.onTouchEnd = function (e) {
            _this.applyCurrentTimeToVideo();
        };
        _this.onMouseDown = function (e) {
            _this.mouseDown = true;
            _this.setCurrentTimeBasedOnPoint(e.x);
            window.addEventListener("mousemove", _this.onMouseMove);
            window.addEventListener("mouseup", _this.onMouseUp);
        };
        _this.onMouseMove = function (e) {
            if (_this.mouseDown) {
                _this.setCurrentTimeBasedOnPoint(e.x);
            }
        };
        _this.onMouseUp = function (e) {
            if (_this.mouseDown) {
                _this.applyCurrentTimeToVideo();
                _this.mouseDown = false;
                window.removeEventListener("mousemove", _this.onMouseMove);
                window.removeEventListener("mouseup", _this.onMouseUp);
            }
        };
        _this.state = {
            isProgressBarHidden: false,
        };
        return _this;
    }
    ToolBarProgressBar.prototype.componentWillMount = function () {
        for (var event_1 in this.eventsMap) {
            this.props.emitter.on(event_1, this.eventsMap[event_1]);
        }
    };
    ToolBarProgressBar.prototype.componentWillUnmount = function () {
        for (var event_2 in this.eventsMap) {
            this.props.emitter.off(event_2, this.eventsMap[event_2]);
        }
    };
    ToolBarProgressBar.prototype.render = function () {
        var _a = this.props.properties, duration = _a.duration, currentTime = _a.currentTime;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: styleProgressBar }, !this.state.isProgressBarHidden && (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: styleProgressBarBackground, onTouchStart: _utils__WEBPACK_IMPORTED_MODULE_3__["IS_TOUCHABLE_DEVICE"] && this.onTouchStart, onTouchMove: _utils__WEBPACK_IMPORTED_MODULE_3__["IS_TOUCHABLE_DEVICE"] && this.onTouchMove, onTouchEnd: _utils__WEBPACK_IMPORTED_MODULE_3__["IS_TOUCHABLE_DEVICE"] && this.onTouchEnd, onMouseDown: !_utils__WEBPACK_IMPORTED_MODULE_3__["IS_TOUCHABLE_DEVICE"] && this.onMouseDown, ref: this.setSliderRef },
            this.getBufferedComponent(),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: styleProgressBarFill, style: { width: this.getCursorLeft() + "%" } }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])(styleTime, styleCurrentTime) }, Object(_utils__WEBPACK_IMPORTED_MODULE_3__["secondToMMSS"])(currentTime)),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])(styleTime, styleDuration) }, Object(_utils__WEBPACK_IMPORTED_MODULE_3__["secondToMMSS"])(duration))))));
    };
    ToolBarProgressBar.prototype.getBufferedComponent = function () {
        var _a = this.props.properties, buffered = _a.buffered, duration = _a.duration;
        if (buffered == null) {
            return null;
        }
        var content = [];
        for (var i = 0; i < buffered.length; i++) {
            var start = buffered.start(i) / duration;
            var end = (duration - buffered.end(i)) / duration;
            var startPercent = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parsePercent"])(start * 100);
            var endPercent = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parsePercent"])(end * 100);
            content.push(Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: styleProgressBarBuffered, style: {
                    left: startPercent + "%",
                    right: endPercent + "%",
                } }));
        }
        return content;
    };
    ToolBarProgressBar.prototype.getCursorLeft = function () {
        var _a = this.props.properties, currentTime = _a.currentTime, duration = _a.duration;
        var percent = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parsePercent"])((currentTime / duration) * 100);
        return percent;
    };
    ToolBarProgressBar.prototype.setCurrentTimeBasedOnPoint = function (x) {
        var _a = this.props, properties = _a.properties, emitter = _a.emitter, setCurrentTime = _a.setCurrentTime;
        var duration = properties.duration;
        if (!this.rectCache) {
            this.rectCache = this.sliderEl.getBoundingClientRect();
        }
        var length = x - this.rectCache.left;
        var rate = length / this.rectCache.width;
        var currentTime = rate * duration;
        if (currentTime < 0) {
            currentTime = 0;
        }
        else if (currentTime > duration) {
            currentTime = duration;
        }
        setCurrentTime(currentTime);
        emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_5__["InnerEventType"].InnerSeeking);
    };
    ToolBarProgressBar.prototype.applyCurrentTimeToVideo = function () {
        var _a = this.props, emitter = _a.emitter, properties = _a.properties;
        this.rectCache = null;
        emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_5__["InnerEventType"].InnerVideoSetCurrentTime, properties.currentTime);
        emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_5__["InnerEventType"].InnerSeeked);
    };
    return ToolBarProgressBar;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));
var component = Object(unistore_preact__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, actions)(ToolBarProgressBar);
var toolBarProgressBarPlugin = {
    entry: "ToolBar",
    index: 0,
    component: component,
};
var styleProgressBar = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex-grow: 1;\n"], ["\n  flex-grow: 1;\n"])));
var styleProgressBarBackground = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.2);\n  cursor: pointer;\n"], ["\n  position: relative;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.2);\n  cursor: pointer;\n"])));
var styleProgressBarBuffered = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  background-color: ", ";\n  pointer-events: none;\n"], ["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  background-color: ", ";\n  pointer-events: none;\n"])), _utils_style__WEBPACK_IMPORTED_MODULE_4__["colorPrimaryAlpha01"]);
var styleProgressBarFill = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 0;\n  background-color: ", ";\n  border-right: solid 1px ", ";\n  pointer-events: none;\n"], ["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 0;\n  background-color: ", ";\n  border-right: solid 1px ", ";\n  pointer-events: none;\n"])), _utils_style__WEBPACK_IMPORTED_MODULE_4__["colorPrimaryAlpha04"], _utils_style__WEBPACK_IMPORTED_MODULE_4__["colorPrimaryLightenAlpha06"]);
var styleTime = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  color: ", ";\n"], ["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  color: ", ";\n"])), _utils_style__WEBPACK_IMPORTED_MODULE_4__["colorDefaultAlpha05"]);
var styleCurrentTime = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  left: calc(0.8% + 5px);\n"], ["\n  left: calc(0.8% + 5px);\n"])));
var styleDuration = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  right: calc(0.8% + 5px);\n"], ["\n  right: calc(0.8% + 5px);\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;


/***/ }),

/***/ "./src/controls/tool-bar-top-progress-bar.tsx":
/*!****************************************************!*\
  !*** ./src/controls/tool-bar-top-progress-bar.tsx ***!
  \****************************************************/
/*! exports provided: toolBarTopProgressBarPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toolBarTopProgressBarPlugin", function() { return toolBarTopProgressBarPlugin; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unistore/preact */ "./node_modules/unistore/preact.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(unistore_preact__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/* harmony import */ var _utils_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/style */ "./src/utils/style.ts");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/event */ "./src/utils/event.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};






function mapStateToProps(state, props) {
    var properties = state.properties, emitter = state.emitter;
    return {
        properties: properties,
        emitter: emitter,
    };
}
var ToolBarTopProgressBar = /** @class */ (function (_super) {
    __extends(ToolBarTopProgressBar, _super);
    function ToolBarTopProgressBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pluginName = "ToolBarTopProgressBar";
        _this.hide = function () {
            _this.setState({
                isShown: false,
            });
        };
        _this.show = function () {
            _this.setState({
                isShown: true,
            });
        };
        return _this;
    }
    ToolBarTopProgressBar.prototype.componentWillMount = function () {
        var emitter = this.props.emitter;
        emitter.on(_utils_event__WEBPACK_IMPORTED_MODULE_5__["InnerEventType"].InnerToolBarShown, this.hide);
        emitter.on(_utils_event__WEBPACK_IMPORTED_MODULE_5__["InnerEventType"].InnerToolBarHidden, this.show);
    };
    ToolBarTopProgressBar.prototype.componentWillUnmount = function () {
        var emitter = this.props.emitter;
        emitter.off(_utils_event__WEBPACK_IMPORTED_MODULE_5__["InnerEventType"].InnerToolBarShown, this.hide);
        emitter.off(_utils_event__WEBPACK_IMPORTED_MODULE_5__["InnerEventType"].InnerToolBarHidden, this.show);
    };
    ToolBarTopProgressBar.prototype.render = function () {
        var _a = this.props.properties, currentTime = _a.currentTime, duration = _a.duration;
        var percent = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parsePercent"])((currentTime / duration) * 100);
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])(styleProgressBar, this.state.isShown && "shown") },
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: styleProgressBarFill, style: { width: percent + "%" } })));
    };
    return ToolBarTopProgressBar;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));
var component = Object(unistore_preact__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(ToolBarTopProgressBar);
var toolBarTopProgressBarPlugin = {
    entry: "ToolBar",
    index: 0,
    component: component,
};
var styleProgressBar = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 8%;\n  max-height: 10px;\n  background-color: rgba(200, 200, 200, 0.5);\n  transform: translateY(-100%);\n  opacity: 0;\n  transition: none;\n\n  &.shown {\n    transition: opacity 0.2s 0.35s;\n    opacity: 1;\n  }\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 8%;\n  max-height: 10px;\n  background-color: rgba(200, 200, 200, 0.5);\n  transform: translateY(-100%);\n  opacity: 0;\n  transition: none;\n\n  &.shown {\n    transition: opacity 0.2s 0.35s;\n    opacity: 1;\n  }\n"])));
var styleProgressBarFill = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 0;\n  background-color: ", ";\n"], ["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 0;\n  background-color: ", ";\n"])), _utils_style__WEBPACK_IMPORTED_MODULE_4__["colorPrimary"]);
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/controls/tool-bar-video-selector.tsx":
/*!**************************************************!*\
  !*** ./src/controls/tool-bar-video-selector.tsx ***!
  \**************************************************/
/*! exports provided: toolBarVideoSelectorPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toolBarVideoSelectorPlugin", function() { return toolBarVideoSelectorPlugin; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unistore/preact */ "./node_modules/unistore/preact.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unistore_preact__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../i18n */ "./src/i18n/index.ts");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var _utils_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/style */ "./src/utils/style.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/event */ "./src/utils/event.ts");
/* harmony import */ var _utils_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/actions */ "./src/utils/actions.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};








function mapStateToProps(state, props) {
    var properties = state.properties, emitter = state.emitter, options = state.options, lang = state.lang;
    return {
        options: options,
        properties: properties,
        emitter: emitter,
        lang: lang,
    };
}
var actions = {
    setCurrentTime: _utils_actions__WEBPACK_IMPORTED_MODULE_7__["setCurrentTime"],
};
var ToolBarVideoSelector = /** @class */ (function (_super) {
    __extends(ToolBarVideoSelector, _super);
    function ToolBarVideoSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pluginName = "ToolBarVideoSelector";
        _this.onMouseEnter = function () {
            clearTimeout(_this.timer);
            _this.setState({
                isShown: true,
            });
        };
        _this.onMouseLeave = function () {
            clearTimeout(_this.timer);
            _this.timer = setTimeout(function () {
                _this.setState({
                    isShown: false,
                });
            }, 200);
        };
        _this.onTouchClick = function () {
            _this.setState({
                isShown: true,
            });
            var documentListener = function () {
                _this.setState({
                    isShown: false,
                });
                document.removeEventListener("click", documentListener);
            };
            document.addEventListener("click", documentListener);
        };
        return _this;
    }
    ToolBarVideoSelector.prototype.render = function () {
        var _this = this;
        var _a = this.props, options = _a.options, lang = _a.lang, properties = _a.properties;
        var currentListIndex = properties.currentListIndex, currentVideoIndex = properties.currentVideoIndex;
        var list = options.playList[currentListIndex];
        if (!list || list.length <= 1) {
            return null;
        }
        var currentVideo = list && list[currentVideoIndex];
        var currentText;
        if (!currentVideo) {
            currentText = lang.UnknownSource;
        }
        else if (typeof currentVideo.name === "string") {
            currentText = currentVideo.name;
        }
        else {
            currentText = Object(_i18n__WEBPACK_IMPORTED_MODULE_2__["printf"])(lang.SourceN, currentVideoIndex);
        }
        var popup = (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(!_utils__WEBPACK_IMPORTED_MODULE_5__["IS_TOUCHABLE_DEVICE"] ? stylePopup : stylePopupMobile, this.state.isShown && "shown") }, list.map(function (video, index) {
            var text = typeof video.name === "string" ? video.name : Object(_i18n__WEBPACK_IMPORTED_MODULE_2__["printf"])(lang.SourceN, index);
            return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])("item", currentVideoIndex === index && "selected"), onClick: function (e) {
                    _this.onPopupItemClick(e, index);
                } }, text));
        })));
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { onMouseEnter: !_utils__WEBPACK_IMPORTED_MODULE_5__["IS_TOUCHABLE_DEVICE"] && this.onMouseEnter, onMouseLeave: !_utils__WEBPACK_IMPORTED_MODULE_5__["IS_TOUCHABLE_DEVICE"] && this.onMouseLeave, onClick: _utils__WEBPACK_IMPORTED_MODULE_5__["IS_TOUCHABLE_DEVICE"] && this.onTouchClick, className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(_utils_style__WEBPACK_IMPORTED_MODULE_4__["styleToolBarTextContainer"], !_utils__WEBPACK_IMPORTED_MODULE_5__["IS_TOUCHABLE_DEVICE"] && styleContainer) },
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: _utils_style__WEBPACK_IMPORTED_MODULE_4__["styleToolBarText"] }, currentVideo ? currentText : Object(_i18n__WEBPACK_IMPORTED_MODULE_2__["printf"])(lang.UnknownSource)),
            popup));
    };
    ToolBarVideoSelector.prototype.onPopupItemClick = function (e, videoIndex) {
        var _a = this.props, emitter = _a.emitter, properties = _a.properties;
        var playingCache = properties.playing;
        emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_6__["InnerEventType"].InnerVideoSetSource, {
            listIndex: properties.currentListIndex,
            videoIndex: videoIndex,
        });
        emitter.once(_utils_event__WEBPACK_IMPORTED_MODULE_6__["NativeEvent"].Loadedmetadata, function () {
            if (playingCache) {
                emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_6__["InnerEventType"].InnerVideoPlay);
            }
        });
        this.setState({
            isShown: false,
        });
        emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_6__["InnerEventType"].InnerToolBarHide);
        e.stopPropagation();
    };
    return ToolBarVideoSelector;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));
var styleContainer = Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var styleItem = Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  white-space: nowrap;\n  text-align: center;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  flex-shrink: 0;\n\n  &.selected {\n    background-color: ", ";\n  }\n"], ["\n  white-space: nowrap;\n  text-align: center;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  flex-shrink: 0;\n\n  &.selected {\n    background-color: ", ";\n  }\n"])), _utils_style__WEBPACK_IMPORTED_MODULE_4__["colorPrimary"]);
var stylePopup = Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  left: 50%;\n  bottom: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  transform: translateY(100%) translateX(-50%);\n  transition: none;\n  display: flex;\n  flex-direction: column-reverse;\n  max-height: calc((100% - 25px) * 20);\n  overflow: scroll;\n\n  &.shown {\n    opacity: 1;\n    transform: translateY(0) translateX(-50%);\n    transition: transform 0.2s, opacity 0.4s ease-out;\n  }\n\n  .item {\n    padding: 10px;\n    max-width: 9em;\n    ", ";\n\n    &:hover {\n      color: ", ";\n\n      &.selected {\n        color: inherit;\n      }\n    }\n  }\n"], ["\n  position: absolute;\n  left: 50%;\n  bottom: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  transform: translateY(100%) translateX(-50%);\n  transition: none;\n  display: flex;\n  flex-direction: column-reverse;\n  max-height: calc((100% - 25px) * 20);\n  overflow: scroll;\n\n  &.shown {\n    opacity: 1;\n    transform: translateY(0) translateX(-50%);\n    transition: transform 0.2s, opacity 0.4s ease-out;\n  }\n\n  .item {\n    padding: 10px;\n    max-width: 9em;\n    ", ";\n\n    &:hover {\n      color: ", ";\n\n      &.selected {\n        color: inherit;\n      }\n    }\n  }\n"])), styleItem, _utils_style__WEBPACK_IMPORTED_MODULE_4__["colorPrimary"]);
var stylePopupMobile = Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  left: auto;\n  right: 0;\n  bottom: 100%;\n  transform: translateX(100%);\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: center;\n  height: calc((100% - 25px) * 33.33 - 100%);\n  overflow: scroll;\n  opacity: 0;\n  transition: none;\n  background-color: rgba(0, 0, 0, 0.5);\n\n  &.shown {\n    opacity: 1;\n    transform: translateX(0);\n    transition: transform 0s, opacity 0.2s ease-out;\n  }\n\n  .item {\n    padding: 20px;\n    width: 6em;\n    ", ";\n  }\n"], ["\n  position: absolute;\n  left: auto;\n  right: 0;\n  bottom: 100%;\n  transform: translateX(100%);\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: center;\n  height: calc((100% - 25px) * 33.33 - 100%);\n  overflow: scroll;\n  opacity: 0;\n  transition: none;\n  background-color: rgba(0, 0, 0, 0.5);\n\n  &.shown {\n    opacity: 1;\n    transform: translateX(0);\n    transition: transform 0s, opacity 0.2s ease-out;\n  }\n\n  .item {\n    padding: 20px;\n    width: 6em;\n    ", ";\n  }\n"])), styleItem);
var component = Object(unistore_preact__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, actions)(ToolBarVideoSelector);
var toolBarVideoSelectorPlugin = {
    entry: "ToolBar",
    index: 0,
    component: component,
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/controls/tool-bar-volume-button.tsx":
/*!*************************************************!*\
  !*** ./src/controls/tool-bar-volume-button.tsx ***!
  \*************************************************/
/*! exports provided: toolBarVolumeButtonPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toolBarVolumeButtonPlugin", function() { return toolBarVolumeButtonPlugin; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unistore/preact */ "./node_modules/unistore/preact.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(unistore_preact__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/* harmony import */ var _utils_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/style */ "./src/utils/style.ts");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/event */ "./src/utils/event.ts");
/* harmony import */ var _utils_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/actions */ "./src/utils/actions.ts");
/* harmony import */ var _assets_volume_on_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/volume-on.svg */ "./src/assets/volume-on.svg");
/* harmony import */ var _assets_volume_on_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_volume_on_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_volume_off_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/volume-off.svg */ "./src/assets/volume-off.svg");
/* harmony import */ var _assets_volume_off_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_volume_off_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};










var actions = {
    setVolume: _utils_actions__WEBPACK_IMPORTED_MODULE_6__["setVolume"],
};
function mapStateToProps(state, props) {
    var properties = state.properties, emitter = state.emitter;
    return {
        properties: properties,
        emitter: emitter,
    };
}
var ToolBarVolumeButton = /** @class */ (function (_super) {
    __extends(ToolBarVolumeButton, _super);
    function ToolBarVolumeButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pluginName = "ToolBarVolumeButton";
        _this.setSliderRef = function (el) { return (_this.sliderEl = el); };
        _this.setCursorRef = function (el) { return (_this.cursorEl = el); };
        _this.onMouseEnter = function () {
            clearTimeout(_this.timer);
            _this.setState({
                isShown: true,
            });
        };
        _this.onMouseLeave = function () {
            clearTimeout(_this.timer);
            _this.timer = setTimeout(function () {
                _this.setState({
                    isShown: false,
                });
            }, 200);
        };
        _this.onMouseDown = function (e) {
            if (e.target === _this.sliderEl || e.target === _this.cursorEl) {
                _this.mouseDown = true;
                _this.setVolumeBasedOnPoint(e.y);
                window.addEventListener("mousemove", _this.onMouseMove);
                window.addEventListener("mouseup", _this.onMouseUp);
            }
        };
        _this.onMouseMove = function (e) {
            if (_this.mouseDown) {
                _this.setVolumeBasedOnPoint(e.y);
            }
        };
        _this.onMouseUp = function (e) {
            if (_this.mouseDown) {
                _this.applyVolumeToVideo();
                _this.mouseDown = false;
                window.removeEventListener("mousemove", _this.onMouseMove);
                window.removeEventListener("mouseup", _this.onMouseUp);
            }
        };
        _this.toggle = function () {
            if (_this.props.properties.volume === 0) {
                _this.unmuted();
            }
            else {
                _this.muted();
            }
        };
        return _this;
    }
    ToolBarVolumeButton.prototype.componentDidMount = function () {
        this.volumeCache = this.props.properties.volume;
    };
    ToolBarVolumeButton.prototype.render = function () {
        var svg = (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: _utils_style__WEBPACK_IMPORTED_MODULE_4__["styleToolbarButtonIcon"], onClick: this.toggle, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave },
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { dangerouslySetInnerHTML: {
                    __html: (this.props.properties.volume !== 0 ? _assets_volume_on_svg__WEBPACK_IMPORTED_MODULE_7__ : _assets_volume_off_svg__WEBPACK_IMPORTED_MODULE_8__),
                } }),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])(styleVolumeBar, this.state.isShown && "shown"), onClick: function (e) { return e.stopPropagation(); } },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: styleVolumeBarText }, (this.props.properties.volume * 100).toFixed(0)),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: styleVolumeBarContent, onMouseDown: this.onMouseDown },
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: styleVolumeBarBackground, ref: this.setSliderRef },
                        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: styleVolumeBarFill, style: { height: this.getCursorBottom() + "%" } }),
                        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: styleVolumeBarCursor, style: { bottom: this.getCursorBottom() + "%" }, ref: this.setCursorRef }))))));
        return Object(_utils_render__WEBPACK_IMPORTED_MODULE_9__["getToolBarButtonTemplate"])(svg);
    };
    ToolBarVolumeButton.prototype.getCursorBottom = function () {
        var volume = this.props.properties.volume;
        return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parsePercent"])(volume * 100);
    };
    ToolBarVolumeButton.prototype.setVolumeBasedOnPoint = function (y) {
        var setVolume = this.props.setVolume;
        if (!this.rectCache) {
            this.rectCache = this.sliderEl.getBoundingClientRect();
        }
        var length = this.rectCache.bottom - y;
        var rate = length / this.rectCache.height;
        if (rate < 0) {
            rate = 0;
        }
        else if (rate > 1) {
            rate = 1;
        }
        setVolume(rate);
    };
    ToolBarVolumeButton.prototype.applyVolumeToVideo = function () {
        var _a = this.props, emitter = _a.emitter, properties = _a.properties;
        this.rectCache = null;
        if (properties.volume !== 0) {
            this.volumeCache = properties.volume;
        }
        emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_5__["InnerEventType"].InnerVideoSetVolume, properties.volume);
    };
    ToolBarVolumeButton.prototype.muted = function () {
        var _a = this.props, emitter = _a.emitter, properties = _a.properties;
        this.volumeCache = properties.volume;
        emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_5__["InnerEventType"].InnerVideoSetVolume, 0);
    };
    ToolBarVolumeButton.prototype.unmuted = function () {
        var volume = this.volumeCache !== 0 ? this.volumeCache : 0.5;
        this.props.emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_5__["InnerEventType"].InnerVideoSetVolume, volume);
    };
    return ToolBarVolumeButton;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));
var component = Object(unistore_preact__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, actions)(ToolBarVolumeButton);
var toolBarVolumeButtonPlugin = {
    entry: "ToolBar",
    index: 0,
    component: component,
};
var styleVolumeBar = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  width: 100%;\n  height: 300%;\n  left: 0;\n  right: 0;\n  bottom: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding-bottom: 8px;\n  opacity: 0;\n  transform: translateY(100%);\n  transition: transform 0s 0.4s, opacity 0.4s ease-in;\n\n  &.shown {\n    opacity: 1;\n    transform: translateY(0);\n    transition: transform 0.2s, opacity 0.4s ease-out;\n  }\n"], ["\n  position: absolute;\n  width: 100%;\n  height: 300%;\n  left: 0;\n  right: 0;\n  bottom: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding-bottom: 8px;\n  opacity: 0;\n  transform: translateY(100%);\n  transition: transform 0s 0.4s, opacity 0.4s ease-in;\n\n  &.shown {\n    opacity: 1;\n    transform: translateY(0);\n    transition: transform 0.2s, opacity 0.4s ease-out;\n  }\n"])));
var styleVolumeBarText = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  padding: 8px;\n  text-align: center;\n"], ["\n  color: ", ";\n  padding: 8px;\n  text-align: center;\n"])), _utils_style__WEBPACK_IMPORTED_MODULE_4__["colorDefault"]);
var styleVolumeBarContent = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex-grow: 1;\n  position: relative;\n"], ["\n  flex-grow: 1;\n  position: relative;\n"])));
var styleVolumeBarBackground = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  left: 50%;\n  top: 0;\n  bottom: 0;\n  width: 8%;\n  max-width: 10px;\n  background-color: rgba(200, 200, 200, 0.5);\n  cursor: pointer;\n  transform: translateX(-50%);\n"], ["\n  position: absolute;\n  left: 50%;\n  top: 0;\n  bottom: 0;\n  width: 8%;\n  max-width: 10px;\n  background-color: rgba(200, 200, 200, 0.5);\n  cursor: pointer;\n  transform: translateX(-50%);\n"])));
var styleVolumeBarFill = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 0;\n  background-color: ", ";\n  pointer-events: none;\n"], ["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 0;\n  background-color: ", ";\n  pointer-events: none;\n"])), _utils_style__WEBPACK_IMPORTED_MODULE_4__["colorPrimary"]);
var styleVolumeBarCursor = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background-color: rgb(255, 255, 255);\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%) translateY(50%);\n  cursor: pointer;\n"], ["\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background-color: rgb(255, 255, 255);\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%) translateY(50%);\n  cursor: pointer;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/controls/tool-bar.tsx":
/*!***********************************!*\
  !*** ./src/controls/tool-bar.tsx ***!
  \***********************************/
/*! exports provided: toolBarPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toolBarPlugin", function() { return toolBarPlugin; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unistore/preact */ "./node_modules/unistore/preact.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(unistore_preact__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.tsx");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/event */ "./src/utils/event.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};





function mapStateToProps(state, props) {
    var options = state.options, emitter = state.emitter, plugins = state.plugins;
    return {
        options: options,
        emitter: emitter,
        plugins: plugins,
    };
}
var ToolBar = /** @class */ (function (_super) {
    __extends(ToolBar, _super);
    function ToolBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pluginName = "ToolBar";
        _this.setTimer = function () {
            _this.clearTimer();
            _this.timer = setTimeout(function () {
                _this.hide();
            }, 2000);
        };
        _this.clearTimer = function () {
            clearTimeout(_this.timer);
        };
        _this.onClick = function (e) {
            e.stopPropagation();
            _this.clearTimer();
        };
        _this.onMouseEnter = _this.clearTimer;
        _this.onMouseLeave = _this.setTimer;
        _this.show = function () {
            if (_this.state.isShown !== true) {
                _this.setState({
                    isShown: true,
                });
                _this.props.emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerToolBarShown);
                _this.setTimer();
            }
        };
        _this.hide = function () {
            if (_this.state.isShown !== false) {
                _this.setState({
                    isShown: false,
                });
                _this.props.emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerToolBarHidden);
            }
        };
        _this.toggle = function () {
            if (_this.state.isShown === true) {
                _this.hide();
            }
            else {
                _this.show();
            }
        };
        return _this;
    }
    ToolBar.prototype.componentWillMount = function () {
        var emitter = this.props.emitter;
        emitter.on(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerToolBarShow, this.show);
        emitter.on(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerToolBarHide, this.hide);
        emitter.on(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerToolBarToggle, this.toggle);
        emitter.on(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerSeeking, this.clearTimer);
        emitter.on(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerSeeked, this.setTimer);
    };
    ToolBar.prototype.componentDidMount = function () {
        this.hide();
    };
    ToolBar.prototype.componentWillUnmount = function () {
        var emitter = this.props.emitter;
        emitter.off(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerToolBarShow, this.show);
        emitter.off(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerToolBarHide, this.hide);
        emitter.off(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerToolBarToggle, this.toggle);
        emitter.off(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerSeeking, this.clearTimer);
        emitter.off(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerSeeked, this.setTimer);
    };
    ToolBar.prototype.render = function () {
        var plugins = this.props.plugins;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])(styleToolBar, this.state.isShown && "shown"), onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave, onClick: this.onClick }, Object(_utils_render__WEBPACK_IMPORTED_MODULE_3__["renderComponents"])(this.pluginName, plugins)));
    };
    return ToolBar;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));
var component = Object(unistore_preact__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(ToolBar);
var toolBarPlugin = {
    entry: "Controls",
    index: 4,
    component: component,
};
var styleToolBar = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: calc(3% + 25px);\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  transition: transform 0.5s ease-in;\n  transform: translateY(100%);\n\n  &.shown {\n    transition: transform 0.5s ease-out;\n    transform: translateY(0);\n  }\n"], ["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: calc(3% + 25px);\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  transition: transform 0.5s ease-in;\n  transform: translateY(100%);\n\n  &.shown {\n    transition: transform 0.5s ease-out;\n    transform: translateY(0);\n  }\n"])));
var templateObject_1;


/***/ }),

/***/ "./src/i18n/en.ts":
/*!************************!*\
  !*** ./src/i18n/en.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var dict = {
    SourceN: "Source %s",
    UnknownSource: "Unknown source",
    Progress: "Progress: %s / %s",
    Volume: "Volume: %s",
    Brightness: "Brightness: %s",
    SourceNotSupproted: "Video type is not supported by current browser",
    NetworkError: "Network error, please check the network configuration and %s",
    DecodeError: "Video decode error",
    OtherErrors: "Something goes wrong, please %s",
    RetryPlaying: "retry playing",
};
/* harmony default export */ __webpack_exports__["default"] = (dict);


/***/ }),

/***/ "./src/i18n/index.ts":
/*!***************************!*\
  !*** ./src/i18n/index.ts ***!
  \***************************/
/*! exports provided: printf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printf", function() { return printf; });
function printf(template) {
    var data = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        data[_i - 1] = arguments[_i];
    }
    var templateArr = template.split("%s");
    var result = [];
    templateArr.forEach(function (item, index) {
        var replacement = data && data[index];
        result.push(item, replacement);
    });
    return result;
}


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
/* harmony import */ var unistore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unistore */ "./node_modules/unistore/dist/unistore.es.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! unistore/preact */ "./node_modules/unistore/preact.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(unistore_preact__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container */ "./src/container.tsx");
/* harmony import */ var _i18n_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n/en */ "./src/i18n/en.ts");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plugins */ "./src/plugins.ts");
/* harmony import */ var _utils_emitter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/emitter */ "./src/utils/emitter.ts");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/event */ "./src/utils/event.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};









var JuicyPlayer = /** @class */ (function () {
    function JuicyPlayer(options) {
        this.emitter = new _utils_emitter__WEBPACK_IMPORTED_MODULE_7__["Emitter"]();
        this.containerPositionCache = "";
        this.addEventListener = this.emitter.on;
        this.removeEventListener = this.emitter.off;
        this.on = this.emitter.on;
        this.off = this.emitter.off;
        this.once = this.emitter.once;
        this.emit = this.emitter.emit;
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["initOptions"])(options);
        this.store = Object(unistore__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["initState"])(options, this.emitter, JuicyPlayer.defaultPlugin, JuicyPlayer.defaultLang));
        this.render();
    }
    JuicyPlayer.use = function (plugin) {
        if (!Object(_plugins__WEBPACK_IMPORTED_MODULE_6__["checkPluginExistence"])(plugin, this.defaultPlugin)) {
            this.defaultPlugin.push(plugin);
        }
    };
    JuicyPlayer.lang = function (lang) {
        this.defaultLang = lang;
    };
    JuicyPlayer.prototype.getTargetElement = function () {
        var options = this.store.getState().options;
        var ele = options.element instanceof HTMLElement ? options.element : document.getElementById(options.element);
        if (!ele)
            throw new Error("can not found target element");
        return ele;
    };
    JuicyPlayer.prototype.setPostionStyle = function () {
        var container = this.getTargetElement();
        var style = window.getComputedStyle
            ? getComputedStyle(container, null)
            : container["currentStyle"];
        if (style.position !== "relative" && style.position !== "absolute") {
            this.containerPositionCache = style.position;
            container.style.position = "relative";
        }
    };
    JuicyPlayer.prototype.use = function (plugin) {
        var plugins = this.store.getState().plugins;
        if (!Object(_plugins__WEBPACK_IMPORTED_MODULE_6__["checkPluginExistence"])(plugin, plugins)) {
            this.store.setState({
                plugins: plugins.concat([plugin]),
            });
        }
    };
    JuicyPlayer.prototype.lang = function (lang) {
        this.store.setState({
            lang: lang,
        });
    };
    JuicyPlayer.prototype.render = function () {
        this.setPostionStyle();
        Object(preact__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(unistore_preact__WEBPACK_IMPORTED_MODULE_3__["Provider"], { store: this.store },
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_container__WEBPACK_IMPORTED_MODULE_4__["Container"], null)), this.getTargetElement());
    };
    JuicyPlayer.prototype.destroy = function () {
        var container = this.getTargetElement();
        container.style.position = this.containerPositionCache;
        Object(preact__WEBPACK_IMPORTED_MODULE_0__["render"])(null, this.getTargetElement());
    };
    Object.defineProperty(JuicyPlayer.prototype, "brightness", {
        get: function () {
            return this.store.getState().properties.brightness;
        },
        set: function (value) {
            this.store.setState({
                properties: __assign({}, this.store.getState().properties, { brightness: value }),
            });
            this.emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_8__["InnerEventType"].InnerVideoSetBrightness, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JuicyPlayer.prototype, "volume", {
        get: function () {
            return this.store.getState().properties.volume;
        },
        set: function (value) {
            this.store.setState({
                properties: __assign({}, this.store.getState().properties, { volume: value }),
            });
            this.emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_8__["InnerEventType"].InnerVideoSetVolume, value);
        },
        enumerable: true,
        configurable: true
    });
    JuicyPlayer.defaultPlugin = _plugins__WEBPACK_IMPORTED_MODULE_6__["buildInPlugins"];
    JuicyPlayer.defaultLang = _i18n_en__WEBPACK_IMPORTED_MODULE_5__["default"];
    return JuicyPlayer;
}());
/* harmony default export */ __webpack_exports__["default"] = (JuicyPlayer);


/***/ }),

/***/ "./src/player/html-player.tsx":
/*!************************************!*\
  !*** ./src/player/html-player.tsx ***!
  \************************************/
/*! exports provided: htmlPlayerPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlPlayerPlugin", function() { return htmlPlayerPlugin; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unistore/preact */ "./node_modules/unistore/preact.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unistore_preact__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/actions */ "./src/utils/actions.ts");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/event */ "./src/utils/event.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};






var actions = {
    setPlayState: _utils_actions__WEBPACK_IMPORTED_MODULE_2__["setPlayState"],
    setDuration: _utils_actions__WEBPACK_IMPORTED_MODULE_2__["setDuration"],
    setCurrentTime: _utils_actions__WEBPACK_IMPORTED_MODULE_2__["setCurrentTime"],
    setVolume: _utils_actions__WEBPACK_IMPORTED_MODULE_2__["setVolume"],
    setBuffered: _utils_actions__WEBPACK_IMPORTED_MODULE_2__["setBuffered"],
    setIsFullScreen: _utils_actions__WEBPACK_IMPORTED_MODULE_2__["setIsFullScreen"],
    setVideoState: _utils_actions__WEBPACK_IMPORTED_MODULE_2__["setVideoState"],
    setVideoError: _utils_actions__WEBPACK_IMPORTED_MODULE_2__["setVideoError"],
};
function mapStateToProps(state, props) {
    var options = state.options, properties = state.properties, emitter = state.emitter;
    return {
        options: options,
        properties: properties,
        emitter: emitter,
    };
}
var HTMLPlayer = /** @class */ (function (_super) {
    __extends(HTMLPlayer, _super);
    function HTMLPlayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pluginName = "HTMLPlayer";
        _this.createRef = function (el) { return (_this.el = el); };
        _this.handleEvent = function (e) {
            var hasEvt = false;
            for (var key in _utils_event__WEBPACK_IMPORTED_MODULE_4__["NativeEvent"]) {
                if (_utils_event__WEBPACK_IMPORTED_MODULE_4__["NativeEvent"][key] === e.type) {
                    hasEvt = true;
                    break;
                }
            }
            if (hasEvt) {
                _this.props.emitter.emit(e.type, e);
            }
            switch (e.type) {
                case _utils_event__WEBPACK_IMPORTED_MODULE_4__["NativeEvent"].Loadedmetadata:
                case _utils_event__WEBPACK_IMPORTED_MODULE_4__["NativeEvent"].Durationchange:
                    _this.props.setDuration(_this.el.duration);
                    break;
                case _utils_event__WEBPACK_IMPORTED_MODULE_4__["NativeEvent"].Timeupdate:
                    if (!_this.seeking) {
                        _this.syncCurrentTimeToState();
                    }
                    break;
                case _utils_event__WEBPACK_IMPORTED_MODULE_4__["NativeEvent"].Volumechange:
                    _this.syncVolumeToState();
                    break;
                case _utils_event__WEBPACK_IMPORTED_MODULE_4__["NativeEvent"].Canplay:
                case _utils_event__WEBPACK_IMPORTED_MODULE_4__["NativeEvent"].Progress:
                    _this.props.setBuffered(_this.el.buffered);
                    break;
                case _utils_event__WEBPACK_IMPORTED_MODULE_4__["NativeEvent"].Pause:
                case _utils_event__WEBPACK_IMPORTED_MODULE_4__["NativeEvent"].Ended:
                    _this.props.setPlayState(false);
                    break;
                case _utils_event__WEBPACK_IMPORTED_MODULE_4__["NativeEvent"].Playing:
                    _this.props.setPlayState(true);
                    break;
            }
        };
        _this.play = function () {
            if (_this.el) {
                _this.props.setPlayState(true);
                _this.el.play();
            }
        };
        _this.pause = function () {
            if (_this.el) {
                _this.props.setPlayState(false);
                _this.el.pause();
            }
        };
        _this.toggle = function () {
            if (_this.props.properties.playing) {
                _this.pause();
            }
            else {
                _this.play();
            }
        };
        _this.handleSetCurrentTime = function (e) {
            _this.setNativeElementTime(e.detail);
        };
        _this.handleNativeElementVolume = function (e) {
            _this.setNativeElementVolume(e.detail);
        };
        _this.handleSeeking = function () {
            _this.seeking = true;
        };
        _this.handleSeeked = function () {
            _this.seeking = false;
        };
        _this.handleFullScreen = function () {
            if (_this.enterFullScreen && _this.exitFullScreen) {
                if (!_this.props.properties.isFullScreen) {
                    _this.enterFullScreen();
                }
                else {
                    _this.exitFullScreen();
                }
            }
        };
        return _this;
    }
    HTMLPlayer.prototype.componentWillMount = function () {
        var emitter = this.props.emitter;
        emitter.on(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerVideoPlay, this.play);
        emitter.on(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerVideoPause, this.pause);
        emitter.on(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerVideoToggle, this.toggle);
        emitter.on(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerSeeking, this.handleSeeking);
        emitter.on(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerSeeked, this.handleSeeked);
        emitter.on(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerVideoSetCurrentTime, this.handleSetCurrentTime);
        if (!this.props.options.controlVolume) {
            emitter.on(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerVideoSetVolume, this.handleNativeElementVolume);
        }
        if (!this.props.options.controlFullScreen) {
            emitter.on(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerToggleFullScreen, this.handleFullScreen);
        }
    };
    HTMLPlayer.prototype.componentWillUnmount = function () {
        if (this.el) {
            this.unbindEvents(this.el);
        }
        var emitter = this.props.emitter;
        emitter.off(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerVideoPlay, this.play);
        emitter.off(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerVideoPause, this.pause);
        emitter.off(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerVideoToggle, this.toggle);
        emitter.off(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerVideoSetCurrentTime, this.handleSetCurrentTime);
        emitter.off(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerSeeking, this.handleSeeking);
        emitter.off(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerSeeked, this.handleSeeked);
        if (!this.props.options.controlVolume) {
            emitter.off(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerVideoSetVolume, this.handleNativeElementVolume);
        }
        if (!this.props.options.controlFullScreen) {
            emitter.off(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerToggleFullScreen, this.handleFullScreen);
        }
        clearInterval(this.timer);
    };
    HTMLPlayer.prototype.componentDidMount = function () {
        this.init();
    };
    HTMLPlayer.prototype.init = function () {
        this.setNativeElementVolume(this.props.properties.volume);
        this.setNativeElementTime(this.props.properties.currentTime);
        this.setFullScreenMethods();
        this.props.setBuffered(this.el.buffered);
        this.props.setVideoError(this.el.error);
        this.bindEvents(this.el);
        this.setTimer();
    };
    HTMLPlayer.prototype.render = function () {
        var _a = this.props.options, playsinline = _a.playsinline, autoplay = _a.autoplay, _b = _a.preload, preload = _b === void 0 ? "metadata" : _b, loop = _a.loop, muted = _a.muted;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("video", { className: styleVideo, ref: this.createRef, src: this.getSrc(), autoPlay: autoplay, preload: preload, loop: loop, muted: muted, "webkit-playsinline": playsinline, playsInline: playsinline, controls: false }));
    };
    HTMLPlayer.prototype.setTimer = function () {
        var _this = this;
        clearInterval(this.timer);
        this.timer = setInterval(function () {
            var _a = _this.props, properties = _a.properties, setVideoState = _a.setVideoState, setVideoError = _a.setVideoError;
            var _b = _this.el, networkState = _b.networkState, readyState = _b.readyState, error = _b.error;
            if (networkState !== properties.networkState || readyState !== properties.readyState) {
                setVideoState({ networkState: networkState, readyState: readyState });
            }
            if (properties.error !== error) {
                setVideoError(error);
            }
        }, 500);
    };
    HTMLPlayer.prototype.setFullScreenMethods = function () {
        var _this = this;
        if (_utils__WEBPACK_IMPORTED_MODULE_5__["IS_DOCUMENT_SUPPORT_FULLSCREEN"]) {
            return;
        }
        var _loop_1 = function (item) {
            var requestFullscreen = item[0];
            var exitFullscreen = item[1];
            var fullscreenElement = item[2];
            if (requestFullscreen in this_1.el) {
                var setIsFullScreen_1 = this_1.props.setIsFullScreen;
                this_1.enterFullScreen = function () {
                    _this.el[requestFullscreen]();
                };
                this_1.exitFullScreen = function () {
                    _this.el[exitFullscreen]();
                };
                var fullScreenChanged = function () {
                    var currentFullScreenElement = _this.el[fullscreenElement];
                    setIsFullScreen_1(currentFullScreenElement === _this.el);
                };
                this_1.el.addEventListener("webkitbeginfullscreen", fullScreenChanged);
                this_1.el.addEventListener("webkitendfullscreen", fullScreenChanged);
                fullScreenChanged();
                return "break";
            }
        };
        var this_1 = this;
        for (var _i = 0, fullScreenApiList_1 = _utils__WEBPACK_IMPORTED_MODULE_5__["fullScreenApiList"]; _i < fullScreenApiList_1.length; _i++) {
            var item = fullScreenApiList_1[_i];
            var state_1 = _loop_1(item);
            if (state_1 === "break")
                break;
        }
    };
    HTMLPlayer.prototype.bindEvents = function (el) {
        for (var key in _utils_event__WEBPACK_IMPORTED_MODULE_4__["NativeEvent"]) {
            el.addEventListener(_utils_event__WEBPACK_IMPORTED_MODULE_4__["NativeEvent"][key], this.handleEvent);
        }
    };
    HTMLPlayer.prototype.unbindEvents = function (el) {
        for (var key in _utils_event__WEBPACK_IMPORTED_MODULE_4__["NativeEvent"]) {
            el.removeEventListener(_utils_event__WEBPACK_IMPORTED_MODULE_4__["NativeEvent"][key], this.handleEvent);
        }
    };
    HTMLPlayer.prototype.getSrc = function () {
        var _a = this.props, options = _a.options, properties = _a.properties;
        var currentVideo = options.playList[properties.currentListIndex][properties.currentVideoIndex];
        return typeof currentVideo.src === "string" ? currentVideo.src : URL.createObjectURL(currentVideo.src);
    };
    HTMLPlayer.prototype.setNativeElementTime = function (time) {
        if (this.el) {
            this.el.currentTime = time;
        }
    };
    HTMLPlayer.prototype.setNativeElementVolume = function (volume) {
        if (this.el) {
            this.el.volume = volume;
            if (!this.props.options.controlVolume) {
                Object(_utils__WEBPACK_IMPORTED_MODULE_5__["saveVolumnToLocalData"])(volume);
            }
        }
    };
    HTMLPlayer.prototype.syncCurrentTimeToState = function () {
        this.props.setCurrentTime(this.el.currentTime);
    };
    HTMLPlayer.prototype.syncVolumeToState = function () {
        this.props.setVolume(this.el.volume);
    };
    return HTMLPlayer;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));
var component = Object(unistore_preact__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, actions)(HTMLPlayer);
component.__proto__.canPlay = function (source) {
    if (typeof source.src === "string") {
        if (document.createElement("video").canPlayType(source.mimetype)) {
            return true;
        }
    }
    else if (source.src instanceof MediaSource) {
        return true;
    }
    return false;
};
var htmlPlayerPlugin = {
    entry: "Player",
    index: 0,
    component: component,
};
var styleVideo = Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n"])));
var templateObject_1;


/***/ }),

/***/ "./src/player/index.tsx":
/*!******************************!*\
  !*** ./src/player/index.tsx ***!
  \******************************/
/*! exports provided: playerPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerPlugin", function() { return playerPlugin; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unistore/preact */ "./node_modules/unistore/preact.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unistore_preact__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.tsx");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/event */ "./src/utils/event.ts");
/* harmony import */ var _utils_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/actions */ "./src/utils/actions.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};






var actions = {
    setSource: function (state, listIndex, videoIndex) {
        return {
            properties: __assign({}, state.properties, { currentListIndex: listIndex, currentVideoIndex: videoIndex }),
        };
    },
    setVideoError: _utils_actions__WEBPACK_IMPORTED_MODULE_4__["setVideoError"],
};
function mapStateToProps(state, props) {
    var options = state.options, properties = state.properties, emitter = state.emitter, plugins = state.plugins;
    return {
        options: options,
        properties: properties,
        emitter: emitter,
        plugins: plugins,
    };
}
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(props) {
        var _this = _super.call(this, props) || this;
        _this.pluginName = "Player";
        _this.handleSettingSource = function (e) {
            var setSource = _this.props.setSource;
            var _a = e.detail, listIndex = _a.listIndex, videoIndex = _a.videoIndex;
            setSource(e.detail.listIndex, e.detail.videoIndex);
            _this.checkCanPlay(listIndex, videoIndex);
        };
        _this.handleRetryPlaying = function () {
            _this.setState({
                resetTime: _this.state.resetTime + 1,
            });
        };
        _this.state = {
            resetTime: 0,
        };
        return _this;
    }
    Player.prototype.componentDidMount = function () {
        var properties = this.props.properties;
        this.checkCanPlay(properties.currentListIndex, properties.currentVideoIndex);
    };
    Player.prototype.componentWillMount = function () {
        var emitter = this.props.emitter;
        emitter.on(_utils_event__WEBPACK_IMPORTED_MODULE_3__["InnerEventType"].InnerVideoSetSource, this.handleSettingSource);
        emitter.on(_utils_event__WEBPACK_IMPORTED_MODULE_3__["CustomEventType"].RetryPlaying, this.handleRetryPlaying);
    };
    Player.prototype.componentWillUnmount = function () {
        var emitter = this.props.emitter;
        emitter.off(_utils_event__WEBPACK_IMPORTED_MODULE_3__["InnerEventType"].InnerVideoSetSource, this.handleSettingSource);
        emitter.off(_utils_event__WEBPACK_IMPORTED_MODULE_3__["CustomEventType"].RetryPlaying, this.handleRetryPlaying);
    };
    Player.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, properties = _a.properties, emitter = _a.emitter, options = _a.options;
        var currentListIndex = properties.currentListIndex, currentVideoIndex = properties.currentVideoIndex;
        var prevProperties = prevProps.properties;
        if (prevProperties.currentListIndex != currentListIndex || prevProperties.currentVideoIndex != currentVideoIndex) {
            emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_3__["CustomEventType"].SourceChange, {
                from: prevProps.options.playList[prevProperties.currentListIndex][prevProperties.currentVideoIndex],
                fromListIndex: prevProperties.currentListIndex,
                fromVideoIndex: prevProperties.currentListIndex,
                to: options.playList[currentListIndex][currentVideoIndex],
                toListIndex: currentListIndex,
                toVideoIndex: currentVideoIndex,
            });
        }
    };
    Player.prototype.render = function () {
        return this.getPlayer();
    };
    Player.prototype.getSource = function (listIndex, videoIndex) {
        var options = this.props.options;
        var playList = options.playList;
        if (!playList) {
            return null;
        }
        var currentList = playList[listIndex];
        if (!currentList) {
            return null;
        }
        var currentVideo = currentList[videoIndex];
        if (!currentVideo) {
            return null;
        }
        return currentVideo;
    };
    Player.prototype.canPlay = function (listIndex, videoIndex) {
        var src = this.getSource(listIndex, videoIndex);
        if (src == null) {
            return false;
        }
        var playerPlugins = Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["getPlugins"])(this.pluginName, this.props.plugins);
        for (var _i = 0, playerPlugins_1 = playerPlugins; _i < playerPlugins_1.length; _i++) {
            var player = playerPlugins_1[_i];
            if (player.component && player.component.canPlay(src)) {
                return true;
            }
        }
        return false;
    };
    Player.prototype.getPlayer = function () {
        var properties = this.props.properties;
        var src = this.getSource(properties.currentListIndex, properties.currentVideoIndex);
        if (src == null) {
            return null;
        }
        var playerPlugins = Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["getPlugins"])(this.pluginName, this.props.plugins);
        for (var _i = 0, playerPlugins_2 = playerPlugins; _i < playerPlugins_2.length; _i++) {
            var player = playerPlugins_2[_i];
            if (player.component && player.component.canPlay(src)) {
                return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(player.component, { key: this.state.resetTime });
            }
        }
        return null;
    };
    Player.prototype.checkCanPlay = function (listIndex, videoIndex) {
        if (this.canPlay(listIndex, videoIndex)) {
            return;
        }
        var _a = this.props, emitter = _a.emitter, setVideoError = _a.setVideoError;
        var err = new _utils__WEBPACK_IMPORTED_MODULE_5__["MediaError"](_utils__WEBPACK_IMPORTED_MODULE_5__["MediaError"].MEDIA_ERR_SRC_NOT_SUPPORTED);
        emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_3__["NativeEvent"].Error, err);
        setVideoError(err);
        console.error("can not play video: ", this.getSource(listIndex, videoIndex));
    };
    return Player;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));
var component = Object(unistore_preact__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, actions)(Player);
var playerPlugin = {
    entry: "Container",
    index: 0,
    component: component,
};


/***/ }),

/***/ "./src/plugins.ts":
/*!************************!*\
  !*** ./src/plugins.ts ***!
  \************************/
/*! exports provided: buildInPlugins, checkPluginExistence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildInPlugins", function() { return buildInPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPluginExistence", function() { return checkPluginExistence; });
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls */ "./src/controls/index.tsx");
/* harmony import */ var _player_html_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player/html-player */ "./src/player/html-player.tsx");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player/index.tsx");
/* harmony import */ var _controls_big_play_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls/big-play-button */ "./src/controls/big-play-button.tsx");
/* harmony import */ var _controls_tool_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls/tool-bar */ "./src/controls/tool-bar.tsx");
/* harmony import */ var _controls_tool_bar_top_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls/tool-bar-top-progress-bar */ "./src/controls/tool-bar-top-progress-bar.tsx");
/* harmony import */ var _controls_tool_bar_play_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controls/tool-bar-play-button */ "./src/controls/tool-bar-play-button.tsx");
/* harmony import */ var _controls_tool_bar_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controls/tool-bar-progress-bar */ "./src/controls/tool-bar-progress-bar.tsx");
/* harmony import */ var _controls_tool_bar_volume_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controls/tool-bar-volume-button */ "./src/controls/tool-bar-volume-button.tsx");
/* harmony import */ var _controls_tool_bar_full_screen_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controls/tool-bar-full-screen-button */ "./src/controls/tool-bar-full-screen-button.tsx");
/* harmony import */ var _controls_tool_bar_video_selector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./controls/tool-bar-video-selector */ "./src/controls/tool-bar-video-selector.tsx");
/* harmony import */ var _controls_mobile_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./controls/mobile-actions */ "./src/controls/mobile-actions.tsx");
/* harmony import */ var _controls_loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./controls/loading */ "./src/controls/loading.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
/* harmony import */ var _controls_error__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./controls/error */ "./src/controls/error.tsx");















var buildInPlugins = [
    _player__WEBPACK_IMPORTED_MODULE_2__["playerPlugin"],
    _player_html_player__WEBPACK_IMPORTED_MODULE_1__["htmlPlayerPlugin"],
    _controls__WEBPACK_IMPORTED_MODULE_0__["controlsPlugin"],
    _controls_big_play_button__WEBPACK_IMPORTED_MODULE_3__["bigPlayButtonPlugin"],
    _controls_tool_bar__WEBPACK_IMPORTED_MODULE_4__["toolBarPlugin"],
    _utils__WEBPACK_IMPORTED_MODULE_13__["IS_TOUCHABLE_DEVICE"] ? _controls_mobile_actions__WEBPACK_IMPORTED_MODULE_11__["mobileActionsPlugin"] : null,
    _controls_tool_bar_top_progress_bar__WEBPACK_IMPORTED_MODULE_5__["toolBarTopProgressBarPlugin"],
    !_utils__WEBPACK_IMPORTED_MODULE_13__["IS_TOUCHABLE_DEVICE"] ? _controls_tool_bar_play_button__WEBPACK_IMPORTED_MODULE_6__["toolBarPlayButtonPlugin"] : null,
    _controls_tool_bar_progress_bar__WEBPACK_IMPORTED_MODULE_7__["toolBarProgressBarPlugin"],
    _controls_tool_bar_video_selector__WEBPACK_IMPORTED_MODULE_10__["toolBarVideoSelectorPlugin"],
    !_utils__WEBPACK_IMPORTED_MODULE_13__["IS_TOUCHABLE_DEVICE"] ? _controls_tool_bar_volume_button__WEBPACK_IMPORTED_MODULE_8__["toolBarVolumeButtonPlugin"] : null,
    _controls_tool_bar_full_screen_button__WEBPACK_IMPORTED_MODULE_9__["toolBarFullScreenButtonPlugin"],
    _controls_loading__WEBPACK_IMPORTED_MODULE_12__["loadingPlugin"],
    _controls_error__WEBPACK_IMPORTED_MODULE_14__["errorPlugin"],
].filter(function (item) { return item != null; });
function checkPluginExistence(plugin, plugins) {
    var existed = false;
    for (var _i = 0, plugins_1 = plugins; _i < plugins_1.length; _i++) {
        var oldPlugin = plugins_1[_i];
        if (oldPlugin === plugin) {
            existed = true;
            break;
        }
    }
    return existed;
}


/***/ }),

/***/ "./src/utils/actions.ts":
/*!******************************!*\
  !*** ./src/utils/actions.ts ***!
  \******************************/
/*! exports provided: setPlayState, setCurrentTime, setVolume, setDuration, setBuffered, setIsFullScreen, setVideoState, setVideoError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPlayState", function() { return setPlayState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentTime", function() { return setCurrentTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVolume", function() { return setVolume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDuration", function() { return setDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBuffered", function() { return setBuffered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIsFullScreen", function() { return setIsFullScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVideoState", function() { return setVideoState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVideoError", function() { return setVideoError; });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function setPlayState(state, playing) {
    return {
        properties: __assign({}, state.properties, { playing: playing }),
    };
}
function setCurrentTime(state, currentTime) {
    return {
        properties: __assign({}, state.properties, { currentTime: currentTime }),
    };
}
function setVolume(state, volume) {
    return {
        properties: __assign({}, state.properties, { volume: volume }),
    };
}
function setDuration(state, duration) {
    return {
        properties: __assign({}, state.properties, { duration: duration }),
    };
}
function setBuffered(state, buffered) {
    return {
        properties: __assign({}, state.properties, { buffered: buffered }),
    };
}
function setIsFullScreen(state, isFullScreen) {
    return {
        properties: __assign({}, state.properties, { isFullScreen: isFullScreen }),
    };
}
function setVideoState(state, videoState) {
    var networkState = videoState.networkState, readyState = videoState.readyState;
    return {
        properties: __assign({}, state.properties, { networkState: networkState,
            readyState: readyState }),
    };
}
function setVideoError(state, err) {
    return {
        properties: __assign({}, state.properties, { error: err }),
    };
}


/***/ }),

/***/ "./src/utils/emitter.ts":
/*!******************************!*\
  !*** ./src/utils/emitter.ts ***!
  \******************************/
/*! exports provided: Emitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Emitter", function() { return Emitter; });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ "./src/utils/event.ts");

var Emitter = /** @class */ (function () {
    function Emitter() {
        this.events = {};
        this.addEventListener = this.on;
        this.removeEventListener = this.off;
    }
    Emitter.prototype.on = function (event, listener) {
        this.events[event] = this.events[event] || [];
        this.events[event].push(listener);
    };
    Emitter.prototype.off = function (event, listener) {
        var listeners = this.events[event];
        if (listeners) {
            for (var i = 0; i < listeners.length; i++) {
                if (listeners[i] === listener) {
                    listeners.splice(i, 1);
                }
            }
        }
    };
    Emitter.prototype.once = function (event, listener) {
        var _this = this;
        var listenerWrapper = function (e) {
            listener(e);
            _this.off(event, listenerWrapper);
        };
        this.on(event, listenerWrapper);
    };
    Emitter.prototype.emit = function (type, data) {
        var listeners = this.events[type];
        if (listeners) {
            for (var _i = 0, listeners_1 = listeners; _i < listeners_1.length; _i++) {
                var listener = listeners_1[_i];
                var event_1 = new _event__WEBPACK_IMPORTED_MODULE_0__["PlayerEvent"](type, data);
                var result = listener(event_1);
                if (result === false) {
                    break;
                }
            }
        }
    };
    return Emitter;
}());



/***/ }),

/***/ "./src/utils/event.ts":
/*!****************************!*\
  !*** ./src/utils/event.ts ***!
  \****************************/
/*! exports provided: NativeEvent, CustomEventType, InnerEventType, PlayerEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeEvent", function() { return NativeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEventType", function() { return CustomEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerEventType", function() { return InnerEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerEvent", function() { return PlayerEvent; });
var NativeEvent;
(function (NativeEvent) {
    NativeEvent["Abort"] = "abort";
    NativeEvent["Canplay"] = "canplay";
    NativeEvent["Canplaythrough"] = "canplaythrough";
    NativeEvent["Durationchange"] = "durationchange";
    NativeEvent["Emptied"] = "emptied";
    NativeEvent["Ended"] = "ended";
    NativeEvent["Error"] = "error";
    NativeEvent["Loadeddata"] = "loadeddata";
    NativeEvent["Loadedmetadata"] = "loadedmetadata";
    NativeEvent["Loadstart"] = "loadstart";
    NativeEvent["Pause"] = "pause";
    NativeEvent["Play"] = "play";
    NativeEvent["Playing"] = "playing";
    NativeEvent["Progress"] = "progress";
    NativeEvent["Ratechange"] = "ratechange";
    NativeEvent["Seeked"] = "seeked";
    NativeEvent["Seeking"] = "seeking";
    NativeEvent["Stalled"] = "stalled";
    NativeEvent["Suspend"] = "suspend";
    NativeEvent["Timeupdate"] = "timeupdate";
    NativeEvent["Volumechange"] = "volumechange";
    NativeEvent["Waiting"] = "waiting";
})(NativeEvent || (NativeEvent = {}));
var CustomEventType;
(function (CustomEventType) {
    CustomEventType["RetryPlaying"] = "c.retryPlaying";
    CustomEventType["SourceChange"] = "c.sourceChange";
})(CustomEventType || (CustomEventType = {}));
var InnerEventType;
(function (InnerEventType) {
    InnerEventType["InnerVideoPlay"] = "i.videoPlay";
    InnerEventType["InnerVideoPause"] = "i.videoPause";
    InnerEventType["InnerVideoToggle"] = "i.videoToggle";
    InnerEventType["InnerVideoSetSource"] = "i.videoSetSource";
    InnerEventType["InnerVideoSetCurrentTime"] = "i.videoSetCurrentTime";
    InnerEventType["InnerVideoSetBrightness"] = "i.videoSetBrightness";
    InnerEventType["InnerVideoSetVolume"] = "i.videoSetVolume";
    InnerEventType["InnerProgressBarHide"] = "i.progressBarHide";
    InnerEventType["InnerProgressBarShow"] = "i.progressBarShow";
    InnerEventType["InnerToolBarHide"] = "i.toolBarHide";
    InnerEventType["InnerToolBarShow"] = "i.toolBarShow";
    InnerEventType["InnerToolBarToggle"] = "i.toolBarToggle";
    InnerEventType["InnerToolBarHidden"] = "i.toolBarHidden";
    InnerEventType["InnerToolBarShown"] = "i.toolBarShown";
    InnerEventType["InnerSeeking"] = "i.seeking";
    InnerEventType["InnerSeeked"] = "i.seeked";
    InnerEventType["InnerToggleFullScreen"] = "i.toggleFullScreen";
})(InnerEventType || (InnerEventType = {}));
var PlayerEvent = /** @class */ (function () {
    function PlayerEvent(type, detail) {
        this.type = type;
        this.detail = detail;
    }
    return PlayerEvent;
}());



/***/ }),

/***/ "./src/utils/image-placeholder.tsx":
/*!*****************************************!*\
  !*** ./src/utils/image-placeholder.tsx ***!
  \*****************************************/
/*! exports provided: ImagePlaceHolder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePlaceHolder", function() { return ImagePlaceHolder; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unistore/preact */ "./node_modules/unistore/preact.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unistore_preact__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};



function mapStateToProps(state, props) {
    var emitter = state.emitter;
    return {
        emitter: emitter,
    };
}
var ImagePlaceHolderComp = /** @class */ (function (_super) {
    __extends(ImagePlaceHolderComp, _super);
    function ImagePlaceHolderComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggle = function () {
            _this.setState({
                needRender: !_this.state.needRender,
            });
        };
        return _this;
    }
    ImagePlaceHolderComp.prototype.componentWillMount = function () {
        window.addEventListener("resize", this.toggle);
    };
    ImagePlaceHolderComp.prototype.componentWillUnmount = function () {
        window.removeEventListener("resize", this.toggle);
    };
    ImagePlaceHolderComp.prototype.render = function () {
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(styleButtonPlaceholder, this.state.needRender && "rerender") },
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" })));
    };
    return ImagePlaceHolderComp;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));
var ImagePlaceHolder = Object(unistore_preact__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(ImagePlaceHolderComp);
var styleButtonPlaceholder = Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100%;\n  pointer-events: none;\n\n  img {\n    height: 100%;\n  }\n\n  &.rerender {\n    &:before {\n      display: block;\n      content: \" \";\n      height: 1px;\n    }\n\n    img {\n      margin-top: -1px;\n    }\n  }\n"], ["\n  height: 100%;\n  pointer-events: none;\n\n  img {\n    height: 100%;\n  }\n\n  &.rerender {\n    &:before {\n      display: block;\n      content: \" \";\n      height: 1px;\n    }\n\n    img {\n      margin-top: -1px;\n    }\n  }\n"])));
var templateObject_1;


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: ReadyState, NetworkState, MediaError, fullScreenApiList, canPlayTypeByFlash, IS_IOS, IS_DOCUMENT_SUPPORT_FULLSCREEN, IS_TOUCHABLE_DEVICE, initOptions, initState, parsePercent, secondToMMSS, getVolumeFromLocalData, saveVolumnToLocalData, getBrightnessFromLocalData, saveBrightnessToLocalData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadyState", function() { return ReadyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkState", function() { return NetworkState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaError", function() { return MediaError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullScreenApiList", function() { return fullScreenApiList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canPlayTypeByFlash", function() { return canPlayTypeByFlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_IOS", function() { return IS_IOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_DOCUMENT_SUPPORT_FULLSCREEN", function() { return IS_DOCUMENT_SUPPORT_FULLSCREEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_TOUCHABLE_DEVICE", function() { return IS_TOUCHABLE_DEVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initOptions", function() { return initOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePercent", function() { return parsePercent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secondToMMSS", function() { return secondToMMSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVolumeFromLocalData", function() { return getVolumeFromLocalData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveVolumnToLocalData", function() { return saveVolumnToLocalData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrightnessFromLocalData", function() { return getBrightnessFromLocalData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveBrightnessToLocalData", function() { return saveBrightnessToLocalData; });
var ReadyState;
(function (ReadyState) {
    ReadyState[ReadyState["HAVE_NOTHING"] = 0] = "HAVE_NOTHING";
    ReadyState[ReadyState["HAVE_METADATA"] = 1] = "HAVE_METADATA";
    ReadyState[ReadyState["HAVE_CURRENT_DATA"] = 2] = "HAVE_CURRENT_DATA";
    ReadyState[ReadyState["HAVE_FUTURE_DATA"] = 3] = "HAVE_FUTURE_DATA";
    ReadyState[ReadyState["HAVE_ENOUGH_DATA"] = 4] = "HAVE_ENOUGH_DATA";
})(ReadyState || (ReadyState = {}));
var NetworkState;
(function (NetworkState) {
    NetworkState[NetworkState["NETWORK_EMPTY"] = 0] = "NETWORK_EMPTY";
    NetworkState[NetworkState["NETWORK_IDLE"] = 1] = "NETWORK_IDLE";
    NetworkState[NetworkState["NETWORK_LOADING"] = 2] = "NETWORK_LOADING";
    NetworkState[NetworkState["NETWORK_NO_SOURCE"] = 3] = "NETWORK_NO_SOURCE";
})(NetworkState || (NetworkState = {}));
var MediaError = /** @class */ (function () {
    function MediaError(code, message) {
        this.code = code;
        this.message = message;
    }
    MediaError.MEDIA_ERR_ABORTED = 1;
    MediaError.MEDIA_ERR_NETWORK = 2;
    MediaError.MEDIA_ERR_DECODE = 3;
    MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED = 4;
    return MediaError;
}());

var canPlayFormat = {
    "video/flv": "FLV",
    "video/x-flv": "FLV",
    "video/flash": "FLV",
};
var canPlayRtmpFormat = {
    "rtmp/mp4": "MP4",
    "rtmp/flv": "FLV",
};
var fullScreenApiList = [
    [
        "requestFullscreen",
        "exitFullscreen",
        "fullscreenElement",
        "fullscreenEnabled",
        "fullscreenchange",
        "fullscreenerror",
    ],
    [
        "webkitRequestFullscreen",
        "webkitExitFullscreen",
        "webkitFullscreenElement",
        "webkitFullscreenEnabled",
        "webkitfullscreenchange",
        "webkitfullscreenerror",
    ],
    [
        "webkitRequestFullScreen",
        "webkitCancelFullScreen",
        "webkitFullScreenElement",
        "webkitCancelFullScreen",
        "webkitfullscreenchange",
        "webkitfullscreenerror",
    ],
    [
        "mozRequestFullScreen",
        "mozCancelFullScreen",
        "mozFullScreenElement",
        "mozFullScreenEnabled",
        "mozfullscreenchange",
        "mozfullscreenerror",
    ],
    [
        "msRequestFullscreen",
        "msExitFullscreen",
        "msFullscreenElement",
        "msFullscreenEnabled",
        "MSFullscreenChange",
        "MSFullscreenError",
    ],
    [
        "webkitEnterFullscreen",
        "webkitExitFullscreen",
        "webkitDisplayingFullscreen",
        "webkitSupportsFullscreen",
        "webkitbeginfullscreen",
        "webkitfullscreenerror",
    ],
    [
        "webkitEnterFullScreen",
        "webkitExitFullScreen",
        "webkitDisplayingFullscreen",
        "webkitSupportsFullscreen",
        "webkitbeginfullscreen",
        "webkitfullscreenerror",
    ],
];
function canPlayTypeByFlash(type) {
    if (type in Object.assign(canPlayFormat, canPlayRtmpFormat)) {
        return "maybe";
    }
    return "";
}
// export const IS_SUPPORT_MSE = "MediaSource" in window;
// export const IS_SUPPORT_FLASH = flashVersion()[0] >= "10";
var IS_IOS = /iPhone|iPad/i.test(navigator.userAgent);
var IS_DOCUMENT_SUPPORT_FULLSCREEN = (function () {
    var isEnabled = false;
    for (var _i = 0, fullScreenApiList_1 = fullScreenApiList; _i < fullScreenApiList_1.length; _i++) {
        var item = fullScreenApiList_1[_i];
        var fullscreenchange = item[4];
        if ("on" + fullscreenchange in document) {
            isEnabled = true;
            break;
        }
    }
    return isEnabled;
})();
var IS_TOUCHABLE_DEVICE = (function () {
    var prefixes = " -webkit- -moz- -o- -ms- ".split(" ");
    var mq = function (query) {
        return window.matchMedia(query).matches;
    };
    if ("ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)) {
        return true;
    }
    var query = ["(", prefixes.join("touch-enabled),("), "heartz", ")"].join("");
    return mq(query);
})();
// function flashVersion() {
//   let version = "0,0,0";
//   try {
//     version = new (<any>window).ActiveXObject("ShockwaveFlash.ShockwaveFlash")
//       .GetVariable("$version")
//       .replace(/\D+/g, ",")
//       .match(/^,?(.+),?$/)[1];
//   } catch (e) {
//     try {
//       if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) {
//         version = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description
//           .replace(/\D+/g, ",")
//           .match(/^,?(.+),?$/)[1];
//       }
//     } catch (err) {}
//   }
//   return version.split(",");
// }
function initOptions(opt) {
    if (!opt)
        throw new Error("option cannot be empty");
}
function initState(options, emitter, plugins, lang) {
    var volumeFromLocalData = getVolumeFromLocalData();
    var volume = volumeFromLocalData != null && !options.controlVolume ? volumeFromLocalData : 1;
    var brightnessFromLocalData = getBrightnessFromLocalData();
    var brightness = brightnessFromLocalData != null && !options.controlBrightness ? brightnessFromLocalData : 1;
    return {
        options: options,
        properties: {
            playing: false,
            currentListIndex: 0,
            currentVideoIndex: 0,
            currentTime: 0,
            duration: 0,
            buffered: null,
            volume: volume,
            brightness: brightness,
            isFullScreen: null,
            networkState: NetworkState.NETWORK_EMPTY,
            readyState: ReadyState.HAVE_NOTHING,
            error: null,
        },
        emitter: emitter,
        plugins: plugins,
        lang: lang,
    };
}
function parsePercent(percent, decimal) {
    if (decimal === void 0) { decimal = 0; }
    if (percent > 100)
        percent = 100;
    if (percent < 0)
        percent = 0;
    return percent.toFixed(decimal);
}
function secondToMMSS(seconds) {
    if (!seconds)
        return "00:00";
    var date = new Date(null);
    date.setSeconds(seconds); // specify value for SECONDS here
    return date
        .toISOString()
        .substr(11, 8)
        .replace(/^00:(.+:.+)$/, "$1");
}
function getNumberFromLocalData(key) {
    var value;
    try {
        value = parseFloat(localStorage.getItem(key));
    }
    catch (_a) { }
    if (value != null && !isNaN(value)) {
        return value;
    }
}
var volumeKey = "juicy.volume";
function getVolumeFromLocalData() {
    return getNumberFromLocalData(volumeKey);
}
function saveVolumnToLocalData(volume) {
    try {
        localStorage.setItem(volumeKey, "" + volume);
    }
    catch (_a) { }
}
var brightnessKey = "juicy.brightness";
function getBrightnessFromLocalData() {
    return getNumberFromLocalData(brightnessKey);
}
function saveBrightnessToLocalData(brightness) {
    try {
        localStorage.setItem(brightnessKey, "" + brightness);
    }
    catch (_a) { }
}


/***/ }),

/***/ "./src/utils/render.tsx":
/*!******************************!*\
  !*** ./src/utils/render.tsx ***!
  \******************************/
/*! exports provided: mapPluginsToProps, renderComponents, getPlugins, getToolBarButtonTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapPluginsToProps", function() { return mapPluginsToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderComponents", function() { return renderComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlugins", function() { return getPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToolBarButtonTemplate", function() { return getToolBarButtonTemplate; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var _image_placeholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-placeholder */ "./src/utils/image-placeholder.tsx");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};



function mapPluginsToProps(state, props) {
    var plugins = state.plugins;
    return {
        plugins: plugins,
    };
}
function renderComponents(entry, plugins) {
    return getPlugins(entry, plugins).map(function (plugin) {
        return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(plugin.component, null);
    });
}
function getPluginByEntry(entry, plugin) {
    if (entry === plugin.entry) {
        return plugin;
    }
}
function getPlugins(entry, plugins) {
    var components = [];
    for (var _i = 0, plugins_1 = plugins; _i < plugins_1.length; _i++) {
        var pluginArray = plugins_1[_i];
        if (Array.isArray(pluginArray)) {
            for (var _a = 0, pluginArray_1 = pluginArray; _a < pluginArray_1.length; _a++) {
                var plugin = pluginArray_1[_a];
                var component = getPluginByEntry(entry, plugin);
                if (component != null) {
                    components.push(component);
                }
            }
        }
        else {
            var component = getPluginByEntry(entry, pluginArray);
            if (component != null) {
                components.push(component);
            }
        }
    }
    return components.sort(function (a, b) {
        return a.index - b.index;
    });
}
var styleButtonContainer = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  height: 100%;\n"], ["\n  position: relative;\n  height: 100%;\n"])));
function getToolBarButtonTemplate(content) {
    return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: styleButtonContainer },
        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_image_placeholder__WEBPACK_IMPORTED_MODULE_2__["ImagePlaceHolder"], null),
        content));
}
var templateObject_1;


/***/ }),

/***/ "./src/utils/style.ts":
/*!****************************!*\
  !*** ./src/utils/style.ts ***!
  \****************************/
/*! exports provided: colorDefault, colorDefaultAlpha05, colorPrimary, colorPrimaryAlpha04, colorPrimaryAlpha01, colorPrimaryLightenAlpha06, fontSizeDefault, styleAbsFull, styleToolbarButtonIcon, styleToolBarTextContainer, styleToolBarText, styleSvg, styleLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorDefault", function() { return colorDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorDefaultAlpha05", function() { return colorDefaultAlpha05; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorPrimary", function() { return colorPrimary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorPrimaryAlpha04", function() { return colorPrimaryAlpha04; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorPrimaryAlpha01", function() { return colorPrimaryAlpha01; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorPrimaryLightenAlpha06", function() { return colorPrimaryLightenAlpha06; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSizeDefault", function() { return fontSizeDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleAbsFull", function() { return styleAbsFull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleToolbarButtonIcon", function() { return styleToolbarButtonIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleToolBarTextContainer", function() { return styleToolBarTextContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleToolBarText", function() { return styleToolBarText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleSvg", function() { return styleSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleLink", function() { return styleLink; });
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/utils/index.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var colorDefault = "rgb(255, 255, 255)";
var colorDefaultAlpha05 = "rgba(255, 255, 255, 0.5)";
var colorPrimary = "rgb(22, 137, 255)";
var colorPrimaryAlpha04 = "rgba(22, 137, 255, 0.4)";
var colorPrimaryAlpha01 = "rgba(22, 137, 255, 0.1)";
var colorPrimaryLightenAlpha06 = "rgba(122, 189, 255, 0.6)";
var fontSizeDefault = "1rem";
var styleAbsFull = Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n"], ["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n"])));
var styleActive = Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  &:active {\n    color: ", ";\n\n    svg {\n      fill: ", ";\n    }\n  }\n"], ["\n  &:active {\n    color: ", ";\n\n    svg {\n      fill: ", ";\n    }\n  }\n"])), colorPrimary, colorPrimary);
var styleHover = Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  &:hover {\n    color: ", ";\n\n    svg {\n      fill: ", ";\n    }\n  }\n"], ["\n  &:hover {\n    color: ", ";\n\n    svg {\n      fill: ", ";\n    }\n  }\n"])), colorPrimary, colorPrimary);
var styleToolbarButtonIcon = Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n  cursor: pointer;\n\n  svg {\n    position: absolute;\n    fill: ", ";\n    transition: fill 0.5s;\n    left: 50%;\n    top: 50%;\n    width: 50%;\n    height: 50%;\n    transform: translateX(-50%) translateY(-50%);\n    pointer-events: none;\n  }\n\n  ", ";\n"], ["\n  ", ";\n  cursor: pointer;\n\n  svg {\n    position: absolute;\n    fill: ", ";\n    transition: fill 0.5s;\n    left: 50%;\n    top: 50%;\n    width: 50%;\n    height: 50%;\n    transform: translateX(-50%) translateY(-50%);\n    pointer-events: none;\n  }\n\n  ", ";\n"])), styleAbsFull, colorDefault, ___WEBPACK_IMPORTED_MODULE_1__["IS_TOUCHABLE_DEVICE"] ? styleActive : styleHover);
var styleToolBarTextContainer = Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  height: 100%;\n  padding: 0 calc(1% + 5px);\n  color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n"], ["\n  height: 100%;\n  padding: 0 calc(1% + 5px);\n  color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n"])), colorDefault);
var styleToolBarText = Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  max-width: 6em;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"], ["\n  max-width: 6em;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"])));
var styleSvg = Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  svg {\n    ", ";\n  }\n"], ["\n  svg {\n    ", ";\n  }\n"])), styleAbsFull);
var styleLink = Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  color: ", ";\n  text-decoration: none;\n  cursor: pointer;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  color: ", ";\n  text-decoration: none;\n  cursor: pointer;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"])), colorPrimary);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;


/***/ })

/******/ })["default"];
});