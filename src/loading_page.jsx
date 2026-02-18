import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import loading_icon from "./assets/loading_icon.svg";
import BackButton from "./assets/back_button.svg";

import "./Loading_page.css";

function Loading_page() {
    return (
        <div className='Main'>
            <BackBtn/>
            <div id='loading'>
                <img src={loading_icon} alt="로딩아이콘" id='loadingIcon'/>
                <span id='loadingMessage'>예매 화면을 불러오는 중입니다</span>
                <span id='loadingSubMessage'>잠시만 기다려주세요</span>
            </div>
        </div>
    );
}

function BackBtn() {
    return (
        <Link to="/" style={{
            position: 'absolute',
            top: '10%',
            left: '20px',
            zIndex: '10'}}>
            <img src={BackButton} alt="뒤로가기버튼"/>
        </Link>
    );
}

export default Loading_page;