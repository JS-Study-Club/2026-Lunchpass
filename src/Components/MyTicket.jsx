import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import NoneTicket from "/assets/img/NoneTicket.svg"
import { TicketDummy } from "../mocks/TicketDummy.js";

import View_qr from "../Components/View_qr_M.jsx";
import TicketCancle from "../Components/TicketCancle_M.jsx";
import Retrieval from "./Retrieval_M.jsx";

export default function MyTicket({Selection}){
    const [isOpen, setIsOpen] = useState(false);
    const index=0;
    if(!TicketDummy.HaveTicket){
        /* 티켓이 없을 때 */
        return(
            <NoneTicketContainer src={NoneTicket}/>
        )
    }
    return(
        <>
        {TicketDummy.Tickets
        .filter(ticket => Selection === "Have" ? !ticket.isCancel : ticket.isCancel)
        .slice(0, 4)
        .map((ticket) => {
            const DateValue=`${String(ticket.date.month).padStart(2, "0")} / ${String(ticket.date.day).padStart(2, "0")}`
            const Meal = ticket.TicketType === "Breakfast" ? "조식" : "석식"
             /* 티켓이 있을 때 */
            return(
                <>
                        <MyTicketBox isLast={index === 3}>
                            <MyTicketText>{DateValue}&nbsp;&nbsp;({ticket.date.dayofweek})&nbsp;&nbsp;{Meal}</MyTicketText>
                            <QR onClick={() => setIsOpen(Selection === "Have" ? "VIEW_QR" : "RETRIEVAL")}>{Selection === "Have" ? "QR 보기" : "회수 요청"}</QR>
                        </MyTicketBox>
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




const MyTicketBox = styled.div`
    padding: 17px 0 17px 0;
    width: 306px;
    height: 51px;
    margin: 0 22px;
    background-color: #F9F9FF;
    box-sizing: content-box;
    border-bottom: 1px solid #F1F2F5;
    display: flex;
    align-items: center;
    box-sizing: border-box;

    &:last-child {
        border-bottom: none;
    }
`

const MyTicketText=styled.span`
    margin-right:148px;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: normal;
    box-sizing: border-box;
    width:106px;
`

const QR=styled.span`
    margin:0;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: normal;
    color: #4566DE;
    box-sizing: border-box;
`

const NoneTicketContainer=styled.img`
    margin: 59px 121px 0 121px;
    box-sizing: border-box;
`