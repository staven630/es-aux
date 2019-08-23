/**
 * @module Map操作
 */
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
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
/**
 *  Map转换成Object
 *
 * @param {Map} map - map对象
 * @returns {Object}
 */
export function mapToObj(map) {
    var e_1, _a;
    var obj = Object.create(null);
    try {
        for (var map_1 = __values(map), map_1_1 = map_1.next(); !map_1_1.done; map_1_1 = map_1.next()) {
            var _b = __read(map_1_1.value, 2), k = _b[0], v = _b[1];
            obj[k] = v;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (map_1_1 && !map_1_1.done && (_a = map_1.return)) _a.call(map_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return obj;
}
/**
 *  Object转换成Map
 *
 * @param {Object} obj - map对象
 * @returns {Map}
 */
export function objToMap(obj) {
    var e_2, _a;
    var map = new Map();
    try {
        for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var k = _c.value;
            map.set(k, obj[k]);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return map;
}
