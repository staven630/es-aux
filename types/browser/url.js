/**
 * 获取链接中键相应的值
 *
 * @param {string} name - 键名
 * @returns {string}
 */
export function getUrlParam(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    return r ? decodeURIComponent(r[2]) : null;
}
/**
 * 返回链接中所有键值对象
 *  @returns {Object}
 */
export function getUrlObj() {
    var qs = location.search.length > 0 ? location.search.substring(1) : '';
    var args = {};
    var items = qs.length ? qs.split('&') : [];
    var item = null;
    var name = null;
    var value = null;
    var i = 0;
    var len = items.length;
    for (i = 0; i < len; i++) {
        item = items[i].split('=');
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        if (name.length) {
            args[name] = value;
        }
    }
    return args;
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
export function addUrlParam(url, name, value) {
    url += url.indexOf('?') == -1 ? '?' : '&';
    url += encodeURIComponent(name) + '=' + encodeURIComponent(value);
    return url;
}
/**
 * 修改链接中键对应的值
 *
 * @param {string} url - 链接
 * @param {string} name - 键
 * @param {any} value - 值
 * @returns {string}
 */
export function modifyUrlParam(url, key, value) {
    var pattern = key + '=([^&]*)';
    var replaceText = key + '=' + value;
    if (url.match(pattern)) {
        var tmp = '/(' + key + '=)([^&]*)/gi';
        return url.replace(eval(tmp), replaceText);
    }
    return url.match('[?]') ? url + '&' + replaceText : url + '?' + replaceText;
}
