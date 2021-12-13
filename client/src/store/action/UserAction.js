import axios from 'axios';
import {returnErrors} from './errorAction'
import {USER_LOADING ,GET_USERS, } from './types'
import {push} from 'connected-react-router'

export const getUsers =()=>dispatch=>{
    dispatch(UserIsLoading());
    axios.get('/api/Users/').then(res=>{
        dispatch({
            type:GET_USERS,
            payload:res.data,
        })
    }).catch(err=>{
         dispatch(returnErrors( err.response.data.msg , err.response.status));
    })
}
export const UserIsLoading=()=>{
    return{
        type:USER_LOADING
    }
}