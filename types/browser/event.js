/** @module 浏览器相关-browser */
/**
 *  获取事件源
 *
 * @param {Event} event - 事件源
 */
export function getEvent(event) {
    if (event)
        return event;
    return window['event'] ? window['event'] : null;
}
/**
 * 获取事件对象
 *
 * @param {Event} event - 事件
 */
export function getEventTarget(event) {
    var e = getEvent(event);
    return e.target || e.srcElement;
}
/**
 * 添加事件
 *
 * @param {Element} element - 元素
 * @param {String} type - 事件类型
 * @param {EventListener} handler - 事件
 */
export function addHandler(element, type, handler) {
    if (element.addEventListener) {
        element.addEventListener(type, handler, false);
    }
    else if (element['attachEvent']) {
        ;
        element['attachEvent']("on" + type, handler);
    }
    else {
        ;
        element["on" + type] = handler;
    }
}
/**
 * 移除事件
 *
 * @param {Element} element - 元素
 * @param {String} type - 事件类型
 * @param {EventListener} handler - 事件
 */
export function removeHandler(element, type, handler) {
    if (element.removeEventListener) {
        element.removeEventListener(type, handler, false);
    }
    else if (element['detachEvent']) {
        ;
        element['detachEvent']("on" + type, handler);
    }
    else {
        ;
        element["on" + type] = null;
    }
}
/**
 * 阻止默认事件
 */
export function preventDefault(event) {
    var e = getEvent(event);
    if (e.preventDefault) {
        e.preventDefault();
    }
    else {
        e.returnValue = false;
    }
}
/**
 * 阻止事件冒泡
 */
export function stopPropagation(event) {
    var e = getEvent(event);
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    else {
        e.cancelBubble = true;
    }
}
/**
 * 获取当前位置的X轴坐标
 *
 * @param {Event} event - 事件源
 */
export function getPageX(event) {
    var e = getEvent(event);
    return typeof e.pageX === 'undefined'
        ? e.clientX + (document.body.scrollLeft || document.documentElement.scrollLeft)
        : e.pageX;
}
/**
 * 获取当前位置的Y轴坐标
 *
 * @param {Event} event - 事件源
 */
export function getPageY(event) {
    var e = getEvent(event);
    return typeof e.pageY === 'undefined'
        ? e.clientY + (document.body.scrollTop || document.documentElement.scrollTop)
        : e.pageX;
}
/**
 * 获取页面滚动高度
 *
 * @returns {Number}
 */
export function getScrollTop() {
    return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
}
