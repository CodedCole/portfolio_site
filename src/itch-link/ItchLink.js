import './ItchLink.css';
import itchLogo from '../images/logos/itchio-logo-white.svg';

export default function ItchLink({ link }) {
    return (
        <a className='itch-link' href={link} target='_blank'>
            View on
            <img className='itch-icon' src={itchLogo}/>
        </a>
    );
}