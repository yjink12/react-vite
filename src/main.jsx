import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './components/common/index.css'

import { BrowserRouter } from 'react-router-dom'

/** BrowserRouter vs HashRouter
 *  BrowserRouter : react routing setting 필요
 *  HashRouter : http://--------/#/ 
 *                # 뒤에 경로 => 서버로 전달 x
 *                (라우팅을 비교적 안전하게 할 수 있음)
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
