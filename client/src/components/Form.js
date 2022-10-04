import React, {Component, useState} from "react"
// import './Form.css';

class Form extends Component{
  constructor(props){
    super(props)
    this.state = {
      username: "", 
      password: "",
    }
  }

  // use one change handler to simultaneously set state for multiple properties
  onChange = (event) =>{
    console.log(event.target.value)
    this.setState({[event.target.name]: event.target.value})
  }

  submitForm = (event) =>{
    event.preventDefault()
    console.log(`credentials: ${this.state.username}, ${this.state.password}`)

    fetch("http://localhost:9000",{
      method: "POST",

      headers:{
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(this.state)

    })
    .then(res => res.json())
    .then(res => console.log(`something happened...`))

    this.setState({[event.target.name]: ""})
    }

  render(){
    return(
      <form onSubmit={this.submitForm}>
        <label>
          username:
          <input 
          type="text"
          value={this.value} 
          onChange={this.onChange} 
          placeholder="username"
          name="username" />
        </label>

        <label>
          password:
          <input type="password"
          value={this.value}
          onChange={this.onChange}
          placeholder="enter value"
          name="password" />
        </label>

        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form;
