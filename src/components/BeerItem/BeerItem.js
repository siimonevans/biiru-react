import React, { Component } from 'react';
import './BeerItem.css';

class BeerItem extends Component {
  render() {
    return (
      <div className="beer-item">
        <div className="wrapper">
          <h1>A beer</h1>
        </div>
      </div>
    )
  }
}

export default BeerItem;