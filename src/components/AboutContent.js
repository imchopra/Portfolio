import "./AboutContentStyles.css";
import React from 'react';
import { Link } from 'react-router-dom';
import React1 from '../assets/react1.jpg';


const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Full Stack Developer</h1>
            <p>Hi World, welcome! I'm Vasu Chopra, a Toronto based front-end web developer. To create attractive, usable, and accessible websites and applications, I love integrating the worlds of logic with creative design. Technology sets the pace; civilization keeps up. I place a lot of value on the efforts being made to increase inclusivity and diversity in the sector through representation.  I'm eager to take the plunge and advance my career with the best in the industry.</p>
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
