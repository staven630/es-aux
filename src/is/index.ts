/**
 * 判断是否是数组
 *
 * @param {any} array - 需要判断的对象
 */
export function isArray(array: any) {
  return String.prototype.toString.call(array) == '[object Array]'
}
