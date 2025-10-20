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
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Enterprise-Grade <span className="text-gradient">Intelligence</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto font-light">
            Harness the power of AI to make data-driven marketing decisions with confidence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass glass-hover p-8 rounded-3xl space-y-5 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center glow-sm group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-foreground/60 leading-relaxed text-sm font-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
