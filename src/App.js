import React, { Component } from 'react';
import './resources/styles.css'
import Header from './components/Header.js'
import Featured from './components/featured'
import VenueInfo from './components/VenueInfo'

class App extends Component {
  render() {
    return (
      <div className="App" style={{height:"1500px", background:'cornflowerblue'}}>
        <Header />
        <Featured />
        <VenueInfo />
      </div>
    );
  }
}

export default App;
