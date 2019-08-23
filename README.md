# es-aux
&emsp;&emsp;JavaScript开发辅助函数库。


# 安装
```bash
npm i -S es - aux
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

<a id="isArray"></a>
## isArray(array)
&emsp;&emsp;判断是否是数组


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| array | <code>any</code> | 需要判断的对象 |

----
<a id="divideText"></a>
## divideText(text, len, [replaceText]) ⇒ <code>string</code>
&emsp;&emsp;以某字符分隔字符串
eg: divideText(10000000000000, 3, ',') => 10,000,000,000,000


| 参数 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| text | <code>string/number</code> |  | 需要被分割的文本 |
| len | <code>number</code> |  | 分割长度 |
| [replaceText] | <code>string</code> | <code>&quot;,&quot;</code> | 用来替换的字符 |

----
<a id="spliceText"></a>
## spliceText(text, start, last, replaceText) ⇒ <code>string</code>
&emsp;&emsp;隐藏/替换字符串中间几位
eg: spliceText(18255558888, 3, 4, '****') // 182****8888


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| text | <code>string/number</code> | 需要被替换的文本 |
| start | <code>number</code> | start从前往后第几位 |
| last | <code>number</code> | end从后往前第几位 |
| replaceText | <code>string</code> | 用来替换的字符 |

----
<a id="toDecimal"></a>
## toDecimal(textt, len) ⇒ <code>string</code>
&emsp;&emsp;金额每三位正数添加逗号(支持保留小数)
eg: toDecimal(10000000000000, 2) // 10,000,000,000.00


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| textt | <code>string/number</code> | 需要被替换的文本 |
| len | <code>number</code> | 保留小数位数 |

----
<a id="sortJSON"></a>
## sortJSON(array, key, [flag]) ⇒ <code>string</code>
&emsp;&emsp;根据对象数组的某字段进项排序

**Returns**: <code>string</code> - - 排序后的数组  

| 参数 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| array | <code>Array.&lt;any&gt;</code> |  | 需要排序的数组，其中每一项是对象 |
| key | <code>string</code> |  | 排序的字段 |
| [flag] | <code>boolean</code> | <code>false</code> | 是否需要倒序， 默认false正序，true则为倒序 |

----
<a id="camelToKebab"></a>
## camelToKebab(text) ⇒ <code>string</code>
&emsp;&emsp;驼峰命名转换为短横线命名


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| text | <code>string</code> | 需要转换的驼峰命名的字符串 |

----
<a id="kebabToCamel"></a>
## kebabToCamel(text) ⇒ <code>string</code>
&emsp;&emsp;短横线命名转换为驼峰命名


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| text | <code>string</code> | 需要转换的短横线命名的字符串 |

----
<a id="formatHTML"></a>
## formatHTML(str) ⇒ <code>string</code>
&emsp;&emsp;过滤文本中的html标签


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| str | <code>string</code> | 文本片段 |

----
<a id="randomString"></a>
## randomString(len) ⇒ <code>string</code>
&emsp;&emsp;随机生成长度为len的字符串


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| len | <code>number</code> | 生成字符串的长度 |

----
<a id="getHighlightList"></a>
## getHighlightList(keyword, fulltext) ⇒ <code>Array.&lt;object&gt;</code>
&emsp;&emsp;获取高亮分词列表


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| keyword | <code>string/Regexp</code> | 关键字 |
| fulltext | <code>string</code> | 整段文本 |

----
<a id="getHighlightTemplate"></a>
## getHighlightTemplate(keyword, fulltext, [tag], [classname]) ⇒ <code>string</code>
&emsp;&emsp;获取高亮分词模板

**Returns**: <code>string</code> - tag标签包裹的字符串  

| 参数 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| keyword | <code>string/Regexp</code> |  | 关键字 |
| fulltext | <code>string</code> |  | 整段文本 |
| [tag] | <code>string</code> | <code>&quot;span&quot;</code> | 高亮文本标签 |
| [classname] | <code>string</code> | <code>&quot;highlight&quot;</code> | 高亮文本标签类名 |

----
<a id="getHighlight"></a>
## getHighlight(keyword, fulltext, [tag], [classname]) ⇒ <code>string</code> \| <code>Array.&lt;Object&gt;</code>
&emsp;&emsp;获取高亮分词
具有tag参数，则返回该参数包裹的字符串
否则返回数组对象


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| keyword | <code>string/Regexp</code> | 关键字 |
| fulltext | <code>string</code> | 整段文本 |
| [tag] | <code>string</code> | 高亮文本标签 |
| [classname] | <code>string</code> | 高亮文本标签类名 |

----
<a id="unionArr"></a>
## unionArr(a, b)
&emsp;&emsp;求数组并集


| 参数 | 类型 |
| --- | --- |
| a | <code>Array</code> | 
| b | <code>Array</code> | 

----
<a id="intersectArr"></a>
## intersectArr(a, b)
&emsp;&emsp;求数组交集


| 参数 | 类型 |
| --- | --- |
| a | <code>Array</code> | 
| b | <code>Array</code> | 

----
<a id="differenceArr"></a>
## differenceArr(a, b)
&emsp;&emsp;求数组差集


| 参数 | 类型 |
| --- | --- |
| a | <code>Array</code> | 
| b | <code>Array</code> | 

----
<a id="uniqueArr"></a>
## uniqueArr(arr)
&emsp;&emsp;基本类型数组去重


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| arr | <code>Array</code> | 需要去重的数组 |

----
<a id="uniqueKeyInArr"></a>
## uniqueKeyInArr(arr, key)
&emsp;&emsp;对象数组单个键值匹配去重


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| arr | <code>Array</code> | 需要去重的数组 |
| key | <code>String</code> | 单个键值 |

----
<a id="uniqueObjInArr"></a>
## uniqueObjInArr(arr)
&emsp;&emsp;对象数组完全匹配去重


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| arr | <code>Array</code> | 需要去重的数组 |

----
<a id="flattenArr"></a>
## flattenArr(arr)
&emsp;&emsp;规整多重数组


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| arr | <code>Array</code> | 需要规整的数组 |

----
<a id="getStorage"></a>
## getStorage(key, [day])
&emsp;&emsp;localStorage获取值


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| key | <code>string</code> | 存储的键 |
| [day] | <code>number</code> | 有效天数 |

----
<a id="setStorage"></a>
## setStorage(key, value, [day])
&emsp;&emsp;localStorage设置值


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| key | <code>string</code> | 存储的键 |
| value | <code>any</code> | 存储的值 |
| [day] | <code>number</code> | 有效天数 |

----
<a id="removeStorage"></a>
## removeStorage(key)
&emsp;&emsp;localStorage移除键为key的存储


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| key | <code>string</code> | 存储的键 |

----
<a id="clearStorage"></a>
## clearStorage()
&emsp;&emsp;localStorage清空存储

----
<a id="setCookie"></a>
## setCookie(key, value, [expiredays], [domain])
&emsp;&emsp;设置Cookie


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| key | <code>string</code> | 存储的键 |
| value | <code>any</code> | 存储的值 |
| [expiredays] | <code>number</code> | 有效天数 |
| [domain] | <code>string</code> | 共享Cookie域名 |

----
<a id="getCookie"></a>
## getCookie(key)
&emsp;&emsp;获取Cookie


| 参数 |
| --- |
| key | 

----
<a id="removeCookie"></a>
## removeCookie(key, [domain])
&emsp;&emsp;清除Cookie


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| key | <code>string</code> | 存储的键 |
| [domain] | <code>string</code> | 共享Cookie域名 |

----
<a id="mapToObj"></a>
## mapToObj(map) ⇒ <code>Object</code>
&emsp;&emsp;Map转换成Object


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| map | <code>Map</code> | map对象 |

----
<a id="objToMap"></a>
## objToMap(obj) ⇒ <code>Map</code>
&emsp;&emsp;Object转换成Map


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| obj | <code>Object</code> | map对象 |

----
<a id="hasClass"></a>
## hasClass([HTMLElement], [String])
&emsp;&emsp;是否具有 className


| 参数 | 描述 |
| --- | --- |
| [HTMLElement] | el - 元素 |
| [String] | cls - 类名 |

----
<a id="addClass"></a>
## addClass([HTMLElement], [String])
&emsp;&emsp;添加 className


| 参数 | 描述 |
| --- | --- |
| [HTMLElement] | el - 元素 |
| [String] | cls - 类名 |

----
<a id="removeClass"></a>
## removeClass([HTMLElement], [String])
&emsp;&emsp;删除 className


| 参数 | 描述 |
| --- | --- |
| [HTMLElement] | el - 元素 |
| [String] | cls - 类名 |

----
<a id="toggleClass"></a>
## toggleClass([HTMLElement], [String])
&emsp;&emsp;切换 className


| 参数 | 描述 |
| --- | --- |
| [HTMLElement] | el - 元素 |
| [String] | cls - 类名 |

----
<a id="getUrlParam"></a>
## getUrlParam(name) ⇒ <code>string</code>
&emsp;&emsp;获取链接中键相应的值


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| name | <code>string</code> | 键名 |

----
<a id="getUrlObj"></a>
## getUrlObj() ⇒ <code>Object</code>
&emsp;&emsp;返回链接中所有键值对象

----
<a id="addUrlParam"></a>
## addUrlParam(url, name, value) ⇒ <code>string</code>
&emsp;&emsp;向链接中添加键值对


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| url | <code>string</code> | 链接 |
| name | <code>string</code> | 键 |
| value | <code>any</code> | 值 |

----
<a id="modifyUrlParam"></a>
## modifyUrlParam(url, name, value) ⇒ <code>string</code>
&emsp;&emsp;修改链接中键对应的值


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| url | <code>string</code> | 链接 |
| name | <code>string</code> | 键 |
| value | <code>any</code> | 值 |

----
<a id="isIE"></a>
## isIE() ⇒ <code>Boolean</code>
&emsp;&emsp;判断是否是IE浏览器

----
<a id="isIE11"></a>
## isIE11() ⇒ <code>Boolean</code>
&emsp;&emsp;判断是否是IE11

----
<a id="isEdge"></a>
## isEdge() ⇒ <code>Boolean</code>
&emsp;&emsp;判断是否是Edge

----
<a id="getIEVersion"></a>
## getIEVersion()
&emsp;&emsp;获取IE浏览器版本

----
<a id="isAndroid"></a>
## isAndroid() ⇒ <code>Boolean</code>
&emsp;&emsp;判断是否是Android

----
<a id="isIOS"></a>
## isIOS() ⇒ <code>Boolean</code>
&emsp;&emsp;判断是否是IOS

----
<a id="isMobile"></a>
## isMobile() ⇒ <code>Boolean</code>
&emsp;&emsp;判断是否是移动端

----
<a id="isPC"></a>
## isPC() ⇒ <code>Boolean</code>
&emsp;&emsp;判断是否是PC

----
<a id="isWX"></a>
## isWX() ⇒ <code>Boolean</code>
&emsp;&emsp;判断是否是微信浏览器

----
<a id="getEvent"></a>
## getEvent(event)
&emsp;&emsp;获取事件源


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| event | <code>Event</code> | 事件源 |

----
<a id="getEventTarget"></a>
## getEventTarget(event)
&emsp;&emsp;获取事件对象


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| event | <code>Event</code> | 事件 |

----
<a id="addHandler"></a>
## addHandler(element, type, handler)
&emsp;&emsp;添加事件


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| element | <code>Element</code> | 元素 |
| type | <code>String</code> | 事件类型 |
| handler | <code>EventListener</code> | 事件 |

----
<a id="removeHandler"></a>
## removeHandler(element, type, handler)
&emsp;&emsp;移除事件


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| element | <code>Element</code> | 元素 |
| type | <code>String</code> | 事件类型 |
| handler | <code>EventListener</code> | 事件 |

----
<a id="preventDefault"></a>
## preventDefault()
&emsp;&emsp;阻止默认事件

----
<a id="stopPropagation"></a>
## stopPropagation()
&emsp;&emsp;阻止事件冒泡

----
<a id="getPageX"></a>
## getPageX(event)
&emsp;&emsp;获取当前位置的X轴坐标


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| event | <code>Event</code> | 事件源 |

----
<a id="getPageY"></a>
## getPageY(event)
&emsp;&emsp;获取当前位置的Y轴坐标


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| event | <code>Event</code> | 事件源 |

----
<a id="getScrollTop"></a>
## getScrollTop() ⇒ <code>Number</code>
&emsp;&emsp;获取页面滚动高度

----
<a id="memoize"></a>
## memoize(fn)
&emsp;&emsp;缓存函数调用结果


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| fn | <code>function</code> | 函数 |

----
