import { useState } from "react";
import {
  Code2,
  Paintbrush,
  Cloud,
  FileText,
  Server,
  Terminal,
  Grid3X3,
  Container,
  Database,
  Coffee,
  Music,
  Palette,
  Code,
  Atom,
} from "lucide-react";

const TechStacks = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const technologies = [
    { name: "React", Icon: Atom, category: "Frontend", proficiency: 95 },
    { name: "TypeScript", Icon: Code2, category: "Language", proficiency: 90 },
    { name: ".NET", Icon: Code, category: "Backend", proficiency: 85 },
    { name: "Azure", Icon: Cloud, category: "Cloud", proficiency: 88 },
    { name: "PHP", Icon: Code, category: "Backend", proficiency: 80 },
    { name: "Tailwind", Icon: Paintbrush, category: "CSS", proficiency: 92 },
    { name: "HTML", Icon: FileText, category: "Frontend", proficiency: 95 },
    { name: "CSS", Icon: Palette, category: "Frontend", proficiency: 90 },
    { name: "JavaScript", Icon: Code2, category: "Language", proficiency: 92 },
    { name: "Node.js", Icon: Server, category: "Backend", proficiency: 85 },
    { name: "Linux", Icon: Terminal, category: "OS", proficiency: 75 },
    { name: "Bootstrap", Icon: Grid3X3, category: "CSS", proficiency: 80 },
    { name: "Fedora", Icon: Terminal, category: "OS", proficiency: 70 },
    { name: "Docker", Icon: Container, category: "DevOps", proficiency: 78 },
    { name: "SQL", Icon: Database, category: "Database", proficiency: 85 },
    { name: "MySQL", Icon: Database, category: "Database", proficiency: 80 },
    {
      name: "PostgreSQL",
      Icon: Database,
      category: "Database",
      proficiency: 82,
    },
    { name: "Java", Icon: Coffee, category: "Language", proficiency: 75 },
    { name: "Python", Icon: Code2, category: "Language", proficiency: 80 },
    { name: "Remix", Icon: Music, category: "Framework", proficiency: 70 },
  ];

  const wheelRadius = 180;
  const centerX = 200;
  const centerY = 200;

  return (
    <section id="tech-stacks" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent animate-slide-up-fade">
            Tech Stacks
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up-fade"
            style={{ animationDelay: "0.2s" }}
          >
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-16">
          {/* Animated Tech Globe */}
          <div className="relative">
            <div
              className="w-[400px] h-[400px] relative animate-slide-up-fade"
              style={{ animationDelay: "0.4s" }}
            >
              {/* Center Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse-glow">
                <Code2 className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Tech Icons in Globe Pattern */}
              <div
                className="absolute inset-0 animate-rotate-globe "
                style={{ transformStyle: "preserve-3d" }}
              >
                {technologies.map((tech, index) => {
                  const angle = (index * 450) / technologies.length;
                  const radian = (angle * Math.PI) / 180;
                  const x = centerX + wheelRadius * Math.cos(radian);
                  const y = centerY + wheelRadius * Math.sin(radian);
                  const IconComponent = tech.Icon;

                  return (
                    <div
                      key={tech.name}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: `${x}px`,
                        top: `${y}px`,
                        animationDelay: `${index * 0.1}s`,
                      }}
                      onMouseEnter={() => setHoveredTech(tech.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                    >
                      <div
                        className={`w-16 h-16 bg-gradient-card border-2 border-brown-light/50 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-125 hover:border-brown-accent hover:bg-brown-dark/30 animate-slide-up-fade ${
                          hoveredTech === tech.name
                            ? "animate-bounce-in scale-125 border-brown-accent"
                            : ""
                        }`}
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <IconComponent className="w-6 h-6 text-brown-accent" />
                      </div>

                      {hoveredTech === tech.name && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-card border border-brown-light/30 rounded-lg p-3 whitespace-nowrap animate-fade-in shadow-lg">
                          <div className="text-sm font-semibold text-foreground">
                            {tech.name}
                          </div>
                          <div className="text-xs text-brown-accent">
                            {tech.category}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {tech.proficiency}% proficiency
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Orbital Rings */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] border border-brown-light/20 rounded-full animate-spin-slow"></div>
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] border border-brown-light/10 rounded-full animate-spin-slow"
                style={{ animationDirection: "reverse" }}
              ></div>
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] border border-brown-accent/20 rounded-full animate-spin-slow"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>

          {/* Tech List with Proficiency */}
          <div
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up-fade"
            style={{ animationDelay: "0.6s" }}
          >
            {Object.entries(
              technologies.reduce((acc, tech) => {
                if (!acc[tech.category]) {
                  acc[tech.category] = [];
                }
                acc[tech.category].push(tech);
                return acc;
              }, {} as Record<string, typeof technologies>)
            ).map(([category, techs]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {category}
                </h3>
                {techs.map((tech, index) => {
                  const IconComponent = tech.Icon;
                  return (
                    <div
                      key={tech.name}
                      className="space-y-3 animate-slide-up-fade p-4 rounded-lg bg-card/50 border border-brown-light/20 hover:border-brown-accent/50 transition-all duration-300 hover:bg-brown-dark/10"
                      style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-brown-dark/30 flex items-center justify-center">
                            <IconComponent className="w-4 h-4 text-brown-accent" />
                          </div>
                          <span className="font-semibold text-foreground">
                            {tech.name}
                          </span>
                        </div>
                        <span className="text-sm text-brown-accent font-medium">
                          {tech.proficiency}%
                        </span>
                      </div>
                      <div className="w-full bg-brown-dark/40 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-2 rounded-full transition-all duration-1500 ease-out bg-gradient-to-r from-brown-accent to-primary"
                          style={{
                            width: `${tech.proficiency}%`,
                            animationDelay: `${1 + index * 0.1}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStacks;
