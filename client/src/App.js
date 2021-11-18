import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Routes , BrowserRouter as Router,Route} from 'react-router-dom'

// import react componant
import Header from './componants/Header'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import MainForm from './pages/MianForm'
// import state.
import {loadUser} from './store/action/authAction';
// import style
import './App.css';

export const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUser())
    }, [])
    return (
        
             <Router>
                 <div className="App">
                    <Header/>
                    <Routes>
                        <Route path="/" exact element={<Home/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/signup" element={<SignUp/>} />
                        <Route path="/MainForm" element={<MainForm/>} />
                        
                    </Routes>
                </div>
            </Router>
        
    )
}
export default App;
