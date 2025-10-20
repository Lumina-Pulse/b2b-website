import { useState } from "react";
import { Mail, CheckCircle2, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const emailSchema = z.string().email("Please enter a valid email address");

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      emailSchema.parse(email);
      
      // Here you would typically send the email to your backend
      console.log("Email submitted:", email);
      
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "You're on the list! We'll keep you updated on our progress.",
      });
      
      setTimeout(() => {
        setEmail("");
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Invalid email",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    }
  };

  return (
    <section id="email-signup" className="py-24 px-4 relative">
      {/* Unique decorative elements */}
      <div className="absolute top-10 right-[10%] w-48 h-48 border-2 border-cyan-400/10 rounded-full" />
      <div className="absolute bottom-10 left-[10%] w-32 h-32 border-2 border-orange-400/10 rotate-45 rounded-2xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="glass-strong p-12 md:p-16 rounded-3xl text-center space-y-8 animate-fade-in relative overflow-hidden">
          {/* Unique corner accents */}
          <div className="absolute top-0 left-0 w-24 h-24">
            <div className="absolute top-0 left-0 w-12 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent" />
            <div className="absolute top-0 left-0 w-[2px] h-12 bg-gradient-to-b from-cyan-400 to-transparent" />
          </div>
          <div className="absolute bottom-0 right-0 w-24 h-24">
            <div className="absolute bottom-0 right-0 w-12 h-[2px] bg-gradient-to-l from-orange-400 to-transparent" />
            <div className="absolute bottom-0 right-0 w-[2px] h-12 bg-gradient-to-t from-orange-400 to-transparent" />
          </div>
          
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 via-purple-500 to-orange-500 glow mb-4 relative group">
            <Mail className="w-10 h-10 text-white relative z-10" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Be the First to Know
            </h2>
            <div className="absolute -top-4 right-[20%] w-20 h-20 bg-cyan-400/20 rounded-full blur-2xl" />
          </div>
          
          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto font-light leading-relaxed">
            Join our early access list for exclusive updates on Lumina Pulse's development 
            and special launch pricing when we go live.
          </p>

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto pt-4 relative">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1 group">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="glass border-white/30 text-white placeholder:text-white/40 text-lg flex-1 h-14 rounded-xl px-6 focus:border-cyan-400/50 transition-all"
                  disabled={isSubmitted}
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
              <Button 
                type="submit"
                size="lg"
                disabled={isSubmitted}
                className="glass-strong glass-hover text-white font-semibold glow whitespace-nowrap h-14 px-8 rounded-xl relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Get Updates
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
            </div>
          </form>

          <p className="text-sm text-foreground/40 pt-2 flex items-center justify-center gap-2">
            <div className="w-1 h-1 rounded-full bg-foreground/40" />
            We respect your privacy. Unsubscribe at any time.
            <div className="w-1 h-1 rounded-full bg-foreground/40" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;
