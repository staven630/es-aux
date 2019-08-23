/**
 * 判断是否是数组
 *
 * @param {any} array - 需要判断的对象
 */
export function isArray(array) {
    return String.prototype.toString.call(array) == '[object Array]';
}