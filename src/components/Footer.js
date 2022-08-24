import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import TelegramIcon from '@material-ui/icons/Telegram';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href='https://www.linkedin.com/in/ra404/' target='_blank' rel='noopener noreferrer'>
                <LinkedInIcon />
            </a>
            <a href='https://github.com/RA404' target='_blank' rel='noopener noreferrer'>
                <GitHubIcon />
            </a>
            <a href = 'mailto: repin404@gmail.com' target='_blank' rel='noopener noreferrer'>
                <EmailIcon />
            </a>
            <a href = 'https://telegram.me/Repin404' target='_blank' rel='noopener noreferrer'>
                <TelegramIcon />
            </a>
        </div>
        <p>&copy; 2022 repin-andrei.com</p>
    </div>
  )
}

export default Footer