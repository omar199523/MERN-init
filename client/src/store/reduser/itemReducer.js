
import { GET_ITEM ,ADD_ITEM,DELET_ITEM, ITEM_LOADING} from '../action/types';

const  initialState ={
     items:[],
     loading:false
 }

 // eslint-disable-next-line import/no-anonymous-default-export
 export default function(state = initialState,action){
     switch(action.type){
         case GET_ITEM:
            return {
                 ...state,
                 items:action.payload,
                 loading:false
             }
        case ADD_ITEM:
            console.log(state.items)
            return {
                 ...state,
                 items:[...state.items ,action.payload]
                 
             }
        case DELET_ITEM:
            console.log(action.payload)
            return {
                 ...state,
                 items:state.items.filter(item=>item._id !== action.payload)
             }
        case ITEM_LOADING:
            return{
                ...state,
                loading:true
            }
        default:
            return state
        
     }
 }