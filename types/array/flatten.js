import { isArray } from '../is';
/**
 * 规整多重数组
 *
 * @param {Array} arr - 需要规整的数组
 */
export function flattenArr(arr) {
    if (!isArray(arr))
        return arr;
    return arr.reduce(function (done, curr) { return done.concat(flattenArr(curr)); }, []);
}
