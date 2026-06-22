import type { Metadata } from 'next';
import { getPostBySlug } from '@/lib/blog-data';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post non trovato' };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function SlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
