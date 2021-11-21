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
        
        <ConnectedRouter history={history} >
            <div className = "App">
                <Header/>
                <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/mainForm" component={MainForm} />
                        <Route path="/sherPersonData" component={SherPersonData} />
                        {(!auth.isAuthenticed)?(
                        <>
                            
                        </>
                    ):null}
                </Switch>
            </div>
        </ConnectedRouter>
                )
}

export default App;
