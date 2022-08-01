import './App.css';
import {useNavigate} from 'react-router-dom';

function ForumContent(props) {
  const navigate=useNavigate();
  return (
    <div className="App">
      <center>
        <div id="forum-display1">
          <div>
              {props.image}
              <br></br>
              {props.name}
              <br></br>
              {props.desgination}
          </div>
          <div>
              {props.id}
              <br></br>
              {props.time}
              <br></br>
              {props.quotes}
              <br></br>
              {props.interaction}
          </div>
          <div>

          </div>
          <div>
          <button onClick={()=>{navigate('/moredis',{ state: { image: props.image,
          id:props.id, time:props.time, quotes:props.quotes, interaction:props.interaction,
          desgination:props.desgination,name: props.name} })}}>Hello</button>
          </div>
          
        </div>
        
      </center>
    </div>
  );
}

export default ForumContent;