import React, { Component } from 'react';
import Header from '../component/Header'
import '../styles/register.css'
import Header2 from '../component/RegisterCustomer/Header'
import {register} from '../actions/auth'
import {connect} from 'react-redux'
import {Redirect} from "react-router-dom"
class RegisterCustomerPage extends Component {
    state = {
        name: '',
        username: '',
        password: '',
        phone: '',
        isRegistered: false
    }

    handleSubmit = async (e) => {

        e.preventDefault();

        this.props.register({
            name: this.state.name,
            username: this.state.username,
            password: this.state.password,
            phone: this.state.phone})
    }

    onChanged = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    
    render() {
        
        if(this.props.auth.isAuth){
            return <Redirect to="/" />
         }
        return (
            <div>
                <Header />
                <div className="container">
                    <Header2 />
                    <form onSubmit={this.handleSubmit}>
                        <h4> Username :</h4>
                        <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.onChanged} required />
                        <h4> Name :</h4>
                        <input type="text" name="name" value={this.state.name} placeholder="name" onChange={this.onChanged} required />
                        <h4> Password :</h4>
                        <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.onChanged} required minLength='6' />
                        <h4> Phone :</h4>
                        <input type="tel" name="phone" value={this.state.phone} placeholder="phone" onChange={this.onChanged} required />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>);
    }
}

const mapStateToProps = (state)=> ({
    auth: state.auth
})

export default connect(mapStateToProps , {register})(RegisterCustomerPage);