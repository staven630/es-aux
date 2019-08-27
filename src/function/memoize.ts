/** @module 函数相关-function */
/**
 * 缓存函数调用结果
 *
 * @param {Function} fn - 函数
 */
export function memoize(fn: Function) {
  let cachedArg: any
  let cachedResult: any
  return (arg: any) => {
    if (cachedArg === arg) return cachedResult
    cachedArg = arg
    cachedResult = fn(arg)
    return cachedResult
  }
}
