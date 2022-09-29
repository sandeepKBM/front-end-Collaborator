import './App.css';
import {useNavigate} from 'react-router-dom';
import {useState,useEffect} from 'react';
import Axios from "axios";
function Forum() {
  // const navigate=useNavigate();
  // const [forum,setForum]=useState([{name:"Name",creation_on:"Creation ON",description:"description",created_by:"Created by"},
  // {name:"Name",creation_on:"Creation ON",description:"description",created_by:"Created by"}]);
  // const [quotes,setQuotes]=useState("");
  //   const [desc,setDesc]=useState("");
  //   function SubmitForum(){
  //       if(quotes==='' && desc==='')
  //       {
  //           let message="";
  //           if(quotes==='')
  //           {
  //               message+="Please enter quotes\n";
  //           }
  //           if(desc==='')
  //           {
  //               message+="Please enter desc\n";
  //           }
  //           alert(message);
  //       }
  //       else{
  //           alert('sucessfully done');
  //           setForum([...forum,{name:quotes,creation_on:"Creation ON",description:desc,created_by:"Created by"}])
  //       }
  //   }
  const navigate=useNavigate();
    // let forum = [{name:"Name",creation_on:"Creation ON",description:"description",created_by:"Created by"}]
    const [forum, setState] = useState([])
    useEffect(() => {
        getData()
    },[])
    async function getData(){
        Axios.get('http://localhost:8080/api/discussions/listAll').then((res) => {
        setState(res.data)
        });
    }
  return (
    <div className="App">
      {/* <button id="add-icon" onClick={()=>{navigate('/adddiscussion')}}>Create</button> */}
      <br></br>
      {/* <div className="Login">
        <center>
          <h2>Add Discussions</h2>
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
            <br></br>
        </center>
    </div> */}
        {
          forum.map((val)=>{
              return<>
              <center>
              <div id="forum-heading">
              <div id="border-add">
                {val.name}
              </div>
              <div id="border-add">
                {val.creation_on}
              </div>
              <div id="border-add">
                {val.description}
              </div>
              <div id="border-add">
                {val.created_by}
              </div>
            </div>
            <br></br>
            <button onClick={()=>{
                navigate('/dispage')
                    localStorage.setItem("dissID",val.id);
                    }}>Disscussion Page</button>
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
