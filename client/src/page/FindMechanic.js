import React, { Component } from 'react';
import Header from '../component/Header'
import '../styles/find_mechanic.css'
import Map from '../component/SearchMechanic/Map'
import SearchBar from '../component/SearchMechanic/SearchBar';
import WarnText from '../component/SearchMechanic/WarnText'
import MechanicLists from '../component/SearchMechanic/MechanicLists'
import {connect} from 'react-redux'
import {loadMechanic ,searchMechanic} from '../actions/mechanic'
class FindMechanic extends Component {
    state = { 
        //defualt
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
        }],
        search:''
    }

    setSearchText = (text) => {
        this.setState({search:text})
    }

    componentDidMount(){
        this.loadMechanicList()
    }

    loadMechanicList = async () =>{
        await this.props.loadMechanic()
        await this.setState({list:this.props.mechanic.mechanic_list})
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.search !== this.state.search){
           this.searchMechanicMethod(this.state.search)
        }
    }

    searchMechanicMethod = async (text) => {
        await this.props.searchMechanic(text)
        await this.setState({list:this.props.mechanic.mechanic_list})
    }

    render() { 
        return ( 
            <div className="find_mechanic">
                <Header></Header>
                <Map list={this.state.list}></Map>
                <SearchBar setSearchText={this.setSearchText}/>
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

export default connect(mapStateToProps, {loadMechanic,searchMechanic})(FindMechanic);