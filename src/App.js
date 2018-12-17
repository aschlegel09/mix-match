import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Cards from "./components/cards";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div><Navbar />
        </div>
        <div className="jumbotron main">
          <h1 className="head top-head">Mix &amp; Match Game!</h1>
          <br />
          <h4 className="head">Click on an image to earn points,<br /> but don't click on any one more than once!</h4>
        </div>
        <div className="jumbotron cardbody">
          <Cards />
        </div>
        <div className="footer-copyright text-center py-3">© 2018 Copyright: <a href="https://github.com/aschlegel09/mix-match" className="text-white">aschlegel09 Github</a>
        </div>
      </div>
    );
  }
}

export default App;
