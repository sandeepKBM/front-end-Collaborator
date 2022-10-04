import './App.css';
import { useState } from 'react';
import {NavLink,useNavigate} from 'react-router-dom';
import Axios from "axios";
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
      const loginData = {
        username: userName,
        password: password
    }
      // alert(userName+" "+password+" "+user);
      Axios.post('http://localhost:8080/login', loginData).then((response) => {
        localStorage.setItem("id", userName);
        localStorage.setItem("pass",password);
        alert('Sucessful! Welcome'+response.headers.toString());
        navigate("/");
      });
    }
  }
  return (
    <div className="Login">
        <center>
          <div id="head-login">
              <div id="title-login">
                  LOGIN
              </div>
          </div>
            <div id="login-basic">
              <label id="label-login">UserName :  </label><input type="text"
              onChange={(event)=>{setUserName(event.target.value)}} id="input-login"
              placeholder='Enter Username'></input>
              <br></br>
              <br></br>
              <label id="label-login">Password :  </label><input type="password"
              onChange={(event)=>{setPassword(event.target.value)}} id="input-login"
              placeholder='Enter Password'></input>
              <br></br>
              <br></br>
              <label id="label-login">Type of user : </label>
              <select style={{width: "50%"}} name="dropdown" onClick={(event)=>{setUser(event.target.value)}}  id="input-login">
                <option value="Select">Select</option>
                <option value="Student">Student</option>
                <option value="PhD">PhD</option>
                <option value="Faculty">Facutly</option>
                <option value="Expert">Expert</option>
              </select>
              <br></br>
              <br></br>
              <button id="button-login" onClick={SubmitLogin}>Submit</button>
            </div>
            <div id="new-login">
              <NavLink style={{textDecoration: 'none',color: 'black'}} to="/signup">New to website, please Register</NavLink>
              <br></br>
              <NavLink style={{textDecoration: 'none',color: 'black'}} to="/">Home Page</NavLink>
            </div>
        </center>
    </div>
  );
}

export default Login;