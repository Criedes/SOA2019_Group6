import React, { Component } from 'react';
import Header from '../component/Header'
import '../styles/find_mechanic.css'
import Map from '../component/SearchMechanic/Map'
import SearchBar from '../component/SearchMechanic/SearchBar';
import WarnText from '../component/SearchMechanic/WarnText'
import MechanicLists from '../component/SearchMechanic/MechanicLists'
import {connect} from 'react-redux'
import {loadMechanic} from '../actions/mechanic'
class FindMechanic extends Component {
    state = { 
        list:[{
            _id: '12432dasd54321dsasdsavasrew',
            name : 'ช่างใหญ่บางขุนพลี',
            imgProfile : 'https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F42977075%2F960x0.jpg%3Ffit%3Dscale',
            price:{
                price1 : 90,
                price2 : 2000
            },
            tel: '0970699999',
            howFar: 0.9
        }]
    }

    componentDidMount(){
        this.loadMechanicList()
    }

    loadMechanicList = async () =>{
        await this.props.loadMechanic()
        await this.setState({list:this.props.mechanic.mechanic})
    }

   
    render() { 
        return ( 
            <div className="find_mechanic">
                <Header></Header>
                <Map></Map>
                <SearchBar />
                <WarnText />
                <div className="container">
                    <MechanicLists list={this.state.list} />
                </div>
            </div> 
        );
    }
}

const mapStateToProps = (state)=>({
    mechanic : state.mechanic
})

export default connect(mapStateToProps, {loadMechanic})(FindMechanic);