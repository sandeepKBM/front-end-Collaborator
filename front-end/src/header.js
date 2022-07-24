import './App.css';
import {NavLink} from 'react-router-dom';
function Header() {
  return (
    <div id="header">
        <div>
        <img alt="logo" 
        id="logo-img" 
        src="https://bpptik.kominfo.go.id/wp-content/uploads/2020/12/Screen-Shot-2020-12-23-at-11.44.50-660x625.png"></img>
        Name
        </div>
        <div>
           <NavLink to="/login">Login</NavLink>
        </div>
    </div>
  );
}

export default Header;