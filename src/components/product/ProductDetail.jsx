import React, {useState} from "react";
import { useHistory } from "react-router-dom";

export default function ProductDetail(){
    
    /** useHistory : hook? event 기록 저장 object */
    let history = useHistory();
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">상품명</h4>
            <p>상품설명</p>
            <p>120000원</p>
            <button className="btn btn-danger">주문하기</button> 
            <button className="btn btn-danger" onClick={() => {
                
                // 뒤로가기 = goBack()
                //history.goBack();

                //특정경로로 이동 = push()
                history.push('/');
            }}>뒤로가기</button> 
          </div>
        </div>
      </div> 
    )
  }