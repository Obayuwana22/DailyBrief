"use client";

import { Heart, Share2, Bookmark, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TRENDING_ARTICLES = [
  {
    id: 1,
    title: "AI Model Reaches New Performance Milestone",
    excerpt:
      "Latest breakthrough shows unprecedented capabilities in language understanding and reasoning.",
    category: "Technology",
    date: "1 hour ago",
    image: "/artificial-intelligence-breakthrough.jpg",
    source: "TechCrunch",
    trending: 1,
    views: "245K",
    url: "https://techcrunch.com/ai-milestone",
  },
  {
    id: 2,
    title: "Global Tech Summit Announces Future Roadmap",
    excerpt:
      "Industry leaders share vision for next generation of computing technology.",
    category: "Technology",
    date: "2 hours ago",
    image: "/tech-conference.jpg",
    source: "The Verge",
    trending: 2,
    views: "189K",
    url: "https://theverge.com/tech-summit",
  },
  {
    id: 3,
    title: "Stock Market Reaches All-Time High",
    excerpt: "Investors optimistic about economic outlook for next quarter.",
    category: "Business",
    date: "3 hours ago",
    image: "/stock-market-trading.jpg",
    source: "Bloomberg",
    trending: 3,
    views: "156K",
    url: "https://bloomberg.com/markets-high",
  },
  {
    id: 4,
    title: "Renewable Energy Investment Surges Globally",
    excerpt:
      "Clean energy funding reaches record levels as nations commit to climate goals.",
    category: "Science",
    date: "4 hours ago",
    image: "/renewable-energy-solar.jpg",
    source: "Reuters",
    trending: 4,
    views: "132K",
    url: "https://reuters.com/renewable-energy",
  },
  {
    id: 5,
    title: "Space Agency Announces Historic Discovery",
    excerpt:
      "Scientists reveal groundbreaking findings from latest mission to the outer reaches of our galaxy.",
    category: "Science",
    date: "5 hours ago",
    image: "/space-discovery.jpg",
    source: "NASA",
    trending: 5,
    views: "98K",
    url: "https://nasa.gov/discovery",
  },
];

const TrendingFeed = () => {
  const handleArticleClick = (url: string) => {
    const encodedUrl = encodeURIComponent(url);
    return `/article/${encodedUrl}`;
  };

  return (
    <section className="space-y-6">
      {TRENDING_ARTICLES.map((article) => (
        <Link key={article.id} href={handleArticleClick(article.url)}>
          <article className="group flex gap-6 p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-card/50 transition-all duration-300 cursor-pointer">
            {/* Trending Badge */}
            <div className="shrink-0 w-12 h-full flex items-start pt-1">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-linear-to-br from-primary/20 to-accent/20">
                <div className="flex flex-col items-center">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold text-primary">
                    {article.trending}
                  </span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden rounded-lg shrink-0 w-40 h-40 hidden sm:block">
              <Image
                src={article.image || "/placeholder.svg"}
                width={23}
                height={23}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex gap-2 mb-2 items-center">
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded font-semibold">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {article.date}
                  </span>
                  <span className="text-xs text-secondary font-semibold">
                    {article.views} views
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold mb-2 group-hover:text-primary transition">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-4">
                <span className="text-xs text-muted-foreground font-semibold">
                  {article.source}
                </span>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 hover:bg-primary/10 rounded-lg transition">
                    <Heart className="w-4 h-4 text-muted-foreground hover:text-destructive" />
                  </button>
                  <button className="p-2 hover:bg-primary/10 rounded-lg transition">
                    <Bookmark className="w-4 h-4 text-muted-foreground hover:text-secondary" />
                  </button>
                  <button className="p-2 hover:bg-primary/10 rounded-lg transition">
                    <Share2 className="w-4 h-4 text-muted-foreground hover:text-primary" />
                  </button>
                </div>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </section>
  );
};

export default TrendingFeed;
