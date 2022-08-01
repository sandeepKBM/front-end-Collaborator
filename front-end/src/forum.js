import './App.css';
import ForumContent from './forumcontent';
import {useNavigate} from 'react-router-dom';
function Forum() {
  const navigate=useNavigate();
  const forum=[{name:"Name",creation:"Creation",message_count:45,last_poster:"Last_Poster"}]
  const arr1=[{id:123,time:"time1",quotes:"quotes1",interaction:"interaction1"},
  {id:124,time:"time2",quotes:"quotes2",interaction:"interaction2"},
  {id:125,time:"time3",quotes:"quotes3",interaction:"interaction3"}]
  const arr2=[{id:124,name:"name1",image:"image1",desgination:"desgination1"},
  {id:123,name:"name2",image:"image2",desgination:"desgination2"},
  {id:125,name:"name3",image:"image3",desgination:"desgination3"}]
  return (
    <div className="App">
      <div id="forum-heading">
        <div>
          {forum[0].name}
        </div>
        <div>
          {forum[0].creation}
        </div>
        <div>
          {forum[0].message_count}
        </div>
        <div>
          {forum[0].last_poster}
        </div>
      </div>
      <button onClick={()=>{navigate('/adddiscussion')}}>+</button>
      {
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
      }
    </div>
  );
}

export default Forum;
