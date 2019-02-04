import React, { Component } from 'react';

class LoginForm extends Component {

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="username" placeholder="Username" onChange={this.props.handleChange} /> <br />
          <input type="password" id="password" placeholder="Password" onChange={this.props.handleChange} /> <br />
          <input type="submit" value="Log In"  />
        </form>
        Already have an account? sign in <a href="" to="_blank" onClick={(event) => this.props.handleRegistration(event)}>here</a>
      </div>
    )
  }
}

export default LoginForm
