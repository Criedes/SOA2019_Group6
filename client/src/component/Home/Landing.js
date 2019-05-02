import React, { Component } from 'react';
import '../../styles/home.css'
import man from '../../assets/mechanic_man.png'
import EffectFront from '../../assets/landing_effectfront.svg'
import EffectBack from '../../assets/landing_effectback.svg'
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';

class Landing extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="landing">
                <div className="man_landing">
                    <div className="container">
                        <div className="effect-back Intro">
                            <Fade bottom><img src={EffectBack} alt=""></img></Fade> 
                        </div>
                        <div className="main-man Intro">
                            <Fade bottom><img src={man} alt=""></img></Fade>
                        </div>
                        <div className="effect-front Intro">
                            <Fade bottom><img src={EffectFront} alt=""></img></Fade>
                        </div>
                        
                        <div className="title-2">
                            <Fade bottom>
                                <h3 className="top-topic title-text">
                                    Find Your
                                </h3>
                                <h1 className="middle-topic title-text">
                                    Mechanic
                                </h1>
                                <span >
                                    ค้นหาช่างที่คุณต้องการด้วยปะยางออนไลน์
                                </span>
                                <Link to="/search">
                                    <p className="gt-findPage-btn"><i className="fa fa-search icon-search" aria-hidden="true"></i>Find Mechanic</p>
                                </Link>
                            </Fade>
                        </div>
                    </div> 
                </div>
            </div>
         );
    }
}
 
export default Landing;