import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
// import {Routes,Route} from 'react-router-dom';
import { Route, Switch } from 'react-router'
import { useSelector } from 'react-redux'

// import react componant
import Header from './componants/Header'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import MainForm from './pages/MianForm';
import ProtectRoute from './componants/ProtectRout';
import PdfView from './pages/PdfView';
import AdminPage from './pages/AdminPage';
import ShowPerson from './componants/ShowPerson';
import OpenDatapage from './pages/OpenDataPage'
// import state.
import {loadUser} from './store/action/authAction';
// import style
import './App.css';


export const App = ({history}) => {
    const dispatch = useDispatch()
    const { auth }= useSelector(state => state)
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
                <ProtectRoute path="/showPerson" authenticed={auth.isAuthenticed && auth.user.email !=="admin@info.in"} exact component={ShowPerson} />
                <ProtectRoute path="/mainForm" authenticed={auth.isAuthenticed} exact component={MainForm} />
                <ProtectRoute path="/AdminPage" authenticed={auth.isAuthenticed && auth.user.email ==="admin@info.in"} exact component={AdminPage} />
                <ProtectRoute path="/pdfviewer" authenticed={auth.isAuthenticed} exact component ={PdfView} />
                <ProtectRoute path="/openDataPage" authenticed={auth.isAuthenticed} exact component ={OpenDatapage} />
                {/* <Route path = "*" component ={<h1>404 this page is no defind</h1>}/> */}
            </Switch>
        </div>
        
    )
}

export default App;
