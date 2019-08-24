/** @module 数组-array */
import {isArray} from '../is'

/**
 * 规整多重数组
 *
 * @param {Array} arr - 需要规整的数组
 */
export function flattenArr(arr: any[]): any[] {
  if (!isArray(arr)) return arr
  return arr.reduce((done, curr) => done.concat(flattenArr(curr)), [])
}
