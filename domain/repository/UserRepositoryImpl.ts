import {UserData} from "../model/UserData";
import express from "express";
import {BaseKeystoneTypeInfo, KeystoneContext} from "@keystone-6/core/dist/declarations/src/types";

export interface UserRepositoryImpl {
    app: express.Express;
    context: KeystoneContext<BaseKeystoneTypeInfo>;

    getUserList(): Promise<Array<UserData>>;
    getUser(userId: string): Promise<UserData | null>;
    createUser(userData: UserData): Promise<boolean>;
    modifyUser(userData: UserData): Promise<boolean>;
    deleteUser(userId: string): Promise<boolean>;
}