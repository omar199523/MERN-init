import React from 'react';
import {H2,H5} from "../../componants/Typograph"
import {push} from 'connected-react-router'
import { useDispatch,useSelector } from 'react-redux';
import "./style.css"

const Home = () => {
    const {auth} =  useSelector(state => state)
    const dispatch = useDispatch();
    return (
        <div className="home-page container">
            <div className ="text-cont">
                <H2>Welcame IN THE HIGH COURT OF JUDICATURE AT BOMBAY</H2>
                <H5>You can issue any document through our website</H5>
            <div className="but-cont-home">
                {(!auth.isAuthenticed)?(<a href="/signup" className="button sign-up">Sign Up</a>):null}
                    <button onClick = {()=>{dispatch(push('/login'))}}>About Us</button>
                </div>
            </div>
            <div className="img-cont">

            </div>
            
        </div>
    )
}

export default Home;
