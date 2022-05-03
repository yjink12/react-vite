import { createStore } from 'redux'

let basicState = [
    { id : 0, name : 'Nike', quan : 2 },
    { id : 1, name : 'Adidas', quan : 1 }
];

/** Reducer = state 데이터 수정방법 정의 : setter 
 *  - default parameter(ES6) : 함수 paramter 에 '=' 사용 가능
 *  - reducer(state = 초기값, action)
*/
function reducer(state = basicState, action){
    if(action.type === 'increase'){  // '수량증가' 데이터 수정방법 정의
        let copyState = [...state];
        copyState[0].quan++;

        return copyState
    }else {
        
        return state
    } 
}

let store = createStore(reducer);

export default store;