const app = require('./app')
const socketIO = require('socket.io')

const server = app.listen(3000, function () {
    console.log('app listening on port 3000!')
})

const io = socketIO.listen(server)

io.on('connection', client => {
    console.log('user connected')
  
    // เมื่อ Client ตัดการเชื่อมต่อ
    client.on('disconnect', () => {
        console.log('user disconnected')
    })

    // ส่งข้อมูลไปยัง Client ทุกตัวที่เขื่อมต่อแบบ Realtime
    client.on('sent-message', function (message) {
        io.sockets.emit('new-message', message)
    })
})