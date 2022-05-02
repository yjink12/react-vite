import React, { useState } from 'react'
import '@/styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/common/Header';
//import Router from './routes/index.jsx';
import Data from './lib/utils/data.js';

import { Routes, Route } from 'react-router-dom'

import MainPage from '@/pages/MainPage.jsx'
import ProductDetail from '@/pages/product/ProductDetail';
import Page404 from '@/pages/error/404'
import Test from '@/pages/Test'
import Cart from './pages/Cart/Cart';

//Context api 사용 방법2
export let leftContext = React.createContext();

function App() {
  
  let [shoes, setShoes] = useState(Data);
  let [left, setLeft] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Header/>
      {/* <Router shoes={shoes} left={left} setLeft={setLeft}/> */}
      <Routes>
        <Route path="*" element={<Page404/>}/>
        <Route path="/" element={<MainPage/>}/>
        {/* nested routes */}
        <Route path="/detail/:id" element={<ProductDetail shoes={shoes} left={left} setLeft={setLeft}/>}/>

        <Route path="/cart" element={<Cart/>}/>

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
