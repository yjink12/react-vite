import { useState } from 'react'
import './components/common/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown, Card } from 'react-bootstrap';

import Header from './components/common/Header';
import MainPage from './pages/MainPage'
import ProductDetail from './components/product/ProductDetail';
import Page404 from './pages/error/404'
import Test from './pages/Test'
import Data from './utils/data.js';

import { Link, Routes, Route } from 'react-router-dom'

function App() {
  
  let [shoes, setShoes] = useState(Data);
  let [left, setLeft] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="*" element={<Page404/>}/>
        <Route path="/" element={<MainPage/>}/>
        {/* nested routes */}
        <Route path="/detail/:id" element={<ProductDetail shoes={shoes} left={left} setLeft={setLeft}/>}/>

        <Route path="/event" element={<Test/>}>
          <Route path="one" element={
            <div>
              <h4>오늘의 이벤트</h4>
              <p>첫 주문시 서비스</p>  
            </div>
          }/>
          <Route path="two" element={
            <div>
              <h4>오늘의 이벤트</h4>
              <p>생일기념 쿠폰받기</p> 
            </div>
          }/>
        </Route>

      </Routes>

    </div>
  )
}

export default App
