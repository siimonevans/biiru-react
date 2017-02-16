import React, { Component } from 'react';
import { Link } from 'react-router'
import './Header.css';

class Header extends Component {

  toggleSearch() {
    const mainPanel     = document.querySelector('.main'),
          search        = document.querySelector('.global-search'),
          toggle        = document.querySelector('.js-search-toggle'),
          mainSearch    = 'main--search',
          globalSearch  = 'global-search--show';

    toggle.addEventListener('click', function() {
      mainPanel.classList.toggle(mainSearch);
      search.classList.toggle(globalSearch);
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
          <Link to='' className="header__link js-search-toggle">Search</Link>
        </div>
      </div>
    )
  }
}

export default Header;