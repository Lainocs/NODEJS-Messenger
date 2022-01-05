const express = require('express')
const { Server } = require('socket.io')
const port = 3000
const app = express()

app.get('/', (req, res) => {
    res.send('Bruh + zizibouche')
})

app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
})