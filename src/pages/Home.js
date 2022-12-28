import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import '../styles/Home.css';
import Measurements from '../assets/measurements.jpeg';
import Headshot from '../assets/headshot.jpeg';


function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hello, my name is Garrett Hodges</h2>
            <div className='picsContainer'>
            <img className='pics' src={Measurements}/>
            <img className='pics' src={Headshot}/>
            </div>
            <div className='prompt'>
                <p>I am a second year Computer Engineering student at the University of Alabama with a passion for creative problem solving
                    and technology.
                </p>
                <div className='buttonContainer'>    
                    <a href='http://www.linkedin.com/in/garretthodges'><LinkedInIcon /></a>
                    <a href='http://github.com/gchodges'><GitHubIcon /></a>
                    <a href='mailto:garretthodges16@gmail.com'><EmailIcon /></a>
                </div>
            </div>
        </div>
        <div className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='listItem'>
                    <h2>Frontend</h2>
                    <span>React, HTML, CSS, JavaScript, MaterialUI, React Router</span>
                </li>
                <li className='listItem'>
                    <h2>Languages</h2>
                    <span>C++, C, Python, VHDL</span>
                </li>
                <li className='listItem'>
                    <h2>Programs</h2>
                    <span>PSpice, Quartus Prime Lite</span>
                </li>

            </ol>
        </div>
    </div>
  )
}

export default Home