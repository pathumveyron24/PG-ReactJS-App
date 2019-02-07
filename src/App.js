import React, { Component } from 'react';
import logo from './download.jpg';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Menubar from './Component/Menubar';
import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Menubar/>
      <Navbar/>
      <Sidebar/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           INDUSTRIAL MASTER
          </p>
         
        </header>
        <Footer/>
      </div>
    );
  }
}

export default App;
