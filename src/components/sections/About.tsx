import { Code, Coffee, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent animate-fade-up">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up">
            Passionate developer crafting digital experiences with modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <div className="relative animate-fade-up">
            <div className="w-full max-w-md mx-auto">
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-full bg-gradient-card border-4 border-primary/20 animate-pulse-glow flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center animate-bounce-in">
                  <Code className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8 animate-fade-up">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Hello! I'm a Full Stack Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With a passion for creating innovative web applications, I specialize in modern 
                technologies like React, TypeScript, and Node.js. I love turning complex problems 
                into simple, beautiful solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Skills Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Code className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Clean Code</h4>
                  <p className="text-sm text-muted-foreground">Writing maintainable, scalable code</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Lightbulb className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Innovation</h4>
                  <p className="text-sm text-muted-foreground">Creative problem solving</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Coffee className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Dedication</h4>
                  <p className="text-sm text-muted-foreground">Powered by coffee & passion</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;