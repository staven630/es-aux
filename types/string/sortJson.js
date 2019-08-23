/*eslint @typescript-eslint/no-explicit-any: ["error", { "ignoreRestArgs": false }]*/
[].sort();
/**
 * 根据对象数组的某字段进项排序
 *
 * @param {any[]} array - 需要排序的数组，其中每一项是对象
 * @param {string} key - 排序的字段
 * @param {boolean} [flag=false] - 是否需要倒序， 默认false正序，true则为倒序
 * @returns {string} - 排序后的数组
 */
export function sortJSON(array, key, flag) {
    if (flag === void 0) { flag = false; }
    var sortBy = function (filed, flag, primer) {
        var flagIndex = flag ? -1 : 1;
        return function (a, b) {
            var a1 = +a[filed];
            var b1 = +b[filed];
            if (typeof primer != 'undefined') {
                a1 = primer("" + a1);
                b1 = primer("" + b1);
            }
            if (a1 < b1) {
                return flagIndex * -1;
            }
            if (a1 > b1) {
                return flagIndex * 1;
            }
            return 1;
        };
    };
    return array.sort(sortBy(key, flag, parseInt));
}