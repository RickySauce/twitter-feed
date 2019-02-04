import React, { Component } from 'react';
import Tweet from './Tweet'

class TweetFeed extends Component {

  render(){
    return (
      <div className="the-feed">
      {this.props.tweets.map(tweet => <Tweet body={tweet.body} username={tweet.user.username}/>)}
      </div>
    )
  }

}

export default TweetFeed
