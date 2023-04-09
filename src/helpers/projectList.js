import Telegram from '../assets/telegram-bot.jpeg';
import ReactPortfolio from '../assets/reactPortfolio.png';
import TravelBlog from '../assets/TravelBlog.jpeg';
import NewsExplorer from '../assets/NewsExplorer.jpeg';
import Express from '../assets/node_express.webp';
import Mesto from '../assets/Mesto.jpeg';
import Talked from '../assets/Talked.jpg';
import PythonDjango from '../assets/python_django.jpeg';
import BankCards from '../assets/bank_cards.jpeg';
import Dashboard from '../assets/dashboard.png';
import authMERN from '../assets/authMERN.png';


export const ProjectList = [
    {
        name: 'React Dashboard',
        image: Dashboard,
        skills: 'React, Material UI, Formik, Nivo, FullCalendar, ReactProSidebar, Accordion, x-Data-Grid',
        gitLink: 'https://github.com/RA404/dashboard_admin_panel',
        description: 'This is the pet project. I experimented with material ui for creating this beautiful dashboard. I used the libraries and components such as formik, nivo, x-data-grid, full calendar, react pro sidebar, accordion.',
        projectLink: 'https://ra404.github.io/dashboard/',
    },
    {
        name: 'Auth JWT MERN',
        image: authMERN,
        skills: 'React, TypeScript, Express, MobX, JWT, axios, MongoDB',
        gitLink: 'https://github.com/RA404/auth-mern',
        description: 'MERN stack authentication with email confirmation. There is client and server part.',
        projectLink: '',
    },
    {
        name: 'React-Portfolio',
        image: ReactPortfolio,
        skills: 'HTML, CSS, ReactJS',
        gitLink: 'https://github.com/RA404/react-portfolio',
        description: 'My portfolio web site',
        projectLink: 'https://repin-andrei.com/',
    },
    {
        name: 'Travel Blog',
        image: TravelBlog,
        skills: 'Python, Django, JavaScript, HTML, CSS, Docker',
        gitLink: 'https://github.com/RA404/travel_blog',
        description: '',
        projectLink: '',
    },
    {
        name: 'News Explorer (frontend)',
        image: NewsExplorer,
        skills: 'JavaScript, HTML, CSS, Babel, WebPack',
        gitLink: 'https://github.com/RA404/newsExplorer',
        description: '',
        projectLink: '',
    },
    {
        name: 'News Explorer (backend)',
        image: Express,
        skills: 'JavaScript, Express.js, JWT, MongoDB, nginx',
        gitLink: 'https://github.com/RA404/apiNews',
        description: '',
        projectLink: '',
    },
    {
        name: 'Mesto (frontend)',
        image: Mesto,
        skills: 'JavaScript, HTML, CSS',
        gitLink: 'https://github.com/RA404/Mesto',
        description: '',
        projectLink: '',
    },
    {
        name: 'Mesto (backend)',
        image: Express,
        skills: 'JavaScript, Express.js, mongoDB',
        gitLink: 'https://github.com/RA404/backend13',
        description: '',
        projectLink: '',
    },
    {
        name: 'Talk-ed (frontend)',
        image: Talked,
        skills: 'JavaScript, ReactJS, HTML, CSS',
        gitLink: '',
        description: '',
        projectLink: '',
    },
    {
        name: 'Talk-ed (backend)',
        image: PythonDjango,
        skills: 'Python, Django, Docker, Postgresql, CI/CD',
        gitLink: '',
        description: '',
        projectLink: '',
    },
    {
        name: 'Money transfer service',
        image: BankCards,
        skills: 'Python, DRF',
        gitLink: '',
        description: `The service was developed for a network of pawnshops. This service interacts with the API of several banks, as well as with the internal accounting system. He allowed pawnshops to switch to non-cash issuance of loans. As a result, the cost of transporting cash was reduced and the number of transactions using the mobile application and the client's personal account increased.`,
        projectLink: '',
    },
    {
        name: 'API for yamdb service',
        image: PythonDjango,
        skills: 'Python, DRF, Docker',
        gitLink: '',
        description: `The application allows users to leave reviews for works: films, music, books, etc., as well as comment on each other's reviews.`,
        projectLink: '',
    },
    {
        name: 'YaTube',
        image: PythonDjango,
        skills: 'Python, Django, Docker',
        gitLink: '',
        description: `A small social network where you and other users can post pictures and descriptions and comment on each other's posts`,
        projectLink: '',
    },
    {
        name: 'Telegram bots',
        image: Telegram,
        skills: 'Python',
        gitLink: '',
        description: 'Bot for monitoring processes, Bot for creating and sending reports',
        projectLink: '',
    },
]