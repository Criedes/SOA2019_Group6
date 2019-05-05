import React, { Component } from 'react';
import socket from '../../utils/socket'
import {connect} from 'react-redux'
class CallMechanicButton extends Component {
    state = {  }

    callMechanic = () => {
        socket.emit('callMechanic', {user:this.props.auth.user, mechanic_id:this.props.mechanic_id})
    }
    
    render() { 
        if (this.props.auth.user) {
            if (this.props.auth.user.role) {
                if (this.props.auth.user.role === 'mechanic') {
                    return (<div></div>);
                }
            }
        }
        return ( 
        <div className="call-warpper">
            <button className="call_mechanic-btn" onClick={this.callMechanic}>
                Call Mechanic
            </button>
        </div> );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps)(CallMechanicButton);