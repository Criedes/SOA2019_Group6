import React, { Component } from 'react';
import '../styles/mechanic_profile.css';
import StatusMechanic from '../component/MechanicProfile/StatusMechanic';
import Header from '../component/Header';
import Maps from '../component/MechanicProfile/Map';
// import axios from 'axios';
import MechanicInfo from '../component/MechanicProfile/MechanicInfo';
import CallMechanicButton from '../component/MechanicProfile/CallMechanicButton';
import MechanicService from '../component/MechanicProfile/MechanicService';
import { connect } from 'react-redux'
import { loadProfileMechanic } from '../actions/mechanic'
import socket from '../utils/socket'
import Swal from 'sweetalert2'
import { Redirect } from 'react-router-dom'
import { setService } from '../actions/service'

class MechanicProfile extends Component {
    state = {
        //mockup information
        user: {
            _id: '12432dasd54321dsasdsavasrew',
            name: 'ช่างใหญ่บางขุนพลี',
            imgProfile: 'https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F42977075%2F960x0.jpg%3Ffit%3Dscale',
            price: {
                price1: 90,
                price2: 2000
            },
            tel: '0970699999',
            status: true,
            address: 'อู่ยนตการ เซอร์วิส · 7 กุมภาพันธ์ · เทศบาลเมืองนครพนม, ไทย',
            numberOfCustomer: 20,
            howFar: 0.9,

        },
        calling: false,
        customer: null,
        isRedirect: false
    }

    componentDidMount() {
        const { id } = this.props.match.params
        this.loadProfile(id)
    }

    loadProfile = async (id) => {
        await this.props.loadProfileMechanic({ id })
        await this.setState({ user: this.props.mechanic.mechanic[0] })
    }

    setupSocket = () => {
        if (this.props.auth.user) {
            if (this.props.auth.user.role) {
                if (this.props.auth.user.role === 'mechanic') {
                    let id_mechanic_watch = this.props.match.params.id
                    socket.on(id_mechanic_watch, (data) => {
                        this.setState({ calling: true, customer: data.user })
                    })
                } else if (this.props.auth.user.role === 'customer') {

                }
            }
        }
    }




    acceptCalling = () => {
        console.log(this.state.customer._id + `<< from accept calling`)
        this.setState({
            isRedirect: true,
            calling: false
        })
        this.props.setService({
            customer_id: this.state.customer._id
            , mechanic_id: this.props.auth.user._id
            , mechanic_data: this.props.auth.user
            , customer_data: this.state.customer
        })
        
        localStorage.setItem('customer_id', this.state.customer._id)
        localStorage.setItem('mechanic_id', this.props.auth.user._id)
        localStorage.setItem('mechanic_name', this.props.auth.user.machanic_name)
        localStorage.setItem('customer_name', this.state.customer.name)
        localStorage.setItem('role', this.props.auth.user.role)
        
        socket.emit('acceptcall', { customer_id: this.state.customer._id, user: this.props.auth.user })
    }

    cancelCalling = () => {
        console.log("denied")
    }

    render() {
        this.setupSocket()
        const { id } = this.props.match.params
        if (this.state.calling) {
            console.log(this.state.customer)
            Swal.fire({
                title: 'คุณ' + this.state.customer.name + ' ต้องการใช้บริการ',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.value) {
                    this.acceptCalling()
                } else {
                    this.cancelCalling()
                }
            })
        }

        if (this.state.isRedirect) {
            this.props.setService({
                customer_id: this.props.auth.user._id
                , mechanic_id: this.state.user._id
                , mechanic_data : this.state.user
                , customer_data : this.props.auth.user
            })
            return <Redirect to={{
                pathname: '/chat'
            }} />
        }

        return (
            <div>
                <Header />
                <div className="container">
                    <Maps location={this.state.user} />
                    <CallMechanicButton user={this.state.user} mechanic_id={id} />
                    <MechanicInfo user={this.state.user} />
                    <StatusMechanic user={this.state.user} />
                    <MechanicService user={this.state.user} />
                </div>
            </div>);
    }
}

const mapStateToProps = (state) => ({
    mechanic: state.mechanic,
    auth: state.auth
})


export default connect(mapStateToProps, { loadProfileMechanic, setService })(MechanicProfile);