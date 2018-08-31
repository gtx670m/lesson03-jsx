import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import User from './components/User';
import Product from './components/Product';

class App extends Component {
   render() {
      return (
         <div>
            <Header></Header>
            <Product></Product>
            <User></User>
         </div>
      );
   }
}

export default App;
