require('dotenv').config()
const mysql = require('mysql')

const sql = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_MDP,
    database: process.env.DB_NAME
})

sql.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    sql.query(
        "CREATE TABLE `users` (`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, `login` varchar(30) COLLATE utf8_bin NOT NULL, `password` varchar(30) NOT NULL, `created_at` DATE, `updated_at` DATE);",
        function (err, result) {
            if (err) throw err;
            console.log("Table users created");
        });
    sql.query(
        "CREATE TABLE `messages` (`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, `content` TEXT COLLATE utf8_bin NOT NULL, `created_at` DATE);",
        function (err, result) {
            if (err) throw err;
            console.log("Table messages created");
        });
});

module.exports = sql