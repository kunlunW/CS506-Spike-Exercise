import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Sidebar extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentCategory: 'All'
    };
  }

  componentWillMount() {
    this.setState({currentCategory: this.props.currentCategory});
  }

  render(){
    return(
      <div>
        <Button bsStyle="primary large" style={{margin: '10px'}} onClick={()=>{
            this.props.setCategory("all");
        }}> All </Button>
        <Button bsStyle="primary large" style={{margin: '10px'}} onClick={()=>{
            this.props.setCategory("beverage");
        }}> Beverages </Button>
        <Button bsStyle="primary large" style={{margin: '10px'}} onClick={()=>{
            this.props.setCategory("Italian");
        }}> Italian</Button>
        <Button bsStyle="primary large" style={{margin: '10px'}} onClick={()=>{
            this.props.setCategory("deserts");
        }}> Deserts </Button>
        <Button bsStyle="primary large" style={{margin: '10px'}} onClick={()=>{
            this.props.setCategory("burgers");
        }}> Burgers </Button>
        <Button bsStyle="primary large" style={{margin: '10px'}} onClick={()=>{
            this.props.setCategory("chinese");
        }}> Chinese中国菜 </Button>
      </div>
    );
  }
}
