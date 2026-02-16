import Back from "../MyTicket/Back.jsx"
import CancelTicket from "../MyTicket/CancelTicket.jsx"
import HaveTicket from "../MyTicket/HaveTicket.jsx"

export default function MyTicketPage(){
    return(
        <>
            <Back/>
            <HaveTicket/>
            <CancelTicket/>
        </>
    )
}