import "./FooterStyles.css";
import React from 'react';
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
            <div className='location'>
            <a href="https://goo.gl/maps/JN988LCAp66xVJhD6" target="_blank" ><FaHome size={20} style={{ color:"#fff", marginRight:"2rem" }}/></a>
                <div>
                    <p>246 Hillcrest Road</p>
                    <p>Cambridge, ON N3H1B2</p>
                </div>
            </div>
            <div className="phone">
            <a href="tel:647-765-0265"> <h4><FaPhone size={20} style={{ color:"#fff", marginRight:"2rem" }}/>
                +1 647-765-0265</h4> </a>
            </div>
            <div className="email">
            <a href="mailto:vasuchopra1998@gmail.com" target="_blank"> <h4><FaMailBulk size={20} style={{ color:"#0072C6", marginRight:"2rem" }}/>
                vasuchopra1998@gmail.com</h4>  </a>
            </div>
        </div>
        <div className='right'>
            <h4>About me</h4>
            <p>Hi World, welcome! I'm Vasu Chopra, a Toronto based front-end web developer. To create attractive, usable, and accessible websites and applications, I love integrating the worlds of logic with creative design. Technology sets the pace; civilization keeps up. I place a lot of value on the efforts being made to increase inclusivity and diversity in the sector through representation.  I'm eager to take the plunge and advance my career with the best in the industry.</p>
            <div className="social">
            <a href="https://www.facebook.com/ChopraKing2/" target="_blank"> <FaFacebook size={30} style={{ color:"#3b5998", marginRight:"1rem" }}/> </a>
            <a href="https://twitter.com/VasuChopra13" target="_blank">  <FaTwitter size={30} style={{ color:"#00acee", marginRight:"1rem" }}/></a>
            <a href="https://www.linkedin.com/in/imchopra" target="_blank">  <FaLinkedin size={30} style={{ color:"#0e76a8", marginRight:"1rem" }}/></a>
            <a href="https://www.instagram.com/im_chopra" target="_blank"> <FaInstagram size={30} style={{ color:"#8a3ab9", marginRight:"1rem" }}/></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
