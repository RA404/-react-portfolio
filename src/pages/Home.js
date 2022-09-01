import React, { useEffect } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import TelegramIcon from '@material-ui/icons/Telegram';
import '../styles/Home.css';

function Home() {

  useEffect(() => {
    document.title = 'Repin Andrei - FullStack Developer';;
  });

  return (
    <div className='home'>
      <div className='about'>
        <h2 className='about__title'>Hi, my name is Repin Andrei</h2>
        <div className='promt'>
          <p className='about__description-text'>I'm <span className='about__description-text_bold'>Fullstack Developer</span> with a passion of learning and creating.</p>
          <p className='about__description-text'>My main technology stack includes Python, Django, Express.js on Backend and JavaScript, React on Frontend.</p>
          <div className='socialMedia'>
            <a href='https://www.linkedin.com/in/ra404/' target='_blank' rel='noopener noreferrer'>
              <LinkedInIcon />
            </a>
            <a href='https://github.com/RA404' target='_blank' rel='noopener noreferrer'>
              <GitHubIcon />
            </a>
            <a href='mailto: repin404@gmail.com' target='_blank' rel='noopener noreferrer'>
              <EmailIcon />
            </a>
            <a href='https://telegram.me/Repin404' target='_blank' rel='noopener noreferrer'>
              <TelegramIcon />
            </a>
          </div>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-end</h2>
            <span>JavaScript, HTML, CSS, ReactJS, BEM, npm, StyledComponent, Bootstrap, TailwindCSS</span>
          </li>
          <li className='item'>
            <h2>Back-end</h2>
            <span>Python, Django, DRF, NodeJS, ExpressJS, REST</span>
          </li>
          <li className='item'>
            <h2>Infrastructure and DB</h2>
            <span>Docker, Git, GitHub Actions, CI/CD, nginx, WebPack, MongoDB, MySQL, MS SQL, Postgresql</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home