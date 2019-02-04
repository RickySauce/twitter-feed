import React from 'react';

const LoginForm = (props) => {

  const handleRegistration = (event) => {
    event.preventDefault(console.log("prevented"))
  }

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input type="text" id="username" placeholder="Username" onChange={props.handleChange} /> <br />
        <input type="password" id="password" placeholder="Password" onChange={props.handleChange} /> <br />
        <input type="submit" value="Log In"  />
      </form>
      Already have an account? sign in <a href="" to="_blank" onClick={handleRegistration}>here</a>
    </div>
  )
}

export default LoginForm
