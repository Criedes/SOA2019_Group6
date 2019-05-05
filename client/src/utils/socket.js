import io from 'socket.io-client'
import global from '../global'


const socket = io(global.OPEN_SOCKET)
export default socket