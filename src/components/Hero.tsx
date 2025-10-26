import { Sparkles, Zap, ArrowRight } from "lucide-react";
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
      {/* Unique animated background elements */}
      <div className="absolute top-10 left-[10%] w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-10 right-[10%] w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
      
      {/* Geometric accent shapes */}
      <div className="absolute top-20 right-[15%] w-32 h-32 border-2 border-cyan-400/20 rotate-45 animate-rotate-slow" />
      <div className="absolute bottom-32 left-[10%] w-24 h-24 border-2 border-orange-400/20 rounded-full animate-pulse-glow" />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full mb-6 glow-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Zap className="w-4 h-4 text-cyan-300 relative z-10" />
          <span className="text-sm font-semibold tracking-wide relative z-10">AI-Powered Marketing Intelligence</span>
          <Sparkles className="w-3 h-3 text-orange-300 relative z-10" />
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.2] tracking-tight">
          Transform Data Into
          <span className="block text-gradient mt-2 relative pb-2">
            Marketing Gold
            <div className="absolute -top-6 -right-8 w-16 h-16 bg-orange-500/30 rounded-full blur-xl animate-pulse" />
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed font-light">
          Your AI teammate that uncovers brand insights, 
          tracks market trends, and delivers actionable intelligence for data-driven marketing decisions. <span className="font-semibold">Replace hours of manual monitoring with automated daily intelligence.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button 
            size="lg" 
            onClick={scrollToCalculator}
            className="glass-strong glass-hover text-white font-semibold text-base px-10 py-6 rounded-2xl glow group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Calculate Your ROI
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={scrollToEmail}
            className="glass glass-hover text-white font-semibold text-base px-10 py-6 rounded-2xl relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Early Access
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </span>
          </Button>
        </div>

        <div className="grid grid-cols-1 w-3/5 md:grid-cols-3 md:w-full gap-4 md:gap-8 pt-16 max-w-4xl mx-auto">
          <div className="glass p-4 md:p-6 rounded-2xl space-y-2 hover:scale-105 transition-transform duration-300">
            <div className="text-2xl md:text-4xl font-bold text-gradient-alt">24h</div>
            <div className="text-xs md:text-sm text-foreground/60 font-medium">Insight Refresh Cycle</div>
          </div>
          <div className="glass p-4 md:p-6 rounded-2xl space-y-2 hover:scale-105 transition-transform duration-300">
            <div className="text-2xl md:text-4xl font-bold text-gradient">47%</div>
            <div className="text-xs md:text-sm text-foreground/60 font-medium">Time Saved Weekly</div>
          </div>
          <div className="glass p-4 md:p-6 rounded-2xl space-y-2 hover:scale-105 transition-transform duration-300">
            <div className="text-2xl md:text-4xl font-bold text-gradient-alt">30+</div>
            <div className="text-xs md:text-sm text-foreground/60 font-medium">Data Sources Tracked</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
