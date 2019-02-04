import React, { Component } from 'react';

class RegistrationForm extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
     event.preventDefault()
     const data = JSON.stringify({user: this.state})
       fetch('/users', {
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       method: "POST",
       body: data
     })
     .then(res => res.json())
     .then(json => {console.log(json)});
   };

  render(){
    return (
      <div>
       <form onSubmit={this.handleSubmit}>
         <input
         id="username"
         placeholder="Username"
         type="text"
         onChange={this.handleChange}/><br/>
         <input
         id="email"
         placeholder="Email"
         type="email"
         onChange={this.handleChange}/><br/>
         <input
         id="password"
         placeholder="Password"
         type="password"
         onChange={this.handleChange}/><br/>
         <input
         id="password_confirmation"
         placeholder="Password Confirmation"
         type="password"
         onChange={this.handleChange}/><br/>
         <input type="submit" value="Register"/>
         </form>
         Already have an account? sign in <a href="" to="_blank" onClick={(event) => this.props.handleRegistration(event)}>here</a>
       </div>
      )
    }
}

export default RegistrationForm;
