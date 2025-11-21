import CategoryExplorer from "@/components/CategoryExplorer";

const CategoriesPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-bold mb-2">
            News Categories
          </h1>
          <p className="text-muted-foreground">
            Browse news by category and stay informed on topics that matter to
            you.
          </p>
        </div>
        <CategoryExplorer />
      </div>
    </main>
  );
};

export default CategoriesPage;
