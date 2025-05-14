import { newsArticles } from "@/data/news-data";
import { notFound } from "next/navigation";
import NewsDetailClient from "./news-detail-client";
import type { Metadata } from "next";

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
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

// Use the simplified function signature
export default function NewsDetailPage({ params }: { params: { slug: string } }) {
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