import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

createTable = (n, min, max) =>{
   let table = []

   for (let i = min; i <= max; i++){
      let children = [];
      if(Math.trunc(i%n) === 0){
          children.push(<td>{`${i}`}</td>)
      }
   table.push(<tr>{children}</tr>);
   }
}


  render() {
    return (
      <div>
        <h1>Calculation exercise :</h1>
          <ul>
            <li>
              Calculation of multiplication for 4 between 50 and 149 : {this.createTable(4, 50, 149)}
            </li>
            <li>
              Calculation of multiplication for 7 between 500 and 1000 : {this.createTable(7, 500, 1000)}
            </li>
          </ul>

      </div>
    );
  }
}

export default App;
