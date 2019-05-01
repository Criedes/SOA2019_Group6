import React, { Component } from 'react';
import '../styles/header.css'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
class Header extends Component {
    state = {  }
    render() { 
        return ( 
        
        <div className="header-group">
            <div className="container">
                <div className="nav-wrapper">
                    <div className="brand">
                        <img src={logo} alt="">
                        </img>
                    </div>
                    <div className="navbar-r">
                        <div className="isCurrent">
                            <Link to="/">
                                <h6>Home</h6>
                                <span>หน้าแรก</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/">
                                <h6>Become Partner</h6>
                                <span>สมัครเป็นช่าง</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/login">
                                <h6>Sign in</h6>
                                <span>เข้าสู่ระบบ</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div> );
    }
}
 
export default Header;