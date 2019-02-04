import React, { Component } from 'react';
import TweetFeed from './components/TweetFeed'
import UserController from './components/users/UserController'
import { FaTwitter } from "react-icons/fa";
import './App.css';

class App extends Component {

  state = {
    user: ''
  }

  handleLogin = (user) => {
    this.setState({user: user})
  }

  render() {
    return (
      <div className="App">
        <header className="fwitter-header">
          <h1>THIS IS FWITTER <FaTwitter/></h1>
        </header>
        <TweetFeed/>
        <UserController handleLogin={this.handleLogin}/>
      </div>
    );
  }
}

export default App;
