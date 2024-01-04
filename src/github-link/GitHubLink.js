import './GitHubLink.css';
import githubLogo from '../images/logos/github-mark-white.svg'

export default function GitHubLink({ link }) {
    return (
        <a className='github-link' href={link} target="_blank" rel='noreferrer'>
            <img className='github-icon' src={githubLogo} alt='GitHub'/>
            View GitHub Repo
        </a>
    );
}