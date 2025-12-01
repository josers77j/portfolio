type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "josers772@outlook.es",
  title: "Hi, I’m Ruben 👋",
  description:
    "Backend developer specialized in Node.js, NestJS and PostgreSQL. I design and build well-structured APIs and scalable systems, with hands-on experience in Docker, Prisma and system architecture. Currently expanding my frontend skills while focusing on building production-ready applications",
  socials: [
    {
      label: "Linkedin",
      link: "https://linkedin.com/in/rbn-trj-dbe",
    },
    {
      label: "Github",
      link: "https://github.com/josers77j",
    },
    {
      label: "josers772@outlook.es",
      link: "mailto:josers772@outlook.es",
    },
  ],
};

export default presentation;
