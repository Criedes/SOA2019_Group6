import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class RenderMap extends Component {
    state = {
        center: {
            lat: 13.724555899999999,
            lng: 100.7702858
        }
    }

    static defaultProps = {
        center: {
            lat: 13.724555899999999,
            lng: 100.7702858
        },
        zoom: 11
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.center.lat !== this.props.center.lat) {
           
        }
    }

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100%', width: '100%' }}>

                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDj-dApaoMjhBBrhL5EN64wP81cWAlnAZs" }}
                    center={this.state.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}
const AnyReactComponent = ({ text }) => (
    <div style={{
        color: 'white',
        background: 'grey',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    }}>
        {text}
    </div>
);

export default RenderMap;