import { ArrowRight } from "lucide-react";

const BLOG_POSTS = [
  {
    id: 1,
    title: "How AI is Transforming News Discovery",
    excerpt:
      "Discover how machine learning algorithms are revolutionizing the way we find and consume news.",
    date: "2 weeks ago",
    author: "Sarah Chen",
    category: "AI & Technology",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "The Future of Voice-Enabled News",
    excerpt:
      "Voice technology is changing how busy professionals stay informed. Learn about our voice assistant capabilities.",
    date: "3 weeks ago",
    author: "Michael Rodriguez",
    category: "Product Updates",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Building a Better News Ecosystem",
    excerpt:
      "Our vision for creating trustworthy, personalized news experiences that respect user privacy.",
    date: "1 month ago",
    author: "Emily Watson",
    category: "Company",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Real-time Analysis of Global Market Trends",
    excerpt:
      "How our AI analyzes market data to provide instant insights on financial news.",
    date: "1 month ago",
    author: "David Park",
    category: "AI & Technology",
    readTime: "7 min read",
  },
];

const BlogPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-serif font-bold mb-3">Nexus Blog</h1>
          <p className="text-xl text-muted-foreground">
            Insights, updates, and stories from the Nexus team about AI, news,
            and technology.
          </p>
        </div>

        <div className="space-y-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="p-6 rounded-xl border border-border hover:border-primary/50 hover:bg-card/30 transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-semibold">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {post.readTime}
                </span>
              </div>
              <h2 className="text-2xl font-serif font-bold mb-2 group-hover:text-primary transition">
                {post.title}
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
                <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
