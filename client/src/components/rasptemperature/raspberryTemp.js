import React, { Component } from 'react';
import './raspberry.css'


class RaspberryTemp extends Component {
  constructor(){
    super();
    this.state = {
      recordset: []
    }
  }

  componentDidMount(){
    
    fetch('api/sqldata')
    .then(response => {
        return response.json();
    })
    .then(json => {
        console.log(json);
        this.setState({recordset: json.recordset});

    })
    .catch(error => {
        console.log(error);
    });
  }

  render () {
    return (
      <div className="Temperature">
        <h2>Temperature</h2>
        <ul>
           {this.state.recordset.map((records,i) =>
          <li key={i}>{records.Temperature}</li>
          )}
        </ul>
        
      </div>
    );
  }
}

export default RaspberryTemp;
