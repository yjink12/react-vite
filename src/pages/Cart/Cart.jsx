import React from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux';

function Cart(props) {
    return(
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.state.map((s, i)=>{
                            return (
                                <tr key={i}>
                                    <td>{s.name}</td>
                                    <td>{s.id}</td>
                                    <td>{s.quan}</td>
                                    <td><button onClick={()=>{ props.dispatch() }}>+</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}
//redux store 데이터 가져와서 props로 변환해주는 함수
function StateTest(state){
    return {
        state : state,
    }
}

export default connect(StateTest)(Cart);