export type Metadata = {
  title: string;
  description: string;
  canonicalUrl: string;
  og: {
    title: string;
    description: string;
    type: string;
    url: string;
    site_name: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
  };
};

export type PageKey = "homepage" | "impressum" | "datenschutz" | "projects";
