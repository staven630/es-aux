/**
 * localStorage获取值
 *
 * @param {string} key - 存储的键
 * @param {number} [day] - 有效天数
 */
export function getStorage(key, day) {
    var dateStr = localStorage.getItem(key);
    if (!dateStr)
        return '';
    if (!day)
        return dateStr;
    var obj = JSON.parse(dateStr);
    return new Date().getTime() - Number(obj.date) > 86400000 * day ? '' : obj.value;
}
/**
 * localStorage设置值
 *
 * @param {string} key - 存储的键
 * @param {any} value - 存储的值
 * @param {number} [day] - 有效天数
 */
export function setStorage(key, value, day) {
    if (!day) {
        localStorage.setItem(key, value);
    }
    else {
        var params = {
            date: new Date().getTime(),
            value: value
        };
        localStorage.setItem(key, JSON.stringify(params));
    }
}
/**
 * localStorage移除键为key的存储
 *
 * @param {string} key - 存储的键
 */
export function removeStorage(key) {
    localStorage.removeItem(key);
}
/**
 * localStorage清空存储
 */
export function clearStorage() {
    localStorage.clear();
}
