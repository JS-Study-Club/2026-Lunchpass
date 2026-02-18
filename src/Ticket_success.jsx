import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import SuccessIcon from "./assets/success_icon.svg";
import BackButton from "./assets/back_button.svg";

import "./Ticket_success.css";

function Ticket_success() {
    const [date, setDate] = useState('날짜');
    const [time, setTime] = useState('시간대');

    useEffect(() => {setDate(todayDOW())},[]);
    

    return (
        <div className='Main'>
            <BackBtn/>
            <div id='success'>
                <img src={SuccessIcon} alt="성공아이콘" id='successIcon'/>
                <span id='successMesssage'>예매 성공!</span>
                <span id='subMessage'>티켓을 성공적으로 예매하였습니다</span>
            </div>
            <div id='info'>
                <div id='infoText'>
                    <div className='dateNtime'>
                        <span>사용가능 날짜</span>
                        <span className='info_em'>{date}</span>
                    </div>
                    <div className='dateNtime'>
                        <span>조식/석식</span>
                        <span className='info_em'>{time}</span>
                    </div>
                    
                </div>
            </div>
            <div id='closeSet'>
                <Link to="/fail" id='closeBtn'><span>닫기</span></Link>
                <Link to="/myticket" id='closeText'><span>내 티켓으로 이동</span></Link>
            </div>
        </div>
  );
}

function BackBtn() {
    return (
        <Link to="/fail" style={{
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
        case 1: DOW = '월'; break;
        case 2: DOW = '화'; break;
        case 3: DOW = '수'; break;
        case 4: DOW = '목'; break;
        case 5: DOW = '금'; break;
    }
    return `오늘(${DOW})`;
}

export default Ticket_success;