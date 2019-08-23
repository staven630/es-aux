/**
 * @module Map操作
 */

/**
 *  Map转换成Object
 *
 * @param {Map} map - map对象
 * @returns {Object}
 */
export function mapToObj(map: any) {
  const obj = Object.create(null)
  for (const [k, v] of map) {
    obj[k] = v
  }
  return obj
}

/**
 *  Object转换成Map
 *
 * @param {Object} obj - map对象
 * @returns {Map}
 */
export function objToMap(obj: any) {
  const map = new Map()
  for (const k of Object.keys(obj)) {
    map.set(k, obj[k])
  }
  return map
}
