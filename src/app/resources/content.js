import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Mahmoud",
  lastName: "Al-Fadhl",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Medical Student",
  avatar: "/images/hs1sq.jpg",
  email: "mahmoud@madalfad.me",
  location: "America/Indianapolis", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Arabic"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/madalfad",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mal-fadhl/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between medicine and technology</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">Pomodo.Study</strong>
      </>
    ),
    href: "https://pomodo.study",
  },
  subline: (
    <>
      I'm {person.firstName}, a third-year medical student at AUC School of
      Medicine, where I am training to be a physician.
      <br /> After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://app.reclaim.ai/m/madalfad/flexible-quick-meeting",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} is an Indiana-based medical student with a passion
        for transforming complex challenges in medicine and technology into
        simple, elegant solutions. His work spans adacemic research, clinical
        care, and the convergence of medicine and technology.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work",
    experiences: [
      {
        company: "Pearlium Health",
        timeframe: "2025 - Present",
        role: "Founder, Lead Developer",
        achievements: [
          <>
            Developed Pearlium Health, an AI-powered modular clinical platform
            for providers to streamline patient care workflows.
          </>,
          <>
            Developed PearlLM, an AI-powered clinical decision support system
            with industry-leading performance and accuracy in clinical tasks.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Pearlium Health",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "American University of the Caribbean School of Medicine",
        description: <>M.D. Candidate</>,
        image: "/images/resources/AUCSeal.png",
      },
      {
        name: "Indiana University School of Medicine",
        description: <>M.S. in Medical Sciences, 2025</>,
        image: "/images/resources/IUSeal.png",
      },
      {
        name: "Loyola University Chicago",
        description: <>M.A. in Medical Sciences, 2022</>,
        image: "/images/resources/LUCSeal.png",
      },
      {
        name: "Indiana University Bloomington",
        description: (
          <>
            B.S. in Neuroscience, 2021
            <br />
            B.A. in Chemistry, 2021
          </>
        ),
        image: "/images/resources/IUSeal.png",
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    certifications: [
      "OpenEDG PCAP – Certified Associate Python Programmer",
      "CITI Program Biomedical Researcher",
      "CITI Program Social/Behavioral Researcher",
      "American Red Cross Basic Life Support (BLS) for Healthcare Providers",
      "Mentor Collective Trained Mentor",
    ],
    technical: [
      "Python",
      "Data Science",
      "Artificial Intelligence",
      "Electronic Medical Records",
      "Microsoft Office Suite",
      "Google Suite",
      "Adobe Suite",
      "JetBrains Suite",
      "LLM Prompting",
      "Retinal Imaging",
      "Github",
      "EndNote",
      "LaTeX",
    ],
    practical: [
      "Academic Writing",
      "Mentoring",
      "Leadership",
      "Application Consulting",
      "Biostatistical Analysis",
      "Experimental Design",
      "Trumpet Performance",
    ],
  },
  research: {
    display: true, // set to false to hide this section
    title: "Research",
    // Projects are now fetched from Google Sheets at build time.
    // See src/app/utils/research.ts for the fetch utility.
    projects: [],
  },
};

const research = {
  path: "/research",
  label: "Research",
  title: "Research publications and writing",
  description: `Explore ${person.name}'s research publications, abstracts, and academic writing`,
  // Create new research posts by adding a new .mdx file to app/research/posts
  // All posts will be listed on the /research route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, research, work, gallery };
