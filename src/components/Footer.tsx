import { Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-4 mt-12 relative">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-purple-500 to-orange-500 flex items-center justify-center glow-sm relative overflow-hidden">
              <Sparkles className="w-6 h-6 text-white relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <span className="text-2xl font-bold">
              <span className="text-gradient-alt">Lumina</span> Pulse
            </span>
          </div>
          
          <div className="text-center md:text-right space-y-1">
            <p className="text-foreground/60 font-light flex items-center gap-2 justify-center md:justify-end">
              <div className="w-1 h-1 rounded-full bg-cyan-400" />
              © {currentYear} Lumina Pulse. All rights reserved.
              <div className="w-1 h-1 rounded-full bg-orange-400" />
            </p>
            <p className="text-sm text-foreground/40">
              Enterprise AI-Powered Marketing Intelligence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
