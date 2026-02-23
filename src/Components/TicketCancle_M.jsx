import styled from "styled-components";

function TicketCancle({setIsOpen}) {
    return (
        <>
            <Modal>
                <ModalContent>
                    <MessageSet>
                        <MainMessage>티켓을 취소 하시겠습니까?</MainMessage>
                        <SubMessage>다음 예매시간 전까지 회수 요청 할 수 있습니다</SubMessage>
                    </MessageSet>
                    
                    <BtnSet>
                        <CloseBtn onClick={() => setIsOpen(false)}>닫기</CloseBtn>
                        <CancleBtn onClick={() => {setIsOpen(false); alert("티켓 취소 실행");/*티켓 취소 로직 실행*/}}>티켓 취소</CancleBtn>
                    </BtnSet>
                </ModalContent>
            </Modal>
        </>
    );
}

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    margin: 0;
    padding: 0;

    background-color: rgba(0,0,0,0.5);

    z-index: 11;
`;
const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 320px;
    height: 168px;

    padding: 35px 0 16px 0;

    background-color: #f9f9ff;
    border-radius: 10px;
`;

const MessageSet = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 8px 0;

    gap: 6px;
`;
const MainMessage = styled.span`
    font-family: 'Pretendard';
    font-size: 18px;
    font-weight: 500;
    color: #1a1a1f;
`;
const SubMessage = styled.span`
    font-family: 'Pretendard';
    font-size: 13px;
    font-weight: 400;
    color: #9b9baa;
`;

const BtnSet = styled.div`
    display: flex;

    margin-top: 16px;
    padding: 0;

    gap: 10px;
`;
const CloseBtn = styled.button`
    width: 137px;
    height: 42px;
    padding: 0;

    background-color: #E8E8EF;

    border: none;
    border-radius: 10px;

    font-family: 'Pretendard';
    font-size: 15px;
    font-weight: 500;
    color: #757580;
`;
const CancleBtn = styled.button`
    width: 137px;
    height: 42px;
    padding: 0;

    background-color: #4566de;

    border: none;
    border-radius: 10px;

    font-family: 'Pretendard';
    font-size: 15px;
    font-weight: 500;
    color: #f9f9ff;
`;

export default TicketCancle;