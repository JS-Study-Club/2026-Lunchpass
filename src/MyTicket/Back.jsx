import styled from "styled-components";
import BackImg from "../Assets/Back2.svg"
import { useNavigate } from "react-router-dom";

export default function Back(){
    const navigate=useNavigate()

    return(
        <BackContainer>
            <BackButton src={BackImg} onClick={() => navigate("/")} style={{
                heigth: 21
            }}/>My 티켓
        </BackContainer>
    ) 
}

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
`