import { useState } from "react";
import { Calculator, TrendingUp, Clock, DollarSign } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const ROICalculator = () => {
  const [monthlySpend, setMonthlySpend] = useState(5000);
  const [currentROI, setCurrentROI] = useState(150);
  const [timeSpent, setTimeSpent] = useState(20);

  // Calculate improvements with Lumina Pulse
  const improvedROI = currentROI * 1.4; // 40% improvement
  const timeSaved = timeSpent * 0.7; // 70% time reduction
  const additionalRevenue = (monthlySpend * (improvedROI - currentROI)) / 100;
  const annualSavings = additionalRevenue * 12;
  const laborCostSavings = (timeSpent - timeSaved) * 50 * 4; // $50/hr, 4 weeks

  return (
    <section id="roi-calculator" className="py-24 px-4 relative">
      {/* Decorative geometric shapes */}
      <div className="absolute top-10 left-[10%] w-32 h-32 border-2 border-cyan-400/10 rounded-2xl rotate-12 animate-float" />
      <div className="absolute bottom-20 right-[15%] w-24 h-24 border-2 border-orange-400/10 rotate-45" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full mb-6 glow-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Calculator className="w-4 h-4 text-cyan-300 relative z-10" />
            <span className="text-sm font-semibold tracking-wide relative z-10">ROI Calculator</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Calculate Your <span className="text-gradient">Potential ROI</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/60 font-light">
            Quantify the impact Lumina Pulse could have on your marketing performance
          </p>
        </div>

        <div className="glass-strong p-10 rounded-3xl space-y-10 animate-fade-in relative overflow-hidden">
          {/* Unique background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `radial-gradient(circle, rgba(0,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }} />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="space-y-3 group">
              <Label htmlFor="spend" className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-cyan-400" />
                Monthly Marketing Spend ($)
              </Label>
              <Input
                id="spend"
                type="number"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="glass border-white/30 text-white text-lg h-12 rounded-xl focus:border-cyan-400/50 transition-colors"
              />
            </div>
            <div className="space-y-3 group">
              <Label htmlFor="roi" className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                Current ROI (%)
              </Label>
              <Input
                id="roi"
                type="number"
                value={currentROI}
                onChange={(e) => setCurrentROI(Number(e.target.value))}
                className="glass border-white/30 text-white text-lg h-12 rounded-xl focus:border-purple-400/50 transition-colors"
              />
            </div>
            <div className="space-y-3 group">
              <Label htmlFor="time" className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-400" />
                Hours/Week on Analysis
              </Label>
              <Input
                id="time"
                type="number"
                value={timeSpent}
                onChange={(e) => setTimeSpent(Number(e.target.value))}
                className="glass border-white/30 text-white text-lg h-12 rounded-xl focus:border-orange-400/50 transition-colors"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 pt-6 relative z-10">
            <Card className="glass rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <CardHeader className="pb-3 relative z-10">
                <CardTitle className="text-xl font-bold text-gradient-alt">Improved ROI</CardTitle>
                <CardDescription className="text-foreground/60 text-sm">
                  With AI-powered insights
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-5xl font-bold">{improvedROI.toFixed(1)}%</div>
                <div className="text-sm text-cyan-400 mt-3 font-medium flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  +{(improvedROI - currentROI).toFixed(1)}% increase
                </div>
              </CardContent>
            </Card>

            <Card className="glass rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <CardHeader className="pb-3 relative z-10">
                <CardTitle className="text-xl font-bold text-gradient">Time Saved</CardTitle>
                <CardDescription className="text-foreground/60 text-sm">
                  Automated analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-5xl font-bold">{timeSaved.toFixed(1)} hrs</div>
                <div className="text-sm text-purple-400 mt-3 font-medium flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {((1 - timeSaved/timeSpent) * 100).toFixed(0)}% time reduction weekly
                </div>
              </CardContent>
            </Card>

            <Card className="glass rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <CardHeader className="pb-3 relative z-10">
                <CardTitle className="text-xl font-bold text-gradient-alt">Additional Revenue</CardTitle>
                <CardDescription className="text-foreground/60 text-sm">
                  Per month
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-5xl font-bold">${additionalRevenue.toLocaleString()}</div>
                <div className="text-sm text-foreground/60 mt-3 font-medium flex items-center gap-1">
                  <DollarSign className="w-4 h-4" />
                  From improved performance
                </div>
              </CardContent>
            </Card>

            <Card className="glass-strong rounded-2xl animate-pulse-glow relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-orange-500/10" />
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400" />
              <CardHeader className="pb-3 relative z-10">
                <CardTitle className="text-xl font-bold text-gradient">Annual Impact</CardTitle>
                <CardDescription className="text-foreground/60 text-sm">
                  Total yearly value
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-5xl font-bold">${(annualSavings + laborCostSavings).toLocaleString()}</div>
                <div className="text-sm text-cyan-400 mt-3 font-medium flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  Revenue + labor savings
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
