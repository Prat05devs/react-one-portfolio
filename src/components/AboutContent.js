import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import React1 from "../assets/React1.jpg"
import React2 from "../assets/React2.jpg"


import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I ?</h1>
            <p>I'm a certified Full Stack Developer skilled in React, Let's connect and work together to shape a smarter, connected future</p>
            <table className="button-table">
        <tbody>
            <tr>
                <td>
                    <Link to="/contact">
                        <button className="btn">Contact</button>
                    </Link>
                </td>
                <td>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="btn">Resume</button>
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
        </div>

        <div className="right">
            <div className="image-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true" />
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent