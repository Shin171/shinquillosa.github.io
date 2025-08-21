import { useState } from "react";
import { Home, Folder, Monitor, User, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
            Shin Portfolio
          </div>

          {/* Navigation with Icons */}
          <nav className="flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("index")}
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Home className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <User className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Folder className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollToSection("tech-stacks")}
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Monitor className="w-6 h-6" />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </button>
          </nav>

          {/* CV Button */}
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground animate-pulse-glow"
          >
            Download CV
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
