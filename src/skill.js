// Function which takes in parent 'skills' argument. 
// Each object is mapped into a seperate div displaying each object item
// using '...Array().map()' as a more concise alternative to 'for loop' method in pushing objects
// The spread operator ... is used to spread the array into individual elements.

function Skills({ skills }) {
    const skillCards = skills.map((item, index) => (
      <div className="skill-card" key={index}>
        <p className="darkgreytext bold text-margin0">{item.skill}</p>
        <div className="skill-rating">
          {[...Array(item.rating)].map((item, i) => (
            <div className="skill-red skill-icon" key={i}></div>
          ))}
          {[...Array(5-item.rating)].map((item, i) => (
            <div className="skill-icon" key={i}></div>
          ))}
        </div>
      </div>
    ));

    console.log(skills)
    return <div className="skills-container">{skillCards}</div>;
  }
  export default Skills;


