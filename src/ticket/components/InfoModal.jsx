import closeButton from "/assets/img/close-button.svg";
import "./InfoModal.css";
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

const Modal = styled.div`
  width: 350px;
  height: 466px;
  border-radius: 10px;
  background: #f9f9ff;
  overflow: hidden;
  position: relative;

  top: 189px;
  left: 20px;
`;

const Head = styled.div`
  width: 350px;
  height: 48px;
  position: relative;
`;

const High_Frame = styled.div`
  width: 310px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  top: 20px;
  left: 20px;
`;

const High_Frame_Span = styled.span`
  color: #1a1a1f;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

const High_Frame_Button = styled.button`
  width: 20px;
  height: 20px;
  padding: 10px;
  border: none;
  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const High_Frame_Img = styled.img`
  width: 12px;
  height: 12px;
`;

const Dividing_Line = styled.div`
  width: 316px;
  height: 2px;
  background-color: #9b9baa;
  opacity: 0.5;
  position: absolute;
  top: 49px;
  left: 17px;
`;
function InfoModal({ setInfo }) {
  return (
    <Blur>
      <Modal>
        <Head>
          <High_Frame>
            <High_Frame_Span>티켓팅 정보</High_Frame_Span>
            <High_Frame_Button onClick={() => setInfo(false)}>
              <High_Frame_Img src={closeButton} alt="" />
            </High_Frame_Button>
          </High_Frame>
          <div className="dividing_line"></div>
        </Head>
      </Modal>
    </Blur>
  );
}

export default InfoModal;
