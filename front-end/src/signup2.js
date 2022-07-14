import './App.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import validator from 'validator';
function SignUpResearch() {
    const navigate=useNavigate();
    const [ID,setID]=useState("");
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [rePassword,setRePssword]=useState("");
    const [email,setEmail]=useState("");
    const [dept,setDept]=useState("");
    const [desgination,setDesgination]=useState("");
    function submitResearch(){
        if(validator.isEmail(email)===false||ID===""||name===""||password!==rePassword||
        password===""||rePassword===""||dept===""||dept==="Dept"||desgination===""||desgination==="Desgination")
        {
            let message="";
            if(validator.isEmail(email)===false)
            {
                message+="Please enter email correctly\n";
            }
            if(ID==="")
            {
                message+="ID cannot be empty\n";
            }
            if(name==="")
            {
                message+="Name cannot be empty\n";
            }
            if(password===""||rePassword==="")
            {
                message+="Password cannot be empty\n";
            }
            else
            {
                if(password!==rePassword)
                {
                    message+="Password and ReType password should be same\n";
                }
            }
            if(dept===""||dept==="Dept")
            {
                message+="Please select Department\n";
            }
            if(desgination===""||desgination==="Desgination")
            {
                message+="Please select desgination\n";
            }
            alert(message);
        }
        else
        {
            alert('Sucessfully Registred, soon you will receive confirmation from Supervisior');
            navigate("/");
        }
    }
  return (
    <div>
        <h2>Research Registration</h2>
        <label>Research ID : </label>
        <input type="text"
        onChange={(event)=>{setID(event.target.value)}}></input>
        <br></br>
        <br></br>
        <label>Name : </label>
        <input type="text"
        onChange={(event)=>{setName(event.target.value)}}></input>
        <br></br>
        <br></br>
        <label>Password : </label>
        <input type="password"
        onChange={(event)=>{setPassword(event.target.value)}}></input>
        <br></br>
        <br></br>
        <label>Retype Password</label>
        <input type="password"
        onChange={(event)=>{setRePssword(event.target.value)}}></input>
        <br></br>
        <br></br>
        <label>Email</label>
        <input type="email"
        onChange={(event)=>{setEmail(event.target.value)}}></input>
        <br></br>
        <br></br>
        <label>Department</label>
        <select type="dropdown" onClick={(event)=>{setDept(event.target.value)}}>
            <option value="Dept">Dept</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
        </select>
        <br></br>
        <br></br>
        <label>Designation</label>
        <select type="dropdown" onClick={(event)=>{setDesgination(event.target.value)}}>
            <option value="Designation">Designation</option>
            <option value="Professor">Professor</option>
            <option value="Faculty">Faculty</option>
        </select>
        <br></br>
        <br></br>
        <button onClick={submitResearch}>Submit</button>
    </div>
  );
}

export default SignUpResearch;