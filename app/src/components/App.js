import React, { Component } from 'react';
import '../style/App.css';
import StoreList from './StoreList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <StoreList/>
      </div>
    );
  }
}

export default App;
