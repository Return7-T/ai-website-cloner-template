import type { ProductData } from "@/types/product";

export const kewanProducts: Record<string, ProductData> = {
  "truck-mounted-concrete-pump": {
    slug: "truck-mounted-concrete-pump",
    title: "Truck-Mounted Concrete Pump",
    breadcrumb: [
      { text: "Home", href: "/" },
      { text: "Construction Equipment", href: "/construction/" },
      { text: "Truck-Mounted Concrete Pump" },
    ],
    intro: {
      paragraphs: [
        "This is a temporary KEWAN product page for the truck-mounted concrete pump.",
        "At the current stage, the homepage card uses the existing concrete trailer pump image as a visual placeholder so navigation stays complete.",
        "Once the final truck-mounted concrete pump materials are ready, this page can be replaced with the finished copy, gallery, and technical data.",
      ],
      keySpecs: [
        { label: "Page status", value: "Placeholder" },
        { label: "Current image", value: "Concrete trailer pump visual" },
      ],
      image: "/images/2026/02/trailer-concrete-pump-jpg.webp",
      imageAlt: "Truck-mounted concrete pump placeholder",
      buttons: [
        { text: "Message", href: "#request-quote" },
        { text: "WhatsApp", href: "https://wa.me/8615700731570" },
      ],
    },
    featureBlocks: [
      {
        heading: "Placeholder Content for Truck-Mounted Concrete Pump",
        paragraphs: [
          "This page is intentionally lightweight and acts as a live placeholder for the KEWAN truck-mounted concrete pump.",
          "It preserves the site structure, product route, and internal linking while the final materials are being prepared.",
        ],
        image: "/images/2026/02/trailer-concrete-pump-jpg.webp",
        imageAlt: "Concrete trailer pump used as placeholder",
      },
    ],
    related: {
      heading: "Related Construction Equipment",
      items: [
        {
          title: "Concrete Mixer Pump",
          href: "/concrete-pumps/concrete-mixer-pump/",
          img: "/images/2025/03/concrete-mixer-pump.png",
        },
        {
          title: "Concrete Trailer Pump",
          href: "/concrete-pumps/trailer-concrete-pump/",
          img: "/images/2025/04/trailer-concrete-pump.png",
        },
        {
          title: "Truck-Mounted Concrete Pump",
          href: "/concrete-pumps/truck-mounted-concrete-pump/",
          img: "/images/2025/04/trailer-concrete-pump.png",
        },
      ],
    },
    specTable: {
      caption: "Temporary Page Data",
      headers: ["Item", "Value"],
      rows: [
        ["Product", "Truck-Mounted Concrete Pump"],
        ["Status", "Placeholder page active"],
        ["Image", "Using concrete trailer pump image temporarily"],
      ],
    },
  },
};
