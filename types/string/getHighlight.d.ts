declare type HighlightList = {
    text: string;
    highlight?: boolean;
};
declare type StringOrRegexp = string | RegExp;
/**
 * 获取高亮分词列表
 * @param {(string/Regexp)} keyword - 关键字
 * @param {string} fulltext - 整段文本
 * @returns {object[]}
 */
export declare function getHighlightList(keyword: StringOrRegexp, fulltext: string): HighlightList[];
/**
 * 获取高亮分词模板
 *
 * @param {(string/Regexp)} keyword - 关键字
 * @param {string} fulltext - 整段文本
 * @param {string} [tag=span] - 高亮文本标签
 * @param {string} [classname=highlight] - 高亮文本标签类名
 * @returns {string} tag标签包裹的字符串
 */
export declare function getHighlightTemplate(keyword: StringOrRegexp, fulltext: string, tag?: string, classname?: string): string;
/**
 * 获取高亮分词
 * 具有tag参数，则返回该参数包裹的字符串
 * 否则返回数组对象
 *
 * @param {(string/Regexp)} keyword - 关键字
 * @param {string} fulltext - 整段文本
 * @param {string} [tag] - 高亮文本标签
 * @param {string} [classname] - 高亮文本标签类名
 * @returns {string | Object[]}
 */
export declare function getHighlight(keyword: StringOrRegexp, fulltext: string, tag?: string, classname?: string): string | HighlightList[];
export {};
