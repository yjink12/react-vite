import React, {useState} from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

export default function ProductDetail(props){
    
    let { id } = useParams();

    let product = props.shoes.find(function(s){
      return s.id == id
    });

    /** useHistory : hook? event 기록 저장 object */
    const navigate = useNavigate();
    
    return (
      <div className="container">
        <div>디테일페이지</div>
        <div className="row">
          <div className="col-md-6">
            <img src={product.img} width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{product.title}</h4>
            <p>{product.content}</p>
            <p>{product.price}</p>
            <button className="btn btn-danger">주문하기</button> 
            <button className="btn btn-danger" onClick={() => { navigate(-1); }}>뒤로가기</button> 
          </div>
        </div>
      </div> 
    )
  }