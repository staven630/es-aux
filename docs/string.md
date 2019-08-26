# 字符串相关

<span id="top">目录</span>
* [ divideText: 以某字符分隔字符串](#divideText)
* [ spliceText: 隐藏/替换字符串中间几位](#spliceText)
* [ toDecimal: 金额每三位正数添加逗号，支持保留小数](#toDecimal)
* [ sortJSON: 根据对象数组的某字段进项排序](#sortJSON)
* [ camelToKebab: 驼峰命名转换为短横线命名](#camelToKebab)
* [ kebabToCamel: 短横线命名转换为驼峰命名](#kebabToCamel)
* [ formatHTML: 过滤文本中的html标签](#formatHTML)
* [ randomString: 随机生成长度为len的字符串](#randomString)
* [ getHighlightList: 获取高亮分词列表](#getHighlightList)
* [ getHighlightTemplate: 获取高亮分词模板](#getHighlightTemplate)
* [ getHighlight: 获取高亮分词具有tag参数，则返回该参数包裹的字符串否则返回数组对象](#getHighlight)


### <span id="divideText">♥ divideText(replaceText: string) => string</span>
&emsp;&emsp;以某字符分隔字符串

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |

| text | string/number |  | 需要被分割的文本 |
| len | number |  | 分割长度 |
| [replaceText] | string | ',' | 用来替换的字符 |


##### 返回值：string

##### 示例：

divideText(10000000000000, 3, ',') => 10,000,000,000,000

[▲ 回顶部](#top)
### <span id="spliceText">♥ spliceText(replaceText: string) => string</span>
&emsp;&emsp;隐藏/替换字符串中间几位

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |

| text | string/number |  | 需要被替换的文本 |
| start | number |  | start从前往后第几位 |
| last | number |  | end从后往前第几位 |
| replaceText | string |  | 用来替换的字符 |


##### 返回值：string

##### 示例：

spliceText(18255558888, 3, 4, '****') // 182\*\*\*\*8888

[▲ 回顶部](#top)
### <span id="toDecimal">♥ toDecimal(len: number) => string</span>
&emsp;&emsp;金额每三位正数添加逗号，支持保留小数

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |

| textt | string/number |  | 需要被替换的文本 |
| len | number |  | 保留小数位数 |


##### 返回值：string

##### 示例：

```jstoDecimal(10000000000000, 2) // 10,000,000,000.00```

[▲ 回顶部](#top)
### <span id="sortJSON">♥ sortJSON(flag: boolean) => string</span>
&emsp;&emsp;根据对象数组的某字段进项排序

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |

| array | Array.<any> |  | 需要排序的数组，其中每一项是对象 |
| key | string |  | 排序的字段 |
| [flag] | boolean |  | 是否需要倒序， 默认false正序，true则为倒序 |


##### 返回值：string



[▲ 回顶部](#top)
### <span id="camelToKebab">♥ camelToKebab(text: string) => string</span>
&emsp;&emsp;驼峰命名转换为短横线命名

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |

| text | string |  | 需要转换的驼峰命名的字符串 |


##### 返回值：string



[▲ 回顶部](#top)
### <span id="kebabToCamel">♥ kebabToCamel(text: string) => string</span>
&emsp;&emsp;短横线命名转换为驼峰命名

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |

| text | string |  | 需要转换的短横线命名的字符串 |


##### 返回值：string



[▲ 回顶部](#top)
### <span id="formatHTML">♥ formatHTML(str: string) => string</span>
&emsp;&emsp;过滤文本中的html标签

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |

| str | string |  | 文本片段 |


##### 返回值：string



[▲ 回顶部](#top)
### <span id="randomString">♥ randomString(len: number) => string</span>
&emsp;&emsp;随机生成长度为len的字符串

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |

| len | number |  | 生成字符串的长度 |


##### 返回值：string



[▲ 回顶部](#top)
### <span id="getHighlightList">♥ getHighlightList(fulltext: string) => Array<object></span>
&emsp;&emsp;获取高亮分词列表

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |

| keyword | string/Regexp |  | 关键字 |
| fulltext | string |  | 整段文本 |


##### 返回值：Array.<object>



[▲ 回顶部](#top)
### <span id="getHighlightTemplate">♥ getHighlightTemplate(classname: string) => string</span>
&emsp;&emsp;获取高亮分词模板

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |

| keyword | string/Regexp |  | 关键字 |
| fulltext | string |  | 整段文本 |
| [tag] | string | span | 高亮文本标签 |
| [classname] | string | highlight | 高亮文本标签类名 |


##### 返回值：string



[▲ 回顶部](#top)
### <span id="getHighlight">♥ getHighlight(classname: string) => string</span>
&emsp;&emsp;获取高亮分词具有tag参数，则返回该参数包裹的字符串否则返回数组对象

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |

| keyword | string/Regexp |  | 关键字 |
| fulltext | string |  | 整段文本 |
| [tag] | string |  | 高亮文本标签 |
| [classname] | string |  | 高亮文本标签类名 |


##### 返回值：string



[▲ 回顶部](#top)