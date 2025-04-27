const mysql = require('mysql2/promise');


//dev database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '你的数据库密码',
  database: '你的数据库名',
});

module.exports = pool;
