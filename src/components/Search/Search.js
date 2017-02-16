import React, { Component } from 'react';
import './Search.css';

class Search extends Component {

  testt() {
    console.log('here');
  }

  componentDidMount() {
    this.testt();
  }

  render() {
    return (
      <div className="global-search">
        <div className="wrapper">
          <input className="global-search__input" type="text" placeholder="Search&hellip;" />
        </div>
      </div>
    )
  }
}

export default Search;