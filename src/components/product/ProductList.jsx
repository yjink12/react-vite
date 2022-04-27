import React, {useState} from "react"

export default function ProductList(props) {
    return (
      <div> 
        {
          props.shoes.map(function(s,i){
            return (
              <div className='col-md-4' key={i}>
                <img src={s.img} width="100%"/>
                <h4>{s.title}</h4>
                <p>{s.content}</p>
                <p>{s.price}</p>
              </div>
            )
          })
        }
      </div>
    )
  }