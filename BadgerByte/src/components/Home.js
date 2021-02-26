import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../picture/UW.jpg';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

import img2 from '../picture/hamburger.jpg';
import img3 from '../picture/pizza.jpg';
import img4 from '../picture/noodles.jpg';

export default class Home extends Component{
  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    return(
      <div>
        <div>
        <div >
          <Carousel>
            <Carousel.Item>
              <img width={1500} height={500}  src={img1} />
              <Carousel.Caption>
              <h3>Welcome to UW-Madison</h3>
              <p>The beautiful home of Badger Bytes.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={1500} height={500} src={img1} />
              <Carousel.Caption>
              <h3>Welcome to UW-Madison</h3>
              <p>The beautiful home of Badger Bytes.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={1500} height={500} src={img1} />
              <Carousel.Caption>
              <h3>Welcome to UW-Madison</h3>
              <p>The beautiful home of Badger Bytes.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
       </div>
     </div>
        <br></br>
        <content className='content'>

        <CardDeck>
      <Card>
        <CardImg top width="100%" src={img2} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Delicious Food</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">@Badger Byte</CardSubtitle>
          <CardText>Deluxe Signature Burger</CardText>
          <Button href="/shop">Order Now!</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={img3} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Freshly Made</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">@Badger Byte</CardSubtitle>
          <CardText>Signature Pizza</CardText>
          <Button href="/shop">Order Now!</Button>        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={img4} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Cost Friendly</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">@Badger Byte</CardSubtitle>
          <CardText>Signature Spagetti</CardText>
          <Button href="/shop">Order Now!</Button>        </CardBody>
      </Card>
    </CardDeck>
        </content>
      </div>
    );
  }
}
