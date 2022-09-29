import './App.css';
import { useState } from 'react';
import {NavLink,useNavigate} from 'react-router-dom';
import Axios from "axios";
let val1 = "";
let val2 = "";
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
            let userID = localStorage.getItem("id");
            Axios.post('http://localhost:8080/api/discussions/insertDiscusssion?userid='+userID+'&discussionId='+Math.floor((Math.random() * 10000) + 1)+'&discussionName='+val1+'&description='+val2).then((response) => {
                // localStorage.setItem("id", userName);
                // localStorage.setItem("pass",password);
            });
            navigate('/forum');
        }
    }
  return (
    <div className="Login">
        <center>
            <div id="login-basic">
              <label>Name :  </label><input type="text"
              onChange={(event)=>{
                  val1 = event.target.value;
                  setQuotes(event.target.value)}}></input>
              <br></br>
              <br></br>
              <label>Description :  </label><input type="text"
              onChange={(event)=>{
                  val2 = event.target.value;
                  setDesc(event.target.value)}}></input>
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