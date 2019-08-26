/** @module 浏览器相关-browser */
/**
 *  获取事件源
 *
 * @param {Event} event - 事件源
 */
export declare function getEvent(event: Event): Event | null;
/**
 * 获取事件对象
 *
 * @param {Event} event - 事件
 */
export declare function getEventTarget(event: Event): EventTarget | null;
/**
 * 添加事件
 *
 * @param {Element} element - 元素
 * @param {String} type - 事件类型
 * @param {EventListener} handler - 事件
 */
export declare function addHandler(element: Element, type: string, handler: EventListener): void;
/**
 * 移除事件
 *
 * @param {Element} element - 元素
 * @param {String} type - 事件类型
 * @param {EventListener} handler - 事件
 */
export declare function removeHandler(element: Element, type: string, handler: EventListener): void;
/**
 * 阻止默认事件
 */
export declare function preventDefault(event: Event): void;
/**
 * 阻止事件冒泡
 */
export declare function stopPropagation(event: Event): void;
/**
 * 获取当前位置的X轴坐标
 *
 * @param {Event} event - 事件源
 */
export declare function getPageX(event: Event): number;
/**
 * 获取当前位置的Y轴坐标
 *
 * @param {Event} event - 事件源
 */
export declare function getPageY(event: Event): number;
/**
 * 获取页面滚动高度
 *
 * @returns {Number}
 */
export declare function getScrollTop(): number;
