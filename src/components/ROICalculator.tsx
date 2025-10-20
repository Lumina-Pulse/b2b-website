import { useState } from "react";
import { Calculator } from "lucide-react";
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
    <section id="roi-calculator" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full mb-6 glow-sm">
            <Calculator className="w-4 h-4 text-purple-300" />
            <span className="text-sm font-semibold tracking-wide">ROI Calculator</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Calculate Your <span className="text-gradient">Potential ROI</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/60 font-light">
            Quantify the impact Lumina Pulse could have on your marketing performance
          </p>
        </div>

        <div className="glass-strong p-10 rounded-3xl space-y-10 animate-fade-in">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <Label htmlFor="spend" className="text-sm font-semibold text-foreground/80">Monthly Marketing Spend ($)</Label>
              <Input
                id="spend"
                type="number"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="glass border-white/30 text-white text-lg h-12 rounded-xl"
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="roi" className="text-sm font-semibold text-foreground/80">Current ROI (%)</Label>
              <Input
                id="roi"
                type="number"
                value={currentROI}
                onChange={(e) => setCurrentROI(Number(e.target.value))}
                className="glass border-white/30 text-white text-lg h-12 rounded-xl"
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="time" className="text-sm font-semibold text-foreground/80">Hours/Week on Analysis</Label>
              <Input
                id="time"
                type="number"
                value={timeSpent}
                onChange={(e) => setTimeSpent(Number(e.target.value))}
                className="glass border-white/30 text-white text-lg h-12 rounded-xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 pt-6">
            <Card className="glass border-white/30 rounded-2xl">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-gradient">Improved ROI</CardTitle>
                <CardDescription className="text-foreground/60 text-sm">
                  With AI-powered insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-bold">{improvedROI.toFixed(1)}%</div>
                <div className="text-sm text-emerald-400 mt-3 font-medium">
                  +{(improvedROI - currentROI).toFixed(1)}% increase
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-white/30 rounded-2xl">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-gradient">Time Saved</CardTitle>
                <CardDescription className="text-foreground/60 text-sm">
                  Automated analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-bold">{timeSaved.toFixed(1)} hrs</div>
                <div className="text-sm text-emerald-400 mt-3 font-medium">
                  {((1 - timeSaved/timeSpent) * 100).toFixed(0)}% time reduction weekly
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-white/30 rounded-2xl">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-gradient">Additional Revenue</CardTitle>
                <CardDescription className="text-foreground/60 text-sm">
                  Per month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-bold">${additionalRevenue.toLocaleString()}</div>
                <div className="text-sm text-foreground/60 mt-3 font-medium">
                  From improved performance
                </div>
              </CardContent>
            </Card>

            <Card className="glass-strong border-white/40 rounded-2xl animate-pulse-glow">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-gradient">Annual Impact</CardTitle>
                <CardDescription className="text-foreground/60 text-sm">
                  Total yearly value
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-bold">${(annualSavings + laborCostSavings).toLocaleString()}</div>
                <div className="text-sm text-emerald-400 mt-3 font-medium">
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
