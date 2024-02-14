const express = require('express');
const app = express();
const http = require('http');
app.use(express.static('public'))
const server = http.createServer(app);
server.listen(3000);
const socketIo = require('socket.io');
const io = socketIo(server);

io.on('connect',function(socket){
    
    socket.on('datos_usuario',function(data){
        console.log('Nueva conexion id: '+socket.id);
        console.log('Usuario conectado: '+data.correo);
        io.emit('datos_return',{user:data.usuario});
    });

    socket.on('send_message',function(data){
        console.log(data.message)
        console.log(data.user)
        io.emit('new_message',{user:data.user,message:data.message});
    });
    
});