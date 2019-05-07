import React, { Component } from 'react';
import '../../styles/login.css'
import { connect } from 'react-redux'
import { loginCustomer } from '../../actions/auth'
import { Redirect } from 'react-router-dom'
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom'

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
        this.props.loginCustomer({ username: this.state.username, password: this.state.password })
    }

    loginAction = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: true,
            timer: 4000
        });

        Toast.fire({
            type: 'success',
            title: 'Sign In in successfully',
            customClass: {
                popup: 'animated tada'
            },

        })
    }
    render() {
        if (this.props.auth.isAuth) {
            this.loginAction()
            return <Redirect to="/" />
        }
        return (
            <form className="login100-form" onSubmit={this.submitLogin}>
                <div className="title-text ">
                    <br />
                    <div className="wrap-input100 validate-input">
                        <input className="input100 " type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.onChanged} />
                    </div>
                    <div className="wrap-input100 validate-input">
                        <input className="input100" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onChanged} />

                    </div>
                    <div className="container-login100-form-btn title-text">
                        <button className="login100-form-btn title-text2" type="submit">
                            Sign in
						</button>
                    </div>
                </div>
                <div className="bottom-register">
                <span>ยังไม่เป็นสมัครสมาชิกใช่หรือไม่<Link to='/register/customer' ><button className="login100-form-btn6">สมัครสมาชิก</button></Link></span>
                </div>
            </form>
        );
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { loginCustomer })(Login_member);