import { useState } from "react";
import styled from "styled-components";

import QR from "../Assets/QR_source.svg";

function View_qr() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Modal>
                <ModalContent>
                    <QRImage src={QR} alt="QR Code" />
                    <BtnSet>
                        <CloseBtn onClick={() => setIsOpen(false)}>닫기</CloseBtn>
                        <CancleBtn onClick={() => setIsOpen(false)}>티켓 취소</CancleBtn>
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

    background-color: rgba(0, 0, 0, 0.5);

    margin: 0;
    padding: 0;

    z-index: 11;
`;

const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    box-sizing: border-box;
    width: 320px;
    height: 376px;

    background-color: white;
    padding: 24px 17px 17px 17px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

`;

const QRImage = styled.img`
    width: 272px;
    height: 272px;
`;

const BtnSet = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 21px;
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



export default View_qr;