import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import loading_icon from "./assets/loading_icon.svg";
import BackButton from "./assets/back_button.svg";

import "./Loading_page.css";

function Loading_page() {
    return (
        <div id='Main'>
            <Link to="/fail"><BackBtn/></Link>
        </div>
    );
}

function BackBtn() {
    return (
        <img src={BackButton} alt="뒤로가기버튼" id='topBack'
        style={{
        position: 'absolute',
        top: '9%',
        left: '20px'}}/>
    );
}

export default Loading_page;