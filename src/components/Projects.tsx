import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Trophy, Users, TrendingUp, Camera } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Syntaxless",
      subtitle: "Education Platform",
      period: "October 2024 - January 2025",
      description: "A revolutionary web IDE that translates plain-English instructions into executable JavaScript and Python code, making programming intuitive for beginners.",
      achievements: [
        "Accelerated student practice time by 30% on average",
        "Integrated into Santa Clara Unified School District curriculum",
        "Impacting over 150 children"
      ],
      technologies: ["Next.js", "Supabase", "Groq", "TypeScript", "AI/ML"],
      icon: Users,
      category: "Education",
      featured: true
    },
    {
      title: "Aristalkle",
      subtitle: "AI Debate Assistant",
      period: "February 2025",
      description: "An AI-powered debate assistant that generates lifelike, real-time spoken counterarguments using advanced AI models, creating a realistic talking-head debater.",
      achievements: [
        "Won 2nd place for Purdue Innovates prize at Boilermake Hackathon",
        "Rivals SORA's video generation speed",
        "Real-time intelligent speech responses"
      ],
      technologies: ["Python", "AI/ML", "Next.js", "Flask", "MongoDB", "Gemini API", "Sync.ai"],
      icon: Trophy,
      category: "AI/ML",
      featured: true
    },
    {
      title: "SPY Market Prediction Model",
      subtitle: "Financial ML Model",
      period: "November 2024 - Present",
      description: "An ensemble machine learning model combining LSTM, XGBoost, and Random Forest with a meta-model to forecast SPY directional movement.",
      achievements: [
        "11% average annual return over 10 years in backtesting",
        "Integrated multiple data sources and indicators",
        "Advanced ensemble methodology"
      ],
      technologies: ["Python", "LSTM", "XGBoost", "Random Forest", "Financial Modeling", "ML"],
      icon: TrendingUp,
      category: "Finance",
      featured: false
    },
    {
      title: "Mask Detection Robot",
      subtitle: "Computer Vision & Robotics",
      period: "January 2021 – October 2021",
      description: "A computer vision-powered robot using YOLO and Arduino to identify and collect discarded COVID-19 masks for environmental cleanup.",
      achievements: [
        "Successfully cleaned over 300 masks",
        "Deployed in local outdoor environments",
        "Showcased environmental cleanup automation"
      ],
      technologies: ["YOLO", "OpenCV", "Arduino", "Computer Vision", "Robotics"],
      icon: Camera,
      category: "Robotics",
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Education":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "AI/ML":
        return "bg-purple-500/10 text-purple-600 border-purple-500/20";
      case "Finance":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      case "Robotics":
        return "bg-orange-500/10 text-orange-600 border-orange-500/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my most impactful work spanning education, AI/ML, finance, and robotics.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card key={index} className="glass-effect border-border/50 hover:shadow-apple transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <project.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                          {project.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className={getCategoryColor(project.category)}>
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.period}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <Card key={index} className="glass-effect border-border/50 hover:shadow-soft transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <project.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className={getCategoryColor(project.category)}>
                      {project.category}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-1 text-xs">
                      <Github className="h-3 w-3" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1 text-xs">
                      <ExternalLink className="h-3 w-3" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
