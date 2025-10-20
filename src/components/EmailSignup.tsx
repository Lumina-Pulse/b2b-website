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
    <section id="email-signup" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="glass p-12 rounded-3xl text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 glow mb-4">
            <Mail className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Be the First to Know
          </h2>
          
          <p className="text-xl text-foreground/70">
            Join our early access list and get exclusive updates on Lumina Pulse's development, 
            plus special launch pricing when we go live.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto pt-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="glass border-white/30 text-white placeholder:text-white/50 text-lg flex-1"
                disabled={isSubmitted}
              />
              <Button 
                type="submit"
                size="lg"
                disabled={isSubmitted}
                className="glass glass-hover text-white border-white/30 glow whitespace-nowrap"
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

          <p className="text-sm text-foreground/50 pt-2">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;
