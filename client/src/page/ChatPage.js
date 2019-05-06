import React, { Component } from 'react'
import axios from 'axios'
import socket from '../utils/socket'
import qs from 'qs'
import '../styles/chat.css'
import { connect } from 'react-redux'

class ChatPage extends Component {

    state = {
        chatInfo: [],
        incomingChat: [],
        myID: "John",
        targetID: "Bank",
        name: "John",
        target: "Bank",
        message: "",
        onSocket : false
    }


    componentDidMount = () => {

        // axios.get('http://localhost:3005/api/request/messages', {
        //     params: {
        //         name: this.state.myID,
        //         target: this.state.targetID
        //     }
        // })
        // .then((res) => {
        //     this.setState({ chatInfo: res.data });
        //     console.log(res.data)
        // })
        // .catch((err) => {
        //     console.log(err)
        // })
        // Socket on for receive update from server


    }

    handleSendMessage = () => {

        socket.emit('newMessage', {
            channal: this.props.service.customer_id + this.props.service.mechanic_id
            , data: [this.state.myID, this.state.message]
        })

        // const params = {
        //     myID: this.state.myID,
        //     targetID: this.state.targetID,
        //     name: this.state.name,
        //     target: this.state.target,
        //     message: this.state.message,
        // }
        // axios.post('http://localhost:3005/api/request/messages', qs.stringify(params))
        // .then((res) => {
        //     console.log(res.data)
        // })
        // .catch((err) => {
        //     console.log(err)
        // })
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    handleMessageChange = (event) => {
        this.setState({ message: event.target.value })
    }

    setSocket = () => {
        socket.on(this.props.service.customer_id + this.props.service.mechanic_id, (data) => {
            const temp = this.state.incomingChat
            console.log("hello")
            temp.push(data)
            this.setState({ incomingChat: temp })
        })
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps.service)
        if(nextProps.service !== this.props.service){
            this.setSocket()
        }
        return false;
    }
    

    render() {
    
        return (
            <div className='container-fluid'>
                <div className='chatBox'>
                    <div className='chatTitle'>
                        <span>Title of this chat between {this.state.chatInfo.map(info => { return info.persons[0] + ' & ' + info.persons[1] })}</span>
                    </div>
                    <div className='container'>
                        <div className='messageBox'>
                            {/* { this.state.chatInfo.map(info => <li className='message'>{info.persons} : {info.messages[0][0]}</li>)} */}
                            {this.state.chatInfo.map(info => {
                                return (
                                    <div>{info.messages.map(item => {
                                        return <li className='message'>{item[0]} : {item[1]}</li>
                                    })}</div>
                                )
                            })}
                            {this.state.incomingChat.map(info => { return <li className='message'>{info[0]} : {info[1]}</li> })}

                        </div>
                        <input value={this.state.message} onChange={this.handleMessageChange} className='messageInput' placeholder='Send your message'></input>
                        <button onClick={this.handleSendMessage}>Send</button>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    service: state.service,
    auth: state.auth
})

export default connect(mapStateToProps)(ChatPage)