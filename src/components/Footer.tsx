import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-muted-foreground">
              Building modern web experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {['About', 'Portfolio', 'Tech Stacks', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase().replace(' ', '-'));
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-left text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;