import React, { Component } from 'react';
import ReactDrawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';
import cart from '../picture/cart.png';

export default class DrawerCart extends Component{
  constructor() {
    super();

    this.state = {
      open: false,
      position: 'left',
      noOverlay: false
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
  }
  toggleDrawer() {
    this.setState({open: !this.state.open});
  }

  closeDrawer() {
    this.setState({open: false});
  }

  onDrawerClose() {
    this.setState({open: false});
  }

  render() {
    return (
      <div >
   	    <img width={35}
             height={35}
             src={cart}
             onClick={this.toggleDrawer}
             disabled={this.state.open}
             alt="Your order"
        />
        <ReactDrawer className="drawer"
                   open={this.state.open}
                   position={this.state.position}
                   onClose={this.onDrawerClose}
                   noOverlay={this.state.noOverlay}          
        >
          <div style={{overflowY:'scroll', height:'100vh'}}>
          <i onClick={this.closeDrawer} className="icono-cross"></i>
          <h2 className="shoppingcartstyle">Your orders</h2>
          <div style={{marginBottom:'100px'}}className='col-lg-12'><a href="/check-out"><button type="button" className="btn btn-dark">CHECKOUT</button></a></div>
          </div>
        </ReactDrawer>
      </div>
    );
  }
}
