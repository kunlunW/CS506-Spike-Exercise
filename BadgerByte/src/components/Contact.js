import React, { Component } from "react";
import { Grid,
         Col,
         Row,
         Form,
         FormGroup,
         ControlLabel,
         FormControl,
         Button, 
         Container} from 'react-bootstrap';
import "../App.css";
import Map from "./Map";
import {
    Card, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';

import img2 from '../picture/deliveryCart.jpeg';
import img3 from '../picture/driver.png';
import img4 from '../picture/time.png';


export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <div style={{width:'100%', margin:'auto'}}>
        <Grid>
          
              {/* <div className="contact"> */}
                <h2>You Delivery</h2>
              {/* </div> */}

              <Row className="justify-content-md-center">
              <Col xs={12} sm={6} md={6} lg={6}>
                       <Map />

                   </Col> 
            </Row>
              


        <br/><br/>
        
        <content className='content'> 
                <CardDeck>
              <Card>
              <CardImg top width="100%" src={img2} alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h5">Honda Civic</CardTitle>
                    <CardSubtitle tag="h6"  className="mb-2 text-muted">License: BADGER12</CardSubtitle>
                    <CardText><br/><br/></CardText>
                    <Button href="">Check Update</Button>
                    </CardBody>
              </Card>

              <Card>
              <CardImg top width="100%" src={img3} alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h5">John Smith</CardTitle>
                    <CardSubtitle tag="h6"  className="mb-2 text-muted">Tel:(123)456-7890</CardSubtitle>
                    <CardText><br/><br/></CardText>
                    <Button href="">View Credential</Button>
                    </CardBody>
              </Card>
              
              <Card>
              <CardImg top width="100%" src={img4} alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h5">Estimated Delivery Time</CardTitle>
                    <CardSubtitle tag="h6"  className="mb-2 text-muted"><br/></CardSubtitle>
                    <CardText>15:00-15:30<br/></CardText>
                    <Button href="">Check Update!</Button>
                    </CardBody>
              </Card>
              
          </CardDeck>                
          
          </content>


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
