import { Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Lumina Pulse</span>
          </div>
          
          <div className="text-center md:text-left">
            <p className="text-foreground/70">
              © {currentYear} Lumina Pulse. All rights reserved.
            </p>
            <p className="text-sm text-foreground/50 mt-1">
              AI-Powered Marketing Intelligence Platform
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
