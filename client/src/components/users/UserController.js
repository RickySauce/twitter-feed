import React, { Component } from 'react';
import LoginRegistration from './LoginRegistration'
import UserFeed from './UserFeed'

class UserController extends Component {

  render(){
    return(
      <div className="the-user">
      {this.props.user ?
        <UserFeed user={this.props.user}/> : <LoginRegistration handleLogin={this.props.handleLogin}/>
      }
      </div>
    )
  }
}

export default UserController
