import React, { Component } from 'react';
import LoginRegistration from './LoginRegistration'

class UserController extends Component {

  render(){
    console.log(this.props.user)
    return(
      <div className="the-user">
      {this.props.user ?
        "hello" : <LoginRegistration handleLogin={this.props.handleLogin}/>
      }
      </div>
    )
  }
}

export default UserController
