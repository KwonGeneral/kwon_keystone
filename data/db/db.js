/**
 * DB 관련 설정
 */
const maria = require(process.env.DB_TYPE);
const conn = maria.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

module.exports = conn;