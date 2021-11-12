import React ,{useEffect}from 'react'
import {useSelector ,useDispatch} from 'react-redux';
import {getItem,deletItem} from '../store/action/index';


const SerItem = () => {
    const {items }= useSelector(state => state.items)
    const dispatch = useDispatch()
   useEffect(() => {
       dispatch(getItem())

   },[])
    return (
        <div>
            {items.map((item)=>{
                return(
                    <div key={item._id}>
                        <h3>{item.name}</h3>
                        <h3>{item.date}</h3>
                        <button onClick ={()=>{dispatch(deletItem(item._id))}}> delat</button>
                    </div>
                )
            })}
        </div>
    )
}
// SerItem.propTypes ={
//     getItem :propTypes.func.isRequired,
//     item:propTypes.object.isRequired

// }
// const mapStoteProps =(state)=>({
//     item:state.item
// })

// export default connect(mapStoteProps,{getItem})(SerItem)
export default SerItem;