export type Link = {
  id: string;
  title: string;
  url: string;
  icon: string;
};

export type Persona = {
  id: string;
  name: string;
  links: Link[];
};