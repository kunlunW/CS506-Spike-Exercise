import React, {Component} from 'react';
import DrawerCart from "../DrawerCart";
import UserDropDown from "../UserDropDown";

import { Collapse,
         Navbar,
         NavbarToggler,
         Nav,
         NavItem,
         NavLink } from 'reactstrap';

import "../../App.css";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <div className = "navbar">
          <Navbar color="white" light expand="lg">
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>

            <Nav navbar >
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/shop">Menu</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/about-us">About Us</NavLink>
              </NavItem>
            </Nav>

            <Nav>
              <NavItem>
                <UserDropDown addToCart={this.props.addToCart} setUser={this.props.setUser} getUser={this.props.getUser}/>
              </NavItem>

              <NavItem className="emptycart">
                <a><DrawerCart deleteFromCart={this.props.deleteFromCart} items={this.props.items} prices={this.props.prices}/></a>
              </NavItem>
            </Nav>

          </Collapse>
        </Navbar>
        </div>
      </div>
    );
  }
}
