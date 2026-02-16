import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './Ticket_success.css';
import Ticket_success from './Ticket_success.jsx';
import Ticket_fail from './Ticket_fail.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Ticket_success/>}/>
        <Route path="/fail" element={<Ticket_fail/>}/>
      </Routes>
    </>
  );
}


export default App
