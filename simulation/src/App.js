import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import './App.css';

class App extends Component {
  constructor()
  {
    super();

    this.state = {
      inventory: []
    }
  }

  componentDidMount()
  {
    // gets inventory form the server. makes an axios request
    axios.get('/api/products')
    .then((response) =>
    {
      this.setState({
        inventory: response.data
      })
    })
  }

  render() {
    return (
      <Router>
        <div className="window">
          <Header/>
          <Switch>
            <Route path='/form/:edit/:id' component={Form}/>
            <Route exact path='/' 
            render={()=><Dashboard inventory={this.state.inventory}/>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
