const app = require('./app')
const socket = require('socket.io')

const PORT = process.env.PORT || 3005;
const server = app.listen(PORT, () => {
    console.log("Server run on port: ", server.address().port)
})

//open io 
io = socket(server)
io.on('connection', (socket) => {
    console.log('New user connected on IO')
    socket.on('callMechanic', (data) => {
        console.log(data)
        io.sockets.emit('getCallFromUser', data)
    })
})

