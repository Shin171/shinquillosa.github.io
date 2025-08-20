import { useState } from 'react';

const TechStacks = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const technologies = [
    { name: 'React', icon: '⚛️', category: 'Frontend', proficiency: 95 },
    { name: 'TypeScript', icon: '📘', category: 'Language', proficiency: 90 },
    { name: 'Node.js', icon: '🟢', category: 'Backend', proficiency: 85 },
    { name: 'Tailwind', icon: '🎨', category: 'CSS', proficiency: 92 },
    { name: 'MongoDB', icon: '🍃', category: 'Database', proficiency: 80 },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database', proficiency: 75 },
    { name: 'Docker', icon: '🐳', category: 'DevOps', proficiency: 70 },
    { name: 'AWS', icon: '☁️', category: 'Cloud', proficiency: 65 },
  ];

  const wheelRadius = 180;
  const centerX = 200;
  const centerY = 200;

  return (
    <section id="tech-stacks" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent animate-fade-up">
            Tech Stacks
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Animated Tech Wheel */}
          <div className="relative">
            <div className="w-[400px] h-[400px] relative animate-fade-up">
              {/* Center Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse-glow">
                <span className="text-2xl">⚡</span>
              </div>

              {/* Tech Icons in Circular Pattern */}
              {technologies.map((tech, index) => {
                const angle = (index * 360) / technologies.length;
                const radian = (angle * Math.PI) / 180;
                const x = centerX + wheelRadius * Math.cos(radian);
                const y = centerY + wheelRadius * Math.sin(radian);

                return (
                  <div
                    key={tech.name}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      animationDelay: `${index * 0.2}s`,
                    }}
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div 
                      className={`w-16 h-16 bg-gradient-card border-2 border-border rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-125 hover:border-primary ${
                        hoveredTech === tech.name ? 'animate-bounce-in' : ''
                      }`}
                    >
                      <span className="text-2xl">{tech.icon}</span>
                    </div>
                    
                    {hoveredTech === tech.name && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-card border border-border rounded-lg p-2 whitespace-nowrap animate-fade-in">
                        <div className="text-sm font-semibold text-foreground">{tech.name}</div>
                        <div className="text-xs text-muted-foreground">{tech.category}</div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Orbital Rings */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] border border-border/30 rounded-full animate-spin-slow"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] border border-border/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
            </div>
          </div>

          {/* Tech List with Proficiency */}
          <div className="space-y-6 animate-fade-up">
            <h3 className="text-2xl font-bold text-foreground mb-8">Proficiency Levels</h3>
            {technologies.map((tech, index) => (
              <div 
                key={tech.name}
                className="space-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{tech.icon}</span>
                    <span className="font-semibold text-foreground">{tech.name}</span>
                    <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                      {tech.category}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">{tech.proficiency}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${tech.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStacks;