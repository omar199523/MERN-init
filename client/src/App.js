import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
// import {Routes,Route} from 'react-router-dom';
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router';

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
import SherPersonData from './pages/SherPersonData';

export const App = ({history}) => {
    const {auth} =useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        // dispatch(loadUser());
        // if(!!auth.isAuthenticed){navigate('/MainForm')}
    }, [])
    return (
        <div className = "App">
            <Header/>
            <Switch>
                <Route path="(/)?" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/mainForm" exact component={MainForm} />
                <Route path="/sherPersonData" exact component={SherPersonData} />
                {/* <Route path = "*" component ={<h1>404 this page is no defind</h1>}/> */}
            </Switch>
        </div>
        
    )
}

export default App;
