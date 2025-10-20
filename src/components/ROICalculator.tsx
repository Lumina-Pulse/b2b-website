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
    <section id="roi-calculator" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
            <Calculator className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium">ROI Calculator</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Calculate Your <span className="text-gradient">Potential ROI</span>
          </h2>
          <p className="text-xl text-foreground/70">
            See how much Lumina Pulse could boost your marketing performance
          </p>
        </div>

        <div className="glass p-8 rounded-3xl space-y-8 animate-fade-in">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="spend" className="text-base">Monthly Marketing Spend ($)</Label>
              <Input
                id="spend"
                type="number"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="glass border-white/30 text-white text-lg"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="roi" className="text-base">Current ROI (%)</Label>
              <Input
                id="roi"
                type="number"
                value={currentROI}
                onChange={(e) => setCurrentROI(Number(e.target.value))}
                className="glass border-white/30 text-white text-lg"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time" className="text-base">Hours/Week on Analysis</Label>
              <Input
                id="time"
                type="number"
                value={timeSpent}
                onChange={(e) => setTimeSpent(Number(e.target.value))}
                className="glass border-white/30 text-white text-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 pt-4">
            <Card className="glass border-white/30">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient">Improved ROI</CardTitle>
                <CardDescription className="text-foreground/70">
                  With AI-powered insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">{improvedROI.toFixed(1)}%</div>
                <div className="text-sm text-green-400 mt-2">
                  +{(improvedROI - currentROI).toFixed(1)}% increase
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-white/30">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient">Time Saved</CardTitle>
                <CardDescription className="text-foreground/70">
                  Automated analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">{timeSaved.toFixed(1)} hrs/week</div>
                <div className="text-sm text-green-400 mt-2">
                  {((1 - timeSaved/timeSpent) * 100).toFixed(0)}% time reduction
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-white/30">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient">Additional Revenue</CardTitle>
                <CardDescription className="text-foreground/70">
                  Per month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">${additionalRevenue.toLocaleString()}</div>
                <div className="text-sm text-foreground/70 mt-2">
                  From improved performance
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-white/30 animate-pulse-glow">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient">Annual Impact</CardTitle>
                <CardDescription className="text-foreground/70">
                  Total yearly value
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">${(annualSavings + laborCostSavings).toLocaleString()}</div>
                <div className="text-sm text-green-400 mt-2">
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
