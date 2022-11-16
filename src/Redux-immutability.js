import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { createStore } from 'redux';

// // Imuability in JavaScript
// let myAge = "22";
// const myNewAge = myAge;
// myAge = "23";

// console.log(myNewAge === myAge);
// console.log(myNewAge);
// console.log(myAge);

// // --------------------------------
// let myName = "Leonardo Maldonado";
// myName = "Leo";

// console.log(myName);

// export default myName;

// //-----------------------------------
// const myCar = {
//   model: "Tesla",
//   year: 2019,
//   owner: "Leonardo"
// };

// myCar.owner = "Lucas"

// console.log(myCar);

// // Object.assign(target, source);
// const objectOne = {
//   oneName: "OB1"
// };

// const objectTwo = {
//   twoName: "OB2"
// }

// const objectThree = Object.assign(objectOne, objectTwo);
// console.log(objectThree);

// // Pass the values from an Object to a new variable
// // const mName = {
// //   name: "Leonardo"
// // };

// // const myPerson = Object.assign({}, mName);
// // console.log(myPerson);

// const mName = {
//   name: "Leonardo"
// }

// const myPerson = Object.assign({}, mName, {
//   age: 23
// });
// console.log(myPerson);

// // SPREAD OPERATOR
// const nom = {
//   name: "Olivier"
// };

// const persone = {
//   ...nom, age: 23
// }

// console.log(persone);

// REDUX
const initialState = {
  name: "Leonardo Maldonado"
}

// Action
const changeAge = payload => ({
  type: 'CHANGE_AGE',
  payload
});

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_AGE':
      return {
        ...state
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
