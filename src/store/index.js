import { createStore } from 'redux'


let store = createStore(() => {
    return [{ id : 0, name : '멋진신발', quan : 2 }]
});

export default store;