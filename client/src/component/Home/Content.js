import React, { Component } from 'react';
class Content extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="container wrapper">
                <div className="content">
                        <div className="sub-content left">
                            <h2>Our Service</h2>
                            <h5>บริการของเรา</h5>
                            <p>ในปัจจุบันเรามีสองบริการหลักคือปะยาง 
                            และ เปลี่ยนยางโดยในอนาคตเรามีแผนว่า
                            จะทำการเพิ่มบริการอื่นเข้ามาโดยทั้งนี้ขึ้น
                            อยู่กับปัจจัยภายนอกด้วย</p>
                        </div>
                        <div className="sub-content right">
                            {/* <h1>PAYANGONLINE</h1>
                            <p>www.payang.com</p> */}
                        </div>
                </div>
            </div>

         );
    }
}
 
export default Content;