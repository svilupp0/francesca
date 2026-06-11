import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects",
  description: "Portfolio of web projects by Francesca Scarpellini — Next.js apps, PWAs, e-commerce, and open-source tools.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
