import {UserRepositoryImpl} from "../../domain/repository/UserRepositoryImpl";
import {toUserData, UserData, toPrismaUserModel} from "../../domain/model/UserData";
import e from "express";
import {BaseKeystoneTypeInfo, KeystoneContext} from "@keystone-6/core/dist/declarations/src/types";
import {Log} from "../../common/logger";

export class UserRepository implements UserRepositoryImpl {
    app: e.Express;
    context: KeystoneContext<BaseKeystoneTypeInfo>;

    constructor(app: e.Express, context: KeystoneContext<BaseKeystoneTypeInfo>) {
        this.app = app;
        this.context = context;
    }

    // TODO: 유저 상세 조회
    getUser = async (userId: string): Promise<UserData | null> => {
        try {
            let findData = await this.context.db.UserModel.findOne({
                where: { id: userId }  // Assuming id is of type string in PrismaUserModel
            });
            return toUserData(findData);
        } catch (e) {
            throw e;
        }
    }

    // TODO: 유저 목록 조회
    getUserList = async (): Promise<Array<UserData>> => {
        try {
            let findList = await this.context.db.UserModel.findMany();
            let resultList: Array<UserData> = Array();

            findList.forEach((value, index, array) => {
                let convert = toUserData(value);
                if(convert != null) {
                    resultList.push(convert);
                }
            });

            return resultList;
        } catch (e) {
            throw e;
        }
    };

    // TODO: 유저 생성
    createUser = async (userData: UserData): Promise<boolean> => {
        try {
            await this.context.db.UserModel.createOne({
                data: toPrismaUserModel(userData)
            });
            return true;
        } catch (e) {
            throw e;
        }
    }

    // TODO: 유저 삭제
    deleteUser = async (userId: string): Promise<boolean> => {
        try {
            await this.context.db.UserModel.deleteOne({
                where: {id: userId.toString()}  // Assuming id is of type string in PrismaUserModel
            });
            return true;
        } catch (e) {
            throw e;
        }
    }

    // TODO: 유저 수정
    modifyUser = async (userData: UserData): Promise<boolean> => {
        try {
            if (!userData.id) {
                Log.e("User ID is missing for modification.");
                return false;
            }
            await this.context.db.UserModel.updateOne({
                where: {id: userData.id.toString()},  // Assuming id is of type string in PrismaUserModel
                data: toPrismaUserModel(userData)
            });
            return true;
        } catch (e) {
            throw e;
        }
    }

}