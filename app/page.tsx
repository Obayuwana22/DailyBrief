import Categories from "@/components/Categories";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="px-4">
      <div>
        <Hero />
      </div>

      <div>
        <Categories />
      </div>
    </main>
  );
}
