import React, { Component } from 'react'
import Header from '../component/Header'
import '../styles/registerMechanic.css'

export default class RegisterMechanic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            mechanic_name: '',
            garagename: '',
            lat: '',
            lng: '',
            number_of_customer: 0,
            address: '',
            contact: '',
            path_rubber: 0,
            change_rubber: 0,
            imgURL: '',

        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="registerMechanicBox">
                    <div className='titleBox_registerMechanic'>
                        <h1 className='text_registerMechanic'>Register for Mechanic</h1>
                    </div>
                    <form>
                        <div className='line'>
                            <div className='element'>
                                <span className='text_registerMechanic'>Username:</span>
                                <br/>
                                <input name='username' value={this.state.username} onChange={this.handleChange}></input>
                            </div>
                            <div className='element'>
                                <span className='text_registerMechanic'>Name:</span>
                                <br/>
                                <input name='mechanic_name' value={this.state.mechanic_name} onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className='line'>
                            <div className='element'>
                                <span className='text_registerMechanic'>Password:</span>
                                <br/>
                                <input name='password' value={this.state.password} onChange={this.handleChange}></input>
                            </div>
                            <div className='element'>
                                <span className='text_registerMechanic'>GarageName:</span>
                                <br/>
                                <input name='garagename' value={this.state.garagename} onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className='line'>
                            <div className='element'>
                                <span className='text_registerMechanic'>Coordinate:</span>
                                <br/>
                                <div className='line'>
                                    <div className='priceElement'>
                                        <span className='priceText'>X:</span>
                                        <br/>
                                        <input name='lat' className='subInput' type='number' value={this.state.lat} onChange={this.handleChange}></input>
                                    </div>
                                    <div className='priceElement'>
                                        <span className='priceText'>Y:</span>
                                        <br/>
                                        <input name='lng' className='subInput' type='number' value={this.state.lng} onChange={this.handleChange}></input>
                                    </div>
                                </div>
                            </div>
                            <div className='element'>
                                <span className='text_registerMechanic'>Your Customers:</span>
                                <br/>
                                <input name='number_of_customer' type='number' value={this.state.number_of_customer} onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className='line'>
                            <div className='element'>
                                <span className='text_registerMechanic'>Address:</span>
                                <br/>
                                <textarea name='address' style={{resize:'none'}} value={this.state.address} onChange={this.handleChange}></textarea>
                            </div>
                            <div className='element'>
                                <span className='text_registerMechanic'>Contact:</span>
                                <br/>
                                <input name='contact' value={this.state.contact} onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className='line'>
                            <div className='element'>
                                <span className='text_registerMechanic'>Price:</span>
                                <br/>
                                <div className='line'>
                                    <div className='priceElement'>
                                        <span className='priceText'>Path:</span>
                                        <br/>
                                        <input name='path_rubber' className='subInput' type='number' value={this.state.path_rubber} onChange={this.handleChange}></input>
                                    </div>
                                    <div className='priceElement'>
                                        <span className='priceText'>Change:</span>
                                        <br/>
                                        <input name='change_rubber' className='subInput' type='number' value={this.state.change_rubber} onChange={this.handleChange}></input>
                                    </div>
                                </div>
                            </div>
                            <div className='element'>
                                <span className='text_registerMechanic'>ImgURL:</span>
                                <br/>
                                <input name='imgURL' value={this.state.imgURL} onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className='buttonBox'>
                            {/* Need OnClick Func for Submit */}
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}