/** @module 浏览器相关-browser */
/**
 * 获取链接中键相应的值
 *
 * @param {string} name - 键名
 * @returns {string}
 */
export declare function getUrlParam(name: string): string | null;
/**
 * 返回链接中所有键值对象
 *  @returns {Object}
 */
export declare function getUrlObj(): object;
/**
 *
 * 向链接中添加键值对
 *
 * @param {string} url - 链接
 * @param {string} name - 键
 * @param {any} value - 值
 * @returns {string}
 */
export declare function addUrlParam(url: string, name: string, value: any): string;
/**
 * 修改链接中键对应的值
 *
 * @param {string} url - 链接
 * @param {string} name - 键
 * @param {any} value - 值
 * @returns {string}
 */
export declare function modifyUrlParam(url: string, key: string, value: any): string;
