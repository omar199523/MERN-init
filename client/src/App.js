import React,{useEffect} from 'react';
import './App.css';
import {useDispatch} from 'react-redux';
import Login from './componants/Login'
import SignUp from './componants/SignUp'
import {loadUser} from './store/action/authAction'
export const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUser())
    }, [])
    return (
        <div>
            <Login/>
            <SignUp/>

        </div>
    )
}
export default App;
