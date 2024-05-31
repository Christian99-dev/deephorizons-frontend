import { type IconKey } from "@/components/shared/Icon";

export type Services = {
  title: string;
  text: string;
  projects: Project[];
  icons: IconType[];
  button: ButtonType;
};

export type Networking = {
  title: string;
  text: string;
  subtext: string;
  img: string;
  icons: IconType[];
  button: ButtonType;
};

export type Clients = {
  title: string;
  subtitle: string;
  clients: { img: string }[];
};

export type Legal = {
  title: string;
  subtitle: string;
  text: string;
};

export type Hero = {
  title: string;
  liste: string[];
};

export type Footer = {
  company: string;
  text: string;
};

// Simple

export type ButtonType = {
  text: string;
  link?: string;
};

export type IconType = {
  key: IconKey;
  link?: string;
};

export type Project = {
  id: number;
  name: string;
  beschreibung: string;
  bild: string;
};
