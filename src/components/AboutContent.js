import "./AboutContentStyles.css";
import React from 'react';
import { Link } from 'react-router-dom';
import React1 from '../assets/react1.jpg';


const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Full Stack Developer</h1>
            {/* <p>Hi World, welcome! I'm Vasu Chopra, a Toronto based front-end web developer. To create attractive, usable, and accessible websites and applications, I love integrating the worlds of logic with creative design. Technology sets the pace; civilization keeps up. I place a lot of value on the efforts being made to increase inclusivity and diversity in the sector through representation.  I'm eager to take the plunge and advance my career with the best in the industry.</p> */}
            <p>My name is Vasu and I am a freelance web developer based in Toronto, Canada.
<br></br>
<br></br>
Graduate of Conestoga College in Kitchener, Ontario I have completed the Web Design and Development Program. 
Courses Including:
<br></br>
<br></br>
• JAVASCRIPT PROGRAMMING
<br></br>
• RESPONSIVE SITE DESIGN
<br></br>
• REQUIREMENTS DEVELOPMENT
<br></br>
• FULL-STACK PROGRAMMING
<br></br>
• WEB TRAFFIC AND SEARCH ENGINE
<br></br>
• DATABASE DESIGN
<br></br>
• PROJECT MANAGEMENT
<br></br>
• MOBILE APPLICATION DEVELOPMENT
<br></br>
• PHP PROGRAMMING WITH MYSQL
<br></br>
• PROGRAMMING WITH .NET
<br></br>
<br></br>
My passion for creativity and diverse attention to detail, allows me to create attractive, usable, and accessible websites and applications. This includes full front-end design, brand identity, and graphics. Keeping up with new and innovative trends in todays social media platforms.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
            <a href="..\Vasu_Chopra_Resume.pdf" download>
            <button className="btnr"><i class="fa fa-download"></i>Resume</button>
            </a>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="alternative text for image pn about page" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
