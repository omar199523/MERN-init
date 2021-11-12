import { GET_ITEM ,ADD_ITEM,DELET_ITEM ,ITEM_LOADING} from "./types";
import axios from 'axios'

export const getItem =()=>dispatch=>{
    dispatch(itemIsLoading());
    axios.get('/api/items').then(res=>{
        dispatch({
            type:GET_ITEM,
            payload:res.data,
        })
    })
}
export const addItem =(item)=>dispatch=>{
    axios.post('/api/items/add',item)
    .then(res=>{
        dispatch({
            type:ADD_ITEM,
            payload:res.data
        })
    })
    dispatch(getItem())
}
export const deletItem =(id)=>dispatch=>{
    axios.delete(`/api/items/delete/${id}`)
    .then(res=>{
        dispatch({
            type:DELET_ITEM,
            payload:id
        })
    })
}

export const itemIsLoading=()=>{
    return{
        type:ITEM_LOADING
    }
}