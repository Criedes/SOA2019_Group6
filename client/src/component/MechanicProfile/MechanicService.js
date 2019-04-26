import React, { Component } from 'react';
class MechanicService extends Component {
    state = {  }
    render() { 
        const user = this.props.user
        return ( 
            <div className="mechanic-service">
                <h5>การบริการ</h5>
                <h6> <i className="fa fa-futbol-o icon" aria-hidden="true"></i> {`ปะยางรถยนต์ ${user.price.price1} บาท  `}</h6>
                <h6> <i className="fa fa-wrench icon" aria-hidden="true"></i> {`เปลี่ยนยางรถยนต์ ${user.price.price2} บาท  `}</h6>
            </div> 
        );
    }
}
 
export default MechanicService;