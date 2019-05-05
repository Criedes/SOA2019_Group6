import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Redirect } from 'react-router-dom'

class RenderMap extends Component {
    state = {
        center: {
            lat: 13.724555899999999,
            lng: 100.7702858
        },
        list: [{
            address: "Khaosan Road, Bangkok",
            contact: "099-9999999",
            coordinate: { lat: "29.001993213", lng: "18.09002313" },
            garagename: "Chang James Shop",
            join_date: "12/1/2019",
            machanic_name: "Bratt Pitch",
            number_of_customer: 24,
            password: "cf23df2207d99a74fbe169e3eba035e633b65d9",
            price: { patch_rubber: 30, change_rubber: 120 },
            status: false,
            username: "jameonline",
            _id: "5c9001f5cf9f9075a756e419"
        }],
        next_page:'',
        isRedirect:false
    }

    static defaultProps = {
        zoom: 15
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.center.lat !== this.props.center.lat) {
            this.setState({
                center: {
                    lat: this.props.center.lat,
                    lng: this.props.center.lng
                }
            })
        }
        if (prevProps.list !== this.props.list) {
            this.setState({
                list: this.props.list
            })
        }
    }

    _onChildClick = (key, childProps) => {
        if(key){
            // console.log(key)
            this.setState({isRedirect:true})
            this.setState({next_page:key})
        }
    }

    render() {
        const listmechanic = this.state.list
        // console.log(this.state.next_page)
        if(this.state.isRedirect){
            return <Redirect to={`/mechanic/${this.state.next_page}`} />
        }

        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100%', width: '100%' }}>

                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDj-dApaoMjhBBrhL5EN64wP81cWAlnAZs" }}
                    center={this.state.center}
                    defaultZoom={this.props.zoom}
                    onChildClick={this._onChildClick}
                >
                    <CurrentLocation
                        lat={this.state.center.lat}
                        lng={this.state.center.lng}
                        text="You"
                    />

                    {
                        listmechanic.map(item => {
                            // console.log(item._id)
                            return <MechanicLabel
                                key={item._id}
                                lat={item.coordinate.lat}
                                lng={item.coordinate.lng}
                                text={item.machanic_name}
                            />
                        })
                    }

                </GoogleMapReact>
            </div>
        );
    }
}
const CurrentLocation = ({ text }) => (
    <div style={{
        color: 'white',
        background: '#8828C7',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5%',
        transform: 'translate(-50%, -50%)'
    }}>
        {text}
    </div>
);


const MechanicLabel = ({ text }) => (
    <div style={{
        color: 'white',
        background: 'red',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    }}>
        {`ช่าง ${text}`}
    </div>


)


export default RenderMap;