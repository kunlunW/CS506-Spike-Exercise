import React, { Component } from 'react';
import Item from './Item';

export default class Products extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: {},
      category: '',
      sortOption: ''
    };
  }

  componentWillMount() {
    this.setState(
      {products: this.props.productsList,
       category: this.props.category,
       sortOption: this.props.sortOption
      });
  }

  render() {
  
    let productKeys = Object.keys(this.props.productsList);

    return (
      <div className="products">
        <div className="container">
          <div className="row">
            {this.props.children}
            {
              productKeys.map((element,index) => {
                if (this.props.category === 'all') {
                  return (
                    <div key={index} >
                      <Item a={this.props.productsList[element]} addToCart={this.props.addToCart} />
                    </div>
                  );
                }
               
                else {
                  if (this.props.productsList[element].category === this.props.category) {
                    return (
                      <div >
                        <Item a={this.props.productsList[element]} addToCart={this.props.addToCart} />
                      </div>
                    );
                  }
                }
                return (null);
              })
            }
          </div>

         
        </div>
        
      </div>
    )
  }
}
