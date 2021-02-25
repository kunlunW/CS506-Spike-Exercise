import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Shop from './components/Shop';
import SignUp from './components/SignUp';
import product from './components/product.json';
import Contact from './components/Contact';

import './App.css';
import '../node_modules/react-image-slider/lib/image-slider.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      items: {},
      prices: {},
      user:{
        email: '',
        uid: '',
      }
    };

  }

  componentWillMount(){
    this.setState({
      products: product,
      unfilteredProducts: product,
      items: {},
      prices: {}
    });
    var cart = localStorage.getItem('cart');
    if (cart)
      this.setState({items:JSON.parse(cart)});

    var prices = localStorage.getItem('prices');
    if (prices){
      this.setState({prices: JSON.parse(prices)});
    }

    var user = localStorage.getItem('user');
    if (user){
      this.setState({user: JSON.parse(user)});
    }
  }

  getUser(){
    var user = localStorage.getItem('user');
    if (user)
      return JSON.parse(user);
    return null;
  }

  render() {
    return (
      <div className="App">
        <div className='App-header'>
          <Navbar
            items={this.state.items}
            prices={this.state.prices}
            getUser={this.getUser}
          />
          <h1 className="App-title">Badger Bytes</h1>
        </div>
        <div className='App-landing'>
          <BrowserRouter>
            <div id='routes'>
              <Route exact path='/' component={Home} />
             <Route exact path='/contact' component={Contact} />
              <Route exact path='/shop'  render={()=><Shop addToCart={this.addToCart}/>}  />
              <Route exact path='/login' render={()=><LogIn />}/>
              <Route exact path='/signup' render={()=><SignUp />} />
              
            
            </div>
          </BrowserRouter>
        </div>
        <div className='App-footer'>
        <footer>
        <p> Badger Byte</p>
      </footer>
        </div>
      </div>
    );
  }
}

export default App;
