import './App.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios'
function DisPage() {
    const navigate=useNavigate();
  const [quotes,setQuotes]=useState("");
  const [textarr,setTextArr]=useState([])
  function showAll(){
      // navigate('/forum');
      axios.get('http://localhost:8080/api/discussions/alltext').then((response)=>{
        console.log(response);

        
          setTextArr(response.data);
        
        
      })
  }
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
      setTextArr([...textarr,{text:quotes,id: 200, time: new Date().toLocaleString() }]);
      console.log(textarr);
        alert('sucessfully done');
        // navigate('/forum');
        axios.get('http://localhost:8080/api/discussions/alltext').then((response)=>{
          console.log(response);

          
            setTextArr(response.data);
          
          
        })
    }
  }
  return (
    <>
    <div className="App">
    
      <center>
      {
          textarr.map((val)=>{
              return<>
              <center>
              <div id="border-add">
                {val.text}
              </div>
              <div id="border-add">
                {val.id}
              </div>
              <div id="border-add">
                {val.time}
              </div>
            <br></br>
            <br></br>
              </center>
              
              </>
          })
        }
            <div id="login-basic">
              <label>Text :  </label><input type="text"
              onChange={(event)=>{setQuotes(event.target.value)}}></input>
              <br></br>
              <br></br>
              <button onClick={SubmitForum}>Submit</button>
              <br></br>
              <button onClick={showAll}>Show All Discussions</button>
            </div>
            <br></br>
        </center>
    </div>
    </>
  );
}


export default DisPage;
