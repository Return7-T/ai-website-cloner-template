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
  /** CSS object-position for the card image (e.g. "center 55%") */
  imgObjectPosition?: string;
  /** Optional larger image for carousels / feature slides */
  featuredImg?: string;
}

export interface ConstructionPageContent {
  meta: {
    title: string;
    description: string;
  };
  breadcrumb: { text: string; href?: string }[];
  heading: string;
  paragraphs: string[];
  carouselLabel: string;
  prevLabel: string;
  nextLabel: string;
  catalogHeading: string;
  products: ProductCard[];
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
