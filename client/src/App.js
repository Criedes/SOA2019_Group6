import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import HomePage from './page/HomePage'
import FindMechanic from './page/FindMechanic'
import MechanicProfile from './page/MechanicProfile'
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
  renderRouter () {
      return (
        <Router>
            <div>
                <Route exact path="/" component={HomePage} />
                <Route path="/search" component={FindMechanic} />
                <Route path="/mechanic/:id" component={MechanicProfile} />
            </div>
        </Router>
      )
  }
  
  render() {
    return (
        <Router>{this.renderRouter()}</Router>
    );
  }
}

export default App;
