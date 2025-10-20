import { Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-4 border-t border-white/10 mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center glow-sm">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">Lumina Pulse</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-foreground/60 font-light">
              © {currentYear} Lumina Pulse. All rights reserved.
            </p>
            <p className="text-sm text-foreground/40 mt-1">
              Enterprise AI-Powered Marketing Intelligence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
