import React, { Component } from 'react';
import './BeerList.css';

class BeerList extends Component {

  componentDidMount() {
    fetch( 'https://api.punkapi.com/v2/beers' )
      .then( response => response.json() )
      .then( arr => {
        const beers = arr.map(function(drink) {
          const bev = {
            name : drink.name,
            abv : drink.abv,
          }
          return bev
        })

        const beerList = document.querySelector( 'main ul' );

        beers.map(function(item){
          beerList.innerHTML += '<li class="beer-list__item"><div class="inner"><div class="beer-name">' + item.name + '</div><div class="beer-abv">' + item.abv + '%' + '</div></div></li>'
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