import './GitHubLink.css';
import githubLogo from '../images/logos/github-mark-white.svg';
import githubLogoLight from '../images/logos/github-mark.svg';

export default function GitHubLink({ link, light=false }) {
    return (
        <a className={`github-link ${light ? 'light' : ''}`} href={link} target="_blank" rel='noreferrer'>
            <img className='github-icon' src={light ? githubLogoLight : githubLogo} alt='GitHub'/>
            View GitHub Repo
        </a>
    );
}