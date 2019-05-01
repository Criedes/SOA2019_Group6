import React, { Component } from 'react';
import '../../styles/login.css'

class Login_member extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password:""
        };
    }

    onChanged = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    submitLogin(e){
        
    }
    
    render() {
        return (
            <form className="login100-form  ">
        <div className="title-text ">
            <br />
            <div className="wrap-input100 validate-input">
                <input className="input100 " type="text" name="username" placeholder="   ชื่อผู้ใช้ / Username1" value={this.state.username} onChange={this.onChanged}/>
            </div>
            <div className="wrap-input100 validate-input">
                <input className="input100" type="password" name="password" placeholder="  Password" value={this.state.password} onChange={this.onChanged} />

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