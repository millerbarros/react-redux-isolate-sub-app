// import { createStore } from "redux"

function counter(state = 0, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
}

// const store = createStore(counter);

// store.subscribe(() => console.log('SubApp', store.getState()))

export default counter;