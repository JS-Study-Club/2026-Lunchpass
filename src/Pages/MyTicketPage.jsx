import MyTicket from "../Components/MyTicket.jsx"
import { useNavigate } from "react-router-dom";
import BackImg from "/assets/img/Back2.svg"
import styled from "styled-components";

export default function MyTicketPage(){
    const navigate=useNavigate();
    return( 
        <>
            <BackContainer>
                <BackButton src={BackImg} onClick={() => navigate("/")} style={{
                    heigth: 21
                }}/>My 티켓
            </BackContainer>
            <div style={{
                marginTop: 55
            }}>
                <MyTicket Information={"보유한 티켓"} URL={"/myticket/haveticketpage"} Selection={"Have"} IMG={"/assets/img/Have.svg"}/>
            </div>
            <div style={{
                marginTop: 26
            }}>
                <MyTicket Information={"취소한 티켓"} URL={"/myticket/cancelticketpage"} Selection={"Cancel"} IMG={"/assets/img/Cancel.svg"}/>
            </div>
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