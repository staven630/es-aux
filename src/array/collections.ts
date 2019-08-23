/*eslint @typescript-eslint/no-explicit-any: "off" */

/**
 * 求数组并集
 *
 * @param {Array} a
 * @param {Array} b
 */
export function unionArr(a, b: T[]) {
  return [...new Set([...a, ...b])]
}

/**
 * 求数组交集
 *
 * @param {Array} a
 * @param {Array} b
 */
export function intersectArr(a: any[], b: any[]) {
  return [...new Set([...a].filter(x => b.includes(x)))]
}

/**
 * 求数组差集
 *
 * @param {Array} a
 * @param {Array} b
 */
export function differenceArr(a: any[], b: any[]) {
  return [...new Set([...a].filter(x => !b.includes(x)))]
}
