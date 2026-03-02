import styled from "styled-components";
import BackImg from "/assets/img/Back2.svg"
import { useNavigate } from "react-router-dom";
import Category from "../Components/Category.jsx"
import HaveCancelTicket from "../Components/HaveCancelTicket.jsx";
import { useState } from "react";

export default function HaveTicketPage(){
    const navigate=useNavigate()
    const [activeTab, setActiveTab] = useState('전체');
    return(
        <>
            <BackContainer>
                <BackButton src={BackImg} onClick={() => navigate("/myticket")}/>보유한 티켓
            </BackContainer>
            <Category setActiveTab={setActiveTab} activeTab={activeTab}/>
            <TicketBoxContainer>
                <HaveCancelTicket Selection={"Have"} Category={activeTab}/>
            </TicketBoxContainer>
            <BottomSpacer />
        </>
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

const BottomSpacer = styled.div`
  height: 80px; // Menu의 높이와 동일하게 설정
`;

const BackContainer = styled.span`
    heigth: 21px;
    display: flex;
    align-items: center;
    font-family: Pretendard;
    font-size: 18px;
    color: #1A1A1F;
    font-weight: 600;
`
const BackButton = styled.img`
    margin: 2px 8px 2px 0;
    &:hover {
        cursor: pointer;
    }
`

