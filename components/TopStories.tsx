"use client";

import { Heart, Share2, Bookmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Articles = [
  {
    id: 1,
    title: "Breakthrough in Quantum Computing Announced by Tech Leader",
    excerpt:
      "Latest advancements in quantum computing promise to revolutionize data processing capabilities.",
    category: "Technology",
    date: "2 hours ago",
    image: "/images/tales.webp",
    source: "TechCrunch",
    url: "https://techcrunch.com/quantum-computing",
  },
  {
    id: 2,
    title: "Global Markets Rally on Positive Economic Data",
    excerpt:
      "Stock indices hit new highs as investors respond optimistically to recent economic indicators.",
    category: "Business",
    date: "4 hours ago",
    image: "/images/tales.webp",
    source: "Bloomberg",
    url: "https://bloomberg.com/markets",
  },
  {
    id: 3,
    title: "Scientists Discover New Species in Deep Ocean",
    excerpt:
      "Researchers announce remarkable findings from recent deep-sea expedition revealing unknown marine life.",
    category: "Science",
    date: "6 hours ago",
    image: "/images/tales.webp",
    source: "Nature",
    url: "https://nature.com/research",
  },
  {
    id: 4,
    title: "AI Revolution: New Capabilities Transform Industries",
    excerpt:
      "Artificial intelligence systems demonstrate unprecedented abilities across multiple sectors.",
    category: "Technology",
    date: "8 hours ago",
    image: "/images/tales.webp",
    source: "MIT Technology Review",
    url: "https://mittech.com/ai",
  },
];

const TopStories = () => {
  //   const handleArticleClick = (url: string) => {
  //     const encodedUrl = encodeURIComponent(url);
  //     return `/article/${encodedUrl}`;
  //   };

  console.log("Hi");
  return (
    <section className="py-8">
      <h2 className="text-2xl font-serif font-bold mb-6">Top Stories</h2>
      <div className="space-y-6">
        {Articles.map((article) => (
          //   <Link key={article.id} href={handleArticleClick(article.url)}>
          <Link key={article.id} href="#">
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
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
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
      </div>
    </section>
  );
};

export default TopStories;
