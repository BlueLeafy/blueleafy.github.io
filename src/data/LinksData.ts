// src/data/links.ts
export interface Link {
  id: string;
  label: string;
  path: string;
  icon?: string;
  order: number;
}

export const linksData: Link[] = [
  {
    id: "home",
    label: "home",
    path: "/",
    order: 1
  },
  {
    id: "projects",
    label: "projects",
    path: "/projects",
    order: 2
  },
  {
    id: "profile",
    label: "profile",
    path: "/profile",
    order: 3
  },
  {
    id: "contacts",
    label: "contacts",
    path: "/contacts",
    order: 4
  }
];