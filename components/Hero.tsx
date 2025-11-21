import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-card via-background to-background py-16">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-8">
        <div className="max-w-3xl">
          {/* <div className="inline-block mb-4 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-xs font-semibold text-primary">
              🚀 Powered by Advanced AI
            </span>
          </div> */}

          <h1 className="mb-4 text-5xl md:text-6xl font-serif font-bold text-foreground">
            Stay Informed with{" "}
            <span className="bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Intelligent
            </span>{" "}
            News
          </h1>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Get personalized news summaries with our AI voice assistant. Listen
            to news briefings, ask questions, and get instant insights across
            all your favorite categories.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition cursor-pointer">
              Start Reading
            </button>
            <button className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition cursor-pointer">
              Try Voice Assistant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
