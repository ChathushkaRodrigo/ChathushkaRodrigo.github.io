export const phrases = [
  'DevOps Engineer',
  'Cloud Architect',
  'iOS/macOS Developer',
  'CI/CD Enthusiast',
  'Kubernetes Wrangler',
  'Infrastructure Automator',
  'Swift Developer',
];

export const socialLinks = {
  linkedin: 'https://lk.linkedin.com/in/chathushkarodrigo',
  github: 'https://github.com/ChathushkaRodrigo',
  medium: 'https://medium.com/@chathushkarodrigo',
  email: 'chathushkarodrigo@gmail.com',
};

export const aboutParagraphs = [
  { text: 'DevOps Engineer & <span class="text-orange-400">macOS/iOS Developer</span> based in <span class="text-[var(--gradient-1)]">Colombo, Sri Lanka</span> with a strong focus on cloud infrastructure, CI/CD automation, container orchestration, and native Apple development.' },
  { text: 'Currently working as a <span class="text-[var(--gradient-1)]">DevOps Engineer L3</span> at <span class="text-purple-400">PetVisor</span>, managing production deployments across multiple veterinary software products using EKS, ensuring <span class="text-[var(--gradient-1)] font-semibold font-mono">99% uptime</span>.' },
  { text: 'Reduced AWS infrastructure costs by <span class="text-[var(--gradient-1)] font-semibold font-mono">42%</span>, improved delivery efficiency by <span class="text-[var(--gradient-1)] font-semibold font-mono">35%</span>, and improved software security by <span class="text-[var(--gradient-1)] font-semibold font-mono">91%</span> across my career.' },
  { text: 'Also passionate about building native <span class="text-orange-400">Swift/SwiftUI</span> apps for <span class="text-orange-400">macOS & iOS</span>, blending my infrastructure expertise with polished user experiences.' },
  { text: 'Software Engineering graduate from <span class="text-[var(--gradient-1)]">Curtin University</span>. Active <span class="text-emerald-400">technical writer</span> on Medium covering Kubernetes, Docker, ArgoCD, and DevSecOps.' },
];

export const experience = [
  {
    title: 'DevOps Engineer L3',
    company: 'PetVisor',
    logo: '/lovable-uploads/5d5b67e8-1044-4958-a784-8d32f54c1542.png',
    period: 'Present',
    isCurrent: true,
    subtitle: 'Head of VetGroup - Veterinary Software Platform',
    achievements: [
      'Enhanced and orchestrated vet clinic customer production deployments using <strong>EKS</strong>, ensuring <span class="text-[var(--gradient-1)] font-semibold font-mono">99% uptime</span>',
      'Managed sub-product release procedures and deployments by customer region, achieving <span class="text-[var(--gradient-1)] font-semibold font-mono">80% efficiency</span> in deployments',
      'Reduced weekly AWS infrastructure cost by <span class="text-[var(--gradient-1)] font-semibold font-mono">42%</span> by optimizing resource usage, migrating to ECS agents as Jenkins nodes',
    ],
    tags: ['AWS EKS', 'Jenkins', 'ECS Fargate', 'Route53'],
  },
  {
    title: 'DevOps Engineer L2',
    company: 'Vetstoria',
    logo: '/lovable-uploads/9e1b254f-70b8-4ba8-a19d-df9a2f1e433b.png',
    period: 'Previous',
    isCurrent: false,
    subtitle: 'Veterinary Appointment Scheduling Software',
    achievements: [
      'Orchestrated software delivery pipeline using <strong>Jenkins</strong> and <strong>AWS CodePipeline</strong>',
      'Optimized CI/CD practices, contributing to <span class="text-[var(--gradient-1)] font-semibold font-mono">35% improvement</span> in delivery efficiency and <span class="text-[var(--gradient-1)] font-semibold font-mono">60% reduction</span> in release disruptions',
      'Provisioned infrastructure for booking platform using <strong>AWS EKS, ELB, Route53</strong> and <strong>ECS Fargate</strong>',
    ],
    tags: ['AWS CodePipeline', 'Jenkins', 'EKS', 'BitBucket'],
  },
  {
    title: 'Associate Cloud Engineer (DevOps)',
    company: 'I4T Labs',
    logo: '/lovable-uploads/c182376e-aa63-4fef-86fb-59ec983f3489.png',
    period: 'Previous',
    isCurrent: false,
    subtitle: 'Field Service Management Software',
    achievements: [
      'Migrated legacy environments to secure state, achieving <span class="text-[var(--gradient-1)] font-semibold font-mono">78% pen-test success</span> rate adhering to ISO security standards',
      'Improved software security by <span class="text-[var(--gradient-1)] font-semibold font-mono">91%</span> through bi-weekly pen-test troubleshooting',
      'Automated cloud server scheduling, reducing <span class="text-[var(--gradient-1)] font-semibold font-mono">GCP costs by 60%</span>. Dockerized applications reducing <span class="text-[var(--gradient-1)] font-semibold font-mono">30% server resource</span> usage',
    ],
    tags: ['GCP', 'Docker', 'PHP', 'Security'],
  },
  {
    title: 'DevOps Engineer Intern',
    company: 'Arimac',
    logo: '/lovable-uploads/e366f8aa-6d23-42a3-a027-240b252df8e4.png',
    period: 'Internship',
    isCurrent: false,
    subtitle: 'E2E Digital Agency',
    achievements: [
      'Handled client deployments using CI/CD, Docker, and customer-managed Kubernetes clusters, automating <span class="text-[var(--gradient-1)] font-semibold font-mono">60% of manual tasks</span>',
      'Reduced costs by <span class="text-[var(--gradient-1)] font-semibold font-mono">20%</span> via Docker multi-node deployments over standalone setups',
      'Boosted CI/CD process efficiency by <span class="text-[var(--gradient-1)] font-semibold font-mono">30%</span> through multi-cloud domain exposure and Git strategies',
    ],
    tags: ['Kubernetes', 'Docker', 'CI/CD', 'Multi-Cloud'],
  },
];

export const skills = [
  {
    category: 'Cloud',
    icon: 'SiAmazonaws',
    iconColor: '#FF9900',
    items: ['AWS', 'GCP', 'EKS', 'ECS', 'Route53', 'ELB'],
  },
  {
    category: 'CI/CD',
    icon: 'SiJenkins',
    iconColor: '#D24939',
    items: ['Jenkins', 'CodePipeline', 'ArgoCD', 'BitBucket', 'Git'],
  },
  {
    category: 'Containers',
    icon: 'SiKubernetes',
    iconColor: '#326CE5',
    items: ['Docker', 'Kubernetes', 'ECS Fargate', 'Kyverno'],
  },
  {
    category: 'Apple Dev',
    icon: 'SiApple',
    iconColor: '#999',
    items: ['Swift', 'SwiftUI', 'Xcode', 'macOS', 'iOS'],
  },
  {
    category: 'Infrastructure',
    icon: 'SiLinux',
    iconColor: '#FCC624',
    items: ['Linux', 'Networking', 'Python', 'Terraform'],
  },
  {
    category: 'Development',
    icon: 'SiReact',
    iconColor: '#61DAFB',
    items: ['NodeJS', 'React', 'JavaScript', 'SQL', 'REST API'],
  },
];

export const techLogos = [
  { icon: 'devicon-amazonwebservices-plain-wordmark', color: '#FF9900', name: 'AWS' },
  { icon: 'devicon-kubernetes-plain', color: '#326CE5', name: 'Kubernetes' },
  { icon: 'devicon-docker-plain', color: '#2496ED', name: 'Docker' },
  { icon: 'devicon-jenkins-line', color: '#D24939', name: 'Jenkins' },
  { icon: 'devicon-terraform-plain', color: '#7B42BC', name: 'Terraform' },
  { icon: 'devicon-linux-plain', color: '#FCC624', name: 'Linux' },
  { icon: 'devicon-python-plain', color: '#3776AB', name: 'Python' },
  { icon: 'devicon-git-plain', color: '#F05032', name: 'Git' },
  { icon: 'devicon-googlecloud-plain', color: '#4285F4', name: 'GCP' },
  { icon: 'devicon-swift-plain', color: '#F05138', name: 'Swift' },
  { icon: 'devicon-apple-original', color: '#999', name: 'Apple' },
  { icon: 'devicon-xcode-plain', color: '#147EFB', name: 'Xcode' },
  { icon: 'devicon-react-original', color: '#61DAFB', name: 'React' },
  { icon: 'devicon-nodejs-plain', color: '#339933', name: 'Node.js' },
  { icon: 'devicon-argocd-plain', color: '#EF7B4D', name: 'ArgoCD' },
  { icon: 'devicon-grafana-plain', color: '#F46800', name: 'Grafana' },
  { icon: 'devicon-bitbucket-original', color: '#0052CC', name: 'Bitbucket' },
  { icon: 'devicon-postgresql-plain', color: '#4169E1', name: 'PostgreSQL' },
];

export const iosApps = [
  {
    name: 'Chronometer',
    platform: 'iOS',
    description: 'World Clock app for tracking multiple time zones with a beautiful, intuitive interface.',
    tags: ['Swift', 'SwiftUI', 'iOS'],
    gradient: 'from-orange-400 to-red-500',
    tagColor: 'bg-orange-500/10 text-orange-400',
    emoji: '⏱',
    screenshot: '/screenshots/chronometer.png',
  },
  {
    name: 'Aura',
    platform: 'iOS',
    description: 'Sleep Tracker app that helps monitor and improve your sleep patterns with detailed insights.',
    tags: ['Swift', 'SwiftUI', 'HealthKit'],
    gradient: 'from-indigo-500 to-purple-600',
    tagColor: 'bg-purple-500/10 text-purple-400',
    emoji: '✨',
    screenshot: '/screenshots/aura.png',
  },
  {
    name: 'Luma',
    platform: 'iOS',
    description: 'Daily Constellation Journal for tracking celestial events and personal reflections under the stars.',
    tags: ['Swift', 'SwiftUI', 'iOS'],
    gradient: 'from-yellow-400 to-amber-500',
    tagColor: 'bg-yellow-500/10 text-yellow-400',
    emoji: '★',
    screenshot: '/screenshots/luma.png',
  },
];

export const macApps = [
  {
    name: 'Tapsworth',
    platform: 'macOS',
    description: 'Redefine macOS typing with enhanced keyboard experience, custom sounds, and productivity features.',
    tags: ['Swift', 'AppKit', 'macOS'],
    gradient: 'from-cyan-400 to-blue-500',
    tagColor: 'bg-cyan-500/10 text-cyan-400',
    emoji: '⌨',
    screenshot: '/screenshots/tapsworth.png',
  },
];

export const infraProjects = [
  {
    name: 'EKS Production Platform',
    description: 'Multi-cluster EKS production platform serving veterinary clinic customers with 99% uptime SLA across regional deployments.',
    tags: ['EKS', 'Helm', 'Route53'],
  },
  {
    name: 'CI/CD Pipeline Optimization',
    description: 'Redesigned delivery pipeline achieving 35% improvement in efficiency and 60% reduction in release disruptions.',
    tags: ['Jenkins', 'CodePipeline', 'ECS'],
  },
  {
    name: 'AWS Cost Optimization',
    description: 'Reduced weekly AWS costs by 42% across 5+ accounts by migrating to ECS Fargate agents and right-sizing resources.',
    tags: ['ECS Fargate', 'Cost Explorer', 'CloudWatch'],
  },
  {
    name: 'Legacy Migration & Security',
    description: 'Containerized legacy PHP apps with ISO security compliance. 78% pen-test success and 91% security improvement.',
    tags: ['Docker', 'GCP', 'Security'],
  },
];

export const devProjects = [
  {
    name: 'Vet Voice Transcribe',
    description: 'Fully E2E Veterinary Booking Platform with Automated AI VOICE/CHAT Integrated Web Solution for clinics.',
    tags: ['Whisper', 'OpenAI API', 'AWS', 'Python', 'ViteJS', 'React.js'],
  },
  {
    name: 'TITANS - Event Management',
    description: 'Intuitive event management platform serving 680+ participants, with QR code-based ticket verification.',
    tags: ['MERN Stack', 'GCP', 'CI/CD', 'Monitoring'],
  },
  {
    name: 'CDAP - Project Management',
    description: 'Large-scale project management portal for 4000+ students and 200+ staff at Curtin University.',
    tags: ['Fullstack', 'Project Mgmt', 'Database Design'],
  },
  {
    name: 'Tesla Front-End Clone',
    description: 'Tesla website clone using React.js and Material UI, demonstrating frontend architecture and responsive design.',
    tags: ['React.js', 'Material UI', 'Responsive'],
  },
  {
    name: 'Zoo Management System',
    description: 'Zoo management solution for Melaka Zoo Organisation, focusing on animal data handling and operational automation.',
    tags: ['System Design', 'JavaScript', 'PHP', 'MySQL'],
  },
  {
    name: 'Online Help Desk',
    description: 'Java-based Object-Oriented Web App to manage online help desk ticketing and interactions.',
    tags: ['Java', 'OOP', 'Web App'],
  },
  {
    name: 'Unity 2D Game (DrunkDude)',
    description: 'Global Game Jam 2021 entry - 2D side-scroller game with Unity physics and game dynamics.',
    tags: ['Unity', 'C#', 'Game Dev'],
  },
  {
    name: 'Employee Job Portal',
    description: 'Employee job portal with user authentication and job listings, built during university.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
  },
];

export const blogPosts = [
  {
    title: 'K8s Chaos? Not on My Watch!',
    description: 'Policy as Code with Kyverno for Kubernetes cluster management',
    date: 'Nov 2025',
    icon: 'devicon-kubernetes-plain',
    iconColor: '#326CE5',
    url: 'https://blog.devops.dev/k8s-chaos-not-on-my-watch-874d8a6de0e2',
  },
  {
    title: 'How I Ended My Kubernetes Nightmares',
    description: 'Multi-cluster management with AI-driven capabilities',
    date: 'Nov 2025',
    icon: 'devicon-kubernetes-plain',
    iconColor: '#326CE5',
    url: 'https://blog.devops.dev/how-i-ended-my-kubernetes-nightmares-with-a-simple-tool-9e4154869dbb',
  },
  {
    title: 'AI Driven GitOps: ArgoCD MCP Server',
    description: 'Integrating AI agents with ArgoCD for enhanced GitOps automation',
    date: 'Oct 2025',
    icon: 'devicon-argocd-plain',
    iconColor: '#EF7B4D',
    url: 'https://blog.devops.dev/ai-driven-gitops-argocd-mcp-server-a8b9fc3a6307',
  },
  {
    title: '7 Bylaws to Reduce Docker Build Times',
    description: 'Optimization with Alpine images, multi-stage builds, and BuildKit caching',
    date: 'Dec 2024',
    icon: 'devicon-docker-plain',
    iconColor: '#2496ED',
    url: 'https://blog.devops.dev/7-bylaws-to-reduce-docker-build-times-for-more-efficient-deployments-ab2e591367d9',
  },
  {
    title: 'Take Flight with Argo CD: Canary Deployments',
    description: 'Implementing canary strategies with Argo Rollouts for zero-downtime releases',
    date: 'Sep 2024',
    icon: 'devicon-argocd-plain',
    iconColor: '#EF7B4D',
    url: 'https://blog.devops.dev/take-flight-with-argo-cd-elevate-strategize-deployments-with-canary-aed9452f7f74',
  },
  {
    title: 'PagerDuty as Code',
    description: 'Automating incident management with Terraform IaC approach',
    date: 'Sep 2024',
    icon: 'devicon-terraform-plain',
    iconColor: '#7B42BC',
    url: 'https://blog.devops.dev/pagerduty-as-code-automate-integrate-and-elevate-incident-management-4745dcd3c114',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
