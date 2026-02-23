import styled from "styled-components";

function Retrieval({setIsOpen}){
    return (
        <>
            <Modal>
                <ModalContent>
                    <Message>티켓 회수 요청을 하시겠습니까?</Message>
                    <BtnSet>
                        <CloseBtn onClick={() => setIsOpen(false)}>닫기</CloseBtn>
                        <CancleBtn onClick={() => {setIsOpen(false); alert("회수 요청 실행");/*티켓 취소 로직 실행*/}}>회수 요청</CancleBtn>
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

    padding: 19px 0 16px 0;

    background-color: #f9f9ff;
    border-radius: 10px;
`;

const Message = styled.span`
    font-family: 'Pretendard';
    font-size: 18px;
    font-weight: 500;
    color: #1a1a1f;

    padding: 35px;
`;

const BtnSet = styled.div`
    display: flex;
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

export default Retrieval;