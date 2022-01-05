const express = require('express')
const { Server } = require('socket.io')
const port = 3000
const app = express()
const { Sequelize } = require('sequelize')
dotenv.config();

const database = process.env.DB_NAME
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

const sequelize = new Sequelize(database, username, password, {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    throw new Error('Unable to connect to the database: ' + error);
}

app.get('/', (req, res) => {
    res.send('Bruh + zizibouche')
})

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})