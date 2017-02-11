import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Main from '../../components/Main/Main';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header></Header>
        <Main></Main>
      </div>
    )
  }
}

export default Home;