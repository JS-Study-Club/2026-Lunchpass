import styled from "styled-components";
import { Link, useParams } from 'react-router-dom';

import lunchIconImg from "./assets/lunchPassIcon.svg"

function QR_Landing() {
    let { Date, Time } = useParams();


    return (
        <Main>
            <LunchIcon src={lunchIconImg} alt="급식패스 아이콘" />
            <Info>
                <SpanDiv>
                    <Span>사용가능 날짜</Span>
                    <SpanEm>{ Date }</SpanEm>
                </SpanDiv>
                <SpanDiv>
                    <Span>조식/석식</Span>
                    <SpanEm>{Time}</SpanEm>
                </SpanDiv>
            </Info>
            <CloseBtn onClick={() => { window.history.back()}}>닫기</CloseBtn>
        </Main>

    );

}

const Main = styled.div`
  width: 100%;
  max-width: 390px;
  
  height: 100dvh;
  
  margin: 0 auto;
  position: relative;
  
  display: flex;
  flex-direction: column;
  background-color: #F9F9FF;

  overflow: hidden;
  user-select: none;
`;

const LunchIcon = styled.img`
    position: absolute;
    top: 22.4%;
    left: 50%;
    transform: translateX(-50%);

    width: 150px;
    height: 150px;
`;

const Info = styled.div`
    position: absolute;
    bottom: 29.6%;
    left: 50%;
    transform: translate(-50%);

    width: 320px;
    height: 110px;
    padding: 25px 36px;

    box-sizing: border-box;
    border-radius: 10px;
    background-color: #f9f9ff;
    box-shadow: 0 4px 30px 0px rgba(21,30,46,0.05);
    
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const SpanDiv = styled.div`
    width: 248px;
    height: 20px;
    font-size: 17px;

    display: flex;
    justify-content: space-between;
`;
const Span = styled.span`
    font-family: Pretendard, -apple-system, sans-serif;
    font-weight: 400;
    color: #757580;

`;
const SpanEm = styled.span`
    font-family: Pretendard, -apple-system, sans-serif;
    font-weight: 600;
    color: #4566de;
`;

const CloseBtn = styled(Link)`
  font-family: Pretendard, -apple-system, sans-serif;
  position: absolute;
  bottom: 17.2%;
  left: 50%;
  transform: translate(-50%);

  width: 350px;
  height:55px;
  background-color: #4566de;
  border-radius:10px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  color: #f9f9ff;
  font-size: 17px;
`;

export default QR_Landing;