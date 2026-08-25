import type { Project, Milestone, TechCategory } from '../types';

export const PERSONAL_INFO = {
  name: "Nikhil Reddy",
  title: "Full-Stack Developer | AI & Data Systems Engineer | Software Engineer",
  email: "mnikhilreddy0308@gmail.com",
  github: "https://github.com/mnikhilreddy491-collab",
  linkedin: "https://in.linkedin.com/in/nikhil-reddy-0945423a7",
  bio: "I am a Computer Science and Artificial Intelligence engineer focused on building complete, production-ready software systems. I enjoy working across the full development lifecycle — from understanding a problem and designing system architecture to implementing, testing, deploying, and improving real products.",
  portraitUrl: "/portrait.jpg"
};

export const PROJECTS: Project[] = [
  {
    id: "cellsight",
    title: "CellSight",
    category: "Cellular Image Analysis & Segmentation",
    shortDescription: "A scientific application for cellular image enhancement and deep learning segmentation utilizing PyTorch, FastAPI, and Streamlit.",
    fullDescription: "CellSight is an advanced MLOps and computer vision system built to automate biological cell analysis. It processes microscopy images using custom CLAHE contrast normalizations and unsharp masking pipelines, segmenting cell boundaries via a PyTorch-implemented U-Net architecture. Instances are separated using distance transforms and Watershed split algorithms, exposing outputs through a FastAPI backend and interactive Streamlit frontend.",
    role: "Lead Systems & ML Developer",
    technologies: ["Python", "PyTorch", "OpenCV", "FastAPI", "Streamlit", "NumPy", "SciPy", "Image Processing"],
    image: "/portrait.jpg",
    diagram: [
      { id: "load", name: "Microscopy Loader", description: "Stream raw cell imaging datasets and apply random flip augmentations." },
      { id: "preprocess", name: "CLAHE Preprocessing", description: "Apply local contrast enhancement and unsharp masking pipelines." },
      { id: "unet", name: "U-Net Segmentation", description: "Evaluate pixel attributions using deep neural network boundaries." },
      { id: "watershed", name: "Watershed Splitting", description: "Execute distance transforms to separate overlapping cell bodies." },
      { id: "ui", name: "FastAPI & Streamlit", description: "Expose metrics dashboards and download attributions." }
    ],
    detailTabs: {
      overview: "CellSight is built to automate cell tracking and biological feature extraction workflows with high computational efficiency. It converts raw, low-contrast microscopy images into segmented attribution maps, helping labs accelerate quantitative analysis.",
      architecture: "The architecture splits operations between a fast preprocessing/evaluation worker in Python and a web visualization dashboard in Streamlit. Pretrained U-Net weights are loaded into memory on a FastAPI server, executing inference requests with minimal model loading overhead.",
      engineering: "Implemented Custom Layer-wise attribution overlays. The pipeline processes files sequentially in Web Workers, tracking segmented contours and computing Jaccard index metrics dynamically during model training.",
      challenges: "Separating highly overlapping cell bodies was difficult. Simple thresholding failed. I engineered a combined distance transform and Marker-based Watershed pipeline that resolved boundary splits, increasing instance segmentation accuracy by 25%.",
      outcome: "Successfully constructed a complete research codebase capable of segmenting cell lines with a Jaccard score of 0.88, reducing average annotation times from minutes to seconds."
    }
  },
  {
    id: "aegis",
    title: "Aegis Engine",
    category: "Security Posture & Compliance Graph",
    shortDescription: "A next-generation security posture management and configuration auditing policy graph engine implementing C3 MRO linearization.",
    fullDescription: "Aegis is a high-performance configuration auditing and compliance evaluation engine. It models cloud infrastructure access rules, resolves hierarchical policy inheritance using the C3 Method Resolution Order (MRO) algorithm, and audits system configurations across cloud providers, Kubernetes, and databases via 25 pluggable compliance scripts.",
    role: "Core Systems Architect",
    technologies: ["Python", "FastAPI", "Docker", "Graphviz", "Cytoscape.js", "YAML Specs", "MRO Linearization"],
    image: "/portrait.jpg",
    diagram: [
      { id: "parse", name: "Policy Parser", description: "Read hierarchical YAML/JSON access policy configuration groups." },
      { id: "mro", name: "C3 MRO Linearization", description: "Resolve multi-inheritance policy hierarchies using C3 Method Resolution Order." },
      { id: "plugin", name: "Compliance Audit", description: "Run resource targets against 25 built-in cloud and DB compliance plugins." },
      { id: "graph", name: "Cytoscape Graph", description: "Generate JSON structure assets to trace policy paths visually." }
    ],
    detailTabs: {
      overview: "Aegis resolves the complexity of access inheritance rules in multi-tenant environments. It helps administrators write clean, dry policies while guaranteeing deterministic configuration checks.",
      architecture: "Designed as a lightweight CLI and REST API. Policies are parsed into topological graph objects. Visualizations are rendered as Graphviz DOT, Cytoscape.js layouts, or clean ASCII tree maps.",
      engineering: "Coded a custom Python linearization engine. The engine overrides standard inheritance searches to support weight-based tie-breakers, allowing policies to declare weights to override lexicographical defaults.",
      challenges: "Template loop checks. Dynamic secret injection from vault properties caused infinite recursion. I added a cycle-detection compiler layer that builds a directed dependency graph, flagging loop scopes before compilation.",
      outcome: "Implemented 25 pre-built compliance plugins auditing AWS IAM, GCP security groups, Kubernetes RBAC, Nginx, PostgreSQL, and Snowflake data masking policies."
    }
  },
  {
    id: "jigflow",
    title: "JigFlow Platform",
    category: "Enterprise SaaS Workflow Platform",
    shortDescription: "A collaborative process automation platform featuring customizable React hooks, Node.js API controllers, and isolated devcontainer setups.",
    fullDescription: "JigFlow-Platform is an enterprise workflow coordinator. It exposes customizable frontend APIs using customized React hooks (`useResourceList`, `useApiAction`) to modularize work orders, features backend log formatting overrides, devcontainer workspace isolation, and automated ESLint CI jobs.",
    role: "Staff Full-Stack Engineer",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "ESLint", "Docker", "Devcontainers"],
    image: "/portrait.jpg",
    diagram: [
      { id: "hooks", name: "Custom API Hooks", description: "Fetch and mutatively update work order resources using useResourceList." },
      { id: "log", name: "Structured Logging", description: "Inject organization and request identifiers via custom JSON formatters." },
      { id: "devcontainer", name: "Devcontainer Isolation", description: "Containerize developer setups to isolate runtime environments." },
      { id: "ci", name: "ESLint CI Validator", description: "Execute automated static analysis and type checks on GitHub Actions pull requests." }
    ],
    detailTabs: {
      overview: "JigFlow-Platform standardizes work-order operations and development environments for engineering teams. It enforces strict logging compliance and build targets to verify fresh clones instantly.",
      architecture: "Microservices coordinate requests. The React frontend interacts with Node.js controllers through structured API payloads, storing state parameters in PostgreSQL and isolating local developers via Docker container volumes.",
      engineering: "Refactored React page interfaces. I extracted modular hook abstractions which reduced active lines of code (LOC) in main quality and work-order dashboards by 60% while boosting overall query speed.",
      challenges: "Developer environment drift. Different OS configurations caused localized lint and build failures. I designed a standardized `.devcontainer` configuration and packages supporting cross-env platforms to unify checks.",
      outcome: "Successfully decreased onboarding friction for new developers to zero, allowing fresh clones to build and lint with 100% success on any OS."
    }
  },
  {
    id: "vaultsentry",
    title: "VaultSentry",
    category: "Secrets Scanner & Identity Proxy",
    shortDescription: "An automated secrets detection scanner and Zero-Trust access proxy executing sub-10ms credentials and token verification audits.",
    fullDescription: "VaultSentry is a secure access gateway and repository scanner. It monitors development directories for credentials leakage, validates session tokens, and executes zero-trust identity evaluations to authorize user permissions.",
    role: "Security Systems Engineer",
    technologies: ["Python", "Redis", "FastAPI", "Auth0 Rules", "JSON Web Tokens (JWT)", "Shell Scripting"],
    image: "/portrait.jpg",
    diagram: [
      { id: "scan", name: "Regex Scan", description: "Scan source files for credential patterns and private key definitions." },
      { id: "auth", name: "JWT Verification", description: "Intercept connection requests to authenticate token signatures." },
      { id: "redis", name: "Cache Validation", description: "Query Redis key-value stores to resolve active session rules." },
      { id: "proxy", name: "Zero-Trust Gate", description: "Authorize resource access based on device integrity checks." }
    ],
    detailTabs: {
      overview: "VaultSentry provides real-time security boundaries for backend services. It intercepts incoming client requests, verifies JWT token claims, and checks cached security states to enforce zero-trust access control.",
      architecture: "Designed as a high-speed reverse proxy. Active access rules are stored in a fast in-memory Redis cluster. The middleware is written in Python/FastAPI to keep latency at a minimum.",
      engineering: "Built custom token verification middleware. It caches public keys of authorization servers, reducing network overhead and completing signature checks in under 8ms.",
      challenges: "Rate-limiting checks on session token validation. Direct database lookups caused severe latency. I implemented a sliding-window rate-limiting algorithm using Redis sorted sets, capping overhead completely.",
      outcome: "Secured enterprise APIs against credential leakage and unauthenticated requests, processing millions of weekly authorization queries without failures."
    }
  }
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "app",
    title: "Application Development",
    skills: ["React", "Vite", "TypeScript", "Tailwind CSS", "Streamlit", "Cytoscape.js", "Plotly.js"]
  },
  {
    id: "backend",
    title: "Backend Engineering",
    skills: ["Python", "FastAPI", "Node.js", "Express", "REST APIs", "WebSockets", "JWT", "YAML"]
  },
  {
    id: "ai",
    title: "AI / Data Science",
    skills: ["Machine Learning", "PyTorch", "OpenCV", "Image Processing", "CLAHE", "Watershed"]
  },
  {
    id: "infra",
    title: "Data / Infrastructure",
    skills: ["PostgreSQL", "Redis", "Supabase", "Docker", "Devcontainers", "GitHub Actions"]
  }
];

export const TIMELINE: Milestone[] = [
  {
    id: "m1",
    year: "2025",
    title: "Technical Development & Internships",
    subtitle: "Software Engineering Focus",
    description: "Built scalable software features, refactored API routes, and configured static analysis lint hooks during focused development phases.",
    tags: ["React", "FastAPI", "PostgreSQL", "ESLint"],
    category: "work"
  },
  {
    id: "m2",
    year: "2025-2026",
    title: "CellSight PyTorch Research",
    subtitle: "ML & Image Processing Researcher",
    description: "Conducted deep learning research on cellular boundary segmentations, co-authoring scientific reports and writing pipeline libraries in PyTorch and OpenCV.",
    tags: ["PyTorch", "OpenCV", "U-Net", "FastAPI"],
    category: "academic"
  },
  {
    id: "m3",
    year: "2026",
    title: "Aegis Policy & Compliance Engine",
    subtitle: "Systems Architect",
    description: "Architected and built the Aegis policy graph platform, implementing C3 MRO linearization solvers, loop checks, and Cytoscape layouts.",
    tags: ["Python", "C3 MRO", "Docker", "Cytoscape.js"],
    category: "project"
  },
  {
    id: "m4",
    year: "2026",
    title: "JigFlow SaaS Platform Development",
    subtitle: "Staff Full-Stack Engineer",
    description: "Refactored React UI structures, introduced useResourceList hooks, and configured Docker devcontainers to standardize setups.",
    tags: ["React Hooks", "TypeScript", "Docker", "Devcontainers"],
    category: "project"
  },
  {
    id: "m5",
    year: "2026",
    title: "VaultSentry Scanner & Security Gateway",
    subtitle: "Security Systems Engineer",
    description: "Developed secrets scanning models, high-speed reverse proxies, and token validation middleware using FastAPI and Redis caches.",
    tags: ["Redis Caching", "JWT", "FastAPI", "Security Auditing"],
    category: "work"
  }
];

// Mapping of technologies to project IDs for relationship visualizer
export const TECH_PROJECT_MAP: Record<string, string[]> = {
  "React": ["jigflow"],
  "TypeScript": ["jigflow"],
  "Tailwind CSS": ["jigflow"],
  "Streamlit": ["cellsight"],
  "Cytoscape.js": ["aegis"],
  "Python": ["cellsight", "aegis", "vaultsentry"],
  "FastAPI": ["cellsight", "aegis", "vaultsentry"],
  "Node.js": ["jigflow"],
  "PyTorch": ["cellsight"],
  "OpenCV": ["cellsight"],
  "PostgreSQL": ["jigflow"],
  "Redis": ["vaultsentry"],
  "Docker": ["jigflow", "aegis"],
  "Devcontainers": ["jigflow"],
  "GitHub Actions": ["jigflow"],
  "JWT": ["vaultsentry"]
};
