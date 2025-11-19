import AIAssistant from "@/components/Ai-Assistant";
import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import TopStories from "@/components/TopStories";

export default function Home() {
  return (
    <main className="px-4">
      <Hero />
      <Categories />
      <TopStories />

      <AIAssistant />

      <div></div>
    </main>
  );
}
