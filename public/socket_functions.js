const socket= io.connect()
//$('#area_message').hide();
//$('#area_chat').hide();
socket.on('datos_return',function(datos){
    alert('El usuario es: '+datos.user)
    //$('#correo').val('');
    //$('#usuario').val('');
    //$('#area_message').show();
    //$('#area_chat').show();

});

socket.on('new_message',function(datos){
    $('#area_chat').append('<p><strong>'+datos.user+': </strong> ' +datos.message+'</p>')
});


function login(){
    email = $('#correo').val();
    usuario = $('#usuario').val();
    socket.emit('datos_usuario',{correo:email,usuario:usuario});

}

function send_message(){
    message = $('#message').val();
    console.log(message);
    socket.emit('send_message',{message:message,user:usuario});

}
