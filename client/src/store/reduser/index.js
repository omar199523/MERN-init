import {combineReducers }from 'redux';
import { connectRouter } from 'connected-react-router';

import personReducer from './personReducer'
import errorReducer from './errorReducer'
import authReducer from './authReducer'
import userReducer from "./userReduser"

const createRooteReducer = (history)=> combineReducers({
    persons:personReducer,
    error:errorReducer,
    auth:authReducer,
    users:userReducer,
    router:connectRouter(history)
})
export default createRooteReducer;