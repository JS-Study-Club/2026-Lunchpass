import styled from "styled-components";
import BackImg from "/assets/img/Back2.svg"
import { useNavigate } from "react-router-dom";
import Category from "../Components/Category.jsx"
import HaveCancelTicket from "../Components/HaveCancelTicket.jsx"

export default function CancelTicketPage(){
    const navigate=useNavigate()

    return(
        <>
            <BackContainer>
                <BackButton src={BackImg} onClick={() => navigate("/myticket")}/>취소한 티켓
            </BackContainer>
            <Category/>
            <HaveCancelTicket Selection={"Cancel"}/>
            <BottomSpacer />
        </>
    ) 
}

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
`