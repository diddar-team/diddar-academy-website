type LevelId = 'beginner' | 'intermediate';

export const LEVELS: { id: LevelId; label: string; hint: string }[] = [
  {
    id: 'beginner',
    label: 'Beginner',
    hint: 'New to this — starting from fundamentals',
  },
  {
    id: 'intermediate',
    label: 'Intermediate',
    hint: 'Some experience — ready to go deeper',
  },
];

export const COHORT_LENGTH = '12 weeks';

export type Track = {
  slug: string;
  name: string;
  tagline: string;
  blurb: string;
  levels: LevelId[];
  stack: string[];
};

export const TRACKS: Track[] = [
  {
    slug: 'frontend',
    name: 'Frontend Engineering (with AI)',
    tagline: 'Interfaces people remember, built faster with AI',
    blurb:
      'Start with HTML, CSS and vanilla JavaScript, then step up to React, Next.js and TypeScript — while learning to use AI coding tools like Copilot, Cursor and Claude as your everyday pair programmer, not a crutch.',
    levels: ['beginner', 'intermediate'],
    stack: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Next.js',
      'TypeScript',
      'AI coding tools',
    ],
  },
  {
    slug: 'product-design',
    name: 'Product Design (with AI)',
    tagline: 'Design that ships, faster with AI',
    blurb:
      'Learn to design real product interfaces in Figma — from wireframes and layout to components, prototyping and clean developer handoff — plus AI tools for first drafts, copy, imagery and speeding up iteration.',
    levels: ['beginner', 'intermediate'],
    stack: [
      'Figma',
      'Auto Layout',
      'Components',
      'Prototyping',
      'Design systems',
      'Handoff',
      'AI design tools',
    ],
  },
  {
    slug: 'backend',
    name: 'Backend Engineering (with AI)',
    tagline: 'Systems that hold up, built with AI in the loop',
    blurb:
      'Design reliable APIs and data models with Python (FastAPI) and Node.js (NestJS) — from the first request to real scale — while using AI tools to scaffold code, write tests and debug faster.',
    levels: ['beginner', 'intermediate'],
    stack: [
      'Python',
      'FastAPI',
      'Node.js',
      'NestJS',
      'REST APIs',
      'Databases',
      'AI coding tools',
    ],
  },
  {
    slug: 'fullstack',
    name: 'Fullstack Development (with AI)',
    tagline: 'Both sides, end to end, faster with AI',
    blurb:
      'Learn the front and the back together — a Next.js frontend, a FastAPI or NestJS backend, a database, and how to connect and ship the whole thing — using AI tools at every step to move faster without losing the fundamentals.',
    levels: ['beginner', 'intermediate'],
    stack: [
      'JavaScript',
      'React',
      'Next.js',
      'Node.js / Python',
      'Databases',
      'Deployment',
      'AI coding tools',
    ],
  },
  {
    slug: 'ai-for-developers',
    name: 'AI for Developers',
    tagline: 'Build with models, not hype',
    blurb:
      'The other side of AI: not using AI tools to code faster, but building the AI-powered features themselves — working with LLM APIs, prompts, retrieval (RAG), embeddings and simple agents, plus how to evaluate what you ship.',
    levels: ['beginner', 'intermediate'],
    stack: [
      'LLM APIs',
      'Prompt design',
      'RAG',
      'Embeddings',
      'Agents',
      'Evaluation',
    ],
  },
  {
    slug: 'mobile',
    name: 'Mobile Development (with AI)',
    tagline: 'Apps in real pockets, built faster with AI',
    blurb:
      'Build cross-platform mobile apps with React Native and Expo — navigation, native APIs, offline behaviour and store-ready polish — with AI coding tools speeding up the parts that used to take all day.',
    levels: ['intermediate'],
    stack: [
      'React Native',
      'Expo',
      'Navigation',
      'Native APIs',
      'Local storage',
      'Release',
      'AI coding tools',
    ],
  },
  {
    slug: 'data-analytics',
    name: 'Data & Analytics (with AI)',
    tagline: 'Turn data into decisions, faster with AI',
    blurb:
      'Go from raw data to clear answers with SQL, Python and visualization — the analytics foundation every product team needs — plus AI copilots for exploring data, writing queries and summarising findings.',
    levels: ['beginner', 'intermediate'],
    stack: [
      'SQL',
      'Python',
      'Pandas',
      'Visualization',
      'Dashboards',
      'Statistics',
      'AI analysis tools',
    ],
  },
  {
    slug: 'project-management',
    name: 'Project Management (with AI)',
    tagline: 'Get the work shipped, faster with AI',
    blurb:
      'Learn to plan and run software projects — Agile and Scrum, sprint planning and backlogs, timelines, risk, and the stakeholder communication that keeps a team moving — plus AI copilots for planning, status updates and reporting.',
    levels: ['beginner', 'intermediate'],
    stack: [
      'Agile',
      'Scrum',
      'Kanban',
      'Backlogs',
      'Roadmaps',
      'Jira',
      'AI PM tools',
    ],
  },
];

export const TRACK_SLUGS = TRACKS.map((t) => t.slug);
