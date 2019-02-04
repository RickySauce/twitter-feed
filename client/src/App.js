import React, { Component } from 'react';
import TweetFeed from './components/TweetFeed'
import UserController from './components/users/UserController'
import { FaTwitter } from "react-icons/fa";
import './App.css';

class App extends Component {

  state = {
    user: '',
    tweets: []
  }

  componentDidMount(){
    fetch(`/tweets`)
    .then(res => res.json())
    .then(json => this.setState({tweets: json}))
  }

  handleLogin = (user) => {
    this.setState({user: user})
  }

  handleNewTweet = (tweet) => {
    this.setState((prevState) => { return {tweets: [...prevState.tweets, tweet]}})
  }

  render() {
    return (
      <div className="App">
        <header className="fwitter-header">
          <h1>THIS IS FWITTER <FaTwitter/></h1>
        </header>
        <TweetFeed tweets={this.state.tweets}/>
        <UserController handleNewTweet={this.handleNewTweet} user={this.state.user} handleLogin={this.handleLogin}/>
      </div>
    );
  }
}

export default App;
