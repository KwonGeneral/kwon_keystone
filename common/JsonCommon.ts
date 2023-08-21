import {Log} from "./logger";


export const Response = (data: any): { result: any; code: number; message: string } => {
    let code = 200;
    let message = 'OK';
    let result: Array<Object> = [];

    Log.d("data: " + data);

    if (data == null) {
        result = [];
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

export const ResponseError = (code: number, message: string): { result: any; code: number; message: string } => {
    return {
        code: code,
        message: message,
        result: null,
    }
}