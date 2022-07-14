import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './home';
import Login from './login';
import SignUp from './signup';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup"  element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
