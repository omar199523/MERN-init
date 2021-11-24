import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
// import {Routes,Route} from 'react-router-dom';
import { Route, Switch } from 'react-router'

// import react componant
import Header from './componants/Header'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import MainForm from './pages/MianForm';
import SherPersonData from './pages/SherPersonData';
import ProtectRoute from './componants/ProtectRout';
import PdfView from './pages/PdfView';
// import state.
import {loadUser} from './store/action/authAction';
// import style
import './App.css';


export const App = ({history}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch ])
    return (
        <div className = "App">
            <Header/>
            <Switch>
                <Route path="(/)?" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={SignUp} />
                <ProtectRoute path="/mainForm" exact component={MainForm} />
                <ProtectRoute path="/sherPersonData" exact component={SherPersonData} />
                <Route path="/pdfviewer" exact component ={PdfView} />
                {/* <Route path = "*" component ={<h1>404 this page is no defind</h1>}/> */}
            </Switch>
        </div>
        
    )
}

export default App;
