import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class MechanicListItem extends Component {
    state = {  }
    render() { 
        const data = this.props.list
        const id = data._id
        return ( 
            <div className="mechanic-wrapper">

                <div className="mechanic">
                    <div className="img_profile_wrapper">
                        <img className="img_profile" src={data.imgProfile} alt={''}></img>
                    </div>
                    <div className="mechanic-info">
                        <div className="header-info">
                            <h3>{data.name}</h3>
                            <h6>{`ระยะทาง ${data.howFar} กิโลเมตร`}</h6>
                        </div>
                        <div className="info">
                            <div className="price">
                                <h6> <i className="fa fa-futbol-o icon" aria-hidden="true"></i> {`ปะยางรถยนต์ ${data.price.price1} บาท  `}</h6>
                                <h6> <i className="fa fa-wrench icon" aria-hidden="true"></i> {`เปลี่ยนยางรถยนต์ ${data.price.price2} บาท  `}</h6>
                            </div>
                            <div className="tel">
                                <h6> <i className="fa fa-phone icon" aria-hidden="true"></i>{`โทรศัพท์ ${data.tel}`}</h6>
                            </div>
                        </div>
                        <div className="select_mechanic_btn_wrapper">
                            <Link to={`/mechanic/${id}`}><button className="select_mechanic_btn">See Information</button></Link>
                        </div>
                    </div>

                </div>
                
            </div>
        );
    }
}
 
export default MechanicListItem;