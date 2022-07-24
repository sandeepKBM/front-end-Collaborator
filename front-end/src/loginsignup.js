import './App.css';
import {NavLink} from 'react-router-dom';
function LoginSignup() {
  return (
    <div className="App">
        <center>
            <h1><b><u>Login and Signup</u></b></h1>
            <div id="basic-home">
            <h2><NavLink to="/signup">New to website, please Register</NavLink></h2>
            <br></br>
            <h2><NavLink to="/login">Already registered please click for login</NavLink></h2>
            </div>
        </center>
    </div>
  );
}

export default LoginSignup;