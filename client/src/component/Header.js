import React, { Component } from 'react';
import '../styles/header.css'
import logo from '../assets/logo.png'
class Header extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="header-group">
            <div className="container">
                <div className="nav-wrapper">
                    <div className="brand">
                        <img src={logo}>
                        </img>
                    </div>
                    <div className="navbar-r">
                        <div className="isCurrent">
                            <a>
                                <h6>Home</h6>
                                <span>หน้าแรก</span>
                            </a>
                        </div>
                        <div>
                            <a>
                                <h6>Become Partner</h6>
                                <span>สมัครเป็นช่าง</span>
                            </a>
                        </div>
                        <div>
                            <a>
                                <h6>Sign in</h6>
                                <span>เข้าสู่ระบบ</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div> );
    }
}
 
export default Header;