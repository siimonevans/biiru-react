import React, { Component } from 'react';
import { Link } from 'react-router'
import './Header.css';

class Header extends Component {

  toggleSearch() {
    const mainPanel     = document.querySelector('.main'),
          toggle        = document.querySelector('.js-search-toggle'),
          mainSearch    = 'main--search';

    toggle.addEventListener('click', function() {
      mainPanel.classList.toggle(mainSearch);
    });
  }

  componentDidMount() {
    this.toggleSearch();
  }

  render() {
    return (
      <div className="header">
        <div className="wrapper">
          <Link to='/' className="header__logo">Biiru</Link>
          <Link to='/BeerItem' className="header__link">Beer</Link>
          <Link to ='' className="header__link js-search-toggle">Search</Link>
        </div>
      </div>
    )
  }
}

export default Header;