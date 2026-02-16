import { use, useEffect, useState } from 'react';
import backButton from '../../assets/back-button.svg';
import notification_icon from '../../assets/notification-icon.svg';
import date_icon from '../../assets/date icon.svg';
import time_icon from '../../assets/time icon.svg';

import './Ticketing.css';
import InfoModal from './InfoModal.jsx';

function Header({ setInfo }) {
  return (
    <header>
      <button onClick={() => console.log(1)} className="back-btn">
        <img src={backButton} alt="backButton-svg" />
      </button>

      <button onClick={() => setInfo(true)} className="info-button">
        <img src={notification_icon} alt="" />
        <span className="white-text">티켓팅 정보</span>
      </button>
    </header>
  );
}
function Main() {
  useEffect(() => {});
  const date = new Date();

  const K_Day = ['일', '월', '화', '수', '목', '금', '토'];

  const [day, setDay] = useState(date.getDate());
  const [week, setWeek] = useState(date.getDay());

  // pick_Btn는 날짜 선택 버튼 2개, 시간 버튼 2개
  const [pick_Btn, setPick_Btn] = useState([false, false, false, false]);

  function eventPick(index) {
    const btnSelect =
      index < 2
        ? [false, false, pick_Btn[2], pick_Btn[3]]
        : [pick_Btn[0], pick_Btn[1], false, false];

    if (pick_Btn[index]) {
      setPick_Btn(btnSelect);
    } else {
      btnSelect[index] = true;
      setPick_Btn(btnSelect);
    }
  }
  return (
    <main>
      <section className="date-section">
        <div className="main-nav">
          <img src={date_icon} alt="" />
          <span className="select_text">날짜 선택</span>
        </div>
        <div className="date-main">
          <button
            onClick={() => eventPick(0)}
            className={`btn first-btn ${pick_Btn[0] ? 'select_btn ' : ''}`}
          >
            <span>오늘</span>
            <span>
              {day}일 ({K_Day[week]})
            </span>
          </button>

          <button
            onClick={() => eventPick(1)}
            className={`btn second-btn ${pick_Btn[1] ? 'select_btn ' : ''}`}
          >
            <span>내일</span>
            <span>
              {day + 1}일 ({K_Day[week + 1]})
            </span>
          </button>
        </div>
      </section>
      <section className="time-section">
        <div className="main-nav">
          <img style={{ width: '21px' }} src={time_icon} alt="" />
          <span className="select_text">시간 선택</span>
        </div>
        <div className="date-main">
          <button
            onClick={() => eventPick(2)}
            className={`btn first-btn ${pick_Btn[2] ? 'select_btn ' : ''}`}
          >
            <span>조식</span>
            <span>07 : 30 ~</span>
          </button>
          <button
            onClick={() => eventPick(3)}
            className={`btn second-btn ${pick_Btn[3] ? 'select_btn ' : ''}`}
          >
            <span>석식</span>
            <span>17 : 20 ~</span>
          </button>
        </div>
      </section>
    </main>
  );
}
function Foot() {
  return (
    <footer>
      <button onClick={() => console.log(7)}>
        <span className="white-text" style={{ marginLeft: '0px' }}>
          티켓팅하기
        </span>
      </button>
    </footer>
  );
}
function Ticketing() {
  const [info, setInfo] = useState(false);
  return (
    <div id="ticketing">
      {info ? <InfoModal setInfo={setInfo} /> : null}
      <Header setInfo={setInfo} />
      <Main />
      <Foot />
    </div>
  );
}

export default Ticketing;
