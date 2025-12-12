import React from 'react';
import './home.scss';

function Home() {
    return (
        <main className='main-content'>
            <section id='about' className='section'>
                <h2 className='section-heading'>About</h2>
                <div className='section-content'>
                    <p>
                        I'm a software engineer with a passion for building accessible,
                        high-performing web applications. My focus lies in frontend development,
                        where I enjoy crafting user interfaces that are both visually appealing
                        and technically robust.
                    </p>
                    <p>
                        Currently, I work at <span className='highlight'>General Motors</span> where
                        I develop and maintain web applications that power GM's digital presence
                        across Europe, enabling customers to configure and purchase vehicles entirely online.
                    </p>
                    <p>
                        I'm also pursuing my <span className='highlight'>M.S. in Computer Science at Georgia Tech</span>,
                        building on my foundation from Penn State where I earned my B.S. in Information
                        Sciences & Technology with a focus on Design & Development.
                    </p>
                    <p>
                        When I'm not coding, you can find me training Muay Thai,
                        lifting weights, or watching soccer.
                    </p>
                </div>
            </section>

            <section id='experience' className='section'>
                <h2 className='section-heading'>Experience</h2>
                <div className='section-content'>
                    <div className='experience-item'>
                        <div className='experience-date'>2021 — Present</div>
                        <div className='experience-details'>
                            <h3 className='experience-title'>
                                Software Engineer · <span className='company-name'>General Motors</span>
                            </h3>
                            <p className='experience-description'>
                                Develop and maintain multiple websites and web applications that expanded
                                GM's digital presence in Europe, enabling customers to configure and purchase
                                vehicles entirely online. Collaborate cross-functionally with UX/UI designers,
                                product managers, and QA engineers to deliver user-friendly, high-performing
                                solutions within agile sprints. Mentor junior developers and contribute to
                                continuous improvement through documentation and process enhancements.
                            </p>
                            <ul className='tech-tags'>
                                <li>React</li>
                                <li>TypeScript</li>
                                <li>JavaScript</li>
                                <li>REST APIs</li>
                                <li>Jest</li>
                            </ul>
                        </div>
                    </div>

                    <div className='experience-item'>
                        <div className='experience-date'>2020 — 2021</div>
                        <div className='experience-details'>
                            <h3 className='experience-title'>
                                IT Operations Center Technical Analyst · <span className='company-name'>General Motors</span>
                            </h3>
                            <p className='experience-description'>
                                Provided bilingual technical support (English/Spanish) to 100k+ General Motors
                                employees across the US and internationally. Managed high-priority queues and
                                resolved or escalated issues within strict SLAs to minimize production halts.
                                Authored knowledge management articles to help other analysts resolve similar issues.
                            </p>
                            <ul className='tech-tags'>
                                <li>Technical Support</li>
                                <li>ITIL</li>
                                <li>Documentation</li>
                            </ul>
                        </div>
                    </div>

                    <div className='resume-link'>
                        <a href={process.env.PUBLIC_URL + '/pablo_torres_resume.pdf'} download='Pablo_Torres_Resume.pdf'>Download Full Resume →</a>
                    </div>

                </div>
            </section>

            <footer className='site-footer'>
                <p>
                    Built with <a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'>React</a> and
                    deployed on <a href='https://pages.github.com/' target='_blank' rel='noopener noreferrer'>GitHub Pages</a>.
                </p>
            </footer>
        </main>
    );
}

export default Home;
