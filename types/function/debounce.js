/**
 * 防抖函数
 *
 * @param {Function} fn - 需要防抖处理的函数
 * @param {number} delay - 防抖间隔
 *
 * @returns {Function}
 */
export function debounce(fn, delay) {
    var timer;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(_this, args);
        }, delay);
    };
}
/**
 * 节流函数
 *
 * @param {Function} fn - 需要节流处理的函数
 * @param {number} threshold - 节流阀值
 *
 * @returns {Function}
 */
export function throttle(fn, threshold) {
    var timer;
    var start = +new Date();
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        var curr = +new Date() - 0;
        if (curr - start >= threshold) {
            fn.apply(this, args);
            start = curr;
        }
        else {
            timer = setTimeout(function () {
                fn.apply(_this, args);
            }, threshold);
        }
    };
}
