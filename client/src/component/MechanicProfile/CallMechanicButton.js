import React, { Component } from 'react';
import socket from '../../utils/socket'
class CallMechanicButton extends Component {
    state = {  }

    callMechanic = () => {
        socket.emit('callMechanic', {user:this.props.user, mechanic_id:this.props.mechanic_id})
    }
    
    render() { 
        console.log(JSON.stringify(this.props.user))
        return ( 
        <div className="call-warpper">
            <button className="call_mechanic-btn" onClick={this.callMechanic}>
                Call Mechanic
            </button>
        </div> );
    }
}
 
export default CallMechanicButton;