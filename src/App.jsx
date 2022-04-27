import { useState } from 'react'
import './components/common/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown, Card } from 'react-bootstrap';

import Header from './components/common/Header';
import Main from './pages/MainPage'
import ProductDetail from './components/product/ProductDetail';

import { Link, Route, Switch } from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
          <Header/>
          <Route exact path="/">
            <Main/>
          </Route>

          <Route path="/detail">
            <ProductDetail/>
          </Route>

          {/* <Router path="/Modal" component={Modal}>
            <div>component 바로 보여주기</div>
          </Router> */}
    </div>
  )
}

export default App
