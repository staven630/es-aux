/** @module 函数相关-function */
/**
 * 缓存函数调用结果
 *
 * @param {Function} fn - 函数
 */
export function memoize(fn) {
    var cachedArg;
    var cachedResult;
    return function (arg) {
        if (cachedArg === arg)
            return cachedResult;
        cachedArg = arg;
        cachedResult = fn(arg);
        return cachedResult;
    };
}
