import SavedArticles from "@/components/SavedArticles";

const SavedPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold mb-2">Saved Articles</h1>
          <p className="text-muted-foreground">
            Your personal collection of bookmarked articles. Read them anytime,
            anywhere.
          </p>
        </div>
        <SavedArticles />
      </div>
    </main>
  );
};

export default SavedPage;
