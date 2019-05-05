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
            patch_rubber: 0,
            change_rubber: 0,
            imgURL: '',

        }
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
                                <input value={this.state.username}></input>
                            </div>
                            <div className='element'>
                                <span className='text_registerMechanic'>Name:</span>
                                <br/>
                                <input value={this.state.mechanic_name}></input>
                            </div>
                        </div>
                        <div className='line'>
                            <div className='element'>
                                <span className='text_registerMechanic'>Password:</span>
                                <br/>
                                <input value={this.state.password}></input>
                            </div>
                            <div className='element'>
                                <span className='text_registerMechanic'>GarageName:</span>
                                <br/>
                                <input value={this.state.garagename}></input>
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
                                        <input className='subInput' type='number' value={this.state.lat}></input>
                                    </div>
                                    <div className='priceElement'>
                                        <span className='priceText'>Y:</span>
                                        <br/>
                                        <input className='subInput' type='number' value={this.state.lng}></input>
                                    </div>
                                </div>
                            </div>
                            <div className='element'>
                                <span className='text_registerMechanic'>Your Customers:</span>
                                <br/>
                                <input type='number' value={this.state.number_of_customer}></input>
                            </div>
                        </div>
                        <div className='line'>
                            <div className='element'>
                                <span className='text_registerMechanic'>Address:</span>
                                <br/>
                                <textarea style={{resize:'none'}} value={this.state.address}></textarea>
                            </div>
                            <div className='element'>
                                <span className='text_registerMechanic'>Contact:</span>
                                <br/>
                                <input value={this.state.contact}></input>
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
                                        <input className='subInput' type='number' value={this.state.patch_rubber}></input>
                                    </div>
                                    <div className='priceElement'>
                                        <span className='priceText'>Change:</span>
                                        <br/>
                                        <input className='subInput' type='number' value={this.state.change_rubber}></input>
                                    </div>
                                </div>
                            </div>
                            <div className='element'>
                                <span className='text_registerMechanic'>ImgURL:</span>
                                <br/>
                                <input value={this.state.imgURL}></input>
                            </div>
                        </div>
                        <div className='buttonBox'>
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}