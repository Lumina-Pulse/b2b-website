import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
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
    <section id="email-signup" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass-strong p-12 md:p-16 rounded-3xl text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 glow mb-4">
            <Mail className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Be the First to Know
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto font-light leading-relaxed">
            Join our early access list for exclusive updates on Lumina Pulse's development 
            and special launch pricing when we go live.
          </p>

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto pt-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="glass border-white/30 text-white placeholder:text-white/40 text-lg flex-1 h-14 rounded-xl px-6"
                disabled={isSubmitted}
              />
              <Button 
                type="submit"
                size="lg"
                disabled={isSubmitted}
                className="glass-strong glass-hover text-white font-semibold glow whitespace-nowrap h-14 px-8 rounded-xl"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    Subscribed!
                  </>
                ) : (
                  "Get Updates"
                )}
              </Button>
            </div>
          </form>

          <p className="text-sm text-foreground/40 pt-2">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;
