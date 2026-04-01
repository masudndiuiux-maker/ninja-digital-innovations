export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  problem: string;
  research: string;
  process: string[];
  solution: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: 'zenpay-mobile-banking',
    title: 'ZenPay Mobile Banking Redesign',
    category: 'Fintech Mobile App',
    description: 'Reframed onboarding and transactions for a trust-first mobile banking experience.',
    tags: ['Mobile', 'UX/UI', 'Fintech'],
    problem:
      'New users dropped during KYC and first transfer because the flow felt dense, technical, and high-risk.',
    research:
      'Conducted 14 moderated interviews, mapped emotional moments around verification, and analyzed analytics funnels to isolate friction in form structure and error messaging.',
    process: [
      'Reframed journey into confidence milestones rather than form steps.',
      'Created low-fidelity flows and validated with rapid unmoderated tests.',
      'Built interactive prototypes with optimistic feedback and progressive disclosure.',
      'Partnered with engineering to design a scalable component library for banking patterns.'
    ],
    solution:
      'Delivered a minimalist interface with contextual guidance, adaptive keyboard behavior, and a calm visual rhythm inspired by Japanese layout balance.',
    outcome:
      'Onboarding completion increased 31%, first-transfer success rose 24%, and support tickets about verification dropped 37% within two releases.'
  },
  {
    slug: 'sora-saas-workspace',
    title: 'Sora SaaS Collaboration Workspace',
    category: 'B2B SaaS Platform',
    description: 'Designed a productivity suite that reduced cognitive load for distributed product teams.',
    tags: ['Web', 'SaaS', 'Interaction'],
    problem:
      'Teams struggled with fragmented tasks, duplicated updates, and low visibility across project phases.',
    research:
      'Ran diary studies with 9 teams, observed ritual meetings, and synthesized service blueprints to identify disjointed handoffs and hidden dependencies.',
    process: [
      'Defined information architecture around planning, execution, and reporting loops.',
      'Prototyped modular dashboards with composable widgets and role-based context.',
      'Stress-tested interaction patterns through usability tests focusing on discoverability.',
      'Documented micro-interaction and motion rules for developer handoff.'
    ],
    solution:
      'Shipped a unified workspace with adaptive cards, intelligent status signals, and progressive filtering that made complex project data feel readable.',
    outcome:
      'Task visibility improved by 42% and weekly active usage increased 28% across pilot organizations.'
  },
  {
    slug: 'kaizen-health-portal',
    title: 'Kaizen Health Patient Portal',
    category: 'Healthcare Service UX',
    description: 'Built an accessible and reassuring portal for appointments, prescriptions, and care history.',
    tags: ['Web', 'UX Research', 'Accessibility'],
    problem:
      'Patients found healthcare workflows stressful due to scattered actions and unclear clinical language.',
    research:
      'Facilitated co-creation sessions with patients and care coordinators, benchmarked accessibility compliance, and identified moments where trust and clarity were critical.',
    process: [
      'Simplified terminology and content hierarchy with plain-language standards.',
      'Created wireframes optimized for high readability and predictable navigation.',
      'Designed prototype variants for appointment and refill flows with usability metrics.',
      'Validated WCAG-aligned color and type system for aging audiences.'
    ],
    solution:
      'Introduced guided care journeys, clear status language, and resilient form patterns to reduce uncertainty in sensitive tasks.',
    outcome:
      'Portal satisfaction improved from 3.1 to 4.4/5 and missed-appointment rates fell by 18% in three months.'
  }
];

export const skills = [
  'UX Research',
  'Wireframing',
  'Prototyping',
  'Usability Testing',
  'Interaction Design',
  'Information Architecture',
  'Design Systems',
  'Accessibility'
];

export const tools = ['Figma', 'Adobe XD', 'FigJam', 'Miro', 'Notion', 'Jira', 'Maze'];

export const experience = [
  {
    period: '2023 — Present',
    role: 'UI/UX Designer',
    company: 'Japanese Multinational Software Company',
    summary:
      'Leading UX strategy and interface design for enterprise and consumer products with cross-functional teams across Japan and global offices.'
  },
  {
    period: '2021 — 2023',
    role: 'Associate Product Designer',
    company: 'Digital Product Studio',
    summary:
      'Delivered user-centered web and mobile solutions, facilitated discovery workshops, and translated research into validated design decisions.'
  }
];
