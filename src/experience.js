// Importing bootstrap accordion
import Accordion from 'react-bootstrap/Accordion';


function Experience(){
    return (
    <div className="hidden resume-container content-margin resume-section">
        <div className="general-container">
            <div className="general-container">
                <p className="border-bottom border-yellow heading darkgreytext bold text-centre">Resume</p>
                <p className="text-centre darkgreytext">My previous experience at an award-winning architectural firm WW+P has made me a quick learner, versatile team player, and bolstered my design/graphical skills. I am excited to bring my abiltiies and experiences to the exciting world of web development.</p>
            </div>
        </div>
            <div className='experience-container'>
            <div className="experience">
                <div className="work first-item">
                    <div className='work-section'>
                        <div className='work-item2'>
                            <p className='subheading2 text-margin0 bold'>Hyperion Dev</p>
                            <p className='greytext text text-margin0'>Dec 2022 -  current</p>
                            <p className='greytext text text-margin0'>London (online)</p>
                        </div>
                        <Accordion defaultActiveKey="1">
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className='graytext'>Description</Accordion.Header>
                                    <Accordion.Body className='caption2'>
                                    Over the past few months of continuously learning and instilling important concepts of programming, I every acquired a high level of proficiency in web programming, with a focus on utilising HTML, CSS, and JavaScript to create dynamic and engaging websites. Additionally, I have honed my expertise in React, enabling me to build sophisticated front-end applications and leveraged version control tools like Git to ensure seamless project management.<br></br><br></br>Moreover, my knowledge extends to advanced concepts such as Redux Toolkit, which allows for efficient state management in complex applications. I am currently expanding my skill set to encompass back-end frameworks such as Express and database technologies like MongoDB, in order to create full stack MERN applications.<br></br><br></br>As a testament to my dedication and hard work, I am excited to share my current portfolio, which showcases a diverse range of projects and applications that demonstrate my newly acquired skills so far. I am passionate about staying at the forefront of web development and am constantly seeking opportunities to learn and grow in this exciting field.
                                    </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    </div>
                    <div className="work gridrow2">
                        <div className='work-section'>
                            <div className='work-item'>
                                <p className='subheading2 text-margin0 bold'>Weston Williamson + Partners</p>
                                <p className='greytext text text-margin0'>May 2021 - Jul 2022 | 1 yr 3 mos</p>
                                <p className='greytext text text-margin0'>London</p>
                            </div>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Description</Accordion.Header>
                                        <Accordion.Body className='caption2'>
                                        I have had the opportunity to work on a diverse range of architectural projects of varying scales and types, including:<br></br><br></br>
                                        •Edinburgh Waverly Station Masterplan, where I developed innovative space-planning solutions to streamline passenger flow and create new social urban spaces at the boundaries and entrances of the station. The goal of this project was to create a world-class station environment that harmoniously reflects the prestige of Edinburgh's UNESCO World Heritage site.<br></br><br></br>
                                        •NEOM high-speed rail project, for which I contributed to the design of stations throughout the 170 km city. My work involved creating graphics, visuals, reports, and researching different approaches to station layout and aesthetics.<br></br><br></br>
                                        •HS2 Burton Green Portal Building, which allowed me to gain technical design stage experience through the coordination of multiple disciplines and the integration of building systems and contractors. I was responsible for the development and refinement of detailed plans and section drawings.<br></br><br></br>
                                        •Ningbo Xiangshan Citizen's Square competition project, where I conducted research into the city's culture, history, and urban conditions to inform early master-plan proposals for the development of a new major public space in the city.<br></br><br></br>
                                        •Hudayriyat Island Cycle Shade structure competition project, which required a quick and efficient workflow due to time and resource constraints. I participated in the design of cycle shading proposals, incorporating Saudi mashrabiya patterns and modular construction as key requirements.<br></br><br></br>
                                        •Residential project/CEO's house, which I assisted with during my off-hours. This project significantly enhanced my understanding of building regulations and planning applications as I was responsible for creating a document demonstrating how the development met statutory requirements.<br></br><br></br>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div className="work gridrow3">
                        <div className='work-section'>
                            <div className='work-item'>
                                <p className='subheading2 text-margin0 bold'>Weston Williamson + Partners</p>
                                <p className='greytext text text-margin0'>Jan 2020 - Aug 2020 | 8 mos</p>
                                <p className='greytext text text-margin0'>London</p>
                            </div>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Description</Accordion.Header>
                                        <Accordion.Body className='caption2'>
                                        During my semester placement, I had the opportunity to assist in the delivery of several high-profile projects at the concept stage, including Liverpool Street Bishopsgate Station Canopy, Charring Cross development, and London Bridge Station Retail Unit. I was given the responsibility of independently designing proposals and creating design reports for these projects, which greatly improved my software proficiency and design-thinking skills
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div>
                    </div>
            </div>
            <div className="experience2">
                    <div className="work first-item">
                        <div className='work-section'>
                            <div className='work-item'>
                                <p className='subheading2 text-margin0 bold'>The University of Edinburgh</p>
                                <p className='greytext text text-margin0'>Master of Architecture - MArch</p>
                                <p className='greytext text text-margin0'>2017 - 2021</p>
                                <p className='greytext text text-margin0'>First-Class Honours</p>
                                <p className='greytext text text-margin0'>Shortlisted EAA Mckay Medal </p>
                            </div>
                        </div>
                    </div>
                    <div className="work  fixed">
                        <div className='work-section'>
                            <div className='work-item'>
                                <p className='subheading2 text-margin0 bold'>Harris Westminster Sixth Form</p>
                                <p className='greytext text text-margin0'>A-Levels</p>
                                <p className='greytext text text-margin0'>Sep 2015 - Jul 2017</p>
                                <p className='greytext text text-margin0'>2A*s 1B</p>
                                <p className='greytext text text-margin0'>Art Prize</p>
                            </div>
                        </div>
                    </div>
                    <div className="work fixed">
                        <div className='work-section'>
                            <div className='work-item'>
                                <p className='subheading2 text-margin0 bold'>Addey and Stanhope Secondary School</p>
                                <p className='greytext text text-margin0'>GCSE</p>
                                <p className='greytext text text-margin0'>Sep 2010 - Jul 2015</p>
                                <p className='greytext text text-margin0'>10A*s, 2As</p>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
    </div>
    );
}

export default Experience;