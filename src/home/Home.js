import './Home.css';
import ProjectTile from '../project-tile/ProjectTile'

import destinyCompareLogo from '../images/DestinyCompareLogo.png'
import timeRunnerTitleImage from '../images/TimeRunnerTitle.png'
import missionGroundHogTitleImage from '../images/MissionGroundHogTitle.png'

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
                        Lipsum quod pro
                    </p>
                </section>
                <section className='panel' id='projects-section'>
                    <h2>Projects</h2>
                    <section className='project-tile'>
                        <img  src={destinyCompareLogo} alt='Destiny Compare Logo' width="40%"></img>
                    </section>
                    <div className='project-tile'>
                        <img className='pixel-img' src={timeRunnerTitleImage} alt='Time Runner Title' width="80%"></img>
                    </div>
                    <div className='project-tile'>
                        <img className='pixel-img' src={missionGroundHogTitleImage} alt='Mission Ground Hog Title' width="80%"></img>
                    </div>
                    <ProjectTile projectName={'Time Runner'} largeIcon={timeRunnerTitleImage}>
                        <p>Child Element</p>
                        <button>Hello</button>
                    </ProjectTile>
                    <p>
                        Lipsum quod pro
                    </p>
                </section>
            </section>
        </div>
    );
}