import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ROICalculator from "@/components/ROICalculator";
import EmailSignup from "@/components/EmailSignup";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <ROICalculator />
      <EmailSignup />
      <Footer />
    </main>
  );
};

export default Index;
