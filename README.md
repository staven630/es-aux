# es-aux
&emsp;&emsp;JavaScript开发辅助函数库。

# 安装
```bash
npm i -S es-aux
```

# 使用
```js
const Aux = require('es-aux')
// or
const { camelToKebab } = require('es-aux')

import * as Aux from 'es-aux'
// or
import { camelToKebab } from 'es-aux'
```

# 助手函数列表

### 类型判断
* [isArray: 判断是否是数组](https://github.com/staven630/es-aux/blob/master/docs/type.md#isArray)
### 字符串相关
* [divideText: 以某字符分隔字符串](https://github.com/staven630/es-aux/blob/master/docs/string.md#divideText)
* [spliceText: 隐藏/替换字符串中间几位](https://github.com/staven630/es-aux/blob/master/docs/string.md#spliceText)
* [toDecimal: 金额每三位正数添加逗号，支持保留小数](https://github.com/staven630/es-aux/blob/master/docs/string.md#toDecimal)
* [sortJSON: 根据对象数组的某字段进项排序](https://github.com/staven630/es-aux/blob/master/docs/string.md#sortJSON)
* [camelToKebab: 驼峰命名转换为短横线命名](https://github.com/staven630/es-aux/blob/master/docs/string.md#camelToKebab)
* [kebabToCamel: 短横线命名转换为驼峰命名](https://github.com/staven630/es-aux/blob/master/docs/string.md#kebabToCamel)
* [formatHTML: 过滤文本中的html标签](https://github.com/staven630/es-aux/blob/master/docs/string.md#formatHTML)
* [randomString: 随机生成长度为len的字符串](https://github.com/staven630/es-aux/blob/master/docs/string.md#randomString)
* [getHighlightList: 获取高亮分词列表](https://github.com/staven630/es-aux/blob/master/docs/string.md#getHighlightList)
* [getHighlightTemplate: 获取高亮分词模板](https://github.com/staven630/es-aux/blob/master/docs/string.md#getHighlightTemplate)
* [getHighlight: 获取高亮分词具有tag参数，则返回该参数包裹的字符串否则返回数组对象](https://github.com/staven630/es-aux/blob/master/docs/string.md#getHighlight)
### 数组
* [unionArr: 求数组并集](https://github.com/staven630/es-aux/blob/master/docs/array.md#unionArr)
* [intersectArr: 求数组交集](https://github.com/staven630/es-aux/blob/master/docs/array.md#intersectArr)
* [differenceArr: 求数组差集](https://github.com/staven630/es-aux/blob/master/docs/array.md#differenceArr)
* [uniqueArr: 基本类型数组去重](https://github.com/staven630/es-aux/blob/master/docs/array.md#uniqueArr)
* [uniqueKeyInArr: 对象数组单个键值匹配去重](https://github.com/staven630/es-aux/blob/master/docs/array.md#uniqueKeyInArr)
* [uniqueObjInArr: 对象数组完全匹配去重](https://github.com/staven630/es-aux/blob/master/docs/array.md#uniqueObjInArr)
* [flattenArr: 规整多重数组](https://github.com/staven630/es-aux/blob/master/docs/array.md#flattenArr)
### 存储相关
* [getStorage: localStorage获取值](https://github.com/staven630/es-aux/blob/master/docs/storage.md#getStorage)
* [setStorage: localStorage设置值](https://github.com/staven630/es-aux/blob/master/docs/storage.md#setStorage)
* [removeStorage: localStorage移除键为key的存储](https://github.com/staven630/es-aux/blob/master/docs/storage.md#removeStorage)
* [clearStorage: localStorage清空存储](https://github.com/staven630/es-aux/blob/master/docs/storage.md#clearStorage)
* [setCookie: 设置Cookie](https://github.com/staven630/es-aux/blob/master/docs/storage.md#setCookie)
* [getCookie: 获取Cookie](https://github.com/staven630/es-aux/blob/master/docs/storage.md#getCookie)
* [removeCookie: 清除Cookie](https://github.com/staven630/es-aux/blob/master/docs/storage.md#removeCookie)
### Map、Set相关
* [mapToObj: Map转换成Object](https://github.com/staven630/es-aux/blob/master/docs/map.md#mapToObj)
* [objToMap: Object转换成Map](https://github.com/staven630/es-aux/blob/master/docs/map.md#objToMap)
### 时间
* [getDate: 返回格林威治时间](https://github.com/staven630/es-aux/blob/master/docs/date.md#getDate)
* [prefixDate: 前缀加0](https://github.com/staven630/es-aux/blob/master/docs/date.md#prefixDate)
* [formatDate: 自定义时间转换](https://github.com/staven630/es-aux/blob/master/docs/date.md#formatDate)
* [getNextDate: 获取N天后的日期](https://github.com/staven630/es-aux/blob/master/docs/date.md#getNextDate)
* [getMonthDays: 获取某个月有多少天](https://github.com/staven630/es-aux/blob/master/docs/date.md#getMonthDays)
* [getPrevMonth: 获取上个月初时间](https://github.com/staven630/es-aux/blob/master/docs/date.md#getPrevMonth)
* [getNextMonth: 获取下个月初时间](https://github.com/staven630/es-aux/blob/master/docs/date.md#getNextMonth)
* [getCountDown: 获取倒计时时间](https://github.com/staven630/es-aux/blob/master/docs/date.md#getCountDown)
* [getAgoDate: 获取N天前、N小时、N分钟前](https://github.com/staven630/es-aux/blob/master/docs/date.md#getAgoDate)
* [getMonthLastDay: 获取某月最后一天](https://github.com/staven630/es-aux/blob/master/docs/date.md#getMonthLastDay)
* [getWeekFirstDay: 获取某周的第一天，以周日计算](https://github.com/staven630/es-aux/blob/master/docs/date.md#getWeekFirstDay)
* [getWeekLastDay: 获取某周的最后一天，以周六计算](https://github.com/staven630/es-aux/blob/master/docs/date.md#getWeekLastDay)
* [getFirstMonday: 获取某月第一个周一](https://github.com/staven630/es-aux/blob/master/docs/date.md#getFirstMonday)
* [getLastSunday: 获取某月最后一个周日](https://github.com/staven630/es-aux/blob/master/docs/date.md#getLastSunday)
* [getFirstSunday: 获取某月第一个周日](https://github.com/staven630/es-aux/blob/master/docs/date.md#getFirstSunday)
* [getLastSaturday: 获取某月最后一个周六](https://github.com/staven630/es-aux/blob/master/docs/date.md#getLastSaturday)
* [getWeekIndex: 获取日期今年第几周，以周一开始算](https://github.com/staven630/es-aux/blob/master/docs/date.md#getWeekIndex)
### 浏览器相关
* [hasClass: 是否具有 className](https://github.com/staven630/es-aux/blob/master/docs/browser.md#hasClass)
* [addClass: 添加 className](https://github.com/staven630/es-aux/blob/master/docs/browser.md#addClass)
* [removeClass: 删除 className](https://github.com/staven630/es-aux/blob/master/docs/browser.md#removeClass)
* [toggleClass: 切换 className](https://github.com/staven630/es-aux/blob/master/docs/browser.md#toggleClass)
* [getUrlParam: 获取链接中键相应的值](https://github.com/staven630/es-aux/blob/master/docs/browser.md#getUrlParam)
* [getUrlObj: 返回链接中所有键值对象](https://github.com/staven630/es-aux/blob/master/docs/browser.md#getUrlObj)
* [addUrlParam: 向链接中添加键值对](https://github.com/staven630/es-aux/blob/master/docs/browser.md#addUrlParam)
* [modifyUrlParam: 修改链接中键对应的值](https://github.com/staven630/es-aux/blob/master/docs/browser.md#modifyUrlParam)
* [isIE: 判断是否是IE浏览器](https://github.com/staven630/es-aux/blob/master/docs/browser.md#isIE)
* [isIE11: 判断是否是IE11](https://github.com/staven630/es-aux/blob/master/docs/browser.md#isIE11)
* [isEdge: 判断是否是Edge](https://github.com/staven630/es-aux/blob/master/docs/browser.md#isEdge)
* [getIEVersion: 获取IE浏览器版本](https://github.com/staven630/es-aux/blob/master/docs/browser.md#getIEVersion)
* [isAndroid: 判断是否是Android](https://github.com/staven630/es-aux/blob/master/docs/browser.md#isAndroid)
* [isIOS: 判断是否是IOS](https://github.com/staven630/es-aux/blob/master/docs/browser.md#isIOS)
* [isMobile: 判断是否是移动端](https://github.com/staven630/es-aux/blob/master/docs/browser.md#isMobile)
* [isPC: 判断是否是PC](https://github.com/staven630/es-aux/blob/master/docs/browser.md#isPC)
* [isWX: 判断是否是微信浏览器](https://github.com/staven630/es-aux/blob/master/docs/browser.md#isWX)
* [getEvent: 获取事件源](https://github.com/staven630/es-aux/blob/master/docs/browser.md#getEvent)
* [getEventTarget: 获取事件对象](https://github.com/staven630/es-aux/blob/master/docs/browser.md#getEventTarget)
* [addHandler: 添加事件](https://github.com/staven630/es-aux/blob/master/docs/browser.md#addHandler)
* [removeHandler: 移除事件](https://github.com/staven630/es-aux/blob/master/docs/browser.md#removeHandler)
* [preventDefault: 阻止默认事件](https://github.com/staven630/es-aux/blob/master/docs/browser.md#preventDefault)
* [stopPropagation: 阻止事件冒泡](https://github.com/staven630/es-aux/blob/master/docs/browser.md#stopPropagation)
* [getPageX: 获取当前位置的X轴坐标](https://github.com/staven630/es-aux/blob/master/docs/browser.md#getPageX)
* [getPageY: 获取当前位置的Y轴坐标](https://github.com/staven630/es-aux/blob/master/docs/browser.md#getPageY)
* [getScrollTop: 获取页面滚动高度](https://github.com/staven630/es-aux/blob/master/docs/browser.md#getScrollTop)
### 函数相关
* [memoize: 缓存函数调用结果](https://github.com/staven630/es-aux/blob/master/docs/function.md#memoize)