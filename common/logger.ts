import winston, { Logger, createLogger, transports, format, config } from 'winston';

// winston의 로그 레벨
interface TransformableInfo {
  level: string;
  message: string;
  [key: string]: any;
}

// winston의 기본 로그 레벨
const logger = createLogger({
  transports: [
    new transports.Console({
      level: 'debug',
      format: format.combine(
        format.label({ label: '[my-server]' }),
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.colorize(),
        format.printf((i: TransformableInfo) => `${i.timestamp} - ${i.level}: ${i.label} ${i.message}`),
      )
    })
  ]
});

// 직접 정의한 로그 레벨
const customLevels: config.AbstractConfigSetLevels = {
  e: 0,
  w: 1,
  i: 2,
  d: 3,
  s: 4
}

// 레벨별 색상 * 주어지지않은 색상을 넣을 경우 오류 발생
const customColors: config.AbstractConfigSetColors = {
  e: 'red',
  w: 'yellow',
  i: 'cyan',
  d: 'magenta',
  s: 'gray'
}

// 색상을 추가
winston.addColors(customColors);

// 커스텀 로그 레벨을 사용하기 위해 Logger를 상속받아서 사용
interface CustomLevels extends winston.Logger {
  e: winston.LeveledLogMethod;
  w: winston.LeveledLogMethod;
  i: winston.LeveledLogMethod;
  d: winston.LeveledLogMethod;
  s: winston.LeveledLogMethod;
}

// 커스텀 로그 레벨
export const Log: CustomLevels = <CustomLevels>createLogger({
  levels: customLevels,
  format: format.combine(
    format.label({ label: '[KWON_LOG]' }),
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.colorize(),	// 색상을 보고싶다면 꼭 추가!
    format.printf((i: TransformableInfo) => `${i.timestamp} - ${i.level}: ${i.label} ${i.message}`),
  ),
  transports: [
    new transports.Console({ level: 'd' })
  ]
});

// 에러 로그 출력
export const ErrorLog = (quickTag: string, message: any) => {
    Log.e("[ " + quickTag + " ] ★ Error Start ★ " + message + "\n[ " + quickTag + " ] ★ Error End ★");
}