/**
 * API 응답 Format
 * @param data Response Data
 */
export const Response = (data: any): { result: any; code: string; message: string } => {
    let code = "200";
    let message = 'OK';
    let result: Array<Object> = [];

    if (data == null) {
        result = [];
    } else if (typeof data == 'boolean') {
        return {
            code: code,
            message: message,
            result: data,
        }
    } else {
        if (data instanceof Array) {
            result = data;
        } else {
            result.push(data);
        }
    }

    return {
        code: code,
        message: message,
        result: result,
    }
}