import { newsArticles } from "@/data/news-data";
import { notFound } from "next/navigation";
import NewsDetailClient from "./news-detail-client";

// Import NewsArticle type from news-data
import { NewsArticle } from "@/data/news-data";

interface NewsDetailPageProps {
  params: {
    slug: string;
  }
}

export default async function NewsDetailPage(props: NewsDetailPageProps) {
  // Access slug from props.params
  const { slug } = props.params;
  
  // Find the article
    const article: NewsArticle = newsArticles.find((article) => article.slug === slug)!;
  
  // If article not found, show 404
  if (!article) {
    notFound();
  }

  // Get related articles
  const relatedArticles: NewsArticle[] = newsArticles
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