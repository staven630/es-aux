/**
 * 以某字符分隔字符串
 * eg: divideText(10000000000000, 3, ',') => 10,000,000,000,000
 *
 * @param {string/number} text - 需要被分割的文本
 * @param {number} len - 分割长度
 * @param {string} [replaceText=,] - 用来替换的字符
 * @returns {string}
 */
export declare function divideText(text: string | number, len: number, replaceText?: string): string;
/**
 * 隐藏/替换字符串中间几位
 * eg: spliceText(18255558888, 3, 4, '****') // 182****8888
 *
 * @param {string/number} text - 需要被替换的文本
 * @param {number} start - start从前往后第几位
 * @param {number} last - end从后往前第几位
 * @param {string} replaceText - 用来替换的字符
 * @returns {string}
 */
export declare function spliceText(text: string | number, start: number, last: number, replaceText: string): string;
/**
 * 金额每三位正数添加逗号(支持保留小数)
 * eg: toDecimal(10000000000000, 2) // 10,000,000,000.00
 *
 * @param {string/number} textt - 需要被替换的文本
 * @param {number} len - 保留小数位数
 * @returns {string}
 */
export declare function toDecimal(text: string | number, len: number): string | 0;
