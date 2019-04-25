import React, { Component } from 'react';
import '../../styles/login.css'
import Login_member from'./Login_member'
import Login_mechanic from'./Login_mechanic'
class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {isLoginmemberOpen: true,isLoginmechanicOpen:false,ismember: true,ismechanic:false};
    }
    showmember(){
        this.setState({ismember: true,ismechanic:false})
    }
    showmechanic(){
        this.setState({ismember: false,ismechanic:true})
    }
    
    showLoginmemberBox(){
        this.setState({isLoginmemberOpen: true,isLoginmechanicOpen:false})
    }
    showLoginmechanicBox(){
        this.setState({isLoginmemberOpen: false,isLoginmechanicOpen:true})
    }
    render() {
        
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
                            <div className="bloc1" onClick={this.showLoginmemberBox.bind(this) }>
                                <button className={this.state.ismember?"login100-form-btn2":"login100-form-btn3"} onClick={this.showmember.bind(this) } >
                                    Member
						    </button></div>
                            <div className="bloc2" onClick={this.showLoginmechanicBox.bind(this)}>
                                <button className={this.state.ismechanic ?"login100-form-btn2":"login100-form-btn3"} onClick={this.showmechanic.bind(this) }>
                                    Mechanic
						    </button></div>
                            <div className="title-text"> 
                            {this.state.isLoginmemberOpen && <Login_member />}
                            {this.state.isLoginmechanicOpen && <Login_mechanic />}
                            </div><div>
                                <span>ยังไม่เป็นสมัครสมาชิกใช่หรือไม่<button className="login100-form-btn6">สมัครสมาชิก</button></span>
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