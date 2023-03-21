// Skills page component

import Skill from './skill.js';
import {useState} from 'react';

function Skills() {
    // Creating array of objects detailing name of skill and skill rating
    const [techStack, setTechStack] = useState([
      { skill: "HTML", rating: 5, type: "tech-skill" },
      { skill: "CSS", rating: 4, type: "tech-skill" },
      { skill: "Javascript", rating: 3, type: "tech-skill" },
      { skill: "Bootstrap", rating: 4, type: "tech-skill" },
      { skill: "React", rating: 3, type: "tech-skill" },
      { skill: "Redux Toolkit", rating: 3, type: "tech-skill" },

      
    //   { skill: "Express", rating: 1 },
    //   { skill: "MongoDB", rating: 1 },
    ]);
    // Creating array of objects detailing name of skill and skill rating
    const [designStack, setDesignStack] = useState([
      { skill: "Figma", rating: 4, type: "design-skill" },
      { skill: "SVGator", rating: 3, type: "design-skill"  },
      { skill: "Photoshop", rating: 5, type: "design-skill"  },
      { skill: "Illustrator", rating: 3, type: "design-skill"  },
      { skill: "Indesign", rating: 4, type: "design-skill"  },
      { skill: "Rhino", rating: 5, type: "design-skill"  },
      { skill: "Blender", rating: 3, type: "design-skill"  },

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