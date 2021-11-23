import { GET_PERSON ,ADD_PERSON,DELET_PERSON ,PERSON_LOADING} from "./types";
import {tokenConfig} from './authAction';
import { returnErrors } from "./errorAction";
import axios from 'axios'

export const getPersons =()=>dispatch=>{
    dispatch(personIsLoading());
    axios.get('/api/persons').then(res=>{
        dispatch({
            type:GET_PERSON,
            payload:res.data,
        })
    }).catch(err=>{
    dispatch(returnErrors( err.response.data.msg , err.response.status));
    })
}
export const addPerson =(person)=>(dispatch,getState)=>{
    dispatch(personIsLoading());
    
    // Request body
    console.log(getState())
    const body = JSON.stringify({...person})
    axios.post('/api/persons/add',body,tokenConfig(getState))
        .then(res =>dispatch(
            {
            type:ADD_PERSON,
            payload:res.data
        }
        )).catch(err=>{
            dispatch(returnErrors( err.response.data.msg , err.response.status));
        })
}
export const deletPerson =(id)=>(dispatch,getState)=>{
    dispatch(personIsLoading());
    axios.delete(`/api/persons/delete/${id}`,tokenConfig(getState))
    .then(res=>{
        dispatch({
            type:DELET_PERSON,
            payload:id
        })
    }).catch(err=>{
        dispatch(returnErrors( err.response.data.msg , err.response.status));
    })
}

export const personIsLoading=()=>{
    return{
        type:PERSON_LOADING
    }
}