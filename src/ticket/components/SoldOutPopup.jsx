import AlertIcon from "/assets/img/Alert-icon.svg";
import styled from "styled-components";

const Blur = styled.div`
  width: 390px;
  height: 844px;
  fill: rgba(0, 0, 0, 0.5);
  opacity: 1;
  background-color: #00000080;

  position: absolute;
  z-index: 1;
`;

const Popup = styled.div`
  width: 318px;
  height: 210px;
  border-radius: 10px;
  background: #f9f9ff;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  top: 317px;
  left: 36px;
`;
const Popup_Img = styled.img`
  width: 58px;
  height: 58px;

  position: absolute;
  top: 33px;
`;

const Popup_Span = styled.span`
  color: #1a1a1f;
  text-align: center;
  font-size: 16px;
  font-weight: 500;

  position: absolute;
  top: 106px;
`;

const Popup_Button = styled.button`
  width: 286px;
  height: 42px;
  padding: 13px 38px;

  border: none;
  border-radius: 10px;
  background: #4566de;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  position: absolute;
  top: 151.5px;
`;
const Popup_P = styled.p`
  color: #f9f9ff;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
`;

export default function SoldOutPopup({ setPopUp }) {
  return (
    <Blur>
      <Popup>
        <Popup_Img src={AlertIcon} alt="" />
        <Popup_Span>잔여 티켓이 모두 소진되었습니다</Popup_Span>
        <Popup_Button
          onClick={() => {
            setPopUp(false);
          }}
        >
          <Popup_P>확인</Popup_P>
        </Popup_Button>
      </Popup>
    </Blur>
  );
}
