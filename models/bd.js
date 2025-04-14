var mysql =require('sql2');
var util = require('util');

var pool = mysql.createpool({
    connectionLimit: 10,
    host:process.env.MYSQL_HOSTER,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DB_NAME,
});

pool.query = util.promisify(pool.query);

module.exports = pool;