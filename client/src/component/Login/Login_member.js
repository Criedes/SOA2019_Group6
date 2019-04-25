import React, { Component } from 'react';
import '../../styles/login.css'

class Login_member extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    submitLogin(e){
        
    }
    render() {
        return (
            <form className="login100-form  ">
        <div className="title-text ">
            <br />
            <div className="wrap-input100 validate-input">
                <input className="input100 " type="text" name="user1" placeholder="   ชื่อผู้ใช้ / Username1" />
            </div>
            <div className="wrap-input100 validate-input">
                <input className="input100" type="password" name="pass1" placeholder="   Password" />

            </div>
            <div className="container-login100-form-btn title-text">
                <button className="login100-form-btn title-text2" >
                Sign in
						    </button>
            </div>
        </div>
        </form>
        );
    }
}
export default Login_member;