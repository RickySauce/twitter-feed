import React, { Component } from 'react';
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

class LoginRegistration extends Component {

  state = {
    registration: false
  }

  handleRegistration = (event) => {
    event.preventDefault(console.log('prevented'))
    this.setState((prevState) => {return {registration: prevState.registration ? false : true}})
  }

  render(){
    return(
      <>
      {this.state.registration ?
      <RegistrationForm/> : <LoginForm handleRegistration={this.handleRegistration}/>}
      </>
    )
  }
}

export default LoginRegistration
