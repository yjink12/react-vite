import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import styled from 'styled-components'
import '../common/Detail.scss';
import axios from 'axios'
import axiosConfig from '@/api/index.js'

let Box = styled.div`
    padding : 20px;
    color : ${ props => props.color };
  `;

export default function ProductDetail(props){

    let { id } = useParams();
    console.log(id);

    let product = props.shoes.find(function(s){
      return s.id == id
    });

    let [alert, setAlert] = useState(true);
    let [inputData, setInputData] = useState('');

    let childLeft = props.left;

    /** useEffect : 컴포넌트가 mount 되었을 때, 컴포넌트가 update 될 때 실행
     *  -> 컴포넌트가 update 될때 무조건 실행하는 것이 아니라 실행조건을
     *     잡아줄 수 있음
     */
    //ProductDetail 컴포넌트 등장시 실행할 코드
    useEffect(()=>{

      //setTimeout 의 경우 타이머 해제 해줘야함
      let timer = setTimeout(() => {
        setAlert(false);
      }, 5000);
      console.log('useEfffffffffffect');
      return () => { clearTimeout(timer)}
    }, []);
    //alert 라는 state가 변경될 때만 실행되도록 조건을 잡아줄 수 있음

    /** component 가 사라질때 코드 실행 가능 단, return은 무조건 함수 */
    useEffect(()=>{
      return function destroy(){

      };
    })
    /** useEffect 여러개 실행할 경우 작성한 순서대로 실행 */
    

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
        { inputData }
        <input onChange={(e)=>{ setInputData(e.target.value)}}/>
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

            <Info left={props.left}></Info>

            <button className="btn btn-danger" onClick={() => { props.setLeft(childLeft-1)}}>주문하기</button>&nbsp; 
            <button className="btn btn-danger" onClick={() => { navigate(-1); }}>뒤로가기</button> 
          </div>
        </div>
      </div> 
    )
  }

  function Info(props){
    return(
    <p>재고: {props.left[0]}</p>
    )
  }