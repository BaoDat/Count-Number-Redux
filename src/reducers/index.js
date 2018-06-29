import { combineReducers } from "redux";
import counterReducer  from './counterReducer'
import displayMess from './showMessReducer'

export default combineReducers ({
    counter: counterReducer,
    mess: displayMess
    // counterReducer
})
