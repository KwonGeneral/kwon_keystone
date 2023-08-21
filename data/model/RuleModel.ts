import * as fields from '@keystone-6/core/fields';
import * as fields_document from '@keystone-6/fields-document';
import * as access from '@keystone-6/core/access';
import * as core from '@keystone-6/core';
import * as type from '.keystone/types';
import {BaseListTypeInfo} from "@keystone-6/core/src/types";

/**
 * @param { RuleModel } 규칙모델
 */
export let RuleModel: core.ListConfig<BaseListTypeInfo> = core.list(
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
             * @param { name } 규칙명
             */
            name: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { header } 규칙헤더
             */
            header: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { title } 규칙제목
             */
            title: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { content } 규칙내용
             */
            content: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { description } 규칙설명
             */
            description: fields.text({
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