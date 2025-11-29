"use client";

import { Heart, Share2, Bookmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import placeholderImage from "../public/images/tales.webp";
import { useNewsContext } from "@/Context/NewsProvider";
import { useRouter } from "next/navigation";

const TopStories = () => {
  const router = useRouter();
  const handleArticleClick = (url: string) => {
    const encodedUrl = encodeURIComponent(url);
    return `/article/${encodedUrl}`;
  };

  const { feed, loading, error } = useNewsContext();
  const articles = feed?.slice(0, 4);

  // if(loading) return <p>Loading feed...</p>
  // if(error) return <p>{error}</p>

  return (
    <section className="py-8">
      <h2 className="text-2xl font-serif font-bold mb-6">Top Stories</h2>

      {loading && (
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading article...</p>
          </div>
        </div>
      )}

      {error && (
        <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 text-center">
          <p className="text-destructive">{error}</p>
        </div>
      )}

      {articles && (
        <div className="space-y-6">
          {articles?.map((article, index) => (
            <Link key={index} href={handleArticleClick(article.url)}>
              <article className="group flex gap-6 p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-card/50 transition-all duration-300 cursor-pointer">
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg shrink-0 w-40 h-40 hidden sm:block">
                  <Image
                    src={article.image?.img || placeholderImage}
                    width={23}
                    height={23}
                    unoptimized
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
                        {article.published_at}
                      </span>
                    </div>
                    <h3 className="text-lg font-serif font-bold mb-2 group-hover:text-primary transition">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {article.author || "Unknown Author"}
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
      )}
    </section>
  );
};

export default TopStories;
