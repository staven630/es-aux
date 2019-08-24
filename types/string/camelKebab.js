/** @module 字符串相关-string */
/**
 * 驼峰命名转换为短横线命名
 *
 * @param {string} text - 需要转换的驼峰命名的字符串
 * @returns {string}
 */
export function camelToKebab(text) {
    return text.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
/**
 * 短横线命名转换为驼峰命名
 *
 * @param {string} text - 需要转换的短横线命名的字符串
 * @returns { string }
 */
export function kebabToCamel(text) {
    return text.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
    });
}
