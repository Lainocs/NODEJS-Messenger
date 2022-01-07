const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path')
const http = require('http')
const { Server } = require('socket.io')
const MessageController = require('./server/controllers/MessageController')

const connectDB = require('./server/database/connection')

const app = express()
const server = http.createServer(app)
const io = new Server(server)

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        MessageController.create
        io.emit('chat message', msg)
    })
})

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

app.use(express.json())

//load router
app.use('/', require('./server/routes/router'))

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})