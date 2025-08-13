import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-apple rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 gradient-apple rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="block text-gradient">Navneeth Krishna</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Computer Science Student & Machine Learning Researcher at{" "}
              <span className="text-primary font-semibold">Purdue University</span>
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about web development, AI/ML, mobile apps, and robotics. 
            Currently conducting ML research on protein structure prediction and building 
            innovative solutions that make technology more accessible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="gradient-apple shadow-apple hover:shadow-lg transition-all duration-300 px-8"
              onClick={() => scrollToSection("#projects")}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 hover:bg-secondary"
              onClick={() => scrollToSection("#contact")}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-4">
            <a
              href="https://github.com/Navneeth08k"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/navneethkrishna08/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:navneeth.p.krishna@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("#about")}
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};