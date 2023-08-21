import {Response, ResponseError} from "../../common/JsonCommon";
import express from "express";
import {BaseKeystoneTypeInfo, KeystoneContext} from "@keystone-6/core/dist/declarations/src/types";
import {GraphQLError} from 'graphql';
import {UserUseCase} from "../../domain/usecase/UserUseCase";
import {UserRepository} from "../../data/repository/UserRepository";
import {Log} from "../../common/logger";
import {UserData} from "../../domain/model/UserData";
import {ErrorHandling} from "../../common/ErrorHandling";

// Todo: 유저 목록 조회 API
export const getUserList = (app: express.Express, commonContext: KeystoneContext<BaseKeystoneTypeInfo>) => {
    app.get('/api/user', async (req, res, next) => {
            try {
                if (req.query.userId != null) {
                    // 만약 파라미터에 userId가 있다면 상세 조회
                    res.json(Response(await new UserUseCase(new UserRepository(app, commonContext)).getUser(req.query.userId as string)));
                } else {
                    // 전체 조회
                    res.json(Response(await new UserUseCase(new UserRepository(app, commonContext)).getUserList()));
                }
            } catch (e) {
                next(e);
            }
        }
    );
}

// Todo: 유저 생성 API
export const createUser = (app: express.Express, commonContext: KeystoneContext<BaseKeystoneTypeInfo>) => {
    app.post('/api/user', async (req, res, next) => {
            try {
                res.json(Response(await new UserUseCase(new UserRepository(app, commonContext)).createUser(new UserData(
                    "",
                    req.body.name,
                    req.body.email,
                    req.body.password,
                    req.body.level,
                    req.body.phone,
                    req.body.address,
                    req.body.addressDetail,
                    req.body.gender,
                    req.body.birthDay,
                    null,
                    null
                ))));
            } catch (e) {
                next(e);
            }
        }
    );
}
