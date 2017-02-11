import React, { Component } from 'react';
import './BeerList.css';

class BeerList extends Component {
  componentDidMount() {
    fetch( 'https://api.punkapi.com/v2/beers' )
      .then( response => response.json() )
      .then( arr => {

        // Map beers
        const beers = arr.map(function(drink) {

          // Grab the props we want
          const beer = {
            name : drink.name,
            abv : drink.abv,
          }

          return beer
        })

        const beerList = document.querySelector( 'main ul' );

        // Add DOM element for each beer and apply props
        beers.map(function(drink){
          
          // eslint-disable-next-line
          beerList.innerHTML += '<li class="beer-list__item"><div class="inner"><div class="beer-name">' + drink.name + '</div><div class="beer-abv">' + drink.abv + '%' + '</div></div></li>'
          return null;
      })
    })
  }

  render() {
    return (
      <ul className="beer-list"></ul>
    )
  }
}

export default BeerList;