import React, {Component} from 'react';
import Products from "./Products";
import Sidebar from './Sidebar';

import product from './product.json';

export default class Shop extends Component{
	constructor(props) {
    super(props);

    this.state = {
      category: 'all',
      products: {},
      sortOption: '',
      term: ''
    };

    this.setCategory = this.setCategory.bind(this);

  }

  setCategory(c) {
    if (c !== null && c !== undefined) {
      this.setState({category: c});
    }
  }

  componentWillMount() {
    this.setState({products: product});
    this.setState({unfilteredProducts: product});
  }

  render(){
    return(
      <div >
        <div className='container'>
          <div className='row'>

            <div className='col-xs-12'>
              <Sidebar setCategory={this.setCategory} />
            </div>
            <br/>
            <div className='col-xs-12'>
              <Products 
              addToCart={this.props.addToCart} 
              category={this.state.category} 
              productsList={this.state.products}  
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
