import * as fields from '@keystone-6/core/fields';
import * as fields_document from '@keystone-6/fields-document';
import * as access from '@keystone-6/core/access';
import * as core from '@keystone-6/core';
import * as type from '.keystone/types';
import {BaseListTypeInfo} from "@keystone-6/core/src/types";

/**
 * 첨부 파일 모델
 */
export let AttachmentModel: core.ListConfig<BaseListTypeInfo> = core.list(
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

            // 크기
            size: fields.integer({
                    validation: {isRequired: false}
                }
            ),

            // Base64 데이터
            base64: fields.text({
                    validation: {isRequired: false}
                }
            ),

            // 확장자
            extension: fields.text({
                    validation: {isRequired: false}
                }
            ),

            // 타입 (0: 이미지, 1: 동영상, 2: 음악, 3: 문서, 4: 기타)
            type: fields.text({
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