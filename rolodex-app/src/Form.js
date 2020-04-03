import React from 'react';


class Form extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  }


  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  onSubmit = (event) => {
  event.preventDefault();
  this.props.onSubmit(this.state)
  console.log(this.state)
  }
  onSubmit = fields => {
    console.log('App comp got: ', fields)
  }
  render() {
    return(
      <form onSubmit={fields => this.onSubmit(fields)}>
        <input 
        name="firstName"
        placeholder= 'First name' 
        value={this.state.firstName} 
        onChange={event => this.handleChange(event)}
        />
        <br />
        <input 
        name="lastName"
        placeholder= 'Last name' 
        value={this.state.lastName} 
        onChange={event => this.handleChange(event)}
        />
        <br />
        <input 
        name="username"
        placeholder= 'username' 
        value={this.state.username} 
        onChange={event => this.handleChange(event)}
        />
        <br />
        <input 
        name="email"
        placeholder= 'email' 
        value={this.state.email} 
        onChange={event => this.handleChange(event)}
        />
        <br />
        <input 
        name="password"
        placeholder= 'password' 
        value={this.state.password} 
        onChange={event => this.handleChange(event)}
        />
        <br />
        <button onClick={(event) => this.onSubmit(event)}>Submit</button>
      </form>
    )
  }
}

export default Form;