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

/***/ "./node_modules/immer/dist/immer.module.js":
/*!*************************************************!*\
  !*** ./node_modules/immer/dist/immer.module.js ***!
  \*************************************************/
/*! exports provided: default, Immer, applyPatches, createDraft, finishDraft, immerable, isDraft, isDraftable, nothing, original, produce, produceWithPatches, setAutoFreeze, setUseProxies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Immer", function() { return Immer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPatches", function() { return applyPatches$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDraft", function() { return createDraft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishDraft", function() { return finishDraft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "immerable", function() { return DRAFTABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraft", function() { return isDraft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraftable", function() { return isDraftable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return NOTHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "original", function() { return original; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produce", function() { return produce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produceWithPatches", function() { return produceWithPatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAutoFreeze", function() { return setAutoFreeze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUseProxies", function() { return setUseProxies; });
var obj;
var NOTHING = typeof Symbol !== "undefined" ? Symbol("immer-nothing") : ( obj = {}, obj["immer-nothing"] = true, obj );
var DRAFTABLE = typeof Symbol !== "undefined" && Symbol.for ? Symbol.for("immer-draftable") : "__$immer_draftable";
var DRAFT_STATE = typeof Symbol !== "undefined" && Symbol.for ? Symbol.for("immer-state") : "__$immer_state";
function isDraft(value) {
  return !!value && !!value[DRAFT_STATE];
}
function isDraftable(value) {
  if (!value || typeof value !== "object") { return false; }
  if (Array.isArray(value)) { return true; }
  var proto = Object.getPrototypeOf(value);
  if (!proto || proto === Object.prototype) { return true; }
  return !!value[DRAFTABLE] || !!value.constructor[DRAFTABLE];
}
function original(value) {
  if (value && value[DRAFT_STATE]) {
    return value[DRAFT_STATE].base;
  } // otherwise return undefined

}
var assign = Object.assign || function assign(target, value) {
  for (var key in value) {
    if (has(value, key)) {
      target[key] = value[key];
    }
  }

  return target;
};
var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : typeof Object.getOwnPropertySymbols !== "undefined" ? function (obj) { return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj)); } : Object.getOwnPropertyNames;
function shallowCopy(base, invokeGetters) {
  if ( invokeGetters === void 0 ) invokeGetters = false;

  if (Array.isArray(base)) { return base.slice(); }
  var clone = Object.create(Object.getPrototypeOf(base));
  ownKeys(base).forEach(function (key) {
    if (key === DRAFT_STATE) {
      return; // Never copy over draft state.
    }

    var desc = Object.getOwnPropertyDescriptor(base, key);
    var value = desc.value;

    if (desc.get) {
      if (!invokeGetters) {
        throw new Error("Immer drafts cannot have computed properties");
      }

      value = desc.get.call(base);
    }

    if (desc.enumerable) {
      clone[key] = value;
    } else {
      Object.defineProperty(clone, key, {
        value: value,
        writable: true,
        configurable: true
      });
    }
  });
  return clone;
}
function each(value, cb) {
  if (Array.isArray(value)) {
    for (var i = 0; i < value.length; i++) { cb(i, value[i], value); }
  } else {
    ownKeys(value).forEach(function (key) { return cb(key, value[key], value); });
  }
}
function isEnumerable(base, prop) {
  var desc = Object.getOwnPropertyDescriptor(base, prop);
  return !!desc && desc.enumerable;
}
function has(thing, prop) {
  return Object.prototype.hasOwnProperty.call(thing, prop);
}
function is(x, y) {
  // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

/** Each scope represents a `produce` call. */

var ImmerScope = function ImmerScope(parent) {
  this.drafts = [];
  this.parent = parent; // Whenever the modified draft contains a draft from another scope, we
  // need to prevent auto-freezing so the unowned draft can be finalized.

  this.canAutoFreeze = true; // To avoid prototype lookups:

  this.patches = null;
};

ImmerScope.prototype.usePatches = function usePatches (patchListener) {
  if (patchListener) {
    this.patches = [];
    this.inversePatches = [];
    this.patchListener = patchListener;
  }
};

ImmerScope.prototype.revoke = function revoke$1 () {
  this.leave();
  this.drafts.forEach(revoke);
  this.drafts = null; // Make draft-related methods throw.
};

ImmerScope.prototype.leave = function leave () {
  if (this === ImmerScope.current) {
    ImmerScope.current = this.parent;
  }
};
ImmerScope.current = null;

ImmerScope.enter = function () {
  return this.current = new ImmerScope(this.current);
};

function revoke(draft) {
  draft[DRAFT_STATE].revoke();
}

// but share them all instead

var descriptors = {};
function willFinalize(scope, result, isReplaced) {
  scope.drafts.forEach(function (draft) {
    draft[DRAFT_STATE].finalizing = true;
  });

  if (!isReplaced) {
    if (scope.patches) {
      markChangesRecursively(scope.drafts[0]);
    } // This is faster when we don't care about which attributes changed.


    markChangesSweep(scope.drafts);
  } // When a child draft is returned, look for changes.
  else if (isDraft(result) && result[DRAFT_STATE].scope === scope) {
      markChangesSweep(scope.drafts);
    }
}
function createProxy(base, parent) {
  var isArray = Array.isArray(base);
  var draft = clonePotentialDraft(base);
  each(draft, function (prop) {
    proxyProperty(draft, prop, isArray || isEnumerable(base, prop));
  }); // See "proxy.js" for property documentation.

  var scope = parent ? parent.scope : ImmerScope.current;
  var state = {
    scope: scope,
    modified: false,
    finalizing: false,
    // es5 only
    finalized: false,
    assigned: {},
    parent: parent,
    base: base,
    draft: draft,
    copy: null,
    revoke: revoke$1,
    revoked: false // es5 only

  };
  createHiddenProperty(draft, DRAFT_STATE, state);
  scope.drafts.push(draft);
  return draft;
}

function revoke$1() {
  this.revoked = true;
}

function source(state) {
  return state.copy || state.base;
} // Access a property without creating an Immer draft.


function peek(draft, prop) {
  var state = draft[DRAFT_STATE];

  if (state && !state.finalizing) {
    state.finalizing = true;
    var value = draft[prop];
    state.finalizing = false;
    return value;
  }

  return draft[prop];
}

function get(state, prop) {
  assertUnrevoked(state);
  var value = peek(source(state), prop);
  if (state.finalizing) { return value; } // Create a draft if the value is unmodified.

  if (value === peek(state.base, prop) && isDraftable(value)) {
    prepareCopy(state);
    return state.copy[prop] = createProxy(value, state);
  }

  return value;
}

function set(state, prop, value) {
  assertUnrevoked(state);
  state.assigned[prop] = true;

  if (!state.modified) {
    if (is(value, peek(source(state), prop))) { return; }
    markChanged(state);
    prepareCopy(state);
  }

  state.copy[prop] = value;
}

function markChanged(state) {
  if (!state.modified) {
    state.modified = true;
    if (state.parent) { markChanged(state.parent); }
  }
}

function prepareCopy(state) {
  if (!state.copy) { state.copy = clonePotentialDraft(state.base); }
}

function clonePotentialDraft(base) {
  var state = base && base[DRAFT_STATE];

  if (state) {
    state.finalizing = true;
    var draft = shallowCopy(state.draft, true);
    state.finalizing = false;
    return draft;
  }

  return shallowCopy(base);
}

function proxyProperty(draft, prop, enumerable) {
  var desc = descriptors[prop];

  if (desc) {
    desc.enumerable = enumerable;
  } else {
    descriptors[prop] = desc = {
      configurable: true,
      enumerable: enumerable,

      get: function get$1() {
        return get(this[DRAFT_STATE], prop);
      },

      set: function set$1(value) {
        set(this[DRAFT_STATE], prop, value);
      }

    };
  }

  Object.defineProperty(draft, prop, desc);
}

function assertUnrevoked(state) {
  if (state.revoked === true) { throw new Error("Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + JSON.stringify(source(state))); }
} // This looks expensive, but only proxies are visited, and only objects without known changes are scanned.


function markChangesSweep(drafts) {
  // The natural order of drafts in the `scope` array is based on when they
  // were accessed. By processing drafts in reverse natural order, we have a
  // better chance of processing leaf nodes first. When a leaf node is known to
  // have changed, we can avoid any traversal of its ancestor nodes.
  for (var i = drafts.length - 1; i >= 0; i--) {
    var state = drafts[i][DRAFT_STATE];

    if (!state.modified) {
      if (Array.isArray(state.base)) {
        if (hasArrayChanges(state)) { markChanged(state); }
      } else if (hasObjectChanges(state)) { markChanged(state); }
    }
  }
}

function markChangesRecursively(object) {
  if (!object || typeof object !== "object") { return; }
  var state = object[DRAFT_STATE];
  if (!state) { return; }
  var base = state.base;
  var draft = state.draft;
  var assigned = state.assigned;

  if (!Array.isArray(object)) {
    // Look for added keys.
    Object.keys(draft).forEach(function (key) {
      // The `undefined` check is a fast path for pre-existing keys.
      if (base[key] === undefined && !has(base, key)) {
        assigned[key] = true;
        markChanged(state);
      } else if (!assigned[key]) {
        // Only untouched properties trigger recursion.
        markChangesRecursively(draft[key]);
      }
    }); // Look for removed keys.

    Object.keys(base).forEach(function (key) {
      // The `undefined` check is a fast path for pre-existing keys.
      if (draft[key] === undefined && !has(draft, key)) {
        assigned[key] = false;
        markChanged(state);
      }
    });
  } else if (hasArrayChanges(state)) {
    markChanged(state);
    assigned.length = true;

    if (draft.length < base.length) {
      for (var i = draft.length; i < base.length; i++) { assigned[i] = false; }
    } else {
      for (var i$1 = base.length; i$1 < draft.length; i$1++) { assigned[i$1] = true; }
    }

    for (var i$2 = 0; i$2 < draft.length; i$2++) {
      // Only untouched indices trigger recursion.
      if (assigned[i$2] === undefined) { markChangesRecursively(draft[i$2]); }
    }
  }
}

function hasObjectChanges(state) {
  var base = state.base;
  var draft = state.draft; // Search for added keys and changed keys. Start at the back, because
  // non-numeric keys are ordered by time of definition on the object.

  var keys = Object.keys(draft);

  for (var i = keys.length - 1; i >= 0; i--) {
    var key = keys[i];
    var baseValue = base[key]; // The `undefined` check is a fast path for pre-existing keys.

    if (baseValue === undefined && !has(base, key)) {
      return true;
    } // Once a base key is deleted, future changes go undetected, because its
    // descriptor is erased. This branch detects any missed changes.
    else {
        var value = draft[key];
        var state$1 = value && value[DRAFT_STATE];

        if (state$1 ? state$1.base !== baseValue : !is(value, baseValue)) {
          return true;
        }
      }
  } // At this point, no keys were added or changed.
  // Compare key count to determine if keys were deleted.


  return keys.length !== Object.keys(base).length;
}

function hasArrayChanges(state) {
  var draft = state.draft;
  if (draft.length !== state.base.length) { return true; } // See #116
  // If we first shorten the length, our array interceptors will be removed.
  // If after that new items are added, result in the same original length,
  // those last items will have no intercepting property.
  // So if there is no own descriptor on the last position, we know that items were removed and added
  // N.B.: splice, unshift, etc only shift values around, but not prop descriptors, so we only have to check
  // the last one

  var descriptor = Object.getOwnPropertyDescriptor(draft, draft.length - 1); // descriptor can be null, but only for newly created sparse arrays, eg. new Array(10)

  if (descriptor && !descriptor.get) { return true; } // For all other cases, we don't have to compare, as they would have been picked up by the index setters

  return false;
}

function createHiddenProperty(target, prop, value) {
  Object.defineProperty(target, prop, {
    value: value,
    enumerable: false,
    writable: true
  });
}

var legacyProxy = /*#__PURE__*/Object.freeze({
	willFinalize: willFinalize,
	createProxy: createProxy
});

function willFinalize$1() {}
function createProxy$1(base, parent) {
  var scope = parent ? parent.scope : ImmerScope.current;
  var state = {
    // Track which produce call this is associated with.
    scope: scope,
    // True for both shallow and deep changes.
    modified: false,
    // Used during finalization.
    finalized: false,
    // Track which properties have been assigned (true) or deleted (false).
    assigned: {},
    // The parent draft state.
    parent: parent,
    // The base state.
    base: base,
    // The base proxy.
    draft: null,
    // Any property proxies.
    drafts: {},
    // The base copy with any updated values.
    copy: null,
    // Called by the `produce` function.
    revoke: null
  };
  var ref = Array.isArray(base) ? // [state] is used for arrays, to make sure the proxy is array-ish and not violate invariants,
  // although state itself is an object
  Proxy.revocable([state], arrayTraps) : Proxy.revocable(state, objectTraps);
  var revoke = ref.revoke;
  var proxy = ref.proxy;
  state.draft = proxy;
  state.revoke = revoke;
  scope.drafts.push(proxy);
  return proxy;
}
var objectTraps = {
  get: get$1,

  has: function has(target, prop) {
    return prop in source$1(target);
  },

  ownKeys: function ownKeys(target) {
    return Reflect.ownKeys(source$1(target));
  },

  set: set$1,
  deleteProperty: deleteProperty,
  getOwnPropertyDescriptor: getOwnPropertyDescriptor,

  defineProperty: function defineProperty() {
    throw new Error("Object.defineProperty() cannot be used on an Immer draft"); // prettier-ignore
  },

  getPrototypeOf: function getPrototypeOf(target) {
    return Object.getPrototypeOf(target.base);
  },

  setPrototypeOf: function setPrototypeOf() {
    throw new Error("Object.setPrototypeOf() cannot be used on an Immer draft"); // prettier-ignore
  }

};
var arrayTraps = {};
each(objectTraps, function (key, fn) {
  arrayTraps[key] = function () {
    arguments[0] = arguments[0][0];
    return fn.apply(this, arguments);
  };
});

arrayTraps.deleteProperty = function (state, prop) {
  if (isNaN(parseInt(prop))) {
    throw new Error("Immer only supports deleting array indices"); // prettier-ignore
  }

  return objectTraps.deleteProperty.call(this, state[0], prop);
};

arrayTraps.set = function (state, prop, value) {
  if (prop !== "length" && isNaN(parseInt(prop))) {
    throw new Error("Immer only supports setting array indices and the 'length' property"); // prettier-ignore
  }

  return objectTraps.set.call(this, state[0], prop, value);
}; // returns the object we should be reading the current value from, which is base, until some change has been made


function source$1(state) {
  return state.copy || state.base;
} // Access a property without creating an Immer draft.


function peek$1(draft, prop) {
  var state = draft[DRAFT_STATE];
  var desc = Reflect.getOwnPropertyDescriptor(state ? source$1(state) : draft, prop);
  return desc && desc.value;
}

function get$1(state, prop) {
  if (prop === DRAFT_STATE) { return state; }
  var drafts = state.drafts; // Check for existing draft in unmodified state.

  if (!state.modified && has(drafts, prop)) {
    return drafts[prop];
  }

  var value = source$1(state)[prop];

  if (state.finalized || !isDraftable(value)) {
    return value;
  } // Check for existing draft in modified state.


  if (state.modified) {
    // Assigned values are never drafted. This catches any drafts we created, too.
    if (value !== peek$1(state.base, prop)) { return value; } // Store drafts on the copy (when one exists).

    drafts = state.copy;
  }

  return drafts[prop] = createProxy$1(value, state);
}

function set$1(state, prop, value) {
  if (!state.modified) {
    var baseValue = peek$1(state.base, prop); // Optimize based on value's truthiness. Truthy values are guaranteed to
    // never be undefined, so we can avoid the `in` operator. Lastly, truthy
    // values may be drafts, but falsy values are never drafts.

    var isUnchanged = value ? is(baseValue, value) || value === state.drafts[prop] : is(baseValue, value) && prop in state.base;
    if (isUnchanged) { return true; }
    markChanged$1(state);
  }

  state.assigned[prop] = true;
  state.copy[prop] = value;
  return true;
}

function deleteProperty(state, prop) {
  // The `undefined` check is a fast path for pre-existing keys.
  if (peek$1(state.base, prop) !== undefined || prop in state.base) {
    state.assigned[prop] = false;
    markChanged$1(state);
  } else if (state.assigned[prop]) {
    // if an originally not assigned property was deleted
    delete state.assigned[prop];
  }

  if (state.copy) { delete state.copy[prop]; }
  return true;
} // Note: We never coerce `desc.value` into an Immer draft, because we can't make
// the same guarantee in ES5 mode.


function getOwnPropertyDescriptor(state, prop) {
  var owner = source$1(state);
  var desc = Reflect.getOwnPropertyDescriptor(owner, prop);

  if (desc) {
    desc.writable = true;
    desc.configurable = !Array.isArray(owner) || prop !== "length";
  }

  return desc;
}

function markChanged$1(state) {
  if (!state.modified) {
    state.modified = true;
    state.copy = assign(shallowCopy(state.base), state.drafts);
    state.drafts = null;
    if (state.parent) { markChanged$1(state.parent); }
  }
}

var modernProxy = /*#__PURE__*/Object.freeze({
	willFinalize: willFinalize$1,
	createProxy: createProxy$1
});

function generatePatches(state, basePath, patches, inversePatches) {
  Array.isArray(state.base) ? generateArrayPatches(state, basePath, patches, inversePatches) : generateObjectPatches(state, basePath, patches, inversePatches);
}

function generateArrayPatches(state, basePath, patches, inversePatches) {
  var assign, assign$1;

  var base = state.base;
  var copy = state.copy;
  var assigned = state.assigned; // Reduce complexity by ensuring `base` is never longer.

  if (copy.length < base.length) {
    (assign = [copy, base], base = assign[0], copy = assign[1]);
    (assign$1 = [inversePatches, patches], patches = assign$1[0], inversePatches = assign$1[1]);
  }

  var delta = copy.length - base.length; // Find the first replaced index.

  var start = 0;

  while (base[start] === copy[start] && start < base.length) {
    ++start;
  } // Find the last replaced index. Search from the end to optimize splice patches.


  var end = base.length;

  while (end > start && base[end - 1] === copy[end + delta - 1]) {
    --end;
  } // Process replaced indices.


  for (var i = start; i < end; ++i) {
    if (assigned[i] && copy[i] !== base[i]) {
      var path = basePath.concat([i]);
      patches.push({
        op: "replace",
        path: path,
        value: copy[i]
      });
      inversePatches.push({
        op: "replace",
        path: path,
        value: base[i]
      });
    }
  }

  var useRemove = end != base.length;
  var replaceCount = patches.length; // Process added indices.

  for (var i$1 = end + delta - 1; i$1 >= end; --i$1) {
    var path$1 = basePath.concat([i$1]);
    patches[replaceCount + i$1 - end] = {
      op: "add",
      path: path$1,
      value: copy[i$1]
    };

    if (useRemove) {
      inversePatches.push({
        op: "remove",
        path: path$1
      });
    }
  } // One "replace" patch reverses all non-splicing "add" patches.


  if (!useRemove) {
    inversePatches.push({
      op: "replace",
      path: basePath.concat(["length"]),
      value: base.length
    });
  }
}

function generateObjectPatches(state, basePath, patches, inversePatches) {
  var base = state.base;
  var copy = state.copy;
  each(state.assigned, function (key, assignedValue) {
    var origValue = base[key];
    var value = copy[key];
    var op = !assignedValue ? "remove" : key in base ? "replace" : "add";
    if (origValue === value && op === "replace") { return; }
    var path = basePath.concat(key);
    patches.push(op === "remove" ? {
      op: op,
      path: path
    } : {
      op: op,
      path: path,
      value: value
    });
    inversePatches.push(op === "add" ? {
      op: "remove",
      path: path
    } : op === "remove" ? {
      op: "add",
      path: path,
      value: origValue
    } : {
      op: "replace",
      path: path,
      value: origValue
    });
  });
}

function applyPatches(draft, patches) {
  // First, find a patch that replaces the entire state, if found, we don't have to apply earlier patches and modify the state
  for (var i = 0; i < patches.length; i++) {
    var patch = patches[i];
    var path = patch.path;
    if (!path.length) { throw new Error("Illegal state"); }
    var base = draft;

    for (var i$1 = 0; i$1 < path.length - 1; i$1++) {
      base = base[path[i$1]];
      if (!base || typeof base !== "object") { throw new Error("Cannot apply patch, path doesn't resolve: " + path.join("/")); } // prettier-ignore
    }

    var key = path[path.length - 1];

    switch (patch.op) {
      case "replace":
        base[key] = patch.value;
        break;

      case "add":
        if (Array.isArray(base)) {
          // TODO: support "foo/-" paths for appending to an array
          base.splice(key, 0, patch.value);
        } else {
          base[key] = patch.value;
        }

        break;

      case "remove":
        if (Array.isArray(base)) {
          base.splice(key, 1);
        } else {
          delete base[key];
        }

        break;

      default:
        throw new Error("Unsupported patch operation: " + patch.op);
    }
  }

  return draft;
}

function verifyMinified() {}

var configDefaults = {
  useProxies: typeof Proxy !== "undefined" && typeof Reflect !== "undefined",
  autoFreeze: typeof process !== "undefined" ? "development" !== "production" : verifyMinified.name === "verifyMinified",
  onAssign: null,
  onDelete: null,
  onCopy: null
};
var Immer = function Immer(config) {
  assign(this, configDefaults, config);
  this.setUseProxies(this.useProxies);
  this.produce = this.produce.bind(this);
};

Immer.prototype.produce = function produce (base, recipe, patchListener) {
    var this$1 = this;

  // curried invocation
  if (typeof base === "function" && typeof recipe !== "function") {
    var defaultBase = recipe;
    recipe = base;
    var self = this;
    return function curriedProduce(base) {
        var this$1 = this;
        if ( base === void 0 ) base = defaultBase;
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

      return self.produce(base, function (draft) { return recipe.call.apply(recipe, [ this$1, draft ].concat( args )); }); // prettier-ignore
    };
  } // prettier-ignore


  {
    if (typeof recipe !== "function") {
      throw new Error("The first or second argument to `produce` must be a function");
    }

    if (patchListener !== undefined && typeof patchListener !== "function") {
      throw new Error("The third argument to `produce` must be a function or undefined");
    }
  }
  var result; // Only plain objects, arrays, and "immerable classes" are drafted.

  if (isDraftable(base)) {
    var scope = ImmerScope.enter();
    var proxy = this.createProxy(base);
    var hasError = true;

    try {
      result = recipe(proxy);
      hasError = false;
    } finally {
      // finally instead of catch + rethrow better preserves original stack
      if (hasError) { scope.revoke(); }else { scope.leave(); }
    }

    if (result instanceof Promise) {
      return result.then(function (result) {
        scope.usePatches(patchListener);
        return this$1.processResult(result, scope);
      }, function (error) {
        scope.revoke();
        throw error;
      });
    }

    scope.usePatches(patchListener);
    return this.processResult(result, scope);
  } else {
    result = recipe(base);
    if (result === undefined) { return base; }
    return result !== NOTHING ? result : undefined;
  }
};

Immer.prototype.produceWithPatches = function produceWithPatches (arg1, arg2, arg3) {
    var this$1 = this;

  if (typeof arg1 === "function") {
    return function (state) {
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

        return this$1.produceWithPatches(state, function (draft) { return arg1.apply(void 0, [ draft ].concat( args )); });
      };
  } // non-curried form


  if (arg3) { throw new Error("A patch listener cannot be passed to produceWithPatches"); }
  var patches, inversePatches;
  var nextState = this.produce(arg1, arg2, function (p, ip) {
    patches = p;
    inversePatches = ip;
  });
  return [nextState, patches, inversePatches];
};

Immer.prototype.createDraft = function createDraft (base) {
  if (!isDraftable(base)) {
    throw new Error("First argument to `createDraft` must be a plain object, an array, or an immerable object"); // prettier-ignore
  }

  var scope = ImmerScope.enter();
  var proxy = this.createProxy(base);
  proxy[DRAFT_STATE].isManual = true;
  scope.leave();
  return proxy;
};

Immer.prototype.finishDraft = function finishDraft (draft, patchListener) {
  var state = draft && draft[DRAFT_STATE];

  if (!state || !state.isManual) {
    throw new Error("First argument to `finishDraft` must be a draft returned by `createDraft`"); // prettier-ignore
  }

  if (state.finalized) {
    throw new Error("The given draft is already finalized"); // prettier-ignore
  }

  var scope = state.scope;
  scope.usePatches(patchListener);
  return this.processResult(undefined, scope);
};

Immer.prototype.setAutoFreeze = function setAutoFreeze (value) {
  this.autoFreeze = value;
};

Immer.prototype.setUseProxies = function setUseProxies (value) {
  this.useProxies = value;
  assign(this, value ? modernProxy : legacyProxy);
};

Immer.prototype.applyPatches = function applyPatches$1 (base, patches) {
  // If a patch replaces the entire state, take that replacement as base
  // before applying patches
  var i;

  for (i = patches.length - 1; i >= 0; i--) {
    var patch = patches[i];

    if (patch.path.length === 0 && patch.op === "replace") {
      base = patch.value;
      break;
    }
  }

  if (isDraft(base)) {
    // N.B: never hits if some patch a replacement, patches are never drafts
    return applyPatches(base, patches);
  } // Otherwise, produce a copy of the base state.


  return this.produce(base, function (draft) { return applyPatches(draft, patches.slice(i + 1)); });
};
/** @internal */


Immer.prototype.processResult = function processResult (result, scope) {
  var baseDraft = scope.drafts[0];
  var isReplaced = result !== undefined && result !== baseDraft;
  this.willFinalize(scope, result, isReplaced);

  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified) {
      scope.revoke();
      throw new Error("An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft."); // prettier-ignore
    }

    if (isDraftable(result)) {
      // Finalize the result in case it contains (or is) a subset of the draft.
      result = this.finalize(result, null, scope);
    }

    if (scope.patches) {
      scope.patches.push({
        op: "replace",
        path: [],
        value: result
      });
      scope.inversePatches.push({
        op: "replace",
        path: [],
        value: baseDraft[DRAFT_STATE].base
      });
    }
  } else {
    // Finalize the base draft.
    result = this.finalize(baseDraft, [], scope);
  }

  scope.revoke();

  if (scope.patches) {
    scope.patchListener(scope.patches, scope.inversePatches);
  }

  return result !== NOTHING ? result : undefined;
};
/**
 * @internal
 * Finalize a draft, returning either the unmodified base state or a modified
 * copy of the base state.
 */


Immer.prototype.finalize = function finalize (draft, path, scope) {
    var this$1 = this;

  var state = draft[DRAFT_STATE];

  if (!state) {
    if (Object.isFrozen(draft)) { return draft; }
    return this.finalizeTree(draft, null, scope);
  } // Never finalize drafts owned by another scope.


  if (state.scope !== scope) {
    return draft;
  }

  if (!state.modified) {
    return state.base;
  }

  if (!state.finalized) {
    state.finalized = true;
    this.finalizeTree(state.draft, path, scope);

    if (this.onDelete) {
      // The `assigned` object is unreliable with ES5 drafts.
      if (this.useProxies) {
        var assigned = state.assigned;

        for (var prop in assigned) {
          if (!assigned[prop]) { this.onDelete(state, prop); }
        }
      } else {
        var base = state.base;
          var copy = state.copy;
        each(base, function (prop) {
          if (!has(copy, prop)) { this$1.onDelete(state, prop); }
        });
      }
    }

    if (this.onCopy) {
      this.onCopy(state);
    } // At this point, all descendants of `state.copy` have been finalized,
    // so we can be sure that `scope.canAutoFreeze` is accurate.


    if (this.autoFreeze && scope.canAutoFreeze) {
      Object.freeze(state.copy);
    }

    if (path && scope.patches) {
      generatePatches(state, path, scope.patches, scope.inversePatches);
    }
  }

  return state.copy;
};
/**
 * @internal
 * Finalize all drafts in the given state tree.
 */


Immer.prototype.finalizeTree = function finalizeTree (root, rootPath, scope) {
    var this$1 = this;

  var state = root[DRAFT_STATE];

  if (state) {
    if (!this.useProxies) {
      // Create the final copy, with added keys and without deleted keys.
      state.copy = shallowCopy(state.draft, true);
    }

    root = state.copy;
  }

  var needPatches = !!rootPath && !!scope.patches;

  var finalizeProperty = function (prop, value, parent) {
    if (value === parent) {
      throw Error("Immer forbids circular references");
    } // In the `finalizeTree` method, only the `root` object may be a draft.


    var isDraftProp = !!state && parent === root;

    if (isDraft(value)) {
      var path = isDraftProp && needPatches && !state.assigned[prop] ? rootPath.concat(prop) : null; // Drafts owned by `scope` are finalized here.

      value = this$1.finalize(value, path, scope); // Drafts from another scope must prevent auto-freezing.

      if (isDraft(value)) {
        scope.canAutoFreeze = false;
      } // Preserve non-enumerable properties.


      if (Array.isArray(parent) || isEnumerable(parent, prop)) {
        parent[prop] = value;
      } else {
        Object.defineProperty(parent, prop, {
          value: value
        });
      } // Unchanged drafts are never passed to the `onAssign` hook.


      if (isDraftProp && value === state.base[prop]) { return; }
    } // Unchanged draft properties are ignored.
    else if (isDraftProp && is(value, state.base[prop])) {
        return;
      } // Search new objects for unfinalized drafts. Frozen objects should never contain drafts.
      else if (isDraftable(value) && !Object.isFrozen(value)) {
          each(value, finalizeProperty);
        }

    if (isDraftProp && this$1.onAssign) {
      this$1.onAssign(state, prop, value);
    }
  };

  each(root, finalizeProperty);
  return root;
};

var immer = new Immer();
/**
 * The `produce` function takes a value and a "recipe function" (whose
 * return value often depends on the base state). The recipe function is
 * free to mutate its first argument however it wants. All mutations are
 * only ever applied to a __copy__ of the base state.
 *
 * Pass only a function to create a "curried producer" which relieves you
 * from passing the recipe function every time.
 *
 * Only plain objects and arrays are made mutable. All other objects are
 * considered uncopyable.
 *
 * Note: This function is __bound__ to its `Immer` instance.
 *
 * @param {any} base - the initial state
 * @param {Function} producer - function that receives a proxy of the base state as first argument and which can be freely modified
 * @param {Function} patchListener - optional function that will be called with all the patches produced here
 * @returns {any} a new state, or the initial state if nothing was modified
 */

var produce = immer.produce;
/**
 * Like `produce`, but `produceWithPatches` always returns a tuple
 * [nextState, patches, inversePatches] (instead of just the next state)
 */

var produceWithPatches = immer.produceWithPatches.bind(immer);
/**
 * Pass true to automatically freeze all copies created by Immer.
 *
 * By default, auto-freezing is disabled in production.
 */

var setAutoFreeze = immer.setAutoFreeze.bind(immer);
/**
 * Pass true to use the ES2015 `Proxy` class when creating drafts, which is
 * always faster than using ES5 proxies.
 *
 * By default, feature detection is used, so calling this is rarely necessary.
 */

var setUseProxies = immer.setUseProxies.bind(immer);
/**
 * Apply an array of Immer patches to the first argument.
 *
 * This function is a producer, which means copy-on-write is in effect.
 */

var applyPatches$1 = immer.applyPatches.bind(immer);
/**
 * Create an Immer draft from the given base state, which may be a draft itself.
 * The draft can be modified until you finalize it with the `finishDraft` function.
 */

var createDraft = immer.createDraft.bind(immer);
/**
 * Finalize an Immer draft from a `createDraft` call, returning the base state
 * (if no changes were made) or a modified copy. The draft must *not* be
 * mutated afterwards.
 *
 * Pass a function as the 2nd argument to generate Immer patches based on the
 * changes that were made.
 */

var finishDraft = immer.finishDraft.bind(immer);

/* harmony default export */ __webpack_exports__["default"] = (produce);

//# sourceMappingURL=immer.module.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

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

/***/ "./src/assets/big-play-button.svg":
/*!****************************************!*\
  !*** ./src/assets/big-play-button.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 66 66\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><defs><path d=\"M0 30.006C0 46.582 13.44 60 30 60c16.56 0 30-13.43 30-30.006S46.56 0 30 0C13.44 0 0 13.43 0 30.006z\" id=\"b\"></path><filter x=\"-6.2%\" y=\"-6.2%\" width=\"112.5%\" height=\"112.5%\" filterUnits=\"objectBoundingBox\" id=\"a\"><feMorphology radius=\".75\" operator=\"dilate\" in=\"SourceAlpha\" result=\"shadowSpreadOuter1\"></feMorphology><feOffset in=\"shadowSpreadOuter1\" result=\"shadowOffsetOuter1\"></feOffset><feGaussianBlur stdDeviation=\"1\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"></feGaussianBlur><feComposite in=\"shadowBlurOuter1\" in2=\"SourceAlpha\" operator=\"out\" result=\"shadowBlurOuter1\"></feComposite><feColorMatrix values=\"0 0 0 0 0.563190901 0 0 0 0 0.563190901 0 0 0 0 0.563190901 0 0 0 1 0\" in=\"shadowBlurOuter1\"></feColorMatrix></filter></defs><g fill=\"none\" fill-rule=\"evenodd\"><g transform=\"translate(3 3)\"><use fill=\"#000\" filter=\"url(#a)\" xlink:href=\"#b\"></use><use stroke=\"#FFF\" stroke-width=\"1.5\" fill-opacity=\".3\" fill=\"#FFF\" xlink:href=\"#b\"></use></g><path d=\"M29.257 20.7c-.215-.24-.526-.395-.872-.395-.25 0-.49.084-.682.215-.06.036-.108.084-.155.132-.287.287-.395.682-.323 1.052V44.32c-.072.37.036.765.323 1.052.454.454 1.195.454 1.65 0L44.18 33.855c.227-.227.347-.538.335-.85 0-.31-.108-.61-.335-.848L29.257 20.7z\" fill=\"#FFF\"></path></g></svg>"

/***/ }),

/***/ "./src/assets/enter-full-screen-button.svg":
/*!*************************************************!*\
  !*** ./src/assets/enter-full-screen-button.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.462 9.828l-4.277 4.277h3.412v1.825H.07V9.403h1.825v3.412l4.277-4.277 1.29 1.29zm1.94-7.933h3.413L8.537 6.172l1.29 1.29 4.278-4.277v3.412h1.825V.07H9.403v1.825z\" fill-rule=\"nonzero\"></path></svg>"

/***/ }),

/***/ "./src/assets/exit-full-screen-button.svg":
/*!************************************************!*\
  !*** ./src/assets/exit-full-screen-button.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M.07 14.64l4.278-4.278H.936V8.538h6.526v6.526H5.638v-3.412L1.36 15.93.07 14.64zm14.994-9.002h-3.412L15.93 1.36 14.64.07l-4.278 4.278V.936H8.537v6.527h6.527V5.638z\" fill-rule=\"nonzero\"></path></svg>"

/***/ }),

/***/ "./src/assets/pause-button.svg":
/*!*************************************!*\
  !*** ./src/assets/pause-button.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 13 18\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0h3v18H0V0zm10 0h3v18h-3V0z\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./src/assets/play-button.svg":
/*!************************************!*\
  !*** ./src/assets/play-button.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 18 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M.55 19.954c-.248.135-.55-.044-.55-.326V.368C0 .09.304-.09.55.05l16.848 9.474c.51.286.503 1.018-.01 1.296L.55 19.954z\" fill-rule=\"evenodd\"></path></svg>"

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
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/event */ "./src/utils/event.ts");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function mapStateToProps(state, props) {
    var plugins = state.plugins, emitter = state.emitter;
    return {
        plugins: plugins,
        emitter: emitter,
    };
}
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pluginName = "Container";
        _this.setRef = function (el) { return (_this.el = el); };
        return _this;
    }
    Container.prototype.componentDidMount = function () {
        this.props.emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_5__["InnerEventType"].InnerContainerMountedOrUnmounted, this.el);
    };
    Container.prototype.componentWillUnmount = function () {
        this.props.emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_5__["InnerEventType"].InnerContainerMountedOrUnmounted, null);
    };
    Container.prototype.render = function () {
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: styleContainer, ref: this.setRef }, Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["renderPlugins"])(this.pluginName, this.props.plugins)));
    };
    Container = __decorate([
        Object(unistore_preact__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)
    ], Container);
    return Container;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var styleContainer = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n  background-color: #000;\n  font-family: \"PingFang SC\", Arial, \"Microsoft YaHei\", sans-serif;\n  font-size: ", ";\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-overflow-scrolling: touch;\n  user-select: none;\n\n  * {\n    box-sizing: content-box;\n    margin: 0;\n  }\n"], ["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n  background-color: #000;\n  font-family: \"PingFang SC\", Arial, \"Microsoft YaHei\", sans-serif;\n  font-size: ", ";\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-overflow-scrolling: touch;\n  user-select: none;\n\n  * {\n    box-sizing: content-box;\n    margin: 0;\n  }\n"])), _utils_style__WEBPACK_IMPORTED_MODULE_4__["fontSizeDefault"]);
var templateObject_1;


/***/ }),

/***/ "./src/controls/big-play-button.tsx":
/*!******************************************!*\
  !*** ./src/controls/big-play-button.tsx ***!
  \******************************************/
/*! exports provided: BigPlayButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigPlayButton", function() { return BigPlayButton; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var _assets_big_play_button_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/big-play-button.svg */ "./src/assets/big-play-button.svg");
/* harmony import */ var _assets_big_play_button_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_big_play_button_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! unistore/preact */ "./node_modules/unistore/preact.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(unistore_preact__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/event */ "./src/utils/event.ts");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.tsx");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function mapStateToProps(state, props) {
    var options = state.options, emitter = state.emitter, videoState = state.properties;
    return {
        options: options,
        emitter: emitter,
        videoState: videoState,
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
        return !this.props.videoState.playing ? (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: stylePlayButton, onClick: this.play },
            _utils_render__WEBPACK_IMPORTED_MODULE_5__["imagePlaceHolder"],
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: stylePlayButtonIcon, dangerouslySetInnerHTML: { __html: _assets_big_play_button_svg__WEBPACK_IMPORTED_MODULE_2__ } }))) : null;
    };
    BigPlayButton = __decorate([
        Object(unistore_preact__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)
    ], BigPlayButton);
    return BigPlayButton;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var stylePlayButton = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 25%;\n  transform: translateY(-50%) translateX(-50%);\n  cursor: pointer;\n  opacity: 0.8;\n  transition: opacity 0.3s;\n\n  &:hover {\n    opacity: 1;\n  }\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 25%;\n  transform: translateY(-50%) translateX(-50%);\n  cursor: pointer;\n  opacity: 0.8;\n  transition: opacity 0.3s;\n\n  &:hover {\n    opacity: 1;\n  }\n"])));
var stylePlayButtonIcon = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  svg {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n"], ["\n  svg {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n"])));
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/controls/index.tsx":
/*!********************************!*\
  !*** ./src/controls/index.tsx ***!
  \********************************/
/*! exports provided: Controls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controls", function() { return Controls; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unistore/preact */ "./node_modules/unistore/preact.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(unistore_preact__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






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
            emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_5__["InnerEventType"].InnerToolBarShow);
        };
        return _this;
    }
    Controls.prototype.render = function () {
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: styleControls, onClick: this.onClick, onMouseMove: !_utils__WEBPACK_IMPORTED_MODULE_4__["IS_TOUCHABLE_DEVICE"] && this.onMouseMove }, Object(_utils_render__WEBPACK_IMPORTED_MODULE_3__["renderPlugins"])(this.pluginName, this.props.plugins)));
    };
    Controls.prototype.handleDoubleClick = function () {
        clearTimeout(this.timer);
        this.timer = null;
        var emitter = this.props.emitter;
        if (_utils__WEBPACK_IMPORTED_MODULE_4__["IS_TOUCHABLE_DEVICE"]) {
            emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_5__["InnerEventType"].InnerVideoToggle);
        }
        else {
            // TODO: fullscreen
        }
    };
    Controls.prototype.handleSingleClick = function () {
        var _this = this;
        this.timer = setTimeout(function () {
            var emitter = _this.props.emitter;
            if (_utils__WEBPACK_IMPORTED_MODULE_4__["IS_TOUCHABLE_DEVICE"]) {
                emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_5__["InnerEventType"].InnerToolBarToggle);
            }
            else {
                emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_5__["InnerEventType"].InnerVideoToggle);
            }
            _this.timer = null;
        }, 200);
    };
    Controls = __decorate([
        Object(unistore_preact__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)
    ], Controls);
    return Controls;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var styleControls = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n"], ["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n"])));
var templateObject_1;


/***/ }),

/***/ "./src/controls/tool-bar-current-time.tsx":
/*!************************************************!*\
  !*** ./src/controls/tool-bar-current-time.tsx ***!
  \************************************************/
/*! exports provided: ToolBarCurrentTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarCurrentTime", function() { return ToolBarCurrentTime; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unistore/preact */ "./node_modules/unistore/preact.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unistore_preact__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





function mapStateToProps(state, props) {
    var videoState = state.properties;
    return {
        videoState: videoState,
    };
}
var ToolBarCurrentTime = /** @class */ (function (_super) {
    __extends(ToolBarCurrentTime, _super);
    function ToolBarCurrentTime() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pluginName = "ToolBarCurrentTime";
        return _this;
    }
    ToolBarCurrentTime.prototype.render = function () {
        return Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["getToolBarTextTemplate"])(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["secondToMMSS"])(this.props.videoState.currentTime), styleCurrentTime);
    };
    ToolBarCurrentTime = __decorate([
        Object(unistore_preact__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)
    ], ToolBarCurrentTime);
    return ToolBarCurrentTime;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var styleCurrentTime = Object(emotion__WEBPACK_IMPORTED_MODULE_4__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding-right: 0;\n"], ["\n  padding-right: 0;\n"])));
var templateObject_1;


/***/ }),

/***/ "./src/controls/tool-bar-duration.tsx":
/*!********************************************!*\
  !*** ./src/controls/tool-bar-duration.tsx ***!
  \********************************************/
/*! exports provided: ToolBarDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarDuration", function() { return ToolBarDuration; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unistore/preact */ "./node_modules/unistore/preact.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unistore_preact__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





function mapStateToProps(state, props) {
    var videoState = state.properties;
    return {
        videoState: videoState,
    };
}
var ToolBarDuration = /** @class */ (function (_super) {
    __extends(ToolBarDuration, _super);
    function ToolBarDuration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pluginName = "ToolBarDuration";
        return _this;
    }
    ToolBarDuration.prototype.render = function () {
        return Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["getToolBarTextTemplate"])(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["secondToMMSS"])(this.props.videoState.duration), styleDuration);
    };
    ToolBarDuration = __decorate([
        Object(unistore_preact__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)
    ], ToolBarDuration);
    return ToolBarDuration;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var styleDuration = Object(emotion__WEBPACK_IMPORTED_MODULE_4__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding-left: 0;\n"], ["\n  padding-left: 0;\n"])));
var templateObject_1;


/***/ }),

/***/ "./src/controls/tool-bar-full-screen-button.tsx":
/*!******************************************************!*\
  !*** ./src/controls/tool-bar-full-screen-button.tsx ***!
  \******************************************************/
/*! exports provided: ToolBarFullScreenButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarFullScreenButton", function() { return ToolBarFullScreenButton; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_enter_full_screen_button_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/enter-full-screen-button.svg */ "./src/assets/enter-full-screen-button.svg");
/* harmony import */ var _assets_enter_full_screen_button_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_enter_full_screen_button_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_exit_full_screen_button_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/exit-full-screen-button.svg */ "./src/assets/exit-full-screen-button.svg");
/* harmony import */ var _assets_exit_full_screen_button_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_exit_full_screen_button_svg__WEBPACK_IMPORTED_MODULE_2__);
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
function mapStateToProps(state, props) {
    var emitter = state.emitter;
    return {
        emitter: emitter,
    };
}
var ToolBarFullScreenButton = /** @class */ (function (_super) {
    __extends(ToolBarFullScreenButton, _super);
    function ToolBarFullScreenButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pluginName = "ToolBarFullScreenButton";
        _this.prepareFullScreenApiByContainer = function (e) {
            var el = e.detail;
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
                    document.addEventListener(fullscreenchange, function (e) {
                        var currentFullScreenElement = document[fullscreenElement];
                        if (currentFullScreenElement === el) {
                            _this.setState({
                                isFullScreen: true,
                            });
                        }
                        else {
                            _this.setState({
                                isFullScreen: false,
                            });
                        }
                    });
                    _this.setState({
                        isFullScreenEnabled: true,
                    });
                    return "break";
                }
            };
            for (var _i = 0, fullScreenApiList_1 = fullScreenApiList; _i < fullScreenApiList_1.length; _i++) {
                var item = fullScreenApiList_1[_i];
                var state_1 = _loop_1(item);
                if (state_1 === "break")
                    break;
            }
        };
        _this.prepareFullScreenApiByPlayer = function (e) {
            if (_this.checkIsContainerFullScreenEnabled()) {
                return;
            }
            var el = e.detail;
            var _loop_2 = function (item) {
                var requestFullscreen = item[0];
                var exitFullscreen = item[1];
                var fullscreenElement = item[2];
                if (requestFullscreen in el) {
                    _this.enterFullScreen = function () {
                        el[requestFullscreen]();
                    };
                    _this.exitFullScreen = function () {
                        el[exitFullscreen]();
                    };
                    var fullScreenChanged = function (e) {
                        var currentFullScreenElement = el[fullscreenElement];
                        if (currentFullScreenElement === el) {
                            _this.setState({
                                isFullScreen: true,
                            });
                        }
                        else {
                            _this.setState({
                                isFullScreen: false,
                            });
                        }
                    };
                    el.addEventListener("webkitbeginfullscreen", fullScreenChanged);
                    el.addEventListener("webkitendfullscreen", fullScreenChanged);
                    _this.setState({
                        isFullScreenEnabled: true,
                    });
                    return "break";
                }
            };
            for (var _i = 0, fullScreenApiList_2 = fullScreenApiList; _i < fullScreenApiList_2.length; _i++) {
                var item = fullScreenApiList_2[_i];
                var state_2 = _loop_2(item);
                if (state_2 === "break")
                    break;
            }
        };
        _this.enter = function () {
            _this.enterFullScreen();
        };
        _this.exit = function () {
            _this.exitFullScreen();
        };
        return _this;
    }
    ToolBarFullScreenButton.prototype.componentWillMount = function () {
        this.props.emitter.on(_utils_event__WEBPACK_IMPORTED_MODULE_6__["InnerEventType"].InnerContainerMountedOrUnmounted, this.prepareFullScreenApiByContainer);
        this.props.emitter.on(_utils_event__WEBPACK_IMPORTED_MODULE_6__["InnerEventType"].InnerPlayerMountedOrUnmounted, this.prepareFullScreenApiByPlayer);
    };
    ToolBarFullScreenButton.prototype.componentWillUnmount = function () {
        this.props.emitter.off(_utils_event__WEBPACK_IMPORTED_MODULE_6__["InnerEventType"].InnerContainerMountedOrUnmounted, this.prepareFullScreenApiByContainer);
        this.props.emitter.off(_utils_event__WEBPACK_IMPORTED_MODULE_6__["InnerEventType"].InnerPlayerMountedOrUnmounted, this.prepareFullScreenApiByPlayer);
    };
    ToolBarFullScreenButton.prototype.render = function () {
        if (!this.state.isFullScreenEnabled) {
            return null;
        }
        var svg = !this.state.isFullScreen ? (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: _utils_style__WEBPACK_IMPORTED_MODULE_4__["styleToolbarButtonIcon"], dangerouslySetInnerHTML: { __html: _assets_enter_full_screen_button_svg__WEBPACK_IMPORTED_MODULE_1__ }, onClick: this.enter })) : (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: _utils_style__WEBPACK_IMPORTED_MODULE_4__["styleToolbarButtonIcon"], dangerouslySetInnerHTML: { __html: _assets_exit_full_screen_button_svg__WEBPACK_IMPORTED_MODULE_2__ }, onClick: this.exit }));
        return Object(_utils_render__WEBPACK_IMPORTED_MODULE_5__["getToolBarButtonTemplate"])(svg);
    };
    ToolBarFullScreenButton.prototype.checkIsContainerFullScreenEnabled = function () {
        var isEnabled = false;
        for (var _i = 0, fullScreenApiList_3 = fullScreenApiList; _i < fullScreenApiList_3.length; _i++) {
            var item = fullScreenApiList_3[_i];
            var fullscreenchange = item[4];
            if ("on" + fullscreenchange in document) {
                isEnabled = true;
                break;
            }
        }
        return isEnabled;
    };
    ToolBarFullScreenButton = __decorate([
        Object(unistore_preact__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)
    ], ToolBarFullScreenButton);
    return ToolBarFullScreenButton;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/controls/tool-bar-play-button.tsx":
/*!***********************************************!*\
  !*** ./src/controls/tool-bar-play-button.tsx ***!
  \***********************************************/
/*! exports provided: ToolBarPlayButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarPlayButton", function() { return ToolBarPlayButton; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_play_button_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/play-button.svg */ "./src/assets/play-button.svg");
/* harmony import */ var _assets_play_button_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_play_button_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_pause_button_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/pause-button.svg */ "./src/assets/pause-button.svg");
/* harmony import */ var _assets_pause_button_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_pause_button_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! unistore/preact */ "./node_modules/unistore/preact.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(unistore_preact__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/style */ "./src/utils/style.ts");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.tsx");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/event */ "./src/utils/event.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








function mapStateToProps(state, props) {
    var videoState = state.properties, emitter = state.emitter;
    return {
        videoState: videoState,
        emitter: emitter,
    };
}
var ToolBarPlayButton = /** @class */ (function (_super) {
    __extends(ToolBarPlayButton, _super);
    function ToolBarPlayButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pluginName = "ToolBarPlayButton";
        _this.play = function (e) {
            _this.props.emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_6__["InnerEventType"].InnerVideoPlay);
        };
        _this.pause = function (e) {
            _this.props.emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_6__["InnerEventType"].InnerVideoPause);
        };
        return _this;
    }
    ToolBarPlayButton.prototype.render = function () {
        var svg = this.props.videoState.playing ? (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: _utils_style__WEBPACK_IMPORTED_MODULE_4__["styleToolbarButtonIcon"], dangerouslySetInnerHTML: { __html: _assets_pause_button_svg__WEBPACK_IMPORTED_MODULE_2__ }, onClick: this.pause })) : (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: _utils_style__WEBPACK_IMPORTED_MODULE_4__["styleToolbarButtonIcon"], dangerouslySetInnerHTML: { __html: _assets_play_button_svg__WEBPACK_IMPORTED_MODULE_1__ }, onClick: this.play }));
        return !_utils__WEBPACK_IMPORTED_MODULE_7__["IS_TOUCHABLE_DEVICE"] ? Object(_utils_render__WEBPACK_IMPORTED_MODULE_5__["getToolBarButtonTemplate"])(svg) : null;
    };
    ToolBarPlayButton = __decorate([
        Object(unistore_preact__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)
    ], ToolBarPlayButton);
    return ToolBarPlayButton;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/controls/tool-bar-progress-bar.tsx":
/*!************************************************!*\
  !*** ./src/controls/tool-bar-progress-bar.tsx ***!
  \************************************************/
/*! exports provided: ToolBarProgressBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarProgressBar", function() { return ToolBarProgressBar; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unistore/preact */ "./node_modules/unistore/preact.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(unistore_preact__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/* harmony import */ var _utils_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/style */ "./src/utils/style.ts");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/event */ "./src/utils/event.ts");
/* harmony import */ var _utils_video__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/video */ "./src/utils/video.ts");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var actions = {
    setCurrentTime: _utils_video__WEBPACK_IMPORTED_MODULE_6__["setCurrentTime"],
};
function mapStateToProps(state, props) {
    var videoState = state.properties, emitter = state.emitter;
    return {
        videoState: videoState,
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
        _this.setCursorRef = function (el) { return (_this.cursorEl = el); };
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
            if (e.target === _this.sliderEl || e.target === _this.cursorEl) {
                _this.mouseDown = true;
                _this.setCurrentTimeBasedOnPoint(e.x);
                window.addEventListener("mousemove", _this.onMouseMove);
                window.addEventListener("mouseup", _this.onMouseUp);
            }
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
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: styleProgressBar }, !this.state.isProgressBarHidden && (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: styleProgressBarContent, onTouchStart: _utils__WEBPACK_IMPORTED_MODULE_3__["IS_TOUCHABLE_DEVICE"] && this.onTouchStart, onTouchMove: _utils__WEBPACK_IMPORTED_MODULE_3__["IS_TOUCHABLE_DEVICE"] && this.onTouchMove, onTouchEnd: _utils__WEBPACK_IMPORTED_MODULE_3__["IS_TOUCHABLE_DEVICE"] && this.onTouchEnd, onMouseDown: !_utils__WEBPACK_IMPORTED_MODULE_3__["IS_TOUCHABLE_DEVICE"] && this.onMouseDown },
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: styleProgressBarBackground, ref: this.setSliderRef },
                this.getBufferedComponent(),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: styleProgressBarFill, style: { width: this.getCursorLeft() + "%" } }),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: styleProgressBarCursor, style: { left: this.getCursorLeft() + "%" }, ref: this.setCursorRef }))))));
    };
    ToolBarProgressBar.prototype.getBufferedComponent = function () {
        var _a = this.props.videoState, buffered = _a.buffered, duration = _a.duration;
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
        var _a = this.props.videoState, currentTime = _a.currentTime, duration = _a.duration;
        var percent = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parsePercent"])((currentTime / duration) * 100);
        return percent;
    };
    ToolBarProgressBar.prototype.setCurrentTimeBasedOnPoint = function (x) {
        var _a = this.props, videoState = _a.videoState, emitter = _a.emitter, setCurrentTime = _a.setCurrentTime;
        var duration = videoState.duration;
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
        var _a = this.props, emitter = _a.emitter, videoState = _a.videoState;
        this.rectCache = null;
        emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_5__["InnerEventType"].InnerVideoSetCurrentTime, videoState.currentTime);
        emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_5__["InnerEventType"].InnerSeeked);
    };
    ToolBarProgressBar = __decorate([
        Object(unistore_preact__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, actions)
    ], ToolBarProgressBar);
    return ToolBarProgressBar;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var styleProgressBar = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex-grow: 1;\n  padding: 0 13px;\n"], ["\n  flex-grow: 1;\n  padding: 0 13px;\n"])));
var styleProgressBarContent = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  height: 100%;\n"], ["\n  position: relative;\n  height: 100%;\n"])));
var styleProgressBarBackground = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  height: 8%;\n  max-height: 10px;\n  background-color: rgba(200, 200, 200, 0.5);\n  cursor: pointer;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  transform: translateY(-50%);\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  height: 8%;\n  max-height: 10px;\n  background-color: rgba(200, 200, 200, 0.5);\n  cursor: pointer;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  transform: translateY(-50%);\n"])));
var styleProgressBarBuffered = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.5);\n  pointer-events: none;\n"], ["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.5);\n  pointer-events: none;\n"])));
var styleProgressBarFill = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 0;\n  background-color: ", ";\n  pointer-events: none;\n"], ["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 0;\n  background-color: ", ";\n  pointer-events: none;\n"])), _utils_style__WEBPACK_IMPORTED_MODULE_4__["colorPrimary"]);
var styleProgressBarCursor = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background-color: rgb(255, 255, 255);\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  cursor: pointer;\n"], ["\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background-color: rgb(255, 255, 255);\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  cursor: pointer;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/controls/tool-bar-top-progress-bar.tsx":
/*!****************************************************!*\
  !*** ./src/controls/tool-bar-top-progress-bar.tsx ***!
  \****************************************************/
/*! exports provided: ToolBarTopProgressBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarTopProgressBar", function() { return ToolBarTopProgressBar; });
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function mapStateToProps(state, props) {
    var videoState = state.properties, emitter = state.emitter;
    return {
        videoState: videoState,
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
        var _a = this.props.videoState, currentTime = _a.currentTime, duration = _a.duration;
        var percent = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parsePercent"])((currentTime / duration) * 100);
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])(styleProgressBar, this.state.isShown && "shown") },
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: styleProgressBarFill, style: { width: percent + "%" } })));
    };
    ToolBarTopProgressBar = __decorate([
        Object(unistore_preact__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)
    ], ToolBarTopProgressBar);
    return ToolBarTopProgressBar;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var styleProgressBar = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 8%;\n  max-height: 10px;\n  background-color: rgba(200, 200, 200, 0.5);\n  transform: translateY(-100%);\n  opacity: 0;\n  transition: none;\n\n  &.shown {\n    transition: opacity 0.2s 0.35s;\n    opacity: 1;\n  }\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 8%;\n  max-height: 10px;\n  background-color: rgba(200, 200, 200, 0.5);\n  transform: translateY(-100%);\n  opacity: 0;\n  transition: none;\n\n  &.shown {\n    transition: opacity 0.2s 0.35s;\n    opacity: 1;\n  }\n"])));
var styleProgressBarFill = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 0;\n  background-color: ", ";\n"], ["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 0;\n  background-color: ", ";\n"])), _utils_style__WEBPACK_IMPORTED_MODULE_4__["colorPrimary"]);
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/controls/tool-bar.tsx":
/*!***********************************!*\
  !*** ./src/controls/tool-bar.tsx ***!
  \***********************************/
/*! exports provided: ToolBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBar", function() { return ToolBar; });
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])(styleToolBar, this.state.isShown !== true && styleToolbarHidden), onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave, onClick: this.onClick }, Object(_utils_render__WEBPACK_IMPORTED_MODULE_3__["renderPlugins"])(this.pluginName, plugins)));
    };
    ToolBar = __decorate([
        Object(unistore_preact__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)
    ], ToolBar);
    return ToolBar;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var styleToolBar = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 11%;\n  max-height: 48px;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  transition: transform 0.5s;\n  transform: translateY(0);\n"], ["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 11%;\n  max-height: 48px;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  transition: transform 0.5s;\n  transform: translateY(0);\n"])));
var styleToolbarHidden = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  transform: translateY(100%);\n"], ["\n  transform: translateY(100%);\n"])));
var templateObject_1, templateObject_2;


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
/* harmony import */ var _utils_build_in_plugin_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/build-in-plugin-list */ "./src/utils/build-in-plugin-list.ts");






function checkPluginExistence(plugin, plugins) {
    var existed = false;
    for (var _i = 0, plugins_1 = plugins; _i < plugins_1.length; _i++) {
        var oldPlugin = plugins_1[_i];
        if (oldPlugin.entry === plugin.entry && oldPlugin.module === plugin.module) {
            existed = true;
            break;
        }
    }
    return existed;
}
var JuicyPlayer = /** @class */ (function () {
    function JuicyPlayer(options) {
        this.containerPositionCache = "";
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["initOptions"])(options);
        this.store = Object(unistore__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["initState"])(options, JuicyPlayer.plugins));
        this.render();
    }
    JuicyPlayer.use = function (plugin) {
        if (!checkPluginExistence(plugin, this.plugins)) {
            this.plugins.push(plugin);
        }
    };
    JuicyPlayer.prototype.use = function (plugin) {
        var plugins = this.store.getState().plugins;
        if (!checkPluginExistence(plugin, plugins)) {
            this.store.setState({
                plugins: plugins.concat([plugin]),
            });
        }
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
    JuicyPlayer.plugins = _utils_build_in_plugin_list__WEBPACK_IMPORTED_MODULE_5__["buildInPluginList"];
    return JuicyPlayer;
}());
/* harmony default export */ __webpack_exports__["default"] = (JuicyPlayer);


/***/ }),

/***/ "./src/player/html-player.tsx":
/*!************************************!*\
  !*** ./src/player/html-player.tsx ***!
  \************************************/
/*! exports provided: HTMLPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLPlayer", function() { return HTMLPlayer; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unistore/preact */ "./node_modules/unistore/preact.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unistore_preact__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/video */ "./src/utils/video.ts");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
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





var actions = {
    setPlayState: _utils_video__WEBPACK_IMPORTED_MODULE_2__["setPlayState"],
    setDuration: _utils_video__WEBPACK_IMPORTED_MODULE_2__["setDuration"],
    setCurrentTime: _utils_video__WEBPACK_IMPORTED_MODULE_2__["setCurrentTime"],
    setBuffered: _utils_video__WEBPACK_IMPORTED_MODULE_2__["setBuffered"],
};
function mapStateToProps(state, props) {
    var options = state.options, videoState = state.properties, emitter = state.emitter;
    return {
        options: options,
        videoState: videoState,
        emitter: emitter,
    };
}
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pluginName = "HTMLPlayer";
        _this.createRef = function (el) {
            _this.el = el;
            _this.bindEvents(el);
        };
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
                        _this.setCurrentTime();
                    }
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
            if (_this.props.videoState.playing) {
                _this.pause();
            }
            else {
                _this.play();
            }
        };
        _this.setNativeElementTime = function (e) {
            if (_this.el) {
                _this.el.currentTime = e.detail;
                _this.props.setCurrentTime(e.detail);
            }
        };
        _this.handleSeeking = function () {
            _this.seeking = true;
        };
        _this.handleSeeked = function () {
            _this.seeking = false;
        };
        return _this;
    }
    Player.prototype.componentWillMount = function () {
        var emitter = this.props.emitter;
        emitter.on(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerVideoPlay, this.play);
        emitter.on(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerVideoPause, this.pause);
        emitter.on(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerVideoToggle, this.toggle);
        emitter.on(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerVideoSetCurrentTime, this.setNativeElementTime);
        emitter.on(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerSeeking, this.handleSeeking);
        emitter.on(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerSeeked, this.handleSeeked);
    };
    Player.prototype.componentDidMount = function () {
        var emitter = this.props.emitter;
        emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerProgressBarShow);
        emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerPlayerMountedOrUnmounted, this.el);
    };
    Player.prototype.componentWillUnmount = function () {
        if (this.el) {
            this.unbindEvents(this.el);
        }
        var emitter = this.props.emitter;
        emitter.off(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerVideoPlay, this.play);
        emitter.off(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerVideoPause, this.pause);
        emitter.off(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerVideoToggle, this.toggle);
        emitter.off(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerVideoSetCurrentTime, this.setNativeElementTime);
        emitter.off(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerSeeking, this.handleSeeking);
        emitter.off(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerSeeked, this.handleSeeked);
        emitter.emit(_utils_event__WEBPACK_IMPORTED_MODULE_4__["InnerEventType"].InnerPlayerMountedOrUnmounted, null);
    };
    Player.prototype.render = function () {
        var _a = this.props.options, playsinline = _a.playsinline, autoplay = _a.autoplay, preload = _a.preload, loop = _a.loop, muted = _a.muted;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("video", { className: styleVideo, ref: this.createRef, src: this.getSrc(), autoPlay: autoplay, preload: preload, loop: loop, muted: muted, "webkit-playsinline": playsinline, playsInline: playsinline }));
    };
    Player.prototype.bindEvents = function (el) {
        for (var key in _utils_event__WEBPACK_IMPORTED_MODULE_4__["NativeEvent"]) {
            el.addEventListener(_utils_event__WEBPACK_IMPORTED_MODULE_4__["NativeEvent"][key], this.handleEvent);
        }
    };
    Player.prototype.unbindEvents = function (el) {
        for (var key in _utils_event__WEBPACK_IMPORTED_MODULE_4__["NativeEvent"]) {
            el.removeEventListener(_utils_event__WEBPACK_IMPORTED_MODULE_4__["NativeEvent"][key], this.handleEvent);
        }
    };
    Player.prototype.getSrc = function () {
        var _a = this.props, options = _a.options, videoState = _a.videoState;
        var currentQuality = options.playList[videoState.currentListIndex][videoState.currentQualityIndex];
        return "src" in currentQuality ? currentQuality.src : URL.createObjectURL(currentQuality);
    };
    Player.prototype.setCurrentTime = function () {
        this.props.setCurrentTime(this.el.currentTime);
    };
    return Player;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));
var playerWrapper = Object(unistore_preact__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, actions)(Player);
playerWrapper.__proto__.canPlay = function (source) {
    if ("src" in source) {
        if (document.createElement("video").canPlayType(source.mimetype)) {
            return true;
        }
    }
    else if (source instanceof MediaSource) {
        return true;
    }
    return false;
};
var HTMLPlayer = playerWrapper;
var styleVideo = Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n"])));
var templateObject_1;


/***/ }),

/***/ "./src/player/index.tsx":
/*!******************************!*\
  !*** ./src/player/index.tsx ***!
  \******************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unistore/preact */ "./node_modules/unistore/preact.js");
/* harmony import */ var unistore_preact__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unistore_preact__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.tsx");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



function mapStateToProps(state, props) {
    var options = state.options, videoState = state.properties, emitter = state.emitter, plugins = state.plugins;
    return {
        options: options,
        videoState: videoState,
        emitter: emitter,
        plugins: plugins,
    };
}
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pluginName = "Player";
        return _this;
    }
    Player.prototype.componentWillMount = function () {
        // TODO: init video state when sourceChange event received
    };
    Player.prototype.render = function () {
        return this.getPlayer();
    };
    Player.prototype.getPlayer = function () {
        var _a = this.props, options = _a.options, videoState = _a.videoState, emitter = _a.emitter;
        var playList = options.playList;
        if (!playList) {
            return null;
        }
        var currentList = playList[videoState.currentListIndex];
        if (!currentList) {
            return null;
        }
        var currentQuality = currentList[videoState.currentQualityIndex];
        if (!currentQuality) {
            return null;
        }
        var playerPlugins = Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["getPlugins"])(this.pluginName, this.props.plugins);
        for (var _i = 0, playerPlugins_1 = playerPlugins; _i < playerPlugins_1.length; _i++) {
            var player = playerPlugins_1[_i];
            if (player.module && player.module.canPlay(currentQuality)) {
                return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(player.module, null);
            }
        }
        console.error("can not play video: ", currentQuality);
        return null;
    };
    Player = __decorate([
        Object(unistore_preact__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)
    ], Player);
    return Player;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/utils/build-in-plugin-list.ts":
/*!*******************************************!*\
  !*** ./src/utils/build-in-plugin-list.ts ***!
  \*******************************************/
/*! exports provided: buildInPluginList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildInPluginList", function() { return buildInPluginList; });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../player */ "./src/player/index.tsx");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controls */ "./src/controls/index.tsx");
/* harmony import */ var _player_html_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player/html-player */ "./src/player/html-player.tsx");
/* harmony import */ var _controls_big_play_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controls/big-play-button */ "./src/controls/big-play-button.tsx");
/* harmony import */ var _controls_tool_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controls/tool-bar */ "./src/controls/tool-bar.tsx");
/* harmony import */ var _controls_tool_bar_play_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controls/tool-bar-play-button */ "./src/controls/tool-bar-play-button.tsx");
/* harmony import */ var _controls_tool_bar_top_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../controls/tool-bar-top-progress-bar */ "./src/controls/tool-bar-top-progress-bar.tsx");
/* harmony import */ var _controls_tool_bar_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../controls/tool-bar-progress-bar */ "./src/controls/tool-bar-progress-bar.tsx");
/* harmony import */ var _controls_tool_bar_duration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../controls/tool-bar-duration */ "./src/controls/tool-bar-duration.tsx");
/* harmony import */ var _controls_tool_bar_current_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../controls/tool-bar-current-time */ "./src/controls/tool-bar-current-time.tsx");
/* harmony import */ var _controls_tool_bar_full_screen_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../controls/tool-bar-full-screen-button */ "./src/controls/tool-bar-full-screen-button.tsx");











var buildInPluginList = [
    {
        entry: "Container",
        module: _player__WEBPACK_IMPORTED_MODULE_0__["Player"],
    },
    {
        entry: "Container",
        module: _controls__WEBPACK_IMPORTED_MODULE_1__["Controls"],
    },
    {
        entry: "Player",
        module: _player_html_player__WEBPACK_IMPORTED_MODULE_2__["HTMLPlayer"],
    },
    {
        entry: "Controls",
        module: _controls_big_play_button__WEBPACK_IMPORTED_MODULE_3__["BigPlayButton"],
    },
    {
        entry: "Controls",
        module: _controls_tool_bar__WEBPACK_IMPORTED_MODULE_4__["ToolBar"],
    },
    {
        entry: "ToolBar",
        module: _controls_tool_bar_top_progress_bar__WEBPACK_IMPORTED_MODULE_6__["ToolBarTopProgressBar"],
    },
    {
        entry: "ToolBar",
        module: _controls_tool_bar_play_button__WEBPACK_IMPORTED_MODULE_5__["ToolBarPlayButton"],
    },
    {
        entry: "ToolBar",
        module: _controls_tool_bar_current_time__WEBPACK_IMPORTED_MODULE_9__["ToolBarCurrentTime"],
    },
    {
        entry: "ToolBar",
        module: _controls_tool_bar_progress_bar__WEBPACK_IMPORTED_MODULE_7__["ToolBarProgressBar"],
    },
    {
        entry: "ToolBar",
        module: _controls_tool_bar_duration__WEBPACK_IMPORTED_MODULE_8__["ToolBarDuration"],
    },
    {
        entry: "ToolBar",
        module: _controls_tool_bar_full_screen_button__WEBPACK_IMPORTED_MODULE_10__["ToolBarFullScreenButton"],
    },
];


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
    NativeEvent["Ready"] = "ready";
    NativeEvent["Abort"] = "abort";
    NativeEvent["Canplay"] = "canplay";
    NativeEvent["Canplaythrough"] = "canplaythrough";
    NativeEvent["Durationchange"] = "durationchange";
    NativeEvent["Emptied"] = "emptied";
    NativeEvent["Encrypted"] = "encrypted";
    NativeEvent["Ended"] = "ended";
    NativeEvent["Interruptbegin"] = "interruptbegin";
    NativeEvent["Interruptend"] = "interruptend";
    NativeEvent["Loadeddata"] = "loadeddata";
    NativeEvent["Loadedmetadata"] = "loadedmetadata";
    NativeEvent["Loadstart"] = "loadstart";
    NativeEvent["Mozaudioavailable"] = "mozaudioavailable";
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
    CustomEventType["RetryPlay"] = "retryplay";
    CustomEventType["Error"] = "error";
})(CustomEventType || (CustomEventType = {}));
var InnerEventType;
(function (InnerEventType) {
    InnerEventType["InnerVideoPlay"] = "inner.videoPlay";
    InnerEventType["InnerVideoPause"] = "inner.videoPause";
    InnerEventType["InnerVideoToggle"] = "inner.videoToggle";
    InnerEventType["InnerVideoSetCurrentTime"] = "inner.videoSetCurrentTime";
    InnerEventType["InnerProgressBarHide"] = "inner.progressBarHide";
    InnerEventType["InnerProgressBarShow"] = "inner.progressBarShow";
    InnerEventType["InnerToolBarHide"] = "inner.toolBarHide";
    InnerEventType["InnerToolBarShow"] = "inner.toolBarShow";
    InnerEventType["InnerToolBarToggle"] = "inner.toolBarToggle";
    InnerEventType["InnerToolBarHidden"] = "inner.toolBarHidden";
    InnerEventType["InnerToolBarShown"] = "inner.toolBarShown";
    InnerEventType["InnerSeeking"] = "inner.seeking";
    InnerEventType["InnerSeeked"] = "inner.seeked";
    InnerEventType["InnerPlayerMountedOrUnmounted"] = "inner.playerMountedOrUnmounted";
    InnerEventType["InnerContainerMountedOrUnmounted"] = "inner.containerMountedOrUnmounted";
})(InnerEventType || (InnerEventType = {}));
var PlayerEvent = /** @class */ (function () {
    function PlayerEvent(type, detail) {
        this.type = type;
        this.detail = detail;
    }
    return PlayerEvent;
}());



/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: canPlayTypeByFlash, IS_IOS, IS_SUPPORT_MSE, IS_SUPPORT_FLASH, IS_TOUCHABLE_DEVICE, initOptions, initState, parsePercent, secondToMMSS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canPlayTypeByFlash", function() { return canPlayTypeByFlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_IOS", function() { return IS_IOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_SUPPORT_MSE", function() { return IS_SUPPORT_MSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_SUPPORT_FLASH", function() { return IS_SUPPORT_FLASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_TOUCHABLE_DEVICE", function() { return IS_TOUCHABLE_DEVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initOptions", function() { return initOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePercent", function() { return parsePercent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secondToMMSS", function() { return secondToMMSS; });
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emitter */ "./src/utils/emitter.ts");

var canPlayFormat = {
    "video/flv": "FLV",
    "video/x-flv": "FLV",
    "video/flash": "FLV",
};
var canPlayRtmpFormat = {
    "rtmp/mp4": "MP4",
    "rtmp/flv": "FLV",
};
function canPlayTypeByFlash(type) {
    if (type in Object.assign(canPlayFormat, canPlayRtmpFormat)) {
        return "maybe";
    }
    return "";
}
var IS_IOS = /iPhone|iPad/i.test(navigator.userAgent);
var IS_SUPPORT_MSE = "MediaSource" in window;
var IS_SUPPORT_FLASH = flashVersion()[0] >= "10";
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
function flashVersion() {
    var version = "0,0,0";
    try {
        version = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            .GetVariable("$version")
            .replace(/\D+/g, ",")
            .match(/^,?(.+),?$/)[1];
    }
    catch (e) {
        try {
            if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) {
                version = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description
                    .replace(/\D+/g, ",")
                    .match(/^,?(.+),?$/)[1];
            }
        }
        catch (err) { }
    }
    return version.split(",");
}
function initOptions(opt) {
    if (!opt)
        throw new Error("option cannot be empty");
}
function initState(options, plugins) {
    return {
        options: options,
        properties: {
            playing: false,
            currentListIndex: 0,
            currentQualityIndex: 0,
            currentTime: 0,
            duration: 0,
            buffered: null,
        },
        emitter: new _emitter__WEBPACK_IMPORTED_MODULE_0__["Emitter"](),
        plugins: plugins,
    };
}
function parsePercent(percent) {
    if (percent > 100)
        percent = 100;
    if (percent < 0)
        percent = 0;
    return percent;
}
var secondToMMSS = function (seconds) {
    if (!seconds)
        return "00:00";
    var date = new Date(null);
    date.setSeconds(seconds); // specify value for SECONDS here
    return date
        .toISOString()
        .substr(11, 8)
        .replace(/^00:(.+:.+)$/, "$1");
};


/***/ }),

/***/ "./src/utils/render.tsx":
/*!******************************!*\
  !*** ./src/utils/render.tsx ***!
  \******************************/
/*! exports provided: mapPluginsToProps, renderPlugins, getPlugins, imagePlaceHolder, getToolBarButtonTemplate, getToolBarTextTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapPluginsToProps", function() { return mapPluginsToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderPlugins", function() { return renderPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlugins", function() { return getPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imagePlaceHolder", function() { return imagePlaceHolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToolBarButtonTemplate", function() { return getToolBarButtonTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToolBarTextTemplate", function() { return getToolBarTextTemplate; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.umd.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/utils/style.ts");
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
function renderPlugins(entry, plugins) {
    return plugins
        .filter(function (item) { return item.entry === entry; })
        .map(function (item) {
        return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(item.module, null);
    });
}
function getPlugins(entry, plugins) {
    return plugins.filter(function (item) { return item && item.entry === entry; });
}
var styleButtonContainer = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  height: 100%;\n"], ["\n  position: relative;\n  height: 100%;\n"])));
var styleButtonPlaceholder = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 100%;\n"], ["\n  height: 100%;\n"])));
var imagePlaceHolder = (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { className: styleButtonPlaceholder, src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" }));
function getToolBarButtonTemplate(content) {
    return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: styleButtonContainer },
        imagePlaceHolder,
        content));
}
var styleTextContainer = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 100%;\n  padding: 0 10px;\n  color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  height: 100%;\n  padding: 0 10px;\n  color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])), _style__WEBPACK_IMPORTED_MODULE_2__["colorDefault"]);
function getToolBarTextTemplate(content, className) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { className: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])(styleTextContainer, className) }, content);
}
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/utils/style.ts":
/*!****************************!*\
  !*** ./src/utils/style.ts ***!
  \****************************/
/*! exports provided: colorDefault, colorPrimary, fontSizeDefault, styleToolbarButtonIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorDefault", function() { return colorDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorPrimary", function() { return colorPrimary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSizeDefault", function() { return fontSizeDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleToolbarButtonIcon", function() { return styleToolbarButtonIcon; });
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/utils/index.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var colorDefault = "#fff";
var colorPrimary = "#00d7c6";
var fontSizeDefault = "14px";
var styleActive = Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &:active {\n    color: ", ";\n\n    svg {\n      fill: ", ";\n    }\n  }\n"], ["\n  &:active {\n    color: ", ";\n\n    svg {\n      fill: ", ";\n    }\n  }\n"])), colorPrimary, colorPrimary);
var styleHover = Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  &:hover {\n    color: ", ";\n\n    svg {\n      fill: ", ";\n    }\n  }\n"], ["\n  &:hover {\n    color: ", ";\n\n    svg {\n      fill: ", ";\n    }\n  }\n"])), colorPrimary, colorPrimary);
var styleToolbarButtonIcon = Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  cursor: pointer;\n\n  svg {\n    position: absolute;\n    fill: ", ";\n    transition: fill 0.5s;\n    left: 50%;\n    top: 50%;\n    width: 50%;\n    height: 50%;\n    transform: translateX(-50%) translateY(-50%);\n  }\n\n  ", ";\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  cursor: pointer;\n\n  svg {\n    position: absolute;\n    fill: ", ";\n    transition: fill 0.5s;\n    left: 50%;\n    top: 50%;\n    width: 50%;\n    height: 50%;\n    transform: translateX(-50%) translateY(-50%);\n  }\n\n  ", ";\n"])), colorDefault, ___WEBPACK_IMPORTED_MODULE_1__["IS_TOUCHABLE_DEVICE"] ? styleActive : styleHover);
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/utils/video.ts":
/*!****************************!*\
  !*** ./src/utils/video.ts ***!
  \****************************/
/*! exports provided: setPlayState, setCurrentTime, setDuration, setBuffered */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPlayState", function() { return setPlayState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentTime", function() { return setCurrentTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDuration", function() { return setDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBuffered", function() { return setBuffered; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");

function setPlayState(state, playing) {
    return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
        draft.properties.playing = playing;
    });
}
function setCurrentTime(state, time) {
    return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
        draft.properties.currentTime = time;
    });
}
function setDuration(state, duration) {
    return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
        draft.properties.duration = duration;
    });
}
function setBuffered(state, buffered) {
    return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
        draft.properties.buffered = buffered;
    });
}


/***/ })

/******/ })["default"];
});