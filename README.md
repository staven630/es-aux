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

## Modules

<dl>
<dt><a href="#module_Map操作">Map操作</a></dt>
<dd></dd>
</dl>

<a id="module_Map操作"></a>
## Map操作
&emsp;&emsp;----

* [Map操作](#module_Map操作)
    * [~mapToObj(map)](#module_Map操作..mapToObj) ⇒ <code>Object</code>
    * [~objToMap(obj)](#module_Map操作..objToMap) ⇒ <code>Map</code>
    * [~hasClass([HTMLElement], [String])](#module_Map操作..hasClass)
    * [~addClass([HTMLElement], [String])](#module_Map操作..addClass)
    * [~removeClass([HTMLElement], [String])](#module_Map操作..removeClass)
    * [~toggleClass([HTMLElement], [String])](#module_Map操作..toggleClass)
    * [~getUrlParam(name)](#module_Map操作..getUrlParam) ⇒ <code>string</code>
    * [~getUrlObj()](#module_Map操作..getUrlObj) ⇒ <code>Object</code>
    * [~addUrlParam(url, name, value)](#module_Map操作..addUrlParam) ⇒ <code>string</code>
    * [~modifyUrlParam(url, name, value)](#module_Map操作..modifyUrlParam) ⇒ <code>string</code>
    * [~isIE()](#module_Map操作..isIE) ⇒ <code>Boolean</code>
    * [~isIE11()](#module_Map操作..isIE11) ⇒ <code>Boolean</code>
    * [~isEdge()](#module_Map操作..isEdge) ⇒ <code>Boolean</code>
    * [~getIEVersion()](#module_Map操作..getIEVersion)
    * [~isAndroid()](#module_Map操作..isAndroid) ⇒ <code>Boolean</code>
    * [~isIOS()](#module_Map操作..isIOS) ⇒ <code>Boolean</code>
    * [~isMobile()](#module_Map操作..isMobile) ⇒ <code>Boolean</code>
    * [~isPC()](#module_Map操作..isPC) ⇒ <code>Boolean</code>
    * [~isWX()](#module_Map操作..isWX) ⇒ <code>Boolean</code>
    * [~getEvent(event)](#module_Map操作..getEvent)
    * [~getEventTarget(event)](#module_Map操作..getEventTarget)
    * [~addHandler(element, type, handler)](#module_Map操作..addHandler)
    * [~removeHandler(element, type, handler)](#module_Map操作..removeHandler)
    * [~preventDefault()](#module_Map操作..preventDefault)
    * [~stopPropagation()](#module_Map操作..stopPropagation)
    * [~getPageX(event)](#module_Map操作..getPageX)
    * [~getPageY(event)](#module_Map操作..getPageY)
    * [~getScrollTop()](#module_Map操作..getScrollTop) ⇒ <code>Number</code>
    * [~memoize(fn)](#module_Map操作..memoize)

<a name="module_Map操作..mapToObj"></a>

### Map操作~mapToObj(map) ⇒ <code>Object</code>
Map转换成Object

**Kind**: inner method of [<code>Map操作</code>](#module_Map操作)  

| Param | Type | Description |
| --- | --- | --- |
| map | <code>Map</code> | map对象 |

<a name="module_Map操作..objToMap"></a>

### Map操作~objToMap(obj) ⇒ <code>Map</code>
Object转换成Map

**Kind**: inner method of [<code>Map操作</code>](#module_Map操作)  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | map对象 |

<a name="module_Map操作..hasClass"></a>

### Map操作~hasClass([HTMLElement], [String])
是否具有 className

**Kind**: inner method of [<code>Map操作</code>](#module_Map操作)  

| Param | Description |
| --- | --- |
| [HTMLElement] | el - 元素 |
| [String] | cls - 类名 |

<a name="module_Map操作..addClass"></a>

### Map操作~addClass([HTMLElement], [String])
添加 className

**Kind**: inner method of [<code>Map操作</code>](#module_Map操作)  

| Param | Description |
| --- | --- |
| [HTMLElement] | el - 元素 |
| [String] | cls - 类名 |

<a name="module_Map操作..removeClass"></a>

### Map操作~removeClass([HTMLElement], [String])
删除 className

**Kind**: inner method of [<code>Map操作</code>](#module_Map操作)  

| Param | Description |
| --- | --- |
| [HTMLElement] | el - 元素 |
| [String] | cls - 类名 |

<a name="module_Map操作..toggleClass"></a>

### Map操作~toggleClass([HTMLElement], [String])
切换 className

**Kind**: inner method of [<code>Map操作</code>](#module_Map操作)  

| Param | Description |
| --- | --- |
| [HTMLElement] | el - 元素 |
| [String] | cls - 类名 |

<a name="module_Map操作..getUrlParam"></a>

### Map操作~getUrlParam(name) ⇒ <code>string</code>
获取链接中键相应的值

**Kind**: inner method of [<code>Map操作</code>](#module_Map操作)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | 键名 |

<a name="module_Map操作..getUrlObj"></a>

### Map操作~getUrlObj() ⇒ <code>Object</code>
返回链接中所有键值对象

**Kind**: inner method of [<code>Map操作</code>](#module_Map操作)  
<a name="module_Map操作..addUrlParam"></a>

### Map操作~addUrlParam(url, name, value) ⇒ <code>string</code>
向链接中添加键值对

**Kind**: inner method of [<code>Map操作</code>](#module_Map操作)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | 链接 |
| name | <code>string</code> | 键 |
| value | <code>any</code> | 值 |

<a name="module_Map操作..modifyUrlParam"></a>

### Map操作~modifyUrlParam(url, name, value) ⇒ <code>string</code>
修改链接中键对应的值

**Kind**: inner method of [<code>Map操作</code>](#module_Map操作)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | 链接 |
| name | <code>string</code> | 键 |
| value | <code>any</code> | 值 |

<a name="module_Map操作..isIE"></a>

### Map操作~isIE() ⇒ <code>Boolean</code>
判断是否是IE浏览器

**Kind**: inner method of [<code>Map操作</code>](#module_Map操作)  
<a name="module_Map操作..isIE11"></a>

### Map操作~isIE11() ⇒ <code>Boolean</code>
判断是否是IE11

**Kind**: inner method of [<code>Map操作</code>](#module_Map操作)  
<a name="module_Map操作..isEdge"></a>

### Map操作~isEdge() ⇒ <code>Boolean</code>
判断是否是Edge

**Kind**: inner method of [<code>Map操作</code>](#module_Map操作)  
<a name="module_Map操作..getIEVersion"></a>

### Map操作~getIEVersion()
获取IE浏览器版本

**Kind**: inner method of [<code>Map操作</code>](#module_Map操作)  
<a name="module_Map操作..isAndroid"></a>

### Map操作~isAndroid() ⇒ <code>Boolean</code>
判断是否是Android

**Kind**: inner method of [<code>Map操作</code>](#module_Map操作)  
<a name="module_Map操作..isIOS"></a>

### Map操作~isIOS() ⇒ <code>Boolean</code>
判断是否是IOS

**Kind**: inner method of [<code>Map操作</code>](#module_Map操作)  
<a name="module_Map操作..isMobile"></a>

### Map操作~isMobile() ⇒ <code>Boolean</code>
判断是否是移动端

**Kind**: inner method of [<code>Map操作</code>](#module_Map操作)  
<a name="module_Map操作..isPC"></a>

### Map操作~isPC() ⇒ <code>Boolean</code>
判断是否是PC

**Kind**: inner method of [<code>Map操作</code>](#module_Map操作)  
<a name="module_Map操作..isWX"></a>

### Map操作~isWX() ⇒ <code>Boolean</code>
判断是否是微信浏览器

**Kind**: inner method of [<code>Map操作</code>](#module_Map操作)  
<a name="module_Map操作..getEvent"></a>

### Map操作~getEvent(event)
获取事件源

**Kind**: inner method of [<code>Map操作</code>](#module_Map操作)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | 事件源 |

<a name="module_Map操作..getEventTarget"></a>

### Map操作~getEventTarget(event)
获取事件对象

**Kind**: inner method of [<code>Map操作</code>](#module_Map操作)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | 事件 |

<a name="module_Map操作..addHandler"></a>

### Map操作~addHandler(element, type, handler)
添加事件

**Kind**: inner method of [<code>Map操作</code>](#module_Map操作)  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | 元素 |
| type | <code>String</code> | 事件类型 |
| handler | <code>EventListener</code> | 事件 |

<a name="module_Map操作..removeHandler"></a>

### Map操作~removeHandler(element, type, handler)
移除事件

**Kind**: inner method of [<code>Map操作</code>](#module_Map操作)  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | 元素 |
| type | <code>String</code> | 事件类型 |
| handler | <code>EventListener</code> | 事件 |

<a name="module_Map操作..preventDefault"></a>

### Map操作~preventDefault()
阻止默认事件

**Kind**: inner method of [<code>Map操作</code>](#module_Map操作)  
<a name="module_Map操作..stopPropagation"></a>

### Map操作~stopPropagation()
阻止事件冒泡

**Kind**: inner method of [<code>Map操作</code>](#module_Map操作)  
<a name="module_Map操作..getPageX"></a>

### Map操作~getPageX(event)
获取当前位置的X轴坐标

**Kind**: inner method of [<code>Map操作</code>](#module_Map操作)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | 事件源 |

<a name="module_Map操作..getPageY"></a>

### Map操作~getPageY(event)
获取当前位置的Y轴坐标

**Kind**: inner method of [<code>Map操作</code>](#module_Map操作)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | 事件源 |

<a name="module_Map操作..getScrollTop"></a>

### Map操作~getScrollTop() ⇒ <code>Number</code>
获取页面滚动高度

**Kind**: inner method of [<code>Map操作</code>](#module_Map操作)  
<a name="module_Map操作..memoize"></a>

### Map操作~memoize(fn)
缓存函数调用结果

**Kind**: inner method of [<code>Map操作</code>](#module_Map操作)  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | 函数 |

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
