import React, { Component } from 'react';
import '../styles/login.css'
import LoginMember from '../component/Login/Login_member'
import LoginMechanic from '../component/Login/Login_mechanic'
import Header from '../component/Header'
import { Link } from 'react-router-dom'
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoginmemberOpen: true, isLoginmechanicOpen: false, ismember: true, ismechanic: false };
    }
    showmember() {
        this.setState({ ismember: true, ismechanic: false })
    }
    showmechanic() {
        this.setState({ ismember: false, ismechanic: true })
    }

    showLoginmemberBox() {
        this.setState({ isLoginmemberOpen: true, isLoginmechanicOpen: false })
    }
    showLoginmechanicBox() {
        this.setState({ isLoginmemberOpen: false, isLoginmechanicOpen: true })
    }
    render() {

        return (

            <div className="login">
                <Header />
                <div className="">
                    <div className="container">
                        <div className="login-wrapper">
                            <div className="login-top">
                                <div className="title-text-login">
                                    <h1>Welcome to Payang Online</h1>
                                    <h6>ยินดีต้อนรับเข้าสู่เว็บไซต์ Payang Online</h6>
                                </div>
                                   
                            </div>
                            <div className="block_container">
                                <div className="bloc1" onClick={this.showLoginmemberBox.bind(this)}>
                                    <button className={this.state.ismember ? "login100-form-btn2" : "login100-form-btn3"} onClick={this.showmember.bind(this)} >
                                        Member
						    </button></div>
                                <div className="bloc2" onClick={this.showLoginmechanicBox.bind(this)}>
                                    <button className={this.state.ismechanic ? "login100-form-btn2" : "login100-form-btn3"} onClick={this.showmechanic.bind(this)}>
                                        Mechanic
						    </button></div>
                                <div className="login-section-wrap">
                                    {this.state.isLoginmemberOpen && <LoginMember />}
                                    {this.state.isLoginmechanicOpen && <LoginMechanic />}
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        );
    }
}


export default Login;