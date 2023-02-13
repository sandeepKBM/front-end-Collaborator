import './App.css';
import  {useState ,useEffect} from "react";
import Axios from "axios";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
let vals = ""
function DisPage() {
    const [quotes,setQuotes]=useState("");
    const [textarr,setTextArr]=useState([]);
    const [open, setOpen] = useState(false);
    const [textBox,setTextBox]=useState("");
    const [id,setID]=useState("");
    const handleClickOpen = (id) => {
      setID(id);
      setOpen(true);
    };

    const handleClose = () => {
      let objtemp=textarr;
      let objIndex = objtemp.findIndex((obj => obj.id == id));
      objtemp[objIndex].adddisc.push(
        {text:textBox,time: new Date().toLocaleString()}
      );
      setTextArr(objtemp);
      // setTextArr([...textarr,{text:quotes,id: Math.trunc(Math.random()*1000000000000000), time: new Date().toLocaleString(),adddisc:[] }]);
      setOpen(false);
    };
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
      setTextArr([...textarr,{text:quotes,id: Math.trunc(Math.random()*1000000000000000), time: new Date().toLocaleString(),adddisc:[] }]);
      let value1 = localStorage.getItem("id");
      let value2 = localStorage.getItem("dissID");
      console.log(typeof vals)
        Axios.post('http://localhost:8080/api/discussions/insertchat?text='+vals+'&dissID='+value2+'&userID='+value1).then((res) => {

        });
      console.log(textarr);
        alert('sucessfully done');
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
              <div>
                {
                  val.adddisc.length>0 ? 
               val.adddisc.map((index)=>{
                    return (
                      <>
                      <div id="border-add">
                      {index.text}
                    </div>
                    <div id="border-add">
                      {index.time}
                    </div>
                      </>
                    )
                  }) : 
                  <>
                     No Extra Discussion
                  </>
                }
              </div>
              <button onClick={()=> {
                handleClickOpen(val.id)
              } }>Add Text</button>
            <br></br>
            <br></br>
              </center>
              
              </>
          })
        }
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Title</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add Text
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="text"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event)=>{
                  vals = event.target.value
                  setTextBox(event.target.value)}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
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