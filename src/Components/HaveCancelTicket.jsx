import styled from "styled-components";
import { useState } from 'react';
import NoneTicket from "/assets/img/NoneTicket.svg"

import { TicketDummy } from "../mocks/TicketDummy.js";

import View_qr from "../Components/View_qr_M.jsx";
import TicketCancle from "../Components/TicketCancle_M.jsx";
import Retrieval from "./Retrieval_M.jsx";

export default function HaveCancelTicket({Selection, Category}){
    const [isOpen, setIsOpen] = useState(false);
    const index=0;
    let tickets=TicketDummy.Tickets;
    if(!TicketDummy.HaveTicket){
        /* 티켓이 없을 때 */
        return(
            <NoneTicketContainer src={NoneTicket}/>
        )
    }
    if(Category !== "전체"){
        if(Category === "조식"){
            tickets=tickets.filter(ticket => ticket.TicketType === "Breakfast")
        }
        else if(Category === "석식"){
            tickets=tickets.filter(ticket => ticket.TicketType === "Dinner")
        }
    }

    return(
        <>
        {tickets
        .filter(ticket => Selection === "Have" ? !ticket.isCancel : ticket.isCancel)
        .slice(0, 4)
        .map((ticket) => {
            const DateValue=`${ticket.date.month} / ${ticket.date.day}  (${ticket.date.dayofweek})`
            const Meal = ticket.TicketType === "Breakfast" ? "조식" : "석식"
             /* 티켓이 있을 때 */
            return(
                <>
                        <TicketBox key={ticket.id} isLast={index === 3}>
                            <Ticket>{DateValue}&nbsp;&nbsp;{Meal}</Ticket>
                            <QR onClick={() => setIsOpen(Selection === "Have" ? "VIEW_QR" : "RETRIEVAL")}>{Selection === "Have" ? "QR 보기" : "회수 요청"}</QR>
                        </TicketBox>
                </>
            )
        })}
        {        
            isOpen === "CANCLE" && (
                <TicketCancle setIsOpen={setIsOpen} /> 
            )
        } 
        {
            isOpen === "VIEW_QR" && (
                <View_qr setIsOpen={setIsOpen}/>
            )
        }
        {
            isOpen === "RETRIEVAL" && (
                <Retrieval setIsOpen={setIsOpen}/>
            )
        }
        </>
    )
}



const TicketBox=styled.div`
    padding: 17px 0;
    border-top: 1px solid #F1F2F5;
`

const Ticket=styled.span`
    margin-right: 183px;
`

const QR=styled.span`
    color: #4566DE;
`

const NoneTicketContainer=styled.img`
    margin: 189px 121px 0 121px;
`