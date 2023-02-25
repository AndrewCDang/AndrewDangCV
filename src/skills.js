// Skills page component

import Skill from './skill.js';
import {useState} from 'react';

function Skills() {
    // Creating array of objects detailing name of skill and skill rating
    const [techStack, setTechStack] = useState([
      { skill: "HTML", rating: 5 },
      { skill: "CSS", rating: 4 },
      { skill: "Javascript", rating: 3 },
      { skill: "Bootstrap", rating: 4 },
      { skill: "React", rating: 3 },
    //   { skill: "Express", rating: 1 },
    //   { skill: "MongoDB", rating: 1 },
    ]);
    // Creating array of objects detailing name of skill and skill rating
    const [designStack, setDesignStack] = useState([
      { skill: "Figma", rating: 4 },
      { skill: "Photoshop", rating: 5 },
      { skill: "Illustrator", rating: 3 },
      { skill: "Indesign", rating: 4 },
      { skill: "Rhino", rating: 5 },
      { skill: "Blender", rating: 3 },
    ]);
  
    return (
      <div className="hidden general-container content-margin bottom-margin">
        <p className="border-bottom border-red heading bold"> Skills</p>
        <p className="subheading2 content-margin2 bold">Tech Stack</p>
        <div className="skills-container">
            {/* Passing prop of objects defined above into individual skill component */}
          <Skill skills={techStack} />
        </div>
        <p className="subheading2 content-margin2 bold">Design Tools</p>
        <div className="skills-container">
          <Skill skills={designStack} />
        </div>
      </div>
    );
  }
export default Skills;