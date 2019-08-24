/** @module 时间-date */
/**
 * 返回格林威治时间
 *
 * @example
 * ```js
 * getDate()
 * // or
 * getDate('2019-08-24')
 * // or
 * getDate(1566629188014)
 * // or
 * getDate(date)  // date => Sat Aug 24 2019 14:47:16 GMT+0800 (中国标准时间)
 * ```
 *
 * @param {number/string/Date/undefined} [date=''] - 数字、字符串、格林威治时间、空值
 * @returns {Date}
 */
export function getDate(date) {
    if (date === void 0) { date = ''; }
    if (!date)
        return new Date();
    if (date instanceof Date)
        return date;
    if (typeof date === 'number')
        return new Date(date);
    if (typeof date === 'string') {
        date = date.replace(/-/gi, '/');
        return new Date(date);
    }
    return new Date(date);
}
/**
 * 前缀加0
 * @example
 * ```js
 * prefixDate(7) // 07
 * // or
 * prefixDate('7') // 07
 * ```
 *
 * @param {number/string} time - 需要加前缀的数字或字符串
 * @returns {string}
 */
export function prefixDate(time) {
    return time < 10 ? "0" + time : "" + time;
}
/**
 * 自定义时间转换
 *
 * @example
 * ```js
 * formatDate() // 2019-08-24 16:08
 * // or
 * formatDate(1566629188014, 'YYYY-MM') // 2019-08
 * // or
 * formatDate(new Date(), 'week') // 六
 * ```
 *
 *
 * @param {number/string/Date/undefined} [date=''] - 数字、字符串、格林威治时间、空值
 * @param {string} [format='YYYY-MM-DD HH:mm'] - 转换格式（由YYYY、YY、MM、DD、HH、hh、mm、SS、ss、week组合而成）
 * @returns {string}
 */
export function formatDate(date, format) {
    if (date === void 0) { date = ''; }
    if (format === void 0) { format = 'YYYY-MM-DD HH:mm'; }
    var dateTime = getDate(date);
    var week = ['日', '一', '二', '三', '四', '五', '六'];
    return format.replace(/YYYY|YY|MM|DD|HH|hh|mm|SS|ss|week/g, function (key) {
        switch (key) {
            case 'YYYY':
                return "" + dateTime.getFullYear();
            case 'YY':
                return (dateTime.getFullYear() + '').slice(2);
            case 'MM':
                return prefixDate(dateTime.getMonth() + 1);
            case 'DD':
                return prefixDate(dateTime.getDate());
            case 'HH':
            case 'hh':
                return prefixDate(dateTime.getHours());
            case 'mm':
                return prefixDate(dateTime.getMinutes());
            case 'SS':
            case 'ss':
                return prefixDate(dateTime.getSeconds());
            case 'week':
                return week[dateTime.getDay()];
            default:
                throw new Error('format error');
        }
    });
}
/**
 * 获取N天后的日期
 *
 * @example
 * ```js
 * getNextDate(3) // 2019-08-27T08:18:53.212Z
 * // or
 * getNextDate(2, 1566629188014, 'YYYY-MM--DD') // 2019-08--26
 * ```
 *
 * @param {number} day - 天数
 * @param {number/string/Date/undefined} [currDate=''] - 参照初始时间
 * @param {string} [format] - 转换格式，有format返回string
 * @returns {string/Date}
 */
export function getNextDate(day, currDate, format) {
    if (currDate === void 0) { currDate = ''; }
    var next = getDate(currDate);
    next.setDate(next.getDate() + day);
    return format ? formatDate(next, format) : next;
}
/**
 * 获取某个月有多少天
 *
 * @example
 * ```js
 * getMonthDays() // 31
 * // or
 * getMonthDays(1566629188014) // 31
 * ```
 *
 * @param {number/string/Date/undefined} [currDate=''] - 参照初始时间
 * @returns {number}
 */
export function getMonthDays(currDate) {
    if (currDate === void 0) { currDate = ''; }
    var dd = getDate(currDate);
    dd.setMonth(dd.getMonth() + 1, 0);
    return dd.getDate();
}
/**
 * 获取上个月初时间
 * @example
 * ```js
 * getPrevMonth() // 2019-07-01T08:32:36.800Z
 * // or
 * getPrevMonth('', 'YYYY-MM-DD') // 2019-07-01
 * // or
 * getPrevMonth('2019-01-19', 'YYYY-MM-DD') // 2018-12-01
 * ```
 *
 * @param {number/string/Date/undefined} [currDate=''] - 参照初始时间
 * @param {string} [format] - 转换格式，有format返回string
 * @returns {string/Date}
 */
export function getPrevMonth(currTime, format) {
    if (currTime === void 0) { currTime = ''; }
    var prev = getDate(currTime);
    prev.setDate(0);
    prev.setDate(1);
    return format ? formatDate(prev, format) : prev;
}
/**
 * 获取下个月初时间
 * @example
 * ```js
 * getNextMonth() // 2019-09-01T08:41:32.891Z
 * // or
 * getNextMonth('', 'YYYY-MM-DD') // 2019-09-01
 * // or
 * getNextMonth('2019-01-19', 'YYYY-MM-DD') // 2019-02-01
 * ```
 *
 * @param {number/string/Date/undefined} [currDate=''] - 参照初始时间
 * @param {string} [format] - 转换格式，有format返回string
 * @returns {string/Date}
 */
export function getNextMonth(currTime, format) {
    if (currTime === void 0) { currTime = ''; }
    var prev = getDate(currTime);
    prev.setDate(0);
    prev.setDate(1);
    return format ? formatDate(prev, format) : prev;
}
/**
 * 获取倒计时时间
 * @example
 * ```js
 * getCountDown(1566662400000) // 4小时31分钟30秒
 * // or
 * getCountDown('2019-08-25') // 4小时31分钟30秒
 * ```
 *
 * @param {number/string/Date/undefined} nextDate - 到期时间
 * @param {object} options - 参数配置
 * @param {string} options.day - 天数配置语
 * @param {string} options.hour - 小时配置语
 * @param {string} options.minute - 分钟配置语
 * @param {string} options.second - 秒配置语
 * @param {string} options.end - 刚到时间配置语
 * @param {string} options.over - 已过期配置语
 * @returns {string}
 */
export function getCountDown(nextDate, options) {
    if (options === void 0) { options = {
        day: '天',
        hour: '小时',
        minute: '分钟',
        second: '秒',
        end: '时间到',
        over: '已过期'
    }; }
    var distance = getDate(nextDate).getTime() - Date.now();
    if (distance <= 0 && distance > -1000)
        return options.end;
    if (distance <= -1000)
        return options.over;
    var days = Math.floor(distance / 86400000);
    var hours = Math.floor((distance % 86400000) / 3600000);
    var minutes = Math.floor((distance % 3600000) / 60000);
    var seconds = Math.floor((distance % 60000) / 1000);
    if (days > 0) {
        return "" + days + options.day + hours + options.hour + minutes + options.minute + seconds + options.second;
    }
    else if (hours > 0) {
        return "" + hours + options.hour + minutes + options.minute + seconds + options.second;
    }
    else if (minutes > 0) {
        return "" + minutes + options.minute + seconds + options.second;
    }
    else {
        return "" + seconds + options.second;
    }
}
/**
 * 获取N天前、N小时、N分钟前
 * @example
 * ```js
 * getAgoDate(1566662400000)  // 刚刚
 * // or
 * getAgoDate('2019-08-24', 'YYYY-MM-DD')   // 23小时前
 * ```
 *
 * @param {number/string/Date/undefined} [currDate=''] - 参照时间
 * @param {string} [format='YYYY-MM-DD'] - 转换格式，有format返回string
 * @param {object} options - 参数配置
 * @param {string} options.day - 天数配置语
 * @param {string} options.hour - 小时配置语
 * @param {string} options.minute - 分钟配置语
 * @param {string} options.second - 秒配置语
 * @param {string} options.just - 刚刚配置语
 * @returns {number}
 */
export function getAgoDate(currDate, format, options) {
    if (currDate === void 0) { currDate = ''; }
    if (format === void 0) { format = 'YYYY-MM-DD'; }
    if (options === void 0) { options = {
        day: '天前',
        hour: '小时前',
        minute: '分钟前',
        second: '秒前',
        just: '刚刚'
    }; }
    var getTodayUnix = function () {
        var date = getDate();
        date.setHours(0, 0, 0, 0);
        return date.getTime();
    };
    var now = getDate().getTime();
    var today = getTodayUnix();
    var timestamp = getDate(currDate).getTime();
    var timer = (now - timestamp) / 1000;
    var tip = '';
    if (timer <= 0 || Math.floor(timer / 60) <= 0) {
        tip = options.just;
    }
    else if (timer < 3600) {
        tip = Math.floor(timer / 60) + ("" + options.minute);
    }
    else if (timer >= 3600 && timestamp - today >= 0) {
        tip = Math.floor(timer / 3600) + ("" + options.hour);
    }
    else if (timer / 86400 <= 7) {
        tip = Math.ceil(timer / 86400) + ("" + options.day);
    }
    else {
        tip = formatDate(timestamp, format);
    }
    return tip;
}
/**
 * 获取某月最后一天
 *
 * @example
 * ```js
 * getMonthLastDay(1566662400000) // 2019-08-30T16:00:00.000Z
 * //or
 * getMonthLastDay('2019-08-25') // 2019-08-30T16:00:00.000Z
 * ```
 *
 * @param {number/string/Date/undefined} [currDate=''] - 参照初始时间
 * @param {string} [format] - 转换格式，有format返回string
 * @returns {string/Date}
 */
export function getMonthLastDay(currDate, format) {
    if (currDate === void 0) { currDate = ''; }
    var next = getDate(currDate);
    next.setMonth(next.getMonth() + 1, 0);
    return format ? formatDate(next, format) : next;
}
/**
 * 获取某周的第一天，以周日计算
 *
 * @example
 * ```js
 * getWeekFirstDay(1566662400000) // 2019-08-24T16:00:00.000Z
 * // or
 * getWeekFirstDay('2019-08-25') // 2019-08-24T16:00:00.000Z
 * ```
 *
 * @param {number/string/Date/undefined} [currDate=''] - 参照初始时间
 * @param {string} [format] - 转换格式，有format返回string
 * @returns {string/Date}
 */
export function getWeekFirstDay(currDate, format) {
    if (currDate === void 0) { currDate = ''; }
    var first = getDate(currDate);
    first.setDate(first.getDate() - first.getDay());
    return format ? formatDate(first, format) : first;
}
/**
 * 获取某周的最后一天，以周六计算
 *
 * @example
 * ```js
 * getWeekFirstDay(1566662400000)  // Sun Aug 25 2019 00:00:00 GMT+0800 (中国标准时间)
 * // or
 * getWeekFirstDay('2019-08-24', 'YYYY-MM-DD')   // 2019-08-18
 * ```
 *
 * @param {number/string/Date/undefined} [currDate=''] - 参照初始时间
 * @param {string} [format] - 转换格式，有format返回string
 * @returns {string/Date}
 */
export function getWeekLastDay(currDate, format) {
    if (currDate === void 0) { currDate = ''; }
    var last = getDate(currDate);
    last.setDate(6 + last.getDate() - last.getDay());
    return format ? formatDate(last, format) : last;
}
/**
 * 获取某月第一个周一
 * @example
 * ```js
 * getFirstMonday(1566662400000)  // Mon Jul 29 2019 00:00:00 GMT+0800 (中国标准时间)
 * // or
 * getFirstMonday('2019-08-24', 'YYYY-MM-DD')   // 2019-07-29
 * ```
 *
 * @param {number/string/Date/undefined} [currDate=''] - 参照初始时间
 * @param {string} [format] - 转换格式，有format返回string
 * @returns {string/Date}
 */
export function getFirstMonday(currDate, format) {
    if (currDate === void 0) { currDate = ''; }
    var date = getDate(currDate);
    date.setDate(1);
    var firstIndex = date.getDay();
    firstIndex = firstIndex == 0 ? -5 : 2 - firstIndex;
    date.setDate(firstIndex);
    date.setHours(0, 0, 0, 0);
    return format ? formatDate(date, format) : date;
}
/**
 * 获取某月最后一个周日
 * @example
 * ```js
 * getLastSunday(1566662400000)  // Sun Sep 01 2019 00:00:00 GMT+0800 (中国标准时间)
 * // or
 * getLastSunday('2019-08-24', 'YYYY-MM-DD')   // 2019-09-01
 * ```
 *
 * @param {number/string/Date/undefined} [currDate=''] - 参照初始时间
 * @param {string} [format] - 转换格式，有format返回string
 * @returns {string/Date}
 */
export function getLastSunday(currDate, format) {
    if (currDate === void 0) { currDate = ''; }
    var last = getDate(currDate);
    last.setMonth(last.getMonth() + 1, 0);
    var lastIndex = last.getDay();
    lastIndex = lastIndex == 0 ? 0 : 7 - lastIndex;
    last.setDate(last.getDate() + lastIndex);
    last.setHours(0, 0, 0, 0);
    return format ? formatDate(last, format) : last;
}
/**
 * 获取某月第一个周日
 * @example
 * ```js
 * getFirstSunday(1566662400000)  // Sun Jul 28 2019 00:00:00 GMT+0800 (中国标准时间)
 * // or
 * getFirstSunday('2019-08-24', 'YYYY-MM-DD')   // 2019-07-28
 * ```
 *
 * @param {number/string/Date/undefined} [currDate=''] - 参照初始时间
 * @param {string} [format] - 转换格式，有format返回string
 * @returns {string/Date}
 */
export function getFirstSunday(currDate, format) {
    if (currDate === void 0) { currDate = ''; }
    var last = getDate(currDate);
    last.setMonth(last.getMonth() + 1, 0);
    var lastIndex = last.getDay();
    lastIndex = lastIndex == 0 ? 0 : 7 - lastIndex;
    last.setDate(last.getDate() + lastIndex);
    last.setHours(0, 0, 0, 0);
    return format ? formatDate(last, format) : last;
}
/**
 * 获取某月最后一个周六
 * @example
 * ```js
 * getLastSaturday(1566662400000)  // Sat Aug 31 2019 00:00:00 GMT+0800 (中国标准时间)
 * // or
 * getLastSaturday('2019-08-24', 'YYYY-MM-DD')   // 2019-08-31
 * ```
 *
 * @param {number/string/Date/undefined} [currDate=''] - 参照初始时间
 * @param {string} [format] - 转换格式，有format返回string
 * @returns {string/Date}
 */
export function getLastSaturday(currDate, format) {
    if (currDate === void 0) { currDate = ''; }
    var date = getDate(currDate);
    date.setMonth(date.getMonth() + 1, 0);
    date.setDate(6 + date.getDate() - date.getDay());
    date.setHours(0, 0, 0, 0);
    return format ? formatDate(date, format) : date;
}
/**
 * 获取日期今年第几周，以周一开始算
 * @example
 * ```js
 * getWeekIndex(1566662400000)  // 35
 * // or
 * getWeekIndex('2019-08-24', 'YYYY-MM-DD')   // 35
 * ```
 *
 * @param {number/string/Date/undefined} [currDate=''] - 参照初始时间
 * @returns {number}
 */
export function getWeekIndex(currDate) {
    if (currDate === void 0) { currDate = ''; }
    var now = getDate(currDate).getTime();
    var firstDay = getDate(currDate);
    firstDay.setMonth(0);
    firstDay.setDate(1);
    var num = firstDay.getDay();
    num = 7 - num;
    var rq = now - firstDay.getTime();
    return Math.ceil((Math.ceil(rq / (24 * 60 * 60 * 1000)) + num) / 7);
}
