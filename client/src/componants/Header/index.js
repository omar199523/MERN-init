import React from 'react';
import {useSelector,useDispatch} from 'react-redux';

import {logout} from '../../store/action/authAction';



import './style.css';


const Header = ({setDarckMode ,DarckMode}) => {
    const {auth} = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <header className="main-header">
            <a href="/" className="main-logo">
                <h1><span>Fast </span>Lawyer</h1>
            </a>
            <div className= "main-nav-bar">
                <ul>
                    <li className="nav-bar-icon"><a href="/">Home</a></li>
                    <li className="nav-bar-icon"><a href="/">Abuot Us</a></li>
                    <li className="nav-bar-icon"><a href="/">Conect Us</a></li>
                    {(!auth.isAuthenticed)?(
                        <>
                            <li className="button sing-in"><a href="/login">Sing In</a></li>
                            <li className="button sign-up"><a href="/signup">Sing Up</a></li>
                        </>
                     ):(
                        <>
                            {(auth.user.email === "admin@info.in")?(<li className="nac-bar-icon"><a href="/AdminPage">Admin</a></li>):(<li className="nac-bar-icon"><a href="/showPerson">Show My Data</a></li>)}
                            <li className="nac-bar-icon"><a href="/mainForm">Add Person</a></li>
                            <li className="button sign-up"><a  href ="#" onClick={()=> dispatch(logout())}>LogOut</a></li>
                        </>    
                        )}
                </ul>
            </div>
        </header>
    )
};
export default Header;
