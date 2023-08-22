import { UserModel as PrismaUserModel } from '@prisma/client';

/**
 * 유저 데이터
 */
export class UserData {
    id: string;  // 고유 키
    name: string;  // 이름
    email: string;  // 이메일
    password: string;  // 비밀번호
    level: string;  // 권한 (0: 일반, 99: 관리자)
    phone: string;  // 전화번호
    address: string;  // 주소
    addressDetail: string;  // 상세주소
    gender: string;  // 성별 (0: 남성, 1: 여성)
    birthDay: string;  // 생년월일
    createdAt: Date | null;  // 생성일
    updatedAt: Date | null  // 수정일

    constructor(
        id: string,
        name: string,
        email: string,
        password: string,
        level: string,
        phone: string,
        address: string,
        addressDetail: string,
        gender: string,
        birthDay: string,
        createdAt: Date | null,
        updatedAt: Date | null,
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.level = level;
        this.phone = phone;
        this.address = address;
        this.addressDetail = addressDetail;
        this.gender = gender;
        this.birthDay = birthDay;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    // toString 오버라이딩
    toString(): string {
        return "id: " + this.id + ", name: " + this.name + ", email: " + this.email + ", password: " + this.password + ", level: " + this.level + ", phone: " + this.phone + ", address: " + this.address + ", addressDetail: " + this.addressDetail + ", gender: " + this.gender + ", birthDay: " + this.birthDay + ", createdAt: " + this.createdAt + ", updatedAt: " + this.updatedAt;
    }
}

/**
 * 유저 모델을 유저 데이터로 변환
 * @param userModel 유저 모델
 */
export function toUserData(userModel: any): UserData | null {
    if(userModel == null) return null;
    return new UserData(
        userModel.id,
        userModel.name,
        userModel.email,
        userModel.password,
        userModel.level.toString(),
        userModel.phone,
        userModel.address,
        userModel.addressDetail,
        userModel.gender,
        userModel.birthDay,
        userModel.createdAt,
        userModel.updatedAt,
    );
}

/**
 * 유저 데이터를 플라즈마 유저 모델로 변환
 * @param userData 유저 데이터
 */
export function toPrismaUserModel(userData: UserData): Partial<PrismaUserModel> {
    return {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        level: userData.level != "" ? parseInt(userData.level) : 0,
        phone: userData.phone,
        address: userData.address,
        addressDetail: userData.addressDetail,
        gender: userData.gender,
        birthDay: userData.birthDay,
    };
}