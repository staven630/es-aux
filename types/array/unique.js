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
/** @module 数组-array */
import { isArray } from '../is';
/**
 * 基本类型数组去重
 *
 * @param {Array} arr - 需要去重的数组
 */
export function uniqueArr(arr) {
    return __spread(new Set(arr));
}
/**
 * 对象数组单个键值匹配去重
 *
 * @param {Array} arr - 需要去重的数组
 * @param {String} key - 单个键值
 */
export function uniqueKeyInArr(arr, key) {
    var cache = {};
    return arr.reduceRight(function (item, next) {
        if (!cache[next[key]]) {
            cache[next[key]] = true;
            item.push(next);
        }
        return item;
    }, []);
}
/**
 * 对象数组完全匹配去重
 *
 * @param {Array} arr - 需要去重的数组
 */
export function uniqueObjInArr(arr) {
    if (!isArray(arr))
        return arr;
    return Array.from(new Set(arr.map(function (item) { return JSON.stringify(item); }))).map(function (v) { return JSON.parse(v); });
}
