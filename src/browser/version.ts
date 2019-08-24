/** @module 浏览器相关-browser */
import {isArray} from '../is'

/**
 * 判断是否是IE浏览器
 *
 * @returns {Boolean}
 */
export function isIE(): boolean {
  return (window as any)['ActiveXObject'] !== 'undefined' || 'ActiveXObject' in window
}

/**
 * 判断是否是IE11
 *
 * @returns {Boolean}
 */
export function isIE11(): boolean {
  const ua = navigator.userAgent
  return ua.indexOf('Trident') > -1 && ua.indexOf('rv:11.0') > -1
}

/**
 * 判断是否是Edge
 *
 * @returns {Boolean}
 */
export function isEdge(): boolean {
  return navigator.userAgent.indexOf('Edge') > -1
}

/**
 * 获取IE浏览器版本
 */
export function getIEVersion(): any {
  const match = navigator.appVersion.match(/MSIE\s+\d+.0;/)
  if (match == null) return false
  const result = match[0].match(/\d+/)
  if (result && isArray(result)) {
    return +result[0]
  }
  return null
}

/**
 * 判断是否是Android
 *
 * @returns {Boolean}
 */
export function isAndroid(): boolean {
  return /(Android)/i.test(navigator.userAgent)
}

/**
 * 判断是否是IOS
 *
 * @returns {Boolean}
 */
export function isIOS(): boolean {
  return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)
}

/**
 * 判断是否是移动端
 *
 * @returns {Boolean}
 */
export function isMobile(): boolean {
  return isAndroid() || isIOS()
}

/**
 * 判断是否是PC
 *
 * @returns {Boolean}
 */
export function isPC(): boolean {
  return !isMobile()
}

/**
 * 判断是否是微信浏览器
 *
 * @returns {Boolean}
 */
export function isWX(): boolean {
  return /micromessenger/.test(navigator.userAgent.toLowerCase())
}
