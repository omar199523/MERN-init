import React from 'react';
import {H2,H5} from "../../componants/Typograph"
import {push} from 'connected-react-router'
import { useDispatch } from 'react-redux';
import "./style.css"

const Home = () => {
    const dispatch = useDispatch();
    return (
        <div className="home-page container">
            <div className ="text-cont">
                <H2>Welcame IN THE HIGH COURT OF JUDICATURE AT BOMBAY</H2>
                <H5>You can issue any document through our website</H5>
            <div className="but-cont-home">
                <a href="/signup" className="button sign-up">Sign Up</a>
                    <button onClick = {()=>{dispatch(push('/login'))}}>About Us</button>
                </div>
            </div>
            <div className="img-cont">

            </div>
            
        </div>
    )
}

export default Home;
