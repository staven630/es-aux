/**
 * 设置Cookie
 *
 * @param {string} key - 存储的键
 * @param {any} value - 存储的值
 * @param {number} [expiredays] - 有效天数
 * @param {string} [domain] - 共享Cookie域名
 */
export function setCookie(key: string, value: string, expiredays?: number, domain?: string): void {
  value = encodeURIComponent(value)
  const exdate = new Date()
  if (expiredays) {
    exdate.setDate(exdate.getDate() + expiredays)
  }
  const exdatestr = exdate.toUTCString()
  document.cookie = domain
    ? `${key}=${value};expires=${exdatestr};path=/;domain=${domain}`
    : `${key}=${value};expires=${exdatestr};path=/;`
}

/**
 * 获取Cookie
 *
 * @param key
 */
export function getCookie(key: string) {
  const reg = new RegExp(`(^| )${key}=([^;]*)(;|$)`)
  const arr = document.cookie.match(reg)
  return arr ? decodeURIComponent(arr[2]) : null
}

/**
 * 清除Cookie
 *
 * @param {string} key - 存储的键
 * @param {string} [domain] - 共享Cookie域名
 */
export function removeCookie(key: string, domain?: string) {
  setCookie('', key, -1, domain)
}
