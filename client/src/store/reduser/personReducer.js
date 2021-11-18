
import { GET_PERSON ,ADD_PERSON,DELET_PERSON, PERSON_LOADING} from '../action/types';

const  initialState ={
     persons:[],
     loading:false
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
            console.log(state.persons)
            return {
                 ...state,
                 persons:[...state.persons ,action.payload]
                 
             }
        case DELET_PERSON:
            console.log(action.payload)
            return {
                 ...state,
                 persons:state.persons.filter(person=>person._id !== action.payload)
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