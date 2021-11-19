import { GET_PERSON ,ADD_PERSON,DELET_PERSON ,PERSON_LOADING} from "./types";
import axios from 'axios'

export const getPersons =()=>dispatch=>{
    dispatch(personIsLoading());
    axios.get('/api/persons').then(res=>{
        dispatch({
            type:GET_PERSON,
            payload:res.data,
        })
    })
}
export const addPerson =(person)=>dispatch=>{
    const config ={
        headers:{
            "content-type":"application/json"
        }
    }
    axios.post('/api/persons/add',person,config)
    .then(res=>{
        dispatch({
            type:ADD_PERSON,
            payload:res.data
        })
    })
    dispatch(getPersons())
}
export const deletPerson =(id)=>dispatch=>{
    axios.delete(`/api/persons/delete/${id}`)
    .then(res=>{
        dispatch({
            type:DELET_PERSON,
            payload:id
        })
    })
}

export const personIsLoading=()=>{
    return{
        type:PERSON_LOADING
    }
}