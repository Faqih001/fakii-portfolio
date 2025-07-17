import React from "react";
import { ExternalLink, Github, Code, Database, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AliXe FinTech Application",
      description: "A comprehensive FinTech network application that won the Best FinTech Innovation award. Built with the MERN stack, featuring secure transactions, user authentication, and real-time analytics.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "WebSocket"],
      features: [
        "User authentication & authorization",
        "Secure financial transactions",
        "Real-time analytics dashboard",
        "Payment gateway integration",
        "Transaction history tracking",
        "Mobile-responsive design"
      ],
      award: "Best FinTech Innovation Award",
      category: "FinTech",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 2,
      title: "KenyaEMR Deployment",
      description: "Led the integration and deployment of KenyaEMR for hospital systems as part of the USAID Digital Health Ecosystem Project, ensuring secure data exchange and system interoperability.",
      technologies: ["APIs", "Web Services", "Jira", "Python", "SQL", "Docker"],
      features: [
        "Hospital system integration",
        "Secure data exchange protocols",
        "API validation and testing",
        "User training programs",
        "Standard Operating Procedures",
        "Bug tracking and resolution"
      ],
      category: "Healthcare",
      icon: <Shield className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      title: "Guriflex Real Estate Website",
      description: "A modern, responsive real estate platform developed for Guriflex, featuring property search capabilities, user/admin dashboards, and secure payment integration.",
      technologies: ["Next.js", "Tailwind CSS", "MongoDB Atlas", "IntaSend", "TypeScript"],
      features: [
        "Advanced property search",
        "User dashboard & profiles",
        "Admin management panel",
        "Secure payment integration",
        "Property listing management",
        "Mobile-first responsive design"
      ],
      category: "Real Estate",
      duration: "June - August 2025",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600"
    }
  ];

  const categories = ["All", "FinTech", "Healthcare", "Real Estate"];

  // State for selected category
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");

  // Filtered projects based on selected category
  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            My Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions across FinTech, Healthcare IT, and Real Estate. 
            Each project demonstrates my commitment to building scalable, secure, and user-centric applications.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-scale-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={"hover-scale" + (selectedCategory === category ? " ring-2 ring-primary" : "")}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group hover-scale transition-all duration-300 shadow-card hover:shadow-glow border-0 bg-card/50 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color} text-white`}>
                    {project.icon}
                  </div>
                  <Badge variant="secondary" className="ml-2">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
                {project.award && (
                  <Badge variant="default" className="w-fit mt-2">
                    🏆 {project.award}
                  </Badge>
                )}
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Technologies */}
                <div>
                  <h4 className="font-medium text-sm mb-3 text-foreground">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-medium text-sm mb-3 text-foreground">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4">
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View Live
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <Card className="max-w-2xl mx-auto bg-gradient-primary text-primary-foreground border-0 shadow-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
              <p className="mb-6 opacity-90">
                I'm always excited to work on innovative projects and contribute to open-source initiatives.
                Let's build something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <Github className="w-4 h-4 mr-2" />
                  View GitHub Profile
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;