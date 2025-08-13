import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Wrench, Brain, BookOpen } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "Java", level: "Advanced" },
        { name: "C", level: "Intermediate" },
        { name: "R", level: "Intermediate" },
        { name: "JavaScript/TypeScript", level: "Advanced" },
        { name: "SQL", level: "Intermediate" }
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: Wrench,
      color: "text-green-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      skills: [
        { name: "PyTorch", level: "Advanced" },
        { name: "TensorFlow", level: "Intermediate" },
        { name: "React/Next.js", level: "Advanced" },
        { name: "Flask", level: "Intermediate" },
        { name: "OpenCV", level: "Advanced" },
        { name: "YOLO", level: "Advanced" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "React Native", level: "Intermediate" },
        { name: "Supabase", level: "Advanced" },
        { name: "OpenAI Gymnasium", level: "Intermediate" },
        { name: "Stable Baselines", level: "Intermediate" }
      ]
    },
    {
      title: "Core Concepts",
      icon: Brain,
      color: "text-purple-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      skills: [
        { name: "Machine Learning", level: "Advanced" },
        { name: "Reinforcement Learning (PPO)", level: "Intermediate" },
        { name: "Self-Supervised Learning", level: "Intermediate" },
        { name: "Computer Vision", level: "Advanced" },
        { name: "Contrastive Learning", level: "Intermediate" },
        { name: "Financial Modeling", level: "Intermediate" },
        { name: "Data Structures & Algorithms", level: "Advanced" },
        { name: "Web Development", level: "Advanced" }
      ]
    },
    {
      title: "Coursework",
      icon: BookOpen,
      color: "text-orange-600",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      skills: [
        { name: "Problem Solving & OOP", level: "Completed" },
        { name: "Introduction to Java Programming", level: "Completed" },
        { name: "Multi-variate Calculus", level: "Completed" },
        { name: "Statistical Analysis of Python", level: "Completed" },
        { name: "Discrete Mathematics", level: "Completed" },
        { name: "C Programming", level: "Completed" },
        { name: "Data Structures & Algorithms", level: "In Progress" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      case "Intermediate":
        return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      case "Completed":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "In Progress":
        return "bg-purple-500/10 text-purple-600 border-purple-500/20";
      default:
        return "bg-gray-500/10 text-gray-600 border-gray-500/20";
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, from programming languages to cutting-edge AI/ML concepts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-effect border-border/50 hover:shadow-soft transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 ${category.bgColor} rounded-lg border ${category.borderColor}`}>
                    <category.icon className={`h-5 w-5 ${category.color}`} />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between p-3 rounded-lg bg-card/50 border border-border/30">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <Badge variant="outline" className={getLevelColor(skill.level)}>
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-12 text-center">
          <Card className="glass-effect border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">What I Bring to the Table</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Research Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    Hands-on experience in cutting-edge ML research, including protein structure prediction and reinforcement learning applications.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Full-Stack Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Proficient in building end-to-end applications from database design to user interface, with modern frameworks and best practices.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Real-World Impact</h4>
                  <p className="text-sm text-muted-foreground">
                    Track record of creating solutions that solve actual problems, from educational tools used in schools to award-winning hackathon projects.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};