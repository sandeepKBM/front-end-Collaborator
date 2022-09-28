import './App.css';
import {useNavigate} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';
import disscusion_service from './disscusion_service';

function Forum() {
  const navigate=useNavigate();
  const [forum,setForum]=useState([{name:"Name",creation_on:"Creation ON",descriptionription:"descriptionription",created_by:"Created by"},
  {name:"Name",creation_on:"Creation ON",descriptionription:"descriptionription",created_by:"Created by"}]);
  const [userid,setQuotes]=useState("");
    const [discussionName,setDiss_name]=useState("");
    const [discussionId,setdiscussionId]=useState();
    const [description,setdescription]=useState();
    const [name,setName]=useState("");
    const[ansArray , setAnsArray]=useState([]);
      
    function ShowDisscussions(){
    
        axios.get('http://localhost:8080/api/discussions/listAll').then((res)=>{
          console.log("Length of the response : "+res.data.length);
         setDiss_name(res.data[0].discussionName);
          for( var i = 0 ; i < res.data.length;i++){
            console.log("this is the vaue of i : " + i);
            setAnsArray(ansArray => [...ansArray ,`${res.data[i]}`])
            console.log(ansArray);
            //  name = setDiss_name(res.data[i].discussionName);
            
          }
          
        })
       
    }
    function SubmitForum(){
        if(userid==='' && description==='')
        {
            let message="";
            if(userid==='')
            {
                message+="Please enter userid\n";
            }
            if(description==='')
            {
                message+="Please enter description\n";
            }
            alert(message);
        }
        else{
          
            axios.post('http://localhost:8080/api/discussions/insertDiscusssion', null, { params: {
              discussionName,
              description,
              discussionId,
              userid
            }}).then((res)=>{
              alert('sucessfully done');
            })
          
            
        }
    }
  return (
    
    <div className="App">
      {/* <button id="add-icon" onClick={()=>{navigate('/adddiscussion')}}>Create</button> */}
      <br></br>
      <div className="Login">
        <center>
          <h2>Add Discussions</h2>
            <div id="login-basic">
              <label>User ID :  </label><input type="text"
              onChange={(event)=>{setQuotes(event.target.value)}}></input>
              <br></br>
              <label>Disscusion Id:  </label><input type="text"
              onChange={(event)=>{setdiscussionId(event.target.value)}}></input>
              <br></br>
              <label>Name :  </label><input type="text"
              onChange={(event)=>{setDiss_name(event.target.value)}}></input>
              <br></br>
              <br></br>
              <label>descriptionription :  </label><input type="text"
              onChange={(event)=>{setdescription(event.target.value)}}></input>
              <br></br>
              <br></br>
              <button onClick={SubmitForum}>Submit</button>
              <button onClick={ShowDisscussions}>Show Disscussions</button> 
              <div id="border-add">
                {name}
              </div>
            </div>
            <br></br>
        </center>
    </div>
        {
          forum.map((val)=>{
              return<>
              <center>
              <div id="forum-heading">
              <div id="border-add">
                {discussionName}
              </div>
              <div id="border-add">
                {val.discussionName}
              </div>
              <div id="border-add">
                {val.descriptionription}
              </div>
              <div id="border-add">
                {val.created_by}
              </div>
            </div>
            <br></br>
            <button onClick={()=>{navigate('/dispage')}}>Disscussion Page</button>
              </center>
              </>
          })
        }
      <br></br>
      <br></br>
    </div>
  );
}

export default Forum;
