import React, { Component } from 'react';
import RenderMap from './RenderMap'
class Maps extends Component {
    state = {
        currentLocation: {
            lat: 0.0,
            lng: 0.0
        }
    }

    componentDidMount() {
        this.getLocation()
    }

    getLocation = () => {
        if (navigator.geolocation) {
            console.log("navigator.geolocation is available");
            let self = this;
            navigator.geolocation.getCurrentPosition(function (position) {
                self.setState({ currentLocation:{
                    lat:position.coords.latitude ,
                    lng:position.coords.longitude
                } })
            });
        }
    }
    render() {
        return (
            <div className="map" id="map">
                {`lat : ${this.state.currentLocation.lat}`}
                {`lng : ${this.state.currentLocation.lng}`}
                <RenderMap center={this.state.currentLocation} />
            </div>);
    }
}

export default Maps;