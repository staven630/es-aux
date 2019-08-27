# 函数相关

<span id="top">目录</span>
* [ memoize: 缓存函数调用结果](#memoize)
* [ debounce: 防抖函数](#debounce)
* [ throttle: 节流函数](#throttle)

### <span id="memoize">♥ memoize(fn: function)</span>

&emsp;&emsp;缓存函数调用结果
##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| fn | function |  | 函数 |



###### [▲ 回顶部](#top)
---
### <span id="debounce">♥ debounce(delay: number) => function</span>

&emsp;&emsp;防抖函数
##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| fn | function |  | 需要防抖处理的函数 |
| delay | number |  | 防抖间隔 |

##### 返回值：function


###### [▲ 回顶部](#top)
---
### <span id="throttle">♥ throttle(threshold: number) => function</span>

&emsp;&emsp;节流函数
##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| fn | function |  | 需要节流处理的函数 |
| threshold | number |  | 节流阀值 |

##### 返回值：function


###### [▲ 回顶部](#top)
---
