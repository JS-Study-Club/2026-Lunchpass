import { useEffect, useState } from "react";
import backButton from "/assets/img/back-icon.svg";
import date_icon from "/assets/img/date-icon.svg";
import time_icon from "/assets/img/time-icon.svg";
import { Link } from "react-router-dom";

import "./Ticketing.css";
// import InfoModal from './InfoModal.jsx';
import FailPopup from "./SoldOutPopup.jsx";
import Tooltip from "../hooks/TicketTip.jsx";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  max-width: 390px;

  margin: 0 auto;
  position: relative;

  display: flex;
  flex-direction: column;
  background-color: #f9f9ff;

  overflow: hidden;
  user-select: none;
`;

const Back_Ticketing = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 20px;

  position: absolute;
  top: 84px;
  left: 20px;
`;

const Back_Btn = styled.button`
  width: 12px;
  height: 24px;
  aspect-ratio: 1/2;
  border: none;
  background-color: transparent;
`;
const Question = styled.span`
  width: 196px;
  color: #1a1a1f;
  text-align: center;
  font-size: 18px;
  font-weight: 600;

  position: absolute;
  top: 138px;
  left: 20px;
`;

const Divider = styled.div`
  width: 100vw;
  height: 8px;
  background: #f2f2f8;
  position: absolute;
  top: 214px;
`;

const Date_Time_Section = styled.div`
  display: flex;
  width: 350px;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;

  position: relative;
  top: 30px;
  left: 20px;
`;

const Date_Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
`;

const Main_Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const Main_Tag_Img = styled.img`
  width: 20px;
  height: 20px;
  aspect-ratio: 1/1;
`;

const Main_Tag_Span = styled.span`
  color: #1a1a1f;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;

const Date_Choice = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  align-self: stretch;
`;

const Time_Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
`;

const Time_choice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

function Header() {
  return (
    <header>
      <Back_Ticketing>
        <Link to="/">
          <Back_Btn onClick={() => console.log(1)}>
            <img src={backButton} alt="backButton-svg" />
          </Back_Btn>
        </Link>
        <p className="back-ticketing">티켓팅</p>
      </Back_Ticketing>

      <Question>날짜와 시간을 선택해주세요</Question>
      <Tooltip />
      <Divider></Divider>
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

  const K_Day = ["일", "월", "화", "수", "목", "금", "토"];
  const [day, setDay] = useState(date.getDate());
  const [week, setWeek] = useState(date.getDay());

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
      <Date_Time_Section>
        <Date_Section>
          <Main_Tag>
            <Main_Tag_Img src={date_icon} alt="" />
            <Main_Tag_Span>날짜 선택</Main_Tag_Span>
          </Main_Tag>

          <Date_Choice className="date-choice">
            <button
              onClick={eventdisable(0) ? null : () => eventPick(0)}
              className={`btn date-btn ${eventdisable(0) ? "disable_btn" : pick_Btn[0] ? "select_btn " : ""}`}
            >
              <span
                className={
                  eventdisable(0)
                    ? "disable_text"
                    : pick_Btn[0]
                      ? "select_text"
                      : ""
                }
              >
                오늘
              </span>
              <span
                className={`grayText ${eventdisable(0) ? "disable_text" : pick_Btn[0] ? "select_text" : ""}`}
              >
                {day}일 ({K_Day[week]})
              </span>
            </button>

            <button
              onClick={eventdisable(1) ? null : () => eventPick(1)}
              className={`btn date-btn ${eventdisable(1) ? "disable_btn" : pick_Btn[1] ? "select_btn " : ""}`}
            >
              <span
                className={
                  eventdisable(1)
                    ? "disable_text"
                    : pick_Btn[1]
                      ? "select_text"
                      : ""
                }
              >
                내일
              </span>
              <span
                className={`grayText ${eventdisable(1) ? "disable_text" : pick_Btn[1] ? "select_text" : ""}`}
              >
                {day + 1 > MonthLastDay ? 1 : day + 1}일 (
                {K_Day[(week + 1) % 7]})
              </span>
            </button>
          </Date_Choice>
        </Date_Section>
        <Time_Section>
          <Main_Tag>
            <Main_Tag_Img src={time_icon} alt="" />
            <Main_Tag_Span>시간 선택</Main_Tag_Span>
          </Main_Tag>

          <Time_choice>
            <button
              onClick={() => eventPick(2)}
              className={`btn time-btn ${pick_Btn[2] ? "select_btn " : ""}`}
            >
              <span className={pick_Btn[2] ? "select_text" : ""}>조식</span>
              <span
                className={`grayText ${pick_Btn[2] ? "select_text" : "grayText"}`}
              >
                07 : 30 ~
              </span>
              <p className={BFTicket == 0 ? "zero_ticket" : null}>
                잔여 {BFTicket}장
              </p>
            </button>
            <button
              onClick={() => eventPick(3)}
              className={`btn time-btn ${pick_Btn[3] ? "select_btn " : ""}`}
            >
              <span className={pick_Btn[3] ? "select_text" : ""}>석식</span>
              <span
                className={`grayText ${pick_Btn[3] ? "select_text" : "grayText"}`}
              >
                17 : 20 ~
              </span>
              <p className={DinTicket == 0 ? "zero_ticket" : null}>
                잔여 {DinTicket}장
              </p>
            </button>
          </Time_choice>
        </Time_Section>
      </Date_Time_Section>
    </main>
  );
}
function Foot({ setPopUp, pick_Btn, BFTicket, DinTicket }) {
  // 경우의 수는 오늘 조식(1), 오늘 석식(2), 내일 조식(3), 내일 석식(4) 총 4개
  const [pick, setPick] = useState(0);

  // 18시 이후 오픈
  const [hour, SetHour] = useState(new Date().getHours());

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
        className={hour >= 18 ? "" : "disableTicket"}
        onClick={
          hour >= 18
            ? () => {
                setPopUp(true);
                console.log(pick_Btn);
              }
            : null
        }
      >
        <span className={hour >= 18 ? "FTitle" : "disable_text"}>
          {hour >= 18 ? "티켓팅 하기" : "18:00부터 티켓팅 오픈"}
        </span>
      </button>
    </footer>
  );
}
function Ticketing() {
  //티켓팅 정보창 띄우기 요ㅇ
  // const [info, setInfo] = useState(false);

  //소진 팝업창
  const [popUp, setPopUp] = useState(false);

  // pick_Btn는 날짜 선택 버튼 2개, 시간 버튼 2개
  const [pick_Btn, setPick_Btn] = useState([false, false, false, false]);

  //DB에서 조식, 석식 티켓 수량 받아와서 state로 저장
  const [BFTicket, setBFTicket] = useState(0);
  const [DinTicket, setDinTicket] = useState(0);
  return (
    <MainContainer>
      <div id="ticketing">
        {/* {info ? <InfoModal setInfo={setInfo} /> : null} */}
        {popUp ? <FailPopup setPopUp={setPopUp} /> : null}
        <Header />
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
    </MainContainer>
  );
}

export default Ticketing;
