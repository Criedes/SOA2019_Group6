import React, { Component } from 'react';
import '../styles/mechanic_profile.css';
import StatusMechanic from '../component/MechanicProfile/StatusMechanic';
import Header from '../component/Header';
import Maps from '../component/SearchMechanic/Map';
// import axios from 'axios';
import MechanicInfo from '../component/MechanicProfile/MechanicInfo';
import CallMechanicButton from '../component/MechanicProfile/CallMechanicButton';
import MechanicService from '../component/MechanicProfile/MechanicService';

class MechanicProfile extends Component {
    state = { 
        //mockup information
        user:{
            _id: '12432dasd54321dsasdsavasrew',
            name : 'ช่างใหญ่บางขุนพลี',
            imgProfile : 'https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F42977075%2F960x0.jpg%3Ffit%3Dscale',
            price:{
                price1 : 90,
                price2 : 2000
            },
            tel: '0970699999',
            status : true,
            address: 'อู่ยนตการ เซอร์วิส · 7 กุมภาพันธ์ · เทศบาลเมืองนครพนม, ไทย',
            numberOfCustomer : 20,
            howFar: 0.9,
            
        }
     }
    componentDidMount () {
        const { id } = this.props.match.params
        console.log(id)
    }
    render() { 
        
        return ( 
        <div>
            <Header />
            <div className="container">
                <Maps />
                <CallMechanicButton />
                <MechanicInfo user={this.state.user} />
                <StatusMechanic user={this.state.user}/>
                <MechanicService user={this.state.user}/>
            </div>
        </div> );
    }
}
 
export default MechanicProfile;