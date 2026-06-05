// Types for the product page template (concrete-mixer-pump, trailer-concrete-pump, etc.)

export interface SpecTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FeatureGroup {
  title: string;
  items: string[];
}

export interface RichBlock {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  image?: string;
  imageAlt?: string;
}

export interface RelatedProduct {
  title: string;
  href: string;
  img: string;
}

export interface SupportColumn {
  title: string;
  bullets: string[];
}

export interface ProductData {
  slug: string;
  title: string; // H1
  breadcrumb: { text: string; href?: string }[];
  intro: {
    paragraphs: string[];
    keySpecs: { label: string; value: string }[];
    image: string;
    imageAlt: string;
    buttons: { text: string; href: string }[];
  };
  featureBlocks: RichBlock[];
  componentGroups?: { heading: string; groups: FeatureGroup[]; image?: string };
  reasons?: { heading: string; bullets: string[] };
  buyingTips?: { heading: string; bullets: string[] };
  related?: { heading: string; items: RelatedProduct[] };
  support?: { heading: string; columns: SupportColumn[] };
  faq?: { heading: string; items: FaqItem[] };
  specTable: SpecTable;
  projects?: { heading: string; items: import("./content").CaseStory[] };
}
