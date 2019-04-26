import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo'
class MechanicInfo extends Component {
    state = {  }
    render() { 
        const user = this.props.user
        return ( 
        <div>
            <GeneralInfo user={user}/>
        </div> );
    }
}
 
export default MechanicInfo;