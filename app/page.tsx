import AIAssistant from "@/components/Ai-Assistant";
import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import TopStories from "@/components/TopStories";

export default function Home() {
  return (
    <main className="px-4">
      <Hero />
      <Categories />
      <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto py-12">
        <div className="lg:col-span-2">
          <TopStories />
        </div>
        <aside>
          <AIAssistant />
        </aside>
      </div>
    </main>
  );
}
