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
  // profile: "/profile.webp",
  description:
    "Backend Developer specialized in Node.js, NestJS and PostgreSQL. I build scalable, well-structured APIs and systems using modern tools like Docker, Prisma and Angular. Currently focused on strengthening my frontend skills while building complete, real-world projects.",
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
