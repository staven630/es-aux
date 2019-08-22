import { RegExpExecArrayOrNull } from '../types'

type HighlightList = {
  text: string
  highlight?: boolean
}

/**
 * 获取高亮分词列表
 *
 * @param {string} keyword 关键字
 * @param {string} fulltext 整段文本
 */
export function getHighlightList(
  keyword: string | RegExp,
  fulltext: string
): HighlightList[] {
  const reg = keyword instanceof RegExp ? keyword : new RegExp(keyword, 'ig')

  let list: HighlightList[] = []
  let item: RegExpExecArrayOrNull = null
  let prevIndex = 0

  while ((item = reg.exec(fulltext)) !== null) {
    const curr = fulltext.substring(prevIndex, item.index)
    curr && list.push({ text: curr })
    list.push({ text: item[0], highlight: true })
    prevIndex = item.index + item[0].length
  }
  list.push({ text: fulltext.substring(prevIndex) })
  return list
}

/**
 * 获取高亮分词模板
 *
 * @param {string | Regexp} keyword  关键字
 * @param {string} fulltext 整段文本
 * @param {string} tag 高亮文本标签
 * @param {string} classname 高亮文本标签类名
 */
export function getHighlightTemplate(
  keyword: string | RegExp,
  fulltext: string,
  tag: string,
  classname: string = 'highlight'
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
 * @param {string | regexp} keyword  关键字
 * @param {string} fulltext 整段文本
 * @param {string} tag 高亮文本标签
 * @param {string} classname 高亮文本标签类名
 */
export function getHighlight(
  keyword: string | RegExp,
  fulltext: string,
  tag: string,
  classname: string
): string | HighlightList[] {
  return tag
    ? getHighlightTemplate(keyword, fulltext, tag, classname)
    : getHighlightList(keyword, fulltext)
}
