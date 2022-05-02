import React, { useState, useEffect, useContext } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import styled from 'styled-components'
import '@/styles/Detail.scss';
import axios from 'axios'
import axiosConfig from '@/lib/api/index.js'

let Box = styled.div`
    padding : 20px;
    color : ${ props => props.color };
  `;

// context api 사용방법 1
// 1. React.createContext() 로 범위 생성
let leftContext = React.createContext();

export default function ProductDetail(props){

    let { id } = useParams();

    let product = props.shoes.find(function(s){
      return s.id == id
    });

    let [alert, setAlert] = useState(true);
    let [caution, setCaution] = useState(false);
    let [inputData, setInputData] = useState('');

    let childLeft = props.left[id];
    //console.log(childLeft);

    /** useEffect : 컴포넌트가 mount 되었을 때, 컴포넌트가 update 될 때 실행
     *  -> 컴포넌트가 update 될때 무조건 실행하는 것이 아니라 실행조건을
     *     잡아줄 수 있음
     */
    //ProductDetail 컴포넌트 등장시 실행할 코드
    // useEffect(()=>{

    //   //setTimeout 의 경우 타이머 해제 해줘야함
    //   let timer = setTimeout(() => {
    //     setAlert(false);
    //   }, 5000);
    //   console.log('useEfffffffffffect');
    //   return () => { clearTimeout(timer)}
    // }, []);
    //alert 라는 state가 변경될 때만 실행되도록 조건을 잡아줄 수 있음

    useEffect(()=>{
      //2.그 다음 동작
      let timer = setTimeout(() => {
        setAlert(false);
      }, 2000);
      //console.log(2);
      return () =>{
        //1.return 먼저 동작 : mount시 실행 x , unmount시 실행
        //console.log(1);
        clearTimeout(timer);
      }
    })
    
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

    function Caution() {
      return(
        <div className="my-alert-red">
          <p>경고: 숫자만 입력하세요</p>
        </div>
      )
    }
    
    function Info(){
      // 3. useContext(범위명) 로 공유된 값 사용
      let left = useContext(leftContext);
      return(
        <div>
          <p>재고: {left[id]}</p>
          <Test></Test>
        </div>
      )
    }

    function Test(){
      let left = useContext(leftContext);

      return(
        <p>재고의재고: {left[id]}</p>
      )
    }
    return (
      <div className="container">
        <Box className="red">디테일페이지</Box>
        {
          caution == true ? <Caution/> : null
        }
        <input onChange={(e)=>{ 
          setInputData(e.target.value);
          if(typeof(inputData) != Number){
            setCaution(true);
          }else {
            setCaution(false);
          }
        }}/>
        {
          alert == true ? <Alert/> : null
        }
        {/* 같은 값을 공유할 HTML을 범위로 감싸기 */}
        <leftContext.Provider value={props.left}>
          <div className="row">
            <div className="col-md-6">
              <img src={product.img} width="100%" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">{product.title}</h4>
              <p>{product.content}</p>
              <p>{product.price}</p>

              <Info left={props.left}></Info>

              <button className="btn btn-danger" onClick={() => { props.setLeft([childLeft-1,10,11])}}>주문하기</button>&nbsp; 
              <button className="btn btn-danger" onClick={() => { navigate(-1); }}>뒤로가기</button> 
            </div>
          </div>
        </leftContext.Provider>
      </div> 
    )
  }
