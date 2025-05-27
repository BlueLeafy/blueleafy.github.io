interface MediaAsset {
  image: {
    mini: string;
    mobile?: string;
    tablet?: string;
    altText: string;
  };
  video: {
    src: string;
    tablet?: string;
  };
}

export interface Project {
  id: string;
  title: string;
  slug: string; // Added for SEO-friendly URLs
  description: string;
  tags?: string[]; // For filtering/categorization
  featured?: boolean;
  media: MediaAsset[];
  metadata?: {
    client?: string;
    year?: number;
    role?: string;
  };
}

export const ProjectsData: Project[] = [
  {
    id: "1",
    title: "Ironok",
    slug: "ironok-project",
    description: "Iron fences small manufacturing company",
    tags: ["design", "development", "UI/UX"],
    featured: true,
    media: [{
      image:
      {
        mini: "/assets/images/ironok-shot.png",
        mobile: "/assets/images/ironokMobileMockup.png",
        tablet: "/assets/images/ironokTabletMockup.png",
        altText: "Ironok dashboard interface"
      },
      // Need the mobile videoShot
      video: {
        src: "/assets/videos/ironokVideo.webm",
        tablet: "/assets/videos/ironokTabletVideo.webm"
      }
    }
    ],
    metadata: {
      client: "IRONOK",
      year: 2025,
    }
  },
  {
    id: "2",
    title: "Metanoia",
    slug: "metanoia-platform",
    description: "Movement against big corporations",
    tags: ["healthtech", "react", "typescript"],
    media: [{
      image:
      {
        mini: "/assets/images/ironok-shot.png",
        mobile: "/assets/images/metanoiaMobileMockup.png",
        tablet: "/assets/images/metanoiaTabletMockup.png",
        altText: "Ironok dashboard interface"
      },
      // Need the mobile videoShot
      video: {
        src: "/assets/videos/metanoiaVIdeo.webm",
        tablet: ""
      }
    }
    ],
    metadata: {
      client: "Metanoia",
      year: 2025,
    }
  }
] as const; // 'as const' for strict type inference