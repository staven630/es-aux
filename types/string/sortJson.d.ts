/** @module 字符串相关-string */
/**
 * 根据对象数组的某字段进项排序
 *
 * @param {any[]} array - 需要排序的数组，其中每一项是对象
 * @param {string} key - 排序的字段
 * @param {boolean} [flag=false] - 是否需要倒序， 默认false正序，true则为倒序
 * @returns {string} - 排序后的数组
 */
export declare function sortJSON<T, K extends keyof T>(array: T[], key: K, flag?: boolean): T[];
