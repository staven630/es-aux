# es-aux
&emsp;&emsp;JavaScript开发辅助函数库。

# 函数
<a id="getHighlightList"></a>
## getHighlightList(keyword, fulltext)
&emsp;&emsp;获取高亮分词列表


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| keyword | <code>string</code> | 关键字 |
| fulltext | <code>string</code> | 整段文本 |

----
<a id="getHighlightTemplate"></a>
## getHighlightTemplate(keyword, fulltext, tag, classname)
&emsp;&emsp;获取高亮分词模板


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| keyword | <code>string</code> | <code>Regexp</code> | 关键字 |
| fulltext | <code>string</code> | 整段文本 |
| tag | <code>string</code> | 高亮文本标签 |
| classname | <code>string</code> | 高亮文本标签类名 |

----
<a id="getHighlight"></a>
## getHighlight(keyword, fulltext, tag, classname)
&emsp;&emsp;获取高亮分词具有tag参数，则返回该参数包裹的字符串否则返回数组对象


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| keyword | <code>string</code> | <code>regexp</code> | 关键字 |
| fulltext | <code>string</code> | 整段文本 |
| tag | <code>string</code> | 高亮文本标签 |
| classname | <code>string</code> | 高亮文本标签类名 |

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
<a id="randomString"></a>
## randomString(len) ⇒ <code>string</code>
&emsp;&emsp;随机生成长度为len的字符串


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| len | <code>number</code> | 生成字符串的长度 |

----
