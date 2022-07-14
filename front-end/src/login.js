import './App.css';
import { useState } from 'react';
import {NavLink,useNavigate} from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");
  const [user,setUser]=useState("");
  function SubmitLogin(){
    if(user===""||user==="Select"||userName===""||password==="")
    {
      let message="";
      if(user===""||user==="Select")
      {
        message+="Please enter User Type\n";
      }
      if(userName==="")
      {
        message+="Please enter UserName\n";
      }
      if(password==="")
      {
        message+="Please enter Password\n";
      }
      alert(message);
    }
    else
    {
      alert(userName+" "+password+" "+user);
      navigate("/");
    }
  }
  return (
    <div className="Login">
        <center>
            <div id="login-basic">
              <label>UserName :  </label><input type="text"
              onChange={(event)=>{setUserName(event.target.value)}}></input>
              <br></br>
              <br></br>
              <label>Password :  </label><input type="password"
              onChange={(event)=>{setPassword(event.target.value)}}></input>
              <br></br>
              <br></br>
              <label>Type of user : </label>
              <select name="dropdown" onClick={(event)=>{setUser(event.target.value)}}>
                <option value="Select">Select</option>
                <option value="Student">Student</option>
                <option value="PhD">PhD</option>
                <option value="Faculty">Facutly</option>
                <option value="Expert">Expert</option>
              </select>
              <br></br>
              <br></br>
              <button onClick={SubmitLogin}>Submit</button>
            </div>
            <NavLink to="/signup">New to website, please Register</NavLink>
            <br></br>
            <NavLink to="/">Home Page</NavLink>
        </center>
    </div>
  );
}

export default Login;