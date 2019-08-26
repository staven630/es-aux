/** @module 字符串相关-string */
/**
 * 随机生成长度为len的字符串
 *
 * @param {number} len - 生成字符串的长度
 * @returns {string}
 */
export function randomString(len) {
    return Math.random()
        .toString(36)
        .substring(2, len + 2);
}
