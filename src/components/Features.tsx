import { Brain, Target, TrendingUp, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced machine learning algorithms analyze thousands of data points to surface actionable insights.",
    color: "from-cyan-500 to-blue-500",
    accentColor: "cyan"
  },
  {
    icon: Target,
    title: "Competitor Tracking",
    description: "Monitor competitor strategies, pricing, and campaigns in real-time across all channels.",
    color: "from-purple-500 to-pink-500",
    accentColor: "purple"
  },
  {
    icon: TrendingUp,
    title: "Trend Prediction",
    description: "Stay ahead of market shifts with predictive analytics and emerging trend identification.",
    color: "from-orange-500 to-red-500",
    accentColor: "orange"
  },
  {
    icon: Zap,
    title: "Instant Alerts",
    description: "Get notified immediately when important changes occur in your market landscape.",
    color: "from-blue-500 to-cyan-500",
    accentColor: "blue"
  }
];

const Features = () => {
  return (
    <section className="py-24 px-4 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-[5%] w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 right-[5%] w-64 h-64 bg-orange-500/10 rounded-full blur-[80px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="text-cyan-400 text-sm font-bold tracking-widest uppercase mb-2 flex items-center gap-2 justify-center">
              <div className="w-8 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
              Why Choose Us
              <div className="w-8 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            </div>
          </div>
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
              className="glass glass-hover p-8 rounded-3xl space-y-5 animate-fade-in group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
                         
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center glow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative`}>
                <feature.icon className="w-7 h-7 text-white" />
                <div className={`absolute inset-0 rounded-2xl bg-${feature.accentColor}-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
              
              <h3 className="text-xl font-bold group-hover:text-gradient-alt transition-all duration-300">{feature.title}</h3>
              <p className="text-foreground/60 leading-relaxed text-sm font-light">{feature.description}</p>
              
              {/* Diagonal line accent */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
