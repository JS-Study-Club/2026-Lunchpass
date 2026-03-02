import styled from "styled-components";
import BackImg from "/assets/img/Back2.svg"
import { useNavigate } from "react-router-dom";
import Category from "../Components/Category.jsx"
import HaveCancelTicket from "../Components/HaveCancelTicket.jsx"
import { useState } from "react";

export default function CancelTicketPage(){
    const navigate=useNavigate()
    const [activeTab, setActiveTab] = useState('전체');
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <BackContainer>
                <BackButton src={BackImg} onClick={() => navigate("/myticket")}/>취소한 티켓
                <Icon src="/assets/img/ToolTip.svg" onClick={() => setIsOpen(!isOpen)}></Icon>
                {isOpen && (
                <TooltipWrapper>
                    <TooltipBox>
                        - 회수 요청은 취소 후 1시간 내에 가능합니다.<br/>
                        - 식사 시간 15분 전, 모든 취소 티켓이 티켓팅 <br/>
                        재고로 전환 되며 회수가 불가 해집니다.
                        <Arrow /> {/* 뾰족한 삼각형 부분 */}
                    </TooltipBox>
                </TooltipWrapper>
                
                )}
            </BackContainer>
            <Category setActiveTab={setActiveTab} activeTab={activeTab}/>
            <TicketBoxContainer>
                <HaveCancelTicket Selection={"Cancel"} Category={activeTab}/>
            </TicketBoxContainer>
            <BottomSpacer />
        </>
    ) 
}

const Icon=styled.img`
    margin-left: 2px;
    
    &:hover {
        cursor: pointer;
    }
`

const TooltipWrapper = styled.div`
  position: relative; // 툴팁 위치의 기준점!
  display: flex;
//   margin-left: 5px;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`;

const TooltipBox=styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 273px;
    height: 73px;
    left: -56px;
    top: 17px;
    padding: 13px 15px 12px 15px;
    z-index: 100;
    border-radius: 8px;
    background-color:rgb(26, 26, 31);
    opacity: 50%;
    font-family: Pretendard;
    font-size: 13px;
    font-weight: 300;
    color: #ffffff;
`

const Arrow = styled.div`
    position: absolute;
    top: -10px;     
    left: 38px;
    border-style: solid;
    border-left: 10px solid transparent;  /* 왼쪽: 투명 */
    border-right: 10px solid transparent; /* 오른쪽: 투명 */
    border-bottom: 10px solid white;
    opacity: 100%;
    border-bottom: 10px solid rgba(26, 26, 31);
`

const TicketBoxContainer=styled.div`
    padding-top: 3px;
    font-family: Pretendard;
    font-weight: 500;
    font-size: 14px;
    color: #4E4E4E;
    width: 350px;
`

const BottomSpacer = styled.div`
  height: 80px; // Menu의 높이와 동일하게 설정
`;

const BackContainer = styled.span`
    heigth: 21px;
    display: flex;
    align-items: center;
    font-family: Pretendard;
    font-size: 18px;
    color: #1A1A1F;
    font-weight: 600;
`
const BackButton = styled.img`
    margin: 2px 8px 2px 0;
    &:hover {
        cursor: pointer;
    }
`