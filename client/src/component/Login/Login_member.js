import React, { Component } from 'react';
import '../../styles/login.css'
import {connect} from 'react-redux'
import {loginCustomer} from '../../actions/auth'
import {Redirect} from 'react-router-dom'

class Login_member extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    onChanged = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    submitLogin = (e) => {
        e.preventDefault();
        this.props.loginCustomer({username:this.state.username, password:this.state.password})
    }

    render() {
        if(this.props.auth.isAuth){
           return <Redirect to="/" />
        }
        return (
            <form className="login100-form" onSubmit={this.submitLogin}>
                <div className="title-text ">
                    <br />
                    <div className="wrap-input100 validate-input">
                        <input className="input100 " type="text" name="username" placeholder="Username1" value={this.state.username} onChange={this.onChanged} />
                    </div>
                    <div className="wrap-input100 validate-input">
                        <input className="input100" type="password" name="password" placeholder="  Password" value={this.state.password} onChange={this.onChanged} />

                    </div>
                    <div className="container-login100-form-btn title-text">
                        <button className="login100-form-btn title-text2" type="submit">
                            Sign in
						</button>
                    </div>
                </div>
            </form>
        );
    }
}
const mapStateToProps = (state)=>({
    auth : state.auth
})

export default connect(mapStateToProps, {loginCustomer})(Login_member);