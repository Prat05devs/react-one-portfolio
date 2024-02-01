import { FaDiscord, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa"
import "./FooterStyles.css"
import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                <FaHome size={20} style={{color:
                "#fff", marginRight: "2rem"}}/>
                <div>
                    <p>Badripur, Dehradun</p>
                    <p>(248005) India</p>
                </div>
                </div>

                <div className="phone">
                <h4><FaPhone size={20} style={{color:
                "#fff", marginRight: "2rem"}}/>
                +918218602***</h4>
                </div>

                <div className="email">
                <h4><FaMailBulk size={20} style={{color:
                "#fff", marginRight: "2rem"}}/>
                prateekthofficial789@gmail.com</h4>
                </div>

            </div>

            <div className="right">
                <h4>About the me</h4>
                <p>Full Stack Web Developer | Cloud Enthusiast | WordPress Developer | DIT University.</p>
            
            <div className="social">
                <Link to="https://discord.com/channels/prateek055"><FaDiscord size={20} style={{color:"#fff", marginRight: "1rem"}}/></Link>
                <Link to="https://www.linkedin.com/in/prateek-thapliyal-496576244/"><FaLinkedin size={20} style={{color:"#fff", marginRight: "1rem"}}/></Link>
                <Link to="https://github.com/Prat05devs"><FaGithub size={20} style={{color:"#fff", marginRight: "1rem"}}/></Link>
                <Link to="https://www.instagram.com/prateek_th_02/"><FaInstagram size={20} style={{color:"#fff", marginRight: "1rem"}}/></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer