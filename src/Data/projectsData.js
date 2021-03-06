import { FaHtml5 } from "react-icons/fa";
import { FaCss3, FaAws } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact, FaDocker } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { DiMongodb, DiRedis } from "react-icons/di";
import { SiExpress, SiSocketdotio, SiNextdotjs } from "react-icons/si";
import { AiTwotoneFire } from "react-icons/ai";
import { SiMaterialui } from "react-icons/si";
const data = [
  {
    heading: "Nykaa Fashion Clone",
    about:
      "It is the clone of the Nykaa-fashion website which is a fashion e-commerce website. It is my first group project in masai school. We have clone all mejor features of the website like View product, add to cart, product filter etc. This is a front-end only project so all detabase related features has been achived with localStorage.",
    image: "nykaa.png",
    Github: "https://github.com/Sourav12061999/nykaafashion.git",
    live: "https://keen-clarke-eefd2c.netlify.app/",
    video: "",
    techStack: [FaHtml5, FaCss3, FaJsSquare],
  },
  {
    heading: "Misho Clone",
    about:
      "It is the clone of the Misho Design website which is a fashion and designer jewellery e-commerce website. It is solo project and my first next js project. We have clone all mejor features of the website like View product, add to cart etc. In this project I have used firebase to achive database related work.",
    image: "misho.png",
    Github: "https://github.com/Sourav12061999/fullstack-ecommerce.git",
    live: "https://fullstack-ecommerce-4tbzsb3u6-sourav12061999.vercel.app/",
    video: "",
    techStack: [SiNextdotjs, FaCss3, FaJsSquare, AiTwotoneFire],
  },
  {
    heading: "Full Stack Clone of Udemy",
    about: `This is the Full Stack Clone of the Famous Online Course Platform Udemy. This is a Full Stack website
    where I have used React and Material UI in Front End and Node,Express and Mongoose in Backend. The Fontend is deployed in
    Vercel and Backend is deployed in Heroku.`,
    Github: "https://github.com/Sourav12061999/udemy-clone-front-end.git",
    live: "https://udemy-clone-front-end.vercel.app/",
    video: "",
    techStack: [FaReact, SiMaterialui, SiExpress, DiMongodb, DiNodejs],
    image: "udemy-pic.png",
  },
];

export default data;
