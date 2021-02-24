import React, { Component } from "react";
import { Dropdown,
         DropdownToggle,
         DropdownMenu,
         DropdownItem } from 'reactstrap';

         


import loginUser from "../picture/login.png";

export default class UserDropDown extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      user: null
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  

  render() {
    if (!this.props.getUser()){
      return (
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
  
          <DropdownToggle className = 'dropdown' color ={'white'}>
            <img width={45} height={45} src={loginUser} alt={loginUser}/>
          </DropdownToggle>
  
          <DropdownMenu>
            <DropdownItem><a href="/login">log in </a></DropdownItem>
            <DropdownItem divider />
            <DropdownItem><a href="/signup">register</a></DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
    }
    else{
      return (
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
  
          
        </Dropdown>
      );
    }
  }
}
