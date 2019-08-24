/** @module 存储相关-storage */
/**
 * localStorage获取值
 *
 * @param {string} key - 存储的键
 * @param {number} [day] - 有效天数
 */
export declare function getStorage(key: string, day?: number): any;
/**
 * localStorage设置值
 *
 * @param {string} key - 存储的键
 * @param {any} value - 存储的值
 * @param {number} [day] - 有效天数
 */
export declare function setStorage(key: string, value: any, day?: number): void;
/**
 * localStorage移除键为key的存储
 *
 * @param {string} key - 存储的键
 */
export declare function removeStorage(key: string): void;
/**
 * localStorage清空存储
 */
export declare function clearStorage(): void;
