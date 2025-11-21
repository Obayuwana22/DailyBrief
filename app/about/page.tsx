
import { Zap, Users, Globe } from 'lucide-react'

const AboutPage =() =>{
  return (
    <main className="min-h-screen bg-background">

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-5xl font-serif font-bold mb-6">About Nexus</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Nexus is revolutionizing how people consume news. By combining intelligent news aggregation with cutting-edge AI technology, we&apos;re creating the future of information discovery.
          </p>
        </section>

        {/* Mission */}
        <section className="mb-16 p-8 rounded-xl border border-border bg-card/30">
          <h2 className="text-3xl font-serif font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe in a world where staying informed is effortless. Our mission is to deliver personalized, AI-enhanced news experiences that empower people to understand the world faster and make better decisions.
          </p>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-border hover:border-primary/50 transition">
              <Zap className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Innovation First</h3>
              <p className="text-sm text-muted-foreground">
                We constantly push boundaries with AI and emerging technologies.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border hover:border-primary/50 transition">
              <Users className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">User Centric</h3>
              <p className="text-sm text-muted-foreground">
                Every feature is designed with our users needs at the core.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border hover:border-primary/50 transition">
              <Globe className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Global Access</h3>
              <p className="text-sm text-muted-foreground">
                We make quality information accessible to everyone, everywhere.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="grid md:grid-cols-3 gap-6 py-12 border-y border-border">
          <div className="text-center">
            <div className="text-4xl font-serif font-bold text-primary mb-2">50M+</div>
            <p className="text-muted-foreground">Monthly Users</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif font-bold text-primary mb-2">10K+</div>
            <p className="text-muted-foreground">News Sources</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif font-bold text-primary mb-2">180+</div>
            <p className="text-muted-foreground">Countries Covered</p>
          </div>
        </section>
      </div>

    </main>
  )
}


export default AboutPage