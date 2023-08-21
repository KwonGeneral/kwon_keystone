import * as fields from '@keystone-6/core/fields';
import * as fields_document from '@keystone-6/fields-document';
import * as access from '@keystone-6/core/access';
import * as core from '@keystone-6/core';
import * as type from '.keystone/types';
import {BaseListTypeInfo} from "@keystone-6/core/src/types";
import {relationship} from "@keystone-6/core/fields";

/**
 * @param { WebSiteInfo_AppInfo_Model } 웹사이트,앱관계형모델
 */
export let WebSiteInfo_AppInfo_Model: core.ListConfig<BaseListTypeInfo> = core.list(
    {
        /**
         * @param { access } 접근권한
         */
        access: access.allowAll,

        /**
         * @param { fields } 필드
         */
        fields: {
            /**
             * @param { websiteId } 웹사이트아이디
             */
            websiteId: relationship(
                {
                    ref: 'WebSiteInfoModel', many: false
                }
            ),

            /**
             * @param [ appInfoList ] 앱정보리스트
             */
            appInfoList: relationship(
                {
                    ref: 'AppInfoModel', many: true
                }
            ),

            /**
             * @param { updatedAt } 수정날짜
             */
            updatedAt: fields.timestamp({
                    db: {updatedAt: true},
                    defaultValue: {kind: 'now'},
                }
            ),

            /**
             * @param { createdAt } 생성날짜
             */
            createdAt: fields.timestamp({
                    defaultValue: {kind: 'now'},
                }
            )
        }
    }
);