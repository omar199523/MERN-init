import {GET_USERS ,EDIT_USER} from '../action/types'

const initialState ={
    users:[],
    editStatus:false,
    presentUser:{}
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
        case EDIT_USER:
                return {
                    ...state,
                    editStatus:action.payload.editStatus,
                    presentUser:action.payload.user
                }
        default:
            return{
                ...state
            }
    }
}