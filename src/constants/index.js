// ─── Helpers ────────────────────────────────────────────────
export const pad = (n) => String(n).padStart(2, '0');

export const formatTime = (d) =>
  `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;

export const formatDate = (d) => {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  return `${days[d.getDay()]} ${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()}`;
};

// Clean scroll — no hash appended to URL
export const scrollTo = (sectionId) => {
  const el = document.getElementById(sectionId);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// ─── Site Config ─────────────────────────────────────────────
export const SITE_CONFIG = {
  name:     'Umaid Khan',
  role:     'Creative Developer',
  version:  'V.01',
  year:     '2026',
  location: '19.0260° N, 72.8720° E',
  city:     'Mumbai, India',
  email:    'umaidkhan8108@gmail.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/umaid-khan',
    github:   'https://github.com/Umaidkhan12',
    twitter:  '#',
  },
  hero: {
    title:    'Creative \n Developer',
    subtitle: 'Building bespoke digital experiences with a focus on high-end design and fluid animations.',
    cta:      'Get In Touch',
  },
};

// ─── Navigation ──────────────────────────────────────────────
export const NAV_LINKS = [
  { name: 'About',   id: '01', section: 'about'        },
  { name: 'Skills',  id: '02', section: 'skills'       },
  { name: 'Works',   id: '03', section: 'projects'     },
  { name: 'History', id: '04', section: 'experience'   },
  { name: 'Studies', id: '05', section: 'education'    },
  { name: 'Awards',  id: '06', section: 'achievements' },
  { name: 'Contact', id: '07', section: 'contact'      },
];

// ─── Data ────────────────────────────────────────────────────
export const TECH_STACK = [
  { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind', 'Framer Motion', 'GSAP'] },
  { category: 'Backend',  items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
  { category: 'Tools',    items: ['Git', 'Docker', 'Vercel', 'AWS'] },
];

export const EXPERIENCE = [
  {
    company:     'NextGen Solutions',
    role:        'Lead Developer',
    period:      '2024 – Present',
    description: 'Leading frontend architecture for scalable web apps using React and GSAP for high-end visual storytelling.',
  },
  {
    company:     'Tech Innovators',
    role:        'Full Stack Engineer',
    period:      '2022 – 2024',
    description: 'Developed bespoke digital products focusing on performance and micro-interactions.',
  },
];

export const EDUCATION = [
  {
    degree:      'Bachelor of Computer Applications',
    school:      'University of Mumbai',
    period:      '2019 – 2022',
    description: 'Focused on software engineering principles and web technologies.',
  },
];

export const ACHIEVEMENTS = [
  {
    title:        'Best Developer Award',
    organization: 'NextGen Solutions',
    year:         '2025',
    description:  'Recognized for outstanding contribution to the core UI/UX framework.',
  },
  {
    title:        'Open Source Contributor',
    organization: 'GitHub',
    year:         '2023',
    description:  'Active contributor to major frontend libraries and community projects.',
  },
];

export const PROJECTS = [
  {
    title:      "Lumina Labs",
    category:   "Brand Identity / Web",
    year:       "2025",
    index:      "01",
    color:      "#c8ff00",
    bg:         "from-[#c8ff0012] to-transparent",
    tags:       ["Branding", "Motion", "UI"],
    description: "A full identity system built around light, contrast, and precision type.",
  },
  {
    title:      "Aether Flow",
    category:   "Product Design",
    year:       "2024",
    index:      "02",
    color:      "#ff6b35",
    bg:         "from-[#ff6b3512] to-transparent",
    tags:       ["UX", "Design System"],
    description: "Fluid interactions and a scalable component library for a SaaS dashboard.",
  },
  {
    title:      "Nexus Studio",
    category:   "E-Commerce",
    year:       "2024",
    index:      "03",
    color:      "#a78bfa",
    bg:         "from-[#a78bfa12] to-transparent",
    tags:       ["E-Commerce", "Web"],
    description: "High-conversion storefront with editorial art direction and custom CMS.",
  },
];

export const ABOUT_STATS = [
  { num: '4+',  label: 'Years Experience' },
  { num: '20+', label: 'Projects Shipped'  },
  { num: '2',   label: 'Awards Won'        },
];