import React, { Component } from "react";
import axios from "axios";
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
      wrongPass: false,
      test1: "Not yet gotten"
    };

    this.handleChange = this.handleChange.bind(this);
  }
  

  handleLoginButtonClick = () => {
    var r = "/login?username="+this.state.username+"&password="+this.state.password;
    axios.get(r).then(response => {
      this.setState({
        wrongPass: response.data.isCorrect
      });
	  if (!this.wrongPass) {
		window.location.href = "/shop";
	  }
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
 
    return (
      <div className="loginpage">
        <h1>Log In</h1>
        <br/> 
          <FormGroup controlId="username" size="lg">
           
            <FormControl
              autoFocus
              placeholder="Enter Username"
              value={this.state.username}
              onChange={this.handleChange}
              type="username"
            />
          </FormGroup>

          <FormGroup controlId="password" size="lg">
            <FormControl
              placeholder="Enter Password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>

          <h5>Don't have an account? <a href="/signup" > Register Now</a></h5>

          <Button
            block
            size="lg"
            onClick = {this.handleLoginButtonClick}>Login
          </Button>
      
          <h7>
            The test value is: {this.state.test1}
          </h7>
      
      </div>
    );
  }
}

