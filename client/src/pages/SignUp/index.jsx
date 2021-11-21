import React ,{useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import './style.css';

import {clearErrors} from '../../store/action/errorAction'
import {register} from '../../store/action/authAction';

import {H2} from "../../componants/Typograph"


const SignUp = ()=> {
    const {error }= useSelector(state => state)
    const { auth }= useSelector(state => state)
     const dispatch = useDispatch();
    const [signupData , setSignUpData] = useState({
        modal:false,
        completName:"",
        email:"",
        password:"",
        confirmPassword:"",
        msg:null


    })
    useEffect(() => {
        if(error.id ==="REGISTER_FAIL"){
            setSignUpData({...signupData,msg:error.msg.msg})
            dispatch(clearErrors())
        }
        
    }, [dispatch, error.id, error.msg.msg, signupData])
    const handleOnChange = (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        setSignUpData({ ...signupData, [name]: value });
      };
      const handleOnSubmit=(e)=>{
        e.preventDefault();
        const {completName,password,confirmPassword,email} =signupData
        if(password ===confirmPassword){
            dispatch(register({name:completName,email,password}))
        }else if(password !==confirmPassword){
            setSignUpData({...signupData,msg:"Password and comfirm password must be equal"})
        }
        
      }
    return (
        <form onSubmit ={handleOnSubmit } className="signup-form">
            <H2>Sign Up</H2>
            <output className={(!auth.isAuthenticed)?"error":"sucssce"}>{signupData.msg}</output>
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