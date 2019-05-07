import React, { Component } from 'react';
import '../styles/header.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/auth'
import Swal from 'sweetalert2'
class Header extends Component {
    state = {
        userType: ''
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.auth.user !== this.props.user) {

        }
    }

    logoutAction = () => {
        this.props.logout();
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: true,
            timer: 2000
        });

        Toast.fire({
            type: 'success',
            title: 'Sign Out in successfully',
            customClass: {
                popup: 'animated tada'
            },

        })
    }

    render() {
        if (this.props.auth.user) {
            if (this.props.auth.user.role) {
                if (this.props.auth.user.role === 'mechanic') {
                    // console.log("hello mechanic")
                    return (
                        <div className="header-group">
                            <div className="container">
                                <div className="nav-wrapper">

                                    <div className="brand">
                                        <Link to="/">
                                            <img src={logo} alt="">
                                            </img>
                                        </Link>
                                    </div>

                                    <div className="navbar-r">
                                        <div className="">
                                            <Link to={`/mechanic/${this.props.auth.user._id}`}>
                                                <h6>Profile</h6>
                                                <span>ข้อมูลส่วนตัว</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="navbar-r">
                                        <div className="" onClick={this.logoutAction}>
                                            <h6>Sign Out</h6>
                                            <span>ออกจากระบบ</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>);
                } else {
                    // console.log("hello customer")
                    return (<div className="header-group">
                        <div className="container">
                            <div className="nav-wrapper">
                                <div className="brand">
                                    <Link to="/">
                                        <img src={logo} alt="">
                                        </img>
                                    </Link>
                                </div>

                                <div className="navbar-r">
                                    <div>
                                        สวัสดีคุณ {this.props.auth.user.name}
                                    </div>
                                    <div className="" onClick={this.logoutAction}>
                                        <h6>Sign Out</h6>
                                        <span>ออกจากระบบ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            } else {
                // console.log("dont have user role")
            }
        } else {
            // console.log("dont have user")
            return (
                <div className="header-group">
                    <div className="container">
                        <div className="nav-wrapper">
                            <div className="brand">
                                <Link to="/">
                                    <img src={logo} alt="">
                                    </img>
                                </Link>
                            </div>
                            <div className="navbar-r">
                                {/* <div className="">
                                    <Link to="/">
                                        <h6>Home</h6>
                                        <span>หน้าแรก</span>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/register/mechanic">
                                        <h6>Become Partner</h6>
                                        <span>สมัครเป็นช่าง</span>
                                    </Link>
                                </div> */}
                                <div>
                                    <Link to="/login">
                                        <h6>Sign in</h6>
                                        <span>เข้าสู่ระบบ</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>);
        }

    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Header);