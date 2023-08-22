import {UserRepositoryImpl} from "../repository/UserRepositoryImpl";
import {UserData} from "../model/UserData";

/**
 * 유저 관련 UseCase
 */
export class UserUseCase {
    constructor(private readonly userRepository: UserRepositoryImpl) {
    }

    // 유저 상세 조회
    async getUser(userId: string): Promise<UserData | null> {
        try {
            const [user] = await Promise.all([this.userRepository.getUser(userId)]);
            return user;
        } catch (e) {
            throw e;
        }
    }

    // 유저 목록 조회
    async getUserList(): Promise<Array<UserData>> {
        try {
            const [userList] = await Promise.all([this.userRepository.getUserList()]);
            return userList;
        } catch (e) {
            throw e;
        }
    }

    // 유저 생성
    async createUser(userData: UserData): Promise<boolean> {
        try {
            const [isCreate] = await Promise.all([this.userRepository.createUser(userData)]);
            return isCreate
        } catch (e) {
            throw e;
        }
    }

    // 유저 수정
    async modifyUser(userData: UserData): Promise<boolean> {
        try {
            const [isModify] = await Promise.all([this.userRepository.modifyUser(userData)]);
            return isModify;
        } catch (e) {
            throw e;
        }
    }

    // 유저 삭제
    async deleteUser(userId: string): Promise<boolean> {
        try {
            const [isDelete] = await Promise.all([this.userRepository.deleteUser(userId)]);
            return isDelete;
        } catch (e) {
            throw e;
        }
    }
}