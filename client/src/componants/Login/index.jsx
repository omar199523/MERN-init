import React ,{useState} from 'react'
import "./style.css"



const Login = ()=> {
    const [loginData , setLoginData] = useState({
        email:"",
        password:""

    })
    const handleOnChange = (event) => {
        console.log(event)
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        setLoginData({ ...loginData, [name]: value });
      };
      const handleOnSubmit=(e)=>{
        e.preventDefault();
            
      }
    return (
        <form onSubmit ={handleOnSubmit } className="login-form">
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
