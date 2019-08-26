/** @module 数组-array */
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
/**
 * 求数组并集
 *
 * @param {Array} a
 * @param {Array} b
 */
export function unionArr(a, b) {
    return __spread(new Set(__spread(a, b)));
}
/**
 * 求数组交集
 *
 * @param {Array} a
 * @param {Array} b
 */
export function intersectArr(a, b) {
    return __spread(new Set(__spread(a).filter(function (x) { return b.includes(x); })));
}
/**
 * 求数组差集
 *
 * @param {Array} a
 * @param {Array} b
 */
export function differenceArr(a, b) {
    return __spread(new Set(__spread(a).filter(function (x) { return !b.includes(x); })));
}
