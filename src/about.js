// About section component function
function About(){
    return (
    <div className="hidden general-container">
        <div className="general-container" >
            <p className="border-bottom border-blue heading darkgreytext bold text-centre">About</p>
            <p className="text-centre darkgreytext">As a passionate designer entering the dynamic field of web development, I am eager to learn and apply new tools, frameworks, and languages to create accessible and innovative digital products.
             My background in architecture has been invaluable in shaping my strong design thinking, attention to detail, communication, time management, and problem-solving skills. </p>
        </div>
        <div className="about-info">
            <p className="text darkgreytext text-margin-left aboutText"><strong>Email: </strong>andrew-dang2@hotmail.co.uk</p>
            <p className="text darkgreytext text-margin-left aboutText"><strong>Mobile Number: </strong>+44 7422 659846</p>
            <p className="text darkgreytext text-margin-left aboutText"><strong>Website: </strong><a className="greytext" href="https://andrewcdang.github.io/AndrewDangWebsite" target="_blank">Open in new tab</a></p>
            <p className="text darkgreytext text-margin-left aboutText"><strong>Degree: </strong>Masters of Architecture - MArch</p>
            <p className="text darkgreytext text-margin-left aboutText"><strong>Birthday: </strong>24 November 1998</p>
            <p className="text darkgreytext text-margin-left aboutText"><strong>Age: </strong>24</p>
        </div>
    </div>
    );
}
// Calling about function
export default About;