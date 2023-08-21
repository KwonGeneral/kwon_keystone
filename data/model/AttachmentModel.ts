import * as fields from '@keystone-6/core/fields';
import * as fields_document from '@keystone-6/fields-document';
import * as access from '@keystone-6/core/access';
import * as core from '@keystone-6/core';
import * as type from '.keystone/types';
import {BaseListTypeInfo} from "@keystone-6/core/src/types";

/**
 * @param { AttachmentModel } 파일모델
 */
export let AttachmentModel: core.ListConfig<BaseListTypeInfo> = core.list(
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
             * @param { name } 파일명
             */
            name: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { size } 파일크기
             */
            size: fields.integer({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { base64 } 파일Base64데이터
             */
            base64: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { extension } 파일확장자
             */
            extension: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { type } 파일타입
             */
            type: fields.text({
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