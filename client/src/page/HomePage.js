import React, { Component } from 'react';
import Landing from '../component/Home/Landing'
import Content from '../component/Home/Content'
import Header from '../component/Header'
class HomePage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <Landing />
                <Content />
            </div>
            
        );
    }
}
 
export default HomePage;