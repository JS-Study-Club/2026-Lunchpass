import { Link } from 'react-router-dom';

import SuccessIcon from "./assets/success_icon.svg";
import BackButton from "./assets/back_button.svg";

import "./Ticket_success.css";

function Ticket_success() {
    let [day, setDay] = useState("월");
    let [date, setDate] = useState("오늘({day})");


    return (
        <div className='Main'>
            <Link to="/fail"><BackBtn/></Link>
            <div id='success'>
                <img src={SuccessIcon} alt="성공아이콘" id='successIcon'/>
                <span id='successMesssage'>예매 성공!</span>
                <span id='subMessage'>오늘 석식 티켓을 예매하였습니다</span>
            </div>
            <div id='info'>
                <span></span>
            </div>
            <div id='closeSet'>
                <Link to="/fail" id='closeBtn'><span>닫기</span></Link>
                <Link to="/fail" id='closeText'><span>내 티켓으로 이동</span></Link>
            </div>
        </div>
  );
}

function BackBtn() {
    return (
        <img src={BackButton} alt="뒤로가기버튼" id='topBack'
        style={{
        position: 'absolute',
        top: '55px',
        left: '20px'}}/>
    );
}


export default Ticket_success;