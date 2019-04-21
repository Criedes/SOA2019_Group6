import React, { Component } from 'react';
import '../../styles/login.css'
import Login_member from'../Login/Login_member.js'
import Login_mechanic from'../Login/Login_mechanic.js'
class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {isLoginOpen: true,isRegisterOpen:false,addClass: false};
    }
    toggle() {
        this.setState({addClass: !this.state.addClass});
      }
    
    showLoginBox(){
        this.setState({isLoginOpen: true,isRegisterOpen:false})
    }
    showRegisterBox(){
        this.setState({isLoginOpen: false,isRegisterOpen:true})
    }
    render() {
        let boxClass = ["box"];
        if(this.state.addClass) {
          boxClass.push('green');
        }
        return (
            <div className="login">
                <div className="man_landing">
                    <div className="container">

                        <div className="title">
                            <h1 className="title-text">
                                Welcome to Payang Online
                            </h1>
                            <span >
                                ยินดีต้อนรับเข้าสู่เว็บไซต์ Payang Online
                            </span>
                            <div className="block_container">
                            <div className="bloc1" onClick={this.showLoginBox.bind(this) }>
                                <button className="login100-form-btn2" >
                                    Member
						    </button></div>
                            <div className="bloc2" onClick={this.showRegisterBox.bind(this)}>
                                <button className="login100-form-btn3" >
                                    Mechanic
						    </button></div>
                            <div className="title-text"> 
                            {this.state.isLoginOpen && <Login_member />}
                            {this.state.isRegisterOpen && <Login_mechanic />}
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