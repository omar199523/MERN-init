import {GET_USERS } from '../action/types'

const initialState ={
    Users:[]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state =initialState,action){
    switch(action.type){
        
        case GET_USERS:
            return {
                 ...state,
                 persons:action.payload,
                 loading:false
             }
        
        default:
            return{
                ...state
            }
    }
}