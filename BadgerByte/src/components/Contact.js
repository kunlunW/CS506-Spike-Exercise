import React, { Component } from "react";
import { Grid,
         Col,
         Form,
         FormGroup,
         ControlLabel,
         FormControl,
         Button } from 'react-bootstrap';
import "../App.css";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <div style={{width:'80%', margin:'auto'}}>
        <Grid>
          
              <div className="contact">
                <br/>
              <br/>
                <h4>UW-Madison
                    <br/><br/>
                    Tel: (123) 456-7890<br/><br/>
                    Email: badgerbyte@gmail.com<br/>
                </h4>
              </div>
            
          <br></br>
          <br></br>

          <h3>Tell us your thoughts</h3>

          <Form horizontal>
            <FormGroup >
              <Col componentClass={ControlLabel} sm={2}>Your Name</Col>
              <Col sm={10}>
                <FormControl  
                type="text" 
                placeholder="e.g John" />
              </Col>
            </FormGroup>
            <FormGroup >
              <Col componentClass={ControlLabel} sm={2}>Your Email</Col>
              <Col sm={10}>
                <FormControl  
                type="email" 
                placeholder="e.g 123abc@gmail.com" />
              </Col>
            </FormGroup>
            <FormGroup >
              <Col componentClass={ControlLabel} sm={2}>Your Thoughts</Col>
              <Col sm={10}>
                <textarea 
                className="form-control" 
                rows="5" 
                placeholder="e.g Nice web!"></textarea>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col xs={12} sm={12} md={12} lg={12}>
                <Button>Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </Grid>
      </div>
    );
  }
}
