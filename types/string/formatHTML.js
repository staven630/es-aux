/** @module 字符串相关-string */
/**
 *  过滤文本中的html标签
 *
 * @param {string} str - 文本片段
 * @returns {string}
 */
export function formatHTML(str) {
    str = str.replace(/<style([\s\S]*?)<\/style>/gi, '');
    str = str.replace(/<script([\s\S]*?)<\/script>/gi, '');
    str = str.replace(/<(div|p)[^>]*>/gi, '\n');
    str = str.replace(/<\/li>/gi, '\n');
    str = str.replace(/<li>/gi, ' * ');
    str = str.replace(/<\/ul>/gi, '\n');
    str = str.replace(/<\/p>/gi, '\n');
    str = str.replace(/<br\s*\/?>/gi, '\n');
    str = str.replace(/^\n*|<[^>]+>|\n*$/gi, '');
    str = str.replace(/<[^>]+>/gi, '');
    str = str.replace(/\n{2,}/g, '\n\n');
    str = str.replace(/\n+$/g, '');
    str = str.replace(/&nbsp;/gi, ' ');
    return str;
}
