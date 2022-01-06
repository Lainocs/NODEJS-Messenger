require('dotenv').config()
const mysql = require('mysql')

const sql = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_MDP,
})

sql.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    sql.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME};`, function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});

module.exports = sql