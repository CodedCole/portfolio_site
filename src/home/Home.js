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
import dc_ss_implementation from '../images/screenshots/implementation.png';
import dc_ss_compareScreen from '../images/screenshots/ComparePage.png';

export default function Home() {
    return (
        <div>
            <section id='welcome-section'>
                <svg width="100" height="100">
                    <path
                        d='M 5 105
                        l 0 -10
                        a 45 45 0 0 1 90 0
                        l 0 10'
                        stroke='#772211'
                        strokeWidth={4}
                        fillOpacity={0}
                    ></path>
                    <circle r="40" stroke="#ff2211" strokeWidth="4" fillOpacity={0} strokeOpacity={0.5}>
                        <animate
                            attributeName='r'
                            values='0;40;0'
                            calcMode='spline'
                            keySplines='
                                .52 0 .8 1
                                .2 0 .48 1'
                            dur='10s'
                            repeatCount='indefinite'
                        />
                        <animateMotion
                            dur='10s'
                            repeatCount='indefinite'
                            path='M 5 105
                                l 0 -10
                                a 45 45 0 0 1 90 0
                                l 0 10
                                '
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
                            <GitHubLink link='https://github.com/CodedCole/Destiny_Compare' />
                        </div>
                        <div id='dc_requirements_section' className='side-by-side'>
                            <img id='dc_requirements_screenshot' className='screenshot' src={dc_ss_requirements} alt='Jira backlog screenshot' />
                            <div>
                                <h3>Requirements</h3>
                                <p>
                                    Deciding what our project would be was one of the more difficult parts of this assignment, since the professor's guidelines were very open
                                    ended. We settled on making a stat tracker for<cite> Destiny 2</cite>. I recommended this to the team because I knew that the Bungie.net API 
                                    has comprehensive documentation and I enjoy playing the game. A Jira backlog was filled in with what we wanted the tracker to do.
                                </p>
                            </div>
                        </div>
                        <div id='dc_design_section' className='side-by-side reverse'>
                            <img id='dc_design_screenshot' className='screenshot' src={dc_ss_design} alt='Figma UI design screenshot' />
                            <div>
                                <h3>Design</h3>
                                <p>
                                    In the design phase of the project we put together multiple UI ideas using Figma and discussed how we would achieve certain functionality.
                                    We decided that a simple home page and splitting the stats page into sections was the best route for UI. For functionality, a wrapper for
                                    Bungie.net would need to be made, so that the API was easier to use and that there was less clutter in the front end logic.
                                </p>
                            </div>
                        </div>
                        <div id='dc_home_section' className='side-by-side'>
                            <img id='dc_implementation_screenshot' className='screenshot' src={dc_ss_implementation} alt='VS Code screenshot of my Bungie.net Wrapper' />
                            <div>
                                <h3>Implementation</h3>
                                <p>
                                    The implementation consisted of three main parts, the front end visuals, the front end logic, and the Bungie.net API wrapper.
                                    My part of this phase was making some of the home page UI and creating the wrapper for Bungie.net. 
                                    The wrapper was built to send requests on behalf of the front end and repackage API responses into a form that was easier for the front end to use.
                                </p>
                            </div>
                        </div>
                        <div id='dc_compare_section' className='side-by-side reverse'>
                            <img id='dc_compare_screenshot' className='screenshot' src={dc_ss_compareScreen} alt='compare screen screenshot' />
                            <div>
                                <h3>Presentation</h3>
                                <p>
                                    At the end of the semester, our team had to present what we had achieved in a little less than a month. We showcased Destiny Compare
                                    and its ability to retrieve stats for a player that the user searched for. We didn't complete the compare part of Destiny Compare in the time we
                                    had, but we weren't far from getting that working.
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
                                <br /><br />
                                The game is currently built using the Unity game engine, but I am currently learning Unreal Engine at school and will be porting the game over
                                as I have time.
                            </p>
                            <GitHubLink link="https://github.com/CodedCole/TimeRunner" />
                        </div>
                        <div>
                            <h3>How it Began</h3>
                            <p>
                                The idea for this game began during Brackeys Game Jam, whose theme was 'An end is a new beginning'. Though unable to participate due to schoolwork
                                that week, it inspired me to make this game. So instead of being a game jam game, it became my project for the summer of 2023.
                            </p>
                        </div>
                        <div>
                            <h3>Building a Future Past</h3>
                            <p>
                                With an idea stuck in my head, the most stuck an idea has ever been in my head, I had to find some way to start creating. I began using a worldbuilding
                                tool and started to create the story for Time Runner. I made characters and creatures. I made cities and histories. I made rival coorporations along with
                                their gadgets and inventions. I made a time travel theory for the scientists to discover. Yet, I had barely scratched the surface of building this world. 
                                I had just enough to put a player into it.
                            </p>
                        </div>
                        <div>
                            <h3>Creating a Game</h3>
                            <p>
                                When it came to the game mechanics, I had them all planned out. There would be inventory management, projectile shooting, quests, and procedural
                                generation. I tried to design all these for a game controller, while still supporting keyboard and mouse. 
                                I wanted the game to have a rogue-like feel, so it needs some procedurally generated arcologies for the player to explore. For those who don't know, an
                                arcology is a single building holding the population of a city and is self-sufficient, thus it needs no help from the outside world. Everything from power
                                to food production is handled within the building. 
                            </p>
                            <p>
                                Generating an arcology is almost like generating a city, but there are some distinct
                                features of an arcology (at least the ones I have in mind for Time Runner) that make them quite different. There is no need to worry about how the
                                terrain because it is an indoor environment, but the layout also must be consistent between levels. 
                                Each of the rooms and 'sub-buildings' should have variety, but they should feel like they were meant to be together since the arcology is a single construction.
                                I decided to draw templates for how each level of the arcology should be
                                laid out and have seperate generators for each zone in the layout. These generators would determine where doors would be and setup parameters for the
                                algorithm below.
                            </p>
                        </div>
                        <div>
                            <h3>Exploration: Wave Function Collapse</h3>
                            <p>
                                I knew that there was still a lot I could learn in procedural generation. I found myself down a very beneficial rabbit trail, making my own version
                                of the
                                <a href='https://github.com/mxgmn/WaveFunctionCollapse' target='_blank' rel='noreferrer' className='in-text-link'> Wave Function Collapse </a>
                                algorithm. I was able to combine WFC with my level generator above. The level generator laid the foundation and
                                set parameters for the structure of the level and WFC was used to decorate and tweak it. An interesting side effect of using WFC to decorate the
                                level is that extra attention is needed while designing a level's tilesets and how they transition from one to the other. Depending on the tileset, WFC can reach states
                                where it gets stuck because there is no possible solution for how it collapsed. When this happens, WFC needs to be restarted. To minimize the impact
                                of restarts during generation, I split the level into zones. Each is decorated by WFC individually, so a restart only affects a single zone.
                            </p>
                        </div>
                        <div>
                            <h3>End of the Summer</h3>
                            <p>
                                With the summer coming to a close, it was time to get the project in a state where it was more polished and I could come
                                back to it later as I have time between school, homework, and friends. Bugs were fixed, placeholder art was replaced, sound effects were added, and
                                polish was added to all the existing elements of the game. At the end of the summer, there was a fully implemented system for procedural
                                generation, inventory management, some cool shaders built with Unity's Shader Graph, and the core gameplay loop.
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
                                <br /><br />
                                It was then submitted to the game jam through Itch.io
                            </p>
                            <ItchLink link="https://codedcole.itch.io/mission-groundhog" />
                        </div>
                    </ProjectTile>
                </section>
                <p>
                    Link to portfolio repo
                </p>
                <GitHubLink link="https://github.com/CodedCole/portfolio_site" light='true'/>
            </section>
        </div>
    );
}