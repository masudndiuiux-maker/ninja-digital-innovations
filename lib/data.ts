export type ServiceIconName =
  | 'AppWindow'
  | 'Smartphone'
  | 'LayoutPanelTop'
  | 'Bot'
  | 'Cloud'
  | 'Cog';

export type ValueIconName =
  | 'TrendingUp'
  | 'Users'
  | 'Workflow'
  | 'ShieldCheck'
  | 'Gauge'
  | 'Rocket';

export const navLinks = ['Home', 'Services', 'Solutions', 'About', 'Portfolio', 'Contact'];

export const stats = [
  { value: 180, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 35, suffix: '+', label: 'Enterprise Solutions' }
];

export const services = [
  {
    title: 'Web Development',
    description: 'Fast, secure, conversion-focused websites and web apps built for scale.',
    icon: 'AppWindow'
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile products with exceptional UX and performance.',
    icon: 'Smartphone'
  },
  {
    title: 'UI/UX Design',
    description: 'Elegant product experiences shaped by user behavior, business goals, and clarity.',
    icon: 'LayoutPanelTop'
  },
  {
    title: 'AI & Automation',
    description: 'Workflow automation, AI copilots, and intelligent systems that reduce overhead.',
    icon: 'Bot'
  },
  {
    title: 'Cloud & DevOps',
    description: 'Reliable cloud architecture, CI/CD pipelines, and observability built into delivery.',
    icon: 'Cloud'
  },
  {
    title: 'Digital Consulting',
    description: 'Roadmaps and strategic direction for enterprise modernization and growth.',
    icon: 'Cog'
  }
] satisfies Array<{ title: string; description: string; icon: ServiceIconName }>;

export const values = [
  { title: 'Innovation-Driven', description: 'We combine proven engineering with forward-thinking strategy.', icon: 'TrendingUp' },
  { title: 'User-Centric Design', description: 'Every feature is grounded in customer behavior and usability.', icon: 'Users' },
  { title: 'Scalable Architecture', description: 'Solutions engineered to grow with your products and teams.', icon: 'Workflow' },
  { title: 'Reliable Delivery', description: 'Transparent milestones, quality assurance, and predictable execution.', icon: 'ShieldCheck' },
  { title: 'Business Outcomes', description: 'Our teams focus on measurable ROI, retention, and conversion.', icon: 'Gauge' },
  { title: 'Long-Term Partnership', description: 'We operate as an extension of your organization and vision.', icon: 'Rocket' }
] satisfies Array<{ title: string; description: string; icon: ValueIconName }>;

export const processSteps = [
  { title: 'Discover', description: 'Align goals, users, data, and technical constraints.' },
  { title: 'Design', description: 'Map clear UX flows, prototypes, and visual systems.' },
  { title: 'Develop', description: 'Build robust full-stack products with agile sprints.' },
  { title: 'Deploy', description: 'Release confidently with performance, QA, and DevOps.' },
  { title: 'Scale', description: 'Optimize, automate, and expand for long-term growth.' }
];

export const projects = [
  {
    title: 'FinFlow Platform',
    category: 'SaaS',
    metric: '+38% conversion',
    summary: 'Rebuilt onboarding and dashboard experiences for a fintech product.',
    image:
      'https://images.pexels.com/photos/7109316/pexels-photo-7109316.jpeg?cs=srgb&dl=pexels-tiger-lily-7109316.jpg&fm=jpg',
    imageAlt: 'Laptop displaying financial graphs and analytics on a desk.'
  },
  {
    title: 'MedLink Care',
    category: 'Healthcare',
    metric: '-42% response time',
    summary: 'Developed secure patient portals and AI-assisted support workflows.',
    image:
      'https://images.pexels.com/photos/5407243/pexels-photo-5407243.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-5407243.jpg&fm=jpg',
    imageAlt: 'Doctor working on a laptop in a healthcare setting.'
  },
  {
    title: 'RetailSync AI',
    category: 'Ecommerce',
    metric: '+24% retention',
    summary: 'Connected data streams with forecasting and automation tools.',
    image:
      'https://images.pexels.com/photos/5156696/pexels-photo-5156696.jpeg?cs=srgb&dl=pexels-maorattias-5156696.jpg&fm=jpg',
    imageAlt: 'Warehouse shelves filled with packages for ecommerce fulfillment.'
  },
  {
    title: 'OpsPilot Suite',
    category: 'Enterprise',
    metric: '3.1x efficiency',
    summary: 'Unified operations stack with role-based interfaces and analytics.',
    image:
      'https://images.pexels.com/photos/7693686/pexels-photo-7693686.jpeg?cs=srgb&dl=pexels-yankrukov-7693686.jpg&fm=jpg',
    imageAlt: 'Team reviewing charts and digital business data in an office.'
  }
];

export const testimonials = [
  {
    quote: 'Ninja Digital Innovations transformed our legacy stack into a high-performance platform that accelerated growth.',
    name: 'Maya Chen',
    role: 'COO, AxisWorks'
  },
  {
    quote: 'Their team pairs strong design thinking with engineering rigor. The delivery quality has been consistently outstanding.',
    name: 'David Romero',
    role: 'VP Product, Northstack'
  },
  {
    quote: 'The strategic consulting plus implementation support made this one of our highest-impact digital initiatives.',
    name: 'Sophia Tanaka',
    role: 'Director, Kintaro Logistics'
  }
];
