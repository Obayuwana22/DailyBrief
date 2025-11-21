import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for casual news readers",
    features: [
      "Access to all news categories",
      "Basic search functionality",
      "Up to 10 saved articles",
      "Standard news feed",
      "Limited AI assistant access",
    ],
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    description: "For serious news enthusiasts",
    popular: true,
    features: [
      "Everything in Starter",
      "Unlimited saved articles",
      "Advanced search with filters",
      "Personalized news feed",
      "Full AI voice assistant access",
      "Ad-free experience",
      "Custom categories",
      "Export articles as PDF",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations and teams",
    features: [
      "Everything in Pro",
      "Team collaboration features",
      "API access",
      "Advanced analytics",
      "Custom integrations",
      "Dedicated support",
      "White-label options",
      "SLA guarantee",
    ],
  },
];

const PricingPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose the plan that works best for you. Always flexible, never
            locked in.
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="grid md:grid-cols-3 gap-8 mb-12">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border transition-all ${
                plan.popular
                  ? "border-primary bg-card/50 scale-105"
                  : "border-border hover:border-primary/50"
              } p-8`}
            >
              {plan.popular && (
                <div className="mb-4 inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-serif font-bold mb-2">
                {plan.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-muted-foreground">{plan.period}</span>
                )}
              </div>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition mb-8 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border text-foreground hover:bg-card"
                }`}
              >
                Get Started
              </button>
              <div className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default PricingPage;
