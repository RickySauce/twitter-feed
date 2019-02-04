import React, { Component } from 'react';

class LoginForm extends Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
     event.preventDefault()
     const data = JSON.stringify({user: this.state})
       fetch('/login', {
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       method: "POST",
       body: data
     })
     .then(res => res.json())
     .then(json => {return json.message ? null: this.props.handleLogin(json) });
   };

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="username" placeholder="Username" onChange={this.handleChange} /> <br />
          <input type="password" id="password" placeholder="Password" onChange={this.handleChange} /> <br />
          <input type="submit" value="Log In"  />
        </form>
        Don't have an account? sign up <a href="" to="_blank" onClick={(event) => this.props.handleRegistration(event)}>here</a>
      </div>
    )
  }
}

export default LoginForm
