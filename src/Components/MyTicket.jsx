import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BackButton from "/assets/img/Back.svg"

export default function MyTicket({Information, URL, Selection, IMG}){
    const navigate=useNavigate()
    return(
        <MyTicketContainer>
            <MyTicketInformationContainer>
                <img src={IMG} style={{
                    marginRight: 10,
                    display: "inline-block"
                }}/>
                <MyTicketInformation>{Information}</MyTicketInformation>
                <Back src={BackButton} onClick={() => navigate(URL)}></Back>
            </MyTicketInformationContainer>
            <MyTicketBoxContainer>
                <MyTicketBoxFirst>
                    <MyTicketText>{"12 / 01  (월)"}&nbsp;&nbsp;{"조식"}</MyTicketText>
                    <QR>{Selection === "Have" ? "QR 보기" : "회수 요청"}</QR>
                </MyTicketBoxFirst>
                <MyTicketBoxMiddle>
                    <MyTicketText>{"12 / 01  (월)"}&nbsp;&nbsp;{"석식"}</MyTicketText>
                    <QR>{Selection === "Have" ? "QR 보기" : "회수 요청"}</QR>
                </MyTicketBoxMiddle>
                <MyTicketBoxMiddle>
                    <MyTicketText>{"12 / 02  (화)"}&nbsp;&nbsp;{"조식"}</MyTicketText>
                    <QR>{Selection === "Have" ? "QR 보기" : "회수 요청"}</QR>
                </MyTicketBoxMiddle>
                <MyTicketBoxLast>
                    <MyTicketText>{"12 / 02  (화)"}&nbsp;&nbsp;{"석식"}</MyTicketText>
                    <QR>{Selection === "Have" ? "QR 보기" : "회수 요청"}</QR>
                </MyTicketBoxLast>
            </MyTicketBoxContainer>
        </MyTicketContainer>
    ) 
}

const MyTicketContainer = styled.div`
    width: 350px;
`
const Back = styled.img`
    padding-top: 0px;
`

const MyTicketBoxContainer=styled.div`
    border-radius: 10px 10px 10px 10px;
    box-shadow: 0px 0px 5px 0px rgba(116, 116, 116, 0.2);
    width: 350px;
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

const MyTicketBoxFirst = styled.div`
    padding: 20px 0 17px 0;
    width: 306px;
    height: 54px;
    margin: 0 22px;
    border-radius: 10px 10px 0 0;
    background-color: #F9F9FF;
    box-sizing: content-box;
    border-bottom: 1px solid #F1F2F5;
    display: flex;
    align-items: center;
    box-sizing: border-box;
`
const MyTicketBoxMiddle = styled.div`
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
`
const MyTicketBoxLast = styled.div`
    padding: 17px 0 20px 0;
    width: 306px;
    height: 54px;
    margin: 0 22px;
    background-color: #F9F9FF;
    border-radius : 0 0 10px 10px;
    box-sizing: content-box;
    display: flex;
    align-items: center;
    box-sizing: border-box;
`

const MyTicketText=styled.span`
    margin-right:148px;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: normal;
    width: 106px;
`

const QR=styled.span`
    margin:0;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: normal;
    color: #4566DE
`