import React, { Component } from 'react';
import '../../styles/landing.css'
import man from '../../assets/mechanic_man.png'
import EffectFront from '../../assets/landing_effectfront.svg'
import EffectBack from '../../assets/landing_effectback.svg'
class Landing extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="landing">
                <div className="man_landing">
                    <div className="container">
                        <div className="effect-back Intro">
                            <img src={EffectBack}></img>
                        </div>
                        <div className="main-man Intro">
                            <img src={man}></img>
                        </div>
                        <div className="effect-front Intro">
                            <img src={EffectFront}></img>
                        </div>
                        <div className="title">
                            <h3 className="title-text">
                                Find Your
                            </h3>
                            <h1 className="title-text">
                                Mechanic
                            </h1>
                            <span >
                                ค้นหาช่างที่คุณต้องการด้วยปะยางออนไลน์
                            </span>
                            <div class="gt-findPage-btn">
                                Find Mechanic
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
         );
    }
}
 
export default Landing;