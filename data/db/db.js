const maria = require('mysql');
const conn = maria.createConnection({
  host: 'localhost',
  port: 3306,
  user: "kwon",
  password: "",
  database: "kwondb"
});

module.exports = conn;