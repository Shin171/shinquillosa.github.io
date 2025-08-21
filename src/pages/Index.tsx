import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/sections/About";
import Portfolio from "@/components/sections/Portfolio";
import TechStacks from "@/components/sections/TechStacks";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div className=" animate-fade-up">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Daniel Rasheed Quillosa
                </span>
                <br />

                <br />
                {/* <span className="text-foreground">Full Stack Developer</span> */}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                <span className="text-foreground text-3xl">
                  Junior Software Engineer
                </span>
                <br />
                Creating modern, scalable web applications with cutting-edge
                technologies
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
              <button
                onClick={() =>
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                View My Work
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Portfolio />
      <TechStacks />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
