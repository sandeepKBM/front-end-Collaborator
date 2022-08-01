import './App.css';
import {Routes, Route} from 'react-router-dom';
import LoginSignup from './loginsignup';
import Login from './login';
import SignUp from './signup';
import Home from './home'
import Header from './header';
import Footer from './footer';
import Forum from './forum';
import AddDiscussion from './AddDiscussion';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/loginsignup" element={<LoginSignup/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/forum" element={<Forum />}></Route>
        <Route path="/adddiscussion" element={<AddDiscussion />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
