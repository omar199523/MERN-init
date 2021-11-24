import React ,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {login} from '../../store/action/authAction';
import {H2} from "../../componants/Typograph"
import "./style.css"
import {clearErrors} from '../../store/action/errorAction'




const Login = ()=> {
    const {error }= useSelector(state => state)
    const {auth} =useSelector(state =>state)
     const dispatch = useDispatch();
    const [loginData , setLoginData] = useState({
        email:"",
        password:"",
        msg:null

    })
    useEffect(()=>{
        if(error.id ==="LOGIN_FAIL"){
            setLoginData({...loginData,msg:error.msg.msg})
            dispatch(clearErrors())
        }
    },[dispatch, error.id, error.msg.msg, loginData])
    const handleOnChange = (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        setLoginData({ ...loginData, [name]: value });
      };
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        const {email,password}=  loginData;
        dispatch(login({email,password}))  
    }
    const handleError = ()=>{
        if(error.status){
            return (<output className="error">{loginData.msg}</output>)
        }else if (auth.isAuthenticed){
            return (<output className="sucssce">"Sign Up is Success"</output>)
        }
    }
    return (
        <form onSubmit ={handleOnSubmit } className="login-form">
            <H2>Log In</H2>
            {handleError()}
            <output className={(!auth.isAuthenticed)?"error":"sucssce"}>{(!auth.isAuthenticed)?(loginData.msg):("Login is success")}</output>
            <label htmlFor ="email">
                Email
                <input id="email" type="email" name ="email" value ={loginData.email} onChange= {handleOnChange}/>
            </label>
            <label htmlFor ="password">
                Password
                <input id="password" type="password" name ="password" value ={loginData.password} onChange= {handleOnChange}/>
            </label>
            <button type="submit">Log In</button>
            
        </form>
    )
}



export default Login
