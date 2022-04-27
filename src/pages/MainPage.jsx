import React, {useState} from 'react'
import Data from '../utils/data.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

import ProductList from '../components/product/ProductList'

export default function Main() {
  
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
  
          <div className='container'>
            <div className='row'>
              <ProductList shoes={shoes}/>
            </div>
          </div>
      </div>
    )
  }