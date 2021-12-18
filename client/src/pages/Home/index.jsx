import React,{useEffect} from 'react';
import {H2,H5} from "../../componants/Typograph"
import {push} from 'connected-react-router'
import { useDispatch,useSelector } from 'react-redux';
import "./style.css"

const Home = () => {
    const {auth} =  useSelector(state => state)
    const dispatch = useDispatch();
    return (
        <div className="home-page ">
            <div className='bneer'></div>
            <div className ="text-cont container">
                <H2>Welcame <span>Fast</span> Lawyer</H2>
                <H5>A good choice to use Fast Lawyer to release official documents</H5>
                <div className="but-cont-home">
                {/* {(!auth.isAuthenticed)?(<a href="/signup" className="button sign-up">Sign Up</a>):null}
                    <button onClick = {()=>{dispatch(push('/login'))}}>About Us</button> */}
                <button className='see-more-but'>See More</button>
                </div>
            </div>    
        </div>
    )
}

export default Home;
