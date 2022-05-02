import React, {useContext, useState} from "react"
import axios from 'axios'
import axiosConfig from '@/lib/api/index.js'
import Loading from '@/components/common/Loading.jsx'
import { leftContext } from "../../App"

export default function ProductList(props) {

    let [shoes, setShoes] = useState(props.shoes);
    let [count, setCount] = useState(2);
    let [load, setLoad] = useState(false);
    let left = useContext(leftContext);

    async function ShoesList(){
      //로딩중 UI
      setLoad(true);

      try {
          let newCount = count;
          console.log('newwwww: ', newCount);
          setCount(newCount+1);
          let result = await axios.get(`${axiosConfig.baseURL}/shop/data${count}.json`);

          /** [...array] 
           *  ... : 대괄호[] 벗기기
          */
          setShoes([...shoes, ...result.data]);
          console.log('....: ', shoes);
          setLoad(false);

      }catch(e){
        setLoad(false);
        console.error(e);
      }
    }

    return (
      <div className='container'>
          <div className='row'>
          {
            shoes.map(function(s,i){
              return (
                <div className='col-md-4' key={i}>
                  <img src={s.img} width="100%"/>
                  <h4>{s.title}</h4>
                  <p>{s.content}</p>
                  <p>{s.price}</p>
                  <p>{left}</p>
                </div>
              )
            })
          }
          </div>
          <div className="loading">{load ? <Loading /> : ""}</div>
          <button className="btn btn-danger" onClick={ ShoesList }>더보기</button>
      </div>
    )
  }