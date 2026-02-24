import { Routes, Route } from 'react-router-dom';

import Ticket_success from './Ticket_success.jsx';
import Loading_page from './loading_page.jsx';
import Waiting_page from './Waiting_page.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Ticket_success/>}/>
      <Route path="/loading" element={<Loading_page/>}/>
      <Route path="/waiting" element={<Waiting_page/>}/>
    </Routes>
  );
}


export default App
