import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <a href='http://www.linkedin.com/in/garretthodges'><LinkedInIcon /></a>
        <a href='http://github.com/gchodges'><GitHubIcon /></a>
        </div>
        <p>gchodges.github.io/garretthodges</p>
    </div>
  )
}

export default Footer