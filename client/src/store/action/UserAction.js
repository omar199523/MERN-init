import axios from 'axios';
import {tokenConfig} from './authAction';
import { returnErrors } from "./errorAction";
import {USER_LOADING ,GET_USERS,EDIT_USER } from './types'
import {push} from 'connected-react-router'

export const getUsers =()=>(dispatch,getState)=>{
        dispatch(UserIsLoading());
        axios.get('/api/user/getUsers',tokenConfig(getState)).then(res=>{
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