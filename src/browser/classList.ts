/** @module 浏览器相关-browser */
/**
 * 是否具有 className
 *
 * @param {HTMLElement} el - 元素
 * @param {string} cls - 类名
 */
export function hasClass(el: HTMLElement, cls: string) {
  return el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

/**
 * 添加 className
 *
 * @param {HTMLElement} el - 元素
 * @param {string} cls - 类名
 */
export function addClass(el: HTMLElement, cls: string) {
  if (hasClass(el, cls)) return
  el.className += el.className ? ` ${cls}` : cls
}

/**
 * 删除 className
 *
 * @param {HTMLElement} el - 元素
 * @param {string} cls - 类名
 */
export function removeClass(el: HTMLElement, cls: string) {
  if (!hasClass(el, cls)) return
  const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
  el.className = el.className.replace(reg, ' ')
}

/**
 * 切换 className
 *
 * @param {HTMLElement} el - 元素
 * @param {string} cls - 类名
 */
export function toggleClass(el: HTMLElement, cls: string) {
  return !hasClass(el, cls) ? addClass(el, cls) : removeClass(el, cls)
}
