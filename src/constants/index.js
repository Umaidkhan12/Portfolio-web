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
  role:     'Software Developer',
  version:  'V.02.2',
  year:     '2026',
  location: '19.0260° N, 72.8720° E',
  city:     'Mumbai, India',
  phone:    '+91 8433800265',
  email:    'umaidkhan8108@gmail.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/umaid-khan',
    github:   'https://github.com/Umaidkhan12',
    twitter:  '#',
  },
  hero: {
    title:    'Software \n Developer',
    subtitle: 'IT Graduate with a passion for Web, Game, and App Development. Focused on building practical projects and learning every day.',
    cta:      'Get In Touch',
  },
};

// ─── Navigation ──────────────────────────────────────────────
export const NAV_LINKS = [
  { name: 'About',   id: '01', section: 'about'        },
  { name: 'Skills',  id: '02', section: 'skills'       },
  { name: 'Works',   id: '03', section: 'projects'     },
  { name: 'Studies', id: '04', section: 'education'    },
  { name: 'Awards',  id: '05', section: 'achievements' },
  { name: 'Beyond',  id: '06', section: 'languages'    },
  { name: 'Contact', id: '07', section: 'contact'      },
];

// ─── Data ────────────────────────────────────────────────────
export const TECH_STACK = [
  { category: 'Languages', items: ['C', 'C++', 'C#', 'Java', 'Python', 'Kotlin'] },
  { category: 'Web & UI',  items: ['HTML', 'CSS', '.NET', 'Android (XML)'] },
  { category: 'Tools',     items: ['Git', 'GitHub', 'Firebase', 'Streamlit', 'Android Studio'] },
];

export const EDUCATION = [
  {
    degree:      'Bachelor of Science in Information Technology',
    school:      'SIWS College, Wadala',
    period:      '2022 – 2025',
    percentage:  '85%',
    description: 'Final-year BSc IT student with a focus on software engineering, Android development, and AI-integrated applications.',
  },
];

export const ACHIEVEMENTS = [
  {
    title:        'MSSU Competition',
    organization: 'MSSU — Top 20 Qualifier',
    year:         '2024',
    description:  'Qualified among the Top 20 participants in the MSSU competition, demonstrating strong technical and problem-solving skills.',
  },
  {
    title:        'Startup Pitch',
    organization: 'ICT Academy',
    year:         '2024',
    description:  'Presented a startup pitch at ICT Academy, showcasing innovation and entrepreneurial thinking to an industry panel.',
  },
];

export const PROJECTS = [
  {
    title:      'Shopping Cart App',
    category:   'Android Development',
    year:       '2024',
    index:      '01',
    color:      '#c8ff00',
    bg:         'from-[#c8ff0012] to-transparent',
    tags:       ['Kotlin', 'Firebase', 'Android'],
    description: 'A functional shopping app with secure Firebase login, real-time cart updates with Firestore, and a clean RecyclerView UI with image loading via Glide.',
    techDetails: ['Kotlin', 'Firebase Auth', 'Firestore', 'Android Jetpack', 'Glide'],
  },
  {
    title:      'MultiPersonality AI',
    category:   'AI / Web App',
    year:       '2024',
    index:      '02',
    color:      '#a78bfa',
    bg:         'from-[#a78bfa12] to-transparent',
    tags:       ['Python', 'Streamlit', 'AI'],
    description: 'A chatbot web app featuring multiple AI personalities with distinct conversation styles, powered by Hugging Face Inference API and built with Streamlit.',
    techDetails: ['Python', 'Streamlit', 'Hugging Face Inference API'],
  },
];

export const ABOUT_STATS = [
  { num: '2+',  label: 'Projects Built'   },
  { num: 'BSc', label: 'IT — 2025'        },
  { num: '2',   label: 'Awards Won'       },
];

export const ABOUT_TEXT = [
  'I am an IT Graduate with a strong interest in building digital solutions. Whether it is developing responsive web applications, creating interactive games, or building mobile apps, I enjoy the process of turning ideas into reality through code.',
  'As a fresher, I am eager to apply my technical skills to real-world projects and grow as a developer. I am looking for a role where I can learn from experienced professionals and contribute to building meaningful technology.',
];

export const LANGUAGES = [
  { name: 'English', level: 'Proficient' },
  { name: 'Hindi',   level: 'Native'     },
];

export const INTERESTS = [
  'Playing Games',
  'Travelling',
  'Reading',
  'Coding',
];