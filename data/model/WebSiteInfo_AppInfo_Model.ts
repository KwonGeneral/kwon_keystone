import * as fields from '@keystone-6/core/fields';
import * as access from '@keystone-6/core/access';
import * as core from '@keystone-6/core';
import {BaseListTypeInfo} from "@keystone-6/core/src/types";
import {relationship} from "@keystone-6/core/fields";

/**
 * 웹 사이트, 앱 관계형 모델
 */
export let WebSiteInfo_AppInfo_Model: core.ListConfig<BaseListTypeInfo> = core.list(
    {
        // 접근 권한
        access: access.allowAll,

        // 필드 선언
        fields: {
            // 웹 사이트 ID
            websiteId: relationship(
                {
                    ref: 'WebSiteInfoModel', many: false
                }
            ),

            // 앱 정보 ID 리스트
            appInfoList: relationship(
                {
                    ref: 'AppInfoModel', many: true
                }
            ),

            // 수정일
            updatedAt: fields.timestamp({
                    db: {updatedAt: true},
                    defaultValue: {kind: 'now'},
                }
            ),

            // 생성일
            createdAt: fields.timestamp({
                    defaultValue: {kind: 'now'},
                }
            )
        }
    }
);