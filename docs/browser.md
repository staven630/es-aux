# 浏览器相关

<span id="top">目录</span>
* [ hasClass: 是否具有 className](#hasClass)
* [ addClass: 添加 className](#addClass)
* [ removeClass: 删除 className](#removeClass)
* [ toggleClass: 切换 className](#toggleClass)
* [ getUrlParam: 获取链接中键相应的值](#getUrlParam)
* [ getUrlObj: 返回链接中所有键值对象](#getUrlObj)
* [ addUrlParam: 向链接中添加键值对](#addUrlParam)
* [ modifyUrlParam: 修改链接中键对应的值](#modifyUrlParam)
* [ isIE: 判断是否是IE浏览器](#isIE)
* [ isIE11: 判断是否是IE11](#isIE11)
* [ isEdge: 判断是否是Edge](#isEdge)
* [ getIEVersion: 获取IE浏览器版本](#getIEVersion)
* [ isAndroid: 判断是否是Android](#isAndroid)
* [ isIOS: 判断是否是IOS](#isIOS)
* [ isMobile: 判断是否是移动端](#isMobile)
* [ isPC: 判断是否是PC](#isPC)
* [ isWX: 判断是否是微信浏览器](#isWX)
* [ getEvent: 获取事件源](#getEvent)
* [ getEventTarget: 获取事件对象](#getEventTarget)
* [ addHandler: 添加事件](#addHandler)
* [ removeHandler: 移除事件](#removeHandler)
* [ preventDefault: 阻止默认事件](#preventDefault)
* [ stopPropagation: 阻止事件冒泡](#stopPropagation)
* [ getPageX: 获取当前位置的X轴坐标](#getPageX)
* [ getPageY: 获取当前位置的Y轴坐标](#getPageY)
* [ getScrollTop: 获取页面滚动高度](#getScrollTop)


### <span id="hasClass">♥ hasClass(cls: string)</span>

&emsp;&emsp;是否具有 className

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| el | HTMLElement |  | 元素 |
| cls | string |  | 类名 |





[▲ 回顶部](#top)
---

### <span id="addClass">♥ addClass(cls: string)</span>

&emsp;&emsp;添加 className

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| el | HTMLElement |  | 元素 |
| cls | string |  | 类名 |





[▲ 回顶部](#top)
---

### <span id="removeClass">♥ removeClass(cls: string)</span>

&emsp;&emsp;删除 className

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| el | HTMLElement |  | 元素 |
| cls | string |  | 类名 |





[▲ 回顶部](#top)
---

### <span id="toggleClass">♥ toggleClass(cls: string)</span>

&emsp;&emsp;切换 className

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| el | HTMLElement |  | 元素 |
| cls | string |  | 类名 |





[▲ 回顶部](#top)
---

### <span id="getUrlParam">♥ getUrlParam(name: string) => string</span>

&emsp;&emsp;获取链接中键相应的值

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| name | string |  | 键名 |


##### 返回值：string



[▲ 回顶部](#top)
---

### <span id="getUrlObj">♥ getUrlObj() => Object</span>

&emsp;&emsp;返回链接中所有键值对象




##### 返回值：Object



[▲ 回顶部](#top)
---

### <span id="addUrlParam">♥ addUrlParam(value: any) => string</span>

&emsp;&emsp;向链接中添加键值对

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| url | string |  | 链接 |
| name | string |  | 键 |
| value | any |  | 值 |


##### 返回值：string



[▲ 回顶部](#top)
---

### <span id="modifyUrlParam">♥ modifyUrlParam(value: any) => string</span>

&emsp;&emsp;修改链接中键对应的值

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| url | string |  | 链接 |
| name | string |  | 键 |
| value | any |  | 值 |


##### 返回值：string



[▲ 回顶部](#top)
---

### <span id="isIE">♥ isIE() => Boolean</span>

&emsp;&emsp;判断是否是IE浏览器




##### 返回值：Boolean



[▲ 回顶部](#top)
---

### <span id="isIE11">♥ isIE11() => Boolean</span>

&emsp;&emsp;判断是否是IE11




##### 返回值：Boolean



[▲ 回顶部](#top)
---

### <span id="isEdge">♥ isEdge() => Boolean</span>

&emsp;&emsp;判断是否是Edge




##### 返回值：Boolean



[▲ 回顶部](#top)
---

### <span id="getIEVersion">♥ getIEVersion()</span>

&emsp;&emsp;获取IE浏览器版本







[▲ 回顶部](#top)
---

### <span id="isAndroid">♥ isAndroid() => Boolean</span>

&emsp;&emsp;判断是否是Android




##### 返回值：Boolean



[▲ 回顶部](#top)
---

### <span id="isIOS">♥ isIOS() => Boolean</span>

&emsp;&emsp;判断是否是IOS




##### 返回值：Boolean



[▲ 回顶部](#top)
---

### <span id="isMobile">♥ isMobile() => Boolean</span>

&emsp;&emsp;判断是否是移动端




##### 返回值：Boolean



[▲ 回顶部](#top)
---

### <span id="isPC">♥ isPC() => Boolean</span>

&emsp;&emsp;判断是否是PC




##### 返回值：Boolean



[▲ 回顶部](#top)
---

### <span id="isWX">♥ isWX() => Boolean</span>

&emsp;&emsp;判断是否是微信浏览器




##### 返回值：Boolean



[▲ 回顶部](#top)
---

### <span id="getEvent">♥ getEvent(event: Event)</span>

&emsp;&emsp;获取事件源

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| event | Event |  | 事件源 |





[▲ 回顶部](#top)
---

### <span id="getEventTarget">♥ getEventTarget(event: Event)</span>

&emsp;&emsp;获取事件对象

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| event | Event |  | 事件 |





[▲ 回顶部](#top)
---

### <span id="addHandler">♥ addHandler(handler: EventListener)</span>

&emsp;&emsp;添加事件

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| element | Element |  | 元素 |
| type | String |  | 事件类型 |
| handler | EventListener |  | 事件 |





[▲ 回顶部](#top)
---

### <span id="removeHandler">♥ removeHandler(handler: EventListener)</span>

&emsp;&emsp;移除事件

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| element | Element |  | 元素 |
| type | String |  | 事件类型 |
| handler | EventListener |  | 事件 |





[▲ 回顶部](#top)
---

### <span id="preventDefault">♥ preventDefault()</span>

&emsp;&emsp;阻止默认事件







[▲ 回顶部](#top)
---

### <span id="stopPropagation">♥ stopPropagation()</span>

&emsp;&emsp;阻止事件冒泡







[▲ 回顶部](#top)
---

### <span id="getPageX">♥ getPageX(event: Event)</span>

&emsp;&emsp;获取当前位置的X轴坐标

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| event | Event |  | 事件源 |





[▲ 回顶部](#top)
---

### <span id="getPageY">♥ getPageY(event: Event)</span>

&emsp;&emsp;获取当前位置的Y轴坐标

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| event | Event |  | 事件源 |





[▲ 回顶部](#top)
---

### <span id="getScrollTop">♥ getScrollTop() => Number</span>

&emsp;&emsp;获取页面滚动高度




##### 返回值：Number



[▲ 回顶部](#top)
---
