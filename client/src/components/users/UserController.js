import React, { Component } from 'react';
import Login from './Login'

class UserController extends Component {

  render(){
    return(
      <div className="the-user">
      {this.props.user ?
        "hello" : <Login/>
      }
      </div>
    )
  }
}

export default UserController
