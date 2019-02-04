import React, { Component } from 'react';
import CreateTweet from './CreateTweet'
import Tweet from '../Tweet'

class UserFeed extends Component {

  state = {
    tweets: []
  }

  componentDidMount(){
    fetch(`/users/${this.props.user.id}/tweets`)
    .then(res => res.json())
    .then(json => this.setState({tweets: json}))
  }

  updateFeed = (tweet) => {
    this.setState((prevState) => {return {tweets: [...prevState.tweets, tweet]}})
  }

  render(){
    console.log(this.props.user.id)
    return(
      <>
      <ul>
      {this.state.tweets.map(tweet => <Tweet body={tweet.body}/>)}
      </ul>
      <CreateTweet updateFeed={this.updateFeed} user={this.props.user}/>
      </>
    )
  }
}

export default UserFeed
