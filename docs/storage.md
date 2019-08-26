# 存储相关

<span id="top">目录</span>
* [ getStorage: localStorage获取值](#getStorage)
* [ setStorage: localStorage设置值](#setStorage)
* [ removeStorage: localStorage移除键为key的存储](#removeStorage)
* [ clearStorage: localStorage清空存储](#clearStorage)
* [ setCookie: 设置Cookie](#setCookie)
* [ getCookie: 获取Cookie](#getCookie)
* [ removeCookie: 清除Cookie](#removeCookie)


### <span id="getStorage">♥ getStorage(day: number)</span>

&emsp;&emsp;localStorage获取值

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| key | string |  | 存储的键 |
| [day] | number |  | 有效天数 |




[▲ 回顶部](#top)
### <span id="setStorage">♥ setStorage(day: number)</span>

&emsp;&emsp;localStorage设置值

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| key | string |  | 存储的键 |
| value | any |  | 存储的值 |
| [day] | number |  | 有效天数 |




[▲ 回顶部](#top)
### <span id="removeStorage">♥ removeStorage(key: string)</span>

&emsp;&emsp;localStorage移除键为key的存储

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| key | string |  | 存储的键 |




[▲ 回顶部](#top)
### <span id="clearStorage">♥ clearStorage()</span>

&emsp;&emsp;localStorage清空存储






[▲ 回顶部](#top)
### <span id="setCookie">♥ setCookie(domain: string)</span>

&emsp;&emsp;设置Cookie

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| key | string |  | 存储的键 |
| value | any |  | 存储的值 |
| [expiredays] | number |  | 有效天数 |
| [domain] | string |  | 共享Cookie域名 |




[▲ 回顶部](#top)
### <span id="getCookie">♥ getCookie(key: Any)</span>

&emsp;&emsp;获取Cookie

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| key | Any |  |  |




[▲ 回顶部](#top)
### <span id="removeCookie">♥ removeCookie(domain: string)</span>

&emsp;&emsp;清除Cookie

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| key | string |  | 存储的键 |
| [domain] | string |  | 共享Cookie域名 |




[▲ 回顶部](#top)