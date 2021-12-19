import {GET_USERS } from '../action/types'

const initialState ={
    users:[]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state =initialState,action){
    switch(action.type){
        
        case GET_USERS:
            return {
                 ...state,
                 users:action.payload,
                 loading:false
             }
        
        default:
            return{
                ...state
            }
    }
}