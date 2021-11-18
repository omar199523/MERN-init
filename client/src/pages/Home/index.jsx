import React from 'react';
import {H2,P1} from "../../componants/Typograph"

import "./style.css"

const Home = () => {
    return (
        <seciton className="home-page container">
            <div className ="text-cont">
                <H2>Welcame IN THE HIGH COURT OF JUDICATURE AT BOMBAY</H2>
                <P1>يمكنك أصدار أي وثيقة من خلال موقعنا هذا</P1>
                <div className="but-cont">
                <a href="/signup" className="button sing-up">Sign Up</a>
                    <button>About Us</button>
                </div>
            </div>
            <div className="img-cont">

            </div>
            
        </seciton>
    )
}

export default Home;
