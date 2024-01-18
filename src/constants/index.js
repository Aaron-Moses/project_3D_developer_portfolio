import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  digital_extremes,
  hp_tech_ventures,
  mobalytics,
  western_university,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Contact Me",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Data Analyst and Developer Co-op",
    company_name: "Digital Extremes",
    icon: digital_extremes,
    iconBg: "#586472",
    date: "March 2020 - April 2021",
    points: [
      "Engineered interactive dashboards via Redash and PostgreSQL for KPI reporting, tools and reporting for external teams, and addressing ad-hoc requests.",
      "Cleaned, transformed, analyzed, and visualized data using Python (Pandas, Seaborn, Matplotlib) within Jupyter Notebooks to derive and communicate actionable insights",
      "Developed backfilling and automated CI/CD ETL processes using Python and Bash, migrating data from MongoDB to Postgres resulting in improved data integrity and availability through Cron jobs",
      "Analyzed A/B test results of in-game ads, deriving and reporting trends in conversion, retention, and revenue.",
    ],
  },
  {
    title: "Data Analyst Extern",
    company_name: "Mobalytics",
    icon: mobalytics,
    iconBg: "#F9FEFF",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Utilized Microsoft Excel, Tableau, and SQL for data cleaning, analysis, and visualization, extracting insights on player psychology, revenue models, and opportunities for market expansion."
    ],
  },
  {
    title: "Research Assistant",
    company_name: "Western University",
    icon: western_university,
    iconBg: "#4F2683",
    date: "Oct. 2023 – Present",
    points: [
      "Implement machine learning NLP techniques in R to conduct sentiment analysis of survey responses.",
    ],
  },
  {
    title: "Business Analyst Extern",
    company_name: "HP Tech Ventures",
    icon: hp_tech_ventures,
    iconBg: "#F9FEFF",
    date: "Dec. 2023 – Present",
    points: [
      "Analyze startups using Excel and SQL, focusing on industry data, business models, and product strategies.",
      "Develop market maps and perform data cleaning for trend analysis and investment recommendations",
    ],
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
