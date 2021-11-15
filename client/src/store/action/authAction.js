import axios from 'axios';
import {returnErrors} from './errorAction'
import {USER_LOADING ,USER_LOADED,AUTH_ERROR } from './types'



// check token & load user
export const loadUser = ()=> (dispatch,getState)=>{
    // user loading
    dispatch({type:USER_LOADING});
    // get token from localstorge

    const token =localStorage.getItem('token');

    // headers

    const config ={
        headers:{
            "content-type":"application/json"
        }
    }
    // if token .add to headers

    if(token) {
        config.headers['x-auth-token']=token
    }

    axios.get("/api/auth/user",config)
    .then(res =>dispatch({
        type:USER_LOADED,
        payload:res.data
    }))
    .catch ((err)=>{
        dispatch(returnErrors( err.response.data , err.response.status))
        dispatch({
            type:AUTH_ERROR,
        })
    })

}
