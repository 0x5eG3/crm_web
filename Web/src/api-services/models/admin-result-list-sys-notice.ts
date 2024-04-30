/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET 通用权限开发平台
 * 让 .NET 开发更简单、更通用、更流行。整合最新技术，模块插件式开发，前后端分离，开箱即用。<br/><u><b><font color='FF0000'> 👮不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动！任何基于本项目二次开发而产生的一切法律纠纷和责任，我们不承担任何责任！</font></b></u>
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { SysNotice } from './sys-notice';
 /**
 * 全局返回结果
 *
 * @export
 * @interface AdminResultListSysNotice
 */
export interface AdminResultListSysNotice {

    /**
     * 状态码
     *
     * @type {number}
     * @memberof AdminResultListSysNotice
     */
    code?: number;

    /**
     * 类型success、warning、error
     *
     * @type {string}
     * @memberof AdminResultListSysNotice
     */
    type?: string | null;

    /**
     * 错误信息
     *
     * @type {string}
     * @memberof AdminResultListSysNotice
     */
    message?: string | null;

    /**
     * 数据
     *
     * @type {Array<SysNotice>}
     * @memberof AdminResultListSysNotice
     */
    result?: Array<SysNotice> | null;

    /**
     * 附加数据
     *
     * @type {any}
     * @memberof AdminResultListSysNotice
     */
    extras?: any | null;

    /**
     * 时间
     *
     * @type {Date}
     * @memberof AdminResultListSysNotice
     */
    time?: Date;
}