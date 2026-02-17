import './App.css';
import Login from './LoginPage/Login';
import Signup from './SignupPage/Signup';
import Mydata from './MydataPage/Mydata';
import {Routes, Route} from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Mydata' element={<Mydata/>}/>
      </Routes>
    </div>
  );
}

export default App;
