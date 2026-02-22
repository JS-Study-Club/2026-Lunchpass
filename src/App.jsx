import Layout from "./Layout.jsx"
import HomePage from "./Pages/HomePage.jsx"
import MyTicketPage from "./Pages/MyTicketPage.jsx"
import CancelTicketPage from "./Pages/CancelTicketPage.jsx"
import HaveTicketPage from "./Pages/HaveTicketPage.jsx"
import {BrowserRouter, Routes, Route} from "react-router-dom"

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage username={"이예지"} commute={"통학"}/>} />
                    <Route path="/myticket" element={<MyTicketPage />} />
                    <Route path="/myticket/cancelticketpage" element={<CancelTicketPage />} />
                    <Route path="/myticket/haveticketpage" element={<HaveTicketPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}