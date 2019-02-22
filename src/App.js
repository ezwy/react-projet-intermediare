import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  createTable = (n, min, max) => {
    let table = []
    if (n === 0) {
      return table
    }
    for (let i = min; i <= max; i++) {
      let children = [];
      if (Math.trunc(i % n) === 0) {
        children.push(<td>{`${i}`}</td>)
      }
      table.push(<tr>{children}</tr>);
    }
    return table
  }

  calculateSomme = (n, min, max) => {
    let somme = 0
    for (let i = min; i <= max; i++) {
      if (Math.trunc(i % n) === 0) {
        somme += i
      }
     
    }
    return somme
  }


  render() {
    return (
      <div>
        <h1>Calculation exercise :</h1>
        <ul>
          <li>
            Sum of all the multiplication for 4 between 50 and 149 : {this.calculateSomme(4, 50, 149)}
          </li>
          <li>
            Sum of all the multiplication for 7 between 500 and 1000 : {this.calculateSomme(7, 500, 1000)}
          </li>
          <li>
            Calculation of multiplication for 3 between 10 and 25 : {this.createTable(3, 10, 25)}
            ……………………somme: {this.calculateSomme(3,10,25)}
          </li>
        </ul>

      </div>
    );
  }
}

export default App;
