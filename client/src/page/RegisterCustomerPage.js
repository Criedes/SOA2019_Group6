import React, { Component } from 'react';
import Header from '../component/Header'
import '../styles/register.css'
import Header2 from '../component/RegisterCustomer/Header'
import axios from 'axios'
import global from '../global'
class RegisterCustomerPage extends Component {
    state = {
        name: '',
        username: '',
        password: '',
        phone: ''
    }

    handleSubmit = async (e) => {

        e.preventDefault();
        const newUser = {
            name: this.state.name,
            username: this.state.username,
            password: this.state.password,
            phone: this.state.phone
        }

        try {
            const config = {
                header: {
                    'Content-type': 'Application/json'
                }
            }
            // const body = JSON.stringify(newUser)
            console.log(newUser)
            const res = await axios.post(global.REGISTER_PATH_CUSTOMER, newUser, config)
            console.log(res.data)
        } catch (e) {
            console.log(e.response.data)
        }
    }

    onChanged = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    render() {
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

export default RegisterCustomerPage;