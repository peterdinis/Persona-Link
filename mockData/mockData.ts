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

export const initialLinks: Link[] = [
  { id: '1', title: 'Portfolio', url: 'https://portfolio.com', icon: 'globe' },
  { id: '2', title: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  { id: '3', title: 'GitHub', url: 'https://github.com', icon: 'github' },
];

export const initialPersonas: Persona[] = [
  {
    id: '1',
    name: 'Professional',
    links: [
      { id: '1', title: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
      { id: '2', title: 'Portfolio', url: 'https://portfolio.com', icon: 'globe' },
    ],
  },
  {
    id: '2',
    name: 'Social',
    links: [
      { id: '3', title: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
      { id: '4', title: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    ],
  },
];