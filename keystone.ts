import * as crypto from 'crypto';
import * as auth from '@keystone-6/auth';
import * as core_session from '@keystone-6/core/session';
import * as core from '@keystone-6/core';
import * as type from '.keystone/types';
import {AppInfoModel} from './data/model/AppInfoModel'
import {AttachmentModel} from './data/model/AttachmentModel'
import {LocationModel} from './data/model/LocationModel'
import {PostModel} from './data/model/PostModel'
import {RuleModel} from './data/model/RuleModel'
import {TermsModel} from './data/model/TermsModel'
import {UserModel} from './data/model/UserModel'
import {WebSiteInfoModel} from './data/model/WebSiteInfoModel'
import {WebSiteInfo_AppInfo_Model} from "./data/model/WebSiteInfo_AppInfo_Model";
import {createUser, deleteUser, getUserList, modifyUser} from "./presenter/api/UserApi";
import {Log} from "./common/logger";
import {ErrorHandling} from "./common/ErrorHandling";
import dotenv from 'dotenv';

/**
 * 환경변수 설정
 */
dotenv.config();

/**
 * 모델 정의
 */
export const modelList: type.Lists = {
    // @ts-ignore
    'AppInfoModel': AppInfoModel,
    // @ts-ignore
    'AttachmentModel': AttachmentModel,
    // @ts-ignore
    'LocationModel': LocationModel,
    // @ts-ignore
    'PostModel': PostModel,
    // @ts-ignore
    'RuleModel': RuleModel,
    // @ts-ignore
    'TermsModel': TermsModel,
    // @ts-ignore
    'UserModel': UserModel,
    // @ts-ignore
    'WebSiteInfoModel': WebSiteInfoModel,
    // @ts-ignore
    'WebSiteInfo_AppInfo_Model': WebSiteInfo_AppInfo_Model,
}

/**
 * Session 관련 정의
 */
let sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== 'production') {
    sessionSecret = crypto.randomBytes(32).toString('hex');
}

const sessionMaxAge = 60 * 60 * 24 * 30;

const session = core_session.statelessSessions({
    maxAge: sessionMaxAge,
    secret: sessionSecret!,
});

/**
 * DataBase 유저 인증 정의
 */
const {withAuth} = auth.createAuth({
    listKey: 'UserModel',
    identityField: 'email',
    sessionData: 'name createdAt',
    secretField: 'password',
    initFirstItem: {
        fields: ['name', 'email', 'password', 'level'],
    },
});

/**
 * KeystoneJS 설정
 */
export default withAuth(
    core.config({
        db: {
            // @ts-ignore
            provider: process.env.DB_TYPE,
            // @ts-ignore
            url: process.env.DB_URL,
            onConnect: async context => {
                Log.d("DB Connected");
            },
            enableLogging: true,
            idField: {kind: 'uuid'},
        },
        lists: (modelList),
        session: session,
        server: {
            cors: {origin: ['http://localhost:3000', 'http://localhost:3306'], credentials: true},
            // @ts-ignore
            port: process.env.SERVER_PORT,
            maxFileSize: 200 * 1024 * 1024,
            extendExpressApp: (app, commonContext) => {
                let bodyParser = require('body-parser');
                app.use(bodyParser.json());
                app.use(bodyParser.urlencoded({extended: true}));

                getUserList(app, commonContext);
                createUser(app, commonContext);
                modifyUser(app, commonContext);
                deleteUser(app, commonContext);

                app.use((err: any, req: any, res: any, next: any) => {
                    return res.json(ErrorHandling(err));
                });
            },
            extendHttpServer: (httpServer, commonContext, graphQLSchema) => { /* ... */
            },
        },

    })
);
