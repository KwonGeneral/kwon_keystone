/**
 * API 응답 Format
 * @param data Response Data
 */
export const Response = (data: any): { result: any; data: any; } => {
    let code = "200";
    let message = 'OK';
    let result: Array<Object> = [];

    if (data == null) {
        result = [];
    } else if (typeof data == 'boolean') {
        return {
            result: {
                code: code,
                message: message,
            },
            data: data,
        }
    } else {
        if (data instanceof Array) {
            result = data;
        } else {
            result.push(data);
        }
    }

    return {
        result: {
            code: code,
            message: message,
        },
        data: data,
    }
}

export const CustomResponse = (code: string, message: string, data: any): { result: any, data: any } => {
    return {
        result: {
            code: code,
            message: message,
        },
        data: data,
    }
}