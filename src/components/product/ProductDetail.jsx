import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import styled from 'styled-components'
import '../common/Detail.scss';

let Box = styled.div`
    padding : 20px;
    color : ${ props => props.color };
  `;

export default function ProductDetail(props){
    
    let { id } = useParams();

    let product = props.shoes.find(function(s){
      return s.id == id
    });

    let [alert, setAlert] = useState(true);

    /** useEffect : 컴포넌트가 mount 되었을 때, 컴포넌트가 update 될 때 실행 */
    useEffect(()=>{
      console.log('useEffect useeeeeeee');
      let timer = setTimeout(() => {
        setAlert(false);
      }, 5000);
    });
    /** component 가 사라질때 코드 실행 가능 단, return은 무조건 함수 */
    useEffect(()=>{
      return function destroy(){

      };
    })

    /** useHistory : hook? event 기록 저장 object */
    const navigate = useNavigate();
    
    function Alert(){
      return(
        <div className="my-alert-yellow">
          <p>마감임박</p>
        </div>
      )
    }

    return (
      <div className="container">
        <Box className="red">디테일페이지</Box>
        {
          alert == true ? <Alert/> : null
        }
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