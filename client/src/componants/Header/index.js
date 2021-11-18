import React,{useState} from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom'

import store from '../../store'


import './style.css';


const Header = ({setDarckMode ,DarckMode}) => {
    const {isAuthenticed} = useSelector(state => state.auth)
    return (
        <header className="main-header">
            <a href="/" className="main-logo">
                <h1>LINF</h1>
            </a>
            <div className= "main-nav-bar">
                <ul>
                    {(!isAuthenticed)?(
                        <>
                            <a href="/login"><li className="button sing-in">Sing In</li></a>
                            <a href="/signup"><li className="button sing-up">Sing Up</li></a>
                        </>
                     ):(<li className="button sing-up">LogOut</li>)}
                </ul>
            </div>
        </header>
    )
};
export default Header;
