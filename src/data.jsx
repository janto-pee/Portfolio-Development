import client1 from "./Assets/client1.jpg";
import client2 from "./Assets/client2.jpg";
import client3 from "./Assets/woman.jpg";
import client4 from "./Assets/woman2.jpg";
import Ui1 from "./Assets/ui/portfolio1.png"
import Ui2 from "./Assets/ui/portfolio2.png"
import Ui3 from "./Assets/ui/portfolio3.png"
import Ui4 from "./Assets/ui/sellym.png"
import Ui5 from "./Assets/ui/comingsoon.png"
import Ui6 from "./Assets/ui/comingsoon2.png"
import Ui7 from "./Assets/ui/comingsoon3.png"
import Ui8 from "./Assets/ui/portfolio8.png"
import project1 from "./Assets/ui/portfolio9.png"
import Ui9 from "./Assets/ui/API.png"

export const data = {
  experience: [
    {
      year: "2021 - present",
      position: "Lead Software Developer",
      stack: "React, Solidity, Nodejs, Expressjs, MongoDB, Nextjs",
    },
    
    {
      year: "2019 - 2021",
      position: "Graduate Program",
      stack: "Project Management, Agile, Waterfall",
    },
    {
      year: "2016 - 2019",
      position: "Fullstack Developer",
      stack: "React, Nextjs, Angular, Nodejs, Expressjs, MongoDB",
    },
  ],
  project: [
    {
      name: "real estate",
      image: "../Assets/img",
      stack: "React, Nextjs, Angular, Nodejs, Expressjs, MongoDB",
    },
  ],
  testimonial: [
    {
      name: "Ahmed Rakil",
      position: "CEO",
      image: client1,
      comment:
        "Ayobami Adejumo knows how to really design a clean user interface. He makes it look super easy",
    },
    {
      name: "Dr Mike Bamidele",
      position: "UI Designer",
      image: client2,
      comment:
        "I'm impressed at how you were able to merge our brand colors to give an impressive feel. Thanks",
    },
    {
      name: "D. Abiodun",
      position: "HR",
      image: client3,
      comment:
        "You won my loyalty for your work & delivery. You carried us along every stage of the development",
    },
    {
      name: "Alwin",
      position: "Project Manager",
      image: client4,
      comment:
        "Ayo is a genius when its comes to fullstack development. We need a project done and he delivered.",
    },
  ],
  contact: [
    { name: "Your Name", comment: "enter your name" },
    { name: "Email", comment: "enter your address here" },
    { name: "Location", comment: "enter your location here" },
  ],
};



export const portfolio ={ 
  developer: [
  {
    img: project1,
    link: '/portfolio/real-estate',
    livelink: 'https://real-estate-e4jnrednn-lakabosch-gmailcom.vercel.app/',
    github: 'https://github.com/janto-pee/Amazing-Real-Estate-Web-App',
    title: 'Real Estate Web App',
    subtitle: 'The latest real estate web application built with Nextjs, Reactjs, Chakra UI and RapidAPI. In the beginning, series of meeting were held in order to choose the best architectural patterns. Careful consideration were given to the monolithic and microservice architecture. After which I swung into action using the agile methodology and Jira was used. Read more about the challenges i faced in this project and how i resolved them adopting agile sprint strategy.'
  },
  {
    img: Ui9,
    link: '/portfolio/cryptos-api',
    livelink: 'https://github.com/janto-pee/Cryptocurrency-REST-API',
    github: 'https://github.com/janto-pee/Cryptocurrency-REST-API',
    title: 'Cryptocurrency REST API',
    subtitle: 'The latest cryptocurrency API built with Nodejs, Expressjs, and MongoDB. You can easily perform CREATE, READ, UPDATE AND DELETE REQUEST'
  },
 
  {
    img: Ui2,
    link: '/portfolio/cryptoboard-app',
    livelink: 'https://cryptoboard-app.netlify.app/',
    github: 'https://github.com/janto-pee/Project1---Full-Cryptocurrency-App-to-Deployment',
    title: 'Cryptoboard - Stunning Cryptocurrency Dashboard',
    subtitle: 'A dashboard that provides up-to-date and real time information about cryptocurrencies. Built with Reactjs, AntDesign and RapidAPI. I used Redux Toolkit for state management. It also contains a news section which displays latest news about cryptos'
  },
  {
    img: Ui3,
    link: '/portfolio/web-3-app',
    livelink: 'https://web-3-application.netlify.app/',
    github: 'https://github.com/janto-pee/Full-Web-3.0-Blockchain',
    title: 'Web 3.0 App to Deployment',
    subtitle: 'Security is at the core of the third generation of web. Learn how i built this project with React, TailwindCSS and Solidity for smart contract'
  },
  {
    img: Ui4,
    link: '/portfolio/sellym',
    livelink: 'https://sellym-blockchain-project.vercel.app/',
    github: 'https://github.com/janto-pee/Blockchain-project',
    title: 'Sellym Ethereum Transaction App',
    subtitle: 'This is a web3.0 application built with Reactjs and tailwindcss on the frontend, Solidity for smart contracts and hardhat for testing and deployment, and RESTful API for fetching real time news.'
  },
],

qa: [
  {
    img: Ui5,
    title: 'Ecommerce Web Application',
    subtitle: 'A stunning e-Commerce web application in development. Built with Nextjs, Reactjs, TailwindCSS and Sanity.io(headless CMS)'
  },
  {
    img: Ui6,
    title: 'Food Recipe & Ordering Application',
    subtitle: 'Do you want to learn how to make your favorite dish? A food recipe web application is in development and it promise to solve your problems'
  },
  {
    img: Ui7,
    title: 'Fullstack Chat Application',
    subtitle: 'Built with Reactjs, Nodejs, and Socket.io, it is easier to join chat rooms, send messages and get reply in real time.'
  }
]
}