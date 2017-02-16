import React, { Component } from 'react';
import './Main.css';
import BeerList from '../BeerList/BeerList';
import Search from '../../components/Search/Search';

class Main extends Component {
  render() {
    return (
      <div>
        <Search></Search>
        <main className="main">
          <BeerList></BeerList>        
        </main>
      </div>
    )
  }
}

export default Main;