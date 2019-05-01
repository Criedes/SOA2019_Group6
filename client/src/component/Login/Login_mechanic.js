import React, { Component } from 'react'
class Login_mechanic extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    submitRegister(e){
        
    }
    render() {
        return (<form className="login100-form ">
        <div className="title-text">
        <br />
            <div className="wrap-input100 validate-input">
                <input className="input100" type="text" name="user2" placeholder="ชื่อผู้ใช้ / Username2" />
            </div>
            <div className="wrap-input100 validate-input">
                <input className="input100" type="password" name="pass2" placeholder="   Password" />

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
export default Login_mechanic;