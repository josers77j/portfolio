export type Locale = "es" | "en";
export const identity = {
  name: "José Ruben Trejo",
  email: "josers772@outlook.es",
  github: "https://github.com/josers77j",
  linkedin: "https://linkedin.com/in/rbn-trj-dbe",
  // Replace with the approved portrait path when available.
  photo: "",
};

// Portfolio copy is provisional and can be edited independently of the layout.
export const copy = {
  es: {
    title: "José Ruben Trejo · Desarrollador Full Stack",
    description:
      "Desarrollador full stack con enfoque en backend. APIs, interfaces e integraciones para salud y gestión comercial.",
    skip: "Saltar al contenido",
    nav: ["Inicio", "Experiencia", "Stack", "Proyectos"],
    theme: "Cambiar tema",
    language: "Cambiar idioma",
    role: "Full stack · Enfoque backend",
    headline: "Construyo sistemas que conectan ideas.",
    intro:
      "Desarrollo APIs, interfaces e integraciones para salud y gestión comercial.",
    viewProjects: "Ver proyectos",
    talk: "Hablemos",
    about: "Sobre mí",
    photo: "Tu foto",
    location: "San Miguel, El Salvador",
    bio: "De la lógica de negocio al despliegue: backend, Angular y soluciones integradas.",
    experience: "Aportes y experiencia",
    trajectory: "Ver trayectoria",
    contact: "Contacto",
    contactIntro: "Hablemos de tu proyecto",
    email: "Correo",
    stack: "Stack tecnológico",
    groups: ["Desarrollo", "Datos", "Infraestructura", "Calidad y seguridad"],
    projects: "Proyectos y aportes",
    projectIntro:
      "Soluciones profesionales, trabajo colaborativo y exploración técnica.",
    details: "Ver detalles",
    contribution: "Mi aporte",
    learning: "Experiencia adquirida",
    code: "Ver repositorios",
    footer: "Diseñado con intención. Construido con Astro.",
    timeline: [
      {
        label: "Salud",
        date: "2024–2025",
        summary: "Backend de expediente médico electrónico.",
        target: "hospital",
      },
      {
        label: "Automatización",
        date: "2025",
        summary: "Recepción y extracción de datos de facturas.",
        target: "techywe",
      },
      {
        label: "Gestión comercial",
        date: "2025–2026",
        summary: "Inventario y facturación electrónica.",
        target: "freelance",
      },
    ],
    jobs: [
      {
        id: "freelance",
        name: "Freelance · Gestión comercial",
        date: "Sep. 2025 — Oct. 2026",
        text: "Desarrollé inventario multi-almacén, compras, ventas y facturación electrónica DTE. Integré Angular, NestJS y PostgreSQL con colas Redis/BullMQ, reintentos y contingencia.",
        learning:
          "Transacciones, integración con servicios externos y despliegues en AWS y Neon.",
      },
      {
        id: "techywe",
        name: "TechyWe · Desarrollador backend",
        date: "May. 2025 — Sep. 2025",
        text: "Automaticé la recepción de facturas con Microsoft Graph Webhooks y Azure Document Intelligence. Mantuve servicios en C# / ASP.NET Core y optimicé consultas SQL Server.",
        learning:
          "Integraciones por eventos, mantenimiento de código legacy y colaboración con Azure DevOps.",
      },
      {
        id: "hospital",
        name: "Hospital Especialidades Nuestra Señora de La Paz",
        date: "Feb. 2024 — Abr. 2025",
        text: "Desarrollé el backend del expediente médico electrónico con RBAC y validaciones. Construí notificaciones de medicamentos mediante WebSockets y trabajé en el módulo financiero.",
        learning:
          "Control de acceso, comunicación en tiempo real y lógica de negocio en sistemas de salud.",
      },
      {
        id: "insaforp",
        name: "Insaforp · Servicio social",
        date: "May. 2023 — Ago. 2023",
        text: "Desarrollé un sistema de gestión de material educativo con alertas de inventario para prevenir desabastecimientos.",
        learning: "Gestión de inventario con PHP, Laravel, MySQL y Docker.",
      },
    ],
    cases: [
      {
        title: "Gestión comercial y DTE",
        type: "Freelance",
        summary: "Inventario, compras, ventas y facturación electrónica.",
        text: "Sistema multi-almacén con control de stock por zona, validación transaccional y procesamiento asíncrono de DTE con reintentos y contingencia.",
        tech: "Angular · NestJS · PostgreSQL · Redis",
        visual: "commerce",
      },
      {
        title: "IDS UNIVO",
        type: "Colaborativo",
        summary: "Comunidad estudiantil: proyectos, tutorías y oportunidades.",
        text: "Colaboro en una plataforma de libre acceso para estudiantes de ingeniería. Apoyo la configuración del backend en NestJS y la arquitectura frontend en Angular, la integración de servicios y la nivelación técnica del equipo.",
        tech: "NestJS · Angular · TypeScript · PostgreSQL",
        visual: "community",
      },
      {
        title: "Products Launcher",
        type: "Personal",
        summary: "Microservicios con NATS, TCP y Kubernetes en GCP.",
        text: "Diseñé e implementé servicios con bases de datos independientes, comunicación NATS/TCP y balanceadores de carga con Kubernetes en GCP.",
        tech: "NestJS · NATS · TCP · Kubernetes · GCP",
        visual: "systems",
      },
    ],
  },
  en: {
    title: "José Ruben Trejo · Full Stack Developer",
    description:
      "Full stack developer focused on backend. APIs, interfaces and integrations for healthcare and business management.",
    skip: "Skip to content",
    nav: ["Home", "Experience", "Stack", "Projects"],
    theme: "Switch theme",
    language: "Change language",
    role: "Full stack · Backend focus",
    headline: "Building systems that connect ideas.",
    intro:
      "I develop APIs, interfaces and integrations for healthcare and business management.",
    viewProjects: "View projects",
    talk: "Let’s talk",
    about: "About me",
    photo: "Your photo",
    location: "San Miguel, El Salvador",
    bio: "From business logic to deployment: backend, Angular and integrated solutions.",
    experience: "Contributions & experience",
    trajectory: "View experience",
    contact: "Contact",
    contactIntro: "Let’s talk about your project",
    email: "Email",
    stack: "Technology stack",
    groups: ["Development", "Data", "Infrastructure", "Quality & security"],
    projects: "Projects & contributions",
    projectIntro:
      "Professional solutions, collaborative work and technical exploration.",
    details: "View details",
    contribution: "My contribution",
    learning: "Experience gained",
    code: "View repositories",
    footer: "Designed with purpose. Built with Astro.",
    timeline: [
      {
        label: "Healthcare",
        date: "2024–2025",
        summary: "Electronic medical record backend.",
        target: "hospital",
      },
      {
        label: "Automation",
        date: "2025",
        summary: "Invoice intake and data extraction.",
        target: "techywe",
      },
      {
        label: "Business systems",
        date: "2025–2026",
        summary: "Inventory and electronic invoicing.",
        target: "freelance",
      },
    ],
    jobs: [
      {
        id: "freelance",
        name: "Freelance · Business management",
        date: "Sep. 2025 — Oct. 2026",
        text: "Built multi-warehouse inventory, purchasing, sales and DTE electronic invoicing. Integrated Angular, NestJS and PostgreSQL with Redis/BullMQ queues, retries and contingency handling.",
        learning:
          "Transactions, external service integrations and deployment with AWS and Neon.",
      },
      {
        id: "techywe",
        name: "TechyWe · Backend developer",
        date: "May 2025 — Sep. 2025",
        text: "Automated invoice intake using Microsoft Graph Webhooks and Azure Document Intelligence. Maintained C# / ASP.NET Core services and optimized SQL Server queries.",
        learning:
          "Event-driven integrations, legacy code maintenance and collaboration using Azure DevOps.",
      },
      {
        id: "hospital",
        name: "Hospital Especialidades Nuestra Señora de La Paz",
        date: "Feb. 2024 — Apr. 2025",
        text: "Developed the electronic medical record backend with RBAC and validation. Built medication notifications using WebSockets and contributed to the financial module.",
        learning:
          "Access control, real-time communication and healthcare business logic.",
      },
      {
        id: "insaforp",
        name: "Insaforp · Community service",
        date: "May 2023 — Aug. 2023",
        text: "Built an educational materials management system with inventory alerts to help prevent shortages.",
        learning: "Inventory management using PHP, Laravel, MySQL and Docker.",
      },
    ],
    cases: [
      {
        title: "Business management & DTE",
        type: "Freelance",
        summary: "Inventory, purchasing, sales and electronic invoicing.",
        text: "Multi-warehouse system with stock tracking by zone, transactional availability checks and asynchronous DTE processing with retries and contingency handling.",
        tech: "Angular · NestJS · PostgreSQL · Redis",
        visual: "commerce",
      },
      {
        title: "IDS UNIVO",
        type: "Collaborative",
        summary: "Student community: projects, tutoring and opportunities.",
        text: "Contributing to an open-access platform for engineering students. Supporting NestJS backend setup, Angular frontend architecture, service integration and technical knowledge sharing.",
        tech: "NestJS · Angular · TypeScript · PostgreSQL",
        visual: "community",
      },
      {
        title: "Products Launcher",
        type: "Personal",
        summary: "Microservices with NATS, TCP and Kubernetes on GCP.",
        text: "Designed and implemented services with independent databases, NATS/TCP communication and Kubernetes load balancers on GCP.",
        tech: "NestJS · NATS · TCP · Kubernetes · GCP",
        visual: "systems",
      },
    ],
  },
} as const;

export const stack = [
  ["TypeScript", "NestJS", "Angular", "ASP.NET Core"],
  ["PostgreSQL", "SQL Server", "MySQL", "Prisma"],
  ["Docker", "AWS", "Redis", "Kubernetes"],
  ["Jest", "Playwright", "JWT", "RBAC"],
];
