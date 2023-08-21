import {UserRepositoryImpl} from "../repository/UserRepositoryImpl";
import {UserData} from "../model/UserData";
import {Log} from "../../common/logger";

export class UserUseCase {
    constructor(private readonly userRepository: UserRepositoryImpl) {
    }

    // TODO: 유저 상세 조회
    async getUser(userId: string): Promise<UserData | null> {
        const [user] = await Promise.all([this.userRepository.getUser(userId)]);
        return user;
    }

    // TODO: 유저 목록 조회
    async getUserList(): Promise<Array<UserData>> {
        const [userList] = await Promise.all([this.userRepository.getUserList()]);
        return userList;
    }

    // TODO: 유저 생성
    async createUser(userData: UserData): Promise<boolean> {
        try {
            const [isCreate] = await Promise.all([this.userRepository.createUser(userData)]);
            return isCreate
        } catch (e) {
            throw e;
        }
    }

    // TODO: 유저 수정
    async modifyUser(userData: UserData): Promise<boolean> {
        const [isModify] = await Promise.all([this.userRepository.modifyUser(userData)]);
        return isModify;
    }

    // TODO: 유저 삭제
    async deleteUser(userId: string): Promise<boolean> {
        const [isDelete] = await Promise.all([this.userRepository.deleteUser(userId)]);
        return isDelete;
    }
}