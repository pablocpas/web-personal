import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://pablocp.com/", // replace this with your deployed domain
  author: "Pablo Caño",
  profile: "https://pablocp.com/",
  desc: "Pablo Caño, Computer Engineer and DevOps Engineer",
  title: "Pablo Caño",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "es", // html lang code. Set this empty and default will be "en"
  langTag: ["es-ES"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/pablocpas",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pablo-ca%C3%B1o/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:pablocpascual@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },

];
