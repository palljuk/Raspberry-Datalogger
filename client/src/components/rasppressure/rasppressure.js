import React, { Component } from 'react';



class RaspberryPressure extends Component {
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
      <div>
        <h2>Pressure</h2>
        <ul>
           {this.state.recordset.map((records,i) =>
          <li key={i}>{records.Pressure}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default RaspberryPressure;