"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  Heart,
  Bookmark,
  Share2,
  Calendar,
  User,
  Globe,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import placeholderImage from "../../../public/images/tales.webp";

interface ApiArticle {
  author?: string;
  category?: string;
  description?: string;
  image?: string;
  published_at?: string;
  source?: string;
  title: string;
  url: string;
}
export default function ArticlePage() {
  const params = useParams();
  // const [article, setArticle] = useState<ApiArticle | null>(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   const fetchArticle = async () => {
  //     try {
  //       setLoading(true);
  //       const decodedSlug = decodeURIComponent(params.slug as string);
  //       const response = await fetch(
  //         `/api/article?url=${encodeURIComponent(decodedSlug)}`
  //       );
  //       if (!response.ok) throw new Error("Failed to fetch article");
  //       const data = await response.json();
  //       setArticle(data);
  //     } catch (err) {
  //       setError("Failed to load article. Please try again.");
  //       console.error("[v0] Article fetch error:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   if (params.slug) fetchArticle();
  // }, [params.slug]);

  const searchParams = useSearchParams();
  const urlParam = searchParams.get("url");

  const [article, setArticle] = useState<ApiArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadArticle = async () => {
      try {
        setLoading(true);
        let targetUrl = urlParam;

        if (!targetUrl && params.slug) {
          targetUrl = decodeURIComponent(params.slug as string);
        }

        if (!targetUrl) {
          setError("No article URL provided");
          setLoading(false);
          return;
        }

        const res = await fetch(`/api/article?url=${encodeURIComponent(targetUrl)}`);
        if (!res.ok) throw new Error("Failed to fetch article");
        const data = await res.json();
        setArticle(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load article. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [urlParam, params.slug]);

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to News
        </Link>

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

        {article && (
          <article className="space-y-6">
            {/* Header Section */}
            <div className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-semibold">
                  {article.source}
                </span>
              </div>

              <h1 className="text-4xl font-serif font-bold leading-tight">
                {article.title}
              </h1>

              {article.description && (
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {article.description}
                </p>
              )}

              {/* Article Metadata */}
              <div className="flex flex-wrap gap-6 py-4 border-y border-border">
                {article.author && (
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {article.author}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {article.published_at
                      ? new Date(article.published_at).toLocaleDateString(
                          "en-US",
                          {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          }
                        )
                      : "Unknown date"}
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Image */}
            {article.image && (
              <div className="relative overflow-hidden rounded-xl h-96 bg-card border border-border">
                <Image
                  src={article.image || placeholderImage}
                  width={23}
                  height={23}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Content */}
            {/* <div className="prose prose-invert max-w-none">
              {article.content && (
                <div className="text-base leading-relaxed text-foreground/90 space-y-4">
                  {article.content.split("\n").map(
                    (paragraph, idx) =>
                      paragraph.trim() && (
                        <p key={idx} className="text-base leading-relaxed">
                          {paragraph}
                        </p>
                      )
                  )}
                </div>
              )}
            </div> */}

            {/* Read Full Article Link */}
            <div className="border-t border-border pt-6">
              <a
                href={article.url}
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
        )}
      </div>
    </main>
  );
}
