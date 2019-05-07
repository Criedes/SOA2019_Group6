
if (navigator.geolocation) {
    console.log("navigator.geolocation is available");
    let self = this;
    navigator.geolocation.getCurrentPosition(function (position) {
        self.setState({ lat: position.coords.latitude })
        self.setState({ lng: position.coords.longitude })
        console.log(position.coords.latitude)
    });
}

{ `lat : ${this.state.lat}` }
{ `lng : ${this.state.lng}` }



{
    this.state.chatInfo.map(info => {
        return (
            <div>{info.messages.map(item => {
                return <li className='message'>{item[0]} : {item[1]}</li>
            })}</div>
        )
    })
}
{ this.state.incomingChat.map(info => { return <li className='message'>{info[0]} : {info[1]}</li> }) }
<input value={this.state.message} onChange={this.handleMessageChange} className='messageInput' placeholder='Send your message'></input>
<button onClick={this.handleSendMessage}>Send</button>