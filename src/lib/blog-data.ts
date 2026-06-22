export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  readTime: string;
  sections: {
    heading?: string;
    body: string;
    links?: { text: string; href: string; inline?: boolean }[];
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'risorse-freelance-developer-italiani',
    title: 'Resources and communities for Italian freelance developers',
    date: '2026-06-22',
    excerpt:
      'A short list of tools, platforms and communities for developers working freelance in Italy.',
    category: 'Resources',
    readTime: '1 min',
    sections: [
      {
        body: "Working as a freelance developer in Italy means building everything on your own: clients, network, technical growth. One thing I learned early on is that working in isolation slows you down. The right communities make a real difference.",
      },
      {
        heading: 'A community for Italian freelance developers',
        body: "One of the most active spaces on this front is",
        links: [
          {
            text: 'FreelanceDEV',
            href: 'https://freelancedev.it',
            inline: true,
          },
        ],
      },
      {
        body: "A meeting point for developers who want to grow professionally, find collaborations and stay updated on the Italian tech market. If you work solo and miss having a professional context to compare notes with, it's worth checking out.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
