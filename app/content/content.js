import VIRTUAL from "@/assets/virtual.jpg";
import DIABETES from "@/assets/diebetes.jpg";
import QUANTUM from "@/assets/quantum.jpg";
import ANDRIOD from "@/assets/andriod.jpg";
import MICROSOFT_WHITE from "@/assets/companies/Micosoft_white.png";
import AMAZON1 from "@/assets/companies/Amazon1.png";
import GOVERNMENT from "@/assets/companies/Government.png";
import CIBC from "@/assets/companies/CIBC.png";
import TD1 from "@/assets/companies/TD1.png";
import META from "@/assets/companies/Meta.png";
import AMD from "@/assets/companies/AMD.png";
import BELL from "@/assets/companies/Bell.png";
import SCOTIABANK from "@/assets/companies/Scotiabank.png";
import UBER1 from "@/assets/companies/Uber1.png";
import ACCENTURE from "@/assets/companies/Accenture.png";
import IBM from "@/assets/companies/IBM.png";
import KONRAD from "@/assets/companies/Konrad.png";
import MCKINSEY from "@/assets/companies/McKinsey.png";
import NATIONAL from "@/assets/companies/National.png";
import PWC1 from "@/assets/companies/PWC1.png";
import EY1 from "@/assets/companies/EY1.png";
import PG from "@/assets/companies/PG.png";
import EY_LOGO from "@/assets/companies/EY_Logo.png";
import INGENUITY_LOGO from "@/assets/companies/Ingenuity_Labs.png";
import RECALC_LOGO from "@/assets/Recalc.png";
import RBC_WHITE from "@/assets/companies/RBC_White.png";

import MICROSOFT from "@/assets/memberCardImages/Microsoft.png";
import TD from "@/assets/memberCardImages/TD.png";
import AMAZON_BLACK from "@/assets/memberCardImages/Amazon.png";
import PWC_BLACK from "@/assets/memberCardImages/PWC.png";
import DELOITTE_WHITE from "@/assets/memberCardImages/Deloitte_white.png";
import UBER_BLACK from "@/assets/memberCardImages/Uber.png";
import CANSBRIDGE from "@/assets/memberCardImages/Cansbridge_Fellowship.png";
import KATAROK from "@/assets/companies/Katarok.png";


import MEMBER_OLIVIA_XU from "@/assets/memberCardImages/Olivia_Xu.png";
import MEMBER_KEVIN from "@/assets/memberCardImages/Kevin_Yu.png";
import MEMBER_RABAB from "@/assets/memberCardImages/Rabab_Azeem.png";
import MEMBER_DANIEL from "@/assets/memberCardImages/Daniel_Wang.png";
import MEMBER_RODRIGO from "@/assets/memberCardImages/Rodrigo_D.png";
import MEMBER_GEORGE from "@/assets/memberCardImages/George_Trieu.png";
import MEMBER_SAM from "@/assets/memberCardImages/Sam_Lin.png";
import MEMBER_MARCELO from "@/assets/memberCardImages/Marcelo_M.png";
import MEMBER_LEVI from "@/assets/Levi_Stringer.png";
import MEMBER_HANI from "@/assets/Hani_khatib.png";
import MEMBER_ETHAN from "@/assets/Ethan_Callanan.png";
import MEMBER_JACOB from "@/assets/Jacob_Laframboise.png";

import EVENT_SHOPIFY1 from "@/assets/industry/Shopify_1.jpg";
import EVENT_SHOPIFY2 from "@/assets/industry/Shopify_2.jpg";
import EVENT_SHOPIFY3 from "@/assets/industry/Shopify_3.jpg";
import EVENT_SMITH1 from "@/assets/industry/inqu_smith_1.jpg";
import EVENT_SMITH2 from "@/assets/industry/inqu_smith_2.jpg";
import EVENT_SMITH3 from "@/assets/industry/inqu_smith_3.jpg";
import EVENT_CONNECT1 from "@/assets/industry/connect_1.jpg";
import EVENT_CONNECT2 from "@/assets/industry/connect_2.jpg";
import EVENT_CONNECT3 from "@/assets/industry/connect_3.jpg";
const EVENTS_HALF = [
  {
    fullImage: EVENT_SHOPIFY1,
    imgDescription: "Kaz Nejatian, Shopify COO & VP Product – 160 Attendees",
  },
  {
    fullImage: EVENT_SHOPIFY2,
    imgDescription: "Kaz Nejatian, Shopify COO & VP Product – 160 Attendees",
  },
  {
    fullImage: EVENT_SHOPIFY3,
    imgDescription: "Kaz Nejatian, Shopify COO & VP Product – 160 Attendees",
  },
  {
    fullImage: EVENT_SMITH1,
    imgDescription:
      "inQUbate's Product Leaders Panel with Smith Digital Product Management Master Program – 80 Attendees",
  },
  {
    fullImage: EVENT_SMITH2,
    imgDescription:
      "inQUbate's Product Leaders Panel with Smith Digital Product Management Master Program – 80 Attendees",
  },
  {
    fullImage: EVENT_SMITH3,
    imgDescription:
      "inQUbate's Product Leaders Panel with Smith Digital Product Management Master Program – 80 Attendees",
  },
  {
    fullImage: EVENT_CONNECT1,
    imgDescription: "QMIND Connect (Monthly Townhall) – 80 attendees",
  },
  {
    fullImage: EVENT_CONNECT2,
    imgDescription: "QMIND Connect (Monthly Townhall) – 80 attendees",
  },
];

export const EVENTS = [...EVENTS_HALF, ...EVENTS_HALF];

const COMPANIES_HALF = [
  {
    image: AMAZON1,
  },
  {
    image: MICROSOFT_WHITE,
  },
  {
    image: GOVERNMENT,
  },
  {
    image: DELOITTE_WHITE,
  },
  {
    image: CIBC,
  },
  {
    image: TD1,
  },
  {
    image: META,
  },
  {
    image: AMD,
  },
  {
    image: BELL,
  },
  {
    image: RBC_WHITE,
  },
  {
    image: SCOTIABANK,
  },
  {
    image: UBER1,
  },
  {
    image: ACCENTURE,
  },
  {
    image: IBM,
  },
  {
    image: KONRAD,
  },
  {
    image: MCKINSEY,
  },
  {
    image: NATIONAL,
  },
  {
    image: PWC1,
  },
  {
    image: EY1,
  },
  {
    image: PG,
  },
];

export const COMPANIES = [...COMPANIES_HALF, ...COMPANIES_HALF];

export const TESTIMONIALS = [
  {
    name: "Daniel Wang",
    headshot: MEMBER_DANIEL.src,
    linkedin: "https://www.linkedin.com/in/itsdanielwang/",
    team: "development",
    message:
      "QMIND enhanced my first-year experience far more than any classes or competition. My experience from QMIND were key talking points that played a pivotal role in landing an internship at Microsoft. Moreover, QMIND brought me closer to my lifelong friend, co-founder, and now house-mate. It's easy to say that QMIND has shaped my career and personal relationships.",
    position: "Business Program Manager",
    companyLogo: { img: { src: MICROSOFT.src, style: "h-[20px] md:h-[20px]" } },
    company: "Microsoft",
    angle: "rotate-[-10deg] !md:rotate-[3deg]",
    education: "Commerce '26",
  },
  {
    name: "Rabab Azeem",
    headshot: MEMBER_RABAB.src,
    linkedin: "https://www.linkedin.com/in/rabab-azeem/",
    team: "design",
    message:
      "Some of the best opportunities I have been given in my undergrad were snowballed from QMIND. This is such a great place to meet amazing people, grow my leadership skills and learn a ton about AI!",
    position: "Software Developer",
    companyLogo: {
      img: { src: AMAZON_BLACK.src, style: "h-[25px]" },
    },
    company: "Amazon",
    angle: "!rotate-[5deg] md:rotate-[-4deg]",
    education: "Applied Sciences '24",
  },

  {
    name: "Kevin Yu",
    headshot: MEMBER_KEVIN.src,
    linkedin: "https://kevinyu.ca/",
    team: "operations",
    message:
      "QMIND provided me the opportunity to learn and develop my technical and interpersonal skills which allowed me to become a better leader and engineer throughout my undergraduate journey.",
    position: "Software Developer",
    companyLogo: {
      img: {
        src: PWC_BLACK.src,
        style: "mt-[-10px] h-[40px] md:mt-[-13px] md:h-[40px]",
      },
    },
    company: "PWC",
    angle: "!rotate-[5deg] !md:rotate-[3deg]",
    education: "Applied Sciences '24",
  },
  {
    name: "Marcelo Chaman Mallqui",
    headshot: MEMBER_MARCELO.src,
    linkedin: "https://www.linkedin.com/in/marc-cham/",
    team: "operations",
    message:
      "QMIND has given me so many opportunities to learn about the things I am passionate about! I have met some amazing people through this club. I can say with confidence that QMIND is a big reason for my achievements as a university student.",
    position: "AI Systems Engineer",
    companyLogo: {
      img: { src: RECALC_LOGO.src, style: "mt-[3px] h-[15px] md:h-[20px]" },
    },
    company: "Recalc Academy",
    angle: "!rotate-[5deg] md:rotate-[-2deg]",
    education: "Commerce '26",
  },
  {
    name: "Olivia Xu",
    headshot: MEMBER_OLIVIA_XU.src,
    linkedin: "https://www.linkedin.com/in/olivia-chen-xu/",
    team: "development",
    message:
      "QMIND is a place where you can expect to be intellectually stimulated every day. Some of the best opportunities I have been given in my undergrad were snowballed from QMIND. This is such a great place to meet amazing people, grow my leadership skills and learn a ton about AI!",
    position: "Software Engineer",
    companyLogo: { img: { src: UBER_BLACK.src, style: "mt-[-5px] h-[30px]" } },
    company: "Uber",
    angle: "!rotate-[5deg] md:rotate-[-4deg]",
    education: "Computer Science '24",
  },

  {
    name: "Jacob Laframboise",
    headshot: MEMBER_JACOB.src,
    linkedin: "https://www.linkedin.com/in/jacob-laframboise/",
    team: "development",
    message:
      "My experiences as a design team member, project manager, an director were some key talking points in interviews to land internships.",
    position: "Software Engineer",
    companyLogo: {
      name: "",
      img: { src: AMAZON_BLACK.src, style: "h-[25px] mt-[5px]" },
    },
    company: "Amazon",
    angle: "!rotate-[5deg] md:rotate-[-2deg]",
    education: "Computer Science '23",
  },
  {
    name: "George Trieu",
    headshot: MEMBER_GEORGE.src,
    linkedin: "https://www.linkedin.com/in/georgetrieu/",
    team: "design",
    message:
      "QMIND helped me enhance my understanding of AI and provided me with the opportunity to manage a team of highly skilled individuals. I’m excited to see these skills applied in my professional career!",
    position: "Software Developer",
    companyLogo: {
      img: { src: AMAZON_BLACK.src, style: "h-[25px]" },
    },
    company: "Amazon",
    angle: "!rotate-[5deg] md:rotate-[4deg]",
    education: "Applied Sciences '23",
  },
  {
    name: "Ethan Callanan",
    headshot: MEMBER_ETHAN.src,
    linkedin: "https://www.linkedin.com/in/ethan-callanan/",
    team: "design",
    message:
      "QMIND was easily the most valuable experience of my undergraduate career. Leading projects pushed me to learn far beyond what was taught in courses, and gave me invaluable experience in overcoming the challenges of building real world applications.",
    position: "AI Researcher",
    companyLogo: {
      img: { src: INGENUITY_LOGO.src, style: "mt-[0px] h-[35px]" },
    },
    company: "Ingenuity Labs",
    angle: "!rotate-[5deg] md:rotate-[-2deg]",
    education: "Computer Science '23",
  },
  // {
  //   name: "Jordan Capello",
  //   headshot: MEMBER_JORDAN.src,
  //   linkedin: "https://www.linkedin.com/in/jordancapello/",
  //   team: "design",
  //   message:
  //     "QMIND has given me so many opportunities to learn about the things I am passionate about! I have met some amazing people through this club. I can say with confidence that QMIND is a big reason for my achievements as a university student.",
  //   position: "Data Analyst",
  //   companyLogo: { img: { src: IRVING.src, style: "mt-[-20px] h-[60px]" } },
  //   company: "Irving",
  //   angle: "!rotate-[5deg] md:rotate-[-2deg]",
  // },
  {
    name: "Hani Khatib",
    headshot: MEMBER_HANI.src,
    linkedin: "https://www.linkedin.com/in/hani-khatib/",
    team: "design",
    message:
      "At QMIND, leading a team to develop a multi-modal deep learning pipeline and co-authoring an acclaimed bioinformatics research paper were highlights that pushed my career to new heights. I came to QMIND with a passion for data science and left with a broad and adaptable approach to problem-solving. My experiences at QMIND largely shaped my career in Cybersecurity Consulting at EY, providing me with the soft skills to connect effectively in a consulting environment, and the hard skills to contribute analytically.",
    position: "Cybersecurity Consultant",
    companyLogo: { img: { src: EY_LOGO.src, style: "mt-[-5px] h-[35px]" } },
    company: "EY",
    angle: "!rotate-[5deg] md:rotate-[2deg]",
    education: "Commerce '22",
  },
  {
    name: "Rodrigo Del Aguila",
    headshot: MEMBER_RODRIGO.src,
    linkedin: "https://www.linkedin.com/in/rodrigo-delaguila/",
    team: "design",
    message:
      "From being introduced to ML through a project to being able to create my own startup and make valuable connections, QMIND has been key in my professional development. It's amazing to think about the opportunities and learning experiences I have gotten from being a part of an incredibly talented and driven team in only a couple of years!",
    position: "Cybersecurity Analyst",
    companyLogo: { img: { src: TD.src, style: "mt-[-5px] !h-[25px]" } },
    company: "TD",
    angle: "!rotate-[5deg] md:rotate-[1deg]",
    education: "Applied Science '25",
  },
  {
    name: "LEVI Stringer",
    headshot: MEMBER_LEVI.src,
    linkedin: "https://www.linkedin.com/in/levistringer/",
    team: "development",
    message:
      "QMIND has had such a pivotal role in my development at Queens. There I acquired skills necessary to take ML problems head on and figure it out as we went. Sometimes with my small tech firm Katarok, it feels very reminiscent of those days. Where the direction is completely open and you get to work with extremely talented and amazing individuals to accomplish big things!",
    position: "Founder",
    companyLogo: {
      name: "",
      img: { src: KATAROK.src, style: "h-[50px] !mt-[-22px]" },
    },
    company: "Katarok",
    angle: "!rotate-[5deg] !md:rotate-[3deg]",
    education: "Applied Science '20",
  },
  {
    name: "Sam Lin",
    headshot: MEMBER_SAM.src,
    linkedin: "https://www.linkedin.com/in/samlin12/",
    team: "development",
    message:
      "QMIND has been an incredible opporunity to learn and work alongside a team of bright and inspiring young people. Being part of QMIND has honed my leadership and communication skills in countless ways.",
    position: "Growth Strategy Analyst",
    companyLogo: {
      name: "Cansbridge Fellowship",
      img: { src: CANSBRIDGE.src, style: "h-[25px] mt-[1px]" },
    },
    company: "Cansbridge Fellowship",
    angle: "!rotate-[5deg] !md:rotate-[3deg]",
    education: "Ivey Business '25",
  },
];

export const DESIGN_PROJECTS = [
  {
    image: VIRTUAL,
    title: "Virtual Assistant Attention Detection",
    teamMembers: [],
    description:
      "The goal of this project was to develop a novel system to provide a more natural interface for interacting with virtual assistant devices.",
    href: "/Virtual_Assistant.pdf",
  },
  {
    image: QUANTUM,
    title: "Quantum Generative Adversarial Networks",
    teamMembers: [],
    description:
      "Examining a challenge in prior QGAN implementations, we propose a novel method for reducing MNIST dimensions, enabling encoding in limited qubits.",
    href: "/Quantum_Generative.pdf",
  },
  {
    image: ANDRIOD,
    title: "Android Waste Classification",
    teamMembers: [],
    description:
      "This algorithm was designed help increase the waste diversion rate on campus by reducing the amount of misclassified waste with an achieved 80% accuracy.",
    href: "/Android_Waste.pdf",
  },
  {
    image: DIABETES,
    title: "Predictive Diabetic Risk Modelling",
    teamMembers: [],
    description:
      "The objective of this study was to develop a wholistic diabetes risk model that has strong predictive ability and maintains interpretability.",
    href: "/Predictive_Diabetic.pdf",
  },
];

export const DATA = [
  {
    id: 1,
    main_text: "230+",
    subtitle: "Software Developers",
  },
  {
    id: 2,
    main_text: "200+",
    subtitle: "AI papers & Projects",
  },

  {
    id: 3,
    main_text: "320+",
    subtitle: "Delegates at CUCAI",
  },

  {
    id: 4,
    main_text: "25+",
    subtitle: "Industry Clients",
  },
  {
    id: 5,
    main_text: "45",
    subtitle: "Tech Articles",
  },
  {
    id: 6,
    main_text: "35",
    subtitle: "Projects in 2023",
  },
  {
    id: 7,
    main_text: "325+",
    subtitle: "Hours Read on Medium",
  },
];
