import React, { Component } from 'react';

export default class Item extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      isAdded: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  addToCart() {
    this.setState({ isAdded: true}, function() {
      setTimeout(() => {
          this.setState({ isAdded: false });
      }, 1200);
    });
  }

  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.a.image} alt="" onClick={this.handleShow}/>
          <div className="card-body">
            <h5 className="card-title">{this.props.a.name}</h5>
            <p >${ this.props.a.price.toFixed(2)}</p>
              <a className="btn btn btn-success"  onClick={() => {
                this.addToCart();
                this.props.addToCart(this.props.a.name, this.props.a.price)}}>
                {!this.state.isAdded ? "Add To Cart" : "Added"}
              </a>
          </div>
      </div>
    )
  }
}
