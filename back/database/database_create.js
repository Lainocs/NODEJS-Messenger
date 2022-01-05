const mysql = require('mysql');
const dotenv = require('dotenv')
dotenv.config();

const database = process.env.DB_NAME
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

let db = mysql.createConnection({
    host: "localhost",
    user: username,
    password: password
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    db.query(`CREATE DATABASE IF NOT EXISTS ${database};`, function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});