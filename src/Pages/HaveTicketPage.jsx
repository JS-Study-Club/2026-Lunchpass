import styled from "styled-components";
import BackImg from "/assets/img/Back2.svg"
import { useNavigate } from "react-router-dom";
import Category from "../Components/Category.jsx"
import HaveCancelTicket from "../Components/HaveCancelTicket.jsx";

export default function HaveTicketPage(){
    const navigate=useNavigate()

    return(
        <>
            <BackContainer>
                <BackButton src={BackImg} onClick={() => navigate("/myticket")}/>보유한 티켓
            </BackContainer>
            <Category />
            <HaveCancelTicket Selection={"Have"}/>
        </>
    ) 
}

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
`

