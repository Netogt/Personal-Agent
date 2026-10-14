import '../css/Header.css';
import MenuSvg from '../svg/MenuSvg';
import XSvg from '../svg/XSvg'

export default function Header() {
    return (
        <header className='chat-header'>
            <button>
                <MenuSvg />
            </button>
            <h1>Assistente Persoal</h1>
            <button>
                <XSvg />
            </button>
        </header>
    );
}