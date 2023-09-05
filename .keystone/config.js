"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default,
  modelList: () => modelList
});
module.exports = __toCommonJS(keystone_exports);
var crypto = __toESM(require("crypto"));
var auth = __toESM(require("@keystone-6/auth"));
var core_session = __toESM(require("@keystone-6/core/session"));
var core11 = __toESM(require("@keystone-6/core"));

// data/model/AppInfoModel.ts
var fields = __toESM(require("@keystone-6/core/fields"));
var access = __toESM(require("@keystone-6/core/access"));
var core = __toESM(require("@keystone-6/core"));
var AppInfoModel = core.list(
  {
    // 접근 권한
    access: access.allowAll,
    // 필드 선언
    fields: {
      // 버전
      version: fields.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 이름
      name: fields.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 헤더
      header: fields.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 제목
      title: fields.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 내용
      content: fields.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 설명
      description: fields.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 빌드 번호
      buildNumber: fields.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 패키지명
      packageName: fields.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 수정일
      updatedAt: fields.timestamp(
        {
          db: { updatedAt: true },
          defaultValue: { kind: "now" }
        }
      ),
      // 생성일
      createdAt: fields.timestamp(
        {
          defaultValue: { kind: "now" }
        }
      )
    }
  }
);

// data/model/AttachmentModel.ts
var fields2 = __toESM(require("@keystone-6/core/fields"));
var access2 = __toESM(require("@keystone-6/core/access"));
var core2 = __toESM(require("@keystone-6/core"));
var AttachmentModel = core2.list(
  {
    // 접근 권한
    access: access2.allowAll,
    // 필드 선언
    fields: {
      // 이름
      name: fields2.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 헤더
      header: fields2.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 제목
      title: fields2.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 내용
      content: fields2.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 설명
      description: fields2.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 크기
      size: fields2.integer(
        {
          validation: { isRequired: false }
        }
      ),
      // Base64 데이터
      base64: fields2.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 확장자
      extension: fields2.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 타입 (0: 이미지, 1: 동영상, 2: 음악, 3: 문서, 4: 기타)
      type: fields2.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 수정일
      updatedAt: fields2.timestamp(
        {
          db: { updatedAt: true },
          defaultValue: { kind: "now" }
        }
      ),
      // 생성일
      createdAt: fields2.timestamp(
        {
          defaultValue: { kind: "now" }
        }
      )
    }
  }
);

// data/model/LocationModel.ts
var fields3 = __toESM(require("@keystone-6/core/fields"));
var access3 = __toESM(require("@keystone-6/core/access"));
var core3 = __toESM(require("@keystone-6/core"));
var LocationModel = core3.list(
  {
    // 접근 권한
    access: access3.allowAll,
    // 필드 선언
    fields: {
      // 이름
      name: fields3.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 헤더
      header: fields3.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 제목
      title: fields3.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 내용
      content: fields3.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 설명
      description: fields3.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 주소
      address: fields3.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 상세 주소
      addressDetail: fields3.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 위도
      latitude: fields3.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 경도
      longitude: fields3.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 수정일
      updatedAt: fields3.timestamp(
        {
          db: { updatedAt: true },
          defaultValue: { kind: "now" }
        }
      ),
      // 생성일
      createdAt: fields3.timestamp(
        {
          defaultValue: { kind: "now" }
        }
      )
    }
  }
);

// data/model/PostModel.ts
var fields4 = __toESM(require("@keystone-6/core/fields"));
var access4 = __toESM(require("@keystone-6/core/access"));
var core4 = __toESM(require("@keystone-6/core"));
var PostModel = core4.list(
  {
    // 접근 권한
    access: access4.allowAll,
    // 필드 선언
    fields: {
      // 이름
      name: fields4.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 헤더
      header: fields4.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 제목
      title: fields4.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 내용
      content: fields4.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 설명
      description: fields4.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 작성자
      author: fields4.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 상태 (0: 비공개, 1: 공개)
      status: fields4.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 링크
      url: fields4.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 상단 고정 여부
      isTopFixed: fields4.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 중요도 (0: 일반, 1: 중요)
      level: fields4.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 수정일
      updatedAt: fields4.timestamp(
        {
          db: { updatedAt: true },
          defaultValue: { kind: "now" }
        }
      ),
      // 생성일
      createdAt: fields4.timestamp(
        {
          defaultValue: { kind: "now" }
        }
      )
    }
  }
);

// data/model/RuleModel.ts
var fields5 = __toESM(require("@keystone-6/core/fields"));
var access5 = __toESM(require("@keystone-6/core/access"));
var core5 = __toESM(require("@keystone-6/core"));
var RuleModel = core5.list(
  {
    // 접근 권한
    access: access5.allowAll,
    // 필드 선언
    fields: {
      // 이름
      name: fields5.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 헤더
      header: fields5.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 제목
      title: fields5.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 내용
      content: fields5.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 설명
      description: fields5.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 수정일
      updatedAt: fields5.timestamp(
        {
          db: { updatedAt: true },
          defaultValue: { kind: "now" }
        }
      ),
      // 생성일
      createdAt: fields5.timestamp(
        {
          defaultValue: { kind: "now" }
        }
      )
    }
  }
);

// data/model/TermsModel.ts
var fields6 = __toESM(require("@keystone-6/core/fields"));
var access6 = __toESM(require("@keystone-6/core/access"));
var core6 = __toESM(require("@keystone-6/core"));
var TermsModel = core6.list(
  {
    // 접근 권한
    access: access6.allowAll,
    // 필드 선언
    fields: {
      // 이름
      name: fields6.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 헤더
      header: fields6.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 제목
      title: fields6.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 내용
      content: fields6.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 설명
      description: fields6.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 수정일
      updatedAt: fields6.timestamp(
        {
          db: { updatedAt: true },
          defaultValue: { kind: "now" }
        }
      ),
      // 생성일
      createdAt: fields6.timestamp(
        {
          defaultValue: { kind: "now" }
        }
      )
    }
  }
);

// data/model/UserModel.ts
var fields7 = __toESM(require("@keystone-6/core/fields"));
var access7 = __toESM(require("@keystone-6/core/access"));
var core7 = __toESM(require("@keystone-6/core"));
var UserModel = core7.list(
  {
    // 접근 권한
    access: access7.allowAll,
    // 필드 선언
    fields: {
      // 유저 레벨 (0: 자녀, 1: 학부모, 99: 관리자)
      level: fields7.integer(
        {
          validation: { isRequired: true },
          defaultValue: 0
        }
      ),
      // 이름
      name: fields7.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 이메일
      email: fields7.text(
        {
          validation: { isRequired: false },
          isIndexed: "unique"
        }
      ),
      // 비밀번호
      password: fields7.password(
        {
          validation: { isRequired: true }
        }
      ),
      // 휴대폰 번호
      phone: fields7.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 주소
      address: fields7.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 상세 주소
      addressDetail: fields7.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 성별 (0: 남성, 1: 여성)
      gender: fields7.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 생년월일
      birthDay: fields7.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 수정일
      updatedAt: fields7.timestamp(
        {
          db: { updatedAt: true },
          defaultValue: { kind: "now" }
        }
      ),
      // 생성일
      createdAt: fields7.timestamp(
        {
          defaultValue: { kind: "now" }
        }
      )
    },
    hooks: {
      afterOperation: async ({ operation, listKey, context, resolvedData }) => {
        await context.db.LogModel.createOne({
          data: {
            name: operation + " " + listKey
          }
        });
      }
    }
  }
);

// data/model/WebSiteInfoModel.ts
var fields8 = __toESM(require("@keystone-6/core/fields"));
var access8 = __toESM(require("@keystone-6/core/access"));
var core8 = __toESM(require("@keystone-6/core"));
var WebSiteInfoModel = core8.list(
  {
    // 접근 권한
    access: access8.allowAll,
    // 필드 선언
    fields: {
      // 주소
      url: fields8.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 이름
      name: fields8.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 헤더
      header: fields8.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 제목
      title: fields8.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 내용
      content: fields8.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 설명
      description: fields8.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 수정일
      updatedAt: fields8.timestamp(
        {
          db: { updatedAt: true },
          defaultValue: { kind: "now" }
        }
      ),
      // 생성일
      createdAt: fields8.timestamp(
        {
          defaultValue: { kind: "now" }
        }
      )
    }
  }
);

// data/model/WebSiteInfo_AppInfo_Model.ts
var fields9 = __toESM(require("@keystone-6/core/fields"));
var access9 = __toESM(require("@keystone-6/core/access"));
var core9 = __toESM(require("@keystone-6/core"));
var import_fields = require("@keystone-6/core/fields");
var WebSiteInfo_AppInfo_Model = core9.list(
  {
    // 접근 권한
    access: access9.allowAll,
    // 필드 선언
    fields: {
      // 웹 사이트 ID
      websiteId: (0, import_fields.relationship)(
        {
          ref: "WebSiteInfoModel",
          many: false
        }
      ),
      // 앱 정보 ID 리스트
      appInfoList: (0, import_fields.relationship)(
        {
          ref: "AppInfoModel",
          many: true
        }
      ),
      // 수정일
      updatedAt: fields9.timestamp(
        {
          db: { updatedAt: true },
          defaultValue: { kind: "now" }
        }
      ),
      // 생성일
      createdAt: fields9.timestamp(
        {
          defaultValue: { kind: "now" }
        }
      )
    }
  }
);

// common/JsonCommon.ts
var Response = (data) => {
  let code = "200";
  let message = "OK";
  let result = [];
  if (data == null) {
    result = [];
  } else if (typeof data == "boolean") {
    return {
      result: {
        code,
        message
      },
      data
    };
  } else {
    if (data instanceof Array) {
      result = data;
    } else {
      result.push(data);
    }
  }
  return {
    result: {
      code,
      message
    },
    data
  };
};

// domain/usecase/UserUseCase.ts
var UserUseCase = class {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  // 유저 상세 조회
  async getUser(userId) {
    try {
      const [user] = await Promise.all([this.userRepository.getUser(userId)]);
      return user;
    } catch (e) {
      throw e;
    }
  }
  // 유저 목록 조회
  async getUserList() {
    try {
      const [userList] = await Promise.all([this.userRepository.getUserList()]);
      return userList;
    } catch (e) {
      throw e;
    }
  }
  // 유저 생성
  async createUser(userData) {
    try {
      const [isCreate] = await Promise.all([this.userRepository.createUser(userData)]);
      return isCreate;
    } catch (e) {
      throw e;
    }
  }
  // 유저 수정
  async modifyUser(userData) {
    try {
      const [isModify] = await Promise.all([this.userRepository.modifyUser(userData)]);
      return isModify;
    } catch (e) {
      throw e;
    }
  }
  // 유저 삭제
  async deleteUser(userId) {
    try {
      const [isDelete] = await Promise.all([this.userRepository.deleteUser(userId)]);
      return isDelete;
    } catch (e) {
      throw e;
    }
  }
};

// domain/model/UserData.ts
var UserData = class {
  id;
  // 고유 키
  name;
  // 이름
  email;
  // 이메일
  password;
  // 비밀번호
  level;
  // 권한 (0: 일반, 99: 관리자)
  phone;
  // 전화번호
  address;
  // 주소
  addressDetail;
  // 상세주소
  gender;
  // 성별 (0: 남성, 1: 여성)
  birthDay;
  // 생년월일
  createdAt;
  // 생성일
  updatedAt;
  // 수정일
  constructor(id, name, email, password2, level, phone, address, addressDetail, gender, birthDay, createdAt, updatedAt) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password2;
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
  toString() {
    return "id: " + this.id + ", name: " + this.name + ", email: " + this.email + ", password: " + this.password + ", level: " + this.level + ", phone: " + this.phone + ", address: " + this.address + ", addressDetail: " + this.addressDetail + ", gender: " + this.gender + ", birthDay: " + this.birthDay + ", createdAt: " + this.createdAt + ", updatedAt: " + this.updatedAt;
  }
};
function toUserData(userModel) {
  if (userModel == null)
    return null;
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
    userModel.updatedAt
  );
}
function toUserModel(userData) {
  return {
    name: userData.name,
    email: userData.email,
    password: userData.password,
    level: userData.level != "" ? parseInt(userData.level) : 0,
    phone: userData.phone,
    address: userData.address,
    addressDetail: userData.addressDetail,
    gender: userData.gender,
    birthDay: userData.birthDay
  };
}

// common/logger.ts
var import_winston = __toESM(require("winston"));
var logger = (0, import_winston.createLogger)({
  transports: [
    new import_winston.transports.Console({
      level: "debug",
      format: import_winston.format.combine(
        import_winston.format.label({ label: "[my-server]" }),
        import_winston.format.timestamp({
          format: "YYYY-MM-DD HH:mm:ss"
        }),
        import_winston.format.colorize(),
        import_winston.format.printf((i) => `${i.timestamp} - ${i.level}: ${i.label} ${i.message}`)
      )
    })
  ]
});
var customLevels = {
  e: 0,
  w: 1,
  i: 2,
  d: 3,
  s: 4
};
var customColors = {
  e: "red",
  w: "yellow",
  i: "cyan",
  d: "magenta",
  s: "gray"
};
import_winston.default.addColors(customColors);
var Log = (0, import_winston.createLogger)({
  levels: customLevels,
  format: import_winston.format.combine(
    import_winston.format.label({ label: "[KWON_LOG]" }),
    import_winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    import_winston.format.colorize(),
    // 색상을 보고싶다면 꼭 추가!
    import_winston.format.printf((i) => `${i.timestamp} - ${i.level}: ${i.label} ${i.message}`)
  ),
  transports: [
    new import_winston.transports.Console({ level: "d" })
  ]
});
var ErrorLog = (quickTag, message) => {
  Log.e("[ " + quickTag + " ] \u2605 Error Start \u2605 " + message + "\n[ " + quickTag + " ] \u2605 Error End \u2605");
};

// data/repository/UserRepository.ts
var UserRepository = class {
  // Express App
  app;
  // Keystone Context
  context;
  constructor(app, context) {
    this.app = app;
    this.context = context;
  }
  // 유저 상세 조회
  getUser = async (userId) => {
    try {
      let findData = await this.context.db.UserModel.findOne({
        where: { id: userId }
        // Assuming id is of type string in PrismaUserModel
      });
      return toUserData(findData);
    } catch (e) {
      ErrorLog("UserRepository", e);
      throw e;
    }
  };
  // 유저 목록 조회
  getUserList = async () => {
    try {
      let findList = await this.context.db.UserModel.findMany();
      let resultList = Array();
      findList.forEach((value, index, array) => {
        let convert = toUserData(value);
        if (convert != null) {
          resultList.push(convert);
        }
      });
      return resultList;
    } catch (e) {
      ErrorLog("UserRepository", e);
      throw e;
    }
  };
  // 유저 생성
  createUser = async (userData) => {
    try {
      await this.context.db.UserModel.createOne({
        data: toUserModel(userData)
      });
      return true;
    } catch (e) {
      ErrorLog("UserRepository", e);
      throw e;
    }
  };
  // 유저 삭제
  deleteUser = async (userId) => {
    try {
      await this.context.db.UserModel.deleteOne({
        where: { id: userId.toString() }
        // Assuming id is of type string in PrismaUserModel
      });
      return true;
    } catch (e) {
      ErrorLog("UserRepository", e);
      throw e;
    }
  };
  // 유저 수정
  modifyUser = async (userData) => {
    try {
      if (!userData.id) {
        Log.e("User ID is missing for modification.");
        return false;
      }
      await this.context.db.UserModel.updateOne({
        where: { id: userData.id.toString() },
        data: toUserModel(userData)
      });
      return true;
    } catch (e) {
      ErrorLog("UserRepository", e);
      throw e;
    }
  };
};

// presenter/api/UserApi.ts
var getUserList = (app, commonContext) => {
  app.get(
    "/api/user",
    async (req, res, errorHandling) => {
      Log.d("getUserList");
      try {
        if (req.query.userId != null && req.query.userId != "") {
          Log.d("userId 0: " + req.query.userId);
          res.json(Response(await new UserUseCase(new UserRepository(app, commonContext)).getUser(req.query.userId)));
        } else {
          Log.d("userId 1: " + req.query.userId);
          res.json(Response(await new UserUseCase(new UserRepository(app, commonContext)).getUserList()));
        }
      } catch (e) {
        errorHandling(e);
      }
    }
  );
};
var createUser = (app, commonContext) => {
  app.post(
    "/api/user",
    async (req, res, errorHandling) => {
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
        errorHandling(e);
      }
    }
  );
};
var modifyUser = (app, commonContext) => {
  app.put(
    "/api/user",
    async (req, res, errorHandling) => {
      try {
        res.json(Response(await new UserUseCase(new UserRepository(app, commonContext)).modifyUser(new UserData(
          req.body.id,
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
        errorHandling(e);
      }
    }
  );
};
var deleteUser = (app, commonContext) => {
  app.delete("/api/user", async (req, res, errorHandling) => {
    try {
      res.json(Response(await new UserUseCase(new UserRepository(app, commonContext)).deleteUser(req.body.id)));
    } catch (e) {
      errorHandling(e);
    }
  });
};

// common/ErrorHandling.ts
var import_graphql = require("graphql");
var ErrorHandling = (error) => {
  let code = "P0";
  let target = "";
  if (error instanceof import_graphql.GraphQLError) {
    if (error.extensions.prisma != null) {
      target = error.extensions.prisma.meta.target != null ? error.extensions.prisma.meta.target : "";
      code = error.extensions.prisma.code != null ? error.extensions.prisma.code : "P0";
    }
  } else if (error instanceof TypeError) {
    code = "P100";
  } else {
    code = "P0";
  }
  return {
    result: {
      code,
      message: target != "" ? getErrorMessage(code) + " ( " + target + " )" : getErrorMessage(code)
    },
    data: []
  };
};
var getErrorMessage = (code) => {
  let message = "";
  switch (code) {
    case "P0":
      message = "\uC54C \uC218 \uC5C6\uB294 \uC5D0\uB7EC \uCF54\uB4DC\uC785\uB2C8\uB2E4.";
      break;
    case "P100":
      message = "\uC62C\uBC14\uB974\uC9C0 \uC54A\uB294 \uD0C0\uC785\uC774 \uC0AC\uC6A9\uB418\uC5C8\uC2B5\uB2C8\uB2E4.";
      break;
    case "P1000":
      message = "\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC11C\uBC84 \uC778\uC99D\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4. \uC81C\uACF5\uB41C \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC790\uACA9\uC99D\uBA85\uC774 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC720\uD6A8\uD55C \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC790\uACA9\uC99D\uBA85\uC744 \uC81C\uACF5\uD574\uC8FC\uC138\uC694.";
      break;
    case "P1001":
      message = "\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC11C\uBC84\uC5D0 \uC5F0\uACB0\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC11C\uBC84\uAC00 \uC2E4\uD589 \uC911\uC778\uC9C0 \uD655\uC778\uD574\uC8FC\uC138\uC694.";
      break;
    case "P1002":
      message = "\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC11C\uBC84\uC5D0\uB294 \uB3C4\uB2EC\uD588\uC9C0\uB9CC \uC2DC\uAC04\uC774 \uCD08\uACFC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.";
      break;
    case "P1003":
      message = "\uD574\uB2F9 \uC704\uCE58\uC5D0 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
      break;
    case "P1008":
      message = "\uC791\uC5C5\uC774 \uC2DC\uAC04 \uCD08\uACFC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.";
      break;
    case "P1009":
      message = "\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC11C\uBC84\uC5D0 \uC774\uBBF8 \uD574\uB2F9 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uAC00 \uC874\uC7AC\uD569\uB2C8\uB2E4.";
      break;
    case "P1010":
      message = "\uC0AC\uC6A9\uC790\uB294 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0 \uC561\uC138\uC2A4\uB97C \uAC70\uBD80\uB2F9\uD588\uC2B5\uB2C8\uB2E4.";
      break;
    case "P1011":
      message = "TLS \uC5F0\uACB0\uC744 \uC5EC\uB294 \uC911 \uC624\uB958 \uBC1C\uC0DD.";
      break;
    case "P1012":
      message = "Prisma\uB97C \uBC84\uC804 4.0.0 \uC774\uC0C1\uC73C\uB85C \uC5C5\uADF8\uB808\uC774\uB4DC \uD55C \uD6C4\uC5D0 \uD574\uB2F9 \uC624\uB958 \uCF54\uB4DC\uAC00 \uBC1C\uC0DD\uD558\uBA74, \uC5C5\uADF8\uB808\uC774\uB4DC \uAC00\uC774\uB4DC\uB97C \uCC38\uC870\uD558\uC138\uC694.";
      break;
    case "P1013":
      message = "\uC81C\uACF5\uB41C \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uBB38\uC790\uC5F4\uC774 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
      break;
    case "P1014":
      message = "\uBAA8\uB378\uC5D0 \uB300\uD55C \uAE30\uBCF8 \uC694\uC18C\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
      break;
    case "P1015":
      message = "Prisma \uC2A4\uD0A4\uB9C8\uB294 \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uBC84\uC804\uC5D0 \uC9C0\uC6D0\uB418\uC9C0 \uC54A\uB294 \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.";
      break;
    case "P1016":
      message = "\uC6D0\uC2DC \uCFFC\uB9AC\uC758 \uB9E4\uAC1C \uBCC0\uC218 \uC218\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
      break;
    case "P1017":
      message = "\uC11C\uBC84\uAC00 \uC5F0\uACB0\uC744 \uC885\uB8CC\uD588\uC2B5\uB2C8\uB2E4.";
      break;
    case "P2000":
      message = "\uC81C\uACF5\uB41C \uCEEC\uB7FC \uAC12\uC774 \uCEEC\uB7FC \uC720\uD615\uC5D0 \uBE44\uD574 \uB108\uBB34 \uAE41\uB2C8\uB2E4.";
      break;
    case "P2001":
      message = "where \uC870\uAC74\uC5D0\uC11C \uAC80\uC0C9\uB41C \uB808\uCF54\uB4DC\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
      break;
    case "P2002":
      message = "\uC720\uB2C8\uD06C \uC81C\uC57D \uC870\uAC74\uC774 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.";
      break;
    case "P2003":
      message = "\uC678\uB798 \uD0A4 \uC81C\uC57D \uC870\uAC74\uC774 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.";
      break;
    case "P2004":
      message = "\uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0\uC11C \uC81C\uC57D \uC870\uAC74\uC774 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.";
      break;
    case "P2005":
      message = "\uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0 \uC800\uC7A5\uB41C \uAC12\uC774 \uD544\uB4DC \uC720\uD615\uC5D0 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
      break;
    case "P2006":
      message = "\uC81C\uACF5\uB41C \uAC12\uC774 \uD574\uB2F9 \uBAA8\uB378\uC758 \uD544\uB4DC\uC5D0 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
      break;
    case "P2007":
      message = "\uB370\uC774\uD130 \uC720\uD6A8\uC131 \uAC80\uC0AC \uC624\uB958.";
      break;
    case "P2008":
      message = "\uCFFC\uB9AC \uAD6C\uBB38 \uBD84\uC11D\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.";
      break;
    case "P2009":
      message = "\uCFFC\uB9AC \uC720\uD6A8\uC131 \uAC80\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.";
      break;
    case "P2010":
      message = "\uC6D0\uC2DC \uCFFC\uB9AC \uC2E4\uD328.";
      break;
    case "P2011":
      message = "Null \uC81C\uC57D \uC870\uAC74 \uC704\uBC18.";
      break;
    case "P2012":
      message = "\uD544\uC694\uD55C \uAC12\uC774 \uB204\uB77D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.";
      break;
    case "P2013":
      message = "\uD544\uB4DC\uC5D0 \uD544\uC694\uD55C \uC778\uC218\uAC00 \uB204\uB77D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.";
      break;
    case "P2014":
      message = "\uC2DC\uB3C4\uD55C \uBCC0\uACBD\uC774 \uB450 \uBAA8\uB378 \uAC04\uC758 \uD544\uC694\uD55C \uAD00\uACC4\uB97C \uC704\uBC18\uD569\uB2C8\uB2E4.";
      break;
    case "P2015":
      message = "\uAD00\uB828 \uB808\uCF54\uB4DC\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
      break;
    case "P2016":
      message = "\uCFFC\uB9AC \uD574\uC11D \uC624\uB958.";
      break;
    case "P2017":
      message = "\uB450 \uBAA8\uB378 \uAC04\uC758 \uAD00\uACC4 \uB808\uCF54\uB4DC\uAC00 \uC5F0\uACB0\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
      break;
    case "P2018":
      message = "\uD544\uC694\uD55C \uC5F0\uACB0\uB41C \uB808\uCF54\uB4DC\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
      break;
    case "P2019":
      message = "\uC785\uB825 \uC624\uB958.";
      break;
    case "P2020":
      message = "\uC720\uD615\uC758 \uBC94\uC704\uB97C \uBC97\uC5B4\uB09C \uAC12.";
      break;
    case "P2021":
      message = "\uD604\uC7AC \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0 \uD574\uB2F9 \uD14C\uC774\uBE14\uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
      break;
    case "P2022":
      message = "\uD604\uC7AC \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0 \uD574\uB2F9 \uCEEC\uB7FC\uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
      break;
    case "P2023":
      message = "\uBD88\uC77C\uCE58\uD558\uB294 \uCEEC\uB7FC \uB370\uC774\uD130.";
      break;
    case "P2024":
      message = "\uC5F0\uACB0 \uD480\uC5D0\uC11C \uC0C8 \uC5F0\uACB0\uC744 \uAC00\uC838\uC624\uB294 \uC911 \uC2DC\uAC04 \uCD08\uACFC.";
      break;
    case "P2025":
      message = "\uD544\uC694\uD55C \uB808\uCF54\uB4DC\uB97C \uCC3E\uC9C0 \uBABB\uD574 \uC791\uC5C5\uC774 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.";
      break;
    case "P2026":
      message = "\uCFFC\uB9AC\uC5D0\uC11C \uC0AC\uC6A9\uB41C \uD604\uC7AC \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC81C\uACF5\uC790\uAC00 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uAE30\uB2A5.";
      break;
    case "P2027":
      message = "\uCFFC\uB9AC \uC2E4\uD589 \uC911 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0\uC11C \uC5EC\uB7EC \uC624\uB958 \uBC1C\uC0DD.";
      break;
    case "P2028":
      message = "\uD2B8\uB79C\uC7AD\uC158 API \uC624\uB958.";
      break;
    case "P2030":
      message = "\uAC80\uC0C9\uC5D0 \uC0AC\uC6A9\uD560 \uC804\uCCB4 \uD14D\uC2A4\uD2B8 \uC778\uB371\uC2A4\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
      break;
    case "P2031":
      message = "Prisma\uB294 \uD2B8\uB79C\uC7AD\uC158\uC744 \uC218\uD589\uD574\uC57C \uD569\uB2C8\uB2E4. MongoDB \uC11C\uBC84\uB97C \uBCF5\uC81C \uC138\uD2B8\uB85C \uC2E4\uD589\uD574\uC57C \uD569\uB2C8\uB2E4.";
      break;
    case "P2033":
      message = "\uCFFC\uB9AC\uC5D0\uC11C \uC0AC\uC6A9\uB41C \uC22B\uC790\uAC00 64\uBE44\uD2B8 \uC815\uC218\uC5D0 \uB9DE\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
      break;
    case "P2034":
      message = "\uC4F0\uAE30 \uCDA9\uB3CC \uB610\uB294 \uAD50\uCC29 \uC0C1\uD0DC\uB85C \uC778\uD574 \uD2B8\uB79C\uC7AD\uC158\uC774 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.";
      break;
    case "P3000":
      message = "\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC0DD\uC131\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.";
      break;
    case "P3001":
      message = "\uD30C\uAD34\uC801\uC778 \uBCC0\uACBD\uACFC \uB370\uC774\uD130 \uC190\uC2E4 \uAC00\uB2A5\uC131\uC774 \uC788\uB294 \uB9C8\uC774\uADF8\uB808\uC774\uC158 \uAC00\uB2A5.";
      break;
    case "P3002":
      message = "\uC2DC\uB3C4\uD55C \uB9C8\uC774\uADF8\uB808\uC774\uC158\uC774 \uB418\uB3CC\uB824\uC84C\uC2B5\uB2C8\uB2E4.";
      break;
    case "P3003":
      message = "\uB9C8\uC774\uADF8\uB808\uC774\uC158\uC758 \uD615\uC2DD\uC774 \uBCC0\uACBD\uB418\uC5B4 \uC800\uC7A5\uB41C \uB9C8\uC774\uADF8\uB808\uC774\uC158\uC774 \uB354 \uC774\uC0C1 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
      break;
    case "P3004":
      message = "\uC774 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uB294 \uC2DC\uC2A4\uD15C \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC785\uB2C8\uB2E4. Prisma migrate\uB85C \uC218\uC815\uD558\uC9C0 \uB9C8\uC2ED\uC2DC\uC624.";
      break;
    case "P3005":
      message = "\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC2A4\uD0A4\uB9C8\uAC00 \uBE44\uC5B4 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
      break;
    case "P3006":
      message = "\uB9C8\uC774\uADF8\uB808\uC774\uC158\uC774 \uC100\uB3C4\uC6B0 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0 \uAE54\uB054\uD558\uAC8C \uC801\uC6A9\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.";
      break;
    case "P3007":
      message = "\uC694\uCCAD\uD55C \uD504\uB9AC\uBDF0 \uAE30\uB2A5 \uC911 \uC77C\uBD80\uB294 \uC544\uC9C1 \uC2A4\uD0A4\uB9C8 \uC5D4\uC9C4\uC5D0\uC11C \uD5C8\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
      break;
    case "P3008":
      message = "\uB9C8\uC774\uADF8\uB808\uC774\uC158\uC774 \uC774\uBBF8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0 \uC801\uC6A9\uB41C \uAC83\uC73C\uB85C \uAE30\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.";
      break;
    case "P3009":
      message = "\uB9C8\uC774\uADF8\uB808\uC774\uD2B8\uB294 \uB300\uC0C1 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0\uC11C \uC2E4\uD328\uD55C \uB9C8\uC774\uADF8\uB808\uC774\uC158\uC744 \uBC1C\uACAC\uD588\uC2B5\uB2C8\uB2E4.";
      break;
    case "P3010":
      message = "\uB9C8\uC774\uADF8\uB808\uC774\uC158 \uC774\uB984\uC774 \uB108\uBB34 \uAE41\uB2C8\uB2E4. 200\uC790\uB97C \uB118\uC9C0 \uC54A\uC544\uC57C \uD569\uB2C8\uB2E4.";
      break;
    case "P3011":
      message = "\uB9C8\uC774\uADF8\uB808\uC774\uC158\uC744 \uB418\uB3CC\uB9B4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0 \uC801\uC6A9\uB418\uC9C0 \uC54A\uC558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.";
      break;
    case "P3012":
      message = "\uB9C8\uC774\uADF8\uB808\uC774\uC158\uC744 \uB418\uB3CC\uB9B4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC2E4\uD328 \uC0C1\uD0DC\uAC00 \uC544\uB2C8\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.";
      break;
    case "P3013":
      message = "\uB370\uC774\uD130 \uC18C\uC2A4 \uC81C\uACF5\uC790 \uBC30\uC5F4\uC740 \uB354 \uC774\uC0C1 \uB9C8\uC774\uADF8\uB808\uC774\uD2B8\uC5D0\uC11C \uC9C0\uC6D0\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
      break;
    case "P3014":
      message = "Prisma Migrate\uAC00 \uC100\uB3C4\uC6B0 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uB97C \uC0DD\uC131\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.";
      break;
    case "P3015":
      message = "\uB9C8\uC774\uADF8\uB808\uC774\uC158 \uD30C\uC77C\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
      break;
    case "P3016":
      message = "\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC7AC\uC124\uC815\uC758 \uB300\uCCB4 \uBC29\uBC95\uC774 \uC2E4\uD328\uD558\uC5EC \uB9C8\uC774\uADF8\uB808\uC774\uD2B8\uAC00 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uB97C \uC644\uC804\uD788 \uC815\uB9AC\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.";
      break;
    case "P3017":
      message = "\uB9C8\uC774\uADF8\uB808\uC774\uC158\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
      break;
    case "P3018":
      message = "\uB9C8\uC774\uADF8\uB808\uC774\uC158 \uC801\uC6A9\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.";
      break;
    case "P3019":
      message = "\uC2A4\uD0A4\uB9C8\uC5D0 \uC9C0\uC815\uB41C \uB370\uC774\uD130 \uC18C\uC2A4 \uC81C\uACF5\uC790\uAC00 migration_lock.toml\uC5D0 \uC9C0\uC815\uB41C \uAC83\uACFC \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
      break;
    case "P3020":
      message = "Azure SQL\uC5D0\uC11C \uC100\uB3C4\uC6B0 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC758 \uC790\uB3D9 \uC0DD\uC131\uC774 \uBE44\uD65C\uC131\uD654\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.";
      break;
    case "P3021":
      message = "\uC774 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0\uC11C \uC678\uB798 \uD0A4\uB97C \uC0DD\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
      break;
    case "P3022":
      message = "\uC774 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0\uC11C DDL (Data Definition Language) SQL \uBB38\uC758 \uC9C1\uC811 \uC2E4\uD589\uC774 \uBE44\uD65C\uC131\uD654\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.";
      break;
    case "P4000":
      message = "\uB0B4\uBD80 \uC870\uC0AC \uC791\uC5C5\uC774 \uC2A4\uD0A4\uB9C8 \uD30C\uC77C\uC744 \uC0DD\uC131\uD558\uB294\uB370 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.";
      break;
    case "P4001":
      message = "\uC870\uC0AC\uB41C \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uAC00 \uBE44\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.";
      break;
    case "P4002":
      message = "\uC870\uC0AC\uB41C \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC758 \uC2A4\uD0A4\uB9C8\uAC00 \uC77C\uAD00\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.";
      break;
    case "P5000":
      message = "\uC11C\uBC84\uAC00 \uC694\uCCAD\uC744 \uC774\uD574\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
      break;
    case "P5001":
      message = "\uC774 \uC694\uCCAD\uC740 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC57C \uD569\uB2C8\uB2E4.";
      break;
    case "P5002":
      message = "\uC81C\uACF5\uB41C \uB370\uC774\uD130 \uC18C\uC2A4\uAC00 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4: \uB370\uC774\uD130 \uC18C\uC2A4\uC758 URL\uC744 \uAD6C\uBB38 \uBD84\uC11D\uD560 \uC218 \uC5C6\uC74C, --data-proxy\uB97C \uC0AC\uC6A9\uD560 \uB54C prisma:// \uD504\uB85C\uD1A0\uCF5C\uC744 \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4, \uC720\uD6A8\uD55C API \uD0A4\uAC00 \uC5C6\uC74C.";
      break;
    case "P5003":
      message = "\uC694\uCCAD\uD55C \uB9AC\uC18C\uC2A4\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
      break;
    case "P5004":
      message = "\uD574\uB2F9 \uAE30\uB2A5\uC740 \uC544\uC9C1 \uAD6C\uD604\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4: beforeExit \uC774\uBCA4\uD2B8\uB294 \uC544\uC9C1 \uC9C0\uC6D0\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
      break;
    case "P5005":
      message = "\uC2A4\uD0A4\uB9C8\uB97C \uC5C5\uB85C\uB4DC\uD574\uC57C \uD569\uB2C8\uB2E4.";
      break;
    case "P5006":
      message = "\uC54C \uC218 \uC5C6\uB294 \uC11C\uBC84 \uC624\uB958\uC785\uB2C8\uB2E4.";
      break;
    case "P5007":
      message = "\uAD8C\uD55C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uC5F0\uACB0 \uBB38\uC790\uC5F4\uC744 \uD655\uC778\uD558\uC138\uC694.";
      break;
    case "P5008":
      message = "\uC0AC\uC6A9\uB7C9\uC744 \uCD08\uACFC\uD588\uC2B5\uB2C8\uB2E4. \uB098\uC911\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694.";
      break;
    case "P5009":
      message = "\uC694\uCCAD\uC774 \uC2DC\uAC04 \uCD08\uACFC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.";
      break;
    case "P5010":
      message = "\uC11C\uBE44\uC2A4\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uAC00\uC838\uC62C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
      break;
    case "P5011":
      message = "\uC694\uCCAD \uB9E4\uAC1C\uBCC0\uC218\uAC00 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
      break;
    case "P5012":
      message = "\uC5D4\uC9C4 \uBC84\uC804\uC774 \uC9C0\uC6D0\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
      break;
    case "P5013":
      message = "\uC5D4\uC9C4\uC774 \uC2DC\uC791\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4: \uAC74\uAC15 \uAC80\uC0AC \uC2DC\uAC04 \uCD08\uACFC";
      break;
    case "P5014":
      message = "\uC54C \uC218 \uC5C6\uB294 \uC5D4\uC9C4 \uC2DC\uC791 \uC624\uB958 (\uBA54\uC2DC\uC9C0\uC640 \uB85C\uADF8 \uD3EC\uD568)";
      break;
    case "P5015":
      message = "\uB300\uD654\uC2DD \uD2B8\uB79C\uC7AD\uC158 \uC624\uB958: \uB300\uD654\uC2DD \uD2B8\uB79C\uC7AD\uC158 ID\uB97C \uAD6C\uBB38 \uBD84\uC11D\uD560 \uC218 \uC5C6\uC74C, \uC9C0\uC815\uB41C \uD638\uC2A4\uD2B8\uC640 \uD2B8\uB79C\uC7AD\uC158 ID\uC5D0 \uB300\uD55C \uCFFC\uB9AC \uC5D4\uC9C4\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC74C, \uB300\uD654\uC2DD \uD2B8\uB79C\uC7AD\uC158\uC744 \uC2DC\uC791\uD560 \uC218 \uC5C6\uC74C.";
      break;
    default:
      message = "\uC54C \uC218 \uC5C6\uB294 \uC5D0\uB7EC \uCF54\uB4DC\uC785\uB2C8\uB2E4.";
  }
  return message;
};

// keystone.ts
var import_dotenv = __toESM(require("dotenv"));

// data/model/LogModel.ts
var fields10 = __toESM(require("@keystone-6/core/fields"));
var access10 = __toESM(require("@keystone-6/core/access"));
var core10 = __toESM(require("@keystone-6/core"));
var LogModel = core10.list(
  {
    // 접근 권한
    access: access10.allowAll,
    // 필드 선언
    fields: {
      // 이름
      name: fields10.text(
        {
          validation: { isRequired: false }
        }
      ),
      // 수정일
      updatedAt: fields10.timestamp(
        {
          db: { updatedAt: true },
          defaultValue: { kind: "now" }
        }
      ),
      // 생성일
      createdAt: fields10.timestamp(
        {
          defaultValue: { kind: "now" }
        }
      )
    }
  }
);

// keystone.ts
import_dotenv.default.config();
var modelList = {
  // @ts-ignore
  "AppInfoModel": AppInfoModel,
  // @ts-ignore
  "AttachmentModel": AttachmentModel,
  // @ts-ignore
  "LocationModel": LocationModel,
  // @ts-ignore
  "PostModel": PostModel,
  // @ts-ignore
  "RuleModel": RuleModel,
  // @ts-ignore
  "TermsModel": TermsModel,
  // @ts-ignore
  "UserModel": UserModel,
  // @ts-ignore
  "WebSiteInfoModel": WebSiteInfoModel,
  // @ts-ignore
  "WebSiteInfo_AppInfo_Model": WebSiteInfo_AppInfo_Model,
  // @ts-ignore
  "LogModel": LogModel
};
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== "production") {
  sessionSecret = crypto.randomBytes(32).toString("hex");
}
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = core_session.statelessSessions({
  maxAge: sessionMaxAge,
  secret: sessionSecret
});
var { withAuth } = auth.createAuth({
  listKey: "UserModel",
  identityField: "email",
  sessionData: "name createdAt",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password", "level"]
  }
});
var keystone_default = withAuth(
  core11.config({
    db: {
      // @ts-ignore
      provider: process.env.DB_TYPE,
      // @ts-ignore
      url: process.env.DB_URL,
      onConnect: async (context) => {
        Log.d("DB Connected");
      },
      enableLogging: true,
      idField: { kind: "uuid" }
    },
    lists: modelList,
    session,
    server: {
      options: {
        // @ts-ignore
        host: process.env.SERVER_HOST,
        // @ts-ignore
        port: process.env.SERVER_PORT
      },
      cors: { origin: ["*"], credentials: true },
      // @ts-ignore
      port: process.env.SERVER_PORT,
      maxFileSize: 200 * 1024 * 1024,
      extendExpressApp: (app, commonContext) => {
        let bodyParser = require("body-parser");
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        Log.d("extendExpressApp");
        getUserList(app, commonContext);
        createUser(app, commonContext);
        modifyUser(app, commonContext);
        deleteUser(app, commonContext);
        app.use((err, req, res, next) => {
          return res.json(ErrorHandling(err));
        });
      },
      extendHttpServer: (httpServer, commonContext, graphQLSchema) => {
      }
    }
  })
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  modelList
});
//# sourceMappingURL=config.js.map
