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
              <label>Name :  </label><input type="text"
              onChange={(event)=>{setQuotes(event.target.value)}}></input>
              <br></br>
              <br></br>
              <label>Description :  </label><input type="text"
              onChange={(event)=>{setDesc(event.target.value)}}></input>
              <br></br>
              <br></br>
              <button onClick={SubmitForum}>Submit</button>
            </div>
            <NavLink to="/forum">Forum Page</NavLink>
            <br></br>
        </center>
    </div>
  );
}

export default Add;