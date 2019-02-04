import React, { Component } from 'react';
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

class LoginRegistration extends Component {

  state = {
    registration: false
  }

  handleRegistration = (event) => {
    event.preventDefault()
    this.setState((prevState) => {return {registration: prevState.registration ? false : true}})
  }

  render(){
    return(
      <>
      {this.state.registration ?
      <RegistrationForm handleLogin={this.props.handleLogin} handleRegistration={this.handleRegistration}/> :
      <LoginForm handleRegistration={this.handleRegistration}/>}
      </>
    )
  }
}

export default LoginRegistration
