import client1 from "./Assets/client1.jpg";
import client2 from "./Assets/client2.jpg";
import Ui1 from "./Assets/ui/portfolio1.png"
import Ui2 from "./Assets/ui/portfolio2.png"
import Ui3 from "./Assets/ui/portfolio3.png"
import Ui4 from "./Assets/ui/portfolio4.png"
import Ui5 from "./Assets/ui/portfolio5.png"
import Ui6 from "./Assets/ui/portfolio6.png"
import Ui7 from "./Assets/ui/portfolio7.png"
import Ui8 from "./Assets/ui/portfolio8.png"

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
      name: "Mark Loin",
      position: "CEO",
      image: client1,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iste rem at enim saepe!",
    },
    {
      name: "Emily Santos",
      position: "UI Designer",
      image: client2,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iste rem at enim saepe!",
    },
    {
      name: "Dele Abiodun",
      position: "HR",
      image: client1,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iste rem at enim saepe!",
    },
    {
      name: "Ebuka Alvin",
      position: "Project Manager",
      image: client2,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iste rem at enim saepe!",
    },
  ],
  contact: [
    { name: "Your Name", comment: "enter your name" },
    { name: "Email", comment: "enter your address here" },
    { name: "Location", comment: "enter your location here" },
  ],
};

export const projectUI = [Ui1, Ui2, Ui3, Ui4, Ui5, Ui6, Ui7, Ui8 ]