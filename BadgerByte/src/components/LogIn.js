import React, { Component } from "react";
import axios from "axios" //Cam added this

import { Button,
         FormGroup,
         FormControl,
         } from "react-bootstrap";

import "../App.css";

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirectTo: null,
      wrongPass: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  //Cam added this
  buttonClick = () => {
	var r = "/login?name="+this.state.username+"&password="+this.state.password;
    axios.get(r).then(response => {
       console.log(response.data)
    });
  };

  render() {

    return (
      <div className="loginpage">
        <h1>Log In</h1>
        <br/>
          <FormGroup  size="lg">

            <FormControl
              autoFocus
              placeholder="Enter username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="password" size="lg">
            <FormControl
              placeholder="Enter Password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
            {this.state.wrongPass? "Invalid Password. Please Try Again." : ""}
          </FormGroup>

          <h5>Don't have an account? <a href="/signup" > Register Now</a></h5>

          <Button blocksize="lg" onClick = {this.buttonClick} >
            Login
          </Button>
      </div>
    );
  }
}
