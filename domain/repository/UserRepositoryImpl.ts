import {UserData} from "../model/UserData";
import express from "express";
import {BaseKeystoneTypeInfo, KeystoneContext} from "@keystone-6/core/dist/declarations/src/types";

/**
 * 유저 관련 Repository Interface
 */
export interface UserRepositoryImpl {
    // Express App
    app: express.Express;

    // Keystone Context
    context: KeystoneContext<BaseKeystoneTypeInfo>;

    // 유저 목록 조회
    getUserList(): Promise<Array<UserData>>;

    // 유저 상세 조회
    getUser(userId: string): Promise<UserData | null>;

    // 유저 생성
    createUser(userData: UserData): Promise<boolean>;

    // 유저 수정
    modifyUser(userData: UserData): Promise<boolean>;

    // 유저 삭제
    deleteUser(userId: string): Promise<boolean>;
}