import React, { Component } from 'react'
// import axios from 'axios'
import socket from '../utils/socket'
// import qs from 'qs'
import '../styles/chat.css'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import Header from '../component/Header'

class ChatPage extends Component {

    state = {
        chatInfo: [],
        incomingChat: [],
        myID: this.props.service.customer_id,
        targetID: this.props.service.mechanic_id,
        name: this.props.service.customer_data.name,
        target: this.props.service.mechanic_data.machanic_name, // Machanic
        message: "",
        onSocket: false,
        channal: '',
        isSuccess : false
    }

    componentDidMount = () => {
        socket.on('getNewMessage', (data) => {
            const temp = this.state.incomingChat
            temp.push(data)
            this.setState({ incomingChat: temp })
        })
        if (localStorage.getItem('role') === 'mechanic') {
            console.log(localStorage.getItem('customer_data'))
            this.setState({ myID: localStorage.getItem('mechanic_id') })
            this.setState({ targetID: localStorage.getItem('customer_id') })
            this.setState({ name: localStorage.getItem('mechanic_name') })
            this.setState({ target: localStorage.getItem('customer_name') })

        } else {
            this.setState({ targetID: localStorage.getItem('mechanic_id') })
            this.setState({ myID: localStorage.getItem('customer_id') })
            this.setState({ target: localStorage.getItem('mechanic_name') })
            this.setState({ name: localStorage.getItem('customer_name') })
        }

        this.setState({ channel: localStorage.getItem('mechanic_id') + localStorage.getItem('customer_id') })
        socket.on(this.state.channal, (data) => {
            const temp = this.state.incomingChat
            temp.push(data)
            this.setState({ incomingChat: temp })
        })
    }

    handleSendMessage = () => {
        console.log(this.state.name)
        this.setState({ message: '' })
        socket.emit('newMessage', { channal: this.state.channal, data: [this.state.name, this.state.message] })
    }

    handleMessageChange = (event) => {
        this.setState({ message: event.target.value })
    }

    clearLocalStorage = () => {
        localStorage.removeItem('role')
        localStorage.removeItem('mechanic_name')
        localStorage.removeItem('mechanic_id')
        localStorage.removeItem('customer_name')
        localStorage.removeItem('customer_id')
        this.setState({isSuccess:true})
    }


    render() {
        if(this.state.isSuccess){
            this.setState({isSuccess: false})
            return <Redirect to="/" />
        }
        console.log(this.state.myID + ' ' + this.state.targetID)
        let buttonClear = <div></div>
        if(localStorage.getItem('role')==='mechanic'){
            buttonClear = (<button className="clearLocalStorage" onClick={this.clearLocalStorage} >ให้บริการเสร็จสิ้น</button>)
        }
        return (
            <div className="chatPage">
                <Header />
                <div className='chat-title'>
                    {`M E S S A G E`}
                </div>
                <div className="chat-box">
                    {this.state.incomingChat.map(item => {
                        return (<li className='message'>
                            <div className="name_chat">
                                {`คุณ ${item[0]}`}
                            </div>
                            <div className="text_chat">{item[1]}</div>
                        </li>)
                    })}
                </div>
                <div className="sendMsg">
                    <input value={this.state.message} onChange={this.handleMessageChange} className='messageInput' placeholder='Send your message'></input>
                    <button onClick={this.handleSendMessage} className='msg-btn'>Send</button>
                </div>

                {buttonClear}
            </div>

        )
    }
}


const mapStateToProps = (state) => ({
    service: state.service,
    auth: state.auth
})

export default connect(mapStateToProps)(ChatPage)