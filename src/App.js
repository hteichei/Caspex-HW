import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Expandable from './Components/Expandable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Expandable showTitle="See Item Details" hideTitle="Hide Item Details">
          <p>Essentials</p>
        </Expandable>
      </div>
    );
  }
}

export default App;

/*
{
  promoApplied: false,
  items: [
    {
      title: '',
      price: '',
      description: '',
      img: '',
    }
]

}
*/
