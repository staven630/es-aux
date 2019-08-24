/** @module 时间-date */
declare type TDate = number | string | Date;
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
export declare function getDate(date?: TDate): Date;
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
export declare function prefixDate(time: number | string): string;
interface FormatDate {
    replace(searchValue: RegExp, replacer: (substring: string) => string): string;
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
export declare function formatDate(date?: TDate, format?: FormatDate): string;
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
export declare function getNextDate(day: number, currDate?: TDate, format?: string): string | Date;
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
export declare function getMonthDays(currDate?: TDate): number;
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
export declare function getPrevMonth(currTime?: TDate, format?: string): string | Date;
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
export declare function getNextMonth(currTime?: TDate, format?: string): string | Date;
declare type DateOptions = {
    [key: string]: string;
};
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
export declare function getCountDown(nextDate: TDate, options?: DateOptions): string;
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
export declare function getAgoDate(currDate?: TDate, format?: string, options?: DateOptions): string;
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
export declare function getMonthLastDay(currDate?: TDate, format?: string): string | Date;
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
export declare function getWeekFirstDay(currDate?: TDate, format?: string): string | Date;
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
export declare function getWeekLastDay(currDate?: TDate, format?: string): string | Date;
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
export declare function getFirstMonday(currDate?: TDate, format?: string): string | Date;
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
export declare function getLastSunday(currDate?: TDate, format?: string): string | Date;
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
export declare function getFirstSunday(currDate?: TDate, format?: string): string | Date;
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
export declare function getLastSaturday(currDate?: TDate, format?: string): string | Date;
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
export declare function getWeekIndex(currDate?: string): number;
export {};
