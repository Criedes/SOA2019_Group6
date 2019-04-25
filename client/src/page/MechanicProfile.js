import React, { Component } from 'react';
import '../styles/mechanic_profile.css'
import Header from '../component/Header'
import Maps from '../component/SearchMechanic/Map';
// import axios from 'axios';
import MechanicInfo from '../component/MechanicProfile/MechanicInfo'
import CallMechanicButton from '../component/MechanicProfile/CallMechanicButton'

class MechanicProfile extends Component {
    state = { 
        user:{}
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
                <MechanicInfo />
            </div>
           
        </div> );
    }
}
 
export default MechanicProfile;