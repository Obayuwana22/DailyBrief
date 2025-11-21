"use client";

// import { Heart, Share2, Bookmark } from 'lucide-react'
import Link from "next/link";

const CATEGORIES = [
  {
    name: "Technology",
    color: "from-blue-500 to-cyan-500",
    articles: [
      {
        id: 1,
        title: "Latest AI Developments Change the Game",
        source: "TechCrunch",
        date: "2 hours ago",
        url: "https://techcrunch.com/ai-developments",
      },
      {
        id: 2,
        title: "New Smartphone Features Announced",
        source: "The Verge",
        date: "4 hours ago",
        url: "https://theverge.com/smartphone-features",
      },
      {
        id: 3,
        title: "Quantum Computing Breakthrough",
        source: "MIT Tech Review",
        date: "6 hours ago",
        url: "https://mittechreview.com/quantum",
      },
    ],
  },
  {
    name: "Business",
    color: "from-green-500 to-emerald-500",
    articles: [
      {
        id: 4,
        title: "Markets Rally on Strong Economic Data",
        source: "Bloomberg",
        date: "1 hour ago",
        url: "https://bloomberg.com/markets-rally",
      },
      {
        id: 5,
        title: "Tech Giants Report Record Earnings",
        source: "Reuters",
        date: "3 hours ago",
        url: "https://reuters.com/tech-earnings",
      },
      {
        id: 6,
        title: "Startup Raises $500M in Funding",
        source: "Crunchbase",
        date: "5 hours ago",
        url: "https://crunchbase.com/startup-funding",
      },
    ],
  },
  {
    name: "Science",
    color: "from-purple-500 to-pink-500",
    articles: [
      {
        id: 7,
        title: "New Species Discovered in Amazon",
        source: "Nature",
        date: "2 hours ago",
        url: "https://nature.com/amazon-species",
      },
      {
        id: 8,
        title: "Medical Breakthrough in Cancer Treatment",
        source: "Science Daily",
        date: "4 hours ago",
        url: "https://sciencedaily.com/cancer-treatment",
      },
      {
        id: 9,
        title: "Space Telescope Reveals Ancient Galaxies",
        source: "NASA",
        date: "7 hours ago",
        url: "https://nasa.gov/ancient-galaxies",
      },
    ],
  },
  {
    name: "Health",
    color: "from-red-500 to-rose-500",
    articles: [
      {
        id: 10,
        title: "Study Links Exercise to Longevity",
        source: "Health News",
        date: "3 hours ago",
        url: "https://healthnews.com/exercise-longevity",
      },
      {
        id: 11,
        title: "New Vaccine Shows 95% Effectiveness",
        source: "CDC",
        date: "5 hours ago",
        url: "https://cdc.gov/vaccine-effectiveness",
      },
      {
        id: 12,
        title: "Mental Health Apps Gain Popularity",
        source: "Health Times",
        date: "8 hours ago",
        url: "https://healthtimes.com/mental-health-apps",
      },
    ],
  },
  {
    name: "Entertainment",
    color: "from-yellow-500 to-orange-500",
    articles: [
      {
        id: 13,
        title: "New Movie Breaks Box Office Records",
        source: "Variety",
        date: "1 hour ago",
        url: "https://variety.com/box-office",
      },
      {
        id: 14,
        title: "Award Show Announces Nominees",
        source: "Deadline",
        date: "4 hours ago",
        url: "https://deadline.com/award-nominees",
      },
      {
        id: 15,
        title: "Streaming Service Releases Blockbuster",
        source: "The Hollywood Reporter",
        date: "6 hours ago",
        url: "https://hollywoodreporter.com/streaming",
      },
    ],
  },
  {
    name: "Sports",
    color: "from-indigo-500 to-blue-500",
    articles: [
      {
        id: 16,
        title: "Championship Team Wins Historic Title",
        source: "ESPN",
        date: "2 hours ago",
        url: "https://espn.com/championship",
      },
      {
        id: 17,
        title: "Athlete Sets New World Record",
        source: "Sports Illustrated",
        date: "5 hours ago",
        url: "https://si.com/world-record",
      },
      {
        id: 18,
        title: "League Announces New Season Schedule",
        source: "Official League",
        date: "7 hours ago",
        url: "https://league.com/schedule",
      },
    ],
  },
];

const CategoryExplorer = () => {
  const handleArticleClick = (url: string) => {
    const encodedUrl = encodeURIComponent(url);
    return `/article/${encodedUrl}`;
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {CATEGORIES.map((category) => (
        <div
          key={category.name}
          className="rounded-xl border border-border hover:border-primary/50 overflow-hidden transition-all hover:shadow-lg group"
        >
          {/* Category Header */}
          <div
            className={`h-24 bg-linear-to-br ${category.color} p-6 flex items-end`}
          >
            <h3 className="text-2xl font-serif font-bold text-white">
              {category.name}
            </h3>
          </div>

          {/* Articles */}
          <div className="p-6 space-y-4">
            {category.articles.map((article) => (
              <Link
                key={article.id}
                href={handleArticleClick(article.url)}
                className="block pb-4 border-b border-border last:border-0 hover:text-primary transition"
              >
                <p className="font-semibold text-sm mb-2 line-clamp-2">
                  {article.title}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{article.source}</span>
                  <span>{article.date}</span>
                </div>
              </Link>
            ))}
            <button className="w-full mt-4 py-2 rounded-lg border border-border text-center text-sm font-semibold hover:bg-card transition">
              View All
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryExplorer;
