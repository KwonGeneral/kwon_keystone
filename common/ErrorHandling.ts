import {GraphQLError} from "graphql";

/**
 * 에러 핸들링
 */
export const ErrorHandling = (error: any): { result: any; code: string; message: string } => {
    let code: string = "P0";
    let target: string = "";
    if (error instanceof GraphQLError) {
        if (error.extensions.prisma != null) {
            // @ts-ignore
            target = error.extensions.prisma.meta.target != null ? error.extensions.prisma.meta.target : "";
            // @ts-ignore
            code = error.extensions.prisma.code != null ? error.extensions.prisma.code : "P0";
        }
    } else if (error instanceof TypeError) {
        code = "P100";
    } else {
        code = "P0";
    }

    return {
        code: code,
        message: target != "" ? getErrorMessage(code) + " ( " + target + " )" : getErrorMessage(code),
        result: []
    }
}

// 에러 코드에 따른 에러 메시지 반환
const getErrorMessage = (code: string): string => {
    let message = "";
    switch (code) {
        case "P0":
            message = "알 수 없는 에러 코드입니다.";
            break;
        case "P100":
            message = "올바르지 않는 타입이 사용되었습니다.";
            break;
        case "P1000":
            message = "데이터베이스 서버 인증에 실패했습니다. 제공된 데이터베이스 자격증명이 유효하지 않습니다. 유효한 데이터베이스 자격증명을 제공해주세요.";
            break;
        case "P1001":
            message = "데이터베이스 서버에 연결할 수 없습니다. 데이터베이스 서버가 실행 중인지 확인해주세요.";
            break;
        case "P1002":
            message = "데이터베이스 서버에는 도달했지만 시간이 초과되었습니다. 다시 시도해주세요.";
            break;
        case "P1003":
            message = "해당 위치에 데이터베이스가 존재하지 않습니다.";
            break;
        case "P1008":
            message = "작업이 시간 초과되었습니다.";
            break;
        case "P1009":
            message = "데이터베이스 서버에 이미 해당 데이터베이스가 존재합니다.";
            break;
        case "P1010":
            message = "사용자는 데이터베이스에 액세스를 거부당했습니다.";
            break;
        case "P1011":
            message = "TLS 연결을 여는 중 오류 발생.";
            break;
        case "P1012":
            message = "Prisma를 버전 4.0.0 이상으로 업그레이드 한 후에 해당 오류 코드가 발생하면, 업그레이드 가이드를 참조하세요.";
            break;
        case "P1013":
            message = "제공된 데이터베이스 문자열이 유효하지 않습니다.";
            break;
        case "P1014":
            message = "모델에 대한 기본 요소가 존재하지 않습니다.";
            break;
        case "P1015":
            message = "Prisma 스키마는 데이터베이스 버전에 지원되지 않는 기능을 사용하고 있습니다.";
            break;
        case "P1016":
            message = "원시 쿼리의 매개 변수 수가 올바르지 않습니다.";
            break;
        case "P1017":
            message = "서버가 연결을 종료했습니다.";
            break;
        case "P2000":
            message = "제공된 컬럼 값이 컬럼 유형에 비해 너무 깁니다.";
            break;
        case "P2001":
            message = "where 조건에서 검색된 레코드가 존재하지 않습니다.";
            break;
        case "P2002":
            message = "유니크 제약 조건이 실패했습니다.";
            break;
        case "P2003":
            message = "외래 키 제약 조건이 실패했습니다.";
            break;
        case "P2004":
            message = "데이터베이스에서 제약 조건이 실패했습니다.";
            break;
        case "P2005":
            message = "데이터베이스에 저장된 값이 필드 유형에 유효하지 않습니다.";
            break;
        case "P2006":
            message = "제공된 값이 해당 모델의 필드에 유효하지 않습니다.";
            break;
        case "P2007":
            message = "데이터 유효성 검사 오류.";
            break;
        case "P2008":
            message = "쿼리 구문 분석에 실패했습니다.";
            break;
        case "P2009":
            message = "쿼리 유효성 검사에 실패했습니다.";
            break;
        case "P2010":
            message = "원시 쿼리 실패.";
            break;
        case "P2011":
            message = "Null 제약 조건 위반.";
            break;
        case "P2012":
            message = "필요한 값이 누락되었습니다.";
            break;
        case "P2013":
            message = "필드에 필요한 인수가 누락되었습니다.";
            break;
        case "P2014":
            message = "시도한 변경이 두 모델 간의 필요한 관계를 위반합니다.";
            break;
        case "P2015":
            message = "관련 레코드를 찾을 수 없습니다.";
            break;
        case "P2016":
            message = "쿼리 해석 오류.";
            break;
        case "P2017":
            message = "두 모델 간의 관계 레코드가 연결되어 있지 않습니다.";
            break;
        case "P2018":
            message = "필요한 연결된 레코드를 찾을 수 없습니다.";
            break;
        case "P2019":
            message = "입력 오류.";
            break;
        case "P2020":
            message = "유형의 범위를 벗어난 값.";
            break;
        case "P2021":
            message = "현재 데이터베이스에 해당 테이블이 존재하지 않습니다.";
            break;
        case "P2022":
            message = "현재 데이터베이스에 해당 컬럼이 존재하지 않습니다.";
            break;
        case "P2023":
            message = "불일치하는 컬럼 데이터.";
            break;
        case "P2024":
            message = "연결 풀에서 새 연결을 가져오는 중 시간 초과.";
            break;
        case "P2025":
            message = "필요한 레코드를 찾지 못해 작업이 실패했습니다.";
            break;
        case "P2026":
            message = "쿼리에서 사용된 현재 데이터베이스 제공자가 지원하지 않는 기능.";
            break;
        case "P2027":
            message = "쿼리 실행 중 데이터베이스에서 여러 오류 발생.";
            break;
        case "P2028":
            message = "트랜잭션 API 오류.";
            break;
        case "P2030":
            message = "검색에 사용할 전체 텍스트 인덱스를 찾을 수 없습니다.";
            break;
        case "P2031":
            message = "Prisma는 트랜잭션을 수행해야 합니다. MongoDB 서버를 복제 세트로 실행해야 합니다.";
            break;
        case "P2033":
            message = "쿼리에서 사용된 숫자가 64비트 정수에 맞지 않습니다.";
            break;
        case "P2034":
            message = "쓰기 충돌 또는 교착 상태로 인해 트랜잭션이 실패했습니다.";
            break;
        case "P3000":
            message = "데이터베이스 생성에 실패했습니다.";
            break;
        case "P3001":
            message = "파괴적인 변경과 데이터 손실 가능성이 있는 마이그레이션 가능.";
            break;
        case "P3002":
            message = "시도한 마이그레이션이 되돌려졌습니다.";
            break;
        case "P3003":
            message = "마이그레이션의 형식이 변경되어 저장된 마이그레이션이 더 이상 유효하지 않습니다.";
            break;
        case "P3004":
            message = "이 데이터베이스는 시스템 데이터베이스입니다. Prisma migrate로 수정하지 마십시오.";
            break;
        case "P3005":
            message = "데이터베이스 스키마가 비어 있지 않습니다.";
            break;
        case "P3006":
            message = "마이그레이션이 섀도우 데이터베이스에 깔끔하게 적용되지 않았습니다.";
            break;
        case "P3007":
            message = "요청한 프리뷰 기능 중 일부는 아직 스키마 엔진에서 허용되지 않습니다.";
            break;
        case "P3008":
            message = "마이그레이션이 이미 데이터베이스에 적용된 것으로 기록되었습니다.";
            break;
        case "P3009":
            message = "마이그레이트는 대상 데이터베이스에서 실패한 마이그레이션을 발견했습니다.";
            break;
        case "P3010":
            message = "마이그레이션 이름이 너무 깁니다. 200자를 넘지 않아야 합니다.";
            break;
        case "P3011":
            message = "마이그레이션을 되돌릴 수 없습니다. 데이터베이스에 적용되지 않았기 때문입니다.";
            break;
        case "P3012":
            message = "마이그레이션을 되돌릴 수 없습니다. 실패 상태가 아니기 때문입니다.";
            break;
        case "P3013":
            message = "데이터 소스 제공자 배열은 더 이상 마이그레이트에서 지원되지 않습니다.";
            break;
        case "P3014":
            message = "Prisma Migrate가 섀도우 데이터베이스를 생성하지 못했습니다.";
            break;
        case "P3015":
            message = "마이그레이션 파일을 찾을 수 없습니다.";
            break;
        case "P3016":
            message = "데이터베이스 재설정의 대체 방법이 실패하여 마이그레이트가 데이터베이스를 완전히 정리하지 못했습니다.";
            break;
        case "P3017":
            message = "마이그레이션을 찾을 수 없습니다.";
            break;
        case "P3018":
            message = "마이그레이션 적용에 실패했습니다.";
            break;
        case "P3019":
            message = "스키마에 지정된 데이터 소스 제공자가 migration_lock.toml에 지정된 것과 일치하지 않습니다.";
            break;
        case "P3020":
            message = "Azure SQL에서 섀도우 데이터베이스의 자동 생성이 비활성화되어 있습니다.";
            break;
        case "P3021":
            message = "이 데이터베이스에서 외래 키를 생성할 수 없습니다.";
            break;
        case "P3022":
            message = "이 데이터베이스에서 DDL (Data Definition Language) SQL 문의 직접 실행이 비활성화되어 있습니다.";
            break;
        case "P4000":
            message = "내부 조사 작업이 스키마 파일을 생성하는데 실패했습니다.";
            break;
        case "P4001":
            message = "조사된 데이터베이스가 비어 있습니다.";
            break;
        case "P4002":
            message = "조사된 데이터베이스의 스키마가 일관되지 않았습니다.";
            break;
        case "P5000":
            message = "서버가 요청을 이해할 수 없습니다.";
            break;
        case "P5001":
            message = "이 요청은 다시 시도해야 합니다.";
            break;
        case "P5002":
            message = "제공된 데이터 소스가 유효하지 않습니다: 데이터 소스의 URL을 구문 분석할 수 없음, --data-proxy를 사용할 때 prisma:// 프로토콜을 사용해야 합니다, 유효한 API 키가 없음.";
            break;
        case "P5003":
            message = "요청한 리소스가 존재하지 않습니다.";
            break;
        case "P5004":
            message = "해당 기능은 아직 구현되지 않았습니다: beforeExit 이벤트는 아직 지원되지 않습니다.";
            break;
        case "P5005":
            message = "스키마를 업로드해야 합니다.";
            break;
        case "P5006":
            message = "알 수 없는 서버 오류입니다.";
            break;
        case "P5007":
            message = "권한이 없습니다. 연결 문자열을 확인하세요.";
            break;
        case "P5008":
            message = "사용량을 초과했습니다. 나중에 다시 시도하세요.";
            break;
        case "P5009":
            message = "요청이 시간 초과되었습니다.";
            break;
        case "P5010":
            message = "서비스에서 데이터를 가져올 수 없습니다.";
            break;
        case "P5011":
            message = "요청 매개변수가 유효하지 않습니다.";
            break;
        case "P5012":
            message = "엔진 버전이 지원되지 않습니다.";
            break;
        case "P5013":
            message = "엔진이 시작되지 않았습니다: 건강 검사 시간 초과";
            break;
        case "P5014":
            message = "알 수 없는 엔진 시작 오류 (메시지와 로그 포함)";
            break;
        case "P5015":
            message = "대화식 트랜잭션 오류: 대화식 트랜잭션 ID를 구문 분석할 수 없음, 지정된 호스트와 트랜잭션 ID에 대한 쿼리 엔진을 찾을 수 없음, 대화식 트랜잭션을 시작할 수 없음.";
            break;
        default:
            message = "알 수 없는 에러 코드입니다.";
    }

    return message;
}