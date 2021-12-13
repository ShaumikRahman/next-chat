const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const app = express();
const PORT = '8080' || process.env.PORT;

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', socket => {
    console.log(`Client with ID of ${socket.id} connected with name of ${socket.handshake.query.name}`)

    socket.on('message', message => {
        console.log('message recieved');
    });
});


server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
}); 