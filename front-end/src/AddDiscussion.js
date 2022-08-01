import './App.css';
import { useState } from 'react';
import {NavLink,useNavigate} from 'react-router-dom';
function Add() {
    const navigate=useNavigate();
    const [quotes,setQuotes]=useState("");
    const [desc,setDesc]=useState("");
    function SubmitForum(){
        if(quotes==='' && desc==='')
        {
            let message="";
            if(quotes==='')
            {
                message+="Please enter quotes\n";
            }
            if(desc==='')
            {
                message+="Please enter desc\n";
            }
            alert(message);
        }
        else{
            alert('sucessfully done');
            navigate('/forum');
        }
    }
  return (
    <div className="Login">
        <center>
            <div id="login-basic">
              <label>Quotes :  </label><input type="text"
              onChange={(event)=>{setQuotes(event.target.value)}}></input>
              <br></br>
              <br></br>
              <label>Desc :  </label><input type="text"
              onChange={(event)=>{setDesc(event.target.value)}}></input>
              <br></br>
              <br></br>
              <button onClick={SubmitForum}>Submit</button>
            </div>
            <NavLink to="/forum">NForum Page</NavLink>
            <br></br>
            <NavLink to="/">Home Page</NavLink>
        </center>
    </div>
  );
}

export default Add;