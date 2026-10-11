// ============================================================================
//  PORTFOLIO CONTENT  —  Yaswanth Daruvuri (Python Full-Stack Developer)
//  Edit this file to change everything the site displays.
//  (Chatbot knowledge is in  api/_resume-context.js  — update both when the
//   résumé changes.)
// ============================================================================

export const profile = {
  name: "Yaswanth Daruvuri",
  handle: "ycdaruvuri",
  role: "Python Full-Stack Developer",
  // One-liner used in the terminal hero prompt.
  tagline: "Django · FastAPI · React/TS · AWS · building LLM-powered apps",
  summary:
    "Python Full-Stack Developer with 6+ years building secure, scalable web applications and APIs. Backend focus in Django/DRF and FastAPI (async), frontend in React/TypeScript (Next.js, Redux), and data persistence with PostgreSQL, MySQL, and MongoDB. Strong in REST/GraphQL design, microservices, message queues (Celery, Redis, RabbitMQ), and cloud deployment on AWS with Docker/Kubernetes, CI/CD, and IaC. Recently expanded into Generative AI, building LLM-powered applications with LangChain, Retrieval-Augmented Generation (RAG), and vector-based search.",
  location: "Charlotte, NC, USA",
  email: "yaswanthdaruvuri99@gmail.com",
  phone: "+1 203-589-2223",
  github: "https://github.com/ycdaruvuri",
  resumeUrl: "#", // drop a resume.pdf in /public and point this at "/resume.pdf"
};

// Quick-stat chips shown in the terminal hero
export const heroStats = [
  { k: "years", v: "6+" },
  { k: "focus", v: "Python / React" },
  { k: "cloud", v: "AWS" },
  { k: "exploring", v: "LLMs · RAG" },
];

// About section — rendered as a syntax-highlighted Python dict
export const about = {
  highlights: [
    "6+ years as a Python Full-Stack Developer across fintech, healthcare, and banking.",
    "Backend: Django/DRF, FastAPI (async), Flask — REST, GraphQL, WebSockets.",
    "Frontend: React, Next.js, TypeScript, Redux/RTK, Tailwind, Material UI.",
    "Data: PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch.",
    "Cloud/DevOps: AWS (EC2, ECS, EKS, S3, RDS, CloudFront), Docker, K8s, Terraform.",
    "Expanded into Generative AI — LangChain, RAG, vector search, prompt engineering.",
  ],
  domains: ["Fintech", "Healthcare", "Banking"],
};

// Skill tiles — rendered as a bento grid
export const skillGroups = [
  { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL"], accent: "cyan" },
  { category: "Backend", items: ["Django", "DRF", "FastAPI", "Flask", "Celery", "Redis", "Gunicorn", "Uvicorn", "OAuth2 / JWT"], accent: "emerald" },
  { category: "Frontend", items: ["React", "Next.js", "Redux / RTK", "React Query", "Axios / Fetch", "Tailwind CSS", "Material UI"], accent: "sky" },
  { category: "AI / ML", items: ["Generative AI", "LLMs", "LangChain", "RAG", "Prompt Engineering", "Vector Databases", "OpenCV"], accent: "violet" },
  { category: "Databases / Storage", items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis", "S3", "Elasticsearch"], accent: "amber" },
  { category: "APIs / Integration", items: ["REST", "GraphQL", "WebSockets", "Stripe", "SSO (SAML, OIDC)"], accent: "pink" },
  { category: "DevOps / Cloud", items: ["Docker", "Docker Compose", "Kubernetes", "Nginx", "GitHub Actions", "Jenkins", "Terraform", "AWS (EC2, S3, RDS, CloudFront, Route53, ECR, ECS, EKS)", "Linux"], accent: "orange" },
  { category: "Testing / Quality", items: ["PyTest", "unittest", "Jest", "React Testing Library", "Cypress", "Postman"], accent: "lime" },
  { category: "Practices", items: ["Microservices", "12-Factor", "Domain-Driven Design", "TDD", "CI/CD", "Caching", "Observability"], accent: "rose" },
];

// Work history — most recent first — rendered as a git-log style timeline
export const experience = [
  {
    role: "Senior Python Full-Stack Developer",
    company: "Capital One",
    location: "Columbus, OH",
    period: "May 2024 – Present",
    sha: "a3f8c21",
    branch: "capital-one/senior",
    bullets: [
      "Designed and shipped customer-facing and internal portals with Django/DRF + React/TypeScript, enabling secure self-service workflows and real-time status tracking.",
      "Built FastAPI microservices (async, Pydantic) for high-throughput APIs; cut P95 response times by 45% via async I/O and query optimization.",
      "Prototyped internal AI-assisted workflows using LLM APIs for document summarization and contextual query responses, boosting analyst productivity.",
      "Explored RAG patterns with embeddings and vector search for intelligent knowledge retrieval across services.",
      "Implemented RBAC, OAuth2/JWT, and rate-limiting; added audit trails and structured logging for compliance.",
      "Modeled PostgreSQL schemas with indexes/partitions — reduced heavy report queries by 60%.",
      "Added a GraphQL gateway for aggregated reads across services; cut frontend round-trips by 35%.",
      "Introduced Celery + Redis for background jobs (emails, PDF exports, webhooks, ETL triggers); stabilized spikes with idempotent tasks/retries.",
      "Containerized services with Docker; deployed behind Nginx via GitHub Actions + Terraform to AWS (EC2/ECS, RDS, S3, CloudFront) with blue/green releases.",
      "Added observability: OpenTelemetry traces, structured logs, metrics; MTTR improved by 80%.",
      "Mentored 4 developers on API design, React patterns, and performance profiling.",
    ],
    tech: ["Django/DRF", "FastAPI", "React/TS", "Next.js", "PostgreSQL", "GraphQL", "Celery", "Redis", "Docker", "AWS", "Terraform", "LangChain", "RAG"],
  },
  {
    role: "Python Full-Stack Developer",
    company: "Optum (UnitedHealth Group)",
    location: "Chennai, India",
    period: "May 2020 – Apr 2023",
    sha: "7e14b02",
    branch: "optum/full-stack",
    bullets: [
      "Developed provider/patient portals with Django/DRF backends and React frontends — secure scheduling, claims search, and file-upload flows.",
      "Exposed REST and GraphQL APIs with pagination, filtering, HATEOAS; published OpenAPI/Swagger docs.",
      "Built a FastAPI service for real-time eligibility lookups with Redis cache and circuit breakers.",
      "Implemented async tasks with Celery (PDF generation, notifications, batched ETL); cut synchronous API latency.",
      "Built data-ingestion pipelines for eligibility and claims using async services and scheduled jobs.",
      "Operated in regulated healthcare — HIPAA via access controls, audit logs, data masking.",
      "Designed PostgreSQL schemas and MongoDB stores; leveraged read replicas and connection pooling.",
      "Reusable UI components (MUI + Tailwind), form validation with React Hook Form/Yup; improved WCAG accessibility.",
      "Local parity via Docker Compose; production deploys via Jenkins to AWS ECS/ECR, RDS, S3.",
      "Added token-based SSO (OIDC), row-level security, and field-level masking for PHI compliance.",
      "P95 TTI improved 40% via code-splitting, memoization, and React Query caching.",
    ],
    tech: ["Django/DRF", "FastAPI", "React", "GraphQL", "Celery", "Redis", "PostgreSQL", "MongoDB", "Docker", "AWS ECS", "Jenkins", "HIPAA"],
  },
  {
    role: "Software Engineer",
    company: "Yes Bank Ltd.",
    location: "Mumbai, India",
    period: "Apr 2019 – Apr 2020",
    sha: "2b9d4a7",
    branch: "yes-bank/onboarding",
    bullets: [
      "Built an internal onboarding and approvals app on Django with a React UI — reduced manual ops by 60%.",
      "Implemented Django ORM models, services, and repository patterns; added signals for denormalized counters.",
      "DRF APIs for workflow states, comments, and attachments; added throttling and JWT auth.",
      "React dashboards with Recharts and server-side pagination; improved search UX with debounced queries.",
      "Celery + Redis for SLA reminders and nightly reconciliations with idempotency and task chaining.",
      "Nginx + Gunicorn deployment; static/media on S3-compatible storage; versioned artifacts for rollback.",
      "PyTest + Jest/RTL unit and integration tests; CI test matrix with factories/fixtures.",
      "Tuned PostgreSQL indexes and query plans — cut heavy reports from minutes to seconds.",
      "Instrumented logging/alerts; added audit tables and GDPR-style export/delete features.",
      "Hardened headers (HSTS, CSP), sanitized inputs, and managed secrets via environment variables.",
    ],
    tech: ["Django", "DRF", "React", "PostgreSQL", "Celery", "Redis", "Nginx", "Gunicorn", "PyTest"],
  },
];

// Featured projects — rendered as README-style cards
export const projects = [
  {
    name: "smart-annotate",
    tagline: "AI-powered NER annotation platform",
    description:
      "Full-stack text-labeling tool for ML training. FastAPI + React + MongoDB, with LangChain and OpenAI LLM APIs for AI-assisted annotation. Scalable backend with pagination, optimized queries, and async processing; containerized with Docker + Nginx.",
    stars: 42,
    forks: 7,
    language: "Python",
    tech: ["FastAPI", "React", "MongoDB", "LangChain", "OpenAI", "JWT", "Docker", "Nginx"],
    highlights: [
      "AI-assisted labeling using LangChain + LLM APIs — faster and more accurate annotations",
      "Secure JWT-authenticated REST APIs for project, document, and annotation workflows",
      "Scalable async backend with pagination and optimized queries",
    ],
  },
];

export const certifications = [
  { name: "AWS Certified Developer – Associate", issuer: "Amazon Web Services", icon: "AWS" },
  { name: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)", issuer: "Microsoft", icon: "PL" },
];

export const education = [
  {
    degree: "Master of Science, Computer Science",
    school: "University of Bridgeport",
    period: "May 2023 – Dec 2024",
  },
];

// Chatbot preset
export const chatbot = {
  avatarName: "Yas",
  greeting:
    "Hey! I'm Yaswanth's AI assistant 👋 Ask me anything about his experience, skills, or projects — I'll answer from his résumé.",
  suggestions: [
    "How many years of Python experience?",
    "Tell me about his AWS work",
    "What AI / LLM projects has he built?",
    "What's his Django & FastAPI experience?",
    "Is he open to new roles?",
  ],
};
