/** @module 字符串相关-string */
/**
 * 以某字符分隔字符串
 * @example
 * ```js
 * divideText(10000000000000, 3, ',') => 10,000,000,000,000
 * ```
 *
 * @param {string/number} text - 需要被分割的文本
 * @param {number} len - 分割长度
 * @param {string} [replaceText=','] - 用来替换的字符
 * @returns {string}
 */
export function divideText(text, len, replaceText) {
    if (replaceText === void 0) { replaceText = ','; }
    var reg = new RegExp('(\\d)(?=(?:\\d{' + +len + '})+$)', 'g');
    return ("" + text).replace(reg, '$1' + replaceText);
}
/**
 * 隐藏/替换字符串中间几位
 * @example
 * ```js
 * spliceText(18255558888, 3, 4, '****') // 182\*\*\*\*8888
 * ```
 *
 * @param {string/number} text - 需要被替换的文本
 * @param {number} start - start从前往后第几位
 * @param {number} last - end从后往前第几位
 * @param {string} replaceText - 用来替换的字符
 * @returns {string}
 */
export function spliceText(text, start, last, replaceText) {
    var reg = new RegExp('^(.{' + +start + '})(?:\\d+)(.{' + +last + '})$');
    return ("" + text).replace(reg, '$1' + replaceText + '$2');
}
/**
 * 金额每三位正数添加逗号，支持保留小数
 * @example
 * ```js
 * toDecimal(10000000000000, 2) // 10,000,000,000.00
 * ```
 *
 * @param {string/number} textt - 需要被替换的文本
 * @param {number} len - 保留小数位数
 * @returns {string}
 */
export function toDecimal(text, len) {
    text = text.toString();
    if (/[^0-9.]/.test(text) || text == null || text == '')
        return '';
    text = text.replace(/^(\d*)$/, '$1.');
    text = (text + '00').replace(/(\d*\.\d\d)\d*/, '$1');
    text = text.replace('.', ',');
    var re = /(\d)(\d{3},)/;
    while (re.test(text))
        text = text.replace(re, '$1,$2');
    text = text.replace(/,(\d\d)$/, '.$1');
    if (len == 0) {
        // 不带小数位(默认是有小数位)
        var a = text.split('.');
        if (a[1] == '00') {
            text = a[0];
        }
    }
    return text;
}
