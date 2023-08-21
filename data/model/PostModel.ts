import * as fields from '@keystone-6/core/fields';
import * as fields_document from '@keystone-6/fields-document';
import * as access from '@keystone-6/core/access';
import * as core from '@keystone-6/core';
import * as type from '.keystone/types';
import {BaseListTypeInfo} from "@keystone-6/core/src/types";

/**
 * @param { PostModel } 게시글모델
 */
export let PostModel: core.ListConfig<BaseListTypeInfo> = core.list(
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
             * @param { title } 게시글제목
             */
            version: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { header } 게시글헤더
             */
            header: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { title } 게시글제목
             */
            title: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { content } 게시글내용
             */
            content: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { description } 게시글설명
             */
            description: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { author } 게시글작성자
             */
            author: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { status } 게시글상태
             */
            status: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { url } 게시글링크
             */
            url: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { isTopFixed } 게시글상단고정여부
             */
            isTopFixed: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { level } 게시글중요도여부
             */
            level: fields.text({
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