import * as fields from '@keystone-6/core/fields';
import * as access from '@keystone-6/core/access';
import * as core from '@keystone-6/core';
import {BaseListTypeInfo} from "@keystone-6/core/src/types";

/**
 * 위치 모델
 */
export let LocationModel: core.ListConfig<BaseListTypeInfo> = core.list(
    {
        // 접근 권한
        access: access.allowAll,

        // 필드 선언
        fields: {
            // 이름
            name: fields.text({
                    validation: {isRequired: false}
                }
            ),

            // 헤더
            header: fields.text({
                    validation: {isRequired: false}
                }
            ),

            // 제목
            title: fields.text({
                    validation: {isRequired: false}
                }
            ),

            // 내용
            content: fields.text({
                    validation: {isRequired: false}
                }
            ),

            // 설명
            description: fields.text({
                    validation: {isRequired: false}
                }
            ),

            // 주소
            address: fields.text({
                    validation: {isRequired: false}
                }
            ),

            // 상세 주소
            addressDetail: fields.text({
                    validation: {isRequired: false}
                }
            ),

            // 위도
            latitude: fields.text({
                    validation: {isRequired: false}
                }
            ),

            // 경도
            longitude: fields.text({
                    validation: {isRequired: false}
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