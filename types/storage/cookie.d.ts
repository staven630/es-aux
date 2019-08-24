/** @module 存储相关-storage */
/**
 * 设置Cookie
 *
 * @param {string} key - 存储的键
 * @param {any} value - 存储的值
 * @param {number} [expiredays] - 有效天数
 * @param {string} [domain] - 共享Cookie域名
 */
export declare function setCookie(key: string, value: string, expiredays?: number, domain?: string): void;
/**
 * 获取Cookie
 *
 * @param key
 */
export declare function getCookie(key: string): string | null;
/**
 * 清除Cookie
 *
 * @param {string} key - 存储的键
 * @param {string} [domain] - 共享Cookie域名
 */
export declare function removeCookie(key: string, domain?: string): void;
