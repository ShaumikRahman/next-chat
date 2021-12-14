const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const app = express();
const PORT = '8080' || process.env.PORT;

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', socket => {
   // console.log(socket.id);

    socket.on('message', message => {
        console.log(`${message} from ${socket.id}`);
        io.emit('message', message);
    });
});




server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
}); 