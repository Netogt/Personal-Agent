import { useState } from 'react';
import '../css/Header.css';
import MenuSvg from '../svg/MenuSvg';
import XSvg from '../svg/XSvg'
import changeWindowSize from '../utils/changeWindowSize';
import { reloadWindowPosition } from '../utils/changeWindowPosition';


export default function Header() {
    const [asideActive, setAsideActive] = useState<boolean>(false);
    const sideMenu = () => {
        if(asideActive){
            setAsideActive(false);
            changeWindowSize(385, 600);
        }else{

            setAsideActive(true);
            changeWindowSize(585, 600); 
        }

        reloadWindowPosition()


    };

    return (
        <header className='chat-header'>
            <button onClick={sideMenu}>
                <MenuSvg />
            </button>
            <h1>Assistente Persoal</h1>
            <button>
                <XSvg />
            </button>
        </header>
    );
}