/** @module 存储相关-storage */
/**
 * 设置Cookie
 *
 * @param {string} key - 存储的键
 * @param {any} value - 存储的值
 * @param {number} [expiredays] - 有效天数
 * @param {string} [domain] - 共享Cookie域名
 */
export function setCookie(key, value, expiredays, domain) {
    value = encodeURIComponent(value);
    var exdate = new Date();
    if (expiredays) {
        exdate.setDate(exdate.getDate() + expiredays);
    }
    var exdatestr = exdate.toUTCString();
    document.cookie = domain
        ? key + "=" + value + ";expires=" + exdatestr + ";path=/;domain=" + domain
        : key + "=" + value + ";expires=" + exdatestr + ";path=/;";
}
/**
 * 获取Cookie
 *
 * @param key
 */
export function getCookie(key) {
    var reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
    var arr = document.cookie.match(reg);
    return arr ? decodeURIComponent(arr[2]) : null;
}
/**
 * 清除Cookie
 *
 * @param {string} key - 存储的键
 * @param {string} [domain] - 共享Cookie域名
 */
export function removeCookie(key, domain) {
    setCookie('', key, -1, domain);
}
