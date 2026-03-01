import MyTicket from "../Components/MyTicket.jsx"
import { useNavigate } from "react-router-dom";
import BackImg from "/assets/img/Back2.svg"
import styled from "styled-components";
import BackButton from "/assets/img/Back.svg"

export default function MyTicketPage(){
    const navigate=useNavigate();
    return( 
        <>
            <BackContainer>
                <BackPlace src={BackImg} onClick={() => navigate("/")} style={{
                    heigth: 21
                }}/>My 티켓
            </BackContainer>
            <div style={{
                marginTop: 55
            }}>
                <MyTicketContainer>
                    <MyTicketInformationContainer>
                        <img src={"/assets/img/Have.svg"} style={{
                            marginRight: 10,
                            display: "inline-block"
                        }}/>
                        <MyTicketInformation>{"보유한 티켓"}</MyTicketInformation>
                        <Back src={BackButton} onClick={() => navigate("/myticket/haveticketpage")}></Back>
                    </MyTicketInformationContainer>
                </MyTicketContainer>
                <MyTicketBoxContainer>
                    <MyTicket Selection={"Have"}/>
                </MyTicketBoxContainer>
            </div>
            <div style={{
                marginTop: 26
            }}>
                <MyTicketContainer>
                    <MyTicketInformationContainer>
                        <img src={"/assets/img/Cancel.svg"} style={{
                            marginRight: 10,
                            display: "inline-block"
                        }}/>
                        <MyTicketInformation>{"취소한 티켓"}</MyTicketInformation>
                        <Back src={BackButton} onClick={() => navigate("/myticket/cancelticketpage")}></Back>
                    </MyTicketInformationContainer>
                </MyTicketContainer>
                <MyTicketBoxContainer>
                    <MyTicket Selection={"Cancel"}/>
                </MyTicketBoxContainer>
            </div>
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
const BackPlace = styled.img`
    margin: 2px 8px 2px 0;
`
const MyTicketContainer = styled.div`
    width: 350px;
`
const Back = styled.img`
    padding-top: 0px;
`

const MyTicketBoxContainer=styled.div`
    height: 213px;
    border-radius: 10px 10px 10px 10px;
    padding-top: 3px;
    padding-bottom: 3px;
    box-shadow: 0px 0px 5px 0px rgba(116, 116, 116, 0.2);
    box-sizing: border-box;
`

const MyTicketInformationContainer=styled.div`
    display: flex;
    align-items: center;
    margin: 0px 0px 15px 0px;
    height: 21px;
`
const MyTicketInformation = styled.span`
    margin-right:226px;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: normal;
    color: #2C2C2C;
`
