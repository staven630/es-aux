/**
 * 是否具有 className
 *
 * @param [HTMLElement] el - 元素
 * @param [String] cls - 类名
 */
export declare function hasClass(el: HTMLElement, cls: string): RegExpMatchArray | null;
/**
 * 添加 className
 *
 * @param [HTMLElement] el - 元素
 * @param [String] cls - 类名
 */
export declare function addClass(el: HTMLElement, cls: string): void;
/**
 * 删除 className
 *
 * @param [HTMLElement] el - 元素
 * @param [String] cls - 类名
 */
export declare function removeClass(el: HTMLElement, cls: string): void;
/**
 * 切换 className
 *
 * @param [HTMLElement] el - 元素
 * @param [String] cls - 类名
 */
export declare function toggleClass(el: HTMLElement, cls: string): void;
