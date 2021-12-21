import { GET_PERSON ,ADD_PERSON,DELET_PERSON ,PERSON_LOADING,PRESENT_PERSON,EDIT_PERSON,OPEN_PEROSN_NUM} from "./types";
import {tokenConfig} from './authAction';
import { returnErrors } from "./errorAction";
import axios from 'axios'

export const getPersons =(userName,userId)=>(dispatch,getState)=>{
    dispatch(personIsLoading());
    if(userName==="Admin"){
        axios.get('/api/persons/',tokenConfig(getState)).then(res=>{
            dispatch({
                type:GET_PERSON,
                payload:res.data,
            })
        }).catch(err=>{
             dispatch(returnErrors( err.response.data.msg , err.response.status));
        })
    }else{
        axios.get(`/api/persons/myData/${userId}`,tokenConfig(getState)).then(res=>{
            dispatch({
                type:GET_PERSON,
                payload:res.data,
            })
        }).catch(err=>{
             dispatch(returnErrors( err.response.data.msg , err.response.status));
        })
    }
}
export const addPerson =(person)=>(dispatch,getState)=>{
    dispatch(personIsLoading());
    console.log(person)
    // Request body
    const body = JSON.stringify({...person})
    axios.post('/api/persons/add/',body,tokenConfig(getState))
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
export const presentPerson=(person)=>{
    return{
        type:PRESENT_PERSON,
        payload:person
    }
}
export const openPersonNum=(Num)=>{
    return{
        type:OPEN_PEROSN_NUM,
        payload:Num
    }
}
export const openEditPerson=(person)=>{

    return{
        type:EDIT_PERSON,
        payload:{editStatus:true,person}
    }
}
export const editPerson =(parson)=> (dispatch,getState)=>{
    
    // Request body
    const body = JSON.stringify({...parson})
    axios.post('/api/persons/edit',body,tokenConfig(getState))
        .then(res =>dispatch(
            {
            type:ADD_PERSON,
            payload:res.data
        }
        )).catch(err=>{
            dispatch(returnErrors( err.response.data.msg , err.response.status));
        })
}

export const personIsLoading=()=>{
    return{
        type:PERSON_LOADING
    }
}