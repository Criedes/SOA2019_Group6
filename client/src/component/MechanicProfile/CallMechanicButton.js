import React, { Component } from 'react';
import socket from '../../utils/socket'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import { Redirect } from 'react-router-dom'
import { setService } from '../../actions/service'
class CallMechanicButton extends Component {
    state = {
        callMechanicStatus: false,
        isRedirect: false,
        user: null
    }


    callMechanic = () => {
        socket.emit('callMechanic', { user: this.props.auth.user, mechanic_id: this.props.mechanic_id })
        this.setState({ callMechanicStatus: true })
    }

    render() {
        if (this.props.auth.user) {
            if (this.props.auth.user.role) {
                if (this.props.auth.user.role === 'customer') {
                    socket.on(this.props.auth.user._id, (data) => {
                        // console.log(data.data.user)
                        this.setState({ callMechanicStatus: false, isRedirect: true, user: data.data.user })
                    })
                }
            }
        }

        if (this.state.callMechanicStatus) {
            Swal.fire({
                title: 'กำลังรอช่างตอบคำขอ',
                html: 'Will close in <strong></strong> seconds.',
                onBeforeOpen: () => {
                    Swal.showLoading()
                }
            })
        } else {
            Swal.close()
        }

        if (this.state.isRedirect) {
            this.props.setService({
                customer_id: this.props.auth.user._id
                , mechanic_id: this.state.user._id
                , mechanic_data : this.state.user
                , customer_data : this.props.auth.user
            })
            this.setState({ isRedirect: false, callMechanicStatus: false })
            return <Redirect to='/chat' />
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
export default connect(mapStateToProps, { setService })(CallMechanicButton);