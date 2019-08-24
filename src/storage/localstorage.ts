/** @module 存储相关-storage */
/**
 * localStorage获取值
 *
 * @param {string} key - 存储的键
 * @param {number} [day] - 有效天数
 */
export function getStorage(key: string, day?: number) {
  const dateStr = localStorage.getItem(key)
  if (!dateStr) return ''
  if (!day) return dateStr
  const obj = JSON.parse(dateStr)
  return new Date().getTime() - Number(obj.date) > 86400000 * day ? '' : obj.value
}

/**
 * localStorage设置值
 *
 * @param {string} key - 存储的键
 * @param {any} value - 存储的值
 * @param {number} [day] - 有效天数
 */
export function setStorage(key: string, value: any, day?: number): void {
  if (!day) {
    localStorage.setItem(key, value)
  } else {
    const params = {
      date: new Date().getTime(),
      value
    }
    localStorage.setItem(key, JSON.stringify(params))
  }
}

/**
 * localStorage移除键为key的存储
 *
 * @param {string} key - 存储的键
 */
export function removeStorage(key: string) {
  localStorage.removeItem(key)
}

/**
 * localStorage清空存储
 */
export function clearStorage() {
  localStorage.clear()
}
