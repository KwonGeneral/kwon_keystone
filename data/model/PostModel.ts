import * as fields from '@keystone-6/core/fields';
import * as access from '@keystone-6/core/access';
import * as core from '@keystone-6/core';
import {BaseListTypeInfo} from "@keystone-6/core/src/types";

/**
 * 게시글 모델
 */
export let PostModel: core.ListConfig<BaseListTypeInfo> = core.list(
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

            // 작성자
            author: fields.text({
                    validation: {isRequired: false}
                }
            ),

            // 상태 (0: 비공개, 1: 공개)
            status: fields.text({
                    validation: {isRequired: false}
                }
            ),

            // 링크
            url: fields.text({
                    validation: {isRequired: false}
                }
            ),

            // 상단 고정 여부
            isTopFixed: fields.text({
                    validation: {isRequired: false}
                }
            ),

            // 중요도 (0: 일반, 1: 중요)
            level: fields.text({
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