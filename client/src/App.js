import React,{useState} from 'react';
import './App.css';
import SerItem from './componants/SerItem';
import {useDispatch} from 'react-redux';
import { addItem } from './store/action';
export const App = () => {
    const dispatch = useDispatch()
    const [data,setData] =useState({
        name:""
    })

    const handleOnChange = (e)=>{
        const {value,name} = e.target;

        setData({...data,[name]:value})
    }
    return (
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault()
                dispatch(addItem(data))}}>
                <input type="text" value={data.name} name="name" onChange={handleOnChange}/>
                <button type="submit">add item</button>
            </form>
            <SerItem/>
        </div>
    )
}
export default App;
