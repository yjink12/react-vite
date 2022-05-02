import { Routes, Route } from 'react-router-dom'

import MainPage from '@/pages/MainPage.jsx'
import ProductDetail from '@/components/product/ProductDetail';
import Page404 from '@/pages/error/404'
import Test from '@/pages/Test'

function Router(props) {

    return (
    <Routes>
        <Route path="*" element={<Page404/>}/>
        <Route path="/" element={<MainPage/>}/>
        {/* nested routes */}
        <Route path="/detail/:id" element={<ProductDetail shoes={props.shoes} left={props.left} setLeft={props.setLeft}/>}/>

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
    )
}
export default Router;