import React, { Component } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
    );
  }
}

export default App;
