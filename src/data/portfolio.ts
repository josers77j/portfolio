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
      "Desarrollador full stack con enfoque en backend. Experiencia en APIs, integración de servicios y automatización con Node.js, NestJS, ASP.NET Core, Angular y PostgreSQL.",
    skip: "Saltar al contenido",
    nav: ["Inicio", "Experiencia", "Stack", "Proyectos"],
    theme: "Cambiar tema",
    language: "Cambiar idioma",
    role: "Full stack · Enfoque backend",
    headline: "Desarrollador full stack con enfoque en backend.",
    intro:
      "Analizo procesos de negocio para identificar problemas y llevar soluciones desde la propuesta hasta su implementación. Tengo experiencia desarrollando APIs, integrando servicios y automatizando tareas, tanto en equipos como en proyectos independientes.",
    viewProjects: "Ver proyectos",
    talk: "Hablemos",
    about: "Sobre mí",
    photo: "Tu foto",
    location: "San Miguel, El Salvador",
    bio: "Trabajo con Node.js, NestJS, ASP.NET Core, Angular y PostgreSQL. Me involucro en las decisiones técnicas y en entender cómo debe funcionar cada solución.",
    experience: "Experiencia laboral",
    community: "Aportes a la comunidad",
    communityNav: "Comunidad",
    sectionNavigation: "Navegación por secciones",
    trajectory: "Ver trayectoria",
    contact: "Contacto",
    contactIntro: "Hablemos de tu proyecto",
    email: "Correo",
    stack: "Stack tecnológico",
    groups: ["Desarrollo", "Datos", "Infraestructura", "Calidad y seguridad"],
    projects: "Proyectos destacados",
    otherProjects: "Otros proyectos",
    otherProjectIntro:
      "Aplicaciones y ejercicios para explorar tecnologías y funcionalidades específicas.",
    experienceIntro:
      "Mi participación en desarrollo de aplicaciones, automatización e integración de servicios.",
    technicalDetails: "Ver enfoque técnico",
    technicalFocus: "Enfoque técnico",
    projectContribution: "Implementación",
    contactClosing: "¿Buscas un desarrollador para tu equipo?",
    contactClosingText:
      "Podemos conversar sobre el puesto y cómo encaja mi experiencia.",
    projectIntro:
      "Dos proyectos para conocer mi trabajo en aplicaciones de gestión y arquitectura de microservicios.",
    details: "Ver detalles",
    contribution: "Mi aporte",
    learning: "Experiencia adquirida",
    code: "Ver repositorios",
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
        summary: "WheelDesk: inventario, compras y ventas.",
        target: "freelance",
      },
    ],
    communityContributions: [
      {
        id: "ids-univo",
        context:
          "Colaboración en una plataforma para la comunidad estudiantil de ingeniería.",
        name: "IDS UNIVO · Aporte colaborativo",
        date: "Colaboración",
        text: "Colaboro en una plataforma de libre acceso para estudiantes de ingeniería. Apoyo la configuración del backend en NestJS y la arquitectura frontend en Angular, la integración de servicios y la nivelación técnica del equipo.",
        learning:
          "Colaboración técnica con el equipo en NestJS y Angular, arquitectura de frontend e integración de servicios.",
      },
    ],
    jobs: [
      {
        id: "freelance",
        context:
          "Gestión de inventario y operaciones de un negocio de neumáticos.",
        name: "Freelance · WheelDesk",
        date: "Sep. 2025 — Oct. 2026",
        text: "Desarrollé WheelDesk para la gestión de negocios de neumáticos con Angular, Node.js, NestJS y PostgreSQL. Implementé inventario por bodegas y zonas, compras, ventas, cotizaciones, documentos y reportes contables, junto con roles de usuario y auditoría.",
        learning:
          "Gestión de inventario, control de acceso e integración de almacenamiento compatible con S3 y correo electrónico.",
      },
      {
        id: "techywe",
        context:
          "Procesamiento de facturas de proveedores recibidas por correo electrónico.",
        name: "TechyWe · Desarrollador backend",
        date: "May. 2025 — Sep. 2025",
        text: "Automaticé la recepción de facturas con Microsoft Graph Webhooks y Azure Document Intelligence. Mantuve servicios en C# / ASP.NET Core y optimicé consultas SQL Server.",
        learning:
          "Integraciones por eventos, mantenimiento de código legacy y colaboración con Azure DevOps.",
      },
      {
        id: "hospital",
        context:
          "Desarrollo de funcionalidades para un expediente médico electrónico.",
        name: "Hospital Especialidades Nuestra Señora de La Paz",
        date: "Feb. 2024 — Abr. 2025",
        text: "Desarrollé el backend del expediente médico electrónico con RBAC y validaciones. Construí notificaciones de medicamentos mediante WebSockets y trabajé en el módulo financiero.",
        learning:
          "Control de acceso, comunicación en tiempo real y lógica de negocio en sistemas de salud.",
      },
      {
        id: "insaforp",
        context:
          "Control de existencias de material educativo y alertas de inventario.",
        name: "Insaforp · Servicio social",
        date: "May. 2023 — Ago. 2023",
        text: "Desarrollé un sistema de gestión de material educativo con alertas de inventario para prevenir desabastecimientos.",
        learning: "Gestión de inventario con PHP, Laravel, MySQL y Docker.",
      },
    ],
    cases: [
      {
        title: "WheelDesk",
        type: "Full stack",
        summary:
          "Gestión para negocios de neumáticos: inventario, compras, ventas y cotizaciones.",
        text: "Centraliza existencias por bodegas y zonas, clientes, proveedores y documentos PDF/JSON. Incluye reportes contables, auditoría y administración de usuarios con roles y sesiones. Backend con almacenamiento compatible con S3 y envío de correo mediante Resend.",
        tech: "Angular · Node.js · NestJS · PostgreSQL · Prisma · Tailwind CSS · daisyUI",
        visual: "commerce",
        status: "Sin demo pública · código disponible",
        repositories: [
          {
            label: "Frontend",
            url: "https://github.com/josers77j/WheelDesk-frontend",
          },
          {
            label: "Backend",
            url: "https://github.com/josers77j/WheelDesk-backend",
          },
        ],
      },
      {
        title: "Pucknotch",
        type: "Fork personal · macOS",
        summary:
          "Extensión independiente de Boring Notch con Pomodoro configurable, traducción y conversiones de archivos.",
        text: "Tomé Boring Notch como base y mantuve sus créditos y licencia GPL v3. Sobre el proyecto original añadí funciones para Pomodoro con duraciones precisas y actividad lateral configurable, traducción entre inglés y español con modelos de Apple, y herramientas de conversión de imágenes, audio y PDF.",
        tech: "Swift · SwiftUI · macOS · EventKit · Translation",
        visual: "notch",
        status: "Fork independiente · GPL v3",
        repositories: [
          { label: "Código", url: "https://github.com/josers77j/pucknotch" },
          {
            label: "Proyecto base · Boring Notch",
            url: "https://github.com/TheBoredTeam/boring.notch",
          },
        ],
      },
      {
        title: "Products Launcher",
        type: "Personal",
        summary: "Microservicios con NATS, TCP y Kubernetes en GCP.",
        text: "Diseñé e implementé servicios con bases de datos independientes, comunicación NATS/TCP y balanceadores de carga con Kubernetes en GCP.",
        tech: "Node.js · NestJS · NATS · TCP · Kubernetes · GCP",
        visual: "systems",
      },
    ],
  },
  en: {
    title: "José Ruben Trejo · Full Stack Developer",
    description:
      "Full stack developer focused on backend. Experience in APIs, service integration and automation with Node.js, NestJS, ASP.NET Core, Angular and PostgreSQL.",
    skip: "Skip to content",
    nav: ["Home", "Experience", "Stack", "Projects"],
    theme: "Switch theme",
    language: "Change language",
    role: "Full stack · Backend focus",
    headline: "Full stack developer with a focus on backend.",
    intro:
      "I analyze business processes to identify problems and take solutions from proposal to implementation. I have experience developing APIs, integrating services and automating tasks, both in teams and on independent projects.",
    viewProjects: "View projects",
    talk: "Let’s talk",
    about: "About me",
    photo: "Your photo",
    location: "San Miguel, El Salvador",
    bio: "I work with Node.js, NestJS, ASP.NET Core, Angular and PostgreSQL. I contribute to technical decisions and understanding how each solution needs to work.",
    experience: "Work experience",
    community: "Community contributions",
    communityNav: "Community",
    sectionNavigation: "Section navigation",
    trajectory: "View experience",
    contact: "Contact",
    contactIntro: "Let’s talk about your project",
    email: "Email",
    stack: "Technology stack",
    groups: ["Development", "Data", "Infrastructure", "Quality & security"],
    projects: "Featured projects",
    otherProjects: "Other projects",
    otherProjectIntro:
      "Applications and exercises exploring specific technologies and features.",
    experienceIntro:
      "My contributions to application development, automation and service integration.",
    technicalDetails: "View technical approach",
    technicalFocus: "Technical focus",
    projectContribution: "Implementation",
    contactClosing: "Looking for a developer for your team?",
    contactClosingText:
      "Let’s talk about the role and how my experience could fit.",
    projectIntro:
      "Two projects showcasing my work on business applications and microservices architecture.",
    details: "View details",
    contribution: "My contribution",
    learning: "Experience gained",
    code: "View repositories",
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
        summary: "WheelDesk: inventory, purchasing and sales.",
        target: "freelance",
      },
    ],
    communityContributions: [
      {
        id: "ids-univo",
        context:
          "Contributing to a platform for the engineering student community.",
        name: "IDS UNIVO · Collaborative contribution",
        date: "Collaboration",
        text: "Contributing to an open-access platform for engineering students. Supporting NestJS backend setup, Angular frontend architecture, service integration and technical knowledge sharing.",
        learning:
          "Technical collaboration with the team using NestJS and Angular, frontend architecture and service integration.",
      },
    ],
    jobs: [
      {
        id: "freelance",
        context: "Inventory and operations management for a tire business.",
        name: "Freelance · WheelDesk",
        date: "Sep. 2025 — Oct. 2026",
        text: "Built WheelDesk for tire business management using Angular, Node.js, NestJS and PostgreSQL. Implemented inventory by warehouse and zone, purchasing, sales, quotations, documents and accounting reports, along with user roles and auditing.",
        learning:
          "Inventory management, access control and integration with S3-compatible storage and email.",
      },
      {
        id: "techywe",
        context: "Processing supplier invoices received by email.",
        name: "TechyWe · Backend developer",
        date: "May 2025 — Sep. 2025",
        text: "Automated invoice intake using Microsoft Graph Webhooks and Azure Document Intelligence. Maintained C# / ASP.NET Core services and optimized SQL Server queries.",
        learning:
          "Event-driven integrations, legacy code maintenance and collaboration using Azure DevOps.",
      },
      {
        id: "hospital",
        context: "Feature development for an electronic medical record system.",
        name: "Hospital Especialidades Nuestra Señora de La Paz",
        date: "Feb. 2024 — Apr. 2025",
        text: "Developed the electronic medical record backend with RBAC and validation. Built medication notifications using WebSockets and contributed to the financial module.",
        learning:
          "Access control, real-time communication and healthcare business logic.",
      },
      {
        id: "insaforp",
        context: "Educational materials stock control and inventory alerts.",
        name: "Insaforp · Community service",
        date: "May 2023 — Aug. 2023",
        text: "Built an educational materials management system with inventory alerts to help prevent shortages.",
        learning: "Inventory management using PHP, Laravel, MySQL and Docker.",
      },
    ],
    cases: [
      {
        title: "WheelDesk",
        type: "Full stack",
        summary:
          "Tire business management: inventory, purchasing, sales and quotations.",
        text: "Centralizes stock by warehouse and zone, customers, suppliers and PDF/JSON documents. Includes accounting reports, auditing and user administration with roles and sessions. The backend integrates S3-compatible storage and email delivery through Resend.",
        tech: "Angular · Node.js · NestJS · PostgreSQL · Prisma · Tailwind CSS · daisyUI",
        visual: "commerce",
        status: "No public demo · source available",
        repositories: [
          {
            label: "Frontend",
            url: "https://github.com/josers77j/WheelDesk-frontend",
          },
          {
            label: "Backend",
            url: "https://github.com/josers77j/WheelDesk-backend",
          },
        ],
      },
      {
        title: "Pucknotch",
        type: "Personal fork · macOS",
        summary:
          "Independent Boring Notch extension with configurable Pomodoro, translation and file conversion.",
        text: "Based on Boring Notch, retaining its credits and GPL v3 license. I added a Pomodoro timer with precise durations and a configurable side activity, English–Spanish translation using Apple models, and image, audio and PDF conversion tools.",
        tech: "Swift · SwiftUI · macOS · EventKit · Translation",
        visual: "notch",
        status: "Independent fork · GPL v3",
        repositories: [
          { label: "Source", url: "https://github.com/josers77j/pucknotch" },
          {
            label: "Upstream · Boring Notch",
            url: "https://github.com/TheBoredTeam/boring.notch",
          },
        ],
      },
      {
        title: "Products Launcher",
        type: "Personal",
        summary: "Microservices with NATS, TCP and Kubernetes on GCP.",
        text: "Designed and implemented services with independent databases, NATS/TCP communication and Kubernetes load balancers on GCP.",
        tech: "Node.js · NestJS · NATS · TCP · Kubernetes · GCP",
        visual: "systems",
      },
    ],
  },
} as const;

export const stack = [
  ["TypeScript", "Node.js", "NestJS", "Angular", "ASP.NET Core"],
  ["PostgreSQL", "SQL Server", "MySQL", "Prisma"],
  ["Docker", "AWS", "Redis", "Kubernetes"],
  ["Jest", "Playwright", "JWT", "RBAC"],
];
