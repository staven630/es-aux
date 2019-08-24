/** @module 浏览器相关-browser */
/**
 * 获取链接中键相应的值
 *
 * @param {string} name - 键名
 * @returns {string}
 */
export function getUrlParam(name: string): string | null {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const r = window.location.search.substr(1).match(reg)
  return r ? decodeURIComponent(r[2]) : null
}

/**
 * 返回链接中所有键值对象
 *  @returns {Object}
 */
export function getUrlObj(): object {
  const qs = location.search.length > 0 ? location.search.substring(1) : ''
  const args: any = {}
  const items = qs.length ? qs.split('&') : []
  let item = null
  let name = null
  let value = null
  let i = 0
  const len = items.length
  for (i = 0; i < len; i++) {
    item = items[i].split('=')
    name = decodeURIComponent(item[0])
    value = decodeURIComponent(item[1])
    if (name.length) {
      args[name] = value
    }
  }
  return args
}

/**
 *
 * 向链接中添加键值对
 *
 * @param {string} url - 链接
 * @param {string} name - 键
 * @param {any} value - 值
 * @returns {string}
 */
export function addUrlParam(url: string, name: string, value: any): string {
  url += url.indexOf('?') == -1 ? '?' : '&'
  url += encodeURIComponent(name) + '=' + encodeURIComponent(value)
  return url
}

/**
 * 修改链接中键对应的值
 *
 * @param {string} url - 链接
 * @param {string} name - 键
 * @param {any} value - 值
 * @returns {string}
 */
export function modifyUrlParam(url: string, key: string, value: any): string {
  const pattern = key + '=([^&]*)'
  const replaceText = key + '=' + value
  if (url.match(pattern)) {
    const tmp = '/(' + key + '=)([^&]*)/gi'
    return url.replace(eval(tmp), replaceText)
  }
  return url.match('[?]') ? url + '&' + replaceText : url + '?' + replaceText
}
