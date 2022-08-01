import './App.css';
import { Navigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
function MoreDis(props) {
    const navigate=useNavigate();
    const {state} = useLocation();
    const [dis,setDiss]=useState("");
    function adddis()
    {
        if(dis==="")
        {
            alert("Please enter")
        }
        else
        {
            navigate("/forum")
        }
    }
    const { image,id,time,quotes,interaction,desgination,name } = state;
  return (
    <div className="App">
      {id}
      <br></br>
      <br></br>
      {quotes}
      <br></br>
      <br></br>
      <label>Discussion :  </label><input type="text"
        onChange={(event)=>{setDiss(event.target.value)}}></input>
      <br></br>
      <br></br>
      <button onClick={adddis}>Add</button>
      <br></br>
    </div>
  );
}

export default MoreDis;