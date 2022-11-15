// CREATE A REDUX STORE

const reducer = (state = 5) => {
  return state;
}

let store = Redux.createStore(reducer);


// GET STATE FROM THE REDUX STORE

const store = Redux.createStore(
  (state = 5) => state
);

let currentState = store.getState();


// DEFINE A REDUX ACTION
let action = { type: 'LOGIN' }


// DEFINE AN ACTION CREATOR
const action = {
  type: 'LOGIN'
}

const actionCreator = (action) => {
  action.type
}


// DISPATCH AN ACTION EVENT
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

store.dispatch(loginAction());


// HANDLE AN ACTION IN THE STORE
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'LOGIN':
    return { login: true };
    default:
    return state;
  }
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

store.subscribe(() => console.log(store.getState()))


// USE A SWITCH STATEMENT TO HANDLE MULTIPLE ACTION
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'LOGIN':
    return {authenticated: true};
    case 'LOGOUT':
    return {authenticated: false};
    default:
     return state;
  }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};

store.subscribe(() =>console.log(store.getState()));


// REGISTER A STORTE LISTENER

const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

store.subscribe(() => {
  store.getState();
  count++
})

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);


// COMBINE MULTIPLE REDUCERS
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  auth: authReducer,
  count: counterReducer
});

const store = Redux.createStore(rootReducer);


// SEND ACTION DATA TO THE STORE
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    case ADD_NOTE:
    return action.text
    default:
      return state;
  }
};

const addNoteText = (note) => {
  return { type: ADD_NOTE, text: note }
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());



// USE MIDDLEWARE TO HANDLE ASYNCHRONOUS ACTIONS


// {
//   todos: [{
//     text: 'Eat food',
//     completed: true
//   }, {
//     text: 'Exercise',
//     completed: false
//   }],
//   visibilityFilter: 'SHOW_COMPLETED'
// }

// { type: 'ADD_TODO', text: 'Go to swimming pool' }
// { type: 'TOGGLE_TODO', index: 1 }
// { type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }

// function visibilityFilter(state = 'SHOW_ALL', action) {
//   if (action.type === 'SET_VISIBILITY_FILTER') {
//     return action.filter
//   } else {
//     return state
//   }
// }

// function todos(state = [], action) {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return state.concat([{ text: action.text, completed: false }])
//     case 'TOGGLE_TODO':
//       return state.map((todo, index) =>
//         action.index === index
//           ? { text: todo.text, completed: !todo.completed }
//           : todo
//       )
//     default:
//       return state
//   }
// }

// function todoApp(state = {}, action) {
//   return {
//     todos: todos(state.todos, action),
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//   }
// }
