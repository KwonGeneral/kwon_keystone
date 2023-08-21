import * as crypto from 'crypto';
import * as auth from '@keystone-6/auth';
import * as core_session from '@keystone-6/core/session';
import * as core from '@keystone-6/core';
import * as fields from '@keystone-6/core/fields';
import * as fields_document from '@keystone-6/fields-document';
import * as access from '@keystone-6/core/access';
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
import {createUser, getUserList} from "./presenter/api/UserApi";


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

// Primsa
import {PrismaClient} from '@prisma/client'
import {Log} from "./common/logger";
import {GraphQLError} from "graphql";
import {ErrorHandling} from "./common/ErrorHandling";

export default withAuth(
    core.config({
        db: {
            provider: 'mysql',
            url: 'mysql://kwon@localhost:3306/kwondb',
            onConnect: async context => { /* ... */
            },
            enableLogging: true,
            idField: {kind: 'uuid'},
        },
        lists: (modelList),
        session: session,
        server: {
            cors: {origin: ['http://localhost:3000', 'http://localhost:3306'], credentials: true},
            port: 8888,
            maxFileSize: 200 * 1024 * 1024,
            extendExpressApp: (app, commonContext) => {
                let bodyParser = require('body-parser');
                app.use(bodyParser.json());
                app.use(bodyParser.urlencoded({extended: true}));

                getUserList(app, commonContext);
                createUser(app, commonContext);

                app.use((err: any, req: any, res: any, next: any) => {
                    Log.d("ErrorHandling err: " + err);
                    return res.json(ErrorHandling(err));
                });
            },
            extendHttpServer: (httpServer, commonContext, graphQLSchema) => { /* ... */
            },
        },

    })
);
