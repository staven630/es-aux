import {RegExpExecArrayOrNull} from '../types'

type HighlightList = {
  text: string
  highlight?: boolean
}

type StringOrRegexp = string | RegExp

/**
 * 获取高亮分词列表
 * @param {(string/Regexp)} keyword - 关键字
 * @param {string} fulltext - 整段文本
 * @returns {object[]}
 */
export function getHighlightList(keyword: StringOrRegexp, fulltext: string): HighlightList[] {
  const reg = keyword instanceof RegExp ? keyword : new RegExp(keyword, 'ig')

  const list: HighlightList[] = []
  let item: RegExpExecArrayOrNull = null
  let prevIndex = 0

  while ((item = reg.exec(fulltext)) !== null) {
    const curr = fulltext.substring(prevIndex, item.index)
    curr && list.push({text: curr})
    list.push({text: item[0], highlight: true})
    prevIndex = item.index + item[0].length
  }
  list.push({text: fulltext.substring(prevIndex)})
  return list
}

/**
 * 获取高亮分词模板
 *
 * @param {(string/Regexp)} keyword - 关键字
 * @param {string} fulltext - 整段文本
 * @param {string} [tag=span] - 高亮文本标签
 * @param {string} [classname=highlight] - 高亮文本标签类名
 * @returns {string} tag标签包裹的字符串
 */
export function getHighlightTemplate(
  keyword: StringOrRegexp,
  fulltext: string,
  tag = 'span',
  classname = 'highlight'
): string {
  const reg = keyword instanceof RegExp ? keyword : new RegExp(keyword, 'ig')

  let item: RegExpExecArrayOrNull = null
  let prevIndex = 0
  let str = ''

  while ((item = reg.exec(fulltext)) !== null) {
    const curr = fulltext.substring(prevIndex, item.index)
    str = curr ? `${str}${curr}` : str
    str = `${str}<${tag} class="${classname}">${item[0]}</${tag}>`
    prevIndex = item.index + item[0].length
  }
  str = `${str}${fulltext.substring(prevIndex)}`
  return str
}

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
export function getHighlight(
  keyword: StringOrRegexp,
  fulltext: string,
  tag?: string,
  classname?: string
): string | HighlightList[] {
  return tag ? getHighlightTemplate(keyword, fulltext, tag, classname) : getHighlightList(keyword, fulltext)
}
