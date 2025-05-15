import { newsArticles } from "@/data/news-data";
import { notFound } from "next/navigation";
import NewsDetailClient from "./news-detail-client";

// Make the component async and treat params as a Promise
export default async function NewsDetailPage({ params }: { params: { slug: string } }) {
  // Await the params if it's a Promise
  const resolvedParams = params instanceof Promise ? await params : params;
  const slug = resolvedParams.slug;
  
  // Find the article
  const article = newsArticles.find((article) => article.slug === slug);
  
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