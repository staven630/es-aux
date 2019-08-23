import { isArray } from '../is';
/**
 * 判断是否是IE浏览器
 *
 * @returns {Boolean}
 */
export function isIE() {
    return window['ActiveXObject'] !== 'undefined' || 'ActiveXObject' in window;
}
/**
 * 判断是否是IE11
 *
 * @returns {Boolean}
 */
export function isIE11() {
    var ua = navigator.userAgent;
    return ua.indexOf('Trident') > -1 && ua.indexOf('rv:11.0') > -1;
}
/**
 * 判断是否是Edge
 *
 * @returns {Boolean}
 */
export function isEdge() {
    return navigator.userAgent.indexOf('Edge') > -1;
}
/**
 * 获取IE浏览器版本
 */
export function getIEVersion() {
    var match = navigator.appVersion.match(/MSIE\s+\d+.0;/);
    if (match == null)
        return false;
    var result = match[0].match(/\d+/);
    if (result && isArray(result)) {
        return +result[0];
    }
    return null;
}
/**
 * 判断是否是Android
 *
 * @returns {Boolean}
 */
export function isAndroid() {
    return /(Android)/i.test(navigator.userAgent);
}
/**
 * 判断是否是IOS
 *
 * @returns {Boolean}
 */
export function isIOS() {
    return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent);
}
/**
 * 判断是否是移动端
 *
 * @returns {Boolean}
 */
export function isMobile() {
    return isAndroid() || isIOS();
}
/**
 * 判断是否是PC
 *
 * @returns {Boolean}
 */
export function isPC() {
    return !isMobile();
}
/**
 * 判断是否是微信浏览器
 *
 * @returns {Boolean}
 */
export function isWX() {
    return /micromessenger/.test(navigator.userAgent.toLowerCase());
}
