"use client";

const categories = [
  {
    id: "tech",
    name: "Technology",
    icon: "⚡",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "business",
    name: "Business",
    icon: "📈",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "science",
    name: "Science",
    icon: "🔬",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "health",
    name: "Health",
    icon: "🏥",
    color: "from-red-500 to-orange-500",
  },
  {
    id: "sports",
    name: "Sports",
    icon: "⚽",
    color: "from-yellow-500 to-amber-500",
  },
  {
    id: "entertainment",
    name: "Entertainment",
    icon: "🎬",
    color: "from-pink-500 to-rose-500",
  },
];

const Categories = () => {
  return (
    <section className="max-w-7xl mx-auto py-8">
      <h2 className="text-2xl font-serif font-bold mb-6">Explore Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            className="group relative overflow-hidden rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 bg-card border border-border group-hover:border-primary/50 rounded-xl p-4 transition-all h-full flex flex-col items-center justify-center gap-2">
              <span className="text-3xl">{category.icon}</span>
              <span className="font-semibold text-sm">{category.name}</span>
              {/* <span className="text-xs text-muted-foreground group-hover:text-primary transition">
                {Math.floor(Math.random() * 500) + 50} stories
              </span> */}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;
