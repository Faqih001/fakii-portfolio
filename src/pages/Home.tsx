import { ArrowRight, Code, Database, Brain, Shield, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Home = () => {
  const skills = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "MERN Stack, Laravel, Next.js, React, Node.js",
      color: "text-primary"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "TensorFlow, Python, LSTM Models, Data Analytics",
      color: "text-accent"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "MongoDB, MySQL, Database Design, API Development",
      color: "text-primary-light"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "ITSM, Network Security, Vulnerability Assessment",
      color: "text-accent"
    }
  ];

  const featuredProjects = [
    {
      title: "AliXe FinTech Application",
      description: "Award-winning FinTech network application built with MERN stack featuring secure transactions and real-time analytics.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      award: "Best FinTech Innovation",
      link: "/projects"
    },
    {
      title: "KenyaEMR Integration",
      description: "Led deployment and integration of KenyaEMR for hospital systems in the USAID Digital Health Ecosystem Project.",
      technologies: ["APIs", "Web Services", "Jira", "Healthcare IT"],
      award: "Healthcare Impact",
      link: "/projects"
    },
    {
      title: "Guriflex Real Estate Platform",
      description: "Modern, responsive real estate website with property search, user dashboards, and secure payment integration.",
      technologies: ["Next.js", "Tailwind CSS", "MongoDB Atlas", "IntaSend"],
      award: "Client Excellence",
      link: "/projects"
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <Badge variant="secondary" className="inline-flex items-center space-x-2 px-4 py-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  <span>Available for New Opportunities</span>
                </Badge>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-background leading-tight">
                  <span className="block">Fakii</span>
                  <span className="block text-background/90">Mohammed</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-background/80 font-light max-w-2xl">
                  Innovative Full-Stack Developer & AI Enthusiast Driving Digital Transformation
                </p>
                
                <p className="text-lg text-background/70 max-w-2xl">
                  Based in Nakuru, Kenya • Specializing in FinTech, Healthcare IT, and AI Solutions
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" variant="secondary" className="group">
                  <Link to="/projects">
                    Explore My Work
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-background/10 border-background/30 text-background hover:bg-background hover:text-primary">
                  <Link to="/contact">
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </div>

            {/* Professional Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-glow to-accent rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-background/10 backdrop-blur-sm rounded-3xl p-8 border border-background/20">
                  <img
                    src="/lovable-uploads/bbbaf73d-05a0-421e-b604-c65ba14c4f25.png"
                    alt="Fakii Mohammed - Professional Portrait"
                    className="w-80 h-96 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="mb-4">About Me</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Passionate About Building Digital Solutions That Matter
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As a dedicated full-stack developer and AI enthusiast based in Nakuru, Kenya, I specialize in creating innovative digital solutions that drive real-world impact. My expertise spans across FinTech applications, healthcare IT systems, and cutting-edge AI implementations.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Current Focus</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Leading digital health ecosystem projects with USAID, transforming healthcare delivery through technology</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Developing AI-driven solutions for vaccine demand forecasting and healthcare optimization</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Building secure FinTech applications that enhance financial inclusion in Kenya</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <Button asChild variant="outline" className="group">
                  <Link to="/resume">
                    View Full Resume
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-6">
                <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-primary">3+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </Card>
                <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                </Card>
              </div>
              <div className="space-y-6 sm:mt-12">
                <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">Tech Stacks</div>
                  </div>
                </Card>
                <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-primary">2</div>
                    <div className="text-sm text-muted-foreground">Innovation Awards</div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Snapshot */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-4">Technical Expertise</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Skills & Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, scalable, and secure digital solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted/50 mb-4 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-300`}>
                    <skill.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    {skill.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-4">Portfolio Highlights</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover some of my most impactful work in FinTech, Healthcare IT, and Digital Innovation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      <Award className="h-3 w-3 mr-1" />
                      {project.award}
                    </Badge>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild variant="ghost" className="w-full group/btn">
                    <Link to={project.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="group">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to Build Something Amazing Together?
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              I'm always excited to collaborate on innovative projects that make a real difference. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link to="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/lab-challenges">
                  Explore Lab Challenges
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;