import './Home.css';
import ProjectTile from '../project-tile/ProjectTile'
import GitHubLink from '../github-link/GitHubLink';
import ItchLink from '../itch-link/ItchLink';

// project logos
import dc_logo_small from '../images/logos/DestinyCompareLogo.png'
import dc_logo_large from '../images/logos/DestinyCompareLargeLogo.svg'
import tr_logo_small from '../images/logos/TimeRunnerSmallIcon.png'
import tr_logo_large from '../images/logos/TimeRunnerTitle.png'
import mgh_logo_small from '../images/logos/MissionGroundHogSmallIcon.png'
import mgh_logo_large from '../images/logos/MissionGroundHogTitle.png'

// screenshots for Destiny Compare
import dc_ss_requirements from '../images/screenshots/Requirements.png';
import dc_ss_design from '../images/screenshots/Design.png';
import dc_ss_homeScreen from '../images/screenshots/HomeScreen.png';
import dc_ss_compareScreen from '../images/screenshots/ComparePage.png';

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
                    <ProjectTile projectName={'Destiny Compare'} smallIcon={dc_logo_small} largeIcon={dc_logo_large} pixelated={false}>
                        <div id="dc_goal_section">
                            <h3>Goal of the Project</h3>
                            <p>
                                This project was created for a group project assignment in Introduction to Software Engineering. The goal of the assignment was to learn
                                how real software projects are completed, starting in the requirements phase through implementation and release. The end result of the semester
                                is a slightly overscoped product that allows for users to look up basic statistics about players of the video game <cite>Destiny 2</cite>. The
                                project began at the end of October 2023 and the final product was due at the beginning of December 2023.
                            </p>
                            <GitHubLink link="https://github.com/CodedCole/Destiny_Compare"/>
                        </div>
                        <div id='dc_requirements_section' className='side-by-side'>
                            <img id='dc_requirements_screenshot' className='screenshot' src={dc_ss_requirements} alt='Jira backlog screenshot' />
                            <div>
                                <h3>Requirements</h3>
                                <p>
                                    Deciding what our project would be and what to do for it was the more difficult parts of this assignment, since it was a very open ended
                                    assignment. We settled on making a stat tracker for a video game. I made the executive decision to use the Bungie.net API to make a
                                    <cite>Destiny 2</cite> stat tracker, because no one else was sure what API to use and I know that the Bungie.net API has lots of 
                                    documentation, also I actually play the game. A Jira backlog was filled in with what we wanted the tracker to do.
                                </p>
                            </div>
                        </div>
                        <div id='dc_design_section' className='side-by-side reverse'>
                            <img id='dc_design_screenshot' className='screenshot' src={dc_ss_design} alt='Figma UI design screenshot' />
                            <div>
                                <h3>Design</h3>
                                <p>
                                    In the design phase of the project we put together multiple UI ideas and discussed how we would achieve certain functionality.
                                </p>
                            </div>
                        </div>
                        <div id="dc_home_section" className='side-by-side'>
                            <img id='dc_home_screenshot' className='screenshot' src={dc_ss_homeScreen} alt='home screen screenshot' />
                            <div>
                                <h3>Home Screen</h3>
                                <p>
                                    Child Element
                                </p>
                            </div>
                        </div>
                        <div id='dc_compare_section' className='side-by-side reverse'>
                            <img id='dc_compare_screenshot' className='screenshot' src={dc_ss_compareScreen} alt='compare screen screenshot' />
                            <div>
                                <h3>Compare Screen</h3>
                                <p>
                                    Child Element
                                </p>
                            </div>
                        </div>
                    </ProjectTile>
                    <ProjectTile projectName={'Time Runner'} smallIcon={tr_logo_small} largeIcon={tr_logo_large}>
                        <p>
                            Child Element
                        </p>
                        <GitHubLink link="https://github.com/CodedCole/TimeRunner"/>
                    </ProjectTile>
                    <ProjectTile projectName={'Mission Ground Hog'} smallIcon={mgh_logo_small} largeIcon={mgh_logo_large}>
                        <p>
                            Child Element
                        </p>
                        <ItchLink link="https://codedcole.itch.io/mission-groundhog"/>
                    </ProjectTile>
                    <ProjectTile projectName={'Portfolio'} largeIcon={tr_logo_large}>
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