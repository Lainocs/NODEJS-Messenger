const mysql = require('mysql');
const dotenv = require('dotenv')
dotenv.config();

const database = process.env.DB_NAME
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD

let db = mysql.createConnection({
    host: "localhost",
    user: user,
    password: password
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    db.query(`CREATE DATABASE ${database};`, function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});
