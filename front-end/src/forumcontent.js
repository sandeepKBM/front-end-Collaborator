import './App.css';
function ForumContent(props) {
  return (
    <div className="App">
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
      </div>
    </div>
  );
}

export default ForumContent;