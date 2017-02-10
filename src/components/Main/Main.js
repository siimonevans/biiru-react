import React, { Component } from 'react';
import './Main.css';
import BeerList from '../BeerList/BeerList';

class Main extends Component {
  render() {
    return (
      <main className="main">
      	<BeerList></BeerList>
      </main>
    )
  }
}

export default Main;