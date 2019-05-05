import React, { Component } from 'react';
import '../styles/mechanic_profile.css';
import StatusMechanic from '../component/MechanicProfile/StatusMechanic';
import Header from '../component/Header';
import Maps from '../component/SearchMechanic/Map';
// import axios from 'axios';
import MechanicInfo from '../component/MechanicProfile/MechanicInfo';
import CallMechanicButton from '../component/MechanicProfile/CallMechanicButton';
import MechanicService from '../component/MechanicProfile/MechanicService';
import { connect } from 'react-redux'
import { loadProfileMechanic } from '../actions/mechanic'
import socket from '../utils/socket'

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

        }
    }
    componentDidMount() {
        const { id } = this.props.match.params
        // console.log(id)
        this.loadProfile(id)

        socket.on('getCallFromUser', (data) => {
           console.log("Calling from User")
        })
    }


    loadProfile = async (id) => {
        await this.props.loadProfileMechanic({ id })
        await this.setState({ user: this.props.mechanic.mechanic[0] })
    }

    render() {
        const { id } = this.props.match.params
        return (
            <div>
                <Header />
                <div className="container">
                    <Maps location={this.state.user}/>
                    <CallMechanicButton user={this.state.user} mechanic_id={id}/>
                    <MechanicInfo user={this.state.user} />
                    <StatusMechanic user={this.state.user} />
                    <MechanicService user={this.state.user} />
                </div>
            </div>);
    }
}

const mapStateToProps = (state) => ({
    mechanic: state.mechanic
})


export default connect(mapStateToProps, { loadProfileMechanic })(MechanicProfile);