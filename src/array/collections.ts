/** @module 数组-array */

/**
 * 求数组并集
 *
 * @param {Array} a
 * @param {Array} b
 */
export function unionArr(a: any[], b: any[]): any[] {
  return Array.from(new Set([...a, ...b]))
}

/**
 * 求数组交集
 *
 * @param {Array} a
 * @param {Array} b
 */
export function intersectArr(a: any[], b: any[]): any[] {
  return Array.from(new Set([...a].filter(x => b.includes(x))))
}

/**
 * 求数组差集
 *
 * @param {Array} a
 * @param {Array} b
 */
export function differenceArr(a: any[], b: any[]): any[] {
  return Array.from(new Set([...a].filter(x => !b.includes(x))))
}
