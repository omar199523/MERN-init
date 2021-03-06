
import { GET_PERSON ,ADD_PERSON,DELET_PERSON, PERSON_LOADING,PRESENT_PERSON,EDIT_PERSON,OPEN_PEROSN_NUM} from '../action/types';

const  initialState ={
     persons:[],
     loading:false,
     editStatus:false,
     presentPerson:{},
     openPersonNum:""
 }

 // eslint-disable-next-line import/no-anonymous-default-export
 export default function(state = initialState,action){
     switch(action.type){
         case GET_PERSON:
            return {
                 ...state,
                 persons:action.payload,
                 loading:false
             }
        case ADD_PERSON:
            return {
                 ...state,
                 persons:[...state.persons ,action.payload]
                 
             }
        case DELET_PERSON:
            return {
                 ...state,
                 persons:state.persons.filter(person=>person._id !== action.payload)
             }
        case PRESENT_PERSON:
            return {
                 ...state,
                 presentPerson:action.payload
             }
        case EDIT_PERSON:
            
            return {
                ...state,
                editStatus:action.payload.editStatus,
                presentPerson:action.payload.person
            }
        case OPEN_PEROSN_NUM:
            return {
                ...state,
                openPersonNum:action.payload
            }
        case PERSON_LOADING:
            return{
                ...state,
                loading:true
            }
        default:
            return state
        
     }
 }