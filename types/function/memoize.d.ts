/** @module 函数相关-function */
/**
 * 缓存函数调用结果
 *
 * @param {Function} fn - 函数
 */
export declare function memoize(fn: Function): (arg: any) => any;
