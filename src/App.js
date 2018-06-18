import React, { Component } from 'react';

import Header from './Header.js'
import Body from './body.js'

class App extends Component {
  render() {
    return (
      <div>
        <h1>main page</h1>
        
        <Header text={"Header"}/>
        <Body />

      </div>
    );
  }
}

export default App;
