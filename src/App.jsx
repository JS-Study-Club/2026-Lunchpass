import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './Ticket_success.css';
import Ticket_success from './Ticket_success.jsx';
import Ticket_fail from './Ticket_fail.jsx';
import Loading_page from './loading_page.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Ticket_success/>}/>
        <Route path="/fail" element={<Ticket_fail/>}/>
        <Route path="/loading" element={<Loading_page/>}/>
      </Routes>
    </>
  );
}


export default App
