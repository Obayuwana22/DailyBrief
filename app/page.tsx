import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import TopStories from "@/components/TopStories";

export default function Home() {
  return (
    <main className="px-4">
      <Hero />
      <Categories />
      <TopStories />

      <div></div>
    </main>
  );
}
