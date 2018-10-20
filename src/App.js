import React, { Component } from 'react';
// import './App.css';
import Expandable from './Components/Expandable';
import PriceSummary from './Containers/PriceSummaryContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Expandable showTitle="See Item Details" hideTitle="Hide Item Details">
          <p>Essentials</p>
        </Expandable>
        <PriceSummary />
      </div>
    );
  }
}

export default App;
