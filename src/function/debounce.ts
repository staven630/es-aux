/**
 * 防抖函数
 *
 * @param {Function} fn - 需要防抖处理的函数
 * @param {number} delay - 防抖间隔
 *
 * @returns {Function}
 */
export function debounce(fn: Function, delay: number): Function {
  let timer: NodeJS.Timeout
  return function(this: any, ...args: any[]) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

/**
 * 节流函数
 *
 * @param {Function} fn - 需要节流处理的函数
 * @param {number} threshold - 节流阀值
 *
 * @returns {Function}
 */
export function throttle(fn: Function, threshold: number): Function {
  let timer: NodeJS.Timeout
  let start = +new Date()
  return function(this: any, ...args: any[]) {
    clearTimeout(timer)
    const curr = +new Date() - 0
    if (curr - start >= threshold) {
      fn.apply(this, args)
      start = curr
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args)
      }, threshold)
    }
  }
}
