import { UserModel as PrismaUserModel } from '@prisma/client';

export class UserData {
    id: string;
    name: string;
    email: string;
    password: string;
    level: string;
    phone: string;
    address: string;
    addressDetail: string;
    gender: string;
    birthDay: string;
    createdAt: Date | null;
    updatedAt: Date | null

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

    toString(): string {
        return "id: " + this.id + ", name: " + this.name + ", email: " + this.email + ", password: " + this.password + ", level: " + this.level + ", phone: " + this.phone + ", address: " + this.address + ", addressDetail: " + this.addressDetail + ", gender: " + this.gender + ", birthDay: " + this.birthDay + ", createdAt: " + this.createdAt + ", updatedAt: " + this.updatedAt;
    }
}

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