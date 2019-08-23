# es-aux

&emsp;&emsp;JavaScript 开发辅助函数库。

# 安装

```bash
npm i -S es - aux
```

# 使用

```js
const Aux = require('es-aux')
// or
const {camelToKebab} = require('es-aux')

import * as Aux from 'es-aux'
// or
import {camelToKebab} from 'es-aux'
```

<a id="sortJSON"></a>

## sortJSON(array, key, [flag]) ⇒ <code>string</code>

&emsp;&emsp;根据对象数组的某字段进项排序

**Returns**: <code>string</code> - - 排序后的数组

| 参数   | 类型                           | 默认值             | 描述                                          |
| ------ | ------------------------------ | ------------------ | --------------------------------------------- |
| array  | <code>Array.&lt;any&gt;</code> |                    | 需要排序的数组，其中每一项是对象              |
| key    | <code>string</code>            |                    | 排序的字段                                    |
| [flag] | <code>boolean</code>           | <code>false</code> | 是否需要倒序， 默认 false 正序，true 则为倒序 |

---
