import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import styled, { keyframes } from 'styled-components';   

import hourglass from "./assets/hourglass_icon.svg";
import BackButton from "./assets/back_button.svg";

function Waiting_page() {
    const [watingP, setWatingP] = useState(28);
    const totalP = 100;

    return (
        <Main>
            <BackBtn/>
            <Waiting>
                <Hourglass src={hourglass} alt="hourglass" />
                <WaitingMessage>접속 대기 중입니다</WaitingMessage>

                <Waiting_bar>
                    <Waiting_bar_fill style={{ maxWidth: `${ (watingP/totalP*100) }%` }}></Waiting_bar_fill>
                </Waiting_bar>

                <SubMessage>
                    <Sub_1>나의 대기 순서</Sub_1>
                    <Sub_2>{watingP}</Sub_2>
                </SubMessage>
            </Waiting>
        </Main>

    );

}

function BackBtn() {
    return (
        <Link to="/" style={{
            position: 'absolute',
            top: '10%',
            left: '20px',
            zIndex: '10'}}>
            <img src={BackButton} alt="뒤로가기버튼"/>
        </Link>
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
  background-color: #f9f9ff;

  overflow: hidden;
  user-select: none;
`;

const Waiting = styled.div`
  position: absolute;
  top: 39.5%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  
  margin: 0;
`;

const Hourglass = styled.img`
  width: 72px;
  height: 72px;
  margin-bottom: 23px;
`;
const WaitingMessage = styled.span`
  font-family: Pretendard, -apple-system, sans-serif;
  font-size: 20px;
  color: #4566de;
  font-weight: 600;

  margin-bottom: 12px;
`;
const Waiting_bar = styled.div`
  width: 334px;
  height: 16px;
  background-color: #E8E8EF;
  border-radius: 20px;
  
  margin-bottom: 12px;
`;
const loadingAni = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;
const Waiting_bar_fill = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #B8D3FC 0%, #4566DE 100%);
  border-radius: 20px;
  
  animation: ${loadingAni} 1s 2ms ease-in-out 1;
`;

const SubMessage = styled.div`
  width: 106px;
  height: 19px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Sub_1 = styled.span`
  font-family: Pretendard, -apple-system, sans-serif;
  font-size: 14px;
  color: #757580;
  font-weight: 400;
`;
const Sub_2 = styled.span`
  font-family: Pretendard, -apple-system, sans-serif;
  font-size: 16px;
  color: #4566de;
  font-weight: 500;
`;

export default Waiting_page;