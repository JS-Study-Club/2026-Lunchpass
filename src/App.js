import './App.css';
import Login from './Login';
import Signup from './Signup';
import Mydata from './Mydata';
import {Routes, Route} from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/mydata' element={<Mydata/>}/>
      </Routes>
    </div>
  );
}

export default App;
