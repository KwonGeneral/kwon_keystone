import * as fields from '@keystone-6/core/fields';
import * as fields_document from '@keystone-6/fields-document';
import * as access from '@keystone-6/core/access';
import * as core from '@keystone-6/core';
import * as type from '.keystone/types';
import {BaseListTypeInfo} from "@keystone-6/core/src/types";
import {Log} from '../../common/logger';

/**
 * @param { UserModel } 유저모델
 */
export let UserModel: core.ListConfig<BaseListTypeInfo> = core.list(
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
             * @param { level } 유저 레벨 (0: 자녀, 1: 학부모, 99: 관리자)
             */
            level: fields.integer({
                    validation: {isRequired: true},
                    defaultValue: 0,
                }
            ),

            /**
             * @param { name } 이름
             */
            name: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { email } 이름
             */
            email: fields.text({
                    validation: {isRequired: false},
                    isIndexed: 'unique',
                }
            ),


            /**
             * @param { password } 비밀번호
             */
            password: fields.password({
                    validation: {isRequired: true}
                }
            ),


            /**
             * @param { phone } 휴대폰번호
             */
            phone: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { address } 주소
             */
            address: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { addressDetail } 상세주소
             */
            addressDetail: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { gender } 성별
             */
            gender: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { birthDay } 생년월일
             */
            birthDay: fields.text({
                    validation: {isRequired: false}
                }
            ),

            /**
             * @param { updatedAt } 수정날짜
             */
            updatedAt: fields.timestamp({
                    /**
                     * 그렇다면 이 필드는 Prisma 스키마의 이 필드에 속성 true을 추가합니다 .
                     * 이것은 이 필드가 요청에 명시적으로 설정되지 않은 경우 GraphQL API 또는 Prisma 클라이언트의
                     * 다른 사용으로 항목이 생성/업데이트될 때마다 이 필드를 현재 시간으로 업데이트합니다.
                     * 이는 데이터베이스가 아닌 Prisma 클라이언트 수준에서 발생하므로 데이터베이스의 항목을
                     * 직접 업데이트하면 필드가 자동으로 업데이트되지 않습니다.
                     */
                    db: {updatedAt: true},

                    /**
                     * (기본값: undefined): ISO8601 형식의 날짜 시간 문자열이 있는 문자열 값이거나
                     * { kind: 'now' }. 이 값은 명시적 값이 설정되지 않은 경우 항목을 생성할 때 필드에 사용됩니다.
                     * 사용자가 처음 생성될 때 타임스탬프를 Date.now()로 설정합니다
                     */
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
        },
        hooks: {
            beforeOperation: async ({operation, listKey, context, resolvedData}) => {
                Log.d("beforeOperation: " + operation)
            },

            afterOperation: async ({operation, listKey, context, resolvedData}) => {

                Log.d("afterOperation: " + operation)
            },
            resolveInput: ({resolvedData}) => {
                Log.d("resolveInput: " + resolvedData)
                const {title} = resolvedData;
                if (title) {
                    return {
                        ...resolvedData,
                        // Ensure the first letter of the title is capitalised
                        title: title[0].toUpperCase() + title.slice(1)
                    }
                }
                // We always return resolvedData from the resolveInput hook
                return resolvedData;
            }
        }
    }
)