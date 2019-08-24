/** @module 函数相关-function */
/**
 * 缓存函数调用结果
 *
 * @param {function} fn - 函数
 */
export function memoize(fn: any) {
  let cachedArg: any
  let cachedResult: any
  return (arg: any) => {
    if (cachedArg === arg) return cachedResult
    cachedArg = arg
    cachedResult = fn(arg)
    return cachedResult
  }
}
