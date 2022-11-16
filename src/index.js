import React, { startTransition } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';

// // STORE -> globalized state

// // ACTION INCREMENT
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }

// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }

// // REDUCERS
// const counter = (state = 0, action) => {
//   switch(action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//   }
// };

// let store = createStore(counter);

// // store.subscribe(() =>console.log(store.getState()));

// // DISPATCH
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());




// REDUX
const initialState = {
  name: "Leonardo Maldonado"
}

// Action
const changeAge = payload => ({
  type: 'CHANGE_AGE',
  payload: 30
});

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_AGE':
      return {
        ...state, age: action.payload
      }
    default:
      return state;
  }
}

let store = createStore(reducer);


store.subscribe(() =>console.log(store.getState()));

// DISPATCH
store.dispatch(changeAge());
// store.dispatch(decrement());
// store.dispatch(decrement());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
