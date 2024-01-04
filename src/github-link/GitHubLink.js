import './GitHubLink.css';
import githubLogo from '../images/github-mark-white.svg'

export default function GitHubLink({ link }) {
    return (
        <a className='github-link' href={link} target="_blank">
            <img className='github-icon' src={githubLogo} alt='GitHub'/>
            View GitHub Repo
        </a>
    );
}