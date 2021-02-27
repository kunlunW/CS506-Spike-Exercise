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
      username: "",
      password: "",
      confirmPassword: "",
      phonenumber: "",
      address: "",
      type: "customer"
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
     this.setState({
       [event.target.id]: event.target.value
     });
   };

  handleRegisterButtonClick = () => {
    var r = "/signup?username="+this.state.username+"&password="+this.state.password+"&phonenumber="+this.state.phonenumber+"&address="+this.state.address+"&type="+this.state.type;
    axios.get(r).then(response => {
      this.setState({
        wrongPass: response.data.isCorrect
      });
    });
  }

  renderForm() {
    return (
      <form >
        <FormGroup controlId = "username" size = "lg">
			<FormControl
              autoFocus
              placeholder="Enter Username"
              value={this.state.username}
              onChange={this.handleChange}
              type="username"
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
            placeholder="Confirm Password"
          />
        </FormGroup>

        <FormGroup controlId="phonenumber" size="lg">
            <FormControl
              placeholder="Enter Phone Number"
              value={this.state.phonenumber}
              onChange={this.handleChange}
              type="phonenumber"
            />
          </FormGroup>

          <FormGroup controlId="address" size="lg">
            <FormControl
              placeholder="Enter Address"
              value={this.state.address}
              onChange={this.handleChange}
              type="address"
            />
          </FormGroup>

        <h5>Already an user? <a href="/login" > Log in</a></h5>

        <br/><br/>
        
        <Button block size="lg" onClick = {this.handleRegisterButtonClick}>
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


