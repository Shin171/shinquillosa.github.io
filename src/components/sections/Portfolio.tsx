import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
      image: "🛒",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates and team features",
      image: "📋",
      tech: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with forecasts and interactive maps",
      image: "🌤️",
      tech: ["React", "API Integration", "Chart.js", "Tailwind"],
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with animations and responsive design",
      image: "💼",
      tech: ["React", "Tailwind", "Framer Motion", "Vite"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent animate-fade-up">
            My Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{project.image}</div>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-foreground">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;