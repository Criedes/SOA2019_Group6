import React, { Component } from 'react';

class GeneralInfo extends Component {
    state = {  }
    render() { 
        const user = this.props.user
        return ( 
        <div className="general-info">
            <div className="img_profile_wrapper">
                <img className="img_profile-2x" src={`https://fortunedotcom.files.wordpress.com/2018/07/gettyimages-961697338.jpg`} alt={''}></img>
            </div>
            <div className="info-mechanic-profile">
                <div><h2>{user.machanic_name}</h2></div>
                <div>
                    <p className="sub-info-mechanic-profile">{user.address}</p>
                    <p className="sub-info-mechanic-profile sub-2"> <i className="fa fa-phone icon-mechanic-profile" aria-hidden="true"></i>{`โทรศัพท์ : ${user.contact}`}</p>
                </div>
            </div>
            
        </div> );
    }
}
 
export default GeneralInfo;