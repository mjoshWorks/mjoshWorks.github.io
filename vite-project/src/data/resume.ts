// All the website's content lives here, taken from my CV.
// To update the site, edit this file only.

export interface Job {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export const profile = {
  name: 'Mcquinley Josh G. Maglangit',
  headline: 'Back Office & Customer Support Professional',
  tagline:
    'I keep work accurate, customers happy, and teams moving, from data entry to high-volume customer care.',
  location: 'Cagayan de Oro City, Philippines',
  photo: '/profile.jpg',
  cv: '/Maglangit-CV.pdf',
};

export const about = {
  summary:
    'I am a BS Information Technology graduate from the University of Science and Technology of Southern Philippines. My experience covers back-office support, high-volume customer care, and data annotation quality review. I take pride in accurate work, clear communication, and helping my team hit its goals.',
  highlights: [
    { value: '4+', label: 'years in data annotation & QA' },
    { value: '3', label: 'professional roles' },
    { value: 'BSIT', label: 'USTP graduate & city scholar' },
  ],
};

export const contact = {
  email: 'maglangit.mjosh@gmail.com',
  phone: '+63 953 360 4548',
  phoneLink: 'tel:+639533604548',
  website: 'https://mjoshworks.github.io/',
};

export const socials = {
  github: 'https://github.com/mjoshWorks',
  linkedin: 'https://www.linkedin.com/in/mcquinley-josh-maglangit-08a957281/',
  facebook: 'https://www.facebook.com/m.josh03',
};

export const experience: Job[] = [
  {
    role: 'VKAM Back Office',
    company: 'Support Zebra',
    location: 'Cagayan de Oro, Philippines',
    period: 'Sep 2025 – Present',
    current: true,
    points: [
      'Performed data labeling and data entry tasks with attention to accuracy and consistency.',
      'Entered and maintained information in accordance with assigned task requirements.',
      'Coordinated with team members to communicate task updates and support workflow completion.',
    ],
  },
  {
    role: 'Customer Care Representative',
    company: 'Teleperformance',
    location: 'Cagayan de Oro, Philippines',
    period: 'Apr 2025 – Jul 2025',
    points: [
      'Handled a high volume of customer calls while maintaining professional, efficient service.',
      'Assisted customers with inquiries through clear communication and a positive, customer-focused approach.',
      'Consistently met call center performance targets and contributed to team service objectives.',
    ],
  },
  {
    role: '3D Lidar - Video Annotation',
    company: 'Speakify',
    location: 'Cagayan de Oro, Philippines',
    period: 'Aug 2020 – Dec 2024',
    points: [
      'Reviewed daily task submissions for accuracy and consistency, maintaining quality across assigned workloads.',
      'Provided constructive feedback to fellow reviewers to improve task quality and team performance.',
      'Implemented a training program for new reviewers to improve review accuracy and consistency.',
      'Protected sensitive client information in accordance with company policies and industry confidentiality standards.',
    ],
  },
];

export const education = {
  degree: 'Bachelor of Science in Information Technology',
  school: 'University of Science and Technology of Southern Philippines',
  location: 'Cagayan de Oro, Philippines',
  period: 'Oct 2021 – Jan 2025',
  honor: 'Iskolar sa Dakbayan scholarship recipient, Cagayan de Oro City, 2021',
};

export const skills: SkillGroup[] = [
  {
    title: 'Administrative Support',
    items: ['Document management', 'Data entry', 'Data annotation', 'Report preparation', 'Calendar and schedule coordination'],
  },
  {
    title: 'Customer Service',
    items: ['High-volume call handling', 'Customer assistance', 'Client follow-up'],
  },
  {
    title: 'Quality & Team Coordination',
    items: ['Task review', 'Quality assurance', 'Workflow improvement', 'Reviewer training', 'Cross-functional collaboration'],
  },
  {
    title: 'Software',
    items: ['Microsoft Excel', 'Microsoft PowerPoint', 'Github', 'VSCode', 'Trello', 'ReactJS'],
  },
];

// The sections shown in the sidebar menu (id must match the section's id).
export const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];
