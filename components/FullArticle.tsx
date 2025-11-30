import Image from "next/image";
import { User, Calendar, Globe, Heart, Bookmark, Share2 } from "lucide-react";
import placeholderImage from "@/public/images/tales.webp";

export default function FullArticle({ data }: { data: any }) {
  const article = data?.response || data;

  if (!article) {
    return <div>No article data available</div>;
  }

  // Convert content object {p_1, h2_2, p_3...} into an array in correct order
  const contentEntries = Object.entries(article.content || {})
    .sort(([a], [b]) => {
      const splitA = a.split("_");
      const splitB = b.split("_");
      const numA = splitA.length > 1 ? parseInt(splitA[1]) : 0;
      const numB = splitB.length > 1 ? parseInt(splitB[1]) : 0;
      return numA - numB;
    });

  return (
    <article className="space-y-6">
      {/* Header Section */}
      <div className="space-y-4">
        <div className="flex gap-2 flex-wrap">
          <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-semibold">
            {article?.category}
          </span>
        </div>

        <h1 className="text-4xl font-serif font-bold leading-tight">
          {article?.title}
        </h1>

        {article?.description && (
          <p className="text-xl text-muted-foreground leading-relaxed">
            {article?.description}
          </p>
        )}

        {/* Metadata */}
        <div className="flex flex-wrap gap-6 py-4 border-y border-border">
          {article?.author && (
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{article?.author}</span>
            </div>
          )}

          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {article?.publishedAt
                ? new Date(article.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
                : "Unknown date"}
            </span>
          </div>
        </div>
      </div>

      {/* Feature Image */}
      {article?.image?.img && (
        <div className="relative overflow-hidden rounded-xl h-96 bg-card border border-border">
          <Image
            src={article?.image?.img || placeholderImage}
            alt={article?.title || "Article Image"}
            width={1200}
            height={628}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="prose prose-invert max-w-none space-y-4">
        {contentEntries.map(([key, val]) => {
          if (!val) return null;

          // Check if val is an object (image)
          if (typeof val === 'object' && val !== null) {
            const imgData = val as { src?: string; data_src?: string; alt?: string };
            const imgSrc = imgData.src || imgData.data_src;
            
            if (imgSrc) {
              return (
                <div key={key} className="relative overflow-hidden rounded-xl my-6">
                  <Image
                    src={imgSrc}
                    alt={imgData.alt || "Article content image"}
                    width={1200}
                    height={628}
                    className="w-full h-auto object-cover"
                    unoptimized
                  />
                </div>
              );
            }
            return null;
          }

          // Handle string content
          const stringVal = String(val);

          if (key.startsWith("h2")) {
            return (
              <h2 key={key} className="text-2xl font-bold mt-6">
                {stringVal}
              </h2>
            );
          }

          return (
            <p key={key} className="text-base leading-relaxed">
              {stringVal}
            </p>
          );
        })}
      </div>

      {/* Read Full Article Link */}
      <div className="border-t border-border pt-6">
        <a
          href={article?.source || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-semibold"
        >
          Read Full Article
          <Globe className="w-4 h-4" />
        </a>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 py-6 border-t border-border">
        <button className="flex-1 py-3 px-4 border border-border rounded-lg hover:bg-card transition flex items-center justify-center gap-2 font-semibold">
          <Heart className="w-5 h-5" />
          Save
        </button>
        <button className="flex-1 py-3 px-4 border border-border rounded-lg hover:bg-card transition flex items-center justify-center gap-2 font-semibold">
          <Bookmark className="w-5 h-5" />
          Bookmark
        </button>
        <button className="flex-1 py-3 px-4 border border-border rounded-lg hover:bg-card transition flex items-center justify-center gap-2 font-semibold">
          <Share2 className="w-5 h-5" />
          Share
        </button>
      </div>
    </article>
  );
}
