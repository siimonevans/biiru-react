import React, { Component } from 'react';
import { Link } from 'react-router'
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
      	<Link to='/' className="sidebar__logo"></Link>
      	<Link to='/BeerItem'>Beer</Link>
      </div>
    )
  }
}

export default Sidebar;