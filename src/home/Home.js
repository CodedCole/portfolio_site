import './Home.css';
import ProjectTile from '../project-tile/ProjectTile'
import GitHubLink from '../github-link/GitHubLink';
import ItchLink from '../itch-link/ItchLink';

// project logos
import destinyCompareSmallLogo from '../images/logos/DestinyCompareLogo.png'
import destinyCompareLargeLogo from '../images/logos/DestinyCompareLargeLogo.svg'
import timeRunnerSmallIcon from '../images/logos/TimeRunnerSmallIcon.png'
import timeRunnerTitleImage from '../images/logos/TimeRunnerTitle.png'
import missionGroundHogSmallIcon from '../images/logos/MissionGroundHogSmallIcon.png'
import missionGroundHogTitleImage from '../images/logos/MissionGroundHogTitle.png'

// screenshots for Destiny Compare
import destinyCompare_homeScreen from '../images/screenshots/HomeScreen.png';

export default function Home() {
    return (
        <div>
            <section id='welcome-section'>
                <svg width="100" height="100">
                    <path
                        d='M 5 95
                        a 45 45 0 0 1 90 0'
                        stroke='#772211'
                        strokeWidth={4}
                        fillOpacity={0}
                    ></path>
                    <circle cx="50" cy="50" r="40" stroke="#ff2211" strokeWidth="4" fillOpacity={0} strokeOpacity={0.5}>
                        <animate
                            attributeName='r'
                            values='20;40;20'
                            dur='5s'
                            repeatCount='indefinite'
                        />
                        <animate
                            attributeName='cx'
                            values='30;70;30'
                            dur='10s'
                            repeatCount='indefinite'
                        />
                        <animate
                            attributeName='cy'
                            values='70;50;70'
                            dur='5s'
                            repeatCount='indefinite'
                        />
                    </circle>
                </svg>
                <h1>Hayden Dewey</h1>
                <h2>Lipscomb University Computer Science Student</h2>
            </section>
            <section id='background'>
                <section className='panel' id='about-section'>
                    <h2>About Me</h2>
                    <p>
                        Lorem ipsum quod pro
                    </p>
                </section>
                <section className='panel' id='projects-section'>
                    <h2>Projects</h2>
                    <ProjectTile projectName={'Destiny Compare'} smallIcon={destinyCompareSmallLogo} largeIcon={destinyCompareLargeLogo} pixelated={false}>
                        <p>
                            <img id='dc_home_screenshot' src={destinyCompare_homeScreen} alt='home screen screenshot' />
                            Child Element
                        </p>
                        <GitHubLink link="https://github.com/CodedCole/Destiny_Compare"/>
                    </ProjectTile>
                    <ProjectTile projectName={'Time Runner'} smallIcon={timeRunnerSmallIcon} largeIcon={timeRunnerTitleImage}>
                        <p>
                            Child Element
                        </p>
                        <GitHubLink link="https://github.com/CodedCole/TimeRunner"/>
                    </ProjectTile>
                    <ProjectTile projectName={'Mission Ground Hog'} smallIcon={missionGroundHogSmallIcon} largeIcon={missionGroundHogTitleImage}>
                        <p>
                            Child Element
                        </p>
                        <ItchLink link="https://codedcole.itch.io/mission-groundhog"/>
                    </ProjectTile>
                    <ProjectTile projectName={'Portfolio'} largeIcon={timeRunnerTitleImage}>
                        <p>
                            Child Element
                        </p>
                        <GitHubLink link="https://github.com/CodedCole/portfolio_site"/>
                    </ProjectTile>
                </section>
            </section>
        </div>
    );
}