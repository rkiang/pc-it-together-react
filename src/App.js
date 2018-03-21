import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from './images/PCitTogetherLogo.png';
import './App.css';

// pages
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">PC It Together</h1>
        </header>
        <Router>
          <div className="Links">
            <ul>
              <li><Link to='/'>Login</Link></li>
              <li><Link to='/register'>Register</Link></li>
            </ul>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/register' component={Register} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
