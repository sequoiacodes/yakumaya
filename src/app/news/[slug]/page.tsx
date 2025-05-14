import { newsArticles } from "@/data/news-data";
import { notFound } from "next/navigation";

import type { Metadata } from "next";
import NewsDetailClient from "./news-detail-client";

interface PageProps {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = newsArticles.find((article) => article.slug === params.slug);
  
  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.'
    };
  }
  
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.imageUrl }]
    }
  };
}

export default function NewsDetailPage({ params }: PageProps) {
  // Find the article
  const article = newsArticles.find((article) => article.slug === params.slug);
  
  // If article not found, show 404
  if (!article) {
    notFound();
  }

  // Get related articles
  const relatedArticles = newsArticles
    .filter(
      (a) =>
        a.id !== article.id &&
        a.categories.some((category) => article.categories.includes(category))
    )
    .slice(0, 3);
  
  // Get more news for the bottom section
  const moreNews = newsArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  // Pass data to the client component
  return <NewsDetailClient 
    article={article} 
    relatedArticles={relatedArticles} 
    moreNews={moreNews}
  />;
}