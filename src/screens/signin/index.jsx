import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { httpGoConsole } from './netrowk';

import "./signin.css";
const SignIn = () => {


  
  const navigate = useNavigate();
  const cred= {
    "email" : "devikasundaran@letterstoabroad.com",
    "password" : "DevikaS@1001"
  }
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const handleClickSubmit = ({target})=>{
    if(email===cred.email&&password===cred.password){
      navigate('/dashboard');
    }
  }
  const handleEmailChange = ({target})=>{
    const {value} = target;
    setEmail(value);
  }
  const handlePasswordChange = ({target})=>{
    const {value} = target;
    setPassword(value);
  }
  return (
    <div className="login_main_wrapper">
      <div className="login_container">
        <div className="title">Login</div>
        <div className="input_container">
          <div>Email</div>
          <input type="text" placeholder="Email" onChange={handleEmailChange}/>
        </div>
        <div className="input_container">
          <div>Password</div>
          <input  type="password" placeholder="Password" onChange={handlePasswordChange}/>
        </div>
        <div className="forgot_password_container">
        <a href="/forgot">Forgot password?</a>
        </div>
        <div className="button_container">
          <button onClick={handleClickSubmit}>Login</button>
        </div>
        <div className="existing_user_container">
          I’m a new user. <a href="/signup">Create Account</a>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default SignIn;
