import './App.css';
import ForumContent from './forumcontent';
import {useNavigate} from 'react-router-dom';
function Forum() {
  const navigate=useNavigate();
  const forum=[{name:"Name",creation_on:"Creation ON",description:"description",created_by:"Created by"},
  {name:"Name",creation_on:"Creation ON",description:"description",created_by:"Created by"}]
  // const arr1=[{id:123,time:"time1",quotes:"quotes1",interaction:"interaction1"},
  // {id:124,time:"time2",quotes:"quotes2",interaction:"interaction2"},
  // {id:125,time:"time3",quotes:"quotes3",interaction:"interaction3"}]
  // const arr2=[{id:124,name:"name1",image:"image1",desgination:"desgination1"},
  // {id:123,name:"name2",image:"image2",desgination:"desgination2"},
  // {id:125,name:"name3",image:"image3",desgination:"desgination3"}]
  return (
    <div className="App">
      <button id="add-icon" onClick={()=>{navigate('/adddiscussion')}}>Create</button>
      
      <center>
        <br>
        </br>
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
            <button onClick={()=>{navigate('/dispage')}}>Disscussion Page</button>
              </center>
              
              </>
          })
        }
      {/* <div id="forum-heading">
        <div id="border-add">
          {forum[0].name}
        </div>
        <div id="border-add">
          {forum[0].creation_on}
        </div>
        <div id="border-add">
          {forum[0].description}
        </div>
        <div id="border-add">
          {forum[0].created_by}
        </div>
      </div> */}
      </center>
      <br></br>
      <br></br>
      {/* {
        arr1.map((val)=>{
          let index = arr2.map(x=>x.id).indexOf(val.id)
          if (index > -1 ) {
            return<>
            <ForumContent id={val.id} time={val.time} quotes={val.quotes}
            interaction={val.interaction} name={arr2[index].name}
            image={arr2[index].image} desgination={arr2[index].desgination}/>
            <br>
            </br></>
          }
        })
      } */}
    </div>
  );
}

export default Forum;
