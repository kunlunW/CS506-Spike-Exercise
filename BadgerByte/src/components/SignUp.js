import React, { Component } from "react";
import axios from "axios";

import {
  FormGroup,
  FormControl,
  Button,
} from "react-bootstrap";

import "../App.css";

export default class Signup extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      username: "newUser",
      password: "",
      confirmPassword: "",
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  buttonClick = () => {

	var check = this.state.password === this.state.confirmPassword;
	if (check) {
		 var r = "/signup?name="+this.state.username+"&password="+this.state.password;
          axios.get(r).then(response => {
              console.log(response.data)
         });
	}
	//need a way to notify user if password and confirmPassword are not equal
  }

  renderForm() {
    return (
      <form >
        <FormGroup size = "lg">
          <FormControl
            autoFocus
            value={this.state.username}
            onChange={this.handleChange.bind(this)}
            placeholder="Enter username"
          />
        </FormGroup>

        <FormGroup controlId="password" size = "lg">
          <FormControl
            value={this.state.password}
            onChange={this.handleChange.bind(this)}
            type="password"
            placeholder="Enter Password"
          />
        </FormGroup>

        <FormGroup controlId="confirmPassword" size = "lg">
          <FormControl
            value={this.state.confirmPassword}
            onChange={this.handleChange.bind(this)}
            type="password"
            placeholder="Enter Password"
          />
        </FormGroup>

        <h5>Already a user? <a href="/login" > Log in</a></h5>

        <br/><br/>

        <Button block size="lg" onClick = {this.buttonClick} >
            Register
          </Button>

      </form>
    );
  }

  render() {

      return (
        <div className="signuppage">
          <h1>Sign Up </h1>
          <br/>
          {this.renderForm()}
        </div>

      );
    }
  }
