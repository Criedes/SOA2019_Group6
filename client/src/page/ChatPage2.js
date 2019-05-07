import React, { Component } from 'react'
// import axios from 'axios'
import socket from '../utils/socket'
// import qs from 'qs'
import '../styles/chat.css'
import {connect} from 'react-redux'

class ChatPage2 extends Component {

    state = {
        chatInfo: [],
        incomingChat: [],
        myID: this.props.service.mechanic_id,
        targetID: this.props.service.customer_id,
        name: this.props.service.mechanic_data.machanic_name,
        target: this.props.service.customer_data.name, // Machanic
        message: "",
    }


    componentDidMount = () => {
        // axios.get('http://localhost:3005/api/request/messages', {
        //     params: {
        //         myID: this.state.myID,
        //         targetID: this.state.targetID,
        //         name: this.state.name,
        //         target: this.state.target

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
        socket.on('getNewMessage', (data) => {
            const temp = this.state.incomingChat
            temp.push(data)
            this.setState({ incomingChat: temp})
        })

    }

    handleSendMessage = () => {
        socket.emit('newMessage', [this.state.name, this.state.message])
        //Post message
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
        this.setState({ name: event.target.value})
    }

    handleMessageChange = (event) => {
        this.setState({ message: event.target.value})
    }

    // componentDidUpdate = (prevProps , prevstate) => {
    //     if(prevProps.service.mechanic_id !== this.props.service.mechanic_id){
            
    //         if(this.props.auth.user.role === 'mechanic'){
    //             console.log(this.props.service.mechanic_id + ' << from component did updata')
    //             this.setState({myID : "hello"})
    //             this.setState({targetID : this.props.service.customer_id})
    //             this.setState({name : this.props.service.mechanic_data.mechanic_name})
    //             this.setState({target: this.props.service.customer_data.name})
    //             console.log(this.state.myID)

    //         }else if(this.props.auth.user.role === 'customer'){
    //             this.setState({myID : this.props.service.customer_id})
    //             this.setState({targetID : this.props.service.mechanic_id})
    //             this.setState({target : this.props.service.mechanic_data.mechanic_name})
    //             this.setState({name: this.props.service.customer_data.name})
    //         }
    //     }
    // }

    render() {
        return(
            <div className='container-fluid'>
                <div className='chatBox'>
                    <div className='chatTitle'>
                        <span>Title of this chat between </span>
                    </div>
                    <div className='container'>
                        <div className='messageBox'>
                            {/* { this.state.chatInfo.map(info => <li className='message'>{info.persons} : {info.messages[0][0]}</li>)} */}
                            { this.state.chatInfo.map(info => {
                                return(
                                    <div>{info.messages.map(item => {
                                        return <li className='message'>{item[0]} : {item[1]}</li>
                                    })}</div>
                                )
                            })}
                            { this.state.incomingChat.map(info => { return <li className='message'>{info[0]} : {info[1]}</li>})}
                            
                        </div>
                        <input value={this.state.message} onChange={this.handleMessageChange} className='messageInput' placeholder='Send your message'></input>
                        <button onClick={this.handleSendMessage}>Send</button>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state)=>({
    service : state.service,
    auth : state.auth
})

export default connect(mapStateToProps)(ChatPage2)