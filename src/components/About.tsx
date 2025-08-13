import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Heart, Trophy } from "lucide-react";

export const About = () => {
  const personalInfo = [
    {
      icon: GraduationCap,
      label: "Education",
      value: "Purdue University - BS Computer Science, Minor in Mathematics",
      detail: "Sophomore • GPA: 3.4 • Expected May 2027"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "West Lafayette, IN (Originally from San Jose, CA)"
    },
    {
      icon: Heart,
      label: "Passions",
      value: "Web Development, AI/ML, Mobile Apps, Robotics"
    },
    {
      icon: Trophy,
      label: "Achievements",
      value: "2nd Place at Boilermake Hackathon, 40+ Students Tutored"
    }
  ];

  const interests = [
    "Playing Chess ♛",
    "Performing Magic ✨",
    "Basketball 🏀",
    "Watching Sports 📺",
    "Drake & Michael Jackson 🎵"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate computer science student with a drive to create innovative 
            solutions that bridge technology and real-world impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Background</h3>
            <div className="grid gap-4">
              {personalInfo.map((info, index) => (
                <Card key={index} className="glass-effect border-border/50 hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{info.label}</h4>
                        <p className="text-muted-foreground mt-1">{info.value}</p>
                        {info.detail && (
                          <p className="text-sm text-muted-foreground/80 mt-2">{info.detail}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Story & Interests */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">My Story</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a sophomore at Purdue University studying Computer Science with a minor in Mathematics. 
                  Originally from San Jose, California, I've always been fascinated by the intersection of 
                  technology and real-world problem solving.
                </p>
                <p>
                  Currently, I'm conducting machine learning research at Kihara Labs, working on improving 
                  AlphaFold 2 predictions for protein structures. This research combines my passion for AI/ML 
                  with potential applications in healthcare and biotechnology.
                </p>
                <p>
                  Beyond academics, I've tutored over 40 students internationally and built projects that have 
                  impacted real communities, including educational tools integrated into school curricula and 
                  award-winning hackathon projects.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">When I'm Not Coding</h3>
              <Card className="glass-effect border-border/50">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {interests.map((interest, index) => (
                      <div
                        key={index}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-default"
                      >
                        {interest}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};