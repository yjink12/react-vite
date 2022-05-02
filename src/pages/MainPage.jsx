import React, {useState} from 'react'
import Data from '../lib/utils/data.js';

import { Card } from 'react-bootstrap';

import ProductList from '../components/product/ProductList'

export default function Main(props) {
  
    let [shoes, setShoes] = useState(Data);

    return (
      <div>메인페이지임
          <Card className="background">
            <Card.Body>
              <Card.Title>20% Season off</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
  
          <ProductList shoes={shoes} left={props.left}/>
      </div>
    )
  }