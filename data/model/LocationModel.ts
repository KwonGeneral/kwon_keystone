import * as fields from '@keystone-6/core/fields';
import * as fields_document from '@keystone-6/fields-document';
import * as access from '@keystone-6/core/access';
import * as core from '@keystone-6/core';
import * as type from '.keystone/types';
import {BaseListTypeInfo} from "@keystone-6/core/src/types";

/**
 * @param { LocationModel } 위치모델
 */
export let LocationModel: core.ListConfig<BaseListTypeInfo> = core.list(
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
             * @param { name } 장소명
             */
            name: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { address } 장소주소
             */
            address: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { addressDetail } 장소상세주소
             */
            addressDetail: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { latitude } 위도
             */
            latitude: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { longitude } 경도
             */
            longitude: fields.text({
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