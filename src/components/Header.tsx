import { useState } from 'react';
import '../css/header.css';
import MenuSvg from '../svg/MenuSvg';
import XSvg from '../svg/XSvg'
import closeWindow from '../utils/closeWIndow';

export default function Header() {

    return (
        <header className='chat-header'>
            <button className="holo-icon-btn">
                <MenuSvg />
            </button>
            <div className="topbar-brand">
                <div className="quantum-beacon"></div>
                <span className="brand-code">AURA-9</span>
            </div>
            <button className="holo-icon-btn danger-hover" onClick={closeWindow}>
                <XSvg />
            </button>
        </header>
    );
}