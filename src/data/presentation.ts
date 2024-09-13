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
    "Mi descripcion mi chavo, soy un chavo que le gusta la programacion y el desarrollo web, me gusta aprender cosas nuevas y me gusta la musica, el futbol y los videojuegos.",
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
