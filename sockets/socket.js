
const { io } = require('../index');

// Sockets Messages
io.on('connection', client => {
    // client.on('event', data => {/* ... */ });
    console.log('Connected Client!!')
    client.on('disconnect', () => { console.log('Disconnected Client!!'); });

    client.on('message', (payload) => {
        console.log('Works!!', payload);

        io.emit('message', { admin: 'Ok, It works!!' })
    });
});