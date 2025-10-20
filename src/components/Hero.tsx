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
      {/* Floating orbs for visual interest */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium">AI-Powered Marketing Intelligence</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Transform Data Into
          <span className="block text-gradient">Marketing Gold</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
          Lumina Pulse uses advanced AI web scraping to uncover hidden insights, 
          track competitors, and deliver actionable intelligence that drives measurable ROI.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button 
            size="lg" 
            onClick={scrollToCalculator}
            className="glass glass-hover text-white border-white/30 text-lg px-8 py-6 glow"
          >
            Calculate Your ROI
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={scrollToEmail}
            className="glass glass-hover border-white/30 text-white text-lg px-8 py-6"
          >
            Get Early Access
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-gradient">10x</div>
            <div className="text-sm text-foreground/70">Faster Insights</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-gradient">95%</div>
            <div className="text-sm text-foreground/70">Accuracy Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-gradient">24/7</div>
            <div className="text-sm text-foreground/70">Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
