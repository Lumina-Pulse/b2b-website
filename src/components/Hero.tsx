import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToCalculator = () => {
    document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToEmail = () => {
    document.getElementById('email-signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-10 left-[10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-10 right-[10%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px] animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full mb-6 glow-sm">
          <Sparkles className="w-4 h-4 text-purple-300" />
          <span className="text-sm font-semibold tracking-wide">AI-Powered Marketing Intelligence</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
          Transform Data Into
          <span className="block text-gradient mt-2">Marketing Gold</span>
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed font-light">
          Enterprise-grade AI web scraping that uncovers competitive insights, 
          tracks market trends, and delivers actionable intelligence for data-driven marketing decisions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button 
            size="lg" 
            onClick={scrollToCalculator}
            className="glass-strong glass-hover text-white font-semibold text-base px-10 py-6 rounded-xl glow"
          >
            Calculate Your ROI
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={scrollToEmail}
            className="glass glass-hover border-white/30 text-white font-semibold text-base px-10 py-6 rounded-xl"
          >
            Get Early Access
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8 md:gap-12 pt-16 max-w-4xl mx-auto">
          <div className="glass p-6 rounded-2xl space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-gradient">10x</div>
            <div className="text-sm md:text-base text-foreground/60 font-medium">Faster Insights</div>
          </div>
          <div className="glass p-6 rounded-2xl space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-gradient">95%</div>
            <div className="text-sm md:text-base text-foreground/60 font-medium">Accuracy Rate</div>
          </div>
          <div className="glass p-6 rounded-2xl space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-gradient">24/7</div>
            <div className="text-sm md:text-base text-foreground/60 font-medium">Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
