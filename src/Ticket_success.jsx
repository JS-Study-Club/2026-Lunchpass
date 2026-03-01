import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import SuccessIcon from "./assets/success_icon.svg";
import BackButton from "./assets/back_button.svg";

function Ticket_success() {
    const [date, setDate] = useState('날짜');
    const [time, setTime] = useState('시간대');

    useEffect(() => {setDate(todayDOW())},[]);
    
    return (
        <Main>
            <BackBtn/>
            <Success>
                <SuccessImage src={SuccessIcon} alt="성공아이콘"/>
                <SuccessMesssage>예매 성공!</SuccessMesssage>
                <SubMessage>티켓을 성공적으로 예매하였습니다</SubMessage>
            </Success>
            <Info>
                <InfoText>
                    <DateNTime>
                        <Span>사용가능 날짜</Span>
                        <Info_em>{date}</Info_em>
                    </DateNTime>
                    <DateNTime>
                        <Span>조식/석식</Span>
                        <Info_em>{time}</Info_em>
                    </DateNTime>
                </InfoText>
            </Info>
            <CloseSet>
                <CloseBtn to="/loading"><Span>닫기</Span></CloseBtn>
                <CloseText to={`/QRLanding/${date}/${time}`}><Span>내 티켓으로 이동</Span></CloseText>
            </CloseSet>
        </Main>
    );
}

function BackBtn() {
    return (
        <Link to="/waiting" style={{
            position: 'absolute',
            top: '10%',
            left: '20px',
            zIndex: '10'}}>
            <img src={BackButton} alt="뒤로가기버튼"/>
        </Link>
    );
}

function todayDOW() {
    const day = new Date();
    let DOW = '';
    switch(day.getDay()) {
        case 0: DOW = '일'; break;
        case 1: DOW = '월'; break;
        case 2: DOW = '화'; break;
        case 3: DOW = '수'; break;
        case 4: DOW = '목'; break;
        case 5: DOW = '금'; break;
        case 6: DOW = '토'; break;
    }
    return `오늘 (${DOW})`;
}

const Main = styled.div`
  width: 100%;
  max-width: 390px;
  
  height: 100dvh;
  
  margin: 0 auto;
  position: relative;
  
  display: flex;
  flex-direction: column;
  background-color: #f9f9ff;

  overflow: hidden;
  user-select: none;
`;

const Success = styled.div`
  position: absolute;
  top: 27.3%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 100%;
  margin: 0;
`;
const SuccessImage = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 12px;
`;
const SuccessMesssage = styled.span`
  font-family: Pretendard, -apple-system, sans-serif;
  height: 27px;
  font-size: 24px;
  font-weight: 600;
  color: #4566DE;
  margin-bottom: 8px;
`;
const SubMessage = styled.span`
  font-family: Pretendard, -apple-system, sans-serif;
  font-size: 14px;
  color: #757580;
  font-weight: 400;
`;

const Info = styled.div`
  position: absolute;
  bottom: 0;
  height: 38.27%;
  width: 100%;

  background-color: #F2F2F8;
  border-radius: 39px 39px 0 0;
  padding-top: 41px;

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InfoText = styled.div`
  font-size: 14px;
  color: #c2c2d3;

  display: flex;
  flex-direction: column;

  width: 304px;
  gap: 20px;
`;
const DateNTime = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;
const Span = styled.span`
  font-family: Pretendard, -apple-system, sans-serif;
`;
const Info_em = styled.span`
  font-family: Pretendard, -apple-system, sans-serif;
  color: #9b9baa;
`;

const CloseSet = styled.div`
  position: absolute;
  bottom: 7.6%;
  left: 50%;
  transform: translateX(-50%);
  
  width: 350px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;
const CloseBtn = styled(Link)`
  text-decoration: none;

  width: 100%;
  height: 55px;
  background-color:#4566de;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #f9f9ff;
  font-size: 17px;
`;
const CloseText = styled(Link)`
  font-family: Pretendard, -apple-system, sans-serif;
  text-decoration: none;
  
  font-size: 14px;
  font-weight: 400;
  color: #757580;
`;

export default Ticket_success;