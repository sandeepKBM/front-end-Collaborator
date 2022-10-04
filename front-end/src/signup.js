import './App.css';
import { useState } from 'react';
import {NavLink} from 'react-router-dom';
import SignUpFacutly from './signup1';
import SignUpResearch from './signup2';
import SignUpStudent from './signup3';
function SignUp() {
    const [typeSignUp,setTypeSignUp]=useState("");
    function Facsignup()
    {
        setTypeSignUp(<SignUpFacutly />);
    }
    function Ressignup(){
        setTypeSignUp(<SignUpResearch />);
    }
    function Stusignup(){
        setTypeSignUp(<SignUpStudent />)
    }
  return (
    <div>
        <center>
        <div id="head-login">
              <div id="title-login">
                  SignUp
              </div>
          </div>
            <div id="signup-basic">
                <label id="label-login">Typer of user : </label>
                <br></br>
                <br></br>
                <input type="radio" name="user" value="Student"
                onClick={Stusignup}></input><label id="label-login">Student</label>
                <br></br>
                <input type="radio" name="user" value="Faculty"
                onClick={Facsignup}></input><label id="label-login">Faculty</label>
                <br></br>
                <input type="radio" name="user" value="Research"
                onClick={Ressignup}></input><label id="label-login">Research</label>
                <br></br>
                <br></br>
                <hr></hr>
                {typeSignUp}
            </div>
            <div id="new-login">
                <NavLink style={{textDecoration: 'none',color: 'black'}} to="/login">Already registered please click for login</NavLink>
                <br></br>
                <NavLink style={{textDecoration: 'none',color: 'black'}} to="/">Home Page</NavLink>
            </div>
        </center>
    </div>
  );
}

export default SignUp;