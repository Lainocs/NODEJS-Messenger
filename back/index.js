const express = require('express')
const { createServer } = require("http");
const { Server } = require('socket.io')
const port = 3000
const app = express()
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
  // ...
});

httpServer.listen(3000);

app.get('/', (req, res) => {
    res.send('Bruh + zizibouche')
})

app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
})
