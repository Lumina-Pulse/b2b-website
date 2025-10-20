import { Brain, Target, TrendingUp, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced machine learning algorithms analyze millions of data points to surface actionable insights."
  },
  {
    icon: Target,
    title: "Competitor Tracking",
    description: "Monitor competitor strategies, pricing, and campaigns in real-time across all channels."
  },
  {
    icon: TrendingUp,
    title: "Trend Prediction",
    description: "Stay ahead of market shifts with predictive analytics and emerging trend identification."
  },
  {
    icon: Zap,
    title: "Instant Alerts",
    description: "Get notified immediately when important changes occur in your market landscape."
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">Lumina Pulse?</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Harness the power of AI to make smarter marketing decisions backed by real data
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass glass-hover p-6 rounded-2xl space-y-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center glow">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
