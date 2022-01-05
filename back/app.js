require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const db = require('./database')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.get('/getUsers', (req, res) => {
    db.query('SELECT * FROM users', (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

app.get('/getUser/:id', (req, res) => {
    db.query(`SELECT * FROM users WHERE id=${req.params.id}`, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

app.get('/', (req, res) => {
    res.send("zz")
})

app.post('/createUser', (req, res) => {
    let user = {
        login: req.body.login,
        password: req.body.password,
    }
    db.query(`INSERT INTO users (login, password, created_at, updated_at) VALUES ('${user.login}', '${user.password}', NOW(), NOW())`, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

app.delete('/deleteUser/:id', (req, res) => {
    db.query(`DELETE FROM users WHERE id=${req.params.id}`, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

app.put('/updateUser/:id', (req, res) => {
    let newLogin = req.body.login
    let newPassword = req.body.password
    db.query(`UPDATE users SET login = '${newLogin}', password = '${newPassword}', updated_at = NOW() WHERE id=${req.params.id}`, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})