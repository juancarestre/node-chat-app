var socket = io();
socket.on('connect', function() {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'hola@example.com',
        text: 'Hey. this is hola'
    });

});

socket.on('disconnect', function() {
    console.log('Disconnected from server')
});

socket.on('newMessage', function (message) {
    console.log('newMessage', message)
});

