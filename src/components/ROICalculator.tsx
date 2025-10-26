import { useState } from "react";
import { Calculator, TrendingUp, Users, DollarSign } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const ROICalculator = () => {
  const [numberOfPeople, setNumberOfPeople] = useState(5);
  const [hoursPerWorker, setHoursPerWorker] = useState(1);
  const [hourlySalary, setHourlySalary] = useState(200);

  // Calculate Lumina package cost based on number of people
  const getLuminaPackageCost = (people: number) => {
    if (people === 1) return 0; // Free for one person
    if (people <= 10) return 2200; // Regular package for 2-5 people
    return people * 400; // Enterprise pricing for 6+ people
  };
  const luminaPackageCost = getLuminaPackageCost(numberOfPeople);

  // Calculate current costs and improvements with Lumina Pulse
  const totalWeeklyHours = numberOfPeople * hoursPerWorker * 5; // Convert daily to weekly (5 work days)
  const totalMonthlyHours = totalWeeklyHours * 4; // Approximate monthly hours
  const currentWeeklyCost = totalWeeklyHours * hourlySalary;
  const currentMonthlyCost = currentWeeklyCost * 4;
  const currentAnnualCost = currentMonthlyCost * 12;
  
  // With Lumina Pulse: 75% time reduction
  const timeReductionPercent = 47;
  const hoursAfterImprovement = totalWeeklyHours * (1 - timeReductionPercent / 100);
  const newWeeklyCost = hoursAfterImprovement * hourlySalary;
  const weeklySavings = currentWeeklyCost - newWeeklyCost;
  const monthlySavings = weeklySavings * 4 - luminaPackageCost;
  const annualSavings = monthlySavings * 12;

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
              <Label htmlFor="people" className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                <Users className="w-4 h-4 text-cyan-400" />
                Number of Workers
              </Label>
              <Input
                id="people"
                type="number"
                value={numberOfPeople}
                min={1}
                onChange={(e) => setNumberOfPeople(Number(e.target.value))}
                className="glass border-white/30 text-white text-lg h-12 rounded-xl focus:border-cyan-400/50 transition-colors"
              />
            </div>
            <div className="space-y-3 group">
              <Label htmlFor="hours" className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                Hours per Worker/Day
              </Label>
              <Input
                id="hours"
                type="number"
                min={1}
                value={hoursPerWorker}
                onChange={(e) => setHoursPerWorker(Number(e.target.value))}
                className="glass border-white/30 text-white text-lg h-12 rounded-xl focus:border-purple-400/50 transition-colors"
              />
            </div>
            <div className="space-y-3 group">
              <Label htmlFor="salary" className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-orange-400" />
                Hourly Salary (DKK)
              </Label>
              <Input
                id="salary"
                type="number"
                min={0}
                value={hourlySalary}
                onChange={(e) => setHourlySalary(Number(e.target.value))}
                className="glass border-white/30 text-white text-lg h-12 rounded-xl focus:border-orange-400/50 transition-colors"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5 pt-6 relative z-10">
            <Card className="glass rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <CardHeader className="pb-3 relative z-10">
                <CardTitle className="text-xl font-bold text-gradient-alt">Current Monthly Cost</CardTitle>
                <CardDescription className="text-foreground/60 text-sm">
                  Total research team cost
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-5xl font-bold">{currentMonthlyCost.toLocaleString()} <span className="text-2xl">DKK</span> </div>
                <div className="text-sm text-cyan-400 mt-3 font-medium flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {totalMonthlyHours} hours total
                </div>
              </CardContent>
            </Card>

            <Card className="glass rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <CardHeader className="pb-3 relative z-10">
                <CardTitle className="text-xl font-bold text-gradient">Time Reduction*</CardTitle>
                <CardDescription className="text-foreground/60 text-sm">
                  With AI automation
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-5xl font-bold">{timeReductionPercent}%</div>
                <div className="text-sm text-purple-400 mt-3 font-medium flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  {(totalWeeklyHours - hoursAfterImprovement).toFixed(1)} hours saved/week
                </div>
              </CardContent>
            </Card>

            <Card className="glass rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <CardHeader className="pb-3 relative z-10">
                <CardTitle className="text-xl font-bold text-gradient">Lumina Package Cost</CardTitle>
                <CardDescription className="text-foreground/60 text-sm">
                  Monthly subscription
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-5xl font-bold">
                  {luminaPackageCost === 0 ? "FREE" : (
                    <>
                      {luminaPackageCost.toLocaleString()} <span className="text-2xl">DKK</span>
                    </>
                  )}
                </div>
                <div className="text-sm text-indigo-400 mt-3 font-medium flex items-center gap-1">
                  <DollarSign className="w-4 h-4" />
                  {numberOfPeople === 1 ? "Free tier" : numberOfPeople <= 10 ? "Regular plan" : "Enterprise plan"}
                </div>
              </CardContent>
            </Card>

            <Card className="glass rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <CardHeader className="pb-3 relative z-10">
                <CardTitle className="text-xl font-bold text-gradient-alt">Monthly Savings</CardTitle>
                <CardDescription className="text-foreground/60 text-sm">
                  Net cost reduction
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-5xl font-bold">{monthlySavings.toLocaleString()} <span className="text-2xl">DKK</span> </div>
                <div className="text-sm text-foreground/60 mt-3 font-medium flex items-center gap-1">
                  <DollarSign className="w-4 h-4" />
                  After Lumina cost
                </div>
              </CardContent>
            </Card>

            <Card className="glass-strong rounded-2xl animate-pulse-glow relative overflow-hidden group md:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-orange-500/10" />
              <CardHeader className="pb-3 relative z-10">
                <CardTitle className="text-xl font-bold text-gradient">Annual Impact</CardTitle>
                <CardDescription className="text-foreground/60 text-sm">
                  Total yearly savings
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-5xl font-bold">{annualSavings.toLocaleString()} <span className="text-2xl">DKK</span> </div>
                <div className="text-sm text-cyan-400 mt-3 font-medium flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  Net labor cost savings
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <p className="text-white/30 mt-4 ml-8 text-sm">*Based on pilot company case study Q1-Q3 2025</p>

      </div>
    </section>
  );
};

export default ROICalculator;
