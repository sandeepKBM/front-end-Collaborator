import './App.css';
import  {useState ,useEffect} from "react";
// import {useNavigate} from 'react-router-dom';
import Axios from "axios";
let vals = ""
function DisPage() {
    // const navigate=useNavigate();
    const [quotes,setQuotes]=useState("");
    const [textarr,setTextArr]=useState([])
    useEffect(() => {
        getData()
    },[])
    async function getData() {
        let val = localStorage.getItem("dissID")
        console.log(val)
        Axios.get('http://localhost:8080/api/discussions/alldisstext',{
            params: {
            disscussionID: val
        }}).then((res) => {
            console.log(res.data)
            setTextArr(res.data)
        });
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
      let value1 = localStorage.getItem("id");
      let value2 = localStorage.getItem("dissID");
      // const data = {
      //     Text: vals,
      //     dissID: value2,
      //     userID: value1
      // }
      console.log(typeof vals)
        Axios.post('http://localhost:8080/api/discussions/insertchat?text='+vals+'&dissID='+value2+'&userID='+value1).then((res) => {

        });

      console.log(textarr);
        alert('sucessfully done');
        // navigate('/forum');
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
                {val.userID}
              </div>
              <div id="border-add">
                {val.timeStamp}
              </div>
            <br></br>
            <br></br>
              </center>
              
              </>
          })
        }
            <div id="login-basic">
              <label>Text :  </label><input type="text"
              onChange={(event)=>{
                  vals = event.target.value
                  setQuotes(event.target.value)}}></input>
              <br></br>
              <br></br>
              <button onClick={()=> {
                  SubmitForum()
              } }>Submit</button>
            </div>
            <br></br>
        </center>
    </div>
    </>
  );
}


export default DisPage;