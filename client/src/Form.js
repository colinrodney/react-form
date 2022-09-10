import React, {Component, useState} from "react"
// import './App.css';

class Form extends Component{
  constructor(props){
    super(props)
    this.state = {
      fName: "", 
      lName: "",
      email: "",
    }
  }

  // use one change handler to simultaneously set state for multiple properties
  onChange = (event) =>{
    console.log(event.target.value)
    this.setState({[event.target.name]: event.target.value})
  }

  submitForm = (event) =>{
    event.preventDefault()
    console.log(`name submitted: ${this.state.fName} ${this.state.lName} ${this.state.email}`)
    this.setState({[event.target.name]: ""})
    }

  render(){
    return(
      <form onSubmit={this.submitForm}>
        <label>
          first name:
          <input 
          type="text"
          value={this.value} 
          onChange={this.onChange} 
          placeholder="enter value"
          name="fName" />
        </label>

        <label>
          last name:
          <input type="text"
          value={this.value}
          onChange={this.onChange}
          placeholder="enter value"
          name="lName" />
        </label>

        <label>
          email:
          <input type="email"
          value={this.value}
          onChange={this.onChange}
          placeholder="enter value"
          name="email" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}


export default Form;