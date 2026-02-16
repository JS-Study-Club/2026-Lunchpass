import styled from "styled-components"
import Welcome from "../Home/Welcome.jsx"
import Lunch from "../Home/Lunch.jsx"
import MyTicket from "../Home/MyTicket.jsx"

const BottomSpacer = styled.div`
  height: 80px; // Menu의 높이와 동일하게 설정
`;

export default function HomePage(){
    return(
        <>
            <Welcome username={"이예지"} commute={"통학생"}/>
            <Lunch />
            <MyTicket />
            <BottomSpacer/>
        </>
    )
}
