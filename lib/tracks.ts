export type LevelId = 'beginner' | 'intermediate';

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
  outcomes: string[];
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
    outcomes: [
      'Build responsive, accessible pages with HTML and CSS',
      'Work confidently with modern JavaScript',
      'Build apps with React, Next.js and TypeScript',
      'Consume APIs and handle loading and error states',
      'Collaborate with Git, pull requests and code review',
      'Use AI coding tools to scaffold, debug and ship faster — and know when not to trust them',
      'Ship a portfolio-ready project you can talk through',
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
    outcomes: [
      'Work fluently in Figma — frames, layout, styles',
      'Build reusable components with Auto Layout and variants',
      'Turn a brief into wireframes and a polished UI',
      'Prototype and test flows before a line of code',
      'Use AI tools to generate first drafts, copy and imagery fast',
      'Maintain a small design system',
      'Hand off designs developers can build from',
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
    outcomes: [
      'Build documented REST APIs with FastAPI and NestJS',
      'Model data and write efficient database queries',
      'Add authentication and authorization safely',
      'Handle background jobs, queues and caching',
      'Instrument, log and debug a running service',
      'Use AI tools to scaffold endpoints, write tests and speed up debugging',
      'Deploy a backend and keep it healthy',
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
    outcomes: [
      'Take a product idea from sketch to deployed app',
      'Build the frontend and the backend that feeds it',
      'Set up a database and connect it end to end',
      'Handle accounts, sessions and protected routes',
      'Use AI tools across the stack to build and ship faster',
      'Deploy, monitor and iterate on a live product',
      'Leave with one real product in your portfolio',
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
    outcomes: [
      'Call LLM APIs and stream responses inside an app',
      'Design and test prompts that hold up in production',
      'Build retrieval-augmented (RAG) features over your own data',
      'Use embeddings for search and similarity',
      'Compose simple tool-using agents',
      'Evaluate accuracy, cost and latency of what you ship',
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
    outcomes: [
      'Build and run a cross-platform app on real devices',
      'Design mobile navigation and screen flows',
      'Use device capabilities: camera, location, notifications',
      'Handle offline state and local persistence',
      'Use AI coding tools to move faster across screens and platforms',
      'Prepare a build for the app stores',
      'Ship a mobile app to your portfolio',
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
    outcomes: [
      'Query and join data confidently with SQL',
      'Clean and shape messy datasets in Python',
      'Explore data and spot what actually matters',
      'Use AI tools to speed up exploration, queries and summaries',
      'Build dashboards people will actually use',
      'Communicate findings to non-technical teams',
      'Deliver an end-to-end analysis project',
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
    outcomes: [
      'Run a project with Agile, Scrum or Kanban',
      'Break work into a backlog and plan sprints',
      'Build realistic timelines and track progress',
      'Spot risks and unblock the team early',
      'Use AI tools to draft updates, summaries and reports faster',
      'Keep stakeholders aligned with clear updates',
      'Run standups, reviews and retrospectives',
    ],
  },
];

export const TRACK_SLUGS = TRACKS.map((t) => t.slug);
