import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  java,
  python,
  flask,
  spring,
  codingDojo,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
 
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "flask",
    icon: flask,
  },
  {
    name: "spring",
    icon: spring,
  },
  
];

const experiences = [
  {
    title: "Student",
    company_name: "Coding Dojo",
    icon: codingDojo,
    iconBg: "#383E56",
    date: "september 2022 - feburary 2023",
    points: [
      "Learning Full Stack development with Java, Python, and JavaScript.",
      "Collaborating with my fellow cohort members to create projects and solve algos.",
      "Implementing responsive design and ensuring an enjoyable user experience.",
      "Participating in code reviews and providing constructive feedback to other developers with in my cohort.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Art Blog",
    description:
      "Web-based platform that allows users to post/display images of their artwork and post photos for inspirations (inspired by Pintrest)",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "pink-text-gradient",
      },
    ],
    //image: carrent,
    source_code_link: "https://github.com/kaia24",
  },
  {
    name: "Book Talk",
    description:
      "Web application that enables users to post reviews on books and chat about books (inspired by GoodReads)",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Mern",
        color: "pink-text-gradient",
      },
    ],
    //image: jobit,
    source_code_link: "https://github.com/kaia24",
  },
  {
    name: "Schedules",
    description:
      "A Web application where users are ablt to create schedules for personal or interactive group projects.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    //image: tripguide,
    source_code_link: "https://github.com/kaia24",
  },
];

export { services, technologies, experiences, testimonials, projects };