import styled from "styled-components";
import {QRCodeSVG} from 'qrcode.react';

import QR from "/assets/img/QR_source.svg";

function View_qr({setIsOpen}) {

    return (
        <>
            <Modal>
                <ModalContent>
                    <QRCodeSVG value="https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000232144&t_page=%ED%86%B5%ED%95%A9%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC%ED%8E%98%EC%9D%B4%EC%A7%80&t_click=%EA%B2%80%EC%83%89%EC%83%81%ED%92%88%EC%83%81%EC%84%B8&t_search_name=%ED%88%AC%EC%BF%A8%ED%8F%AC%EC%8A%A4%EC%BF%A8&t_number=7&dispCatNo=1000001000200010009&trackingCd=Result_7" style={{
                        width: 272,
                        height: 272
                    }}/>
                    <BtnSet>
                        <CloseBtn onClick={() => setIsOpen(false)}>닫기</CloseBtn>
                        <CancleBtn onClick={() => { setIsOpen("CANCLE");}}>티켓 취소</CancleBtn>
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

    background-color: #f9f9ff;
    padding: 24px 17px 17px 17px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

`;

const BtnSet = styled.div`
    display: flex;

    margin-top: 21px;
    padding: 0;

    gap: 10px;
    &:hover {
        cursor: pointer;
    }
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
    &:hover {
        cursor: pointer;
    }
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
    &:hover {
        cursor: pointer;
    }
`;



export default View_qr;