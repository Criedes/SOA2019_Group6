import React, { Component } from 'react';
import Header from './component/Header'
import Landing from './pages/Home/Landing'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Landing />
      
      </div>
    );
  }
}

export default App;
