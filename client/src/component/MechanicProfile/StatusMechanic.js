import React, { Component } from 'react';
class StatusMechanic extends Component {
    state = {  }
    render() { 
        const user = this.props.user
        return ( 
        <div className="status-mechanic">
            <div className="is_open_status">{`สถานะ : `} <span className="text-b-purple">{user.status? 'เปิดให้บริการ' : 'ปิดให้บริการ'}</span></div>
            <div className="n_of_customer_status">{`จำนวนคนเข้าใช้บริการ : `}  <span className="text-b-purple">{user.numberOfCustomer}</span></div>
        </div> );
    }
}
 
export default StatusMechanic;