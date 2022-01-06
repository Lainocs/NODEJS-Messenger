const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path')

const connectDB = require('./server/database/connection')

const app = express()

dotenv.config({ path: './.env' })
const port = process.env.PORT || 3000

app.use(morgan('dev'))

// mongodb connection
connectDB()

app.use(bodyparser.urlencoded({ extended: true }))

app.set("view engine", "ejs")
// app.set("views", path.resolve(__dirname, "views/ejs"))

app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))

//load router
app.use('/', require('./server/routes/router'))

app.listen(port, () => { 
    console.log(`Server is running on http://localhost:${port}`)
})