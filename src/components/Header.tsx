import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['about', 'portfolio', 'tech-stacks', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 capitalize"
              >
                {item.replace('-', ' ')}
              </button>
            ))}
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground animate-pulse-glow"
            >
              Download CV
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {['about', 'portfolio', 'tech-stacks', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left text-foreground hover:text-primary transition-colors capitalize"
                >
                  {item.replace('-', ' ')}
                </button>
              ))}
              <Button variant="outline" className="self-start">
                Download CV
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;