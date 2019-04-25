import React, { Component } from 'react';
class Warntext extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="warn-text container">
                <i className="fa fa-exclamation-triangle icon-warn" aria-hidden="true"></i>
                ควรสอบถามช่างเรื่องราคาให้แน่นอนก่อนผ่านทางโทรศัพท์ก่อนเรียกใช้
                <div className="title_of_mechanic_list">
                    <span>Mechanic</span><p>รายชื่อช่าง</p>
                </div>
            </div>
         );
    }
}
 
export default Warntext;