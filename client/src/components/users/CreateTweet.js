import React, { Component } from 'react';

class CreateTweet extends Component {

  state = {
    body: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
     event.preventDefault()
     const data = JSON.stringify({tweet: this.state})
       fetch(`/users/${this.props.user.id}/tweets`, {
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       method: "POST",
       body: data
     })
     .then(res => res.json())
     .then(json => {return json.errors ? null: this.props.updateFeed(json)});
   };

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="body" placeholder="body" onChange={this.handleChange} /> <br />
          <input type="submit" value="Post Tweet"  />
        </form>
      </div>
    )
  }
}

export default CreateTweet
