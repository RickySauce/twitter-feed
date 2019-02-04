import React, { Component } from 'react';

class RegistrationForm extends Component {


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
       </div>
      )
    }
}

export default RegistrationForm;
