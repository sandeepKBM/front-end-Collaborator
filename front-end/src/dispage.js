import './App.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
function DisPage() {
    const navigate=useNavigate();
  const [quotes,setQuotes]=useState("");
  function SubmitForum(){
    if(quotes==='')
    {
        let message="";
        if(quotes==='')
        {
            message+="Please enter quotes\n";
        }
        alert(message);
    }
    else{
        alert('sucessfully done');
        navigate('/forum');
    }
  }
  return (
    <>
    <div className="App">
      <center>
            <div id="login-basic">
              <label>Text :  </label><input type="text"
              onChange={(event)=>{setQuotes(event.target.value)}}></input>
              <br></br>
              <br></br>
              <button onClick={SubmitForum}>Submit</button>
            </div>
            <br></br>
        </center>
    </div>
    </>
  );
}


export default DisPage;