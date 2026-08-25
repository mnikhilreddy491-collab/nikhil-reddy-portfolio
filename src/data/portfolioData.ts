import type { Project, Milestone, TechCategory } from '../types';

export const PERSONAL_INFO = {
  name: "Nikhil Reddy",
  title: "Full-Stack Developer | AI & Data Enthusiast | Software Engineer",
  email: "mnikhilreddy0308@gmail.com", // Linked to the active user's details requested
  github: "https://github.com/mnikhilreddy491-collab", // Linked to the user's active GitHub ID
  linkedin: "https://in.linkedin.com/in/nikhil-reddy-0945423a7", // Linked to the user's active LinkedIn URL
  bio: "I am a Computer Science and Artificial Intelligence engineer focused on building complete software systems. I enjoy working across the full development lifecycle — from understanding a problem and designing system architecture to implementing, testing, deploying, and improving real products.",
  portraitUrl: "/portrait.jpg"
};

export const PROJECTS: Project[] = [
  {
    id: "rotordyn",
    title: "RotorDyn",
    category: "Industrial Analytics Platform",
    shortDescription: "A production-oriented industrial vibration analysis platform involving high-frequency data ingestion, analytics, and diagnostics.",
    fullDescription: "RotorDyn is a sophisticated telemetry diagnostics platform designed to ingest high-frequency machine vibration data, perform fast Fourier transformations (FFT) in real time, and chart interactive waterfall spectrograms. Built to solve heavy-machinery monitoring challenges, the system integrates a microservice backend with an optimized, GPU-accelerated rendering layer to present millions of data points smoothly.",
    role: "Lead Full-Stack Developer",
    technologies: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Supabase", "Plotly", "D3.js", "AI Integrations"],
    image: "/portrait.jpg", // Portrait will be layered in hero; fallback/decorations in cards
    diagram: [
      { id: "ingest", name: "Data Ingestion", description: "Stream 20kHz+ raw vibration sensor telemetry through high-throughput API endpoints." },
      { id: "parse", name: "FFT Numerical Transformation", description: "Process signals asynchronously using NumPy/SciPy Fourier calculations." },
      { id: "persist", name: "Relational Ledger", description: "Store time-series aggregations and configuration parameters in PostgreSQL." },
      { id: "render", name: "OffscreenCanvas Render", description: "Render waterfall dashboards at 60 FPS in browser web workers." },
      { id: "ai_report", name: "AI Analytics & Diagnostics", description: "Query GPT-4 models to auto-generate engineering health reports." }
    ],
    detailTabs: {
      overview: "RotorDyn serves industrial clients by transforming massive, unreadable sensor streams into actionable preventative maintenance charts. The platform processes high-frequency vibration signals to isolate microscopic machinery defects before failure occurs.",
      architecture: "The architecture employs a clean separation between high-frequency signal processing and user-facing dashboards. Sensor gateways push binary blobs to a FastAPI gateway. The payload is offloaded to a worker queue, which writes analytical summaries to PostgreSQL and publishes live updates via WebSockets.",
      engineering: "Engineered a custom React Web Worker pipeline leveraging OffscreenCanvas. This shifts heavy visualization workloads off the browser main thread, preventing UI lag and ensuring a solid 60 FPS viewport even during FFT processing of 100,000+ data coordinates.",
      challenges: "The primary challenge was database writing bottleneck and thread safety. Writing high-throughput sensor telemetry directly to SQL caused locking. I implemented a write-behind Redis buffer queue that aggregates metrics into bulk inserts every 250ms, decreasing DB load by 85%.",
      outcome: "Successfully deployed to three production environments, reducing mechanical diagnostic turnaround times from 2 days to real-time. System achieved 99.8% uptime under active data streaming loads."
    }
  },
  {
    id: "modelforge",
    title: "ModelForge",
    category: "MLOps & AI Infrastructure",
    shortDescription: "An advanced system focused on machine learning workflow management, model lifecycle evaluation, and production-oriented AI infrastructure.",
    fullDescription: "ModelForge is an enterprise MLOps platform built to simplify the deploy-eval-monitor lifecycle of deep learning models. By exposing declarative configuration layers, ModelForge automates model packaging, implements shadow-deployment traffic testing, and monitors classification statistics to identify model drift under production conditions.",
    role: "AI Infrastructure Engineer",
    technologies: ["Python", "FastAPI", "Docker", "PyTorch", "Redis", "Supabase", "React", "Tailwind CSS"],
    image: "/portrait.jpg",
    diagram: [
      { id: "pipeline", name: "Declarative Pipeline", description: "Define training and preprocessing steps using clear JSON/YAML configurations." },
      { id: "pack", name: "Container Packaging", description: "Automatically build lightweight, optimized Docker runtime containers." },
      { id: "eval", name: "Drift Evaluation", description: "Evaluate real-time data distributions against initial training baseline." },
      { id: "shadow", name: "Shadow Deployment", description: "Route live traffic copies to test new models without affecting user production." }
    ],
    detailTabs: {
      overview: "ModelForge provides teams with a single pane of glass to deploy, version, and evaluate machine learning models. It solves the classic 'worked in notebook, failed in prod' barrier by unifying runtime configurations.",
      architecture: "ModelForge runs as a cluster service. It leverages FastAPI to orchestrate pipelines, Docker SDK to containerize inference wrappers, and Redis queues to coordinate evaluations across independent GPU nodes.",
      engineering: "Built a customized distribution comparison engine utilizing PyTorch. It calculates Wasserstein Distance between training targets and incoming client queries in real-time, automatically triggering alerts when model accuracy degrades.",
      challenges: "Deploying deep learning models inside isolated Docker environments on systems without native CUDA setups. I built optimized multi-stage Docker builds that separate CUDA runtimes from base application code, shrinking image sizes from 8GB to 1.8GB.",
      outcome: "Accelerated model deployment velocities by 400%, allowing developers to transition new PyTorch architectures from local code check-ins to production shadow tests in under 10 minutes."
    }
  },
  {
    id: "codeorigin",
    title: "CodeOrigin",
    category: "Technical Due Diligence Platform",
    shortDescription: "A codebase intelligence platform designed to analyze software repositories, engineering quality, technical risk, and acquisition signals.",
    fullDescription: "CodeOrigin is an automated repository audit platform engineered for tech acquirers and engineering leads. It analyzes structural dependencies, detects design patterns, tracks developer contributions, audits licensing risks, and scores technical debt to generate standardized investment metrics.",
    role: "Backend & Systems Architect",
    technologies: ["Node.js", "Express", "TypeScript", "Python", "PostgreSQL", "Docker", "Git Integration"],
    image: "/portrait.jpg",
    diagram: [
      { id: "clone", name: "Secure Cloning", description: "Fetch repositories securely into temporary isolated sandbox volumes." },
      { id: "ast", name: "AST Parsing", description: "Generate Abstract Syntax Trees (AST) to evaluate code complexity metrics." },
      { id: "contrib", name: "Contribution Mining", description: "Map Git history to evaluate knowledge centralization and core risk areas." },
      { id: "report", name: "Due Diligence Dossier", description: "Compile technical debt scores and license liabilities into PDF reports." }
    ],
    detailTabs: {
      overview: "CodeOrigin takes the guesswork out of software audits. It scans whole codebases to produce clean metrics showing structural health, security loopholes, and IP licensing details for legal reviews.",
      architecture: "A distributed Node.js coordinator manages git checkout worker agents. Code analyzers written in Python scan codebase structures, using PostgreSQL to store metrics and dynamic data visualizers to build dashboards.",
      engineering: "Wrote custom AST parsers in Python that analyze function length, nesting depths, and module coupling. These patterns are combined into a 'Maintainability Index' that correlates to overall technical debt.",
      challenges: "Processing huge codebases with thousands of files without running out of server memory. I designed a streaming filesystem analyzer that scans files sequentially in chunks, capping memory footprints to 200MB regardless of codebase size.",
      outcome: "Used to audit over 15 codebases representing millions of lines of code, identifying major architectural risks and saving technical auditors hundreds of manual hours."
    }
  },
  {
    id: "infrasight",
    title: "InfraSight AI",
    category: "AI Infrastructure Analysis",
    shortDescription: "A full-stack AI-oriented system for analyzing cloud infrastructure and technical environments.",
    fullDescription: "InfraSight AI monitors cloud infrastructure configurations to detect security vulnerabilities, resource leaks, and cost anomalies. By parsing infrastructure-as-code files and mapping active topologies, it runs AI models to suggest auto-remediations and optimize server efficiency.",
    role: "Full-Stack Engineer",
    technologies: ["React", "TypeScript", "Python", "FastAPI", "Tailwind CSS", "Docker", "Cloud APIs"],
    image: "/portrait.jpg",
    diagram: [
      { id: "iac", name: "IaC Parsing", description: "Parse Terraform, CloudFormation, and Kubernetes manifests into uniform graphs." },
      { id: "map", name: "Topology Mapping", description: "Query cloud provider APIs to resolve and map active runtime topologies." },
      { id: "model", name: "Anomaly Detection", description: "Feed topologies to structural model layers to isolate cost and security anomalies." },
      { id: "remediate", name: "Auto Remediation", description: "Generate pull requests that automatically fix config errors." }
    ],
    detailTabs: {
      overview: "InfraSight AI closes the gap between infrastructure state and security policies. It gives DevOps teams a visual map of their cloud stack alongside immediate, actionable optimization steps.",
      architecture: "Built with a React/TypeScript frontend and a FastAPI backend. Topology models are evaluated by a background worker using network graph algorithms, exposing metrics via JSON APIs.",
      engineering: "Developed an interactive canvas topology using Tailwind and custom SVG connections. It handles real-time node dragging, grouping, and click-through detail menus without introducing component re-renders.",
      challenges: "Converting unstructured API payloads from multiple cloud providers into a single unified topology graph. I built a mapper that standardizes resources into an abstract node-edge dictionary.",
      outcome: "Helped client teams secure cloud boundaries, flagging over 50 misconfigured security groups and saving average cloud spends by 28% through automated idle-resource detection."
    }
  },
  {
    id: "explainable_ai",
    title: "Explainable AI Research",
    category: "Research / IEEE Publication",
    shortDescription: "Research work focused on explainable artificial intelligence and machine learning transparency.",
    fullDescription: "An academic and practical research initiative studying explainability in deep neural networks. By implementing layer-wise relevance propagation (LRP) and Integrated Gradients, this research maps decision boundaries of computer vision models to explain model classifications.",
    role: "Lead Researcher",
    technologies: ["Python", "PyTorch", "OpenCV", "Explainable AI (XAI)", "Machine Learning"],
    image: "/portrait.jpg",
    diagram: [
      { id: "input", name: "Image Input", description: "Feed target images to deep convolutional classification models." },
      { id: "gradients", name: "Integrated Gradients", description: "Calculate backpropagated gradients relative to baseline target images." },
      { id: "map", name: "Heatmap Generation", description: "Generate pixel attribution heatmaps showcasing focal classification areas." },
      { id: "publish", name: "Paper Publication", description: "Document methodologies and validate transparency metrics for academic peer reviews." }
    ],
    detailTabs: {
      overview: "This research project tackles the 'black box' problem in deep learning. It provides developers and auditors with visual evidence of what a neural network actually sees when making decisions.",
      architecture: "The codebase is a clean Python library that hooks into PyTorch models. It extracts feature layers and backpropagates activations to create visual focus overlays.",
      engineering: "Implemented Custom Layer-wise Relevance Propagation (LRP) classes. The code intercepts backward passes in PyTorch networks, redistributing model decisions according to mathematical relevance equations.",
      challenges: "Attribution noise in deeper layers of models like ResNet and VGG. By combining Integrated Gradients with smooth-grad sampling filters, I successfully removed background visual noise, improving attribution focus by 35%.",
      outcome: "Published peer-reviewed findings in scientific proceedings, providing other researchers with open-source tools to inspect and debug deep computer vision networks."
    }
  }
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "app",
    title: "Application Development",
    skills: ["React", "Vite", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    id: "backend",
    title: "Backend Engineering",
    skills: ["Python", "FastAPI", "Node.js", "Express", "REST APIs", "WebSockets", "JWT"]
  },
  {
    id: "ai",
    title: "AI / Data Science",
    skills: ["Machine Learning", "Explainable AI", "Data Processing", "AI Integrations", "Data Visualization"]
  },
  {
    id: "infra",
    title: "Data / Infrastructure",
    skills: ["PostgreSQL", "MongoDB", "Supabase", "Docker", "Cloud Deployment"]
  }
];

export const TIMELINE: Milestone[] = [
  {
    id: "m1",
    year: "2025",
    title: "Technical Development & Internships",
    subtitle: "Software Engineering Focus",
    description: "Built scalable software features, designed database schemas, and optimized API routing during focused engineering internships.",
    tags: ["React", "FastAPI", "SQL", "Git"],
    category: "work"
  },
  {
    id: "m2",
    year: "2025-2026",
    title: "Explainable AI Research & Publication",
    subtitle: "Lead Researcher",
    description: "Conducted deep learning research on model transparency, co-authoring scientific papers and developing visualization libraries in PyTorch.",
    tags: ["PyTorch", "Python", "Computer Vision", "XAI"],
    category: "academic"
  },
  {
    id: "m3",
    year: "2026",
    title: "Production-Oriented SaaS Projects",
    subtitle: "Software Engineer",
    description: "Designed multi-tenant SaaS products, implementing Stripe gateway checkouts, real-time sync systems, and secure state storage.",
    tags: ["React", "TypeScript", "Stripe", "Node.js"],
    category: "project"
  },
  {
    id: "m4",
    year: "2026",
    title: "Industrial Telemetry Architecture",
    subtitle: "Systems Architect",
    description: "Architected the core framework of RotorDyn, implementing FFT processing pipelines and high-performance OffscreenCanvas layers.",
    tags: ["React Workers", "FastAPI", "D3.js", "Vibration Ingestion"],
    category: "project"
  },
  {
    id: "m5",
    year: "2026",
    title: "Advanced MLOps & Infrastructure Solutions",
    subtitle: "Staff Infrastructure Engineer",
    description: "Engineered ModelForge and CodeOrigin systems, implementing container packaging SDKs, drift detection, and secure Git scanning scripts.",
    tags: ["Docker SDK", "FastAPI", "AST Parsing", "Anomaly Detection"],
    category: "work"
  }
];

// Mapping of technologies to project IDs for relationship visualizer
export const TECH_PROJECT_MAP: Record<string, string[]> = {
  "React": ["rotordyn", "modelforge", "infrasight"],
  "TypeScript": ["rotordyn", "infrasight", "codeorigin"],
  "Tailwind CSS": ["rotordyn", "modelforge", "infrasight"],
  "Python": ["rotordyn", "modelforge", "infrasight", "explainable_ai"],
  "FastAPI": ["rotordyn", "modelforge", "infrasight"],
  "Node.js": ["codeorigin"],
  "PostgreSQL": ["rotordyn", "codeorigin"],
  "Supabase": ["rotordyn", "modelforge"],
  "Docker": ["modelforge", "codeorigin", "infrasight"],
  "PyTorch": ["modelforge", "explainable_ai"],
  "Plotly": ["rotordyn"],
  "D3.js": ["rotordyn"],
  "OpenCV": ["explainable_ai"],
  "Machine Learning": ["modelforge", "explainable_ai"]
};
