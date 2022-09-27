import './App.css';
import {NavLink} from 'react-router-dom';
function Header() {
  return (
    <div id="header">
        <div>
          Project-Name ?
        </div>
        <div>
           <NavLink to="/forum">Forum</NavLink>
        </div>
        <div>
           <NavLink to="/login">Login</NavLink>
        </div>
        <div>
          <NavLink to="/newsletter">Newsletter</NavLink>
        </div>
    </div>
  );
}

export default Header;