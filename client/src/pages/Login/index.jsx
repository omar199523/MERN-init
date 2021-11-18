import React ,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {login} from '../../store/action/authAction';
import {H2} from "../../componants/Typograph"
import "./style.css"



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
        setLoginData({...loginData,msg:error.msg.msg})
    },[])
    const handleOnChange = (event) => {
        console.log(event)
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
    return (
        <form onSubmit ={handleOnSubmit } className="login-form">
            <H2>Log In</H2>
            <output className={(!auth.isAuthenticed)?"error":"sucssce"}>{loginData.msg}</output>
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