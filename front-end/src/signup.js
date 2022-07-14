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
            <div id="signup-basic">
                <label>Typer of user : </label>
                <br></br>
                <br></br>
                <label>Student</label><input type="radio" name="user" value="Student"
                onClick={Stusignup}></input>
                <br></br>
                <label>Faculty</label><input type="radio" name="user" value="Faculty"
                onClick={Facsignup}></input>
                <br></br>
                <label>Research</label><input type="radio" name="user" value="Research"
                onClick={Ressignup}></input>
                <br></br>
                <br></br>
                <hr></hr>
                {typeSignUp}
            </div>
            <NavLink to="/login">Already registered please click for login</NavLink>
            <br></br>
            <NavLink to="/">Home Page</NavLink>
        </center>
    </div>
  );
}

export default SignUp;