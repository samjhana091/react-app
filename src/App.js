import React, { Component } from 'react';

import Header from './Header.js'
import Body from './body.js'

class App extends Component {
  render() {
    return (
      <div>
        <h1>main page</h1>
        
        <Header title={"Header"}/>
        <Body firstname={"Srijana"} lastname={"Dhami"}/>

      </div>
    );
  }
}

export default App;
