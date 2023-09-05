import * as fields from '@keystone-6/core/fields';
import * as access from '@keystone-6/core/access';
import * as core from '@keystone-6/core';
import {BaseListTypeInfo} from "@keystone-6/core/src/types";
import {Log} from '../../common/logger';

/**
 * 유저 모델
 */
export let UserModel: core.ListConfig<BaseListTypeInfo> = core.list(
    {
        // 접근 권한
        access: access.allowAll,

        // 필드 선언
        fields: {
            // 유저 레벨 (0: 자녀, 1: 학부모, 99: 관리자)
            level: fields.integer({
                    validation: {isRequired: true},
                    defaultValue: 0,
                }
            ),

            // 이름
            name: fields.text({
                    validation: {isRequired: false}
                }
            ),

            // 이메일
            email: fields.text({
                    validation: {isRequired: false},
                    isIndexed: 'unique',
                }
            ),

            // 비밀번호
            password: fields.password({
                    validation: {isRequired: true}
                }
            ),

            // 휴대폰 번호
            phone: fields.text({
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

            // 성별 (0: 남성, 1: 여성)
            gender: fields.text({
                    validation: {isRequired: false}
                }
            ),

            // 생년월일
            birthDay: fields.text({
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
        },
        hooks: {
            afterOperation: async ({operation, listKey, context, resolvedData}) => {
                await context.db.LogModel.createOne({
                    data: {
                        name: operation + " " + listKey,
                    }
                })
            }
        }
    }
)