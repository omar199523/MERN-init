import {USER_LOADING ,USER_LOADED,GET_USERS ,AUTH_ERROR , LOGIN_SUCCESS ,LOGIN_FAIL,LOGOUT_SUCCESS ,REGISTER_SUCCESS,REGISTER_FAIL} from '../action/types'

const initialState ={
    token:localStorage.getItem('token'),
    isAuthenticed:null,
    isLoading:false,
    user:null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state =initialState,action){
    switch(action.type){
        case USER_LOADING:
            return {
                ...state,
                isLoading:true

            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticed:true,
                isLoading:false,
                user:action.payload

            }
        case GET_USERS:
            return {
                 ...state,
                 persons:action.payload,
                 loading:false
             }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem("token",action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticed:true,
                isLoading:false,
            }
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                token:null,
                user:null,
                isAuthenticed:false,
                isLoading:false,
            }    
        
        
        default:
            return{
                ...state
            }
    }
}