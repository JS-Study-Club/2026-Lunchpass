import { Link } from 'react-router-dom';
import styled from 'styled-components';

import loading_icon from "./assets/loading_icon.svg";
import BackButton from "./assets/back_button.svg";

function Loading_page() {
    return (
        <Main>
            <BackBtn/>
            <Loading>
                <img src={loading_icon} alt="로딩아이콘"/>
                <Message>예매 화면을 불러오는 중입니다</Message>
                <SubMessage>잠시만 기다려주세요</SubMessage>
            </Loading>
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
  overflow: hidden;
  
  display: flex;
  flex-direction: column;
  background-color: #F9F9FF;

  overflow: hidden;
  user-select: none;
`;

const Loading = styled.div`
  position: absolute;
  top: 42.9%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 100%;
  margin: 0;
`;

const Message = styled.span`
  font-family: Pretendard, -apple-system, sans-serif;
  height: 24px;
  font-size: 20px;
  font-weight: 600;
  color: #4566DE;

  margin-top: 20px;
`;
const SubMessage = styled.span`
  font-family: Pretendard, -apple-system, sans-serif;
  margin-top: 11px;
  
  font-size: 14px;
  color: #757580;
  font-weight: 400;
`;

export default Loading_page;