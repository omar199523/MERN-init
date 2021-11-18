import {combineReducers }from 'redux';
import personReducer from './personReducer'
import errorReducer from './errorReducer'
import authReducer from './authReducer'

export default combineReducers({
    persons:personReducer,
    error:errorReducer,
    auth:authReducer,
})
