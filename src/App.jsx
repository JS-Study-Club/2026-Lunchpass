import {Routes, Route} from "react-router-dom"

import Layout from "./Layout.jsx"
import HomePage from "./Pages/HomePage.jsx"
import MyTicketPage from "./Pages/MyTicketPage.jsx"
import CancelTicketPage from "./Pages/CancelTicketPage.jsx"
import HaveTicketPage from "./Pages/HaveTicketPage.jsx"
import Ticket_success from './Ticket_success.jsx';
import Loading_page from './Loading_page.jsx';
import Waiting_page from './Waiting_page.jsx';

export default function App(){
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* <Route path="/" element={<HomePage username={"이예지"} commute={"통학"}/>} />
        <Route path="/myticket" element={<MyTicketPage />} />
        <Route path="/myticket/cancelticketpage" element={<CancelTicketPage />} />
        <Route path="/myticket/haveticketpage" element={<HaveTicketPage />} /> */}
    </Route>
        <Route path="/" element={<Ticket_success/>}/>
        <Route path="/loading" element={<Loading_page/>}/>
        <Route path="/waiting" element={<Waiting_page/>}/>
      
    </Routes>
  )
}
