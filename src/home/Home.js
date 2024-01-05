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
                        I am a hard working computer science student at Lipscomb University in Nashville, TN. Learning new skills or topics is one of my favorite things to do.
                        I dabble in many areas of computing, from machine learning and procedural generation, to graphics and physics simulation. I have also tried worldbuilding,
                        digital art and animation, sound design, and music composition. My favorite topic that brings all of these together is developing video games. I love to
                        be creative and solve problems.
                    </p>
                </section>
                <section className='panel' id='projects-section'>
                    <h2>Projects</h2>
                    <ProjectTile projectName={'Destiny Compare'} smallIcon={dc_logo_small} largeIcon={dc_logo_large} pixelated={false}>
                        <div id='dc_goal_section'>
                            <h3>Goal of the Project</h3>
                            <p>
                                This project was created for a group project assignment in Introduction to Software Engineering. The goal of the assignment was to learn
                                how real software projects are completed, starting in the requirements phase through implementation and release. The end result of the semester
                                is a slightly overscoped product that allows for users to look up basic statistics about players of the video game <cite>Destiny 2</cite>. The
                                project began at the end of October 2023 and the final product was due at the beginning of December 2023.
                            </p>
                            <GitHubLink link='https://github.com/CodedCole/Destiny_Compare'/>
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
                        <div id='dc_home_section' className='side-by-side'>
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
                        <div id='tr_overview_section'>
                            <h3>Overview</h3>
                            <p>
                                Time Runner was sprung from a game jam idea into a whole game and worldbuilding project that will take a while to complete. The idea for the
                                game is an isometric perspective singleplayer extraction shooter. There are multiple arcologies that have taken a turn for the worse and are
                                in complete ruin, after the fate virus infected most security and military robots, resulting in a loss of the majority of the citizens of these
                                arcologies and around the world. The player is a time runner that must use a prototype time machine to gather supplies in the past for the
                                survivors in the present.
                                <br/><br/>
                                The game is currently built using the Unity game engine, but I am currently learning Unreal Engine at school and will be porting the game over
                                as I have time.
                            </p>
                            <GitHubLink link="https://github.com/CodedCole/TimeRunner"/>
                        </div>
                        <div>
                            <h3>How it Began</h3>
                            <p>
                                The idea for this game began during a game jam I was unable to take part in due to homework being piled on top of me that week. I don't remember
                                what the theme for the jam was, but I do remember how attached I got to this game idea. It became my project for the summer of 2023.
                            </p>
                        </div>
                        <div>
                            <h3>Building a Future Past</h3>
                            <p>
                                With an idea stuck in my head, the most stuck an idea has ever been in my head, I had to find some way to start creating. I began looking for
                                tools to assist in worldbuilding and started to create an entire wiki for Time Runner. I made characters and creatures. I made locations and 
                                events. I made gadgets and rival coorporations. Yet, I had barely scratched the surface of building a world, but I only had a finite amount of
                                time to make progress and I had just enough to start creating a game in this world.
                            </p>
                        </div>
                        <div>
                            <h3>Creating a Game</h3>
                            <p>
                                When it comes to the game mechanics, I had them all planned out. There would be inventory management, projectile shooting, quests, and procedural
                                generation. I would try to use these mechanics and the world I had built to emphasize two things, the cost of short-sighted greed and the benefit 
                                in helping others.
                            </p>
                        </div>
                        <div>
                            <h3>Exploration: Wave Function Collapse</h3>
                            <p>
                                Implementing all these mechanics was fun, but I knew that there was still a lot I could learn in procedural generation. I found myself down a very
                                beneficial rabbit trail, making my own version of the 
                                <a href='https://github.com/mxgmn/WaveFunctionCollapse' target='_blank' rel='noreferrer' className='in-text-link'> Wave Function Collapse </a>
                                algorithm. With this new tool, I was able to combine it with a map generator, which I had already built. My map generator laid the foundation and
                                set parameters for the structure of the level and WFC was used to decorate and tweak it. An interesting side effect of using WFC to decorate the
                                level is that extra attention is given to the level's tilesets and how they transition from one to the other. Also to speed up the process of WFC,
                                I split the level into rooms, which would each be decorated by WFC one at a time. This let WFC get a collision and reset without needing to redo
                                the entire level.
                            </p>
                        </div>
                        <div>
                            <h3>Running Out of Time</h3>
                            <p>
                                With the summer coming to a close, It was time to get the project in a state where I could be proud of the work that I did, and be able to come
                                back to it later as I have time between school, homework, and friends. Bugs were fixed, placeholder art was replaced, sound effects were added, and
                                polish was added about every part of the game that was close to done. At the end of the summer, there was a fully implemented system for procedural
                                generation, inventory management, some cool shaders built with Unity's Shader Graph, and the core gameplay loop, with entering a level and extracting
                                loot.
                            </p>
                        </div>
                    </ProjectTile>
                    <ProjectTile projectName={'Mission Groundhog'} smallIcon={mgh_logo_small} largeIcon={mgh_logo_large}>
                        <div id='mgh_overview_section'>
                            <h3>Overview</h3>
                            <p>
                                Mission Groundhog was developed in one week for the Brackeys 2020.2 game jam. While being a quickly put together and small project, it is still one
                                that I am very proud of, because it challenged me to stay on schedule and not to overscope the project. I completed it in time with all the mechanics
                                and content I wanted.
                                <br/><br/>
                                It was then submitted to the game jam through Itch.io
                            </p>
                            <ItchLink link="https://codedcole.itch.io/mission-groundhog"/>
                        </div>
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