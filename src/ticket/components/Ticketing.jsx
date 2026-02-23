import { useEffect, useState } from 'react';
import backButton from '../../assets/back-icon.svg';
import notification_icon from '../../assets/notification-icon.svg';
import date_icon from '../../assets/date-icon.svg';
import time_icon from '../../assets/time-icon.svg';

import './Ticketing.css';
import InfoModal from './InfoModal.jsx';
import FailPopup from './SoldOutPopup.jsx';

function Header({ setInfo }) {
  return (
    <header>
      <div className="back_ticketing">
        <button onClick={() => console.log(1)} className="back-btn">
          <img src={backButton} alt="backButton-svg" />
        </button>
        <p>티켓팅</p>
      </div>

      <span className="question">날짜와 시간을 선택해주세요</span>

      <button onClick={() => setInfo(true)} className="info-button">
        <img src={notification_icon} alt="" />
        <span className="white-text">티켓팅 정보</span>
      </button>

      <div className="divider"></div>
    </header>
  );
}
function Main({ pick_Btn, setPick_Btn, BFTicket, DinTicket }) {
  const date = new Date();
  const MonthLastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
  ).getDate();

  const K_Day = ['일', '월', '화', '수', '목', '금', '토'];
  const [day, setDay] = useState(date.getDate());
  const [week, setWeek] = useState(date.getDay() + 5);
  const [hour, SetHour] = useState(date.getHours());

  function eventdisable(plus) {
    // 오늘 week, 내일 week+1 에서 +1을 위해 plus 인수 받기
    // num == 0 또는 num == 6이면 true 리턴
    const num = (week + plus) % 7;
    if (num == 0 || num == 6) {
      return true;
    } else return false;
  }
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
      <div className="date_time-section">
        <section className="date-section">
          <div className="main-tag">
            <img src={date_icon} alt="" />
            <span>날짜 선택</span>
          </div>

          <div className="date-choice">
            <button
              onClick={eventdisable(0) ? null : () => eventPick(0)}
              className={`btn date-btn ${eventdisable(0) ? 'disable_btn' : pick_Btn[0] ? 'select_btn ' : ''}`}
            >
              <span
                className={
                  eventdisable(0)
                    ? 'disable_text'
                    : pick_Btn[0]
                      ? 'select_text'
                      : ''
                }
              >
                오늘
              </span>
              <span
                className={`grayText ${eventdisable(0) ? 'disable_text' : pick_Btn[0] ? 'select_text' : ''}`}
              >
                {day}일 ({K_Day[week]})
              </span>
            </button>

            <button
              onClick={eventdisable(1) ? null : () => eventPick(1)}
              className={`btn date-btn ${eventdisable(1) ? 'disable_btn' : pick_Btn[1] ? 'select_btn ' : ''}`}
            >
              <span
                className={
                  eventdisable(1)
                    ? 'disable_text'
                    : pick_Btn[1]
                      ? 'select_text'
                      : ''
                }
              >
                내일
              </span>
              <span
                className={`grayText ${eventdisable(1) ? 'disable_text' : pick_Btn[1] ? 'select_text' : ''}`}
              >
                {day + 1 > MonthLastDay ? 1 : day + 1}일 (
                {K_Day[(week + 1) % 7]})
              </span>
            </button>
          </div>
        </section>
        <section className="time-section">
          <div className="main-tag">
            <img src={time_icon} alt="" />
            <span>시간 선택</span>
          </div>

          <div className="time-choice">
            <button
              onClick={() => eventPick(2)}
              className={`btn time-btn ${pick_Btn[2] ? 'select_btn ' : ''}`}
            >
              <span className={pick_Btn[2] ? 'select_text' : ''}>조식</span>
              <span
                className={`grayText ${pick_Btn[2] ? 'select_text' : 'grayText'}`}
              >
                07 : 30 ~
              </span>
              <p className={BFTicket == 0 ? 'zero_ticket' : null}>
                잔여 {BFTicket}장
              </p>
            </button>
            <button
              onClick={() => eventPick(3)}
              className={`btn time-btn ${pick_Btn[3] ? 'select_btn ' : ''}`}
            >
              <span className={pick_Btn[3] ? 'select_text' : ''}>석식</span>
              <span
                className={`grayText ${pick_Btn[3] ? 'select_text' : 'grayText'}`}
              >
                17 : 20 ~
              </span>
              <p className={DinTicket == 0 ? 'zero_ticket' : null}>
                잔여 {DinTicket}장
              </p>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
function Foot({ setPopUp, pick_Btn, BFTicket, DinTicket }) {
  // 경우의 수는 오늘 조식(1), 오늘 석식(2), 내일 조식(3), 내일 석식(4) 총 4개
  const [pick, setPick] = useState(0);

  function pickTicket() {
    if (pick_Btn[0] && pick_Btn[2]) {
      setPick(1); //오늘 조식
    } else if (pick_Btn[0] && pick_Btn[3]) {
      setPick(2); //오늘 석식
    } else if (pick_Btn[1] && pick_Btn[2]) {
      setPick(3); //내일 조식
    } else setPick(4); //내일 석식
  }
  return (
    <footer>
      <button
        onClick={() => {
          setPopUp(true);
          console.log(pick_Btn);
        }}
      >
        <span className="FTitle">티켓팅하기</span>
      </button>
    </footer>
  );
}
function Ticketing() {
  //티켓팅 정보창 띄우기 요ㅇ
  const [info, setInfo] = useState(false);

  //소진 팝업창
  const [popUp, setPopUp] = useState(false);

  // pick_Btn는 날짜 선택 버튼 2개, 시간 버튼 2개
  const [pick_Btn, setPick_Btn] = useState([false, false, false, false]);

  //DB에서 조식, 석식 티켓 수량 받아와서 state로 저장
  const [BFTicket, setBFTicket] = useState(1);
  const [DinTicket, setDinTicket] = useState(0);
  return (
    <div id="ticketing">
      {info ? <InfoModal setInfo={setInfo} /> : null}
      {popUp ? <FailPopup setPopUp={setPopUp} /> : null}
      <Header setInfo={setInfo} />
      <Main
        pick_Btn={pick_Btn}
        setPick_Btn={setPick_Btn}
        BFTicket={BFTicket}
        DinTicket={DinTicket}
      />
      <Foot
        setPopUp={setPopUp}
        pick_Btn={pick_Btn}
        BFTicket={BFTicket}
        DinTicket={DinTicket}
      />
    </div>
  );
}

export default Ticketing;
