import React ,{useEffect} from 'react'
import {useDispatch} from 'react-redux';
import {getPersons} from '../../store/action/parsonData'
const SherPersonData = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getPersons)
    },[])
    return (
        <div>
            
        </div>
    )
}

export default SherPersonData
