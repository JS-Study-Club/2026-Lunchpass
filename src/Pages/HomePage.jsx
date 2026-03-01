import styled from "styled-components"
import Lunch from "../Components/Lunch.jsx"
import MyTicket from "../Components/MyTicket.jsx"
import BackImg from "/assets/img/Back2.svg"
import BackButton from "/assets/img/Back.svg"
import { useNavigate } from "react-router-dom";

const BottomSpacer = styled.div`
  height: 80px; // Menu의 높이와 동일하게 설정
`;

// 전체를 감싸는 컨테이너 (여백 관리 용이)
const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Pretendard;
`;

const HeaderRow = styled.div`
    display: flex;
    align-items: center; /* 수직 중앙 정렬의 핵심! */
    margin-bottom: 7px;
`;

const NameWrapper = styled.div`
    display: flex;
    align-items: baseline; /* 글자 아래 기준선을 맞춤 */
    margin-right: 8px; /* 뱃지와의 간격 */
`;

const Text = styled.span` /* p 대신 span 사용 권장 */
    font-size: 18px;
    font-weight: 600;
    color: #1A1A1F;
`;

const CommuteBadge = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 8px;
    height: 18px;
    border-radius: 9px;
    background-color: rgba(143, 166, 249, 0.15);
`;

const BadgeText = styled.span`
    font-weight: 500;
    font-size: 10px;
    color: #4566DE;
`;

const SubText = styled.p`
    margin: 0;
    font-size: 12px;
    font-weight: 500;
    color: #A6A6A6;
`;

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


export default function HomePage({username, commute}){
    const navigate = useNavigate();
    return(
        <>
            <Container>
            {/* 첫 번째 줄: 인사말 + 뱃지 */}
                <HeaderRow>
                    <NameWrapper>
                    <Text>안녕하세요,&nbsp;</Text>
                    <Text style={{ fontSize: "20px", color: "#4566DE" }}>{username}</Text>
                    <Text>님</Text>
                    </NameWrapper>
                    <CommuteBadge>
                    <BadgeText>{commute}생</BadgeText>
                    </CommuteBadge>
                </HeaderRow>

                {/* 두 번째 줄: 티켓 안내 */}
                <SubText>오늘 사용할 수 있는 티켓이 있어요!</SubText>
            </Container>
            <Lunch />
            <div style={{
                marginTop: 38
            }}>
                <MyTicketContainer>
                    <MyTicketInformationContainer>
                        <img src={"/assets/img/ticket2.svg"} style={{
                            marginRight: 10,
                            display: "inline-block"
                        }}/>
                        <MyTicketInformation>{"My 티켓"}</MyTicketInformation>
                        <Back src={BackButton} onClick={() => navigate("/myticket")}></Back>
                    </MyTicketInformationContainer>
                </MyTicketContainer>
                <MyTicketBoxContainer>
                    <MyTicket Selection={"Have"}/>
                </MyTicketBoxContainer>
            </div>
            <BottomSpacer/>
        </>
    )
}
