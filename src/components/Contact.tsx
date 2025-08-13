import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "navneeth.p.krishna@gmail.com",
      href: "mailto:navneeth.p.krishna@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(669) 216-8253",
      href: "tel:+16692168253"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "West Lafayette, IN",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "@Navneeth08k",
      href: "https://github.com/Navneeth08k",
      color: "hover:text-gray-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/navneethkrishna08/",
      href: "https://linkedin.com/in/navneethkrishna08/",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just chatting about technology and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glass-effect border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Get In Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-effect border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Find Me Online</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border/30 hover:shadow-soft transition-all duration-300 group"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-200">
                        <social.icon className={`h-5 w-5 text-primary ${social.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{social.label}</p>
                        <p className="text-sm text-muted-foreground">{social.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="space-y-8">
            <Card className="glass-effect border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">What I'm Looking For</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Research Opportunities</h4>
                    <p className="text-muted-foreground text-sm">
                      Passionate about AI/ML research, particularly in areas like computer vision, 
                      reinforcement learning, and applications in healthcare and finance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Software Development Roles</h4>
                    <p className="text-muted-foreground text-sm">
                      Interested in full-stack development, particularly roles that involve 
                      building impactful products and working with cutting-edge technologies.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Collaboration & Learning</h4>
                    <p className="text-muted-foreground text-sm">
                      Always eager to collaborate on interesting projects, participate in hackathons, 
                      and learn from experienced professionals in the field.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Ready to Connect?</h3>
                <p className="text-muted-foreground mb-6">
                  Whether you have an exciting opportunity, want to discuss a potential collaboration, 
                  or just want to chat about technology, I'd love to hear from you!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="gradient-apple shadow-apple hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                    onClick={() => window.open('mailto:navneeth.p.krishna@gmail.com', '_blank')}
                  >
                    <Send className="h-4 w-4" />
                    Send Email
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => window.open('https://linkedin.com/in/navneethkrishna08/', '_blank')}
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};