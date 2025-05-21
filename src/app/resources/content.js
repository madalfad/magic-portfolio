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
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
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
    title: <>Recent project: <strong className="ml-4">Pomodo.Study</strong></>,
    href: "https://pomodo.study",
  },
  subline: (
    <>
      I'm {person.firstName}, a third-year medical student at AUC School of Medicine, where I am training to be a physician.
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
        {person.firstName} is an Indiana-based medical student with a passion for transforming complex challenges
        in medicine and technology into simple, elegant solutions. His work spans adacemic research, clinical care, 
        and the convergence of medicine and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work",
    experiences: [
      {
        company: "Pearlium Health",
        timeframe: "2025 - Present",
        role: "Founder, Lead Developer",
        achievements: [
          <>
            Developed Pearlium Health, an AI-powered modular clinical platform for providers to streamline 
            patient care workflows.
          </>,
          <>
            Developed PearlLM, an AI-powered clinical decision support system with industry-leading performance
            and accuracy in clinical tasks.
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
        description: <>B.S. in Neuroscience, 2021<br />B.A. in Chemistry, 2021</>,
        image: "/images/resources/IUSeal.png",
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Python",
        description: <>Certified Associate Python Programmer, OpenEDG Python Institute (2025)</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  research: {
    display: true, // set to false to hide this section
    title: "Research",
    projects: [
      {
        title: "Case Report: Management of Cerebral Arterial Gas Embolism via Transfer to an Outpatient Hyperbaric Chamber",
        description: "Frontiers in Medicine",
        link: "http://dx.doi.org/10.3389/fmed.2025.1533459",
        image: "https://i.ibb.co/wNN2xsQD/frontiers-removebg-preview.png",
      },
      {
        title: "Progressive Choreiform Movements in a Child: Early Recognition and Management of Sydenham Chorea",
        description: "Tremor and Other Hyperkinetic Movements",
        link: "http://dx.doi.org/10.5334/tohm.988", 
        image: "https://storage.googleapis.com/jnl-up-j-tohm-public/journals/1/pageHeaderLogoImage_en_US.png?t=1743616380000",
      },
      {
        title: "Markers of Futile Resuscitation in Traumatic Hemorrhage: A Review of the Evidence and a Proposal for Futility Time-Outs during Massive Transfusion",
        description: "Journal of Clinical Medicine",
        link: "http://dx.doi.org/10.3390/jcm13164684",
        image: "https://pub.mdpi-res.com/img/journals/jcm-logo.png?6922832c4f546280",
      },
      {
        title: "Traumatic Brain Injury as an Independent Predictor of Futility in the Early Resuscitation of Patients in Hemorrhagic Shock",
        description: "Journal of Clinical Medicine",
        link: "http://dx.doi.org/10.3390/jcm13133915",
        image: "https://pub.mdpi-res.com/img/journals/jcm-logo.png?6922832c4f546280",
      },
      {
        title: "Recurring Eczema Herpeticum Complicated by Herpetic Meningitis and Staphylococcal Bacteremia",
        description: "Journal of Emergency Medicine: Reports",
        link: "http://dx.doi.org/10.1016/j.jemrpt.2024.100085",
        image: "https://ars.els-cdn.com/content/image/1-s2.0-S2773232024X00024-cov200h.gif",
      },
      {
        title: "Acute Management of Stroke in Patients with Polycythemia Vera",
        description: "ACTA Scientific Neurology",
        link: "http://dx.doi.org/10.31080/ASNE.2023.06.0684",
        image: "https://i.ibb.co/3D0c08N/image-removebg-preview.png",
      },
      {
        title: "Iatrogenic Air Embolism: Pathoanatomy, Thromboinflammation, Endotheliopathy, and Therapies",
        description: "Frontiers in Immunology",
        link: "http://dx.doi.org/10.3389/fimmu.2023.1230049",
        image: "https://i.ibb.co/wNN2xsQD/frontiers-removebg-preview.png",
      },
      {
        title: "Type B Lactic Acidosis in a Patient with Mantle Cell Lymphoma",
        description: "Case Reports in Critical Care",
        link: "https://doi.org/10.1155/2023/7021123",
        image: "https://i.ibb.co/DHLTYP8K/default-cover.jpg",
      },
      {
        title: "SHock-INduced Endotheliopathy (SHINE): A mechanistic justification for viscoelastography-guided resuscitation of traumatic and non-traumatic shock",
        description: "Frontiers in Physiology",
        link: "https://doi.org/10.3389/fphys.2023.1094845",
        image: "https://i.ibb.co/wNN2xsQD/frontiers-removebg-preview.png",
      },
      {
        title: "The Choice between Plasma-Based Common Coagulation Tests and Cell-Based Viscoelastic Tests in Monitoring Hemostatic Competence: Not an either-or Proposition",
        description: "Seminars in Thrombosis and Hemostasis",
        link: "https://doi.org/10.1055/s-0042-1756302",
        image: "https://pbs.twimg.com/profile_banners/1304487162021326853/1599849235/1500x500",
      },
      {
        title: "Viscoelastic Hemostatic Assays: A Primer on Legacy and New Generation Devices",
        description: "Journal of Clinical Medicine",
        link: "https://doi.org/10.3390/jcm11030860",
        image: "https://pub.mdpi-res.com/img/journals/jcm-logo.png?6922832c4f546280",
      },
      {
        title: "Viscoelastic Testing and Coagulopathy of Traumatic Brain Injury",
        description: "Journal of Clinical Medicine",
        link: "https://doi.org/10.3390/jcm10215039",
        image: "https://pub.mdpi-res.com/img/journals/jcm-logo.png?6922832c4f546280",
      },
      {
        title: "Preventing Thrombohemorrhagic Complications of Heparinized COVID-19 Patients Using Adjunctive Thromboelastography: A Retrospective Study",
        description: "Journal of Clinical Medicine",
        link: "https://doi.org/10.3390/jcm10143097",
        image: "https://pub.mdpi-res.com/img/journals/jcm-logo.png?6922832c4f546280",
      },
      {
        title: "Value of Viscoelastic Testing in Detecting Fibrinolysis and Coagulopathy in Malignancy-Associated Coagulopathy and Orthopaedic Trauma",
        description: "ANZ Journal of Surgery",
        link: "https://doi.org/10.1111/ans.15675",
        image: "https://i.ibb.co/TC8HrcB/14452197.webp",
      },
      {
        title: "Septic Superficial Femoral Vein Thrombophlebitis Causing Pulmonary Emboli and Respiratory Failure: Case Report and Review of the Literature",
        description: "International Journal of Clinical Medicine",
        link: "https://doi.org/10.4236/ijcm.2019.108034",
        image: "https://i.ibb.co/9HxGDXWY/image-removebg-preview-1.png",
      },
      {
        title: "Psychosocial Barriers to Equitable Food Access: A Qualitative Analysis of Food Pantries in Northern Indiana",
        description: "Indiana University School of Medicine Medical Education Day",
        link: "",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Indiana_University_School_of_Medicine_logo.png/1200px-Indiana_University_School_of_Medicine_logo.png?20230207052929",
      },
      {
        title: "Trends in Robotic Spine Surgery Over Time: An Analysis of HCUP NIS Data from 2010 to 2021",
        description: "Congress of Neurological Surgeons (CNS) Annual Meeting",
        link: "",
        image: "https://dm27uw8wcv0cc.cloudfront.net/Assets/image/webp/50553a69-7ae8-4687-979a-021bbbeacc09.webp",
      },
      {
        title: "A 20-year-old Male with Photophobia and a Rapidly Worsening Vesicular Rash",
        description: "Indiana University School of Medicine South Bend Grand Rounds",
        link: "",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Indiana_University_School_of_Medicine_logo.png/1200px-Indiana_University_School_of_Medicine_logo.png?20230207052929",
      },
      {
        title: "Intravascular Lithotripsy (IVL)",
        description: "Beacon Memorial Hospital Grand Rounds",
        link: "",
        image: "https://i.ibb.co/Z1Ttgv49/1602303125644-removebg-preview.png",
      },
    ]
  }
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
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

export { person, social, newsletter, home, about, blog, work, gallery };
