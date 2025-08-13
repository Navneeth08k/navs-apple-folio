import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "Kihara Labs – Purdue University",
      location: "West Lafayette, IN",
      period: "Aug 2024 – Present",
      type: "Research",
      description: [
        "Conducting ML research on improving AlphaFold 2 predictions for Beta-Amyloid protein structures using contrastive learning, PPO reinforcement learning, and self-supervised learning",
        "Leveraging PyTorch, BioPython, MD simulations, and AlphaFold 2 to build models that fold proteins based on surface accessibility and conformation accuracy",
        "Utilizing data from the Amyloid Atlas to identify misfolded structural patterns and improve prediction confidence"
      ],
      skills: ["PyTorch", "BioPython", "Reinforcement Learning", "Self-Supervised Learning", "AlphaFold 2"]
    },
    {
      title: "Computer Science Tutor",
      company: "A Step Ahead",
      location: "Remote",
      period: "Jan 2022 – Jun 2024",
      type: "Education",
      description: [
        "Tutored over 40 middle and high school students internationally in Python, Java, algorithms, and introductory CS concepts",
        "Designed and delivered interactive presentations on computer science fundamentals to underserved communities",
        "Developed personalized learning plans that improved student programming proficiency by an average of 40%"
      ],
      skills: ["Python", "Java", "Teaching", "Curriculum Development", "Mentoring"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Research":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "Education":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through research, education, and real-world application of computer science.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-effect border-border/50 hover:shadow-soft transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <Badge variant="outline" className={getTypeColor(exp.type)}>
                        {exp.type}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Technologies & Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="bg-primary/5 text-primary border-primary/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};