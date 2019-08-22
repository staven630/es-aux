/**
 * 获取高亮分词列表
 *
 * @param {string} keyword 关键字
 * @param {string} fulltext 整段文本
 */
function getHighlightList(keyword, fulltext) {
    var reg = keyword instanceof RegExp ? keyword : new RegExp(keyword, 'ig');
    var list = [];
    var item = null;
    var prevIndex = 0;
    while ((item = reg.exec(fulltext)) !== null) {
        var curr = fulltext.substring(prevIndex, item.index);
        curr && list.push({ text: curr });
        list.push({ text: item[0], highlight: true });
        prevIndex = item.index + item[0].length;
    }
    list.push({ text: fulltext.substring(prevIndex) });
    return list;
}
/**
 * 获取高亮分词模板
 *
 * @param {string | Regexp} keyword  关键字
 * @param {string} fulltext 整段文本
 * @param {string} tag 高亮文本标签
 * @param {string} classname 高亮文本标签类名
 */
function getHighlightTemplate(keyword, fulltext, tag, classname) {
    if (classname === void 0) { classname = 'highlight'; }
    var reg = keyword instanceof RegExp ? keyword : new RegExp(keyword, 'ig');
    var item = null;
    var prevIndex = 0;
    var str = '';
    while ((item = reg.exec(fulltext)) !== null) {
        var curr = fulltext.substring(prevIndex, item.index);
        str = curr ? "" + str + curr : str;
        str = str + "<" + tag + " class=\"" + classname + "\">" + item[0] + "</" + tag + ">";
        prevIndex = item.index + item[0].length;
    }
    str = "" + str + fulltext.substring(prevIndex);
    return str;
}
/**
 * 获取高亮分词
 * 具有tag参数，则返回该参数包裹的字符串
 * 否则返回数组对象
 *
 * @param {string | regexp} keyword  关键字
 * @param {string} fulltext 整段文本
 * @param {string} tag 高亮文本标签
 * @param {string} classname 高亮文本标签类名
 */
function getHighlight(keyword, fulltext, tag, classname) {
    return tag
        ? getHighlightTemplate(keyword, fulltext, tag, classname)
        : getHighlightList(keyword, fulltext);
}

/**
 * 驼峰命名转换为短横线命名
 *
 * @param {string} text - 需要转换的驼峰命名的字符串
 * @returns {string}
 */
function camelToKebab(text) {
    return text.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
/**
 * 短横线命名转换为驼峰命名
 *
 * @param {string} text - 需要转换的短横线命名的字符串
 * @returns { string }
 */
function kebabToCamel(text) {
    return text.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
    });
}

/**
 * 随机生成长度为len的字符串
 *
 * @param {number} len - 生成字符串的长度
 * @returns {string}
 */
function randomString(len) {
    return Math.random()
        .toString(36)
        .substring(2, len + 2);
}

export { camelToKebab, getHighlight, getHighlightList, getHighlightTemplate, kebabToCamel, randomString };
