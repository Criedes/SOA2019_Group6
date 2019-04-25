import React, { Component } from 'react';
import Header from '../component/Header'
import '../styles/find_mechanic.css'
import Map from '../component/SearchMechanic/Map'
import SearchBar from '../component/SearchMechanic/SearchBar';
import WarnText from '../component/SearchMechanic/WarnText'
import MechanicLists from '../component/SearchMechanic/MechanicLists'
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
        },{
            _id: '12432dsdasd54321dsasdsavasrew',
            name : 'ช่างใหญ่บางขุนพลี',
            imgProfile : 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg',
            price:{
                price1 : 90,
                price2 : 2000
            },
            tel: '0970699999',
            howFar: 0.9
        },{
            _id: '12432dsdaasdsd54321dsasdsavasrew',
            name : 'ช่างใหญ่บางขุนพลี',
            imgProfile : 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg',
            price:{
                price1 : 90,
                price2 : 2000
            },
            tel: '0970699999',
            howFar: 0.9
        }]
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
 
export default FindMechanic;