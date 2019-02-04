import React, { Component } from 'react';
import LoginForm from './LoginForm'

class LoginRegistration extends Component {

  state = {
    registration: false
  }

  handleRegistration = (event) => {
    event.preventDefault(console.log('prevented'))
    this.setState((prevState) => {return {registration: prevState.registration ? false : true}})
  }

  render(){
    console.log(this.state)
    return(
      <>
      {this.state.registration ?
      "hello" : <LoginForm handleRegistration={this.handleRegistration}/>}
      </>
    )
  }
}

export default LoginRegistration
