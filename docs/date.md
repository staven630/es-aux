# 时间

<span id="top">目录</span>
* [ getDate: 返回格林威治时间](#getDate)
* [ prefixDate: 前缀加0](#prefixDate)
* [ formatDate: 自定义时间转换](#formatDate)
* [ getNextDate: 获取N天后的日期](#getNextDate)
* [ getMonthDays: 获取某个月有多少天](#getMonthDays)
* [ getPrevMonth: 获取上个月初时间](#getPrevMonth)
* [ getNextMonth: 获取下个月初时间](#getNextMonth)
* [ getCountDown: 获取倒计时时间](#getCountDown)
* [ getAgoDate: 获取N天前、N小时、N分钟前](#getAgoDate)
* [ getMonthLastDay: 获取某月最后一天](#getMonthLastDay)
* [ getWeekFirstDay: 获取某周的第一天，以周日计算](#getWeekFirstDay)
* [ getWeekLastDay: 获取某周的最后一天，以周六计算](#getWeekLastDay)
* [ getFirstMonday: 获取某月第一个周一](#getFirstMonday)
* [ getLastSunday: 获取某月最后一个周日](#getLastSunday)
* [ getFirstSunday: 获取某月第一个周日](#getFirstSunday)
* [ getLastSaturday: 获取某月最后一个周六](#getLastSaturday)
* [ getWeekIndex: 获取日期今年第几周，以周一开始算](#getWeekIndex)


### <span id="getDate">♥ getDate(date: number|string|Date|undefined) => Date</span>
  
&emsp;&emsp;返回格林威治时间

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| [date] | number/string/Date/undefined | '' | 数字、字符串、格林威治时间、空值 |


##### 返回值：Date

##### 示例：

```jsgetDate()// orgetDate('2019-08-24')// orgetDate(1566629188014)// orgetDate(date)  // date => Sat Aug 24 2019 14:47:16 GMT+0800 (中国标准时间)```
[▲ 回顶部](#top)
### <span id="prefixDate">♥ prefixDate(time: number|string) => string</span>
  
&emsp;&emsp;前缀加0

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| time | number/string |  | 需要加前缀的数字或字符串 |


##### 返回值：string

##### 示例：

```jsprefixDate(7) // 07// orprefixDate('7') // 07```
[▲ 回顶部](#top)
### <span id="formatDate">♥ formatDate(format: string) => string</span>
  
&emsp;&emsp;自定义时间转换

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| [date] | number/string/Date/undefined | '' | 数字、字符串、格林威治时间、空值 |
| [format] | string | 'YYYY-MM-DD HH:mm' | 转换格式（由YYYY、YY、MM、DD、HH、hh、mm、SS、ss、week组合而成） |


##### 返回值：string

##### 示例：

```jsformatDate() // 2019-08-24 16:08// orformatDate(1566629188014, 'YYYY-MM') // 2019-08// orformatDate(new Date(), 'week') // 六```
[▲ 回顶部](#top)
### <span id="getNextDate">♥ getNextDate(format: string) => string/Date</span>
  
&emsp;&emsp;获取N天后的日期

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| day | number |  | 天数 |
| [currDate] | number/string/Date/undefined | '' | 参照初始时间 |
| [format] | string |  | 转换格式，有format返回string |


##### 返回值：string|Date

##### 示例：

```jsgetNextDate(3) // 2019-08-27T08:18:53.212Z// orgetNextDate(2, 1566629188014, 'YYYY-MM--DD') // 2019-08--26```
[▲ 回顶部](#top)
### <span id="getMonthDays">♥ getMonthDays(currDate: number|string|Date|undefined) => number</span>
  
&emsp;&emsp;获取某个月有多少天

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| [currDate] | number/string/Date/undefined | '' | 参照初始时间 |


##### 返回值：number

##### 示例：

```jsgetMonthDays() // 31// orgetMonthDays(1566629188014) // 31```
[▲ 回顶部](#top)
### <span id="getPrevMonth">♥ getPrevMonth(format: string) => string/Date</span>
  
&emsp;&emsp;获取上个月初时间

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| [currDate] | number/string/Date/undefined | '' | 参照初始时间 |
| [format] | string |  | 转换格式，有format返回string |


##### 返回值：string|Date

##### 示例：

```jsgetPrevMonth() // 2019-07-01T08:32:36.800Z// orgetPrevMonth('', 'YYYY-MM-DD') // 2019-07-01// orgetPrevMonth('2019-01-19', 'YYYY-MM-DD') // 2018-12-01```
[▲ 回顶部](#top)
### <span id="getNextMonth">♥ getNextMonth(format: string) => string/Date</span>
  
&emsp;&emsp;获取下个月初时间

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| [currDate] | number/string/Date/undefined | '' | 参照初始时间 |
| [format] | string |  | 转换格式，有format返回string |


##### 返回值：string|Date

##### 示例：

```jsgetNextMonth() // 2019-09-01T08:41:32.891Z// orgetNextMonth('', 'YYYY-MM-DD') // 2019-09-01// orgetNextMonth('2019-01-19', 'YYYY-MM-DD') // 2019-02-01```
[▲ 回顶部](#top)
### <span id="getCountDown">♥ getCountDown(options.over: string) => string</span>
  
&emsp;&emsp;获取倒计时时间

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| nextDate | number/string/Date/undefined |  | 到期时间 |
| options | object |  | 参数配置 |
| options.day | string |  | 天数配置语 |
| options.hour | string |  | 小时配置语 |
| options.minute | string |  | 分钟配置语 |
| options.second | string |  | 秒配置语 |
| options.end | string |  | 刚到时间配置语 |
| options.over | string |  | 已过期配置语 |


##### 返回值：string

##### 示例：

```jsgetCountDown(1566662400000) // 4小时31分钟30秒// orgetCountDown('2019-08-25') // 4小时31分钟30秒```
[▲ 回顶部](#top)
### <span id="getAgoDate">♥ getAgoDate(options.just: string) => number</span>
  
&emsp;&emsp;获取N天前、N小时、N分钟前

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| [currDate] | number/string/Date/undefined | '' | 参照时间 |
| [format] | string | 'YYYY-MM-DD' | 转换格式，有format返回string |
| options | object |  | 参数配置 |
| options.day | string |  | 天数配置语 |
| options.hour | string |  | 小时配置语 |
| options.minute | string |  | 分钟配置语 |
| options.second | string |  | 秒配置语 |
| options.just | string |  | 刚刚配置语 |


##### 返回值：number

##### 示例：

```jsgetAgoDate(1566662400000)  // 刚刚// orgetAgoDate('2019-08-24', 'YYYY-MM-DD')   // 23小时前```
[▲ 回顶部](#top)
### <span id="getMonthLastDay">♥ getMonthLastDay(format: string) => string/Date</span>
  
&emsp;&emsp;获取某月最后一天

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| [currDate] | number/string/Date/undefined | '' | 参照初始时间 |
| [format] | string |  | 转换格式，有format返回string |


##### 返回值：string|Date

##### 示例：

```jsgetMonthLastDay(1566662400000) // 2019-08-30T16:00:00.000Z//orgetMonthLastDay('2019-08-25') // 2019-08-30T16:00:00.000Z```
[▲ 回顶部](#top)
### <span id="getWeekFirstDay">♥ getWeekFirstDay(format: string) => string/Date</span>
  
&emsp;&emsp;获取某周的第一天，以周日计算

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| [currDate] | number/string/Date/undefined | '' | 参照初始时间 |
| [format] | string |  | 转换格式，有format返回string |


##### 返回值：string|Date

##### 示例：

```jsgetWeekFirstDay(1566662400000) // 2019-08-24T16:00:00.000Z// orgetWeekFirstDay('2019-08-25') // 2019-08-24T16:00:00.000Z```
[▲ 回顶部](#top)
### <span id="getWeekLastDay">♥ getWeekLastDay(format: string) => string/Date</span>
  
&emsp;&emsp;获取某周的最后一天，以周六计算

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| [currDate] | number/string/Date/undefined | '' | 参照初始时间 |
| [format] | string |  | 转换格式，有format返回string |


##### 返回值：string|Date

##### 示例：

```jsgetWeekFirstDay(1566662400000)  // Sun Aug 25 2019 00:00:00 GMT+0800 (中国标准时间)// orgetWeekFirstDay('2019-08-24', 'YYYY-MM-DD')   // 2019-08-18```
[▲ 回顶部](#top)
### <span id="getFirstMonday">♥ getFirstMonday(format: string) => string/Date</span>
  
&emsp;&emsp;获取某月第一个周一

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| [currDate] | number/string/Date/undefined | '' | 参照初始时间 |
| [format] | string |  | 转换格式，有format返回string |


##### 返回值：string|Date

##### 示例：

```jsgetFirstMonday(1566662400000)  // Mon Jul 29 2019 00:00:00 GMT+0800 (中国标准时间)// orgetFirstMonday('2019-08-24', 'YYYY-MM-DD')   // 2019-07-29```
[▲ 回顶部](#top)
### <span id="getLastSunday">♥ getLastSunday(format: string) => string/Date</span>
  
&emsp;&emsp;获取某月最后一个周日

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| [currDate] | number/string/Date/undefined | '' | 参照初始时间 |
| [format] | string |  | 转换格式，有format返回string |


##### 返回值：string|Date

##### 示例：

```jsgetLastSunday(1566662400000)  // Sun Sep 01 2019 00:00:00 GMT+0800 (中国标准时间)// orgetLastSunday('2019-08-24', 'YYYY-MM-DD')   // 2019-09-01```
[▲ 回顶部](#top)
### <span id="getFirstSunday">♥ getFirstSunday(format: string) => string/Date</span>
  
&emsp;&emsp;获取某月第一个周日

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| [currDate] | number/string/Date/undefined | '' | 参照初始时间 |
| [format] | string |  | 转换格式，有format返回string |


##### 返回值：string|Date

##### 示例：

```jsgetFirstSunday(1566662400000)  // Sun Jul 28 2019 00:00:00 GMT+0800 (中国标准时间)// orgetFirstSunday('2019-08-24', 'YYYY-MM-DD')   // 2019-07-28```
[▲ 回顶部](#top)
### <span id="getLastSaturday">♥ getLastSaturday(format: string) => string/Date</span>
  
&emsp;&emsp;获取某月最后一个周六

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| [currDate] | number/string/Date/undefined | '' | 参照初始时间 |
| [format] | string |  | 转换格式，有format返回string |


##### 返回值：string|Date

##### 示例：

```jsgetLastSaturday(1566662400000)  // Sat Aug 31 2019 00:00:00 GMT+0800 (中国标准时间)// orgetLastSaturday('2019-08-24', 'YYYY-MM-DD')   // 2019-08-31```
[▲ 回顶部](#top)
### <span id="getWeekIndex">♥ getWeekIndex(currDate: number|string|Date|undefined) => number</span>
  
&emsp;&emsp;获取日期今年第几周，以周一开始算

##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |
| [currDate] | number/string/Date/undefined | '' | 参照初始时间 |


##### 返回值：number

##### 示例：

```jsgetWeekIndex(1566662400000)  // 35// orgetWeekIndex('2019-08-24', 'YYYY-MM-DD')   // 35```
[▲ 回顶部](#top)