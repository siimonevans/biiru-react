import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import BeerItem from './components/BeerItem/BeerItem';
import NotFound from './components/NotFound/NotFound';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={hashHistory}>
          <Route path='/' component={Container}>
            <IndexRoute component={Home} />
            <Route path='BeerItem' component={BeerItem} />
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
      </div>
    );
  }
}

const Container = (props) => <div>
  <Sidebar></Sidebar>
  {props.children}
</div>

export default App;
