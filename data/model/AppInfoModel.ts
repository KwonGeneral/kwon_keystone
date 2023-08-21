import * as fields from '@keystone-6/core/fields';
import * as fields_document from '@keystone-6/fields-document';
import * as access from '@keystone-6/core/access';
import * as core from '@keystone-6/core';
import * as type from '.keystone/types';
import {BaseListTypeInfo} from "@keystone-6/core/src/types";

/**
 * @param { AppInfoModel } 앱정보모델
 */
export let AppInfoModel: core.ListConfig<BaseListTypeInfo> = core.list(
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
             * @param { version } 앱버전
             */
            version: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { name } 앱이름
             */
            name: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { header } 앱헤더
             */
            header: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { title } 앱제목
             */
            title: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { content } 앱내용
             */
            content: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { description } 앱설명
             */
            description: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { buildNumber } 앱빌드번호
             */
            buildNumber: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { packageName } 앱패키지명
             */
            packageName: fields.text({
                    validation: {isRequired: false}
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