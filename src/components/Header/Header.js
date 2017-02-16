import React, { Component } from 'react';
import { Link } from 'react-router'
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
      	<Link to='/' className="header__logo"></Link>
      	<Link to='/BeerItem'>Beer</Link>
      </div>
    )
  }
}

export default Header;