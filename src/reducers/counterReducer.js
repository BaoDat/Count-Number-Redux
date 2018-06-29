
import { INCREASE, DECREASE } from '../actions/types';

const initialState = 0;

export default counterReduc = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;

    case DECREASE:
      return state - 1;

    default:
      return state;
  }
}


// import { combineReducers } from 'redux'


// const counterApp = combineReducers({
//     counterReducer
// })

// export default counterApp