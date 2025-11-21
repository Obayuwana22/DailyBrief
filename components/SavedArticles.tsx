"use client";

import { Heart, Share2, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SAVED_ARTICLES = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence",
    excerpt: "How AI will shape the next decade of technology and society.",
    category: "Technology",
    date: "Saved 2 days ago",
    image: "/ai-future.jpg",
    source: "TechCrunch",
    url: "https://techcrunch.com/ai-future",
  },
  {
    id: 2,
    title: "Climate Action: Global Initiatives Making a Difference",
    excerpt: "Exploring worldwide efforts to combat climate change.",
    category: "Environment",
    date: "Saved 5 days ago",
    image: "/climate-action.jpg",
    source: "BBC",
    url: "https://bbc.com/climate-action",
  },
  {
    id: 3,
    title: "Breakthrough in Renewable Energy",
    excerpt: "New technology promises to transform solar power generation.",
    category: "Science",
    date: "Saved 1 week ago",
    image: "/renewable-energy.jpg",
    source: "Nature",
    url: "https://nature.com/renewable-energy",
  },
];

const SavedArticles = () => {
  const handleArticleClick = (url: string) => {
    const encodedUrl = encodeURIComponent(url);
    return `/article/${encodedUrl}`;
  };

  return (
    <section>
      {SAVED_ARTICLES.length > 0 ? (
        <div className="space-y-6">
          {SAVED_ARTICLES.map((article) => (
            <Link key={article.id} href={handleArticleClick(article.url)}>
              <article className="group flex gap-6 p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-card/50 transition-all duration-300 cursor-pointer">
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
                    <div className="flex gap-2 mb-2">
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded font-semibold">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {article.date}
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
                        <Share2 className="w-4 h-4 text-muted-foreground hover:text-primary" />
                      </button>
                      <button className="p-2 hover:bg-primary/10 rounded-lg transition">
                        <Trash2 className="w-4 h-4 text-muted-foreground hover:text-destructive" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">No saved articles yet</p>
          <a
            href="#"
            className="text-primary hover:underline text-sm font-semibold"
          >
            Browse news and save articles →
          </a>
        </div>
      )}
    </section>
  );
};

export default SavedArticles;
