import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";   

import hourglass from "./assets/hourglass_icon.svg";
import BackButton from "./assets/back_button.svg";

import "./Waiting_page.css";

function Waiting_page() {
    const [watingP, setWatingP] = useState(28);
    const totalP = 100;

    return (
        <div className='Main'>
            <BackBtn/>
            <div id='waiting'>
                <img src={hourglass} alt="hourglass" id='hourglass' />
                <span id='waitingMessage'>접속 대기 중입니다</span>

                <div id='waiting_bar'>
                    <div id='waiting_bar_fill' style={{ maxWidth: `${ (watingP/totalP*100) }%` }}></div>
                </div>

                <div id='waitingSubMessage'>
                    <span>나의 대기 순서</span>
                    <span>{watingP}</span>
                </div>
                
            </div>
            
        </div>

    );

}

function BackBtn() {
    return (
        <Link to="/fail" style={{
            position: 'absolute',
            top: '10%',
            left: '20px',
            zIndex: '10'}}>
            <img src={BackButton} alt="뒤로가기버튼"/>
        </Link>
    );
}

export default Waiting_page;