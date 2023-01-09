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
        <p className='footer__text'>&copy; 2023 <a className='footer__link' href='https://repin-andrei.com/'>repin-andrei.com</a></p>
    </div>
  )
}

export default Footer