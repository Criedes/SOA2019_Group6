import React, { Component } from 'react';
import socket from '../../utils/socket'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import {Redirect} from 'react-router-dom'
import { setService } from '../../actions/service'
class CallMechanicButton extends Component {
    state = {
        callMechanicStatus : false,
        isRedirect : false
    }


    callMechanic = () => {
        socket.emit('callMechanic', { user: this.props.auth.user, mechanic_id: this.props.mechanic_id })
        this.setState({callMechanicStatus:true})
    }

    render() {
        if (this.props.auth.user) {
            if (this.props.auth.user.role) {
                if (this.props.auth.user.role === 'customer') {
                    socket.on(this.props.auth.user._id, (data)=>{
                        this.setState({callMechanicStatus:false, isRedirect:true})
                    })
                }
            }
        }

        if(this.state.callMechanicStatus){
            Swal.fire({
                title: 'กำลังรอช่างตอบคำขอ',
                html: 'Will close in <strong></strong> seconds.',
                onBeforeOpen: () => {
                    Swal.showLoading()
                }
            })
        }else{
            Swal.close()
        }

        if(this.state.isRedirect){
            this.setState({isRedirect:false,callMechanicStatus:false})
            return <Redirect to='/service' />
        }


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
            </div>);
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps,{ setService})(CallMechanicButton);