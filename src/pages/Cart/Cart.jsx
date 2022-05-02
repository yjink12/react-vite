import React from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux';

function Cart(props) {
    return(
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>{ props.state[0].name }</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
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