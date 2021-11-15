import React ,{useState} from 'react';
import './style.css'

import axios from 'axios';

const SignUp = ()=> {
    const [signupData , setsignupData] = useState({
        completName:"",
        email:"",
        password:"",
        confirmPassword:""


    })
    const handleOnChange = (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        setsignupData({ ...signupData, [name]: value });
      };
      const handleOnSubmit=(e)=>{
        e.preventDefault();
        console.log(signupData)
        // axios.post("",signupData)
        //     .then((res)=>console.log(res))
        //     .catch((err)=>console.log(err))
      }
    return (
        <form onSubmit ={handleOnSubmit } className="signup-form">
            <label htmlFor ="CompletName">
                Complet Name
                <input id="CompletName" type="text" name ="completName" value ={signupData.completName} onChange= {handleOnChange}/>
            </label>
            <label htmlFor ="email">
                Email
                <input id="email" type="email" name ="email" value ={signupData.email} onChange= {handleOnChange}/>
            </label>
            <label htmlFor ="Password">
                Password
                <input id="Password" type="password" name ="password" value ={signupData.password} onChange= {handleOnChange}/>
            </label>
            <label htmlFor ="Password">
                Confirm Password
                <input id="ConfirmPassword" type="password" name ="confirmPassword" value ={signupData.confirmPassword} onChange= {handleOnChange}/>
            </label>
            <button type="submit">Sign Up</button>
            
        </form>
    )
}



export default SignUp;