// Shared content types for the KEWAN site.

export interface NavChild {
  text: string;
  href: string;
}

export interface NavItem {
  text: string;
  href: string;
  children?: NavChild[];
}

export interface ProductCard {
  title: string;
  href: string;
  img: string;
  alt?: string;
  desc?: string;
}

export interface CaseStory {
  title: string;
  href: string;
  img: string;
  alt?: string;
  year?: string | null;
}

export interface Feature {
  icon: string;
  title: string;
  text: string;
}

export interface Branch {
  name: string;
  img: string;
  href: string;
}

export interface FooterColumn {
  heading?: string;
  links: NavChild[];
}
