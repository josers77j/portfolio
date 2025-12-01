import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      navPresentation: 'Presentation',
      navProjects: 'Projects',
      navStacks: 'Technologies',
      navContact: 'Contact',

      // Projects section
      projectsTitle: 'Projects',
      project1Title: 'Inventory Management System',
      project1Desc: 'Description: Inventory management system for an institute that teaches professional training courses. It allows control of products, suppliers, purchases and sales.',
      project1Techs: 'Technologies: PHP, AJAX, MySQL, MVC, HTML, CSS, JavaScript, jQuery, Bootstrap, Github',
        project2Title: 'Inventory Management System (short)',
        project2Desc: 'Description: Short demo project.',
        project2Techs: 'Technologies: PHP, AJAX, MySQL, MVC, HTML, CSS, JavaScript, jQuery, Bootstrap, Github',
      project3Title: 'Teslo Shop – Full Stack E-commerce Platform',
      project3Desc: 'Full stack e-commerce platform with authentication, roles, product management, purchases and order flow. Each layer is deployed independently to a production environment.',
      project3Techs: 'NestJS, Angular, PostgreSQL, Prisma, Docker, JWT, REST API',

      project3Note: 'Admin panel credentials:\nuser: test1@google.com\npassword: Abc123\n(login required to access admin panel).',

      project4Title: 'Microservices & Payments System',
      project4Desc: 'Microservices-based system for products, users and orders, including payment integration with Stripe and CI/CD deployment using Kubernetes and Google Cloud.',
      project4Techs: 'Node.js, Docker, Kubernetes, Stripe API, MongoDB, PostgreSQL, SQLite, CI/CD',

      project5Title: 'Maps & Locations Finder',
      project5Desc: 'Interactive application that allows users to save and manage locations using real-time maps and optimized requests with caching.',
      project5Techs: 'Angular, TypeScript, Mapbox API, Cache Optimization',

      project6Title: 'GIFs Explorer App',
      project6Desc: 'Application for searching GIFs with infinite scroll, optimized calls and local caching to improve performance and reduce API usage.',
      project6Techs: 'Angular, Giphy API, Infinite Scroll, Caching',

      project7Title: 'Pokémon In-Memory API',
      project7Desc: 'Backend service that consumes the PokéAPI and stores a configured number of records in memory for fast access and processing.',
      project7Techs: 'NestJS, PokéAPI, In-Memory Storage',
      project8Title: 'Countries Explorer App',
      project8Desc: 'Angular application that consumes a countries API. It provides lists by capital, by country and by region; each section includes a search box to lookup specific entries. Only the region list fetches data automatically — other lists require performing a search to obtain results.',
      project8Techs: 'Angular, TypeScript, REST API, Netlify',
      project8Note: 'Press the green "Get started" button to access the countries application.',
      viewCode: 'View Code',
      viewDemo: 'View Demo',

      // Presentation
      presentationTitle: 'Hi, I\'m Ruben 👋',
      presentationDescription: 'Backend developer specialized in Node.js, NestJS and PostgreSQL. I design and build well-structured APIs and scalable systems, with hands-on experience in Docker, Prisma and system architecture. Currently expanding my frontend skills while focusing on building production-ready applications',

      // Stacks section
      stacksTitle: 'Technologies',
      backend: 'Backend',
      languages: 'Languages',
      databases: 'Databases',
      devops: 'DevOps',
      frontend: 'Frontend',
      orms: 'ORMs',
      testing: 'Testing',
      tools: 'Tools',

      // Contact section
      contactTitle: 'Contact Me',
      name: 'Name',
      namePlaceholder: 'Enter your name',
      email: 'Email',
      emailPlaceholder: 'Enter your email',
      message: 'Message',
      messagePlaceholder: 'Write your message here',
      sendMessage: 'Send Message',
      getInTouch: 'Get in touch',
    },
  },
  es: {
    translation: {
      // Navigation
      navPresentation: 'Presentación',
      navProjects: 'Proyectos',
      navStacks: 'Tecnologías',
      navContact: 'Contacto',

      // Projects section
      projectsTitle: 'Proyectos',
      project1Title: 'Sistema de Gestión de Inventario',
      project1Desc: 'Descripción: Sistema de gestión de inventario para un instituto que imparte cursos de formación profesional. Permite llevar un control de los productos, proveedores, compras y ventas.',
      project1Techs: 'Tecnologías: PHP, AJAX, MySQL, MVC, HTML, CSS, JavaScript, jQuery, Bootstrap, Github',
        project2Title: 'Sistema de Gestión de Inventario (corto)',
        project2Desc: 'Descripción: Proyecto demo corto.',
        project2Techs: 'Tecnologías: PHP, AJAX, MySQL, MVC, HTML, CSS, JavaScript, jQuery, Bootstrap, Github',
      project3Title: 'Teslo Shop – Plataforma e-commerce Full Stack',
      project3Desc: 'Plataforma e-commerce full stack con autenticación, roles, gestión de productos, flujo de compras y pedidos. Cada capa está desplegada de forma independiente en entornos de producción.',
      project3Techs: 'NestJS, Angular, PostgreSQL, Prisma, Docker, JWT, REST API',
      project3Note: 'Credenciales para el panel administrativo:\nUsuario: test1@google.com\nContraseña: Abc123\n(se requiere inicio de sesión para acceder al panel).',

      project4Title: 'Microservicios y Sistema de Pagos',
      project4Desc: 'Sistema basado en microservicios para productos, usuarios y pedidos, con integración de pagos mediante Stripe y despliegue CI/CD en Kubernetes y Google Cloud.',
      project4Techs: 'Node.js, Docker, Kubernetes, Stripe API, MongoDB, PostgreSQL, SQLite, CI/CD',

      project5Title: 'Buscador de Mapas y Ubicaciones',
      project5Desc: 'Aplicación interactiva que permite guardar y gestionar ubicaciones usando mapas en tiempo real y peticiones optimizadas con caché.',
      project5Techs: 'Angular, TypeScript, Mapbox API, Optimización de Caché',

      project6Title: 'Explorador de GIFs',
      project6Desc: 'Aplicación para buscar GIFs con scroll infinito, llamadas optimizadas y caché local para mejorar el rendimiento y reducir el uso de la API.',
      project6Techs: 'Angular, Giphy API, Scroll Infinito, Caché',

      project7Title: 'API Pokémon en Memoria',
      project7Desc: 'Servicio backend que consume la PokéAPI y almacena un número configurado de registros en memoria para acceso y procesamiento rápidos.',
      project7Techs: 'NestJS, PokéAPI, Almacenamiento en Memoria',
      project8Title: 'Explorador de Países',
      project8Desc: 'Aplicación Angular que consume una API de países. Proporciona listados por capital, por país y por región; cada sección incluye un cuadro de búsqueda para buscar entradas específicas. Solo el listado por región obtiene datos automáticamente — los demás listados requieren realizar la búsqueda para obtener resultados.',
      project8Techs: 'Angular, TypeScript, API REST, Netlify',
      project8Note: 'Presiona el botón verde "Get started" para acceder a la aplicación de países.',
      viewCode: 'Ver Código',
      viewDemo: 'Ver Demo',

      // Presentation
      presentationTitle: 'Hola, soy Ruben 👋',
      presentationDescription: 'Desarrollador backend especializado en Node.js, NestJS y PostgreSQL. Diseño y construyo APIs bien estructuradas y sistemas escalables, con experiencia práctica en Docker, Prisma y arquitectura de sistemas. Actualmente estoy ampliando mis habilidades de frontend mientras me centro en construir aplicaciones listas para producción.',

      // Stacks section
      stacksTitle: 'Tecnologías',
      backend: 'Backend',
      languages: 'Lenguajes',
      databases: 'Bases de Datos',
      devops: 'DevOps',
      frontend: 'Frontend',
      orms: 'ORMs',
      testing: 'Pruebas',
      tools: 'Herramientas',

      // Contact section
      contactTitle: 'Contáctame',
      name: 'Nombre',
      namePlaceholder: 'Ingresa tu nombre',
      email: 'Correo',
      emailPlaceholder: 'Ingresa tu correo',
      message: 'Mensaje',
      messagePlaceholder: 'Escribe tu mensaje aquí',
      sendMessage: 'Enviar Mensaje',
      getInTouch: 'Ponte en contacto',
    },
  },
};

if (!i18next.isInitialized) {
  i18next.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18next;
