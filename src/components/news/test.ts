type News = {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  publishedAt: string;
  category: string;
  format: string;
  level: string;
};

export const items: News[] = [
  {
    title: "Trends A4 Level 1",
    description: "Insight on market trends in A4 format for beginners.",
    url: "https://example.com/trends-a4-level1",
    imageUrl: "https://example.com/images/trends-a4-level1.jpg",
    publishedAt: "2024-01-10T12:00:00Z",
    category: "trends",
    format: "a4",
    level: "1",
  },
  {
    title: "Trends A4 Level 2",
    description: "Intermediate market trend breakdown in A4 layout.",
    url: "https://example.com/trends-a4-level2",
    imageUrl: "https://example.com/images/trends-a4-level2.jpg",
    publishedAt: "2024-01-11T12:00:00Z",
    category: "trends",
    format: "a4",
    level: "2",
  },
  {
    title: "Trends A4 Level 3",
    description: "Advanced analysis of market trends on A4.",
    url: "https://example.com/trends-a4-level3",
    imageUrl: "https://example.com/images/trends-a4-level3.jpg",
    publishedAt: "2024-01-12T12:00:00Z",
    category: "trends",
    format: "a4",
    level: "3",
  },
  {
    title: "Trends A3 Level 1",
    description: "Market trends overview in formatted A3 size.",
    url: "https://example.com/trends-a3-level1",
    imageUrl: "https://example.com/images/trends-a3-level1.jpg",
    publishedAt: "2024-01-13T12:00:00Z",
    category: "trends",
    format: "a3",
    level: "1",
  },
  {
    title: "Projects Portrait Level 2",
    description: "Detailed project overview in portrait format.",
    url: "https://example.com/projects-portrait-level2",
    imageUrl: "https://example.com/images/projects-portrait-level2.jpg",
    publishedAt: "2024-02-01T12:00:00Z",
    category: "projects",
    format: "portrait",
    level: "2",
  },
];
