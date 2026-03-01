import { Routes, Route } from 'react-router-dom';

import Ticket_success from './Ticket_success.jsx';
import Loading_page from './Loading_page.jsx';
import Waiting_page from './Waiting_page.jsx';
import QR_Landing from './QR_Landing.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Ticket_success/>}/>
      <Route path="/loading" element={<Loading_page/>}/>
      <Route path="/waiting" element={<Waiting_page/>}/>
      <Route path='/QRLanding/:Date/:Time' element={<QR_Landing/>}/>
    </Routes>
  );
}


export default App
