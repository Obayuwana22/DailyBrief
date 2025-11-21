
import  TrendingFeed  from '@/components/TrendingFeed'
import  AIAssistant  from '@/components/Ai-Assistant'

export default function TrendingPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold mb-2">Trending Now</h1>
          <p className="text-muted-foreground">
            Discover what&apos;s capturing readers attention today. Real-time trending stories across all categories.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TrendingFeed />
          </div>
          <aside>
            <AIAssistant />
          </aside>
        </div>
      </div>

    </main>
  )
}
