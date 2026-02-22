import styled from "styled-components";
// import { useState } from 'react';
import NoneTicket from "/assets/img/NoneTicket.svg"

export default function HaveCancelTicket({Selection}){
    return(
        <TicketBoxContainer>
            <TicketBox>
                <Ticket>{"12 / 01  (월)"}&nbsp;&nbsp;{"조식"}</Ticket>
                <QR>{Selection === "Have" ? "QR 보기" : "회수 요청"}</QR>
            </TicketBox>
            <TicketBox>
                <Ticket>{"12 / 01  (월)"}&nbsp;&nbsp;{"석식"}</Ticket>
                <QR>{Selection === "Have" ? "QR 보기" : "회수 요청"}</QR>
            </TicketBox>
            <TicketBox>
                <Ticket>{"12 / 02  (화)"}&nbsp;&nbsp;{"조식"}</Ticket>
                <QR>{Selection === "Have" ? "QR 보기" : "회수 요청"}</QR>
            </TicketBox>
            <TicketBox>
                <Ticket>{"12 / 02  (화)"}&nbsp;&nbsp;{"석식"}</Ticket>
                <QR>{Selection === "Have" ? "QR 보기" : "회수 요청"}</QR>
            </TicketBox>
            {/* <NoneTicketContainer src={NoneTicket} /> */}
            {/* 티켓 없을 때 */}
        </TicketBoxContainer>
    )
}

const TicketBoxContainer=styled.div`
    padding-top: 2px;
    font-family: Pretendard;
    font-weight: 500;
    font-size: 14px;
    color: #4E4E4E;
    width: 350px;
`

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