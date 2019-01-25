import React, { Component } from 'react';
import {HashRouter as Router} from 'react-router-dom';

import './App.css';

class App extends Component {
  constructor()
  {
    super();

    this.state = {
      inventory = []
    }
  }

  componentDidMount()
  {
    // gets inventory form the server. makes an axios request
  }
  render() {
    return (
      <Router>
        <div className="App">

        </div>
      </Router>
    );
  }
}

export default App;
