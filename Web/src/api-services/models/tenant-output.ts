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

import { DbType } from './db-type';
import { StatusEnum } from './status-enum';
import { TenantTypeEnum } from './tenant-type-enum';
 /**
 * 
 *
 * @export
 * @interface TenantOutput
 */
export interface TenantOutput {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof TenantOutput
     */
    id?: number;

    /**
     * 创建时间
     *
     * @type {Date}
     * @memberof TenantOutput
     */
    createTime?: Date | null;

    /**
     * 更新时间
     *
     * @type {Date}
     * @memberof TenantOutput
     */
    updateTime?: Date | null;

    /**
     * 创建者Id
     *
     * @type {number}
     * @memberof TenantOutput
     */
    createUserId?: number | null;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof TenantOutput
     */
    createUserName?: string | null;

    /**
     * 修改者Id
     *
     * @type {number}
     * @memberof TenantOutput
     */
    updateUserId?: number | null;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof TenantOutput
     */
    updateUserName?: string | null;

    /**
     * 软删除
     *
     * @type {boolean}
     * @memberof TenantOutput
     */
    isDelete?: boolean;

    /**
     * 用户Id
     *
     * @type {number}
     * @memberof TenantOutput
     */
    userId?: number;

    /**
     * 机构Id
     *
     * @type {number}
     * @memberof TenantOutput
     */
    orgId?: number;

    /**
     * 主机
     *
     * @type {string}
     * @memberof TenantOutput
     */
    host?: string | null;

    /**
     * @type {TenantTypeEnum}
     * @memberof TenantOutput
     */
    tenantType?: TenantTypeEnum;

    /**
     * @type {DbType}
     * @memberof TenantOutput
     */
    dbType?: DbType;

    /**
     * 数据库连接
     *
     * @type {string}
     * @memberof TenantOutput
     */
    connection?: string | null;

    /**
     * 数据库标识
     *
     * @type {string}
     * @memberof TenantOutput
     */
    configId?: string | null;

    /**
     * 从库连接/读写分离
     *
     * @type {string}
     * @memberof TenantOutput
     */
    slaveConnections?: string | null;

    /**
     * 排序
     *
     * @type {number}
     * @memberof TenantOutput
     */
    orderNo?: number;

    /**
     * 备注
     *
     * @type {string}
     * @memberof TenantOutput
     */
    remark?: string | null;

    /**
     * @type {StatusEnum}
     * @memberof TenantOutput
     */
    status?: StatusEnum;

    /**
     * 租户名称
     *
     * @type {string}
     * @memberof TenantOutput
     */
    name?: string | null;

    /**
     * 管理员账号
     *
     * @type {string}
     * @memberof TenantOutput
     */
    adminAccount?: string | null;

    /**
     * 电子邮箱
     *
     * @type {string}
     * @memberof TenantOutput
     */
    email?: string | null;

    /**
     * 电话
     *
     * @type {string}
     * @memberof TenantOutput
     */
    phone?: string | null;
}
