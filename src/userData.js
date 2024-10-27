import GithubIcon from './assets/social/GitHub.svg'
import LinkedinIcon from './assets/social/LinkedIn.svg'
import LeetCodeIcon from './assets/social/leetcode.png'
import MailIcon from './assets/social/mail.png'
import ShellCodeIcon from './assets/shellcode.jpeg'
import SoftEziIcon from './assets/softz.png'
import TCSIcon from './assets/TCS.png'
import MedIcon from './assets/projects/medstore.png'
import DestoIcon from './assets/projects/desto.png'
import PortfolioIcon from './assets/projects/portfolio.png'
import DryIcon from './assets/projects/drycleaner.png'
import ClockIcon from './assets/projects/clock.png'
import SmartContractIcon from './assets/projects/smartcontr.jpeg'
import TicTacIcon from './assets/projects/tictac.png'
import FilmIcon from './assets/projects/goodfilms.png'

const intro = {
    name: "Raunak Kumar Pandey",
    shortTitle: "Full Stack Software Developer",
    description: "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with Java / SpringBoot / Reactjs / JavaScript  / Nodejs and some other cool libraries and frameworks.Also, I love doing competitive programming and solved more than 700+ problems on various coding platforms. ",
}

const whatIDo = {
    education: "B.E Computer Engineering (University of Mumbai)",
    cgpa : "CGPA - 9.29/10.0",
    location: "Mumbai, Maharashtra, India",
    aboutTitle: "Crazy Full Stack Developer Who Wants to Explore Every Tech Stack",
    whatIDoDescription: "~  Develop highly interactive Frontend / User Interfaces for web applications. <br></br>~  Refactor and optimize codebases using clean code architecture principles to boost scalability, readability, and maintainability for future development and iterations. <br></br>~  Perform comprehensive debugging, unit testing, and integration testing to deliver high-quality, error-free applications with robust and reliable performance..",
}

const experiences = [
    {
        companyName: "Tata Consultancy Services",
        location: "Mumbai, India",
        logo: TCSIcon,
        career: [
            {
                role: "Full Stack Developer",
                duration: "1.1 Years",
                employmentType: "Full-Time",
                fromDate: "Aug 2023",
                toDate: "Present",
                description: [
                    "Contributed to the development of code generators using yeoman and Java code parser using JavaParser to automate the software development.",
                    "Developed backend features, dynamic web pages, and reusable React components, improving platform scalability and code reusability by 50%.",
                    "Performed unit and integration testing using JUnit and Mockito, resolving bugs and reducing defects by 30%.",
                    "Skills: Java, SpringBoot, JavaScript, ReactJs with TypeScript."
                ],
            },
            {
                role: "Project Intern",
                duration: "3 Months",
                employmentType: "Part-Time",
                fromDate: "Feb 2023",
                toDate: "May 2023",
                description: [
                    "Created a dynamic web application which enhanced data representation capabilities, leading to a 70% improvement in decision-making efficiency.",
                    "The application featured a variety of charts (bar, pie, pareto) to visualize and represent data analysis.",
                    "Skills : HTML , CSS , Python , Django , MySQL."
                ],
            }
        ],
    },
     
    {
        companyName: "Shellcode Solutions",
        location: "Mumbai,India (Remote)",
        logo: ShellCodeIcon,
        career: [
            {
                role: "Full Stack Web Developer",
                duration: "10 Months",
                employmentType: "Internship",
                fromDate: "Sept 2021",
                toDate: "June 2022",
                description: [
                    "Developed multiple projects, including admin dashboards and e-commerce platform, implementing key features such as authentication, cart system, coupon codes, checkout process, and order history management.",
                    "Skills : ReactJs, NodeJs , Cloud Firestore , MongoDB",
                ],
            },
        ],
    },
    {
        companyName: "SoftEzi Solutions LLP",
        location: "Mumbai,India (Remote)",
        logo: SoftEziIcon,
        career: [
            {
                role: "Full Stack Web Developer",
                duration: "6 Months",
                employmentType: "Internship",
                fromDate: "Dec 2021",
                toDate: "May 2022",
                description: [
                    "Drove code optimization efforts, reducing database read and write operations, and eliminating time lag during page loading, resulting in improved application performance.",
"Designed and developed robust REST APIs and implemented authentication systems using NodeJS and ExpressJS, ensuring secure and efficient data exchange between the front-end and back-end.",
"Leveraged ReactJS to create reusable and dynamic UI components, contributing to the development of intuitive and visually appealing web applications."
,"Skills : ReactJs, NodeJs , Cloud Firestore , MongoDB"
        ]
    }
]
    }
]

const socialIcons = [
    {
        id: "github",
        name: "GitHub",
        color: "#333333",
        image: GithubIcon,
        link: "https://github.com/raunakpandey1",
    },
    {
        id: "linkedin",
        name: "LinkedIn",
        color: "#0072B1",
        image: LinkedinIcon,
        link: "https://www.linkedin.com/in/raunakpandey1/",
    },
    {
        id: "LeetCode",
        name: "LeetCode",
        color: "#fff",
        image: LeetCodeIcon,
        link: "https://leetcode.com/u/raunak__pandey/",
    },
    {
        id: "mail",
        name: "Mail",
        color: "#fff",
        image: MailIcon,
        link: "mailto:raunakpandey1007@gmail.com",
    }
]

const projects = [
    
    {
        name: "Medstore-mern",
        image: MedIcon,
        type: "Web Application",
        techStack: "ReactJS NodeJS ExpressJS MongoDB",
        sourceCode: "https://github.com/raunakpandey1/Medstore-mern",
        demoLink: "https://medstore.onrender.com/",
        shortDescription: "Medical E-commerce Web Application. It can be used by both customers and sellers for purchasing and selling medical essentials.",
    },
    {
        name: "Portfolio",
        image: PortfolioIcon,
        type: "Web Application",
        techStack: "ReactJS",
        sourceCode: "hhttps://github.com/raunakpandey1/raunakpandey1.github.io",
        demoLink: "https://raunakpandey1.github.io/",
        shortDescription: "My portfolio build using Reactjs and SASS",
    },
    {
        name: "Desto",
        image: DestoIcon,
        type: "Web Application",
        techStack: "ReactJS NodeJS ExpressJS MongoDB Web3 Storage",
        sourceCode: "https://github.com/raunakpandey1/desto",
        demoLink: "https://desto.onrender.com/",
        shortDescription: "Desto is a web application which upload the contents to IPFS by using web3.storage.",
    },
    {
        name: "DryCleaner",
        image: DryIcon,
        type: "Web Application",
        techStack: "ReactJS Firebase",
        sourceCode: "https://github.com/raunakpandey1/DryCleaner",
        demoLink: "https://chicagogreendrycleaners.com/",
        shortDescription: "Provides dry Cleaning and laundry services to users having features like Firebase Auth, Cart System, Coupon code , User Profile and Order History",
    },
    {
        name: "Analog-Digital-Clock",
        image: ClockIcon,
        type: "Web App",
        techStack: "HTML CSS Javascript",
        sourceCode: "https://github.com/raunakpandey1/Analog-Digital-Clock",
        demoLink: "https://raunakpandey1.github.io/Analog-Digital-Clock/",
        shortDescription: "Analog clock as well as Digital clock.",
    },
    {
        name: "Good Films",
        image: FilmIcon,
        type: "Web App",
        techStack: "AngularJS",
        sourceCode: "https://github.com/raunakpandey1/Good-Films-Angular",
        shortDescription: "A Frontend website designed using Angular",
    },
    {
        name: "TernaLogin",
        image: "https://res.cloudinary.com/ddktczzsr/image/upload/v1625035722/TernaLogin-banner_u7qp2t.jpg",
        type: "Android App",
        techStack: "Java Firebase AndroidStudio",
        sourceCode: "https://github.com/raunakpandey1/Student-Attendance-System",
        shortDescription: "TernaLogin is a Attendance system App which help faculty to take, manage and analyse student Attendance.",
    },
    {
        name: "TicTacToe",
        image: TicTacIcon,
        type: "Android App",
        techStack: "Java Firebase AndroidStudio",
        sourceCode: "https://github.com/raunakpandey1/TIC-TAC-TOE",
        shortDescription: "Android game in which two players can enter their name and play this game. ",
    },
    {
        name: "ERC20 Bounty",
        image: SmartContractIcon,
        type: "BlockChain ",
        techStack: "Solidity",
        sourceCode: "https://github.com/raunakpandey1/smartcontracts",
        shortDescription: "BasicERC20 Smart-contract",
    },
]

const certificates = [
    {
        title: "TCS",
        image: "https://github.com/user-attachments/assets/561cf5a0-cee6-497d-988d-92f1a2dd6ffb",
    },
    {
        title: "Google KickStart",
        image: "https://github.com/user-attachments/assets/36be45bc-d6e5-4bdc-a7e2-39859ab5a01c"
    },
    {
        title: "ShellCode Completion",
        image: "https://github.com/user-attachments/assets/845d7fa1-7088-4e31-aeb8-65d94f0f715d",
    },
    {
        title: "ShellCode LOR",
        image: "https://github.com/user-attachments/assets/379325b2-6af6-45fc-803e-c7f6bd2954e6",
    },
    {
        title: "SoftEzi Completion",
        image: "https://github.com/user-attachments/assets/97e92c52-a9ef-4eea-9eef-b820634813af",
    },
    {
        title: "SoftEzi LOR",
        image: "https://github.com/user-attachments/assets/44f2fbeb-9812-4255-8447-3f6fe4fb8477",
    },
    
    {
        title: "react",
        image:  "https://github.com/user-attachments/assets/c1c77a6d-2d0c-47bd-aeac-55cfc8912659"
    },
    {
        title: "Java",
        image: "https://github.com/user-attachments/assets/8fc6edc5-4136-41b4-990e-240766779106"
    },
    {
        title: "Javascript",
        image: "https://github.com/user-attachments/assets/ade143e2-6e89-44d2-ae93-0699a6a47607"
    },
    {
        title: "ML",
        image: "https://github.com/user-attachments/assets/944551b7-3d2a-415d-af1d-86ac1e6706e3"
    },
    {
        title: "Deep Learning",
        image: "https://github.com/user-attachments/assets/5c64fe23-17d1-49d0-b359-f6a242d300f3"
    },
    {
        title: "Python",
        image: "https://github.com/user-attachments/assets/c249da7e-5214-45a6-92be-8ca33d65874a"
    },
    {
        title: "Career Skills",
        image: "https://github.com/user-attachments/assets/4a10b56d-cd6a-49b2-b1ef-387b9b76fb30"
    },
    
    
   
]
 
export { 
    intro, 
    socialIcons, 
    whatIDo, 
    experiences, 
    projects,
    certificates,
}