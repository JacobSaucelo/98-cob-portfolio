export interface DataWorkExpTypes {
  year: string;
  company: string;
  position: string;
  details: DataWorkDetails[];
}

type DataWorkDetails = {
  detailsTitle: string;
  desc: string;
  imgPath?: string[];
};

export const DataWorkExperience: DataWorkExpTypes[] = [
  {
    year: "2018 - 2019",
    company: "ROC.PH",
    position: "Junior Frontend Developer",
    details: [
      {
        detailsTitle: "Front-end web development",
        desc: "Reworked previous webpage design and added animations.",
      },
      {
        detailsTitle: "Migration",
        desc: "Migrated front-end design from Bootstrap V2 to V3.",
      },
      {
        detailsTitle: "Encoding data",
        desc: "Managed and sorted data.",
      },
    ],
  },
  {
    year: "2022 - 2023",
    company: "WabiZabi Sushi Bar",
    position: "Fullstack Web Developer",
    details: [
      {
        detailsTitle: "Front-end Development",
        desc: "Created WabiZabi Website using NextJs, Scss(SASS), and NodeJs libraries.",
      },
      {
        detailsTitle: "Back-end Development",
        desc: "Used Firebase Cloud database for cross platform support between web and android.",
      },
      {
        detailsTitle: "API",
        desc: "Developed Private API routes to manage the data AI produces from the android, and update it to the web chronologically.",
      },
      {
        detailsTitle: "Web Service",
        desc: "Used github actions to automate the API route for the cross platform app.",
      },
    ],
  },
  {
    year: "2023 - 2023",
    company: "ANALOG DEVICES (ADI) Gen Trias",
    position: "Frontend Engineer (Intern)",
    details: [
      {
        detailsTitle: "Front-end Web Development",
        desc: "Developed in React js with tools, hooks, libraries and state management.",
      },
      {
        detailsTitle: "Back-end Web Development",
        desc: "Code first SQL design, API routes.",
      },
      {
        detailsTitle: "UI/UX",
        desc: "Made with bootstrap and custom css.",
      },
      {
        detailsTitle: "Custom Hooks",
        desc: "Reusable hooks and components for the project.",
      },
    ],
  },
  {
    year: "2024 - Present",
    company: "ANALOG DEVICES (ADI) Gen Trias",
    position: "Business Analyst",
    details: [
      {
        detailsTitle: "Small website projects",
        desc: "Converting website, pdf to source code",
      },
    ],
  },
];

export const DataEducation: DataWorkExpTypes[] = [
  {
    year: "2017 - 2019",
    company: "AMA Computer College Cavite Campus",
    position: "Graduated High School - k12 Curriculum",
    details: [
      {
        detailsTitle: "TVL - ICT Programming",
        desc: "Chose TVL ICT Programming over STEM for a tech-focused future in programming.",
      },
      {
        detailsTitle: "Grade 11 - High Honors",
        desc: "Received High Honors Achievment",
      },
      {
        detailsTitle: "Grade 12 - Honors",
        desc: "Graudated with honors in Grade 12.",
      },
    ],
  },
  {
    year: "2019 - 2023",
    company: "AMA Computer College Cavite Campus",
    position: "Graduated College - BS Computer Science",
    details: [
      {
        detailsTitle: "Bachelor of Science in Computer Science",
        desc: "I like data structures & algorithms.",
      },
      {
        detailsTitle: "Major in Web Application",
        desc: "Picked 'Web App Development' as major elective.",
      },
      {
        detailsTitle: "Cisco Certifications",
        desc: "Programming Essentials in C++ & Advanced Programming in C++.",
      },
      {
        detailsTitle: "Magna Cum Laude",
        desc: "Graduated with High Distinction(Magna Cum Laude).",
        imgPath: [
          "/assets/awardee.jpg",
          "/assets/awards.jpg",
          "/assets/place.jpg",
        ],
      },
    ],
  },
];
