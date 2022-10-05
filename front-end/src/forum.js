import './App.css';
import {useNavigate} from 'react-router-dom';
import {useState,useEffect} from 'react';
import Axios from "axios";
function Forum() {
  const navigate=useNavigate();
  const [forum, setState] = useState([{name:"Name",creation_on:"Creation ON",description:"description",created_by:"Created by"}])
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
      <br></br>
      <div>
        
      </div>
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