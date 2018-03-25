import React, { Component } from 'react';
import './App.css';
import RaspberryTemp from './components/rasptemperature/raspberryTemp';
import RaspHumidity from './components/rasphumidity/rasphumidity';
import RaspberryPressure from './components/rasppressure/rasppressure';



class App extends Component {
  render() {
    return (
      <div className="App">
         <header className="App-header">
            <h1 className="App-title">Raspberry Datalogger</h1>
        </header>
        <RaspberryTemp />
        <RaspHumidity />
        <RaspberryPressure />
       
       
      </div>
    );
  }
}

export default App;
