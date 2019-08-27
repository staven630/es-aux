/**
 * 防抖函数
 *
 * @param {Function} fn - 需要防抖处理的函数
 * @param {number} delay - 防抖间隔
 *
 * @returns {Function}
 */
export declare function debounce(fn: Function, delay: number): Function;
/**
 * 节流函数
 *
 * @param {Function} fn - 需要节流处理的函数
 * @param {number} threshold - 节流阀值
 *
 * @returns {Function}
 */
export declare function throttle(fn: Function, threshold: number): Function;
