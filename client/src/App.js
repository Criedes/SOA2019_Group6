import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import HomePage from './page/HomePage'
import FindMechanic from './page/FindMechanic'
import MechanicProfile from './page/MechanicProfile'
import { BrowserRouter as Router, Route} from "react-router-dom";
import RegisterCustomerPage from './page/RegisterCustomerPage'
import RegisterMechanic from './page/RegisterMechanic'
import Login from './page/Login'
import setAuthToken from './utils/setAuthToken'
import {loadUser} from './actions/auth'
import ServicePage from './page/ServicePage'
import ChatPage from './page/ChatPage'

//redux
import {Provider} from 'react-redux';
import store from './store'

//auth
if(localStorage.token){
  setAuthToken(localStorage.token)
}


class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser())
    
  }
  renderRouter () {
      return (
        <Provider store={store}>
          <Router>
              <div>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/search" component={FindMechanic} />
                  <Route path="/mechanic/:id" component={MechanicProfile} />
                  <Route path="/register/customer" component={RegisterCustomerPage} />
                  <Route path="/register/mechanic" component={RegisterMechanic} />
                  <Route path="/login" component={Login} />
                  <Route path="/service" component={ServicePage} />
                  <Route path="/chat" component={ChatPage} />
              </div>
          </Router>
        </Provider>
      )
  }
  
  render() {
    return (
        <Router>{this.renderRouter()}</Router>
    );
  }
}

export default App;



